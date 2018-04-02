parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({45:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{realName:"",studyId:"",name:"",pwd:"",confirmPwd:"",nametip:["用户名不能为空","ok","姓名不能为空","学号不能为空","姓名格式不对","学号不能带空格"],pwdtip:["密码不能少于6位","ok","确认密码是否正确","确认密码不能为空","密码格式不对","弱","中","强","超强"],dismissSecs:5,dismissCountDown:0,variant:"",info:""}},methods:{countDownChanged:function(t){this.dismissCountDown=t},keyup:function(t){38!=t.keyCode&&40!=t.keyCode&&(this.disabled||13!=t.keyCode||this.signup())},signup:function(){var t=this;this.axios.post("/signup",{realName:this.realName,studyId:this.studyId,name:this.name,pwd:this.pwd}).then(function(s){"注册成功"!=s.data.info?(t.variant="danger",t.dismissCountDown=t.dismissSecs,t.info=s.data.info):(t.$cookies.set("isLogin","1245465r654fghfgfwcb"+s.data.user,259200),t.$router.push({path:"/vote"}))},function(s){t.variant="danger",t.dismissCountDown=t.dismissSecs,t.info="服务器已关闭"})}},computed:{i:function(){var t=(/[0-9]/.test(this.pwd)?1:0)+(/[a-z]/.test(this.pwd)?1:0)+(/[A-Z]/.test(this.pwd)?1:0)+(/[!@#$^*]/.test(this.pwd)?1:0);return 4==t?8:3==t?7:2==t?6:5},realNameState:function(){return!!this.realName||null},studyIdState:function(){return!!this.studyId||null},nameState:function(){return!!this.name||null},pwdState:function(){return!!/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)||null},confirmPwdState:function(){return!!this.confirmPwd||null},disabled:function(){return!(this.name&&/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)&&this.realName&&/^[\u4E00-\u9FA5A-Za-z]+$/.test(this.realName)&&this.studyId&&this.confirmPwd&&this.confirmPwd==this.pwd)}}};var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"signup"}},[e("div",{staticClass:"alertContainer"},[e("b-alert",{attrs:{variant:t.variant,dismissible:"",show:t.dismissCountDown},on:{dismissed:function(a){t.dismissCountdown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.info)+" 这条消息将在 "+t._s(t.dismissCountDown)+" 秒后消失... ")])],1),t._v(" "),e("b-form",{on:{keyup:t.keyup}},[e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.realName,expression:"realName"}],staticClass:"form-control",attrs:{state:t.realNameState,placeholder:"例：梁家栋"},domProps:{value:t.realName},on:{input:function(a){a.target.composing||(t.realName=a.target.value)}}}),e("font",{directives:[{name:"show",rawName:"v-show",value:t.realName,expression:"realName"}],on:{click:function(a){a.stopPropagation(),t.realName=""}}},[e("i",{staticClass:"fa fa-times"})])],1),t._v(" "),e("span",[t._v(t._s(t.realName?/^[\u4E00-\u9FA5A-Za-z]+$/.test(t.realName)?t.nametip[1]:t.nametip[4]:t.nametip[2]))]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.studyId,expression:"studyId"}],staticClass:"form-control",attrs:{state:t.studyIdState,placeholder:"例：xxxxxxxxx"},domProps:{value:t.studyId},on:{input:function(a){a.target.composing||(t.studyId=a.target.value)}}}),e("font",{directives:[{name:"show",rawName:"v-show",value:t.studyId,expression:"studyId"}],on:{click:function(a){a.stopPropagation(),t.studyId=""}}},[e("i",{staticClass:"fa fa-times"})])],1),t._v(" "),e("span",[t._v(t._s(t.studyId?t.nametip[1]:t.nametip[3]))]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{state:t.nameState,placeholder:"输入用户名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),e("font",{directives:[{name:"show",rawName:"v-show",value:t.name,expression:"name"}],on:{click:function(a){a.stopPropagation(),t.name=""}}},[e("i",{staticClass:"fa fa-times"})])],1),t._v(" "),e("span",[t._v(t._s(t.name?t.nametip[1]:t.nametip[0]))]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{state:t.pwdState,placeholder:"输入密码"},domProps:{value:t.pwd},on:{input:function(a){a.target.composing||(t.pwd=a.target.value)}}}),e("font",{directives:[{name:"show",rawName:"v-show",value:t.pwd,expression:"pwd"}],on:{click:function(a){a.stopPropagation(),t.pwd=""}}},[e("i",{staticClass:"fa fa-times"})])],1),t._v(" "),e("span",[t._v(t._s(t.pwd.length>=6?/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(t.pwd)?t.pwdtip[t.i]:t.pwdtip[4]:t.pwdtip[0]))]),t._v(" "),e("div",{staticClass:"input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPwd,expression:"confirmPwd"}],staticClass:"form-control",attrs:{state:t.confirmPwdState,placeholder:"确认密码"},domProps:{value:t.confirmPwd},on:{input:function(a){a.target.composing||(t.confirmPwd=a.target.value)}}}),e("font",{directives:[{name:"show",rawName:"v-show",value:t.confirmPwd,expression:"confirmPwd"}],on:{click:function(a){a.stopPropagation(),t.confirmPwd=""}}},[e("i",{staticClass:"fa fa-times"})])],1),t._v(" "),e("span",[t._v(t._s(t.confirmPwd?t.confirmPwd==t.pwd?t.pwdtip[1]:t.pwdtip[2]:t.pwdtip[3]))])]),t._v(" "),e("p",[e("button",{staticClass:"form-control",attrs:{disabled:t.disabled},on:{click:function(a){return a.stopPropagation(),t.signup(a)}}},[t._v("注册")]),t._v(" "),e("router-link",{attrs:{to:"/signin"}},[t._v("登录")])],1)],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});
},{}]},{},[45])
//# sourceMappingURL=signup.7dde6407.map