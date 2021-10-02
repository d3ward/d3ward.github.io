'use strict';
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
const gs_icons = {
  "gs-icon": '<svg xmlns="http://www.w3.org/2000/svg" fill="var(--txt)" viewBox="0 0 24 24"><path d="M4.7 1.5c-.2 0-.3.1-.4.5-.2 1-.4 1.9-.1 2.7.2.3.2.4-.1.7A5.4 5.4 0 003 8v2a6 6 0 001.6 3.7c1 1 2.2 1.5 4 1.8.2 0 .6 0 .4.2l-.7 1.4c-.1.4 0 .4-.5.5-1.4.3-1.7.5-2.8-1-.6-.7-1-1.2-1.7-1.3-1.3-.2-2.8 0-1.1.4 1 .2 1.4 1 1.8 2 .8 1.5 1.5 2.3 3.6 1.9.3 0 .6-.3.6.1v1.9c0 .3 0 .4.4.5 1 .4 2.2.5 3.4.4l.1-.2a2.5 2.5 0 01-1.8-2.4v-7.5c0-1.4 1.1-2.5 2.5-2.5H20c.3 0 .4-.2.4-.4v-.6c0-1 0-1.2-.3-1.9-.2-.5-.5-1.2-.9-1.6-.2-.3-.2-.3-.1-.6.4-.9.3-1.9 0-2.9-.1-.1-.2-.4-.6-.4a6 6 0 00-2.9 1.1c-.4.3-.6.3-1 .2-2-.4-3.9-.3-6 0H8c-1-.6-2-1.2-3.3-1.3zm8.7 9a2.3 2.3 0 00-2.3 2.3v6.8a2.3 2.3 0 002.3 2.3h6.9a2.3 2.3 0 002.2-2.3v-6.8a2.3 2.3 0 00-2.2-2.3zm3 1.6h1a.7.7 0 01.6.7v6.8c0 .4-.3.7-.7.7h-1a.7.7 0 01-.6-.7v-6.8a.7.7 0 01.7-.7zm-3.5 2h1a.7.7 0 01.6.7v4.8c0 .4-.3.7-.7.7h-1a.7.7 0 01-.6-.7v-4.8c0-.4.3-.7.7-.7zm7 1.5h.9c.4 0 .7.3.7.6v3.4c0 .4-.3.7-.7.7h-1a.7.7 0 01-.7-.7v-3.4a.7.7 0 01.7-.6z" paint-order="stroke markers fill"/></svg>',
  "pulls_count": '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-code-pull-request fa-w-16" data-icon="code-pull-request" data-prefix="far" viewBox="0 0 512 512"><path fill="currentColor" d="M160 95.1a80 80 0 00-160 0 79.7 79.7 0 0056 76v168a81.5 81.5 0 00-56 76 80 80 0 00160 0 79.7 79.7 0 00-56-76V172a79.9 79.9 0 0056-76.8zm-48 320a32 32 0 11-32-32c17.6 0 32 15.3 32 32zm-32-288a32 32 0 110-64 32 32 0 010 64zm376 213v-181a88 88 0 00-88-88h-16V16a16 16 0 00-26.2-12.3l-96 80c-3.7 3-5.8 7.5-5.8 11.4 0 4.8 2 9.3 5.8 12.3l96 80c2.9 3.3 6.5 3.7 10.2 3.7 2.3 0 4.6-.5 6.8-1.5 5.6-1.8 9.2-7.4 9.2-14.5v-56h16c22 0 40 18 40 40v180.1a81.3 81.3 0 00-56 75.9 80 80 0 00160 0 79.3 79.3 0 00-56-75zm-24 107a32 32 0 110-64 32 32 0 010 64z"/></svg>',
  "repos": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M35.6 352.1C10 377.9-3 442.6 1.6 511.4c69 3.6 133.4-9.4 159.3-35.1 39.3-40.3 42-93.9 5.3-130.5-36.6-36.6-91.1-34-130.6 6.3zm81.8 84c-8.6 8.5-30.1 12.9-53.1 11.6-1.3-22.9 2-44.5 11.6-53 13.5-13.5 31.4-14.4 43.5-2.1 12.2 12.2 11.3 30-2 43.5zM505.1 19.2A16.6 16.6 0 00492.7 7C460.6 0 435.5 0 410.4 0 307.3 0 245.2 55.3 199.1 128H94.9A52.6 52.6 0 0052 154.5L2.6 253.2A29 29 0 00.1 264a24 24 0 0024 24h104c52 0 96 43 96 96v104c0 13.3 10.7 24 23 24 3.8-.1 7.4-1 10.8-2.5l98.7-49.4a53 53 0 0026.5-42.9V312.8c72.5-46.3 127-108.4 127-211 2-25.3 2-50.4-5-82.5zm-147 253.2c-25.4 16.1-7.5 6.8-99.2 52.1a149 149 0 00-71.5-71.4c45.3-91.6 35.8-73.7 52.2-99.3C286.6 79.6 337.7 48 410.4 48c17.8 0 33.6 0 51.4 2.3 2.3 18.2 2.2 34.5 2.2 51.5-.9 72.2-31.6 123.2-105.9 170.6zm9-168.4a40 40 0 001 80c21 0 39.9-17.9 39.9-40S390 104 367 104z"/></svg>',
  "followers": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M319.9 320c57.4 0 103.1-46.6 103.1-104s-46.5-104-103.1-104a103.3 103.3 0 00-103.1 104c-.9 57.4 45.7 104 103.1 104zm0-160a56 56 0 11-.2 112 56 56 0 01.2-112zm192.1 0a80 80 0 100-160 80 80 0 000 160zM369.9 352h-99.8C191.6 352 128 411.7 128 485.3c0 14.8 12.7 26.7 28.4 26.7h327.2c15.7 0 28.4-11.9 28.4-26.7 0-73.6-63.6-133.3-142.1-133.3zM178.1 464c10.5-36.8 47.4-64 91.1-64H370c43.8 0 80.7 27.2 91.1 64H178.1zm373.8-272h-61.8c-12.8 0-25 3-35.9 8.2.6 5.3 1.6 10.4 1.6 15.8 0 33.7-12.8 64.2-33.2 88h199.7c9.8 0 17.7-8.4 17.7-18.7 0-51.5-39.4-93.3-88.1-93.3zm-368 24c0-5.4 1-10.6 1.6-16-10.9-5.9-22.9-8-35.6-8H88.1C39.4 192 0 233.8 0 285.3 0 295.6 7.9 304 17.6 304h199.5a134.7 134.7 0 01-33.2-88zM128 160a80 80 0 100-160 80 80 0 000 160z"/></svg>',
  "stars": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.5 171.5l-146.4-21.3-65.4-132.4A32 32 0 00287 0c-10.5 0-22 5.9-27.8 17.8l-65.5 132.4-146.3 21.3a32 32 0 00-17.8 54.6l106 102.1-25.1 146.4a32 32 0 0046.5 33.6L288 439.6l130.9 68.7a32 32 0 0046.5-33.7l-25-145.5L546.1 227c19.1-19.4 8.6-51.7-17.7-55.5zM390.2 320.6l22.4 130.1-117.2-61.5a16 16 0 00-14.9 0l-117.1 61.5 22.4-130.1c.9-5.2-1.7-10.5-4.6-14.2l-94.7-92 130.9-19.1a16 16 0 0012-8.8L288 68l58.6 118.5a16 16 0 0012 8.7l131 19-94.8 92.2a16 16 0 00-4.6 14.2z"/></svg>',
  "commits": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M616 232H477.6C465.9 155.1 400.1 96 320 96s-145.9 59.1-157.6 136H24a24 24 0 000 48h138.4c11.7 76.9 77.5 136 157.6 136s145.9-59.1 157.6-136H616a24 24 0 100-48zM320 368a112.1 112.1 0 010-224 112.1 112.1 0 010 224z"/></svg>',
  "issues_count": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0a256 256 0 100 512 256 256 0 000-512zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208zm0-160a24 24 0 0024-24V152a24 24 0 00-48 0v128a24 24 0 0024 24zm0 33.1a31.4 31.4 0 100 62.9 31.4 31.4 0 000-62.9z"/></svg>',
  "contributions": '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="display-code" class="svg-inline--fa fa-display-code fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M512 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h148.3l-9.6 48H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-50.73L363.7 416H512c35.35 0 64-28.65 64-64V64C576 28.65 547.3 0 512 0zM251.7 464L261.3 416h53.46l9.6 48H251.7zM528 352c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V64c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V352zM362.1 137.9c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C337.8 266.1 342.9 268 348 268s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31L362.1 137.9zM242.1 137.9c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C217.8 266.1 222.9 268 228 268S238.2 266.1 242.1 262.2c7.812-7.812 7.812-20.5 0-28.31L208.3 200L242.1 166.2C249.1 158.4 249.1 145.7 242.1 137.9z"></path></svg>',
  "following": '<svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M320 256c70.692 0 128-57.308 128-128C448 57.308 390.692 0 320 0c-70.693 0-128 57.308-128 128 0 70.692 57.307 128 128 128zm0-208c44.183 0 80 35.817 80 80s-35.817 80-80 80c-42.63-2.132-76.099-37.317-76.099-80S277.371 50.132 320 48zm50.7 256H269.3C173.589 304 96 381.589 96 477.3c0 19.164 15.536 34.7 34.7 34.7h378.7c19.148 0 34.655-15.552 34.6-34.7 0-95.7-77.6-173.3-173.3-173.3zm-226 160c6.7-62.9 60-112 124.6-112h101.4c63.933.315 117.497 48.462 124.6 112zM595.285 196.47h-48v-48c0-13.255-10.746-24-24-24-13.255 0-24 10.745-24 24v48h-48c-13.255 0-24 10.745-24 24s10.745 24 24 24h48v48c0 13.255 10.745 24 24 24 13.254 0 23.968-13.954 24-24v-48h48c13.254 0 24-10.745 24-24s-10.746-24-24-24z"/></svg>',
  "forks": '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-code-fork fa-w-14" data-icon="code-fork" data-prefix="far" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80a80 80 0 10-160 0 79.7 79.7 0 0056 76v36c0 22-18 40-40 40H144a40 40 0 01-40-40v-36.1A79.6 79.6 0 00160 80 80 80 0 100 80a79.7 79.7 0 0056 76v36a88 88 0 0088 88h56v76a79.7 79.7 0 0024 156 79.7 79.7 0 0024-156v-76h56a88 88 0 0088-88v-36.1A79.6 79.6 0 00448 80zM80 48a32 32 0 110 64 32 32 0 010-64zm144 416a32 32 0 110-64 32 32 0 010 64zm144-352a32 32 0 110-64 32 32 0 010 64z"/></svg>',
  "watchers": '<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 32C165.1 32 57.7 115.6 3.5 238.1 1.5 243.4 0 251 0 256c0 5 1.6 12.6 3.5 17C57.7 396.5 165 480 288 480s230.3-83.6 284.5-206.1A67.9 67.9 0 00576 256c0-5-1.6-12.6-3.5-17.9C518.3 115.5 410.9 32 288 32zm0 48c99.5 0 191.2 67.5 239.6 175.1C478.1 364.6 387.4 432 288 432c-99.5 0-191.2-67.5-239.6-175.1C97 147.4 188.6 80 288 80zm0 48c-70.692 0-128 57.308-128 128 0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128zm4.176 48.746c42.15 2.221 75.19 37.045 75.193 79.254-.105 41.472-32.121 76.527-73.478 79.605-12.638 1.137-27.807-2.49-38.754-7.369l-.14-.056a80 80 0 01-39.177-39.176l-.056-.14C211.32 277.598 208.772 267.421 208 256c.707-47.445 40.316-78.801 77.9-79.219 2.796-.188 4.164-.14 6.276-.035z"/></svg>'
}

