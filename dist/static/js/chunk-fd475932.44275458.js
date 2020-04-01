(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd475932"],{2017:function(t,n,s){"use strict";var e=s("b12d"),o=s.n(e);o.a},3602:function(t,n,s){"use strict";var e=s("b812"),o=s.n(e);o.a},9067:function(t,n,s){},"9ed6":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[t._v("\n        "+t._s(t.$t("login.title"))+"\n      ")]),t._v(" "),s("lang-select",{staticClass:"set-language"})],1),t._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),s("el-input",{ref:"username",attrs:{placeholder:t.$t("login.username"),name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(n){t.capsTooltip=n},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),s("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(n){t.capsTooltip=!1}},nativeOn:{keyup:[function(n){return t.checkCapslock(n)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleLogin(n)}]},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),s("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),t._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v("\n      "+t._s(t.$t("login.logIn"))+"\n    ")]),t._v(" "),s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"tips"},[s("span",[t._v(t._s(t.$t("login.username"))+" : admin")]),t._v(" "),s("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"18px"}},[t._v("\n          "+t._s(t.$t("login.username"))+" : editor\n        ")]),t._v(" "),s("span",[t._v(t._s(t.$t("login.password"))+" : "+t._s(t.$t("login.any")))])]),t._v(" "),s("el-button",{staticClass:"thirdparty-button",attrs:{type:"primary"},on:{click:function(n){t.showDialog=!0}}},[t._v("\n        "+t._s(t.$t("login.thirdparty"))+"\n      ")])],1)],1),t._v(" "),s("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog},on:{"update:visible":function(n){t.showDialog=n}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("social-sign")],1)],1)},o=[],i=(s("ac6a"),s("456d"),s("1131")),a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"social-signup-container"},[s("div",{staticClass:"sign-btn",on:{click:function(n){return t.wechatHandleClick("wechat")}}},[s("span",{staticClass:"wx-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v("\n    WeChat\n  ")]),t._v(" "),s("div",{staticClass:"sign-btn",on:{click:function(n){return t.tencentHandleClick("tencent")}}},[s("span",{staticClass:"qq-svg-container"},[s("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v("\n    QQ\n  ")])])},r=[],l={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},c=l,u=(s("d9fb"),s("2877")),p=Object(u["a"])(c,a,r,!1,null,"7309fbbb",null),d=p.exports,g={name:"Login",components:{LangSelect:i["a"],SocialSign:d},data:function(){return{loginForm:{username:"",password:""},loginRules:{},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(t){var n=t.query;n&&(this.redirect=n.redirect,this.otherQuery=this.getOtherQuery(n))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(t){var n=t.key;this.capsTooltip=n&&1===n.length&&n>="A"&&n<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(n){if(!n)return console.log("error submit!!"),!1;t.loading=!0;var s={account:t.loginForm.username,password:t.loginForm.password};t.$store.dispatch("user/login",s).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(){t.loading=!1}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(n,s){return"redirect"!==s&&(n[s]=t[s]),n}),{})}}},v=g,f=(s("2017"),s("3602"),Object(u["a"])(v,e,o,!1,null,"46ee0264",null));n["default"]=f.exports},b12d:function(t,n,s){},b812:function(t,n,s){},d9fb:function(t,n,s){"use strict";var e=s("9067"),o=s.n(e);o.a}}]);