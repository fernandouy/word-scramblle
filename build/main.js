(()=>{"use strict";var e={192:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(81),o=r.n(n),a=r(645),i=r.n(a),s=r(667),c=r.n(s),l=new URL(r(461),r.b),u=i()(o());u.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap);"]);var d=c()(l);u.push([e.id,`body{font-family:"Outfit",sans-serif;background:url(${d});background-size:cover;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}main{background:linear-gradient(135deg, #030616 20%, #232632 100%);width:600px;border-radius:1rem;padding:2rem;flex-direction:column;color:#f2f5f9;display:flex;align-items:center}main .logo{display:block;margin:0 auto}main .word{display:flex;justify-content:center;width:100%;color:#97a3b6;background-color:#4a5567;margin:2rem 0;border-radius:.5rem;box-shadow:0 .4rem #000}main .word h2{letter-spacing:1.5rem;font-weight:600;font-size:32px}main .tries-mistakes{display:flex;width:80%;justify-content:space-between}main .tries-mistakes p{color:#4b5668;font-size:1rem}main .tries-mistakes p span{font-weight:900;font-size:1.2rem;color:#97a3b6}main .characters{display:grid;grid-auto-flow:column;gap:1rem;margin:4rem 0}main .characters input{width:50px;height:50px;border:solid 2px #4b5668;border-radius:.5rem;margin:0 auto;font-size:32px;text-align:center;outline:none;background-color:rgba(0,0,0,0);color:#f2f5f9}main .characters .correct{border:2px solid #37f263}main .characters .incorrect{border:2px solid #f23737}main .buttons{display:flex;justify-content:space-around;width:100%}main .buttons button{width:8rem;color:#f2f5f9;background-color:#c951e7;padding:.5rem 1rem;border-radius:.5rem;border:solid 2px #c951e7;box-shadow:0 .3rem #672171;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s}main .buttons button:active{box-shadow:none;transform:translateY(0.3rem)}`,""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=r(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},461:(e,t,r)=>{e.exports=r.p+"d5932e5ddd73e661a017.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),i=r.n(a),s=r(565),c=r.n(s),l=r(216),u=r.n(l),d=r(589),p=r.n(d),f=r(192),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=[],g=["flower","tree","dog","cat","house","level","mask","common","avoid","cotton"];document.addEventListener("DOMContentLoaded",(()=>{const e=v(),t=y(e);b(t),x(e),w(e)}));const v=()=>g[Math.floor(Math.random()*g.length)],b=e=>{document.querySelector(".word h2").textContent=e},y=e=>e.split("").sort((()=>Math.random()-.5)).join(""),x=e=>{const t=document.querySelector(".characters");e.split("").forEach((e=>{const r=document.createElement("input");r.type="text",r.maxLength=1,r.classList.add("character-input"),t.appendChild(r)}))},w=e=>{document.querySelector("#mistakes"),document.querySelectorAll(".character-input").forEach(((t,r)=>{t.addEventListener("keyup",(n=>{const o="Backspace"===n.key,a="ArrowLeft"===n.key,i="ArrowRight"===n.key,s=n.key.length,c=n.key===e[r];if(o&&t.previousElementSibling)return t.previousElementSibling.focus(),t.previousElementSibling.value="",t.previousElementSibling.classList.remove("correct"),void t.previousElementSibling.classList.remove("incorrect");a||i||s&&(c?(t.classList.add("correct"),t.classList.remove("incorrect"),t.nextElementSibling?.focus()):(t.classList.add("incorrect"),t.classList.remove("correct"),h.length<5?h.push(n.key):console.log("You already made 5 mistakes"),document.querySelector("#mistakes").textContent=`${h.join(", ")}`,t.value="",t.focus()))}))}))}})()})();