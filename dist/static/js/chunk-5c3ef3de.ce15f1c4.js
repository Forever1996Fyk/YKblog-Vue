(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c3ef3de"],{"09f4":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,a){var r=s(),i=e-r,o=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=o;var s=Math.easeInOutQuad(u,r,i,t);l(s),u<t?n(e):a&&"function"===typeof a&&a()};c()}},3257:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("router-view"),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.title")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.$t("table.add"))+"\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleBatchDelete}},[e._v("\n      "+e._s(e.$t("table.delete"))+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.userId"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.userId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.startTime"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.startTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.endTime"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.endTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.reason"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.reason))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.leaveDays"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.leaveDays))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.processInstanceId"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.processInstanceId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.urlPath"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.urlPath))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center","class-name":"small-padding fixed-width",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v("\n          "+e._s(e.$t("table.edit"))+"\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(n.id)}}},[e._v("\n          "+e._s(e.$t("table.delete"))+"\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.start,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"start",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.formTitle[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.formData,"label-width":"100px"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.userId"),prop:"userId"}},[a("el-input",{model:{value:e.formData.userId,callback:function(t){e.$set(e.formData,"userId",t)},expression:"formData.userId"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.startTime"),prop:"startTime"}},[a("el-input",{model:{value:e.formData.startTime,callback:function(t){e.$set(e.formData,"startTime",t)},expression:"formData.startTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.endTime"),prop:"endTime"}},[a("el-input",{model:{value:e.formData.endTime,callback:function(t){e.$set(e.formData,"endTime",t)},expression:"formData.endTime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.reason"),prop:"reason"}},[a("el-input",{model:{value:e.formData.reason,callback:function(t){e.$set(e.formData,"reason",t)},expression:"formData.reason"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.leaveDays"),prop:"leaveDays"}},[a("el-input",{model:{value:e.formData.leaveDays,callback:function(t){e.$set(e.formData,"leaveDays",t)},expression:"formData.leaveDays"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.processInstanceId"),prop:"processInstanceId"}},[a("el-input",{model:{value:e.formData.processInstanceId,callback:function(t){e.$set(e.formData,"processInstanceId",t)},expression:"formData.processInstanceId"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("table.urlPath"),prop:"urlPath"}},[a("el-input",{model:{value:e.formData.urlPath,callback:function(t){e.$set(e.formData,"urlPath",t)},expression:"formData.urlPath"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        "+e._s(e.$t("table.cancel"))+"\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"add"===e.dialogStatus?e.addSave():e.editSave()}}},[e._v("\n        "+e._s(e.$t("table.confirm"))+"\n      ")])],1)],1)],1)},l=[],s=a("333d"),r=a("6724"),i=a("616b"),o=a("ace9"),u=a.n(o),c={name:"UserLeave",components:{Pagination:s["a"]},directives:{waves:r["a"]},filters:{whetherFilter:function(e){var t=u.a.whetherOptions.reduce((function(e,t){return e[t.key]=t.value,e}),{});return t[e]}},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{start:1,pageSize:20,title:null},formData:{id:"",userId:null,startTime:null,endTime:null,reason:null,leaveDays:null,processInstanceId:null,urlPath:null},dialogFormVisible:!1,dialogStatus:"",formTitle:{edit:this.$t("Edit"),add:this.$t("Add")},whetherOptions:u.a.whetherOptions,rules:{attrName:[{required:!0,message:"必填",trigger:"change"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(i["e"])(this.listQuery).then((function(t){console.log(t),e.list=t.data.data,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},resetTemp:function(){this.formData={id:"",userId:null,startTime:null,endTime:null,reason:null,leaveDays:null,processInstanceId:null,urlPath:null}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="add",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleUpdate:function(e){var t=this;this.formData=Object.assign({},e),this.dialogStatus="edit",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},addSave:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(console.log(e.formData),Object(i["a"])(e.formData).then((function(t){e.$message.success(t.message),e.getList(),e.dialogFormVisible=!1})))}))},editSave:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(console.log(e.formData),Object(i["d"])(e.formData).then((function(t){console.log(t),e.$message.success(t.message),e.getList(),e.dialogFormVisible=!1})))}))},handleDelete:function(e){var t=this;this.$confirm("确定删除该数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e instanceof Array?Object(i["c"])(e).then((function(e){t.getList(),t.$message.success("res.message")})):Object(i["b"])(e).then((function(e){t.getList(),t.$message.success("res.message")}))})).catch((function(){t.$message.info("已取消")}))},handleBatchDelete:function(){var e=this.$refs.multipleTable.selection,t=[];if(0!==e.length){for(var a=0;a<e.length;a++)t.push(e[a].id);this.handleDelete(t)}else this.$message.error("请选择至少一条数据")}}},d=c,f=a("2877"),m=Object(f["a"])(d,n,l,!1,null,null,null);t["default"]=m.exports},"616b":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return o}));var n=a("b775");function l(e){return Object(n["a"])({url:"/api/userLeave/addUserLeave",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/api/userLeave/editUserLeave",method:"put",data:e})}function r(e){return Object(n["a"])({url:"/api/userLeave/delUserLeave",method:"delete",params:{id:e}})}function i(e){return Object(n["a"])({url:"/api/userLeave/delUserLeave/"+e,method:"delete"})}function o(e){return Object(n["a"])({url:"/api/userLeave/getUserLeaves",method:"get",params:e})}},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function l(e,t){function a(a){var n=Object.assign({},t.value),l=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=l.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var r=s.getBoundingClientRect(),i=s.querySelector(".waves-ripple");switch(i?i.className="waves-ripple":(i=document.createElement("span"),i.className="waves-ripple",i.style.height=i.style.width=Math.max(r.width,r.height)+"px",s.appendChild(i)),l.type){case"center":i.style.top=r.height/2-i.offsetHeight/2+"px",i.style.left=r.width/2-i.offsetWidth/2+"px";break;default:i.style.top=(a.pageY-r.top-i.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",i.style.left=(a.pageX-r.left-i.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return i.style.backgroundColor=l.color,i.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var s={bind:function(e,t){e.addEventListener("click",l(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",l(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},r=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(r)),s.install=r;t["a"]=s},"8d41":function(e,t,a){},ace9:function(e,t){e.exports={whetherOptions:[{key:0,value:"否"},{key:1,value:"是"}],requestMethod:[{key:"GET",value:"GET"},{key:"POST",value:"POST"},{key:"PUT",value:"PUT"},{key:"DELETE",value:"DELETE"}],marryFlag:[{key:0,value:"未婚"},{key:1,value:"已婚"}],sex:[{key:0,value:"男"},{key:1,value:"女"}],education:[{key:0,value:"小学"},{key:1,value:"初中"},{key:2,value:"高中"},{key:3,value:"大专"},{key:4,value:"本科"},{key:5,value:"硕士"},{key:6,value:"博士"}],leaveTypeOption:[{key:0,value:"事假"},{key:1,value:"婚假"},{key:2,value:"产假"},{key:3,value:"病假"},{key:4,value:"公假"},{key:5,value:"年假"},{key:6,value:"其他"}],articleStatus:[{key:0,value:"已删除"},{key:1,value:"已发布"},{key:2,value:"草稿"}],processStatus:[{key:1,value:"已激活"},{key:2,value:"已挂起"},{key:0,value:"已结束"}],menuLevel:[{key:1,value:"菜单"},{key:2,value:"子菜单"},{key:3,value:"按钮"},{key:4,value:"api接口"}],filterKeyValue:function(e){var t=e.reduce((function(e,t){return e[t.key]=t.value,e}),{});return t},descFilter:function(e){return e&&e.length>20&&(e=e.substring(0,20)+"..."),e}}}}]);