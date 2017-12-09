<<<<<<< HEAD
!function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="./",r(r.s=0)}([function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(1),o=e.n(n),c=e(2);e.n(c);const i=document.getElementById("app"),u=o.a.Main.embed(i,JSON.parse(localStorage.getItem("access_token")));u.ports.put.subscribe(function(t){localStorage.setItem("access_token",JSON.stringify(t)),u.ports.get.send(JSON.parse(localStorage.getItem("access_token")))})},function(t,r){(function(){"use strict";function r(t){function r(r){return function(e){return t(r,e)}}return r.arity=2,r.func=t,r}function e(t){function r(r){return function(e){return function(n){return t(r,e,n)}}}return r.arity=3,r.func=t,r}function n(t){function r(r){return function(e){return function(n){return function(o){return t(r,e,n,o)}}}}return r.arity=4,r.func=t,r}function o(t){function r(r){return function(e){return function(n){return function(o){return function(c){return t(r,e,n,o,c)}}}}}return r.arity=5,r.func=t,r}function c(t){function r(r){return function(e){return function(n){return function(o){return function(c){return function(i){return t(r,e,n,o,c,i)}}}}}}return r.arity=6,r.func=t,r}function i(t){function r(r){return function(e){return function(n){return function(o){return function(c){return function(i){return function(u){return t(r,e,n,o,c,i,u)}}}}}}}return r.arity=7,r.func=t,r}function u(t){function r(r){return function(e){return function(n){return function(o){return function(c){return function(i){return function(u){return function(a){return t(r,e,n,o,c,i,u,a)}}}}}}}}return r.arity=8,r.func=t,r}function a(t){function r(r){return function(e){return function(n){return function(o){return function(c){return function(i){return function(u){return function(a){return function(_){return t(r,e,n,o,c,i,u,a,_)}}}}}}}}}return r.arity=9,r.func=t,r}function _(t,r,e){return 2===t.arity?t.func(r,e):t(r)(e)}function s(t,r,e,n){return 3===t.arity?t.func(r,e,n):t(r)(e)(n)}function l(t,r,e,n,o){return 4===t.arity?t.func(r,e,n,o):t(r)(e)(n)(o)}function f(t,r,e,n,o,c){return 5===t.arity?t.func(r,e,n,o,c):t(r)(e)(n)(o)(c)}function d(t,r,e,n,o,c,i){return 6===t.arity?t.func(r,e,n,o,c,i):t(r)(e)(n)(o)(c)(i)}function p(t,r,e,n,o,c,i,u,a,_){return 9===t.arity?t.func(r,e,n,o,c,i,u,a,_):t(r)(e)(n)(o)(c)(i)(u)(a)(_)}var h=function(){function t(t,r){if(t<0||t>=F(r))throw new Error("Index "+t+" is out of range. Check the length of your array first or use getMaybe or getWithDefault.");return n(t,r)}function n(t,r){for(var e=r.height;e>0;e--){for(var n=t>>5*e;r.lengths[n]<=t;)n++;n>0&&(t-=r.lengths[n-1]),r=r.table[n]}return r.table[t]}function o(t,r,e){return t<0||F(e)<=t?e:c(t,r,e)}function c(t,r,e){if(e=P(e),0===e.height)e.table[t]=r;else{var n=q(t,e);n>0&&(t-=e.lengths[n-1]),e.table[n]=c(t,r,e.table[n])}return e}function i(t,r){return t<=0?V:u(r,Math.floor(Math.log(t)/Math.log(H)),0,t)}function u(t,r,e,n){if(0===r){for(var o=new Array((n-e)%(H+1)),c=0;c<o.length;c++)o[c]=t(e+c);return{ctor:"_Array",height:0,table:o}}for(var i=Math.pow(H,r),o=new Array(Math.ceil((n-e)/i)),a=new Array(o.length),c=0;c<o.length;c++)o[c]=u(t,r-1,e+c*i,Math.min(e+(c+1)*i,n)),a[c]=F(o[c])+(c>0?a[c-1]:0);return{ctor:"_Array",height:r,table:o,lengths:a}}function a(t){if("[]"===t.ctor)return V;for(var r=new Array(H),e=[],n=0;"[]"!==t.ctor;)if(r[n]=t._0,t=t._1,++n===H){var o={ctor:"_Array",height:0,table:r};s(o,e),r=new Array(H),n=0}if(n>0){var o={ctor:"_Array",height:0,table:r.splice(0,n)};s(o,e)}for(var c=0;c<e.length-1;c++)e[c].table.length>0&&s(e[c],e);var i=e[e.length-1];return i.height>0&&1===i.table.length?i.table[0]:i}function s(t,r){var e=t.height;if(r.length===e){var n={ctor:"_Array",height:e+1,table:[],lengths:[]};r.push(n)}r[e].table.push(t);var o=F(t);r[e].lengths.length>0&&(o+=r[e].lengths[r[e].lengths.length-1]),r[e].lengths.push(o),r[e].table.length===H&&(s(r[e],r),r[e]={ctor:"_Array",height:e+1,table:[],lengths:[]})}function l(t,r){var e=f(t,r);return null!==e?e:$(r,U(t,r.height))}function f(t,r){if(0===r.height){if(r.table.length<H){var e={ctor:"_Array",height:0,table:r.table.slice()};return e.table.push(t),e}return null}var n=f(t,M(r));if(null!==n){var e=P(r);return e.table[e.table.length-1]=n,e.lengths[e.lengths.length-1]++,e}if(r.table.length<H){var o=U(t,r.height-1),e=P(r);return e.table.push(o),e.lengths.push(e.lengths[e.lengths.length-1]+F(o)),e}return null}function d(t){return p(L.Nil,t)}function p(t,r){for(var e=r.table.length-1;e>=0;e--)t=0===r.height?L.Cons(r.table[e],t):p(t,r.table[e]);return t}function h(t,r){var e={ctor:"_Array",height:r.height,table:new Array(r.table.length)};r.height>0&&(e.lengths=r.lengths);for(var n=0;n<r.table.length;n++)e.table[n]=0===r.height?t(r.table[n]):h(t,r.table[n]);return e}function g(t,r){return v(t,r,0)}function v(t,r,e){var n={ctor:"_Array",height:r.height,table:new Array(r.table.length)};r.height>0&&(n.lengths=r.lengths);for(var o=0;o<r.table.length;o++)n.table[o]=0===r.height?_(t,e+o,r.table[o]):v(t,r.table[o],0==o?e:e+r.lengths[o-1]);return n}function m(t,r,e){if(0===e.height)for(var n=0;n<e.table.length;n++)r=_(t,e.table[n],r);else for(var n=0;n<e.table.length;n++)r=m(t,r,e.table[n]);return r}function b(t,r,e){if(0===e.height)for(var n=e.table.length;n--;)r=_(t,e.table[n],r);else for(var n=e.table.length;n--;)r=b(t,r,e.table[n]);return r}function k(t,r,e){return t<0&&(t+=F(e)),r<0&&(r+=F(e)),w(t,y(r,e))}function y(t,r){if(t===F(r))return r;if(0===r.height){var e={ctor:"_Array",height:0};return e.table=r.table.slice(0,t),e}var n=q(t,r),o=y(t-(n>0?r.lengths[n-1]:0),r.table[n]);if(0===n)return o;var e={ctor:"_Array",height:r.height,table:r.table.slice(0,n),lengths:r.lengths.slice(0,n)};return o.table.length>0&&(e.table[n]=o,e.lengths[n]=F(o)+(n>0?e.lengths[n-1]:0)),e}function w(t,r){if(0===t)return r;if(0===r.height){var e={ctor:"_Array",height:0};return e.table=r.table.slice(t,r.table.length+1),e}var n=q(t,r),o=w(t-(n>0?r.lengths[n-1]:0),r.table[n]);if(n===r.table.length-1)return o;var e={ctor:"_Array",height:r.height,table:r.table.slice(n,r.table.length+1),lengths:new Array(r.table.length-n)};e.table[0]=o;for(var c=0,i=0;i<e.table.length;i++)c+=F(e.table[i]),e.lengths[i]=c;return e}function T(t,r){if(0===t.table.length)return r;if(0===r.table.length)return t;var e=x(t,r);if(e[0].table.length+e[1].table.length<=H){if(0===e[0].table.length)return e[1];if(0===e[1].table.length)return e[0];if(e[0].table=e[0].table.concat(e[1].table),e[0].height>0){for(var n=F(e[0]),o=0;o<e[1].lengths.length;o++)e[1].lengths[o]+=n;e[0].lengths=e[0].lengths.concat(e[1].lengths)}return e[0]}if(e[0].height>0){var c=R(t,r);c>Q&&(e=O(e[0],e[1],c))}return $(e[0],e[1])}function x(t,r){if(0===t.height&&0===r.height)return[t,r];if(1!==t.height||1!==r.height)if(t.height===r.height){t=P(t),r=P(r);var e=x(M(t),I(r));B(t,e[1]),N(r,e[0])}else if(t.height>r.height){t=P(t);var e=x(M(t),r);B(t,e[0]),r=J(e[1],e[1].height+1)}else{r=P(r);var e=x(t,I(r)),n=0===e[0].table.length?0:1,o=0===n?1:0;N(r,e[n]),t=J(e[o],e[o].height+1)}if(0===t.table.length||0===r.table.length)return[t,r];var c=R(t,r);return c<=Q?[t,r]:O(t,r,c)}function B(t,r){var e=t.table.length-1;t.table[e]=r,t.lengths[e]=F(r),t.lengths[e]+=e>0?t.lengths[e-1]:0}function N(t,r){if(r.table.length>0){t.table[0]=r,t.lengths[0]=F(r);for(var e=F(t.table[0]),n=1;n<t.lengths.length;n++)e+=F(t.table[n]),t.lengths[n]=e}else{t.table.shift();for(var n=1;n<t.lengths.length;n++)t.lengths[n]=t.lengths[n]-t.lengths[0];t.lengths.shift()}}function R(t,r){for(var e=0,n=0;n<t.table.length;n++)e+=t.table[n].table.length;for(var n=0;n<r.table.length;n++)e+=r.table[n].table.length;return t.table.length+r.table.length-(Math.floor((e-1)/H)+1)}function S(t,r,e){return e<t.length?t[e]:r[e-t.length]}function E(t,r,e,n){e<t.length?t[e]=n:r[e-t.length]=n}function A(t,r,e,n){E(t.table,r.table,e,n);var o=0===e||e===t.lengths.length?0:S(t.lengths,t.lengths,e-1);E(t.lengths,r.lengths,e,o+F(n))}function C(t,r){r<0&&(r=0);var e={ctor:"_Array",height:t,table:new Array(r)};return t>0&&(e.lengths=new Array(r)),e}function O(t,r,e){for(var n=C(t.height,Math.min(H,t.table.length+r.table.length-e)),o=C(t.height,n.table.length-(t.table.length+r.table.length-e)),c=0;S(t.table,r.table,c).table.length%H==0;)E(n.table,o.table,c,S(t.table,r.table,c)),E(n.lengths,o.lengths,c,S(t.lengths,r.lengths,c)),c++;for(var i=c,u=new C(t.height-1,0),a=0;c-i-(u.table.length>0?1:0)<e;){var _=S(t.table,r.table,c),s=Math.min(H-u.table.length,_.table.length);if(u.table=u.table.concat(_.table.slice(a,s)),u.height>0)for(var l=u.lengths.length,f=l;f<l+s-a;f++)u.lengths[f]=F(u.table[f]),u.lengths[f]+=f>0?u.lengths[f-1]:0;a+=s,_.table.length<=s&&(c++,a=0),u.table.length===H&&(A(n,o,i,u),u=C(t.height-1,0),i++)}for(u.table.length>0&&(A(n,o,i,u),i++);c<t.table.length+r.table.length;)A(n,o,i,S(t.table,r.table,c)),c++,i++;return[n,o]}function M(t){return t.table[t.table.length-1]}function I(t){return t.table[0]}function P(t){var r={ctor:"_Array",height:t.height,table:t.table.slice()};return t.height>0&&(r.lengths=t.lengths.slice()),r}function F(t){return 0===t.height?t.table.length:t.lengths[t.lengths.length-1]}function q(t,r){for(var e=t>>5*r.height;r.lengths[e]<=t;)e++;return e}function U(t,r){return 0===r?{ctor:"_Array",height:0,table:[t]}:{ctor:"_Array",height:r,table:[U(t,r-1)],lengths:[1]}}function J(t,r){return r===t.height?t:{ctor:"_Array",height:r,table:[J(t,r-1)],lengths:[F(t)]}}function $(t,r){return{ctor:"_Array",height:t.height+1,table:[t,r],lengths:[F(t),F(t)+F(r)]}}function D(t){var r=new Array(F(t));return j(r,0,t),r}function j(t,r,e){for(var n=0;n<e.table.length;n++)if(0===e.height)t[r+n]=e.table[n];else{var o=0===n?0:e.lengths[n-1];j(t,r+o,e.table[n])}}function z(t){return 0===t.length?V:W(t,Math.floor(Math.log(t.length)/Math.log(H)),0,t.length)}function W(t,r,e,n){if(0===r)return{ctor:"_Array",height:0,table:t.slice(e,n)};for(var o=Math.pow(H,r),c=new Array(Math.ceil((n-e)/o)),i=new Array(c.length),u=0;u<c.length;u++)c[u]=W(t,r-1,e+u*o,Math.min(e+(u+1)*o,n)),i[u]=F(c[u])+(u>0?i[u-1]:0);return{ctor:"_Array",height:r,table:c,lengths:i}}var H=32,Q=2,V={ctor:"_Array",height:0,table:[]};return{empty:V,fromList:a,toList:d,initialize:r(i),append:r(T),push:r(l),slice:e(k),get:r(t),set:e(o),map:r(h),indexedMap:r(g),foldl:e(m),foldr:e(b),length:F,toJSArray:D,fromJSArray:z}}(),g=function(){function t(t,r){return t/r|0}function n(t,r){return t%r}function o(t,r){if(0===r)throw new Error("Cannot perform mod 0. Division by zero error.");var e=t%r,n=0===t?0:r>0?t>=0?e:e+r:-o(-t,-r);return n===r?0:n}function c(t,r){return Math.log(r)/Math.log(t)}function i(t){return-t}function u(t){return t<0?-t:t}function a(t,r){return v.cmp(t,r)<0?t:r}function _(t,r){return v.cmp(t,r)>0?t:r}function s(t,r,e){return v.cmp(e,t)<0?t:v.cmp(e,r)>0?r:e}function l(t,r){return{ctor:y[v.cmp(t,r)+1]}}function f(t,r){return t!==r}function d(t){return!t}function p(t){return t===1/0||t===-1/0}function h(t){return 0|t}function g(t){return t*Math.PI/180}function m(t){return 2*Math.PI*t}function b(t){var r=t._0,e=t._1;return v.Tuple2(r*Math.cos(e),r*Math.sin(e))}function k(t){var r=t._0,e=t._1;return v.Tuple2(Math.sqrt(r*r+e*e),Math.atan2(e,r))}var y=["LT","EQ","GT"];return{div:r(t),rem:r(n),mod:r(o),pi:Math.PI,e:Math.E,cos:Math.cos,sin:Math.sin,tan:Math.tan,acos:Math.acos,asin:Math.asin,atan:Math.atan,atan2:r(Math.atan2),degrees:g,turns:m,fromPolar:b,toPolar:k,sqrt:Math.sqrt,logBase:r(c),negate:i,abs:u,min:r(a),max:r(_),clamp:e(s),compare:r(l),xor:r(f),not:d,truncate:h,ceiling:Math.ceil,floor:Math.floor,round:Math.round,toFloat:function(t){return t},isNaN:isNaN,isInfinite:p}}(),v=function(){function t(t,r){for(var n,o=[],c=e(t,r,0,o);c&&(n=o.pop());)c=e(n.x,n.y,0,o);return c}function e(t,r,n,o){if(n>100)return o.push({x:t,y:r}),!0;if(t===r)return!0;if("object"!=typeof t){if("function"==typeof t)throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.');return!1}if(null===t||null===r)return!1;if(t instanceof Date)return t.getTime()===r.getTime();if(!("ctor"in t)){for(var c in t)if(!e(t[c],r[c],n+1,o))return!1;return!0}if("RBNode_elm_builtin"!==t.ctor&&"RBEmpty_elm_builtin"!==t.ctor||(t=xt(t),r=xt(r)),"Set_elm_builtin"===t.ctor&&(t=_elm_lang$core$Set$toList(t),r=_elm_lang$core$Set$toList(r)),"::"===t.ctor){for(var i=t,u=r;"::"===i.ctor&&"::"===u.ctor;){if(!e(i._0,u._0,n+1,o))return!1;i=i._1,u=u._1}return i.ctor===u.ctor}if("_Array"===t.ctor){var a=h.toJSArray(t),_=h.toJSArray(r);if(a.length!==_.length)return!1;for(var s=0;s<a.length;s++)if(!e(a[s],_[s],n+1,o))return!1;return!0}if(!e(t.ctor,r.ctor,n+1,o))return!1;for(var c in t)if(!e(t[c],r[c],n+1,o))return!1;return!0}function n(t,r){if("object"!=typeof t)return t===r?v:t<r?g:m;if(t instanceof String){var e=t.valueOf(),o=r.valueOf();return e===o?v:e<o?g:m}if("::"===t.ctor||"[]"===t.ctor){for(;"::"===t.ctor&&"::"===r.ctor;){var c=n(t._0,r._0);if(c!==v)return c;t=t._1,r=r._1}return t.ctor===r.ctor?v:"[]"===t.ctor?g:m}if("_Tuple"===t.ctor.slice(0,6)){var c,i=t.ctor.slice(6)-0;if(0===i)return v;if(i>=1){if((c=n(t._0,r._0))!==v)return c;if(i>=2){if((c=n(t._1,r._1))!==v)return c;if(i>=3){if((c=n(t._2,r._2))!==v)return c;if(i>=4){if((c=n(t._3,r._3))!==v)return c;if(i>=5){if((c=n(t._4,r._4))!==v)return c;if(i>=6){if((c=n(t._5,r._5))!==v)return c;if(i>=7)throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")}}}}}}return v}throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")}function o(t,r){return{ctor:"_Tuple2",_0:t,_1:r}}function c(t){return new String(t)}function i(t){return k++}function u(t,r){var e={};for(var n in t)e[n]=t[n];for(var n in r)e[n]=r[n];return e}function a(t,r){return{ctor:"::",_0:t,_1:r}}function _(t,r){if("string"==typeof t)return t+r;if("[]"===t.ctor)return r;var e=a(t._0,y),n=e;for(t=t._1;"[]"!==t.ctor;)n._1=a(t._0,y),t=t._1,n=n._1;return n._1=r,e}function s(t,r){return function(e){throw new Error("Ran into a `Debug.crash` in module `"+t+"` "+f(r)+"\nThe message provided by the code author is:\n\n    "+e)}}function l(t,r,e){return function(n){throw new Error("Ran into a `Debug.crash` in module `"+t+"`\n\nThis was caused by the `case` expression "+f(r)+".\nOne of the branches ended with a crash and the following value got through:\n\n    "+d(e)+"\n\nThe message provided by the code author is:\n\n    "+n)}}function f(t){return t.start.line==t.end.line?"on line "+t.start.line:"between lines "+t.start.line+" and "+t.end.line}function d(t){var r=typeof t;if("function"===r)return"<function>";if("boolean"===r)return t?"True":"False";if("number"===r)return t+"";if(t instanceof String)return"'"+p(t,!0)+"'";if("string"===r)return'"'+p(t,!1)+'"';if(null===t)return"null";if("object"===r&&"ctor"in t){var e=t.ctor.substring(0,5);if("_Tupl"===e){var n=[];for(var o in t)"ctor"!==o&&n.push(d(t[o]));return"("+n.join(",")+")"}if("_Task"===e)return"<task>";if("_Array"===t.ctor){return"Array.fromList "+d(rt(t))}if("<decoder>"===t.ctor)return"<decoder>";if("_Process"===t.ctor)return"<process:"+t.id+">";if("::"===t.ctor){var n="["+d(t._0);for(t=t._1;"::"===t.ctor;)n+=","+d(t._0),t=t._1;return n+"]"}if("[]"===t.ctor)return"[]";if("Set_elm_builtin"===t.ctor)return"Set.fromList "+d(_elm_lang$core$Set$toList(t));if("RBNode_elm_builtin"===t.ctor||"RBEmpty_elm_builtin"===t.ctor)return"Dict.fromList "+d(xt(t));var n="";for(var c in t)if("ctor"!==c){var i=d(t[c]),u=i[0],a="{"===u||"("===u||"<"===u||'"'===u||i.indexOf(" ")<0;n+=" "+(a?i:"("+i+")")}return t.ctor+n}if("object"===r){if(t instanceof Date)return"<"+t.toString()+">";if(t.elm_web_socket)return"<websocket>";var n=[];for(var o in t)n.push(o+" = "+d(t[o]));return 0===n.length?"{}":"{ "+n.join(", ")+" }"}return"<internal structure>"}function p(t,r){var e=t.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return r?e.replace(/\'/g,"\\'"):e.replace(/\"/g,'\\"')}var g=-1,v=0,m=1,b={ctor:"_Tuple0"},k=0,y={ctor:"[]"};return{eq:t,cmp:n,Tuple0:b,Tuple2:o,chr:c,update:u,guid:i,append:r(_),crash:s,crashCase:l,toString:d}}(),m=(r(function(t,r){var e=r;return _(t,e._0,e._1)}),e(function(t,r,e){return t({ctor:"_Tuple2",_0:r,_1:e})}),e(function(t,r,e){return _(t,e,r)})),b=r(function(t,r){return t}),k=function(t){return t},y=y||{};y["<|"]=r(function(t,r){return t(r)});var y=y||{};y["|>"]=r(function(t,r){return r(t)});var y=y||{};y[">>"]=e(function(t,r,e){return r(t(e))});var y=y||{};y["<<"]=e(function(t,r,e){return t(r(e))});var y=y||{};y["++"]=v.append;var w=v.toString,y=(g.isInfinite,g.isNaN,g.toFloat,g.ceiling,g.floor,g.truncate,g.round,g.not,g.xor,y||{});y["||"]=g.or;var y=y||{};y["&&"]=g.and;var T=(g.max,g.min,g.compare),y=y||{};y[">="]=g.ge;var y=y||{};y["<="]=g.le;var y=y||{};y[">"]=g.gt;var y=y||{};y["<"]=g.lt;var y=y||{};y["/="]=g.neq;var y=y||{};y["=="]=g.eq;var y=(g.e,g.pi,g.clamp,g.logBase,g.abs,g.negate,g.sqrt,g.atan2,g.atan,g.asin,g.acos,g.tan,g.sin,g.cos,y||{});y["^"]=g.exp;var y=y||{};y["%"]=g.mod;var y=(g.rem,y||{});y["//"]=g.div;var y=y||{};y["/"]=g.floatDiv;var y=y||{};y["*"]=g.mul;var y=y||{};y["-"]=g.sub;var y=y||{};y["+"]=g.add;var x=(g.toPolar,g.fromPolar,g.turns,g.degrees,r(function(t,r){var e=r;return"Just"===e.ctor?e._0:t})),B={ctor:"Nothing"},N=r(function(t,r){var e=r;return"Just"===e.ctor?t(e._0):B}),R=function(t){return{ctor:"Just",_0:t}},S=r(function(t,r){var e=r;return"Just"===e.ctor?R(t(e._0)):B}),E=e(function(t,r,e){var n={ctor:"_Tuple2",_0:r,_1:e};return"_Tuple2"===n.ctor&&"Just"===n._0.ctor&&"Just"===n._1.ctor?R(_(t,n._0._0,n._1._0)):B}),L=(n(function(t,r,e,n){var o={ctor:"_Tuple3",_0:r,_1:e,_2:n};return"_Tuple3"===o.ctor&&"Just"===o._0.ctor&&"Just"===o._1.ctor&&"Just"===o._2.ctor?R(s(t,o._0._0,o._1._0,o._2._0)):B}),o(function(t,r,e,n,o){var c={ctor:"_Tuple4",_0:r,_1:e,_2:n,_3:o};return"_Tuple4"===c.ctor&&"Just"===c._0.ctor&&"Just"===c._1.ctor&&"Just"===c._2.ctor&&"Just"===c._3.ctor?R(l(t,c._0._0,c._1._0,c._2._0,c._3._0)):B}),c(function(t,r,e,n,o,c){var i={ctor:"_Tuple5",_0:r,_1:e,_2:n,_3:o,_4:c};return"_Tuple5"===i.ctor&&"Just"===i._0.ctor&&"Just"===i._1.ctor&&"Just"===i._2.ctor&&"Just"===i._3.ctor&&"Just"===i._4.ctor?R(f(t,i._0._0,i._1._0,i._2._0,i._3._0,i._4._0)):B}),function(){function t(t,r){return{ctor:"::",_0:t,_1:r}}function i(r){for(var e=k,n=r.length;n--;)e=t(r[n],e);return e}function u(t){for(var r=[];"[]"!==t.ctor;)r.push(t._0),t=t._1;return r}function a(t,r,e){for(var n=u(e),o=r,c=n.length;c--;)o=_(t,n[c],o);return o}function d(t,r,e){for(var n=[];"[]"!==r.ctor&&"[]"!==e.ctor;)n.push(_(t,r._0,e._0)),r=r._1,e=e._1;return i(n)}function p(t,r,e,n){for(var o=[];"[]"!==r.ctor&&"[]"!==e.ctor&&"[]"!==n.ctor;)o.push(s(t,r._0,e._0,n._0)),r=r._1,e=e._1,n=n._1;return i(o)}function h(t,r,e,n,o){for(var c=[];"[]"!==r.ctor&&"[]"!==e.ctor&&"[]"!==n.ctor&&"[]"!==o.ctor;)c.push(l(t,r._0,e._0,n._0,o._0)),r=r._1,e=e._1,n=n._1,o=o._1;return i(c)}function g(t,r,e,n,o,c){for(var u=[];"[]"!==r.ctor&&"[]"!==e.ctor&&"[]"!==n.ctor&&"[]"!==o.ctor&&"[]"!==c.ctor;)u.push(f(t,r._0,e._0,n._0,o._0,c._0)),r=r._1,e=e._1,n=n._1,o=o._1,c=c._1;return i(u)}function m(t,r){return i(u(r).sort(function(r,e){return v.cmp(t(r),t(e))}))}function b(t,r){return i(u(r).sort(function(r,e){var n=t(r)(e).ctor;return"EQ"===n?0:"LT"===n?-1:1}))}var k={ctor:"[]"};return{Nil:k,Cons:t,cons:r(t),toArray:u,fromArray:i,foldr:e(a),map2:e(d),map3:n(p),map4:o(h),map5:c(g),sortBy:r(m),sortWith:r(b)}}()),A=(L.sortWith,L.sortBy,function(t){return{ctor:"::",_0:t,_1:{ctor:"[]"}}}),C=(r(function(t,r){for(;;){if(v.cmp(t,0)<1)return r;var e=r;if("[]"===e.ctor)return r;var n=t-1,o=e._1;t=n,r=o}}),L.map5,L.map4,L.map3,L.map2),O=r(function(t,r){for(;;){var e=r;if("[]"===e.ctor)return!1;if(t(e._0))return!0;var n=t,o=e._1;t=n,r=o}}),M=r(function(t,r){return!_(O,function(r){return!t(r)},r)}),I=L.foldr,P=e(function(t,r,e){for(;;){var n=e;if("[]"===n.ctor)return r;var o=t,c=_(t,n._0,r),i=n._1;t=o,r=c,e=i}}),F=function(t){return s(P,r(function(t,r){return r+1}),0,t)},q=(r(function(t,r){return _(O,function(r){return v.eq(r,t)},r)}),function(t){return"[]"===t.ctor}),U=function(t){var r=t;return"::"===r.ctor?R(r._0):B},J=J||{};J["::"]=L.cons;var $=r(function(t,e){return s(I,r(function(r,e){return{ctor:"::",_0:t(r),_1:e}}),{ctor:"[]"},e)}),D=r(function(t,e){var n=r(function(r,e){return t(r)?{ctor:"::",_0:r,_1:e}:e});return s(I,n,{ctor:"[]"},e)}),j=e(function(t,r,e){var n=t(r);return"Just"===n.ctor?{ctor:"::",_0:n._0,_1:e}:e}),z=r(function(t,r){return s(I,j(t),{ctor:"[]"},r)}),W=function(t){return s(P,r(function(t,r){return{ctor:"::",_0:t,_1:r}}),{ctor:"[]"},t)},H=(e(function(t,e,n){var o=r(function(r,e){var n=e;return"::"===n.ctor?{ctor:"::",_0:_(t,r,n._0),_1:e}:{ctor:"[]"}});return W(s(P,o,{ctor:"::",_0:e,_1:{ctor:"[]"}},n))}),r(function(t,e){return"[]"===e.ctor?t:s(I,r(function(t,r){return{ctor:"::",_0:t,_1:r}}),e,t)})),Q=function(t){return s(I,H,{ctor:"[]"},t)},V=r(function(t,r){return Q(_($,t,r))}),K=(r(function(t,e){var n=r(function(r,e){var n=e,o=n._0,c=n._1;return t(r)?{ctor:"_Tuple2",_0:{ctor:"::",_0:r,_1:o},_1:c}:{ctor:"_Tuple2",_0:o,_1:{ctor:"::",_0:r,_1:c}}});return s(I,n,{ctor:"_Tuple2",_0:{ctor:"[]"},_1:{ctor:"[]"}},e)}),r(function(t,e){var n=e;if("[]"===n.ctor)return{ctor:"[]"};var o=r(function(r,e){return{ctor:"::",_0:t,_1:{ctor:"::",_0:r,_1:e}}}),c=s(I,o,{ctor:"[]"},n._1);return{ctor:"::",_0:n._0,_1:c}}),e(function(t,r,e){for(;;){if(v.cmp(t,0)<1)return e;var n=r;if("[]"===n.ctor)return e;var o=t-1,c=n._1,i={ctor:"::",_0:n._0,_1:e};t=o,r=c,e=i}})),G=r(function(t,r){return W(s(K,t,r,{ctor:"[]"}))}),X=e(function(t,r,e){if(v.cmp(r,0)<1)return{ctor:"[]"};var n={ctor:"_Tuple2",_0:r,_1:e};t:do{r:do{if("_Tuple2"!==n.ctor)break t;if("[]"===n._1.ctor)return e;if("::"!==n._1._1.ctor){if(1===n._0)break r;break t}switch(n._0){case 1:break r;case 2:return{ctor:"::",_0:n._1._0,_1:{ctor:"::",_0:n._1._1._0,_1:{ctor:"[]"}}};case 3:if("::"===n._1._1._1.ctor)return{ctor:"::",_0:n._1._0,_1:{ctor:"::",_0:n._1._1._0,_1:{ctor:"::",_0:n._1._1._1._0,_1:{ctor:"[]"}}}};break t;default:if("::"===n._1._1._1.ctor&&"::"===n._1._1._1._1.ctor){var o=n._1._1._1._0,c=n._1._1._0,i=n._1._0,u=n._1._1._1._1._0,a=n._1._1._1._1._1;return v.cmp(t,1e3)>0?{ctor:"::",_0:i,_1:{ctor:"::",_0:c,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:u,_1:_(G,r-4,a)}}}}:{ctor:"::",_0:i,_1:{ctor:"::",_0:c,_1:{ctor:"::",_0:o,_1:{ctor:"::",_0:u,_1:s(X,t+1,r-4,a)}}}}}break t}}while(!1);return{ctor:"::",_0:n._1._0,_1:{ctor:"[]"}}}while(!1);return e}),Y=(r(function(t,r){return s(X,0,t,r)}),e(function(t,r,e){for(;;){if(v.cmp(r,0)<1)return t;var n={ctor:"::",_0:e,_1:t},o=r-1,c=e;t=n,r=o,e=c}})),Z=(r(function(t,r){return s(Y,{ctor:"[]"},t,r)}),e(function(t,r,e){for(;;){if(!(v.cmp(t,r)<1))return e;var n=t,o=r-1,c={ctor:"::",_0:r,_1:e};t=n,r=o,e=c}})),tt=r(function(t,r){return s(Z,t,r,{ctor:"[]"})}),rt=(r(function(t,r){return s(C,t,_(tt,0,F(r)-1),r)}),h.append,h.length,h.slice,h.set,r(function(t,r){return v.cmp(0,t)<1&&v.cmp(t,h.length(r))<0?R(_(h.get,t,r)):B}),h.push,h.empty,r(function(t,e){var n=r(function(r,e){return t(r)?_(h.push,r,e):e});return s(h.foldl,n,h.empty,e)}),h.foldr,h.foldl,h.indexedMap,h.map,h.toList),et=(h.fromList,h.initialize),nt=(r(function(t,r){return _(et,t,b(r))}),function(){function t(t,r){var e=t+": "+v.toString(r),n=n||{};return n.stdout?n.stdout.write(e):console.log(e),r}function e(t){throw new Error(t)}return{crash:e,log:r(t)}}()),ot=function(){function t(t){return 0===t.length}function n(t,r){return t+r}function o(t){var r=t[0];return r?R(v.Tuple2(v.chr(r),t.slice(1))):B}function c(t,r){return t+r}function i(t){return L.toArray(t).join("")}function u(t){return t.length}function a(t,r){for(var e=r.split(""),n=e.length;n--;)e[n]=t(v.chr(e[n]));return e.join("")}function s(t,r){return r.split("").map(v.chr).filter(t).join("")}function l(t){return t.split("").reverse().join("")}function f(t,r,e){for(var n=e.length,o=0;o<n;++o)r=_(t,v.chr(e[o]),r);return r}function d(t,r,e){for(var n=e.length;n--;)r=_(t,v.chr(e[n]),r);return r}function p(t,r){return L.fromArray(r.split(t))}function h(t,r){return L.toArray(r).join(t)}function g(t,r){for(var e="";t>0;)1&t&&(e+=r),t>>=1,r+=r;return e}function m(t,r,e){return e.slice(t,r)}function b(t,r){return t<1?"":r.slice(0,t)}function k(t,r){return t<1?"":r.slice(-t)}function y(t,r){return t<1?r:r.slice(t)}function w(t,r){return t<1?r:r.slice(0,-t)}function T(t,r,e){var n=(t-e.length)/2;return g(Math.ceil(n),r)+e+g(0|n,r)}function x(t,r,e){return e+g(t-e.length,r)}function N(t,r,e){return g(t-e.length,r)+e}function S(t){return t.trim()}function E(t){return t.replace(/^\s+/,"")}function A(t){return t.replace(/\s+$/,"")}function C(t){return L.fromArray(t.trim().split(/\s+/g))}function O(t){return L.fromArray(t.split(/\r\n|\r|\n/g))}function M(t){return t.toUpperCase()}function I(t){return t.toLowerCase()}function P(t,r){for(var e=r.length;e--;)if(t(v.chr(r[e])))return!0;return!1}function F(t,r){for(var e=r.length;e--;)if(!t(v.chr(r[e])))return!1;return!0}function q(t,r){return r.indexOf(t)>-1}function U(t,r){return 0===r.indexOf(t)}function J(t,r){return r.length>=t.length&&r.lastIndexOf(t)===r.length-t.length}function $(t,r){var e=t.length;if(e<1)return L.Nil;for(var n=0,o=[];(n=r.indexOf(t,n))>-1;)o.push(n),n+=e;return L.fromArray(o)}function D(t){var r=t.length;if(0===r)return j(t);var e=t[0];if("0"===e&&"x"===t[1]){for(var n=2;n<r;++n){var e=t[n];if(!("0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"))return j(t)}return st(parseInt(t,16))}if(e>"9"||e<"0"&&"-"!==e&&"+"!==e)return j(t);for(var n=1;n<r;++n){var e=t[n];if(e<"0"||"9"<e)return j(t)}return st(parseInt(t,10))}function j(t){return _t("could not convert string '"+t+"' to an Int")}function z(t){if(0===t.length||/[\sxbo]/.test(t))return W(t);var r=+t;return r===r?st(r):W(t)}function W(t){return _t("could not convert string '"+t+"' to a Float")}function H(t){return L.fromArray(t.split("").map(v.chr))}function Q(t){return L.toArray(t).join("")}return{isEmpty:t,cons:r(n),uncons:o,append:r(c),concat:i,length:u,map:r(a),filter:r(s),reverse:l,foldl:e(f),foldr:e(d),split:r(p),join:r(h),repeat:r(g),slice:e(m),left:r(b),right:r(k),dropLeft:r(y),dropRight:r(w),pad:e(T),padLeft:e(N),padRight:e(x),trim:S,trimLeft:E,trimRight:A,words:C,lines:O,toUpper:M,toLower:I,any:r(P),all:r(F),contains:r(q),startsWith:r(U),endsWith:r(J),indexes:r($),toInt:D,toFloat:z,toList:H,fromList:Q}}(),ct=function(){return{fromCode:function(t){return v.chr(String.fromCharCode(t))},toCode:function(t){return t.charCodeAt(0)},toUpper:function(t){return v.chr(t.toUpperCase())},toLower:function(t){return v.chr(t.toLowerCase())},toLocaleUpper:function(t){return v.chr(t.toLocaleUpperCase())},toLocaleLower:function(t){return v.chr(t.toLocaleLowerCase())}}}(),it=(ct.fromCode,ct.toCode),ut=(ct.toLocaleLower,ct.toLocaleUpper,ct.toLower,ct.toUpper,e(function(t,r,e){var n=it(e);return v.cmp(n,it(t))>-1&&v.cmp(n,it(r))<1})),at=(_(ut,v.chr("A"),v.chr("Z")),_(ut,v.chr("a"),v.chr("z")),_(ut,v.chr("0"),v.chr("9")),_(ut,v.chr("0"),v.chr("7")),function(t){var r=t;return"Ok"===r.ctor?R(r._0):B}),_t=(r(function(t,r){var e=r;return"Ok"===e.ctor?e._0:t}),function(t){return{ctor:"Err",_0:t}}),st=(r(function(t,r){var e=r;return"Ok"===e.ctor?t(e._0):_t(e._0)}),function(t){return{ctor:"Ok",_0:t}}),lt=r(function(t,r){var e=r;return"Ok"===e.ctor?st(t(e._0)):_t(e._0)}),ft=(e(function(t,r,e){var n={ctor:"_Tuple2",_0:r,_1:e};return"Ok"===n._0.ctor?"Ok"===n._1.ctor?st(_(t,n._0._0,n._1._0)):_t(n._1._0):_t(n._0._0)}),n(function(t,r,e,n){var o={ctor:"_Tuple3",_0:r,_1:e,_2:n};return"Ok"===o._0.ctor?"Ok"===o._1.ctor?"Ok"===o._2.ctor?st(s(t,o._0._0,o._1._0,o._2._0)):_t(o._2._0):_t(o._1._0):_t(o._0._0)})),dt=(o(function(t,r,e,n,o){var c={ctor:"_Tuple4",_0:r,_1:e,_2:n,_3:o};return"Ok"===c._0.ctor?"Ok"===c._1.ctor?"Ok"===c._2.ctor?"Ok"===c._3.ctor?st(l(t,c._0._0,c._1._0,c._2._0,c._3._0)):_t(c._3._0):_t(c._2._0):_t(c._1._0):_t(c._0._0)}),c(function(t,r,e,n,o,c){var i={ctor:"_Tuple5",_0:r,_1:e,_2:n,_3:o,_4:c};return"Ok"===i._0.ctor?"Ok"===i._1.ctor?"Ok"===i._2.ctor?"Ok"===i._3.ctor?"Ok"===i._4.ctor?st(f(t,i._0._0,i._1._0,i._2._0,i._3._0,i._4._0)):_t(i._4._0):_t(i._3._0):_t(i._2._0):_t(i._1._0):_t(i._0._0)}),r(function(t,r){var e=r;return"Ok"===e.ctor?st(e._0):_t(t(e._0))}),r(function(t,r){var e=r;return"Just"===e.ctor?st(e._0):_t(t)}),ot.fromList,ot.toList,ot.toFloat,ot.toInt),pt=(ot.indexes,ot.indexes,ot.endsWith,ot.startsWith,ot.contains,ot.all,ot.any,ot.toLower),ht=(ot.toUpper,ot.lines,ot.words),gt=(ot.trimRight,ot.trimLeft,ot.trim,ot.padRight,ot.padLeft,ot.pad,ot.dropRight,ot.dropLeft),vt=(ot.right,ot.left,ot.slice,ot.repeat,ot.join),mt=ot.split,bt=(ot.foldr,ot.foldl,ot.reverse,ot.filter,ot.map),kt=ot.length,yt=ot.concat,wt=(ot.append,ot.uncons,ot.cons,ot.isEmpty),Tt=e(function(t,r,e){for(;;){var n=e;if("RBEmpty_elm_builtin"===n.ctor)return r;var o=t,c=s(t,n._1,n._2,s(Tt,t,r,n._4)),i=n._3;t=o,r=c,e=i}}),xt=function(t){return s(Tt,e(function(t,r,e){return{ctor:"::",_0:{ctor:"_Tuple2",_0:t,_1:r},_1:e}}),{ctor:"[]"},t)},Bt=e(function(t,r,e){for(;;){var n=e;if("RBEmpty_elm_builtin"===n.ctor)return r;var o=t,c=s(t,n._1,n._2,s(Bt,t,r,n._3)),i=n._4;t=o,r=c,e=i}}),Nt=c(function(t,n,o,c,i,u){var a=e(function(r,e,c){for(;;){var i=c,u=i._1,a=i._0,_=a;if("[]"===_.ctor)return{ctor:"_Tuple2",_0:a,_1:s(o,r,e,u)};var f=_._1,d=_._0._1,p=_._0._0;if(!(v.cmp(p,r)<0))return v.cmp(p,r)>0?{ctor:"_Tuple2",_0:a,_1:s(o,r,e,u)}:{ctor:"_Tuple2",_0:f,_1:l(n,p,d,e,u)};var h=r,g=e,m={ctor:"_Tuple2",_0:f,_1:s(t,p,d,u)};r=h,e=g,c=m}}),_=s(Bt,a,{ctor:"_Tuple2",_0:xt(c),_1:u},i),f=_._0,d=_._1;return s(P,r(function(r,e){var n=r;return s(t,n._0,n._1,e)}),d,f)}),Rt=n(function(t,r,e,n){return nt.crash(yt({ctor:"::",_0:"Internal red-black tree invariant violated, expected ",_1:{ctor:"::",_0:t,_1:{ctor:"::",_0:" and got ",_1:{ctor:"::",_0:w(r),_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:e,_1:{ctor:"::",_0:"/",_1:{ctor:"::",_0:n,_1:{ctor:"::",_0:"\nPlease report this bug to <https://github.com/elm-lang/core/issues>",_1:{ctor:"[]"}}}}}}}}}}))}),St=function(t){var r=t;t:do{if("RBNode_elm_builtin"===r.ctor){if("BBlack"===r._0.ctor)return!0;break t}if("LBBlack"===r._0.ctor)return!0;break t}while(!1);return!1},Et=r(function(t,r){for(;;){var e=r;if("RBEmpty_elm_builtin"===e.ctor)return t;var n=_(Et,t+1,e._4),o=e._3;t=n,r=o}}),Lt=r(function(t,r){t:for(;;){var e=r;if("RBEmpty_elm_builtin"===e.ctor)return B;var n=_(T,t,e._1);switch(n.ctor){case"LT":var o=t,c=e._3;t=o,r=c;continue t;case"EQ":return R(e._2);default:var i=t,u=e._4;t=i,r=u;continue t}}}),At=r(function(t,r){return"Just"===_(Lt,t,r).ctor}),Ct=e(function(t,r,e){for(;;){var n=e;if("RBEmpty_elm_builtin"===n.ctor)return{ctor:"_Tuple2",_0:t,_1:r};var o=n._1,c=n._2,i=n._4;t=o,r=c,e=i}}),Ot={ctor:"NBlack"},Mt={ctor:"BBlack"},It={ctor:"Black"},Pt=function(t){var r=t;if("RBNode_elm_builtin"===r.ctor){var e=r._0;return v.eq(e,It)||v.eq(e,Mt)}return!0},Ft={ctor:"Red"},qt=function(t){switch(t.ctor){case"Black":return Mt;case"Red":return It;case"NBlack":return Ft;default:return nt.crash("Can't make a double black node more black!")}},Ut=function(t){switch(t.ctor){case"BBlack":return It;case"Black":return Ft;case"Red":return Ot;default:return nt.crash("Can't make a negative black node less black!")}},Jt={ctor:"LBBlack"},$t={ctor:"LBlack"},Dt=function(t){return{ctor:"RBEmpty_elm_builtin",_0:t}},jt=Dt($t),zt=o(function(t,r,e,n,o){return{ctor:"RBNode_elm_builtin",_0:t,_1:r,_2:e,_3:n,_4:o}}),Wt=function(t){var r=t;return"RBNode_elm_builtin"===r.ctor&&"Red"===r._0.ctor?f(zt,It,r._1,r._2,r._3,r._4):t},Ht=function(t){var r=t;return"RBNode_elm_builtin"===r.ctor?f(zt,Ut(r._0),r._1,r._2,r._3,r._4):Dt($t)},Qt=function(t){return function(r){return function(e){return function(n){return function(o){return function(c){return function(i){return function(u){return function(a){return function(_){return function(s){return f(zt,Ut(t),n,o,f(zt,It,r,e,u,a),f(zt,It,c,i,_,s))}}}}}}}}}}},Vt=function(t){var r=t;return"RBEmpty_elm_builtin"===r.ctor?Dt($t):f(zt,It,r._1,r._2,r._3,r._4)},Kt=function(t){var r=t;return"RBEmpty_elm_builtin"===r.ctor?nt.crash("can't make a Leaf red"):f(zt,Ft,r._1,r._2,r._3,r._4)},Gt=function(t){var r=t;t:do{r:do{e:do{n:do{o:do{c:do{i:do{if("RBNode_elm_builtin"!==r.ctor)break t;if("RBNode_elm_builtin"===r._3.ctor)if("RBNode_elm_builtin"===r._4.ctor)switch(r._3._0.ctor){case"Red":switch(r._4._0.ctor){case"Red":if("RBNode_elm_builtin"===r._3._3.ctor&&"Red"===r._3._3._0.ctor)break i;if("RBNode_elm_builtin"===r._3._4.ctor&&"Red"===r._3._4._0.ctor)break c;if("RBNode_elm_builtin"===r._4._3.ctor&&"Red"===r._4._3._0.ctor)break o;if("RBNode_elm_builtin"===r._4._4.ctor&&"Red"===r._4._4._0.ctor)break n;break t;case"NBlack":if("RBNode_elm_builtin"===r._3._3.ctor&&"Red"===r._3._3._0.ctor)break i;if("RBNode_elm_builtin"===r._3._4.ctor&&"Red"===r._3._4._0.ctor)break c;if("BBlack"===r._0.ctor&&"RBNode_elm_builtin"===r._4._3.ctor&&"Black"===r._4._3._0.ctor&&"RBNode_elm_builtin"===r._4._4.ctor&&"Black"===r._4._4._0.ctor)break e;break t;default:if("RBNode_elm_builtin"===r._3._3.ctor&&"Red"===r._3._3._0.ctor)break i;if("RBNode_elm_builtin"===r._3._4.ctor&&"Red"===r._3._4._0.ctor)break c;break t}case"NBlack":switch(r._4._0.ctor){case"Red":if("RBNode_elm_builtin"===r._4._3.ctor&&"Red"===r._4._3._0.ctor)break o;if("RBNode_elm_builtin"===r._4._4.ctor&&"Red"===r._4._4._0.ctor)break n;if("BBlack"===r._0.ctor&&"RBNode_elm_builtin"===r._3._3.ctor&&"Black"===r._3._3._0.ctor&&"RBNode_elm_builtin"===r._3._4.ctor&&"Black"===r._3._4._0.ctor)break r;break t;case"NBlack":if("BBlack"===r._0.ctor){if("RBNode_elm_builtin"===r._4._3.ctor&&"Black"===r._4._3._0.ctor&&"RBNode_elm_builtin"===r._4._4.ctor&&"Black"===r._4._4._0.ctor)break e;if("RBNode_elm_builtin"===r._3._3.ctor&&"Black"===r._3._3._0.ctor&&"RBNode_elm_builtin"===r._3._4.ctor&&"Black"===r._3._4._0.ctor)break r;break t}break t;default:if("BBlack"===r._0.ctor&&"RBNode_elm_builtin"===r._3._3.ctor&&"Black"===r._3._3._0.ctor&&"RBNode_elm_builtin"===r._3._4.ctor&&"Black"===r._3._4._0.ctor)break r;break t}default:switch(r._4._0.ctor){case"Red":if("RBNode_elm_builtin"===r._4._3.ctor&&"Red"===r._4._3._0.ctor)break o;if("RBNode_elm_builtin"===r._4._4.ctor&&"Red"===r._4._4._0.ctor)break n;break t;case"NBlack":if("BBlack"===r._0.ctor&&"RBNode_elm_builtin"===r._4._3.ctor&&"Black"===r._4._3._0.ctor&&"RBNode_elm_builtin"===r._4._4.ctor&&"Black"===r._4._4._0.ctor)break e;break t;default:break t}}else switch(r._3._0.ctor){case"Red":if("RBNode_elm_builtin"===r._3._3.ctor&&"Red"===r._3._3._0.ctor)break i;if("RBNode_elm_builtin"===r._3._4.ctor&&"Red"===r._3._4._0.ctor)break c;break t;case"NBlack":if("BBlack"===r._0.ctor&&"RBNode_elm_builtin"===r._3._3.ctor&&"Black"===r._3._3._0.ctor&&"RBNode_elm_builtin"===r._3._4.ctor&&"Black"===r._3._4._0.ctor)break r;break t;default:break t}else{if("RBNode_elm_builtin"!==r._4.ctor)break t;switch(r._4._0.ctor){case"Red":if("RBNode_elm_builtin"===r._4._3.ctor&&"Red"===r._4._3._0.ctor)break o;if("RBNode_elm_builtin"===r._4._4.ctor&&"Red"===r._4._4._0.ctor)break n;break t;case"NBlack":if("BBlack"===r._0.ctor&&"RBNode_elm_builtin"===r._4._3.ctor&&"Black"===r._4._3._0.ctor&&"RBNode_elm_builtin"===r._4._4.ctor&&"Black"===r._4._4._0.ctor)break e;break t;default:break t}}}while(!1);return Qt(r._0)(r._3._3._1)(r._3._3._2)(r._3._1)(r._3._2)(r._1)(r._2)(r._3._3._3)(r._3._3._4)(r._3._4)(r._4)}while(!1);return Qt(r._0)(r._3._1)(r._3._2)(r._3._4._1)(r._3._4._2)(r._1)(r._2)(r._3._3)(r._3._4._3)(r._3._4._4)(r._4)}while(!1);return Qt(r._0)(r._1)(r._2)(r._4._3._1)(r._4._3._2)(r._4._1)(r._4._2)(r._3)(r._4._3._3)(r._4._3._4)(r._4._4)}while(!1);return Qt(r._0)(r._1)(r._2)(r._4._1)(r._4._2)(r._4._4._1)(r._4._4._2)(r._3)(r._4._3)(r._4._4._3)(r._4._4._4)}while(!1);return f(zt,It,r._4._3._1,r._4._3._2,f(zt,It,r._1,r._2,r._3,r._4._3._3),f(Xt,It,r._4._1,r._4._2,r._4._3._4,Kt(r._4._4)))}while(!1);return f(zt,It,r._3._4._1,r._3._4._2,f(Xt,It,r._3._1,r._3._2,Kt(r._3._3),r._3._4._3),f(zt,It,r._1,r._2,r._3._4._4,r._4))}while(!1);return t},Xt=o(function(t,r,e,n,o){var c=f(zt,t,r,e,n,o);return Pt(c)?Gt(c):c}),Yt=o(function(t,r,e,n,o){return St(n)||St(o)?f(Xt,qt(t),r,e,Ht(n),Ht(o)):f(zt,t,r,e,n,o)}),Zt=o(function(t,r,e,n,o){var c=o;return"RBEmpty_elm_builtin"===c.ctor?s(tr,t,n,o):f(Yt,t,r,e,n,f(Zt,c._0,c._1,c._2,c._3,c._4))}),tr=e(function(t,r,e){var n={ctor:"_Tuple2",_0:r,_1:e};if("RBEmpty_elm_builtin"!==n._0.ctor){if("RBEmpty_elm_builtin"===n._1.ctor){var o=n._1._0,c=n._0._0,i={ctor:"_Tuple3",_0:t,_1:c,_2:o};return"_Tuple3"===i.ctor&&"Black"===i._0.ctor&&"Red"===i._1.ctor&&"LBlack"===i._2.ctor?f(zt,It,n._0._1,n._0._2,n._0._3,n._0._4):l(Rt,"Black/Red/LBlack",t,w(c),w(o))}var u=n._0._2,a=n._0._4,_=n._0._1,d=f(Zt,n._0._0,_,u,n._0._3,a),p=s(Ct,_,u,a),h=p._0,g=p._1;return f(Yt,t,h,g,d,e)}if("RBEmpty_elm_builtin"!==n._1.ctor){var v=n._1._0,m=n._0._0,b={ctor:"_Tuple3",_0:t,_1:m,_2:v};return"_Tuple3"===b.ctor&&"Black"===b._0.ctor&&"LBlack"===b._1.ctor&&"Red"===b._2.ctor?f(zt,It,n._1._1,n._1._2,n._1._3,n._1._4):l(Rt,"Black/LBlack/Red",t,w(m),w(v))}switch(t.ctor){case"Red":return Dt($t);case"Black":return Dt(Jt);default:return nt.crash("cannot have bblack or nblack nodes at this point")}}),rr=r(function(t,r){var e=r;if("RBEmpty_elm_builtin"===e.ctor)return Dt($t);var n=e._1;return f(zt,e._0,n,_(t,n,e._2),_(rr,t,e._3),_(rr,t,e._4))}),er={ctor:"Same"},nr={ctor:"Remove"},or={ctor:"Insert"},cr=e(function(t,r,e){var n=function(e){var o=e;if("RBEmpty_elm_builtin"===o.ctor){var c=r(B);return"Nothing"===c.ctor?{ctor:"_Tuple2",_0:er,_1:jt}:{ctor:"_Tuple2",_0:or,_1:f(zt,Ft,t,c._0,jt,jt)}}var i=o._2,u=o._4,a=o._3,l=o._1,d=o._0;switch(_(T,t,l).ctor){case"EQ":var p=r(R(i));return"Nothing"===p.ctor?{ctor:"_Tuple2",_0:nr,_1:s(tr,d,a,u)}:{ctor:"_Tuple2",_0:er,_1:f(zt,d,l,p._0,a,u)};case"LT":var h=n(a),g=h._0,v=h._1;switch(g.ctor){case"Same":return{ctor:"_Tuple2",_0:er,_1:f(zt,d,l,i,v,u)};case"Insert":return{ctor:"_Tuple2",_0:or,_1:f(Xt,d,l,i,v,u)};default:return{ctor:"_Tuple2",_0:nr,_1:f(Yt,d,l,i,v,u)}}default:var m=n(u),g=m._0,b=m._1;switch(g.ctor){case"Same":return{ctor:"_Tuple2",_0:er,_1:f(zt,d,l,i,a,b)};case"Insert":return{ctor:"_Tuple2",_0:or,_1:f(Xt,d,l,i,a,b)};default:return{ctor:"_Tuple2",_0:nr,_1:f(Yt,d,l,i,a,b)}}}},o=n(e),c=o._0,i=o._1;switch(c.ctor){case"Same":return i;case"Insert":return Wt(i);default:return Vt(i)}}),ir=e(function(t,r,e){return s(cr,t,b(R(r)),e)}),ur=(r(function(t,r){return s(ir,t,r,jt)}),r(function(t,r){return s(Bt,ir,r,t)}),r(function(t,r){var n=e(function(r,e,n){return _(t,r,e)?s(ir,r,e,n):n});return s(Bt,n,jt,r)})),ar=(r(function(t,e){return _(ur,r(function(t,r){return _(At,t,e)}),t)}),r(function(t,r){var n=e(function(r,e,n){var o=n,c=o._1,i=o._0;return _(t,r,e)?{ctor:"_Tuple2",_0:s(ir,r,e,i),_1:c}:{ctor:"_Tuple2",_0:i,_1:s(ir,r,e,c)}});return s(Bt,n,{ctor:"_Tuple2",_0:jt,_1:jt},r)}),function(t){return s(P,r(function(t,r){var e=t;return s(ir,e._0,e._1,r)}),jt,t)}),_r=r(function(t,r){return s(cr,t,b(B),r)}),sr=(r(function(t,r){return s(Bt,e(function(t,r,e){return _(_r,t,e)}),t,r)}),function(){function t(t){return{ctor:"<decoder>",tag:"succeed",msg:t}}function _(t){return{ctor:"<decoder>",tag:"fail",msg:t}}function s(t){return{ctor:"<decoder>",tag:t}}function l(t,r){return{ctor:"<decoder>",tag:t,decoder:r}}function f(t){return{ctor:"<decoder>",tag:"null",value:t}}function d(t,r){return{ctor:"<decoder>",tag:"field",field:t,decoder:r}}function p(t,r){return{ctor:"<decoder>",tag:"index",index:t,decoder:r}}function g(t){return{ctor:"<decoder>",tag:"key-value",decoder:t}}function m(t,r){return{ctor:"<decoder>",tag:"map-many",func:t,decoders:r}}function b(t,r){return{ctor:"<decoder>",tag:"andThen",decoder:r,callback:t}}function k(t){return{ctor:"<decoder>",tag:"oneOf",decoders:t}}function y(t,r){return m(t,[r])}function w(t,r,e){return m(t,[r,e])}function T(t,r,e,n){return m(t,[r,e,n])}function x(t,r,e,n,o){return m(t,[r,e,n,o])}function N(t,r,e,n,o,c){return m(t,[r,e,n,o,c])}function S(t,r,e,n,o,c,i){return m(t,[r,e,n,o,c,i])}function E(t,r,e,n,o,c,i,u){return m(t,[r,e,n,o,c,i,u])}function A(t,r,e,n,o,c,i,u,a){return m(t,[r,e,n,o,c,i,u,a])}function C(t){return{tag:"ok",value:t}}function O(t,r){return{tag:"primitive",type:t,value:r}}function M(t,r){return{tag:"index",index:t,rest:r}}function I(t,r){return{tag:"field",field:t,rest:r}}function M(t,r){return{tag:"index",index:t,rest:r}}function P(t){return{tag:"oneOf",problems:t}}function F(t){return{tag:"fail",msg:t}}function q(t){for(var r="_";t;)switch(t.tag){case"primitive":return"Expecting "+t.type+("_"===r?"":" at "+r)+" but instead got: "+U(t.value);case"index":r+="["+t.index+"]",t=t.rest;break;case"field":r+="."+t.field,t=t.rest;break;case"oneOf":for(var e=t.problems,n=0;n<e.length;n++)e[n]=q(e[n]);return"I ran into the following problems"+("_"===r?"":" at "+r)+":\n\n"+e.join("\n");case"fail":return"I ran into a `fail` decoder"+("_"===r?"":" at "+r)+": "+t.msg}}function U(t){return void 0===t?"undefined":JSON.stringify(t)}function J(t,r){var e;try{e=JSON.parse(r)}catch(t){return _t("Given an invalid JSON: "+t.message)}return $(t,e)}function $(t,r){var e=D(t,r);return"ok"===e.tag?st(e.value):_t(q(e))}function D(t,r){switch(t.tag){case"bool":return"boolean"==typeof r?C(r):O("a Bool",r);case"int":return"number"!=typeof r?O("an Int",r):-2147483647<r&&r<2147483647&&(0|r)===r?C(r):!isFinite(r)||r%1?O("an Int",r):C(r);case"float":return"number"==typeof r?C(r):O("a Float",r);case"string":return"string"==typeof r?C(r):r instanceof String?C(r+""):O("a String",r);case"null":return null===r?C(t.value):O("null",r);case"value":return C(r);case"list":if(!(r instanceof Array))return O("a List",r);for(var e=L.Nil,n=r.length;n--;){var o=D(t.decoder,r[n]);if("ok"!==o.tag)return M(n,o);e=L.Cons(o.value,e)}return C(e);case"array":if(!(r instanceof Array))return O("an Array",r);for(var c=r.length,i=new Array(c),n=c;n--;){var o=D(t.decoder,r[n]);if("ok"!==o.tag)return M(n,o);i[n]=o.value}return C(h.fromJSArray(i));case"maybe":var o=D(t.decoder,r);return C("ok"===o.tag?R(o.value):B);case"field":var u=t.field;if("object"!=typeof r||null===r||!(u in r))return O("an object with a field named `"+u+"`",r);var o=D(t.decoder,r[u]);return"ok"===o.tag?o:I(u,o);case"index":var a=t.index;if(!(r instanceof Array))return O("an array",r);if(a>=r.length)return O("a longer array. Need index "+a+" but there are only "+r.length+" entries",r);var o=D(t.decoder,r[a]);return"ok"===o.tag?o:M(a,o);case"key-value":if("object"!=typeof r||null===r||r instanceof Array)return O("an object",r);var _=L.Nil;for(var s in r){var o=D(t.decoder,r[s]);if("ok"!==o.tag)return I(s,o);var l=v.Tuple2(s,o.value);_=L.Cons(l,_)}return C(_);case"map-many":for(var f=t.func,d=t.decoders,n=0;n<d.length;n++){var o=D(d[n],r);if("ok"!==o.tag)return o;f=f(o.value)}return C(f);case"andThen":var o=D(t.decoder,r);return"ok"!==o.tag?o:D(t.callback(o.value),r);case"oneOf":for(var p=[],g=t.decoders;"[]"!==g.ctor;){var o=D(g._0,r);if("ok"===o.tag)return o;p.push(o),g=g._1}return P(p);case"fail":return F(t.msg);case"succeed":return C(t.msg)}}function j(t,r){if(t===r)return!0;if(t.tag!==r.tag)return!1;switch(t.tag){case"succeed":case"fail":return t.msg===r.msg;case"bool":case"int":case"float":case"string":case"value":return!0;case"null":return t.value===r.value;case"list":case"array":case"maybe":case"key-value":return j(t.decoder,r.decoder);case"field":return t.field===r.field&&j(t.decoder,r.decoder);case"index":return t.index===r.index&&j(t.decoder,r.decoder);case"map-many":return t.func===r.func&&z(t.decoders,r.decoders);case"andThen":return t.callback===r.callback&&j(t.decoder,r.decoder);case"oneOf":return z(t.decoders,r.decoders)}}function z(t,r){var e=t.length;if(e!==r.length)return!1;for(var n=0;n<e;n++)if(!j(t[n],r[n]))return!1;return!0}function W(t,r){return JSON.stringify(r,null,t)}function H(t){return t}function Q(t){for(var r={};"[]"!==t.ctor;){var e=t._0;r[e._0]=e._1,t=t._1}return r}return{encode:r(W),runOnString:r(J),run:r($),decodeNull:f,decodePrimitive:s,decodeContainer:r(l),decodeField:r(d),decodeIndex:r(p),map1:r(y),map2:e(w),map3:n(T),map4:o(x),map5:c(N),map6:i(S),map7:u(E),map8:a(A),decodeKeyValuePairs:g,andThen:r(b),fail:_,succeed:t,oneOf:k,identity:H,encodeNull:null,encodeArray:h.toJSArray,encodeList:L.toArray,encodeObject:Q,equality:j}}()),lr=(sr.encodeList,sr.encodeArray,sr.encodeObject),fr=(sr.encodeNull,sr.identity),dr=(sr.identity,sr.identity,sr.identity),pr=sr.encode,hr=sr.decodeNull,gr=sr.decodePrimitive("value"),vr=sr.andThen,mr=sr.fail,br=sr.succeed,kr=sr.run,yr=sr.runOnString,wr=(sr.map8,sr.map7,sr.map6,sr.map5,sr.map4,sr.map3,sr.map2),Tr=sr.map1,xr=sr.oneOf,Br=(sr.decodeIndex,sr.decodeField),Nr=r(function(t,r){return s(I,Br,r,t)}),Rr=(sr.decodeKeyValuePairs,function(t){return _(sr.decodeContainer,"list",t)}),Sr=function(t){return xr({ctor:"::",_0:hr(B),_1:{ctor:"::",_0:_(Tr,R,t),_1:{ctor:"[]"}}})},Er=(sr.decodePrimitive("float"),sr.decodePrimitive("int")),Lr=sr.decodePrimitive("bool"),Ar=sr.decodePrimitive("string"),Cr=(nt.crash,nt.log,r(function(t,r){var e=r;return{ctor:"_Tuple2",_0:e._0,_1:t(e._1)}}),r(function(t,r){var e=r;return{ctor:"_Tuple2",_0:t(e._0),_1:e._1}}),function(t){return t._1}),Or=function(t){return t._0},Mr=function(){function t(t){return function(r){return function(r,e){r.worker=function(r){if(void 0!==r)throw new Error("The `"+e+"` module does not need flags.\nCall "+e+".worker() with no arguments and you should be all set!");return i(t.init,t.update,t.subscriptions,o)}}}}function n(t){return function(r){return function(e,n){e.worker=function(e){if(void 0===r)throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+n+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.");var c=_(sr.run,r,e);if("Err"===c.ctor)throw new Error(n+".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+c._0);return i(t.init(c._0),t.update,t.subscriptions,o)}}}}function o(t,r){return function(t){}}function c(t){var e=g(L.Nil),n=v.Tuple2(v.Tuple0,e);return Pe({init:n,view:function(t){return main},update:r(function(t,r){return n}),subscriptions:function(t){return e}})}function i(t,r,e,n){function o(t,n){return Ir.nativeBinding(function(o){var c=_(r,t,n);n=c._0,i(n);var u=c._1,s=e(n);b(a,u,s),o(Ir.succeed(n))})}function c(t){Ir.rawSend(l,t)}var i,a={},s=Ir.nativeBinding(function(r){var o=t._0;i=n(c,o);var u=t._1,_=e(o);b(a,u,_),r(Ir.succeed(o))}),l=p(s,o),f=u(a,c);return f?{ports:f}:{}}function u(t,r){var e;for(var n in S){var o=S[n];o.isForeign&&(e=e||{},e[n]="cmd"===o.tag?B(n):R(n,r)),t[n]=a(o,r)}return e}function a(t,r){function e(t,r){if("self"===t.ctor)return s(i,n,t._0,r);var e=t._0;switch(o){case"cmd":return s(c,n,e.cmds,r);case"sub":return s(c,n,e.subs,r);case"fx":return l(c,n,e.cmds,e.subs,r)}}var n={main:r,self:void 0},o=t.tag,c=t.onEffects,i=t.onSelfMsg,u=p(t.init,e);return n.self=u,u}function f(t,r){return Ir.nativeBinding(function(e){t.main(r),e(Ir.succeed(v.Tuple0))})}function d(t,r){return _(Ir.send,t.self,{ctor:"self",_0:r})}function p(t,r){function e(t){var o=Ir.receive(function(e){return r(e,t)});return _(n,e,o)}var n=Ir.andThen,o=_(n,e,t);return Ir.rawSpawn(o)}function h(t){return function(r){return{type:"leaf",home:t,value:r}}}function g(t){return{type:"node",branches:t}}function m(t,r){return{type:"map",tagger:t,tree:r}}function b(t,r,e){var n={};k(!0,r,n,null),k(!1,e,n,null);for(var o in t){var c=o in n?n[o]:{cmds:L.Nil,subs:L.Nil};Ir.rawSend(t[o],{ctor:"fx",_0:c})}}function k(t,r,e,n){switch(r.type){case"leaf":var o=r.home,c=y(t,o,n,r.value);return void(e[o]=w(t,c,e[o]));case"node":for(var i=r.branches;"[]"!==i.ctor;)k(t,i._0,e,n),i=i._1;return;case"map":return void k(t,r.tree,e,{tagger:r.tagger,rest:n})}}function y(t,r,e,n){function o(t){for(var r=e;r;)t=r.tagger(t),r=r.rest;return t}return _(t?S[r].cmdMap:S[r].subMap,o,n)}function w(t,r,e){return e=e||{cmds:L.Nil,subs:L.Nil},t?(e.cmds=L.Cons(r,e.cmds),e):(e.subs=L.Cons(r,e.subs),e)}function T(t){if(t in S)throw new Error("There can only be one port named `"+t+"`, but your program has multiple.")}function x(t,r){return T(t),S[t]={tag:"cmd",cmdMap:E,converter:r,isForeign:!0},h(t)}function B(t){function r(t,r,e){for(;"[]"!==r.ctor;){for(var n=c,o=i(r._0),a=0;a<n.length;a++)n[a](o);r=r._1}return u}function n(t){c.push(t)}function o(t){c=c.slice();var r=c.indexOf(t);r>=0&&c.splice(r,1)}var c=[],i=S[t].converter,u=Ir.succeed(null);return S[t].init=u,S[t].onEffects=e(r),{subscribe:n,unsubscribe:o}}function N(t,r){return T(t),S[t]={tag:"sub",subMap:A,converter:r,isForeign:!0},h(t)}function R(t,r){function n(t,r,e){for(var n=o(t,r,e),c=0;c<s.length;c++)u(s[c]);return s=null,p=u,d=o,n}function o(t,r,e){return l=r,h}function c(t,r,e){return d(t,r,e)}function i(t){s.push(t)}function u(t){for(var e=l;"[]"!==e.ctor;)r(e._0(t)),e=e._1}function a(r){var e=_(kr,f,r);if("Err"===e.ctor)throw new Error("Trying to send an unexpected type of value through port `"+t+"`:\n"+e._0);p(e._0)}var s=[],l=L.Nil,f=S[t].converter,d=n,p=i,h=Ir.succeed(null);return S[t].init=h,S[t].onEffects=e(c),{send:a}}var S={},E=r(function(t,r){return r}),A=r(function(t,r){return function(e){return t(r(e))}});return{sendToApp:r(f),sendToSelf:r(d),effectManagers:S,outgoingPort:x,incomingPort:N,htmlToProgram:c,program:t,programWithFlags:n,initialize:i,leaf:h,batch:g,map:r(m)}}(),Ir=function(){function t(t){return{ctor:"_Task_succeed",value:t}}function e(t){return{ctor:"_Task_fail",value:t}}function n(t){return{ctor:"_Task_nativeBinding",callback:t,cancel:null}}function o(t,r){return{ctor:"_Task_andThen",callback:t,task:r}}function c(t,r){return{ctor:"_Task_onError",callback:t,task:r}}function i(t){return{ctor:"_Task_receive",callback:t}}function u(t){var r={ctor:"_Process",id:v.guid(),root:t,stack:null,mailbox:[]};return p(r),r}function a(r){return n(function(e){e(t(u(r)))})}function _(t,r){t.mailbox.push(r),p(t)}function s(r,e){return n(function(n){_(r,e),n(t(v.Tuple0))})}function l(r){return n(function(e){var n=r.root;"_Task_nativeBinding"===n.ctor&&n.cancel&&n.cancel(),r.root=null,e(t(v.Tuple0))})}function f(r){return n(function(e){var n=setTimeout(function(){e(t(v.Tuple0))},r);return function(){clearTimeout(n)}})}function d(t,r){for(;t<g;){var e=r.root.ctor;if("_Task_succeed"!==e)if("_Task_fail"!==e)if("_Task_andThen"!==e)if("_Task_onError"!==e){if("_Task_nativeBinding"===e){r.root.cancel=r.root.callback(function(t){r.root=t,p(r)});break}if("_Task_receive"!==e)throw new Error(e);var n=r.mailbox;if(0===n.length)break;r.root=r.root.callback(n.shift()),++t}else r.stack={ctor:"_Task_onError",callback:r.root.callback,rest:r.stack},r.root=r.root.task,++t;else r.stack={ctor:"_Task_andThen",callback:r.root.callback,rest:r.stack},r.root=r.root.task,++t;else{for(;r.stack&&"_Task_andThen"===r.stack.ctor;)r.stack=r.stack.rest;if(null===r.stack)break;r.root=r.stack.callback(r.root.value),r.stack=r.stack.rest,++t}else{for(;r.stack&&"_Task_onError"===r.stack.ctor;)r.stack=r.stack.rest;if(null===r.stack)break;r.root=r.stack.callback(r.root.value),r.stack=r.stack.rest,++t}}return t<g?t+1:(p(r),t)}function p(t){b.push(t),m||(setTimeout(h,0),m=!0)}function h(){for(var t,r=0;r<g&&(t=b.shift());)t.root&&(r=d(r,t));if(!t)return void(m=!1);setTimeout(h,0)}var g=1e4,m=!1,b=[];return{succeed:t,fail:e,nativeBinding:n,andThen:r(o),onError:r(c),receive:i,spawn:a,kill:l,sleep:f,send:r(s),rawSpawn:u,rawSend:_}}(),Pr=Mr.batch,Fr=Pr({ctor:"[]"}),qr=qr||{};qr["!"]=r(function(t,r){return{ctor:"_Tuple2",_0:t,_1:Pr(r)}});var Ur=Mr.map,Jr=Mr.batch,$r=Jr({ctor:"[]"}),Dr=(Mr.map,Ir.succeed,Mr.sendToSelf),jr=Mr.sendToApp,zr=(Mr.programWithFlags,Mr.program,br),Wr=vr(k),Hr=wr(r(function(t,r){return r(t)})),Qr=e(function(t,r,e){var n=function(t){return xr({ctor:"::",_0:t,_1:{ctor:"::",_0:hr(e),_1:{ctor:"[]"}}})};return _(vr,function(o){var c=_(kr,t,o);if("Ok"===c.ctor){var i=_(kr,n(r),c._0);return"Ok"===i.ctor?br(i._0):mr(i._0)}return br(e)},gr)}),Vr=(n(function(t,r,e,n){return _(Hr,s(Qr,_(Nr,t,gr),r,e),n)}),n(function(t,r,e,n){return _(Hr,s(Qr,_(Br,t,gr),r,e),n)}),e(function(t,r,e){return _(Hr,_(Nr,t,r),e)}),e(function(t,r,e){return _(Hr,_(Br,t,r),e)})),Kr=Ir.onError,Gr=Ir.andThen,Xr=r(function(t,r){var e=r;return Ir.spawn(_(Gr,jr(t),e._0))}),Yr=Ir.fail,Zr=(r(function(t,r){return _(Kr,function(r){return Yr(t(r))},r)}),Ir.succeed),te=r(function(t,r){return _(Gr,function(r){return Zr(t(r))},r)}),re=e(function(t,r,e){return _(Gr,function(r){return _(Gr,function(e){return Zr(_(t,r,e))},e)},r)}),ee=(n(function(t,r,e,n){return _(Gr,function(r){return _(Gr,function(e){return _(Gr,function(n){return Zr(s(t,r,e,n))},n)},e)},r)}),o(function(t,r,e,n,o){return _(Gr,function(r){return _(Gr,function(e){return _(Gr,function(n){return _(Gr,function(o){return Zr(l(t,r,e,n,o))},o)},n)},e)},r)}),c(function(t,r,e,n,o,c){return _(Gr,function(r){return _(Gr,function(e){return _(Gr,function(n){return _(Gr,function(o){return _(Gr,function(c){return Zr(f(t,r,e,n,o,c))},c)},o)},n)},e)},r)}),function(t){var e=t;return"[]"===e.ctor?Zr({ctor:"[]"}):s(re,r(function(t,r){return{ctor:"::",_0:t,_1:r}}),e._0,ee(e._1))}),ne=e(function(t,r,e){return _(te,function(t){return{ctor:"_Tuple0"}},ee(_($,Xr(t),r)))}),oe=Zr({ctor:"_Tuple0"}),ce=e(function(t,r,e){return Zr({ctor:"_Tuple0"})}),ie=Mr.leaf("Task"),ue=function(t){return{ctor:"Perform",_0:t}},ae=r(function(t,r){return ie(ue(_(te,t,r)))}),_e=r(function(t,r){return ie(ue(_(Kr,function(r){return Zr(t(_t(r)))},_(Gr,function(r){return Zr(t(st(r)))},r))))}),se=r(function(t,r){return ue(_(te,t,r._0))});Mr.effectManagers.Task={pkg:"elm-lang/core",init:oe,onEffects:ne,onSelfMsg:ce,tag:"cmd",cmdMap:se};var le=function(){function t(t,r){return Ir.nativeBinding(function(e){var n=setInterval(function(){Ir.rawSpawn(r)},t);return function(){clearInterval(n)}})}return{now:Ir.nativeBinding(function(t){t(Ir.succeed(Date.now()))}),setInterval_:r(t)}}(),fe=le.setInterval_,de=e(function(t,r,e){var n=r;if("[]"===n.ctor)return Zr(e);var o=n._0,c=function(r){return s(de,t,n._1,s(ir,o,r,e))},i=Ir.spawn(_(fe,o,_(Dr,t,o)));return _(Gr,c,i)}),pe=r(function(t,r){var e=t,n=e._1,o=e._0,c=_(Lt,o,r);return"Nothing"===c.ctor?s(ir,o,{ctor:"::",_0:n,_1:{ctor:"[]"}},r):s(ir,o,{ctor:"::",_0:n,_1:c._0},r)}),he=le.now,ge=e(function(t,r,e){var n=_(Lt,r,e.taggers);if("Nothing"===n.ctor)return Zr(e);var o=function(r){return ee(_($,function(e){return _(jr,t,e(r))},n._0))};return _(Gr,function(t){return Zr(e)},_(Gr,o,he))}),ve=Mr.leaf("Time"),me=r(function(t,r){return{taggers:t,processes:r}}),be=Zr(_(me,jt,jt)),ke=e(function(t,r,o){var c=o,i=e(function(t,r,e){var n=e;return{ctor:"_Tuple3",_0:n._0,_1:n._1,_2:_(Gr,function(t){return n._2},Ir.kill(r))}}),u=n(function(t,r,e,n){var o=n;return{ctor:"_Tuple3",_0:o._0,_1:s(ir,t,e,o._1),_2:o._2}}),a=e(function(t,r,e){var n=e;return{ctor:"_Tuple3",_0:{ctor:"::",_0:t,_1:n._0},_1:n._1,_2:n._2}}),l=s(P,pe,jt,r),f=d(Nt,a,u,i,l,c.processes,{ctor:"_Tuple3",_0:{ctor:"[]"},_1:jt,_2:Zr({ctor:"_Tuple0"})}),p=f._0,h=f._1,g=f._2;return _(Gr,function(t){return Zr(_(me,l,t))},_(Gr,function(r){return s(de,t,p,h)},g))}),ye=r(function(t,r){return{ctor:"Every",_0:t,_1:r}}),we=(r(function(t,r){return ve(_(ye,t,r))}),r(function(t,r){var e=r;return _(ye,e._0,function(r){return t(e._1(r))})}));Mr.effectManagers.Time={pkg:"elm-lang/core",init:be,onEffects:ke,onSelfMsg:ge,tag:"sub",subMap:we};var Te,xe=function(){function t(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(t){return new RegExp(t.source,"gi")}function c(t){return new RegExp(t,"g")}function i(t,r){return null!==r.match(t)}function u(t,r,e){t="All"===t.ctor?1/0:t._0;for(var n,o=[],c=0,i=e,u=r.lastIndex,a=-1;c++<t&&(n=r.exec(i))&&a!==r.lastIndex;){for(var _=n.length-1,s=new Array(_);_>0;){var l=n[_];s[--_]=void 0===l?B:R(l)}o.push({match:n[0],submatches:L.fromArray(s),index:n.index,number:c}),a=r.lastIndex}return r.lastIndex=u,L.fromArray(o)}function a(t,r,e,n){function o(r){if(c++>=t)return r;for(var n=arguments.length-3,o=new Array(n);n>0;){var i=arguments[n];o[--n]=void 0===i?B:R(i)}return e({match:r,submatches:L.fromArray(o),index:arguments[arguments.length-2],number:c})}t="All"===t.ctor?1/0:t._0;var c=0;return n.replace(r,o)}function _(t,r,e){if((t="All"===t.ctor?1/0:t._0)===1/0)return L.fromArray(e.split(r));for(var n,o=e,c=[],i=r.lastIndex,u=r.lastIndex;t--&&(n=r.exec(o));)c.push(o.slice(i,n.index)),i=r.lastIndex;return c.push(o.slice(i)),r.lastIndex=u,L.fromArray(c)}return{regex:c,caseInsensitive:o,escape:t,contains:r(i),find:e(u),replace:n(a),split:e(_)}}(),Be=Ir.kill,Ne=(Ir.sleep,Ir.spawn),Re=(xe.split,xe.replace),Se=(xe.find,xe.contains),Ee=xe.caseInsensitive,Le=xe.regex,Ae=(xe.escape,n(function(t,r,e,n){return{match:t,submatches:r,index:e,number:n}}),{ctor:"All"}),Ce=function(){function t(t){return function(r,e,n){return Ir.nativeBinding(function(o){function c(t){var r=_(kr,e,t);"Ok"===r.ctor&&Ir.rawSpawn(n(r._0))}return t.addEventListener(r,c),function(){t.removeEventListener(r,c)}})}}function n(t,r){return Ir.nativeBinding(function(e){b(function(){var n=document.getElementById(t);if(null===n)return void e(Ir.fail({ctor:"NotFound",_0:t}));e(Ir.succeed(r(n)))})})}function o(t){return n(t,function(t){return t.focus(),v.Tuple0})}function c(t){return n(t,function(t){return t.blur(),v.Tuple0})}function i(t){return n(t,function(t){return t.scrollTop})}function u(t,r){return n(t,function(t){return t.scrollTop=r,v.Tuple0})}function a(t){return n(t,function(t){return t.scrollTop=t.scrollHeight,v.Tuple0})}function s(t){return n(t,function(t){return t.scrollLeft})}function l(t,r){return n(t,function(t){return t.scrollLeft=r,v.Tuple0})}function f(t){return n(t,function(t){return t.scrollLeft=t.scrollWidth,v.Tuple0})}function d(t,r){return n(r,function(r){switch(t.ctor){case"Content":return r.scrollWidth;case"VisibleContent":return r.clientWidth;case"VisibleContentWithBorders":return r.offsetWidth;case"VisibleContentWithBordersAndMargins":var e=r.getBoundingClientRect();return e.right-e.left}})}function p(t,r){return n(r,function(r){switch(t.ctor){case"Content":return r.scrollHeight;case"VisibleContent":return r.clientHeight;case"VisibleContentWithBorders":return r.offsetHeight;case"VisibleContentWithBordersAndMargins":var e=r.getBoundingClientRect();return e.bottom-e.top}})}var h={addEventListener:function(){},removeEventListener:function(){}},g=t("undefined"!=typeof document?document:h),m=t("undefined"!=typeof window?window:h),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(t){t()};return{onDocument:e(g),onWindow:e(m),focus:o,blur:c,getScrollTop:i,setScrollTop:r(u),getScrollLeft:s,setScrollLeft:r(l),toBottom:a,toRight:f,height:r(p),width:r(d)}}(),Oe=Ce.onWindow,Me=(Ce.onDocument,function(){function t(t){return{type:"text",text:t}}function o(t){return r(function(r,e){return c(t,r,e)})}function c(t,r,e){for(var n=h(r),o=n.namespace,c=n.facts,i=[],u=0;"[]"!==e.ctor;){var a=e._0;u+=a.descendantsCount||0,i.push(a),e=e._1}return u+=i.length,{type:"node",tag:t,facts:c,children:i,namespace:o,descendantsCount:u}}function i(t,r,e){for(var n=h(r),o=n.namespace,c=n.facts,i=[],u=0;"[]"!==e.ctor;){var a=e._0;u+=a._1.descendantsCount||0,i.push(a),e=e._1}return u+=i.length,{type:"keyed-node",tag:t,facts:c,children:i,namespace:o,descendantsCount:u}}function u(t,r,e){return{type:"custom",facts:h(t).facts,model:r,impl:e}}function a(t,r){return{type:"tagger",tagger:t,node:r,descendantsCount:1+(r.descendantsCount||0)}}function l(t,r,e){return{type:"thunk",func:t,args:r,thunk:e,node:void 0}}function f(t,r){return l(t,[r],function(){return t(r)})}function d(t,r,e){return l(t,[r,e],function(){return _(t,r,e)})}function p(t,r,e,n){return l(t,[r,e,n],function(){return s(t,r,e,n)})}function h(t){for(var r,e={};"[]"!==t.ctor;){var n=t._0,o=n.key;if(o===dt||o===pt||o===ft){var c=e[o]||{};c[n.realKey]=n.value,e[o]=c}else if(o===lt){for(var i=e[o]||{},u=n.value;"[]"!==u.ctor;){var a=u._0;i[a._0]=a._1,u=u._1}e[o]=i}else if("namespace"===o)r=n.value;else if("className"===o){var _=e[o];e[o]=void 0===_?n.value:_+" "+n.value}else e[o]=n.value;t=t._1}return{facts:e,namespace:r}}function g(t){return{key:lt,value:t}}function m(t,r){return{key:t,value:r}}function b(t,r){return{key:dt,realKey:t,value:r}}function k(t,r,e){return{key:pt,realKey:r,value:{value:e,namespace:t}}}function y(t,r,e){return{key:ft,realKey:t,value:{options:r,decoder:e}}}function w(t,r){return(t.options===r.options||t.options.stopPropagation===r.options.stopPropagation&&t.options.preventDefault===r.options.preventDefault)&&sr.equality(t.decoder,r.decoder)}function T(t,r){return r.key!==ft?r:y(r.realKey,r.value.options,_(Tr,t,r.value.decoder))}function x(t,r){switch(t.type){case"thunk":return t.node||(t.node=t.thunk()),x(t.node,r);case"tagger":for(var e=t.node,n=t.tagger;"tagger"===e.type;)"object"!=typeof n?n=[n,e.tagger]:n.push(e.tagger),e=e.node;var o={tagger:n,parent:r},c=x(e,o);return c.elm_event_node_ref=o,c;case"text":return ht.createTextNode(t.text);case"node":var c=t.namespace?ht.createElementNS(t.namespace,t.tag):ht.createElement(t.tag);B(c,r,t.facts);for(var i=t.children,u=0;u<i.length;u++)c.appendChild(x(i[u],r));return c;case"keyed-node":var c=t.namespace?ht.createElementNS(t.namespace,t.tag):ht.createElement(t.tag);B(c,r,t.facts);for(var i=t.children,u=0;u<i.length;u++)c.appendChild(x(i[u]._1,r));return c;case"custom":var c=t.impl.render(t.model);return B(c,r,t.facts),c}}function B(t,r,e){for(var n in e){var o=e[n];switch(n){case lt:N(t,o);break;case ft:R(t,r,o);break;case dt:E(t,o);break;case pt:L(t,o);break;case"value":t[n]!==o&&(t[n]=o);break;default:t[n]=o}}}function N(t,r){var e=t.style;for(var n in r)e[n]=r[n]}function R(t,r,e){var n=t.elm_handlers||{};for(var o in e){var c=n[o],i=e[o];if(void 0===i)t.removeEventListener(o,c),n[o]=void 0;else if(void 0===c){var c=S(r,i);t.addEventListener(o,c),n[o]=c}else c.info=i}t.elm_handlers=n}function S(t,r){function e(r){var n=e.info,o=_(sr.run,n.decoder,r);if("Ok"===o.ctor){var c=n.options;c.stopPropagation&&r.stopPropagation(),c.preventDefault&&r.preventDefault();for(var i=o._0,u=t;u;){var a=u.tagger;if("function"==typeof a)i=a(i);else for(var s=a.length;s--;)i=a[s](i);u=u.parent}}}return e.info=r,e}function E(t,r){for(var e in r){var n=r[e];void 0===n?t.removeAttribute(e):t.setAttribute(e,n)}}function L(t,r){for(var e in r){var n=r[e],o=n.namespace,c=n.value;void 0===c?t.removeAttributeNS(o,e):t.setAttributeNS(o,e,c)}}function A(t,r){var e=[];return O(t,r,e,0),e}function C(t,r,e){return{index:r,type:t,data:e,domNode:void 0,eventNode:void 0}}function O(t,r,e,n){if(t!==r){var o=t.type,c=r.type;if(o!==c)return void e.push(C("p-redraw",n,r));switch(c){case"thunk":for(var i=t.args,u=r.args,a=i.length,_=t.func===r.func&&a===u.length;_&&a--;)_=i[a]===u[a];if(_)return void(r.node=t.node);r.node=r.thunk();var s=[];return O(t.node,r.node,s,0),void(s.length>0&&e.push(C("p-thunk",n,s)));case"tagger":for(var l=t.tagger,f=r.tagger,d=!1,p=t.node;"tagger"===p.type;)d=!0,"object"!=typeof l?l=[l,p.tagger]:l.push(p.tagger),p=p.node;for(var h=r.node;"tagger"===h.type;)d=!0,"object"!=typeof f?f=[f,h.tagger]:f.push(h.tagger),h=h.node;return d&&l.length!==f.length?void e.push(C("p-redraw",n,r)):((d?M(l,f):l===f)||e.push(C("p-tagger",n,f)),void O(p,h,e,n+1));case"text":if(t.text!==r.text)return void e.push(C("p-text",n,r.text));return;case"node":if(t.tag!==r.tag||t.namespace!==r.namespace)return void e.push(C("p-redraw",n,r));var g=I(t.facts,r.facts);return void 0!==g&&e.push(C("p-facts",n,g)),void P(t,r,e,n);case"keyed-node":if(t.tag!==r.tag||t.namespace!==r.namespace)return void e.push(C("p-redraw",n,r));var g=I(t.facts,r.facts);return void 0!==g&&e.push(C("p-facts",n,g)),void F(t,r,e,n);case"custom":if(t.impl!==r.impl)return void e.push(C("p-redraw",n,r));var g=I(t.facts,r.facts);void 0!==g&&e.push(C("p-facts",n,g));var v=r.impl.diff(t,r);if(v)return void e.push(C("p-custom",n,v));return}}}function M(t,r){for(var e=0;e<t.length;e++)if(t[e]!==r[e])return!1;return!0}function I(t,r,e){var n;for(var o in t)if(o!==lt&&o!==ft&&o!==dt&&o!==pt)if(o in r){var c=t[o],i=r[o];c===i&&"value"!==o||e===ft&&w(c,i)||(n=n||{},n[o]=i)}else n=n||{},n[o]=void 0===e?"string"==typeof t[o]?"":null:e===lt?"":e===ft||e===dt?void 0:{namespace:t[o].namespace,value:void 0};else{var u=I(t[o],r[o]||{},o);u&&(n=n||{},n[o]=u)}for(var a in r)a in t||(n=n||{},n[a]=r[a]);return n}function P(t,r,e,n){var o=t.children,c=r.children,i=o.length,u=c.length;i>u?e.push(C("p-remove-last",n,i-u)):i<u&&e.push(C("p-append",n,c.slice(i)));for(var a=n,_=i<u?i:u,s=0;s<_;s++){a++;var l=o[s];O(l,c[s],e,a),a+=l.descendantsCount||0}}function F(t,r,e,n){for(var o=[],c={},i=[],u=t.children,a=r.children,_=u.length,s=a.length,l=0,f=0,d=n;l<_&&f<s;){var p=u[l],h=a[f],g=p._0,v=h._0,m=p._1,b=h._1;if(g!==v){var k=l+1<_,y=f+1<s;if(k)var w=u[l+1],T=w._0,x=w._1,B=v===T;if(y)var N=a[f+1],R=N._0,S=N._1,E=g===R;if(k&&y&&E&&B)d++,O(m,S,o,d),q(c,o,g,b,f,i),d+=m.descendantsCount||0,d++,U(c,o,g,x,d),d+=x.descendantsCount||0,l+=2,f+=2;else if(y&&E)d++,q(c,o,v,b,f,i),O(m,S,o,d),d+=m.descendantsCount||0,l+=1,f+=2;else if(k&&B)d++,U(c,o,g,m,d),d+=m.descendantsCount||0,d++,O(x,b,o,d),d+=x.descendantsCount||0,l+=2,f+=1;else{if(!k||!y||T!==R)break;d++,U(c,o,g,m,d),q(c,o,v,b,f,i),d+=m.descendantsCount||0,d++,O(x,S,o,d),d+=x.descendantsCount||0,l+=2,f+=2}}else d++,O(m,b,o,d),d+=m.descendantsCount||0,l++,f++}for(;l<_;){d++;var p=u[l],m=p._1;U(c,o,p._0,m,d),d+=m.descendantsCount||0,l++}for(var L;f<s;){L=L||[];var h=a[f];q(c,o,h._0,h._1,void 0,L),f++}(o.length>0||i.length>0||void 0!==L)&&e.push(C("p-reorder",n,{patches:o,inserts:i,endInserts:L}))}function q(t,r,e,n,o,c){var i=t[e];if(void 0===i)return i={tag:"insert",vnode:n,index:o,data:void 0},c.push({index:o,entry:i}),void(t[e]=i);if("remove"===i.tag){c.push({index:o,entry:i}),i.tag="move";var u=[];return O(i.vnode,n,u,i.index),i.index=o,void(i.data.data={patches:u,entry:i})}q(t,r,e+gt,n,o,c)}function U(t,r,e,n,o){var c=t[e];if(void 0===c){var i=C("p-remove",o,void 0);return r.push(i),void(t[e]={tag:"remove",vnode:n,index:o,data:i})}if("insert"===c.tag){c.tag="move";var u=[];O(n,c.vnode,u,o);var i=C("p-remove",o,{patches:u,entry:c});return void r.push(i)}U(t,r,e+gt,n,o)}function J(t,r,e,n){$(t,r,e,0,0,r.descendantsCount,n)}function $(t,r,e,n,o,c,i){for(var u=e[n],a=u.index;a===o;){var _=u.type;if("p-thunk"===_)J(t,r.node,u.data,i);else if("p-reorder"===_){u.domNode=t,u.eventNode=i;var s=u.data.patches;s.length>0&&$(t,r,s,0,o,c,i)}else if("p-remove"===_){u.domNode=t,u.eventNode=i;var l=u.data;if(void 0!==l){l.entry.data=t;var s=l.patches;s.length>0&&$(t,r,s,0,o,c,i)}}else u.domNode=t,u.eventNode=i;if(n++,!(u=e[n])||(a=u.index)>c)return n}switch(r.type){case"tagger":for(var f=r.node;"tagger"===f.type;)f=f.node;return $(t,f,e,n,o+1,c,t.elm_event_node_ref);case"node":for(var d=r.children,p=t.childNodes,h=0;h<d.length;h++){o++;var g=d[h],v=o+(g.descendantsCount||0);if(o<=a&&a<=v&&(n=$(p[h],g,e,n,o,v,i),!(u=e[n])||(a=u.index)>c))return n;o=v}return n;case"keyed-node":for(var d=r.children,p=t.childNodes,h=0;h<d.length;h++){o++;var g=d[h]._1,v=o+(g.descendantsCount||0);if(o<=a&&a<=v&&(n=$(p[h],g,e,n,o,v,i),!(u=e[n])||(a=u.index)>c))return n;o=v}return n;case"text":case"thunk":throw new Error("should never traverse `text` or `thunk` nodes like this")}}function D(t,r,e,n){return 0===e.length?t:(J(t,r,e,n),j(t,e))}function j(t,r){for(var e=0;e<r.length;e++){var n=r[e],o=n.domNode,c=z(o,n);o===t&&(t=c)}return t}function z(t,r){switch(r.type){case"p-redraw":return W(t,r.data,r.eventNode);case"p-facts":return B(t,r.eventNode,r.data),t;case"p-text":return t.replaceData(0,t.length,r.data),t;case"p-thunk":return j(t,r.data);case"p-tagger":return void 0!==t.elm_event_node_ref?t.elm_event_node_ref.tagger=r.data:t.elm_event_node_ref={tagger:r.data,parent:r.eventNode},t;case"p-remove-last":for(var e=r.data;e--;)t.removeChild(t.lastChild);return t;case"p-append":for(var n=r.data,e=0;e<n.length;e++)t.appendChild(x(n[e],r.eventNode));return t;case"p-remove":var o=r.data;if(void 0===o)return t.parentNode.removeChild(t),t;var c=o.entry;return void 0!==c.index&&t.parentNode.removeChild(t),c.data=j(t,o.patches),t;case"p-reorder":return H(t,r);case"p-custom":var i=r.data;return i.applyPatch(t,i.data);default:throw new Error("Ran into an unknown patch!")}}function W(t,r,e){var n=t.parentNode,o=x(r,e);return void 0===o.elm_event_node_ref&&(o.elm_event_node_ref=t.elm_event_node_ref),n&&o!==t&&n.replaceChild(o,t),o}function H(t,r){var e=r.data,n=Q(e.endInserts,r);t=j(t,e.patches);for(var o=e.inserts,c=0;c<o.length;c++){var i=o[c],u=i.entry,a="move"===u.tag?u.data:x(u.vnode,r.eventNode);t.insertBefore(a,t.childNodes[i.index])}return void 0!==n&&t.appendChild(n),t}function Q(t,r){if(void 0!==t){for(var e=ht.createDocumentFragment(),n=0;n<t.length;n++){var o=t[n],c=o.entry;e.appendChild("move"===c.tag?c.data:x(c.vnode,r.eventNode))}return e}}function V(t){return r(function(r,e){return function(n){return function(o,c,i){var u=t(n,c);void 0===i?Z(e,o,c,u):et(_(r,i,e),o,c,u)}}})}function K(t){var e=v.Tuple2(v.Tuple0,Fr);return _(vt,Te,{init:e,view:function(){return t},update:r(function(){return e}),subscriptions:function(){return $r}})()}function G(t,r){return function(t,e,n){if(void 0===e)return t;Y("The `"+r+"` module does not need flags.\nInitialize it with no arguments and you should be all set!",n)}}function X(t,r){return function(e,n,o){if(void 0===t){var c="Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like "+r+".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.";Y(c,o)}var i=_(sr.run,t,n);if("Ok"===i.ctor)return e(i._0);var c="Trying to initialize the `"+r+"` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n"+i._0;Y(c,o)}}function Y(t,r){throw r&&(r.innerHTML='<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">'+t+"</pre></div>"),new Error(t)}function Z(t,r,e,n){r.embed=function(r,e){for(;r.lastChild;)r.removeChild(r.lastChild);return Mr.initialize(n(t.init,e,r),t.update,t.subscriptions,tt(r,t.view))},r.fullscreen=function(r){return Mr.initialize(n(t.init,r,document.body),t.update,t.subscriptions,tt(document.body,t.view))}}function tt(t,r){return function(e,n){var o={tagger:e,parent:void 0},c=r(n),i=x(c,o);return t.appendChild(i),rt(i,r,c,o)}}function rt(t,r,e,n){function o(){switch(i){case"NO_REQUEST":throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.");case"PENDING_REQUEST":bt(o),i="EXTRA_REQUEST";var e=r(c),a=A(u,e);return t=D(t,u,a,n),void(u=e);case"EXTRA_REQUEST":return void(i="NO_REQUEST")}}var c,i="NO_REQUEST",u=e;return function(t){"NO_REQUEST"===i&&bt(o),i="PENDING_REQUEST",c=t}}function et(t,r,e,n){r.fullscreen=function(r){var o={doc:void 0};return Mr.initialize(n(t.init,r,document.body),t.update(nt(o)),t.subscriptions,ot(e,document.body,o,t.view,t.viewIn,t.viewOut))},r.embed=function(r,o){var c={doc:void 0};return Mr.initialize(n(t.init,o,r),t.update(nt(c)),t.subscriptions,ot(e,r,c,t.view,t.viewIn,t.viewOut))}}function nt(t){return Ir.nativeBinding(function(r){var e=t.doc;if(e){var n=e.getElementsByClassName("debugger-sidebar-messages")[0];n&&(n.scrollTop=n.scrollHeight)}r(Ir.succeed(v.Tuple0))})}function ot(t,r,e,n,o,c){return function(i,u){var a={tagger:i,parent:void 0},_={tagger:i,parent:void 0},s=n(u),l=x(s,a);r.appendChild(l);var f=rt(l,n,s,a),d=o(u)._1,p=x(d,_);r.appendChild(p);var h=ut(a,p,o),g=rt(p,h,d,_),v=ct(u,c,_,r,t,e);return function(t){f(t),g(t),v(t)}}}function ct(t,r,e,n,o,c){var i,u;return function(t){if(t.isDebuggerOpen){if(!c.doc)return i=r(t),void(u=it(o,c,i,e));ht=c.doc;var n=r(t),a=A(i,n);u=D(u,i,a,e),i=n,ht=document}}}function it(t,r,e,n){function o(){r.doc=void 0,u.close()}var c=screen.width-900,i=screen.height-360,u=window.open("","","width=900,height=360,left="+c+",top="+i);ht=u.document,r.doc=ht,ht.title="Debugger - "+t,ht.body.style.margin="0",ht.body.style.padding="0";var a=x(e,n);return ht.body.appendChild(a),ht.addEventListener("keydown",function(t){t.metaKey&&82===t.which&&window.location.reload(),38===t.which&&(n.tagger({ctor:"Up"}),t.preventDefault()),40===t.which&&(n.tagger({ctor:"Down"}),t.preventDefault())}),window.addEventListener("unload",o),u.addEventListener("unload",function(){r.doc=void 0,window.removeEventListener("unload",o),n.tagger({ctor:"Close"})}),ht=document,a}function ut(t,r,e){var n,o=st(r),c="Normal",i=t.tagger,u=function(){};return function(r){var a=e(r),_=a._0.ctor;return t.tagger="Normal"===_?i:u,c!==_&&(at("removeEventListener",o,c),at("addEventListener",o,_),"Normal"===c&&(n=document.body.style.overflow,document.body.style.overflow="hidden"),"Normal"===_&&(document.body.style.overflow=n),c=_),a._1}}function at(t,r,e){switch(e){case"Normal":return;case"Pause":return _t(t,r,kt);case"Message":return _t(t,r,yt)}}function _t(t,r,e){for(var n=0;n<e.length;n++)document.body[t](e[n],r,!0)}function st(t){return function(r){if("keydown"!==r.type||!r.metaKey||82!==r.which){for(var e="scroll"===r.type||"wheel"===r.type,n=r.target;null!==n;){if("elm-overlay-message-details"===n.className&&e)return;if(n===t&&!e)return;n=n.parentNode}r.stopPropagation(),r.preventDefault()}}}var lt="STYLE",ft="EVENT",dt="ATTR",pt="ATTR_NS",ht="undefined"!=typeof document?document:{},gt="_elmW6BL",vt=V(G),mt=V(X),bt="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(t){setTimeout(t,1e3/60)},kt=["click","dblclick","mousemove","mouseup","mousedown","mouseenter","mouseleave","touchstart","touchend","touchcancel","touchmove","pointerdown","pointerup","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointercancel","dragstart","drag","dragend","dragenter","dragover","dragleave","drop","keyup","keydown","keypress","input","change","focus","blur"],yt=kt.concat("wheel","scroll");return{node:o,text:t,custom:u,map:r(a),on:e(y),style:g,property:r(m),attribute:r(b),attributeNS:e(k),mapProperty:r(T),lazy:r(f),lazy2:e(d),lazy3:n(p),keyedNode:e(i),program:vt,programWithFlags:mt,staticProgram:K}}()),Ie=function(t){return _(Me.programWithFlags,void 0,t)},Pe=function(t){return _(Me.program,Te,t)},Fe=(Me.keyedNode,Me.lazy3,Me.lazy2,Me.lazy,{stopPropagation:!1,preventDefault:!1}),qe=Me.on,Ue=r(function(t,r){return s(qe,t,Fe,r)}),Je=Me.style,$e=(Me.mapProperty,Me.attributeNS,Me.attribute),De=Me.property,je=(Me.map,Me.text),ze=Me.node,We=(r(function(t,r){return{stopPropagation:t,preventDefault:r}}),Ie),He=Pe,Qe=je,Ve=ze,Ke=(Ve("body"),Ve("section")),Ge=Ve("nav"),Xe=(Ve("article"),Ve("aside"),Ve("h1")),Ye=(Ve("h2"),Ve("h3"),Ve("h4"),Ve("h5")),Ze=(Ve("h6"),Ve("header")),tn=(Ve("footer"),Ve("address"),Ve("main")),rn=Ve("p"),en=(Ve("hr"),Ve("pre"),Ve("blockquote"),Ve("ol"),Ve("ul")),nn=Ve("li"),on=(Ve("dl"),Ve("dt"),Ve("dd"),Ve("figure"),Ve("figcaption"),Ve("div")),cn=Ve("a"),un=(Ve("em"),Ve("strong"),Ve("small"),Ve("s"),Ve("cite"),Ve("q"),Ve("dfn"),Ve("abbr"),Ve("time"),Ve("code"),Ve("var"),Ve("samp"),Ve("kbd"),Ve("sub"),Ve("sup"),Ve("i")),an=(Ve("b"),Ve("u"),Ve("mark"),Ve("ruby"),Ve("rt"),Ve("rp"),Ve("bdi"),Ve("bdo"),Ve("span")),_n=(Ve("br"),Ve("wbr"),Ve("ins"),Ve("del"),Ve("img")),sn=(Ve("iframe"),Ve("embed"),Ve("object"),Ve("param"),Ve("video"),Ve("audio"),Ve("source"),Ve("track"),Ve("canvas"),Ve("math"),Ve("table"),Ve("caption"),Ve("colgroup"),Ve("col"),Ve("tbody"),Ve("thead"),Ve("tfoot"),Ve("tr"),Ve("td"),Ve("th"),Ve("form")),ln=(Ve("fieldset"),Ve("legend"),Ve("label"),Ve("input")),fn=(Ve("button"),Ve("select"),Ve("datalist"),Ve("optgroup"),Ve("option"),Ve("textarea"),Ve("keygen"),Ve("output"),Ve("progress"),Ve("meter"),Ve("details"),Ve("summary"),Ve("menuitem"),Ve("menu"),$e),dn=function(t){return _(fn,"maxlength",w(t))},pn=De,hn=r(function(t,r){return _(pn,t,dr(r))}),gn=function(t){return _(hn,"className",t)},vn=function(t){return _(hn,"src",t)},mn=function(t){return _(hn,"type",t)},bn=function(t){return _(hn,"value",t)},kn=function(t){return _(hn,"placeholder",t)},yn=function(t){return _(hn,"href",t)},wn=(r(function(t,r){return _(pn,t,fr(r))}),function(t){return gn(_(vt," ",_($,Or,_(D,Cr,t))))}),Tn=Je,xn=(_(Br,"keyCode",Er),_(Nr,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"checked",_1:{ctor:"[]"}}},Lr),_(Nr,{ctor:"::",_0:"target",_1:{ctor:"::",_0:"value",_1:{ctor:"[]"}}},Ar)),Bn=Fe,Nn=Ue,Rn=(v.update(Bn,{preventDefault:!0}),function(t){return _(Nn,"input",_(Tr,t,xn))}),Sn=function(t){return _(Nn,"click",br(t))},En=(r(function(t,r){return{stopPropagation:t,preventDefault:r}}),function(){function t(t){return encodeURIComponent(t)}function e(t){try{return R(decodeURIComponent(t))}catch(t){return B}}function n(t,r){return Ir.nativeBinding(function(e){var n=new XMLHttpRequest;o(n,r),n.addEventListener("error",function(){e(Ir.fail({ctor:"NetworkError"}))}),n.addEventListener("timeout",function(){e(Ir.fail({ctor:"Timeout"}))}),n.addEventListener("load",function(){e(u(n,t.expect.responseToResult))});try{n.open(t.method,t.url,!0)}catch(r){return e(Ir.fail({ctor:"BadUrl",_0:t.url}))}return c(n,t),i(n,t.body),function(){n.abort()}})}function o(t,r){"Nothing"!==r.ctor&&t.addEventListener("progress",function(t){t.lengthComputable&&Ir.rawSpawn(r._0({bytes:t.loaded,bytesExpected:t.total}))})}function c(t,r){function e(r){t.setRequestHeader(r._0,r._1)}_($,e,r.headers),t.responseType=r.expect.responseType,t.withCredentials=r.withCredentials,"Just"===r.timeout.ctor&&(t.timeout=r.timeout._0)}function i(t,r){switch(r.ctor){case"EmptyBody":return void t.send();case"StringBody":return t.setRequestHeader("Content-Type",r._0),void t.send(r._1);case"FormDataBody":return void t.send(r._0)}}function u(t,r){var e=a(t);if(t.status<200||300<=t.status)return e.body=t.responseText,Ir.fail({ctor:"BadStatus",_0:e});var n=r(e);return"Ok"===n.ctor?Ir.succeed(n._0):(e.body=t.responseText,Ir.fail({ctor:"BadPayload",_0:n._0,_1:e}))}function a(t){return{status:{code:t.status,message:t.statusText},headers:l(t.getAllResponseHeaders()),url:t.responseURL,body:t.response}}function l(t){var r=jt;if(!t)return r;for(var e=t.split("\r\n"),n=e.length;n--;){var o=e[n],c=o.indexOf(": ");if(c>0){var i=o.substring(0,c),u=o.substring(c+2);r=s(cr,i,function(t){return R("Just"===t.ctor?u+", "+t._0:u)},r)}}return r}function f(t){return{responseType:"text",responseToResult:t}}function d(t,r){return{responseType:r.responseType,responseToResult:function(e){var n=r.responseToResult(e);return _(lt,t,n)}}}function p(t){for(var r=new FormData;"[]"!==t.ctor;){var e=t._0;r.append(e._0,e._1),t=t._1}return{ctor:"FormDataBody",_0:r}}return{toTask:r(n),expectStringResponse:f,mapExpect:r(d),multipart:p,encodeUri:t,decodeUri:e}}()),Ln=(r(function(t,r){return v.update(r,{expect:_(En.mapExpect,t,r.expect)})}),i(function(t,r,e,n,o,c,i){return{method:t,headers:r,url:e,body:n,expect:o,timeout:c,withCredentials:i}}),function(t){return{ctor:"Request",_0:t}}),An=r(function(t,r){return{ctor:"StringBody",_0:t,_1:r}}),Cn={ctor:"EmptyBody"},On=r(function(t,r){return{ctor:"Header",_0:t,_1:r}}),Mn=En.decodeUri,In=(En.encodeUri,En.expectStringResponse),Pn=function(t){return In(function(r){return _(yr,t,r.body)})},Fn=(In(function(t){return st(t.body)}),En.multipart,function(t){return _(An,"application/json",_(pr,0,t))}),qn=Cn,Un=On,Jn=Ln,$n=e(function(t,r,e){return Jn({method:"POST",headers:{ctor:"[]"},url:t,body:r,expect:Pn(e),timeout:B,withCredentials:!1})}),Dn=(r(function(t,r){return Jn({method:"GET",headers:{ctor:"[]"},url:t,body:qn,expect:Pn(r),timeout:B,withCredentials:!1})}),function(t){var r=t;return _(En.toTask,r._0,B)}),jn=r(function(t,r){return _(_e,t,Dn(r))}),zn=(n(function(t,r,e,n){return{url:t,status:r,headers:e,body:n}}),r(function(t,r){return{ctor:"BadPayload",_0:t,_1:r}}),r(function(t,r){return{ctor:"StringPart",_0:t,_1:r}}),function(){function t(t){return Ir.nativeBinding(function(r){0!==t&&history.go(t),r(Ir.succeed(v.Tuple0))})}function r(t){return Ir.nativeBinding(function(r){history.pushState({},"",t),r(Ir.succeed(c()))})}function e(t){return Ir.nativeBinding(function(r){history.replaceState({},"",t),r(Ir.succeed(c()))})}function n(t){return Ir.nativeBinding(function(r){document.location.reload(t),r(Ir.succeed(v.Tuple0))})}function o(t){return Ir.nativeBinding(function(r){try{window.location=t}catch(t){document.location.reload(!1)}r(Ir.succeed(v.Tuple0))})}function c(){var t=document.location;return{href:t.href,host:t.host,hostname:t.hostname,protocol:t.protocol,origin:t.origin,port_:t.port,pathname:t.pathname,search:t.search,hash:t.hash,username:t.username,password:t.password}}function i(){return-1!==window.navigator.userAgent.indexOf("Trident")}return{go:t,setLocation:o,reloadPage:n,pushState:r,replaceState:e,getLocation:c,isInternetExplorer11:i}}()),Wn=zn.replaceState,Hn=zn.pushState,Qn=zn.go,Vn=zn.reloadPage,Kn=zn.setLocation,Gn=Gn||{};Gn["&>"]=r(function(t,r){return _(Gr,function(t){return r},t)});var Xn=e(function(t,r,e){var n=function(r){return _(jr,t,r._0(e))};return _(Gn["&>"],ee(_($,n,r)),Zr({ctor:"_Tuple0"}))}),Yn=e(function(t,r,e){var n=e;switch(n.ctor){case"Jump":return Qn(n._0);case"New":return _(Gr,_(Xn,t,r),Hn(n._0));case"Modify":return _(Gr,_(Xn,t,r),Wn(n._0));case"Visit":return Kn(n._0);default:return Vn(n._0)}}),Zn=function(t){var r=t;return"Normal"===r.ctor?Be(r._0):_(Gn["&>"],Be(r._0),Be(r._1))},to=e(function(t,r,e){return _(Gn["&>"],s(Xn,t,e.subs,r),Zr(e))}),ro=Mr.leaf("Navigation"),eo=Mr.leaf("Navigation"),no=r(function(t,r){return{subs:t,popWatcher:r}}),oo=Zr(_(no,{ctor:"[]"},B)),co=function(t){return{ctor:"Reload",_0:t}},io=(eo(co(!1)),eo(co(!0)),function(t){return{ctor:"Visit",_0:t}}),uo=function(t){return{ctor:"Modify",_0:t}},ao=function(t){return{ctor:"New",_0:t}},_o=function(t){return eo(ao(t))},so=function(t){return{ctor:"Jump",_0:t}},lo=r(function(t,r){var e=r;switch(e.ctor){case"Jump":return so(e._0);case"New":return ao(e._0);case"Modify":return uo(e._0);case"Visit":return io(e._0);default:return co(e._0)}}),fo=function(t){return{ctor:"Monitor",_0:t}},po=(r(function(t,r){var e=r.init(zn.getLocation({ctor:"_Tuple0"})),n=function(e){return Jr({ctor:"::",_0:ro(fo(t)),_1:{ctor:"::",_0:r.subscriptions(e),_1:{ctor:"[]"}}})};return He({init:e,view:r.view,update:r.update,subscriptions:n})}),r(function(t,r){var e=function(t){return _(r.init,t,zn.getLocation({ctor:"_Tuple0"}))},n=function(e){return Jr({ctor:"::",_0:ro(fo(t)),_1:{ctor:"::",_0:r.subscriptions(e),_1:{ctor:"[]"}}})};return We({init:e,view:r.view,update:r.update,subscriptions:n})})),ho=r(function(t,r){var e=r;return fo(function(r){return t(e._0(r))})}),go=r(function(t,r){return{ctor:"InternetExplorer",_0:t,_1:r}}),vo=function(t){return{ctor:"Normal",_0:t}},mo=function(t){var r=function(r){return _(Dr,t,zn.getLocation({ctor:"_Tuple0"}))};return zn.isInternetExplorer11({ctor:"_Tuple0"})?s(re,go,Ne(s(Oe,"popstate",gr,r)),Ne(s(Oe,"hashchange",gr,r))):_(te,vo,Ne(s(Oe,"popstate",gr,r)))},bo=n(function(t,r,e,n){var o=n,c=o.popWatcher,i=function(){var r={ctor:"_Tuple2",_0:e,_1:c};t:do{if("[]"===r._0.ctor){if("Just"===r._1.ctor)return _(Gn["&>"],Zn(r._1._0),Zr(_(no,e,B)));break t}if("Nothing"===r._1.ctor)return _(te,function(t){return _(no,e,R(t))},mo(t));break t}while(!1);return Zr(_(no,e,c))}();return _(Gn["&>"],ee(_($,_(Yn,t,e),r)),i)});Mr.effectManagers.Navigation={pkg:"elm-lang/navigation",init:oo,onEffects:bo,onSelfMsg:to,tag:"fx",cmdMap:lo,subMap:ho};var ko=function(){return{size:Ir.nativeBinding(function(t){t(Ir.succeed({width:window.innerWidth,height:window.innerHeight}))})}}(),yo=yo||{};yo["&>"]=r(function(t,r){return _(Gr,function(t){return r},t)});var wo=e(function(t,r,e){var n=e;if("Nothing"===n.ctor)return Zr(e);var o=function(e){return _(jr,t,e._0(r))};return _(yo["&>"],ee(_($,o,n._0.subs)),Zr(e))}),To=Zr(B),xo=ko.size,Bo=(_(te,function(t){return t.width},xo),_(te,function(t){return t.height},xo),e(function(t,r,e){var n={ctor:"_Tuple2",_0:e,_1:r};return"Nothing"===n._0.ctor?"[]"===n._1.ctor?Zr(B):_(Gr,function(t){return Zr(R({subs:r,pid:t}))},Ne(s(Oe,"resize",br({ctor:"_Tuple0"}),function(r){return _(Gr,Dr(t),xo)}))):"[]"===n._1.ctor?_(yo["&>"],Be(n._0._0.pid),Zr(B)):Zr(R({subs:r,pid:n._0._0.pid}))})),No=Mr.leaf("Window"),Ro=r(function(t,r){return{width:t,height:r}}),So=function(t){return{ctor:"MySub",_0:t}},Eo=function(t){return No(So(t))},Lo=r(function(t,r){var e=r;return So(function(r){return t(e._0(r))})});Mr.effectManagers.Window={pkg:"elm-lang/window",init:To,onEffects:Bo,onSelfMsg:wo,tag:"sub",subMap:Lo};var Ao=function(){function t(t,r,e){var n={options:t,markdown:e};return Me.custom(r,n,i)}function r(t){var r=u(t.markdown,c(t.options)),e=document.createElement("div");return e.innerHTML=r,e}function n(t,r){return t.model.markdown===r.model.markdown&&t.model.options===r.model.options?null:{applyPatch:o,data:u(r.model.markdown,c(r.model.options))}}function o(t,r){return t.innerHTML=r,t}function c(t){function r(r,e){return e||"Just"!==t.defaultHighlighting.ctor||(e=t.defaultHighlighting._0),"undefined"!=typeof hljs&&e&&hljs.listLanguages().indexOf(e)>=0?hljs.highlight(e,r,!0).value:r}var e=t.githubFlavored;return"Just"===e.ctor?{highlight:r,gfm:!0,tables:e._0.tables,breaks:e._0.breaks,sanitize:t.sanitize,smartypants:t.smartypants}:{highlight:r,gfm:!1,tables:!1,breaks:!1,sanitize:t.sanitize,smartypants:t.smartypants}}var i={render:r,diff:n},u=function(){var t={},r=t.exports={};return function(){function e(t){this.tokens=[],this.tokens.links={},this.options=t||l.defaults,this.rules=f.normal,this.options.gfm&&(this.options.tables?this.rules=f.tables:this.rules=f.gfm)}function n(t,r){if(this.options=r||l.defaults,this.links=t,this.rules=d.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=d.breaks:this.rules=d.gfm:this.options.pedantic&&(this.rules=d.pedantic)}function o(t){this.options=t||{}}function c(t){this.tokens=[],this.token=null,this.options=t||l.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(t,r){return t.replace(r?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(t,r){return r=r.toLowerCase(),"colon"===r?":":"#"===r.charAt(0)?"x"===r.charAt(1)?String.fromCharCode(parseInt(r.substring(2),16)):String.fromCharCode(+r.substring(1)):""})}function a(t,r){return t=t.source,r=r||"",function e(n,o){return n?(o=o.source||o,o=o.replace(/(^|[^\[])\^/g,"$1"),t=t.replace(n,o),e):new RegExp(t,r)}}function _(){}function s(t){for(var r,e,n=1;n<arguments.length;n++){r=arguments[n];for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}function l(t,r,n){if(n||"function"==typeof r){n||(n=r,r=null),r=s({},l.defaults,r||{});var o,u,a=r.highlight,_=0;try{o=e.lex(t,r)}catch(t){return n(t)}u=o.length;var f=function(t){if(t)return r.highlight=a,n(t);var e;try{e=c.parse(o,r)}catch(r){t=r}return r.highlight=a,t?n(t):n(null,e)};if(!a||a.length<3)return f();if(delete r.highlight,!u)return f();for(;_<o.length;_++)!function(t){"code"!==t.type?--u||f():a(t.text,t.lang,function(r,e){return r?f(r):null==e||e===t.text?--u||f():(t.text=e,t.escaped=!0,void(--u||f()))})}(o[_])}else try{return r&&(r=s({},l.defaults,r)),c.parse(e.lex(t,r),r)}catch(t){if(t.message+="\nPlease report this to https://github.com/chjj/marked.",(r||l.defaults).silent)return"<p>An error occured:</p><pre>"+i(t.message+"",!0)+"</pre>";throw t}}var f={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:_,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:_,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:_,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};f.bullet=/(?:[*+-]|\d+\.)/,f.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,f.item=a(f.item,"gm")(/bull/g,f.bullet)(),f.list=a(f.list)(/bull/g,f.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+f.def.source+")")(),f.blockquote=a(f.blockquote)("def",f.def)(),f._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",f.html=a(f.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,f._tag)(),f.paragraph=a(f.paragraph)("hr",f.hr)("heading",f.heading)("lheading",f.lheading)("blockquote",f.blockquote)("tag","<"+f._tag)("def",f.def)(),f.normal=s({},f),f.gfm=s({},f.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),f.gfm.paragraph=a(f.paragraph)("(?!","(?!"+f.gfm.fences.source.replace("\\1","\\2")+"|"+f.list.source.replace("\\1","\\3")+"|")(),f.tables=s({},f.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),e.rules=f,e.lex=function(t,r){return new e(r).lex(t)},e.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},e.prototype.token=function(t,r,e){for(var n,o,c,i,u,a,_,s,l,t=t.replace(/^ +$/gm,"");t;)if((c=this.rules.newline.exec(t))&&(t=t.substring(c[0].length),c[0].length>1&&this.tokens.push({type:"space"})),c=this.rules.code.exec(t))t=t.substring(c[0].length),c=c[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?c:c.replace(/\n+$/,"")});else if(c=this.rules.fences.exec(t))t=t.substring(c[0].length),this.tokens.push({type:"code",lang:c[2],text:c[3]||""});else if(c=this.rules.heading.exec(t))t=t.substring(c[0].length),this.tokens.push({type:"heading",depth:c[1].length,text:c[2]});else if(r&&(c=this.rules.nptable.exec(t))){for(t=t.substring(c[0].length),a={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/\n$/,"").split("\n")},s=0;s<a.align.length;s++)/^ *-+: *$/.test(a.align[s])?a.align[s]="right":/^ *:-+: *$/.test(a.align[s])?a.align[s]="center":/^ *:-+ *$/.test(a.align[s])?a.align[s]="left":a.align[s]=null;for(s=0;s<a.cells.length;s++)a.cells[s]=a.cells[s].split(/ *\| */);this.tokens.push(a)}else if(c=this.rules.lheading.exec(t))t=t.substring(c[0].length),this.tokens.push({type:"heading",depth:"="===c[2]?1:2,text:c[1]});else if(c=this.rules.hr.exec(t))t=t.substring(c[0].length),this.tokens.push({type:"hr"});else if(c=this.rules.blockquote.exec(t))t=t.substring(c[0].length),this.tokens.push({type:"blockquote_start"}),c=c[0].replace(/^ *> ?/gm,""),this.token(c,r,!0),this.tokens.push({type:"blockquote_end"});else if(c=this.rules.list.exec(t)){for(t=t.substring(c[0].length),i=c[2],this.tokens.push({type:"list_start",ordered:i.length>1}),c=c[0].match(this.rules.item),n=!1,l=c.length,s=0;s<l;s++)a=c[s],_=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(_-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+_+"}","gm"),"")),this.options.smartLists&&s!==l-1&&(u=f.bullet.exec(c[s+1])[0],i===u||i.length>1&&u.length>1||(t=c.slice(s+1).join("\n")+t,s=l-1)),o=n||/\n\n(?!\s*$)/.test(a),s!==l-1&&(n="\n"===a.charAt(a.length-1),o||(o=n)),this.tokens.push({type:o?"loose_item_start":"list_item_start"}),this.token(a,!1,e),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(c=this.rules.html.exec(t))t=t.substring(c[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===c[1]||"script"===c[1]||"style"===c[1]),text:c[0]});else if(!e&&r&&(c=this.rules.def.exec(t)))t=t.substring(c[0].length),this.tokens.links[c[1].toLowerCase()]={href:c[2],title:c[3]};else if(r&&(c=this.rules.table.exec(t))){for(t=t.substring(c[0].length),a={type:"table",header:c[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:c[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:c[3].replace(/(?: *\| *)?\n$/,"").split("\n")},s=0;s<a.align.length;s++)/^ *-+: *$/.test(a.align[s])?a.align[s]="right":/^ *:-+: *$/.test(a.align[s])?a.align[s]="center":/^ *:-+ *$/.test(a.align[s])?a.align[s]="left":a.align[s]=null;for(s=0;s<a.cells.length;s++)a.cells[s]=a.cells[s].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(r&&(c=this.rules.paragraph.exec(t)))t=t.substring(c[0].length),this.tokens.push({type:"paragraph",text:"\n"===c[1].charAt(c[1].length-1)?c[1].slice(0,-1):c[1]});else if(c=this.rules.text.exec(t))t=t.substring(c[0].length),this.tokens.push({type:"text",text:c[0]});else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0));return this.tokens};var d={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:_,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:_,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};d._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,d._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,d.link=a(d.link)("inside",d._inside)("href",d._href)(),d.reflink=a(d.reflink)("inside",d._inside)(),d.normal=s({},d),d.pedantic=s({},d.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),d.gfm=s({},d.normal,{escape:a(d.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:a(d.text)("]|","~]|")("|","|https?://|")()}),d.breaks=s({},d.gfm,{br:a(d.br)("{2,}","*")(),text:a(d.gfm.text)("{2,}","*")()}),n.rules=d,n.output=function(t,r,e){return new n(r,e).output(t)},n.prototype.output=function(t){for(var r,e,n,o,c="";t;)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),c+=o[1];else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),"@"===o[2]?(e=":"===o[1].charAt(6)?this.mangle(o[1].substring(7)):this.mangle(o[1]),n=this.mangle("mailto:")+e):(e=i(o[1]),n=e),c+=this.renderer.link(n,null,e);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),t=t.substring(o[0].length),c+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):i(o[0]):o[0];else if(o=this.rules.link.exec(t))t=t.substring(o[0].length),this.inLink=!0,c+=this.outputLink(o,{href:o[2],title:o[3]}),this.inLink=!1;else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),r=(o[2]||o[1]).replace(/\s+/g," "),!(r=this.links[r.toLowerCase()])||!r.href){c+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,c+=this.outputLink(o,r),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),c+=this.renderer.strong(this.output(o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),c+=this.renderer.em(this.output(o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),c+=this.renderer.codespan(i(o[2],!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),c+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),c+=this.renderer.del(this.output(o[1]));else if(o=this.rules.text.exec(t))t=t.substring(o[0].length),c+=this.renderer.text(i(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else t=t.substring(o[0].length),e=i(o[1]),n=e,c+=this.renderer.link(n,null,e);return c},n.prototype.outputLink=function(t,r){var e=i(r.href),n=r.title?i(r.title):null;return"!"!==t[0].charAt(0)?this.renderer.link(e,n,this.output(t[1])):this.renderer.image(e,n,i(t[1]))},n.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):t},n.prototype.mangle=function(t){if(!this.options.mangle)return t;for(var r,e="",n=t.length,o=0;o<n;o++)r=t.charCodeAt(o),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e},o.prototype.code=function(t,r,e){if(this.options.highlight){var n=this.options.highlight(t,r);null!=n&&n!==t&&(e=!0,t=n)}return r?'<pre><code class="'+this.options.langPrefix+i(r,!0)+'">'+(e?t:i(t,!0))+"\n</code></pre>\n":"<pre><code>"+(e?t:i(t,!0))+"\n</code></pre>"},o.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},o.prototype.html=function(t){return t},o.prototype.heading=function(t,r,e){return"<h"+r+' id="'+this.options.headerPrefix+e.toLowerCase().replace(/[^\w]+/g,"-")+'">'+t+"</h"+r+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(t,r){var e=r?"ol":"ul";return"<"+e+">\n"+t+"</"+e+">\n"},o.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},o.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},o.prototype.table=function(t,r){return"<table>\n<thead>\n"+t+"</thead>\n<tbody>\n"+r+"</tbody>\n</table>\n"},o.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},o.prototype.tablecell=function(t,r){var e=r.header?"th":"td";return(r.align?"<"+e+' style="text-align:'+r.align+'">':"<"+e+">")+t+"</"+e+">\n"},o.prototype.strong=function(t){return"<strong>"+t+"</strong>"},o.prototype.em=function(t){return"<em>"+t+"</em>"},o.prototype.codespan=function(t){return"<code>"+t+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(t){return"<del>"+t+"</del>"},o.prototype.link=function(t,r,e){if(this.options.sanitize){try{var n=decodeURIComponent(u(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return""}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return""}var o='<a href="'+t+'"';return r&&(o+=' title="'+r+'"'),o+=">"+e+"</a>"},o.prototype.image=function(t,r,e){var n='<img src="'+t+'" alt="'+e+'"';return r&&(n+=' title="'+r+'"'),n+=this.options.xhtml?"/>":">"},o.prototype.text=function(t){return t},c.parse=function(t,r,e){return new c(r,e).parse(t)},c.prototype.parse=function(t){this.inline=new n(t.links,this.options,this.renderer),this.tokens=t.reverse();for(var r="";this.next();)r+=this.tok();return r},c.prototype.next=function(){return this.token=this.tokens.pop()},c.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},c.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text;return this.inline.output(t)},c.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var t,r,e,n,o="",c="";for(e="",t=0;t<this.token.header.length;t++)({header:!0,align:this.token.align[t]}),e+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(o+=this.renderer.tablerow(e),t=0;t<this.token.cells.length;t++){for(r=this.token.cells[t],e="",n=0;n<r.length;n++)e+=this.renderer.tablecell(this.inline.output(r[n]),{header:!1,align:this.token.align[n]});c+=this.renderer.tablerow(e)}return this.renderer.table(o,c);case"blockquote_start":for(var c="";"blockquote_end"!==this.next().type;)c+=this.tok();return this.renderer.blockquote(c);case"list_start":for(var c="",i=this.token.ordered;"list_end"!==this.next().type;)c+=this.tok();return this.renderer.list(c,i);case"list_item_start":for(var c="";"list_item_end"!==this.next().type;)c+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(c);case"loose_item_start":for(var c="";"list_item_end"!==this.next().type;)c+=this.tok();return this.renderer.listitem(c);case"html":var u=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(u);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},_.exec=_,l.options=l.setOptions=function(t){return s(l.defaults,t),l},l.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new o,xhtml:!1},l.Parser=c,l.parser=c.parse,l.Renderer=o,l.Lexer=e,l.lexer=e.lex,l.InlineLexer=n,l.inlineLexer=n.output,l.parse=l,void 0!==t&&"object"==typeof r?t.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):this.marked=l}.call(function(){return this||("undefined"!=typeof window?window:global)}()),t.exports}();return{toHtml:e(t)}}(),Co=(Ao.toHtml,{githubFlavored:R({tables:!1,breaks:!1}),defaultHighlighting:B,sanitize:!1,smartypants:!1}),Oo=r(function(t,r){return s(Ao.toHtml,Co,t,r)}),Mo=(n(function(t,r,e,n){return{githubFlavored:t,defaultHighlighting:r,sanitize:e,smartypants:n}}),function(t){var e=_(mt,"=",t);return"::"===e.ctor&&"::"===e._1.ctor&&"[]"===e._1._1.ctor?s(E,r(function(t,r){return{ctor:"_Tuple2",_0:t,_1:r}}),Mn(e._0),Mn(e._1._0)):B}),Io=function(t){return ar(_(z,Mo,_(mt,"&",_(gt,1,t))))},Po=function(t){var r=_(mt,"/",t);return"::"===r.ctor&&""===r._0?r._1:r},Fo=function(t){for(;;){var r=t;if("[]"===r.ctor)return B;var e=r._0,n=e.unvisited;if("[]"===n.ctor)return R(e.value);if(""===n._0&&"[]"===n._1.ctor)return R(e.value);t=r._1}},qo=e(function(t,r,e){return Fo(t._0({visited:{ctor:"[]"},unvisited:Po(r),params:e,value:k}))}),Uo=r(function(t,r){return s(qo,t,_(gt,1,r.hash),Io(r.search))}),Jo=(r(function(t,r){return s(qo,t,r.pathname,Io(r.search))}),r(function(t,r){var e=r;return{visited:e.visited,unvisited:e.unvisited,params:e.params,value:t(e.value)}})),$o=n(function(t,r,e,n){return{visited:t,unvisited:r,params:e,value:n}}),Do=function(t){return{ctor:"Parser",_0:t}},jo=function(t){return Do(function(r){var e=r,n=e.unvisited;if("[]"===n.ctor)return{ctor:"[]"};var o=n._0;return v.eq(o,t)?{ctor:"::",_0:l($o,{ctor:"::",_0:o,_1:e.visited},n._1,e.params,e.value),_1:{ctor:"[]"}}:{ctor:"[]"}})},zo=r(function(t,r){return Do(function(t){var e=t,n=e.unvisited;if("[]"===n.ctor)return{ctor:"[]"};var o=n._0,c=r(o);return"Ok"===c.ctor?{ctor:"::",_0:l($o,{ctor:"::",_0:o,_1:e.visited},n._1,e.params,e.value(c._0)),_1:{ctor:"[]"}}:{ctor:"[]"}})}),Wo=(_(zo,"STRING",st),_(zo,"NUMBER",dt),Wo||{});Wo["</>"]=r(function(t,r){var e=t,n=r;return Do(function(t){return _(V,n._0,e._0(t))})});var Ho=r(function(t,r){var e=r;return Do(function(r){var n=r;return _($,Jo(n.value),e._0({visited:n.visited,unvisited:n.unvisited,params:n.params,value:t}))})}),Qo=Do(function(t){return{ctor:"::",_0:t,_1:{ctor:"[]"}}}),Wo=Wo||{};Wo["<?>"]=r(function(t,r){var e=t,n=r;return Do(function(t){return _(V,n._0,e._0(t))})});var Vo=function(t){return{ctor:"QueryParser",_0:t}},Ko=(r(function(t,r){return Vo(function(e){var n=e,o=n.params;return{ctor:"::",_0:l($o,n.visited,n.unvisited,o,n.value(r(_(Lt,t,o)))),_1:{ctor:"[]"}}})}),function(t){return _(y["++"],"(",_(y["++"],t,")"))}),Go=function(t){return _(y["++"],"{",_(y["++"],t,"}"))},Xo=r(function(t,r){return _(y["++"],t,_(y["++"],r,t))}),Yo=Xo('"'),Zo=Xo("\n"),tc=m(r(function(t,r){return _(y["++"],t,r)})),rc=function(t){var r=t;return _(y["++"],r._0,_(y["++"],": ",r._1))},ec=function(t){return q(t)?"":Ko(_(vt,", ",_($,rc,t)))},nc=function(t){return _(x,"",_(S,tc(":"),t))},oc=r(function(t,r){var e=t,n=e._0;return _(tc,ec(n.$arguments),_(y["++"],nc(n.alias),r))}),cc=function(t){return{ctor:"Value",_0:t}},ic=cc({id:B,alias:B,$arguments:{ctor:"[]"},variables:{ctor:"[]"},selectors:{ctor:"[]"}}),uc=r(function(t,r){var e=r;return cc(v.update(e._0,{id:R(t)}))}),ac=r(function(t,r){var e=r;return cc(v.update(e._0,{alias:R(t)}))}),_c=function(t){var r=t;return cc(v.update(r._0,{alias:B}))},sc=r(function(t,r){var e=r;return cc(v.update(e._0,{$arguments:t}))}),lc=r(function(t,r){var e=r;return cc(v.update(e._0,{variables:t}))}),fc=r(function(t,r){var e=t,n=e._0;return cc(v.update(n,{selectors:_(H,r,n.selectors)}))}),dc=function(t){var r=t,e=r._0;return cc(v.update(e,{$arguments:e.variables}))},pc=r(function(t,r){var e=t,n=e._0;return _(sc,{ctor:"::",_0:r,_1:n.$arguments},cc(n))}),hc=r(function(t,r){var e=t,n=e._0;return _(lc,{ctor:"::",_0:r,_1:n.variables},cc(n))}),gc=function(t){var r=t,e=r._0;return _(tc,vc(e.selectors),_(x,"",_(S,oc(cc(e)),e.id)))},vc=function(t){return q(t)?"":Go(Zo(_(vt,"\n",_($,gc,t))))},mc=function(t){return gc(dc(_c(t)))},bc=function(t){var e=t;return _(r(function(t,r){return _(y["++"],t,r)}),"query ",mc(e._0))},kc=r(function(t,e){return Fn(lr(Q({ctor:"::",_0:{ctor:"::",_0:{ctor:"_Tuple2",_0:"query",_1:dr(bc(t))},_1:{ctor:"[]"}},_1:{ctor:"::",_0:_(x,{ctor:"[]"},_(S,A,_(S,r(function(t,r){return{ctor:"_Tuple2",_0:t,_1:r}})("variables"),_(S,lr,e)))),_1:{ctor:"[]"}}})))}),yc=function(t){var r=t;return s($n,r._0,_(kc,r._1,r._3),_(Br,"data",r._2))},wc=function(t){return t._0},Tc=n(function(t,r,e,n){return{ctor:"Query",_0:t,_1:r,_2:e,_3:n}}),xc=e(function(t,r,e){return l(Tc,t,r,e,B)}),Bc=(r(function(t,r){var e=r;return l(Tc,e._0,e._1,e._2,R(t))}),function(t){return{ctor:"Value",_0:t}}),Nc=function(t){return Bc(_(fc,ic,_($,wc,t)))},Rc=(r(function(t,r){return Bc(_(uc,t,_(fc,ic,_($,wc,r))))}),function(t){return Bc(_(uc,t,ic))}),Sc=(e(function(t,r,e){return Bc(_(hc,e._0,{ctor:"_Tuple2",_0:_(y["++"],"$",t),_1:r}))}),r(function(t,r){return Bc(_(fc,r._0,_($,wc,t)))})),Ec=(r(function(t,r){return Bc(_(ac,t,r._0))}),e(function(t,r,e){var n=r;return Bc(_(pc,e._0,{ctor:"_Tuple2",_0:t,_1:n._0}))})),Lc=function(t){return{ctor:"Argument",_0:t}},Ac=Le("'"),Cc=function(t){return v.cmp(t,v.chr("0"))>-1&&v.cmp(t,v.chr("9"))<1||v.cmp(t,v.chr("a"))>-1&&v.cmp(t,v.chr("z"))<1},Oc=function(){var t=function(t){return Cc(t)?t:v.chr(" ")};return function(r){return ht(_(bt,t,pt(l(Re,Ae,Ac,function(t){return""},r))))}}(),Mc=function(t){return t._0},Ic=function(t){return{ctor:"Slug",_0:t}},Pc=function(t){var r=Oc(t);return v.eq(r,{ctor:"::",_0:"",_1:{ctor:"[]"}})?B:R(Ic(_(vt,"-",r)))},Fc=function(t){return"Success"===t.ctor},qc=r(function(t,r){var e=r;return"Success"===e.ctor?e._0:t}),Uc=function(t){return{ctor:"Success",_0:t}},Jc=Uc,$c=function(t){return{ctor:"Failure",_0:t}},Dc=function(t){var r=t;return"Err"===r.ctor?$c(r._0):Uc(r._0)},jc=(_e(Dc),jn(Dc)),zc={ctor:"Loading"},Wc={ctor:"NotAsked"},Hc=r(function(t,r){var e=r;switch(e.ctor){case"Success":return Uc(t(e._0));case"Loading":return zc;case"NotAsked":return Wc;default:return $c(e._0)}}),Qc=function(t){return _(qc,B,_(Hc,R,t))},Vc=r(function(t,r){var e=r;switch(e.ctor){case"Success":return Uc(e._0);case"Failure":return $c(t(e._0));case"Loading":return zc;default:return Wc}}),Kc=(r(function(t,r){return function(e){return _(Vc,r,_(Hc,t,e))}}),r(function(t,r){var e=r;switch(e.ctor){case"Success":return t(e._0);case"Failure":return $c(e._0);case"NotAsked":return Wc;default:return zc}}),r(function(t,r){var e={ctor:"_Tuple2",_0:r,_1:t};t:do{r:do{e:do{n:do{switch(e._0.ctor){case"Success":switch(e._1.ctor){case"Success":return Uc(e._0._0(e._1._0));case"Failure":break n;case"Loading":break r;default:return Wc}case"Failure":return $c(e._0._0);case"Loading":switch(e._1.ctor){case"Failure":break n;case"Loading":case"NotAsked":default:break e}default:switch(e._1.ctor){case"Failure":break n;case"Loading":break r;case"NotAsked":default:break t}}}while(!1);return $c(e._1._0)}while(!1);return zc}while(!1);return zc}while(!1);return Wc})),Gc=(e(function(t,r,e){return _(Kc,e,_(Hc,t,r))}),n(function(t,r,e,n){return _(Kc,n,_(Kc,e,_(Hc,t,r)))}),r(function(t,e){return _(Kc,e,_(Hc,r(function(t,r){return{ctor:"_Tuple2",_0:t,_1:r}}),t))})),Xc=(r(function(t,r){var e=r;switch(e.ctor){case"Success":var n=t(e._0),o=n._0,c=n._1;return{ctor:"_Tuple2",_0:Uc(o),_1:c};case"NotAsked":return{ctor:"_Tuple2",_0:Wc,_1:Fr};case"Loading":return{ctor:"_Tuple2",_0:zc,_1:Fr};default:return{ctor:"_Tuple2",_0:$c(e._0),_1:Fr}}}),function(t){var r=t;switch(r.ctor){case"HomeRoute":return"#";case"TopicsRoute":return"#topics";case"TopicRoute":return _(y["++"],"#topics/",Mc(r._0));case"QuestionRoute":return _(y["++"],"#topics/",_(y["++"],Mc(r._0),_(y["++"],"/",Mc(r._1))));case"SignUpRoute":return"#signup";case"LoginRoute":return"#login";case"UserHomeRoute":return"#user";default:return""}}),Yc=_(zo,"TOPIC_TITLE",function(t){var r=Pc(t);return"Just"===r.ctor?st(r._0):_t("Malformed Path")}),Zc={ctor:"NotFoundRoute"},ti={ctor:"UserHomeRoute"},ri={ctor:"LoginRoute"},ei={ctor:"SignUpRoute"},ni=r(function(t,r){return{ctor:"QuestionRoute",_0:t,_1:r}}),oi=function(t){return{ctor:"TopicRoute",_0:t}},ci={ctor:"TopicsRoute"},ii={ctor:"HomeRoute"},ui=function(t){return Do(function(r){return _(V,function(t){return t._0(r)},t)})}({ctor:"::",_0:_(Ho,ii,Qo),_1:{ctor:"::",_0:_(Ho,ci,jo("topics")),_1:{ctor:"::",_0:_(Ho,oi,_(Wo["</>"],jo("topics"),Yc)),_1:{ctor:"::",_0:_(Ho,ni,_(Wo["</>"],jo("topics"),_(Wo["</>"],Yc,Yc))),_1:{ctor:"::",_0:_(Ho,ei,jo("signup")),_1:{ctor:"::",_0:_(Ho,ri,jo("login")),_1:{ctor:"::",_0:_(Ho,ti,jo("user")),_1:{ctor:"[]"}}}}}}}}),ai=function(t){var r=_(Uo,ui,t);return"Just"===r.ctor?r._0:Zc},_i=(r(function(t,r){return{mobile:t,tablet:r}}),e(function(t,r,e){return{logo:t,primaryColour:r,secondaryColour:e}})),si=a(function(t,r,e,n,o,c,i,u,a){return{id:t,title:r,slug:e,description:n,questions:o,icon:c,colour:i,next:u,previous:a}}),li=n(function(t,r,e,n){return{accessToken:t,idToken:r,tokenType:e,expiresIn:n}}),fi=n(function(t,r,e,n){return{username:t,password:r,repeat:e,email:n}}),di=l(fi,B,B,B,B),pi=n(function(t,r,e,n){return{id:t,username:r,email:e,emailVerified:n}}),hi=n(function(t,r,e,n){return{username:t,email:r,picture:e,emailVerified:n}}),gi=c(function(t,r,e,n,o,c){return{id:t,title:r,slug:e,answer:n,next:o,previous:c}}),vi=(a(function(t,r,e,n,o,c,i,u,a){return{topics:t,brand:r,route:e,window:n,responsive:o,userForm:c,signUp:i,token:u,user:a}}),{ctor:"Tablet"}),mi={ctor:"Mobile"},bi={topics:zc,brand:zc,route:ii,window:_(Ro,0,0),responsive:mi,userForm:di,signUp:Wc,token:Wc,user:zc},ki=function(t){return _(r(function(t,r){return!v.eq(t,r)}),B,at(t))},yi=function(t){return t._0},wi=Ee(Le("^\\S+@\\S+\\.\\S+$")),Ti=e(function(t,r,e){return{username:t,email:r,password:e}}),xi=n(function(t,r,e,n){return{name:t,descriptor:r,code:e,statusCode:n}}),Bi=function(t){return{ctor:"Valid",_0:t}},Ni={ctor:"CatchAll"},Ri={ctor:"EmailTaken"},Si={ctor:"UsernameTaken"},Ei={ctor:"DoNotMatch"},Li={ctor:"NotEntered"},Ai={ctor:"WrongSize"},Ci={ctor:"Empty"},Oi=function(t){var r=t;if("Nothing"===r.ctor)return _t(Li);var e=r._0;return wt(e)?_t(Ci):v.cmp(kt(e),6)<0?_t(Ai):_(Se,Le("\\d"),e)?st(Bi(e)):_t(Ei)},Mi=function(t){var r=t;if("Nothing"===r.ctor)return _t(Li);var e=r._0;return wt(e)?_t(Ci):_(Se,Le("\\W"),e)?_t(Ei):v.cmp(kt(e),30)>0?_t(Ai):st(Bi(e))},Ii=function(t){var r=t;if("Nothing"===r.ctor)return _t(Li);var e=r._0;return wt(e)?_t(Ci):_(Se,wi,e)?st(Bi(e)):_t(Ei)},Pi=function(t){return at(l(ft,Ti,Mi(R("dummy")),Ii(t.email),Oi(t.password)))},Fi=function(t){return _(M,r(function(t,r){return v.eq(t,r)})(!0),_($,ki,{ctor:"::",_0:Ii(t.email),_1:{ctor:"::",_0:Oi(t.password),_1:{ctor:"[]"}}}))},qi=function(t){return v.eq(t.repeat,t.password)?at(l(ft,Ti,Mi(t.username),Ii(t.email),Oi(t.password))):B},Ui=function(t){return _(M,r(function(t,r){return v.eq(t,r)})(!0),_($,ki,{ctor:"::",_0:Mi(t.username),_1:{ctor:"::",_0:Ii(t.email),_1:{ctor:"::",_0:Oi(t.password),_1:{ctor:"::",_0:Oi(t.repeat),_1:{ctor:"[]"}}}}}))},Ji=function(t){return v.eq(t,"username_exists")?Si:v.eq(t,"user_exists")?Ri:Ni},$i=s(Vr,"email_verified",Lr,s(Vr,"picture",Ar,s(Vr,"email",Ar,s(Vr,"nickname",Ar,zr(hi))))),Di=s(Vr,"statusCode",Er,s(Vr,"code",_(Tr,Ji,Ar),s(Vr,"description",Ar,s(Vr,"name",Ar,zr(xi))))),ji=s(Vr,"expires_in",Er,s(Vr,"token_type",Ar,s(Vr,"id_token",Ar,s(Vr,"access_token",Ar,zr(li))))),zi=s(Vr,"email_verified",Lr,s(Vr,"email",Ar,s(Vr,"username",Ar,s(Vr,"_id",Ar,zr(pi))))),Wi=_(Br,"Brand",s(Vr,"secondaryColour",Ar,s(Vr,"primaryColour",Ar,s(Vr,"logo",_(Br,"url",Ar),zr(_i))))),Hi=function(t){var r=Pc(t);return"Just"===r.ctor?br(r._0):mr("Can't slugify title")},Qi=o(function(t,r,e,n,o){var c=Pc(r);return"Just"===c.ctor?br(d(gi,t,r,c._0,e,n,o)):mr("Can't slugify question title")}),Vi=Wr(s(Vr,"previousQuestion",Sr(_(vr,Hi,_(Br,"title",Ar))),s(Vr,"nextQuestion",Sr(_(vr,Hi,_(Br,"title",Ar))),s(Vr,"answer",Ar,s(Vr,"title",Ar,s(Vr,"id",Ar,zr(Qi))))))),Ki=u(function(t,r,e,n,o,c,i,u){var a=Pc(r);return"Just"===a.ctor?br(p(si,t,r,a._0,e,n,o,c,i,u)):mr("Can't slugify title")}),Gi=Wr(s(Vr,"previousTopic",Sr(_(vr,Hi,_(Br,"title",Ar))),s(Vr,"nextTopic",Sr(_(vr,Hi,_(Br,"title",Ar))),s(Vr,"colour",Ar,s(Vr,"icon",_(Br,"url",Ar),s(Vr,"questions",Rr(Vi),s(Vr,"description",Ar,s(Vr,"title",Ar,s(Vr,"id",Ar,zr(Ki)))))))))),Xi=_(Br,"allTopics",Rr(Gi)),Yi=function(t){return{ctor:"Submit",_0:t}},Zi=function(t){return{ctor:"Repeat",_0:t}},tu=function(t){return{ctor:"Password",_0:t}},ru=function(t){return{ctor:"Email",_0:t}},eu=function(t){return{ctor:"Username",_0:t}},nu=function(t){return{ctor:"OnLoginForm",_0:t}},ou=function(t){return{ctor:"OnSignUpForm",_0:t}},cu=function(t){return{ctor:"OnUserLogin",_0:t}},iu=function(t){return{ctor:"OnUserSignUp",_0:t}},uu=function(t){return{ctor:"OnLocationChange",_0:t}},au=function(t){return{ctor:"UpdateRoute",_0:t}},_u=function(t){return{ctor:"OnWindowChange",_0:t}},su=function(t){return{ctor:"OnFetchUserInfo",_0:t}},lu=function(t){return{ctor:"OnFetchBrand",_0:t}},fu=function(t){return{ctor:"OnFetchTopics",_0:t}},du=function(t){return lr({ctor:"::",_0:{ctor:"_Tuple2",_0:"client_id",_1:dr("enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ")},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"email",_1:dr(yi(t.email))},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"password",_1:dr(yi(t.password))},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"username",_1:dr(yi(t.username))},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"connection",_1:dr("db-connection")},_1:{ctor:"[]"}}}}}})},pu=function(t){return lr({ctor:"::",_0:{ctor:"_Tuple2",_0:"client_id",_1:dr("enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ")},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"password",_1:dr(yi(t.password))},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"username",_1:dr(yi(t.email))},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"grant_type",_1:dr("password")},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"audience",_1:dr("dg-academy")},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"scope",_1:dr("openid")},_1:{ctor:"[]"}}}}}}})},hu=Nc({ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("id"),_1:{ctor:"::",_0:Rc("title"),_1:{ctor:"::",_0:Rc("description"),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("id"),_1:{ctor:"::",_0:Rc("title"),_1:{ctor:"::",_0:Rc("answer"),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("title"),_1:{ctor:"[]"}},Rc("nextQuestion")),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("title"),_1:{ctor:"[]"}},Rc("previousQuestion")),_1:{ctor:"[]"}}}}}},Rc("questions")),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("url"),_1:{ctor:"[]"}},Rc("icon")),_1:{ctor:"::",_0:Rc("colour"),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("title"),_1:{ctor:"[]"}},Rc("nextTopic")),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("title"),_1:{ctor:"[]"}},Rc("previousTopic")),_1:{ctor:"[]"}}}}}}}}},Rc("allTopics")),_1:{ctor:"[]"}}),gu=function(t){return Jn({method:"GET",headers:{ctor:"::",_0:_(Un,"Authorization",_(y["++"],"Bearer ",t.accessToken)),_1:{ctor:"[]"}},url:"https://nookit.eu.auth0.com/userinfo",body:qn,expect:Pn($i),timeout:B,withCredentials:!1})},vu=function(t){return _(Ur,su,jc(gu(t)))},mu=Nc({ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("primaryColour"),_1:{ctor:"::",_0:Rc("secondaryColour"),_1:{ctor:"::",_0:_(Sc,{ctor:"::",_0:Rc("url"),_1:{ctor:"[]"}},Rc("logo")),_1:{ctor:"[]"}}}},s(Ec,"name",function(t){return Lc(Yo(t))}("dgacademy"),Rc("Brand"))),_1:{ctor:"[]"}}),bu=_(Ur,lu,jc(yc(s(xc,"https://api.graphcms.com/simple/v1/dgacademy",mu,Wi)))),ku=_(Ur,fu,jc(yc(s(xc,"https://api.graphcms.com/simple/v1/dgacademy",hu,Xi)))),yu=function(t){return _(Ur,cu,jc(s($n,"https://nookit.eu.auth0.com/oauth/token",Fn(pu(t)),ji)))},wu=function(t){return _(Ur,iu,jc(s($n,"https://nookit.eu.auth0.com/dbconnections/signup",Fn(du(t)),zi)))},Tu=Mr.outgoingPort("put",function(t){return"Nothing"===t.ctor?null:{accessToken:t._0.accessToken,idToken:t._0.idToken,tokenType:t._0.tokenType,expiresIn:t._0.expiresIn}}),xu={ctor:"::",_0:_(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Xe,{ctor:"[]"},{ctor:"::",_0:Qe("404"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(an,{ctor:"[]"},{ctor:"::",_0:Qe("Page Not Found"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"::",_0:Qe("The page you are looking for is not available. Please check the URL and try again."),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(ii)),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("Go back to home page"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}}),_1:{ctor:"[]"}},Bu=function(t){return _(on,{ctor:"::",_0:gn("dg-error-page"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("container"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Ke,{ctor:"::",_0:gn("row section"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("col s12 xl8 offset-xl2"),_1:{ctor:"[]"}},t),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}})},Nu={ctor:"::",_0:_(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Xe,{ctor:"[]"},{ctor:"::",_0:Qe("Oops!"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(an,{ctor:"[]"},{ctor:"::",_0:Qe("Something went wrong"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"::",_0:Qe("Looks like there was an error on this page. Click the link below and try again."),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(ii)),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("Go back to home page"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}}),_1:{ctor:"[]"}},Ru=function(t){return{ctor:"::",_0:_(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Xe,{ctor:"[]"},{ctor:"::",_0:Qe(w(v.eq(t.status.code,200)?400:t.status.code)),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(an,{ctor:"[]"},{ctor:"::",_0:Qe("Something went wrong"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(Ye,{ctor:"[]"},{ctor:"::",_0:Qe(t.url),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"::",_0:Qe("Looks like there was an error on this page. Click the link below and try again."),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(ii)),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("Go back to home page"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}}}),_1:{ctor:"::",_0:_(Ke,{ctor:"::",_0:gn("card"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-content"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(w(t.body)),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}},Su={mobile:Bu(xu),tablet:Bu(xu)},Eu={mobile:Bu(Nu),tablet:Bu(Nu)},Lu=function(t){return{mobile:Bu(Ru(t)),tablet:Bu(Ru(t))}},Au=function(t){return _(on,{ctor:"::",_0:gn(_(y["++"],"spinner-layer spinner-",t)),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("circle-clipper left"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("circle"),_1:{ctor:"[]"}},{ctor:"[]"}),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("gap-patch"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("circle"),_1:{ctor:"[]"}},{ctor:"[]"}),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("circle-clipper right"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("circle"),_1:{ctor:"[]"}},{ctor:"[]"}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}})},Cu=_(on,{ctor:"::",_0:gn("dg-loading-wrapper"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("dg-loader"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("preloader-wrapper active"),_1:{ctor:"[]"}},_($,Au,{ctor:"::",_0:"blue",_1:{ctor:"::",_0:"red",_1:{ctor:"::",_0:"yellow",_1:{ctor:"::",_0:"green",_1:{ctor:"[]"}}}}})),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),Ou=function(t){return{mobile:_(on,{ctor:"[]"},{ctor:"::",_0:t.mobile,_1:{ctor:"::",_0:Cu,_1:{ctor:"[]"}}}),tablet:_(on,{ctor:"[]"},{ctor:"::",_0:t.tablet,_1:{ctor:"::",_0:Cu,_1:{ctor:"[]"}}})}},Mu=function(t){return _(Ze,{ctor:"[]"},{ctor:"::",_0:t.tablet,_1:{ctor:"[]"}})},Iu=function(t){return _(Ze,{ctor:"[]"},{ctor:"::",_0:t.mobile,_1:{ctor:"[]"}})},Pu=function(t){return _(tn,{ctor:"[]"},{ctor:"::",_0:t.tablet,_1:{ctor:"[]"}})},Fu=function(t){return _(tn,{ctor:"::",_0:gn("container"),_1:{ctor:"[]"}},{ctor:"::",_0:t.tablet,_1:{ctor:"[]"}})},qu=function(t){return _(tn,{ctor:"[]"},{ctor:"::",_0:t.mobile,_1:{ctor:"[]"}})},Uu=r(function(t,r){return{mobile:_(on,{ctor:"[]"},{ctor:"::",_0:Iu(t),_1:{ctor:"::",_0:qu(r),_1:{ctor:"[]"}}}),tablet:_(on,{ctor:"[]"},{ctor:"::",_0:Mu(t),_1:{ctor:"::",_0:Fu(r),_1:{ctor:"[]"}}})}}),Ju=function(t){return{mobile:_(on,{ctor:"[]"},{ctor:"::",_0:qu(t),_1:{ctor:"[]"}}),tablet:_(on,{ctor:"[]"},{ctor:"::",_0:Pu(t),_1:{ctor:"[]"}})}},$u=r(function(t,r){return{mobile:_(on,{ctor:"[]"},{ctor:"::",_0:Iu(t),_1:{ctor:"::",_0:qu(r),_1:{ctor:"[]"}}}),tablet:_(on,{ctor:"[]"},{ctor:"::",_0:Mu(t),_1:{ctor:"::",_0:Pu(r),_1:{ctor:"[]"}}})}}),Du=Qe("Already have an account?"),ju=Qe("Don't have an account?"),zu=(Qe("Forgot password?"),Qe("Read more")),Wu=Qe("Sign Up"),Hu=Qe("Login"),Qu=Qe("or"),Vu=Qe("prev"),Ku=Qe("next"),Gu=_(un,{ctor:"::",_0:gn("material-icons"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("apps"),_1:{ctor:"[]"}}),Xu=_(cn,{ctor:"::",_0:gn("button-collapse show-on-large"),_1:{ctor:"::",_0:yn(Xc(ci)),_1:{ctor:"[]"}}},{ctor:"::",_0:Gu,_1:{ctor:"[]"}}),Yu=function(t){return _(cn,{ctor:"::",_0:gn("btn"),_1:{ctor:"::",_0:yn(Xc(ei)),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.primaryColour},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}},{ctor:"::",_0:Wu,_1:{ctor:"[]"}})},Zu=_(cn,{ctor:"::",_0:yn(Xc(ri)),_1:{ctor:"[]"}},{ctor:"::",_0:Hu,_1:{ctor:"[]"}}),ta=function(t){return _(on,{ctor:"::",_0:gn("navbar-fixed"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Ge,{ctor:"[]"},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("nav-wrapper valign-wrapper"),_1:{ctor:"[]"}},{ctor:"::",_0:Xu,_1:{ctor:"::",_0:_(_n,{ctor:"::",_0:vn(t.logo),_1:{ctor:"::",_0:gn("dg-logo"),_1:{ctor:"::",_0:Sn(au(ii)),_1:{ctor:"[]"}}}},{ctor:"[]"}),_1:{ctor:"::",_0:_(en,{ctor:"::",_0:gn("dg-left"),_1:{ctor:"[]"}},{ctor:"::",_0:_(nn,{ctor:"[]"},{ctor:"::",_0:Zu,_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(nn,{ctor:"[]"},{ctor:"::",_0:_(an,{ctor:"::",_0:gn("dg-text-grey"),_1:{ctor:"[]"}},{ctor:"::",_0:Qu,_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(nn,{ctor:"[]"},{ctor:"::",_0:Yu(t),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}),_1:{ctor:"[]"}}}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}})},ra=function(t){return{mobile:ta(t),tablet:ta(t)}},ea=function(t){var r=Mi(t);t:do{if("Err"!==r.ctor)break t;switch(r._0.ctor){case"Empty":return"Please enter.";case"DoNotMatch":return"Must contain only alphanumeric symbols.";case"WrongSize":return"Is too long.";default:break t}}while(!1);return"-"},na=function(t){var r=Oi(t);t:do{if("Err"!==r.ctor)break t;switch(r._0.ctor){case"Empty":return"Please enter.";case"WrongSize":return"Must have at least 6 characters.";case"DoNotMatch":return"Must have at least 1 digit.";default:break t}}while(!1);return"-"},oa=function(t){var r=Ii(t);t:do{if("Err"!==r.ctor)break t;switch(r._0.ctor){case"Empty":return"Please enter.";case"DoNotMatch":return"Is not valid.";default:break t}}while(!1);return"-"},ca=r(function(t,r){return!0===ki(Oi(r))?v.eq(t,r)?"-":"Do not match.":na(r)}),ia=function(t){return _(un,{ctor:"::",_0:gn("material-icons prefix"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(t),_1:{ctor:"[]"}})},ua=function(t){return _(on,{ctor:"::",_0:gn("dg-center dg-nav-height card-title dg-reg-header"),_1:{ctor:"[]"}},{ctor:"::",_0:_(an,{ctor:"[]"},{ctor:"::",_0:Qe(t),_1:{ctor:"[]"}}),_1:{ctor:"[]"}})},aa=(_(on,{ctor:"::",_0:gn("section"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("col s12 center-align"),_1:{ctor:"[]"}},{ctor:"::",_0:_(cn,{ctor:"::",_0:gn("btn-floating btn-large red "),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("G"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(cn,{ctor:"::",_0:gn("btn-floating btn-large blue"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"margin",_1:"0 20px"},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}},{ctor:"::",_0:Qe("F"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(cn,{ctor:"::",_0:gn("btn-floating btn-large cyan"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("T"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}),_1:{ctor:"[]"}}),function(t){return wn({ctor:"::",_0:{ctor:"_Tuple2",_0:"dg-valid",_1:t},_1:{ctor:"::",_0:{ctor:"_Tuple2",_0:"dg-not-valid",_1:!t},_1:{ctor:"[]"}}})}),_a=r(function(t,r){return"Just"===r.ctor?aa(ki(t(r))):wn({ctor:"[]"})}),sa=r(function(t,r){return"Just"===r.ctor?aa(ki(Oi(r))&&v.eq(t,r)):wn({ctor:"[]"})}),la=function(t){return _(on,{ctor:"::",_0:gn("dg-data-error"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"visibility",_1:v.eq(t,"-")?"hidden":"visible"},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}},{ctor:"::",_0:Qe(t),_1:{ctor:"[]"}})},fa=function(t){return _(on,{ctor:"::",_0:gn("input-field col s8"),_1:{ctor:"[]"}},{ctor:"::",_0:ia("email"),_1:{ctor:"::",_0:_(ln,{ctor:"::",_0:mn("email"),_1:{ctor:"::",_0:kn("Email"),_1:{ctor:"::",_0:bn(_(x,"",t)),_1:{ctor:"::",_0:dn(30),_1:{ctor:"::",_0:Rn(function(t){return nu(ru(t))}),_1:{ctor:"::",_0:_(_a,Ii,t),_1:{ctor:"::",_0:gn("dg-input"),_1:{ctor:"[]"}}}}}}}},{ctor:"[]"}),_1:{ctor:"::",_0:la(oa(t)),_1:{ctor:"[]"}}}})},da=function(t){return _(on,{ctor:"::",_0:gn("input-field"),_1:{ctor:"[]"}},{ctor:"::",_0:ia("lock"),_1:{ctor:"::",_0:_(ln,{ctor:"::",_0:mn("password"),_1:{ctor:"::",_0:kn("Password"),_1:{ctor:"::",_0:bn(_(x,"",t)),_1:{ctor:"::",_0:Rn(function(t){return ou(tu(t))}),_1:{ctor:"::",_0:_(_a,Oi,t),_1:{ctor:"::",_0:gn("dg-input"),_1:{ctor:"[]"}}}}}}},{ctor:"[]"}),_1:{ctor:"::",_0:la(na(t)),_1:{ctor:"[]"}}}})},pa=function(t){return _(on,{ctor:"::",_0:gn("input-field"),_1:{ctor:"[]"}},{ctor:"::",_0:ia("person"),_1:{ctor:"::",_0:_(ln,{ctor:"::",_0:mn("text"),_1:{ctor:"::",_0:kn("Username"),_1:{ctor:"::",_0:bn(_(x,"",t)),_1:{ctor:"::",_0:dn(30),_1:{ctor:"::",_0:Rn(function(t){return ou(eu(t))}),_1:{ctor:"::",_0:_(_a,Mi,t),_1:{ctor:"::",_0:gn("dg-input"),_1:{ctor:"[]"}}}}}}}},{ctor:"[]"}),_1:{ctor:"::",_0:la(ea(t)),_1:{ctor:"[]"}}}})},ha=r(function(t,r){return _(on,{ctor:"::",_0:gn("input-field"),_1:{ctor:"[]"}},{ctor:"::",_0:ia("lock"),_1:{ctor:"::",_0:_(ln,{ctor:"::",_0:mn("password"),_1:{ctor:"::",_0:kn("Password Repeat"),_1:{ctor:"::",_0:bn(_(x,"",r)),_1:{ctor:"::",_0:Rn(function(t){return ou(Zi(t))}),_1:{ctor:"::",_0:_(sa,t,r),_1:{ctor:"::",_0:gn("dg-input"),_1:{ctor:"[]"}}}}}}},{ctor:"[]"}),_1:{ctor:"::",_0:la(_(ca,t,r)),_1:{ctor:"[]"}}}})}),ga=r(function(t,r){return _(on,{ctor:"::",_0:gn("dg-center dg-registration"),_1:{ctor:"[]"}},{ctor:"::",_0:_(sn,{ctor:"[]"},{ctor:"::",_0:ua("Sign Up"),_1:{ctor:"::",_0:r,_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-content"),_1:{ctor:"[]"}},{ctor:"::",_0:pa(t.username),_1:{ctor:"::",_0:fa(t.email),_1:{ctor:"::",_0:da(t.password),_1:{ctor:"::",_0:_(ha,t.password,t.repeat),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("valign-wrapper"),_1:{ctor:"[]"}},{ctor:"::",_0:_(cn,{ctor:"::",_0:gn("btn dg-right "),_1:{ctor:"::",_0:wn({ctor:"::",_0:{ctor:"_Tuple2",_0:"disabled",_1:!(v.eq(t.password,t.repeat)&&Ui(t))},_1:{ctor:"[]"}}),_1:{ctor:"::",_0:Sn(ou(Yi(qi(t)))),_1:{ctor:"[]"}}}},{ctor:"::",_0:Qe("Sign Up"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}}}),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-action"),_1:{ctor:"[]"}},{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(ri)),_1:{ctor:"[]"}},{ctor:"::",_0:Du,_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}}),_1:{ctor:"[]"}})}),va=function(t){return _(on,{ctor:"::",_0:gn("dg-response-success"),_1:{ctor:"[]"}},{ctor:"::",_0:_(un,{ctor:"::",_0:gn("material-icons prefix "),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("done"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(on,{ctor:"[]"},{ctor:"::",_0:Qe(_(y["++"],"Account for ",_(y["++"],t.email," has been created. Please "))),_1:{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(ri)),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("login"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:Qe("."),_1:{ctor:"[]"}}}}),_1:{ctor:"[]"}}})},ma=function(t){return _(on,{ctor:"::",_0:gn("dg-response-error"),_1:{ctor:"[]"}},{ctor:"::",_0:_(un,{ctor:"::",_0:gn("material-icons prefix "),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("error_outline"),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(on,{ctor:"[]"},{ctor:"::",_0:Qe(t),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}})},ba=r(function(t,r){return _(on,{ctor:"::",_0:gn("dg-center dg-registration"),_1:{ctor:"[]"}},{ctor:"::",_0:_(sn,{ctor:"[]"},{ctor:"::",_0:ua("Login"),_1:{ctor:"::",_0:_(x,_(on,{ctor:"[]"},{ctor:"[]"}),_(S,ma,r)),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-content login"),_1:{ctor:"[]"}},{ctor:"::",_0:fa(t.email),_1:{ctor:"::",_0:da(t.password),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("valign-wrapper"),_1:{ctor:"[]"}},{ctor:"::",_0:_(cn,{ctor:"::",_0:gn("btn dg-right "),_1:{ctor:"::",_0:wn({ctor:"::",_0:{ctor:"_Tuple2",_0:"disabled",_1:!Fi(t)},_1:{ctor:"[]"}}),_1:{ctor:"::",_0:Sn(nu(Yi(Pi(t)))),_1:{ctor:"[]"}}}},{ctor:"::",_0:Qe("Login"),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-action"),_1:{ctor:"[]"}},{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(ei)),_1:{ctor:"[]"}},{ctor:"::",_0:ju,_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}}),_1:{ctor:"[]"}})}),ka=r(function(t,r){return{mobile:_(ba,t,r),tablet:_(ba,t,r)}}),ya=r(function(t,r){return{mobile:_(ga,t,va(r)),tablet:_(ga,t,va(r))}}),wa=r(function(t,r){return{mobile:_(ga,t,ma(r)),tablet:_(ga,t,ma(r))}}),Ta=function(t){return{mobile:_(ga,t,_(on,{ctor:"[]"},{ctor:"[]"})),tablet:_(ga,t,_(on,{ctor:"[]"},{ctor:"[]"}))}},xa=function(t){return _(on,{ctor:"[]"},{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"::",_0:Qe(t.username),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"::",_0:Qe(t.picture),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"::",_0:Qe(t.email),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"[]"},{ctor:"[]"}),_1:{ctor:"[]"}}}}})},Ba=function(t){return{mobile:xa(t),tablet:xa(t)}},Na=_(un,{ctor:"::",_0:gn("material-icons left"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("navigate_before"),_1:{ctor:"[]"}}),Ra=_(un,{ctor:"::",_0:gn("material-icons right"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("navigate_next"),_1:{ctor:"[]"}}),Sa=_(un,{ctor:"::",_0:gn("material-icons"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("menu"),_1:{ctor:"[]"}}),Ea=_(un,{ctor:"::",_0:gn("material-icons"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("apps"),_1:{ctor:"[]"}}),La=r(function(t,r){var e=r;return"Just"===e.ctor?t(e._0):_(cn,{ctor:"[]"},{ctor:"[]"})}),Aa=e(function(t,r,e){return _(cn,{ctor:"::",_0:yn(Xc(_(ni,r,e))),_1:{ctor:"::",_0:gn("btn dg-topic-nav-btn dg-primary-colour"),_1:{ctor:"[]"}}},t)}),Ca=r(function(t,r){return _(La,_(Aa,{ctor:"::",_0:Vu,_1:{ctor:"::",_0:Na,_1:{ctor:"[]"}}},t.slug),r.previous)}),Oa=r(function(t,r){return _(La,_(Aa,{ctor:"::",_0:Ku,_1:{ctor:"::",_0:Ra,_1:{ctor:"[]"}}},t.slug),r.next)}),Ma=function(t){return _(cn,{ctor:"::",_0:gn("btn dg-primary-colour dg-topic-nav-btn"),_1:{ctor:"::",_0:yn(Xc(oi(t.slug))),_1:{ctor:"[]"}}},{ctor:"::",_0:Sa,_1:{ctor:"[]"}})},Ia=_(cn,{ctor:"::",_0:gn("btn dg-primary-colour dg-topic-nav-btn"),_1:{ctor:"::",_0:yn(Xc(ci)),_1:{ctor:"[]"}}},{ctor:"::",_0:Ea,_1:{ctor:"[]"}}),Pa=r(function(t,r){return _(Ke,{ctor:"::",_0:gn("section dg-center"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.colour},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}},{ctor:"::",_0:_(Ca,t,r),_1:{ctor:"::",_0:Ia,_1:{ctor:"::",_0:Ma(t),_1:{ctor:"::",_0:_(Oa,t,r),_1:{ctor:"[]"}}}}})}),Fa=r(function(t,r){return _(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.colour},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("container"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Xe,{ctor:"::",_0:gn("dg-text-white center-align"),_1:{ctor:"[]"}},{ctor:"::",_0:_(_n,{ctor:"::",_0:gn("dg-topic-img"),_1:{ctor:"::",_0:vn(t.icon),_1:{ctor:"[]"}}},{ctor:"[]"}),_1:{ctor:"::",_0:Qe(_(y["++"],r.title,"?")),_1:{ctor:"[]"}}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}})}),qa=e(function(t,r,e){return _(on,{ctor:"::",_0:gn("dg-question"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Fa,r,e),_1:{ctor:"::",_0:t,_1:{ctor:"::",_0:_(Pa,r,e),_1:{ctor:"[]"}}}})}),Ua=r(function(t,r){return s(qa,_(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.colour},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("container"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Oo,{ctor:"[]"},r.answer),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),t,r)}),Ja=r(function(t,r){return s(qa,_(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("container"),_1:{ctor:"[]"}},{ctor:"::",_0:_(Oo,{ctor:"[]"},r.answer),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),t,r)}),$a=r(function(t,r){return{mobile:_(Ja,t,r),tablet:_(Ua,t,r)}}),Da=function(t){return _(on,{ctor:"::",_0:gn("col m6 xl4"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card medium hoverable"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-image"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.colour},_1:{ctor:"[]"}}),_1:{ctor:"::",_0:Sn(au(oi(t.slug))),_1:{ctor:"[]"}}}},{ctor:"::",_0:_(_n,{ctor:"::",_0:vn(t.icon),_1:{ctor:"::",_0:gn("dg-topic-img"),_1:{ctor:"[]"}}},{ctor:"[]"}),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-content"),_1:{ctor:"::",_0:Sn(au(oi(t.slug))),_1:{ctor:"[]"}}},{ctor:"::",_0:_(an,{ctor:"::",_0:gn("card-title"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(t.title),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"::",_0:gn("text-black"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(t.description),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}),_1:{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-action"),_1:{ctor:"[]"}},{ctor:"::",_0:_(cn,{ctor:"::",_0:yn(Xc(oi(t.slug))),_1:{ctor:"[]"}},{ctor:"::",_0:zu,_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}}),_1:{ctor:"[]"}})},ja=function(t){return _(on,{ctor:"::",_0:gn("row"),_1:{ctor:"[]"}},_($,Da,t))},za=function(t){return _(cn,{ctor:"::",_0:yn(Xc(oi(t.slug))),_1:{ctor:"::",_0:gn("collection-item avatar"),_1:{ctor:"[]"}}},{ctor:"::",_0:_(_n,{ctor:"::",_0:vn(t.icon),_1:{ctor:"::",_0:gn("circle"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.colour},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}},{ctor:"[]"}),_1:{ctor:"::",_0:_(an,{ctor:"::",_0:gn("title dg-text-black"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(t.title),_1:{ctor:"[]"}}),_1:{ctor:"::",_0:_(rn,{ctor:"::",_0:gn("dg-text-black"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(t.description),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}}})},Wa=function(t){return _(on,{ctor:"::",_0:gn("dg-no-margins collection"),_1:{ctor:"[]"}},_($,za,t))},Ha=function(t){return{mobile:Wa(t),tablet:ja(t)}},Qa=_(un,{ctor:"::",_0:gn("material-icons left"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("navigate_before"),_1:{ctor:"[]"}}),Va=_(un,{ctor:"::",_0:gn("material-icons right"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("navigate_next"),_1:{ctor:"[]"}}),Ka=r(function(t,r){var e=r;return"Just"===e.ctor?t(e._0):_(cn,{ctor:"[]"},{ctor:"[]"})}),Ga=r(function(t,r){return _(cn,{ctor:"::",_0:yn(Xc(oi(r))),_1:{ctor:"::",_0:gn("btn dg-topic-nav-btn dg-primary-colour"),_1:{ctor:"[]"}}},t)}),Xa=function(t){return _(Ka,Ga({ctor:"::",_0:Vu,_1:{ctor:"::",_0:Qa,_1:{ctor:"[]"}}}),t.previous)},Ya=function(t){return _(Ka,Ga({ctor:"::",_0:Ku,_1:{ctor:"::",_0:Va,_1:{ctor:"[]"}}}),t.next)},Za=_(un,{ctor:"::",_0:gn("material-icons"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe("apps"),_1:{ctor:"[]"}}),t_=_(cn,{ctor:"::",_0:gn("btn dg-primary-colour dg-topic-nav-btn"),_1:{ctor:"::",_0:yn(Xc(ci)),_1:{ctor:"[]"}}},{ctor:"::",_0:Za,_1:{ctor:"[]"}}),r_=r(function(t,r){return _(on,{ctor:"::",_0:gn("col m6 xl4"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card small hoverable dg-center"),_1:{ctor:"::",_0:Sn(au(_(ni,t.slug,r.slug))),_1:{ctor:"[]"}}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("card-content"),_1:{ctor:"[]"}},{ctor:"::",_0:_(an,{ctor:"::",_0:gn("card-title center-align"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(_(y["++"],r.title,"?")),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}}),_1:{ctor:"[]"}})}),e_=r(function(t,r){return _(cn,{ctor:"::",_0:gn("collection-item"),_1:{ctor:"::",_0:yn(Xc(_(ni,t.slug,r.slug))),_1:{ctor:"[]"}}},{ctor:"::",_0:_(an,{ctor:"::",_0:gn("dg-text-black"),_1:{ctor:"[]"}},{ctor:"::",_0:Qe(_(y["++"],r.title,"?")),_1:{ctor:"[]"}}),_1:{ctor:"[]"}})}),n_=function(t){return _(Ke,{ctor:"::",_0:gn("section container dg-center"),_1:{ctor:"[]"}},{ctor:"::",_0:Xa(t),_1:{ctor:"::",_0:t_,_1:{ctor:"::",_0:Ya(t),_1:{ctor:"[]"}}}})},o_=function(t){return _(Ke,{ctor:"::",_0:gn("section"),_1:{ctor:"::",_0:Tn({ctor:"::",_0:{ctor:"_Tuple2",_0:"background-color",_1:t.colour},_1:{ctor:"[]"}}),_1:{ctor:"[]"}}},{ctor:"::",_0:_(Xe,{ctor:"::",_0:gn("dg-text-white center-align"),_1:{ctor:"[]"}},{ctor:"::",_0:_(_n,{ctor:"::",_0:gn("dg-topic-img"),_1:{ctor:"::",_0:vn(t.icon),_1:{ctor:"[]"}}},{ctor:"[]"}),_1:{ctor:"::",_0:Qe(t.title),_1:{ctor:"[]"}}}),_1:{ctor:"[]"}})},c_=r(function(t,r){return _(on,{ctor:"[]"},{ctor:"::",_0:o_(r),_1:{ctor:"::",_0:t,_1:{ctor:"::",_0:n_(r),_1:{ctor:"[]"}}}})}),i_=function(t){return _(c_,_(Ke,{ctor:"::",_0:gn("section container"),_1:{ctor:"[]"}},{ctor:"::",_0:_(on,{ctor:"::",_0:gn("row dg-no-margins"),_1:{ctor:"[]"}},_($,r_(t),t.questions)),_1:{ctor:"[]"}}),t)},u_=function(t){return _(c_,_(Ke,{ctor:"::",_0:gn("dg-no-margins collection"),_1:{ctor:"[]"}},_($,e_(t),t.questions)),t)},a_=function(t){return{mobile:u_(t),tablet:i_(t)}},__=r(function(t,r){return function(r){return U(_(D,function(r){return v.eq(r.slug,t)},r))}(r.questions)}),s_=function(t){return function(r){return U(_(D,function(r){return v.eq(r.slug,t)},r))}},l_=function(t){var r=t;switch(r.ctor){case"BadStatus":return Lu(r._0);case"BadPayload":return Lu(r._1);default:return Eu}},f_=function(t){var r=t.signUp;switch(r.ctor){case"NotAsked":return Ju(Ta(t.userForm));case"Loading":return Ou(Ju(Ta(t.userForm)));case"Success":return Ju(_(ya,t.userForm,r._0));default:var e=r._0,n=e;if("BadStatus"!==n.ctor)return l_(e);var o=_(yr,Di,n._0.body);if("Ok"!==o.ctor)return l_(e);switch(o._0.code.ctor){case"UsernameTaken":return Ju(_(wa,t.userForm,"Username is taken."));case"EmailTaken":return Ju(_(wa,t.userForm,"Email is taken."));default:return l_(e)}}},d_={mobile:Cu,tablet:Cu},p_=Su,h_={mobile:_(on,{ctor:"[]"},{ctor:"[]"}),tablet:_(on,{ctor:"[]"},{ctor:"[]"})},g_=function(t){var r=t.token;switch(r.ctor){case"NotAsked":return Ju(_(ka,t.userForm,B));case"Loading":return Ou(_(ka,t.userForm,B));case"Success":return h_;default:var e=r._0,n=e;return"BadStatus"===n.ctor&&v.eq(n._0.status.code,403)?Ju(_(ka,t.userForm,R("Wrong email or password."))):l_(e)}},v_=r(function(t,r){var e=r;switch(e.ctor){case"NotAsked":return h_;case"Loading":return d_;case"Success":return t(e._0);default:return l_(e._0)}}),m_=function(t){return _(v_,function(t){return _(Uu,ra(t),h_)},t.brand)},b_=function(t){return _(v_,function(t){var r=t;return _(Uu,ra(r._0),Ha(r._1))},_(Gc,t.brand,t.topics))},k_=r(function(t,r){return _(v_,function(t){var e=t;return _(x,p_,_(S,function(t){return _($u,ra(e._0),a_(t))},_(s_,r,e._1)))},_(Gc,t.brand,t.topics))}),y_=e(function(t,e,n){return _(v_,function(t){var o=t,c=o._1;return _(x,p_,s(E,r(function(t,r){return _($u,ra(o._0),_($a,t,r))}),_(s_,e,c),_(N,__(n),_(s_,e,c))))},_(Gc,t.brand,t.topics))}),w_=function(t){return _(v_,function(t){return Ju(Ba(t))},t.user)},T_=r(function(t,r){return v.cmp(r.width,600)<1?{ctor:"_Tuple2",_0:v.update(t,{responsive:mi}),_1:Fr}:{ctor:"_Tuple2",_0:v.update(t,{responsive:vi}),_1:Fr}}),x_=e(function(t,r,e){var n=t;switch(n.ctor){case"Username":return{ctor:"_Tuple2",_0:v.update(e,{userForm:v.update(r,{username:R(n._0)})}),_1:Fr};case"Email":return{ctor:"_Tuple2",_0:v.update(e,{userForm:v.update(r,{email:R(n._0)})}),_1:Fr};case"Password":return{ctor:"_Tuple2",_0:v.update(e,{userForm:v.update(r,{password:R(n._0)})}),_1:Fr};case"Repeat":return{ctor:"_Tuple2",_0:v.update(e,{userForm:v.update(r,{repeat:R(n._0)})}),_1:Fr};default:return{ctor:"_Tuple2",_0:v.update(e,{user:zc,userForm:di}),_1:_(x,Fr,_(S,wu,n._0))}}}),B_=e(function(t,r,e){var n=t;switch(n.ctor){case"Email":return{ctor:"_Tuple2",_0:v.update(e,{userForm:v.update(r,{email:R(n._0)})}),_1:Fr};case"Password":return{ctor:"_Tuple2",_0:v.update(e,{userForm:v.update(r,{password:R(n._0)})}),_1:Fr};case"Submit":return{ctor:"_Tuple2",_0:v.update(e,{token:zc,userForm:di}),_1:_(x,Fr,_(S,yu,n._0))};default:return{ctor:"_Tuple2",_0:e,_1:Fr}}}),N_=r(function(t,r){var e=t;switch(e.ctor){case"OnFetchTopics":return{ctor:"_Tuple2",_0:v.update(r,{topics:e._0}),_1:Fr};case"OnFetchBrand":return{ctor:"_Tuple2",_0:v.update(r,{brand:e._0}),_1:Fr};case"OnLocationChange":var n=ai(e._0);return(v.eq(n,ei)||v.eq(n,ri))&&Fc(r.token)?{ctor:"_Tuple2",_0:r,_1:_o(Xc(ti))}:{ctor:"_Tuple2",_0:v.update(r,{route:n}),_1:Fr};case"OnUserSignUp":return{ctor:"_Tuple2",_0:v.update(r,{signUp:e._0}),_1:Fr};case"OnUserLogin":var o=e._0;return{ctor:"_Tuple2",_0:v.update(r,{token:o}),_1:Pr({ctor:"::",_0:_(qc,Fr,_(Hc,vu,o)),_1:{ctor:"::",_0:Tu(Qc(o)),_1:{ctor:"[]"}}})};case"OnFetchUserInfo":return{ctor:"_Tuple2",_0:v.update(r,{user:e._0}),_1:_o(Xc(ti))};case"OnWindowChange":return _(T_,r,e._0);case"UpdateRoute":return{ctor:"_Tuple2",_0:r,_1:_o(Xc(e._0))};case"OnSignUpForm":return s(x_,e._0,r.userForm,r);default:return s(B_,e._0,r.userForm,r)}}),R_=function(t){var r=t.route;switch(r.ctor){case"HomeRoute":return m_(t);case"TopicsRoute":return b_(t);case"TopicRoute":return _(k_,t,r._0);case"QuestionRoute":return s(y_,t,r._0,r._1);case"SignUpRoute":return f_(t);case"LoginRoute":return g_(t);case"UserHomeRoute":return w_(t);default:return p_}},S_=function(t){return"Mobile"===t.responsive.ctor?R_(t).mobile:R_(t).tablet},E_=r(function(t,r){var e=v.update(bi,{route:ai(r),token:_(x,Wc,_(S,Jc,t))});return{ctor:"_Tuple2",_0:e,_1:Pr({ctor:"::",_0:bu,_1:{ctor:"::",_0:ku,_1:{ctor:"::",_0:_(qc,Fr,_(Hc,vu,e.token)),_1:{ctor:"::",_0:_(ae,_u,xo),_1:{ctor:"::",_0:_o(Xc(e.route)),_1:{ctor:"[]"}}}}}})}}),L_=function(t){return Jr({ctor:"::",_0:Eo(function(t){return _u(t)}),_1:{ctor:"[]"}})},A_=_(po,uu,{init:E_,view:S_,update:N_,subscriptions:L_})(xr({ctor:"::",_0:hr(B),_1:{ctor:"::",_0:_(Tr,R,_(vr,function(t){return _(vr,function(r){return _(vr,function(e){return _(vr,function(n){return br({accessToken:t,expiresIn:r,idToken:e,tokenType:n})},_(Br,"tokenType",Ar))},_(Br,"idToken",Ar))},_(Br,"expiresIn",Er))},_(Br,"accessToken",Ar))),_1:{ctor:"[]"}}})),C_={};if(C_.Main=C_.Main||{},void 0!==A_&&A_(C_.Main,"Main",void 0),"function"==typeof define&&define.amd)return void define([],function(){return C_});if("object"==typeof t)return void(t.exports=C_);var O_=this.Elm;if(void 0===O_)return void(this.Elm=C_);for(var M_ in C_){if(M_ in O_)throw new Error("There are two Elm modules called `"+M_+"` on this page! Rename one of them.");O_[M_]=C_[M_]}}).call(this)},function(t,r){}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_Main_elm__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_Main_elm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_Main_elm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_scss__);





var token = JSON.parse(localStorage.getItem("access_token"));

const mountNode = document.getElementById('app');
const app = __WEBPACK_IMPORTED_MODULE_0__app_Main_elm___default.a.Main.embed(mountNode, token);


app.ports.put.subscribe(item => {
    localStorage.setItem("access_token", JSON.stringify(item));
    app.ports.get.send(token);
});



if (false) {
    module.hot.accept();
}




/***/ }),
/* 1 */
/***/ (function(module, exports) {


(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve = _elm_lang$core$Json_Decode$andThen(_elm_lang$core$Basics$identity);
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = function (_p0) {
	return _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom(
		_elm_lang$core$Json_Decode$succeed(_p0));
};
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return _elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: decoder,
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$null(fallback),
						_1: {ctor: '[]'}
					}
				});
		};
		var handleResult = function (input) {
			var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
			if (_p1.ctor === 'Ok') {
				var _p2 = A2(
					_elm_lang$core$Json_Decode$decodeValue,
					nullOr(valDecoder),
					_p1._0);
				if (_p2.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(_p2._0);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p2._0);
				}
			} else {
				return _elm_lang$core$Json_Decode$succeed(fallback);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, handleResult, _elm_lang$core$Json_Decode$value);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
	function (path, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$field, key, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
	function (path, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$field, key, valDecoder),
			decoder);
	});

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _evancz$elm_markdown$Native_Markdown = function() {


// VIRTUAL-DOM WIDGETS

function toHtml(options, factList, rawMarkdown)
{
	var model = {
		options: options,
		markdown: rawMarkdown
	};
	return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
}


// WIDGET IMPLEMENTATION

var implementation = {
	render: render,
	diff: diff
};

function render(model)
{
	var html = marked(model.markdown, formatOptions(model.options));
	var div = document.createElement('div');
	div.innerHTML = html;
	return div;
}

function diff(a, b)
{
	
	if (a.model.markdown === b.model.markdown && a.model.options === b.model.options)
	{
		return null;
	}

	return {
		applyPatch: applyPatch,
		data: marked(b.model.markdown, formatOptions(b.model.options))
	};
}

function applyPatch(domNode, data)
{
	domNode.innerHTML = data;
	return domNode;
}


// ACTUAL MARKDOWN PARSER

var marked = function() {
	// catch the `marked` object regardless of the outer environment.
	// (ex. a CommonJS module compatible environment.)
	// note that this depends on marked's implementation of environment detection.
	var module = {};
	var exports = module.exports = {};

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
	 */
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	return module.exports;
}();


// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

function formatOptions(options)
{
	function toHighlight(code, lang)
	{
		if (!lang && options.defaultHighlighting.ctor === 'Just')
		{
			lang = options.defaultHighlighting._0;
		}

		if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
		{
			return hljs.highlight(lang, code, true).value;
		}

		return code;
	}

	var gfm = options.githubFlavored;
	if (gfm.ctor === 'Just')
	{
		return {
			highlight: toHighlight,
			gfm: true,
			tables: gfm._0.tables,
			breaks: gfm._0.breaks,
			sanitize: options.sanitize,
			smartypants: options.smartypants
		};
	}

	return {
		highlight: toHighlight,
		gfm: false,
		tables: false,
		breaks: false,
		sanitize: options.sanitize,
		smartypants: options.smartypants
	};
}


// EXPORTS

return {
	toHtml: F3(toHtml)
};

}();

var _evancz$elm_markdown$Markdown$toHtmlWith = _evancz$elm_markdown$Native_Markdown.toHtml;
var _evancz$elm_markdown$Markdown$defaultOptions = {
	githubFlavored: _elm_lang$core$Maybe$Just(
		{tables: false, breaks: false}),
	defaultHighlighting: _elm_lang$core$Maybe$Nothing,
	sanitize: false,
	smartypants: false
};
var _evancz$elm_markdown$Markdown$toHtml = F2(
	function (attrs, string) {
		return A3(_evancz$elm_markdown$Native_Markdown.toHtml, _evancz$elm_markdown$Markdown$defaultOptions, attrs, string);
	});
var _evancz$elm_markdown$Markdown$Options = F4(
	function (a, b, c, d) {
		return {githubFlavored: a, defaultHighlighting: b, sanitize: c, smartypants: d};
	});

var _evancz$url_parser$UrlParser$toKeyValuePair = function (segment) {
	var _p0 = A2(_elm_lang$core$String$split, '=', segment);
	if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
		return A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$http$Http$decodeUri(_p0._0),
			_elm_lang$http$Http$decodeUri(_p0._1._0));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _evancz$url_parser$UrlParser$parseParams = function (queryString) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$filterMap,
			_evancz$url_parser$UrlParser$toKeyValuePair,
			A2(
				_elm_lang$core$String$split,
				'&',
				A2(_elm_lang$core$String$dropLeft, 1, queryString))));
};
var _evancz$url_parser$UrlParser$splitUrl = function (url) {
	var _p1 = A2(_elm_lang$core$String$split, '/', url);
	if ((_p1.ctor === '::') && (_p1._0 === '')) {
		return _p1._1;
	} else {
		return _p1;
	}
};
var _evancz$url_parser$UrlParser$parseHelp = function (states) {
	parseHelp:
	while (true) {
		var _p2 = states;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p4 = _p2._0;
			var _p3 = _p4.unvisited;
			if (_p3.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p4.value);
			} else {
				if ((_p3._0 === '') && (_p3._1.ctor === '[]')) {
					return _elm_lang$core$Maybe$Just(_p4.value);
				} else {
					var _v4 = _p2._1;
					states = _v4;
					continue parseHelp;
				}
			}
		}
	}
};
var _evancz$url_parser$UrlParser$parse = F3(
	function (_p5, url, params) {
		var _p6 = _p5;
		return _evancz$url_parser$UrlParser$parseHelp(
			_p6._0(
				{
					visited: {ctor: '[]'},
					unvisited: _evancz$url_parser$UrlParser$splitUrl(url),
					params: params,
					value: _elm_lang$core$Basics$identity
				}));
	});
