(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{495:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(496),o=r(1),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");n.a},496:function(t,e,r){"use strict";r(9),r(7),r(12),r(17),r(8),r(18);var n=r(2),o=(r(35),r(220),r(497),r(221)),c=r(501),l=r(93),d=r(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},497:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("e23b7040",content,!0,{sourceMap:!1})},498:function(t,e,r){var n=r(24)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},500:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(104);function o(t){return function(e){return Object(n.a)(e)&&e.length>0||t.t("validations.required")}}function c(t,e){return function(r){return Object(n.a)(r)&&r.length<=e||t.t("validations.too-long",[e])}}function l(t,e){return[o(t),c(t,e)]}},504:function(t,e,r){"use strict";var n=r(2),o=(r(36),r(51),r(135),r(12),r(8),r(58),r(83),r(9),r(7),r(17),r(18),r(11)),c=r(103),l=r(136);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},512:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(66),r(7),r(48),r(78),r(37)),c=r(500),l=Object(o.b)({setup:function(t,e){var r=e.emit,l=Object(o.e)({title:"",formula:"",description:""}),form=Object(o.f)(null),d=function(){var t;null===(t=form.value)||void 0===t||t.reset(),l.title="",l.formula="",l.description=""},v=Object(o.h)(),h=v.$axios,f=v.app,m=Object(o.l)(),_=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,body,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=l.description.trim(),body={title:l.title.trim(),formula:l.formula.trim()},e.length>=1&&(body.description=e),t.next=6,h.post("/assignments",body);case 6:n=t.sent.data,m.commit("assignments/add",n),d(),r("create"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),window.alert(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),x=Object(o.f)(!1),O=Object(c.b)(f.i18n,30),w=Object(c.b)(f.i18n,1e3),y=[Object(c.a)(f.i18n,1e3)];return{assignmentData:l,createAssignment:_,descriptionMaxLength:1e3,descriptionRules:y,form:form,formulaMaxLength:1e3,formulaRules:w,resetForm:d,titleMaxLength:30,titleRules:O,valid:x}}}),d=r(32),v=r(31),h=r.n(v),f=r(317),m=r(496),_=r(495),x=r(504),O=r(490),w=r(545),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.createAssignment.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",{attrs:{width:"100%",elevation:"3"}},[r("v-card-title",[t._v("\n      "+t._s(t.$t("actions.create-assignment"))+"\n    ")]),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{type:"text",counter:t.titleMaxLength,rules:t.titleRules,label:t.$t("assignments.create.title"),required:""},model:{value:t.assignmentData.title,callback:function(e){t.$set(t.assignmentData,"title",e)},expression:"assignmentData.title"}}),t._v(" "),r("v-text-field",{attrs:{type:"text",counter:t.descriptionMaxLength,rules:t.descriptionRules,label:t.$t("assignments.create.formula"),required:""},model:{value:t.assignmentData.formula,callback:function(e){t.$set(t.assignmentData,"formula",e)},expression:"assignmentData.formula"}}),t._v(" "),r("v-text-field",{attrs:{type:"text",counter:t.descriptionMaxLength,rules:t.descriptionRules,label:t.$t("assignments.create.description")},model:{value:t.assignmentData.description,callback:function(e){t.$set(t.assignmentData,"description",e)},expression:"assignmentData.description"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary",type:"submit",disabled:!t.valid}},[t._v(t._s(t.$t("actions.create")))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:m.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VForm:x.a,VSpacer:O.a,VTextField:w.a})}}]);