(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{1147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2205),a=n(2206),c=(n(0),n(2207)),l={title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},b={unversionedId:"apis/open-api/navigate/navigateToMiniProgram",id:"version-2.x/apis/open-api/navigate/navigateToMiniProgram",isDocsHomePage:!1,title:"Taro.navigateToMiniProgram(option)",description:"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f",source:"@site/versioned_docs/version-2.x/apis/open-api/navigate/navigateToMiniProgram.md",slug:"/apis/open-api/navigate/navigateToMiniProgram",permalink:"/taro/docs/2.x/apis/open-api/navigate/navigateToMiniProgram",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/navigate/navigateToMiniProgram.md",version:"2.x",sidebar_label:"navigateToMiniProgram",sidebar:"version-2.x/API",previous:{title:"Taro.checkSession(option)",permalink:"/taro/docs/2.x/apis/open-api/login/checkSession"},next:{title:"Taro.navigateBackMiniProgram(option)",permalink:"/taro/docs/2.x/apis/open-api/navigate/navigateBackMiniProgram"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"envVersion",id:"envversion",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u4f7f\u7528\u9650\u5236")),Object(c.b)("h5",{id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"},"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"),Object(c.b)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u82e5\u7528\u6237\u672a\u70b9\u51fb\u5c0f\u7a0b\u5e8f\u9875\u9762\u4efb\u610f\u4f4d\u7f6e\uff0c\u5219\u5f00\u53d1\u8005\u5c06\u65e0\u6cd5\u8c03\u7528\u6b64\u63a5\u53e3\u81ea\u52a8\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002"),Object(c.b)("h5",{id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"},"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"),Object(c.b)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u5728\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u524d\uff0c\u5c06\u7edf\u4e00\u589e\u52a0\u5f39\u7a97\uff0c\u8be2\u95ee\u662f\u5426\u8df3\u8f6c\uff0c\u7528\u6237\u786e\u8ba4\u540e\u624d\u53ef\u4ee5\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002\u5982\u679c\u7528\u6237\u70b9\u51fb\u53d6\u6d88\uff0c\u5219\u56de\u8c03 ",Object(c.b)("inlineCode",{parentName:"p"},"fail cancel"),"\u3002"),Object(c.b)("h5",{id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a"},"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a"),Object(c.b)("p",null,"\u4ece 2.4.0 \u7248\u672c\u4ee5\u53ca\u6307\u5b9a\u65e5\u671f\uff08\u5177\u4f53\u5f85\u5b9a\uff09\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u63d0\u4ea4\u65b0\u7248\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u65f6\uff0c\u5982\u4f7f\u7528\u4e86\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u529f\u80fd\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u914d\u7f6e\u4e2d\u58f0\u660e\u5c06\u8981\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u540d\u5355\uff0c\u9650\u5b9a\u4e0d\u8d85\u8fc7 10 \u4e2a\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u901a\u8fc7\u5ba1\u6838\u3002\u8be5\u540d\u5355\u53ef\u5728\u53d1\u5e03\u65b0\u7248\u65f6\u66f4\u65b0\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"}),"\u5c0f\u7a0b\u5e8f\u5168\u5c40\u914d\u7f6e"),"\u3002\u8c03\u7528\u6b64\u63a5\u53e3\u65f6\uff0c\u6240\u8df3\u8f6c\u7684 appId \u5fc5\u987b\u5728\u914d\u7f6e\u5217\u8868\u4e2d\uff0c\u5426\u5219\u56de\u8c03 ",Object(c.b)("inlineCode",{parentName:"p"},'fail appId "${appId}" is not in navigateToMiniProgramAppIdList'),"\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5173\u4e8e\u8c03\u8bd5")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u8c03\u7528\u6b64 API \u5e76\u4e0d\u4f1a\u771f\u5b9e\u7684\u8df3\u8f6c\u5230\u53e6\u5916\u7684\u5c0f\u7a0b\u5e8f\uff0c\u4f46\u662f\u5f00\u53d1\u8005\u5de5\u5177\u4f1a\u6821\u9a8c\u672c\u6b21\u8c03\u7528\u8df3\u8f6c\u662f\u5426\u6210\u529f\u3002",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"}),"\u8be6\u60c5")),Object(c.b)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u652f\u6301\u88ab\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u5904\u7406\u63a5\u6536\u53c2\u6570\u7684\u8c03\u8bd5\u3002",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"}),"\u8be6\u60c5"))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"appId"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f appId")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"envVersion"),Object(c.b)("td",null,Object(c.b)("code",null,'"develop" | "trial" | "release"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u7248\u672c\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e3a\u5f00\u53d1\u7248\u6216\u4f53\u9a8c\u7248\u65f6\u6b64\u53c2\u6570\u6709\u6548\u3002\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u662f\u6b63\u5f0f\u7248\uff0c\u5219\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u5fc5\u5b9a\u662f\u6b63\u5f0f\u7248\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"extraData"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9700\u8981\u4f20\u9012\u7ed9\u76ee\u6807\u5c0f\u7a0b\u5e8f\u7684\u6570\u636e\uff0c\u76ee\u6807\u5c0f\u7a0b\u5e8f\u53ef\u5728 ",Object(c.b)("code",null,"App.onLaunch"),"\uff0c",Object(c.b)("code",null,"App.onShow")," \u4e2d\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u3002\u5982\u679c\u8df3\u8f6c\u7684\u662f\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u5728 ",Object(c.b)("a",{href:"#"},"wx.onShow"),"\u3001",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"},"wx.getLaunchOptionsSync")," \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u6570\u636e\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"path"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6253\u5f00\u7684\u9875\u9762\u8def\u5f84\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u6253\u5f00\u9996\u9875\u3002path \u4e2d ? \u540e\u9762\u7684\u90e8\u5206\u4f1a\u6210\u4e3a query\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7684 ",Object(c.b)("code",null,"App.onLaunch"),"\u3001",Object(c.b)("code",null,"App.onShow")," \u548c ",Object(c.b)("code",null,"Page.onLoad")," \u7684\u56de\u8c03\u51fd\u6570\u6216\u5c0f\u6e38\u620f\u7684 ",Object(c.b)("a",{href:"#"},"wx.onShow")," \u56de\u8c03\u51fd\u6570\u3001",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html"},"wx.getLaunchOptionsSync"),' \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230 query \u6570\u636e\u3002\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u53ea\u4f20\u5165 query \u90e8\u5206\uff0c\u6765\u5b9e\u73b0\u4f20\u53c2\u6548\u679c\uff0c\u5982\uff1a\u4f20\u5165 "?foo=bar"\u3002')),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"envversion"},"envVersion"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"develop"),Object(c.b)("td",null,"\u5f00\u53d1\u7248")),Object(c.b)("tr",null,Object(c.b)("td",null,"trial"),Object(c.b)("td",null,"\u4f53\u9a8c\u7248")),Object(c.b)("tr",null,Object(c.b)("td",null,"release"),Object(c.b)("td",null,"\u6b63\u5f0f\u7248")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.navigateToMiniProgram({\n  appId: '',\n  path: 'page/index/index?id=123',\n  extraData: {\n    foo: 'bar'\n  },\n  envVersion: 'develop',\n  success: function(res) {\n    // \u6253\u5f00\u6210\u529f\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.navigateToMiniProgram"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},2205:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2206:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},2207:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,j=u["".concat(l,".").concat(d)]||u[d]||O[d]||c;return n?a.a.createElement(j,b(b({ref:t},o),{},{components:n})):a.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);