parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZpSi":[function(require,module,exports) {
var e,t=document.querySelector(".nav-bar"),s=document.querySelector(".nav-bar__menu-button"),a=document.querySelector(".nav-bar__categories"),o=document.querySelector("main");s.addEventListener("click",function(s){console.log(e),t.classList.contains("open")?(e="".concat(a.offsetHeight,"px"),t.classList.remove("open"),t.classList.add("closed"),a.style.height="854px",a.setAttribute("aria-hidden","true"),this.setAttribute("aria-expanded","false")):(t.classList.remove("closed"),t.classList.add("open"),o.classList.remove("open"),o.classList.add("closed"),a.setAttribute("aria-hidden","false"),this.setAttribute("aria-expanded","true"))}),a.ontransitionend=function(e){e.target===a&&t.classList.contains("closed")&&(console.log(e.target),o.classList.remove("closed"),o.classList.add("open"),a.style.height="0px")};
},{}],"DJ3k":[function(require,module,exports) {
"use strict";var e=r(require("./nav-bar.js"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./nav-bar.js":"ZpSi"}]},{},["DJ3k"], null)
//# sourceMappingURL=/site.6813b068.js.map