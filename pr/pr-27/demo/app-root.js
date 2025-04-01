(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();function l(i,e,t,r){var n=arguments.length,a=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,r);else for(var d=i.length-1;d>=0;d--)(s=i[d])&&(a=(n<3?s(a):n>3?s(e,t,a):s(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a}function se(i,e,t,r){function n(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function d(h){try{u(r.next(h))}catch(f){s(f)}}function o(h){try{u(r.throw(h))}catch(f){s(f)}}function u(h){h.done?a(h.value):n(h.value).then(d,o)}u((r=r.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=window,ze=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),De=new WeakMap;let gt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&De.set(t,e))}return e}toString(){return this.cssText}};const Bt=i=>new gt(typeof i=="string"?i:i+"",void 0,Fe),$=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,n,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[a+1],i[0]);return new gt(t,i,Fe)},Lt=(i,e)=>{ze?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),n=oe.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,i.appendChild(r)})},We=ze?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Bt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const le=window,Ke=le.trustedTypes,Nt=Ke?Ke.emptyScript:"",qe=le.reactiveElementPolyfillSupport,Ne={toAttribute(i,e){switch(e){case Boolean:i=i?Nt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},mt=(i,e)=>e!==i&&(e==e||i==i),$e={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:mt},Te="finalized";let z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Ep(r,t);n!==void 0&&(this._$Ev.set(n,r),e.push(n))}),e}static createProperty(e,t=$e){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const a=this[e];this[t]=n,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$e}static finalize(){if(this.hasOwnProperty(Te))return!1;this[Te]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(We(n))}else e!==void 0&&t.push(We(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Lt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=$e){var n;const a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){const s=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:Ne).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var r;const n=this.constructor,a=n._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=n.getPropertyOptions(a),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:Ne;this._$El=a,this[a]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||mt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,a)=>this[a]=n),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var a;return(a=n.hostUpdate)===null||a===void 0?void 0:a.call(n)}),this.update(r)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};z[Te]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},qe==null||qe({ReactiveElement:z}),((we=le.reactiveElementVersions)!==null&&we!==void 0?we:le.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be;const de=window,D=de.trustedTypes,Ze=D?D.createPolicy("lit-html",{createHTML:i=>i}):void 0,He="$lit$",B=`lit$${(Math.random()+"").slice(9)}$`,yt="?"+B,Tt=`<${yt}>`,j=document,ue=()=>j.createComment(""),Q=i=>i===null||typeof i!="object"&&typeof i!="function",wt=Array.isArray,Ht=i=>wt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Je=/>/g,H=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,Qe=/"/g,$t=/^(?:script|style|textarea|title)$/i,X=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Xe=new WeakMap,V=j.createTreeWalker(j,129,null,!1);function bt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(e):e}const Pt=(i,e)=>{const t=i.length-1,r=[];let n,a=e===2?"<svg>":"",s=J;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(s.lastIndex=g,h=s.exec(o),h!==null);)g=s.lastIndex,s===J?h[1]==="!--"?s=Ge:h[1]!==void 0?s=Je:h[2]!==void 0?($t.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=H):h[3]!==void 0&&(s=H):s===H?h[0]===">"?(s=n??J,f=-1):h[1]===void 0?f=-2:(f=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?H:h[3]==='"'?Qe:Ye):s===Qe||s===Ye?s=H:s===Ge||s===Je?s=J:(s=H,n=void 0);const w=s===H&&i[d+1].startsWith("/>")?" ":"";a+=s===J?o+Tt:f>=0?(r.push(u),o.slice(0,f)+He+o.slice(f)+B+w):o+B+(f===-2?(r.push(void 0),d):w)}return[bt(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};let Pe=class _t{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,s=0;const d=e.length-1,o=this.parts,[u,h]=Pt(e,t);if(this.el=_t.createElement(u,r),V.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=V.nextNode())!==null&&o.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(He)||g.startsWith(B)){const w=h[s++];if(f.push(g),w!==void 0){const ye=n.getAttribute(w.toLowerCase()+He).split(B),C=/([.?@])?(.*)/.exec(w);o.push({type:1,index:a,name:C[2],strings:ye,ctor:C[1]==="."?Ot:C[1]==="?"?jt:C[1]==="@"?It:ge})}else o.push({type:6,index:a})}for(const g of f)n.removeAttribute(g)}if($t.test(n.tagName)){const f=n.textContent.split(B),g=f.length-1;if(g>0){n.textContent=D?D.emptyScript:"";for(let w=0;w<g;w++)n.append(f[w],ue()),V.nextNode(),o.push({type:2,index:++a});n.append(f[g],ue())}}}else if(n.nodeType===8)if(n.data===yt)o.push({type:2,index:a});else{let f=-1;for(;(f=n.data.indexOf(B,f+1))!==-1;)o.push({type:7,index:a}),f+=B.length-1}a++}}static createElement(e,t){const r=j.createElement("template");return r.innerHTML=e,r}};function W(i,e,t=i,r){var n,a,s,d;if(e===X)return e;let o=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const u=Q(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((a=o==null?void 0:o._$AO)===null||a===void 0||a.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,r)),r!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[r]=o:t._$Cl=o),o!==void 0&&(e=W(i,o._$AS(i,e.values),o,r)),e}let Vt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:j).importNode(r,!0);V.currentNode=a;let s=V.nextNode(),d=0,o=0,u=n[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new vt(s,s.nextSibling,this,e):u.type===1?h=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(h=new zt(s,this,e)),this._$AV.push(h),u=n[++o]}d!==(u==null?void 0:u.index)&&(s=V.nextNode(),d++)}return V.currentNode=j,a}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},vt=class At{constructor(e,t,r,n){var a;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(a=n==null?void 0:n.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),Q(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==X&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ht(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&Q(this._$AH)?this._$AA.nextSibling.data=e:this.$(j.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Pe.createElement(bt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(r);else{const s=new Vt(a,this),d=s.u(this.options);s.v(r),this.$(d),this._$AH=s}}_$AC(e){let t=Xe.get(e.strings);return t===void 0&&Xe.set(e.strings,t=new Pe(e)),t}T(e){wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const a of e)n===t.length?t.push(r=new At(this.k(ue()),this.k(ue()),this,this.options)):r=t[n],r._$AI(a),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ge=class{constructor(e,t,r,n,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const a=this.strings;let s=!1;if(a===void 0)e=W(this,e,t,0),s=!Q(e)||e!==this._$AH&&e!==X,s&&(this._$AH=e);else{const d=e;let o,u;for(e=a[0],o=0;o<a.length-1;o++)u=W(this,d[r+o],t,o),u===X&&(u=this._$AH[o]),s||(s=!Q(u)||u!==this._$AH[o]),u===_?e=_:e!==_&&(e+=(u??"")+a[o+1]),this._$AH[o]=u}s&&!n&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ot=class extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}};const Ut=D?D.emptyScript:"";let jt=class extends ge{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},It=class extends ge{constructor(e,t,r,n,a){super(e,t,r,n,a),this.type=5}_$AI(e,t=this){var r;if((e=(r=W(this,e,t,0))!==null&&r!==void 0?r:_)===X)return;const n=this._$AH,a=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==_&&(n===_||a);a&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},zt=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}};const et=de.litHtmlPolyfillSupport;et==null||et(Pe,vt),((be=de.litHtmlVersions)!==null&&be!==void 0?be:de.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const ce=window,K=ce.trustedTypes,tt=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ve="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+L,Ft=`<${xt}>`,I=document,ee=()=>I.createComment(""),te=i=>i===null||typeof i!="object"&&typeof i!="function",St=Array.isArray,Dt=i=>St(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,nt=/>/g,P=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,at=/"/g,Mt=/^(?:script|style|textarea|title)$/i,Et=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=Et(1),kt=Et(2),q=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),st=new WeakMap,O=I.createTreeWalker(I,129,null,!1);function Ct(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(e):e}const Wt=(i,e)=>{const t=i.length-1,r=[];let n,a=e===2?"<svg>":"",s=Y;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(s.lastIndex=g,h=s.exec(o),h!==null);)g=s.lastIndex,s===Y?h[1]==="!--"?s=rt:h[1]!==void 0?s=nt:h[2]!==void 0?(Mt.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=P):h[3]!==void 0&&(s=P):s===P?h[0]===">"?(s=n??Y,f=-1):h[1]===void 0?f=-2:(f=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?P:h[3]==='"'?at:it):s===at||s===it?s=P:s===rt||s===nt?s=Y:(s=P,n=void 0);const w=s===P&&i[d+1].startsWith("/>")?" ":"";a+=s===Y?o+Ft:f>=0?(r.push(u),o.slice(0,f)+Ve+o.slice(f)+L+w):o+L+(f===-2?(r.push(void 0),d):w)}return[Ct(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class re{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,s=0;const d=e.length-1,o=this.parts,[u,h]=Wt(e,t);if(this.el=re.createElement(u,r),O.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=O.nextNode())!==null&&o.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith(Ve)||g.startsWith(L)){const w=h[s++];if(f.push(g),w!==void 0){const ye=n.getAttribute(w.toLowerCase()+Ve).split(L),C=/([.?@])?(.*)/.exec(w);o.push({type:1,index:a,name:C[2],strings:ye,ctor:C[1]==="."?qt:C[1]==="?"?Gt:C[1]==="@"?Jt:me})}else o.push({type:6,index:a})}for(const g of f)n.removeAttribute(g)}if(Mt.test(n.tagName)){const f=n.textContent.split(L),g=f.length-1;if(g>0){n.textContent=K?K.emptyScript:"";for(let w=0;w<g;w++)n.append(f[w],ee()),O.nextNode(),o.push({type:2,index:++a});n.append(f[g],ee())}}}else if(n.nodeType===8)if(n.data===xt)o.push({type:2,index:a});else{let f=-1;for(;(f=n.data.indexOf(L,f+1))!==-1;)o.push({type:7,index:a}),f+=L.length-1}a++}}static createElement(e,t){const r=I.createElement("template");return r.innerHTML=e,r}}function Z(i,e,t=i,r){var n,a,s,d;if(e===q)return e;let o=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl;const u=te(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((a=o==null?void 0:o._$AO)===null||a===void 0||a.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,r)),r!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[r]=o:t._$Cl=o),o!==void 0&&(e=Z(i,o._$AS(i,e.values),o,r)),e}class Kt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:n}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:I).importNode(r,!0);O.currentNode=a;let s=O.nextNode(),d=0,o=0,u=n[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new ie(s,s.nextSibling,this,e):u.type===1?h=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(h=new Yt(s,this,e)),this._$AV.push(h),u=n[++o]}d!==(u==null?void 0:u.index)&&(s=O.nextNode(),d++)}return O.currentNode=I,a}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ie{constructor(e,t,r,n){var a;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(a=n==null?void 0:n.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),te(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Dt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==y&&te(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=re.createElement(Ct(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(r);else{const s=new Kt(a,this),d=s.u(this.options);s.v(r),this.$(d),this._$AH=s}}_$AC(e){let t=st.get(e.strings);return t===void 0&&st.set(e.strings,t=new re(e)),t}T(e){St(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const a of e)n===t.length?t.push(r=new ie(this.k(ee()),this.k(ee()),this,this.options)):r=t[n],r._$AI(a),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class me{constructor(e,t,r,n,a){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const a=this.strings;let s=!1;if(a===void 0)e=Z(this,e,t,0),s=!te(e)||e!==this._$AH&&e!==q,s&&(this._$AH=e);else{const d=e;let o,u;for(e=a[0],o=0;o<a.length-1;o++)u=Z(this,d[r+o],t,o),u===q&&(u=this._$AH[o]),s||(s=!te(u)||u!==this._$AH[o]),u===y?e=y:e!==y&&(e+=(u??"")+a[o+1]),this._$AH[o]=u}s&&!n&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qt extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const Zt=K?K.emptyScript:"";class Gt extends me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,Zt):this.element.removeAttribute(this.name)}}class Jt extends me{constructor(e,t,r,n,a){super(e,t,r,n,a),this.type=5}_$AI(e,t=this){var r;if((e=(r=Z(this,e,t,0))!==null&&r!==void 0?r:y)===q)return;const n=this._$AH,a=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==y&&(n===y||a);a&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Yt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ot=ce.litHtmlPolyfillSupport;ot==null||ot(re,ie),((ve=ce.litHtmlVersions)!==null&&ve!==void 0?ve:ce.litHtmlVersions=[]).push("2.8.0");const Qt=(i,e,t)=>{var r,n;const a=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let s=a._$litPart$;if(s===void 0){const d=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;a._$litPart$=s=new ie(e.insertBefore(ee(),d),d,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe,Se;class F extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return q}}F.finalized=!0,F._$litElement$=!0,(xe=globalThis.litElementHydrateSupport)===null||xe===void 0||xe.call(globalThis,{LitElement:F});const lt=globalThis.litElementPolyfillSupport;lt==null||lt({LitElement:F});((Se=globalThis.litElementVersions)!==null&&Se!==void 0?Se:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=i=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(i,e):((t,r)=>{const{kind:n,elements:a}=r;return{kind:n,elements:a,finisher(s){customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},er=(i,e,t)=>{e.constructor.createProperty(t,i)};function k(i){return(e,t)=>t!==void 0?er(i,e,t):Xt(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(i){return k({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr=({finisher:i,descriptor:e})=>(t,r)=>{var n;if(r===void 0){const a=(n=t.originalKey)!==null&&n!==void 0?n:t.key,s=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(s.finisher=function(d){i(d,a)}),s}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),i==null||i(a,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rr(i,e){return tr({descriptor:t=>({get(){var n,a;return(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Me;((Me=window.HTMLSlotElement)===null||Me===void 0?void 0:Me.prototype.assignedElements)!=null;function c(i){let e,t,r;return e=i,(n,a,s)=>{if(s.value!=null)s.value=dt(s.value,e,t,r);else if(s.get!=null)s.get=dt(s.get,e,t,r);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ee=new Map;function dt(i,e,t=0,r){const n=Symbol("__memoized_map__");return function(...a){let s;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[n];if(Array.isArray(r))for(const o of r)Ee.has(o)?Ee.get(o).push(d):Ee.set(o,[d]);if(e||a.length>0||t>0){let o;e===!0?o=a.map(f=>f.toString()).join("!"):e?o=e.apply(this,a):o=a[0];const u=`${o}__timestamp`;let h=!1;if(t>0)if(!d.has(u))h=!0;else{let f=d.get(u);h=Date.now()-f>t}d.has(o)&&!h?s=d.get(o):(s=i.apply(this,a),d.set(o,s),t>0&&d.set(u,Date.now()))}else{const o=this;d.has(o)?s=d.get(o):(s=i.apply(this,a),d.set(o,s))}return s}}class Oe{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Oe.shared=new Oe;class N{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}N.shared=new N;class he{parseValue(e){return N.shared.parseValue(e)}}he.shared=new he;class ne{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const r=Date.parse(t);if(Number.isNaN(r))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}ne.shared=new ne;class pe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let r;return t.length===1?r=this.parseNumberFormat(t[0]):r=this.parseColonSeparatedFormat(t),r}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const r=e.map((n,a)=>{const s=parseFloat(n);if(Number.isNaN(s))return t=!0,0;const o=60**(e.length-1-a);return s*Math.floor(o)}).reduce((n,a)=>n+a,0);return t?void 0:r}}pe.shared=new pe;class Ue{parseValue(e){if(typeof e=="string")return e}}Ue.shared=new Ue;class nr{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let r=[];for(const n of this.separators)if(r=t.split(n),r.length>1)break;return this.parseListValues(r)}parseListValues(e){const r=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),n=[];return r.forEach(a=>{a!==void 0&&n.push(a)}),n}}class je{parseValue(e){if(typeof e=="string")return e}}je.shared=new je;class fe{parseValue(e){return String(e)}}fe.shared=new fe;class M{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(r=>{const n=this.parser.parseValue(r);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}l([c()],M.prototype,"values",null);l([c()],M.prototype,"value",null);class ir extends M{constructor(e){super(Oe.shared,e)}}class R extends M{constructor(e){super(ne.shared,e)}}class ke extends M{constructor(e){super(pe.shared,e)}}class A extends M{constructor(e){super(N.shared,e)}}class m extends M{constructor(e){super(fe.shared,e)}}class ar extends M{constructor(e){super(je.shared,e)}}class ut extends M{constructor(e){super(he.shared,e)}}class sr extends M{constructor(e){super(Ue.shared,e)}}class or extends M{constructor(e,t){super(t,e)}}class lr extends or{constructor(e){const t=new nr(fe.shared);super(e,t)}}class p{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new R(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new m(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new A(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new A(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new m(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new m(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ut(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new m(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new m(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new m(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new m(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new R(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new m(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new A(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new ke(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new m(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new A(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new R(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new m(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new m(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new A(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ut(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new m(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new ke(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new m(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new A(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new sr(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new ir(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new m(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new A(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new A(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new m(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new m(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new ar(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new m(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new A(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new R(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new m(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new R(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new ke(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new m(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new m(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new R(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new R(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new R(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new lr(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new m(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new m(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new m(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new A(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new m(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new m(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new A(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new m(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new m(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new A(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new A(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([c()],p.prototype,"addeddate",null);l([c()],p.prototype,"audio_codec",null);l([c()],p.prototype,"audio_sample_rate",null);l([c()],p.prototype,"avg_rating",null);l([c()],p.prototype,"collection",null);l([c()],p.prototype,"collections_raw",null);l([c()],p.prototype,"collection_size",null);l([c()],p.prototype,"contributor",null);l([c()],p.prototype,"coverage",null);l([c()],p.prototype,"creator",null);l([c()],p.prototype,"collection_layout",null);l([c()],p.prototype,"date",null);l([c()],p.prototype,"description",null);l([c()],p.prototype,"downloads",null);l([c()],p.prototype,"duration",null);l([c()],p.prototype,"external_identifier",null);l([c()],p.prototype,"files_count",null);l([c()],p.prototype,"indexdate",null);l([c()],p.prototype,"isbn",null);l([c()],p.prototype,"issue",null);l([c()],p.prototype,"item_count",null);l([c()],p.prototype,"item_size",null);l([c()],p.prototype,"language",null);l([c()],p.prototype,"length",null);l([c()],p.prototype,"lineage",null);l([c()],p.prototype,"month",null);l([c()],p.prototype,"mediatype",null);l([c()],p.prototype,"noindex",null);l([c()],p.prototype,"notes",null);l([c()],p.prototype,"num_favorites",null);l([c()],p.prototype,"num_reviews",null);l([c()],p.prototype,"openlibrary_edition",null);l([c()],p.prototype,"openlibrary_work",null);l([c()],p.prototype,"page_progression",null);l([c()],p.prototype,"partner",null);l([c()],p.prototype,"ppi",null);l([c()],p.prototype,"publicdate",null);l([c()],p.prototype,"publisher",null);l([c()],p.prototype,"reviewdate",null);l([c()],p.prototype,"runtime",null);l([c()],p.prototype,"scanner",null);l([c()],p.prototype,"source",null);l([c()],p.prototype,"start_localtime",null);l([c()],p.prototype,"start_time",null);l([c()],p.prototype,"stop_time",null);l([c()],p.prototype,"subject",null);l([c()],p.prototype,"taper",null);l([c()],p.prototype,"title",null);l([c()],p.prototype,"transferer",null);l([c()],p.prototype,"track",null);l([c()],p.prototype,"type",null);l([c()],p.prototype,"uploader",null);l([c()],p.prototype,"utc_offset",null);l([c()],p.prototype,"venue",null);l([c()],p.prototype,"volume",null);l([c()],p.prototype,"week",null);l([c()],p.prototype,"year",null);class G{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?he.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?pe.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?N.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?N.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?N.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([c()],G.prototype,"size",null);l([c()],G.prototype,"length",null);l([c()],G.prototype,"height",null);l([c()],G.prototype,"width",null);l([c()],G.prototype,"track",null);class ae{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?ne.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?ne.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?N.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([c()],ae.prototype,"reviewdate",null);l([c()],ae.prototype,"createdate",null);l([c()],ae.prototype,"stars",null);class dr{constructor(e){var t,r;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(n=>new G(n)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new p(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(r=e.reviews)===null||r===void 0?void 0:r.map(n=>new ae(n))}}var U;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(U||(U={}));class Ie extends Error{constructor(e,t,r){super(t),this.name=e,this.type=e,this.details=r}}class ur{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const n=new URL(window.location.href).searchParams.get("scope");n&&(this.requestScope=n)}}async fetchMetadata(e,t){const r=t?`/${t}`:"",n=`https://${this.baseUrl}/metadata/${e}${r}`;return this.fetchUrl(n,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var r;const n=new URL(e);this.requestScope&&n.searchParams.set("scope",this.requestScope);let a;try{const s=(r=t==null?void 0:t.requestOptions)!==null&&r!==void 0?r:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(n.href,s)}catch(s){const d=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(U.networkError,d)}try{const s=await a.json(),d=s.error;if(d){const o=s.forensics;return this.getErrorResult(U.searchEngineError,d,o)}else return{success:s}}catch(s){const d=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(U.decodingError,d)}}getErrorResult(e,t,r){return{error:new Ie(e,t,r)}}}class ct{constructor(e){this.backend=e}async fetchMetadata(e){var t;const r=await this.backend.fetchMetadata(e);return r.error?r:((t=r.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Ie(U.itemNotFound)}:{success:new dr(r.success)}}async fetchMetadataValue(e,t){var r;const n=await this.backend.fetchMetadata(e,t);return n.error?n:((r=n.success)===null||r===void 0?void 0:r.result)===void 0?{error:new Ie(U.itemNotFound)}:{success:n.success.result}}}ct.default=new ct(new ur);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=i=>typeof i!="string"&&"strTag"in i,hr=(i,e,t)=>{let r=i[0];for(let n=1;n<i.length;n++)r+=e[n-1],r+=i[n];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pr=i=>cr(i)?hr(i.strings,i.values):i;let x=pr;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fr{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gr=new fr;gr.resolve();const mr=kt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,yr=kt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,ht=$`var(--white, #fff)`,wr=$`var(--ia-theme-link-color, #4b64ff)`,$r=$`var(--primaryDisableCTAFill, #767676)`,br=$`var(--secondaryCTABorder, #999)`,_r=$`var(--primaryCTAFill, #194880)`,Ce=$`var(--primaryCTAFillRGB, 25, 72, 128)`,vr=$`var(--primaryCTABorder, #c5d1df)`,Ar=$`var(--primaryErrorCTAFill, #d9534f)`,Re=$`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,xr=$`var(--primaryErrorCTABorder, #d43f3a)`,Sr=$`var(--secondaryCTAFill, #333)`,Be=$`var(--secondaryCTAFillRGB, 51, 51, 51)`,Mr=$`var(--primaryCTABorder, #979797)`,Er=$`var(---primaryWarningFill, #ee8950)`,Le=$`var(--primaryWarningFillRGB, 238, 137, 80)`,kr=$`var(--primaryWarningBorder, #ec7939)`,Cr=$`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${ht};
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
    outline-color: ${ht};
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
    background-color: ${$r};
    border: 1px solid ${br};
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
    background-color: ${_r};
    border-color: ${vr};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Ce}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Ce}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Ce}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Ar};
    border-color: ${xr};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Re}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Re}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Re}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Er};
    border-color: ${kr};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Le}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Le}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Le}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Sr};
    border-color: ${Mr};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Be}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Be}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Be}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${wr};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;$`
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
`;let v=class extends F{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/services/reviews.php",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.errorMessages={"not-logged-in":b`You must be logged in to write reviews.<br />
      <a class="simple-link" href="${this.baseHost}/account/login">Log in</a>
      and try again.`,"rate-limit":"We appreciate your contributions but you have now exceeded your allotment of review posts for today. Please try again tomorrow.","validation-setup-failed":"We cannot validate your review at this time. Please try again later.",spam:"It looks like your review has triggered our spam detector. If this is in error, please email info@archive.org with the URL, complete Subject text, and complete Review text you entered.",misc:"There's been a temporary error. Please wait a moment and try again."}}render(){return b`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?b`<div class="unrecoverable-error">
            <span class="error-msg"
              >${x(this.errorMessages[this.unrecoverableError])}</span
            >
          </div>`:b`<span class="inputs">
            ${this.starsInputTemplate} ${this.subjectInputTemplate}
            ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
          </span>`}
      ${this.recoverableError?b`<div class="recoverable-error">
            ${x(this.errorMessages[this.recoverableError])}
          </div>`:y}
      ${this.actionButtonsTemplate}
    </form>`}firstUpdated(){this.formCanSubmit=this.checkSubmissionAllowed()}updated(e){e.has("oldReview")&&this.oldReview&&(this.oldReview.stars&&(this.currentStars=this.oldReview.stars),this.oldReview.reviewtitle&&(this.currentSubjectLength=this.oldReview.reviewtitle.length),this.oldReview.reviewbody&&(this.currentBodyLength=this.oldReview.reviewbody.length)),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),this.formCanSubmit=this.checkSubmissionAllowed()}get starsInputTemplate(){return b`
      <div class="form-heading">
        <label for="stars-field">${x("Rating (optional)")}</label>
      </div>
      <input
        type="hidden"
        name="stars"
        id="stars-input"
        .value=${this.currentStars.toString()}
        required
      />
      <div class="stars">
        ${[1,2,3,4,5].map(e=>this.renderStar(e))}
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          ${x("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return b`<span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="subject">${x("Subject")}</label>
        ${this.maxSubjectLength?b`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:y}
      </div>
      <input
        type="text"
        name="title"
        id="subject"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?b`
            <div class="input-error">
              ${x(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:y}</div></span>`}get bodyInputTemplate(){var e,t;return b`<span
      id="body-input"
      class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
      ><div class="form-heading">
        <label for="body">${x("Review")}</label>
        ${this.maxBodyLength?b`<div class="char-count body">
              ${this.currentBodyLength}/${this.maxBodyLength}
            </div>`:y}
      </div>
      <textarea
        name="body"
        id="body"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
        rows="10"
        cols="50"
        required
        @input=${this.handleBodyChanged}
      ></textarea>
      ${this.maxBodyLength?b`
            <div class="input-error">
              ${x(`Review may only have ${this.maxBodyLength} characters`)}
            </div>
          `:y}
    </span>`}get hiddenInputsTemplate(){return b`<input
        type="hidden"
        name="field_reviewtoken"
        .value=${this.token}
      />
      <!-- Indicates to backend that form submission is intended -->
      <input type="hidden" name="action" value="1" />
      ${this.identifier?b`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:y}`}get actionButtonsTemplate(){return b`<div class="action-btns">
      ${this.identifier?b`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${x("Cancel")}
          </a>`:y}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit}
      >
        ${x("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,r=x(`Rate ${e>1?`${e} stars`:"1 star"}`);return b`
      <button
        class="star star-${e}"
        title=${t?x("Clear rating"):r}
        @click=${n=>this.handleStarClicked(n,e)}
      >
        ${e<=this.currentStars?mr:yr}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError="validation-setup-failed"}}async handleSubmit(e){if(e.preventDefault(),!this.formCanSubmit||!this.reviewForm.reportValidity())return;const t="";if(!this.bypassRecaptcha&&!await this.getRecaptchaToken()){this.unrecoverableError="validation-setup-failed";return}this.recoverableError=void 0;try{const r=new FormData(this.reviewForm);r.append("submitter","review-form");const a=await(await fetch(`${this.baseHost}${this.endpointPath}`,{method:"post",credentials:"include",body:r})).json();console.log(a)}catch(r){console.log(r)}}async getRecaptchaToken(){if(!this.recaptchaWidget){this.unrecoverableError="validation-setup-failed";return}try{const e=await this.recaptchaWidget.execute();return this.dispatchEvent(new Event("recaptchaFinished")),e}catch{this.unrecoverableError="validation-setup-failed";return}}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Cr,$`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
          --ia-theme-error-color: #ff0000;
        }

        .form-heading {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 15px;
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
          border: 1px solid #999999;
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--ia-theme-error-color, #cc0000);
        }

        .input-box.error .char-count,
        .input-error,
        .recoverable-error,
        .unrecoverable-error {
          color: var(--ia-theme-error-color, #cc0000);
        }

        .input-error {
          display: none;
        }

        .input-box.error .input-error {
          display: block;
          text-align: right;
          padding-top: 5px;
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

        .clear-stars-btn {
          padding: 0 5px;
          color: var(--ia-link-color, #4b64ff);
          font-family: inherit;
          border: none;
          background: transparent;
          display: inline-block;
          padding-top: 5px;
        }

        .simple-link {
          text-decoration: none;
        }

        .clear-stars-btn:hover,
        .simple-link:hover {
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
          height: 350px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f5f5f7;
        }
      `]}};l([k({type:String})],v.prototype,"identifier",void 0);l([k({type:String})],v.prototype,"token",void 0);l([k({type:String})],v.prototype,"baseHost",void 0);l([k({type:String})],v.prototype,"endpointPath",void 0);l([k({type:Object})],v.prototype,"oldReview",void 0);l([k({type:Number})],v.prototype,"maxSubjectLength",void 0);l([k({type:Number})],v.prototype,"maxBodyLength",void 0);l([k({type:Object})],v.prototype,"recaptchaManager",void 0);l([k({type:Boolean})],v.prototype,"bypassRecaptcha",void 0);l([S()],v.prototype,"recoverableError",void 0);l([S()],v.prototype,"unrecoverableError",void 0);l([S()],v.prototype,"currentStars",void 0);l([S()],v.prototype,"currentSubjectLength",void 0);l([S()],v.prototype,"currentBodyLength",void 0);l([S()],v.prototype,"formCanSubmit",void 0);l([rr("#review-form")],v.prototype,"reviewForm",void 0);v=l([Rt("ia-review-form")],v);let Rr=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Br(i){return new Promise(e=>setTimeout(e,i))}var E;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(E||(E={}));const pt="lazyLoaderService";class Lr{constructor(e){var t,r,n;this.emitter=Rr(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(r=e==null?void 0:e.retryCount)!==null&&r!==void 0?r:2,this.retryInterval=(n=e==null?void 0:e.retryInterval)!==null&&n!==void 0?n:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return se(this,void 0,void 0,function*(){let t,r;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(r=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,r])})}loadScript(e){return se(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return se(this,void 0,void 0,function*(){const r=(t=e.retryNumber)!==null&&t!==void 0?t:0,n=`script[src='${e.src}'][async][${E.owner}='${pt}'][${E.retryNumber}='${r}']`;let a=this.container.querySelector(n);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:r})),this.container.appendChild(a)),new Promise((s,d)=>{if(a.getAttribute(E.dynamicImportLoaded)){s();return}const o=e.scriptBeingRetried,u=a.onload||(o==null?void 0:o.onload);a.onload=f=>{u==null||u(f),a.setAttribute(E.dynamicImportLoaded,"true"),s()};const h=a.onerror||(o==null?void 0:o.onerror);a.onerror=f=>se(this,void 0,void 0,function*(){const g=a.getAttribute(E.hasBeenRetried);if(r<this.retryCount&&!g){a.setAttribute(E.hasBeenRetried,"true"),yield Br(this.retryInterval*1e3);const w=r+1;this.emitter.emit("scriptLoadRetried",e.src,w),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:w,scriptBeingRetried:a}))}else g||this.emitter.emit("scriptLoadFailed",e.src,f),h==null||h(f),d(f)})})})}getScriptTag(e){var t;const r=e.src.replace("'",'"'),n=document.createElement("script"),a=e.retryNumber;n.setAttribute(E.owner,pt),n.setAttribute("src",r),n.setAttribute(E.retryNumber,a.toString()),n.async=!0;const s=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(s).forEach(d=>{n.setAttribute(d,s[d])}),e.bundleType){case"module":n.setAttribute("type",e.bundleType);break;case"nomodule":n.setAttribute(e.bundleType,"");break}return n}}class Nr{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const r=this.createContainer();this.setup(r,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,r)=>{this.executionSuccessBlock=n=>{this.finishExecution(),t(n)},this.executionExpiredBlock=()=>{this.finishExecution(),r(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),r(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var r;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(r=t==null?void 0:t.size)!==null&&r!==void 0?r:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let r=document.getElementById(t);return r||(r=document.createElement("div"),r.id=t,r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.zIndex=e?`${e}`:"10",document.body.appendChild(r)),r}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class ft{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Lr,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const r=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!r)throw new Error("The reCaptcha widget requires a site key");const n=this.recaptchaCache[r];if(n)return n;const a=await this.getRecaptchaLibrary(),s=new Nr({siteKey:r,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[r]=s,s}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}let T=class extends F{constructor(){super(...arguments),this.mockOldReview=new ae({stars:3,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"foo-bar",reviewdate:"2025-03-03 18:13:36",createdate:"2025-02-25 14:28:19"}),this.goodRecaptchaManager=new ft({defaultSiteKey:"demo-key"}),this.badRecaptchaManager=new ft({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.errors=["Sorry, we couldn't submit your review.","Write a better one."],this.bypassRecaptcha=!0,this.recoverableError=!1,this.unrecoverableError=!1,this.useCharCounts=!0}render(){return b`${this.recaptchaManager?y:b`<button
              @click=${()=>this.recaptchaManager=this.goodRecaptchaManager}
            >
              Turn on ReCaptcha (good site key)</button
            ><button
              @click=${()=>this.recaptchaManager=this.badRecaptchaManager}
            >
              Turn on ReCaptcha (bad site key)
            </button> `}
      <button @click=${()=>this.bypassRecaptcha=!this.bypassRecaptcha}>
        ${this.bypassRecaptcha?"Enable":"Bypass"} ReCaptcha
      </button>
      <button @click=${()=>this.recoverableError=!this.recoverableError}>
        ${this.recoverableError?"Hide":"Show"} recoverable error
      </button>
      <button
        @click=${()=>this.unrecoverableError=!this.unrecoverableError}
      >
        ${this.unrecoverableError?"Hide":"Show"} unrecoverable error
      </button>
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
          .recoverableError=${this.recoverableError?"misc":void 0}
          .unrecoverableError=${this.unrecoverableError?"not-logged-in":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          ?bypassRecaptcha=${this.bypassRecaptcha}
        ></ia-review-form>
      </div>`}};T.styles=$`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
    }
  `;l([S()],T.prototype,"recaptchaManager",void 0);l([S()],T.prototype,"bypassRecaptcha",void 0);l([S()],T.prototype,"recoverableError",void 0);l([S()],T.prototype,"unrecoverableError",void 0);l([S()],T.prototype,"useCharCounts",void 0);T=l([Rt("app-root")],T);
