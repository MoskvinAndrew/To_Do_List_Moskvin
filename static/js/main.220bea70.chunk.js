(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{104:function(t,e,a){},105:function(t,e,a){},128:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),l=a.n(i);a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(105);var r,c,s=a(171),d=a(172),u=a(173),f=a(164),m=a(130),p=a(167),b=a(175),g=a(176),k=a(174),v=a(17),h=a(27),E=a(80),C=a.n(E).a.create(Object(h.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"a4ccc59a-b0d7-4cb8-b389-cc3b34f67e84"}})),j=function(){return C.get("todo-lists")},O=function(t){return C.post("todo-lists",{title:t})},T=function(t){return C.delete("todo-lists/".concat(t))},y=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},I=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},w=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},S=function(t,e,a){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},x=function(t){return C.post("auth/login",t)},L=function(){return C.delete("auth/login")},F=function(){return C.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var P=function(t,e){t.messages.length?e(H({error:t.messages[0]})):e(H({error:"Some error occurred"})),e(R({status:"failed"}))},z=function(t,e){e(H(t.message?{error:t.message}:{error:"Some error occurred"})),e(R({status:"failed"}))},D=a(26),M=Object(D.c)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.isLoggedIn}}}),N=M.actions.setIsLoggedInAC,_=M.reducer,q=Object(D.c)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppErrorAC:function(t,e){t.error=e.payload.error},setAppStatusAC:function(t,e){t.status=e.payload.status},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),B=q.actions,H=B.setAppErrorAC,R=B.setAppStatusAC,U=B.setAppInitializedAC,J=q.reducer,K=Object(D.c)({name:"todolist",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(h.a)(Object(h.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),W=K.reducer,V=K.actions,Y=V.removeTodolistAC,$=V.addTodolistAC,G=V.changeTodolistTitleAC,Q=V.changeTodolistFilterAC,X=V.changeTodolistEntityStatusAC,Z=V.setTodolistsAC,tt=Object(D.b)("tasks/fetchTasksTC",(function(t,e){return e.dispatch(R({status:"loading"})),I(t).then((function(a){var n=a.data.items;return e.dispatch(R({status:"succeeded"})),{tasks:n,todolistId:t}}))})),et=Object(D.c)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(h.a)(Object(h.a)({},a[n]),e.payload.model))}},extraReducers:function(t){t.addCase($,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(Y,(function(t,e){delete t[e.payload.id]})),t.addCase(Z,(function(t,e){e.payload.todolists.forEach((function(e){return t[e.id]=[]}))})),t.addCase(tt.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks}))}}),at=et.reducer,nt=et.actions,ot=nt.removeTaskAC,it=nt.addTaskAC,lt=nt.updateTaskAC,rt=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var l=Object(h.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);S(a,t,l).then((function(o){if(0===o.data.resultCode){var i=lt({taskId:t,todolistId:a,model:e});n(i)}else P(o.data,n)})).catch((function(t){z(t,n)}))}else console.warn("task not found in the state")}},ct=a(168),st=a(129),dt=a(45),ut=a(177),ft=a(165),mt=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var l=Object(n.useState)(""),r=Object(dt.a)(l,2),c=r[0],s=r[1],d=Object(n.useState)(null),u=Object(dt.a)(d,2),m=u[0],p=u[1],b=function(){""!==c.trim()?(e(c),s("")):p("Title is required")};return o.a.createElement("div",null,o.a.createElement(ut.a,{variant:"outlined",disabled:i,error:!!m,value:c,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==m&&p(null),13===t.charCode&&b()},label:"Title",helperText:m}),o.a.createElement(f.a,{color:"primary",onClick:b,disabled:i},o.a.createElement(ft.a,null)))})),pt=a(87),bt=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(dt.a)(e,2),i=a[0],l=a[1],r=Object(n.useState)(t.value),c=Object(dt.a)(r,2),s=c[0],d=c[1];return i?o.a.createElement(ut.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){l(!0),d(t.value)}},t.value)})),gt=a(166),kt=a(179),vt=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===r.Completed?"is-done":""},o.a.createElement(kt.a,{checked:t.task.status===r.Completed,color:"primary",onChange:a}),o.a.createElement(bt,{value:t.task.title,onChange:i}),o.a.createElement(f.a,{onClick:e},o.a.createElement(gt.a,null)))})),ht=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(pt.a)(t,["demo"]);console.log("Todolist called");var l=Object(v.b)();Object(n.useEffect)((function(){if(!a){var t=tt(i.todolist.id);l(t)}}),[]);var c=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),d=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),u=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),m=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(bt,{value:i.todolist.title,onChange:s}),o.a.createElement(f.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(gt.a,null))),o.a.createElement(mt,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,b.map((function(t){return o.a.createElement(vt,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(p.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:d,color:"default"},"All"),o.a.createElement(p.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:u,color:"primary"},"Active"),o.a.createElement(p.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:m,color:"secondary"},"Completed")))})),Et=a(13),Ct=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(v.c)((function(t){return t.todolists})),l=Object(v.c)((function(t){return t.tasks})),r=Object(v.c)((function(t){return t.auth.isLoggedIn})),c=Object(v.b)();Object(n.useEffect)((function(){if(!a&&r){var t=function(t){t(R({status:"loading"})),j().then((function(e){t(Z({todolists:e.data})),t(R({status:"succeeded"}))})).catch((function(e){z(e,t)}))};c(t)}}),[]);var s=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){A(e,t).then((function(n){var o=ot({todolistId:e,taskId:t});a(o)}))}}(t,e);c(a)}),[]),d=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(R({status:"loading"})),w(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=it({task:e});a(n),a(R({status:"succeeded"}))}else P(t.data,a)})).catch((function(t){z(t,a)}))}}(t,e);c(a)}),[]),u=Object(n.useCallback)((function(t,e,a){var n=rt(t,{status:e},a);c(n)}),[]),f=Object(n.useCallback)((function(t,e,a){var n=rt(t,{title:e},a);c(n)}),[]),m=Object(n.useCallback)((function(t,e){var a=Q({filter:t,id:e});c(a)}),[]),p=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(R({status:"loading"})),t(X({id:e,status:"loading"})),T(e).then((function(a){t(Y({id:e})),t(R({status:"succeeded"}))}))});c(a)}),[]),b=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){y(t,e).then((function(n){a(G({id:t,title:e}))}))}}(t,e);c(a)}),[]),g=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(R({status:"loading"})),O(t).then((function(t){e($({todolist:t.data.data.item})),e(R({status:"succeeded"}))})).catch((function(t){console.log(t.message),e(H({error:"some error"}))})).finally((function(){e(R({status:"succeeded"}))}))}}(t);c(e)}),[c]);return r?o.a.createElement(o.a.Fragment,null,o.a.createElement(ct.a,{container:!0,style:{padding:"20px"}},o.a.createElement(mt,{addItem:g})),o.a.createElement(ct.a,{container:!0,spacing:3},i.map((function(t){var e=l[t.id];return o.a.createElement(ct.a,{item:!0,key:t.id},o.a.createElement(st.a,{style:{padding:"10px"}},o.a.createElement(ht,{todolist:t,tasks:e,removeTask:s,changeFilter:m,addTask:d,changeTaskStatus:u,removeTodolist:p,changeTaskTitle:f,changeTodolistTitle:b,demo:a})))})))):o.a.createElement(Et.a,{to:"/login"})},jt=a(181),Ot=a(178);function Tt(t){return o.a.createElement(Ot.a,Object.assign({elevation:6,variant:"filled"},t))}function yt(){var t=Object(v.c)((function(t){return t.app.error})),e=Object(v.b)(),a=function(t,a){"clickaway"!==a&&e(H({error:null}))},n=null!==t;return o.a.createElement(jt.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(Tt,{onClose:a,severity:"error"},t))}var It=a(52),At=a(182),wt=a(163),St=a(169),xt=a(170),Lt=a(86),Ft=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.auth.isLoggedIn})),a=Object(Lt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(R({status:"loading"})),x(a).then((function(e){0===e.data.resultCode?(t(N({isLoggedIn:!0})),t(R({status:"succeeded"}))):P(e.data,t)})).catch((function(e){z(e,t)}))}))}});return e?o.a.createElement(Et.a,{to:"/"}):o.a.createElement(ct.a,{container:!0,justify:"center"},o.a.createElement(ct.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(At.a,null,o.a.createElement(wt.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(St.a,null,o.a.createElement(ut.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(ut.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(xt.a,{label:"Remember me",control:o.a.createElement(kt.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var Pt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(v.c)((function(t){return t.app.status})),l=Object(v.c)((function(t){return t.app.isInitialized})),r=Object(v.c)((function(t){return t.auth.isLoggedIn})),c=Object(v.b)();Object(n.useEffect)((function(){c((function(t){F().then((function(e){0===e.data.resultCode&&t(N({isLoggedIn:!0})),t(U({isInitialized:!0}))}))}))}),[]);var h=Object(n.useCallback)((function(){c((function(t){t(R({status:"loading"})),L().then((function(e){0===e.data.resultCode?(t(N({isLoggedIn:!1})),t(R({status:"succeeded"}))):P(e.data,t)})).catch((function(e){z(e,t)}))}))}),[]);return l?o.a.createElement(It.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(yt,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(k.a,null)),o.a.createElement(m.a,{variant:"h6"},"Todolists"),r&&o.a.createElement(p.a,{color:"inherit",onClick:h},"Log out")),"loading"===i&&o.a.createElement(b.a,null)),o.a.createElement(g.a,{fixed:!0},o.a.createElement(Et.b,{exact:!0,path:"/To_Do_List_Moskvin",render:function(){return o.a.createElement(Ct,{demo:a})}}),o.a.createElement(Et.b,{path:"/login",render:function(){return o.a.createElement(Ft,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(s.a,null))},zt=a(22),Dt=a(47),Mt=Object(zt.c)({tasks:at,todolists:W,app:J,auth:_}),Nt=Object(D.a)({reducer:Mt,middleware:function(t){return t().prepend(Dt.a)}});window.store=Nt,l.a.render(o.a.createElement(v.a,{store:Nt},o.a.createElement(Pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},99:function(t,e,a){t.exports=a(128)}},[[99,1,2]]]);
//# sourceMappingURL=main.220bea70.chunk.js.map