var _evancz$url_parser$UrlParser$parseHash = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			A2(_elm_lang$core$String$dropLeft, 1, location.hash),
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$parsePath = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			location.pathname,
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$intParamHelp = function (maybeValue) {
	var _p7 = maybeValue;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(_p7._0));
	}
};
var _evancz$url_parser$UrlParser$mapHelp = F2(
	function (func, _p8) {
		var _p9 = _p8;
		return {
			visited: _p9.visited,
			unvisited: _p9.unvisited,
			params: _p9.params,
			value: func(_p9.value)
		};
	});
var _evancz$url_parser$UrlParser$State = F4(
	function (a, b, c, d) {
		return {visited: a, unvisited: b, params: c, value: d};
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		function (_p10) {
			var _p11 = _p10;
			var _p12 = _p11.unvisited;
			if (_p12.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p13 = _p12._0;
				return _elm_lang$core$Native_Utils.eq(_p13, str) ? {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						{ctor: '::', _0: _p13, _1: _p11.visited},
						_p12._1,
						_p11.params,
						_p11.value),
					_1: {ctor: '[]'}
				} : {ctor: '[]'};
			}
		});
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			function (_p14) {
				var _p15 = _p14;
				var _p16 = _p15.unvisited;
				if (_p16.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					var _p18 = _p16._0;
					var _p17 = stringToSomething(_p18);
					if (_p17.ctor === 'Ok') {
						return {
							ctor: '::',
							_0: A4(
								_evancz$url_parser$UrlParser$State,
								{ctor: '::', _0: _p18, _1: _p15.visited},
								_p16._1,
								_p15.params,
								_p15.value(_p17._0)),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}
			});
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p20, _p19) {
		var _p21 = _p20;
		var _p22 = _p19;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p22._0,
					_p21._0(state));
			});
	});
