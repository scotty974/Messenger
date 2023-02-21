export let groupUrl
export let groupid;
export let userName;

import {get, writable} from 'svelte/store'
import { page } from '$app/stores';

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
    // on recupére le groupUrl pour la renvoyer
    groupUrl = url
    console.log(groupUrl)
    return groupUrl;
}

export function getid(){
  console.log(get(page).url.searchParams)

// Extraire l'ID du groupe de l'URL (en supposant que l'ID est le dernier élément de l'URL)
const url =new URLSearchParams(get(page).url.searchParams)
const groupId = url.get('id')

// Stocker l'ID dans le store Svelte
groupid = groupId;
getUrl(groupid);
  console.log(groupId)
return groupid;
}




export function setName(name){
  userName = name
  console.log("set username",userName) 
}

export function getName(){
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