export let groupUrl


export function setUrl(){
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Extraire l'ID du groupe de l'URL (en supposant que l'ID est le dernier élément de l'URL)
  const urlParts = currentUrl.split("=");
  const groupId = urlParts[urlParts.length - 1];

  // Stocker l'ID dans le store Svelte
  groupUrl = groupId;
  getUrl(groupUrl);
    console.log(groupId)
  return groupUrl;
}

export  function getUrl(url){
    groupUrl = url
    console.log(groupUrl)
    return groupUrl;
}