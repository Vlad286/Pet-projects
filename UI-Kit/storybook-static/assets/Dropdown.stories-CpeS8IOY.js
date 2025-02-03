import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r as m}from"./index-DEBVq0NN.js";import"./index-D2MAbzvX.js";const D="_dropdown_fz1c5_1",w="_dropdown_btn_fz1c5_6",S="_dropdown_list_fz1c5_14",g="_dropdown_list_item_fz1c5_28",r={dropdown:D,dropdown_btn:w,dropdown_list:S,dropdown_list_item:g},l=({days:d,onSelectDay:s})=>{const[a,o]=m.useState(!1),c=()=>o(t=>!t),u=t=>{s(t),o(!1)};return e.jsxs("div",{className:r.dropdown,children:[e.jsx("button",{className:r.dropdown_btn,onClick:c,children:"Select Day"}),a&&e.jsx("ul",{className:r.dropdown_list,children:d.map((t,y)=>e.jsx("li",{className:r.dropdown_list_item,onClick:()=>u(t),children:t},y))})]})};l.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{days:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onSelectDay:{required:!0,tsType:{name:"signature",type:"function",raw:"(day: string) => void",signature:{arguments:[{type:{name:"string"},name:"day"}],return:{name:"void"}}},description:""}}};const b={title:"Dropdown",component:l},f=d=>{const[s,a]=m.useState(null),o=c=>{a(c)};return e.jsxs("div",{children:[e.jsx(l,{...d,onSelectDay:o}),s&&e.jsxs("p",{children:["Selected Day: ",s]})]})},n=f.bind({});n.args={days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};var i,p,_;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const handleSelectDay = (day: string) => {
    setSelectedDay(day);
  };
  return <div>\r
      <Dropdown {...args} onSelectDay={handleSelectDay} />\r
      {selectedDay && <p>Selected Day: {selectedDay}</p>}\r
    </div>;
}`,...(_=(p=n.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,b as default};
