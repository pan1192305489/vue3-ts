import{r as F,s as L,w as R,g as W,f as I,h as f,u as w,i as T}from"./@vue.60f1aaec.js";var x=Object.defineProperty,z=Object.defineProperties,C=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))N.call(t,n)&&$(e,n,t[n]);if(P)for(var n of P(t))V.call(t,n)&&$(e,n,t[n]);return e},B=(e,t)=>z(e,C(t));function X(e,t){var n;const r=L();return R(()=>{r.value=e()},B(A({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),F(r)}function g(e){return W()?(I(e),!0):!1}const m=typeof window!="undefined",Y=e=>typeof e=="boolean",Z=e=>typeof e=="number",K=e=>typeof e=="string",h=()=>{};function q(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function G(e,t=!0,n=!0){let r=0,o,s=!n;const a=()=>{o&&(clearTimeout(o),o=void 0)};return l=>{const i=w(e),c=Date.now()-r;if(a(),i<=0)return r=Date.now(),l();c>i&&(r=Date.now(),s?s=!1:l()),t&&(o=setTimeout(()=>{r=Date.now(),n||(s=!0),a(),l()},i)),!n&&!o&&(o=setTimeout(()=>s=!0,i))}}function k(e,t=200,n=!0,r=!0){return q(G(t,n,r),e)}function ee(e,t,n={}){const{immediate:r=!0}=n,o=f(!1);let s=null;function a(){s&&(clearTimeout(s),s=null)}function u(){o.value=!1,a()}function l(...i){a(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...i)},w(t))}return r&&(o.value=!0,m&&l()),g(u),{isPending:o,start:l,stop:u}}function v(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const _=m?window:void 0,H=m?window.document:void 0;function d(...e){let t,n,r,o;if(K(e[0])?([n,r,o]=e,t=_):[t,n,r,o]=e,!t)return h;let s=h;const a=T(()=>w(t),l=>{s(),l&&(l.addEventListener(n,r,o),s=()=>{l.removeEventListener(n,r,o),s=h})},{immediate:!0,flush:"post"}),u=()=>{a(),s()};return g(u),u}function te(e,t,n={}){const{window:r=_,ignore:o}=n;if(!r)return;const s=f(!0),u=[d(r,"click",i=>{const c=v(e),p=i.composedPath();!c||c===i.target||p.includes(c)||!s.value||o&&o.length>0&&o.some(j=>{const b=v(j);return b&&(i.target===b||p.includes(b))})||t(i)},{passive:!0,capture:!0}),d(r,"pointerdown",i=>{const c=v(e);s.value=!!c&&!i.composedPath().includes(c)},{passive:!0})];return()=>u.forEach(i=>i())}const y=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},O="__vueuse_ssr_handlers__";y[O]=y[O]||{};y[O];function ne({document:e=H}={}){if(!e)return f("visible");const t=f(e.visibilityState);return d(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var E=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,Q=(e,t)=>{var n={};for(var r in e)J.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&E)for(var r of E(e))t.indexOf(r)<0&&M.call(e,r)&&(n[r]=e[r]);return n};function re(e,t,n={}){const r=n,{window:o=_}=r,s=Q(r,["window"]);let a;const u=o&&"ResizeObserver"in o,l=()=>{a&&(a.disconnect(),a=void 0)},i=T(()=>v(e),p=>{l(),u&&o&&p&&(a=new ResizeObserver(t),a.observe(p,s))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return g(c),{isSupported:u,stop:c}}var S,D;m&&(window==null?void 0:window.navigator)&&((S=window==null?void 0:window.navigator)==null?void 0:S.platform)&&/iP(ad|hone|od)/.test((D=window==null?void 0:window.navigator)==null?void 0:D.platform);function oe({window:e=_}={}){if(!e)return f(!1);const t=f(e.document.hasFocus());return d(e,"blur",()=>{t.value=!1}),d(e,"focus",()=>{t.value=!0}),t}export{Z as a,Y as b,re as c,ee as d,k as e,ne as f,oe as g,X as h,m as i,te as o,g as t,d as u};