import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r as p}from"./index-DEBVq0NN.js";import{I as f,i as d}from"./IconListImage-BHZiq5sE.js";import"./index-D2MAbzvX.js";import"./closeEye-BRvU6Mz0.js";const y="_modal_overlay_1t342_1",h="_modal_content_1t342_14",x="_modal_close_1t342_26",g="_modal_title_1t342_35",r={modal_overlay:y,modal_content:h,modal_close:x,modal_title:g},l=({isOpen:o,onClose:t,children:a,className:u})=>(p.useEffect(()=>{const n=_=>{_.key==="Escape"&&o&&t()};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[o,t]),o?e.jsx("div",{className:r.modal_overlay,"data-testid":"modal-overlay",onClick:t,children:e.jsxs("div",{className:`${r.modal_content} ${u||""}`,"data-testid":"modal-content",onClick:n=>n.stopPropagation(),children:[e.jsx("button",{className:r.modal_close,onClick:t,"aria-label":"Close",children:e.jsx(f,{src:d[16].src,alt:d[16].alt})}),a]})}):null);l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"Modal",component:l},v=o=>{const[t,a]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:r.modal_title,onClick:()=>a(!0),children:"Нажимай и получишь Пивко"}),e.jsx(l,{...o,isOpen:t,onClose:()=>a(!1),children:e.jsx("h2",{children:"Пивко закончилось"})})]})},s=v.bind({});s.args={};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <button className={styles.modal_title} onClick={() => setIsOpen(true)}>Нажимай и получишь Пивко</button>\r
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>\r
        <h2>Пивко закончилось</h2>\r
      </Modal>\r
    </>;
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,b as default};
