(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();(function(n){typeof n.matches!="function"&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(i){for(var o=this,r=(o.document||o.ownerDocument).querySelectorAll(i),e=0;r[e]&&r[e]!==o;)++e;return Boolean(r[e])}),typeof n.closest!="function"&&(n.closest=function(i){for(var o=this;o&&o.nodeType===1;){if(o.matches(i))return o;o=o.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),i=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");n.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+t+'"]');c.classList.add("active"),i.classList.add("active")})}),o.forEach(function(r){r.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),i.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),i.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});function l(n){n.matches?document.getElementById("mySidenav").style.width="290px":document.getElementById("mySidenav").style.width="220px"}var s=window.matchMedia("(min-width: 768px)");l(s);s.addListener(l);
