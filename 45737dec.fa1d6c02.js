(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{2205:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},2206:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},2207:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),O=c,d=p["".concat(l,".").concat(O)]||p[O]||s[O]||a;return n?r.a.createElement(d,i(i({ref:t},b),{},{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:c,l[1]=i;for(var b=2;b<a;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},655:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var c=n(2205),r=n(2206),a=(n(0),n(2207)),l={title:"Taro.checkIsSupportFacialRecognition(option)",sidebar_label:"checkIsSupportFacialRecognition"},i={unversionedId:"apis/open-api/facial/checkIsSupportFacialRecognition",id:"version-3.2.0-canary.3/apis/open-api/facial/checkIsSupportFacialRecognition",isDocsHomePage:!1,title:"Taro.checkIsSupportFacialRecognition(option)",description:"\u68c0\u67e5\u662f\u5426\u652f\u6301\u9762\u90e8\u8bc6\u522b",source:"@site/versioned_docs/version-3.2.0-canary.3/apis/open-api/facial/checkIsSupportFacialRecognition.md",slug:"/apis/open-api/facial/checkIsSupportFacialRecognition",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/facial/checkIsSupportFacialRecognition",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/apis/open-api/facial/checkIsSupportFacialRecognition.md",version:"3.2.0-canary.3",sidebar_label:"checkIsSupportFacialRecognition",sidebar:"version-3.2.0-canary.3/API",previous:{title:"Taro.checkIsSoterEnrolledInDevice(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/soter/checkIsSoterEnrolledInDevice"},next:{title:"Taro.startFacialRecognitionVerify(option)",permalink:"/taro/docs/3.2.0-canary.3/apis/open-api/facial/startFacialRecognitionVerify"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u68c0\u67e5\u662f\u5426\u652f\u6301\u9762\u90e8\u8bc6\u522b"),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"checkAliveType"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u4ea4\u4e92\u65b9\u5f0f")),Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(result: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"errMsg"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(a.b)("tr",null,Object(a.b)("td",null,"errCode"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u9519\u8bef\u7801")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.checkIsSupportFacialRecognition"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);