var _evancz$url_parser$UrlParser$map = F2(
	function (subValue, _p23) {
		var _p24 = _p23;
		return _evancz$url_parser$UrlParser$Parser(
			function (_p25) {
				var _p26 = _p25;
				return A2(
					_elm_lang$core$List$map,
					_evancz$url_parser$UrlParser$mapHelp(_p26.value),
					_p24._0(
						{visited: _p26.visited, unvisited: _p26.unvisited, params: _p26.params, value: subValue}));
			});
	});
var _evancz$url_parser$UrlParser$oneOf = function (parsers) {
	return _evancz$url_parser$UrlParser$Parser(
		function (state) {
			return A2(
				_elm_lang$core$List$concatMap,
				function (_p27) {
					var _p28 = _p27;
					return _p28._0(state);
				},
				parsers);
		});
};
var _evancz$url_parser$UrlParser$top = _evancz$url_parser$UrlParser$Parser(
	function (state) {
		return {
			ctor: '::',
			_0: state,
			_1: {ctor: '[]'}
		};
	});
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['<?>'] = F2(
	function (_p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p32._0,
					_p31._0(state));
			});
	});
var _evancz$url_parser$UrlParser$QueryParser = function (a) {
	return {ctor: 'QueryParser', _0: a};
};
var _evancz$url_parser$UrlParser$customParam = F2(
	function (key, func) {
		return _evancz$url_parser$UrlParser$QueryParser(
			function (_p33) {
				var _p34 = _p33;
				var _p35 = _p34.params;
				return {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						_p34.visited,
						_p34.unvisited,
						_p35,
						_p34.value(
							func(
								A2(_elm_lang$core$Dict$get, key, _p35)))),
					_1: {ctor: '[]'}
				};
			});
	});
