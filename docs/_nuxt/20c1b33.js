(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,n,e){var content=e(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(75).default)("3e19e4d5",content,!0,{sourceMap:!1})},154:function(t,n,e){"use strict";n.a={siteName:"Tokyu Lines Info"}},160:function(t,n,e){"use strict";var o=e(150);e.n(o).a},161:function(t,n,e){(n=e(74)(!1)).push([t.i,".line-unit[data-v-02a1d15b]{text-align:center;cursor:pointer;border-radius:8px;transition:all .2s}.color-label[data-v-02a1d15b]{padding:15px 0;font-weight:700;border-radius:8px 8px 0 0}.detail-name[data-v-02a1d15b]{font-size:.8em;padding:15px 0;background-color:#fff;border-radius:0 0 8px 8px}.line-unit[data-v-02a1d15b]:hover{text-decoration:none;transform:scale(1.1)}",""]),t.exports=n},163:function(t,n,e){var content=e(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(75).default)("62568b90",content,!0,{sourceMap:!1})},164:function(t,n,e){"use strict";var o={name:"lineUnit",props:{name:String,id:String,backgroundColor:String,textColor:String},computed:{styles:function(){return{color:this.textColor,backgroundColor:this.backgroundColor}},displayLabel:function(){return this.id.toUpperCase()},borderStyle:function(){return{border:"1px solid ".concat(this.backgroundColor)}}},methods:{onClick:function(t){this.$emit("click",this.id)}}},r=(e(160),e(19)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"line-unit",style:t.borderStyle,on:{click:t.onClick}},[e("div",{staticClass:"color-label",style:t.styles},[t._v("\n    "+t._s(t.displayLabel)+"\n  ")]),t._v(" "),e("div",{staticClass:"detail-name"},[t._v(t._s(this.name))])])}),[],!1,null,"02a1d15b",null);n.a=component.exports},201:function(t,n,e){t.exports=e.p+"img/pp_tamagawahukei_retouched.8923d83.jpg"},202:function(t,n,e){"use strict";var o=e(163);e.n(o).a},203:function(t,n,e){(n=e(74)(!1)).push([t.i,"h1[data-v-0b1a2654]{color:#262626;font-weight:100;margin-bottom:0;padding:15px 0}#mainvisual[data-v-0b1a2654]{position:relative;background-position:bottom;background-size:cover;background-repeat:no-repeat;padding:180px 0}.line-list[data-v-0b1a2654]{padding-top:30px;margin-left:0;margin-right:0;background-color:#f1f1f1}.line-list-item-wrapper[data-v-0b1a2654]{margin-bottom:30px}.link-to-line[data-v-0b1a2654]{text-decoration:none;color:#262626}.about-link[data-v-0b1a2654]{display:block;padding:15px;text-align:center}",""]),t.exports=n},205:function(t,n,e){"use strict";e.r(n);var o=e(156),r=e.n(o),l=e(154),c=e(201),d=e.n(c),f={components:{lineUnit:e(164).a},data:function(){return{backgroundImageUrl:d.a,isLoading:!0,lines:[]}},mounted:function(){var t=this;r.a.get("lines.json").then((function(n){t.lines=n.data}))},head:function(){return{title:l.a.siteName,meta:[{hid:"description",name:"description",content:l.a.siteName}]}}},v=(e(202),e(19)),component=Object(v.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),t._v(" "),e("div",{style:{backgroundImage:"url("+t.backgroundImageUrl+")"},attrs:{id:"mainvisual"}}),t._v(" "),e("div",{staticClass:"line-list"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.lines,(function(line){return e("div",{key:line.initial,staticClass:"col-6 col-sm-3 col-lg-2 line-list-item-wrapper"},[e("nuxt-link",{staticClass:"link-to-line",attrs:{to:{path:"/line",query:{id:line.id}}}},[e("line-unit",{attrs:{id:line.id,name:line.name,backgroundColor:line.backgroundColor,textColor:line.textColor}})],1)],1)})),0)])]),t._v(" "),e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"about-link",attrs:{to:{path:"/about"}}},[t._v("about")])],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-left"},[this._v("Tokyu Lines info")])])}],!1,null,"0b1a2654",null);n.default=component.exports}}]);