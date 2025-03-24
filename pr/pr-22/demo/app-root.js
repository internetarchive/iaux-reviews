(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function l(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(a=i[d])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function ae(i,e,t,n){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function d(h){try{u(n.next(h))}catch(f){a(f)}}function o(h){try{u(n.throw(h))}catch(f){a(f)}}function u(h){h.done?s(h.value):r(h.value).then(d,o)}u((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=window,Ie=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fe=Symbol(),De=new WeakMap;let gt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ie&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&De.set(t,e))}return e}toString(){return this.cssText}};const Bt=i=>new gt(typeof i=="string"?i:i+"",void 0,Fe),$=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new gt(t,i,Fe)},Nt=(i,e)=>{Ie?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=oe.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},We=Ie?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Bt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const le=window,qe=le.trustedTypes,Lt=qe?qe.emptyScript:"",Ke=le.reactiveElementPolyfillSupport,Le={toAttribute(i,e){switch(e){case Boolean:i=i?Lt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},yt=(i,e)=>e!==i&&(e==e||i==i),$e={attribute:!0,type:String,converter:Le,reflect:!1,hasChanged:yt},Te="finalized";let I=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=$e){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$e}static finalize(){if(this.hasOwnProperty(Te))return!1;this[Te]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(We(r))}else e!==void 0&&t.push(We(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Nt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=$e){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const a=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Le).toAttribute(t,n.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:Le;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||yt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};I[Te]=!0,I.elementProperties=new Map,I.elementStyles=[],I.shadowRootOptions={mode:"open"},Ke==null||Ke({ReactiveElement:I}),((we=le.reactiveElementVersions)!==null&&we!==void 0?we:le.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be;const de=window,D=de.trustedTypes,Ze=D?D.createPolicy("lit-html",{createHTML:i=>i}):void 0,He="$lit$",B=`lit$${(Math.random()+"").slice(9)}$`,mt="?"+B,Tt=`<${mt}>`,U=document,ue=()=>U.createComment(""),X=i=>i===null||typeof i!="object"&&typeof i!="function",wt=Array.isArray,Ht=i=>wt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Je=/>/g,T=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,Xe=/"/g,$t=/^(?:script|style|textarea|title)$/i,Y=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ye=new WeakMap,P=U.createTreeWalker(U,129,null,!1);function bt(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(e):e}const Pt=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=J;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(a.lastIndex=g,h=a.exec(o),h!==null);)g=a.lastIndex,a===J?h[1]==="!--"?a=Ge:h[1]!==void 0?a=Je:h[2]!==void 0?($t.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=T):h[3]!==void 0&&(a=T):a===T?h[0]===">"?(a=r??J,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?T:h[3]==='"'?Xe:Qe):a===Xe||a===Qe?a=T:a===Ge||a===Je?a=J:(a=T,r=void 0);const w=a===T&&i[d+1].startsWith("/>")?" ":"";s+=a===J?o+Tt:f>=0?(n.push(u),o.slice(0,f)+He+o.slice(f)+B+w):o+B+(f===-2?(n.push(void 0),d):w)}return[bt(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Pe=class _t{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const d=e.length-1,o=this.parts,[u,h]=Pt(e,t);if(this.el=_t.createElement(u,n),P.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=P.nextNode())!==null&&o.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const g of r.getAttributeNames())if(g.endsWith(He)||g.startsWith(B)){const w=h[a++];if(f.push(g),w!==void 0){const me=r.getAttribute(w.toLowerCase()+He).split(B),k=/([.?@])?(.*)/.exec(w);o.push({type:1,index:s,name:k[2],strings:me,ctor:k[1]==="."?Ot:k[1]==="?"?jt:k[1]==="@"?zt:ge})}else o.push({type:6,index:s})}for(const g of f)r.removeAttribute(g)}if($t.test(r.tagName)){const f=r.textContent.split(B),g=f.length-1;if(g>0){r.textContent=D?D.emptyScript:"";for(let w=0;w<g;w++)r.append(f[w],ue()),P.nextNode(),o.push({type:2,index:++s});r.append(f[g],ue())}}}else if(r.nodeType===8)if(r.data===mt)o.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(B,f+1))!==-1;)o.push({type:7,index:s}),f+=B.length-1}s++}}static createElement(e,t){const n=U.createElement("template");return n.innerHTML=e,n}};function W(i,e,t=i,n){var r,s,a,d;if(e===Y)return e;let o=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const u=X(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,n)),n!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[n]=o:t._$Cl=o),o!==void 0&&(e=W(i,o._$AS(i,e.values),o,n)),e}let Vt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(n,!0);P.currentNode=s;let a=P.nextNode(),d=0,o=0,u=r[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new vt(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new It(a,this,e)),this._$AV.push(h),u=r[++o]}d!==(u==null?void 0:u.index)&&(a=P.nextNode(),d++)}return P.currentNode=U,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},vt=class At{constructor(e,t,n,r){var s;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),X(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Y&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ht(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(U.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Pe.createElement(bt(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new Vt(s,this),d=a.u(this.options);a.v(n),this.$(d),this._$AH=a}}_$AC(e){let t=Ye.get(e.strings);return t===void 0&&Ye.set(e.strings,t=new Pe(e)),t}T(e){wt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new At(this.k(ue()),this.k(ue()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},ge=class{constructor(e,t,n,r,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=W(this,e,t,0),a=!X(e)||e!==this._$AH&&e!==Y,a&&(this._$AH=e);else{const d=e;let o,u;for(e=s[0],o=0;o<s.length-1;o++)u=W(this,d[n+o],t,o),u===Y&&(u=this._$AH[o]),a||(a=!X(u)||u!==this._$AH[o]),u===b?e=b:e!==b&&(e+=(u??"")+s[o+1]),this._$AH[o]=u}a&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ot=class extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}};const Ut=D?D.emptyScript:"";let jt=class extends ge{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},zt=class extends ge{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=W(this,e,t,0))!==null&&n!==void 0?n:b)===Y)return;const r=this._$AH,s=e===b&&r!==b||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==b&&(r===b||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},It=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}};const et=de.litHtmlPolyfillSupport;et==null||et(Pe,vt),((be=de.litHtmlVersions)!==null&&be!==void 0?be:de.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const ce=window,q=ce.trustedTypes,tt=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ve="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,xt="?"+N,Ft=`<${xt}>`,j=document,ee=()=>j.createComment(""),te=i=>i===null||typeof i!="object"&&typeof i!="function",Mt=Array.isArray,Dt=i=>Mt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ae=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,H=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,st=/"/g,St=/^(?:script|style|textarea|title)$/i,Et=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),v=Et(1),kt=Et(2),K=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),at=new WeakMap,V=j.createTreeWalker(j,129,null,!1);function Ct(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(e):e}const Wt=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=Q;for(let d=0;d<t;d++){const o=i[d];let u,h,f=-1,g=0;for(;g<o.length&&(a.lastIndex=g,h=a.exec(o),h!==null);)g=a.lastIndex,a===Q?h[1]==="!--"?a=nt:h[1]!==void 0?a=rt:h[2]!==void 0?(St.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=H):h[3]!==void 0&&(a=H):a===H?h[0]===">"?(a=r??Q,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?H:h[3]==='"'?st:it):a===st||a===it?a=H:a===nt||a===rt?a=Q:(a=H,r=void 0);const w=a===H&&i[d+1].startsWith("/>")?" ":"";s+=a===Q?o+Ft:f>=0?(n.push(u),o.slice(0,f)+Ve+o.slice(f)+N+w):o+N+(f===-2?(n.push(void 0),d):w)}return[Ct(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ne{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const d=e.length-1,o=this.parts,[u,h]=Wt(e,t);if(this.el=ne.createElement(u,n),V.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=V.nextNode())!==null&&o.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const g of r.getAttributeNames())if(g.endsWith(Ve)||g.startsWith(N)){const w=h[a++];if(f.push(g),w!==void 0){const me=r.getAttribute(w.toLowerCase()+Ve).split(N),k=/([.?@])?(.*)/.exec(w);o.push({type:1,index:s,name:k[2],strings:me,ctor:k[1]==="."?Kt:k[1]==="?"?Gt:k[1]==="@"?Jt:ye})}else o.push({type:6,index:s})}for(const g of f)r.removeAttribute(g)}if(St.test(r.tagName)){const f=r.textContent.split(N),g=f.length-1;if(g>0){r.textContent=q?q.emptyScript:"";for(let w=0;w<g;w++)r.append(f[w],ee()),V.nextNode(),o.push({type:2,index:++s});r.append(f[g],ee())}}}else if(r.nodeType===8)if(r.data===xt)o.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(N,f+1))!==-1;)o.push({type:7,index:s}),f+=N.length-1}s++}}static createElement(e,t){const n=j.createElement("template");return n.innerHTML=e,n}}function Z(i,e,t=i,n){var r,s,a,d;if(e===K)return e;let o=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const u=te(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==u&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),u===void 0?o=void 0:(o=new u(i),o._$AT(i,t,n)),n!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Z(i,o._$AS(i,e.values),o,n)),e}class qt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:j).importNode(n,!0);V.currentNode=s;let a=V.nextNode(),d=0,o=0,u=r[0];for(;u!==void 0;){if(d===u.index){let h;u.type===2?h=new ie(a,a.nextSibling,this,e):u.type===1?h=new u.ctor(a,u.name,u.strings,this,e):u.type===6&&(h=new Qt(a,this,e)),this._$AV.push(h),u=r[++o]}d!==(u==null?void 0:u.index)&&(a=V.nextNode(),d++)}return V.currentNode=j,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ie{constructor(e,t,n,r){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),te(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Dt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&te(this._$AH)?this._$AA.nextSibling.data=e:this.$(j.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ne.createElement(Ct(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new qt(s,this),d=a.u(this.options);a.v(n),this.$(d),this._$AH=a}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new ne(e)),t}T(e){Mt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ie(this.k(ee()),this.k(ee()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ye{constructor(e,t,n,r,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=Z(this,e,t,0),a=!te(e)||e!==this._$AH&&e!==K,a&&(this._$AH=e);else{const d=e;let o,u;for(e=s[0],o=0;o<s.length-1;o++)u=Z(this,d[n+o],t,o),u===K&&(u=this._$AH[o]),a||(a=!te(u)||u!==this._$AH[o]),u===m?e=m:e!==m&&(e+=(u??"")+s[o+1]),this._$AH[o]=u}a&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Kt extends ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Zt=q?q.emptyScript:"";class Gt extends ye{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Zt):this.element.removeAttribute(this.name)}}class Jt extends ye{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=Z(this,e,t,0))!==null&&n!==void 0?n:m)===K)return;const r=this._$AH,s=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==m&&(r===m||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Qt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ot=ce.litHtmlPolyfillSupport;ot==null||ot(ne,ie),((ve=ce.litHtmlVersions)!==null&&ve!==void 0?ve:ce.litHtmlVersions=[]).push("2.8.0");const Xt=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let a=s._$litPart$;if(a===void 0){const d=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=a=new ie(e.insertBefore(ee(),d),d,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe,Me;class F extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return K}}F.finalized=!0,F._$litElement$=!0,(xe=globalThis.litElementHydrateSupport)===null||xe===void 0||xe.call(globalThis,{LitElement:F});const lt=globalThis.litElementPolyfillSupport;lt==null||lt({LitElement:F});((Me=globalThis.litElementVersions)!==null&&Me!==void 0?Me:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(a){customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},en=(i,e,t)=>{e.constructor.createProperty(t,i)};function x(i){return(e,t)=>t!==void 0?en(i,e,t):Yt(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(i){return x({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(a.finisher=function(d){i(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nn(i,e){return tn({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Se;((Se=window.HTMLSlotElement)===null||Se===void 0?void 0:Se.prototype.assignedElements)!=null;function c(i){let e,t,n;return e=i,(r,s,a)=>{if(a.value!=null)a.value=dt(a.value,e,t,n);else if(a.get!=null)a.get=dt(a.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ee=new Map;function dt(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(n))for(const o of n)Ee.has(o)?Ee.get(o).push(d):Ee.set(o,[d]);if(e||s.length>0||t>0){let o;e===!0?o=s.map(f=>f.toString()).join("!"):e?o=e.apply(this,s):o=s[0];const u=`${o}__timestamp`;let h=!1;if(t>0)if(!d.has(u))h=!0;else{let f=d.get(u);h=Date.now()-f>t}d.has(o)&&!h?a=d.get(o):(a=i.apply(this,s),d.set(o,a),t>0&&d.set(u,Date.now()))}else{const o=this;d.has(o)?a=d.get(o):(a=i.apply(this,s),d.set(o,a))}return a}}class Oe{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Oe.shared=new Oe;class L{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}L.shared=new L;class he{parseValue(e){return L.shared.parseValue(e)}}he.shared=new he;class re{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}re.shared=new re;class pe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,s)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const o=60**(e.length-1-s);return a*Math.floor(o)}).reduce((r,s)=>r+s,0);return t?void 0:n}}pe.shared=new pe;class Ue{parseValue(e){if(typeof e=="string")return e}}Ue.shared=new Ue;class rn{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return n.forEach(s=>{s!==void 0&&r.push(s)}),r}}class je{parseValue(e){if(typeof e=="string")return e}}je.shared=new je;class fe{parseValue(e){return String(e)}}fe.shared=new fe;class M{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([c()],M.prototype,"values",null);l([c()],M.prototype,"value",null);class sn extends M{constructor(e){super(Oe.shared,e)}}class R extends M{constructor(e){super(re.shared,e)}}class ke extends M{constructor(e){super(pe.shared,e)}}class A extends M{constructor(e){super(L.shared,e)}}class y extends M{constructor(e){super(fe.shared,e)}}class an extends M{constructor(e){super(je.shared,e)}}class ut extends M{constructor(e){super(he.shared,e)}}class on extends M{constructor(e){super(Ue.shared,e)}}class ln extends M{constructor(e,t){super(t,e)}}class dn extends ln{constructor(e){const t=new rn(fe.shared);super(e,t)}}class p{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new R(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new y(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new A(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new A(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new y(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new y(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ut(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new y(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new y(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new y(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new y(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new R(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new y(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new A(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new ke(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new y(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new A(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new R(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new y(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new y(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new A(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ut(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new y(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new ke(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new y(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new A(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new on(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new sn(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new y(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new A(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new A(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new y(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new y(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new an(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new y(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new A(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new R(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new y(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new R(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new ke(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new y(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new y(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new R(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new R(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new R(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new dn(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new y(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new y(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new y(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new A(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new y(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new y(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new A(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new y(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new y(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new A(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new A(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([c()],p.prototype,"addeddate",null);l([c()],p.prototype,"audio_codec",null);l([c()],p.prototype,"audio_sample_rate",null);l([c()],p.prototype,"avg_rating",null);l([c()],p.prototype,"collection",null);l([c()],p.prototype,"collections_raw",null);l([c()],p.prototype,"collection_size",null);l([c()],p.prototype,"contributor",null);l([c()],p.prototype,"coverage",null);l([c()],p.prototype,"creator",null);l([c()],p.prototype,"collection_layout",null);l([c()],p.prototype,"date",null);l([c()],p.prototype,"description",null);l([c()],p.prototype,"downloads",null);l([c()],p.prototype,"duration",null);l([c()],p.prototype,"external_identifier",null);l([c()],p.prototype,"files_count",null);l([c()],p.prototype,"indexdate",null);l([c()],p.prototype,"isbn",null);l([c()],p.prototype,"issue",null);l([c()],p.prototype,"item_count",null);l([c()],p.prototype,"item_size",null);l([c()],p.prototype,"language",null);l([c()],p.prototype,"length",null);l([c()],p.prototype,"lineage",null);l([c()],p.prototype,"month",null);l([c()],p.prototype,"mediatype",null);l([c()],p.prototype,"noindex",null);l([c()],p.prototype,"notes",null);l([c()],p.prototype,"num_favorites",null);l([c()],p.prototype,"num_reviews",null);l([c()],p.prototype,"openlibrary_edition",null);l([c()],p.prototype,"openlibrary_work",null);l([c()],p.prototype,"page_progression",null);l([c()],p.prototype,"partner",null);l([c()],p.prototype,"ppi",null);l([c()],p.prototype,"publicdate",null);l([c()],p.prototype,"publisher",null);l([c()],p.prototype,"reviewdate",null);l([c()],p.prototype,"runtime",null);l([c()],p.prototype,"scanner",null);l([c()],p.prototype,"source",null);l([c()],p.prototype,"start_localtime",null);l([c()],p.prototype,"start_time",null);l([c()],p.prototype,"stop_time",null);l([c()],p.prototype,"subject",null);l([c()],p.prototype,"taper",null);l([c()],p.prototype,"title",null);l([c()],p.prototype,"transferer",null);l([c()],p.prototype,"track",null);l([c()],p.prototype,"type",null);l([c()],p.prototype,"uploader",null);l([c()],p.prototype,"utc_offset",null);l([c()],p.prototype,"venue",null);l([c()],p.prototype,"volume",null);l([c()],p.prototype,"week",null);l([c()],p.prototype,"year",null);class G{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?he.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?pe.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?L.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?L.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?L.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([c()],G.prototype,"size",null);l([c()],G.prototype,"length",null);l([c()],G.prototype,"height",null);l([c()],G.prototype,"width",null);l([c()],G.prototype,"track",null);class se{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?re.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?re.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?L.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([c()],se.prototype,"reviewdate",null);l([c()],se.prototype,"createdate",null);l([c()],se.prototype,"stars",null);class un{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new G(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new p(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new se(r))}}var O;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(O||(O={}));class ze extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class cn{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const a=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(O.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const o=a.forensics;return this.getErrorResult(O.searchEngineError,d,o)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(O.decodingError,d)}}getErrorResult(e,t,n){return{error:new ze(e,t,n)}}}class ct{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new ze(O.itemNotFound)}:{success:new un(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new ze(O.itemNotFound)}:{success:r.success.result}}}ct.default=new ct(new cn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hn=i=>typeof i!="string"&&"strTag"in i,pn=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn=i=>hn(i)?pn(i.strings,i.values):i;let S=fn;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gn{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yn=new gn;yn.resolve();const mn=kt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,wn=kt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,ht=$`var(--white, #fff)`,$n=$`var(--ia-theme-link-color, #4b64ff)`,bn=$`var(--primaryDisableCTAFill, #767676)`,_n=$`var(--secondaryCTABorder, #999)`,vn=$`var(--primaryCTAFill, #194880)`,Ce=$`var(--primaryCTAFillRGB, 25, 72, 128)`,An=$`var(--primaryCTABorder, #c5d1df)`,xn=$`var(--primaryErrorCTAFill, #d9534f)`,Re=$`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Mn=$`var(--primaryErrorCTABorder, #d43f3a)`,Sn=$`var(--secondaryCTAFill, #333)`,Be=$`var(--secondaryCTAFillRGB, 51, 51, 51)`,En=$`var(--primaryCTABorder, #979797)`,kn=$`var(---primaryWarningFill, #ee8950)`,Ne=$`var(--primaryWarningFillRGB, 238, 137, 80)`,Cn=$`var(--primaryWarningBorder, #ec7939)`,Rn=$`
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
    background-color: ${bn};
    border: 1px solid ${_n};
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
    background-color: ${vn};
    border-color: ${An};
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
    background-color: ${xn};
    border-color: ${Mn};
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
    background-color: ${kn};
    border-color: ${Cn};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Ne}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Ne}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Ne}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Sn};
    border-color: ${En};
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
    color: ${$n};
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
`;let _=class extends F{constructor(){super(...arguments),this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.prefilledErrors=[],this.bypassRecaptcha=!1,this.recaptchaToken="",this.recaptchaError=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0}render(){return v`<form
      id="review-form"
      action="${this.baseHost}${this.endpointPath}"
      method="post"
    >
      ${this.prefilledErrors.length?this.prefilledErrors.map(e=>v`<div class="errors prefilled-error">${e}</div>`):m}
      ${this.recaptchaError?v`<div class="errors recaptcha-error">
            ${S("Could not validate review. Please try again later.")}
          </div>`:m}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
      ${this.actionButtonsTemplate}
    </form>`}updated(e){e.has("oldReview")&&this.oldReview&&(this.oldReview.stars&&(this.currentStars=this.oldReview.stars),this.oldReview.reviewtitle&&(this.currentSubjectLength=this.oldReview.reviewtitle.length),this.oldReview.reviewbody&&(this.currentBodyLength=this.oldReview.reviewbody.length)),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha()}get starsInputTemplate(){return v`
      <div class="form-heading">
        <label for="stars-field">${S("Rating (optional)")}</label>
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
        <button class="clear-stars-btn" @click=${this.handleClearBtnClicked}>
          ${S("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return v`<span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${S("Subject")}</label>
        ${this.maxSubjectLength?v`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:m}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?v`
            <div class="input-error">
              Subject may only have ${this.maxSubjectLength} characters
            </div>
          `:m}</div></span>`}get bodyInputTemplate(){var e,t;return v`<span
      id="body-input"
      class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewbody">${S("Review")}</label>
        ${this.maxBodyLength?v`<div class="char-count body">
              ${this.currentBodyLength}/${this.maxBodyLength}
            </div>`:m}
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
      ${this.maxBodyLength?v`
            <div class="input-error">
              ${S(`Review may only have ${this.maxBodyLength} characters`)}
            </div>
          `:m}
    </span>`}get hiddenInputsTemplate(){var e;return v`<input
        type="hidden"
        name="field_reviewtoken"
        .value=${(e=this.token)!==null&&e!==void 0?e:""}
      />
      <input
        type="hidden"
        name="g-recaptcha-response"
        .value=${this.recaptchaToken}
      />
      <!-- Indicates to backend that form submission is intended -->
      <input type="hidden" name="action" value="1" />
      ${this.identifier?v`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:m}`}get actionButtonsTemplate(){return v`<div class="action-btns">
      ${this.identifier?v`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${S("Cancel")}
          </a>`:m}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!!this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||!!this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength}
        @click=${this.handleSubmit}
      >
        ${S("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=S(`Rate ${e>1?`${e} stars`:"1 star"}`);return v`
      <button
        class="star star-${e}"
        title=${t?S("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?mn:wn}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget()),this.recaptchaError=!1}catch{this.recaptchaError=!0}}async handleSubmit(e){if(e.preventDefault(),!!this.reviewForm.reportValidity()){if(this.bypassRecaptcha){this.reviewForm.requestSubmit();return}if(!this.recaptchaWidget){this.recaptchaError=!0;return}try{const t=await this.recaptchaWidget.execute();this.dispatchEvent(new Event("recaptchaFinished")),this.recaptchaToken=t,await this.updateComplete,this.reviewForm.requestSubmit()}catch{this.recaptchaError=!0}}}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}static get styles(){return[Rn,$`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
          font-size: 1.4rem;
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
        input[type='text'] {
          padding: 5px;
          width: calc(100% - 10px);
          font-family: inherit;
          border-radius: 5px;
          border: 1px solid #999999;
        }

        .input-box.error input,
        .input-box.error textarea {
          border: 2px solid var(--ia-theme-error-color, #ff0000);
        }

        .input-box.error .char-count,
        .input-error {
          color: var(--ia-theme-error-color, #ff0000);
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

        .clear-stars-btn:hover {
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

        .errors {
          padding: 15px;
          border: 1px solid #ebccd1;
          color: #a94442;
          background-color: #f2dede;
          border-radius: 4px;
          margin-bottom: 10px;
        }
      `]}};l([x({type:String})],_.prototype,"identifier",void 0);l([x({type:String})],_.prototype,"token",void 0);l([x({type:String})],_.prototype,"baseHost",void 0);l([x({type:String})],_.prototype,"endpointPath",void 0);l([x({type:Object})],_.prototype,"oldReview",void 0);l([x({type:Array})],_.prototype,"prefilledErrors",void 0);l([x({type:Number})],_.prototype,"maxSubjectLength",void 0);l([x({type:Number})],_.prototype,"maxBodyLength",void 0);l([x({type:Object})],_.prototype,"recaptchaManager",void 0);l([x({type:Boolean})],_.prototype,"bypassRecaptcha",void 0);l([C()],_.prototype,"recaptchaToken",void 0);l([C()],_.prototype,"recaptchaError",void 0);l([C()],_.prototype,"currentStars",void 0);l([C()],_.prototype,"currentSubjectLength",void 0);l([C()],_.prototype,"currentBodyLength",void 0);l([nn("#review-form")],_.prototype,"reviewForm",void 0);_=l([Rt("ia-review-form")],_);let Bn=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Nn(i){return new Promise(e=>setTimeout(e,i))}var E;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(E||(E={}));const pt="lazyLoaderService";class Ln{constructor(e){var t,n,r;this.emitter=Bn(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return ae(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return ae(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return ae(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${E.owner}='${pt}'][${E.retryNumber}='${n}']`;let s=this.container.querySelector(r);return s||(s=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(s)),new Promise((a,d)=>{if(s.getAttribute(E.dynamicImportLoaded)){a();return}const o=e.scriptBeingRetried,u=s.onload||(o==null?void 0:o.onload);s.onload=f=>{u==null||u(f),s.setAttribute(E.dynamicImportLoaded,"true"),a()};const h=s.onerror||(o==null?void 0:o.onerror);s.onerror=f=>ae(this,void 0,void 0,function*(){const g=s.getAttribute(E.hasBeenRetried);if(n<this.retryCount&&!g){s.setAttribute(E.hasBeenRetried,"true"),yield Nn(this.retryInterval*1e3);const w=n+1;this.emitter.emit("scriptLoadRetried",e.src,w),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:w,scriptBeingRetried:s}))}else g||this.emitter.emit("scriptLoadFailed",e.src,f),h==null||h(f),d(f)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),s=e.retryNumber;r.setAttribute(E.owner,pt),r.setAttribute("src",n),r.setAttribute(E.retryNumber,s.toString()),r.async=!0;const a=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(a).forEach(d=>{r.setAttribute(d,a[d])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Tn{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class ft{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Ln,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const s=await this.getRecaptchaLibrary(),a=new Tn({siteKey:n,grecaptchaLibrary:s},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=a,a}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}let z=class extends F{constructor(){super(...arguments),this.mockOldReview=new se({stars:3,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"foo-bar",reviewdate:"2025-03-03 18:13:36",createdate:"2025-02-25 14:28:19"}),this.goodRecaptchaManager=new ft({defaultSiteKey:"demo-key"}),this.badRecaptchaManager=new ft({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.errors=["Sorry, we couldn't submit your review.","Write a better one."],this.bypassRecaptcha=!1,this.showErrors=!1,this.useCharCounts=!0}render(){return v`${this.recaptchaManager?m:v`<button
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
      <button @click=${()=>this.showErrors=!this.showErrors}>
        ${this.showErrors?"Hide":"Show"} pre-filled errors
      </button>
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${this.mockOldReview}
          .recaptchaManager=${this.recaptchaManager}
          .prefilledErrors=${this.showErrors?this.errors:[]}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          ?bypassRecaptcha=${this.bypassRecaptcha}
        ></ia-review-form>
      </div>`}};z.styles=$`
    .container {
      max-width: 750px;
      margin: 10px auto;
    }
  `;l([C()],z.prototype,"recaptchaManager",void 0);l([C()],z.prototype,"bypassRecaptcha",void 0);l([C()],z.prototype,"showErrors",void 0);l([C()],z.prototype,"useCharCounts",void 0);z=l([Rt("app-root")],z);
