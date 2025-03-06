(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function o(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,ge=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),$e=new WeakMap;let Ue=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=$e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&$e.set(t,e))}return e}toString(){return this.cssText}};const Ie=a=>new Ue(typeof a=="string"?a:a+"",void 0,me),m=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[i+1],a[0]);return new Ue(t,a,me)},je=(a,e)=>{if(ge)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=J.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,a.appendChild(r)}},be=ge?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ie(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qe,defineProperty:We,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Ke,getOwnPropertySymbols:Je,getPrototypeOf:Ze}=Object,x=globalThis,ve=x.trustedTypes,Qe=ve?ve.emptyScript:"",re=x.reactiveElementPolyfillSupport,F=(a,e)=>a,Z={toAttribute(a,e){switch(e){case Boolean:a=a?Qe:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ye=(a,e)=>!qe(a,e),Me={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ye};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),x.litPropertyMetadata??(x.litPropertyMetadata=new WeakMap);let N=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Me){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&We(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=Ge(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return n==null?void 0:n.call(this)},set(s){const c=n==null?void 0:n.call(this);i.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Me}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=Ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,r=[...Ke(t),...Je(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(be(n))}else e!==void 0&&t.push(be(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Z).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const s=r.getPropertyOptions(n),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Z;this._$Em=n,this[n]=c.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??ye)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[F("elementProperties")]=new Map,N[F("finalized")]=new Map,re==null||re({ReactiveElement:N}),(x.reactiveElementVersions??(x.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,Q=D.trustedTypes,Ae=Q?Q.createPolicy("lit-html",{createHTML:a=>a}):void 0,Oe="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Be="?"+E,Xe=`<${Be}>`,T=document,L=()=>T.createComment(""),I=a=>a===null||typeof a!="object"&&typeof a!="function",_e=Array.isArray,Ye=a=>_e(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ee=/>/g,P=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,Ce=/"/g,He=/^(?:script|style|textarea|title)$/i,ze=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),_=ze(1),Fe=ze(2),O=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Pe=new WeakMap,k=T.createTreeWalker(T,129);function De(a,e){if(!_e(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ae!==void 0?Ae.createHTML(e):e}const et=(a,e)=>{const t=a.length-1,r=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=z;for(let c=0;c<t;c++){const d=a[c];let f,g,h=-1,b=0;for(;b<d.length&&(s.lastIndex=b,g=s.exec(d),g!==null);)b=s.lastIndex,s===z?g[1]==="!--"?s=Se:g[1]!==void 0?s=Ee:g[2]!==void 0?(He.test(g[2])&&(n=RegExp("</"+g[2],"g")),s=P):g[3]!==void 0&&(s=P):s===P?g[0]===">"?(s=n??z,h=-1):g[1]===void 0?h=-2:(h=s.lastIndex-g[2].length,f=g[1],s=g[3]===void 0?P:g[3]==='"'?Ce:xe):s===Ce||s===xe?s=P:s===Se||s===Ee?s=z:(s=P,n=void 0);const M=s===P&&a[c+1].startsWith("/>")?" ":"";i+=s===z?d+Xe:h>=0?(r.push(f),d.slice(0,h)+Oe+d.slice(h)+E+M):d+E+(h===-2?c:M)}return[De(a,i+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class j{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0;const c=e.length-1,d=this.parts,[f,g]=et(e,t);if(this.el=j.createElement(f,r),k.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=k.nextNode())!==null&&d.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(Oe)){const b=g[s++],M=n.getAttribute(h).split(E),K=/([.?@])?(.*)/.exec(b);d.push({type:1,index:i,name:K[2],strings:M,ctor:K[1]==="."?rt:K[1]==="?"?nt:K[1]==="@"?at:te}),n.removeAttribute(h)}else h.startsWith(E)&&(d.push({type:6,index:i}),n.removeAttribute(h));if(He.test(n.tagName)){const h=n.textContent.split(E),b=h.length-1;if(b>0){n.textContent=Q?Q.emptyScript:"";for(let M=0;M<b;M++)n.append(h[M],L()),k.nextNode(),d.push({type:2,index:++i});n.append(h[b],L())}}}else if(n.nodeType===8)if(n.data===Be)d.push({type:2,index:i});else{let h=-1;for(;(h=n.data.indexOf(E,h+1))!==-1;)d.push({type:7,index:i}),h+=E.length-1}i++}}static createElement(e,t){const r=T.createElement("template");return r.innerHTML=e,r}}function B(a,e,t=a,r){var s,c;if(e===O)return e;let n=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const i=I(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((c=n==null?void 0:n._$AO)==null||c.call(n,!1),i===void 0?n=void 0:(n=new i(a),n._$AT(a,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=n:t._$Cl=n),n!==void 0&&(e=B(a,n._$AS(a,e.values),n,r)),e}class tt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((e==null?void 0:e.creationScope)??T).importNode(t,!0);k.currentNode=n;let i=k.nextNode(),s=0,c=0,d=r[0];for(;d!==void 0;){if(s===d.index){let f;d.type===2?f=new W(i,i.nextSibling,this,e):d.type===1?f=new d.ctor(i,d.name,d.strings,this,e):d.type===6&&(f=new st(i,this,e)),this._$AV.push(f),d=r[++c]}s!==(d==null?void 0:d.index)&&(i=k.nextNode(),s++)}return k.currentNode=T,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class W{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),I(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=j.createElement(De(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{const s=new tt(n,this),c=s.u(this.options);s.p(t),this.T(c),this._$AH=s}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new j(e)),t}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new W(this.O(L()),this.O(L()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}_$AI(e,t=this,r,n){const i=this.strings;let s=!1;if(i===void 0)e=B(this,e,t,0),s=!I(e)||e!==this._$AH&&e!==O,s&&(this._$AH=e);else{const c=e;let d,f;for(e=i[0],d=0;d<i.length-1;d++)f=B(this,c[r+d],t,d),f===O&&(f=this._$AH[d]),s||(s=!I(f)||f!==this._$AH[d]),f===w?e=w:e!==w&&(e+=(f??"")+i[d+1]),this._$AH[d]=f}s&&!n&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class rt extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}class nt extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}}class at extends te{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??w)===O)return;const r=this._$AH,n=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==w&&(r===w||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class st{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const ae=D.litHtmlPolyfillSupport;ae==null||ae(j,W),(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.2.1");const it=(a,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let n=r._$litPart$;if(n===void 0){const i=(t==null?void 0:t.renderBefore)??null;r._$litPart$=n=new W(e.insertBefore(L(),i),i,void 0,t??{})}return n._$AI(a),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let U=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=it(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return O}};var Ne;U._$litElement$=!0,U.finalized=!0,(Ne=globalThis.litElementHydrateSupport)==null||Ne.call(globalThis,{LitElement:U});const se=globalThis.litElementPolyfillSupport;se==null||se({LitElement:U});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:ye},lt=(a=ot,e,t)=>{const{kind:r,metadata:n}=t;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(t.name,a),r==="accessor"){const{name:s}=t;return{set(c){const d=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,d,a)},init(c){return c!==void 0&&this.P(s,void 0,a),c}}}if(r==="setter"){const{name:s}=t;return function(c){const d=this[s];e.call(this,c),this.requestUpdate(s,d,a)}}throw Error("Unsupported decorator location: "+r)};function V(a){return(e,t)=>typeof t=="object"?lt(a,e,t):((r,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(n,i):void 0})(a,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(a){return V({...a,state:!0,attribute:!1})}function l(a){let e,t,r;return e=a,(n,i,s)=>{if(s.value!=null)s.value=ke(s.value,e,t,r);else if(s.get!=null)s.get=ke(s.get,e,t,r);else throw"Only put a Memoize() decorator on a method or get accessor."}}const ie=new Map;function ke(a,e,t=0,r){const n=Symbol("__memoized_map__");return function(...i){let s;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let c=this[n];if(Array.isArray(r))for(const d of r)ie.has(d)?ie.get(d).push(c):ie.set(d,[c]);if(e||i.length>0||t>0){let d;e===!0?d=i.map(h=>h.toString()).join("!"):e?d=e.apply(this,i):d=i[0];const f=`${d}__timestamp`;let g=!1;if(t>0)if(!c.has(f))g=!0;else{let h=c.get(f);g=Date.now()-h>t}c.has(d)&&!g?s=c.get(d):(s=a.apply(this,i),c.set(d,s),t>0&&c.set(f,Date.now()))}else{const d=this;c.has(d)?s=c.get(d):(s=a.apply(this,i),c.set(d,s))}return s}}class ce{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}ce.shared=new ce;class C{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}C.shared=new C;class X{parseValue(e){return C.shared.parseValue(e)}}X.shared=new X;class q{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const r=Date.parse(t);if(Number.isNaN(r))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}q.shared=new q;class Y{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let r;return t.length===1?r=this.parseNumberFormat(t[0]):r=this.parseColonSeparatedFormat(t),r}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const r=e.map((n,i)=>{const s=parseFloat(n);if(Number.isNaN(s))return t=!0,0;const d=60**(e.length-1-i);return s*Math.floor(d)}).reduce((n,i)=>n+i,0);return t?void 0:r}}Y.shared=new Y;class he{parseValue(e){if(typeof e=="string")return e}}he.shared=new he;class ut{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let r=[];for(const n of this.separators)if(r=t.split(n),r.length>1)break;return this.parseListValues(r)}parseListValues(e){const r=e.map(i=>i.trim()).map(i=>this.parser.parseValue(i)),n=[];return r.forEach(i=>{i!==void 0&&n.push(i)}),n}}class pe{parseValue(e){if(typeof e=="string")return e}}pe.shared=new pe;class ee{parseValue(e){return String(e)}}ee.shared=new ee;class ${get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(r=>{const n=this.parser.parseValue(r);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}o([l()],$.prototype,"values",null);o([l()],$.prototype,"value",null);class ct extends ${constructor(e){super(ce.shared,e)}}class A extends ${constructor(e){super(q.shared,e)}}class oe extends ${constructor(e){super(Y.shared,e)}}class y extends ${constructor(e){super(C.shared,e)}}class p extends ${constructor(e){super(ee.shared,e)}}class ht extends ${constructor(e){super(pe.shared,e)}}class Re extends ${constructor(e){super(X.shared,e)}}class pt extends ${constructor(e){super(he.shared,e)}}class ft extends ${constructor(e,t){super(t,e)}}class wt extends ft{constructor(e){const t=new ut(ee.shared);super(e,t)}}class u{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new A(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new p(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new y(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new y(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new p(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new p(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Re(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new p(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new p(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new p(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new p(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new A(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new p(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new y(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new oe(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new p(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new y(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new A(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new p(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new p(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new y(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Re(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new p(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new oe(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new p(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new y(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new pt(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new ct(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new p(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new y(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new y(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new p(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new p(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new ht(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new p(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new y(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new A(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new p(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new A(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new oe(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new p(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new p(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new A(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new A(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new A(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new wt(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new p(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new p(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new p(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new y(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new p(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new p(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new y(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new p(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new p(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new y(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new y(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}o([l()],u.prototype,"addeddate",null);o([l()],u.prototype,"audio_codec",null);o([l()],u.prototype,"audio_sample_rate",null);o([l()],u.prototype,"avg_rating",null);o([l()],u.prototype,"collection",null);o([l()],u.prototype,"collections_raw",null);o([l()],u.prototype,"collection_size",null);o([l()],u.prototype,"contributor",null);o([l()],u.prototype,"coverage",null);o([l()],u.prototype,"creator",null);o([l()],u.prototype,"collection_layout",null);o([l()],u.prototype,"date",null);o([l()],u.prototype,"description",null);o([l()],u.prototype,"downloads",null);o([l()],u.prototype,"duration",null);o([l()],u.prototype,"external_identifier",null);o([l()],u.prototype,"files_count",null);o([l()],u.prototype,"indexdate",null);o([l()],u.prototype,"isbn",null);o([l()],u.prototype,"issue",null);o([l()],u.prototype,"item_count",null);o([l()],u.prototype,"item_size",null);o([l()],u.prototype,"language",null);o([l()],u.prototype,"length",null);o([l()],u.prototype,"lineage",null);o([l()],u.prototype,"month",null);o([l()],u.prototype,"mediatype",null);o([l()],u.prototype,"noindex",null);o([l()],u.prototype,"notes",null);o([l()],u.prototype,"num_favorites",null);o([l()],u.prototype,"num_reviews",null);o([l()],u.prototype,"openlibrary_edition",null);o([l()],u.prototype,"openlibrary_work",null);o([l()],u.prototype,"page_progression",null);o([l()],u.prototype,"partner",null);o([l()],u.prototype,"ppi",null);o([l()],u.prototype,"publicdate",null);o([l()],u.prototype,"publisher",null);o([l()],u.prototype,"reviewdate",null);o([l()],u.prototype,"runtime",null);o([l()],u.prototype,"scanner",null);o([l()],u.prototype,"source",null);o([l()],u.prototype,"start_localtime",null);o([l()],u.prototype,"start_time",null);o([l()],u.prototype,"stop_time",null);o([l()],u.prototype,"subject",null);o([l()],u.prototype,"taper",null);o([l()],u.prototype,"title",null);o([l()],u.prototype,"transferer",null);o([l()],u.prototype,"track",null);o([l()],u.prototype,"type",null);o([l()],u.prototype,"uploader",null);o([l()],u.prototype,"utc_offset",null);o([l()],u.prototype,"venue",null);o([l()],u.prototype,"volume",null);o([l()],u.prototype,"week",null);o([l()],u.prototype,"year",null);class H{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?X.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Y.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?C.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?C.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?C.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}o([l()],H.prototype,"size",null);o([l()],H.prototype,"length",null);o([l()],H.prototype,"height",null);o([l()],H.prototype,"width",null);o([l()],H.prototype,"track",null);class G{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?q.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?q.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?C.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}o([l()],G.prototype,"reviewdate",null);o([l()],G.prototype,"createdate",null);o([l()],G.prototype,"stars",null);class gt{constructor(e){var t,r;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(n=>new H(n)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new u(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(r=e.reviews)===null||r===void 0?void 0:r.map(n=>new G(n))}}var R;(function(a){a.networkError="MetadataService.NetworkError",a.itemNotFound="MetadataService.ItemNotFound",a.decodingError="MetadataService.DecodingError",a.searchEngineError="MetadataService.SearchEngineError"})(R||(R={}));class fe extends Error{constructor(e,t,r){super(t),this.name=e,this.type=e,this.details=r}}class mt{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const n=new URL(window.location.href).searchParams.get("scope");n&&(this.requestScope=n)}}async fetchMetadata(e,t){const r=t?`/${t}`:"",n=`https://${this.baseUrl}/metadata/${e}${r}`;return this.fetchUrl(n,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope);let i;try{const s=(r=t==null?void 0:t.requestOptions)!==null&&r!==void 0?r:{credentials:this.includeCredentials?"include":"same-origin"};i=await fetch(n.href,s)}catch(s){const c=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(R.networkError,c)}try{const s=await i.json(),c=s.error;if(c){const d=s.forensics;return this.getErrorResult(R.searchEngineError,c,d)}else return{success:s}}catch(s){const c=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(R.decodingError,c)}}getErrorResult(e,t,r){return{error:new fe(e,t,r)}}}class Te{constructor(e){this.backend=e}async fetchMetadata(e){var t;const r=await this.backend.fetchMetadata(e);return r.error?r:((t=r.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new fe(R.itemNotFound)}:{success:new gt(r.success)}}async fetchMetadataValue(e,t){var r;const n=await this.backend.fetchMetadata(e,t);return n.error?n:((r=n.success)===null||r===void 0?void 0:r.result)===void 0?{error:new fe(R.itemNotFound)}:{success:n.success.result}}}Te.default=new Te(new mt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=a=>typeof a!="string"&&"strTag"in a,_t=(a,e,t)=>{let r=a[0];for(let n=1;n<a.length;n++)r+=e[n-1],r+=a[n];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=a=>yt(a)?_t(a.strings,a.values):a;let S=$t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bt{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let a=0;a<256;a++)(a>>4&15).toString(16)+(a&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vt=new bt;vt.resolve();const Mt=Fe`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,At=Fe`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,Ve=m`var(--white, #fff)`,St=m`var(--primaryDisableCTAFill, #767676)`,Et=m`var(--secondaryCTABorder, #999)`,xt=m`var(--primaryCTAFill, #194880)`,le=m`var(--primaryCTAFillRGB, 25, 72, 128)`,Ct=m`var(--primaryCTABorder, #c5d1df)`,Pt=m`var(--primaryErrorCTAFill, #d9534f)`,de=m`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,kt=m`var(--primaryErrorCTABorder, #d43f3a)`,Rt=m`var(--secondaryCTAFill, #333)`,ue=m`var(--secondaryCTAFillRGB, 51, 51, 51)`,Tt=m`var(--primaryCTABorder, #979797)`,Vt=m`#ee8950`,Nt=m`#ec7939`,Ut=m`
  .ia-button {
    height: 3.5rem;
    min-height: 3rem;
    cursor: pointer;
    color: ${Ve};
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
    padding: 0 1rem;
    outline-color: ${Ve};
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
    pointer-events: none;
    background-color: ${St};
    border: 1px solid ${Et};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${Vt}
    border-color: ${Nt};
  }

  .ia-button.primary {
    background-color: ${xt};
    border-color: ${Ct};
  }
  .ia-button.primary:hover {
    background-color: rgba(${le}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${le}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${le}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Pt};
    border-color: ${kt};
  }
  .ia-button.danger:hover {
    background-color: rgba(${de}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${de}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${de}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Rt};
    border-color: ${Tt};
  }
  .ia-button.dark:hover {
    background-color: rgba(${ue}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${ue}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${ue}, 0.7);
  }
`;let v=class extends U{constructor(){super(...arguments),this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.currentStars=0}render(){return _`<form action="${this.baseHost}${this.endpointPath}">
      ${this.errors?_`<div class="errors">${this.errors.join(" ")}</div>`:w}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate}
      ${this.identifier?_`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:w}
      ${this.token?_`<input
            type="hidden"
            name="field_reviewtoken"
            .value=${this.token}
          />`:w}
      ${this.actionButtonsTemplate}
    </form>`}updated(e){var t;e.has("oldReview")&&(!((t=this.oldReview)===null||t===void 0)&&t.stars)&&(this.currentStars=this.oldReview.stars)}get starsInputTemplate(){return _`
      <div class="form-heading">
        <label for="stars-field">${S("Rating (optional)")}</label>
      </div>
      <input
        type="hidden"
        name="field_stars"
        id="stars-input"
        .value=${this.currentStars}
        required
      />
      <div class="stars">
        ${[1,2,3,4,5].map(e=>this.renderStar(e))}
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          ${S("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return _`<div class="form-heading">
        <label for="subject-input">${S("Subject")}</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        required
      />`}get bodyInputTemplate(){var e,t;return _`<div class="form-heading">
        <label for="body-input">${S("Review")}</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
        rows="10"
        cols="50"
        required
      ></textarea>`}get actionButtonsTemplate(){return _`<div class="action-btns">
      ${this.identifier?_`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${S("Cancel")}
          </a>`:w}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        value="Submit review"
      >
        ${S("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,r=S(`Rate ${e>1?`${e} stars`:"1 star"}`);return _`
      <button
        class="star star-${e}"
        title=${t?S("Clear rating"):r}
        @click=${n=>this.handleStarClicked(n,e)}
      >
        ${e<=this.currentStars?Mt:At}
      </button>
    `}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}static get styles(){return[Ut,m`
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

        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 1.5rem;
          font-size: 1.6rem;
          font-weight: bold;
        }

        label {
          display: inline-block;
          margin-bottom: 5px;
        }

        textarea,
        input[type='text'] {
          padding: 0.5rem;
          width: calc(100% - 1rem);
          font-family: inherit;
        }

        .stars {
          display: flex;
          flex-direction: row;
          gap: 0.2rem;
          align-items: center;
        }

        .star {
          all: unset;
          width: 3rem;
        }

        .star:hover {
          cursor: pointer;
        }

        .clear-stars-btn {
          padding: 0 0.5rem;
          color: var(--ia-link-color, #4b64ff);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 0.5rem;
        }

        .clear-stars-btn:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        .action-btns {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding-top: 1.5rem;
        }
      `]}};o([V({type:String})],v.prototype,"identifier",void 0);o([V({type:String})],v.prototype,"token",void 0);o([V({type:String})],v.prototype,"baseHost",void 0);o([V({type:String})],v.prototype,"endpointPath",void 0);o([V({type:Object})],v.prototype,"oldReview",void 0);o([V({type:Array})],v.prototype,"errors",void 0);o([dt()],v.prototype,"currentStars",void 0);v=o([Le("ia-review-form")],v);const Ot=new G({stars:3,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"foo-bar",reviewdate:"2025-03-03 18:13:36",createdate:"2025-02-25 14:28:19"});let we=class extends U{render(){return _`
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${Ot}
        ></ia-review-form>
      </div>
    `}};we.styles=m`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;we=o([Le("app-root")],we);
