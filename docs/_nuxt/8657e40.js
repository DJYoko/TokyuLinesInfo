(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("094b594e",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";var o=n(159);n.n(o).a},202:function(t,e,n){(e=n(74)(!1)).push([t.i,".line-unit[data-v-dc2b57ce]{display:block;text-align:center;cursor:pointer;border-radius:8px;transition:all .2s}.color-label[data-v-dc2b57ce]{padding:15px 0;font-weight:700;border-radius:8px 8px 0 0}.detail-name[data-v-dc2b57ce]{font-size:.8em;padding:15px 0;background-color:#fff;border-radius:0 0 8px 8px}.line-unit[data-v-dc2b57ce]:hover{text-decoration:none;transform:scale(1.1)}",""]),t.exports=e},209:function(t,e,n){"use strict";n.r(e);var o={name:"lineUnit",props:{lineName:{type:String,default:""},lineId:{type:String,default:""},backgroundColor:{type:String,default:""},textColor:{type:String,default:""}},computed:{styles:function(){return{color:this.$props.textColor,backgroundColor:this.$props.backgroundColor}},displayLabel:function(){return this.$props.lineId.toUpperCase()},borderStyle:function(){return{border:"1px solid ".concat(this.$props.backgroundColor)}}}},r=(n(201),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"link-to-line line-unit",style:t.borderStyle,attrs:{to:"/line/"+t.lineId+"/"}},[n("div",{staticClass:"color-label",style:t.styles},[t._v("\n    "+t._s(t.displayLabel)+"\n  ")]),t._v(" "),n("div",{staticClass:"detail-name"},[t._v(t._s(t.lineName))])])}),[],!1,null,"dc2b57ce",null);e.default=component.exports}}]);