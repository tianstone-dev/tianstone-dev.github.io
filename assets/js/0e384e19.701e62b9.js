"use strict";(self.webpackChunktianstone_2022_github_io=self.webpackChunktianstone_2022_github_io||[]).push([[976],{3809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>E,default:()=>C,frontMatter:()=>_,metadata:()=>S,toc:()=>N});var r=n(4848),a=n(8453),o=n(6540),l=n(4164),s=n(3104),u=n(6347),i=n(205),c=n(7485),d=n(1682),h=n(679);function p(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=b(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,c]=m({queryString:n,groupId:r}),[d,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,h.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),v=(()=>{const e=u??d;return f({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),p(e)}),[c,p,a]),tabValues:a}}var g=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=u[n].value;r!==a&&(c(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:h,onClick:d,...o,className:(0,l.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=v(e);return(0,r.jsxs)("div",{className:(0,l.A)("tabs-container",y.tabList),children:[(0,r.jsx)(x,{...t,...e}),(0,r.jsx)(w,{...t,...e})]})}function I(e){const t=(0,g.A)();return(0,r.jsx)(j,{...e,children:p(e.children)},String(t))}const V={tabItem:"tabItem_Ymn6"};function k(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(V.tabItem,a),hidden:n,children:t})}const _={sidebar_position:1},E="Welcome\uff01",S={id:"intro",title:"Welcome\uff01",description:"\u6682\u4e0d\u652f\u6301\u5176\u4ed6\u8bed\u8a00\uff0c\u5e26\u6765\u4e0d\u4fbf\u656c\u8bf7\u8c05\u89e3\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/tianstone-dev/tianstone-dev.github.io/tree/develop/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"BatteryHealthSaver",permalink:"/docs/BatteryHealthSaver/"}},T={},N=[];function A(e){const t={admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"welcome",children:"Welcome\uff01"})}),"\n",(0,r.jsx)(t.admonition,{title:"NOTE",type:"note",children:(0,r.jsxs)(I,{children:[(0,r.jsx)(k,{value:"chinese",label:"\u7b80\u4f53\u4e2d\u6587/Chinese",default:!0,children:(0,r.jsx)(t.p,{children:"\u6682\u4e0d\u652f\u6301\u5176\u4ed6\u8bed\u8a00\uff0c\u5e26\u6765\u4e0d\u4fbf\u656c\u8bf7\u8c05\u89e3\u3002"})}),(0,r.jsx)(k,{value:"english",label:"English",children:(0,r.jsx)(t.p,{children:"Other languages are not currently supported. Sorry for any inconvenience caused."})})]})})]})}function C(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);