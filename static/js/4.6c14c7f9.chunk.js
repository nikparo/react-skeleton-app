(this["webpackJsonpsupermetrics-react-task"]=this["webpackJsonpsupermetrics-react-task"]||[]).push([[4],{29:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(30);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},30:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},47:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var n=r(29),a=r(6),c=r(30),i=r(0),o=r(7),u=function(e,t){return Object(n.a)(Object(n.a)({},e),{},Object(c.a)({},t.type,t.payload))};var l=r(4),s=r(8),b=r(1),p=l.a.label({fontSize:"11px",display:"flex",flexDirection:"column",padding:"8px","& *":{margin:"2px 0"}});function j(e){var t=e.label,r=e.children;return Object(b.jsxs)(p,{children:[Object(b.jsx)("span",{children:t}),r]})}var m=l.a.form({maxWidth:"300px",margin:"0 auto",padding:"8px",display:"flex",flexDirection:"column"});function f(e){var t=e.onChange,r=e.onSubmit,n=e.name,a=e.email,c=e.errorMessage;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m,{onSubmit:r,children:[Object(b.jsx)(j,{label:"Name:",children:Object(b.jsx)(s.e,{name:"name",type:"text",value:n,placeholder:"Your name",onChange:t})}),Object(b.jsx)(j,{label:"Email:",children:Object(b.jsx)(s.e,{name:"email",type:"email",value:a,placeholder:"Your email",onChange:t})}),!!c&&Object(b.jsx)(s.c,{children:c}),Object(b.jsx)(s.b,{type:"submit",children:"Login"})]})})}var O=function(){var e=function(){var e=Object(o.b)(),t=e.error,r=Object(i.useReducer)(u,{name:e.name,email:e.email}),n=Object(a.a)(r,2),c=n[0],l=n[1],s=c.name,b=c.email;Object(i.useEffect)((function(){t&&console.error(t)}),[t]);var p="string"===typeof(null===t||void 0===t?void 0:t.message)?t.message:void 0;return{name:s,email:b,errorMessage:p,onChange:function(e){var t=e.currentTarget,r=t.name,n=t.value;l({type:r,payload:n})},onSubmit:function(t){e.setUserDetails({name:s,email:b}),t.preventDefault()}}}();return Object(b.jsx)(f,Object(n.a)({},e))}}}]);
//# sourceMappingURL=4.6c14c7f9.chunk.js.map