//Get elapsed minutes to date 
function diff_hours(dt) {
  var now = new Date();
  var diff = (new Date(dt) - now.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}
class gitStats {
  constructor(options) {
      //Fill icons
      var gs_i = document.querySelectorAll('[gs-icon]');
      gs_i.forEach((el) => {
          var n = el.getAttribute("gs-icon");
          el.innerHTML = gs_icons[n];
      });
      this.initialize(options);
  }
  initialize(options) {
      this.fetchRateLimit();
      let u = options.username;
      let r = options.repo;
      this.currDate = new Date();
      var timeDiff;
      if (r != null) {
          this.selector = "[gs-user='" + u + "'][gs-repo='" + r + "']";
          this.storageKey = "gs_" + u + "_" + r;
          this.stats = JSON.parse(window.localStorage.getItem("gs_" + u + "_" + r));
          if (options.selector) {
              this.selector = options.selector;
          }
          if (this.stats == undefined) {
              this.fetchStats(u, r);
          } else {
              if (this.stats["timeElapsed"] == undefined)
                  timeDiff = 61;
              else
                  timeDiff = diff_hours(this.stats["timeElapsed"]);
              console.log("Time Diff:" + timeDiff);
              if (timeDiff > 60 || this.stats["timeElapsed"] == undefined)
                  this.fetchStats(u, r);
              else
                  this.renderStats(true);
          }
      } else {
          this.selector = "[gs-user='" + u + "']";
          this.storageKey = "gs_" + u;
          this.stats = JSON.parse(window.localStorage.getItem("gs_" + u));
          if (this.stats == undefined) {
              this.fetchStats(u);
          } else {
              if (this.stats["timeElapsed"] == undefined)
                  timeDiff = 61;
              else
                  timeDiff = diff_hours(this.stats["timeElapsed"]);
              console.log("Time Diff:" + timeDiff);
              if (timeDiff > 60 || this.stats["timeElapsed"] == undefined)
                  this.fetchStats(u);
              else
                  this.renderStats();
          }
      }

  }
  clear() {
      localStorage.removeItem(this.storageKey);
  }
  async fetchRateLimit() {
      await fetch('https://api.github.com/rate_limit').then(res => res.json()).then((data) => {
          var d = new Date(data.rate["reset"]).getTime();
          console.log("API Rate Limit : " + data.rate["remaining"] + "/" + data.rate["limit"]);
      }).catch(err => console.log('Fetch Rate Limit : ' + err));
  }
  async fetchAPI(username, repo) {
      console.log("Fetch API - " + username + "/" + repo);
      if (repo) {

          //Basic stats https://api.github.com/users/d3ward/repos/src.next
          await fetch(`https://api.github.com/repos/${username}/${repo}`).then(res => res.json()).then((data) => {
              console.log
              this.stats = {
                  username: username,
                  name: data.name,
                  full_name: data.full_name,
                  description: data.description,
                  is_fork: data.fork,
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                  watchers: data.subscribers_count,
                  issues: data.open_issues,
                  url: data.html_url,
                  notFound: data.message
              };
          }).catch(err => console.log('Basic Stats Error: ' + err));
          //Commits 
          /*
          await fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/vnd.github.cloak-preview"
              }
          }).then(res => res.json()).then((data) => {
              this.stats["commits"] = data.length;
          }).catch(err => console.log('Fetching Commits Error : ' + err));*/
      } else {

          //Basic stats
          await fetch(`https://api.github.com/users/${username}`).then(res => res.json()).then((data) => {
              this.stats = {
                  username: data.login,
                  realName: data.name,
                  bio: data.bio,
                  avatar: data.avatar_url,
                  location: data.location,
                  repos: data.public_repos,
                  repos_url: data.repos_url,
                  followers: data.followers,
                  following: data.following,
                  url: data.html_url,
                  notFound: data.message,
                  public_gists: data.public_gists,
                  blog: data.blog,
                  company: data.company
              };
          }).catch(err => console.log('Basic Stats Error: ' + err));
          //Stars
          await fetch(`https://api.github.com/users/${username}/repos`).then(res => res.json()).then((data) => {
              var stars = 0;
              for (let d in data)
                  stars += data[d].stargazers_count;
              this.stats["stars"] = stars;
          }).catch(err => console.log('Fetching Stars Error: ' + err));
          //Commits 
          await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/vnd.github.cloak-preview"
              }
          }).then(res => res.json()).then((data) => {

              this.stats["commits"] = data.total_count;
          }).catch(err => console.log('Fetching Commits Error : ' + err));
          //Pulls
          await fetch(`https://api.github.com/search/issues?q=author:${username}+is:pr`, {
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/vnd.github.cloak-preview"
              }
          }).then(res => res.json()).then((data) => {
              this.stats["pulls"] = data;
              this.stats["pulls_count"] = data.total_count;
          }).catch(err => console.log('Fetching Pulls Error : ' + err));
          //Issues
          await fetch(`https://api.github.com/search/issues?q=author:${username}+is:issue`, {
                  headers: {
                      "Content-Type": "application/json",
                      Accept: "application/vnd.github.cloak-preview"
                  }
              }).then(res => res.json()).then((data) => {
                  this.stats["issues"] = data;
                  this.stats["issues_count"] = data.total_count;
              }).then(() => {
                  var mixPullsIssues = new Map();
                  for (let i in this.stats["pulls"].items)
                      mixPullsIssues.set(this.stats["pulls"].items[i].repository_url, i);
                  for (let i in this.stats["issues"].items)
                      mixPullsIssues.set(this.stats["issues"].items[i].repository_url, i);
                  this.stats["contributions"] = mixPullsIssues.size;
              })
              .catch(err => console.log('Fetching Issues Error : ' + err));
      }
  }
  fetchStats(username, repo) {
      if (repo != null) {
          this.fetchAPI(username, repo).then(() => {
              this.stats["timeElapsed"] = new Date();
              window.localStorage.setItem("gs_" + username + "_" + repo, JSON.stringify(this.stats));
              this.renderStats(true);
          });
      } else {
          this.fetchAPI(username).then(() => {
              this.stats["timeElapsed"] = new Date();
              window.localStorage.setItem("gs_" + username, JSON.stringify(this.stats));
              this.renderStats();
          });
      }
  }
  renderStats(t) {
      const a = this.selector;
      if (this.stats["url"] != undefined) {
          //For each field check if attribute exist
          var gs_elements;
          if (t==true) {
              gs_elements = {
                  username: document.querySelectorAll(a + ' [gs-data="username"]'),
                  name: document.querySelectorAll(a + ' [gs-data="name"]'),
                  full_name: document.querySelectorAll(a + ' [gs-data="full_name"]'),
                  description: document.querySelectorAll(a + ' [gs-data="description"]'),
                  is_fork: document.querySelectorAll(a + ' [gs-data="is_fork"]'),
                  stars: document.querySelectorAll(a + ' [gs-data="stars"]'),
                  forks: document.querySelectorAll(a + ' [gs-data="forks"]'),
                  commits: document.querySelectorAll(a + ' [gs-data="commits"]'),
                  watchers: document.querySelectorAll(a + ' [gs-data="watchers"]'),
                  issues: document.querySelectorAll(a + ' [gs-data="issues"]'),
                  url: document.querySelectorAll(a + ' [gs-data="url"]')
              }
          } else {
              gs_elements = {
                  username: document.querySelectorAll(a + ' [gs-data="username"]'),
                  realName: document.querySelectorAll(a + ' [gs-data="realname"]'),
                  bio: document.querySelectorAll(a + ' [gs-data="bio"]'),
                  avatar: document.querySelectorAll(a + ' [gs-data="avatar"]'),
                  location: document.querySelectorAll(a + ' [gs-data="location"]'),
                  stars: document.querySelectorAll(a + ' [gs-data="stars"]'),
                  repos: document.querySelectorAll(a + ' [gs-data="repos"]'),
                  commits: document.querySelectorAll(a + ' [gs-data="commits"]'),
                  pulls_count: document.querySelectorAll(a + ' [gs-data="pulls_count"]'),
                  issues_count: document.querySelectorAll(a + ' [gs-data="issues_count"]'),
                  contributions: document.querySelectorAll(a + ' [gs-data="contributions"]'),
                  followers: document.querySelectorAll(a + ' [gs-data="followers"]'),
                  following: document.querySelectorAll(a + ' [gs-data="following"]'),
                  url: document.querySelectorAll(a + ' [gs-data="url"]'),
                  notFound: document.querySelectorAll(a + ' [gs-data="notfound"]'),
                  public_gists: document.querySelectorAll(a + ' [gs-data="gists"]'),
                  blog: document.querySelectorAll(a + ' [gs-data="blog"]'),
                  company: document.querySelectorAll(a + ' [gs-data="company"]')
              }
          }

          for (let key in gs_elements) {
              var r = gs_elements[key];
              if (r) {
                  r.forEach(element => {
                      if (key == "url")
                          element.href = this.stats[key];
                      else if (key == "avatar")
                          element.src = this.stats[key];
                      else
                          element.innerHTML = this.stats[key];
                  });
              }
          }
          var gs = document.querySelectorAll(a);
          gs.forEach(el => {
              el.classList.add("gs-loaded");
          })
      } else {
          var gs = document.querySelectorAll(a);
          gs.forEach(el => {
              el.classList.add("gs-not-found");
          })
      }
  }
}

