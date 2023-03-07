(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[9866],{61659:(r,o,t)=>{"use strict";t.d(o,{Z:()=>s});var n=t(94015);var e=t.n(n);var i=t(23645);var c=t.n(i);var a=c()(e());a.push([r.id,"/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n","",{version:3,sources:["webpack://./node_modules/codemirror/theme/tomorrow-night-bright.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;AAED,yCAAyC,mBAAmB,EAAE,cAAc,EAAE;AAC9E,sDAAsD,mBAAmB,EAAE;AAC3E,kDAAkD,mBAAmB,EAAE,iBAAiB,EAAE;AAC1F,uDAAuD,cAAc,EAAE;AACvE,8DAA8D,WAAW,EAAE;AAC3E,qDAAqD,cAAc,EAAE;AACrE,iDAAiD,8BAA8B,EAAE;;AAEjF,8CAA8C,cAAc,EAAE;AAC9D,2CAA2C,cAAc,EAAE;AAC3D,6CAA6C,cAAc,EAAE;;AAE7D,8FAA8F,cAAc,EAAE;AAC9G,8CAA8C,cAAc,EAAE;AAC9D,6CAA6C,cAAc,EAAE;;AAE7D,+CAA+C,cAAc,EAAE;AAC/D,iDAAiD,cAAc,EAAE;AACjE,0CAA0C,cAAc,EAAE;AAC1D,8CAA8C,cAAc,EAAE;AAC9D,0CAA0C,cAAc,EAAE;AAC1D,2CAA2C,cAAc,EAAE;AAC3D,4CAA4C,mBAAmB,EAAE,cAAc,EAAE;;AAEjF,gEAAgE,mBAAmB,EAAE;AACrF,0DAA0D,0BAA0B,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n"],sourceRoot:""}]);const s=a},23645:r=>{"use strict";r.exports=function(r){var o=[];o.toString=function o(){return this.map((function(o){var t=r(o);if(o[2]){return"@media ".concat(o[2]," {").concat(t,"}")}return t})).join("")};o.i=function(r,t,n){if(typeof r==="string"){r=[[null,r,""]]}var e={};if(n){for(var i=0;i<this.length;i++){var c=this[i][0];if(c!=null){e[c]=true}}}for(var a=0;a<r.length;a++){var s=[].concat(r[a]);if(n&&e[s[0]]){continue}if(t){if(!s[2]){s[2]=t}else{s[2]="".concat(t," and ").concat(s[2])}}o.push(s)}};return o}},94015:r=>{"use strict";function o(r,o){return c(r)||i(r,o)||n(r,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,o){if(!r)return;if(typeof r==="string")return e(r,o);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor)t=r.constructor.name;if(t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return e(r,o)}function e(r,o){if(o==null||o>r.length)o=r.length;for(var t=0,n=new Array(o);t<o;t++){n[t]=r[t]}return n}function i(r,o){var t=r&&(typeof Symbol!=="undefined"&&r[Symbol.iterator]||r["@@iterator"]);if(t==null)return;var n=[];var e=true;var i=false;var c,a;try{for(t=t.call(r);!(e=(c=t.next()).done);e=true){n.push(c.value);if(o&&n.length===o)break}}catch(s){i=true;a=s}finally{try{if(!e&&t["return"]!=null)t["return"]()}finally{if(i)throw a}}return n}function c(r){if(Array.isArray(r))return r}r.exports=function r(t){var n=o(t,4),e=n[1],i=n[3];if(typeof btoa==="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i))));var a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c);var s="/*# ".concat(a," */");var A=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[e].concat(A).concat([s]).join("\n")}return[e].join("\n")}},39866:(r,o,t)=>{"use strict";t.r(o);t.d(o,{default:()=>s});var n=t(66994);var e=t.n(n);var i=t(61659);var c={};c.insert="head";c.singleton=false;var a=e()(i.Z,c);const s=i.Z.locals||{}},66994:(r,o,t)=>{"use strict";var n=function r(){var o;return function r(){if(typeof o==="undefined"){o=Boolean(window&&document&&document.all&&!window.atob)}return o}}();var e=function r(){var o={};return function r(t){if(typeof o[t]==="undefined"){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){try{n=n.contentDocument.head}catch(e){n=null}}o[t]=n}return o[t]}}();var i=[];function c(r){var o=-1;for(var t=0;t<i.length;t++){if(i[t].identifier===r){o=t;break}}return o}function a(r,o){var t={};var n=[];for(var e=0;e<r.length;e++){var a=r[e];var s=o.base?a[0]+o.base:a[0];var A=t[s]||0;var m="".concat(s," ").concat(A);t[s]=A+1;var u=c(m);var l={css:a[1],media:a[2],sourceMap:a[3]};if(u!==-1){i[u].references++;i[u].updater(l)}else{i.push({identifier:m,updater:d(l,o),references:1})}n.push(m)}return n}function s(r){var o=document.createElement("style");var n=r.attributes||{};if(typeof n.nonce==="undefined"){var i=true?t.nc:0;if(i){n.nonce=i}}Object.keys(n).forEach((function(r){o.setAttribute(r,n[r])}));if(typeof r.insert==="function"){r.insert(o)}else{var c=e(r.insert||"head");if(!c){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}c.appendChild(o)}return o}function A(r){if(r.parentNode===null){return false}r.parentNode.removeChild(r)}var m=function r(){var o=[];return function r(t,n){o[t]=n;return o.filter(Boolean).join("\n")}}();function u(r,o,t,n){var e=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet){r.styleSheet.cssText=m(o,e)}else{var i=document.createTextNode(e);var c=r.childNodes;if(c[o]){r.removeChild(c[o])}if(c.length){r.insertBefore(i,c[o])}else{r.appendChild(i)}}}function l(r,o,t){var n=t.css;var e=t.media;var i=t.sourceMap;if(e){r.setAttribute("media",e)}else{r.removeAttribute("media")}if(i&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")}if(r.styleSheet){r.styleSheet.cssText=n}else{while(r.firstChild){r.removeChild(r.firstChild)}r.appendChild(document.createTextNode(n))}}var h=null;var g=0;function d(r,o){var t;var n;var e;if(o.singleton){var i=g++;t=h||(h=s(o));n=u.bind(null,t,i,false);e=u.bind(null,t,i,true)}else{t=s(o);n=l.bind(null,t,o);e=function r(){A(t)}}n(r);return function o(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap){return}n(r=t)}else{e()}}}r.exports=function(r,o){o=o||{};if(!o.singleton&&typeof o.singleton!=="boolean"){o.singleton=n()}r=r||[];var t=a(r,o);return function r(n){n=n||[];if(Object.prototype.toString.call(n)!=="[object Array]"){return}for(var e=0;e<t.length;e++){var s=t[e];var A=c(s);i[A].references--}var m=a(n,o);for(var u=0;u<t.length;u++){var l=t[u];var h=c(l);if(i[h].references===0){i[h].updater();i.splice(h,1)}}t=m}}}}]);
//# sourceMappingURL=9866.0abcc3bde75b8a8505e7.js.map?v=0abcc3bde75b8a8505e7