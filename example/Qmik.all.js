!function(){function a(b,c){return a.init(b,c)}function b(a,b){var d=[];return l(a,function(a,e){(b?b(a,e):!c(e))&&d.push(e)}),d}function c(a){return void 0===a||null===a}function d(a){return c(a)||e(a)&&("undefined"==a||"null"==a||""==a.trim())}function e(a){return"string"==typeof a}function f(a){return a&&1==a.nodeType}function g(a){return a instanceof Array}function h(b){return!e(b)&&(g(b)||a.isQmik&&a.isQmik(b)||function(){return b+="","[object Arguments]"==b||"[object NodeList]"==b||"[object HTMLCollection]"==b||"[object StaticNodeList]"==b||"[object NamedNodeMap]"==b}())}function i(a){return a instanceof Function}function j(a){return a instanceof Error}function k(a){return a+""=="[object Object]"}function l(a,b){var c;if(h(a))for(c=0;c<a.length;c++)b.call(a[c],c,a[c]);else if(k(a))for(c in a)b.call(a[c],c,a[c]);return a}function m(a){return"number"==typeof a}function n(a){return"boolean"==typeof a}function o(a){return n(a)||e(a)||m(a)?a+"":i(a)?a.toString():JSON.stringify(a)}function p(a){return d(a)?"":JSON.parse(a)}function q(a){return y.Event&&a instanceof y.Event||a==y.event}function r(a){return i(a)?a():a}function s(){for(var a=arguments,b=a[0],c=g(b),d=1;d<a.length;d++)l(a[d],function(a,d){c?b.push(d):b[a]=d});return b}function t(b,c,d,e){c=a.url(c);var f="css"==b,g="js"==b,h=f?"link":g?"script":"iframe",i=z.createElement(h),j=a(i).attr({_src:c,async:"async"});return f?j.attr("rel","stylesheet"):g&&j.attr("type","text/javascript"),j.on({load:function(){d&&d(i)},error:function(){j.remove(),e&&e(i)}}),f?i.href=c:i.src=c,a("head").append(i),i}function u(a,b){try{delete a[b]}catch(c){a[b]=null}}function v(a,b){var c=G.call(b);B&&(B[a].apply?B[a].apply(B,c):B[a](a+":",c))}function w(a,b,c){var d=this;d.pid=setTimeout(function(){a.apply(a,c)},b)}function x(a,b,d,e){function f(){(c(d)||d>h*b)&&(a.apply(a,e),g._p=new w(f,b,e)),h++}var g=this,h=1;g._p=new w(f,b,e)}var y=this,z=y.document||{},A=y.navigator||{},B=y.console,C=A.appVersion||A.userAgent,D=y.location,E=encodeURIComponent,F=decodeURIComponent,G=[].slice,H=(D.protocol+"//"+D.host,{base:""});a.extend=function(){var a=arguments,b=a[0]||{},d=1;switch(a.length){case 0:return;case 1:b=this,d=0}return l(G.call(a,d),function(a,d){d&&l(d,function(a,d){c(d)||(b[a]=d)})}),b};var I=String.prototype;a.extend(I,{trim:function(){return this.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")},toLower:I.toLowerCase,toUpper:I.toUpperCase}),a.extend(w.prototype,{stop:function(){clearTimeout(this.pid)}}),a.extend(x.prototype,{stop:function(){this._p&&this._p.stop()}}),a.extend({encode:E,decode:F,isDom:f,isBool:n,isString:e,isFun:i,isFunction:i,isNum:m,isNumber:m,isArray:g,isNull:c,isError:j,each:l,stringify:o,parseJSON:p,isEvent:q,likeArray:h,isDate:function(a){return a instanceof Date},isObject:k,isPlainObject:function(a){if(c(a)||a+""!="[object Object]"||a.nodeType||a==y)return!1;var b;for(b in a);return c(b)||Object.prototype.hasOwnProperty.call(a,b)},likeNull:d,inherit:function(a,b){function c(){}var d=a.prototype;c.prototype=b.prototype,a.prototype=new c,a.prototype.constructor=a,b.prototype.constructor==Object.prototype.constructor&&(b.prototype.constructor=b);for(var e in d)a.prototype[e]=d[e];for(var e in b)a[e]=b[e]},trim:function(a){return c(a)?"":e(a)?a.trim():a.toString().trim()},toLower:function(a){return a?a.toLower():a},toUpper:function(a){return a?a.toUpper():a},merge:s,inArray:function(b,c){if(a.likeArray(c))for(var d=0;d<c.length;d++)if(c[d]===b)return d;return-1},unique:function(b){var c=[];return l(b,function(b,d){a.inArray(d,c)<0&&c.push(d)}),c},map:function(a,b){for(var d=[],e=0;a&&e<a.length;e++)c(a[e])||d.push(b(e,a[e]));return d},getScript:function(a,b,c){return t("js",a,b,c)},getCss:function(a,b,c){return t("css",a,b,c)},grep:b,param:function(a){var b=[];return l(a,function(a,c){e(a)?b.push(E(a)+"="+E(r(c))):c.name&&b.push(E(c.name)+"="+E(r(c.value)))}),b.join("&")},contains:function(a,b){return f(b)&&(a==z||a.contains(b))},now:function(a){return(a||0)+(new Date).getTime()},delay:function(a,b){return new w(a,b,G.call(arguments,2))},cycle:function(a,b,c){return new x(a,b,c,G.call(arguments,3))},log:function(){v("log",arguments)},warn:function(){v("warn",arguments)},error:function(){v("error",arguments)},isIphone:function(){return/iPhone OS/.test(C)},isAndroid:function(){return/Android/.test(C)},isWP:function(){return/Windows Phone/.test(C)},isIE:function(){return/MSIE/.test(C)},isFF:function(){return/Firefox/.test(C)},isWK:function(){return/WebKit/.test(C)},isOpera:function(){return/Opera/.test(C)},isRetinal:function(){return(y.devicePixelRatio||2)>=1.5},config:function(b,d){d=arguments.length<=1?H:d||{};var e=d;return arguments.length<1||c(b)||(k(b)?l(b,function(b,c){k(c)&&d[b]?a.extend(d[b],c):d[b]=c}):e=d[b]),e},url:function(b){b=a.trim(b);var c=/^\s*[a-zA-Z0-9]+:\/\//,d=H.base;return c.test(b)||(c.test(d)||(d=d||D.pathname.replace(/\/[^\/]*$/,"")),/^\//.test(b)||(b=("/"+b).replace(/\/{2,}/g,"/"),b=d+b.replace(/\/{2,}/g,"/"))),b.replace(/^\/{2,}/g,"/")},cssPrefix:function(b){var c={};return e(b)?c=(a.isWK()?"-webkit-":a.isIE()?"-ms-":a.isFF()?"-moz-":a.isOpera()?"-o-":"")+b:l(a.extend({},b),function(b,d){c[a.cssPrefix(b)]=d,c[b]=d}),c},execCatch:function(b,c,d){try{return b.apply(b,c||[])}catch(e){return a.log(e,e.stack,b,c),d&&d(e)}}}),l([a.url,a.now],function(a,b){b.toString=b}),a._in={createEvent:function(a){return z.createEvent?z.createEvent(a):z.createEventObject(a)},isSE:function(){return!c(z.addEventListener)},_delete:u},a.version="2.1.00",a.global=y,y.Qmik=a,y.$=y.$||a}(),function(Q){function Query(a,b){var c,d=this;if(d.context=b=b||doc,d.selector=a,d.length=0,d.__lives={},isString(a)){if(!rNode.test(a))return each(find(a,b),function(a,b){d._push(b)}),d;var e=doc.createElement("div");e.innerHTML=a,c=e.children}else c=likeArray(a)?a:[a];for(var f=0;f<c.length;f++)d._push(c[f]);return d}function init(a,b){return b=b||doc,isFun(a)?Q(doc).ready(a):isQmik(a)?a:new Query(a,b)}function isQmik(a){return a instanceof Query}function find(a,b){var c=[];return likeNull(a)||(b=isString(b)?Q(b):b,isQmik(b)?each(b,function(b,d){isDom(d)&&(c=arrayConcat(c,d.querySelectorAll(a)))}):c=b.querySelectorAll(a)||[]),c}function muchValue2Qmik(a){return a=execObject(a),isString(a)&&rNode.test(a)?Q(a):a}function execObject(a){return isFun(a)?a():a}function arrayConcat(a,b){if(isArray(b))a=a.concat(b);else for(var c=0;c<b.length;c++)a.push(b[c]);return a}function at(a,b){return SE()?a.getAttribute(b)||a[b]:a[b]}function hasClass(a,b){if(!isDom(a))return!1;var c=a.className.split(" "),d=0;for(b=trim(b);d<c.length;d++)if(c[d]==b)return!0;return!1}function formateClassName(a){return replace(a,/[A-Z]/g,function(a){return"-"+toLower(a)})}function createTextNode(a){return doc.createTextNode(a)}function append(a,b){b=muchValue2Qmik(b),likeArray(a)?each(a,function(a,c){append(c,b)}):isDom(a)&&(likeArray(b)?each(b,function(b,c){append(a,c)}):a.appendChild(isDom(b)?b:createTextNode(b)))}function before(a,b){b=muchValue2Qmik(b),likeArray(a)?each(a,function(a,c){before(c,b)}):isDom(a)&&(likeArray(b)?each(b,function(b,c){before(a,c)}):a.parentNode.insertBefore(isDom(b)?b:createTextNode(b),a))}function after(a,b){if(isDom(a)){var c=GN(a);c?before(c,b):append(a.parentNode,b)}else likeArray(a)&&each(a,function(a,c){after(c,b)})}function setValue(a,b,c){return a[b]=c,a}function formateClassNameValue(a,b){for(var c in addUints)if(a.indexOf(addUints[c])>=0){/[^\d\.-]/.test(b)||(b+="px");break}return b}function getStyle(a,b){return a.currentStyle?a.currentStyle[b]:doc.defaultView.getComputedStyle(a,!1)[b]}function css(a,b,c){if(b=isString(b)&&!isNull(c)?setValue({},b,execObject(c)):b,likeArray(a)){if(isString(b))return css(a[0],b);each(a,function(a,c){css(c,b)})}else if(isDom(a)){if(isString(b))return getStyle(a,formateClassName(b));c="",each(b,function(a,b){c+=formateClassName(a)+":"+formateClassNameValue(a,b)+";"}),a.style.cssText+=";"+c}}function attr(a,b,c,d){if(likeArray(a)){if(isString(b)&&isNull(c))return attr(a[0],b,c,d)||"";each(a,function(a,e){attr(e,b,c,d)})}else if(!isNull(a)){if(isString(b)&&isNull(c))return at(a,b);if(isPlainObject(b))each(b,function(b,c){attr(a,b,c,d)});else if(isDom(c))attr(a,b,"",d),Q(a).append(c);else{var c=execObject(c);d||!SE()?a[b]=c:a.setAttribute(b,c)}}}function clone(a,b){if(isDom(a))return Q(a.cloneNode(1==b));var c=[];return each(a,function(a,d){isDom(d)&&c.push(clone(d,b))}),Q(c)}function data(a,b,c){if(likeArray(a))return isString(b)&&isNull(c)?data(a[0],b,c):(each(a,function(a,d){data(d,b,c)}),a);if(!isNull(a)){if(isNull(a[dn])&&(a[dn]={}),isNull(c)&&isString(b))return a[dn][b];isString(b)?a[dn][b]=c:each(b,function(b,c){a[dn][b]=c})}}function GN(a,b){return a?(a="prev"==b?a.previousSibling:a.nextSibling,isDom(a)?a:GN(a,b)):void 0}function uponSelector(a,b,c,d){var e,f,g=Q(a.parentNode).children(b);if("prev"==c)for(e=g.length-1;e>=0;e--)for(f=a;(f=GN(f,c))&&f==g[e];){d.push(f);break}else for(e=0;e<g.length;e++)for(f=a;(f=GN(f,c))&&f==g[e];){d.push(f);break}}function upon(a,b,c){var d=[];return each(a,function(a,e){isNull(b)?d.push(GN(e,c)):uponSelector(e,b,c,d)}),new Query(d,a)}function matchesSelector(a,b){return a?(a._matchesSelector=a.matchesSelector||a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector,a._matchesSelector&&a._matchesSelector(b)):void 0}function parents(a,b,c,d){a=a?trim(a):a;var e=[],f=0;c=0!=c,d=1==d;var g=!isNull(a);return each(b,function(b,h){for(var i,j=h.parentNode;isDom(j)&&(f=0,g?(i=j.parentNode,i&&Q.inArray(j,Q(i).children(a))>-1&&(f=1)):f=1,!f||(e.push(j),c))&&!d;)j&&(j=j.parentNode)}),Q(e)}function getHeight(){return win.innerHeight||screen.availHeight}function getMaxX(){return win.pageXOffset+win.innerWidth+120}function getMaxY(){return win.pageYOffset+getHeight()+120}var win=Q.global,doc=win.document,_in=Q._in,SE=_in.isSE,isNull=Q.isNull,isDom=Q.isDom,each=Q.each,likeArray=Q.likeArray,isArray=Q.isArray,likeNull=Q.likeNull,isString=Q.isString,isFun=Q.isFun,isPlainObject=Q.isPlainObject,trim=Q.trim,toLower=Q.toLower,toUpper=Q.toUpper,replace=function(a,b,c){return a.replace(b,c)},rNode=/^\s*(<.+>.*<\/.+>)+|(<.+\/\s*>)+\s*$/,addUints="height width top right bottom left".split(" ");Q.extend(Query.prototype,{_push:function(a){a&&(this[this.length++]=a)}});var dn="Qmikdata:";Q.init=init;var fn=Q.fn=Query.prototype;fn.extend=function(a){each(a,function(a,b){Query.prototype[a]=b})},fn.extend({last:function(){return Q(this[this.length-1])},eq:function(a){return Q(this[a])},first:function(){return Q(this[0])},filter:function(a){var b=new Query;return each(this,function(c,d){a(c,d)&&b._push(d)}),b},even:function(){return this.filter(function(a){return a%2==0})},odd:function(){return this.filter(function(a){return a%2!=0})},gt:function(a){for(var b=new Query,c=a+1;c<this.length&&c>=0;c++)b._push(this[c]);return b},lt:function(a){for(var b=new Query,c=0;a>c&&c<this.length;c++)b._push(this[c]);return b},find:function(a){return new Query(a,this)},each:function(a){return each(this,a),this},append:function(a){return append(this,a),this},appendTo:function(a){return Q(a).append(this),this},remove:function(){return each(this,function(a,b){isDom(b.parentNode)&&b.parentNode.removeChild(b)}),this},before:function(a){return before(this,a),this},after:function(a){return after(this,a),this},beforeTo:function(a){return before(a,this),this},afterTo:function(a){return after(a,this),this},html:function(v){var me=this;return arguments.length<1?attr(me,"innerHTML"):(attr(me,"innerHTML",isQmik(v)?v.html():v,!0),Q("script",me).each(function(i,dom){likeNull(dom.text)||eval(dom.text)}),this)},empty:function(){return this.html("")},text:function(a){var b=attr(this,"innerText",isQmik(a)?a.text():a,!0);return isNull(a)?b:this},addClass:function(a){return each(this,function(b,c){isDom(c)&&!hasClass(c,a)&&(c.className+=" "+trim(execObject(a)))}),this},rmClass:function(a){var b=new RegExp(replace(execObject(a),/\s+/g,"|"),"g");return each(this,function(a,c){c.className=replace(trim(replace(c.className,b,"")),/[\s]+/g," ")}),this},show:function(){return css(this,"display","block"),this},hide:function(){return css(this,"display","none"),this},inViewport:function(){var a=this,b=a.offset(),c=!1;if(b){var d=b.top,e=b.left,f=d+a.height(),g=e+a.width(),h=win.pageXOffset,i=getMaxX(),j=win.pageYOffset,k=getMaxY();j=0>j?0:j,c=d>=0&&k>=d&&f>=j,c=c&&e>=0&&i>=e&&g>=h}return c},animate:function(a,b,c,d){var e=this,f={transition:0},g=Q.extend({},f);return each(a,function(a){g[a]=parseFloat(css(e,a))||0}),css(e,g),Q.delay(function(){function c(a){css(e,f),d&&d(a)}a.transition=" ease-in-out "+(b||1)+"ms",css(e,Q.cssPrefix(a)),e.once({webkitTransitionEnd:c,msTransitionEnd:c,oTransitionEnd:c,transitionend:c})},10),e},toggle:function(){return each(this,function(a,b){"none"==css(b,"display")?Q(b).show():Q(b).hide()}),this},map:function(a){return Q.map(this,a)},css:function(a,b){var c=css(this,a,b);return isPlainObject(a)||isString(a)&&!isNull(b)?this:c},attr:function(a,b){var c=attr(this,a,b);return arguments.length>1||isPlainObject(a)?this:c},rmAttr:function(a){each(this,function(b,c){isDom(c)&&c.removeAttribute(a)})},data:function(a,b){return data(this,a,b)},rmData:function(a){each(this,function(b,c){c.$Qmikdata&&delete c.$Qmikdata[a]})},val:function(a){var b=this;return isNull(a)?b.attr("value")||"":(each(b,function(b,c){c.value=execObject(a)}),b.emit("change"),b)},next:function(a){return upon(this,a,"next")},prev:function(a){return upon(this,a,"prev")},clone:function(a){return clone(this,a)},hasClass:function(a){return hasClass(this[0],a)},closest:function(a){var b=this,c=new Query;return b.each(function(b,d){Q(a,d.parentNode).each(function(a,b){d===b&&c._push(d)})}),c.length>0?c:parents(a,b,!1)},parents:function(a){return parents(a,this,!0)},parent:function(a){return parents(a,this,!0,!0)},children:function(a){var b=new Query,c=this,d=isNull(a);return c.each(function(c,e){for(var f,g=e.children||e.childNodes,h=0;h<g.length;)f=g[h++],isDom(f)&&(d||matchesSelector(f,a))&&b._push(f)}),b}}),fn.extend({removeClass:fn.rmClass,removeData:fn.rmData,removeAttr:fn.rmAttr}),Q.isQmik=isQmik}(Qmik),function(a){function b(a,b){a.onreadystatechange=a.onload=a.onDOMContentLoaded=b}function c(b,c,d,e){var g=a(b),h=g.data(q)||{},i=h[c];g.data(q,h),i||(h[c]=i=[],s(b["on"+c])&&(i.push({fun:b["on"+c],param:[]}),v(b,"on"+c)),o()?b.addEventListener(c,f,!1):b["on"+c]=f),s(d)&&i.push({fun:d,param:e||[]})}function d(b,c,d){var e=a(b).data(q)||{},g=e[c]||[],h=g.length-1;if(d)for(;h>=0;h--)g[h].fun==d&&g.splice(h,1);else o()?b.removeEventListener(c,f,!1):v(b,"on"+c),v(e,c)}function e(a,b){var c;o()?(c=n.createEvent("MouseEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c)):a.fireEvent("on"+b)}function f(b){b=g(b||k.event);var c,d,e,f=this,h=a(f).data(q)||{};t(h[b.type],function(g,h){a.execCatch(function(){d=h.fun,e=h.param||[],s(d)&&(c=d.apply(f,[b].concat(e)),r(c)||(b.returnValue=c,k.event&&(k.event.returnValue=c)))})})}function g(a){return a.preventDefault||(a.preventDefault=function(){this.returnValue=!1,k.event&&(k.event.returnValue=!1)}),a.stopPropagation||(a.stopPropagation=function(){this.cancelBubble=!0}),a.target||(a.target=a.srcElement),a}function h(a,b){return a+(b||"").toString()}function i(a,b,c){var d={};return u(a)?d=a:d[a]=b,c&&t(d,c),d}function j(b,c){return a.isDom(c)&&(b===c||b===c.parentNode?!0:j(b,c.parentNode))}var k=a.global,l=k.document,m=a.fn,n=a._in,o=n.isSE,p=/complete|loaded|interactive|loading/i,q="QEvents",r=a.isNull,s=a.isFun,t=a.each,u=a.isPlainObject,v=n._delete;a.ready=m.ready=function(c,d){function e(c){f=g.readyState,"loading"!=f&&!r(g.$$handls)&&(p.test(f)||r(f)&&"load"==c.type)&&(b(g,null),t(g.$$handls,function(b,c){c(a)}),v(g,"$$handls"))}var f,g=d||this[0]||l;if(p.test(g.readyState))a.delay(function(){c.call(g,a)},1);else{var h=g.$$handls=g.$$handls||[];h.push(c),b(g,e)}return this},m.extend({on:function(a,b){return t(this,function(d,e){i(a,b,function(a,b){c(e,a,b)})}),this},off:function(a,b){return t(this,function(c,e){d(e,a,b)}),this},once:function(a,b){var c=this,d={};return i(a,b,function(a,b){d[a]=function(e){c.off(a,d[a]),b(e)}}),c.on(d)},emit:function(a){return t(this,function(b,c){e(c,a)}),this},live:function(b,c){var d=this;return i(b,c,function(b,c){var e=d.__lives[h(b,c)]=function(b){var e=b.target,f=(a(e),a.isString(d.selector)?a(d.selector,d.context):d);t(f,function(a,d){j(d,e)&&c.call(e,b)})};a("body").on(b,e)}),d},die:function(a,b){var c=this,e=c.__lives[h(a,b)];return(arguments.length<2||e)&&d(l.body,a,e),c}}),m.extend({bind:m.on,unbind:m.off,trigger:m.emit}),t("click blur focus scroll resize".split(" "),function(a,b){m[b]=function(a){return a?this.on(b,a):this.emit(b)}})}(Qmik),function(a){function b(a,b){var c=a.length;0==c?b():function d(f,g){e(a[f],function(a,e){a?b(a):f==c-1?b(a,e):d(f+1,e)},g)}(0,null)}function c(a,b){var c=a.length;0==c?b():function d(e){f(a[e],function(){e==c-1?b():d(e+1)})}(0)}function d(b,d){var e=b.length,f=(new Array(e),parseInt((e-1)/h)+1),g=new Array(e>h?h:e);a.each(g,function(a){g[a]=b.slice(a*f,(a+1)*f)});var i=0;a.each(g,function(a,b){c(b,function(){i++,i==g.length&&d()})})}function e(a,b,c){g(a,[b,c],b)}function f(a,b){g(a,[b],b)}var g=a.execCatch,h=3,i={};i.series=function(c,d){b(c,function(b,c){b&&a.log(b,b.stack),g(d,[b,c])})},i.parallel=function(a,b){d(a,function(){g(b)})},a.task=i,a.series=i.series,a.parallel=i.parallel}(Qmik),function(a){function b(b,c,d){a.extend(this,{id:b,url:b,dependencies:c,factory:d,state:3,type:a.inArray(b,z.preload)>=0?2:1,exports:{}})}function c(b){var c=[];return a.each(b.replace(/(\/\/[^\n]*)|(\/\*[^\n]*\*\/)|(["'][^"'\n]*["'])/g,function(a){return/[\(\)\*]/.test(a)?"":a}).replace(/\/\*.*\*\//g,"").split(/\*\//),function(a,b){c.push(b.replace(/\/\*[\s\S]+/,""))}),c.join("")}function d(b){b=c(b.toString());var d=b.replace(/^\s*function\s*\w*\s*/,"").match(/^\([\w ,]*\)/)[0].replace("(","").replace(")",""),e=[],f=d.indexOf(","),g=d.substring(0,f>0?f:d.length),h=new RegExp(g+"s*[(]s*[\"']([^\"')]+)[\"']s*[)]","g");return g&&(e=a.map(b.match(h),function(a,b){return b.replace(new RegExp("^"+g+"s*[(]s*[\"']"),"").replace(/\s*[\"']\s*[)]$/,"")})),e}function e(a){var b=this;b._deal=a,b.l=b.p=0,b.state=1,b.deal()}function f(a){var b=g(a);return b?b.exports:y}function g(a){return A[a]||A[k(o(a))]}function h(b,c,d,e){var f=[],g=[];a.each(c,function(a,b){f.push(function(a){i(b,function(b,c){g.push(b),a(c)},d)})}),a.series(f,function(a){w(function(){a||b&&b.apply(b,g)}),e&&e()})}function i(a,b,c){var d=g(a);d?m(d,f,b,c):n(a,function(){d=g(a),d?m(d,f,b,c):j(a,b)},function(){j(a,b)})}function j(a,b){b(y,new Error("load module is error "+a))}function k(a){return a.replace(/[\?#].*$/g,"")}function l(b){return b.isMake||(b.isMake=!0,exports=b.factory(f,b.exports,b),a.isNull(exports)||(b.exports=exports)),b.exports}function m(a,b,c,d){switch(a.state){case 1:c(a.exports);break;case 2:d&&c(l(a));break;case 3:a.state=2,h(function(){a.state=1,c(l(a))},a.dependencies,a)}}function n(b,c,d){u=o(b),/\/.+\.css(\?.*)?$/i.test(b)?a.getCss(b,d,d):a.getScript(u,c,d)}function o(a){var b=q(a);return b==a?a:(b=r(b),p(b))}function p(b){return a.url(/\?/.test(b)||/\.(css|js)$/.test(b)?b:b+".js")}function q(a){return z.alias[a]||a}function r(a){return a.replace(/\$\{[0-9a-zA-Z._-]+\}/g,function(a){var b=z.vars[a.substring(2,a.length-1).trim()]||a;return v(b)?b():b})}function s(a){if(/[\)\(\*]/.test(a))throw new Error("define id:"+a+" is Illegal,not contain )(*")}function t(a,c,d,e){return s(a),s(c),A[a]=A[c]=new b(a,d,e)}var u,v=a.isFun,w=a.execCatch,x=a.global,y=null,z={alias:{},vars:{},preload:[]},A={},B=!1,C={};a.extend(e.prototype,{pause:function(){return this.state=2,this},size:function(){return this.l-this.p},push:function(a){this[this.l++]=a},pop:function(){var a=this,b=a[a.p];return delete a[a.p++],b},deal:function(){var a=this;return 1==a.state&&a.size()>0&&a._deal(a.pause().pop(),function(){a.state=1,a.deal()}),a}});var D=new e(function(a,b){var c=a.callback;h(c,a.ids,y,b)});a.extend(C,{use:function(b,c){a.delay(function(){b=a.isArray(b)?b:[b],B||(D.push({ids:z.preload}),B=!0);var d=[];a.each(b,function(a,b){var c=g(b)||{};1==c.state&&d.push(f(b))}),d.length==b.length?c&&c.apply(c,d):D.push({ids:b,callback:c}),D.deal()},1)},define:function(b,c,e){var f;u&&(f=u),(v(b)||a.isArray(b))&&(e=c,c=b,b=""),v(c)&&(e=c,c=[]),c=c.concat(d(e)),c=a.unique(c),t(b,k(f||b),c,e),u=y},config:function(b){return a.config(b,z)},modules:function(){return a.extend({},A)}}),a.sun=C,a.define=a.sun.define,x.define=x.define||a.define,a.use=a.sun.use}(Qmik),function(a){function b(){return!f.XMLHttpRequest||"file:"===f.location.protocol&&f.ActiveXObject?new f.ActiveXObject("Microsoft.XMLHTTP"):new f.XMLHttpRequest}function c(b,c,d){function e(){1==m&&(m=0,i(f,p),a("script[jsonp='"+p+"']").remove(),d&&d())}var g,h=b.timeout,m=1,n=b.url,o=a.param(b.data),p=l+k++,q=n.match(j);/\?/.test(n)||(n+="?"),q?(q=q[0].split("=")[0],n=n.replace(j,q+"="+p)):n+="&callback="+p,n+="&"+o,f[p]=function(b){i(f,p),a("script[jsonp='"+p+"']").remove(),g&&g.stop(),1==m&&c&&c(b)},a(a.getScript(n,null,e)).attr("jsonp",p),h>0&&(g=a.delay(e,h))}function d(d){var e,f=a.extend({},m,d),h=f.dataType,i=f.timeout,j=b(),k=a.url(f.url),l="GET"==a.toUpper(f.type),n=f.success,o=f.error,p=a.param(d.data);return"jsonp"==h?void c(f,n,o):(j.onreadystatechange=function(){4==j.readyState&&(200==j.status?(e&&e.stop(),n&&n("xml"==h?j.responseXML:"json"==h?g(j.responseText):j.responseText)):o&&o())},l&&(k+=(/\?/.test(k)?"&":"?")+p),j.open(f.type,k,f.async),j.setRequestHeader("Cache-Control","no-cache"),j.setRequestHeader("X-Requested-With","XMLHttpRequest"),!l&&j.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),j.send(l?null:p),void(i>0&&(e=a.delay(function(){j.abort(),o&&o(j.xhr,j.type)},i))))}function e(a,b,c,e,f){h(b)&&(e=c,c=b,b=null),d({url:a,data:b,success:c,dataType:e,type:f})}var f=a.global,g=a.parseJSON,h=a.isFun,i=a._in._delete,j=/[\w\d_$-]+\s*=\s*\?/,k=1,l="qjsonp",m={type:"GET",async:!0,dataType:"text"};a.extend({ajax:d,get:e,getJSON:function(a,b,c){h(b)&&(c=b,b={}),e(a,b,c,"json")},post:function(a,b,c,d){h(b)&&(d=c,c=b,b={}),e(a,b,c,d,"post")}})}(Qmik),function(a){function b(a){return a.offsetParent?a.offsetLeft+b(a.offsetParent):a.offsetLeft}function c(a){return a.offsetParent?a.offsetTop+c(a.offsetParent):a.offsetTop}function d(a){return a.parentNode==a.offsetParent?a.offsetLeft:b(a)-b(a.parentNode)}function e(a){return a.parentNode==a.offsetParent?a.offsetTop:c(a)-c(a.parentNode)}var f=a.global,g=(f.document,a.isNull,a.isDom);a.fn.extend({width:function(){var a=this[0];return g(a)?a.offsetWidth:screen.availWidth},height:function(){var a=this[0];return g(a)?a.offsetHeight:screen.availHeight},offset:function(){if(!this[0])return null;var a=this[0].getBoundingClientRect();return{left:a.left+f.pageXOffset,top:a.top+f.pageYOffset}},position:function(){var a=this[0];return a?{left:d(a),top:e(a)}:null}})}(Qmik),function(a){function b(){var b=a.now();if(!(S>b-U)){U=b;var c=C({},T);D(c,function(b,c){var d=c.scope.context,e=a(d);e.inViewport()&&(delete T[b],a.delay(function(){F(c.callback),e.emit("viewport")},Math.random(100)))})}}function c(){a(z).emit("scroll")}function d(a,b,c){var d=a.target,e=c?a.name:d.name||"",b=t(d)[M]||b;if(e&&(k(d)||c)){q(b,e,c?a.value:l(d));var f=r(b,e);h(b,e),D(j(b[N],e),function(a,c){F(c,[{name:e,value:f,source:b[p(e)[0]],target:d}])}),w(e,b)}}function e(b){var c=this;a(function(){c.__init(b)})}function f(b,c){var d=this;d[N]={},d[P]=b=b||a(O)[0],d.scopes=H,d.__name=a(b).attr("q-ctrl")||"root",d[R]={},d.__cmd={},d[Q]={},H[d.__name]=d,b[M]=d,d[K]=c,$("input,select,textarea",b).each(function(c,e){var f=a(e).closest("[q-ctrl]")[0];(A(f)||f==b)&&g(e,d)})}function g(b,c){var d=b.name,e=!0;if(k(b)&&d){if(/^__/.test(d)||new RegExp(d).test(J))return a.error("set scope["+c.__name+"] name["+d+"] is illegal");"root"==c.__name&&a(b).parents("[q-ctrl]").length>0&&(e=!1),e&&(q(c,d,l(b)),c[Q][d]=b,h(c,d))}}function h(a,b){if("root"==a.__name){var c=p(b)[0];f.prototype[c]=a[c]}}function i(a,b){if(a.length<1)return[];for(var c,d=a.concat(b||[]).sort(),e=[],f=0;f<d.length;f++){for(c=f+1;c<d.length;c++)new RegExp("^"+d[f]).test(d[c])&&(d.splice(c,1),c--);e[f]=d[f]}return e}function j(a,b){if(""!=b){for(var c=[],d=0,e=p(b).length;e>d;d++){var f=a[b];f&&(c=f.concat(c)),b=b.replace(/\.?[^\.]*$/,"")}return c}}function k(a){var b=a?a.tagName:"";return"INPUT"==b||"SELECT"==b||"TEXTAREA"==b}function l(b){var c=(b.name,b.type),d=[];return"radio"==c?d[0]=b.checked?b.value:"":"checkbox"==c?a("input[name='"+b.name+"']",t(b)).each(function(a,b){b.checked&&d.push(b.value)}):"select-multiple"==c?D(b.options,function(a,b){b&&b.selected&&d.push(b.value)}):d.push(b.value),d.join("&")}function m(b,c,d){a("[q-ctrl]").css("visibility","visible"),y(b,c,d,n)}function n(a,b,c){a&&a!=z&&D(a.childNodes,function(a,d){y(d,b,c,n)})}function o(a){return(a||"").replace(W,"")}function p(a){return a.split(".")}function q(b,c,d){var e=a.isArray(c)?c:p(c),f=e[0];return e.length<2?(A(d)||(b[f]=A(d)?A(b[f])?"":b[f]:d),b[f]):(b[f]=b[f]||{},e.shift(),q(b[f],e,d))}function r(a,b){var c=q(s(a,b),b);return A(c)?"":c}function s(a,b){var c=p(b)[0];return A(a[c])&&a[K]&&!A(a[K][c])?a[K]:a}function t(b){return a(b).closest("[q-ctrl],"+O)[0]}function u(a,b,c){a=s(a,b),a&&v(a,b,c)}function v(a,b,c){for(var d=[],e=0,f=p(b).length;f>e;e++){var g=a[R][b]=a[R][b]||[];g.indexOf(c)<0&&g.push(c),b=b.replace(/\.?[^\.]*$/,"")}return d}function w(a,b){D(b[R][a],function(a,c){y(c,b)})}function x(a){var b=t(a);return b?a[L]||{attr:{},vars:[],ctrl:b,event:{},fors:{},scope:b[M]}:void 0}function y(b,c,d,e){var g=x(b);if(g){switch(b.nodeType){case 1:D(b.attributes,function(e,h){var i=h.name,j=g.attr[i]=g.attr[i]||(h.value||"").trim();if("q-ctrl"===i)""!=j&&(H[j]?c=H[j]:(c=new f(b,c.parent||c),F(function(){a.isFun(G[j])?G[j](c):a.warn("q-ctrl:["+j+"]is not define")})));else if("q-for"===i){var k=j.replace(/(\s){2,}/g," ").split(" "),l=g.html=g.html||b.innerHTML,m=[],p=r(c,k[2])||[],s=0,t=0,v=parseInt(I.section)||24;3==k.length&&"in"==k[1]?(a(b).html(""),g.fors[b]&&g.fors[b].stop(),g.fors[b]=a.cycle(function(){return s>=p.length?g.fors[b].stop():(m=[],D(p.slice(s,s+v),function(a,b){b.index=t++ +1;var c=l.replace(V,function(a){var c=new RegExp("^"+k[0]+"."),d=o(a).replace(c,""),e=q(b,d);return e||""});c=c.replace(X,"&lt;script"),m.push(c)}),s+=v,b.innerHTML+=m.join(""),void n(b,c,d))},50),b[L]=g,d&&u(c,k[2],b)):a.warn("q-for[",j,"] is error")}else if(/^q-on/.test(i)){var w=i.replace(/^q-on/,""),x=j.replace(/\(.*\)$/,"");if(!g.event[w]){g.event[w]=!0;var y=function(d){return a.contains(c[P],b)?void(a.contains(b,d.target)&&c[x]&&c[x](d)):a(c[P]).off(w,y)};a(c[P]).on(w,y)}}else V.test(j)&&(h.value=j.replace(V,function(a){b[L]=g,a=o(a),g.vars.push(a);var e=r(c,a);return d&&u(c,a,b),e}))});break;case 3:var h=g.text;h=A(h)?b.textContent:h,V.test(h)&&(b[L]=g,g.text=h,b.textContent=h.replace(V,function(a){a=o(a),g.vars.push(a);var e=r(c,a),f=c[Q][a];return d&&u(c,a,b),f&&k(f)&&f.value!=e&&"checkbox"!=f.type&&"select-multiple"!=f.type&&(c[Q][a].value=e),e}))}g.scope=c,e&&e(b,c,d)}}var z=a.global,A=a.isNull,B=a.isPlainObject,C=a.extend,D=a.each,E=a.delay,F=a.execCatch,G={},H={},I={section:24},J="scopes context parent get set on off once app watch apply $",K="parent",L="qmik-mvc-space",M="qmik-mvc-space-scope",N="__watchs",O="html",P="context",Q="__input",R="__map",S=30,T={},U=a.now();a(z).on({scroll:b,touchstart:b,touchmove:b}),C(e.prototype,{__init:function(b){function e(a){var b=a.target,c=b.name,d=k(b),e=x(b);if(e){var f=e.scope;D(e.vars,function(a,e){var g=[];d&&c==e||(D(f[R][e],function(a,c){c!=b&&g.push(c)}),f[R][e]=g)}),d&&delete f[Q][c]}}function h(a){d(a,j)}var i=this,j=new f,l=a(O)[0];i.scope=j,l[L]=x(l),b&&b(j),m(l,j,!0),c(),a("body").on({change:h,keyup:h}),a(z).on({DOMNodeInserted:function(a){var b=a.target,c=x(b);c&&(g(b,c.scope),m(b,c.scope))},DOMNodeRemoved:e})},config:function(a){return C(I,a),this},ctrl:function(a,b){return arguments.length<1?G:(B(a)?C(G,a):G[a]=b,this)}}),C(f.prototype,{watch:function(a,b){var c=this,d={};return B(a)?d=a:d[a]=b,D(d,function(a,b){c[N][a]=c[N][a]||[],c[N][a].push(b)}),c},$:function(b){return a(b,this[P])},on:function(b,c){a(this[P]).on(b,c)},off:function(b,c){a(this[P]).off(b,c)},once:function(b,c){a(this[P]).once(b,c)},apply:function(b,e){var f=this;a.isFun(b)?(e=b,b=[]):b=a.isArray(b)?b:a.isString(b)?[b]:[],b=i(b,(T[f.__name]||{}).names),T[f.__name]={scope:f,names:b,callback:function(){function c(b,c){var e,g=a.likeArray(b);D(b,function(a,b){e=g?b:a,d({target:f[P],name:e,value:f[e]},f,!0),c&&c(e,f)})}b.length>0?c(b,w):(c(f[N]),m(f[P],f)),a.isFun(e)&&e()}},E(c,S+10)}});var V=/(\$\{\s*[\w\._-]*\s*\})|(\{\{\s*[\w\._-]*\s*\}\})/g,W=/\s*((^(\$|\{)\{)|(\}?\}$))\s*/g,X=/<\s*script/g;V.compile(V),W.compile(W),X.compile(X);var Y;a.app=function(b){return Y&&Y.scope&&b&&a(function(){F(b,[Y.scope])}),Y=Y||new e(b)}}(Qmik);