parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Cza8":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof e&&e.amd?e(n):(t=t||self).autocomplete=n()}(this,function(){"use strict";return function(e){var t,n,o=document,i=o.createElement("div"),r=i.style,f=navigator.userAgent,l=-1!==f.indexOf("Firefox")&&-1!==f.indexOf("Mobile"),u=e.debounceWaitMs||0,a=e.preventSubmit||!1,s=l?"input":"keyup",d=[],c="",p=2,v=e.showOnFocus,m=0;if(void 0!==e.minLength&&(p=e.minLength),!e.input)throw new Error("input undefined");var g=e.input;function h(){n&&window.clearTimeout(n)}function E(){return!!i.parentNode}function w(){var e;m++,d=[],c="",t=void 0,(e=i.parentNode)&&e.removeChild(i)}function L(){for(;i.firstChild;)i.removeChild(i.firstChild);var n=function(e,t){var n=o.createElement("div");return n.textContent=e.label||"",n};e.render&&(n=e.render);var f=function(e,t){var n=o.createElement("div");return n.textContent=e,n};e.renderGroup&&(f=e.renderGroup);var l=o.createDocumentFragment(),u="#9?$";if(d.forEach(function(o){if(o.group&&o.group!==u){u=o.group;var i=f(o.group,c);i&&(i.className+=" group",l.appendChild(i))}var r=n(o,c);r&&(r.addEventListener("click",function(t){e.onSelect(o,g),w(),t.preventDefault(),t.stopPropagation()}),o===t&&(r.className+=" selected"),l.appendChild(r))}),i.appendChild(l),d.length<1){if(!e.emptyMsg)return void w();var a=o.createElement("div");a.className="empty",a.textContent=e.emptyMsg,i.appendChild(a)}i.parentNode||o.body.appendChild(i),function(){if(E()){r.height="auto",r.width=g.offsetWidth+"px";var t,n=0;f(),f(),e.customize&&t&&e.customize(g,t,i,n)}function f(){var e=o.documentElement,i=e.clientTop||o.body.clientTop||0,f=e.clientLeft||o.body.clientLeft||0,l=window.pageYOffset||e.scrollTop,u=window.pageXOffset||e.scrollLeft,a=(t=g.getBoundingClientRect()).top+g.offsetHeight+l-i,s=t.left+u-f;r.top=a+"px",r.left=s+"px",(n=window.innerHeight-(t.top+g.offsetHeight))<0&&(n=0),r.top=a+"px",r.bottom="",r.left=s+"px",r.maxHeight=n+"px"}}(),function(){var e=i.getElementsByClassName("selected");if(e.length>0){var t=e[0],n=t.previousElementSibling;if(n&&-1!==n.className.indexOf("group")&&!n.previousElementSibling&&(t=n),t.offsetTop<i.scrollTop)i.scrollTop=t.offsetTop;else{var o=t.offsetTop+t.offsetHeight,r=i.scrollTop+i.offsetHeight;o>r&&(i.scrollTop+=o-r)}}}()}function y(){E()&&L()}function b(){y()}function x(e){e.target!==i?y():e.preventDefault()}function C(e){for(var t=e.which||e.keyCode||0,n=0,o=[38,13,27,39,37,16,17,18,20,91,9];n<o.length;n++)if(t===o[n])return;t>=112&&t<=123||40===t&&E()||k(0)}function T(n){var o=n.which||n.keyCode||0;if(38===o||40===o||27===o){var i=E();if(27===o)w();else{if(!E||d.length<1)return;38===o?function(){if(d.length<1)t=void 0;else if(t===d[0])t=d[d.length-1];else for(var e=d.length-1;e>0;e--)if(t===d[e]||1===e){t=d[e-1];break}}():function(){if(d.length<1&&(t=void 0),t&&t!==d[d.length-1]){for(var e=0;e<d.length-1;e++)if(t===d[e]){t=d[e+1];break}}else t=d[0]}(),L()}return n.preventDefault(),void(i&&n.stopPropagation())}13===o&&(t&&(e.onSelect(t,g),w()),a&&n.preventDefault())}function N(){v&&k(1)}function k(o){var i=++m,r=g.value;r.length>=p||1===o?(h(),n=window.setTimeout(function(){e.fetch(r,function(e){m===i&&e&&(c=r,t=(d=e).length>0?d[0]:void 0,L())},0)},0===o?u:0)):w()}function D(){setTimeout(function(){o.activeElement!==g&&w()},200)}return i.className="autocomplete "+(e.className||""),r.position="absolute",i.addEventListener("mousedown",function(e){e.stopPropagation(),e.preventDefault()}),i.addEventListener("focus",function(){return g.focus()}),g.addEventListener("keydown",T),g.addEventListener(s,C),g.addEventListener("blur",D),g.addEventListener("focus",N),window.addEventListener("resize",b),o.addEventListener("scroll",x,!0),{destroy:function(){g.removeEventListener("focus",N),g.removeEventListener("keydown",T),g.removeEventListener(s,C),g.removeEventListener("blur",D),window.removeEventListener("resize",b),o.removeEventListener("scroll",x,!0),h(),w()}}}});
},{}],"mArL":[function(require,module,exports) {

},{}],"GQ5M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("autocompleter"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}require("./omnibox.sass");var s=function(){function t(e){var n=this;o(this,t),console.log({props:e});var i=e.tableId,s=e.blockNodeId,l=e.closeNodeId,r=e.inputId;this.tableId=i,this.linkList=[],this.closeNodeId=l,this.blockNodeId=s,this.inputId=r,this._injectOmnibox(),this.omniboxBlock=document.getElementById(s),this.omniboxClose=document.getElementById(l),this.omniboxInput=document.getElementById(r),this.obAlt=!1,this.obCtrl=!1,console.log({omnibox:this}),document.addEventListener("keydown",function(e){if(e.altKey&&(n.obAlt=!0),e.ctrlKey&&(n.obCtrl=!0),"f"===e.key.toLowerCase()||70===e.keyCode){var t="https://docs.onflow.org/docs/cadence"===location.toString();n.obCtrl&&n.obAlt&&t&&n.showOmnibox()}"Escape"===e.key&&n.hideOmnibox()}),document.addEventListener("keyup",function(e){e.altKey&&(n.obAlt=!1),e.ctrlKey&&(n.obCtrl=!1)})}return i(t,[{key:"_injectOmnibox",value:function(){var e=document.createElement("div");e.classList.add("omnibox-container"),e.classList.add("omnibox-container__hidden"),e.id=this.blockNodeId;var t=document.createElement("input");t.type="text",t.id=this.inputId;var o=document.createElement("div");o.classList.add(this.closeNodeId),o.id=this.closeNodeId,e.appendChild(t),e.appendChild(o),document.body.appendChild(e)}},{key:"prepareList",value:function(){var e=this;if(0===this.linkList.length){var t=document.getElementById(this.tableId).parentNode;t.querySelectorAll(":scope > ul > li").forEach(function(t){return function t(o){var n=o.querySelector(":scope p a, :scope a");n&&e.linkList.push({label:n.textContent,value:n.href.split("#")[1]});var i=o.querySelectorAll(":scope > ul > li");i.length>0&&i.forEach(function(e){return t(e)})}(t)})}}},{key:"showOmnibox",value:function(){var t=this;0===this.linkList.length&&this.prepareList(),this.omniboxClose.addEventListener("click",this.hideOmnibox),this.omniboxBlock.classList.remove("omnibox-container__hidden"),this.omniboxRef=(0,e.default)({input:this.omniboxInput,className:"omnibox",debounceWaitMs:50,emptyMsg:"Nothing found 😟",render:function(e){var t=document.createElement("div");return t.textContent=e.label,t.classList.add("omnibox-item"),t},fetch:function(e,o){e=e.toLowerCase(),o(t.linkList.filter(function(t){return t.label.toLowerCase().includes(e)}).sort(function(e,t){return e>t}))},onSelect:function(e){console.log(e.value);var o=document.getElementById(e.value);o&&o.scrollIntoView(),t.hideOmnibox()}}),this.omniboxInput.focus()}},{key:"hideOmnibox",value:function(){this.omniboxInput.value="",this.omniboxClose.removeEventListener("click",this.hideOmnibox),this.omniboxBlock.classList.add("omnibox-container__hidden"),this.omniboxRef&&this.omniboxRef.destroy()}}]),t}(),l=s;exports.default=l;
},{"autocompleter":"Cza8","./omnibox.sass":"mArL"}],"P2jx":[function(require,module,exports) {
"use strict";var o=e(require("./Omnibox"));function e(o){return o&&o.__esModule?o:{default:o}}new o.default({tableId:"table-of-contents",blockNodeId:"omnibox-block",closeNodeId:"omnibox--close",inputId:"omnibox"}),console.log("Omnibox is ready for your commands, master!");
},{"./Omnibox":"GQ5M"}]},{},["P2jx"], null)
//# sourceMappingURL=/omniboxSearch.js.map