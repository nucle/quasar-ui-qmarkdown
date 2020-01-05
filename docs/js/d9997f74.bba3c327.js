(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d9997f74"],{"0960":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("hero",[a("div",[a("example-title",{attrs:{title:"Markdown"}}),a("example-viewer",{attrs:{title:"Abbreviations",file:"Abbreviations","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nHover over the word **HTML** below to see the abbreviation.\n        ")])],1),a("example-viewer",{attrs:{title:"Blockquotes",file:"Blockquotes","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Code",file:"Code","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Containers",file:"Containers","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Definition Lists",file:"DefinitionLists","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Emojies",file:"Emojies","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Emphasis",file:"Emphasis","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Footnotes",file:"Footnotes","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Heading",file:"Heading","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Horizontal Rules",file:"HorizontalRules","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Images",file:"Images","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Insert",file:"Insert","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Links",file:"Links","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nLinks are auto-detected for local or external. External links use `.q-markdown--link-external:after` to show an icon indicator.\n\nYou can override in CSS the `content` attribute to change the icon. Otherwise, you need to load Material icons.\n        ")])],1),a("example-viewer",{attrs:{title:"Lists",file:"Lists","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Mark",file:"Mark","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Subscript/Superscript",file:"SubscriptSuperscript","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Tables",file:"Tables","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Task Lists",file:"TaskLists","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[a("q-markdown",[t._v("\nTask list have some special settings. By default, turning on these other options won't do anything. It is up to you to provide the CSS to support these options.\n\nHere is some example CSS that you can take and modify to your likeing:\n\n```css\n.task-list-item label {\n  color: blue;\n}\n.task-list-item-label {\n  color: red !important;\n}\n```\nThis is what is used in the example below. Play with the controls to see how the tasklist items are affected.\n        ")])],1),a("example-viewer",{attrs:{title:"Titles",file:"Titles","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),a("example-viewer",{attrs:{title:"Typography",file:"Typography","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}})],1),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{class:{"text-black bg-grey-4":t.$q.dark.isActive,"text-white bg-primary":!t.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},i=[],o=a("2514"),l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(s){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},n=[];a("a481");function r(t){var s=window.location.origin+window.location.pathname+"#"+t,a=document.createElement("textarea");a.className="fixed-top",a.value=s,document.body.appendChild(a),a.focus(),a.select(),document.execCommand("copy"),document.body.removeChild(a),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function c(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}var h={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:r}},d=h,p=a("2877"),m=Object(p["a"])(d,l,n,!1,null,null,null),u=m.exports,f=a("384e"),w={name:"Examples",components:{Hero:o["a"],ExampleTitle:u},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown@".concat(f["c"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown@".concat(f["c"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Markdown"),this.addToToc("Abbreviations",2),this.addToToc("Blockquotes",2),this.addToToc("Code",2),this.addToToc("Containers",2),this.addToToc("Definition Lists",2),this.addToToc("Emojies",2),this.addToToc("Emphasis",2),this.addToToc("Footnotes",2),this.addToToc("Heading",2),this.addToToc("Horizontal Rules",2),this.addToToc("Images",2),this.addToToc("Insert",2),this.addToToc("Links",2),this.addToToc("Lists",2),this.addToToc("Mark",2),this.addToToc("Subscript/Superscript",2),this.addToToc("Tables",2),this.addToToc("Task Lists",2),this.addToToc("Typography",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=t;s>1&&(a="example-"+a);var e=c(a);this.tempToc.push({children:[],id:e,label:t,level:s})}}},b=w,v=Object(p["a"])(b,e,i,!1,null,null,null);s["default"]=v.exports},2514:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"page-header"},[a("div",{staticClass:"donate"},[a("a",{attrs:{href:t.donateUrl,target:"_blank",title:"Donate"}},[a("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),a("div",{staticClass:"text-h1 project-name"},[t._v(t._s(t.title))]),a("div",{staticClass:"text-h2 project-tagline"},[t._v(t._s(t.tagline))]),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}),a("q-btn",{staticClass:"btn",attrs:{type:"a",href:t.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),a("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[a("div",{staticClass:"quasar"},[t._v(t._s(t.quasarDesc))]),a("div",{staticClass:"byline"},[t._v(t._s(t.byline)),a("a",{attrs:{href:t.bylineTwitter,target:"_blank",title:"Twitter"}},[a("i",{staticClass:"fab fa-twitter"})])])])],1),a("main",{staticClass:"flex flex-start justify-center inset-shadow"},[a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),a("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[t._t("default")],2)])])},i=[],o={name:"Hero",data:function(){return{title:"QMarkdown",tagline:"Inline markdown for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown",donateUrl:"https://github.com/sponsors/hawkeye64"}}},l=o,n=a("2877"),r=Object(n["a"])(l,e,i,!1,null,null,null);s["a"]=r.exports}}]);