(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function u(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var h=i.length-1;h>=0;h--)(o=i[h])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function Nt(i,e,t,n){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function h(w){try{m(n.next(w))}catch(y){o(y)}}function d(w){try{m(n.throw(w))}catch(y){o(y)}}function m(w){w.done?a(w.value):r(w.value).then(h,d)}m((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=window,qn=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),Cr=new WeakMap;let gi=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(qn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Cr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Cr.set(t,e))}return e}toString(){return this.cssText}};const cs=i=>new gi(typeof i=="string"?i:i+"",void 0,Kn),L=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new gi(t,i,Kn)},hs=(i,e)=>{qn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=It.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Mr=qn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return cs(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fn;const Dt=window,kr=Dt.trustedTypes,fs=kr?kr.emptyScript:"",Lr=Dt.reactiveElementPolyfillSupport,On={toAttribute(i,e){switch(e){case Boolean:i=i?fs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},wi=(i,e)=>e!==i&&(e==e||i==i),pn={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:wi},In="finalized";let We=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=pn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pn}static finalize(){if(this.hasOwnProperty(In))return!1;this[In]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Mr(r))}else e!==void 0&&t.push(Mr(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return hs(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=pn){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:On).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:On;this._$El=a,this[a]=h.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||wi)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};We[In]=!0,We.elementProperties=new Map,We.elementStyles=[],We.shadowRootOptions={mode:"open"},Lr==null||Lr({ReactiveElement:We}),((fn=Dt.reactiveElementVersions)!==null&&fn!==void 0?fn:Dt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const Pt=window,qe=Pt.trustedTypes,Nr=qe?qe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Dn="$lit$",ge=`lit$${(Math.random()+"").slice(9)}$`,yi="?"+ge,ps=`<${yi}>`,Me=document,Bt=()=>Me.createComment(""),ht=i=>i===null||typeof i!="object"&&typeof i!="function",vi=Array.isArray,ms=i=>vi(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",gn=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Or=/-->/g,Ir=/>/g,Ee=RegExp(`>|${gn}(?:([^\\s"'>=/]+)(${gn}*=${gn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dr=/'/g,Pr=/"/g,bi=/^(?:script|style|textarea|title)$/i,Ke=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Br=new WeakMap,Re=Me.createTreeWalker(Me,129,null,!1);function _i(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nr!==void 0?Nr.createHTML(e):e}const gs=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=at;for(let h=0;h<t;h++){const d=i[h];let m,w,y=-1,$=0;for(;$<d.length&&(o.lastIndex=$,w=o.exec(d),w!==null);)$=o.lastIndex,o===at?w[1]==="!--"?o=Or:w[1]!==void 0?o=Ir:w[2]!==void 0?(bi.test(w[2])&&(r=RegExp("</"+w[2],"g")),o=Ee):w[3]!==void 0&&(o=Ee):o===Ee?w[0]===">"?(o=r??at,y=-1):w[1]===void 0?y=-2:(y=o.lastIndex-w[2].length,m=w[1],o=w[3]===void 0?Ee:w[3]==='"'?Pr:Dr):o===Pr||o===Dr?o=Ee:o===Or||o===Ir?o=at:(o=Ee,r=void 0);const C=o===Ee&&i[h+1].startsWith("/>")?" ":"";a+=o===at?d+ps:y>=0?(n.push(m),d.slice(0,y)+Dn+d.slice(y)+ge+C):d+ge+(y===-2?(n.push(void 0),h):C)}return[_i(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Pn=class Ai{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const h=e.length-1,d=this.parts,[m,w]=gs(e,t);if(this.el=Ai.createElement(m,n),Re.currentNode=this.el.content,t===2){const y=this.el.content,$=y.firstChild;$.remove(),y.append(...$.childNodes)}for(;(r=Re.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const $ of r.getAttributeNames())if($.endsWith(Dn)||$.startsWith(ge)){const C=w[o++];if(y.push($),C!==void 0){const Le=r.getAttribute(C.toLowerCase()+Dn).split(ge),re=/([.?@])?(.*)/.exec(C);d.push({type:1,index:a,name:re[2],strings:Le,ctor:re[1]==="."?ys:re[1]==="?"?bs:re[1]==="@"?_s:jt})}else d.push({type:6,index:a})}for(const $ of y)r.removeAttribute($)}if(bi.test(r.tagName)){const y=r.textContent.split(ge),$=y.length-1;if($>0){r.textContent=qe?qe.emptyScript:"";for(let C=0;C<$;C++)r.append(y[C],Bt()),Re.nextNode(),d.push({type:2,index:++a});r.append(y[$],Bt())}}}else if(r.nodeType===8)if(r.data===yi)d.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(ge,y+1))!==-1;)d.push({type:7,index:a}),y+=ge.length-1}a++}}static createElement(e,t){const n=Me.createElement("template");return n.innerHTML=e,n}};function Xe(i,e,t=i,n){var r,a,o,h;if(e===Ke)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const m=ht(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==m&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),m===void 0?d=void 0:(d=new m(i),d._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Xe(i,d._$AS(i,e.values),d,n)),e}let ws=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Me).importNode(n,!0);Re.currentNode=a;let o=Re.nextNode(),h=0,d=0,m=r[0];for(;m!==void 0;){if(h===m.index){let w;m.type===2?w=new $i(o,o.nextSibling,this,e):m.type===1?w=new m.ctor(o,m.name,m.strings,this,e):m.type===6&&(w=new As(o,this,e)),this._$AV.push(w),m=r[++d]}h!==(m==null?void 0:m.index)&&(o=Re.nextNode(),h++)}return Re.currentNode=Me,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},$i=class Ei{constructor(e,t,n,r){var a;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xe(this,e,t),ht(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ms(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&ht(this._$AH)?this._$AA.nextSibling.data=e:this.$(Me.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Pn.createElement(_i(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new ws(a,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=Br.get(e.strings);return t===void 0&&Br.set(e.strings,t=new Pn(e)),t}T(e){vi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Ei(this.k(Bt()),this.k(Bt()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},jt=class{constructor(e,t,n,r,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Xe(this,e,t,0),o=!ht(e)||e!==this._$AH&&e!==Ke,o&&(this._$AH=e);else{const h=e;let d,m;for(e=a[0],d=0;d<a.length-1;d++)m=Xe(this,h[n+d],t,d),m===Ke&&(m=this._$AH[d]),o||(o=!ht(m)||m!==this._$AH[d]),m===U?e=U:e!==U&&(e+=(m??"")+a[d+1]),this._$AH[d]=m}o&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ys=class extends jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};const vs=qe?qe.emptyScript:"";let bs=class extends jt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,vs):this.element.removeAttribute(this.name)}},_s=class extends jt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Xe(this,e,t,0))!==null&&n!==void 0?n:U)===Ke)return;const r=this._$AH,a=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},As=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}};const Hr=Pt.litHtmlPolyfillSupport;Hr==null||Hr(Pn,$i),((mn=Pt.litHtmlVersions)!==null&&mn!==void 0?mn:Pt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn;const Ht=window,Ze=Ht.trustedTypes,Ur=Ze?Ze.createPolicy("lit-html",{createHTML:i=>i}):void 0,Bn="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,Si="?"+we,$s=`<${Si}>`,ke=document,ft=()=>ke.createComment(""),pt=i=>i===null||typeof i!="object"&&typeof i!="function",Ti=Array.isArray,Es=i=>Ti(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",yn=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fr=/-->/g,zr=/>/g,Se=RegExp(`>|${yn}(?:([^\\s"'>=/]+)(${yn}*=${yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jr=/'/g,Vr=/"/g,Ri=/^(?:script|style|textarea|title)$/i,xi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=xi(1),Vt=xi(2),Je=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Wr=new WeakMap,xe=ke.createTreeWalker(ke,129,null,!1);function Ci(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ur!==void 0?Ur.createHTML(e):e}const Ss=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=ot;for(let h=0;h<t;h++){const d=i[h];let m,w,y=-1,$=0;for(;$<d.length&&(o.lastIndex=$,w=o.exec(d),w!==null);)$=o.lastIndex,o===ot?w[1]==="!--"?o=Fr:w[1]!==void 0?o=zr:w[2]!==void 0?(Ri.test(w[2])&&(r=RegExp("</"+w[2],"g")),o=Se):w[3]!==void 0&&(o=Se):o===Se?w[0]===">"?(o=r??ot,y=-1):w[1]===void 0?y=-2:(y=o.lastIndex-w[2].length,m=w[1],o=w[3]===void 0?Se:w[3]==='"'?Vr:jr):o===Vr||o===jr?o=Se:o===Fr||o===zr?o=ot:(o=Se,r=void 0);const C=o===Se&&i[h+1].startsWith("/>")?" ":"";a+=o===ot?d+$s:y>=0?(n.push(m),d.slice(0,y)+Bn+d.slice(y)+we+C):d+we+(y===-2?(n.push(void 0),h):C)}return[Ci(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class mt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const h=e.length-1,d=this.parts,[m,w]=Ss(e,t);if(this.el=mt.createElement(m,n),xe.currentNode=this.el.content,t===2){const y=this.el.content,$=y.firstChild;$.remove(),y.append(...$.childNodes)}for(;(r=xe.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const $ of r.getAttributeNames())if($.endsWith(Bn)||$.startsWith(we)){const C=w[o++];if(y.push($),C!==void 0){const Le=r.getAttribute(C.toLowerCase()+Bn).split(we),re=/([.?@])?(.*)/.exec(C);d.push({type:1,index:a,name:re[2],strings:Le,ctor:re[1]==="."?Rs:re[1]==="?"?Cs:re[1]==="@"?Ms:Wt})}else d.push({type:6,index:a})}for(const $ of y)r.removeAttribute($)}if(Ri.test(r.tagName)){const y=r.textContent.split(we),$=y.length-1;if($>0){r.textContent=Ze?Ze.emptyScript:"";for(let C=0;C<$;C++)r.append(y[C],ft()),xe.nextNode(),d.push({type:2,index:++a});r.append(y[$],ft())}}}else if(r.nodeType===8)if(r.data===Si)d.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(we,y+1))!==-1;)d.push({type:7,index:a}),y+=we.length-1}a++}}static createElement(e,t){const n=ke.createElement("template");return n.innerHTML=e,n}}function Qe(i,e,t=i,n){var r,a,o,h;if(e===Je)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const m=pt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==m&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),m===void 0?d=void 0:(d=new m(i),d._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Qe(i,d._$AS(i,e.values),d,n)),e}class Ts{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ke).importNode(n,!0);xe.currentNode=a;let o=xe.nextNode(),h=0,d=0,m=r[0];for(;m!==void 0;){if(h===m.index){let w;m.type===2?w=new wt(o,o.nextSibling,this,e):m.type===1?w=new m.ctor(o,m.name,m.strings,this,e):m.type===6&&(w=new ks(o,this,e)),this._$AV.push(w),m=r[++d]}h!==(m==null?void 0:m.index)&&(o=xe.nextNode(),h++)}return xe.currentNode=ke,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class wt{constructor(e,t,n,r){var a;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qe(this,e,t),pt(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Es(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&pt(this._$AH)?this._$AA.nextSibling.data=e:this.$(ke.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=mt.createElement(Ci(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new Ts(a,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=Wr.get(e.strings);return t===void 0&&Wr.set(e.strings,t=new mt(e)),t}T(e){Ti(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new wt(this.k(ft()),this.k(ft()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Wt{constructor(e,t,n,r,a){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Qe(this,e,t,0),o=!pt(e)||e!==this._$AH&&e!==Je,o&&(this._$AH=e);else{const h=e;let d,m;for(e=a[0],d=0;d<a.length-1;d++)m=Qe(this,h[n+d],t,d),m===Je&&(m=this._$AH[d]),o||(o=!pt(m)||m!==this._$AH[d]),m===S?e=S:e!==S&&(e+=(m??"")+a[d+1]),this._$AH[d]=m}o&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rs extends Wt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}const xs=Ze?Ze.emptyScript:"";class Cs extends Wt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,xs):this.element.removeAttribute(this.name)}}class Ms extends Wt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Qe(this,e,t,0))!==null&&n!==void 0?n:S)===Je)return;const r=this._$AH,a=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==S&&(r===S||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class ks{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}}const Gr=Ht.litHtmlPolyfillSupport;Gr==null||Gr(mt,wt),((wn=Ht.litHtmlVersions)!==null&&wn!==void 0?wn:Ht.litHtmlVersions=[]).push("2.8.0");const Ls=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=a._$litPart$;if(o===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new wt(e.insertBefore(ft(),h),h,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,bn;class ue extends We{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ls(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Je}}ue.finalized=!0,ue._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:ue});const Yr=globalThis.litElementPolyfillSupport;Yr==null||Yr({LitElement:ue});((bn=globalThis.litElementVersions)!==null&&bn!==void 0?bn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Os=(i,e,t)=>{e.constructor.createProperty(t,i)};function A(i){return(e,t)=>t!==void 0?Os(i,e,t):Ns(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(i){return A({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(o.finisher=function(h){i(h,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(i,e){return Mi({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Is(i){return Mi({descriptor:e=>({get(){var t,n;return(n=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(i))!==null&&n!==void 0?n:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _n;((_n=window.HTMLSlotElement)===null||_n===void 0?void 0:_n.prototype.assignedElements)!=null;function g(i){let e,t,n;return e=i,(r,a,o)=>{if(o.value!=null)o.value=qr(o.value,e,t,n);else if(o.get!=null)o.get=qr(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const An=new Map;function qr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let h=this[r];if(Array.isArray(n))for(const d of n)An.has(d)?An.get(d).push(h):An.set(d,[h]);if(e||a.length>0||t>0){let d;e===!0?d=a.map(y=>y.toString()).join("!"):e?d=e.apply(this,a):d=a[0];const m=`${d}__timestamp`;let w=!1;if(t>0)if(!h.has(m))w=!0;else{let y=h.get(m);w=Date.now()-y>t}h.has(d)&&!w?o=h.get(d):(o=i.apply(this,a),h.set(d,o),t>0&&h.set(m,Date.now()))}else{const d=this;h.has(d)?o=h.get(d):(o=i.apply(this,a),h.set(d,o))}return o}}class Hn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Hn.shared=new Hn;class ye{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ye.shared=new ye;class Ut{parseValue(e){return ye.shared.parseValue(e)}}Ut.shared=new Ut;class gt{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}gt.shared=new gt;class Ft{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const d=60**(e.length-1-a);return o*Math.floor(d)}).reduce((r,a)=>r+a,0);return t?void 0:n}}Ft.shared=new Ft;class Un{parseValue(e){if(typeof e=="string")return e}}Un.shared=new Un;class Ds{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class Fn{parseValue(e){if(typeof e=="string")return e}}Fn.shared=new Fn;class zt{parseValue(e){return String(e)}}zt.shared=new zt;class ie{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}u([g()],ie.prototype,"values",null);u([g()],ie.prototype,"value",null);class Ps extends ie{constructor(e){super(Hn.shared,e)}}class fe extends ie{constructor(e){super(gt.shared,e)}}class $n extends ie{constructor(e){super(Ft.shared,e)}}class X extends ie{constructor(e){super(ye.shared,e)}}class k extends ie{constructor(e){super(zt.shared,e)}}class Bs extends ie{constructor(e){super(Fn.shared,e)}}class Kr extends ie{constructor(e){super(Ut.shared,e)}}class Hs extends ie{constructor(e){super(Un.shared,e)}}class Us extends ie{constructor(e,t){super(t,e)}}class Fs extends Us{constructor(e){const t=new Ds(zt.shared);super(e,t)}}class v{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new fe(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new k(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new X(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new X(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new k(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new k(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Kr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new k(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new k(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new k(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new k(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new fe(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new k(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new X(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new $n(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new k(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new X(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new fe(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new k(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new k(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new X(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Kr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new k(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new $n(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new k(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new X(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Hs(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Ps(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new k(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new X(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new X(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new k(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new k(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Bs(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new k(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new X(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new fe(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new k(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new fe(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new $n(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new k(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new k(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new fe(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new fe(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new fe(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Fs(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new k(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new k(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new k(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new X(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new k(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new k(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new X(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new k(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new k(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new X(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new X(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}u([g()],v.prototype,"addeddate",null);u([g()],v.prototype,"audio_codec",null);u([g()],v.prototype,"audio_sample_rate",null);u([g()],v.prototype,"avg_rating",null);u([g()],v.prototype,"collection",null);u([g()],v.prototype,"collections_raw",null);u([g()],v.prototype,"collection_size",null);u([g()],v.prototype,"contributor",null);u([g()],v.prototype,"coverage",null);u([g()],v.prototype,"creator",null);u([g()],v.prototype,"collection_layout",null);u([g()],v.prototype,"date",null);u([g()],v.prototype,"description",null);u([g()],v.prototype,"downloads",null);u([g()],v.prototype,"duration",null);u([g()],v.prototype,"external_identifier",null);u([g()],v.prototype,"files_count",null);u([g()],v.prototype,"indexdate",null);u([g()],v.prototype,"isbn",null);u([g()],v.prototype,"issue",null);u([g()],v.prototype,"item_count",null);u([g()],v.prototype,"item_size",null);u([g()],v.prototype,"language",null);u([g()],v.prototype,"length",null);u([g()],v.prototype,"lineage",null);u([g()],v.prototype,"month",null);u([g()],v.prototype,"mediatype",null);u([g()],v.prototype,"noindex",null);u([g()],v.prototype,"notes",null);u([g()],v.prototype,"num_favorites",null);u([g()],v.prototype,"num_reviews",null);u([g()],v.prototype,"openlibrary_edition",null);u([g()],v.prototype,"openlibrary_work",null);u([g()],v.prototype,"page_progression",null);u([g()],v.prototype,"partner",null);u([g()],v.prototype,"ppi",null);u([g()],v.prototype,"publicdate",null);u([g()],v.prototype,"publisher",null);u([g()],v.prototype,"reviewdate",null);u([g()],v.prototype,"runtime",null);u([g()],v.prototype,"scanner",null);u([g()],v.prototype,"source",null);u([g()],v.prototype,"start_localtime",null);u([g()],v.prototype,"start_time",null);u([g()],v.prototype,"stop_time",null);u([g()],v.prototype,"subject",null);u([g()],v.prototype,"taper",null);u([g()],v.prototype,"title",null);u([g()],v.prototype,"transferer",null);u([g()],v.prototype,"track",null);u([g()],v.prototype,"type",null);u([g()],v.prototype,"uploader",null);u([g()],v.prototype,"utc_offset",null);u([g()],v.prototype,"venue",null);u([g()],v.prototype,"volume",null);u([g()],v.prototype,"week",null);u([g()],v.prototype,"year",null);class et{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Ut.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Ft.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?ye.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?ye.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?ye.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}u([g()],et.prototype,"size",null);u([g()],et.prototype,"length",null);u([g()],et.prototype,"height",null);u([g()],et.prototype,"width",null);u([g()],et.prototype,"track",null);class ne{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?gt.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?gt.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?ye.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}u([g()],ne.prototype,"reviewdate",null);u([g()],ne.prototype,"createdate",null);u([g()],ne.prototype,"stars",null);class zs{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new et(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new ne(r))}}var Ce;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(Ce||(Ce={}));class zn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class js{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const h=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Ce.networkError,h)}try{const o=await a.json(),h=o.error;if(h){const d=o.forensics;return this.getErrorResult(Ce.searchEngineError,h,d)}else return{success:o}}catch(o){const h=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Ce.decodingError,h)}}getErrorResult(e,t,n){return{error:new zn(e,t,n)}}}class Xr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new zn(Ce.itemNotFound)}:{success:new zs(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new zn(Ce.itemNotFound)}:{success:r.success.result}}}Xr.default=new Xr(new js);let Vs=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Ws(i){return new Promise(e=>setTimeout(e,i))}var le;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(le||(le={}));const Zr="lazyLoaderService";class Gs{constructor(e){var t,n,r;this.emitter=Vs(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return Nt(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return Nt(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return Nt(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${le.owner}='${Zr}'][${le.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((o,h)=>{if(a.getAttribute(le.dynamicImportLoaded)){o();return}const d=e.scriptBeingRetried,m=a.onload||(d==null?void 0:d.onload);a.onload=y=>{m==null||m(y),a.setAttribute(le.dynamicImportLoaded,"true"),o()};const w=a.onerror||(d==null?void 0:d.onerror);a.onerror=y=>Nt(this,void 0,void 0,function*(){const $=a.getAttribute(le.hasBeenRetried);if(n<this.retryCount&&!$){a.setAttribute(le.hasBeenRetried,"true"),yield Ws(this.retryInterval*1e3);const C=n+1;this.emitter.emit("scriptLoadRetried",e.src,C),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:C,scriptBeingRetried:a}))}else $||this.emitter.emit("scriptLoadFailed",e.src,y),w==null||w(y),h(y)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(le.owner,Zr),r.setAttribute("src",n),r.setAttribute(le.retryNumber,a.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(h=>{r.setAttribute(h,o[h])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Ys{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class qs{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Gs,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),o=new Ys({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ks=(i,...e)=>({strTag:!0,strings:i,values:e}),Xs=Ks,Zs=i=>typeof i!="string"&&"strTag"in i,Js=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs=i=>Zs(i)?Js(i.strings,i.values):i;let x=Qs;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ea{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ta=new ea;ta.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const na={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ra=i=>(...e)=>({_$litDirective$:i,values:e});class ia{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jn extends ia{constructor(e){if(super(e),this.et=U,e.type!==na.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this.ft=void 0,this.et=e;if(e===Ke)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}jn.directiveName="unsafeHTML",jn.resultType=1;const ki=ra(jn);/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */function Jr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function sa(i){if(Array.isArray(i))return i}function aa(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,h=[],d=!0,m=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(h.push(n.value),h.length!==e);d=!0);}catch(w){m=!0,r=w}finally{try{if(!d&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(m)throw r}}return h}}function oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */function la(i,e){return sa(i)||aa(i,e)||ua(i,e)||oa()}function ua(i,e){if(i){if(typeof i=="string")return Jr(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Jr(i,e):void 0}}const Li=Object.entries,Qr=Object.setPrototypeOf,da=Object.isFrozen,ca=Object.getPrototypeOf,ha=Object.getOwnPropertyDescriptor;let z=Object.freeze,j=Object.seal,Ge=Object.create,Ni=typeof Reflect<"u"&&Reflect,Vn=Ni.apply,Wn=Ni.construct;z||(z=function(e){return e});j||(j=function(e){return e});Vn||(Vn=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return e.apply(t,r)});Wn||(Wn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const Te=F(Array.prototype.forEach),fa=F(Array.prototype.lastIndexOf),ei=F(Array.prototype.pop),lt=F(Array.prototype.push),pa=F(Array.prototype.splice),Ye=Array.isArray,ct=F(String.prototype.toLowerCase),En=F(String.prototype.toString),ti=F(String.prototype.match),ut=F(String.prototype.replace),ni=F(String.prototype.indexOf),ma=F(String.prototype.trim),ga=F(Number.prototype.toString),wa=F(Boolean.prototype.toString),ri=typeof BigInt>"u"?null:F(BigInt.prototype.toString),ii=typeof Symbol>"u"?null:F(Symbol.prototype.toString),Y=F(Object.prototype.hasOwnProperty),dt=F(Object.prototype.toString),V=F(RegExp.prototype.test),pe=ya(TypeError);function F(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Vn(i,e,n)}}function ya(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Wn(i,t)}}function R(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ct;if(Qr&&Qr(i,null),!Ye(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(da(e)||(e[n]=a),r=a)}i[r]=!0}return i}function va(i){for(let e=0;e<i.length;e++)Y(i,e)||(i[e]=null);return i}function J(i){const e=Ge(null);for(const n of Li(i)){var t=la(n,2);const r=t[0],a=t[1];Y(i,r)&&(Ye(a)?e[r]=va(a):a&&typeof a=="object"&&a.constructor===Object?e[r]=J(a):e[r]=a)}return e}function ba(i){switch(typeof i){case"string":return i;case"number":return ga(i);case"boolean":return wa(i);case"bigint":return ri?ri(i):"0";case"symbol":return ii?ii(i):"Symbol()";case"undefined":return dt(i);case"function":case"object":{if(i===null)return dt(i);const e=i,t=te(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:dt(n)}return dt(i)}default:return dt(i)}}function te(i,e){for(;i!==null;){const n=ha(i,e);if(n){if(n.get)return F(n.get);if(typeof n.value=="function")return F(n.value)}i=ca(i)}function t(){return null}return t}function _a(i){try{return V(i,""),!0}catch{return!1}}const si=z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Sn=z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Tn=z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Aa=z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Rn=z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),$a=z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ai=z(["#text"]),oi=z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),xn=z(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),li=z(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ot=z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ea=j(/{{[\w\W]*|^[\w\W]*}}/g),Sa=j(/<%[\w\W]*|^[\w\W]*%>/g),Ta=j(/\${[\w\W]*/g),Ra=j(/^data-[\-\w.\u00B7-\uFFFF]+$/),xa=j(/^aria-[\-\w]+$/),ui=j(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ca=j(/^(?:\w+script|data):/i),Ma=j(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ka=j(/^html$/i),La=j(/^[a-z][.\w]*(-[.\w]+)+$/i),di=j(/<[/\w!]/g),ci=j(/<[/\w]/g),Na=j(/<\/no(script|embed|frames)/i),Oa=j(/\/>/i),Z={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Oi=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Ia=z(R({},Oi)),Da=function(){const i={};return Te(Oi,e=>{i[e]=j(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),z(i)}(),Pa=function(){return typeof window>"u"?null:window},Ba=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},hi=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},me=function(e,t,n,r){return Y(e,t)&&Ye(e[t])?R(r.base?J(r.base):{},e[t],r.transform):n},Cn=function(e,t,n){const r=Y(e,t)?e[t]:void 0;return r&&typeof r=="object"?J(r):n()};function Ii(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pa();const e=f=>Ii(f);if(e.version="3.4.16",e.removed=[],!i||!i.document||i.document.nodeType!==Z.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const a=i.HTMLTemplateElement,o=i.Node,h=i.Element,d=i.NodeFilter;i.NamedNodeMap===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const m=i.DOMParser,w=i.trustedTypes,y=h.prototype,$=te(y,"cloneNode"),C=te(y,"remove"),Le=te(y,"removeAttributeNode"),re=te(y,"nextSibling"),Ne=te(y,"childNodes"),Oe=te(y,"parentNode"),Xn=te(y,"shadowRoot"),Yt=te(y,"attributes"),ve=o&&o.prototype?te(o.prototype,"nodeType"):null,Ie=o&&o.prototype?te(o.prototype,"nodeName"):null,vt=o&&o.prototype?te(o.prototype,"ownerDocument"):null,tt=function(s){return ve?ve(s):s.nodeType},qt=function(s){return Ie?Ie(s):s.nodeName};if(typeof a=="function"){const f=t.createElement("template");f.content&&f.content.ownerDocument&&(t=f.content.ownerDocument)}let G,be="",Kt,Zn=!1,nt=0;const Jn=function(){if(nt>0)throw pe('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},De=function(s){Jn(),nt++;try{return G.createHTML(s)}finally{nt--}},Pi=function(s){Jn(),nt++;try{return G.createScriptURL(s)}finally{nt--}},Bi=function(){return Zn||(Kt=Ba(w,r),Zn=!0),Kt},bt=t,Xt=bt.implementation,Qn=bt.createNodeIterator,Hi=bt.createDocumentFragment,Ui=bt.getElementsByTagName,Fi=n.importNode;let N=hi();e.isSupported=typeof Li=="function"&&typeof Oe=="function"&&Xt&&Xt.createHTMLDocument!==void 0;const zi=Ea,ji=Sa,Vi=Ta,Wi=Ra,Gi=xa,Yi=Ca,er=Ma,qi=La;let tr=ui,O=null;const Zt=R({},[...si,...Sn,...Tn,...Rn,...ai]);let I=null;const Jt=R({},[...oi,...xn,...li,...Ot]);let se=Object.seal(Ge(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),rt=null,nr=null;const de=Object.seal(Ge(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let rr=!0,Qt=!0,ir=!1,sr=!0,ce=!1,_e=!0,Ae=!1,en=!1,_t=null,At=null,tn=!1,Pe=!1,$t=!1,Et=!1,ar=!0,or=!1;const lr="user-content-";let nn=!0,rn=!1,Be={},He=null;const ur=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let dr=null;const cr=R({},["audio","video","img","source","image","track"]);let hr=null;const fr=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),St="http://www.w3.org/1998/Math/MathML",Tt="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xhtml";let Ue=ae,sn=!1,an=null;const Ki=R({},[St,Tt,ae],En),pr=z(["mi","mo","mn","ms","mtext"]);let on=R({},pr);const mr=z(["annotation-xml"]);let ln=R({},mr);const Xi=R({},["title","style","font","a","script"]);let it=null;const Zi=["application/xhtml+xml","text/html"],Ji="text/html";let H=null,Fe=null;const Qi=t.createElement("form"),gr=function(s){return s instanceof RegExp||s instanceof Function},un=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Fe&&Fe===s)return;(!s||typeof s!="object")&&(s={}),s=J(s),it=Zi.indexOf(s.PARSER_MEDIA_TYPE)===-1?Ji:s.PARSER_MEDIA_TYPE,H=it==="application/xhtml+xml"?En:ct,O=me(s,"ALLOWED_TAGS",Zt,{transform:H}),I=me(s,"ALLOWED_ATTR",Jt,{transform:H}),an=me(s,"ALLOWED_NAMESPACES",Ki,{transform:En}),hr=me(s,"ADD_URI_SAFE_ATTR",fr,{transform:H,base:fr}),dr=me(s,"ADD_DATA_URI_TAGS",cr,{transform:H,base:cr}),He=me(s,"FORBID_CONTENTS",ur,{transform:H}),rt=me(s,"FORBID_TAGS",J({}),{transform:H}),nr=me(s,"FORBID_ATTR",J({}),{transform:H}),Be=Y(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?J(s.USE_PROFILES):s.USE_PROFILES:!1,rr=s.ALLOW_ARIA_ATTR!==!1,Qt=s.ALLOW_DATA_ATTR!==!1,ir=s.ALLOW_UNKNOWN_PROTOCOLS||!1,sr=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ce=s.SAFE_FOR_TEMPLATES||!1,_e=s.SAFE_FOR_XML!==!1,Ae=s.WHOLE_DOCUMENT||!1,Pe=s.RETURN_DOM||!1,$t=s.RETURN_DOM_FRAGMENT||!1,Et=s.RETURN_TRUSTED_TYPE||!1,tn=s.FORCE_BODY||!1,ar=s.SANITIZE_DOM!==!1,or=s.SANITIZE_NAMED_PROPS||!1,nn=s.KEEP_CONTENT!==!1,rn=s.IN_PLACE||!1,tr=_a(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:ui,Ue=typeof s.NAMESPACE=="string"?s.NAMESPACE:ae,on=Cn(s,"MATHML_TEXT_INTEGRATION_POINTS",()=>R({},pr)),ln=Cn(s,"HTML_INTEGRATION_POINTS",()=>R({},mr));const l=Cn(s,"CUSTOM_ELEMENT_HANDLING",()=>Ge(null));if(se=Ge(null),Y(l,"tagNameCheck")&&gr(l.tagNameCheck)&&(se.tagNameCheck=l.tagNameCheck),Y(l,"attributeNameCheck")&&gr(l.attributeNameCheck)&&(se.attributeNameCheck=l.attributeNameCheck),Y(l,"allowCustomizedBuiltInElements")&&typeof l.allowCustomizedBuiltInElements=="boolean"&&(se.allowCustomizedBuiltInElements=l.allowCustomizedBuiltInElements),j(se),ce&&(Qt=!1),$t&&(Pe=!0),Be&&(O=R({},ai),I=Ge(null),Be.html===!0&&(R(O,si),R(I,oi)),Be.svg===!0&&(R(O,Sn),R(I,xn),R(I,Ot)),Be.svgFilters===!0&&(R(O,Tn),R(I,xn),R(I,Ot)),Be.mathMl===!0&&(R(O,Rn),R(I,li),R(I,Ot))),de.tagCheck=null,de.attributeCheck=null,Y(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?de.tagCheck=s.ADD_TAGS:Ye(s.ADD_TAGS)&&(O===Zt&&(O=J(O)),R(O,s.ADD_TAGS,H))),Y(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?de.attributeCheck=s.ADD_ATTR:Ye(s.ADD_ATTR)&&(I===Jt&&(I=J(I)),R(I,s.ADD_ATTR,H))),Y(s,"ADD_FORBID_CONTENTS")&&Ye(s.ADD_FORBID_CONTENTS)&&(He===ur&&(He=J(He)),R(He,s.ADD_FORBID_CONTENTS,H)),nn&&(O["#text"]=!0),Ae&&R(O,["html","head","body"]),O.table&&(R(O,["tbody"]),delete rt.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw pe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw pe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const c=G;G=s.TRUSTED_TYPES_POLICY;try{be=De("")}catch(p){throw G=c,p}}else s.TRUSTED_TYPES_POLICY===null?(G=void 0,be=""):(G===void 0&&(G=Bi()),G&&typeof be=="string"&&(be=De("")));z&&z(s),Fe=s},wr=R({},[...Sn,...Tn,...Aa]),yr=R({},[...Rn,...$a]),es=function(s,l,c){return l.namespaceURI===ae?s==="svg":l.namespaceURI===St?s==="svg"&&(c==="annotation-xml"||on[c]):!!wr[s]},ts=function(s,l,c){return l.namespaceURI===ae?s==="math":l.namespaceURI===Tt?s==="math"&&ln[c]:!!yr[s]},ns=function(s,l,c){return l.namespaceURI===Tt&&!ln[c]||l.namespaceURI===St&&!on[c]?!1:!yr[s]&&(Xi[s]||!wr[s])},rs=function(s){let l=Oe(s);(!l||!l.tagName)&&(l={namespaceURI:Ue,tagName:"template"});const c=ct(s.tagName),p=ct(l.tagName);return an[s.namespaceURI]?s.namespaceURI===Tt?es(c,l,p):s.namespaceURI===St?ts(c,l,p):s.namespaceURI===ae?ns(c,l,p):!!(it==="application/xhtml+xml"&&an[s.namespaceURI]):!1},he=function(s){lt(e.removed,{element:s});try{Oe(s).removeChild(s)}catch{if(C(s),!Oe(s))throw pe("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},vr=function(s,l,c){try{Le(s,l)}catch{try{s.removeAttribute(c)}catch{}}},Rt=function(s){xt(s);const l=Ne(s);if(l){const p=[];Te(l,b=>{lt(p,b)}),Te(p,b=>{try{C(b)}catch{}})}const c=Yt(s);if(c)for(let p=c.length-1;p>=0;--p){const b=c[p],E=b&&b.name;typeof E=="string"&&vr(s,b,E)}},$e=function(s,l,c){if(!c)try{c=l.getAttributeNode(s)}catch{c=null}lt(e.removed,{attribute:c||null,from:l});try{c?Le(l,c):l.removeAttribute(s)}catch{try{l.removeAttribute(s)}catch{}}if(s==="is")if(Pe||$t)try{he(l)}catch{}else try{l.setAttribute(s,"")}catch{}},is=function(s){const l=Yt(s);if(l)for(let c=l.length-1;c>=0;--c){const p=l[c],b=p&&p.name;typeof b!="string"||I[H(b)]||vr(s,p,b)}},xt=function(s){const l=[s];for(;l.length>0;){const c=l.pop();tt(c)===Z.element&&is(c);const p=Ne(c);if(p)for(let b=p.length-1;b>=0;--b)l.push(p[b])}},br=function(s,l){return _e?s==="patchsrc"?!0:s==="for"&&l!=="label"&&l!=="output":!1},ss=function(s){if(!_e)return;const l=[s];for(;l.length>0;){const c=l.pop(),p=tt(c);if(p===Z.processingInstruction||p===Z.comment&&V(ci,c.data)){try{C(c)}catch{}continue}if(p===Z.element){const E=c,T=H(qt(c));try{E.hasAttribute&&E.hasAttribute("patchsrc")&&E.removeAttribute("patchsrc"),E.hasAttribute&&E.hasAttribute("for")&&br("for",T)&&E.removeAttribute("for")}catch{}}const b=Ne(c);if(b)for(let E=b.length-1;E>=0;--E)l.push(b[E])}},_r=function(s){let l=null,c=null;if(tn)s="<remove></remove>"+s;else{const E=ti(s,/^[\r\n\t ]+/);c=E&&E[0]}it==="application/xhtml+xml"&&Ue===ae&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const p=G?De(s):s;if(Ue===ae)try{l=new m().parseFromString(p,it)}catch{}if(!l||!l.documentElement){l=Xt.createDocument(Ue,"template",null);try{l.documentElement.innerHTML=sn?be:p}catch{}}const b=l.body||l.documentElement;return s&&c&&b.insertBefore(t.createTextNode(c),b.childNodes[0]||null),Ue===ae?Ui.call(l,Ae?"html":"body")[0]:Ae?l.documentElement:b},Ar=function(s){const l=vt?vt(s):s.ownerDocument;return Qn.call(l||s,s,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Ct=function(s){return s=ut(s,zi," "),s=ut(s,ji," "),s=ut(s,Vi," "),s},dn=function(s){var l;s.normalize();const c=vt?vt(s):s.ownerDocument,p=Qn.call(c||s,s,d.SHOW_TEXT|d.SHOW_COMMENT|d.SHOW_CDATA_SECTION|d.SHOW_PROCESSING_INSTRUCTION,null);let b=p.nextNode();for(;b;)b.data=Ct(b.data),b=p.nextNode();const E=(l=s.querySelectorAll)===null||l===void 0?void 0:l.call(s,"template");E&&Te(E,T=>{ze(T.content)&&dn(T.content)})},Mt=function(s){const l=Ie?Ie(s):null;return typeof l!="string"||H(l)!=="form"?!1:typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||s.attributes!==Yt(s)||typeof s.removeAttribute!="function"||typeof s.removeAttributeNode!="function"||typeof s.getAttributeNode!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function"||s.nodeType!==ve(s)||s.childNodes!==Ne(s)},ze=function(s){if(!ve||typeof s!="object"||s===null)return!1;try{return ve(s)===Z.documentFragment}catch{return!1}},st=function(s){if(!ve||typeof s!="object"||s===null)return!1;try{return typeof ve(s)=="number"}catch{return!1}};function oe(f,s,l){f.length!==0&&Te(f,c=>{c.call(e,s,l,Fe)})}const as=function(s,l){return!!(_e&&s.hasChildNodes()&&!st(s.firstElementChild)&&V(di,s.textContent)&&V(di,s.innerHTML)||_e&&s.namespaceURI===ae&&Ia[l]&&(st(s.firstElementChild)||typeof s.textContent=="string"&&V(Da[l],s.textContent))||s.nodeType===Z.processingInstruction||_e&&s.nodeType===Z.comment&&V(ci,s.data))},kt=function(s,l){if(s instanceof RegExp)return V(s,l);if(s instanceof Function){for(var c=arguments.length,p=new Array(c>2?c-2:0),b=2;b<c;b++)p[b-2]=arguments[b];return!!s(l,...p)}return!1},os=function(s,l,c){if(!rt[l]&&Tr(l)&&kt(se.tagNameCheck,l))return!1;if(nn&&!He[l]){const p=Oe(s),b=Ne(s);if(b&&p){const E=b.length;for(let T=E-1;T>=0;--T){const P=s===c?$(b[T],!0):b[T];p.insertBefore(P,re(s))}}}return he(s),!0},$r=function(s,l,c,p){return s.length===0?l:l===c||l===p?J(l):l},je=function(s,l){return s===l||Oe(s)!==null?!1:(rn&&xt(s),!0)},Er=function(s,l){if(oe(N.beforeSanitizeElements,s,null),je(s,l))return!0;if(Mt(s))return he(s),!0;const c=H(qt(s));if(O=$r(N.uponSanitizeElement,O,Zt,_t),oe(N.uponSanitizeElement,s,{tagName:c,allowedTags:O}),je(s,l))return!0;if(as(s,c))return he(s),!0;if(rt[c]||!(de.tagCheck instanceof Function&&de.tagCheck(c))&&!O[c]){const p=os(s,c,l);return p===!1&&(oe(N.afterSanitizeElements,s,null),je(s,l))?!0:p}if(tt(s)===Z.element&&!rs(s)||(c==="noscript"||c==="noembed"||c==="noframes")&&V(Na,s.innerHTML))return he(s),!0;if(ce&&s.nodeType===Z.text){const p=Ct(s.textContent);s.textContent!==p&&(lt(e.removed,{element:s.cloneNode()}),s.textContent=p)}return oe(N.afterSanitizeElements,s,null),je(s,l)},Sr=function(s,l,c){if(nr[l]||br(l,s)||ar&&(l==="id"||l==="name")&&(c in t||c in Qi))return!1;const p=I[l]||de.attributeCheck instanceof Function&&de.attributeCheck(l,s);return Qt&&V(Wi,l)||rr&&V(Gi,l)?!0:p?hr[l]||V(tr,ut(c,er,""))||(l==="src"||l==="xlink:href"||l==="href")&&s!=="script"&&ni(c,"data:")===0&&dr[s]||ir&&!V(Yi,ut(c,er,""))?!0:!c:Tr(s)&&kt(se.tagNameCheck,s)&&kt(se.attributeNameCheck,l,s)||l==="is"&&se.allowCustomizedBuiltInElements&&kt(se.tagNameCheck,c)},ls=R({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Tr=function(s){return!ls[ct(s)]&&V(qi,s)},us=function(s,l,c,p){if(G&&typeof w=="object"&&typeof w.getAttributeType=="function"&&!c)switch(w.getAttributeType(s,l)){case"TrustedHTML":return De(p);case"TrustedScriptURL":return Pi(p)}return p},ds=function(s,l,c,p){try{return c?s.setAttributeNS(c,l,p):s.setAttribute(l,p),Mt(s)?(he(s),!1):!0}catch{return $e(l,s),!1}},Rr=function(s,l){if(oe(N.beforeSanitizeAttributes,s,null),je(s,l))return;const c=s.attributes;if(!c||Mt(s))return;I=$r(N.uponSanitizeAttribute,I,Jt,At);const p={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0};let b=c.length;const E=H(s.nodeName);for(;b--;){const T=c[b],P=T.name,ee=T.namespaceURI,K=T.value,Ve=H(P),hn=K;let W=P==="value"?hn:ma(hn),xr=!1;if(p.attrName=Ve,p.attrValue=W,p.keepAttr=!0,p.forceKeepAttr=void 0,oe(N.uponSanitizeAttribute,s,p),W=p.attrValue,or&&(Ve==="id"||Ve==="name")&&ni(W,lr)!==0&&($e(P,s,T),W=lr+W,xr=!0),_e&&V(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,W)){$e(P,s,T);continue}if(Ve==="attributename"&&ti(W,"href")){$e(P,s,T);continue}if(!p.forceKeepAttr){if(!p.keepAttr){$e(P,s,T);continue}if(!sr&&V(Oa,W)){$e(P,s,T);continue}if(ce&&(W=Ct(W)),!Sr(E,Ve,W)){$e(P,s,T);continue}W=us(E,Ve,ee,W),W!==hn&&ds(s,P,ee,W)&&xr&&ei(e.removed)}}oe(N.afterSanitizeAttributes,s,null),je(s,l)},Lt=function(s){let l=null;const c=Ar(s);for(oe(N.beforeSanitizeShadowDOM,s,null);l=c.nextNode();)if(oe(N.uponSanitizeShadowNode,l,null),Er(l,s),Rr(l,s),ze(l.content)&&Lt(l.content),tt(l)===Z.element){const p=Xn(l);ze(p)&&(cn(p),Lt(p))}oe(N.afterSanitizeShadowDOM,s,null)},cn=function(s){const l=[{node:s,shadow:null}];for(;l.length>0;){const c=l.pop();if(c.shadow){Lt(c.shadow);continue}const p=c.node,b=tt(p)===Z.element,E=Ne(p);if(E)for(let T=E.length-1;T>=0;--T)l.push({node:E[T],shadow:null});if(b){const T=Ie?Ie(p):null;if(typeof T=="string"&&H(T)==="template"){const P=p.content;ze(P)&&l.push({node:P,shadow:null})}}if(b){const T=Xn(p);ze(T)&&l.push({node:null,shadow:T},{node:T,shadow:null})}}};return e.sanitize=function(f){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,c=null,p=null,b=null;if(sn=!f,sn&&(f="<!-->"),typeof f!="string"&&!st(f)&&(f=ba(f),typeof f!="string"))throw pe("dirty is not a string, aborting");if(!e.isSupported)return f;en?(O=_t,I=At):un(s),(N.uponSanitizeElement.length>0||N.uponSanitizeAttribute.length>0)&&(O=J(O)),N.uponSanitizeAttribute.length>0&&(I=J(I)),e.removed=[];const E=rn&&typeof f!="string"&&st(f);if(E){ss(f);const ee=qt(f);if(typeof ee=="string"){const K=H(ee);if(!O[K]||rt[K])throw Rt(f),pe("root node is forbidden and cannot be sanitized in-place")}if(Mt(f))throw Rt(f),pe("root node is clobbered and cannot be sanitized in-place");try{cn(f)}catch(K){throw Rt(f),K}}else if(st(f))l=_r("<!---->"),c=l.ownerDocument.importNode(f,!0),c.nodeType===Z.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?l=c:l.appendChild(c),cn(l);else{if(!Pe&&!ce&&!Ae&&f.indexOf("<")===-1)return G&&Et?De(f):f;if(l=_r(f),!l)return Pe?null:Et?be:""}l&&tn&&he(l.firstChild);const T=E?f:l;try{const ee=Ar(T);for(;p=ee.nextNode();)Er(p,T),Rr(p,T),ze(p.content)&&Lt(p.content)}catch(ee){throw E&&(Rt(f),Te(e.removed,K=>{K.element&&xt(K.element)})),ee}if(E){let ee=!1;if(Te(e.removed,K=>{K.element&&(K.element===f&&(ee=!0),xt(K.element))}),ee)throw pe("a node selected for removal could not be safely returned; refusing to sanitize in place");return ce&&dn(f),f}if(Pe){if(ce&&dn(l),$t)for(b=Hi.call(l.ownerDocument);l.firstChild;)b.appendChild(l.firstChild);else b=l;return(I.shadowroot||I.shadowrootmode)&&(b=Fi.call(n,b,!0)),b}let P=Ae?l.outerHTML:l.innerHTML;return Ae&&O["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&V(ka,l.ownerDocument.doctype.name)&&(P="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+P),ce&&(P=Ct(P)),G&&Et?De(P):P},e.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};un(f),en=!0,_t=O,At=I},e.clearConfig=function(){Fe=null,en=!1,_t=null,At=null,G=Kt,be=""},e.isValidAttribute=function(f,s,l){Fe||un({});const c=H(f),p=H(s);return Sr(c,p,l)},e.addHook=function(f,s){typeof s=="function"&&Y(N,f)&&lt(N[f],s)},e.removeHook=function(f,s){if(Y(N,f)){if(s!==void 0){const l=fa(N[f],s);return l===-1?void 0:pa(N[f],l,1)[0]}return ei(N[f])}},e.removeHooks=function(f){Y(N,f)&&(N[f]=[])},e.removeAllHooks=function(){N=hi()},e}var Gn=Ii();const fi=L`var(--white, #fff)`,Ha=L`var(--ia-theme-link-color, #4b64ff)`,Ua=L`var(--primaryDisableCTAFill, #767676)`,Fa=L`var(--secondaryCTABorder, #999)`,za=L`var(--primaryCTAFill, #194880)`,Mn=L`var(--primaryCTAFillRGB, 25, 72, 128)`,ja=L`var(--primaryCTABorder, #c5d1df)`,Va=L`var(--primaryErrorCTAFill, #d9534f)`,kn=L`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Wa=L`var(--primaryErrorCTABorder, #d43f3a)`,Ga=L`var(--secondaryCTAFill, #333)`,Ln=L`var(--secondaryCTAFillRGB, 51, 51, 51)`,Ya=L`var(--primaryCTABorder, #979797)`,qa=L`var(---primaryWarningFill, #ee8950)`,Nn=L`var(--primaryWarningFillRGB, 238, 137, 80)`,Ka=L`var(--primaryWarningBorder, #ec7939)`,Di=L`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${fi};
    line-height: normal;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    border: 1px solid transparent;
    white-space: nowrap;
    appearance: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    transition: all 0.1s ease 0s;
    vertical-align: middle;
    padding: 0 3rem;
    outline-color: ${fi};
    outline-offset: -4px;
    user-select: none;
    text-decoration: none;
    width: fit-content;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
  }
  .ia-button:focus-visible {
    outline-style: double;
  }
  .ia-button:disabled {
    cursor: not-allowed;
    background-color: ${Ua};
    border: 1px solid ${Fa};
  }
  .ia-button.transparent {
    background-color: transparent;
  }

  .ia-button.primary:disabled,
  .ia-button.danger:disabled,
  .ia-button.warning:disabled,
  .ia-button.dark:disabled {
    opacity: 0.5;
  }

  .ia-button.primary {
    background-color: ${za};
    border-color: ${ja};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Mn}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Mn}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Mn}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Va};
    border-color: ${Wa};
  }
  .ia-button.danger:hover {
    background-color: rgba(${kn}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${kn}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${kn}, 0.7);
  }

  .ia-button.warning {
    background-color: ${qa};
    border-color: ${Ka};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Nn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Nn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Nn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Ga};
    border-color: ${Ya};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Ln}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Ln}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Ln}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Ha};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;L`
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    border: 0 !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    user-select: none !important;
  }
`;var pi;(function(i){i.processing="processing",i.complete="complete"})(pi||(pi={}));let Yn=class extends ue{constructor(){super(...arguments),this.mode="processing"}render(){return _`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=L`var(--activityIndicatorCheckmarkColor, #31A481)`,t=L`var(--activityIndicatorCompletedRingColor, #31A481)`,n=L`var(--activityIndicatorLoadingRingColor, #333333)`,r=L`var(--activityIndicatorLoadingDotColor, #333333)`;return L`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${n};
      }

      #activity-dots {
        fill: ${r};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}};u([A({type:String})],Yn.prototype,"mode",void 0);Yn=u([yt("ia-activity-indicator")],Yn);const Xa=Vt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Za=Vt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ja=i=>i??U,Qa=Vt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function mi(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return _`<span title="${i}">${t}</span>`}const eo=["a"];function to(i){return Gn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Gn.sanitize(i,{ALLOWED_TAGS:eo})}function no(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return ro(i,n,e)}function ro(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const o=i.indexOf("</a>",e),h=o-t<=20;if(h&&i.length===o+4)return i;if(o!==-1&&h)n=i.slice(0,o+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const io=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function so(i){return i.replace(/href="([^"]+)"/,(n,r)=>`href="${r.replace(".","__DOT__")}"`).replace(io,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function ao(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const oo=Vt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let q=class extends ue{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?_`
          <article
            class="review"
            id=${this.generateDomId()}
            tabindex=${Ja(this.hasReviewerLink?void 0:"-1")}
          >
            ${this.canDelete?_`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${oo}
                  </button>
                `:S}
            <div class="top-line">
              <b>${x("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${x("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?_`<i>${x(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:_`
          <div class="error">
            ${x("This review cannot be displayed at this time.")}
          </div>
        `}focus(e){var t,n;(n=(t=this.reviewerLink)!==null&&t!==void 0?t:this.reviewArticle)===null||n===void 0||n.focus(e)}get hasReviewerLink(){var e;return!!(!((e=this.review)===null||e===void 0)&&e.reviewer_itemname)}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return S;const n=to(t),r=this.truncateContent(n,this.maxBodyLength);return _`${ki(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,a,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(a=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?S:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return _`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${x("More...")}
      </button>
    `}get lessButtonTemplate(){return _`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${x("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.hasReviewerLink?_`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${mi(this.review.reviewer)}
            </a>
          `:_`${mi(this.review.reviewer)}`:S}get starsTemplate(){return!this.review||!this.review.stars?S:_`
      <div
        class="review-stars"
        title="${x(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>_`<div class="review-star">${Qa}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return S;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return x(`${a} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:no(e,t)}prepReview(e){return ao(so(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(x("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return L`
      :host {
        font-family: var(
          --ia-font-stack,
          'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif
        );

        font-size: inherit;
        --container-bg-color: #fbfbfd;
        --container-border-color: #999999;
      }

      .review {
        position: relative;
        padding-right: 30px;
      }

      .error {
        color: var(--error-color, #cc0000);
      }

      .top-line {
        margin-bottom: 0.5rem;
      }

      .top-line > * {
        display: inline-block;
      }

      .review-star {
        width: 1rem;
        display: inline-block;
      }

      .simple-link,
      .body a {
        color: var(--link-color, #4b64ff);
        text-decoration: none;
        background: transparent;
        border: none;
        padding: 0px;
      }

      .simple-link:hover,
      .body a:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .subject {
        margin-bottom: 0.5rem;
      }

      .delete-btn {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        background: none;
        border: 0;
      }

      .delete-btn:hover {
        cursor: pointer;
      }

      .delete-icon {
        width: 20px;
        mix-blend-mode: multiply;
      }
    `}};u([A({type:Object})],q.prototype,"review",void 0);u([A({type:String})],q.prototype,"identifier",void 0);u([A({type:Number})],q.prototype,"maxSubjectLength",void 0);u([A({type:Number})],q.prototype,"maxBodyLength",void 0);u([A({type:String})],q.prototype,"baseHost",void 0);u([A({type:String})],q.prototype,"csrfToken",void 0);u([A({type:Boolean})],q.prototype,"canDelete",void 0);u([A({type:Boolean})],q.prototype,"bypassTruncation",void 0);u([D()],q.prototype,"showTruncatedContent",void 0);u([D()],q.prototype,"deleteMsg",void 0);u([Gt(".reviewer-link")],q.prototype,"reviewerLink",void 0);u([Gt("article.review")],q.prototype,"reviewArticle",void 0);q=u([yt("ia-review")],q);let B=class extends ue{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return _`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:_`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,a,o,h,d,m;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(a=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(m=(d=(h=this.oldReview)===null||h===void 0?void 0:h.reviewbody)===null||d===void 0?void 0:d.length)!==null&&m!==void 0?m:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?_`
          <div class="unrecoverable-error">
            <span class="error-msg">${x(this.unrecoverableError)}</span>
          </div>
        `:S}get recoverableErrorTemplate(){return this.recoverableError?_`
          <div class="recoverable-error">
            ${ki(this.sanitizeErrorMsg(x(this.recoverableError)))}
          </div>
        `:S}get recaptchaMessageTemplate(){return this.bypassRecaptcha?S:_`
      <span class="recaptcha-disclaimer"
        >${x(_`This site is protected by reCAPTCHA and the Google
            <a
              target="_blank"
              class="inline-link"
              href="https://policies.google.com/privacy"
              >Privacy Policy</a
            >
            and
            <a
              target="_blank"
              class="inline-link"
              href="https://policies.google.com/terms"
              >Terms of Service</a
            >
            apply.`)}</span
      >
    `}get starsInputTemplate(){return _`
      <div class="form-heading rating">
        <label for="stars-field">${x("Rating (optional)")}</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars.toString()}
        required
      />
      <div class="stars">
        ${[1,2,3,4,5].map(e=>this.renderStar(e))}
        <button
          type="button"
          class="clear-stars-btn"
          @click=${this.handleClearBtnClicked}
        >
          ${x("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return _`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${x("Subject")}</label>
        ${this.maxSubjectLength?_`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:S}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?_`
            <div class="input-error">
              ${x(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:S}</div></span>
    `}get bodyInputTemplate(){var e,t;return _`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${x("Review")}</label>
          ${this.maxBodyLength?_`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:S}
        </div>
        <textarea
          name="field_reviewbody"
          id="field_reviewbody"
          .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
          rows="10"
          cols="50"
          required
          @input=${this.handleBodyChanged}
        ></textarea>
        ${this.maxBodyLength?_`
              <div class="input-error">
                ${x(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:S}
      </span>
    `}get hiddenInputsTemplate(){return _`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?_`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:S}
    `}get actionButtonsTemplate(){return _`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${x("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?_`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:x("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=x(`Rate ${e>1?`${e} stars`:"1 star"}`);return _`
      <button
        class="star star-${e}"
        title=${t?x("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?Xa:Za}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return Gn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,o;const h=new Date().toDateString();return new ne({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:h,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&o!==void 0?o:h})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Di,L`
        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 15px;
        }

        .form-heading.rating {
          padding-top: 0;
        }

        .form-heading label {
          font-size: 1.6rem;
          font-weight: bold;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
        }

        textarea,
        input[type='text'],
        .unrecoverable-error {
          padding: 5px;
          width: calc(100% - 10px);
          font-family: inherit;
          border-radius: 5px;
          border: 1px solid var(--container-border-color, #999999);
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--container-error-color, #ea0202);
        }

        .input-box.error .char-count,
        .input-error,
        .unrecoverable-error,
        .recoverable-error {
          color: var(--container-error-color, #ea0202);
        }

        .input-error {
          display: none;
        }

        .input-box.error .input-error {
          display: block;
          text-align: right;
          padding-top: 5px;
        }

        .inline-link {
          color: var(--container-link-color, #4f65f5);
          text-decoration: none;
        }

        .inline-link:hover {
          text-decoration: underline;
        }

        .stars {
          display: flex;
          flex-direction: row;
          gap: 2px;
          align-items: center;
        }

        .star {
          all: unset;
          height: 30px;
          width: 30px;
        }

        .star:hover {
          cursor: pointer;
        }

        .clear-stars-btn,
        .recoverable-error a {
          padding: 0 5px;
          color: var(--container-link-color, #4f65f5);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 5px;
        }

        .clear-stars-btn:hover,
        .recoverable-error a:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .action-btns {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 15px;
        }

        .ia-button:disabled {
          opacity: 0.75;
        }

        .ia-button:disabled:hover {
          cursor: not-allowed;
        }

        .unrecoverable-error {
          min-height: 50px;
          padding: 5px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: var(--container-bg-color, #fbfbfd);
        }

        .loading-indicator {
          display: block;
          width: 20px;
          height: 20px;
          margin-top: 2px;
          --activityIndicatorLoadingRingColor: #fff;
          --activityIndicatorLoadingDotColor: #fff;
        }

        .recaptcha-disclaimer {
          font-size: 1.2rem;
        }

        @media only screen and (max-width: 350px) {
          .action-btns {
            flex-direction: column-reverse;
            align-items: center;
          }
        }
      `]}};u([A({type:String})],B.prototype,"identifier",void 0);u([A({type:String})],B.prototype,"token",void 0);u([A({type:String})],B.prototype,"baseHost",void 0);u([A({type:String})],B.prototype,"endpointPath",void 0);u([A({type:String})],B.prototype,"submitterScreenname",void 0);u([A({type:String})],B.prototype,"submitterItemname",void 0);u([A({type:Object})],B.prototype,"oldReview",void 0);u([A({type:String})],B.prototype,"unrecoverableError",void 0);u([A({type:Number})],B.prototype,"maxSubjectLength",void 0);u([A({type:Number})],B.prototype,"maxBodyLength",void 0);u([A({type:Object})],B.prototype,"fetchHandler",void 0);u([A({type:Object})],B.prototype,"recaptchaManager",void 0);u([A({type:Boolean})],B.prototype,"bypassRecaptcha",void 0);u([D()],B.prototype,"currentStars",void 0);u([D()],B.prototype,"currentSubjectLength",void 0);u([D()],B.prototype,"currentBodyLength",void 0);u([D()],B.prototype,"recoverableError",void 0);u([D()],B.prototype,"formCanSubmit",void 0);u([D()],B.prototype,"submissionInProgress",void 0);u([Gt("#review-form")],B.prototype,"reviewForm",void 0);B=u([yt("ia-review-form")],B);class lo{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(o=>{const h=n[o];r.searchParams.append(o,h)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class uo{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class co{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new lo,this.analyticsHelpers=new uo(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function ho(i){return new Promise(e=>setTimeout(e,i))}class fo{constructor(e){this.analyticsHandler=new co({enableAnalytics:!0}),this.sleep=ho,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class po{constructor(e){this.fetchRetrier=new fo,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,o]of Object.entries(t))r.searchParams.set(a,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let M=class extends ue{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.maxInitialReviews=5,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new po,this.displayReviewForm=!1,this.showAllReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:_`
      <div class="reviews-list">
        ${this.reviewsFrozen?_`<div class="message">
              ${x("Reviews can no longer be added to this item.")}
            </div>`:S}
        ${this.editableCurrentReviewTemplate}
        ${this.visibleReviews.map(e=>this.renderReview(e))}
        ${this.showMoreButtonTemplate}
      </div>
    `}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0)}get visibleReviews(){return this.showAllReviews||this.displayReviewsByDefault?this.filteredReviews:this.filteredReviews.slice(0,this.maxInitialReviews)}get reviewsDisabledTemplate(){return _`<div class="message">
      ${x("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?_`
        <div class="message">
          ${x("Reviews cannot be added to this item.")}
        </div>
      `:_`
      <div class="message">
        ${x("There are no reviews yet.")}
        ${x(_`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get showMoreButtonTemplate(){const e=this.filteredReviews.length-this.visibleReviews.length;return e<=0?S:_`
      <button
        class="ia-button link show-more-btn"
        @click=${this.showMoreReviews}
      >
        ${x(e===1?"Show 1 more review":Xs`Show ${e} more reviews`)}
      </button>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?S:_`<div class="own-review-container">
      ${this.displayReviewForm?_`<ia-review-form
            .identifier=${this.identifier}
            .oldReview=${this.currentReview}
            .baseHost=${this.baseHost}
            .endpointPath=${this.endpointPath}
            .submitterItemname=${this.submitterItemname}
            .submitterScreenname=${this.submitterScreenname}
            .maxSubjectLength=${this.maxSubjectLength}
            .maxBodyLength=${this.maxBodyLength}
            .token=${this.token}
            .unrecoverableError=${this.reviewSubmissionError}
            .fetchHandler=${this.fetchHandler}
            .recaptchaManager=${this.recaptchaActivated?this.recaptchaManager:void 0}
            ?bypassRecaptcha=${this.bypassRecaptcha}
            @reviewUpdated=${this.handleReviewUpdate}
            @reviewEditCanceled=${this.handleEditCanceled}
          ></ia-review-form>`:this.renderReview(this.currentReview)}
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{n.reviewer_itemname!==this.submitterItemname?t.push(n):e||(e=n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?_`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:S}async showMoreReviews(){var e;const t=this.visibleReviews.length;this.showAllReviews=!0,await this.updateComplete;const n=(e=this.listedReviews)===null||e===void 0?void 0:e[t];await(n==null?void 0:n.updateComplete),n==null||n.focus()}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1}static get styles(){return[Di,L`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .own-review-container {
          --error-color: var(--container-error-color, #ea0202);
          --link-color: var(--container-link-color, #4f65f5);
          --container-error-color: #ea0202;
          --container-link-color: #4f65f5;
          --container-bg-color: #fbfbfd;
          --container-border-color: #999999;

          border: 2px solid var(--container-border-color, #999999);
          border-radius: 5px;
          background-color: var(--container-bg-color, #fbfbfd);
          padding: 10px;
        }

        .message {
          font-weight: 200;
        }

        .message .ia-button {
          display: inline;
          vertical-align: baseline;
          padding: 0;
          font-weight: 600;
        }

        /* Two classes, to outrank .ia-button.link's padding */
        .reviews-list .show-more-btn {
          padding: 0;
          font-weight: 600;
          outline-color: currentColor;
          outline-offset: 2px;
        }
      `]}};u([A({type:String})],M.prototype,"identifier",void 0);u([A({type:Array})],M.prototype,"reviews",void 0);u([A({type:Boolean})],M.prototype,"reviewsDisabled",void 0);u([A({type:Boolean})],M.prototype,"reviewsFrozen",void 0);u([A({type:Boolean})],M.prototype,"canDelete",void 0);u([A({type:Boolean})],M.prototype,"displayReviewsByDefault",void 0);u([A({type:Number})],M.prototype,"maxInitialReviews",void 0);u([A({type:Number})],M.prototype,"maxSubjectLength",void 0);u([A({type:Number})],M.prototype,"maxBodyLength",void 0);u([A({type:String})],M.prototype,"baseHost",void 0);u([A({type:String})],M.prototype,"token",void 0);u([A({type:String})],M.prototype,"endpointPath",void 0);u([A({type:String})],M.prototype,"submitterScreenname",void 0);u([A({type:String})],M.prototype,"submitterItemname",void 0);u([A({type:Object})],M.prototype,"recaptchaManager",void 0);u([A({type:Boolean})],M.prototype,"bypassRecaptcha",void 0);u([A({type:String})],M.prototype,"reviewSubmissionError",void 0);u([A({type:Boolean})],M.prototype,"reviewAddEditRequested",void 0);u([A({type:Object})],M.prototype,"fetchHandler",void 0);u([D()],M.prototype,"displayReviewForm",void 0);u([D()],M.prototype,"showAllReviews",void 0);u([D()],M.prototype,"filteredReviews",void 0);u([D()],M.prototype,"currentReview",void 0);u([D()],M.prototype,"reviewsCount",void 0);u([D()],M.prototype,"recaptchaActivated",void 0);u([Is(".reviews-list > ia-review")],M.prototype,"listedReviews",void 0);M=u([yt("ia-reviews")],M);class mo{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let Q=class extends ue{constructor(){super(...arguments),this.mockOldReview=new ne({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new ne({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new ne({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new ne({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new ne({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new ne({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.manyReviews=Array.from({length:8},(e,t)=>new ne({stars:t%5+1,reviewtitle:`Extra review ${t+1}`,reviewbody:"Here are some more thoughts on this item.",reviewer:`Reviewer ${t+1}`,reviewdate:`03/${String(28-t).padStart(2,"0")}/2025`,createdate:`03/${String(28-t).padStart(2,"0")}/2025`,reviewer_itemname:`@reviewer-${t+1}`})),this.fetchHandler=new mo,this.mockRecaptchaManager=new qs({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.useManyReviews=!1,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return _` <h2>General settings</h2>
      <button
        @click=${()=>this.useExistingReviews=!this.useExistingReviews}
      >
        ${this.useExistingReviews?"Remove":"Show"} existing reviews
      </button>
      <button @click=${()=>this.useManyReviews=!this.useManyReviews}>
        ${this.useManyReviews?"Use few":"Use many"} reviews
      </button>
      <button @click=${()=>this.reviewsDisabled=!this.reviewsDisabled}>
        ${this.reviewsDisabled?"Enable":"Disable"} reviews
      </button>
      <button @click=${()=>this.reviewsFrozen=!this.reviewsFrozen}>
        ${this.reviewsFrozen?"Unfreeze":"Freeze"} reviews
      </button>
      <button @click=${()=>this.allowDeletion=!this.allowDeletion}>
        ${this.allowDeletion?"Prevent":"Allow"} deletion
      </button>
      <h2>Review form settings</h2>
      <button
        @click=${()=>this.unrecoverableError=!this.unrecoverableError}
      >
        ${this.unrecoverableError?"Hide":"Show"} unrecoverable error
      </button>
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <button @click=${()=>this.bypassRecaptcha=!this.bypassRecaptcha}>
        ${this.bypassRecaptcha?"Enable":"Bypass"} ReCaptcha
      </button>
      <h2>Own review settings</h2>
      ${this.renderReviewToggle(this.longReview,"long review")}
      ${this.renderReviewToggle(this.reviewWithLink,"review with link")}
      ${this.renderReviewToggle(this.reviewWithTextLink,"review with text link")}
      <br />
      <br />
      <hr />
      <button @click=${()=>this.reviewsComponent.displayReviewForm=!0}>
        Add or edit review
      </button>
      <div class="container">
        <ia-reviews
          .identifier=${"goody"}
          .reviews=${this.existingReviews}
          .recaptchaManager=${this.mockRecaptchaManager}
          .submitterItemname=${"@foo-bar"}
          .submitterScreenname=${"Foo Bar"}
          .reviewSubmissionError=${this.unrecoverableError?"You must be logged in to write reviews.":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .fetchHandler=${this.fetchHandler}
          ?canDelete=${this.allowDeletion}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?reviewsDisabled=${this.reviewsDisabled}
          ?reviewsFrozen=${this.reviewsFrozen}
        ></ia-reviews>
      </div>`}get existingReviews(){return this.useExistingReviews?(this.useManyReviews?this.reviews.concat(this.manyReviews):this.reviews).concat(this.review):[]}renderReviewToggle(e,t){return _`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};Q.styles=L`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
      margin-top: 50px;
    }

    h2,
    textarea {
      font-family: 'Helvetica', sans-serif;
    }

    .review-body-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .review-body-form textarea {
      width: 400px;
      height: 100px;
    }
  `;u([D()],Q.prototype,"bypassRecaptcha",void 0);u([D()],Q.prototype,"unrecoverableError",void 0);u([D()],Q.prototype,"useCharCounts",void 0);u([D()],Q.prototype,"allowDeletion",void 0);u([D()],Q.prototype,"useExistingReviews",void 0);u([D()],Q.prototype,"useManyReviews",void 0);u([D()],Q.prototype,"review",void 0);u([D()],Q.prototype,"reviewsDisabled",void 0);u([D()],Q.prototype,"reviewsFrozen",void 0);u([Gt("ia-reviews")],Q.prototype,"reviewsComponent",void 0);Q=u([yt("app-root")],Q);
