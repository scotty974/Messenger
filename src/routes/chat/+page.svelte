<script>
    import { firebaseApp } from '../../firebase.js';
    import {getFirestore, doc,collection,setDoc,getDocs, addDoc, orderBy, query,onSnapshot,where } from 'firebase/firestore';
  
    import { getUrl, setUrl,getid,getName} from '../components/groupStore.js';
    import { onMount } from "svelte";
    let groupUrl = setUrl();
    let groupid = getid()
    let name = getName()
    let message = '';
    let messageList = [];
    console.log("name", name)
   
    async function adMessage(){
        const docData = {
        user : name,
        message :message,
        date : new Date()
        }
        const db = getFirestore(firebaseApp);
        const messageRef = collection(db,"group",groupid,'messages' )
        const messagId =  await addDoc(messageRef,docData)
       return messagId
    }

    onMount(()=>{
        const db = getFirestore(firebaseApp);
        const groupRef = collection(db,'group',groupid,"message")
        const q = query(groupRef,orderBy("date","asc"))
        onSnapshot(q,fetchMessage)
    })
    async function fetchMessage(){
        const db = getFirestore(firebaseApp);
        const messageCol = query(collection(db,'group',groupid,"messages"));
        const docGet = await getDocs(messageCol)
        messageList = [];
        messageList = docGet.docs.map((message)=>message.data())
        return messageList
    }
</script>

<h4>Share this : http://localhost:5173/group?id={groupid}</h4>
    <div class="window">
        {#each messageList as message }
        {#if name = message.user}
        <div class="myMessage">
            <div class="message">
                <h4>{message.user}</h4>
                <p>{message.message}</p>
            </div>
        </div>
        {/if}
      {:else}
        <div class="userMessage">
            <div class="usersMessage">
                <h4>{message.user}</h4>
                <p>{message.message}</p>
            </div>
        </div>
        {/each}
  
    
    </div>
        
            <form class="chat" on:submit|preventDefault={adMessage}>
            <input placeholder="your message" bind:value={message} type="text" name="message" id="message" />
            <button type="submit"  >Send</button>
        </form>