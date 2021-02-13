(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),c=a(9),i=a.n(c),r=(a(16),a(3)),o=a(11),l=a(4),u=a(1),d=s.a.createContext(),j=function(t){var e=t.children,a=Object(n.useState)({show:!1,msg:"",type:""}),s=Object(l.a)(a,2),c=s[0],i=s[1],j=Object(n.useState)({task:"",date:"",details:{time:"",about:""}}),b=Object(l.a)(j,2),m=b[0],O=b[1],h=Object(n.useState)((function(){return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]})),f=Object(l.a)(h,2),v=f[0],x=f[1],g=Object(n.useState)(!1),p=Object(l.a)(g,2),k=p[0],y=p[1],N=Object(n.useState)(""),S=Object(l.a)(N,2),w=S[0],C=S[1],I=Object(n.useState)(!1),T=Object(l.a)(I,2),D=(T[0],T[1]),A=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i({show:t,msg:e,type:a})};return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(v))}),[v]),Object(u.jsx)(d.Provider,{value:{showAlert:A,alert:c,entry:m,list:v,setTask:function(t){O(Object(r.a)(Object(r.a)({},m),{},{task:t}))},isEditing:k,setDate:function(t){O(Object(r.a)(Object(r.a)({},m),{},{date:t}))},setLista:function(t){x([].concat(Object(o.a)(v),[t]))},cleanUp:function(){O({task:"",date:"",details:{hour:"",about:""}})},setTime:function(t){O(Object(r.a)(Object(r.a)({},m),{},{details:Object(r.a)(Object(r.a)({},m.details),{},{time:t})}))},setAbout:function(t){O(Object(r.a)(Object(r.a)({},m),{},{details:Object(r.a)(Object(r.a)({},m.details),{},{about:t})}))},editItem:function(t){var e=v.find((function(e){return e.id===t}));y(!0),C(t),O({task:e.task,date:e.date,details:{time:e.hour,about:e.about}})},yoquese:function(){x(v.map((function(t){return t.id===w?{task:m.task,date:m.date,hour:m.details.time,about:m.details.about}:t}))),O({task:"",date:"",details:{hour:"",about:""}}),C(""),y(!1)},removeItem:function(t){A(!0,"Item removed","danger"),x(v.filter((function(e){return e.id!==t})))},activo:function(){D(!0)}},children:e})},b=function(){return Object(n.useContext)(d)},m=function(){var t=b(),e=t.alert,a=t.list,s=t.showAlert,c=(e.show,e.msg,e.type);return Object(n.useEffect)((function(){var t=setTimeout((function(){s()}),5e3);return function(){return clearTimeout(t)}}),[a]),Object(u.jsx)("section",{className:"alert alert-".concat(c),children:e.msg})},O=a(8),h=a(10),f=function(t){var e=t.id,a=t.task,s=t.about,c=t.hour,i=t.date,r=b(),o=(r.list,r.editItem),d=r.removeItem,j=(r.activo,r.inCourse,Object(n.useState)(!1)),m=Object(l.a)(j,2),f=m[0],v=m[1];return Object(u.jsxs)("article",{className:"list-item",children:[Object(u.jsx)("h3",{onClick:function(){return v(!f)},children:a}),Object(u.jsxs)("div",{className:"btn-container",children:[!f&&Object(u.jsx)("button",{className:" edit-btn",onClick:function(){return o(e)},children:Object(u.jsx)(O.a,{})}),!f&&Object(u.jsx)("button",{className:" delete-btn",onClick:function(){return d(e)},children:Object(u.jsx)(h.a,{})})]}),f&&Object(u.jsxs)("div",{className:"item-info",children:[Object(u.jsx)("p",{children:s}),Object(u.jsx)("p",{className:"important",children:i}),Object(u.jsx)("p",{style:{color:"orange",textAlign:"center"},children:c})]})]},e)},v=function(){var t=b(),e=t.entry,a=t.alert,n=t.list,s=t.setTask,c=t.showAlert,i=t.isEditing,o=t.setDate,l=t.setLista,d=t.cleanUp,j=t.setTime,O=t.setAbout,h=t.yoquese;t.activo;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{children:"Personal Agenda"})}),Object(u.jsxs)("section",{className:"section-center",children:[a.show&&Object(u.jsx)(m,{}),Object(u.jsxs)("form",{className:"form-control",onSubmit:function(t){if(t.preventDefault(),e.task&&e.date)if(function(t,e){var a=[],n=t.split("-"),s=e.split(":");a=n.concat(s);for(var c=0;c<a.length;c++)a[c]=parseInt(a[c]),console.log(a[c]);return Date.parse(new Date(a[0],a[1]-1,a[2],a[3],a[4]))}(e.date,e.details.time?e.details.time:"00:00")<Date.parse(new Date))c(!0,"Please enter a valid date","danger");else if(e&&i)h(),n.sort((function(t,e){return t.date>e.date?1:e.date>t.date?-1:0})),c(!0,"Item changed","success");else{var a={id:Math.floor(Math.random()*Date.now()),task:e.task,date:e.date,hour:e.details.time,about:e.details.about};l(a),n.sort((function(t,e){return t.date>e.date?1:e.date>t.date?-1:0})),d(),c(!0,"Task succesfully added!\n      ".concat(e.task," on ").concat(e.date," \n      "),"success")}else e.task?e.date||c(!0,"Please enter a date","danger"):c(!0,"Please enter a value","danger")},children:[Object(u.jsxs)("div",{className:"box-container",children:[Object(u.jsx)("input",{type:"text",id:"entryTask",name:"entryTask",placeholder:"e.g Company meeting",value:e.task,onChange:function(t){return s(t.target.value)}}),Object(u.jsx)("input",{id:"entryDate",name:"entryDate",type:"date",value:e.date,onChange:function(t){return o(t.target.value)}})]}),Object(u.jsxs)("div",{className:"box-container",children:[e.task&&Object(u.jsx)("input",{id:"entryTime",name:"entryTime",type:"time",value:e.details.time,onChange:function(t){return j(t.target.value)}}),e.task&&Object(u.jsx)("textarea",{id:"about",name:"entryAbout",type:"text",value:e.details.about,onChange:function(t){return O(t.target.value)}})]}),Object(u.jsx)("button",{className:"btn add-btn",children:i?"Save changes":"Add item"})]}),Object(u.jsx)("div",{className:"list-container",children:n.map((function(t){return Object(u.jsx)(f,Object(r.a)({},t),t.id)}))})]})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j,{children:Object(u.jsx)(v,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7e6cf1f1.chunk.js.map