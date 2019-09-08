!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("express-msteams-host")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("botbuilder")},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(6),i=n(7),s=n(8),a=n(0),c=n(1)("msteams");c("Initializing Microsoft Teams Express hosted App..."),n(9).config();const u=n(10),l=o(),f=process.env.port||process.env.PORT||3007;l.use(o.json({verify:(e,t,n,o)=>{e.rawBody=n.toString()}})),l.use(o.urlencoded({extended:!0})),l.set("views",i.join(__dirname,"/")),l.use(s("tiny")),l.use("/scripts",o.static(i.join(__dirname,"web/scripts"))),l.use("/assets",o.static(i.join(__dirname,"web/assets"))),l.use(a.MsTeamsApiRouter(u)),l.use(a.MsTeamsPageRouter({root:i.join(__dirname,"web/"),components:u})),l.use("/",o.static(i.join(__dirname,"web/"),{index:"index.html"})),l.set("port",f),r.createServer(l).listen(f,()=>{c(`Server running on ${f}`)})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("dotenv")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nonce={},function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(11))},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(0),s=n(1),a=n(12),c=n(2),u=n(13),l=n(14);s("msteams");let f=class{constructor(e){this.activityProc=new l.TeamsActivityProcessor,this._timelyMessageExtension=new u.default,this.conversationState=e,this.dialogState=e.createProperty("dialogState"),this.dialogs=new a.DialogSet(this.dialogState)}onTurn(e){return r(this,void 0,void 0,(function*(){yield this.activityProc.processIncomingActivity(e)}))}};o([i.MessageExtensionDeclaration("timelyMessageExtension")],f.prototype,"_timelyMessageExtension",void 0),f=o([i.BotDeclaration("/api/messages",new c.MemoryStorage,process.env.MICROSOFT_APP_ID,process.env.MICROSOFT_APP_PASSWORD)],f),t.TimelyMessageExtensionBot=f},function(e,t){e.exports=require("botbuilder-dialogs")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),s=n(0),a=n(2);i("msteams");let c=class{onFetchTask(e,t){return r(this,void 0,void 0,(function*(){return Promise.resolve({type:"continue",value:{title:"Input form",url:`https://${process.env.HOSTNAME}/timelyMessageExtension/action.html`,width:"medium",height:"large"}})}))}onSubmitAction(e,t){return r(this,void 0,void 0,(function*(){const e=t.data.timezonesConversions.map(e=>({title:e.locationName,value:e.time})),n=a.CardFactory.adaptiveCard({type:"AdaptiveCard",version:"1.0",body:[{type:"ColumnSet",columns:[{type:"Column",width:"auto",items:[{type:"Image",altText:"",url:`https://${process.env.HOSTNAME}/assets/drop-pin-logo.png`,size:"Small"}]},{type:"Column",width:"stretch",items:[{type:"FactSet",facts:e}]}]}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json"});return Promise.resolve({type:"result",attachmentLayout:"list",attachments:[n]})}))}};c=o([s.PreventIframe("/timelyMessageExtension/config.html"),s.PreventIframe("/timelyMessageExtension/action.html")],c),t.default=c},function(e,t){e.exports=require("botbuilder-teams")}]);
//# sourceMappingURL=server.js.map