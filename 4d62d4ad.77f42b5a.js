(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{2205:function(e,r,t){"use strict";function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return a}))},2206:function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(r,"a",(function(){return a}))},2207:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return O}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=n.a.createContext({}),l=function(e){var r=n.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},s=function(e){var r=l(e.components);return n.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},p=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(t),p=a,O=s["".concat(o,".").concat(p)]||s[p]||f[p]||c;return t?n.a.createElement(O,b(b({ref:r},u),{},{components:t})):n.a.createElement(O,b({ref:r},u))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=p;var b={};for(var i in r)hasOwnProperty.call(r,i)&&(b[i]=r[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var u=2;u<c;u++)o[u]=t[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},722:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var a=t(2205),n=t(2206),c=(t(0),t(2207)),o={title:"Taro.arrayBufferToBase64(buffer)",sidebar_label:"arrayBufferToBase64"},b={unversionedId:"apis/base/arrayBufferToBase64",id:"version-3.x/apis/base/arrayBufferToBase64",isDocsHomePage:!1,title:"Taro.arrayBufferToBase64(buffer)",description:"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002",source:"@site/versioned_docs/version-3.x/apis/base/arrayBufferToBase64.md",slug:"/apis/base/arrayBufferToBase64",permalink:"/taro/docs/apis/base/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/base/arrayBufferToBase64.md",version:"3.x",sidebar_label:"arrayBufferToBase64",sidebar:"version-3.x/API",previous:{title:"Taro.base64ToArrayBuffer(base64)",permalink:"/taro/docs/apis/base/base64ToArrayBuffer"},next:{title:"Taro.getSystemInfo(res)",permalink:"/taro/docs/apis/base/system/getSystemInfo"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function l(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"(buffer: ArrayBuffer) => string\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"buffer"),Object(c.b)("td",null,Object(c.b)("code",null,"ArrayBuffer")),Object(c.b)("td",null,"\u8981\u8f6c\u6362\u6210 Base64 \u5b57\u7b26\u4e32\u7684 ArrayBuffer \u5bf9\u8c61")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.arrayBufferToBase64"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);