"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[27051],{495036:(e,t,n)=>{n.r(t);n.d(t,{getSelectionText:()=>f,contextMenuCallbackNative:()=>b,contextMenuCallbackWeb:()=>p});var r=n(785893),l=(n(667294),n(971402));function u(e,t,n,r,l,u,o){try{var i=e[u](o),c=i.value}catch(e){n(e);return}i.done?t(c):Promise.resolve(c).then(r,l)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var o=e.apply(t,n);function i(e){u(o,r,l,i,c,"next",e)}function c(e){u(o,r,l,i,c,"throw",e)}i(void 0)}))}}function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}
return e}function a(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}var s=function(e,t){var n,r,l,u,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(l=2&u[0]?r.return:u[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,u[1])).done)return l;(r=0,l)&&(u=[2&u[0],l.value]);switch(u[0]){case 0:case 1:l=u;break
;case 4:o.label++;return{value:u[1],done:!1};case 5:o.label++;r=u[1];u=[0];continue;case 7:u=o.ops.pop();o.trys.pop();continue;default:if(!(l=o.trys,l=l.length>0&&l[l.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!l||u[1]>l[0]&&u[1]<l[3])){o.label=u[1];break}if(6===u[0]&&o.label<l[1]){o.label=l[1];l=u;break}if(l&&o.label<l[2]){o.label=l[2];o.ops.push(u);break}l[2]&&o.ops.pop();o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e];r=0}finally{n=l=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};function f(){var e;if(null!=window.getSelection){var t;e=null===(t=window.getSelection())||void 0===t?void 0:t.toString()}else null!=document.selection&&"Control"!==document.selection.type&&(e=document.selection.createRange().text);return null!=e?e:""}function b(e){var t=f(),u=e.target;if("TEXTAREA"===(null==u?void 0:u.tagName)||"INPUT"===(null==u?void 0:u.tagName)){if("checkbox"!==(null==u?void 0:u.type))return(0,l.jW)(e,o((function(){var e,l
;return s(this,(function(u){switch(u.label){case 0:return[4,n.e(38525).then(n.bind(n,638525))];case 1:e=u.sent(),l=e.default;return[2,function(e){return(0,r.jsx)(l,a(c({},e),{text:t}))}]}}))})),{enableSpellCheck:!0})}else{if("none"===window.getComputedStyle(u).getPropertyValue("-webkit-user-select")){e.preventDefault();return}for(var i,b,p,d=e.target;null!=d;){"src"in d&&null!=d.src&&(b=d.src);if("href"in d&&null!=d.href){i=d.href;p=d.textContent}d=null==d?void 0:d.parentNode}if(null!=b)return(0,l.jW)(e,o((function(){var e,t;return s(this,(function(l){switch(l.label){case 0:return[4,n.e(37452).then(n.bind(n,937452))];case 1:e=l.sent(),t=e.default;return[2,function(e){return(0,r.jsx)(t,a(c({},e),{src:null!=b?b:""}))}]}}))})));if(null!=i)return(0,l.jW)(e,o((function(){var e,t;return s(this,(function(l){switch(l.label){case 0:return[4,n.e(59725).then(n.bind(n,759725))];case 1:e=l.sent(),t=e.default;return[2,function(e){return(0,r.jsx)(t,a(c({},e),{href:i,textContent:p}))}]}}))})))
;if(null!=t&&""!==t)return(0,l.jW)(e,o((function(){var e,l;return s(this,(function(u){switch(u.label){case 0:return[4,n.e(60240).then(n.bind(n,60240))];case 1:e=u.sent(),l=e.default;return[2,function(e){return(0,r.jsx)(l,a(c({},e),{text:t}))}]}}))})))}e.preventDefault();return null}function p(e){var t=!1,n=e.target;if("INPUT"===(null==n?void 0:n.tagName)||"TEXTAREA"===(null==n?void 0:n.tagName))t=!0;else if(null!=(null==n?void 0:n.closest)&&null!=(null==n?void 0:n.closest("[contenteditable=true]")))t=!0;else if(null!=f()&&""!==f())t=!0;else{for(var r,l,u=e.target;null!=u;){"src"in u&&null!=u.src&&(l=u.src);"href"in u&&null!=u.href&&(r=u.href);u=null==u?void 0:u.parentNode}null==r&&null==l||(t=!0)}t||e.preventDefault()}}}]);
//# sourceMappingURL=fa6487b4603cbfe7b088.js.map