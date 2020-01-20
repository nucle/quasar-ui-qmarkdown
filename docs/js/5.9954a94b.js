(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{2514:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"page-header"},[e("div",{staticClass:"donate"},[e("a",{attrs:{href:t.donateUrl,target:"_blank",title:"Donate"}},[e("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),e("div",{staticClass:"text-h1 project-name"},[t._v(t._s(t.title))]),e("div",{staticClass:"text-h2 project-tagline"},[t._v(t._s(t.tagline))]),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),e("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[e("div",{staticClass:"quasar"},[t._v(t._s(t.quasarDesc))]),e("div",{staticClass:"byline"},[t._v(t._s(t.byline)),e("a",{attrs:{href:t.bylineTwitter,target:"_blank",title:"Twitter"}},[e("i",{staticClass:"fab fa-twitter"})])])])],1),e("main",{staticClass:"flex flex-start justify-center inset-shadow"},[e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[t._t("default")],2)])])},n=[],l={name:"Hero",data:function(){return{title:"QMarkdown",tagline:"Inline markdown for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown",donateUrl:"https://github.com/sponsors/hawkeye64"}}},s=l,i=e("2877"),r=Object(i["a"])(s,o,n,!1,null,null,null);a["a"]=r.exports},7987:function(t,a,e){"use strict";var o=e("e81b"),n=e.n(o);n.a},be56a:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("hero",[e("div",{staticClass:"row q-pa-sm"},[e("q-toggle",{attrs:{label:"Disable HTML"},model:{value:t.noHtml,callback:function(a){t.noHtml=a},expression:"noHtml"}}),e("q-toggle",{attrs:{label:"Disable Link"},model:{value:t.noLink,callback:function(a){t.noLink=a},expression:"noLink"}}),e("q-toggle",{attrs:{label:"Disable Linkify"},model:{value:t.noLinkify,callback:function(a){t.noLinkify=a},expression:"noLinkify"}}),e("q-toggle",{attrs:{label:"Disable Typographer"},model:{value:t.noTypographer,callback:function(a){t.noTypographer=a},expression:"noTypographer"}}),e("q-toggle",{attrs:{label:"Disable Breaks"},model:{value:t.noBreaks,callback:function(a){t.noBreaks=a},expression:"noBreaks"}}),e("q-toggle",{attrs:{label:"Disable Highlight"},model:{value:t.noHighlight,callback:function(a){t.noHighlight=a},expression:"noHighlight"}}),e("q-toggle",{attrs:{label:"Disable Emoji"},model:{value:t.noEmoji,callback:function(a){t.noEmoji=a},expression:"noEmoji"}}),e("q-toggle",{attrs:{label:"Disable Subscript"},model:{value:t.noSubscript,callback:function(a){t.noSubscript=a},expression:"noSubscript"}}),e("q-toggle",{attrs:{label:"Disable Superscript"},model:{value:t.noSuperscript,callback:function(a){t.noSuperscript=a},expression:"noSuperscript"}}),e("q-toggle",{attrs:{label:"Disable Footnote"},model:{value:t.noFootnote,callback:function(a){t.noFootnote=a},expression:"noFootnote"}}),e("q-toggle",{attrs:{label:"Disable Deflist"},model:{value:t.noDeflist,callback:function(a){t.noDeflist=a},expression:"noDeflist"}}),e("q-toggle",{attrs:{label:"Disable Abbreviation"},model:{value:t.noAbbreviation,callback:function(a){t.noAbbreviation=a},expression:"noAbbreviation"}}),e("q-toggle",{attrs:{label:"Disable Insert"},model:{value:t.noInsert,callback:function(a){t.noInsert=a},expression:"noInsert"}}),e("q-toggle",{attrs:{label:"Disable Mark"},model:{value:t.noMark,callback:function(a){t.noMark=a},expression:"noMark"}}),e("q-toggle",{attrs:{label:"Disable Image"},model:{value:t.noImage,callback:function(a){t.noImage=a},expression:"noImage"}}),e("q-toggle",{attrs:{label:"Disable Tasklist"},model:{value:t.noTasklist,callback:function(a){t.noTasklist=a},expression:"noTasklist"}}),e("q-toggle",{attrs:{label:"Disable Container"},model:{value:t.noContainer,callback:function(a){t.noContainer=a},expression:"noContainer"}})],1),e("q-markdown",[t._v("\n# Interactive Editor\n\nAdd Markdown to the window on the left and the output will appear on the right. You can even add HTML, but you cannot add Vue components as they would not be compiled in the browser.\n    ")]),e("div",{staticClass:"q-pa-md q-gutter-sm fit"},[e("q-markdown",{attrs:{noHtml:t.noHtml,noLink:t.noLink,noLinkify:t.noLinkify,noTypographer:t.noTypographer,noBreaks:t.noBreaks,noHighlight:t.noHighlight,noEmoji:t.noEmoji,noSubscript:t.noSubscript,noSuperscript:t.noSuperscript,noFootnote:t.noFootnote,noDeflist:t.noDeflist,noAbbreviation:t.noAbbreviation,noInsert:t.noInsert,noMark:t.noMark,noImage:t.noImage,noTasklist:t.noTasklist,noContainer:t.noContainer}}),e("q-splitter",{staticStyle:{height:"500px"},scopedSlots:t._u([{key:"separator",fn:function(){return[e("q-avatar",{attrs:{color:"primary","text-color":"white",size:"28px",icon:"fas fa-arrows-alt-h"}})]},proxy:!0},{key:"before",fn:function(){return[e("div",{staticClass:"q-pa-md"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],staticClass:"fit q-pa-sm",class:{"text-white bg-dark":t.$q.dark.isActive},attrs:{rows:"20"},domProps:{value:t.markdown},on:{input:function(a){a.target.composing||(t.markdown=a.target.value)}}})])]},proxy:!0},{key:"after",fn:function(){return[e("div",{staticClass:"q-pa-md",staticStyle:{height:"467px"}},[e("q-markdown",{staticClass:"fit bordered q-pa-sm",attrs:{src:t.markdown}})],1)]},proxy:!0}]),model:{value:t.splitterModel,callback:function(a){t.splitterModel=a},expression:"splitterModel"}})],1)],1)},n=[],l=e("2514"),s={name:"Editor",components:{Hero:l["a"]},data:function(){return{splitterModel:50,markdown:"",noHtml:!1,noLink:!1,noLinkify:!1,noTypographer:!1,noBreaks:!1,noHighlight:!1,noEmoji:!1,noSubscript:!1,noSuperscript:!1,noFootnote:!1,noDeflist:!1,noAbbreviation:!1,noInsert:!1,noMark:!1,noImage:!1,noTasklist:!1,noContainer:!1}}},i=s,r=(e("7987"),e("2877")),c=Object(r["a"])(i,o,n,!1,null,null,null);a["default"]=c.exports},e81b:function(t,a,e){}}]);