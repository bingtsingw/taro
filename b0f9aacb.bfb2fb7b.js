(window.webpackJsonp=window.webpackJsonp||[]).push([[1510],{1575:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2205),c=r(2206),a=(r(0),r(2207)),l={title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},o={unversionedId:"apis/network/mdns/startLocalServiceDiscovery",id:"version-3.x/apis/network/mdns/startLocalServiceDiscovery",isDocsHomePage:!1,title:"Taro.startLocalServiceDiscovery(option)",description:"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-3.x/apis/network/mdns/startLocalServiceDiscovery.md",slug:"/apis/network/mdns/startLocalServiceDiscovery",permalink:"/taro/docs/apis/network/mdns/startLocalServiceDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/mdns/startLocalServiceDiscovery.md",version:"3.x",sidebar_label:"startLocalServiceDiscovery",sidebar:"version-3.x/API",previous:{title:"Taro.stopLocalServiceDiscovery(option)",permalink:"/taro/docs/apis/network/mdns/stopLocalServiceDiscovery"},next:{title:"Taro.onLocalServiceResolveFail(callback)",permalink:"/taro/docs/apis/network/mdns/onLocalServiceResolveFail"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],b={rightToc:i};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"wx.startLocalServiceDiscovery \u662f\u4e00\u4e2a\u6d88\u8017\u6027\u80fd\u7684\u884c\u4e3a\uff0c\u5f00\u59cb 30 \u79d2\u540e\u4f1a\u81ea\u52a8 stop \u5e76\u6267\u884c wx.onLocalServiceDiscoveryStop \u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(a.b)("li",{parentName:"ol"},"\u5728\u8c03\u7528 wx.startLocalServiceDiscovery \u540e\uff0c\u5728\u8fd9\u6b21\u641c\u7d22\u884c\u4e3a\u505c\u6b62\u540e\u624d\u80fd\u53d1\u8d77\u4e0b\u6b21 wx.startLocalServiceDiscovery\u3002\u505c\u6b62\u672c\u6b21\u641c\u7d22\u884c\u4e3a\u7684\u64cd\u4f5c\u5305\u62ec\u8c03\u7528 wx.stopLocalServiceDiscovery \u548c 30 \u79d2\u540e\u7cfb\u7edf\u81ea\u52a8 stop \u672c\u6b21\u641c\u7d22\u3002")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"complete"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"fail"),Object(a.b)("td",null,Object(a.b)("code",null,"(result: FailCallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(a.b)("tr",null,Object(a.b)("td",null,"success"),Object(a.b)("td",null,Object(a.b)("code",null,"(res: CallbackResult) => void")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"errMsg"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u9519\u8bef\u4fe1\u606f",Object(a.b)("br",null),Object(a.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(a.b)("br",null),"- 'invalid param': serviceType \u4e3a\u7a7a;",Object(a.b)("br",null),"- 'scan task already exist': \u5728\u5f53\u524d startLocalServiceDiscovery \u53d1\u8d77\u7684\u641c\u7d22\u672a\u505c\u6b62\u7684\u60c5\u51b5\u4e0b\uff0c\u518d\u6b21\u8c03\u7528 startLocalServiceDiscovery;")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.startLocalServiceDiscovery"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},2205:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2206:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return n}))},2207:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(r),O=n,d=u["".concat(l,".").concat(O)]||u[O]||p[O]||a;return r?c.a.createElement(d,o(o({ref:t},b),{},{components:r})):c.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<a;b++)l[b]=r[b];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);