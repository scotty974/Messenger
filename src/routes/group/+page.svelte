<script>
    import { onMount } from 'svelte';
    import { getUrl,groupUrl,setUrl } from '../components/groupStore.js';



    onMount(() => {
      setUrl()
    })
</script>
    
    <div class="row">
      <h2>{setUrl()}</h2>
      <form>
        <input type="text" id="name" name="name" placeholder="Entrez votre Prénom" />
      </form>
    </div>
    