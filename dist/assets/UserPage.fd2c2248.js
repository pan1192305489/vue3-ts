import{p as C}from"./pageContent.48262613.js";import{u as D,a as b,p as g,_ as E}from"./usePageModalEffect.f0094d4b.js";import{c as y}from"./index.9eccfdba.js";import{d as I,t as k,o as _,c as w,a as N,e as a,u as e}from"./@vue.60f1aaec.js";import"./element-plus.8f542e47.js";import"./@vueuse.e3ce8cae.js";import"./dayjs.7f6a9561.js";import"./axios.765908e4.js";import"./lodash-es.b0ae9094.js";import"./@element-plus.35a825cf.js";import"./@ctrl.2e36ce53.js";import"./async-validator.5d25c98b.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.9a219a59.js";import"./plugin-vue_export-helper.21dcd24c.js";/* empty css                      */import"./pinia.b7f25bf1.js";import"./vue-router.98095b2a.js";const A={labelWidth:"120px",itemStyle:{padding:"10px 40px"},colLayout:{span:8},formItems:[{field:"id",type:"input",label:"id",placeholder:"\u8BF7\u8F93\u5165id"},{field:"name",type:"input",label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},{field:"realname",type:"input",label:"\u771F\u5B9E\u59D3\u540D",placeholder:"\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D"},{field:"cellphone",type:"input",label:"\u7535\u8BDD\u53F7\u7801",placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801"},{field:"enable",type:"select",label:"\u7528\u6237\u72B6\u6001",placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u72B6\u6001",options:[{title:"\u542F\u7528",value:"\u542F\u7528"},{title:"\u7981\u7528",value:"\u7981\u7528"}]},{field:"createAt",type:"datepicker",label:"\u521B\u5EFA\u65F6\u95F4",placeholder:"\u8BF7\u9009\u62E9\u521B\u5EFA\u65F6\u95F4",otherOptions:{startPlaceholder:"\u5F00\u59CB\u65F6\u95F4",endPlaceholder:"\u7ED3\u675F\u65F6\u95F4",type:"daterange"}}]},R={showIndexColumn:!0,showSelectColumn:!0,title:"\u7528\u6237\u5217\u8868",propsList:[{prop:"name",label:"\u7528\u6237\u540D",minWidth:"180"},{prop:"realname",label:"\u771F\u5B9E\u59D3\u540D",minWidth:"180"},{prop:"cellphone",label:"\u624B\u673A\u53F7\u7801",minWidth:"180"},{prop:"enable",label:"\u72B6\u6001",minWidth:"180",slotName:"status"},{prop:"createAt",label:"\u521B\u5EFA\u65F6\u95F4",minWidth:"180",slotName:"createAt"},{prop:"updateAt",label:"\u66F4\u65B0\u65F6\u95F4",minWidth:"180",slotName:"updateAt"},{label:"\u64CD\u4F5C",minWidth:"120",slotName:"handler"}],selectionChange:n=>{console.log(n)}},o={formItems:[{field:"name",type:"input",label:"\u7528\u6237\u540D",placeholder:"\u8BF7\u8F93\u5165id"},{field:"realname",type:"input",label:"\u771F\u5B9E\u59D3\u540D",placeholder:"\u8BF7\u8F93\u5165\u771F\u5B9E\u59D3\u540D"},{field:"password",type:"password",label:"\u5BC6\u7801",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",isHidden:!1},{field:"cellphone",type:"input",label:"\u7535\u8BDD\u53F7\u7801",placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801"},{field:"departmentId",type:"select",label:"\u9009\u62E9\u90E8\u95E8",placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8",options:[]},{field:"roleId",type:"select",label:"\u9009\u62E9\u89D2\u8272",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272"}],colLayout:{span:24},itemStyle:{}},S={class:"userpage"},W={class:"search"},Y=I({setup(n){const i=y(),p=k(()=>{const t=o.formItems.find(u=>u.field==="departmentId");t.options=i.entireDepartment.map(u=>({title:u.name,value:u.id}));const l=o.formItems.find(u=>u.field==="roleId");return l.options=i.entireRole.map(u=>({title:u.name,value:u.id})),o}),r=()=>{const t=o.formItems.find(l=>l.field==="password");t&&(t.isHidden=!1)},s=()=>{const t=o.formItems.find(l=>l.field==="password");t&&(t.isHidden=!0)},{handleResetClick:d,handleQueryClick:c,pageContentRef:m}=D(),{pageModalRef:f,defaultInfo:F,handleNewData:h,handleEditData:B}=b(r,s);return(t,l)=>(_(),w("div",S,[N("div",W,[a(e(g),{searchformConfig:e(A),class:"pageSearch",onResetBtnClick:e(d),onQueryBtnClick:e(c)},null,8,["searchformConfig","onResetBtnClick","onQueryBtnClick"]),a(C,{ref_key:"pageContentRef",ref:m,class:"pageContent",pageName:"users",contentTableConfig:e(R),onNewBtnClick:e(h),onEditBtnClick:e(B)},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),a(e(E),{title:"\u65B0\u5EFA\u7528\u6237",defaultInfo:e(F),ref_key:"pageModalRef",ref:f,modalConfig:e(p),pageName:"users"},null,8,["defaultInfo","modalConfig"])])]))}});export{Y as default};