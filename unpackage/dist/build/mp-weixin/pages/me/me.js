(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{"0df9":function(t,e,n){"use strict";n.r(e);var r=n("c4d1"),i=n("a7f3");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("3313");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"3d37c500",null,!1,r["a"],o);e["default"]=c.exports},1334:function(t,e,n){"use strict";var r=n("9e5e"),i=n.n(r);i.a},3313:function(t,e,n){"use strict";var r=n("96dc"),i=n.n(r);i.a},"3b32":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=(t._self._c,JSON.stringify(t.info));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"5ee8":function(t,e,n){},7770:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4795"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,a,o){try{var u=t[a](o),c=u.value}catch(f){return void n(f)}u.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,c,"next",t)}function c(t){a(o,r,i,u,c,"throw",t)}u(void 0)}))}}var u={props:{bgColor:{type:String,default:"#fffbe8"},color:{type:String,default:"#ed6a0c"},title:{type:String,default:""},speed:{type:String,required:!0}},data:function(){return{intervalStatus:null,interval:20,childWidth:0,offsetLeft:0,parentWidth:0}},methods:{quertViewWidth:function(e){var n=this;return new Promise((function(r){var i=t.createSelectorQuery(),a=n;i.in(a).select(e).boundingClientRect((function(t){r(t.width)})).exec()}))},startMarquee:function(){var t=this;return o(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,n.stopMarquee(),e.next=4,n.quertViewWidth(".custom-notice-broadcast");case 4:return n.parentWidth=e.sent,e.next=7,n.quertViewWidth(".custom-notice-content");case 7:n.childWidth=e.sent,n.excuseAnimation();case 9:case"end":return e.stop()}}),e)})))()},excuseAnimation:function(){var t=this;t.childWidth>t.parentWidth&&(t.intervalStatus=setInterval((function(){t.offsetLeft<=0?t.offsetLeft>=-t.childWidth?t.offsetLeft=t.offsetLeft-t.speed:t.offsetLeft=t.parentWidth:t.offsetLeft=t.offsetLeft-t.speed}),t.interval))},stopMarquee:function(){var t=this;t.intervalStatus&&clearInterval(t.intervalStatus)}},mounted:function(){var t=this;t.startMarquee()}};e.default=u}).call(this,n("543d")["default"])},"84c7":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=(t._self._c,parseInt(t.slotheight));t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"954a":function(t,e,n){"use strict";n.r(e);var r=n("bffc"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"96dc":function(t,e,n){},"9a22":function(t,e,n){"use strict";n.r(e);var r=n("3b32"),i=n("b5d4");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("daae");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},"9e5e":function(t,e,n){},a7f3:function(t,e,n){"use strict";n.r(e);var r=n("7770"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},b5d4:function(t,e,n){"use strict";n.r(e);var r=n("e0b1"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},bffc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{logoImg:{type:String,default:""},scrollTop:{type:Number},title:{type:String,default:"标题"},bgcolor:{type:String,default:"#000"},mode:{type:String,default:"normal"},color:{type:String,default:"#fff"},slotheight:{type:String,default:"0"},toolDividing:{type:String,default:"rgba(125,125,125,.8)"},toolBgColor:{type:String,default:"rgba(125,125,125,.8)"},toolcolor:{type:String,default:"rgba(125,125,125,.8)"}},data:function(){return{isScroll:!1,navheight:0,statusBarHeight:0,menuHeight:0,haveBack:!1,btnHeight:30,btnWidth:70}},methods:{getSysHeightInfo:function(){var e,n,r,i,a,o=this;e=t.getSystemInfoSync().statusBarHeight,n=t.getMenuButtonBoundingClientRect(),r=n.height+2*(n.top-e),i=r+e,n.height,n.width,a=1!==getCurrentPages().length,o.navheight=i,o.statusBarHeight=e,o.menuHeight=r,o.haveBack=a;var u=t.getSystemInfoSync();getApp().globalData.StatusHeight=i+parseInt(o.slotheight),getApp().globalData.winHeight=u.windowHeight-getApp().globalData.StatusHeight},goback:function(){var e=getCurrentPages()[getCurrentPages().length-2];t.navigateBack({success:function(){e.onLoad()}})},goHome:function(){t.reLaunch({url:"../../pages/index/index"})},getTool:function(t){this.$emit("getTool",t)}},mounted:function(){this.getSysHeightInfo()},watch:{scrollTop:function(t,e){var n=this;n.isScroll=t>1}}};e.default=n}).call(this,n("543d")["default"])},c4d1:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},d78b:function(t,e,n){"use strict";n.r(e);var r=n("84c7"),i=n("954a");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("1334");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"0658a9ac",null,!1,r["a"],o);e["default"]=c.exports},daae:function(t,e,n){"use strict";var r=n("5ee8"),i=n.n(r);i.a},e0b1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("d78b")),i=s(n("0df9")),a=n("2f6a"),o=f(n("526b")),u=s(n("1473"));function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function f(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=r?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function s(t){return t&&t.__esModule?t:{default:t}}var l={components:{customNav:r.default,customNotice:i.default},data:function(){return{info:{}}},methods:{bindGetUserInfo:function(e){var n=this,r=e.detail.userInfo;console.log(r.avatarUrl),console.log(r.nickName),console.log(r.province+r.city),wx.login({success:function(e){if(e.code){var i={code:e.code,name:r.nickName,city:r.province+r.city,avatarUrl:r.avatarUrl};(0,a.request)(o.Api.ApiRoot+"/information/setVisitorsInfo",i,"POST").then((function(e){n.info=i,t.setStorage({infoMessage:u.default.base64encode(JSON.stringify(i))})}))}else console.log("登录失败！"+e.errMsg)}})}},mounted:function(){this.StatusHeight=getApp().globalData.StatusHeight;t.getSetting({success:function(t){console.log(t)}})}};e.default=l}).call(this,n("543d")["default"])},fdfe:function(t,e,n){"use strict";(function(t){n("de01");r(n("66fd"));var e=r(n("9a22"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fdfe","common/runtime","common/vendor"]]]);