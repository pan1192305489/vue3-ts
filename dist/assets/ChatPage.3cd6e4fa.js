import{d as E,e as k,P as m}from"./element-plus.8f542e47.js";import{W as M}from"./wangeditor.b34533ca.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import{d as h,h as c,Y as R,z as w,A as C,I as b,o as v,c as y,a as l,u as g,e as _,R as B,a0 as T}from"./@vue.60f1aaec.js";import{m as V}from"./index.9eccfdba.js";import"./@vueuse.e3ce8cae.js";import"./dayjs.7f6a9561.js";import"./axios.765908e4.js";import"./lodash-es.b0ae9094.js";import"./@element-plus.35a825cf.js";import"./@ctrl.2e36ce53.js";import"./async-validator.5d25c98b.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.9a219a59.js";/* empty css                      */import"./pinia.b7f25bf1.js";import"./vue-router.98095b2a.js";const A={class:"myEditor"},D=["innerHTML"],H=h({setup(u,{expose:s}){var i;const e=c(),o=R({html:"",text:""});let t;w(()=>{t=new M(e.value),Object.assign(t.config,{onchange(){r()}}),t.config.menuTooltipPosition="down",t.config.showFullScreen=!0,t.create(),window.onresize=()=>{a()}}),C(()=>{t.destroy(),t=null});const r=()=>{o.html=t.txt.html()},n=c();(i=n.value)==null||i.setAttribute;function a(){const[d,p]=e.value.children,x=n.value.offsetHeight-d.offsetHeight;p.style.height=x+"px"}return b(()=>{a()}),s({content:o}),(d,p)=>(v(),y("div",A,[l("div",{ref_key:"editorRef",ref:e,class:"editor"},null,512),l("div",{innerHTML:g(o).html,class:"content",ref_key:"contentRef",ref:n},null,8,D)]))}});var I=f(H,[["__scopeId","data-v-2293f41e"]]);function P(u){return V.post({url:"/story",data:u})}const z={class:"chat"},L={class:"header"},N=T("\u53D1\u5E03\u6587\u7AE0"),$={class:"content"},F=h({setup(u){const s=c(),e=c(),o=()=>{P({title:e.value,content:s.value.content.html}).then(t=>{m({message:"\u53D1\u5E03\u6210\u529F",type:"success"})}).catch(()=>{m.error("\u53D1\u5E03\u5931\u8D25")})};return(t,r)=>{const n=E,a=k;return v(),y("div",z,[l("div",L,[_(n,{style:{"min-width":"300px"},modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,8,["modelValue"]),_(a,{onClick:o},{default:B(()=>[N]),_:1})]),l("div",$,[_(g(I),{ref_key:"editRef",ref:s},null,512)])])}}});var rt=f(F,[["__scopeId","data-v-3ed674da"]]);export{rt as default};