var _evancz$url_parser$UrlParser$stringParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _elm_lang$core$Basics$identity);
};
var _evancz$url_parser$UrlParser$intParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _evancz$url_parser$UrlParser$intParamHelp);
};

var _ghivert$elm_graphql$Helpers$betweenParen = function (string) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(_elm_lang$core$Basics_ops['++'], string, ')'));
};
var _ghivert$elm_graphql$Helpers$betweenBrackets = function (string) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'[',
		A2(_elm_lang$core$Basics_ops['++'], string, ']'));
};
var _ghivert$elm_graphql$Helpers$betweenBraces = function (string) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'{',
		A2(_elm_lang$core$Basics_ops['++'], string, '}'));
};
var _ghivert$elm_graphql$Helpers$between = F2(
	function ($char, string) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			$char,
			A2(_elm_lang$core$Basics_ops['++'], string, $char));
	});
var _ghivert$elm_graphql$Helpers$betweenQuotes = _ghivert$elm_graphql$Helpers$between('\"');
var _ghivert$elm_graphql$Helpers$betweenNewline = _ghivert$elm_graphql$Helpers$between('\n');
var _ghivert$elm_graphql$Helpers$reverseAdd = _elm_lang$core$Basics$flip(
	F2(
		function (x, y) {
			return A2(_elm_lang$core$Basics_ops['++'], x, y);
		}));

