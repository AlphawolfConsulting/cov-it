function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var c=n[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function asyncGeneratorStep(t,n,e,c,r,o,i){try{var a=t[o](i),s=a.value}catch(u){return void e(u)}a.done?n(s):Promise.resolve(s).then(c,r)}function _asyncToGenerator(t){return function(){var n=this,e=arguments;return new Promise((function(c,r){var o=t.apply(n,e);function i(t){asyncGeneratorStep(o,c,r,i,a,"next",t)}function a(t){asyncGeneratorStep(o,c,r,i,a,"throw",t)}i(void 0)}))}}function _defineProperty(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var c={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var c="".concat(t*n/e-t,"ms"),r=2*Math.PI*n/e;return{r:5,style:{top:"".concat(9*Math.sin(r),"px"),left:"".concat(9*Math.cos(r),"px"),"animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var c=n/e,r="".concat(t*c-t,"ms"),o=2*Math.PI*c;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:"".concat(9-9*n,"px"),"animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(t*n/e-t,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(t*n/e-t,"ms")}}}}}},KwJk:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return a}));var c=function(t,n){return null!==n.closest(t)},r=function(t){return"string"==typeof t&&t.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(t),!0):void 0},o=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},i=/^[a-z][a-z0-9+\-.]*:/,a=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(n,e,c){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||i.test(n)){t.next=4;break}if(!(r=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),r.push(n,c)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,c){return t.apply(this,arguments)}}()},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return r}));var c=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(n,e,c,r,o){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,c,o,r));case 2:if("string"==typeof c||c instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(i="string"==typeof c?e.ownerDocument&&e.ownerDocument.createElement(c):c,r&&r.forEach((function(t){return i.classList.add(t)})),o&&Object.assign(i,o),e.appendChild(i),t.t0=i.componentOnReady,!t.t0){t.next=12;break}return t.next=12,i.componentOnReady();case 12:return t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(n,e,c,r,o){return t.apply(this,arguments)}}(),r=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},Uwmq:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var c=function(t){try{if("string"!=typeof t||""===t)return t;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,a.forEach((function(t){for(var e=n.querySelectorAll(t),c=e.length-1;c>=0;c--){var i=e[c];i.parentNode?i.parentNode.removeChild(i):n.removeChild(i);for(var a=o(i),s=0;s<a.length;s++)r(a[s])}}));for(var c=o(n),i=0;i<c.length;i++)r(c[i]);var s=document.createElement("div");s.appendChild(n);var u=s.querySelector("div");return null!==u?u.innerHTML:s.innerHTML}catch(l){return console.error(l),""}},r=function t(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var c=n.attributes.item(e),r=c.name;if(i.includes(r.toLowerCase())){var a=c.value;null!=a&&a.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}for(var s=o(n),u=0;u<s.length;u++)t(s[u])}},o=function(t){return null!=t.children?t.children:t.childNodes},i=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},fzvj:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return c}));var c=function(){var t=window.TapticEngine;t&&t.selection()},r=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},rj8D:function(t,n,e){"use strict";e.d(n,"a",(function(){return T}));var c=e("mrSG"),r=e("AcyG"),o=e("r8KD"),i=e("HDdC"),a=e("1tJR"),s=e("fXoL"),u=e("TEn/"),l=e("Kxyh"),O=e("sYmb"),_=e("ofXK"),T=function(){var t=function(){function t(n){_classCallCheck(this,t),this.store=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"askForDisableBatteryOptimizer",value:function(){var t=this;this.store.dispatch(a.b).subscribe((function(){t.store.dispatch(a.d)}))}},{key:"AskForGeolocationPermission",value:function(){var t=this;this.store.dispatch(a.c).subscribe((function(){t.store.dispatch(a.d)}))}},{key:"AskForActivateBluetooth",value:function(){var t=this;this.store.dispatch(a.a).subscribe((function(){t.store.dispatch(a.d)}))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(s.Ob(r.i))},t.\u0275cmp=s.Ib({type:t,selectors:[["check-device"]],decls:51,vars:76,consts:[[3,"mode"],["stepperV",""],[3,"icon","open","title","subtitle"],[3,"click"]],template:function(t,n){1&t&&(s.Ub(0,"ion-card"),s.Ub(1,"ion-card-header"),s.Ub(2,"p"),s.Ub(3,"b"),s.Hc(4),s.hc(5,"translate"),s.Tb(),s.Tb(),s.Tb(),s.Ub(6,"ion-card-content"),s.Ub(7,"fiv-stepper",0,1),s.Ub(9,"fiv-step",2),s.hc(10,"async"),s.hc(11,"async"),s.hc(12,"translate"),s.hc(13,"async"),s.hc(14,"translate"),s.hc(15,"translate"),s.Ub(16,"p"),s.Hc(17),s.hc(18,"translate"),s.Tb(),s.Ub(19,"ion-button",3),s.cc("click",(function(){return n.AskForGeolocationPermission()})),s.Hc(20),s.hc(21,"translate"),s.Tb(),s.Tb(),s.Ub(22,"fiv-step",2),s.hc(23,"async"),s.hc(24,"async"),s.hc(25,"async"),s.hc(26,"translate"),s.hc(27,"async"),s.hc(28,"translate"),s.hc(29,"translate"),s.Ub(30,"p"),s.Hc(31),s.hc(32,"translate"),s.Tb(),s.Ub(33,"ion-button",3),s.cc("click",(function(){return n.askForDisableBatteryOptimizer()})),s.Hc(34),s.hc(35,"translate"),s.Tb(),s.Tb(),s.Ub(36,"fiv-step",2),s.hc(37,"async"),s.hc(38,"async"),s.hc(39,"async"),s.hc(40,"async"),s.hc(41,"translate"),s.hc(42,"async"),s.hc(43,"translate"),s.hc(44,"translate"),s.Ub(45,"p"),s.Hc(46),s.hc(47,"translate"),s.Tb(),s.Ub(48,"ion-button",3),s.cc("click",(function(){return n.AskForActivateBluetooth()})),s.Hc(49),s.hc(50,"translate"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Bb(4),s.Ic(s.ic(5,20,"TUTORIAL_TITLE_SLIDE_5")),s.Bb(3),s.mc("mode","vertical"),s.Bb(2),s.mc("icon",s.ic(10,22,n.geolocationIsGranted$)?"checkmark-outline":"alert-circle-outline")("open",!s.ic(11,24,n.geolocationIsGranted$))("title",s.ic(12,26,"TUTORIAL_LOCATION_PERMISSION_TITLE"))("subtitle",s.ic(13,28,n.geolocationIsGranted$)?s.ic(14,30,"TUTORIAL_LOCATION_PERMISSION_SUBTITLE_OK"):s.ic(15,32,"TUTORIAL_LOCATION_PERMISSION_SUBTITLE_KO")),s.Bb(8),s.Ic(s.ic(18,34,"TUTORIAL_LOCATION_PERMISSION_INFO")),s.Bb(3),s.Ic(s.ic(21,36,"TUTORIAL_LOCATION_PERMISSION_OK")),s.Bb(2),s.mc("icon",s.ic(23,38,n.batteryOptimizerIsEnabled$)?"alert-circle-outline":"checkmark-outline")("open",s.ic(24,40,n.batteryOptimizerIsEnabled$)&&s.ic(25,42,n.geolocationIsGranted$))("title",s.ic(26,44,"TUTORIAL_BATTERYSAFE_TITLE"))("subtitle",s.ic(27,46,n.batteryOptimizerIsEnabled$)?s.ic(28,48,"TUTORIAL_BATTERYSAFE_SUBTITLE_KO"):s.ic(29,50,"TUTORIAL_BATTERYSAFE_SUBTITLE_OK")),s.Bb(9),s.Ic(s.ic(32,52,"TUTORIAL_BATTERYSAFE_INFO")),s.Bb(3),s.Ic(s.ic(35,54,"TUTORIAL_BATTERYSAFE_OK")),s.Bb(2),s.mc("icon",s.ic(37,56,n.bluetoothIsActive$)?"checkmark-outline":"alert-circle-outline")("open",!s.ic(38,58,n.bluetoothIsActive$)&&!s.ic(39,60,n.batteryOptimizerIsEnabled$)&&s.ic(40,62,n.geolocationIsGranted$))("title",s.ic(41,64,"TUTORIAL_BLUETOOTH_TITLE"))("subtitle",s.ic(42,66,n.bluetoothIsActive$)?s.ic(43,68,"TUTORIAL_BLUETOOTH_SUBTITLE_OK"):s.ic(44,70,"TUTORIAL_BLUETOOTH_SUBTITLE_KO")),s.Bb(10),s.Ic(s.ic(47,72,"TUTORIAL_BLUETOOTH_INFO")),s.Bb(3),s.Ic(s.ic(50,74,"TUTORIAL_BLUETOOTH_OK")))},directives:[u.g,u.i,u.h,l.e,l.d,u.e],pipes:[O.c,_.b],styles:["<ion-card[_ngcontent-%COMP%] > <ion-card-header[_ngcontent-%COMP%] > <p[_ngcontent-%COMP%] > <b[_ngcontent-%COMP%] > {{ 'TUTORIAL_TITLE_SLIDE_5' | translate }}</b[_ngcontent-%COMP%] > </p[_ngcontent-%COMP%] > </ion-card-header[_ngcontent-%COMP%] > <ion-card-content[_ngcontent-%COMP%] > <fiv-stepper[_ngcontent-%COMP%]   #stepperV[_ngcontent-%COMP%]   [mode]=\"'vertical'\"[_ngcontent-%COMP%] > <fiv-step[_ngcontent-%COMP%]   [icon]=\"(this.geolocationIsGranted$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)?'checkmark-outline'[_ngcontent-%COMP%]:'alert-circle-outline'\"   [open]=\"!(this.geolocationIsGranted$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)\"[_ngcontent-%COMP%]   [title]=\"('TUTORIAL_LOCATION_PERMISSION_TITLE'[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   translate)\"[_ngcontent-%COMP%]   [subtitle]=\"(this.geolocationIsGranted$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)?('TUTORIAL_LOCATION_PERMISSION_SUBTITLE_OK'[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   translate)[_ngcontent-%COMP%]:('TUTORIAL_LOCATION_PERMISSION_SUBTITLE_KO'   |[_ngcontent-%COMP%]   translate)\"[_ngcontent-%COMP%]    > <p[_ngcontent-%COMP%] > {{ 'TUTORIAL_LOCATION_PERMISSION_INFO' | translate }}</p[_ngcontent-%COMP%] > <ion-button[_ngcontent-%COMP%]   (click)=\"this.AskForGeolocationPermission()\"[_ngcontent-%COMP%]    > {{ 'TUTORIAL_LOCATION_PERMISSION_OK' | translate }}</ion-button[_ngcontent-%COMP%]    > </fiv-step[_ngcontent-%COMP%] > <fiv-step[_ngcontent-%COMP%]   [icon]=\"!(batteryOptimizerIsEnabled$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)?'checkmark-outline'[_ngcontent-%COMP%]:'alert-circle-outline'\"   [open]=\"(this.batteryOptimizerIsEnabled$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)[_ngcontent-%COMP%]   &&[_ngcontent-%COMP%]   (this.geolocationIsGranted$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)\"[_ngcontent-%COMP%]   [title]=\"('TUTORIAL_BATTERYSAFE_TITLE'[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   translate)\"[_ngcontent-%COMP%]   [subtitle]=\"(batteryOptimizerIsEnabled$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)?('TUTORIAL_BATTERYSAFE_SUBTITLE_KO'[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   translate)[_ngcontent-%COMP%]:('TUTORIAL_BATTERYSAFE_SUBTITLE_OK'   |[_ngcontent-%COMP%]   translate)\"[_ngcontent-%COMP%]    > <p[_ngcontent-%COMP%] > {{ 'TUTORIAL_BATTERYSAFE_INFO' | translate }}</p[_ngcontent-%COMP%] > <ion-button[_ngcontent-%COMP%]   (click)=\"this.askForDisableBatteryOptimizer()\"[_ngcontent-%COMP%]    > {{ 'TUTORIAL_BATTERYSAFE_OK' | translate }}</ion-button[_ngcontent-%COMP%]    > </fiv-step[_ngcontent-%COMP%] > <fiv-step[_ngcontent-%COMP%]   [icon]=\"(bluetoothIsActive$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)?'checkmark-outline'[_ngcontent-%COMP%]:'alert-circle-outline'\"   [open]=\"!(this.bluetoothIsActive$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)[_ngcontent-%COMP%]   &&[_ngcontent-%COMP%]   !(this.batteryOptimizerIsEnabled$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)[_ngcontent-%COMP%]   &&[_ngcontent-%COMP%]   (this.geolocationIsGranted$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)\"[_ngcontent-%COMP%]   [title]=\"('TUTORIAL_BLUETOOTH_TITLE'[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   translate)\"[_ngcontent-%COMP%]   [subtitle]=\"(bluetoothIsActive$[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   async)?('TUTORIAL_BLUETOOTH_SUBTITLE_OK'[_ngcontent-%COMP%]   |[_ngcontent-%COMP%]   translate)[_ngcontent-%COMP%]:('TUTORIAL_BLUETOOTH_SUBTITLE_KO'   |[_ngcontent-%COMP%]   translate)\"[_ngcontent-%COMP%]    > <p[_ngcontent-%COMP%] > {{ 'TUTORIAL_BLUETOOTH_INFO' | translate }}</p[_ngcontent-%COMP%] > <ion-button[_ngcontent-%COMP%]   (click)=\"this.AskForActivateBluetooth()\"[_ngcontent-%COMP%]    > {{ 'TUTORIAL_BLUETOOTH_OK' | translate }}</ion-button\n    >\n  </fiv-step>\n</fiv-stepper>\n</ion-card-content>\n</ion-card>"]}),Object(c.b)([Object(r.e)(o.a.getData),Object(c.e)("design:type",i.a)],t.prototype,"dati$",void 0),Object(c.b)([Object(r.e)(o.a.BatteryOptimizerIsEnabled),Object(c.e)("design:type",i.a)],t.prototype,"batteryOptimizerIsEnabled$",void 0),Object(c.b)([Object(r.e)(o.a.geolocationIsGranted),Object(c.e)("design:type",i.a)],t.prototype,"geolocationIsGranted$",void 0),Object(c.b)([Object(r.e)(o.a.BluetoothIsActive),Object(c.e)("design:type",i.a)],t.prototype,"bluetoothIsActive$",void 0),t}()}}]);