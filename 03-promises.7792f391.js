var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire7bc7=n);var o=n("iQIUW");const i=document.querySelector("form.form"),l=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');function a(e,r){return new Promise(((t,n)=>{const o=Math.random()>.3;setTimeout((()=>{o?t({promiseAlert:`Fullfilled promise ${e} in ${r}ms.`}):n({promiseAlert:`Rejected promise ${e} in ${r}ms.`})}),r)}))}i.addEventListener("submit",(function(e){e.preventDefault();let r=Number(l.value);for(let e=1;e<=s.value;e++)a(e,r).then((({promiseAlert:e})=>{o.Notify.success(e)})).catch((({promiseAlert:e})=>{o.Notify.failure(e)})),r+=Number(u.value)}));
//# sourceMappingURL=03-promises.7792f391.js.map
