(self.webpackChunk=self.webpackChunk||[]).push([[796],{3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);n&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},1667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},6834:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=o(r(2067)),i=n(r(5558)),s=n(r(8728)),l=o(r(2392)),u=o(r(1628)),c=n(r(3982));function f(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},2067:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=f;var o=r(2392),a=n(r(8728)),i=r(2638),s=r(881),l=n(r(8037)),u=r(6293);t.VERSION="4.7.8";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var c="[object Object]";function f(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}f.prototype={constructor:f,logger:l.default,log:l.default.log,registerHelper:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===c)o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var d=l.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=l.default},881:(e,t,r)=>{"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var n,o=r(5670),a=(n=o)&&n.__esModule?n:{default:n}},5670:(e,t,r)=>{"use strict";t.__esModule=!0;var n=r(2392);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var s=e(o,a);return r.partials=i,s}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},8728:(e,t)=>{"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function n(e,t){var o=t&&t.loc,a=void 0,i=void 0,s=void 0,l=void 0;o&&(a=o.start.line,i=o.end.line,s=o.start.column,l=o.end.column,e+=" - "+a+":"+s);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,n);try{o&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=s,this.endColumn=l))}catch(e){}}n.prototype=new Error,t.default=n,e.exports=t.default},2638:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),s.default(e),l.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(7342)),a=n(r(6822)),i=n(r(4905)),s=n(r(7405)),l=n(r(5702)),u=n(r(7593)),c=n(r(3978))},7342:(e,t,r)=>{"use strict";t.__esModule=!0;var n=r(2392);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)}))},e.exports=t.default},6822:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(2392),a=r(8728),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var r,n=t.fn,a=t.inverse,s=0,l="",u=void 0,c=void 0;function f(t,r,a){u&&(u.key=t,u.index=r,u.first=0===r,u.last=!!a,c&&(u.contextPath=c+t)),l+=n(e[t],{data:u,blockParams:o.blockParams([e[t],t],[c+t,null])})}if(t.data&&t.ids&&(c=o.appendContextPath(t.data.contextPath,t.ids[0])+"."),o.isFunction(e)&&(e=e.call(this)),t.data&&(u=o.createFrame(t.data)),e&&"object"==typeof e)if(o.isArray(e))for(var d=e.length;s<d;s++)s in e&&f(s,s,s===e.length-1);else if("function"==typeof Symbol&&e[Symbol.iterator]){for(var p=[],h=e[Symbol.iterator](),v=h.next();!v.done;v=h.next())p.push(v.value);for(d=(e=p).length;s<d;s++)f(s,s,s===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&f(r,s-1),r=e,s++})),void 0!==r&&f(r,s-1,!0);return 0===s&&(l=a(this)),l}))},e.exports=t.default},4905:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(8728),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},7405:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(2392),a=r(8728),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},5702:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},7593:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},3978:(e,t,r)=>{"use strict";t.__esModule=!0;var n,o=r(2392),a=r(8728),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},8572:(e,t,r)=>{"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(t))};var n=r(2392)},6293:(e,t,r)=>{"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:o.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:o.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return l("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(s).forEach((function(e){delete s[e]}))};var n,o=r(8572),a=r(8037),i=(n=a)&&n.__esModule?n:{default:n},s=Object.create(null);function l(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==s[e]&&(s[e]=!0,i.default.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},5005:(e,t)=>{"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},8037:(e,t,r)=>{"use strict";t.__esModule=!0;var n=r(2392),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},3982:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){"object"!=typeof globalThis&&(Object.prototype.__defineGetter__("__magic__",(function(){return this})),__magic__.globalThis=__magic__,delete Object.prototype.__magic__);var t=globalThis.Handlebars;e.noConflict=function(){return globalThis.Handlebars===e&&(globalThis.Handlebars=t),e}},e.exports=t.default},1628:(e,t,r)=>{"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)return;if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var n={strict:function(e,t,r){if(!e||!(t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:r});return n.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(r,n.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,o=0;o<r;o++){if(null!=(e[o]&&n.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(r,n,a){a.hash&&(n=o.extend({},n,a.hash),a.ids&&(a.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,a);var s=o.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,r,n,s);if(null==l&&t.compile&&(a.partials[a.name]=t.compile(r,e.compilerOptions,t),l=a.partials[a.name](n,s)),null!=l){if(a.indent){for(var u=l.split("\n"),c=0,f=u.length;c<f&&(u[c]||c+1!==f);c++)u[c]=a.indent+u[c];l=u.join("\n")}return l}throw new i.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=f(this,e,i,t,r,n,o):a||(a=this.programs[e]=f(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=o.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;a._setup(r),!r.partial&&e.useData&&(o=function(e,t){t&&"root"in t||((t=t?s.createFrame(t):{}).root=e);return t}(t,o));var i=void 0,l=e.useBlockParams?[]:void 0;function u(t){return""+e.main(n,t,n.helpers,n.partials,o,l,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(u=p(e.main,u,n,r.depths||[],o,l))(t,r)}return a.isTop=!0,a._setup=function(a){if(a.partial)n.protoAccessControl=a.protoAccessControl,n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators,n.hooks=a.hooks;else{var i=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return u.wrapHelper(e,(function(e){return o.extend({lookupProperty:r},e)}))}(n,t)}))}(i,n),n.helpers=i,e.usePartial&&(n.partials=n.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=o.extend({},t.decorators,a.decorators)),n.hooks={},n.protoAccessControl=c.createProtoAccessControl(a);var s=a.allowCallsToHelperMissing||r;l.moveHelperToHooks(n,"helperMissing",s),l.moveHelperToHooks(n,"blockHelperMissing",s)}},a._child=function(t,r,o,a){if(e.useBlockParams&&!o)throw new i.default("must pass block params");if(e.useDepths&&!a)throw new i.default("must pass parent depths");return f(n,t,e[t],r,0,o,a)},a},t.wrapProgram=f,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==d&&function(){r.data=s.createFrame(r.data);var e=r.fn;a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=o.extend({},r.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=d;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(2392)),a=r(8728),i=(n=a)&&n.__esModule?n:{default:n},s=r(2067),l=r(2638),u=r(5005),c=r(6293);function f(e,t,r,n,o,a,i){function s(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(s=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),s)}return(s=p(r,s,e,i,n,a)).program=t,s.depth=i?i.length:0,s.blockParams=o||0,s}function d(){return""}function p(e,t,r,n,a,i){if(e.decorator){var s={};t=e.decorator(t,s,r,n&&n[0],a,i,n),o.extend(t,s)}return t}},5558:(e,t)=>{"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},2392:(e,t)=>{"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(n,a)},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var s=Object.prototype.toString;t.toString=s;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=l;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=u},202:(e,t,r)=>{e.exports=r(6834).default},3379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],u=n.base?l[0]+n.base:l[0],c=a[u]||0,f="".concat(u," ").concat(c);a[u]=c+1;var d=r(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,n);n.byIndex=s,t.splice(s,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(e,t){var r=t.domAPI(t);r.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);t[s].references--}for(var l=n(e,o),u=0;u<a.length;u++){var c=r(a[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);