(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={dashboard:{title:"dashboard.title",to:"/",icon:"mdi-home"},users:{title:"users.title",to:"/users",icon:"mdi-account-multiple"},settings:{title:"settings.title",to:"/settings",icon:"mdi-cog"},login:{title:"login.title",to:"/login"}}},213:function(t,e,n){"use strict";n(36),n(19);e.a=function(t){var e=t.$axios,n=t.$auth,r=t.app,o=t.localePath;e.interceptors.response.use((function(t){return t}),(function(t){var code=parseInt(t.response&&t.response.status);return[401,403].includes(code)&&n.logout().then((function(){var t;return null===(t=r.router)||void 0===t?void 0:t.push(o("/login"))})),Promise.reject(t)}))}},214:function(t,e,n){"use strict";var r=n(305),o=n(306),l=new(n.n(o).a);e.a=function(t){Object(r.a)({key:"apollo-admin",storage:{getItem:function(t){return l.get(t)},setItem:function(t,e){return l.set(t,e)},removeItem:function(t){return l.remove(t)}}})(t.store)}},215:function(t,e,n){"use strict";var r=n(14);n(66);function o(){return(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.$workbox;case 2:if(n=t.sent){t.next=6;break}return console.debug("Workbox couldn't be loaded."),t.abrupt("return");case 6:n.addEventListener("installed",(function(t){if(console.log(t.isUpdate),!0===t.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return o.apply(this,arguments)}},216:function(t,e,n){"use strict";var r=n(0),o=n(307);r.default.use(o.a,{watchStorage:!0})},217:function(t,e,n){"use strict";var r=n(0),o=n(308);r.default.use(o.a)},284:function(t,e,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("5bd0562c",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n.r(e);var r=n(38),o=Object(r.b)({data:function(){return{logo:n(422)}}}),l=(n(423),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(73),l=Object(r.b)({computed:Object(o.d)("settings",["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){var t=this.$vuetify.theme.dark,e=this.$store.state.settings.useDarkTheme;t!==e&&(this.$vuetify.theme.dark=e)},methods:Object(o.c)("settings",["toggleTheme"])}),c=n(32),d=n(31),f=n.n(d),m=n(316),v=n(204),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:m.a,VIcon:v.a})},314:function(t,e,n){"use strict";n(28),n(59);var r=n(38),o=n(73),l=Object(r.b)({data:function(){return{drawerOpen:!1}},head:function(){var path=this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},link:[{rel:"canonical",href:"https://apollo-admin.yeger.eu".concat(path.length>1?path:"","/").replace("//","/")}]}},computed:Object(o.d)("settings",["layout"])}),c=n(32),d=n(31),f=n.n(d),m=n(485),v=n(491),h=n(489),_=n(492),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"",permanent:t.$vuetify.breakpoint.lgAndUp,clipped:!0},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}}),t._v(" "),n("v-main",[n("v-container",{staticClass:"page-container",class:{"bound-width":"compact"===t.layout,"unbound-width":"fill"===t.layout}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{AppSidebar:n(473).default,AppHeader:n(471).default}),f()(component,{VApp:m.a,VContainer:v.a,VMain:h.a,VNavigationDrawer:_.a})},315:function(t,e,n){"use strict";n(28),n(59);var r=n(38),o=n(73),l=Object(r.b)({head:function(){var path=this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},link:[{rel:"canonical",href:"https://apollo-admin.yeger.eu".concat(path.length>1?path:"","/").replace("//","/")}]}},computed:Object(o.d)("settings",["layout"])}),c=n(32),d=n(31),f=n.n(d),m=n(485),v=n(490),h=n(491),_=n(489),x=n(488),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"clipped-left":!0,app:"",color:"primary",dark:"",dense:"",fixed:""}},[n("logo",{staticClass:"ml-lg-n2"}),t._v(" "),n("v-spacer"),t._v(" "),n("theme-toggle")],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"page-container",class:{"bound-width":"compact"===t.layout,"unbound-width":"fill"===t.layout}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{Logo:n(297).default,ThemeToggle:n(298).default}),f()(component,{VApp:m.a,VAppBar:v.a,VContainer:h.a,VMain:_.a,VSpacer:x.a})},322:function(t,e,n){n(323),n(324),t.exports=n(327)},351:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("aaec6fdc",content,!0,{sourceMap:!1})},352:function(t,e,n){var r=n(24)(!1);r.push([t.i,"html{overflow-x:hidden!important;overflow-y:auto!important}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),t.exports=r},422:function(t,e,n){t.exports=n.p+"img/logo.3fc30d3.svg"},423:function(t,e,n){"use strict";n(284)},424:function(t,e,n){var r=n(24)(!1);r.push([t.i,"html{overflow-x:hidden!important;overflow-y:auto!important}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.logo-container{width:48px;height:48px;margin-right:-12px}.logo-container img{width:36px;height:36px;margin:6px}",""]),t.exports=r},447:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return r}));var r={reset:function(t){var e=t.dispatch;e("settings/reset"),e("users/reset")}}},448:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"actions",(function(){return l})),n.d(e,"mutations",(function(){return c}));var r={layout:"default",useDarkTheme:!1},o=function(){return r},l={reset:function(t){var e=t.commit;e("setLayout",r.layout),e("setTheme",r.useDarkTheme)}},c={setLayout:function(t,e){t.layout=e},setTheme:function(t,e){t.useDarkTheme=e},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme}}},469:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(66),n(38)),l=n(136),c=Object(o.b)({setup:function(){var t=Object(o.k)(),e=Object(o.h)(),n=e.$auth,c=e.localePath;return{logout:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.logout();case 2:t.push(c("/login?logout=true"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),routes:[l.a.dashboard,l.a.users,l.a.settings]}}}),d=n(32),f=n(31),m=n.n(f),v=n(204),h=n(127),_=n(208),x=n(109),w=n(40),k=n(476),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.navigation")))]),t._v(" "),t._l(t.routes,(function(t,i){return n("route-list-item",{key:i,attrs:{route:t}})})),t._v(" "),n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-logout")}})],1),t._v(" "),n("v-list-item-title",[t._v("\n      "+t._s(t.$t("actions.logout"))+"\n    ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{RouteListItem:n(470).default}),m()(component,{VIcon:v.a,VListItem:h.a,VListItemGroup:_.a,VListItemIcon:x.a,VListItemTitle:w.b,VSubheader:k.a})},470:function(t,e,n){"use strict";n.r(e);var r=n(38),o=Object(r.b)({props:{route:{type:Object,required:!0}}}),l=n(32),c=n(31),d=n.n(c),f=n(204),m=n(127),v=n(109),h=n(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{attrs:{to:t.localePath(t.route.to),exact:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(t.route.icon)}})],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$tc(t.route.navTitle||t.route.title,2)))])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VListItem:m.a,VListItemIcon:v.a,VListItemTitle:h.b})},471:function(t,e,n){"use strict";n.r(e);var r=n(38),o=Object(r.b)({props:{value:{type:Boolean,required:!0}}}),l=n(32),c=n(31),d=n.n(c),f=n(490),m=n(487),v=n(488),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{"clipped-left":!0,app:"",color:"primary",dark:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],staticClass:"ml-n4",attrs:{"aria-label":t.$t(t.value?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return t.$emit("input",!t.value)}}}),t._v(" "),n("logo",{staticClass:"ml-lg-n2"}),t._v(" "),n("v-spacer"),t._v(" "),n("language-menu"),t._v(" "),n("theme-toggle")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Logo:n(297).default,LanguageMenu:n(472).default,ThemeToggle:n(298).default}),d()(component,{VAppBar:f.a,VAppBarNavIcon:m.a,VSpacer:v.a})},472:function(t,e,n){"use strict";n.r(e);n(57);var r=n(38),o=Object(r.b)({data:function(){var t=this;return{locales:this.$i18n.availableLocales.map((function(e){return{code:e,name:t.$t("locales.".concat(e))}}))}}}),l=n(32),c=n(31),d=n.n(c),f=n(316),m=n(204),v=n(205),h=n(127),_=n(40),x=n(478),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"","aria-label":t.$t("actions.change-language")}},"v-btn",o,!1),r),[n("v-icon",{domProps:{textContent:t._s("mdi-translate")}})],1)]}}])},[t._v(" "),n("v-list",t._l(t.locales,(function(e){return n("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VIcon:m.a,VList:v.a,VListItem:h.a,VListItemTitle:_.b,VMenu:x.a})},473:function(t,e,n){"use strict";n.r(e);var r=n(32),o=n(31),l=n.n(o),c=n(205),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:"",nav:""}},[n("app-navigation"),t._v(" "),n("resources")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppNavigation:n(469).default,Resources:n(474).default}),l()(component,{VList:c.a})},474:function(t,e,n){"use strict";n.r(e);var r=n(32),o=n(31),l=n.n(o),c=n(204),d=n(127),f=n(40),m=n(208),v=n(109),h=n(476),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.resources")))]),t._v(" "),n("v-list-item",{staticClass:"text--primary",attrs:{rel:"noopener",href:"https://github.com/DerYeger/apollo-admin",target:"_blank","input-value":"false"}},[n("v-list-item-icon",[n("v-icon",{staticClass:"text--secondary",domProps:{textContent:t._s("mdi-github")}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        GitHub Repository\n        "),n("v-icon",{staticClass:"text--secondary",attrs:{small:""},domProps:{textContent:t._s("mdi-open-in-new")}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:c.a,VListItem:d.a,VListItemContent:f.a,VListItemGroup:m.a,VListItemIcon:v.a,VListItemTitle:f.b,VSubheader:h.a})},475:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return f}));n(8);var r=n(0);n(133);function o(t){return Object.values(t)}var l=function(){return{}},c={reset:function(t){var e=t.commit;e("removeAll"),e("set",{})}},d={byId:function(t){return function(e){return t[e]}},users:function(t){return o(t)}},f={add:function(t,e){r.default.set(t,e.id,e)},remove:function(t,e){r.default.delete(t,e.id)},removeAll:function(t){o(t).forEach((function(e){return r.default.delete(t,e.id)}))},set:function(t,e){Object.assign(t,e)}}},91:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=n(32),l=n(31),c=n.n(l),d=n(485),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("dashboard.title")))])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a})}},[[322,12,4,13]]]);