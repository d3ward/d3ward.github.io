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
  "pulls_count": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m7.18 3.07 2.4-2.4a.25.25 0 0 1 .42.18v4.8a.25.25 0 0 1-.43.17l-2.4-2.4a.25.25 0 0 1 0-.35zM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.12v5.26a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 0 1-1.5-2.12zM11 2.5h-1V4h1a1 1 0 0 1 1 1v5.63a2.25 2.25 0 1 0 1.5 0V5A2.5 2.5 0 0 0 11 2.5zm1 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zM3.75 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"/></svg>',
  "repos": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.71 1.7.75.75 0 0 1-1.08 1.05A2.5 2.5 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.36 0-.7.07-1 .2V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.09a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>',
  "followers": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 5.5a3.5 3.5 0 1 1 5.9 2.55 5.5 5.5 0 0 1 3.03 4.08.75.75 0 1 1-1.48.24 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.48-.24A5.5 5.5 0 0 1 3.1 8.05 3.49 3.49 0 0 1 2 5.5zM11 4a.75.75 0 1 0 0 1.5 1.5 1.5 0 0 1 .67 2.84.75.75 0 0 0-.42.68v.35a.75.75 0 0 0 .57.73 3.5 3.5 0 0 1 2.53 2.37.75.75 0 1 0 1.43-.44 5.01 5.01 0 0 0-2.56-3.01A3 3 0 0 0 11 4z"/></svg>',
  "stars": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .67.42l1.89 3.81 4.2.61a.75.75 0 0 1 .42 1.28l-3.04 2.97.71 4.2a.75.75 0 0 1-1.08.79L8 12.35l-3.77 1.98a.75.75 0 0 1-1.08-.8l.72-4.19L.82 6.37a.75.75 0 0 1 .41-1.28l4.21-.6L7.33.66A.75.75 0 0 1 8 .25zm0 2.44L6.62 5.5a.75.75 0 0 1-.57.41l-3.1.45L5.2 8.54a.75.75 0 0 1 .22.67l-.53 3.08 2.77-1.45a.75.75 0 0 1 .7 0l2.77 1.45-.53-3.08a.75.75 0 0 1 .22-.67l2.24-2.18-3.1-.45a.75.75 0 0 1-.56-.4L8 2.68z"/></svg>',
  "commits": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm1.43.75a4 4 0 0 1-7.86 0H.75a.75.75 0 1 1 0-1.5h3.32a4 4 0 0 1 7.86 0h3.32a.75.75 0 1 1 0 1.5h-3.32z"/></svg>',
  "issues_count": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"/></svg>',
  "contributions": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 0 0-.25.25v12.5c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75zM0 1.75C0 .78.78 0 1.75 0h12.5C15.22 0 16 .78 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75zm9.22 3.72a.75.75 0 0 0 0 1.06L10.69 8 9.22 9.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0zM6.78 6.53a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06L5.31 8l1.47-1.47z"/></svg>',
  "following": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.25 0a.75.75 0 0 1 .75.75V2h1.25a.75.75 0 0 1 0 1.5H14v1.25a.75.75 0 0 1-1.5 0V3.5h-1.25a.75.75 0 0 1 0-1.5h1.25V.75a.75.75 0 0 1 .75-.75zM5.5 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.4 4.55a3.5 3.5 0 1 0-4.8 0A5.53 5.53 0 0 0 0 13.2a.75.75 0 1 0 1.5.08 4.01 4.01 0 0 1 4-3.79 4.01 4.01 0 0 1 4 3.8.75.75 0 1 0 1.5-.1 5.53 5.53 0 0 0-3.1-4.65z"/></svg>',
  "forks": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.12a2.25 2.25 0 1 0-1.5 0v.88A2.25 2.25 0 0 0 5.75 8.5h1.5v2.13a2.25 2.25 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.88a2.25 2.25 0 1 0-1.5 0v.88a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.88zm3.75 7.38a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>',
  "watchers": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.68 7.93a13.7 13.7 0 0 1 2.37-2.71A6.21 6.21 0 0 1 8 3.5c1.47 0 2.82.74 3.96 1.72a13.7 13.7 0 0 1 2.36 2.71.12.12 0 0 1 0 .14 13.7 13.7 0 0 1-2.37 2.71A6.21 6.21 0 0 1 8 12.5a6.21 6.21 0 0 1-3.96-1.72 13.61 13.61 0 0 1-2.36-2.71.12.12 0 0 1 0-.14zM8 2a7.7 7.7 0 0 0-4.93 2.08A15.19 15.19 0 0 0 .43 7.1a1.62 1.62 0 0 0 0 1.8c.45.68 1.37 1.93 2.64 3.02A7.7 7.7 0 0 0 8 14c1.98 0 3.67-1 4.93-2.08a15.16 15.16 0 0 0 2.64-3.02 1.62 1.62 0 0 0 0-1.8 15.16 15.16 0 0 0-2.64-3.02A7.7 7.7 0 0 0 8 2zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
  "location": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.54 3.46a5 5 0 0 1 0 7.08L8 14.07l-3.54-3.54a5 5 0 1 1 7.08-7.07zm1.06 8.14a6.5 6.5 0 1 0-9.2 0l3.54 3.53a1.5 1.5 0 0 0 2.12 0l3.54-3.53zM8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>'
}