var _ghivert$elm_graphql$GraphQl_Value$joinGraphQlArgument = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1._0,
		A2(_elm_lang$core$Basics_ops['++'], ': ', _p1._1));
};
var _ghivert$elm_graphql$GraphQl_Value$addArguments = function ($arguments) {
	return _elm_lang$core$List$isEmpty($arguments) ? '' : _ghivert$elm_graphql$Helpers$betweenParen(
		A2(
			_elm_lang$core$String$join,
			', ',
			A2(_elm_lang$core$List$map, _ghivert$elm_graphql$GraphQl_Value$joinGraphQlArgument, $arguments)));
};
var _ghivert$elm_graphql$GraphQl_Value$addName = function (_p2) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			_ghivert$elm_graphql$Helpers$reverseAdd(':'),
			_p2));
};
var _ghivert$elm_graphql$GraphQl_Value$encodeName = F2(
	function (_p3, id) {
		var _p4 = _p3;
		var _p5 = _p4._0;
		return A2(
			_ghivert$elm_graphql$Helpers$reverseAdd,
			_ghivert$elm_graphql$GraphQl_Value$addArguments(_p5.$arguments),
			A2(
				_elm_lang$core$Basics_ops['++'],
				_ghivert$elm_graphql$GraphQl_Value$addName(_p5.alias),
				id));
	});
