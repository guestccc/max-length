"use strict";var e,n={innerText:"",innerHTML:""};module.exports=function(t){var i=t.dom,r=t.maxLength,a=function(t,r){var a=window.getSelection().getRangeAt(0),o=t.slice(0,r),d=n.innerHTML.trim()+o;e=document.createDocumentFragment(),i.innerHTML="",e.append(d),a.insertNode(e),a.collapse()};i.addEventListener("keydown",(function(e){e.target.innerText.length>=10&&8!==e.keyCode&&e.preventDefault()})),i.addEventListener("paste",(function(e){if(!("ActiveXObject"in window)){n.innerHTML=i.innerHTML,n.innerText=i.innerText.replace(/\r|\n|(\r\n)/g,"");var t=r-n.innerText.length,o=e.clipboardData,d="";t<(d=null==o?window.clipboardData&&window.clipboardData.getData("text"):o.getData("text/plain")).length&&(e.preventDefault(),a(d,t))}})),i.addEventListener("compositionstart",(function(e){n.innerHTML=i.innerHTML,n.innerText=i.innerText.replace(/\r|\n|(\r\n)/g,"")})),i.addEventListener("compositionend",(function(e){var t=r-n.innerText.length;t<e.data.length&&a(e.data,t)}))};