//Get elapsed minutes to date 
function diff_hours(dt) {
  var now = new Date();
  var diff = (new Date(dt) - now.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}
var gs_data = JSON.parse(window.localStorage.getItem("gs_data"));
if (gs_data == undefined) gs_data = {};
class gitStats {
  constructor() {
      const gs_css = '[gs-user],.gs-user,.gs-limit{position:relative;display:flex;flex-direction:column;transition: all 0.25s ease-in-out;padding:1.5rem;gap:1rem;border-radius:var(--gs-radius , .5rem);width:100%;max-width:300px;background-color:var(--gs-bg,#fff);color: var(--gs-txt,#000);box-shadow: var(--gs-bshadow,rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px);}.gs-p07{padding:.7rem!important}.gs-limit{position:fixed!important;top:80px;left:10px;width:fit-content!important;z-index:200}.gs-limit p{text-transform:uppercase;font-size:10px;letter-spacing:1px;margin:0;color:var(--txt)}[gs-user]::after,.gs-user::after{content:"";position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;border-radius:.5rem;background-color:var(--gs-bg,#fff);visibility:visible;opacity:1;transition:all 1s linear}[gs-user].gs-loaded::after,.gs-user.gs-loaded::after{visibility:hidden;opacity:0}[gs-user].gs-not-found::after,.gs-user.gs-not-found::after{content:"Not Found"}[gs-user]>*,.gs-user>*{margin:0}[gs-user] span,.gs-user span{font-size:1.5rem;text-align:center}[gs-user] svg,.gs-user svg{height:20px;width: 20px;fill:currentColor}[gs-user] label,.gs-user label{display:flex;align-items:center}[gs-user] label [gs-data],.gs-user label [gs-data]{flex-grow:1;text-align:end}.gs-fgrow{flex-grow:1}[gs-user] i,.gs-user i{width:30px;display:flex;align-items:center;justify-content:center}[gs-data="avatar"]{max-width:100px;border-radius:50%;border: 4px solid var(--gs-accent);margin:15px auto 15px;width:100px;height:100px}.gs-badge{position:absolute;display:flex;top:.3rem;right:.3rem;justify-content:flex-end;font-size:14px}.gs-badge svg{height:20px}.full-width{max-width:unset}.gs-column{display:flex;flex-direction:column;gap:1rem}.gs-compact{display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;gap:1rem}[gs-aos-items]>*,[gs-aos]{opacity:0;transition:opacity 1s,transform 1.3s}[gs-aos-items="zoom"]>*,[gs-aos="zoom"]{transform:scale(.4)}[gs-aos-items="left"]>*,[gs-aos="left"]{transform:translate3d(-100px,0,0)}[gs-aos-items="right"]>*,[gs-aos="right"]{transform:translate3d(100px,0,0)}[gs-aos-items="top"]>*,[gs-aos="top"]{transform:translate3d(0,-100px,0)}[gs-aos-items="bottom"]>*,[gs-aos="bottom"]{transform:translate3d(0,100px,0)}.gs-aos-done{opacity:1;transform:translateZ(0) scale(1)}';
      const gs_style = document.createElement("style");
      gs_style.innerText = gs_css;
      document.head.appendChild(gs_style);
      this.items = [];
      console.log(gs_data);
      // Call the function when the DOM is loaded
      document.addEventListener("DOMContentLoaded", () => {
          var gs_i = document.querySelectorAll('[gs-icon]');
          gs_i.forEach((el) => {
              var n = el.getAttribute("gs-icon");
              el.innerHTML = gs_icons[n];
          });
          //Get all cards
          var gs_widgets = document.querySelectorAll('[gs-user]');
          var gs_list = [];
          gs_widgets.forEach((el) => {
              var gs_u = el.getAttribute("gs-user");
              var gs_r = el.getAttribute("gs-repo")
              if (!gs_list.includes(gs_u + "/" + gs_r)) {
                  gs_list.push(gs_u + "/" + gs_r);
                  this.initialize({
                      username: gs_u,
                      repo: gs_r,
                      timeFetch: 0
                  });
              }
          })
          console.log(this.items);
          this.fetchRateLimit();
          this.gs_aos();
      })
  }
  initialize(options) {
      let u = options.username;
      let r = options.repo;
      let s = options.selector;
      let sk, st, ge;
      this.currDate = new Date();
      var timeDiff;
      if (r != null) {
          if (!s) {
              s = '[gs-user="' + u + '"][gs-repo="' + r + '"]'
          }
          sk = "gs_" + u + "_" + r;

          st = gs_data["gs_" + u + "_" + r];
          ge = {
              username: document.querySelectorAll(s + ' [gs-data="username"]'),
              name: document.querySelectorAll(s + ' [gs-data="name"]'),
              full_name: document.querySelectorAll(s + ' [gs-data="full_name"]'),
              description: document.querySelectorAll(s + ' [gs-data="description"]'),
              is_fork: document.querySelectorAll(s + ' [gs-data="is_fork"]'),
              stars: document.querySelectorAll(s + ' [gs-data="stars"]'),
              forks: document.querySelectorAll(s + ' [gs-data="forks"]'),
              commits: document.querySelectorAll(s + ' [gs-data="commits"]'),
              watchers: document.querySelectorAll(s + ' [gs-data="watchers"]'),
              issues: document.querySelectorAll(s + ' [gs-data="issues"]'),
              url: document.querySelectorAll(s + ' [gs-data="url"]')
          }
          this.items[sk] = {
              "st": st,
              "ge": ge,
              "s": s,
              "sk": sk
          };
          if (st == undefined) {
              this.fetchStats(u, r, sk);
          } else {
              if (st["timeElapsed"] == undefined)
                  timeDiff = 61;
              else
                  timeDiff = diff_hours(st["timeElapsed"]);
              console.log("Time Diff:" + timeDiff);
              if (timeDiff > 60 || st["timeElapsed"] == undefined)
                  this.fetchStats(u, r, sk);
              else
                  this.renderStats(sk);
          }
      } else {
          if (!s)
              s = "[gs-user='" + u + "']:not([gs-repo])";
          sk = "gs_" + u;
          st = (gs_data["gs_" + u]) ? gs_data["gs_" + u] : undefined;

          ge = {
              username: document.querySelectorAll(s + ' [gs-data="username"]'),
              realName: document.querySelectorAll(s + ' [gs-data="realname"]'),
              bio: document.querySelectorAll(s + ' [gs-data="bio"]'),
              avatar: document.querySelectorAll(s + ' [gs-data="avatar"]'),
              location: document.querySelectorAll(s + ' [gs-data="location"]'),
              stars: document.querySelectorAll(s + ' [gs-data="stars"]'),
              repos: document.querySelectorAll(s + ' [gs-data="repos"]'),
              commits: document.querySelectorAll(s + ' [gs-data="commits"]'),
              pulls_count: document.querySelectorAll(s + ' [gs-data="pulls_count"]'),
              issues_count: document.querySelectorAll(s + ' [gs-data="issues_count"]'),
              contributions: document.querySelectorAll(s + ' [gs-data="contributions"]'),
              followers: document.querySelectorAll(s + ' [gs-data="followers"]'),
              following: document.querySelectorAll(s + ' [gs-data="following"]'),
              url: document.querySelectorAll(s + ' [gs-data="url"]'),
              notFound: document.querySelectorAll(s + ' [gs-data="notfound"]'),
              public_gists: document.querySelectorAll(s + ' [gs-data="gists"]'),
              blog: document.querySelectorAll(s + ' [gs-data="blog"]'),
              company: document.querySelectorAll(s + ' [gs-data="company"]')
          }
          this.items[sk] = {
              "st": st,
              "ge": ge,
              "s": s,
              "sk": sk
          };
          if (st == undefined) {
              this.fetchStats(u, null, sk);
          } else {
              if (st["timeElapsed"] == undefined)
                  timeDiff = 61;
              else
                  timeDiff = diff_hours(st["timeElapsed"]);
              console.log("Time Diff:" + timeDiff);
              if (timeDiff > 60 || st["timeElapsed"] == undefined)
                  this.fetchStats(u, null, sk);
              else
                  this.renderStats(sk);
          }
      }
  }
  clear(sk) {
      gs_data[sk] = null;
  }
  async fetchRateLimit() {
      await fetch('https://api.github.com/rate_limit').then(res => res.json()).then((data) => {
          var d = new Date(data.rate["reset"] * 1000);
          console.log("API Rate Limit : " + data.rate["remaining"] + "/" + data.rate["limit"]);
          var gsl = document.querySelectorAll(".gs-limit [gs-data=\"limit\"]");
          gsl.forEach(el => {
              el.innerText = data.rate["remaining"] + "/" + data.rate["limit"];
          });
          gsl = document.querySelectorAll(".gs-limit [gs-data=\"limit-reset\"]");
          gsl.forEach(el => {
              el.innerText = d.getHours() + ":" + d.getMinutes();
          });
      }).catch(err => console.log('Fetch Rate Limit : ' + err));
  }
  //Get single repo stats
  getRepo(u, r) {
      return fetch(`https://api.github.com/repos/${u}/${r}`).then(res => res.json()).then((data) => {
          var stats = {
              username: u,
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
          }
          return stats;
      });
  }
  //Get commits counts based on contributions
  //Limited to first 30 contributors commits
  getRepoCommits(u, r) {
      return fetch(`https://api.github.com/repos/${u}/${r}/contributors`, {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/vnd.github.cloak-preview"
          }
      }).then(res => res.json()).then((data) => {
          var count = 0;
          data.forEach(el => {
              count += el.contributions;
          });
          return {
              "commits": count
          };
      }).catch(err => console.log('Fetching Commits Error : ' + err));
  }
  //Get all repos of user - also used to retrieve user stars count 
  getRepos(u) {
      return fetch(`https://api.github.com/users/${u}/repos`).then(res => res.json()).then((data) => {
          var stars = 0;
          for (let d in data)
              stars += data[d].stargazers_count;
          return {"stars":stars};
      }).catch(err => console.log('Fetching Stars Error: ' + err));
  }
  //Get user pulls
  getUserPulls(u) {
      return fetch(`https://api.github.com/search/issues?q=author:${u}+is:pr`, {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/vnd.github.cloak-preview"
          }
      }).then(res => res.json()).then((data) => {
          return {
              "pulls_count": data.total_count
          }
      }).catch(err => console.log('Fetching Pulls Error : ' + err))
  }
  //Get user issues
  getUserIssues(u) {
      return fetch(`https://api.github.com/search/issues?q=author:${u}+is:issue`, {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/vnd.github.cloak-preview"
          }
      }).then(res => res.json()).then((data) => {
          return {
              "issues_count": data.total_count
          }
      })
  }
  //Get user commits 
  getUserCommits(u) {
      return fetch(`https://api.github.com/search/commits?q=author:${u}`, {
          headers: {
              "Content-Type": "application/json",
              Accept: "application/vnd.github.cloak-preview"
          }
      }).then(res => res.json()).then((data) => {
          return {
              "commits": data.total_count
          };
      }).catch(err => console.log('Fetching Commits Error : ' + err))
  }
  //Get user profile stats 
  getProfile(u) {
      return fetch(`https://api.github.com/users/${u}`).then(res => res.json()).then((data) => {
          var stats = {
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
          return stats;
      }).catch(err => console.log('Basic Stats Error: ' + err));
  }
  async fetchAPI(u, r, sk) {
      console.log("Fetch API - " + u + "/" + r);
      var itm = this.items[sk];
      let f = [],
          ge = itm.ge;
      if (r != undefined) {
          f.push(this.getRepo(u, r));
          if (ge["commits"] != undefined)
              f.push(this.getRepoCommits(u, r));
      } else {
          //Basic stats
          f.push(this.getProfile(u));
          if (ge["stars"] != undefined)
              f.push(this.getRepos(u));
          if (ge["commits"] != undefined)
              f.push(this.getUserCommits(u));
          if (ge["pulls_count"] != undefined)
              f.push(this.getUserPulls(u));
          if (ge["issues_count"] != undefined)
              f.push(this.getUserIssues(u));
          /*
                         var mixPullsIssues = new Map();
                         for (let i in stats["pulls"].items)
                             mixPullsIssues.set(stats["pulls"].items[i].repository_url, i);
                         for (let i in stats["issues"].items)
                             mixPullsIssues.set(stats["issues"].items[i].repository_url, i);
                         stats["contributions"] = mixPullsIssues.size;
             */
      }
      return Promise.all(f);
  }
  async fetchStats(username, repo, sk) {
      await this.fetchAPI(username, repo, sk).then((data) => {
          
          var stats = [];
          stats={...data[0],...data[1],...data[2],...data[3],...data[4],...data[5]};
          stats["timeElapsed"] = new Date();
          gs_data[sk] = stats;
          console.log(stats);
          this.renderStats(sk);
          window.localStorage.setItem("gs_data", JSON.stringify(gs_data));
      });
  }
  gs_aos() {
      var items = document.querySelectorAll("[gs-aos-items]>*,[gs-aos]");
      if (IntersectionObserver && items) {
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
          items.forEach((item) => {
              observer.observe(item);
          });
      }
  }

  renderStats(sk) {
      
      var stats = gs_data[sk];
      var ge = this.items[sk].ge;
      console.log(ge);
      if (stats["url"] != undefined) {
          //For each field check if attribute exist
          for (let key in ge) {
              var r = ge[key];
              if (r) {
                  r.forEach(element => {
                      if (key == "url")
                          element.href = stats[key];
                      else if (key == "avatar")
                          element.src = stats[key];
                      else
                          element.innerHTML = stats[key];
                  });
              }
          }
          var gs = document.querySelectorAll(this.items[sk].s);
          gs.forEach(el => {
              el.classList.add("gs-loaded");
          })
      } else {
          var gs = document.querySelectorAll(this.items[sk].s);
          gs.forEach(el => {
              el.classList.add("gs-not-found");
          })
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
        <div>Icons by <b><a class="_txt-white" href="https://heroicons.dev/" target="_blank">Heroicons</a></b> & <b><a
              class="_txt-white" href="https://simpleicons.org/" target="_blank">Simpleicons</a></b>
        </div>
        <div>
          Designed by Eduard Ursu(<b><a class="_txt-white" href="https://d3ward.github.io">d3ward</a></b>) © 2021
        </div>
        <div>
          This website use <b><a class="_txt-white" href="https://umami.is/" target="_blank">Umami</a></b>
        </div>
        <div>
          Licensed under <b><a class="_txt"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">[NC-SA-4.0]</a></b>
        </div>
      </div>
    </div>

  </footer>
      `;
    }
  }
  customElements.define('footer-component', Footer);
  
let text = [ "DEVELOPER + DESIGNER ","Tic Tac Toe","Connect Four","Memory Tiles"];

function Typer(el, toRotate, period) {
  var t = this;
  t.toRotate = toRotate;
  t.el = el;
  t.loopNum = 0;
  t.period = parseInt(period, 10) || 2000;
  t.txt = '';
 
  t.isDeleting = false;
  t.tick = function() {
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
  t.tick();
};

  var n,a,t,s;
// reload components for each container after transition
function init() {
  var elty = document.getElementById("typewriter");
  if(elty!=undefined){
        var toRotate = elty.getAttribute('data-type');
        var period = elty.getAttribute('data-period');
        if (toRotate) {
          new Typer(elty, JSON.parse(toRotate), period);
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
  var git = new gitStats();
 
   
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