var _ghivert$elm_graphql$GraphQl_Value$Value = function (a) {
	return {ctor: 'Value', _0: a};
};
var _ghivert$elm_graphql$GraphQl_Value$new = _ghivert$elm_graphql$GraphQl_Value$Value(
	{
		id: _elm_lang$core$Maybe$Nothing,
		alias: _elm_lang$core$Maybe$Nothing,
		$arguments: {ctor: '[]'},
		variables: {ctor: '[]'},
		selectors: {ctor: '[]'}
	});
var _ghivert$elm_graphql$GraphQl_Value$setId = F2(
	function (id, _p6) {
		var _p7 = _p6;
		return _ghivert$elm_graphql$GraphQl_Value$Value(
			_elm_lang$core$Native_Utils.update(
				_p7._0,
				{
					id: _elm_lang$core$Maybe$Just(id)
				}));
	});
var _ghivert$elm_graphql$GraphQl_Value$setAlias = F2(
	function (alias, _p8) {
		var _p9 = _p8;
		return _ghivert$elm_graphql$GraphQl_Value$Value(
			_elm_lang$core$Native_Utils.update(
				_p9._0,
				{
					alias: _elm_lang$core$Maybe$Just(alias)
				}));
	});
var _ghivert$elm_graphql$GraphQl_Value$unsetAlias = function (_p10) {
	var _p11 = _p10;
	return _ghivert$elm_graphql$GraphQl_Value$Value(
		_elm_lang$core$Native_Utils.update(
			_p11._0,
			{alias: _elm_lang$core$Maybe$Nothing}));
};
var _ghivert$elm_graphql$GraphQl_Value$setArguments = F2(
	function ($arguments, _p12) {
		var _p13 = _p12;
		return _ghivert$elm_graphql$GraphQl_Value$Value(
			_elm_lang$core$Native_Utils.update(
				_p13._0,
				{$arguments: $arguments}));
	});
var _ghivert$elm_graphql$GraphQl_Value$setVariables = F2(
	function (variables, _p14) {
		var _p15 = _p14;
		return _ghivert$elm_graphql$GraphQl_Value$Value(
			_elm_lang$core$Native_Utils.update(
				_p15._0,
				{variables: variables}));
	});
var _ghivert$elm_graphql$GraphQl_Value$addSelectorsIn = F2(
	function (_p16, selectors) {
		var _p17 = _p16;
		var _p18 = _p17._0;
		return _ghivert$elm_graphql$GraphQl_Value$Value(
			_elm_lang$core$Native_Utils.update(
				_p18,
				{
					selectors: A2(_elm_lang$core$List$append, selectors, _p18.selectors)
				}));
	});
var _ghivert$elm_graphql$GraphQl_Value$swapArgumentsAndVariables = function (_p19) {
	var _p20 = _p19;
	var _p21 = _p20._0;
	return _ghivert$elm_graphql$GraphQl_Value$Value(
		_elm_lang$core$Native_Utils.update(
			_p21,
			{$arguments: _p21.variables}));
};
var _ghivert$elm_graphql$GraphQl_Value$addInValueArguments = F2(
	function (_p22, arg) {
		var _p23 = _p22;
		var _p24 = _p23._0;
		return A2(
			_ghivert$elm_graphql$GraphQl_Value$setArguments,
			{ctor: '::', _0: arg, _1: _p24.$arguments},
			_ghivert$elm_graphql$GraphQl_Value$Value(_p24));
	});
var _ghivert$elm_graphql$GraphQl_Value$addInValueVariables = F2(
	function (_p25, $var) {
		var _p26 = _p25;
		var _p27 = _p26._0;
		return A2(
			_ghivert$elm_graphql$GraphQl_Value$setVariables,
			{ctor: '::', _0: $var, _1: _p27.variables},
			_ghivert$elm_graphql$GraphQl_Value$Value(_p27));
	});
var _ghivert$elm_graphql$GraphQl_Value$encodeValueHelp = function (_p28) {
	var _p29 = _p28;
	var _p30 = _p29._0;
	return A2(
		_ghivert$elm_graphql$Helpers$reverseAdd,
		_ghivert$elm_graphql$GraphQl_Value$addSelectors(_p30.selectors),
		A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				_ghivert$elm_graphql$GraphQl_Value$encodeName(
					_ghivert$elm_graphql$GraphQl_Value$Value(_p30)),
				_p30.id)));
};
var _ghivert$elm_graphql$GraphQl_Value$addSelectors = function (selectors) {
	return _elm_lang$core$List$isEmpty(selectors) ? '' : _ghivert$elm_graphql$Helpers$betweenBraces(
		_ghivert$elm_graphql$Helpers$betweenNewline(
			A2(
				_elm_lang$core$String$join,
				'\n',
				A2(_elm_lang$core$List$map, _ghivert$elm_graphql$GraphQl_Value$encodeValueHelp, selectors))));
};
var _ghivert$elm_graphql$GraphQl_Value$encodeValue = function (value) {
	return _ghivert$elm_graphql$GraphQl_Value$encodeValueHelp(
		_ghivert$elm_graphql$GraphQl_Value$swapArgumentsAndVariables(
			_ghivert$elm_graphql$GraphQl_Value$unsetAlias(value)));
};

var _ghivert$elm_graphql$GraphQl$encodeQuery = function (_p0) {
	var _p1 = _p0;
	return A2(
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'query ',
		_ghivert$elm_graphql$GraphQl_Value$encodeValue(_p1._0));
};
var _ghivert$elm_graphql$GraphQl$queryToBody = F2(
	function (value, variables) {
		return _elm_lang$http$Http$jsonBody(
			_elm_lang$core$Json_Encode$object(
				_elm_lang$core$List$concat(
					{
						ctor: '::',
						_0: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'query',
								_1: _elm_lang$core$Json_Encode$string(
									_ghivert$elm_graphql$GraphQl$encodeQuery(value))
							},
							_1: {ctor: '[]'}
						},
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Maybe$withDefault,
								{ctor: '[]'},
								A2(
									_elm_lang$core$Maybe$map,
									_elm_lang$core$List$singleton,
									A2(
										_elm_lang$core$Maybe$map,
										F2(
											function (v0, v1) {
												return {ctor: '_Tuple2', _0: v0, _1: v1};
											})('variables'),
										A2(_elm_lang$core$Maybe$map, _elm_lang$core$Json_Encode$object, variables)))),
							_1: {ctor: '[]'}
						}
					})));
	});
var _ghivert$elm_graphql$GraphQl$toHttpRequest = function (request) {
	var _p2 = request;
	return A3(
		_elm_lang$http$Http$post,
		_p2._0,
		A2(_ghivert$elm_graphql$GraphQl$queryToBody, _p2._1, _p2._3),
		A2(_elm_lang$core$Json_Decode$field, 'data', _p2._2));
};
var _ghivert$elm_graphql$GraphQl$send = function (msg) {
	return function (_p3) {
		return A2(
			_elm_lang$http$Http$send,
			msg,
			_ghivert$elm_graphql$GraphQl$toHttpRequest(_p3));
	};
};
var _ghivert$elm_graphql$GraphQl$extractValue = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _ghivert$elm_graphql$GraphQl$Query = F4(
	function (a, b, c, d) {
		return {ctor: 'Query', _0: a, _1: b, _2: c, _3: d};
	});
var _ghivert$elm_graphql$GraphQl$query = F3(
	function (endpoint, query_, decoder) {
		return A4(_ghivert$elm_graphql$GraphQl$Query, endpoint, query_, decoder, _elm_lang$core$Maybe$Nothing);
	});
var _ghivert$elm_graphql$GraphQl$addVariables = F2(
	function (variables, request) {
		var _p6 = request;
		return A4(
			_ghivert$elm_graphql$GraphQl$Query,
			_p6._0,
			_p6._1,
			_p6._2,
			_elm_lang$core$Maybe$Just(variables));
	});
var _ghivert$elm_graphql$GraphQl$Root = {ctor: 'Root'};
var _ghivert$elm_graphql$GraphQl$Field = {ctor: 'Field'};
var _ghivert$elm_graphql$GraphQl$Value = function (a) {
	return {ctor: 'Value', _0: a};
};
var _ghivert$elm_graphql$GraphQl$object = function (selectors) {
	return _ghivert$elm_graphql$GraphQl$Value(
		A2(
			_ghivert$elm_graphql$GraphQl_Value$addSelectorsIn,
			_ghivert$elm_graphql$GraphQl_Value$new,
			A2(_elm_lang$core$List$map, _ghivert$elm_graphql$GraphQl$extractValue, selectors)));
};
var _ghivert$elm_graphql$GraphQl$named = F2(
	function (id, selectors) {
		return _ghivert$elm_graphql$GraphQl$Value(
			A2(
				_ghivert$elm_graphql$GraphQl_Value$setId,
				id,
				A2(
					_ghivert$elm_graphql$GraphQl_Value$addSelectorsIn,
					_ghivert$elm_graphql$GraphQl_Value$new,
					A2(_elm_lang$core$List$map, _ghivert$elm_graphql$GraphQl$extractValue, selectors))));
	});
var _ghivert$elm_graphql$GraphQl$field = function (id) {
	return _ghivert$elm_graphql$GraphQl$Value(
		A2(_ghivert$elm_graphql$GraphQl_Value$setId, id, _ghivert$elm_graphql$GraphQl_Value$new));
};
var _ghivert$elm_graphql$GraphQl$withVariable = F3(
	function (name, content, _p7) {
		var _p8 = _p7;
		return _ghivert$elm_graphql$GraphQl$Value(
			A2(
				_ghivert$elm_graphql$GraphQl_Value$addInValueVariables,
				_p8._0,
				{
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Basics_ops['++'], '$', name),
					_1: content
				}));
	});
var _ghivert$elm_graphql$GraphQl$withSelectors = F2(
	function (selectors, _p9) {
		var _p10 = _p9;
		return _ghivert$elm_graphql$GraphQl$Value(
			A2(
				_ghivert$elm_graphql$GraphQl_Value$addSelectorsIn,
				_p10._0,
				A2(_elm_lang$core$List$map, _ghivert$elm_graphql$GraphQl$extractValue, selectors)));
	});
var _ghivert$elm_graphql$GraphQl$withAlias = F2(
	function (alias, _p11) {
		var _p12 = _p11;
		return _ghivert$elm_graphql$GraphQl$Value(
			A2(_ghivert$elm_graphql$GraphQl_Value$setAlias, alias, _p12._0));
	});
var _ghivert$elm_graphql$GraphQl$withArgument = F3(
	function (name, _p14, _p13) {
		var _p15 = _p14;
		var _p16 = _p13;
		return _ghivert$elm_graphql$GraphQl$Value(
			A2(
				_ghivert$elm_graphql$GraphQl_Value$addInValueArguments,
				_p16._0,
				{ctor: '_Tuple2', _0: name, _1: _p15._0}));
	});
var _ghivert$elm_graphql$GraphQl$Argument = function (a) {
	return {ctor: 'Argument', _0: a};
};
var _ghivert$elm_graphql$GraphQl$variable = function (name) {
	return _ghivert$elm_graphql$GraphQl$Argument(
		A2(_elm_lang$core$Basics_ops['++'], '$', name));
};
var _ghivert$elm_graphql$GraphQl$int = function (_p17) {
	return _ghivert$elm_graphql$GraphQl$Argument(
		_elm_lang$core$Basics$toString(_p17));
};
var _ghivert$elm_graphql$GraphQl$string = function (_p18) {
	return _ghivert$elm_graphql$GraphQl$Argument(
		_ghivert$elm_graphql$Helpers$betweenQuotes(_p18));
};
var _ghivert$elm_graphql$GraphQl$type_ = _ghivert$elm_graphql$GraphQl$Argument;

