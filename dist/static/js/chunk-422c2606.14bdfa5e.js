(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-422c2606"],{"09f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,n){var o=l(),s=e-o,r=20,c=0;t="undefined"===typeof t?500:t;var d=function e(){c+=r;var l=Math.easeInOutQuad(c,o,s,t);a(l),c<t?i(e):n&&"function"===typeof n&&n()};d()}},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=a.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),s=l.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",l.appendChild(s)),a.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=a.color,s.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var l={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;t["a"]=l},6998:function(e,t,n){},8409:function(e,t,n){"use strict";var i=n("6998"),a=n.n(i);a.a},"8d41":function(e,t,n){},c4d6:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("router-view"),e._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("table.title")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n      "+e._s(e.$t("table.search"))+"\n    ")]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus",disabled:e.disabled},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.$t("table.add"))+"\n    ")]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"success",icon:"el-icon-refresh",disabled:e.disabled},on:{click:e.synchronizeData}},[e._v("\n      "+e._s(e.$t("table.synchronizeData"))+"\n    ")]),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"danger",icon:"el-icon-delete",disabled:e.disabled},on:{click:e.handleBatchDelete}},[e._v("\n      "+e._s(e.$t("table.delete"))+"\n    ")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.modelId")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.modelName"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180",align:"center",label:e.$t("table.modelKey")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.key))])]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:e.$t("table.actions"),align:"center","class-name":"small-padding fixed-width",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("router-link",{attrs:{to:"/workflowManage/workflow/modelerDesign/"+i.id}},[n("el-button",{attrs:{type:"success",icon:"el-icon-s-tools",disabled:e.disabled}},[e._v("\n            "+e._s(e.$t("table.designFlow"))+"\n          ")])],1),e._v(" "),n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("el-button",{attrs:{type:"primary"}},[e._v("\n            操作"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{icon:"el-icon-s-promotion",command:e.composeValue("deploy",i.id)}},[e._v(e._s(e.$t("table.deploy")))]),e._v(" "),n("el-dropdown-item",{attrs:{icon:"el-icon-delete",command:e.composeValue("del",i.id)}},[e._v(e._s(e.$t("table.delete")))])],1)],1)]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.start,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"start",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{title:e.formTitle[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.formData,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("table.modelName"),prop:"modelName"}},[n("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("table.modelKey"),prop:"modelKey"}},[n("el-input",{model:{value:e.formData.key,callback:function(t){e.$set(e.formData,"key",t)},expression:"formData.key"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:e.$t("table.description"),prop:"description"}},[n("el-input",{attrs:{autosize:{minRows:4,maxRows:8},type:"textarea",placeholder:"Please input"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        "+e._s(e.$t("table.cancel"))+"\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:function(t){"add"===e.dialogStatus?e.addSave():e.editSave()}}},[e._v("\n        "+e._s(e.$t("table.confirm"))+"\n      ")])],1)],1)],1)},a=[],l=n("f36f"),o=n("333d"),s=n("6724"),r={name:"ModelList",components:{Pagination:o["a"]},directives:{waves:s["a"]},filters:{},data:function(){return{list:null,total:0,listLoading:!0,listQuery:{start:1,pageSize:20},formData:{id:null,name:null,description:null,revision:1,key:null},dialogFormVisible:!1,dialogStatus:"",formTitle:{edit:this.$t("Edit"),add:this.$t("Add")},rules:{name:[{required:!0,message:"模型名称必填",trigger:"change"}],key:[{required:!0,message:"模型key必填",trigger:"change"}]},disabled:!1}},created:function(){this.getList()},methods:{composeValue:function(e,t){return{key:e,value:t}},getList:function(){var e=this;this.listLoading=!0,Object(l["i"])(this.listQuery).then((function(t){console.log(t.data),e.list=t.data.list,e.total=t.data.total,e.listLoading=!1}))},resetTemp:function(){this.formData={id:null,name:null,description:null,revision:1,key:null}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="add",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleCommand:function(e){switch(console.log(e),e.key){case"del":this.handleDelete(e.value);break;case"deploy":this.deployModel(e.value);break}},deployModel:function(e){var t=this;this.disabled=!0,Object(l["f"])(e).then((function(e){t.$message.success(e.message)})).finally((function(){t.disabled=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleBatchDelete:function(){var e=this.$refs.multipleTable.selection,t=[];if(0!==e.length){for(var n=0;n<e.length;n++)t.push(e[n].id);this.handleDelete(t)}else this.$message.error("请选择至少一条数据")},handleDelete:function(e){var t=this;this.$confirm("确定删除该数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e instanceof Array?Object(l["d"])(e).then((function(e){t.getList(),t.$message.success(e.message)})):Object(l["c"])(e).then((function(e){t.getList(),t.$message.success(e.message)}))})).catch((function(){t.$message.info("已取消")}))},addSave:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(console.log(e.formData),e.disabled=!0,Object(l["b"])(e.formData).then((function(t){e.$message.success(t.message),e.getList(),e.dialogFormVisible=!1})).finally((function(){e.disabled=!1})))}))},synchronizeData:function(){var e=this;this.disabled=!0,Object(l["k"])().then((function(t){e.$message.success(t.message),e.getList()})).finally((function(){e.disabled=!1}))}}},c=r,d=(n("8409"),n("2877")),u=Object(d["a"])(c,i,a,!1,null,"2c90704e",null);t["default"]=u.exports},f36f:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"k",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return p}));var i=n("b775");function a(e){return Object(i["a"])({url:"/api/activiti/createNewModel",method:"post",data:e})}function l(e){return Object(i["a"])({url:"/api/activiti/delModel",method:"delete",params:{id:e}})}function o(e){return Object(i["a"])({url:"/api/activiti/delModel/"+e,method:"delete"})}function s(e){return Object(i["a"])({url:"/api/activiti/getModels",method:"get",params:e})}function r(){return Object(i["a"])({url:"/api/activiti/synchronizeData",method:"post"})}function c(e){return Object(i["a"])({url:"/api/activiti/deployByModelId/"+e,method:"post"})}function d(e){return Object(i["a"])({url:"/api/activiti/getProcessDeploys",method:"get",params:e})}function u(e){return Object(i["a"])({url:"/api/activiti/activateProcess/"+e,method:"post"})}function m(e){return Object(i["a"])({url:"/api/activiti/pendProcess/"+e,method:"post"})}function f(e){return Object(i["a"])({url:"/api/activiti/deleteProcessInstance",method:"delete",params:e})}function p(e){return Object(i["a"])({url:"/api/activiti/getHistoryProcess",method:"get",params:e})}}}]);