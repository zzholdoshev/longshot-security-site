/* Language navigation and static localized UI copy. No third-party translation requests. */
(() => {
 let copy={};try{copy=JSON.parse(document.body.dataset.uiCopy||'{}');}catch{}
 globalThis.LongshotSiteLanguage=Object.freeze({text:value=>copy[value]||value});
 const select=document.getElementById('site-language');if(!select)return;
 select.value=document.documentElement.lang||'en';
 select.addEventListener('change',()=>{const lang=select.value,base=document.documentElement.dataset.siteBase||'/longshot-security-site/',page=document.documentElement.dataset.sitePage||'index.html';const target=new URL(base+(lang==='en'?'':lang+'/')+page,location.origin);target.hash=location.hash;location.assign(target.href);});
})();
