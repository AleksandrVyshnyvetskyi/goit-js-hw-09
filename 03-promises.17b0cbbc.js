!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");e(r).Notify.init({fontSize:"24px",width:"400px",borderRadius:"40px"});var u=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function l(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(a.value),o=Number(c.value),i=Number(d.value),u=1;u<=i;u++)l(u,t).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms. Can you do it faster?"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms. \n      I can't make it faster"))})),t+=o}))}();
//# sourceMappingURL=03-promises.17b0cbbc.js.map
