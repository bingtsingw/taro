(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{2205:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return a}))},2206:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return a}))},2207:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return t?r.a.createElement(d,b(b({ref:n},i),{},{components:t})):r.a.createElement(d,b({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},640:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(2205),r=t(2206),l=(t(0),t(2207)),c={slug:"2020-01-08-taro-2-0",title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},b={permalink:"/taro/blog/2020-01-08-taro-2-0",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-01-08-taro-2-0.md",source:"@site/blog/2020-01-08-taro-2-0.md",description:"Taro 1.x \u7248\u672c\u81ea\u53bb\u5e74 9 \u6708\u4efd\u53d1\u5e03\u4ee5\u6765\uff0c\u5df2\u7ecf\u966a\u4f34\u5927\u5bb6\u5ea6\u8fc7\u4e86\u4e00\u5e74\u591a\u7684\u65f6\u95f4\uff0c\u5728\u6b64\u671f\u95f4 Taro \u4e00\u76f4\u4fdd\u6301\u9ad8\u901f\u6210\u957f\uff0c\u53d1\u5e03\u4e86\u591a\u4e2a\u5177\u6709\u91cd\u5927\u610f\u4e49\u7684\u7248\u672c\uff0c\u8ba9 Taro \u6210\u4e3a\u5982\u4eca\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\uff0c\u62e5\u6709\u4f17\u591a\u5fe0\u5b9e\u62e5\u8db8\u7684\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u3002",date:"2020-01-08T00:00:00.000Z",tags:[],title:"Taro 2.0\uff1a\u62e5\u62b1\u793e\u533a\uff0c\u62e5\u62b1\u53d8\u5316",readingTime:2.885,truncated:!0,prevItem:{title:"Taro Next \u53d1\u5e03\u9884\u89c8\u7248\uff1a\u540c\u65f6\u652f\u6301 React / Vue / Nerv",permalink:"/taro/blog/2020-02-13-taro-next-alpha"},nextItem:{title:"\u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5",permalink:"/taro/blog/2020-01-02-gmtc"}},o=[{value:"2.0",id:"20",children:[]},{value:"Migrate to 2.0",id:"migrate-to-20",children:[{value:"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574",id:"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574",children:[]},{value:"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574",id:"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574",children:[]},{value:"\u65b0\u7279\u6027\u5c1d\u9c9c",id:"\u65b0\u7279\u6027\u5c1d\u9c9c",children:[]}]},{value:"\u672a\u6765\u4e0e\u5c55\u671b",id:"\u672a\u6765\u4e0e\u5c55\u671b",children:[]}],i={rightToc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Taro 1.x \u7248\u672c\u81ea\u53bb\u5e74 9 \u6708\u4efd\u53d1\u5e03\u4ee5\u6765\uff0c\u5df2\u7ecf\u966a\u4f34\u5927\u5bb6\u5ea6\u8fc7\u4e86\u4e00\u5e74\u591a\u7684\u65f6\u95f4\uff0c\u5728\u6b64\u671f\u95f4 Taro \u4e00\u76f4\u4fdd\u6301\u9ad8\u901f\u6210\u957f\uff0c\u53d1\u5e03\u4e86\u591a\u4e2a\u5177\u6709\u91cd\u5927\u610f\u4e49\u7684\u7248\u672c\uff0c\u8ba9 Taro \u6210\u4e3a\u5982\u4eca\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\uff0c\u62e5\u6709\u4f17\u591a\u5fe0\u5b9e\u62e5\u8db8\u7684\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u3002"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.360buyimg.com/2.0/alls.jpg",alt:null}))),Object(l.b)("p",null,"\u5c3d\u7ba1 Taro \u4e00\u76f4\u4fdd\u6301\u8d85\u9ad8\u7684\u8fed\u4ee3\u901f\u5ea6\uff0cTaro \u7684\u6574\u4f53\u67b6\u6784\u8bbe\u8ba1\u6ca1\u6709\u53d1\u751f\u592a\u5927\u53d8\u5316\uff0c\u8fd9\u8ba9 Taro \u5728\u8fd9\u4e2a\u65f6\u523b\u5728\u53d8\u5316\u7684\u65f6\u4ee3\u7a0d\u663e\u4f5b\u7cfb\uff0c\u4e14\u5bf9\u4e8e\u4e00\u4e2a\u65f6\u523b\u60f3\u8981\u7a81\u7834\u81ea\u5df1\u7684\u6280\u672f\u56e2\u961f\u6765\u8bf4\uff0c\u5e38\u89c4\u6027\u8d28\u7684\u7ef4\u62a4\u5de5\u4f5c\uff0c\u663e\u7136\u65e0\u6cd5\u5b89\u629a\u6211\u4eec\u8e81\u52a8\u7684\u5fc3\uff0c\u6bd5\u7adf\u4eba\u7684\u68a6\u60f3\uff0c\u662f\u6c38\u8fdc\u4e0d\u4f1a\u505c\u6b62\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u51b3\u5b9a\u542f\u52a8\u4e00\u7cfb\u5217\u7684\u98a0\u8986\u5f0f\u91cd\u6784\u8bbe\u8ba1\u3002"),Object(l.b)("h2",{id:"20"},"2.0"),Object(l.b)("p",null,"\u6211\u4eec\u9996\u5148\u4ece CLI \u5f00\u59cb\u5165\u624b\u8fdb\u884c\u6539\u9020\uff0c\u5927\u5bb6\u90fd\u77e5\u9053\uff0c\u539f\u6765 Taro CLI \u7684\u7f16\u8bd1\u6784\u5efa\u7cfb\u7edf\u662f\u81ea\u7814\u7684\uff0c\u6574\u4e2a\u6784\u5efa\u7cfb\u7edf\u903b\u8f91\u590d\u6742\uff0c\u8981\u8003\u8651\u7684\u8fb9\u9645\u6761\u4ef6\u4f17\u591a\uff0c\u8fd9\u5c31\u5bfc\u81f4\u4e86\u4ee5\u4e0b\u95ee\u9898\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7ef4\u62a4\u56f0\u96be\uff0c\u6bcf\u6b21\u9700\u8981\u65b0\u589e\u4e00\u4e2a\u529f\u80fd\uff0c\u4f8b\u5982\u652f\u6301\u89e3\u6790 Markdown \u6587\u4ef6\uff0c\u5c31\u9700\u8981\u76f4\u63a5\u6539\u52a8 CLI\uff0c\u4e0d\u591f\u7075\u6d3b"),Object(l.b)("li",{parentName:"ul"},"\u96be\u4ee5\u5171\u5efa\uff0cCLI \u7684\u4ee3\u7801\u975e\u5e38\u590d\u6742\uff0c\u800c\u4e14\u903b\u8f91\u5206\u652f\u4f17\u591a\uff0c\u8ba9\u5f88\u591a\u60f3\u8981\u4e00\u8d77\u5171\u5efa\u7684\u4eba\u96be\u4ee5\u5165\u624b"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027\u504f\u4f4e\uff0c\u81ea\u7814\u7684\u6784\u5efa\u7cfb\u7edf\uff0c\u8bbe\u8ba1\u4e4b\u521d\u6ca1\u6709\u8003\u8651\u5230\u540e\u7eed\u7684\u6269\u5c55\u6027\uff0c\u5bfc\u81f4\u5f00\u53d1\u8005\u60f3\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684\u529f\u80fd\u65e0\u4ece\u4e0b\u624b")),Object(l.b)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u95ee\u9898\uff0c\u6211\u4eec\u51b3\u5b9a\u4f7f\u7528 Webpack \u6765\u5b9e\u73b0\u7f16\u8bd1\u6784\u5efa\uff0c\u4e8e\u662f\u8bde\u751f\u4e86 2.0\u3002"),Object(l.b)("p",null,"Taro 2.0 \u7684 CLI \u5c06\u4f1a\u53d8\u5f97\u975e\u5e38\u8f7b\u91cf\uff0c\u53ea\u4f1a\u505a\u533a\u5206\u7f16\u8bd1\u5e73\u53f0\u3001\u5904\u7406\u4e0d\u540c\u5e73\u53f0\u7f16\u8bd1\u5165\u53c2\u7b49\u64cd\u4f5c\uff0c\u968f\u540e\u518d\u8c03\u7528\u5bf9\u5e94\u5e73\u53f0\u7684 ",Object(l.b)("strong",{parentName:"p"},"runner \u7f16\u8bd1\u5668")," \u505a\u4ee3\u7801\u7f16\u8bd1\u64cd\u4f5c\uff0c\u800c\u539f\u6765\u5927\u91cf\u7684 AST \u8bed\u6cd5\u64cd\u4f5c\u5c06\u4f1a\u6539\u9020\u6210 Webpack Plugin \u4ee5\u53ca Loader\uff0c\u4ea4\u7ed9 Webpack \u6765\u5904\u7406\u3002"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.360buyimg.com/2.0/taro-cli.001.png",alt:"taro-cli 2.0"}))),Object(l.b)("p",null,"\u76f8\u8f83\u4e8e\u65e7\u7684\u6784\u5efa\u7cfb\u7edf\uff0c\u65b0\u7684\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u5e26\u6765\u4e86\u4ee5\u4e0b\u4f18\u52bf\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5229\u4e8e\u7ef4\u62a4\uff0c\u5927\u91cf\u7684\u903b\u8f91\u4ea4\u7531 Webpack \u6765\u5904\u7406\uff0c\u6211\u4eec\u53ea\u9700\u8981\u7ef4\u62a4\u4e00\u4e9b\u63d2\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u66f4\u52a0\u7a33\u5b9a\uff0c\u76f8\u8f83\u4e8e\u81ea\u7814\u7684\u6784\u5efa\u7cfb\u7edf\uff0c\u65b0\u7684\u6784\u5efa\u4f1a\u66f4\u52a0\u7a33\u5b9a\uff0c\u964d\u4f4e\u4e00\u4e9b\u5947\u602a\u9519\u8bef\u7684\u51fa\u73b0\u6982\u7387"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027\u5f3a\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u884c\u52a0\u5165 Webpack Loader \u4e0e Plugin \u7684\u65b9\u5f0f\u505a\u81ea\u5df1\u60f3\u8981\u7684\u6269\u5c55"),Object(l.b)("li",{parentName:"ul"},"\u5404\u7aef\u7f16\u8bd1\u7edf\u4e00\uff0c\u63a5\u5165 Webpack \u540e\uff0cTaro \u5404\u7aef\u7684\u7f16\u8bd1\u914d\u7f6e\u53ef\u4ee5\u5b9e\u73b0\u975e\u5e38\u5927\u7a0b\u5ea6\u7684\u7edf\u4e00")),Object(l.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u65b0\u7684\u6784\u5efa\u7cfb\u7edf\u4f1a\u6709\u5f88\u5927\u7684\u8fdb\u6b65\u3002\u540c\u65f6\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u57fa\u4e8e Webpack\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u5c1d\u8bd5\u66f4\u591a\u7684\u7279\u6027\u4e0e\u6280\u672f\uff0c\u4f8b\u5982\u901a\u8fc7 tree shaking \u6765\u4f18\u5316\u4ee3\u7801\u5305\u5927\u5c0f\u7b49\u7b49\uff0c\u8ba9\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u66f4\u52a0\u4e0e\u4e1a\u754c\u53d1\u5c55\u540c\u6b65\uff0c\u8ba9 Taro \u66f4\u52a0\u62e5\u62b1\u793e\u533a\u3002"),Object(l.b)("h2",{id:"migrate-to-20"},"Migrate to 2.0"),Object(l.b)("h3",{id:"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574"},"\u7f16\u8bd1\u914d\u7f6e\u8c03\u6574"),Object(l.b)("p",null,"2.0 \u6574\u4f53\u4e0a\u4e0e 1.0 \u662f\u5b8c\u5168\u517c\u5bb9\u7684\uff0c\u4f46\u662f\u5728\u57fa\u4e8e Webpack \u91cd\u6784\u540e\uff0c\u6211\u4eec\u5bf9\u90e8\u5206\u7f16\u8bd1\u914d\u7f6e\u505a\u4e86\u4f18\u5316\u8c03\u6574\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u8981\u5c06\u57fa\u4e8e 1.x \u7684\u65e7\u9879\u76ee\u8fc1\u79fb\u81f3 2.0\uff0c\u9996\u5148\u9700\u8981\u5bf9\u7f16\u8bd1\u914d\u7f6e\u8fdb\u884c\u8c03\u6574\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  projectName: 'taro-framework',\n  date: '2019-11-2',\n  designWidth: 750,\n  deviceRatio: {\n    640: 2.34 / 2,\n    750: 1,\n    828: 1.81 / 2\n  },\n  sourceRoot: 'src',\n  outputRoot: 'dist',\n  // babel\u3001csso\u3001uglify \u7b49\u914d\u7f6e\u4ece plugins \u914d\u7f6e\u4e2d\u79fb\u51fa\u6765\n  babel: {\n    sourceMap: true,\n    presets: [['env', { modules: false }]],,\n    plugins: [\n      'transform-decorators-legacy',\n      'transform-class-properties',\n      'transform-object-rest-spread'\n    ]\n  },\n  // \u5c0f\u7a0b\u5e8f\u914d\u7f6e\u4ece weapp \u6539\u4e3a mini\uff0c\u53ef\u4ee5\u5220\u6389\u5f88\u591a\u5c0f\u914d\u7f6e\n  mini: {\n    webpackChain (chain, webpack) {},\n    cssLoaderOption: {},\n    postcss: {\n      pxtransform: {\n        enable: true,\n        config: {}\n      },\n      url: {\n        enable: true,\n        config: {\n          limit: 10240 // \u8bbe\u5b9a\u8f6c\u6362\u5c3a\u5bf8\u4e0a\u9650\n        }\n      }\n    }\n  },\n  // \u53ef\u4ee5\u5220\u6389\u5f88\u591a\u5c0f\u914d\u7f6e\n  h5: {\n    publicPath: '/',\n    staticDirectory: 'static',\n    webpackChain (chain, webpack) {},\n    postcss: {\n      autoprefixer: {\n        enable: true,\n        config: {\n          browsers: [\n            'last 3 versions',\n            'Android >= 4.1',\n            'ios >= 8'\n          ]\n        }\n      }\n    }\n  }\n}\n\nmodule.exports = function (merge) {\n  if (process.env.NODE_ENV === 'development') {\n    return merge({}, config, require('./dev'))\n  }\n  return merge({}, config, require('./prod'))\n}\n")),Object(l.b)("p",null,"\u5177\u4f53\u7f16\u8bd1\u914d\u7f6e\u8bf7\u53c2\u8003 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/2.x/docs/config-detail.md",title:"\u7f16\u8bd1\u914d\u7f6e\u6587\u6863"}),"\u7f16\u8bd1\u914d\u7f6e\u6587\u6863"),"\u3002"),Object(l.b)("h3",{id:"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574"},"\u5f02\u6b65\u7f16\u7a0b\u8c03\u6574"),Object(l.b)("p",null,"Taro 2.0 \u4e2d\u5f00\u542f ",Object(l.b)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u4e0d\u518d\u9700\u8981\u5b89\u88c5 ",Object(l.b)("inlineCode",{parentName:"p"},"@tarojs/async-await"),"\uff0c\u800c\u662f\u76f4\u63a5\u901a\u8fc7 babel \u63d2\u4ef6\u6765\u83b7\u5f97\u652f\u6301\u3002"),Object(l.b)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u5b89\u88c5\u5305 ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"babel-runtime"),"\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add babel-plugin-transform-runtime --dev\n$ yarn add babel-runtime\n")),Object(l.b)("p",null,"\u968f\u540e\u4fee\u6539\u9879\u76ee ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/config-detail.html#babel",title:"babel \u914d\u7f6e"}),"babel \u914d\u7f6e"),"\uff0c\u914d\u7f6e\u63d2\u4ef6 ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime"),"\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"babel: {\n  sourceMap: true,\n  presets: [['env', { modules: false }]],\n  plugins: [\n    'transform-decorators-legacy',\n    'transform-class-properties',\n    'transform-object-rest-spread',\n    ['transform-runtime', {\n      \"helpers\": false,\n      \"polyfill\": false,\n      \"regenerator\": true,\n      \"moduleName\": 'babel-runtime'\n    }]\n  ]\n}\n")),Object(l.b)("h3",{id:"\u65b0\u7279\u6027\u5c1d\u9c9c"},"\u65b0\u7279\u6027\u5c1d\u9c9c"),Object(l.b)("p",null,"\u5728\u57fa\u4e8e Webpack \u6539\u9020\u540e\u5e26\u6765\u5168\u9762\u63d0\u5347\u7684\u540c\u65f6\uff0c2.0 \u4e5f\u4e3a\u6211\u4eec\u5e26\u6765\u4e86\u4ee5\u4e0b\u65b0\u7684\u7279\u6027\u3002"),Object(l.b)("h4",{id:"\u4e3b\u7f16\u8bd1\u6d41\u7a0b\u94a9\u5b50"},"\u4e3b\u7f16\u8bd1\u6d41\u7a0b\u94a9\u5b50"),Object(l.b)("p",null,"\u5728 2.0 \u4e2d\uff0cCLI \u7f16\u8bd1\u7684\u4e3b\u6d41\u7a0b\u5df2\u7ecf\u57fa\u4e8e ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/webpack/tapable",title:"Tapable"}),"Tapable")," \u8fdb\u884c\u6539\u9020\uff0c\u5e76\u4e14\u5bf9\u5916\u66b4\u9732\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"hooks")," \u4ee5\u4f9b\u4f7f\u7528\uff0c\u5728 Taro \u7f16\u8bd1\u914d\u7f6e\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"plugins")," \u6765\u914d\u7f6e\u7f16\u8bd1\u8fc7\u7a0b\u63d2\u4ef6\uff0c\u8c03\u7528\u8fd9\u4e9b ",Object(l.b)("inlineCode",{parentName:"p"},"hooks")," \u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u9700\u6c42\u3002"),Object(l.b)("p",null,"\u76ee\u524d\u7f16\u8bd1\u4e3b\u6d41\u7a0b\u66b4\u9732\u4e86\u4e24\u4e2a\u94a9\u5b50 ",Object(l.b)("inlineCode",{parentName:"p"},"beforeBuild")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"afterBuild"),"\uff0c\u5176\u4e2d\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"beforeBuild")," \u5c06\u5728\u6574\u4f53\u7f16\u8bd1\u524d\u89e6\u53d1\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u7f16\u8bd1\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u540c\u65f6\u4e5f\u80fd\u8fdb\u884c\u4fee\u6539\uff1b",Object(l.b)("inlineCode",{parentName:"p"},"afterBuild")," \u5c06\u5728 Webpack \u7f16\u8bd1\u5b8c\u540e\u6267\u884c\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u7f16\u8bd1\u540e\u7684\u7ed3\u679c\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\u3002"),Object(l.b)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u63d2\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class BuildPlugin {\n  apply (builder) {\n    builder.hooks.beforeBuild.tap('BuildPlugin', (config) => {\n      console.log(config)\n    })\n\n    builder.hooks.afterBuild.tap('BuildPlugin', (stats) => {\n      console.log(stats)\n    })\n  }\n}\n")),Object(l.b)("p",null,"\u63a5\u4e0b\u6765\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u4e2d\u8fdb\u884c\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  ...\n  plugins: [\n    new BuildPlugin()\n  ]\n  ...\n}\n")),Object(l.b)("h4",{id:"\u4e3a\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u6dfb\u52a0-loader"},"\u4e3a\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u6dfb\u52a0 Loader"),Object(l.b)("p",null,"\u6211\u4eec\u6709\u65f6\u5019\u53ef\u80fd\u4f1a\u9762\u4e34\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u5c55\u793a Markdown \u8bed\u6cd5\u6587\u4ef6\u7684\u9700\u6c42\uff0c\u5728 WEB \u5f00\u53d1\u7684\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 Webpack \u53ca\u5176 Loader\uff0c\u5b9e\u73b0\u76f4\u63a5\u5f15\u5165 ",Object(l.b)("inlineCode",{parentName:"p"},"md")," \u6587\u4ef6\u5e76\u8bfb\u53d6\u5176\u5185\u5bb9\uff0c\u800c\u5728\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e2d\uff0c\u901a\u8fc7\u501f\u52a9 Taro 2.0\uff0c\u6211\u4eec\u4e5f\u80fd\u5f88\u8f7b\u677e\u5730\u5b9e\u73b0\u8fd9\u4e00\u9700\u6c42\u3002"),Object(l.b)("p",null,"\u4e00\u822c\u6211\u4eec\u4f1a\u4ee5\u5982\u4e0b\u7684\u65b9\u5f0f\uff0c\u6765\u5f15\u5165\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"p"},".md")," \u6587\u4ef6\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import mdTxt from '../../some_markdown.md'\n")),Object(l.b)("p",null,"\u800c ",Object(l.b)("inlineCode",{parentName:"p"},".md")," \u6587\u4ef6\u9ed8\u8ba4\u662f\u4e0d\u80fd\u76f4\u63a5\u88ab\u8bc6\u522b\u7684\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u914d\u7f6e\u76f8\u5e94\u7684 Loader \u6765\u5b9e\u73b0\u5bf9\u8fd9\u7c7b\u6587\u4ef6\u7684\u52a0\u8f7d\u89e3\u6790\uff0c\u5728 Taro \u4e2d\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/config-detail.md#miniwebpackchain",title:"mini.webpackChain"}),"mini.webpackChain")," \u6765\u4e3a\u5c0f\u7a0b\u5e8f\u914d\u7f6e\u81ea\u5b9a\u4e49 Webpack \u914d\u7f6e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u914d\u7f6e Loader\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        module: {\n          rule: {\n            myloader: {\n              test: /\\.md$/,\n              use: [{\n                loader: 'raw-loader',\n                options: {}\n              }]\n            }\n          }\n        }\n      })\n    }\n  }\n}\n")),Object(l.b)("h4",{id:"\u4e3a\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u6dfb\u52a0-plugin"},"\u4e3a\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u6dfb\u52a0 Plugin"),Object(l.b)("p",null,"\u5f53\u6211\u4eec\u8981\u628a\u6253\u5305\u540e\u7684\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u5c0f\u7a0b\u5e8f\u8fc7\u5927\u7684\u95ee\u9898\uff0c\u90a3\u4e48\u6211\u4eec\u80af\u5b9a\u8feb\u5207\u5e0c\u671b\u53ef\u4ee5\u770b\u5230\u5230\u5e95\u662f\u54ea\u4e9b\u6587\u4ef6\u7684\u5927\u5c0f\u9020\u6210\u4e86\u8fd9\u4e2a\u5f71\u54cd\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/webpack-bundle-analyzer",title:"webpack-bundle-analyzer"}),"webpack-bundle-analyzer")," \u63d2\u4ef6\u5bf9\u6253\u5305\u4f53\u79ef\u8fdb\u884c\u5206\u6790\u3002"),Object(l.b)("p",null,"\u5728 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/config-detail.md#miniwebpackchain",title:"mini.webpackChain"}),"mini.webpackChain")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  mini: {\n    webpackChain (chain, webpack) {\n      chain.plugin('analyzer')\n        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])\n    }\n  }\n}\n")),Object(l.b)("p",null,"\u5728\u8fd0\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u80fd\u5728\u6d4f\u89c8\u5668\u91cc\u770b\u5230\u5982\u4e0b\u5206\u6790\u6548\u679c\u3002"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"https://storage.360buyimg.com/2.0/webpack-bundle-analyzer.jpg",alt:"webpack-bundle-analyzer"}))),Object(l.b)("h4",{id:"taro-rn-\u4f9d\u8d56\u5347\u7ea7\u5230-0599"},"Taro RN \u4f9d\u8d56\u5347\u7ea7\u5230 0.59.9"),Object(l.b)("p",null,"\u5728 2.0 \u4e2d\u6211\u4eec\u5c06 RN \u7aef React \u4f9d\u8d56\u5347\u7ea7\u5230 16.8.0\uff0cReact Native \u4f9d\u8d56\u5347\u7ea7\u5230 0.59.9\u3002\u4e3b\u8981\u539f\u56e0\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Google \u8981\u6c42\u6240\u6709 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://play.google.com/",title:"Google Play"}),"Google Play")," \u5e94\u7528\u652f\u6301 64 \u4f4d so \u5e93\uff0c\u800c\u73b0\u6709 RN 0.55.4 \u4f9d\u65e0\u6cd5\u652f\u6301 64 \u4f4d\u5e93\uff0c\u4e3a\u914d\u5408 64 \u4f4d\u5347\u7ea7\uff0cTaro RN \u7aef\u7684 React Native \u4f9d\u8d56\u9700\u8981\u540c\u6b65\u5347\u7ea7"),Object(l.b)("li",{parentName:"ul"},"React 16.8.0 \u662f\u7b2c\u4e00\u4e2a\u652f\u6301 Hook \u7684\u7248\u672c\uff0cReact Native \u4ece 0.59 \u7248\u672c\u5f00\u59cb\u652f\u6301 Hook\uff0c\u6b64\u524d\u793e\u533a\u4e00\u76f4\u5728\u547c\u5401\u5bf9 RN 0.55.4 \u8fdb\u884c\u5347\u7ea7\u4ee5\u76f4\u63a5\u652f\u6301 Hook \u7684\u5199\u6cd5")),Object(l.b)("p",null,"\u672c\u6b21 RN \u7aef\u5c5e\u4e8e\u65e0\u7f1d\u5347\u7ea7\uff0c\u539f\u6709\u7684\u5199\u6cd5\u548c\u914d\u7f6e\u5747\u4e0d\u53d8\uff0c\u5982\u679c\u4f7f\u7528 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-native-shell",title:"taro-native-shell"}),"taro-native-shell")," \u7684\uff0c\u9009\u62e9 0.59.9 \u5206\u652f\u5373\u53ef\uff1b\u5728\u539f\u751f\u5e94\u7528\u96c6\u6210 RN \u7684\uff0c\u9700\u8981\u81ea\u884c\u5347\u7ea7 React Native \u4f9d\u8d56\u5230 0.59.9\u3002"),Object(l.b)("h2",{id:"\u672a\u6765\u4e0e\u5c55\u671b"},"\u672a\u6765\u4e0e\u5c55\u671b"),Object(l.b)("p",null,"\u6b63\u5982\u524d\u6587\u6240\u63d0\u5230\u7684\uff0cTaro 2.0 \u53ea\u662f\u4e00\u4e2a\u5f00\u59cb\u3002"),Object(l.b)("p",null,"\u5728 10 \u5e74\u4ee3\u6700\u540e\u4e00\u573a GMTC \u5168\u7403\u5927\u524d\u7aef\u6280\u672f\u5927\u4f1a\u4e0a\uff0cTaro \u56e2\u961f\u5411\u5927\u5bb6\u5c55\u793a\u4e86 \u5c0f\u7a0b\u5e8f\u8de8\u6846\u67b6\u5f00\u53d1\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5 \u7684\u8270\u8f9b\u65c5\u7a0b\uff0c\u540c\u65f6\u4e5f\u63d0\u524d\u66dd\u5149\u4e86\u6b63\u5728\u7d27\u5bc6\u5f00\u53d1\u4e2d\u7684 ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/tree/next",title:"Taro Next"}),"Taro Next"),"\u3002"),Object(l.b)("p",null,"\u90a3\u662f\u4e00\u4e2a\u5b8c\u5168\u533a\u522b\u4e8e\u4ee5\u5f80\u7684\u7248\u672c\uff0c\u4e00\u6761\u4e0e\u73b0\u5728 Taro \u622a\u7136\u4e0d\u540c\u7684\u9053\u8def\uff0c\u9884\u793a\u7740 Taro \u6b63\u5728\u9769\u81ea\u5df1\u7684\u547d\u3002"),Object(l.b)("p",null,"\u8282\u7269\u98ce\u5149\u4e0d\u76f8\u5f85\uff0c\u6851\u7530\u78a7\u6d77\u987b\u81fe\u6539\u3002"),Object(l.b)("p",null,"20 \u5e74\u4ee3\u547c\u5578\u800c\u6765\uff0c\u4e0b\u4e00\u4e2a 10 \u5e74\uff0c\u5f88\u591a\u6846\u67b6\u90fd\u4f1a\u6b7b\u53bb\uff0c\u5f88\u591a\u6280\u672f\u4e5f\u4f1a\u7115\u7136\u800c\u751f\uff0c\u6ca1\u6709\u4ec0\u4e48\u662f\u4e0d\u53d8\u7684\uff0c\u552f\u4e00\u4e0d\u53d8\u7684\u53ea\u6709\u53d8\u5316\uff0c\u6211\u4eec\u80fd\u505a\u7684\u4e5f\u53ea\u80fd\u662f\u62e5\u62b1\u53d8\u5316\u3002"))}p.isMDXComponent=!0}}]);