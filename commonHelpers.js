import{A as l}from"./assets/vendor-c6ca0da5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelector(".faq-list"),a=n.querySelectorAll(".faq-item");new l(n,{duration:400,showOne:!0,showMultiple:!1,onToggle:function(r){const i=r.target.closest(".questions").parentNode;a.forEach(e=>e.classList.remove("is-active")),i.classList.toggle("is-active");const s=i.previousElementSibling;s&&(console.log(s),s.style.borderBottom=i.classList.contains("is-active")?"none":"")}});document.querySelectorAll(".faq-item .btn-answear").forEach(function(r){r.addEventListener("click",function(){var o=r.closest(".faq-item");o.classList.toggle("is-active")})});
//# sourceMappingURL=commonHelpers.js.map
