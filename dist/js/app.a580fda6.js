(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,m=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d2221e9":"353dd7cf","chunk-4156869c":"b4cae061","chunk-5b51adcc":"e1ad10af","chunk-6000e56e":"dbef4a48","chunk-2d21842b":"5786e59b","chunk-6b1d4b78":"7a49d690","chunk-7804cb7e":"70f419b3"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4156869c":1,"chunk-5b51adcc":1,"chunk-6b1d4b78":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2221e9":"31d6cfe0","chunk-4156869c":"d3a7447e","chunk-5b51adcc":"51a83e73","chunk-6000e56e":"31d6cfe0","chunk-2d21842b":"31d6cfe0","chunk-6b1d4b78":"47739bab","chunk-7804cb7e":"31d6cfe0"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){i=m[u],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var m=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/ my-first-project /",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"36a9":function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["N"])("data-v-458ae21f");Object(r["x"])("data-v-458ae21f");var c={class:"content-window"},o={key:0};Object(r["v"])();var u=a((function(e,t,n,a,u,s){return Object(r["u"])(),Object(r["e"])("div",c,[Object(r["i"])("div",{class:["card-message",n.type]},[Object(r["i"])("h3",null,Object(r["E"])(n.title),1),n.text?(Object(r["u"])(),Object(r["e"])("p",o,Object(r["E"])(n.text),1)):Object(r["f"])("",!0)],2)])})),s={props:["title","text","type"]};s.render=u,s.__scopeId="data-v-458ae21f";t["a"]=s},"38c8":function(e,t,n){},"4baa":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){return Object(r["u"])(),Object(r["e"])(Object(r["C"])(a.layout+"-layout"))}function c(e,t,n,a,c,o){var u=Object(r["B"])("app-message"),s=Object(r["B"])("router-view");return Object(r["u"])(),Object(r["e"])(r["a"],null,[a.message?(Object(r["u"])(),Object(r["e"])(u,{key:0,title:a.message.title,text:a.message.text,type:a.message.type},null,8,["title","text","type"])):Object(r["f"])("",!0),Object(r["i"])(s)],64)}var o=n("36a9"),u=n("5502"),s={setup:function(){Object(r["t"])((function(){return e.dispatch("message/setMessage")}));var e=Object(u["b"])(),t=Object(r["c"])((function(){return e.getters["message/getMessage"]}));return{message:t}},components:{AppMessage:o["a"]}};s.render=c;var i=s;function l(e,t,n,a,c,o){var u=Object(r["B"])("Navbar"),s=Object(r["B"])("router-view");return Object(r["u"])(),Object(r["e"])(r["a"],null,[Object(r["i"])(u),Object(r["i"])(s)],64)}var m={class:"navbar"},p=Object(r["i"])("h3",null,"Vue chat",-1),d=Object(r["h"])("Информация"),f=Object(r["h"])("Комментарии"),b=Object(r["h"])("Помощь"),h=Object(r["h"])("Чаты"),g={key:0},v={key:1},j=Object(r["i"])("span",null,null,-1);function O(e,t,n,a,c,o){var u=Object(r["B"])("router-link");return Object(r["u"])(),Object(r["e"])("header",null,[Object(r["i"])("nav",m,[Object(r["i"])(u,{to:"/"},{default:Object(r["K"])((function(){return[p]})),_:1}),Object(r["i"])("ul",{class:["navbar-menu",{active:a.burger}]},[Object(r["i"])("li",null,[Object(r["i"])(u,{to:{name:"information"}},{default:Object(r["K"])((function(){return[d]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(u,{to:{name:"comments"}},{default:Object(r["K"])((function(){return[f]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(u,{to:{name:"help"}},{default:Object(r["K"])((function(){return[b]})),_:1})]),Object(r["i"])("li",null,[Object(r["i"])(u,{to:{name:"chats"}},{default:Object(r["K"])((function(){return[h]})),_:1})]),a.isAuth?(Object(r["u"])(),Object(r["e"])("li",v,[Object(r["i"])("a",{onClick:t[2]||(t[2]=Object(r["M"])((function(){return a.logout&&a.logout.apply(a,arguments)}),["prevent"]))},"Выход")])):(Object(r["u"])(),Object(r["e"])("li",g,[Object(r["i"])("a",{onClick:t[1]||(t[1]=Object(r["M"])((function(){return a.login&&a.login.apply(a,arguments)}),["prevent"]))},"Войти")]))],2),Object(r["i"])("div",{class:["burger",{active:a.burger}],onClick:t[3]||(t[3]=function(){return a.switchBurger&&a.switchBurger.apply(a,arguments)})},[j],2)])])}var y=n("6c02"),k={setup:function(){var e=Object(y["d"])(),t=Object(u["b"])(),n=Object(r["c"])((function(){return t.getters["auth/isAuntification"]})),a=Object(r["c"])((function(){return t.getters.getBurgerInfo})),c=function(){return t.commit("switchBurger")},o=function(){t.commit("auth/logout"),t.commit("alias/clearAlias"),e.push("/auth"),c()},s=function(){return e.push("/auth")};return{logout:o,login:s,burger:a,switchBurger:c,isAuth:n}}};k.render=O;var w=k,A={components:{Navbar:w}};A.render=l;var x=A,M={components:{AuthLayout:i,MainLayout:x},setup:function(){var e=Object(y["c"])(),t=Object(r["c"])((function(){return e.meta.layout}));return Object(r["J"])(t,(function(){return"main"==t.value?document.querySelector("body").classList.add("main"):document.querySelector("body").classList.remove("main")})),{layout:t}}};n("913b");M.render=a;var E=M,T=(n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),S=n("1da1"),_=(n("96cf"),n("bc3a")),P=n.n(_),B=n("ade3"),C=Object(B["a"])({INVALID_PASSWORD:"Пароль не верный ",EMAIL_NOT_FOUND:"Такого email нет в системе",auth:"Пожайлуста ввойдите в систему",EMAIL_EXISTS:"Адрес электронной почты уже используется",OPERATION_NOT_ALLOWED:"Пароль для входа в этот проект отключен",TOO_MANY_ATTEMPTS_TRY_LATER:"Мы заблокировали все запросы с этого устройства из-за необычной активности. Попробуйте позже."},"EMAIL_NOT_FOUND","Пользовательской записи с таким email , нет!!");function R(e){return C[e]}var I={namespaced:!0,state:function(){return{authToken:localStorage.getItem("jwt-token")}},getters:{isAuntification:function(e){return!!e.authToken},token:function(e){return e.authToken}},mutations:{logout:function(e){e.authToken=null,localStorage.removeItem("jwt-token")},setToken:function(e,t){e.authToken=t,localStorage.setItem("jwt-token",t)}},actions:{login:function(e,t){return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyBXScDrz3nBTH2EqeXWbKojvPu2Deld5BY"),n.next=5,P.a.post(c,Object(T["a"])(Object(T["a"])({},t),{},{returnSecureToken:!0}));case 5:o=n.sent,u=o.data,r("setToken",u.idToken),a("alias/setAlias",u.email,{root:!0}),n.next=15;break;case 11:throw n.prev=11,n.t0=n["catch"](1),a("message/setMessage",{title:"Ошибка аутентификации!",text:R(n.t0.response.data.error.message),type:"danger"},{root:!0}),Error("Error Auntification");case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()}}},N={namespaced:!0,state:function(){return{message:null}},getters:{getMessage:function(e){return e.message}},mutations:{setMessage:function(e,t){e.message=t},clearMessage:function(e){e.message=null}},actions:{setMessage:function(e,t){var n=e.commit;n("setMessage",t),setTimeout((function(){n("clearMessage")}),6e3)}}},L={namespaced:!0,actions:{createAccount:function(e,t){return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyBXScDrz3nBTH2EqeXWbKojvPu2Deld5BY"),n.next=5,P.a.post(a,t);case 5:return n.next=7,P.a.post("https://vue-with-alias-default-rtdb.firebaseio.com/alias.json",{email:t.email,alias:t.alias});case 7:r("message/setMessage",{type:"primary",title:"Заявка на создание аккаунта",text:"Аккаунт успешно создан!"},{root:!0}),n.next=14;break;case 10:throw n.prev=10,n.t0=n["catch"](1),r("message/setMessage",{type:"danger",title:R(n.t0.response.data.error.message)},{root:!0}),Error("Error Create Account");case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()}}},D={namespaced:!0,actions:{recoverPass:function(e,t){return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,console.log(t),a="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=".concat("AIzaSyBXScDrz3nBTH2EqeXWbKojvPu2Deld5BY"),n.next=6,P.a.post(a,Object(T["a"])({requestType:"PASSWORD_RESET"},t));case 6:r("message/setMessage",{title:"Письмо отправлено на вашу почту",type:"primary"},{root:!0}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),r("message/setMessage",{title:R(n.t0.response.data.error.message),type:"danger"},{root:!0});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},q=(n("4de4"),n("b64b"),{namespaced:!0,state:function(){return{alias:localStorage.getItem("yourName")}},getters:{getAlias:function(e){return e.alias}},mutations:{setAlias:function(e,t){e.alias=t,localStorage.setItem("yourName",t)},clearAlias:function(e){e.alias=null,localStorage.removeItem("yourName")}},actions:{setAlias:function(e,t){return Object(S["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,P.a.get("https://vue-with-alias-default-rtdb.firebaseio.com/alias.json");case 3:a=n.sent,c=a.data,o=Object.keys(c).filter((function(e){return c[e].email==t})),r("setAlias",c[o[0]].alias);case 7:case"end":return n.stop()}}),n)})))()}}}),K=(n("d81d"),P.a.create({baseURL:"https://vue-with-base-default-rtdb.firebaseio.com/"}));K.interceptors.response.use(null,(function(e){return 401===e.response.status&&Y.commit("auth/logout"),Promise.reject(e)}));var W=K,X={namespaced:!0,state:function(){return{comments:[]}},mutations:{setComment:function(e,t){e.comments=t},addComment:function(e,t){e.comments.push(t)}},getters:{getComments:function(e){return e.comments}},actions:{sendComment:function(e,t){return Object(S["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=Y.getters["auth/token"],e.next=4,W.post("/comments.json?auth=".concat(n),t);case 4:Y.commit("comments/addComment",t),Y.dispatch("message/setMessage",{title:"Комментарий успешно отправлен!",type:"primary"},{root:!0}),e.next=12;break;case 8:throw e.prev=8,e.t0=e["catch"](0),Y.dispatch("message/setMessage",{title:"Ошибка в отправке комментария!",type:"danger"},{root:!0}),Error("Error Comments");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},load:function(e){return Object(S["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,a=Y.getters["auth/token"],t.next=5,W.get("/comments.json?auth=".concat(a));case 5:c=t.sent,o=c.data,u=Object.keys(o).map((function(e){return Object(T["a"])({},o[e])})),n("setComment",u),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),r("message/setMessage",{title:t.t0.message,type:"danger"},{root:!0}),Error("Error Comments");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},z={namespaced:!0,state:function(){return{messages:[{id:"chat1",avatar:"https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava4.jpg",text:"Привет , чат работает",name:"Alex"},{id:"chat2",avatar:"https://klike.net/uploads/posts/2019-03/1551514041_16.jpg",text:"Да , ты можешь отправлять мне сообщения ",name:"Other users"},{id:"chat1",avatar:"https://shapka-youtube.ru/wp-content/uploads/2020/12/man-ava4.jpg",text:"Это круто",name:"Alex"}],prints:{chat1:!1,chat2:!1}}},getters:{getMessages:function(e){return e.messages},getPrints:function(e){return e.prints}},mutations:{addMessage:function(e,t){e.messages.push(t)},changePrints:function(e,t){e.prints[t]=!e.prints[t],console.log(e.prints)},unmountedPrints:function(e,t){e.prints[t]=!1}}},U=Object(u["a"])({state:function(){return{burgerActive:!1,modalRecover:!1}},getters:{getBurgerInfo:function(e){return e.burgerActive},getModal:function(e){return e.modalRecover}},mutations:{switchBurger:function(e){e.burgerActive=!e.burgerActive},switchModal:function(e){e.modalRecover=!e.modalRecover}},modules:{auth:I,message:N,registr:L,recover:D,alias:q,comments:X,chatMessages:z}}),Y=U,H=[{path:"/",name:"chats",component:function(){return n.e("chunk-7804cb7e").then(n.bind(null,"2db3"))},meta:{layout:"main",auth:!1}},{path:"/information",name:"information",component:function(){return n.e("chunk-2d2221e9").then(n.bind(null,"ccf9"))},meta:{layout:"main",auth:!1}},{path:"/auth",name:"auntification",component:function(){return Promise.all([n.e("chunk-6000e56e"),n.e("chunk-6b1d4b78")]).then(n.bind(null,"f61f"))},meta:{layout:"auth",auth:!1}},{path:"/registration",name:"registration",component:function(){return Promise.all([n.e("chunk-6000e56e"),n.e("chunk-2d21842b")]).then(n.bind(null,"c9dc"))},meta:{layout:"auth",auth:!1}},{path:"/help",name:"help",component:function(){return n.e("chunk-5b51adcc").then(n.bind(null,"8f9d"))},meta:{layout:"main",auth:!1}},{path:"/comments",name:"comments",component:function(){return n.e("chunk-4156869c").then(n.bind(null,"4367"))},meta:{layout:"main",auth:!0}}],F=Object(y["a"])({history:Object(y["b"])(),routes:H,linkActiveClass:"active",linkExactActiveClass:"active"});F.beforeEach((function(e,t,n){var r=e.meta.auth;r&&Y.getters["auth/isAuntification"]?n():r&&!Y.getters["auth/isAuntification"]?(Y.dispatch("message/setMessage",{type:"danger",title:"Для начала войдите в cвой аккаунт"}),n({path:"/auth",query:{message:"auth"}})):n()}));var J=F,V=(n("38c8"),Object(r["d"])(E));V.use(Y),V.use(J),V.mount("#app")},"913b":function(e,t,n){"use strict";n("4baa")}});
//# sourceMappingURL=app.a580fda6.js.map