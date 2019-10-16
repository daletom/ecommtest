webpackJsonp([35783957827783],{99:function(t,e,n){"use strict";function r(t){return t}function o(t,e,n){function o(t,e){var n=_.hasOwnProperty(e)?_[e]:null;D.hasOwnProperty(e)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(u)&&b.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],l=r.hasOwnProperty(i);if(o(l,i),b.hasOwnProperty(i))b[i](t,s);else{var p=_.hasOwnProperty(i),m="function"==typeof s,d=m&&!p&&!l&&n.autobind!==!1;if(d)a.push(i,s),r[i]=s;else if(l){var E=_[i];c(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?r[i]=f(r[i],s):"DEFINE_MANY"===E&&(r[i]=y(r[i],s))}else r[i]=s}}}else;}function l(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var o=n in b;c(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var i=N.hasOwnProperty(n)?N[n]:null;return c("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],r))}t[n]=r}}}function p(t,e){c(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(c(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function y(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){var n=e.bind(t);return n}function d(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];t[r]=m(t,o)}}function E(t){var e=r(function(t,r,o){this.__reactAutoBindPairs.length&&d(this),this.props=t,this.context=r,this.refs=s,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new M,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],h.forEach(a.bind(null,e)),a(e,g),a(e,t),a(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),c(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in _)e.prototype[o]||(e.prototype[o]=null);return e}var h=[],_={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){l(t,e)},autobind:function(){}},g={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},M=function(){};return i(M.prototype,t.prototype,D),E}var a,i=n(4),s=n(34),c=n(1),u="mixins";a={},t.exports=o},153:function(t,e){"use strict";function n(t,e,p){if("string"!=typeof e){if(l){var f=u(e);f&&f!==l&&n(t,f,p)}var y=i(e);s&&(y=y.concat(s(e)));for(var m=0;m<y.length;++m){var d=y[m];if(!(r[d]||o[d]||p&&p[d])){var E=c(e,d);try{a(t,d,E)}catch(t){}}}return t}return t}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,l=u&&u(Object);t.exports=n},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,s,c=n(t),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)a.call(r,l)&&(c[l]=r[l]);if(o){s=o(r);for(var p=0;p<s.length;p++)i.call(r,s[p])&&(c[s[p]]=r[s[p]])}}return c}},52:function(t,e){"use strict";function n(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case f:case y:case s:case u:case c:case d:return t;default:switch(t=t&&t.$$typeof){case p:case m:case l:return t;default:return e}}case _:case h:case i:return e}}}function r(t){return n(t)===y}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,E=o?Symbol.for("react.suspense_list"):60120,h=o?Symbol.for("react.memo"):60115,_=o?Symbol.for("react.lazy"):60116,N=o?Symbol.for("react.fundamental"):60117,b=o?Symbol.for("react.responder"):60118,g=o?Symbol.for("react.scope"):60119;e.typeOf=n,e.AsyncMode=f,e.ConcurrentMode=y,e.ContextConsumer=p,e.ContextProvider=l,e.Element=a,e.ForwardRef=m,e.Fragment=s,e.Lazy=_,e.Memo=h,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=d,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===y||t===u||t===c||t===d||t===E||"object"==typeof t&&null!==t&&(t.$$typeof===_||t.$$typeof===h||t.$$typeof===l||t.$$typeof===p||t.$$typeof===m||t.$$typeof===N||t.$$typeof===b||t.$$typeof===g)},e.isAsyncMode=function(t){return r(t)||n(t)===f},e.isConcurrentMode=r,e.isContextConsumer=function(t){return n(t)===p},e.isContextProvider=function(t){return n(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===a},e.isForwardRef=function(t){return n(t)===m},e.isFragment=function(t){return n(t)===s},e.isLazy=function(t){return n(t)===_},e.isMemo=function(t){return n(t)===h},e.isPortal=function(t){return n(t)===i},e.isProfiler=function(t){return n(t)===u},e.isStrictMode=function(t){return n(t)===c},e.isSuspense=function(t){return n(t)===d}},120:function(t,e,n){"use strict";t.exports=n(52)},190:function(t,e,n){"use strict";function r(t,e){if(!t)throw o?new Error(a):new Error(a+": "+(e||""))}var o=!0,a="Invariant failed";t.exports=r},191:function(t,e,n){"use strict";function r(t,e){if(!o){if(t)return;var n="Warning: "+e;"undefined"!=typeof console&&console.warn(n);try{throw Error(n)}catch(t){}}}var o=!0;t.exports=r},201:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.query=void 0;var o=n(5),a=r(o),i=n(152),s=(r(i),function(t){var e=t.data;return a.default.createElement("div",{className:"Catalogue"},e.site.siteMetadata.products.map(function(t){return a.default.createElement("div",{className:"Catalogue__item",key:t.slug},a.default.createElement("a",{href:"#",className:"Product"},a.default.createElement("div",{className:"Product__image"},a.default.createElement("img",{src:t.image})),a.default.createElement("div",{className:"Product__details"},a.default.createElement("div",{className:"Product__name"},t.name,a.default.createElement("div",{className:"Product__price"},t.price,"€")),a.default.createElement("span",{className:"Product__buy"},"Buy now"))))}))});e.default=s;e.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-88694034a26a93ff5738.js.map