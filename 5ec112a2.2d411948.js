(window.webpackJsonp=window.webpackJsonp||[]).push([[806],{2205:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return l}))},2206:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,c={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(c[n]=t[n]);return c}n.d(e,"a",(function(){return l}))},2207:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return j}));var l=n(0),c=n.n(l);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,c=function(t,e){if(null==t)return{};var n,l,c={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var i=c.a.createContext({}),u=function(t){var e=c.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},O=function(t){var e=u(t.components);return c.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},s=c.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,b=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),O=u(n),s=l,j=O["".concat(b,".").concat(s)]||O[s]||d[s]||r;return n?c.a.createElement(j,a(a({ref:e},i),{},{components:n})):c.a.createElement(j,a({ref:e},i))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,b=new Array(r);b[0]=s;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:l,b[1]=a;for(var i=2;i<r;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},872:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return u}));var l=n(2205),c=n(2206),r=(n(0),n(2207)),b={title:"Taro.showModal(option)",sidebar_label:"showModal"},a={unversionedId:"apis/ui/interaction/showModal",id:"version-2.x/apis/ui/interaction/showModal",isDocsHomePage:!1,title:"Taro.showModal(option)",description:"\u663e\u793a\u6a21\u6001\u5bf9\u8bdd\u6846",source:"@site/versioned_docs/version-2.x/apis/ui/interaction/showModal.md",slug:"/apis/ui/interaction/showModal",permalink:"/taro/docs/2.x/apis/ui/interaction/showModal",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/ui/interaction/showModal.md",version:"2.x",sidebar_label:"showModal",sidebar:"version-2.x/API",previous:{title:"Taro.showToast(option)",permalink:"/taro/docs/2.x/apis/ui/interaction/showToast"},next:{title:"Taro.showLoading(option)",permalink:"/taro/docs/2.x/apis/ui/interaction/showLoading"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u663e\u793a\u6a21\u6001\u5bf9\u8bdd\u6846\n",Object(r.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Android 6.7.2 \u4ee5\u4e0b\u7248\u672c\uff0c\u70b9\u51fb\u53d6\u6d88\u6216\u8499\u5c42\u65f6\uff0c\u56de\u8c03 fail, errMsg \u4e3a "fail cancel"\uff1b'),Object(r.b)("li",{parentName:"ul"},"Android 6.7.2 \u53ca\u4ee5\u4e0a\u7248\u672c \u548c iOS \u70b9\u51fb\u8499\u5c42\u4e0d\u4f1a\u5173\u95ed\u6a21\u6001\u5f39\u7a97\uff0c\u6240\u4ee5\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u300c\u53d6\u6d88\u300d\u5206\u652f\u4e2d\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"cancelColor"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u5fc5\u987b\u662f 16 \u8fdb\u5236\u683c\u5f0f\u7684\u989c\u8272\u5b57\u7b26\u4e32")),Object(r.b)("tr",null,Object(r.b)("td",null,"cancelText"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"confirmColor"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u5fc5\u987b\u662f 16 \u8fdb\u5236\u683c\u5f0f\u7684\u989c\u8272\u5b57\u7b26\u4e32")),Object(r.b)("tr",null,Object(r.b)("td",null,"confirmText"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u5b57\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26")),Object(r.b)("tr",null,Object(r.b)("td",null,"content"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63d0\u793a\u7684\u5185\u5bb9")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"showCancel"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"title"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63d0\u793a\u7684\u6807\u9898")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"cancel"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u53d6\u6d88\uff08\u7528\u4e8e Android \u7cfb\u7edf\u533a\u5206\u70b9\u51fb\u8499\u5c42\u5173\u95ed\u8fd8\u662f\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u5173\u95ed\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"confirm"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u786e\u5b9a\u6309\u94ae")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.showModal({\n  title: '\u63d0\u793a',\n  content: '\u8fd9\u662f\u4e00\u4e2a\u6a21\u6001\u5f39\u7a97',\n  success: function (res) {\n    if (res.confirm) {\n      console.log('\u7528\u6237\u70b9\u51fb\u786e\u5b9a')\n    } else if (res.cancel) {\n      console.log('\u7528\u6237\u70b9\u51fb\u53d6\u6d88')\n    }\n  }\n})\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.showModal"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);