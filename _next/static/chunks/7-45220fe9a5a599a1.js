(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{69260:function(e,t,n){!function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),a=r(n);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var c=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],s=function(e,t){var r=e.animationData,i=e.loop,s=e.autoplay,d=e.initialSegment,p=e.onComplete,y=e.onLoopComplete,m=e.onEnterFrame,v=e.onSegmentStart,g=e.onConfigReady,b=e.onDataReady,h=e.onDataFailed,O=e.onLoadedImages,S=e.onDOMLoaded,A=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var E=l(e,c),P=n.useState(!1),j=function(e){if(Array.isArray(e))return e}(P)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,u=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(u)throw r}}return a}}(P,2)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}}(P,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),_=j[0],R=j[1],C=n.useRef(),T=n.useRef(null),L=function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(T.current){null===(t=C.current)||void 0===t||t.destroy();var r=u(u(u({},e),n),{},{container:T.current});return C.current=o.default.loadAnimation(r),R(!!C.current),function(){var e;null===(e=C.current)||void 0===e||e.destroy(),C.current=void 0}}};return n.useEffect(function(){var e=L();return function(){return null==e?void 0:e()}},[r,i]),n.useEffect(function(){C.current&&(C.current.autoplay=!!s)},[s]),n.useEffect(function(){if(C.current){if(!d){C.current.resetSegments(!0);return}Array.isArray(d)&&d.length&&((C.current.currentRawFrame<d[0]||C.current.currentRawFrame>d[1])&&(C.current.currentRawFrame=d[0]),C.current.setSegment(d[0],d[1]))}},[d]),n.useEffect(function(){var e=[{name:"complete",handler:p},{name:"loopComplete",handler:y},{name:"enterFrame",handler:m},{name:"segmentStart",handler:v},{name:"config_ready",handler:g},{name:"data_ready",handler:b},{name:"data_failed",handler:h},{name:"loaded_images",handler:O},{name:"DOMLoaded",handler:S},{name:"destroy",handler:A}].filter(function(e){return null!=e.handler});if(e.length){var t=e.map(function(e){var t;return null===(t=C.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=C.current)||void 0===t||t.removeEventListener(e.name,e.handler)}});return function(){t.forEach(function(e){return e()})}}},[p,y,m,v,g,b,h,O,S,A]),{View:a.default.createElement("div",u({style:t,ref:T},E)),play:function(){var e;null===(e=C.current)||void 0===e||e.play()},stop:function(){var e;null===(e=C.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=C.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=C.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var n;null===(n=C.current)||void 0===n||n.goToAndStop(e,t)},goToAndPlay:function(e,t){var n;null===(n=C.current)||void 0===n||n.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=C.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var n;null===(n=C.current)||void 0===n||n.playSegments(e,t)},setSubframe:function(e){var t;null===(t=C.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=C.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=C.current)||void 0===e||e.destroy(),C.current=void 0},animationContainerRef:T,animationLoaded:_,animationItem:C.current}},d=function(e){var t=e.wrapperRef,r=e.animationItem,o=e.mode,a=e.actions;n.useEffect(function(){var e,n,i,u,l,f=t.current;if(f&&r&&a.length)switch(r.stop(),o){case"scroll":return e=null,n=function(){var t,n,o,i=(n=(t=f.getBoundingClientRect()).top,o=t.height,(window.innerHeight-n)/(window.innerHeight+o)),u=a.find(function(e){var t=e.visibility;return t&&i>=t[0]&&i<=t[1]});if(u){if("seek"===u.type&&u.visibility&&2===u.frames.length){var l=u.frames[0]+Math.ceil((i-u.visibility[0])/(u.visibility[1]-u.visibility[0])*u.frames[1]);r.goToAndStop(l-r.firstFrame-1,!0)}"loop"===u.type&&(null===e?(r.playSegments(u.frames,!0),e=u.frames):e!==u.frames?(r.playSegments(u.frames,!0),e=u.frames):r.isPaused&&(r.playSegments(u.frames,!0),e=u.frames)),"play"===u.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===u.type&&r.goToAndStop(u.frames[0]-r.firstFrame-1,!0)}},document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)};case"cursor":return i=function(e,t){var n=e,o=t;if(-1!==n&&-1!==o){var i,u,l,c,s=(i=n,u=o,c=(l=f.getBoundingClientRect()).top,{x:(i-l.left)/l.width,y:(u-c)/l.height});n=s.x,o=s.y}var d=a.find(function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?n>=t.x[0]&&n<=t.x[1]&&o>=t.y[0]&&o<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&n===t.x&&o===t.y});if(d){if("seek"===d.type&&d.position&&Array.isArray(d.position.x)&&Array.isArray(d.position.y)&&2===d.frames.length){var p=(n-d.position.x[0])/(d.position.x[1]-d.position.x[0]),y=(o-d.position.y[0])/(d.position.y[1]-d.position.y[0]);r.playSegments(d.frames,!0),r.goToAndStop(Math.ceil((p+y)/2*(d.frames[1]-d.frames[0])),!0)}"loop"===d.type&&r.playSegments(d.frames,!0),"play"===d.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(d.frames)),"stop"===d.type&&r.goToAndStop(d.frames[0],!0)}},u=function(e){i(e.clientX,e.clientY)},l=function(){i(-1,-1)},f.addEventListener("mousemove",u),f.addEventListener("mouseout",l),function(){f.removeEventListener("mousemove",u),f.removeEventListener("mouseout",l)}}},[o,r])},p=function(e){var t=e.actions,n=e.mode,r=e.lottieObj,o=r.animationItem,a=r.View;return d({actions:t,animationItem:o,mode:n,wrapperRef:r.animationContainerRef}),a},y=["style","interactivity"];Object.defineProperty(e,"LottiePlayer",{enumerable:!0,get:function(){return o.default}}),e.default=function(e){var t,r,o,a=e.style,i=e.interactivity,u=s(l(e,y),a),f=u.View,c=u.play,d=u.stop,m=u.pause,v=u.setSpeed,g=u.goToAndStop,b=u.goToAndPlay,h=u.setDirection,O=u.playSegments,S=u.setSubframe,A=u.getDuration,E=u.destroy,P=u.animationContainerRef,j=u.animationLoaded,_=u.animationItem;return n.useEffect(function(){e.lottieRef&&(e.lottieRef.current={play:c,stop:d,pause:m,setSpeed:v,goToAndPlay:b,goToAndStop:g,setDirection:h,playSegments:O,setSubframe:S,getDuration:A,destroy:E,animationContainerRef:P,animationLoaded:j,animationItem:_})},[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),p({lottieObj:{View:f,play:c,stop:d,pause:m,setSpeed:v,goToAndStop:g,goToAndPlay:b,setDirection:h,playSegments:O,setSubframe:S,getDuration:A,destroy:E,animationContainerRef:P,animationLoaded:j,animationItem:_},actions:null!==(r=null==i?void 0:i.actions)&&void 0!==r?r:[],mode:null!==(o=null==i?void 0:i.mode)&&void 0!==o?o:"scroll"})},e.useLottie=s,e.useLottieInteractivity=p,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(11248),n(67294))},13991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return f},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",a="navigate",i="restore",u="server-patch",l="prefetch",f="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81516:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(82387),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let r=n(38754),o=r._(n(67294)),a=n(14532),i=n(83353),u=n(61410),l=n(79064),f=n(370),c=n(69955),s=n(24224),d=n(80508),p=n(81516),y=n(64266),m=n(13991),v=new Set;function g(e,t,n,r,o,a){if(!a&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(v.has(a))return;v.add(a)}let u=a?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(u).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let h=o.default.forwardRef(function(e,t){let n,r;let{href:u,as:v,children:h,prefetch:O=null,passHref:S,replace:A,shallow:E,scroll:P,locale:j,onClick:_,onMouseEnter:R,onTouchStart:C,legacyBehavior:T=!1,...L}=e;n=h,T&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let w=o.default.useContext(c.RouterContext),I=o.default.useContext(s.AppRouterContext),D=null!=w?w:I,M=!w,x=!1!==O,k=null===O?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:N,as:F}=o.default.useMemo(()=>{if(!w){let e=b(u);return{href:e,as:v?b(v):e}}let[e,t]=(0,a.resolveHref)(w,u,!0);return{href:e,as:v?(0,a.resolveHref)(w,v):t||e}},[w,u,v]),U=o.default.useRef(N),H=o.default.useRef(F);T&&(r=o.default.Children.only(n));let K=T?r&&"object"==typeof r&&r.ref:t,[V,B,Y]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(H.current!==F||U.current!==N)&&(Y(),H.current=F,U.current=N),V(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[F,K,N,Y,V]);o.default.useEffect(()=>{D&&B&&x&&g(D,N,F,{locale:j},{kind:k},M)},[F,N,B,j,x,null==w?void 0:w.locale,D,M,k]);let z={ref:q,onClick(e){T||"function"!=typeof _||_(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,n,r,a,u,l,f,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let y=()=>{let e=null==l||l;"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:u,locale:f,scroll:e}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(y):y()}(e,D,N,F,A,E,P,j,M,x)},onMouseEnter(e){T||"function"!=typeof R||R(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),D&&(x||!M)&&g(D,N,F,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:k},M)},onTouchStart(e){T||"function"!=typeof C||C(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),D&&(x||!M)&&g(D,N,F,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:k},M)}};if((0,l.isAbsoluteUrl)(F))z.href=F;else if(!T||S||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,p.getDomainLocale)(F,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);z.href=t||(0,y.addBasePath)((0,f.addLocale)(F,e,null==w?void 0:w.defaultLocale))}return T?o.default.cloneElement(r,z):o.default.createElement("a",{...L,...z},n)}),O=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(67294),o=n(10029),a="function"==typeof IntersectionObserver,i=new Map,u=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,f=l||!a,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(a){if(f||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},u.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,n,t,c,d.current]);let y=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,n){e.exports=n(95569)}}]);