<script>
    import { onMount } from 'svelte';
    import { getUrl,groupUrl,setUrl } from '../components/groupStore.js';



    onMount(() => {
        // ici on va attendre le chargement des élements de la page avant d'afficher l'url du groupe
      setUrl()
    })
</script>
    
    <div class="row">
      <h2>{setUrl()}</h2>
      <form>
        <input type="text" id="name" name="name" placeholder="Entrez votre Prénom" />
      </form>
    </div>
    