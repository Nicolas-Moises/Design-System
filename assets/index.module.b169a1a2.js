var h=Object.defineProperty;var l=(e,n)=>h(e,"name",{value:n,configurable:!0});import{r as o}from"./index.8d73f3db.js";function p(e){var n,r,t="";if(e)if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=p(e[n]))&&(t&&(t+=" "),t+=r);else for(n in e)e[n]&&(r=p(n))&&(t&&(t+=" "),t+=r);else typeof e!="boolean"&&!e.call&&(t&&(t+=" "),t+=e);return t}l(p,"toVal");function C(){for(var e=0,n,r="";e<arguments.length;)(n=p(arguments[e++]))&&(r&&(r+=" "),r+=n);return r}l(C,"clsx");function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},f.apply(this,arguments)}l(f,"_extends");function x(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}l(x,"$6ed0406888f73fc4$var$setRef");function $(...e){return n=>e.forEach(r=>x(r,n))}l($,"$6ed0406888f73fc4$export$43e446d32b3d21af");function V(...e){return o.exports.useCallback($(...e),e)}l(V,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const y=o.exports.forwardRef((e,n)=>{const{children:r,...t}=e,c=o.exports.Children.toArray(r),s=c.find(m);if(s){const a=s.props.children,i=c.map(d=>d===s?o.exports.Children.count(a)>1?o.exports.Children.only(null):o.exports.isValidElement(a)?a.props.children:null:d);return o.exports.createElement(u,f({},t,{ref:n}),o.exports.isValidElement(a)?o.exports.cloneElement(a,void 0,i):null)}return o.exports.createElement(u,f({},t,{ref:n}),r)});y.displayName="Slot";const u=o.exports.forwardRef((e,n)=>{const{children:r,...t}=e;return o.exports.isValidElement(r)?o.exports.cloneElement(r,{...v(t,r.props),ref:$(n,r.ref)}):o.exports.Children.count(r)>1?o.exports.Children.only(null):null});u.displayName="SlotClone";const b=l(({children:e})=>o.exports.createElement(o.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function m(e){return o.exports.isValidElement(e)&&e.type===b}l(m,"$5e63c961fc1ce211$var$isSlottable");function v(e,n){const r={...n};for(const t in n){const c=e[t],s=n[t];/^on[A-Z]/.test(t)?r[t]=(...i)=>{s==null||s(...i),c==null||c(...i)}:t==="style"?r[t]={...c,...s}:t==="className"&&(r[t]=[c,s].filter(Boolean).join(" "))}return{...e,...r}}l(v,"$5e63c961fc1ce211$var$mergeProps");export{y as $,V as a,C as c};
//# sourceMappingURL=index.module.b169a1a2.js.map
