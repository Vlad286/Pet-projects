import{j as c}from"./jsx-runtime-BjgbQsUx.js";import{r as u}from"./index-DEBVq0NN.js";import"./index-D2MAbzvX.js";const m="_checkbox_container_zsybq_2",x="_checkbox_input_zsybq_8",k="_checkbox_custom_zsybq_12",s={checkbox_container:m,checkbox_input:x,checkbox_custom:k},t=({label:o,checked:p=!1,onChange:a})=>{const[n,d]=u.useState(p),b=()=>{const r=!n;d(r),a&&a(r)};return c.jsxs("label",{className:s.checkbox_container,children:[c.jsx("input",{className:s.checkbox_input,type:"checkbox",checked:n,onChange:b}),c.jsx("span",{className:s.checkbox_custom}),o]})};t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const C={title:"Checkbox",component:t,argTypes:{label:{control:"text"},checked:{control:"boolean"},onChange:{action:"changed"}}},_=o=>c.jsx(t,{label:"",...o}),e=_.bind({});e.args={checked:!1};var i,l,h;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:'args => <Checkbox label={""} {...args} />',...(h=(l=e.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,C as default};
