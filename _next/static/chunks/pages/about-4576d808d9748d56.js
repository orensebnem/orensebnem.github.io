(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{39212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(60570)}])},28782:function(e,n,t){"use strict";t.d(n,{o:function(){return v}});var i=t(85893),l=t(48641);let s=e=>{let{title:n,subtitle:t,description:s}=e;return(0,i.jsxs)(l.Kq,{id:n,direction:"column",width:400,marginLeft:10,marginRight:10,children:[(0,i.jsx)(l.xv,{fontSize:["2xl","2xl","2lg","2xl"],fontWeight:"bold",children:n}),(0,i.jsx)(l.xv,{fontSize:"4xl",fontWeight:"bold",children:t}),(0,i.jsx)(l.xv,{fontSize:["2xl","2xl","xl","xl"],children:s})]})};var r=t(23887);let a=e=>{let{imageName:n}=e;return(0,i.jsxs)(l.Kq,{children:[(0,i.jsx)(r.Ee,{position:"absolute",borderRadius:"full",marginLeft:4,marginTop:6,boxSize:300,height:300,src:"/images/".concat(n),alt:"Sebnem Oren"}),(0,i.jsx)(l.xu,{borderRadius:"full",margin:2,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",boxSize:330})]})},o=e=>{let{avatarProps:n,informationProps:t}=e,{imageName:r}=n,{title:o,subtitle:d,description:c}=t;return(0,i.jsxs)(l.kC,{flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:20,width:"100%",children:[(0,i.jsx)(a,{imageName:r}),(0,i.jsx)(s,{title:o,subtitle:d,description:c})]})};var d=t(3812);let c=e=>{let{name:n,surname:t}=e;return(0,i.jsxs)(l.Kq,{direction:"row",align:"center",children:[(0,i.jsx)(d.qE,{name:n,size:["lg","lg","lg","lg"],fontWeight:"bold",color:"white",bgColor:"#6DA6E0",src:"/"}),(0,i.jsxs)(l.xv,{fontSize:["lg","lg","lg","lg"],fontWeight:"bold",children:[n," ",t]})]})};var u=t(67294),x=e=>{let{label:n,selected:t,href:s,size:r=16,isLink:a}=e,[o,d]=(0,u.useState)(!1);return(0,i.jsx)("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),style:{textDecoration:o?"underline":"none",cursor:o?"pointer":"default"},children:(0,i.jsx)(l.rU,{href:a?s:"#".concat(s),children:(0,i.jsx)(l.xv,{opacity:t?1:.55,fontSize:r,children:n})})})},h=t(91574),g=t(47741),f=t(31062),m=t(3382);let p=e=>{let{data:n}=e,{isOpen:t,onOpen:s,onClose:r}=(0,h.qY)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.hU,{"aria-label":"Open Menu",size:"lg",mr:2,icon:(0,i.jsx)(m.Uq,{}),onClick:()=>s(),display:["flex","flex","none","none"]}),(0,i.jsx)(l.Kq,{direction:"row",gap:10,display:["none","none","flex","flex"],children:null==n?void 0:n.map(e=>(0,i.jsx)(x,{href:e.href,label:e.label,selected:e.selected,hasPageTitle:e.hasPageTitle,isLink:e.isLink},e.label))}),(0,i.jsxs)(f.u_,{onClose:r,size:"full",isOpen:t,children:[(0,i.jsx)(f.ZA,{}),(0,i.jsxs)(f.hz,{children:[(0,i.jsx)(f.xB,{fontSize:40,children:"MENU"}),(0,i.jsx)(f.ol,{}),(0,i.jsx)(f.fe,{children:null==n?void 0:n.map(e=>(0,i.jsx)(x,{size:40,href:e.href,label:e.label,selected:e.selected,hasPageTitle:e.hasPageTitle,isLink:e.isLink},e.label))})]})]})]})};var b=e=>{let{sLogoProps:n,sMenusProps:t}=e,{data:s,selected:r}=t;return(0,i.jsxs)(l.kC,{"data-testid":"header-2",align:"center",justifyContent:"space-between",justifyItems:"space-between",ml:10,mr:10,mb:10,children:[(0,i.jsx)(c,{name:n.name,surname:n.surname}),(0,i.jsx)(p,{data:s,selected:r})]})};let j=e=>{let{children:n,sMenuSelected:t,backgroundColor:s}=e,r=[{label:"about me",selected:"about me"===t,href:"Product manager",hasPageTitle:!1},{label:"resume",selected:"resume"===t,href:"/resume",hasPageTitle:!0,isLink:!0},{label:"portfolios",selected:"portfolios"===t,href:"PORTFOLIOS",hasPageTitle:!1},{label:"side projects",selected:"sideProjects"===t,href:"/side-projects",hasPageTitle:!0,isLink:!0}],a=r.findIndex(e=>e.label===t),o=r[a].hasPageTitle;return(0,i.jsx)(l.kC,{direction:"column","data-testid":"layout",backgroundColor:s,mt:10,borderRadius:50,children:(0,i.jsxs)(l.xu,{alignSelf:"center",marginTop:10,pb:20,height:"100%",width:"100%",roundedTop:20,children:[(0,i.jsx)(b,{sLogoProps:{name:"Sebnem",surname:"Oren"},sMenusProps:{data:r,selected:t}}),o&&(0,i.jsx)(l.M5,{height:[100,100,140,180],backgroundColor:"#FDFDFD",borderTop:"2px solid #f2f2f2",borderBottom:"2px solid #f2f2f2",children:(0,i.jsx)(l.X6,{as:"h1",fontSize:["xl","2xl","3xl","4xl"],ml:50,width:"100%",children:t.toUpperCase()})}),(0,i.jsx)(l.kC,{justifyContent:"center",alignItems:"center",gap:20,marginTop:50,height:"100%",children:n})]})})},v=()=>(0,i.jsx)(j,{sMenuSelected:"about me",backgroundColor:"#FFF",children:(0,i.jsx)(o,{avatarProps:{imageName:"sebnem.jpeg"},informationProps:{title:"Product manager",subtitle:"Sebnem Oren",description:"\n        Product enthusiast with a passion for solving problems and delivering \n        compelling customer experiences based on data to generate value for users \n        and organizations. Ability to interact with internal and external business clients, \n        technical teams and end-users in conveying solutions effectively. \n        Project management skills with balancing competing priorities \n        for complex projects and the ability to thrive in interdisciplinary teams.\n        "}})})},60570:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return r}});var i=t(85893);t(67294);var l=t(28782),s=t(64818),r=!0;n.default=e=>{let{indexPageData:n,portfolios:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.o,{}),(0,i.jsx)(s.E,{data:t})]})}}},function(e){e.O(0,[296,382,7,818,774,888,179],function(){return e(e.s=39212)}),_N_E=e.O()}]);