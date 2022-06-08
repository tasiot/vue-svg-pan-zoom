(function(v,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(v=typeof globalThis!="undefined"?globalThis:v||self,r(v.VueSvgPanZoom={},v.Vue))})(this,function(v,r){"use strict";var it=Object.defineProperty,st=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var R=(v,r,S)=>r in v?it(v,r,{enumerable:!0,configurable:!0,writable:!0,value:S}):v[r]=S,U=(v,r)=>{for(var S in r||(r={}))at.call(r,S)&&R(v,S,r[S]);if(W)for(var S of W(r))lt.call(r,S)&&R(v,S,r[S]);return v},X=(v,r)=>st(v,rt(r));var S=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},G=function(){var t="",e,o,n,s=[],i={passive:!0};window.addEventListener?(e="addEventListener",o="removeEventListener"):(e="attachEvent",o="detachEvent",t="on"),n="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";function l(c,h){var b=function(f){!f&&(f=window.event);var d={originalEvent:f,target:f.target||f.srcElement,type:"wheel",deltaMode:f.type=="MozMousePixelScroll"?0:1,deltaX:0,delatZ:0,preventDefault:function(){f.preventDefault?f.preventDefault():f.returnValue=!1}};return n=="mousewheel"?(d.deltaY=-.025*f.wheelDelta,f.wheelDeltaX&&(d.deltaX=-.025*f.wheelDeltaX)):d.deltaY=f.detail,h(d)};return s.push({element:c,fn:b}),b}function a(c){for(var h=0;h<s.length;h++)if(s[h].element===c)return s[h].fn;return function(){}}function p(c){for(var h=0;h<s.length;h++)if(s[h].element===c)return s.splice(h,1)}function g(c,h,b,f){var d;n==="wheel"?d=b:d=l(c,b),c[e](t+h,d,f?i:!1)}function w(c,h,b,f){var d;n==="wheel"?d=b:d=a(c),c[o](t+h,d,f?i:!1),p(c)}function x(c,h,b){g(c,n,h,b),n=="DOMMouseScroll"&&g(c,"MozMousePixelScroll",h,b)}function E(c,h,b){w(c,n,h,b),n=="DOMMouseScroll"&&w(c,"MozMousePixelScroll",h,b)}return{on:x,off:E}}(),C={extend:function(t,e){t=t||{};for(var o in e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},isObject:function(t){return Object.prototype.toString.call(t)==="[object Object]"},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else if(typeof t=="string"||t instanceof String){if(e=document.querySelector(t),!e)throw new Error("Provided selector did not find any elements. Selector: "+t)}else throw new Error("Provided selector is not an HTML object nor String");if(e.tagName.toLowerCase()==="svg")o=e;else if(e.tagName.toLowerCase()==="object")o=e.contentDocument.documentElement;else if(e.tagName.toLowerCase()==="embed")o=e.getSVGDocument().documentElement;else throw e.tagName.toLowerCase()==="img"?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")},mouseAndTouchNormalize:function(t,e){if(t.clientX===void 0||t.clientX===null)if(t.clientX=0,t.clientY=0,t.touches!==void 0&&t.touches.length){if(t.touches[0].clientX!==void 0)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(t.touches[0].pageX!==void 0){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else t.originalEvent!==void 0&&t.originalEvent.clientX!==void 0&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(t.detail===2)return!0;if(e!=null){var o=t.timeStamp-e.timeStamp,n=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&n<10}return!1},now:Date.now||function(){return new Date().getTime()},throttle:function(t,e,o){var n=this,s,i,l,a=null,p=0;o||(o={});var g=function(){p=o.leading===!1?0:n.now(),a=null,l=t.apply(s,i),a||(s=i=null)};return function(){var w=n.now();!p&&o.leading===!1&&(p=w);var x=e-(w-p);return s=this,i=arguments,x<=0||x>e?(clearTimeout(a),a=null,p=w,l=t.apply(s,i),a||(s=i=null)):!a&&o.trailing!==!1&&(a=setTimeout(g,x)),l}},createRequestAnimationFrame:function(t){var e=null;return t!=="auto"&&t<60&&t>1&&(e=Math.floor(1e3/t)),e===null?window.requestAnimationFrame||D(33):D(e)}};function D(t){return function(e){window.setTimeout(e,t)}}var B=C,V="unknown";document.documentMode&&(V="ie");var N={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(B.isElement(e)?o=e:o=t.querySelector(e),!o){var n=Array.prototype.slice.call(t.childNodes||t.children).filter(function(p){return p.nodeName!=="defs"&&p.nodeName!=="#text"});n.length===1&&n[0].nodeName==="g"&&n[0].getAttribute("transform")===null&&(o=n[0])}if(!o){var s="viewport-"+new Date().toISOString().replace(/\D/g,"");o=document.createElementNS(this.svgNS,"g"),o.setAttribute("id",s);var i=t.childNodes||t.children;if(!!i&&i.length>0)for(var l=i.length;l>0;l--)i[i.length-l].nodeName!=="defs"&&o.appendChild(i[i.length-l]);t.appendChild(o)}var a=[];return o.getAttribute("class")&&(a=o.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),o.setAttribute("class",a.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),t.parentNode!==null){var e=t.getAttribute("style")||"";e.toLowerCase().indexOf("overflow")===-1&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:B.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var n=t[o];n.parentNode.insertBefore(n,n)}},S?S.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var n=this,s="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",s),"transform"in t.style?t.style.transform=s:"-ms-transform"in t.style?t.style["-ms-transform"]=s:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=s),V==="ie"&&!!o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){n.refreshDefsGlobal()},n.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return B.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var n=t.createSVGPoint();return n.x=e,n.y=o,n}},y=N,Y={enable:function(t){var e=t.svg.querySelector("defs");e||(e=document.createElementNS(y.svgNS,"defs"),t.svg.appendChild(e));var o=e.querySelector("style#svg-pan-zoom-controls-styles");if(!o){var n=document.createElementNS(y.svgNS,"style");n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(n)}var s=document.createElementNS(y.svgNS,"g");s.setAttribute("id","svg-pan-zoom-controls"),s.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),s.setAttribute("class","svg-pan-zoom-control"),s.appendChild(this._createZoomIn(t)),s.appendChild(this._createZoomReset(t)),s.appendChild(this._createZoomOut(t)),t.svg.appendChild(s),t.controlIcons=s},_createZoomIn:function(t){var e=document.createElementNS(y.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(y.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(y.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},_createZoomReset:function(t){var e=document.createElementNS(y.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(y.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(y.svgNS,"path");n.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n);var s=document.createElementNS(y.svgNS,"path");return s.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),s.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(s),e},_createZoomOut:function(t){var e=document.createElementNS(y.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(y.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(y.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}},j=N,M=C,m=function(t,e){this.init(t,e)};m.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=M.proxy(this.updateCTM,this),this.requestAnimationFrame=M.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()},m.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\s\,]/).filter(function(n){return n}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()},m.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height},m.prototype.getViewBox=function(){return M.extend({},this.viewBox)},m.prototype.processCTM=function(){var t=this.getCTM();if(this.options.fit||this.options.contain){var e;this.options.fit?e=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):e=Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),t.a=e,t.d=e,t.e=-this.viewBox.x*e,t.f=-this.viewBox.y*e}if(this.options.center){var o=(this.options.width-(this.viewBox.width+this.viewBox.x*2)*t.a)*.5,n=(this.options.height-(this.viewBox.height+this.viewBox.y*2)*t.a)*.5;t.e=o,t.f=n}return this.originalState.zoom=t.a,this.originalState.x=t.e,this.originalState.y=t.f,t},m.prototype.getOriginalState=function(){return M.extend({},this.originalState)},m.prototype.getState=function(){return M.extend({},this.activeState)},m.prototype.getZoom=function(){return this.activeState.zoom},m.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom},m.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom},m.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}},m.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t},m.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))===!1?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var n=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),s=!1,i=!1;n===!1?(t.e=this.getPan().x,t.f=this.getPan().y,s=i=!0):M.isObject(n)&&(n.x===!1?(t.e=this.getPan().x,s=!0):M.isNumber(n.x)&&(t.e=n.x),n.y===!1?(t.f=this.getPan().y,i=!0):M.isNumber(n.y)&&(t.f=n.y)),s&&i||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}},m.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a},m.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f},m.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f},m.prototype.pendingUpdate=!1,m.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))},m.prototype.updateCTM=function(){var t=this.getCTM();j.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)};var H=function(t,e){return new m(t,e)},k=G,_=Y,Z=C,P=N,$=H,u=function(t,e){this.init(t,e)},F={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},O={passive:!0};u.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),P.setupSvgAttributes(this.svg),this.options=Z.extend(Z.extend({},F),e),this.state="none";var n=P.getBoundingClientRectNormalized(t);this.width=n.width,this.height=n.height,this.viewport=$(P.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(i,l){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(i,l)},onZoom:function(i){if(o.viewport&&o.options.onZoom)return o.options.onZoom(i)},beforePan:function(i,l){if(o.viewport&&o.options.beforePan)return o.options.beforePan(i,l)},onPan:function(i){if(o.viewport&&o.options.onPan)return o.options.onPan(i)},onUpdatedCTM:function(i){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(i)}});var s=this.getPublicInstance();s.setBeforeZoom(this.options.beforeZoom),s.setOnZoom(this.options.onZoom),s.setBeforePan(this.options.beforePan),s.setOnPan(this.options.onPan),s.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&_.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()},u.prototype.setupHandlers=function(){var t=this,e=null;if(this.eventListeners={mousedown:function(i){var l=t.handleMouseDown(i,e);return e=i,l},touchstart:function(i){var l=t.handleMouseDown(i,e);return e=i,l},mouseup:function(i){return t.handleMouseUp(i)},touchend:function(i){return t.handleMouseUp(i)},mousemove:function(i){return t.handleMouseMove(i)},touchmove:function(i){return t.handleMouseMove(i)},mouseleave:function(i){return t.handleMouseUp(i)},touchleave:function(i){return t.handleMouseUp(i)},touchcancel:function(i){return t.handleMouseUp(i)}},this.options.customEventsHandler!=null){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var o=this.options.customEventsHandler.haltEventListeners;if(o&&o.length)for(var n=o.length-1;n>=0;n--)this.eventListeners.hasOwnProperty(o[n])&&delete this.eventListeners[o[n]]}for(var s in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(s,this.eventListeners[s],this.options.preventMouseEventsDefault?!1:O);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())},u.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var t=this;this.wheelListener=function(o){return t.handleMouseWheel(o)};var e=!this.options.preventMouseEventsDefault;k.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0}},u.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;k.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}},u.prototype.handleMouseWheel=function(t){if(!(!this.options.zoomEnabled||this.state!=="none")){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,n=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&t.deltaMode===0&&t.wheelDelta&&(e=t.deltaY===0?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/n;var s=this.svg.getScreenCTM().inverse(),i=P.getEventPoint(t,this.svg).matrixTransform(s),l=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(l,i)}},u.prototype.zoomAtPoint=function(t,e,o){var n=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*n.zoom,Math.min(this.options.maxZoom*n.zoom,t)),t=t/this.getZoom()):this.getZoom()*t<this.options.minZoom*n.zoom?t=this.options.minZoom*n.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*n.zoom&&(t=this.options.maxZoom*n.zoom/this.getZoom());var s=this.viewport.getCTM(),i=e.matrixTransform(s.inverse()),l=this.svg.createSVGMatrix().translate(i.x,i.y).scale(t).translate(-i.x,-i.y),a=s.multiply(l);a.a!==s.a&&this.viewport.setCTM(a)},u.prototype.zoom=function(t,e){this.zoomAtPoint(t,P.getSvgCenterPoint(this.svg,this.width,this.height),e)},u.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)},u.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),Z.getType(e)!=="SVGPoint")if("x"in e&&"y"in e)e=P.createSVGPoint(this.svg,e.x,e.y);else throw new Error("Given point is invalid");this.zoomAtPoint(t,e,o)},u.prototype.getZoom=function(){return this.viewport.getZoom()},u.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()},u.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom},u.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)},u.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())},u.prototype.reset=function(){this.resetZoom(),this.resetPan()},u.prototype.handleDblClick=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled){var e=t.target.getAttribute("class")||"";if(e.indexOf("svg-pan-zoom-control")>-1)return!1}var o;t.shiftKey?o=1/((1+this.options.zoomScaleSensitivity)*2):o=(1+this.options.zoomScaleSensitivity)*2;var n=P.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(o,n)},u.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),Z.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&Z.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=P.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))},u.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&this.options.panEnabled){var e=P.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}},u.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&(this.state="none")},u.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)},u.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)},u.prototype.center=function(){var t=this.viewport.getViewBox(),e=(this.width-(t.width+t.x*2)*this.getZoom())*.5,o=(this.height-(t.height+t.y*2)*this.getZoom())*.5;this.getPublicInstance().pan({x:e,y:o})},u.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()},u.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},u.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},u.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}},u.prototype.resize=function(){var t=P.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())},u.prototype.destroy=function(){var t=this;this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,this.onUpdatedCTM=null,this.options.customEventsHandler!=null&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});for(var e in this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],this.options.preventMouseEventsDefault?!1:O);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),z=z.filter(function(o){return o.svg!==t.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}},u.prototype.getPublicInstance=function(){var t=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return t.options.panEnabled=!0,t.pi},disablePan:function(){return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},setBeforePan:function(e){return t.options.beforePan=e===null?null:Z.proxy(e,t.publicInstance),t.pi},setOnPan:function(e){return t.options.onPan=e===null?null:Z.proxy(e,t.publicInstance),t.pi},enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},isZoomEnabled:function(){return!!t.options.zoomEnabled},enableControlIcons:function(){return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,_.enable(t)),t.pi},disableControlIcons:function(){return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,_.disable(t)),t.pi},isControlIconsEnabled:function(){return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){return t.options.minZoom=e,t.pi},setMaxZoom:function(e){return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){return t.options.beforeZoom=e===null?null:Z.proxy(e,t.publicInstance),t.pi},setOnZoom:function(e){return t.options.onZoom=e===null?null:Z.proxy(e,t.publicInstance),t.pi},zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,o){return t.publicZoomAtPoint(e,o,!0),t.pi},zoomAtPointBy:function(e,o){return t.publicZoomAtPoint(e,o,!1),t.pi},zoomIn:function(){return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){return t.options.onUpdatedCTM=e===null?null:Z.proxy(e,t.publicInstance),t.pi},resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},center:function(){return t.center(),t.pi},updateBBox:function(){return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),this.publicInstance};var z=[],K=function(t,e){var o=Z.getSvg(t);if(o===null)return null;for(var n=z.length-1;n>=0;n--)if(z[n].svg===o)return z[n].instance.getPublicInstance();return z.push({svg:o,instance:new u(o,e)}),z[z.length-1].instance.getPublicInstance()},J=K,ut=(()=>`.svg-pan-zoom__scope[data-v-169415fd]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:120}.scope[data-v-169415fd]{fill:red;fill-opacity:.1;stroke:red;stroke-width:2px}
`)(),L=(t,e)=>{const o=t.__vccOpts||t;for(const[n,s]of e)o[n]=s;return o};const Q=["x","y","width","height"];var tt=L(r.defineComponent({__name:"Scope",props:{mainSPZ:null,thumbnailSPZ:null},setup(t){const e=t,o=r.ref(0),n=r.ref(0),s=r.ref(0),i=r.ref(0),l=r.ref(null),a=()=>{if(!e.mainSPZ||!e.thumbnailSPZ)return;const g=e.mainSPZ.getPan().x,w=e.mainSPZ.getPan().y,x=e.mainSPZ.getSizes().width,E=e.mainSPZ.getSizes().height,c=e.mainSPZ.getSizes().realZoom,h=e.thumbnailSPZ.getPan().x,b=e.thumbnailSPZ.getPan().y,d=e.thumbnailSPZ.getSizes().realZoom/c,A=h-g*d,I=b-w*d,T=x*d,nt=E*d;o.value=A+1,n.value=I+1,s.value=T-2,i.value=nt-2},p=g=>{if(g.which==0&&g.button==0||!l.value)return;let w=e.mainSPZ,x=e.thumbnailSPZ,E=l.value.getBoundingClientRect();w.getSizes().width,w.getSizes().height;let c=w.getSizes().realZoom,h=x.getSizes().width,b=x.getSizes().height,f=x.getSizes().realZoom;var d=g.clientX-E.left-h/2,A=g.clientY-E.top-b/2,I=-d*c/f,T=-A*c/f;w.pan({x:I,y:T})};return r.onMounted(()=>{a(),e.mainSPZ.setOnPan(()=>a()),e.mainSPZ.setOnZoom(()=>a())}),(g,w)=>(r.openBlock(),r.createElementBlock("svg",{class:"svg-pan-zoom__scope",onClick:p,onMousemove:p,ref_key:"scopeSVG",ref:l},[r.createElementVNode("rect",{class:"scope",x:o.value,y:n.value,width:s.value,height:i.value},null,8,Q)],544))}}),[["__scopeId","data-v-169415fd"]]),ct=(()=>`.svg-pan-zoom__thumbnail[data-v-093287c4]{border:1px solid black;position:absolute;bottom:5px;left:5px;width:30%;height:30%;margin:3px;padding:3px;overflow:hidden;z-index:120}.thumbnail[data-v-093287c4]{max-width:100%;max-height:100%}.thumbnail svg[data-v-093287c4]{width:100%!important;height:100%!important}
`)(),et=L(r.defineComponent({__name:"SvgPanZoomThumbnail",props:{mainSPZ:null},emits:["thumbnailCreated"],setup(t,{emit:e}){const o=t,n=r.ref(null),s=l=>{o.mainSPZ[l.deltaY<0?"zoomIn":"zoomOut"]()},i=l=>{n.value=l,e("thumbnailCreated",l)};return(l,a)=>(r.openBlock(),r.createElementBlock("div",{class:"svg-pan-zoom__thumbnail",onWheel:s},[r.createVNode(q,{class:"thumbnail",zoomEnabled:!1,panEnabled:!1,controlIconsEnabled:!1,dblClickZoomEnabled:!1,preventMouseEventsDefault:!0,onCreated:i},{default:r.withCtx(()=>[r.renderSlot(l.$slots,"default",{},void 0,!0)]),_:3}),n.value?(r.openBlock(),r.createBlock(tt,{key:0,mainSPZ:t.mainSPZ,thumbnailSPZ:n.value},null,8,["mainSPZ","thumbnailSPZ"])):r.createCommentVNode("",!0)],32))}}),[["__scopeId","data-v-093287c4"]]),ft=(()=>`.svg-pan-zoom{position:relative}
`)();const ot={class:"svg-pan-zoom"},q=r.defineComponent({__name:"SvgPanZoom",props:{viewportSelector:{type:[String,Object],default:".svg-pan-zoom"},panEnabled:{type:Boolean,default:!0},controlIconsEnabled:{type:Boolean,default:!1},zoomEnabled:{type:Boolean,default:!0},dblClickZoomEnabled:{type:Boolean,default:!0},mouseWheelZoomEnabled:{type:Boolean,default:!0},preventMouseEventsDefault:{type:Boolean,default:!0},zoomScaleSensitivity:{type:Number,default:.2},minZoom:{type:Number,default:.5},maxZoom:{type:Number,default:10},fit:{type:Boolean,default:!0},contain:{type:Boolean,default:!0},center:{type:Boolean,default:!0},refreshRate:{type:[Number,String],default:"auto"}},emits:["beforeZoom","onZoom","beforePan","onPan","onUpdatedCTM","created","thumbnailCreated"],setup(t,{emit:e}){const o=t,n=r.useSlots(),s=r.ref({});Object.keys(o).filter(a=>o[a]!==void 0).forEach(a=>{s.value=X(U({},s.value),{[a]:o[a]})});const i=r.ref(null),l=a=>{if(a.el&&a.el.tagName==="svg")return a.el;if(!a.children||!Array.isArray(a.children))return!1;for(const p of a.children){const g=l(p);if(g)return g}return!1};return r.onMounted(()=>{if(s.value.onZoom=p=>e("onZoom",p),s.value.onPan=p=>e("onPan",p),!n.default)return;const a=l(n.default()[0]);!a||(i.value=J(a,s.value),e("created",i.value))}),r.onUnmounted(()=>{console.log("Siema"),console.log(i)}),(a,p)=>(r.openBlock(),r.createElementBlock("div",ot,[r.renderSlot(a.$slots,"default"),!!a.$slots.thumbnail&&!!i.value?(r.openBlock(),r.createBlock(et,{key:0,onThumbnailCreated:p[0]||(p[0]=g=>a.$emit("thumbnailCreated",g)),mainSPZ:i.value},{default:r.withCtx(()=>[r.renderSlot(a.$slots,"thumbnail")]),_:3},8,["mainSPZ"])):r.createCommentVNode("",!0)]))}});v.SvgPanZoom=q,Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