function gs_aos() {
  var iaos =document.querySelectorAll("[gs-aos-items]>*,[gs-aos]"); 
  if(iaos!=undefined){
  if (IntersectionObserver && iaos) {
      let callback = function (entries) {
          entries.forEach(entry => {
              if (entry.isIntersecting && !entry.target.classList.contains('gs-aos-done')) {
                  entry.target.classList.add('gs-aos-done');
              } else {
                  entry.target.classList.remove('gs-aos-done');
              }
          });
      }
      let observer = new IntersectionObserver(callback, {
          root: null,
          threshold: 0
      });
      iaos.forEach((item) => {
          observer.observe(item);
      });
  }
  }
 
}


function navbar() {
    var t = this;
    t.n = document.querySelector("nav");
    t.bo = document.body.style.overflow;
    t.close = function () {
      t.bo = "auto";
      t.n.classList.remove("active");
    }
    t.open = function () {
      t.bo = "hidden";
      t.n.classList.add("active");
    }
    if (t.n) {
      document.querySelector("nav>button").addEventListener("click", function () {
        console.log("toggleNav");
        if (t.n.classList.contains("active"))
          t.close();
        else
          t.open();
      });
      document.querySelectorAll("nav ul > a").forEach(n => n.addEventListener("click", t.close()));
      var links = Array.from(document.querySelectorAll('nav a'));
      links.forEach((p)=>{
        p.addEventListener('click', ()=>{
          var activeLink = document.querySelector('nav a.active');
          if (activeLink) activeLink.classList.remove("active");
          p.classList.add("active");
        });
      })
    }

  }
  function themeManager() {
    const t = this;
    t.toggles = document.getElementsByClassName("theme-toggle");
    t.activeTheme= "light";
    t.setTheme =(theme)=>{
      t.activeTheme = theme;
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme);
    }
    t.dark = ()=>{
      t.setTheme("dark");
    }
    t.light = ()=>{
      t.setTheme("light");
    }
    if (window.CSS && CSS.supports("color", "var(--bg)") && t.toggles) {
      var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ?
        "dark" : "light");
      if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)
      for (var i = 0; i < t.toggles.length; i++) {
        t.toggles[i].onclick = function () {
          if (document.documentElement.getAttribute("data-theme") === "light") t.dark();
          else t.light();
        };
      }
    }
  }

  function aos() {
    const t= this;
    t.items = document.querySelectorAll("[class*=_aos]");
    if (IntersectionObserver && t.items) {
      let callback = function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('_aos-done')) {
            entry.target.classList.add('_aos-done');
          } else {
            entry.target.classList.remove('_aos-done');
          }
        });
      }
      t.observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0
      });
      t.items.forEach((item) => {
        t.observer.observe(item);
      });
    }
    t.disconnect = function (){
      if(t.observer)
        t.observer.disconnect();
    }
  }
  
  function gotop() {
    var t = this;
    t.gt = document.getElementById('gt-link');
    t.scrollToTop = function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    t.listeners = function () {
      window.addEventListener("scroll", () => {
        let y = window.scrollY;
        if (y > 0) {
          t.gt.classList.remove("hidden");
        } else {
          t.gt.classList.add("hidden");
        }
      });
      t.gt.onclick = function (e) {
        e.preventDefault();
        if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
          t.scrollToTop();
        }
      }
    }
    if (t.gt) {
      t.listeners();
    }
  }

  class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="fixed">
    <nav>
      <a href="./">
        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary)" width="44" height="46" viewbox="0 0 70 50 ">
          <path
            d="M3 41.924V38.32h60v1.79c0 .983-.018 1.96-.04 2.17-.088.864-.412 1.57-.986 2.149-.581.587-1.155.901-1.912 1.046-.236.046-4.44.053-28.669.053H3zm12.559-5.266c-3.43-.305-6.551-1.848-8.91-4.405-2.053-2.225-3.275-4.976-3.577-8.046-.061-.632-.051-2.067.02-2.72.494-4.568 3.055-8.405 7.134-10.691 1.076-.603 2.738-1.188 4.031-1.42 1.077-.191 1.156-.197 3.34-.215 2.366-.02 2.401-.016 2.96.263.239.12.38.226.613.46.355.36.524.632.656 1.053l.095.307.013 2.331.014 2.33H19.47c-1.384 0-2.638.017-2.842.038-1.14.118-1.529.194-2.157.422-2.503.91-4.218 3.036-4.584 5.683-.24 1.753.248 3.58 1.366 5.098.273.371.967 1.063 1.341 1.338a7.25 7.25 0 003.254 1.351c.428.063 1.527.062 1.924-.002 2.4-.385 4.318-1.808 5.322-3.947.31-.658.46-1.141.609-1.943.06-.334.067-1.048.087-10.49l.021-10.132.084-.272c.332-1.072 1.096-1.902 2.098-2.277.506-.189.605-.197 2.657-.215L30.585.54l-.012 11.786-.01 11.786-.083.567c-.337 2.316-1.047 4.193-2.26 5.975-2.365 3.472-6.028 5.624-10.221 6.006-.472.042-1.95.042-2.441-.002zm24.46.017a13.293 13.293 0 01-1.976-.34c-2.6-.659-4.819-2.14-6.55-4.368-.22-.285-.757-1.097-.757-1.146 0-.024 4.935-2.899 5.057-2.946.016-.006.091.09.167.215.714 1.176 2.102 2.174 3.546 2.55 1.698.44 3.402.138 4.916-.874.862-.576 1.51-1.335 1.993-2.332.265-.549.393-.915.515-1.472.122-.556.123-1.716.003-2.283-.27-1.284-.928-2.47-1.826-3.292a6.316 6.316 0 00-2.986-1.509c-.603-.12-1.638-.12-2.226.001a6.5 6.5 0 00-1.494.501c-.215.101-.404.177-.419.168-.05-.03-3.944-4.21-3.956-4.244-.006-.019 2.099-2.007 4.679-4.419 3.401-3.179 4.69-4.407 4.69-4.465v-.08l-4.707-.01-4.708-.01.01-2.915L34 .49l7.773-.01c8.49-.01 8.034-.022 8.586.203.81.329 1.465 1.081 1.703 1.959.078.284.083.4.098 2.001l.016 1.7-3.73 3.486c-2.452 2.292-3.733 3.515-3.741 3.57-.01.073.021.094.245.168.66.216 1.612.666 2.266 1.07 2.928 1.81 4.933 4.755 5.515 8.099.136.778.17 1.176.17 2.037 0 .87-.039 1.352-.17 2.113-.55 3.179-2.408 6.018-5.128 7.83-1.488.993-3.032 1.585-4.886 1.875-.386.06-.714.079-1.529.088a26.12 26.12 0 01-1.17-.004zm15.735-18.09V.472h2.015c2.172 0 2.291.009 2.85.204.827.29 1.596.984 2.017 1.822.147.294.28.794.324 1.222.026.258.04 5.672.04 16.68v16.298h-7.246z" />
        </svg>
      </a>
      <ul>
        <li><a href="./">
            <svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
              </path>
            </svg>
            &nbsp; Home</a></li>

        <li><a href="./about">
            <svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
              </path>
            </svg>
            &nbsp; About </a>
        </li>
        <li>
          <a href='https://ko-fi.com/T6T360PF4' target='_blank'>
            <svg role="img" class="_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Ko-fi</title>
              <path
                d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
            </svg>
            &nbsp; Buy me a Coffee
          </a>

          <a href="https://github.com/d3ward">
            <svg class="_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Github</title>
              <path
                d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
            </svg>
          </a>
          <div class="nav-item theme-toggle">
            <span class="light-icon theme-icon">
              <svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </span>
            <span class="dark-icon theme-icon">
              <svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
          </div>
        </li>
      </ul>
      <button>
        <svg aria-hidden="true" version="1.1" viewBox="0 0 24 24">
          <line x1="2" y1="4" x2="22" y2="4" id="top" />
          <line x1="2" y1="12" x2="22" y2="12" id="middle-down" />
          <line x1="2" y1="12" x2="22" y2="12" id="middle-up" />
          <line x1="2" y1="20" x2="22" y2="20" id="bottom" />
        </svg>
      </button>
    </nav>
  </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="_bg-primary _txt-cl2">
    <div class="cnt _aos-bottom">
      <div class="_f-center">
        <div><a href="https://github.com/d3ward/b2ntp" class="btn-cl2 ghost">
            <svg id="github-svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub icon</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
              </path>
            </svg>&nbsp;Github </a></div>
        <div>
          <a href='https://ko-fi.com/T6T360PF4' target='_blank' class="btn-cl2 ghost">
            <svg role="img" class="_icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Ko-fi</title>
              <path
                d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
            </svg>
            &nbsp; Buy me a Coffee
          </a></div>
      </div>
      <div class="grid _txt-white">
        <div>Icons by <b><a class="_txt-white" href="https://heroicons.dev/">Heroicons</a></b> & <b><a
              class="_txt-white" href="https://simpleicons.org/">Simpleicons</a></b>
        </div>
        <div>
          Designed by Eduard Ursu(<b><a class="_txt-white" href="https://d3ward.github.io">d3ward</a></b>) © 2021
        </div>
        <div>
          This website use <b><a class="_txt-white" href="https://www.useaurora.app/">Aurora - Open Web
              Analytics</a></b>
        </div>
        <div>
          Licensed under <b><a class="_txt"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/">[NC-SA-4.0]</a></b>
        </div>
      </div>
    </div>

  </footer>
      `;
    }
  }
  customElements.define('footer-component', Footer);
  
let text = [ "DEVELOPER + DESIGNER ","Tic Tac Toe","Connect Four","Memory Tiles"];

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};



  var n,a,t,s;
// reload components for each container after transition
function init() {
  var elty = document.getElementById("typewriter");
  if(elty!=undefined){
        var toRotate = elty.getAttribute('data-type');
        var period = elty.getAttribute('data-period');
        if (toRotate) {
          new TxtType(elty, JSON.parse(toRotate), period);
        }
  }

  

  if(!s) s= new gotop();
  s.scrollToTop();
  if(!n)n =new navbar();
  if(a)a.disconnect();
  a =new aos();
  if(!t) t =new themeManager();
  // Play logo animation once
  var d3Logo = document.querySelector('#d3Logo');
  var wstatus = 1;
  if(d3Logo != undefined){
    function startA() {
      d3Logo.classList.add('startA')
    }
    d3Logo.addEventListener("click", function () {
      if (wstatus) d3Logo.classList.remove('startA');
      else startA();
      wstatus = !wstatus;
    });
    setTimeout(startA, 300);
  }
   //Get all cards
   var gs_widgets = document.querySelectorAll('[gs-user]');
   
   if(gs_widgets!= undefined){console.log(gs_widgets);
     var gs_list = [];
      gs_widgets.forEach((el) => {
          var gs_u = el.getAttribute("gs-user");
          var gs_r = el.getAttribute("gs-repo")
          if (!gs_list.includes(gs_u + "/" + gs_r)) {
              gs_list.push(gs_u + "/" + gs_r);
              new gitStats({
                  username: gs_u,
                  repo: gs_r,
                  timeFetch: 0
              });
          }
      })
      gs_aos();
   }
   
   var elem = document.querySelector('.grid-masonry');
   if(elem!=undefined){
      var iso = new Isotope(elem, {
    itemSelector: '.grid-masonry>*',
    percentPosition: true,
    masonry: {
      orizontalOrder: true,
    }
  });

  function filterGrid() {
    var t = this;
    t.items = document.querySelectorAll(".filter-container>div");
    t.flts = Array.from(document.querySelectorAll("[data-filter]"));
    t.addF = (element, name) => {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }
    t.listeners = () => {
      t.flts.forEach((element) => {
        var c = element.getAttribute("data-filter");
        element.addEventListener("click", () => {
          var current = document.querySelector("[data-filter].active");
          current.classList.remove("active");
          element.classList.add("active");
          t.filter(c)
        });
      });
    }
    t.removeF = (element, name) => {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    t.filter = (c) => {
      console.log(c);
      if (c == "all") c = "";
      for (let i = 0; i < t.items.length; i++) {
        t.removeF(t.items[i], "show");
        if (t.items[i].className.indexOf(c) > -1) t.addF(t.items[i], "show");
      }
    }
    t.filter("all");
    t.listeners();
  }
  document.addEventListener("DOMContentLoaded", () => {
    iso.layout();
    document.querySelectorAll(".flt_btns>button").forEach((element) => {
        var c = element.getAttribute("data-filter");
        element.addEventListener("click", () => {
          var current = document.querySelector("[data-filter].active");
          current.classList.remove("active");
          element.classList.add("active");
          console.log(c);
          if(c=="all")iso.arrange( {filter:"*"});
          else iso.arrange( {filter:"."+c});
        });
      });
    setTimeout(() => {
      iso.layout();
    }, 1000);
  });
   }
 

  
}

// first animate in
setTimeout(function () {
  document.documentElement.classList.remove('is-animating');
}, 100)

// enable swup
const swup = new Swup({
  cache: true,
  linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="./posts/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
});


init();
swup.on('contentReplaced', init);

