(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-116e8a3c"],{"0ba1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"get-public-key"},[a("section",{staticClass:"content"},[a("section",{staticClass:"app-details"},[a("PopOutLogos",{attrs:{app:t.app}}),a("figure",{staticClass:"action"},[t._v("Update Username")]),a("figure",{staticClass:"app-name"},[t._v("via "),a("b",[t._v(t._s(t.app.name))])]),a("figure",{staticClass:"text"},[t._v("This app wants to update your "),a("b",[t._v("username")]),t._v(' to "'),a("b",[t._v(t._s(t.payload.name))]),t._v('".')])],1)]),a("section",{staticClass:"popout-buttons"},[a("Button",{attrs:{text:"Deny"},nativeOn:{click:function(e){return t.closer(e)}}}),a("Button",{attrs:{primary:"1",text:"Update"},nativeOn:{click:function(e){return t.$emit("returned",!0)}}})],1)])},r=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=(a("118f"),a("2f62")),p=a("92b9");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u={components:{PopOutLogos:p["a"]},props:["popup","closer"],computed:i({},Object(o["d"])(["scatter"]),{payload:function(){return this.popup.payload()},app:function(){return this.popup.data.props.appData}}),methods:{}},l=u,f=(a("a922"),a("2877")),b=Object(f["a"])(l,n,r,!1,null,"821ca294",null);e["default"]=b.exports},2553:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"",""])},"489d":function(t,e,a){var n=a("2553");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("1d1d54ea",n,!0,{sourceMap:!1,shadowMode:!1})},"92b9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{class:{logos:!!t.app.img}},[t.app.img?a("figure",{staticClass:"logo"},[t.app.img?a("img",{attrs:{src:t.app.img}}):a("span",[t._v(t._s(t.app.name))])]):t._e()])},r=[],s={props:["app"]},o=s,p=a("2877"),c=Object(p["a"])(o,n,r,!1,null,null,null);e["a"]=c.exports},a922:function(t,e,a){"use strict";var n=a("489d"),r=a.n(n);r.a}}]);