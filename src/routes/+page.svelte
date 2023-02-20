<script>
import {firebaseApp} from '../firebase.js'
import {getFirestore, collection,addDoc} from 'firebase/firestore/lite'
import {getUrl} from '../routes/components/groupStore.js'
  

let groupUrl;

        async function createGroup(){
            const db = getFirestore(firebaseApp);

            const groupRef = collection(db,"group");
            const docRef = await addDoc(groupRef,{})
            groupUrl = docRef.id;
            getUrl(groupUrl);
            window.location.href = `/group?id=${groupUrl}`
        }
       
        

</script>




<div class="row">
    <h1>Space Messenger</h1>
    <button id="create" on:click={createGroup} >Create Group</button>
</div>