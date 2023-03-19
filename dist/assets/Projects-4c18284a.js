import{an as N,n as O,ao as $,j as B,P as F,_ as m,o as f,c as w,w as t,a as e,V as _,g as r,ap as v,ai as y,aq as V,d as x,f as j,X as C,r as p}from"./index-80c18e54.js";import{V as D,a as P,b,c as S,d as T}from"./VCard-d72414e4.js";import{b as d}from"./VBtn-522b0902.js";import{a as G,V as g}from"./VRow-0829f578.js";const k=N("flex-grow-1","div","VSpacer"),A=O({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function H(l,a){const o={},c=s=>()=>{if(!$)return Promise.resolve(!0);const u=s==="openDelay";return o.closeDelay&&window.clearTimeout(o.closeDelay),delete o.closeDelay,o.openDelay&&window.clearTimeout(o.openDelay),delete o.openDelay,new Promise(n=>{const i=parseInt(l[s]??0,10);o[s]=window.setTimeout(()=>{a==null||a(u),n(u)},i)})};return{runCloseDelay:c("closeDelay"),runOpenDelay:c("openDelay")}}const z=B({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...A()},emits:{"update:modelValue":l=>!0},setup(l,a){let{slots:o}=a;const c=F(l,"modelValue"),{runOpenDelay:s,runCloseDelay:u}=H(l,n=>!l.disabled&&(c.value=n));return()=>{var n;return(n=o.default)==null?void 0:n.call(o,{isHovering:c.value,props:{onMouseenter:s,onMouseleave:u}})}}}),L={name:"ProjectOne",props:["show"],data(){return{}}};function R(l,a,o,c,s,u){return f(),w(z,null,{default:t(({isHovering:n,props:i})=>[e(T,C(i,{elevation:n?24:6,class:"mx-auto","max-width":"344px"}),{default:t(()=>[e(_,{src:"https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/aclc-grading-system/aclc-grading-recorder.PNG","lazy-src":"https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/aclc-grading-system/aclc-grading-recorder.PNG",height:"200px",cover:""},null,8,["src","lazy-src"]),e(D,null,{default:t(()=>[r(" ACLC Grading Recorder ")]),_:1}),e(P,null,{default:t(()=>[r(" A system to simulate final average of students in ACLC in their respective course. ")]),_:1}),e(b,null,{default:t(()=>[e(d,{color:"orange-lighten-2",variant:"text"},{default:t(()=>[r(" See Details ")]),_:1}),e(k),e(d,{icon:o.show?"mdi-chevron-up":"mdi-chevron-down",onClick:a[0]||(a[0]=h=>o.show=!o.show)},null,8,["icon"])]),_:1}),e(v,null,{default:t(()=>[y(x("div",null,[e(j),e(S,null,{default:t(()=>[r(" ACLC Grading System computes student's grade (50% Face-to-face and 50% Online) from their respective course. Only (1) one course subject can do to compute grades. This website aims to help students estimate their actual grade and this is just a simulator to make them aware what will their grade be like. Below is a tabular data consists of student's record that had been computed 50% F-F and 50% Online of their grades. ")]),_:1})],512),[[V,o.show]])]),_:1})]),_:2},1040,["elevation"])]),_:1})}const I=m(L,[["render",R]]),M={name:"ProjectTwo",props:["show"]};function E(l,a,o,c,s,u){return f(),w(z,null,{default:t(({isHovering:n,props:i})=>[e(T,C(i,{elevation:n?24:6,class:"mx-auto","max-width":"344"}),{default:t(()=>[e(_,{src:"https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/js-chat/js-chat.PNG","lazy-src":"https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/js-chat/js-chat.PNG",height:"200px",cover:""},null,8,["src","lazy-src"]),e(D,null,{default:t(()=>[r(" Vue JS Single Page Chat ")]),_:1}),e(P,null,{default:t(()=>[r(" A pure front-end single-page chat app made with Vue 2 ")]),_:1}),e(b,null,{default:t(()=>[e(d,{color:"orange-lighten-2",variant:"text"},{default:t(()=>[r(" See Details ")]),_:1}),e(k),e(d,{icon:o.show?"mdi-chevron-up":"mdi-chevron-down",onClick:a[0]||(a[0]=h=>o.show=!o.show)},null,8,["icon"])]),_:1}),e(v,null,{default:t(()=>[y(x("div",null,[e(j),e(S,null,{default:t(()=>[r(" A pure front-end single-page chat app made with Vue 2 ")]),_:1})],512),[[V,o.show]])]),_:1})]),_:2},1040,["elevation"])]),_:1})}const q=m(M,[["render",E]]),J={name:"ProjectThree",props:["show"]};function W(l,a,o,c,s,u){return f(),w(z,null,{default:t(({isHovering:n,props:i})=>[e(T,C(i,{elevation:n?24:6,class:"mx-auto","max-width":"344"}),{default:t(()=>[e(_,{src:"https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/st-lawrence-online/st-lawrence-online-ordering.PNG","lazy-src":"https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/st-lawrence-online/st-lawrence-online-ordering.PNG",height:"200px",cover:""},null,8,["src","lazy-src"]),e(D,null,{default:t(()=>[r(" St. Lawrence Online Product Ordering ")]),_:1}),e(P,null,{default:t(()=>[r(" The St. Lawrence Funeral Homes Online Reservation makes booking faster, hassle-free, and cares for customer satisfaction that makes customer comfortable. The Center can render service right away after the death of your loved ones. ")]),_:1}),e(b,null,{default:t(()=>[e(d,{color:"orange-lighten-2",variant:"text"},{default:t(()=>[r(" See Details ")]),_:1}),e(k),e(d,{icon:o.show?"mdi-chevron-up":"mdi-chevron-down",onClick:a[0]||(a[0]=h=>o.show=!o.show)},null,8,["icon"])]),_:1}),e(v,null,{default:t(()=>[y(x("div",null,[e(j),e(S,null,{default:t(()=>[r(" The St. Lawrence Funeral Homes Online Reservation makes booking faster, hassle-free, and cares for customer satisfaction that makes customer comfortable. The Center can render service right away after the death of your loved ones.")]),_:1})],512),[[V,o.show]])]),_:1})]),_:2},1040,["elevation"])]),_:1})}const X=m(J,[["render",W]]),K={name:"Projects.vue",components:{"v-project-one":I,"v-project-two":q,"v-project-three":X},data(){return{show:!1}}};function Q(l,a,o,c,s,u){const n=p("v-project-one"),i=p("v-project-two"),h=p("v-project-three");return f(),w(G,{class:"ms-10 ms-sm-10 ms-md-16 mt-16"},{default:t(()=>[e(g,{cols:"4"},{default:t(()=>[e(n,{show:s.show},null,8,["show"])]),_:1}),e(g,{cols:"4"},{default:t(()=>[e(i,{show:s.show},null,8,["show"])]),_:1}),e(g,{cols:"4"},{default:t(()=>[e(h,{show:s.show},null,8,["show"])]),_:1})]),_:1})}const te=m(K,[["render",Q]]);export{te as default};