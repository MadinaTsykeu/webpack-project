!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c,i=document.body,l=i.querySelector(".services__btn"),a=i.querySelector(".services__descr-further"),u=i.querySelector(".services__descr-end"),s=i.querySelector(".services__arrow"),d=i.querySelector(".services__read"),f=i.querySelector(".wrapper__modal-call");l.addEventListener("click",(function(){a.classList.toggle("services__descr-further--active"),u.classList.toggle("services__descr-end--active"),s.classList.toggle("rotate"),d.textContent="Читать далее"===d.textContent?"Скрыть":"Читать далее"}));var y=window.matchMedia("(max-width: 768px)"),p=i.querySelector(".swiper"),_=function(){if(y.matches)c=new Swiper(".swiper",{direction:"horizontal",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}});else if(p.classList.contains("swiper-initialized")){var e,t=n(c);try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(e){t.e(e)}finally{t.f()}}};_(),y.addEventListener("change",_);var v=i.querySelector(".brands"),b=v.querySelector(".swiper-wrapper"),m=v.querySelector(".button__show-more"),S=m.querySelector(".text"),g=m.querySelector(".brands__arrow"),h=v.querySelectorAll(".swiper-slide--hidden"),q=i.querySelector(".technic"),w=q.querySelector(".technic__swiper-wrapper"),L=q.querySelector(".button__show-more"),k=L.querySelector(".text"),E=L.querySelector(".technic__arrow"),x=q.querySelectorAll(".technic__slide--hidden"),j=function(e,t,r,n,o){t.forEach((function(t){return t.classList.toggle(e)}));var c="Показать все"===r.textContent;r.textContent=c?"Скрыть":"Показать все",n.style.transform=c?"rotate(180deg)":"rotate(360deg)",o.classList.toggle("swiper-indent",c)};m.addEventListener("click",(function(){return j("swiper-slide--hidden",h,S,g,b)})),L.addEventListener("click",(function(){return j("technic__slide--hidden",x,k,E,w)}));var A=i.querySelector(".header__burger"),O=i.querySelector(".menu-block"),M=O.querySelector(".header-menu"),C=M.querySelector(".header-menu__btn-close"),P=function(){var e=O.classList.toggle("menu-block--active");M.classList.toggle("header-menu--active",e)};O.addEventListener("click",(function(e){e.target===O&&P()})),A.addEventListener("click",P),C.addEventListener("click",P);var I=i.querySelectorAll(".button-call"),T=i.querySelector(".wrapper__modal-call"),z=T.querySelector(".modal-call__btn-close"),B=i.querySelectorAll(".button-message"),U=i.querySelector(".wrapper__modal-feedback"),$=U.querySelector(".modal-feedback__btn-close"),D=function(e,t,r,n){e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add(n)}))}));var o=function(){t.classList.remove(n)};r.addEventListener("click",o),t.addEventListener("click",(function(e){e.target===t&&o()}))};D(I,T,z,"wrapper__modal-call--open"),D(B,U,$,"wrapper__modal-feedback--open");var F=U.querySelector(".modal-feedback"),G=i.querySelector(".modal-call__input"),H=i.querySelector(".modal-feedback__input"),J=function(e){return function(){return e.focus()}};f.addEventListener("transitionstart",J(G)),F.addEventListener("transitionstart",J(H));var K=document.querySelector(".menu-block");document.querySelector(".header-menu__btn-close").addEventListener("click",(function(){K.classList.toggle("menu-block--active")}))},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map