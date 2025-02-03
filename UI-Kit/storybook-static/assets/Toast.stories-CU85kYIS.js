import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{r as i}from"./index-DEBVq0NN.js";import"./index-D2MAbzvX.js";const C="_toast_9br7a_1",x="_success_9br7a_13",E="_error_9br7a_17",j="_info_9br7a_21",d={toast:C,success:x,error:E,info:j},u=({message:n,type:c,duration:t=3e3,onClose:r})=>{const[v,y]=i.useState(!0);return i.useEffect(()=>{const b=setTimeout(()=>{y(!1),r()},t);return()=>clearTimeout(b)},[t,r]),v?a.jsx("div",{className:`${d.toast} ${d[c]}`,children:a.jsx("p",{children:n})}):null};u.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"success" | "error" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'}]},description:""},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={title:"Toast",component:u},l=n=>{const[c,t]=i.useState(!0),r=()=>{t(!1)};return a.jsx("div",{children:c&&a.jsx(u,{...n,onClose:r})})},e=l.bind({});e.args={message:"Success! Your operation was completed.",type:"success",duration:3e3};const s=l.bind({});s.args={message:"Error! Something went wrong.",type:"error",duration:3e3};const o=l.bind({});o.args={message:"Info: You have new updates.",type:"info",duration:3e3};var m,p,T;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => {
  const [showToast, setShowToast] = useState<boolean>(true);
  const handleCloseToast = () => {
    setShowToast(false);
  };
  return <div>\r
      {showToast && <Toast {...args} onClose={handleCloseToast} />}\r
    </div>;
}`,...(T=(p=e.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var h,f,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(args: any) => {
  const [showToast, setShowToast] = useState<boolean>(true);
  const handleCloseToast = () => {
    setShowToast(false);
  };
  return <div>\r
      {showToast && <Toast {...args} onClose={handleCloseToast} />}\r
    </div>;
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var w,S,_;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`(args: any) => {
  const [showToast, setShowToast] = useState<boolean>(true);
  const handleCloseToast = () => {
    setShowToast(false);
  };
  return <div>\r
      {showToast && <Toast {...args} onClose={handleCloseToast} />}\r
    </div>;
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const Y=["Success","Error","Info"];export{s as Error,o as Info,e as Success,Y as __namedExportsOrder,N as default};
