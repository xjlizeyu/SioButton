(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{373:function(t,e,n){},378:function(t,e,n){"use strict";var r=n(373);n.n(r).a},380:function(t,e,n){"use strict";n(204);var r=n(381),o={name:"VoiceBtn",props:{emoji:{default:"🌽",type:String},link:{default:!1,type:Boolean}},data:function(){return{twe_para:{base:"https://emoji.lonelyion.com",folder:"/svg",ext:".svg"},transition:"",width:"0",timer:null,progress:0,playing:!1}},computed:{v_btn_classes:function(){return{"grey--text text--lighten-2 vo-btn-bg-dark":!this.link&&this.$vuetify.theme.dark,"vo-btn-bg-light":!this.link&&!this.$vuetify.theme.dark,playing:this.playing}},emoji_url:function(){var t=r.a.parse(this.emoji,this.twe_para);return/<img[^>]+src="?([^"\s]+)"?\s*\/>/g.exec(t)[1]}}},l=(n(378),n(50)),c=n(95),f=n.n(c),h=n(202),v=n(393),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-btn",{staticClass:"ma-1 pa-2 vo-btn",class:[t.v_btn_classes],style:{"--hover-content":"url('"+t.emoji_url+"')","--progress":t.progress+"%","--start-percent":t.progress-5+"%"},attrs:{elevation:r?6:2,rounded:"",height:"max-content","min-height":"36px"}},[n("div",{staticStyle:{"z-index":"2"}},[t._t("default")],2)])]}}],null,!0)})}),[],!1,null,"79321aff",null);e.a=component.exports;f()(component,{VBtn:h.a,VHover:v.a})},397:function(t,e,n){"use strict";n.r(e);var r={components:{VoiceBtn:n(380).a},data:function(){return{links:[]}},computed:{current_locale:function(){return this.$i18n.locale}},mounted:function(){var t=this,e="//"+window.location.host+"/links.json";this.$axios.get(e).then((function(e){t.links=t.shuffle(e.data.filter((function(t){return"fbk"!==t.title})))})).catch((function(t){console.log(t)}))},methods:{shuffle:function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}}},o=n(50),l=n(95),c=n.n(l),f=n(374),h=n(372),v=n(394),d=n(384),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",[n("v-card",[n("v-card-title",[t._v(t._s(t.$t("site.links")))]),t._v(" "),n("v-card-text",t._l(t.links,(function(e){return n("a",{key:e.title,attrs:{href:e.url,target:"_blank"}},[n("voice-btn",{staticClass:"link-button white--text",class:e.color,attrs:{large:!0,emoji:e.emoji,link:!0}},[t._v("\n            "+t._s(e.tr[t.current_locale])+"\n          ")])],1)})),0)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VCardText:h.b,VCardTitle:h.c,VFlex:v.a,VLayout:d.a})}}]);