<script>
  import { firebaseApp } from '../../firebase.js';
 import {getFirestore, doc,collection,getDoc,setDoc,addDoc} from 'firebase/firestore/lite';
    import { onMount } from 'svelte';
    import { getUrl,groupUrl,setUrl,setName} from '../components/groupStore.js';
   
    let nom = '';
    let groupid;
    async function create(){
      const db = getFirestore(firebaseApp)
      const groupRef = doc(db,'group',setUrl())
      await setDoc(groupRef, {user : nom}, { merge: true });
       setName(nom)

      console.log("redirect")
      window.location.href = `/chat?id=${groupid}&name=${nom}`
    }

    onMount(() => {
        // ici on va attendre le chargement des élements de la page avant d'afficher l'url du groupe
      groupid =  setUrl()
    })
</script>
    
    <div class="row">
      <h2> Group :</h2>
      <h3>#{groupid}</h3>
      <form on:submit|preventDefault={create}>
        <input type="text" id="name" name="name" bind:value={nom} placeholder="Entrez votre Prénom" />
      </form>
    </div>
    