!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("selectors",[],e):"object"==typeof exports?exports.selectors=e():t.selectors=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){t.exports=r(62)},62:function(t,e,r){"use strict";function n(t,e){return t.posts.items[e]}function o(t,e){var r=(0,f.getSerializedPostsQuery)(e);return t.posts.queries[r]?t.posts.queries[r].map(function(e){return n(t,e)}).filter(Boolean):null}function s(t,e){var r=(0,f.getSerializedPostsQuery)(e);return!!t.posts.queryRequests[r]}function u(t,e){var r=(0,f.getSerializedPostsQuery)(e);return t.posts.totalPages[r]?parseInt(t.posts.totalPages[r],10):1}function i(t,e){return!!t.posts.requests&&!!t.posts.requests[e]}function c(t,e){return!!t.posts.slugs[e]&&t.posts.slugs[e]}Object.defineProperty(e,"__esModule",{value:!0}),e.getPost=n,e.getPostsForQuery=o,e.isRequestingPostsForQuery=s,e.getTotalPagesForQuery=u,e.isRequestingPost=i,e.getPostIdFromSlug=c;var f=r(63)},63:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){return(0,i["default"])(t,function(t,e){return c[e]===t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=o(t);return JSON.stringify(e).toLocaleLowerCase()}Object.defineProperty(e,"__esModule",{value:!0}),e.getNormalizedPostsQuery=o,e.getSerializedPostsQuery=s;var u=r(64),i=n(u),c={number:10,offset:0,order:"DESC",order_by:"date",type:"post",status:"publish",sticky:"include",search:""}},64:function(t,e,r){function n(t,e){return u(t,s(o(e)))}var o=r(65),s=r(66),u=r(67);t.exports=n},65:function(t,e){function r(t){return t}t.exports=r},66:function(t,e){function r(t){if("function"!=typeof t)throw new TypeError(n);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var n="Expected a function";t.exports=r},67:function(t,e,r){function n(t,e){return null==t?{}:s(t,u(t),o(e))}var o=r(65),s=r(68),u=r(72);t.exports=n},68:function(t,e,r){function n(t,e,r){for(var n=-1,s=e.length,u={};++n<s;){var i=e[n],c=t[i];r(c,i)&&o(u,i,c)}return u}var o=r(69);t.exports=n},69:function(t,e,r){function n(t,e,r){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var o=r(70);t.exports=n},70:function(t,e,r){var n=r(71),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},71:function(t,e){function r(t,e){return null==t?void 0:t[e]}t.exports=r},72:function(t,e){function r(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}t.exports=r}})});