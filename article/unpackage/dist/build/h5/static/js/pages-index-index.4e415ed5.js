(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"08cb":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-text",[this._v(this._s(this.dateShow))])},r=[]},1843:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home .content[data-v-354ee31c]{padding:%?30?%}.home .content .item[data-v-354ee31c]{border-bottom:1px solid #ddd;display:flex;padding:%?10?%}.home .content .item .text[data-v-354ee31c]{flex:1;padding-right:%?15?%;display:flex;justify-content:space-between;flex-direction:column}.home .content .item .text .title[data-v-354ee31c]{font-size:%?38?%;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.home .content .item .text .info[data-v-354ee31c]{font-size:%?28?%;color:#afafaf}.home .content .item .text .info uni-text[data-v-354ee31c]{padding-right:%?10?%}.home .content .item .pic[data-v-354ee31c]{width:%?260?%;height:%?180?%}.home .content .item .pic uni-image[data-v-354ee31c]{width:100%;height:100%}.home .btn[data-v-354ee31c]{width:%?100?%;height:%?100?%;background-color:#42b983;color:#fff;border-radius:50%;position:fixed;bottom:%?100?%;right:%?60?%;text-align:center;line-height:%?100?%}.home .no-data[data-v-354ee31c]{text-align:center;padding:%?10?% 0;color:#afafaf}',""]),t.exports=e},"371d":function(t,e,n){"use strict";n.r(e);var a=n("08cb"),r=n("41f7");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o=n("f0c5"),u=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"690ab064",null,!1,a["a"],void 0);e["default"]=u.exports},"396a":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uniDateformat:n("371d").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"home"},[n("v-uni-view",{staticClass:"content"},t._l(t.list,(function(e){return n("v-uni-view",{key:e._id,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoDetail(e._id)}}},[n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v(t._s(e.name))]),n("uni-dateformat",{attrs:{date:e.posttime,format:"yyyy-MM-dd"}})],1)],1),n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:e.imgUrl?e.imgUrl:"../../static/4.jpg",mode:"aspectFill"}})],1)],1)})),1),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoAdd.apply(void 0,arguments)}}},[t._v("+")]),t.nodata?n("v-uni-view",{staticClass:"no-data"},[t._v("数据全部加载完成")]):t._e()],1)},i=[]},"41f7":function(t,e,n){"use strict";n.r(e);var a=n("aa52"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"647c":function(t,e,n){"use strict";n.r(e);var a=n("396a"),r=n("df14");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("d038");var o=n("f0c5"),u=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"354ee31c",null,!1,a["a"],void 0);e["default"]=u.exports},9137:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=s,e.friendlyDate=function(t,e){var n=e.locale,a=void 0===n?"zh":n,r=e.threshold,i=void 0===r?[6e4,36e5]:r,o=e.format,c=void 0===o?"yyyy/MM/dd hh:mm:ss":o;if("-"===t)return t;if(!t&&0!==t)return"";var f,d,l={zh:{year:"年",month:"月",day:"天",hour:"小时",minute:"分钟",second:"秒",ago:"前",later:"后",justNow:"刚刚",soon:"马上",template:"{num}{unit}{suffix}"},en:{year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",ago:"ago",later:"later",justNow:"just now",soon:"soon",template:"{num} {unit} {suffix}"}},h=l[a]||l.zh,v=u(t),m=v.getTime()-Date.now(),p=Math.abs(m);if(p<i[0])return m<0?h.justNow:h.soon;if(p>=i[1])return s(v,c);var g=h.later;m<0&&(g=h.ago,m=-m);var y=Math.floor(m/1e3),w=Math.floor(y/60),b=Math.floor(w/60),x=Math.floor(b/24),M=Math.floor(x/30),_=Math.floor(M/12);switch(!0){case _>0:f=_,d=h.year;break;case M>0:f=M,d=h.month;break;case x>0:f=x,d=h.day;break;case b>0:f=b,d=h.hour;break;case w>0:f=w,d=h.minute;break;default:f=y,d=h.second;break}"en"===a&&(1===f?f="a":d+="s");return h.template.replace(/{\s*num\s*}/g,f+"").replace(/{\s*unit\s*}/g,d).replace(/{\s*suffix\s*}/g,g)};var r=a(n("53ca"));function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t+="";while(t.length<e)t="0"+t;return t.slice(-e)}n("fb6a"),n("c975"),n("ac1f"),n("5319");var o={yyyy:function(t){return i(t.year,4)},yy:function(t){return i(t.year)},MM:function(t){return i(t.month)},M:function(t){return t.month},dd:function(t){return i(t.day)},d:function(t){return t.day},hh:function(t){return i(t.hour)},h:function(t){return t.hour},mm:function(t){return i(t.minute)},m:function(t){return t.minute},ss:function(t){return i(t.second)},s:function(t){return t.second},SSS:function(t){return i(t.millisecond,3)},S:function(t){return t.millisecond}};function u(t){if(t instanceof Date)return t;switch((0,r.default)(t)){case"string":return t.indexOf("T")>-1?new Date(t):new Date(t.replace(/-/g,"/"));default:return new Date(t)}}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy/MM/dd hh:mm:ss";if(!t&&0!==t)return"";t=u(t);var n={year:t.getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()},a=/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/,r=!0,i=e;while(r)r=!1,i=i.replace(a,(function(t){return r=!0,o[t](n)}));return i}},aa52:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("e25e");var a=n("9137"),r={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,a.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};e.default=r},c807:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var a={data:function(){return{list:[],nodata:!1}},onShow:function(){this.getList()},onReachBottom:function(){this.getList()},onPullDownRefresh:function(){this.getList()},methods:{gotoDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?id="+t})},gotoAdd:function(){uni.navigateTo({url:"/pages/add/add"})},getList:function(){var e=this;t.callFunction({name:"getList",data:{num:this.list.length}}).then((function(t){e.list=e.list.concat(t.result.data),0==t.result.data.length&&(e.nodata=!0),uni.stopPullDownRefresh()}))}}};e.default=a}).call(this,n("a9ff")["default"])},c9ef:function(t,e,n){var a=n("1843");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("5caca936",a,!0,{sourceMap:!1,shadowMode:!1})},d038:function(t,e,n){"use strict";var a=n("c9ef"),r=n.n(a);r.a},df14:function(t,e,n){"use strict";n.r(e);var a=n("c807"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a}}]);