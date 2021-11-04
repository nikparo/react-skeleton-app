(this["webpackJsonpsupermetrics-react-task"]=this["webpackJsonpsupermetrics-react-task"]||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(16),a=n.n(c),o=n(5),s=(n(24),n(2)),d=n(7),l=n(4),u=n(8),j=n(1),b=Object(l.a)(u.f)({display:"flex",flexDirection:"row"}),h=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)(b,{children:[Object(j.jsx)(u.g,{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),Object(j.jsx)(u.g,{children:Object(j.jsx)(o.b,{to:"/logout",children:"Logout"})})]})})},x=l.a.div({display:"flex",flexDirection:"column",height:"100%",overflow:"hidden",width:"100%"}),p=l.a.div({flex:"1 1 auto",height:"100%",overflow:"auto",position:"relative"});function O(){return Object(j.jsxs)(x,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(p,{children:Object(j.jsx)(s.b,{})})]})}function g(e){var t=e.children,n=e.redirectOnAuth,r=e.redirectTo,i=Object(s.e)();return!!n===Object(d.b)().isLoggedIn&&r&&i.pathname!==r?Object(j.jsx)(s.a,{to:r}):Object(j.jsx)(j.Fragment,{children:t})}var f=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,47))})),m=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,46))}));function v(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Nothing to see here!"}),Object(j.jsx)("p",{children:Object(j.jsx)(o.b,{to:"/",children:"Go to the home page"})})]})}function y(){var e=Object(d.b)().setUserDetails;return Object(r.useEffect)((function(){e({name:"",email:""})}),[e]),Object(j.jsx)(s.a,{to:"/login"})}var k=[{path:"login",element:Object(j.jsx)(g,{redirectOnAuth:!0,redirectTo:"/",children:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(j.Fragment,{children:"Loading login screen"}),children:Object(j.jsx)(f,{})})})},{path:"/",element:Object(j.jsx)(g,{redirectTo:"/login",children:Object(j.jsx)(O,{})}),children:[{index:!0,element:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(j.Fragment,{children:"Loading posts"}),children:Object(j.jsx)(m,{})})},{path:"authors/:authorId",element:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(j.Fragment,{children:"Loading posts"}),children:Object(j.jsx)(m,{})})},{path:"logout",element:Object(j.jsx)(y,{})},{path:"*",element:Object(j.jsx)(v,{})}]}];function L(){var e=Object(d.c)(),t=Object(s.i)(k);return Object(j.jsxs)(d.a.Provider,{value:e,children:[Object(j.jsx)("div",{className:"App",children:t}),";"]})}var S=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(L,{})})}),document.getElementById("root")),S()},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u}));var r=n(6),i=n(0),c=n.n(i),a=n(15),o={isLoggedIn:!1,setUserDetails:function(){console.error("setUserDetails stub called!")},name:"",email:""},s=c.a.createContext(o);function d(){return Object(i.useContext)(s)}var l=function(e,t){return fetch("https://api.supermetrics.com/assignment/register",{method:"POST",body:JSON.stringify({client_id:"ju16a6m81mhid5ue1z3v2g0uh",email:t,name:e}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};function u(){var e=Object(i.useState)({name:"",email:""}),t=Object(r.a)(e,2),n=t[0],c=n.name,o=n.email,s=t[1],d=Boolean(c||o),u=Object(a.a)(d?[c,o]:null,l,{dedupingInterval:33e5}),j=u.data,b=u.error||(null===j||void 0===j?void 0:j.error),h=((null===j||void 0===j?void 0:j.data)||{}).sl_token;return{slToken:h,error:b,isLoggedIn:Boolean(d&&h&&!b),name:c,email:o,setUserDetails:s}}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"c",(function(){return l}));var r=n(4),i=r.a.div({padding:"8px",margin:"8px"}),c=r.a.div({display:"flex",flexDirection:"row",width:"100%"}),a=r.a.button({padding:"8px 12px",margin:"8px"}),o=r.a.input({padding:"8px 12px",margin:"8px"}),s=r.a.ul({margin:0,padding:0,listStyleType:"none"}),d=r.a.li({border:"1px solid #ddd",borderRadius:"2px",margin:"8px",padding:"8px"}),l=r.a.p({padding:"12px",margin:"8px",color:"red",background:"rgba(206, 17, 38, 0.05)"})}},[[28,1,2]]]);
//# sourceMappingURL=main.1ed76fc3.chunk.js.map