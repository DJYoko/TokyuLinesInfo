(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(t,n,e){"use strict";n.a={siteName:"Tokyu Lines Info"}},156:function(t,n,e){var content=e(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(75).default)("586c2500",content,!0,{sourceMap:!1})},191:function(t,n,e){t.exports=e.p+"img/pp_tamagawahukei_retouched.8923d83.jpg"},192:function(t,n,e){"use strict";var o=e(156);e.n(o).a},193:function(t,n,e){(n=e(74)(!1)).push([t.i,"h1[data-v-12f76e40]{color:#262626;font-weight:100;margin-bottom:0;padding:15px 0}#mainvisual[data-v-12f76e40]{position:relative;background-position:bottom;background-size:cover;background-repeat:no-repeat;padding:180px 0}.line-list[data-v-12f76e40]{padding-top:30px;margin-left:0;margin-right:0;background-color:#f1f1f1}.line-list-item-wrapper[data-v-12f76e40]{margin-bottom:30px}.link-to-line[data-v-12f76e40]{text-decoration:none;color:#262626}.about-link[data-v-12f76e40]{display:block;padding:15px;text-align:center}",""]),t.exports=n},203:function(t,n,e){"use strict";e.r(n);var o=e(153),r=e.n(o),l=e(76),c=e(151),d=e(191),f=e.n(d),m={name:"index",components:{lineUnit:function(){return e.e(2).then(e.bind(null,209))}},data:function(){return{backgroundImageUrl:f.a,isLoading:!0,lines:[]}},mounted:function(){var t=this;r.a.get("".concat(l.a.rootPath,"lines.json")).then((function(n){t.lines=n.data}))},head:function(){return{title:c.a.siteName,meta:[{hid:"description",name:"description",content:c.a.siteName}]}}},v=(e(192),e(20)),component=Object(v.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("div",{style:{backgroundImage:"url("+t.backgroundImageUrl+")"},attrs:{id:"mainvisual"}}),t._v(" "),e("div",{staticClass:"line-list"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.lines,(function(line){return e("div",{key:line.initial,staticClass:"col-6 col-sm-3 col-lg-2 line-list-item-wrapper"},[e("line-unit",{attrs:{"line-id":line.id,"line-name":line.name,backgroundColor:line.backgroundColor,textColor:line.textColor}})],1)})),0)])]),t._v(" "),e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"about-link",attrs:{to:{path:"/about/"}}},[t._v("about")])],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-left"},[this._v("Tokyu Lines info")])])}],!1,null,"12f76e40",null);n.default=component.exports}}]);