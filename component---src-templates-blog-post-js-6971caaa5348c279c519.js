(self.webpackChunkandrei_dobrinski_blog=self.webpackChunkandrei_dobrinski_blog||[]).push([[751],{7524:function(e,t,r){const o=r(927);e.exports={MDXRenderer:o}},927:function(e,t,r){var o=r(1132),n=r(9646),l=r(6074),s=r(1847);const u=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const a=r(6540),{mdx:p}=r(8619),{useMDXScope:f}=r(8503);e.exports=function(e){let{scope:t,children:r}=e,l=s(e,u);const i=f(t),d=a.useMemo((()=>{if(!r)return null;const e=c({React:a,mdx:p},i),t=Object.keys(e),l=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[`${r}`])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return a.createElement(d,c({},l))}},9298:function(e,t,r){"use strict";r.r(t);var o=r(4705),n=r(6540),l=r(1015),s=r(7524),u=r(8619),i=r(2966),c=r(8835),a=r(8629),p=r(6452),f=r(5308);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=e=>{let{data:t,pageContext:r,location:o}=e;const d=t.mdx,b=t.site.siteMetadata.title,{previous:m,next:x,githubUrl:O,slug:g}=r;return n.createElement(c.A,{location:o,title:b},n.createElement(a.A,{title:d.frontmatter.title,description:d.frontmatter.description}),n.createElement("article",null,n.createElement("header",null,n.createElement("h1",{style:{marginTop:(0,p.di)(1),marginBottom:0}},d.frontmatter.title),n.createElement("p",{style:y(y({},(0,p.hs)(-.2)),{},{display:"block",marginBottom:(0,p.di)(1)})},(0,f.G)({postedDate:d.frontmatter.date,slug:g}))),n.createElement(u.MDXProvider,{components:{a:e=>n.createElement("a",Object.assign({},e,{target:"_blank",rel:"noopener noreferrer",style:{marginRight:"4px"}}))}},n.createElement(s.MDXRenderer,null,d.body)),n.createElement("section",{style:{marginTop:(0,p.di)(2)}},n.createElement("a",{href:O},"Edit on GitHub")),n.createElement("hr",{style:{marginBottom:(0,p.di)(1),marginTop:(0,p.di)(1)}}),n.createElement("footer",null,n.createElement(i.A,null))),n.createElement(l.Link,{to:"/"},"Back to All Posts"))}},2460:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var o=r(2460);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var o=r(7550),n=r(5636);e.exports=function(e,t,r){if(o())return Reflect.construct.apply(null,arguments);var l=[null];l.push.apply(l,t);var s=new(e.bind.apply(e,l));return r&&n(s,r.prototype),s},e.exports.__esModule=!0,e.exports.default=e.exports},6074:function(e,t,r){var o=r(7736);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1847:function(e,t,r){var o=r(4893);e.exports=function(e,t){if(null==e)return{};var r,n,l=o(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,r){var o=r(5901),n=r(9291),l=r(7122),s=r(1869);e.exports=function(e){return o(e)||n(e)||l(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,r){var o=r(3738).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var o=r(3738).default,n=r(9045);e.exports=function(e){var t=n(e,"string");return"symbol"==o(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,r){var o=r(2460);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6971caaa5348c279c519.js.map