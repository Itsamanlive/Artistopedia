(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(27),r=a.n(i),o=(a(36),a(5)),l=a(29),s=a(1),m=(a(37),a(6)),u=a.n(m),d=a(10),p=a(7),f=a(11),E=a.n(f),v=(a(56),function(e){var t=c.a.useState({email:void 0,password:void 0}),a=Object(o.a)(t,2),n=a[0],i=a[1];return c.a.createElement("div",{className:"landing-container"},c.a.createElement("div",{className:"login-card"},c.a.createElement("div",{className:"title"},"Login"),c.a.createElement("div",{className:"form"},c.a.createElement("input",{placeholder:"Email",type:"text",onKeyUp:function(e){i(Object(p.a)({},n,{email:e.target.value}))}}),c.a.createElement("input",{placeholder:"Password",type:"password",onKeyUp:function(e){i(Object(p.a)({},n,{password:e.target.value}))}}),c.a.createElement("button",{onClick:function(){return e.login(n)}},"Login"))),c.a.createElement("div",{className:"OR text-shadow"},"OR"),c.a.createElement("div",{className:"btn",onClick:e.loadSignup},"SIgn Up"))}),h=function(e){var t=c.a.useState({username:void 0,email:void 0,password:void 0}),a=Object(o.a)(t,2),n=a[0],i=a[1];return c.a.createElement("div",{className:"landing-container"},c.a.createElement("div",{className:"login-card"},c.a.createElement("div",{className:"title"},"SignUp"),c.a.createElement("div",{className:"form"},c.a.createElement("input",{placeholder:"Email",type:"text",onKeyUp:function(e){i(Object(p.a)({},n,{email:e.target.value}))}}),c.a.createElement("input",{placeholder:"Username",type:"text",onKeyUp:function(e){i(Object(p.a)({},n,{username:e.target.value}))}}),c.a.createElement("input",{placeholder:"Password",type:"password",onKeyUp:function(e){i(Object(p.a)({},n,{password:e.target.value}))}}),c.a.createElement("button",{onClick:function(){return e.signup(n)}},"SignUp"))),c.a.createElement("div",{className:"OR text-shadow"},"OR"),c.a.createElement("div",{className:"btn",onClick:e.loadLogin},"Login"))},N=function(e){function t(e){return a.apply(this,arguments)}function a(){return(a=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({url:"http://localhost:8080/user",method:"POST",data:t}).then((function(e){window.notify(e.data.message),setTimeout((function(){e.data.status?r():console.log("WTF")}),2500)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(e){return i.apply(this,arguments)}function i(){return(i=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,E()({url:"http://localhost:8080/user",method:"PUT",data:a}).then((function(t){window.notify(t.data.message),t.data.status&&(window.user=a.email,e.history.push({pathname:"/area",state:{_id:a.email}}))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){f({state:c.a.createElement(v,{history:e.history,loadSignup:l,login:n})})}function l(){f({state:c.a.createElement(h,{history:e.history,loadLogin:r,signup:t})})}var s=c.a.useState({state:c.a.createElement(v,{history:e.history,loadSignup:l,login:n})}),m=Object(o.a)(s,2),p=m[0],f=m[1];return p.state},y=a(30),w=(a(57),function(e){function t(t){e.history.push({pathname:"/competitions",state:{type:t}})}Object(y.a)(Array(16).keys());return c.a.createElement("div",{className:"area-container"},c.a.createElement("div",{className:"area"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card",onClick:function(){return t("free")}},"Free Competitions"),c.a.createElement("div",{className:"card",onClick:function(){return t("paid")}},"Paid Competitions"))))}),g=(a(58),function(e){var t=e.location.state.type;function a(t){e.history.push({pathname:"/competition",state:{name:t}})}var n=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card",onClick:function(){return a(0)}},c.a.createElement("div",{className:"title"},"1 v 1")),c.a.createElement("div",{className:"card",onClick:function(){return a(1)}},c.a.createElement("div",{className:"title"},"5 Men Arena")),c.a.createElement("div",{className:"card",onClick:function(){return a(2)}},c.a.createElement("div",{className:"title"},"10 Men Arena")),c.a.createElement("div",{className:"card",onClick:function(){return a(3)}},c.a.createElement("div",{className:"title"},"20 Men Arena")))},i=function(e){return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"title"},"Payment"),c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"in-1"},c.a.createElement("input",{placeholder:"Card Number"})),c.a.createElement("div",{className:"in-2"},c.a.createElement("input",{placeholder:"Name",style:{borderRight:"none"}}),c.a.createElement("input",{placeholder:"Date",style:{border:"none"}}),c.a.createElement("input",{placeholder:"CVV",style:{borderLeft:"none"}}))),c.a.createElement("div",{className:"pay"},c.a.createElement("button",{className:"btn",onClick:function(){return u({comp:c.a.createElement(r,null)})}},"Pay")))},r=function(e){return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"title"},"Payment"),c.a.createElement("div",{className:"form",style:{height:"9vh",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"in-1"},c.a.createElement("input",{placeholder:"Enter OTP"}))),c.a.createElement("div",{className:"pay"},c.a.createElement("button",{className:"btn",onClick:function(){return u({comp:c.a.createElement(n,null)})}},"Submit")))},l=c.a.useState({comp:"free"===t?c.a.createElement(n,null):c.a.createElement(i,null)}),s=Object(o.a)(l,2),m=s[0],u=s[1];return c.a.useEffect((function(){window.user?console.log(window.user):window.location="/"})),c.a.createElement("div",{className:"dash-container"},c.a.createElement("div",{className:"dashboard"},m.comp))}),b=(a(59),function(e){var t=c.a.useState({stat:c.a.createElement("div",{className:"upload"},c.a.createElement("input",{id:"upload",type:"file",onChange:function(e){i({stat:c.a.createElement("div",{className:"uploaded"},"\ud83c\udfb6",e.target.files[0].name,"\ud83c\udfb6")}),p({file:e.target.files[0]})}}),c.a.createElement("label",{htmlFor:"upload"},"\u2795"))}),a=Object(o.a)(t,2),n=a[0],i=a[1],r=[{name:"1 v 1"},{name:"5 men arena"},{name:"10 men arena"},{name:"20 men arena"}][e.location.state.name],l=c.a.useState({file:null}),s=Object(o.a)(l,2),m=s[0],p=s[1];function f(){return(f=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("audio_file",m.file),t.append("username",window.user),e.next=5,E.a.post("http://localhost:8080/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){window.notify(e.data.msg),e.status?i({stat:c.a.createElement("div",{className:"uploaded",style:{fontSize:"3rem"}},"\u2714")}):i({stat:c.a.createElement("div",{className:"uploaded",style:{fontSize:"3rem"}},"\u274c")})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.useEffect((function(){window.user?console.log(window.user):window.location="/"})),c.a.createElement("div",{className:"comp-container"},c.a.createElement("div",{className:"competition"},c.a.createElement("div",{className:"name"},r.name),c.a.createElement("div",{className:"details"},"upload music files to participate"),c.a.createElement("div",{className:"participate"},n.stat),c.a.createElement("div",{className:"submit"},c.a.createElement("button",{id:"submit",className:"btn",onClick:function(){return f.apply(this,arguments)}},"upload"))))}),O=function(e){return c.a.createElement("div",{className:"notification"},e.msg)},k=function(e){var t=c.a.useState({comp:void 0}),a=Object(o.a)(t,2),n=a[0],i=a[1];return window.notify=function(e){i({comp:c.a.createElement(O,{msg:e})}),setTimeout((function(){i({comp:void 0})}),4e3)},c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"notification-container",id:"notification"},n.comp),c.a.createElement("div",{className:"title-main"},"Artist o Pedia"),c.a.createElement(l.a,null,c.a.createElement(s.a,{path:"/",exact:!0,component:N}),c.a.createElement(s.a,{path:"/area",exact:!0,component:w}),c.a.createElement(s.a,{path:"/competitions",exact:!0,component:g}),c.a.createElement(s.a,{path:"/competition",exact:!0,component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.title="Artistopedia",r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.9044b7d3.chunk.js.map