var _hecrj$elm_slug$Slug$simpleQuoteRegex = _elm_lang$core$Regex$regex('\'');
var _hecrj$elm_slug$Slug$isAlphanumeric = function (c) {
	return ((_elm_lang$core$Native_Utils.cmp(
		c,
		_elm_lang$core$Native_Utils.chr('0')) > -1) && (_elm_lang$core$Native_Utils.cmp(
		c,
		_elm_lang$core$Native_Utils.chr('9')) < 1)) || ((_elm_lang$core$Native_Utils.cmp(
		c,
		_elm_lang$core$Native_Utils.chr('a')) > -1) && (_elm_lang$core$Native_Utils.cmp(
		c,
		_elm_lang$core$Native_Utils.chr('z')) < 1));
};
var _hecrj$elm_slug$Slug$processWords = function () {
	var mapHelp = function (c) {
		return _hecrj$elm_slug$Slug$isAlphanumeric(c) ? c : _elm_lang$core$Native_Utils.chr(' ');
	};
	return function (_p0) {
		return _elm_lang$core$String$words(
			A2(
				_elm_lang$core$String$map,
				mapHelp,
				_elm_lang$core$String$toLower(
					A4(
						_elm_lang$core$Regex$replace,
						_elm_lang$core$Regex$All,
						_hecrj$elm_slug$Slug$simpleQuoteRegex,
						function (_p1) {
							return '';
						},
						_p0))));
	};
}();
var _hecrj$elm_slug$Slug$toString = function (_p2) {
	var _p3 = _p2;
	return _p3._0;
};
var _hecrj$elm_slug$Slug$Slug = function (a) {
	return {ctor: 'Slug', _0: a};
};
var _hecrj$elm_slug$Slug$generate = function (text) {
	var words = _hecrj$elm_slug$Slug$processWords(text);
	return _elm_lang$core$Native_Utils.eq(
		words,
		{
			ctor: '::',
			_0: '',
			_1: {ctor: '[]'}
		}) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
		_hecrj$elm_slug$Slug$Slug(
			A2(_elm_lang$core$String$join, '-', words)));
};
var _hecrj$elm_slug$Slug$parse = function (slug) {
	var _p4 = _hecrj$elm_slug$Slug$generate(slug);
	if (_p4.ctor === 'Just') {
		var _p5 = _p4._0;
		return _elm_lang$core$Native_Utils.eq(
			slug,
			_hecrj$elm_slug$Slug$toString(_p5)) ? _elm_lang$core$Maybe$Just(_p5) : _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};

var _krisajenkins$remotedata$RemoteData$isNotAsked = function (data) {
	var _p0 = data;
	if (_p0.ctor === 'NotAsked') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isLoading = function (data) {
	var _p1 = data;
	if (_p1.ctor === 'Loading') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isFailure = function (data) {
	var _p2 = data;
	if (_p2.ctor === 'Failure') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isSuccess = function (data) {
	var _p3 = data;
	if (_p3.ctor === 'Success') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$withDefault = F2(
	function ($default, data) {
		var _p4 = data;
		if (_p4.ctor === 'Success') {
			return _p4._0;
		} else {
			return $default;
		}
	});
var _krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {ctor: 'Success', _0: a};
};
var _krisajenkins$remotedata$RemoteData$succeed = _krisajenkins$remotedata$RemoteData$Success;
var _krisajenkins$remotedata$RemoteData$prism = {
	reverseGet: _krisajenkins$remotedata$RemoteData$Success,
	getOption: function (data) {
		var _p5 = data;
		if (_p5.ctor === 'Success') {
			return _elm_lang$core$Maybe$Just(_p5._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Err') {
		return _krisajenkins$remotedata$RemoteData$Failure(_p6._0);
	} else {
		return _krisajenkins$remotedata$RemoteData$Success(_p6._0);
	}
};
var _krisajenkins$remotedata$RemoteData$asCmd = _elm_lang$core$Task$attempt(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$sendRequest = _elm_lang$http$Http$send(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$fromTask = function (_p7) {
	return A2(
		_elm_lang$core$Task$onError,
		function (_p8) {
			return _elm_lang$core$Task$succeed(
				_krisajenkins$remotedata$RemoteData$Failure(_p8));
		},
		A2(_elm_lang$core$Task$map, _krisajenkins$remotedata$RemoteData$Success, _p7));
};
var _krisajenkins$remotedata$RemoteData$Loading = {ctor: 'Loading'};
var _krisajenkins$remotedata$RemoteData$NotAsked = {ctor: 'NotAsked'};
var _krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		var _p9 = data;
		switch (_p9.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(
					f(_p9._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Failure(_p9._0);
		}
	});
var _krisajenkins$remotedata$RemoteData$toMaybe = function (_p10) {
	return A2(
		_krisajenkins$remotedata$RemoteData$withDefault,
		_elm_lang$core$Maybe$Nothing,
		A2(_krisajenkins$remotedata$RemoteData$map, _elm_lang$core$Maybe$Just, _p10));
};
var _krisajenkins$remotedata$RemoteData$mapError = F2(
	function (f, data) {
		var _p11 = data;
		switch (_p11.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(_p11._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(
					f(_p11._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$mapBoth = F2(
	function (successFn, errorFn) {
		return function (_p12) {
			return A2(
				_krisajenkins$remotedata$RemoteData$mapError,
				errorFn,
				A2(_krisajenkins$remotedata$RemoteData$map, successFn, _p12));
		};
	});
var _krisajenkins$remotedata$RemoteData$andThen = F2(
	function (f, data) {
		var _p13 = data;
		switch (_p13.ctor) {
			case 'Success':
				return f(_p13._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p13._0);
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Loading;
		}
	});
var _krisajenkins$remotedata$RemoteData$andMap = F2(
	function (wrappedValue, wrappedFunction) {
		var _p14 = {ctor: '_Tuple2', _0: wrappedFunction, _1: wrappedValue};
		_v10_5:
		do {
			_v10_4:
			do {
				_v10_3:
				do {
					_v10_2:
					do {
						switch (_p14._0.ctor) {
							case 'Success':
								switch (_p14._1.ctor) {
									case 'Success':
										return _krisajenkins$remotedata$RemoteData$Success(
											_p14._0._0(_p14._1._0));
									case 'Failure':
										break _v10_2;
									case 'Loading':
										break _v10_4;
									default:
										return _krisajenkins$remotedata$RemoteData$NotAsked;
								}
							case 'Failure':
								return _krisajenkins$remotedata$RemoteData$Failure(_p14._0._0);
							case 'Loading':
								switch (_p14._1.ctor) {
									case 'Failure':
										break _v10_2;
									case 'Loading':
										break _v10_3;
									case 'NotAsked':
										break _v10_3;
									default:
										break _v10_3;
								}
							default:
								switch (_p14._1.ctor) {
									case 'Failure':
										break _v10_2;
									case 'Loading':
										break _v10_4;
									case 'NotAsked':
										break _v10_5;
									default:
										break _v10_5;
								}
						}
					} while(false);
					return _krisajenkins$remotedata$RemoteData$Failure(_p14._1._0);
				} while(false);
				return _krisajenkins$remotedata$RemoteData$Loading;
			} while(false);
			return _krisajenkins$remotedata$RemoteData$Loading;
		} while(false);
		return _krisajenkins$remotedata$RemoteData$NotAsked;
	});
var _krisajenkins$remotedata$RemoteData$map2 = F3(
	function (f, a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(_krisajenkins$remotedata$RemoteData$map, f, a));
	});
var _krisajenkins$remotedata$RemoteData$map3 = F4(
	function (f, a, b, c) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			c,
			A2(
				_krisajenkins$remotedata$RemoteData$andMap,
				b,
				A2(_krisajenkins$remotedata$RemoteData$map, f, a)));
	});
var _krisajenkins$remotedata$RemoteData$append = F2(
	function (a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(
				_krisajenkins$remotedata$RemoteData$map,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				a));
	});
var _krisajenkins$remotedata$RemoteData$update = F2(
	function (f, remoteData) {
		var _p15 = remoteData;
		switch (_p15.ctor) {
			case 'Success':
				var _p16 = f(_p15._0);
				var first = _p16._0;
				var second = _p16._1;
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Success(first),
					_1: second
				};
			case 'NotAsked':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$NotAsked, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Loading':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Failure(_p15._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});

var _user$project$Routes$toPath = function (route) {
	var _p0 = route;
	switch (_p0.ctor) {
		case 'HomeRoute':
			return '#';
		case 'TopicsRoute':
			return '#topics';
		case 'TopicRoute':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'#topics/',
				_hecrj$elm_slug$Slug$toString(_p0._0));
		case 'QuestionRoute':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'#topics/',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_hecrj$elm_slug$Slug$toString(_p0._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'/',
						_hecrj$elm_slug$Slug$toString(_p0._1))));
		case 'SignUpRoute':
			return '#signup';
		case 'LoginRoute':
			return '#login';
		case 'UserHomeRoute':
			return '#user';
		default:
			return '';
	}
};
var _user$project$Routes$slugMatcher = A2(
	_evancz$url_parser$UrlParser$custom,
	'TOPIC_TITLE',
	function (segment) {
		var _p1 = _hecrj$elm_slug$Slug$generate(segment);
		if (_p1.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p1._0);
		} else {
			return _elm_lang$core$Result$Err('Malformed Path');
		}
	});
var _user$project$Routes$NotFoundRoute = {ctor: 'NotFoundRoute'};
var _user$project$Routes$UserHomeRoute = {ctor: 'UserHomeRoute'};
var _user$project$Routes$LoginRoute = {ctor: 'LoginRoute'};
var _user$project$Routes$SignUpRoute = {ctor: 'SignUpRoute'};
var _user$project$Routes$QuestionRoute = F2(
	function (a, b) {
		return {ctor: 'QuestionRoute', _0: a, _1: b};
	});
var _user$project$Routes$TopicRoute = function (a) {
	return {ctor: 'TopicRoute', _0: a};
};
var _user$project$Routes$TopicsRoute = {ctor: 'TopicsRoute'};
var _user$project$Routes$HomeRoute = {ctor: 'HomeRoute'};
var _user$project$Routes$matchers = _evancz$url_parser$UrlParser$oneOf(
	{
		ctor: '::',
		_0: A2(_evancz$url_parser$UrlParser$map, _user$project$Routes$HomeRoute, _evancz$url_parser$UrlParser$top),
		_1: {
			ctor: '::',
			_0: A2(
				_evancz$url_parser$UrlParser$map,
				_user$project$Routes$TopicsRoute,
				_evancz$url_parser$UrlParser$s('topics')),
			_1: {
				ctor: '::',
				_0: A2(
					_evancz$url_parser$UrlParser$map,
					_user$project$Routes$TopicRoute,
					A2(
						_evancz$url_parser$UrlParser_ops['</>'],
						_evancz$url_parser$UrlParser$s('topics'),
						_user$project$Routes$slugMatcher)),
				_1: {
					ctor: '::',
					_0: A2(
						_evancz$url_parser$UrlParser$map,
						_user$project$Routes$QuestionRoute,
						A2(
							_evancz$url_parser$UrlParser_ops['</>'],
							_evancz$url_parser$UrlParser$s('topics'),
							A2(_evancz$url_parser$UrlParser_ops['</>'], _user$project$Routes$slugMatcher, _user$project$Routes$slugMatcher))),
					_1: {
						ctor: '::',
						_0: A2(
							_evancz$url_parser$UrlParser$map,
							_user$project$Routes$SignUpRoute,
							_evancz$url_parser$UrlParser$s('signup')),
						_1: {
							ctor: '::',
							_0: A2(
								_evancz$url_parser$UrlParser$map,
								_user$project$Routes$LoginRoute,
								_evancz$url_parser$UrlParser$s('login')),
							_1: {
								ctor: '::',
								_0: A2(
									_evancz$url_parser$UrlParser$map,
									_user$project$Routes$UserHomeRoute,
									_evancz$url_parser$UrlParser$s('user')),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		}
	});
var _user$project$Routes$parseLocation = function (location) {
	var _p2 = A2(_evancz$url_parser$UrlParser$parseHash, _user$project$Routes$matchers, location);
	if (_p2.ctor === 'Just') {
		return _p2._0;
	} else {
		return _user$project$Routes$NotFoundRoute;
	}
};

var _user$project$Model$View = F2(
	function (a, b) {
		return {mobile: a, tablet: b};
	});
var _user$project$Model$Brand = F3(
	function (a, b, c) {
		return {logo: a, primaryColour: b, secondaryColour: c};
	});
var _user$project$Model$Topic = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {id: a, title: b, slug: c, description: d, questions: e, icon: f, colour: g, next: h, previous: i};
	});
var _user$project$Model$Token = F4(
	function (a, b, c, d) {
		return {accessToken: a, idToken: b, tokenType: c, expiresIn: d};
	});
var _user$project$Model$UserForm = F4(
	function (a, b, c, d) {
		return {username: a, password: b, repeat: c, email: d};
	});
var _user$project$Model$initialUserForm = A4(_user$project$Model$UserForm, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing);
var _user$project$Model$SignUp = F4(
	function (a, b, c, d) {
		return {id: a, username: b, email: c, emailVerified: d};
	});
var _user$project$Model$User = F4(
	function (a, b, c, d) {
		return {username: a, email: b, picture: c, emailVerified: d};
	});
var _user$project$Model$Question = F6(
	function (a, b, c, d, e, f) {
		return {id: a, title: b, slug: c, answer: d, next: e, previous: f};
	});
var _user$project$Model$Model = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {topics: a, brand: b, route: c, window: d, responsive: e, userForm: f, signUp: g, token: h, user: i};
	});
var _user$project$Model$Tablet = {ctor: 'Tablet'};
var _user$project$Model$Mobile = {ctor: 'Mobile'};
var _user$project$Model$initialModel = {
	topics: _krisajenkins$remotedata$RemoteData$Loading,
	brand: _krisajenkins$remotedata$RemoteData$Loading,
	route: _user$project$Routes$HomeRoute,
	window: A2(_elm_lang$window$Window$Size, 0, 0),
	responsive: _user$project$Model$Mobile,
	userForm: _user$project$Model$initialUserForm,
	signUp: _krisajenkins$remotedata$RemoteData$NotAsked,
	token: _krisajenkins$remotedata$RemoteData$NotAsked,
	user: _krisajenkins$remotedata$RemoteData$Loading
};

var _user$project$Validator$isValid = function (str) {
	return A2(
		F2(
			function (x, y) {
				return !_elm_lang$core$Native_Utils.eq(x, y);
			}),
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Result$toMaybe(str));
};
var _user$project$Validator$toString = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _user$project$Validator$emailRegex = _elm_lang$core$Regex$caseInsensitive(
	_elm_lang$core$Regex$regex('^\\S+@\\S+\\.\\S+$'));
var _user$project$Validator$ValidUser = F3(
	function (a, b, c) {
		return {username: a, email: b, password: c};
	});
var _user$project$Validator$ErrorResponse = F4(
	function (a, b, c, d) {
		return {name: a, descriptor: b, code: c, statusCode: d};
	});
var _user$project$Validator$Valid = function (a) {
	return {ctor: 'Valid', _0: a};
};
var _user$project$Validator$FailedLogin = {ctor: 'FailedLogin'};
var _user$project$Validator$CatchAll = {ctor: 'CatchAll'};
var _user$project$Validator$EmailTaken = {ctor: 'EmailTaken'};
var _user$project$Validator$UsernameTaken = {ctor: 'UsernameTaken'};
var _user$project$Validator$DoNotMatch = {ctor: 'DoNotMatch'};
var _user$project$Validator$NotEntered = {ctor: 'NotEntered'};
var _user$project$Validator$WrongSize = {ctor: 'WrongSize'};
var _user$project$Validator$Empty = {ctor: 'Empty'};
var _user$project$Validator$password = function (maybe) {
	var _p2 = maybe;
	if (_p2.ctor === 'Nothing') {
		return _elm_lang$core$Result$Err(_user$project$Validator$NotEntered);
	} else {
		var _p3 = _p2._0;
		return _elm_lang$core$String$isEmpty(_p3) ? _elm_lang$core$Result$Err(_user$project$Validator$Empty) : ((_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(_p3),
			6) < 0) ? _elm_lang$core$Result$Err(_user$project$Validator$WrongSize) : ((!A2(
			_elm_lang$core$Regex$contains,
			_elm_lang$core$Regex$regex('\\d'),
			_p3)) ? _elm_lang$core$Result$Err(_user$project$Validator$DoNotMatch) : _elm_lang$core$Result$Ok(
			_user$project$Validator$Valid(_p3))));
	}
};
var _user$project$Validator$username = function (maybe) {
	var _p4 = maybe;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Result$Err(_user$project$Validator$NotEntered);
	} else {
		var _p5 = _p4._0;
		return _elm_lang$core$String$isEmpty(_p5) ? _elm_lang$core$Result$Err(_user$project$Validator$Empty) : (A2(
			_elm_lang$core$Regex$contains,
			_elm_lang$core$Regex$regex('\\W'),
			_p5) ? _elm_lang$core$Result$Err(_user$project$Validator$DoNotMatch) : ((_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(_p5),
			30) > 0) ? _elm_lang$core$Result$Err(_user$project$Validator$WrongSize) : _elm_lang$core$Result$Ok(
			_user$project$Validator$Valid(_p5))));
	}
};
var _user$project$Validator$email = function (maybe) {
	var _p6 = maybe;
	if (_p6.ctor === 'Nothing') {
		return _elm_lang$core$Result$Err(_user$project$Validator$NotEntered);
	} else {
		var _p7 = _p6._0;
		return _elm_lang$core$String$isEmpty(_p7) ? _elm_lang$core$Result$Err(_user$project$Validator$Empty) : ((!A2(_elm_lang$core$Regex$contains, _user$project$Validator$emailRegex, _p7)) ? _elm_lang$core$Result$Err(_user$project$Validator$DoNotMatch) : _elm_lang$core$Result$Ok(
			_user$project$Validator$Valid(_p7)));
	}
};
var _user$project$Validator$validLoginUser = function (form) {
	return _elm_lang$core$Result$toMaybe(
		A4(
			_elm_lang$core$Result$map3,
			_user$project$Validator$ValidUser,
			_user$project$Validator$username(
				_elm_lang$core$Maybe$Just('dummy')),
			_user$project$Validator$email(form.email),
			_user$project$Validator$password(form.password)));
};
var _user$project$Validator$validLoginInputs = function (form) {
	return A2(
		_elm_lang$core$List$all,
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(true),
		A2(
			_elm_lang$core$List$map,
			_user$project$Validator$isValid,
			{
				ctor: '::',
				_0: _user$project$Validator$email(form.email),
				_1: {
					ctor: '::',
					_0: _user$project$Validator$password(form.password),
					_1: {ctor: '[]'}
				}
			}));
};
var _user$project$Validator$validSignUpUser = function (form) {
	return _elm_lang$core$Native_Utils.eq(form.repeat, form.password) ? _elm_lang$core$Result$toMaybe(
		A4(
			_elm_lang$core$Result$map3,
			_user$project$Validator$ValidUser,
			_user$project$Validator$username(form.username),
			_user$project$Validator$email(form.email),
			_user$project$Validator$password(form.password))) : _elm_lang$core$Maybe$Nothing;
};
var _user$project$Validator$validSignUpInputs = function (form) {
	return A2(
		_elm_lang$core$List$all,
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(true),
		A2(
			_elm_lang$core$List$map,
			_user$project$Validator$isValid,
			{
				ctor: '::',
				_0: _user$project$Validator$username(form.username),
				_1: {
					ctor: '::',
					_0: _user$project$Validator$email(form.email),
					_1: {
						ctor: '::',
						_0: _user$project$Validator$password(form.password),
						_1: {
							ctor: '::',
							_0: _user$project$Validator$password(form.repeat),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};

var _user$project$Decoders$toError = function (str) {
	return _elm_lang$core$Native_Utils.eq(str, 'username_exists') ? _user$project$Validator$UsernameTaken : (_elm_lang$core$Native_Utils.eq(str, 'user_exists') ? _user$project$Validator$EmailTaken : _user$project$Validator$CatchAll);
};
var _user$project$Decoders$decodeUser = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'email_verified',
	_elm_lang$core$Json_Decode$bool,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'picture',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'email',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'nickname',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Model$User)))));
var _user$project$Decoders$decodeError = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'statusCode',
	_elm_lang$core$Json_Decode$int,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'code',
		A2(_elm_lang$core$Json_Decode$map, _user$project$Decoders$toError, _elm_lang$core$Json_Decode$string),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'description',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'name',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Validator$ErrorResponse)))));
var _user$project$Decoders$decodeToken = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'expires_in',
	_elm_lang$core$Json_Decode$int,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'token_type',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'id_token',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'access_token',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Model$Token)))));
var _user$project$Decoders$decodeSignUp = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'email_verified',
	_elm_lang$core$Json_Decode$bool,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'email',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'username',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'_id',
				_elm_lang$core$Json_Decode$string,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Model$SignUp)))));
var _user$project$Decoders$decodeBrand = A2(
	_elm_lang$core$Json_Decode$field,
	'Brand',
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'secondaryColour',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'primaryColour',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'logo',
				A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string),
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Model$Brand)))));
var _user$project$Decoders$decodeSlug = function (title) {
	var _p0 = _hecrj$elm_slug$Slug$generate(title);
	if (_p0.ctor === 'Just') {
		return _elm_lang$core$Json_Decode$succeed(_p0._0);
	} else {
		return _elm_lang$core$Json_Decode$fail('Can\'t slugify title');
	}
};
var _user$project$Decoders$finalQuestionDecoder = F5(
	function (id, title, answer, next, prev) {
		var _p1 = _hecrj$elm_slug$Slug$generate(title);
		if (_p1.ctor === 'Just') {
			return _elm_lang$core$Json_Decode$succeed(
				A6(_user$project$Model$Question, id, title, _p1._0, answer, next, prev));
		} else {
			return _elm_lang$core$Json_Decode$fail('Can\'t slugify question title');
		}
	});
var _user$project$Decoders$decodeQuestion = _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve(
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'previousQuestion',
		_elm_lang$core$Json_Decode$nullable(
			A2(
				_elm_lang$core$Json_Decode$andThen,
				_user$project$Decoders$decodeSlug,
				A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string))),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'nextQuestion',
			_elm_lang$core$Json_Decode$nullable(
				A2(
					_elm_lang$core$Json_Decode$andThen,
					_user$project$Decoders$decodeSlug,
					A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string))),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'answer',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'title',
					_elm_lang$core$Json_Decode$string,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Decoders$finalQuestionDecoder)))))));
var _user$project$Decoders$finalTopicDecoder = F8(
	function (id, title, desc, questions, icon, colour, next, prev) {
		var _p2 = _hecrj$elm_slug$Slug$generate(title);
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Json_Decode$succeed(
				A9(_user$project$Model$Topic, id, title, _p2._0, desc, questions, icon, colour, next, prev));
		} else {
			return _elm_lang$core$Json_Decode$fail('Can\'t slugify title');
		}
	});
var _user$project$Decoders$decodeTopic = _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve(
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'previousTopic',
		_elm_lang$core$Json_Decode$nullable(
			A2(
				_elm_lang$core$Json_Decode$andThen,
				_user$project$Decoders$decodeSlug,
				A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string))),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'nextTopic',
			_elm_lang$core$Json_Decode$nullable(
				A2(
					_elm_lang$core$Json_Decode$andThen,
					_user$project$Decoders$decodeSlug,
					A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string))),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'colour',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'icon',
					A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'questions',
						_elm_lang$core$Json_Decode$list(_user$project$Decoders$decodeQuestion),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'description',
							_elm_lang$core$Json_Decode$string,
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'title',
								_elm_lang$core$Json_Decode$string,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'id',
									_elm_lang$core$Json_Decode$string,
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Decoders$finalTopicDecoder))))))))));
var _user$project$Decoders$decodeTopics = A2(
	_elm_lang$core$Json_Decode$field,
	'allTopics',
	_elm_lang$core$Json_Decode$list(_user$project$Decoders$decodeTopic));

var _user$project$Messages$Submit = function (a) {
	return {ctor: 'Submit', _0: a};
};
var _user$project$Messages$Repeat = function (a) {
	return {ctor: 'Repeat', _0: a};
};
var _user$project$Messages$Password = function (a) {
	return {ctor: 'Password', _0: a};
};
var _user$project$Messages$Email = function (a) {
	return {ctor: 'Email', _0: a};
};
var _user$project$Messages$Username = function (a) {
	return {ctor: 'Username', _0: a};
};
var _user$project$Messages$OnLoginForm = function (a) {
	return {ctor: 'OnLoginForm', _0: a};
};
var _user$project$Messages$OnSignUpForm = function (a) {
	return {ctor: 'OnSignUpForm', _0: a};
};
var _user$project$Messages$OnUserLogin = function (a) {
	return {ctor: 'OnUserLogin', _0: a};
};
var _user$project$Messages$OnUserSignUp = function (a) {
	return {ctor: 'OnUserSignUp', _0: a};
};
var _user$project$Messages$OnLocationChange = function (a) {
	return {ctor: 'OnLocationChange', _0: a};
};
var _user$project$Messages$UpdateRoute = function (a) {
	return {ctor: 'UpdateRoute', _0: a};
};
var _user$project$Messages$OnWindowChange = function (a) {
	return {ctor: 'OnWindowChange', _0: a};
};
var _user$project$Messages$OnFetchUserInfo = function (a) {
	return {ctor: 'OnFetchUserInfo', _0: a};
};
var _user$project$Messages$OnFetchBrand = function (a) {
	return {ctor: 'OnFetchBrand', _0: a};
};
var _user$project$Messages$OnFetchTopics = function (a) {
	return {ctor: 'OnFetchTopics', _0: a};
};

var _user$project$Encoders$clientId = 'enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ';
var _user$project$Encoders$signUp = function (user) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'client_id',
				_1: _elm_lang$core$Json_Encode$string(_user$project$Encoders$clientId)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'email',
					_1: _elm_lang$core$Json_Encode$string(
						_user$project$Validator$toString(user.email))
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'password',
						_1: _elm_lang$core$Json_Encode$string(
							_user$project$Validator$toString(user.password))
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'username',
							_1: _elm_lang$core$Json_Encode$string(
								_user$project$Validator$toString(user.username))
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'connection',
								_1: _elm_lang$core$Json_Encode$string('db-connection')
							},
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$Encoders$login = function (user) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'client_id',
				_1: _elm_lang$core$Json_Encode$string(_user$project$Encoders$clientId)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'password',
					_1: _elm_lang$core$Json_Encode$string(
						_user$project$Validator$toString(user.password))
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'username',
						_1: _elm_lang$core$Json_Encode$string(
							_user$project$Validator$toString(user.email))
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'grant_type',
							_1: _elm_lang$core$Json_Encode$string('password')
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'audience',
								_1: _elm_lang$core$Json_Encode$string('dg-academy')
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'scope',
									_1: _elm_lang$core$Json_Encode$string('openid')
								},
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};

