import{p as y}from"./pageContent.48262613.js";import{u as D,a as E,p as b,_ as R}from"./usePageModalEffect.f0094d4b.js";import{c as I,d as v}from"./index.9eccfdba.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as N}from"./element-plus.8f542e47.js";import{d as A,h as r,t as T,o as w,c as K,e as a,u as e,R as P,I as S}from"./@vue.60f1aaec.js";/* empty css                      */import"./pinia.b7f25bf1.js";import"./@element-plus.35a825cf.js";import"./axios.765908e4.js";import"./vue-router.98095b2a.js";import"./dayjs.7f6a9561.js";import"./@vueuse.e3ce8cae.js";import"./lodash-es.b0ae9094.js";import"./@ctrl.2e36ce53.js";import"./async-validator.5d25c98b.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.9a219a59.js";const W={showIndexColumn:!0,showSelectColumn:!0,title:"\u7528\u6237\u5217\u8868",propsList:[{prop:"name",label:"\u7528\u6237\u540D",minWidth:"180"},{prop:"intro",label:"\u6743\u9650\u4ECB\u7ECD",minWidth:"180"},{prop:"createAt",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:"180",slotName:"createAt"},{prop:"updateAt",label:"\u66F4\u65B0\u65F6\u95F4",minWidth:"180",slotName:"updateAt"},{label:"\u64CD\u4F5C",minWidth:"120",slotName:"handler"}]},L={labelWidth:"120px",formItems:[{field:"name",type:"input",label:"\u89D2\u8272\u540D\u79F0",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},{field:"intro",type:"input",label:"\u6743\u9650\u4ECB\u7ECD",placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u4ECB\u7ECD"},{field:"createTime",type:"datepicker",label:"\u521B\u5EFA\u65F6\u95F4",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u65F6\u95F4",otherOptions:{startPlaceholder:"\u5F00\u59CB\u65F6\u95F4",endPlaceholder:"\u7ED3\u675F\u65F6\u95F4",type:"daterange"}}]},M={formItems:[{field:"name",type:"input",label:"\u89D2\u8272\u540D",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D"},{field:"intro",type:"input",label:"\u89D2\u8272\u4ECB\u7ECD",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u4ECB\u7ECD"}],colLayout:{span:24},itemStyle:{}};const Q={class:"rolepage"},O=A({setup(V){const n=r(),i=u=>{const t=v(u.menuList);S(()=>{var o;(o=n.value)==null||o.setCheckedKeys(t,!1)})},{handleResetClick:s,handleQueryClick:c,pageContentRef:p}=D(),{pageModalRef:d,defaultInfo:m,handleNewData:f,handleEditData:h}=E(void 0,i),C={children:"children",label:"name"},F=I(),_=T(()=>F.entireMenu),l=r({}),k=(u,t)=>{const o=t.checkedKeys,B=t.halfCheckedKeys,g=[...o,...B];l.value={menuList:g}};return(u,t)=>(w(),K("div",Q,[a(b,{searchformConfig:e(L),onResetBtnClick:e(s),onQueryBtnClick:e(c)},null,8,["searchformConfig","onResetBtnClick","onQueryBtnClick"]),a(y,{contentTableConfig:e(W),pageName:"role",ref_key:"pageContentRef",ref:p,onNewBtnClick:e(f),onEditBtnClick:e(h)},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),a(R,{title:"\u65B0\u5EFA\u89D2\u8272",ref_key:"pageModalRef",ref:d,defaulInfo:e(m),modalConfig:e(M),pageName:"role",otherInfo:l.value},{default:P(()=>[a(e(N),{ref_key:"elTreeRef",ref:n,class:"tree",data:e(_),"show-checkbox":"","node-key":"id",props:C,onCheck:k},null,8,["data"])]),_:1},8,["defaulInfo","modalConfig","otherInfo"])]))}});var ie=x(O,[["__scopeId","data-v-73e13f0b"]]);export{ie as default};