var _user$project$Api$topicQuery = _ghivert$elm_graphql$GraphQl$object(
	{
		ctor: '::',
		_0: A2(
			_ghivert$elm_graphql$GraphQl$withSelectors,
			{
				ctor: '::',
				_0: _ghivert$elm_graphql$GraphQl$field('id'),
				_1: {
					ctor: '::',
					_0: _ghivert$elm_graphql$GraphQl$field('title'),
					_1: {
						ctor: '::',
						_0: _ghivert$elm_graphql$GraphQl$field('description'),
						_1: {
							ctor: '::',
							_0: A2(
								_ghivert$elm_graphql$GraphQl$withSelectors,
								{
									ctor: '::',
									_0: _ghivert$elm_graphql$GraphQl$field('id'),
									_1: {
										ctor: '::',
										_0: _ghivert$elm_graphql$GraphQl$field('title'),
										_1: {
											ctor: '::',
											_0: _ghivert$elm_graphql$GraphQl$field('answer'),
											_1: {
												ctor: '::',
												_0: A2(
													_ghivert$elm_graphql$GraphQl$withSelectors,
													{
														ctor: '::',
														_0: _ghivert$elm_graphql$GraphQl$field('title'),
														_1: {ctor: '[]'}
													},
													_ghivert$elm_graphql$GraphQl$field('nextQuestion')),
												_1: {
													ctor: '::',
													_0: A2(
														_ghivert$elm_graphql$GraphQl$withSelectors,
														{
															ctor: '::',
															_0: _ghivert$elm_graphql$GraphQl$field('title'),
															_1: {ctor: '[]'}
														},
														_ghivert$elm_graphql$GraphQl$field('previousQuestion')),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								},
								_ghivert$elm_graphql$GraphQl$field('questions')),
							_1: {
								ctor: '::',
								_0: A2(
									_ghivert$elm_graphql$GraphQl$withSelectors,
									{
										ctor: '::',
										_0: _ghivert$elm_graphql$GraphQl$field('url'),
										_1: {ctor: '[]'}
									},
									_ghivert$elm_graphql$GraphQl$field('icon')),
								_1: {
									ctor: '::',
									_0: _ghivert$elm_graphql$GraphQl$field('colour'),
									_1: {
										ctor: '::',
										_0: A2(
											_ghivert$elm_graphql$GraphQl$withSelectors,
											{
												ctor: '::',
												_0: _ghivert$elm_graphql$GraphQl$field('title'),
												_1: {ctor: '[]'}
											},
											_ghivert$elm_graphql$GraphQl$field('nextTopic')),
										_1: {
											ctor: '::',
											_0: A2(
												_ghivert$elm_graphql$GraphQl$withSelectors,
												{
													ctor: '::',
													_0: _ghivert$elm_graphql$GraphQl$field('title'),
													_1: {ctor: '[]'}
												},
												_ghivert$elm_graphql$GraphQl$field('previousTopic')),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			},
			_ghivert$elm_graphql$GraphQl$field('allTopics')),
		_1: {ctor: '[]'}
	});
var _user$project$Api$authorisedRequest = function (token) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {
				ctor: '::',
				_0: A2(
					_elm_lang$http$Http$header,
					'Authorization',
					A2(_elm_lang$core$Basics_ops['++'], 'Bearer ', token.accessToken)),
				_1: {ctor: '[]'}
			},
			url: 'https://nookit.eu.auth0.com/userinfo',
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectJson(_user$project$Decoders$decodeUser),
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _user$project$Api$fetchUserInfo = function (token) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Messages$OnFetchUserInfo,
		_krisajenkins$remotedata$RemoteData$sendRequest(
			_user$project$Api$authorisedRequest(token)));
};
var _user$project$Api$brandQuery = _ghivert$elm_graphql$GraphQl$object(
	{
		ctor: '::',
		_0: A2(
			_ghivert$elm_graphql$GraphQl$withSelectors,
			{
				ctor: '::',
				_0: _ghivert$elm_graphql$GraphQl$field('primaryColour'),
				_1: {
					ctor: '::',
					_0: _ghivert$elm_graphql$GraphQl$field('secondaryColour'),
					_1: {
						ctor: '::',
						_0: A2(
							_ghivert$elm_graphql$GraphQl$withSelectors,
							{
								ctor: '::',
								_0: _ghivert$elm_graphql$GraphQl$field('url'),
								_1: {ctor: '[]'}
							},
							_ghivert$elm_graphql$GraphQl$field('logo')),
						_1: {ctor: '[]'}
					}
				}
			},
			A3(
				_ghivert$elm_graphql$GraphQl$withArgument,
				'name',
				_ghivert$elm_graphql$GraphQl$string('dgacademy'),
				_ghivert$elm_graphql$GraphQl$field('Brand'))),
		_1: {ctor: '[]'}
	});
var _user$project$Api$cmsUrl = 'https://api.graphcms.com/simple/v1/dgacademy';
var _user$project$Api$fetchBrand = A2(
	_elm_lang$core$Platform_Cmd$map,
	_user$project$Messages$OnFetchBrand,
	_krisajenkins$remotedata$RemoteData$sendRequest(
		_ghivert$elm_graphql$GraphQl$toHttpRequest(
			A3(_ghivert$elm_graphql$GraphQl$query, _user$project$Api$cmsUrl, _user$project$Api$brandQuery, _user$project$Decoders$decodeBrand))));
var _user$project$Api$fetchAllTopics = A2(
	_elm_lang$core$Platform_Cmd$map,
	_user$project$Messages$OnFetchTopics,
	_krisajenkins$remotedata$RemoteData$sendRequest(
		_ghivert$elm_graphql$GraphQl$toHttpRequest(
			A3(_ghivert$elm_graphql$GraphQl$query, _user$project$Api$cmsUrl, _user$project$Api$topicQuery, _user$project$Decoders$decodeTopics))));
var _user$project$Api$loginUrl = 'https://nookit.eu.auth0.com/oauth/token';
var _user$project$Api$login = function (user) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Messages$OnUserLogin,
		_krisajenkins$remotedata$RemoteData$sendRequest(
			A3(
				_elm_lang$http$Http$post,
				_user$project$Api$loginUrl,
				_elm_lang$http$Http$jsonBody(
					_user$project$Encoders$login(user)),
				_user$project$Decoders$decodeToken)));
};
var _user$project$Api$signUpUrl = 'https://nookit.eu.auth0.com/dbconnections/signup';
var _user$project$Api$signUp = function (user) {
	return A2(
		_elm_lang$core$Platform_Cmd$map,
		_user$project$Messages$OnUserSignUp,
		_krisajenkins$remotedata$RemoteData$sendRequest(
			A3(
				_elm_lang$http$Http$post,
				_user$project$Api$signUpUrl,
				_elm_lang$http$Http$jsonBody(
					_user$project$Encoders$signUp(user)),
				_user$project$Decoders$decodeSignUp)));
};

var _user$project$Persistence$put = _elm_lang$core$Native_Platform.outgoingPort(
	'put',
	function (v) {
		return (v.ctor === 'Nothing') ? null : {accessToken: v._0.accessToken, idToken: v._0.idToken, tokenType: v._0.tokenType, expiresIn: v._0.expiresIn};
	});

var _user$project$Views_ErrorPage$nf = {
	ctor: '::',
	_0: A2(
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('section'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h1,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('404'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Page Not Found'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('The page you are looking for is not available. Please check the URL and try again.'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href(
									_user$project$Routes$toPath(_user$project$Routes$HomeRoute)),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Go back to home page'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		}),
	_1: {ctor: '[]'}
};
var _user$project$Views_ErrorPage$common = function (view) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('dg-error-page'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('container'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$section,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('row section'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('col s12 xl8 offset-xl2'),
									_1: {ctor: '[]'}
								},
								view),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_ErrorPage$ne = {
	ctor: '::',
	_0: A2(
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('section'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h1,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Oops!'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Something went wrong'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Looks like there was an error on this page. Click the link below and try again.'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href(
									_user$project$Routes$toPath(_user$project$Routes$HomeRoute)),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Go back to home page'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		}),
	_1: {ctor: '[]'}
};
var _user$project$Views_ErrorPage$ue = function (response) {
	return {
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('section'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Native_Utils.eq(response.status.code, 200) ? 400 : response.status.code)),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Something went wrong'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h5,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(response.url),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$p,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('Looks like there was an error on this page. Click the link below and try again.'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$a,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$href(
											_user$project$Routes$toPath(_user$project$Routes$HomeRoute)),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Go back to home page'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$section,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('card'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('card-content'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								_elm_lang$core$Basics$toString(response.body)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		}
	};
};
var _user$project$Views_ErrorPage$notFound = {
	mobile: _user$project$Views_ErrorPage$common(_user$project$Views_ErrorPage$nf),
	tablet: _user$project$Views_ErrorPage$common(_user$project$Views_ErrorPage$nf)
};
var _user$project$Views_ErrorPage$networkError = {
	mobile: _user$project$Views_ErrorPage$common(_user$project$Views_ErrorPage$ne),
	tablet: _user$project$Views_ErrorPage$common(_user$project$Views_ErrorPage$ne)
};
var _user$project$Views_ErrorPage$userError = function (response) {
	return {
		mobile: _user$project$Views_ErrorPage$common(
			_user$project$Views_ErrorPage$ue(response)),
		tablet: _user$project$Views_ErrorPage$common(
			_user$project$Views_ErrorPage$ue(response))
	};
};

var _user$project$Views_Layout$loaderPart = function (color) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class(
				A2(_elm_lang$core$Basics_ops['++'], 'spinner-layer spinner-', color)),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('circle-clipper left'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('circle'),
							_1: {ctor: '[]'}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('gap-patch'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('circle'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('circle-clipper right'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('circle'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Views_Layout$loading = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('dg-loading-wrapper'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('dg-loader'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('preloader-wrapper active'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						_user$project$Views_Layout$loaderPart,
						{
							ctor: '::',
							_0: 'blue',
							_1: {
								ctor: '::',
								_0: 'red',
								_1: {
									ctor: '::',
									_0: 'yellow',
									_1: {
										ctor: '::',
										_0: 'green',
										_1: {ctor: '[]'}
									}
								}
							}
						})),
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Layout$withLoader = function (content) {
	return {
		mobile: A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: content.mobile,
				_1: {
					ctor: '::',
					_0: _user$project$Views_Layout$loading,
					_1: {ctor: '[]'}
				}
			}),
		tablet: A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: content.tablet,
				_1: {
					ctor: '::',
					_0: _user$project$Views_Layout$loading,
					_1: {ctor: '[]'}
				}
			})
	};
};
var _user$project$Views_Layout$headerTablet = function (content) {
	return A2(
		_elm_lang$html$Html$header,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: content.tablet,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Layout$headerMobile = function (content) {
	return A2(
		_elm_lang$html$Html$header,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: content.mobile,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Layout$mainNoContainer = function (content) {
	return A2(
		_elm_lang$html$Html$main_,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: content.tablet,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Layout$mainTablet = function (content) {
	return A2(
		_elm_lang$html$Html$main_,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('container'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: content.tablet,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Layout$mainMobile = function (content) {
	return A2(
		_elm_lang$html$Html$main_,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: content.mobile,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Layout$headerMain = F2(
	function (header, main) {
		return {
			mobile: A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _user$project$Views_Layout$headerMobile(header),
					_1: {
						ctor: '::',
						_0: _user$project$Views_Layout$mainMobile(main),
						_1: {ctor: '[]'}
					}
				}),
			tablet: A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _user$project$Views_Layout$headerTablet(header),
					_1: {
						ctor: '::',
						_0: _user$project$Views_Layout$mainTablet(main),
						_1: {ctor: '[]'}
					}
				})
		};
	});
var _user$project$Views_Layout$onlyMain = function (main) {
	return {
		mobile: A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _user$project$Views_Layout$mainMobile(main),
				_1: {ctor: '[]'}
			}),
		tablet: A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _user$project$Views_Layout$mainNoContainer(main),
				_1: {ctor: '[]'}
			})
	};
};
var _user$project$Views_Layout$noContainer = F2(
	function (header, main) {
		return {
			mobile: A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _user$project$Views_Layout$headerMobile(header),
					_1: {
						ctor: '::',
						_0: _user$project$Views_Layout$mainMobile(main),
						_1: {ctor: '[]'}
					}
				}),
			tablet: A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _user$project$Views_Layout$headerTablet(header),
					_1: {
						ctor: '::',
						_0: _user$project$Views_Layout$mainNoContainer(main),
						_1: {ctor: '[]'}
					}
				})
		};
	});

var _user$project$Views_Text$alreadyHaveAccount = _elm_lang$html$Html$text('Already have an account?');
var _user$project$Views_Text$doNotHaveAccount = _elm_lang$html$Html$text('Don\'t have an account?');
var _user$project$Views_Text$forgotPassword = _elm_lang$html$Html$text('Forgot password?');
var _user$project$Views_Text$readMore = _elm_lang$html$Html$text('Read more');
var _user$project$Views_Text$signUp = _elm_lang$html$Html$text('Sign Up');
var _user$project$Views_Text$login = _elm_lang$html$Html$text('Login');
var _user$project$Views_Text$or = _elm_lang$html$Html$text('or');
var _user$project$Views_Text$previous = _elm_lang$html$Html$text('prev');
var _user$project$Views_Text$next = _elm_lang$html$Html$text('next');

var _user$project$Views_NavBar$appsIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('apps'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_NavBar$toTopicsPage = A2(
	_elm_lang$html$Html$a,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('button-collapse show-on-large'),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$href(
				_user$project$Routes$toPath(_user$project$Routes$TopicsRoute)),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _user$project$Views_NavBar$appsIcon,
		_1: {ctor: '[]'}
	});
var _user$project$Views_NavBar$toSignUpPage = function (brand) {
	return A2(
		_elm_lang$html$Html$a,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(
					_user$project$Routes$toPath(_user$project$Routes$SignUpRoute)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-color', _1: brand.primaryColour},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Views_Text$signUp,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_NavBar$toLoginPage = A2(
	_elm_lang$html$Html$a,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$href(
			_user$project$Routes$toPath(_user$project$Routes$LoginRoute)),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _user$project$Views_Text$login,
		_1: {ctor: '[]'}
	});
var _user$project$Views_NavBar$navBar = function (brand) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('navbar-fixed'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$nav,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('nav-wrapper valign-wrapper'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _user$project$Views_NavBar$toTopicsPage,
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$img,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$src(brand.logo),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('dg-logo'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(
													_user$project$Messages$UpdateRoute(_user$project$Routes$HomeRoute)),
												_1: {ctor: '[]'}
											}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$ul,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('dg-left'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$li,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _user$project$Views_NavBar$toLoginPage,
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$span,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$class('dg-text-grey'),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _user$project$Views_Text$or,
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _user$project$Views_NavBar$toSignUpPage(brand),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_NavBar$view = function (brand) {
	return {
		mobile: _user$project$Views_NavBar$navBar(brand),
		tablet: _user$project$Views_NavBar$navBar(brand)
	};
};

var _user$project$Views_Registration$validateUsername = function (name) {
	var _p0 = _user$project$Validator$username(name);
	_v0_3:
	do {
		if (_p0.ctor === 'Err') {
			switch (_p0._0.ctor) {
				case 'Empty':
					return 'Please enter.';
				case 'DoNotMatch':
					return 'Must contain only alphanumeric symbols.';
				case 'WrongSize':
					return 'Is too long.';
				default:
					break _v0_3;
			}
		} else {
			break _v0_3;
		}
	} while(false);
	return '-';
};
var _user$project$Views_Registration$validatePassword = function (pass) {
	var _p1 = _user$project$Validator$password(pass);
	_v1_3:
	do {
		if (_p1.ctor === 'Err') {
			switch (_p1._0.ctor) {
				case 'Empty':
					return 'Please enter.';
				case 'WrongSize':
					return 'Must have at least 6 characters.';
				case 'DoNotMatch':
					return 'Must have at least 1 digit.';
				default:
					break _v1_3;
			}
		} else {
			break _v1_3;
		}
	} while(false);
	return '-';
};
var _user$project$Views_Registration$validateEmail = function (e) {
	var _p2 = _user$project$Validator$email(e);
	_v2_2:
	do {
		if (_p2.ctor === 'Err') {
			switch (_p2._0.ctor) {
				case 'Empty':
					return 'Please enter.';
				case 'DoNotMatch':
					return 'Is not valid.';
				default:
					break _v2_2;
			}
		} else {
			break _v2_2;
		}
	} while(false);
	return '-';
};
var _user$project$Views_Registration$validateRepeat = F2(
	function (pass, repeat) {
		var _p3 = _user$project$Validator$isValid(
			_user$project$Validator$password(repeat));
		if (_p3 === true) {
			return (!_elm_lang$core$Native_Utils.eq(pass, repeat)) ? 'Do not match.' : '-';
		} else {
			return _user$project$Views_Registration$validatePassword(repeat);
		}
	});
var _user$project$Views_Registration$inputIcon = function (str) {
	return A2(
		_elm_lang$html$Html$i,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('material-icons prefix'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(str),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Registration$regHeader = function (text_) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('dg-center dg-nav-height card-title dg-reg-header'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$span,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(text_),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Registration$thirdParty = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('section'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('col s12 center-align'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('btn-floating btn-large red '),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('G'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('btn-floating btn-large blue'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'margin', _1: '0 20px'},
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('F'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('btn-floating btn-large cyan'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('T'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			}),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Registration$validClass = function (bool) {
	return _elm_lang$html$Html_Attributes$classList(
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'dg-valid', _1: bool},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'dg-not-valid', _1: !bool},
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Views_Registration$validStyle = F2(
	function (f, m) {
		var _p4 = m;
		if (_p4.ctor === 'Just') {
			return _user$project$Views_Registration$validClass(
				_user$project$Validator$isValid(
					f(m)));
		} else {
			return _elm_lang$html$Html_Attributes$classList(
				{ctor: '[]'});
		}
	});
var _user$project$Views_Registration$validRepeatStyle = F2(
	function (pass, repeat) {
		var _p5 = repeat;
		if (_p5.ctor === 'Just') {
			return _user$project$Views_Registration$validClass(
				_user$project$Validator$isValid(
					_user$project$Validator$password(repeat)) && _elm_lang$core$Native_Utils.eq(pass, repeat));
		} else {
			return _elm_lang$html$Html_Attributes$classList(
				{ctor: '[]'});
		}
	});
var _user$project$Views_Registration$validMsg = function (msg) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('dg-data-error'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'visibility',
							_1: (!_elm_lang$core$Native_Utils.eq(msg, '-')) ? 'visible' : 'hidden'
						},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(msg),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Registration$emailInput = function (maybe) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('input-field col s8'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Views_Registration$inputIcon('email'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('email'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$placeholder('Email'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$value(
									A2(_elm_lang$core$Maybe$withDefault, '', maybe)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$maxlength(30),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											function (x) {
												return _user$project$Messages$OnLoginForm(
													_user$project$Messages$Email(x));
											}),
										_1: {
											ctor: '::',
											_0: A2(_user$project$Views_Registration$validStyle, _user$project$Validator$email, maybe),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('dg-input'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _user$project$Views_Registration$validMsg(
						_user$project$Views_Registration$validateEmail(maybe)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Views_Registration$passwordInput = function (maybe) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('input-field'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Views_Registration$inputIcon('lock'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('password'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$placeholder('Password'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$value(
									A2(_elm_lang$core$Maybe$withDefault, '', maybe)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										function (x) {
											return _user$project$Messages$OnSignUpForm(
												_user$project$Messages$Password(x));
										}),
									_1: {
										ctor: '::',
										_0: A2(_user$project$Views_Registration$validStyle, _user$project$Validator$password, maybe),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('dg-input'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _user$project$Views_Registration$validMsg(
						_user$project$Views_Registration$validatePassword(maybe)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Views_Registration$usernameInput = function (maybe) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('input-field'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Views_Registration$inputIcon('person'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$type_('text'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$placeholder('Username'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$value(
									A2(_elm_lang$core$Maybe$withDefault, '', maybe)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$maxlength(30),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											function (x) {
												return _user$project$Messages$OnSignUpForm(
													_user$project$Messages$Username(x));
											}),
										_1: {
											ctor: '::',
											_0: A2(_user$project$Views_Registration$validStyle, _user$project$Validator$username, maybe),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('dg-input'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _user$project$Views_Registration$validMsg(
						_user$project$Views_Registration$validateUsername(maybe)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Views_Registration$repeatInput = F2(
	function (pass, repeat) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('input-field'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _user$project$Views_Registration$inputIcon('lock'),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('password'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$placeholder('Password Repeat'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$value(
										A2(_elm_lang$core$Maybe$withDefault, '', repeat)),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											function (x) {
												return _user$project$Messages$OnSignUpForm(
													_user$project$Messages$Repeat(x));
											}),
										_1: {
											ctor: '::',
											_0: A2(_user$project$Views_Registration$validRepeatStyle, pass, repeat),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('dg-input'),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _user$project$Views_Registration$validMsg(
							A2(_user$project$Views_Registration$validateRepeat, pass, repeat)),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Views_Registration$signUpPage = F2(
	function (form, response) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('dg-center dg-registration'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$form,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _user$project$Views_Registration$regHeader('Sign Up'),
						_1: {
							ctor: '::',
							_0: response,
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('card-content'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _user$project$Views_Registration$usernameInput(form.username),
										_1: {
											ctor: '::',
											_0: _user$project$Views_Registration$emailInput(form.email),
											_1: {
												ctor: '::',
												_0: _user$project$Views_Registration$passwordInput(form.password),
												_1: {
													ctor: '::',
													_0: A2(_user$project$Views_Registration$repeatInput, form.password, form.repeat),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$div,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$class('valign-wrapper'),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$a,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$class('btn dg-right '),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$classList(
																				{
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'disabled',
																						_1: !(_elm_lang$core$Native_Utils.eq(form.password, form.repeat) && _user$project$Validator$validSignUpInputs(form))
																					},
																					_1: {ctor: '[]'}
																				}),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$html$Html_Events$onClick(
																					_user$project$Messages$OnSignUpForm(
																						_user$project$Messages$Submit(
																							_user$project$Validator$validSignUpUser(form)))),
																				_1: {ctor: '[]'}
																			}
																		}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('Sign Up'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('card-action'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$a,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$href(
														_user$project$Routes$toPath(_user$project$Routes$LoginRoute)),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _user$project$Views_Text$alreadyHaveAccount,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Views_Registration$successResponse = function (signUp) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('dg-response-success'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$i,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('material-icons prefix '),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('done'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Account for ',
								A2(_elm_lang$core$Basics_ops['++'], signUp.email, ' has been created. Please '))),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$a,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$href(
										_user$project$Routes$toPath(_user$project$Routes$LoginRoute)),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('login'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text('.'),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Views_Registration$errorResponse = function (response) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('dg-response-error'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$i,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('material-icons prefix '),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('error_outline'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(response),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Views_Registration$loginPage = F2(
	function (form, response) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('dg-center dg-registration'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$form,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _user$project$Views_Registration$regHeader('Login'),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Maybe$withDefault,
								A2(
									_elm_lang$html$Html$div,
									{ctor: '[]'},
									{ctor: '[]'}),
								A2(_elm_lang$core$Maybe$map, _user$project$Views_Registration$errorResponse, response)),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('card-content login'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _user$project$Views_Registration$emailInput(form.email),
										_1: {
											ctor: '::',
											_0: _user$project$Views_Registration$passwordInput(form.password),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$div,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$class('valign-wrapper'),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$a,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$class('btn dg-right '),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$classList(
																		{
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'disabled',
																				_1: !_user$project$Validator$validLoginInputs(form)
																			},
																			_1: {ctor: '[]'}
																		}),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_user$project$Messages$OnLoginForm(
																				_user$project$Messages$Submit(
																					_user$project$Validator$validLoginUser(form)))),
																		_1: {ctor: '[]'}
																	}
																}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Login'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('card-action'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$a,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$href(
														_user$project$Routes$toPath(_user$project$Routes$SignUpRoute)),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _user$project$Views_Text$doNotHaveAccount,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Views_Registration$loginView = F2(
	function (form, response) {
		return {
			mobile: A2(_user$project$Views_Registration$loginPage, form, response),
			tablet: A2(_user$project$Views_Registration$loginPage, form, response)
		};
	});
var _user$project$Views_Registration$signUpSuccess = F2(
	function (form, signUp) {
		return {
			mobile: A2(
				_user$project$Views_Registration$signUpPage,
				form,
				_user$project$Views_Registration$successResponse(signUp)),
			tablet: A2(
				_user$project$Views_Registration$signUpPage,
				form,
				_user$project$Views_Registration$successResponse(signUp))
		};
	});
var _user$project$Views_Registration$signUpError = F2(
	function (form, msg) {
		return {
			mobile: A2(
				_user$project$Views_Registration$signUpPage,
				form,
				_user$project$Views_Registration$errorResponse(msg)),
			tablet: A2(
				_user$project$Views_Registration$signUpPage,
				form,
				_user$project$Views_Registration$errorResponse(msg))
		};
	});
var _user$project$Views_Registration$signUpView = function (form) {
	return {
		mobile: A2(
			_user$project$Views_Registration$signUpPage,
			form,
			A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{ctor: '[]'})),
		tablet: A2(
			_user$project$Views_Registration$signUpPage,
			form,
			A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{ctor: '[]'}))
	};
};

var _user$project$Views_Home$tablet = function (user) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(user.username),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(user.picture),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(user.email),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$p,
							{ctor: '[]'},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Views_Home$view = function (user) {
	return {
		mobile: _user$project$Views_Home$tablet(user),
		tablet: _user$project$Views_Home$tablet(user)
	};
};

var _user$project$Views_Question$previousIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons left'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('navigate_before'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Question$nextIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons right'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('navigate_next'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Question$upIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('menu'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Question$appsIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('apps'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Question$mapSlug = F2(
	function (view, maybeSlug) {
		var _p0 = maybeSlug;
		if (_p0.ctor === 'Just') {
			return view(_p0._0);
		} else {
			return A2(
				_elm_lang$html$Html$a,
				{ctor: '[]'},
				{ctor: '[]'});
		}
	});
var _user$project$Views_Question$navLink = F3(
	function (content, topic, question) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(
					_user$project$Routes$toPath(
						A2(_user$project$Routes$QuestionRoute, topic, question))),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('btn dg-topic-nav-btn dg-primary-colour'),
					_1: {ctor: '[]'}
				}
			},
			content);
	});
var _user$project$Views_Question$toPreviousQuestion = F2(
	function (topic, question) {
		return A2(
			_user$project$Views_Question$mapSlug,
			A2(
				_user$project$Views_Question$navLink,
				{
					ctor: '::',
					_0: _user$project$Views_Text$previous,
					_1: {
						ctor: '::',
						_0: _user$project$Views_Question$previousIcon,
						_1: {ctor: '[]'}
					}
				},
				topic.slug),
			question.previous);
	});
var _user$project$Views_Question$toNextQuestion = F2(
	function (topic, question) {
		return A2(
			_user$project$Views_Question$mapSlug,
			A2(
				_user$project$Views_Question$navLink,
				{
					ctor: '::',
					_0: _user$project$Views_Text$next,
					_1: {
						ctor: '::',
						_0: _user$project$Views_Question$nextIcon,
						_1: {ctor: '[]'}
					}
				},
				topic.slug),
			question.next);
	});
var _user$project$Views_Question$toQuestionsPage = function (topic) {
	return A2(
		_elm_lang$html$Html$a,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('btn dg-primary-colour dg-topic-nav-btn'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(
					_user$project$Routes$toPath(
						_user$project$Routes$TopicRoute(topic.slug))),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _user$project$Views_Question$upIcon,
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Question$toTopicsPage = A2(
	_elm_lang$html$Html$a,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('btn dg-primary-colour dg-topic-nav-btn'),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$href(
				_user$project$Routes$toPath(_user$project$Routes$TopicsRoute)),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _user$project$Views_Question$appsIcon,
		_1: {ctor: '[]'}
	});
var _user$project$Views_Question$questionNavigation = F2(
	function (topic, question) {
		return A2(
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('section dg-center'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-color', _1: topic.colour},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(_user$project$Views_Question$toPreviousQuestion, topic, question),
				_1: {
					ctor: '::',
					_0: _user$project$Views_Question$toTopicsPage,
					_1: {
						ctor: '::',
						_0: _user$project$Views_Question$toQuestionsPage(topic),
						_1: {
							ctor: '::',
							_0: A2(_user$project$Views_Question$toNextQuestion, topic, question),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _user$project$Views_Question$questionHeader = F2(
	function (topic, question) {
		return A2(
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('section'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'background-color', _1: topic.colour},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('container'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h1,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('dg-text-white center-align'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$img,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('dg-topic-img'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$src(topic.icon),
											_1: {ctor: '[]'}
										}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										A2(_elm_lang$core$Basics_ops['++'], question.title, '?')),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Views_Question$questionsPage = F3(
	function (answer, topic, question) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('dg-question'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$Views_Question$questionHeader, topic, question),
				_1: {
					ctor: '::',
					_0: answer,
					_1: {
						ctor: '::',
						_0: A2(_user$project$Views_Question$questionNavigation, topic, question),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Views_Question$tablet = F2(
	function (topic, question) {
		return A3(
			_user$project$Views_Question$questionsPage,
			A2(
				_elm_lang$html$Html$section,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('section'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background-color', _1: topic.colour},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('container'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_evancz$elm_markdown$Markdown$toHtml,
								{ctor: '[]'},
								question.answer),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			topic,
			question);
	});
var _user$project$Views_Question$mobile = F2(
	function (topic, question) {
		return A3(
			_user$project$Views_Question$questionsPage,
			A2(
				_elm_lang$html$Html$section,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('section'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('container'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_evancz$elm_markdown$Markdown$toHtml,
								{ctor: '[]'},
								question.answer),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}),
			topic,
			question);
	});
var _user$project$Views_Question$view = F2(
	function (topic, question) {
		return {
			mobile: A2(_user$project$Views_Question$mobile, topic, question),
			tablet: A2(_user$project$Views_Question$tablet, topic, question)
		};
	});

var _user$project$Views_Topics$listCard = function (topic) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('col m6 xl4'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('card medium hoverable'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('card-image'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'background-color', _1: topic.colour},
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onClick(
										_user$project$Messages$UpdateRoute(
											_user$project$Routes$TopicRoute(topic.slug))),
									_1: {ctor: '[]'}
								}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$img,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$src(topic.icon),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('dg-topic-img'),
										_1: {ctor: '[]'}
									}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('card-content'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onClick(
										_user$project$Messages$UpdateRoute(
											_user$project$Routes$TopicRoute(topic.slug))),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('card-title'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(topic.title),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$p,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('text-black'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(topic.description),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('card-action'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$href(
												_user$project$Routes$toPath(
													_user$project$Routes$TopicRoute(topic.slug))),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _user$project$Views_Text$readMore,
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Topics$tablet = function (topics) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('row'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _user$project$Views_Topics$listCard, topics));
};
var _user$project$Views_Topics$listItem = function (topic) {
	return A2(
		_elm_lang$html$Html$a,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$href(
				_user$project$Routes$toPath(
					_user$project$Routes$TopicRoute(topic.slug))),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('collection-item avatar'),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$img,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$src(topic.icon),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('circle'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'background-color', _1: topic.colour},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('title dg-text-black'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(topic.title),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('dg-text-black'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(topic.description),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Views_Topics$mobile = function (topics) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('dg-no-margins collection'),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _user$project$Views_Topics$listItem, topics));
};
var _user$project$Views_Topics$view = function (topics) {
	return {
		mobile: _user$project$Views_Topics$mobile(topics),
		tablet: _user$project$Views_Topics$tablet(topics)
	};
};

var _user$project$Views_Topic$previousIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons left'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('navigate_before'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Topic$nextIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons right'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('navigate_next'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Topic$mapSlug = F2(
	function (view, maybeSlug) {
		var _p0 = maybeSlug;
		if (_p0.ctor === 'Just') {
			return view(_p0._0);
		} else {
			return A2(
				_elm_lang$html$Html$a,
				{ctor: '[]'},
				{ctor: '[]'});
		}
	});
var _user$project$Views_Topic$navLink = F2(
	function (content, slug) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$href(
					_user$project$Routes$toPath(
						_user$project$Routes$TopicRoute(slug))),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('btn dg-topic-nav-btn dg-primary-colour'),
					_1: {ctor: '[]'}
				}
			},
			content);
	});
var _user$project$Views_Topic$toPreviousTopic = function (topic) {
	return A2(
		_user$project$Views_Topic$mapSlug,
		_user$project$Views_Topic$navLink(
			{
				ctor: '::',
				_0: _user$project$Views_Text$previous,
				_1: {
					ctor: '::',
					_0: _user$project$Views_Topic$previousIcon,
					_1: {ctor: '[]'}
				}
			}),
		topic.previous);
};
var _user$project$Views_Topic$toNextTopic = function (topic) {
	return A2(
		_user$project$Views_Topic$mapSlug,
		_user$project$Views_Topic$navLink(
			{
				ctor: '::',
				_0: _user$project$Views_Text$next,
				_1: {
					ctor: '::',
					_0: _user$project$Views_Topic$nextIcon,
					_1: {ctor: '[]'}
				}
			}),
		topic.next);
};
var _user$project$Views_Topic$appsIcon = A2(
	_elm_lang$html$Html$i,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('material-icons'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('apps'),
		_1: {ctor: '[]'}
	});
var _user$project$Views_Topic$toTopicsPage = A2(
	_elm_lang$html$Html$a,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('btn dg-primary-colour dg-topic-nav-btn'),
		_1: {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$href(
				_user$project$Routes$toPath(_user$project$Routes$TopicsRoute)),
			_1: {ctor: '[]'}
		}
	},
	{
		ctor: '::',
		_0: _user$project$Views_Topic$appsIcon,
		_1: {ctor: '[]'}
	});
var _user$project$Views_Topic$questionListCard = F2(
	function (topic, question) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('col m6 xl4'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('card small hoverable dg-center'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								_user$project$Messages$UpdateRoute(
									A2(_user$project$Routes$QuestionRoute, topic.slug, question.slug))),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('card-content'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('card-title center-align'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(_elm_lang$core$Basics_ops['++'], question.title, '?')),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Views_Topic$listItem = F2(
	function (topic, question) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('collection-item'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$href(
						_user$project$Routes$toPath(
							A2(_user$project$Routes$QuestionRoute, topic.slug, question.slug))),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('dg-text-black'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_elm_lang$core$Basics_ops['++'], question.title, '?')),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Views_Topic$topicNavigation = function (topic) {
	return A2(
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('section container dg-center'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _user$project$Views_Topic$toPreviousTopic(topic),
			_1: {
				ctor: '::',
				_0: _user$project$Views_Topic$toTopicsPage,
				_1: {
					ctor: '::',
					_0: _user$project$Views_Topic$toNextTopic(topic),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Views_Topic$topicHeader = function (topic) {
	return A2(
		_elm_lang$html$Html$section,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('section'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'background-color', _1: topic.colour},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h1,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('dg-text-white center-align'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$img,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('dg-topic-img'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$src(topic.icon),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(topic.title),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views_Topic$topicPage = F2(
	function (questions, topic) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _user$project$Views_Topic$topicHeader(topic),
				_1: {
					ctor: '::',
					_0: questions,
					_1: {
						ctor: '::',
						_0: _user$project$Views_Topic$topicNavigation(topic),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Views_Topic$tablet = function (topic) {
	return A2(
		_user$project$Views_Topic$topicPage,
		A2(
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('section container'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('row dg-no-margins'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						_user$project$Views_Topic$questionListCard(topic),
						topic.questions)),
				_1: {ctor: '[]'}
			}),
		topic);
};
var _user$project$Views_Topic$mobile = function (topic) {
	return A2(
		_user$project$Views_Topic$topicPage,
		A2(
			_elm_lang$html$Html$section,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('dg-no-margins collection'),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$map,
				_user$project$Views_Topic$listItem(topic),
				topic.questions)),
		topic);
};
var _user$project$Views_Topic$view = function (topic) {
	return {
		mobile: _user$project$Views_Topic$mobile(topic),
		tablet: _user$project$Views_Topic$tablet(topic)
	};
};

var _user$project$Views_Pages$findQuestion = F2(
	function (id, topic) {
		return function (_p0) {
			return _elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (question) {
						return _elm_lang$core$Native_Utils.eq(question.slug, id);
					},
					_p0));
		}(topic.questions);
	});
var _user$project$Views_Pages$findTopic = function (id) {
	return function (_p1) {
		return _elm_lang$core$List$head(
			A2(
				_elm_lang$core$List$filter,
				function (topic) {
					return _elm_lang$core$Native_Utils.eq(topic.slug, id);
				},
				_p1));
	};
};
var _user$project$Views_Pages$error = function (error) {
	var _p2 = error;
	switch (_p2.ctor) {
		case 'BadStatus':
			return _user$project$Views_ErrorPage$userError(_p2._0);
		case 'BadPayload':
			return _user$project$Views_ErrorPage$userError(_p2._1);
		default:
			return _user$project$Views_ErrorPage$networkError;
	}
};
var _user$project$Views_Pages$signUp = function (model) {
	var _p3 = model.signUp;
	switch (_p3.ctor) {
		case 'NotAsked':
			return _user$project$Views_Layout$onlyMain(
				_user$project$Views_Registration$signUpView(model.userForm));
		case 'Loading':
			return _user$project$Views_Layout$withLoader(
				_user$project$Views_Layout$onlyMain(
					_user$project$Views_Registration$signUpView(model.userForm)));
		case 'Success':
			return _user$project$Views_Layout$onlyMain(
				A2(_user$project$Views_Registration$signUpSuccess, model.userForm, _p3._0));
		default:
			var _p7 = _p3._0;
			var _p4 = _p7;
			if (_p4.ctor === 'BadStatus') {
				var _p5 = A2(_elm_lang$core$Json_Decode$decodeString, _user$project$Decoders$decodeError, _p4._0.body);
				if (_p5.ctor === 'Ok') {
					var _p6 = _p5._0.code;
					switch (_p6.ctor) {
						case 'UsernameTaken':
							return _user$project$Views_Layout$onlyMain(
								A2(_user$project$Views_Registration$signUpError, model.userForm, 'Username is taken.'));
						case 'EmailTaken':
							return _user$project$Views_Layout$onlyMain(
								A2(_user$project$Views_Registration$signUpError, model.userForm, 'Email is taken.'));
						default:
							return _user$project$Views_Pages$error(_p7);
					}
				} else {
					return _user$project$Views_Pages$error(_p7);
				}
			} else {
				return _user$project$Views_Pages$error(_p7);
			}
	}
};
var _user$project$Views_Pages$loading = {mobile: _user$project$Views_Layout$loading, tablet: _user$project$Views_Layout$loading};
var _user$project$Views_Pages$notFound = _user$project$Views_ErrorPage$notFound;
var _user$project$Views_Pages$emptyPage = {
	mobile: A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'}),
	tablet: A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{ctor: '[]'})
};
var _user$project$Views_Pages$login = function (model) {
	var _p8 = model.token;
	switch (_p8.ctor) {
		case 'NotAsked':
			return _user$project$Views_Layout$onlyMain(
				A2(_user$project$Views_Registration$loginView, model.userForm, _elm_lang$core$Maybe$Nothing));
		case 'Loading':
			return _user$project$Views_Layout$withLoader(
				A2(_user$project$Views_Registration$loginView, model.userForm, _elm_lang$core$Maybe$Nothing));
		case 'Success':
			return _user$project$Views_Pages$emptyPage;
		default:
			var _p10 = _p8._0;
			var _p9 = _p10;
			if (_p9.ctor === 'BadStatus') {
				return _elm_lang$core$Native_Utils.eq(_p9._0.status.code, 403) ? _user$project$Views_Layout$onlyMain(
					A2(
						_user$project$Views_Registration$loginView,
						model.userForm,
						_elm_lang$core$Maybe$Just('Wrong email or password.'))) : _user$project$Views_Pages$error(_p10);
			} else {
				return _user$project$Views_Pages$error(_p10);
			}
	}
};
var _user$project$Views_Pages$map = F2(
	function (view, response) {
		var _p11 = response;
		switch (_p11.ctor) {
			case 'NotAsked':
				return _user$project$Views_Pages$emptyPage;
			case 'Loading':
				return _user$project$Views_Pages$loading;
			case 'Success':
				return view(_p11._0);
			default:
				return _user$project$Views_Pages$error(_p11._0);
		}
	});
var _user$project$Views_Pages$landing = function (model) {
	var view = function (brand) {
		return A2(
			_user$project$Views_Layout$headerMain,
			_user$project$Views_NavBar$view(brand),
			_user$project$Views_Pages$emptyPage);
	};
	return A2(_user$project$Views_Pages$map, view, model.brand);
};
var _user$project$Views_Pages$topics = function (model) {
	var view = function (_p12) {
		var _p13 = _p12;
		return A2(
			_user$project$Views_Layout$headerMain,
			_user$project$Views_NavBar$view(_p13._0),
			_user$project$Views_Topics$view(_p13._1));
	};
	return A2(
		_user$project$Views_Pages$map,
		view,
		A2(_krisajenkins$remotedata$RemoteData$append, model.brand, model.topics));
};
var _user$project$Views_Pages$topic = F2(
	function (model, id) {
		var view = function (_p14) {
			var _p15 = _p14;
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Views_Pages$notFound,
				A2(
					_elm_lang$core$Maybe$map,
					function (topic) {
						return A2(
							_user$project$Views_Layout$noContainer,
							_user$project$Views_NavBar$view(_p15._0),
							_user$project$Views_Topic$view(topic));
					},
					A2(_user$project$Views_Pages$findTopic, id, _p15._1)));
		};
		return A2(
			_user$project$Views_Pages$map,
			view,
			A2(_krisajenkins$remotedata$RemoteData$append, model.brand, model.topics));
	});
var _user$project$Views_Pages$question = F3(
	function (model, topicId, questionId) {
		var view = function (_p16) {
			var _p17 = _p16;
			var _p18 = _p17._1;
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Views_Pages$notFound,
				A3(
					_elm_lang$core$Maybe$map2,
					F2(
						function (top, ques) {
							return A2(
								_user$project$Views_Layout$noContainer,
								_user$project$Views_NavBar$view(_p17._0),
								A2(_user$project$Views_Question$view, top, ques));
						}),
					A2(_user$project$Views_Pages$findTopic, topicId, _p18),
					A2(
						_elm_lang$core$Maybe$andThen,
						_user$project$Views_Pages$findQuestion(questionId),
						A2(_user$project$Views_Pages$findTopic, topicId, _p18))));
		};
		return A2(
			_user$project$Views_Pages$map,
			view,
			A2(_krisajenkins$remotedata$RemoteData$append, model.brand, model.topics));
	});
var _user$project$Views_Pages$userHome = function (model) {
	var view = function (user) {
		return _user$project$Views_Layout$onlyMain(
			_user$project$Views_Home$view(user));
	};
	return A2(_user$project$Views_Pages$map, view, model.user);
};

var _user$project$Main$onWindowChange = F2(
	function (model, size) {
		return (_elm_lang$core$Native_Utils.cmp(size.width, 600) < 1) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{responsive: _user$project$Model$Mobile}),
			_1: _elm_lang$core$Platform_Cmd$none
		} : {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{responsive: _user$project$Model$Tablet}),
			_1: _elm_lang$core$Platform_Cmd$none
		};
	});
var _user$project$Main$onSignUpForm = F3(
	function (msg, oldForm, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'Username':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							userForm: _elm_lang$core$Native_Utils.update(
								oldForm,
								{
									username: _elm_lang$core$Maybe$Just(_p0._0)
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Email':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							userForm: _elm_lang$core$Native_Utils.update(
								oldForm,
								{
									email: _elm_lang$core$Maybe$Just(_p0._0)
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Password':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							userForm: _elm_lang$core$Native_Utils.update(
								oldForm,
								{
									password: _elm_lang$core$Maybe$Just(_p0._0)
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Repeat':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							userForm: _elm_lang$core$Native_Utils.update(
								oldForm,
								{
									repeat: _elm_lang$core$Maybe$Just(_p0._0)
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{user: _krisajenkins$remotedata$RemoteData$Loading, userForm: _user$project$Model$initialUserForm}),
					_1: A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Platform_Cmd$none,
						A2(_elm_lang$core$Maybe$map, _user$project$Api$signUp, _p0._0))
				};
		}
	});
var _user$project$Main$onLoginForm = F3(
	function (msg, oldForm, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'Email':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							userForm: _elm_lang$core$Native_Utils.update(
								oldForm,
								{
									email: _elm_lang$core$Maybe$Just(_p1._0)
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Password':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							userForm: _elm_lang$core$Native_Utils.update(
								oldForm,
								{
									password: _elm_lang$core$Maybe$Just(_p1._0)
								})
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Submit':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{token: _krisajenkins$remotedata$RemoteData$Loading, userForm: _user$project$Model$initialUserForm}),
					_1: A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Platform_Cmd$none,
						A2(_elm_lang$core$Maybe$map, _user$project$Api$login, _p1._0))
				};
			default:
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p2 = msg;
		switch (_p2.ctor) {
			case 'OnFetchTopics':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{topics: _p2._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'OnFetchBrand':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{brand: _p2._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'OnLocationChange':
				var route = _user$project$Routes$parseLocation(_p2._0);
				return ((_elm_lang$core$Native_Utils.eq(route, _user$project$Routes$SignUpRoute) || _elm_lang$core$Native_Utils.eq(route, _user$project$Routes$LoginRoute)) && _krisajenkins$remotedata$RemoteData$isSuccess(model.token)) ? {
					ctor: '_Tuple2',
					_0: model,
					_1: _elm_lang$navigation$Navigation$newUrl(
						_user$project$Routes$toPath(_user$project$Routes$UserHomeRoute))
				} : {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{route: route}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'OnUserSignUp':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{signUp: _p2._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'OnUserLogin':
				var _p3 = _p2._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{token: _p3}),
					_1: _elm_lang$core$Platform_Cmd$batch(
						{
							ctor: '::',
							_0: A2(
								_krisajenkins$remotedata$RemoteData$withDefault,
								_elm_lang$core$Platform_Cmd$none,
								A2(_krisajenkins$remotedata$RemoteData$map, _user$project$Api$fetchUserInfo, _p3)),
							_1: {
								ctor: '::',
								_0: _user$project$Persistence$put(
									_krisajenkins$remotedata$RemoteData$toMaybe(_p3)),
								_1: {ctor: '[]'}
							}
						})
				};
			case 'OnFetchUserInfo':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{user: _p2._0}),
					_1: _elm_lang$navigation$Navigation$newUrl(
						_user$project$Routes$toPath(_user$project$Routes$UserHomeRoute))
				};
			case 'OnWindowChange':
				return A2(_user$project$Main$onWindowChange, model, _p2._0);
			case 'UpdateRoute':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _elm_lang$navigation$Navigation$newUrl(
						_user$project$Routes$toPath(_p2._0))
				};
			case 'OnSignUpForm':
				return A3(_user$project$Main$onSignUpForm, _p2._0, model.userForm, model);
			default:
				return A3(_user$project$Main$onLoginForm, _p2._0, model.userForm, model);
		}
	});
var _user$project$Main$page = function (model) {
	var _p4 = model.route;
	switch (_p4.ctor) {
		case 'HomeRoute':
			return _user$project$Views_Pages$landing(model);
		case 'TopicsRoute':
			return _user$project$Views_Pages$topics(model);
		case 'TopicRoute':
			return A2(_user$project$Views_Pages$topic, model, _p4._0);
		case 'QuestionRoute':
			return A3(_user$project$Views_Pages$question, model, _p4._0, _p4._1);
		case 'SignUpRoute':
			return _user$project$Views_Pages$signUp(model);
		case 'LoginRoute':
			return _user$project$Views_Pages$login(model);
		case 'UserHomeRoute':
			return _user$project$Views_Pages$userHome(model);
		default:
			return _user$project$Views_Pages$notFound;
	}
};
var _user$project$Main$view = function (model) {
	var _p5 = model.responsive;
	if (_p5.ctor === 'Mobile') {
		return _user$project$Main$page(model).mobile;
	} else {
		return _user$project$Main$page(model).tablet;
	}
};
var _user$project$Main$init = F2(
	function (token, location) {
		var model = _elm_lang$core$Native_Utils.update(
			_user$project$Model$initialModel,
			{
				route: _user$project$Routes$parseLocation(location),
				token: A2(
					_elm_lang$core$Maybe$withDefault,
					_krisajenkins$remotedata$RemoteData$NotAsked,
					A2(_elm_lang$core$Maybe$map, _krisajenkins$remotedata$RemoteData$succeed, token))
			});
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: _user$project$Api$fetchBrand,
					_1: {
						ctor: '::',
						_0: _user$project$Api$fetchAllTopics,
						_1: {
							ctor: '::',
							_0: A2(
								_krisajenkins$remotedata$RemoteData$withDefault,
								_elm_lang$core$Platform_Cmd$none,
								A2(_krisajenkins$remotedata$RemoteData$map, _user$project$Api$fetchUserInfo, model.token)),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$Task$perform, _user$project$Messages$OnWindowChange, _elm_lang$window$Window$size),
								_1: {
									ctor: '::',
									_0: _elm_lang$navigation$Navigation$newUrl(
										_user$project$Routes$toPath(model.route)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				})
		};
	});
var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _elm_lang$window$Window$resizes(
				function (size) {
					return _user$project$Messages$OnWindowChange(size);
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Main$main = A2(
	_elm_lang$navigation$Navigation$programWithFlags,
	_user$project$Messages$OnLocationChange,
	{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, subscriptions: _user$project$Main$subscriptions})(
	_elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					A2(
						_elm_lang$core$Json_Decode$andThen,
						function (accessToken) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (expiresIn) {
									return A2(
										_elm_lang$core$Json_Decode$andThen,
										function (idToken) {
											return A2(
												_elm_lang$core$Json_Decode$andThen,
												function (tokenType) {
													return _elm_lang$core$Json_Decode$succeed(
														{accessToken: accessToken, expiresIn: expiresIn, idToken: idToken, tokenType: tokenType});
												},
												A2(_elm_lang$core$Json_Decode$field, 'tokenType', _elm_lang$core$Json_Decode$string));
										},
										A2(_elm_lang$core$Json_Decode$field, 'idToken', _elm_lang$core$Json_Decode$string));
								},
								A2(_elm_lang$core$Json_Decode$field, 'expiresIn', _elm_lang$core$Json_Decode$int));
						},
						A2(_elm_lang$core$Json_Decode$field, 'accessToken', _elm_lang$core$Json_Decode$string))),
				_1: {ctor: '[]'}
			}
		}));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);



/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
>>>>>>> a7570ca2dabb7237ca3e12ed22c662d6275af161
//# sourceMappingURL=main.js.map