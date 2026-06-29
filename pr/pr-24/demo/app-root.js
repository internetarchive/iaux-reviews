(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function l(n,e,t,r){var i=arguments.length,a=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,r);else for(var d=n.length-1;d>=0;d--)(s=n[d])&&(a=(i<3?s(a):i>3?s(e,t,a):s(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a}function ot(n,e,t,r){function i(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function d(f){try{h(r.next(f))}catch(m){s(m)}}function c(f){try{h(r.throw(f))}catch(m){s(m)}}function h(f){f.done?a(f.value):i(f.value).then(d,c)}h((r=r.apply(n,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=window,gr=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wr=Symbol(),jr=new WeakMap;let Si=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==wr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gr&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=jr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&jr.set(t,e))}return e}toString(){return this.cssText}};const pn=n=>new Si(typeof n=="string"?n:n+"",void 0,wr),R=(n,...e)=>{const t=n.length===1?n[0]:e.reduce(((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[a+1]),n[0]);return new Si(t,n,wr)},fn=(n,e)=>{gr?n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{const r=document.createElement("style"),i=dt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}))},Wr=gr?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return pn(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const ht=window,Gr=ht.trustedTypes,vn=Gr?Gr.emptyScript:"",qr=ht.reactiveElementPolyfillSupport,ir={toAttribute(n,e){switch(e){case Boolean:n=n?vn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ti=(n,e)=>e!==n&&(e==e||n==n),Bt={attribute:!0,type:String,converter:ir,reflect:!1,hasChanged:Ti},nr="finalized";let Te=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))})),e}static createProperty(e,t=Bt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Bt}static finalize(){if(this.hasOwnProperty(nr))return!1;this[nr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Wr(i))}else e!==void 0&&t.push(Wr(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((t=>t(this)))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return fn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Bt){var i;const a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){const s=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:ir).toAttribute(t,r.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,a=i._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=i.getPropertyOptions(a),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:ir;this._$El=a,this[a]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ti)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((i,a)=>this[a]=i)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach((i=>{var a;return(a=i.hostUpdate)===null||a===void 0?void 0:a.call(i)})),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach((r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((t,r)=>this._$EO(r,this[r],t))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Te[nr]=!0,Te.elementProperties=new Map,Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},qr==null||qr({ReactiveElement:Te}),((Pt=ht.reactiveElementVersions)!==null&&Pt!==void 0?Pt:ht.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;const pt=window,Re=pt.trustedTypes,Yr=Re?Re.createPolicy("lit-html",{createHTML:n=>n}):void 0,ar="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,Ri="?"+le,mn=`<${Ri}>`,we=document,ft=()=>we.createComment(""),Ge=n=>n===null||typeof n!="object"&&typeof n!="function",xi=Array.isArray,gn=n=>xi(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ut=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kr=/-->/g,Xr=/>/g,he=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zr=/'/g,Jr=/"/g,Ci=/^(?:script|style|textarea|title)$/i,xe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),Qr=new WeakMap,ve=we.createTreeWalker(we,129,null,!1);function Mi(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yr!==void 0?Yr.createHTML(e):e}const wn=(n,e)=>{const t=n.length-1,r=[];let i,a=e===2?"<svg>":"",s=He;for(let d=0;d<t;d++){const c=n[d];let h,f,m=-1,_=0;for(;_<c.length&&(s.lastIndex=_,f=s.exec(c),f!==null);)_=s.lastIndex,s===He?f[1]==="!--"?s=Kr:f[1]!==void 0?s=Xr:f[2]!==void 0?(Ci.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=he):f[3]!==void 0&&(s=he):s===he?f[0]===">"?(s=i??He,m=-1):f[1]===void 0?m=-2:(m=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?he:f[3]==='"'?Jr:Zr):s===Jr||s===Zr?s=he:s===Kr||s===Xr?s=He:(s=he,i=void 0);const S=s===he&&n[d+1].startsWith("/>")?" ":"";a+=s===He?c+mn:m>=0?(r.push(h),c.slice(0,m)+ar+c.slice(m)+le+S):c+le+(m===-2?(r.push(void 0),d):S)}return[Mi(n,a+(n[t]||"<?>")+(e===2?"</svg>":"")),r]};let sr=class ki{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let a=0,s=0;const d=e.length-1,c=this.parts,[h,f]=wn(e,t);if(this.el=ki.createElement(h,r),ve.currentNode=this.el.content,t===2){const m=this.el.content,_=m.firstChild;_.remove(),m.append(..._.childNodes)}for(;(i=ve.nextNode())!==null&&c.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const m=[];for(const _ of i.getAttributeNames())if(_.endsWith(ar)||_.startsWith(le)){const S=f[s++];if(m.push(_),S!==void 0){const ie=i.getAttribute(S.toLowerCase()+ar).split(le),X=/([.?@])?(.*)/.exec(S);c.push({type:1,index:a,name:X[2],strings:ie,ctor:X[1]==="."?bn:X[1]==="?"?$n:X[1]==="@"?An:yt})}else c.push({type:6,index:a})}for(const _ of m)i.removeAttribute(_)}if(Ci.test(i.tagName)){const m=i.textContent.split(le),_=m.length-1;if(_>0){i.textContent=Re?Re.emptyScript:"";for(let S=0;S<_;S++)i.append(m[S],ft()),ve.nextNode(),c.push({type:2,index:++a});i.append(m[_],ft())}}}else if(i.nodeType===8)if(i.data===Ri)c.push({type:2,index:a});else{let m=-1;for(;(m=i.data.indexOf(le,m+1))!==-1;)c.push({type:7,index:a}),m+=le.length-1}a++}}static createElement(e,t){const r=we.createElement("template");return r.innerHTML=e,r}};function Ce(n,e,t=n,r){var i,a,s,d;if(e===xe)return e;let c=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl;const h=Ge(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==h&&((a=c==null?void 0:c._$AO)===null||a===void 0||a.call(c,!1),h===void 0?c=void 0:(c=new h(n),c._$AT(n,t,r)),r!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[r]=c:t._$Cl=c),c!==void 0&&(e=Ce(n,c._$AS(n,e.values),c,r)),e}let yn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:i}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:we).importNode(r,!0);ve.currentNode=a;let s=ve.nextNode(),d=0,c=0,h=i[0];for(;h!==void 0;){if(d===h.index){let f;h.type===2?f=new Li(s,s.nextSibling,this,e):h.type===1?f=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(f=new En(s,this,e)),this._$AV.push(f),h=i[++c]}d!==(h==null?void 0:h.index)&&(s=ve.nextNode(),d++)}return ve.currentNode=we,a}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Li=class Ni{constructor(e,t,r,i){var a;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(a=i==null?void 0:i.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ce(this,e,t),Ge(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):gn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.$(we.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=sr.createElement(Mi(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(r);else{const s=new yn(a,this),d=s.u(this.options);s.v(r),this.$(d),this._$AH=s}}_$AC(e){let t=Qr.get(e.strings);return t===void 0&&Qr.set(e.strings,t=new sr(e)),t}T(e){xi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const a of e)i===t.length?t.push(r=new Ni(this.k(ft()),this.k(ft()),this,this.options)):r=t[i],r._$AI(a),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},yt=class{constructor(e,t,r,i,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=Ce(this,e,t,0),s=!Ge(e)||e!==this._$AH&&e!==xe,s&&(this._$AH=e);else{const d=e;let c,h;for(e=a[0],c=0;c<a.length-1;c++)h=Ce(this,d[r+c],t,c),h===xe&&(h=this._$AH[c]),s||(s=!Ge(h)||h!==this._$AH[c]),h===N?e=N:e!==N&&(e+=(h??"")+a[c+1]),this._$AH[c]=h}s&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bn=class extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const _n=Re?Re.emptyScript:"";let $n=class extends yt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,_n):this.element.removeAttribute(this.name)}},An=class extends yt{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){var r;if((e=(r=Ce(this,e,t,0))!==null&&r!==void 0?r:N)===xe)return;const i=this._$AH,a=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},En=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}};const ei=pt.litHtmlPolyfillSupport;ei==null||ei(sr,Li),((Ht=pt.litHtmlVersions)!==null&&Ht!==void 0?Ht:pt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const vt=window,Me=vt.trustedTypes,ti=Me?Me.createPolicy("lit-html",{createHTML:n=>n}):void 0,or="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,Ii="?"+ce,Sn=`<${Ii}>`,ye=document,qe=()=>ye.createComment(""),Ye=n=>n===null||typeof n!="object"&&typeof n!="function",Di=Array.isArray,Tn=n=>Di(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",zt=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ri=/-->/g,ii=/>/g,pe=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ni=/'/g,ai=/"/g,Oi=/^(?:script|style|textarea|title)$/i,Pi=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),y=Pi(1),bt=Pi(2),ke=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),si=new WeakMap,me=ye.createTreeWalker(ye,129,null,!1);function Bi(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ti!==void 0?ti.createHTML(e):e}const Rn=(n,e)=>{const t=n.length-1,r=[];let i,a=e===2?"<svg>":"",s=Ue;for(let d=0;d<t;d++){const c=n[d];let h,f,m=-1,_=0;for(;_<c.length&&(s.lastIndex=_,f=s.exec(c),f!==null);)_=s.lastIndex,s===Ue?f[1]==="!--"?s=ri:f[1]!==void 0?s=ii:f[2]!==void 0?(Oi.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=pe):f[3]!==void 0&&(s=pe):s===pe?f[0]===">"?(s=i??Ue,m=-1):f[1]===void 0?m=-2:(m=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?pe:f[3]==='"'?ai:ni):s===ai||s===ni?s=pe:s===ri||s===ii?s=Ue:(s=pe,i=void 0);const S=s===pe&&n[d+1].startsWith("/>")?" ":"";a+=s===Ue?c+Sn:m>=0?(r.push(h),c.slice(0,m)+or+c.slice(m)+ce+S):c+ce+(m===-2?(r.push(void 0),d):S)}return[Bi(n,a+(n[t]||"<?>")+(e===2?"</svg>":"")),r]};class Ke{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let a=0,s=0;const d=e.length-1,c=this.parts,[h,f]=Rn(e,t);if(this.el=Ke.createElement(h,r),me.currentNode=this.el.content,t===2){const m=this.el.content,_=m.firstChild;_.remove(),m.append(..._.childNodes)}for(;(i=me.nextNode())!==null&&c.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const m=[];for(const _ of i.getAttributeNames())if(_.endsWith(or)||_.startsWith(ce)){const S=f[s++];if(m.push(_),S!==void 0){const ie=i.getAttribute(S.toLowerCase()+or).split(ce),X=/([.?@])?(.*)/.exec(S);c.push({type:1,index:a,name:X[2],strings:ie,ctor:X[1]==="."?Cn:X[1]==="?"?kn:X[1]==="@"?Ln:_t})}else c.push({type:6,index:a})}for(const _ of m)i.removeAttribute(_)}if(Oi.test(i.tagName)){const m=i.textContent.split(ce),_=m.length-1;if(_>0){i.textContent=Me?Me.emptyScript:"";for(let S=0;S<_;S++)i.append(m[S],qe()),me.nextNode(),c.push({type:2,index:++a});i.append(m[_],qe())}}}else if(i.nodeType===8)if(i.data===Ii)c.push({type:2,index:a});else{let m=-1;for(;(m=i.data.indexOf(ce,m+1))!==-1;)c.push({type:7,index:a}),m+=ce.length-1}a++}}static createElement(e,t){const r=ye.createElement("template");return r.innerHTML=e,r}}function Le(n,e,t=n,r){var i,a,s,d;if(e===ke)return e;let c=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl;const h=Ye(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==h&&((a=c==null?void 0:c._$AO)===null||a===void 0||a.call(c,!1),h===void 0?c=void 0:(c=new h(n),c._$AT(n,t,r)),r!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[r]=c:t._$Cl=c),c!==void 0&&(e=Le(n,c._$AS(n,e.values),c,r)),e}class xn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:i}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ye).importNode(r,!0);me.currentNode=a;let s=me.nextNode(),d=0,c=0,h=i[0];for(;h!==void 0;){if(d===h.index){let f;h.type===2?f=new Ze(s,s.nextSibling,this,e):h.type===1?f=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(f=new Nn(s,this,e)),this._$AV.push(f),h=i[++c]}d!==(h==null?void 0:h.index)&&(s=me.nextNode(),d++)}return me.currentNode=ye,a}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Ze{constructor(e,t,r,i){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(a=i==null?void 0:i.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),Ye(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Tn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ke.createElement(Bi(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(r);else{const s=new xn(a,this),d=s.u(this.options);s.v(r),this.$(d),this._$AH=s}}_$AC(e){let t=si.get(e.strings);return t===void 0&&si.set(e.strings,t=new Ke(e)),t}T(e){Di(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const a of e)i===t.length?t.push(r=new Ze(this.k(qe()),this.k(qe()),this,this.options)):r=t[i],r._$AI(a),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class _t{constructor(e,t,r,i,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=Le(this,e,t,0),s=!Ye(e)||e!==this._$AH&&e!==ke,s&&(this._$AH=e);else{const d=e;let c,h;for(e=a[0],c=0;c<a.length-1;c++)h=Le(this,d[r+c],t,c),h===ke&&(h=this._$AH[c]),s||(s=!Ye(h)||h!==this._$AH[c]),h===A?e=A:e!==A&&(e+=(h??"")+a[c+1]),this._$AH[c]=h}s&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cn extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}const Mn=Me?Me.emptyScript:"";class kn extends _t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Mn):this.element.removeAttribute(this.name)}}class Ln extends _t{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){var r;if((e=(r=Le(this,e,t,0))!==null&&r!==void 0?r:A)===ke)return;const i=this._$AH,a=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==A&&(i===A||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Nn{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}}const oi=vt.litHtmlPolyfillSupport;oi==null||oi(Ke,Ze),((Ft=vt.litHtmlVersions)!==null&&Ft!==void 0?Ft:vt.litHtmlVersions=[]).push("2.8.0");const In=(n,e,t)=>{var r,i;const a=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let s=a._$litPart$;if(s===void 0){const d=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;a._$litPart$=s=new Ze(e.insertBefore(qe(),d),d,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt,jt;class se extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=In(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ke}}se.finalized=!0,se._$litElement$=!0,(Vt=globalThis.litElementHydrateSupport)===null||Vt===void 0||Vt.call(globalThis,{LitElement:se});const li=globalThis.litElementPolyfillSupport;li==null||li({LitElement:se});((jt=globalThis.litElementVersions)!==null&&jt!==void 0?jt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=n=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(n,e):((t,r)=>{const{kind:i,elements:a}=r;return{kind:i,elements:a,finisher(s){customElements.define(t,s)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},On=(n,e,t)=>{e.constructor.createProperty(t,n)};function b(n){return(e,t)=>t!==void 0?On(n,e,t):Dn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(n){return b({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pn=({finisher:n,descriptor:e})=>(t,r)=>{var i;if(r===void 0){const a=(i=t.originalKey)!==null&&i!==void 0?i:t.key,s=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return n!=null&&(s.finisher=function(d){n(d,a)}),s}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),n==null||n(a,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hi(n,e){return Pn({descriptor:t=>({get(){var i,a;return(a=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;((Wt=window.HTMLSlotElement)===null||Wt===void 0?void 0:Wt.prototype.assignedElements)!=null;function p(n){let e,t,r;return e=n,(i,a,s)=>{if(s.value!=null)s.value=ci(s.value,e,t,r);else if(s.get!=null)s.get=ci(s.get,e,t,r);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Gt=new Map;function ci(n,e,t=0,r){const i=Symbol("__memoized_map__");return function(...a){let s;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[i];if(Array.isArray(r))for(const c of r)Gt.has(c)?Gt.get(c).push(d):Gt.set(c,[d]);if(e||a.length>0||t>0){let c;e===!0?c=a.map(m=>m.toString()).join("!"):e?c=e.apply(this,a):c=a[0];const h=`${c}__timestamp`;let f=!1;if(t>0)if(!d.has(h))f=!0;else{let m=d.get(h);f=Date.now()-m>t}d.has(c)&&!f?s=d.get(c):(s=n.apply(this,a),d.set(c,s),t>0&&d.set(h,Date.now()))}else{const c=this;d.has(c)?s=d.get(c):(s=n.apply(this,a),d.set(c,s))}return s}}class lr{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}lr.shared=new lr;class de{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}de.shared=new de;class mt{parseValue(e){return de.shared.parseValue(e)}}mt.shared=new mt;class Xe{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const r=Date.parse(t);if(Number.isNaN(r))return;let i=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(i=new Date(i.getTime()+i.getTimezoneOffset()*1e3*60)),i}}Xe.shared=new Xe;class gt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let r;return t.length===1?r=this.parseNumberFormat(t[0]):r=this.parseColonSeparatedFormat(t),r}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const r=e.map((i,a)=>{const s=parseFloat(i);if(Number.isNaN(s))return t=!0,0;const c=60**(e.length-1-a);return s*Math.floor(c)}).reduce((i,a)=>i+a,0);return t?void 0:r}}gt.shared=new gt;class cr{parseValue(e){if(typeof e=="string")return e}}cr.shared=new cr;class Bn{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let r=[];for(const i of this.separators)if(r=t.split(i),r.length>1)break;return this.parseListValues(r)}parseListValues(e){const r=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),i=[];return r.forEach(a=>{a!==void 0&&i.push(a)}),i}}class dr{parseValue(e){if(typeof e=="string")return e}}dr.shared=new dr;class wt{parseValue(e){return String(e)}}wt.shared=new wt;class Q{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(r=>{const i=this.parser.parseValue(r);Array.isArray(i)?t.push(...i):i!==void 0&&t.push(i)}),t}}l([p()],Q.prototype,"values",null);l([p()],Q.prototype,"value",null);class Hn extends Q{constructor(e){super(lr.shared,e)}}class oe extends Q{constructor(e){super(Xe.shared,e)}}class qt extends Q{constructor(e){super(gt.shared,e)}}class G extends Q{constructor(e){super(de.shared,e)}}class T extends Q{constructor(e){super(wt.shared,e)}}class Un extends Q{constructor(e){super(dr.shared,e)}}class di extends Q{constructor(e){super(mt.shared,e)}}class Fn extends Q{constructor(e){super(cr.shared,e)}}class zn extends Q{constructor(e,t){super(t,e)}}class Vn extends zn{constructor(e){const t=new Bn(wt.shared);super(e,t)}}class g{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new oe(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new T(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new G(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new G(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new T(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new T(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new di(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new T(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new T(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new T(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new T(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new oe(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new T(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new G(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new qt(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new T(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new G(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new oe(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new T(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new T(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new G(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new di(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new T(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new qt(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new T(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new G(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Fn(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Hn(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new T(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new G(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new G(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new T(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new T(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Un(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new T(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new G(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new oe(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new T(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new oe(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new qt(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new T(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new T(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new oe(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new oe(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new oe(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Vn(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new T(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new T(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new T(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new G(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new T(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new T(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new G(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new T(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new T(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new G(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new G(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([p()],g.prototype,"addeddate",null);l([p()],g.prototype,"audio_codec",null);l([p()],g.prototype,"audio_sample_rate",null);l([p()],g.prototype,"avg_rating",null);l([p()],g.prototype,"collection",null);l([p()],g.prototype,"collections_raw",null);l([p()],g.prototype,"collection_size",null);l([p()],g.prototype,"contributor",null);l([p()],g.prototype,"coverage",null);l([p()],g.prototype,"creator",null);l([p()],g.prototype,"collection_layout",null);l([p()],g.prototype,"date",null);l([p()],g.prototype,"description",null);l([p()],g.prototype,"downloads",null);l([p()],g.prototype,"duration",null);l([p()],g.prototype,"external_identifier",null);l([p()],g.prototype,"files_count",null);l([p()],g.prototype,"indexdate",null);l([p()],g.prototype,"isbn",null);l([p()],g.prototype,"issue",null);l([p()],g.prototype,"item_count",null);l([p()],g.prototype,"item_size",null);l([p()],g.prototype,"language",null);l([p()],g.prototype,"length",null);l([p()],g.prototype,"lineage",null);l([p()],g.prototype,"month",null);l([p()],g.prototype,"mediatype",null);l([p()],g.prototype,"noindex",null);l([p()],g.prototype,"notes",null);l([p()],g.prototype,"num_favorites",null);l([p()],g.prototype,"num_reviews",null);l([p()],g.prototype,"openlibrary_edition",null);l([p()],g.prototype,"openlibrary_work",null);l([p()],g.prototype,"page_progression",null);l([p()],g.prototype,"partner",null);l([p()],g.prototype,"ppi",null);l([p()],g.prototype,"publicdate",null);l([p()],g.prototype,"publisher",null);l([p()],g.prototype,"reviewdate",null);l([p()],g.prototype,"runtime",null);l([p()],g.prototype,"scanner",null);l([p()],g.prototype,"source",null);l([p()],g.prototype,"start_localtime",null);l([p()],g.prototype,"start_time",null);l([p()],g.prototype,"stop_time",null);l([p()],g.prototype,"subject",null);l([p()],g.prototype,"taper",null);l([p()],g.prototype,"title",null);l([p()],g.prototype,"transferer",null);l([p()],g.prototype,"track",null);l([p()],g.prototype,"type",null);l([p()],g.prototype,"uploader",null);l([p()],g.prototype,"utc_offset",null);l([p()],g.prototype,"venue",null);l([p()],g.prototype,"volume",null);l([p()],g.prototype,"week",null);l([p()],g.prototype,"year",null);class Ne{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?mt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?gt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?de.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?de.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?de.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([p()],Ne.prototype,"size",null);l([p()],Ne.prototype,"length",null);l([p()],Ne.prototype,"height",null);l([p()],Ne.prototype,"width",null);l([p()],Ne.prototype,"track",null);class J{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Xe.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Xe.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?de.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([p()],J.prototype,"reviewdate",null);l([p()],J.prototype,"createdate",null);l([p()],J.prototype,"stars",null);class jn{constructor(e){var t,r;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(i=>new Ne(i)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new g(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(r=e.reviews)===null||r===void 0?void 0:r.map(i=>new J(i))}}var ge;(function(n){n.networkError="MetadataService.NetworkError",n.itemNotFound="MetadataService.ItemNotFound",n.decodingError="MetadataService.DecodingError",n.searchEngineError="MetadataService.SearchEngineError"})(ge||(ge={}));class ur extends Error{constructor(e,t,r){super(t),this.name=e,this.type=e,this.details=r}}class Wn{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const i=new URL(window.location.href).searchParams.get("scope");i&&(this.requestScope=i)}}async fetchMetadata(e,t){const r=t?`/${t}`:"",i=`https://${this.baseUrl}/metadata/${e}${r}`;return this.fetchUrl(i,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var r;const i=new URL(e);this.requestScope&&i.searchParams.set("scope",this.requestScope);let a;try{const s=(r=t==null?void 0:t.requestOptions)!==null&&r!==void 0?r:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(i.href,s)}catch(s){const d=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(ge.networkError,d)}try{const s=await a.json(),d=s.error;if(d){const c=s.forensics;return this.getErrorResult(ge.searchEngineError,d,c)}else return{success:s}}catch(s){const d=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(ge.decodingError,d)}}getErrorResult(e,t,r){return{error:new ur(e,t,r)}}}class ui{constructor(e){this.backend=e}async fetchMetadata(e){var t;const r=await this.backend.fetchMetadata(e);return r.error?r:((t=r.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new ur(ge.itemNotFound)}:{success:new jn(r.success)}}async fetchMetadataValue(e,t){var r;const i=await this.backend.fetchMetadata(e,t);return i.error?i:((r=i.success)===null||r===void 0?void 0:r.result)===void 0?{error:new ur(ge.itemNotFound)}:{success:i.success.result}}}ui.default=new ui(new Wn);let Gn=()=>({events:{},emit(n,...e){(this.events[n]||[]).forEach(t=>t(...e))},on(n,e){return(this.events[n]=this.events[n]||[]).push(e),()=>this.events[n]=(this.events[n]||[]).filter(t=>t!==e)}});function qn(n){return new Promise(e=>setTimeout(e,n))}var re;(function(n){n.retryNumber="retryNumber",n.owner="owner",n.dynamicImportLoaded="dynamicImportLoaded",n.hasBeenRetried="hasBeenRetried"})(re||(re={}));const hi="lazyLoaderService";class Yn{constructor(e){var t,r,i;this.emitter=Gn(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(r=e==null?void 0:e.retryCount)!==null&&r!==void 0?r:2,this.retryInterval=(i=e==null?void 0:e.retryInterval)!==null&&i!==void 0?i:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return ot(this,void 0,void 0,function*(){let t,r;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(r=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,r])})}loadScript(e){return ot(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return ot(this,void 0,void 0,function*(){const r=(t=e.retryNumber)!==null&&t!==void 0?t:0,i=`script[src='${e.src}'][async][${re.owner}='${hi}'][${re.retryNumber}='${r}']`;let a=this.container.querySelector(i);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:r})),this.container.appendChild(a)),new Promise((s,d)=>{if(a.getAttribute(re.dynamicImportLoaded)){s();return}const c=e.scriptBeingRetried,h=a.onload||(c==null?void 0:c.onload);a.onload=m=>{h==null||h(m),a.setAttribute(re.dynamicImportLoaded,"true"),s()};const f=a.onerror||(c==null?void 0:c.onerror);a.onerror=m=>ot(this,void 0,void 0,function*(){const _=a.getAttribute(re.hasBeenRetried);if(r<this.retryCount&&!_){a.setAttribute(re.hasBeenRetried,"true"),yield qn(this.retryInterval*1e3);const S=r+1;this.emitter.emit("scriptLoadRetried",e.src,S),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:S,scriptBeingRetried:a}))}else _||this.emitter.emit("scriptLoadFailed",e.src,m),f==null||f(m),d(m)})})})}getScriptTag(e){var t;const r=e.src.replace("'",'"'),i=document.createElement("script"),a=e.retryNumber;i.setAttribute(re.owner,hi),i.setAttribute("src",r),i.setAttribute(re.retryNumber,a.toString()),i.async=!0;const s=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(s).forEach(d=>{i.setAttribute(d,s[d])}),e.bundleType){case"module":i.setAttribute("type",e.bundleType);break;case"nomodule":i.setAttribute(e.bundleType,"");break}return i}}class Kn{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const r=this.createContainer();this.setup(r,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,r)=>{this.executionSuccessBlock=i=>{this.finishExecution(),t(i)},this.executionExpiredBlock=()=>{this.finishExecution(),r(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),r(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var r;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(r=t==null?void 0:t.size)!==null&&r!==void 0?r:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let r=document.getElementById(t);return r||(r=document.createElement("div"),r.id=t,r.style.position="fixed",r.style.top="50%",r.style.left="50%",r.style.zIndex=e?`${e}`:"10",document.body.appendChild(r)),r}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Xn{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Yn,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const r=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!r)throw new Error("The reCaptcha widget requires a site key");const i=this.recaptchaCache[r];if(i)return i;const a=await this.getRecaptchaLibrary(),s=new Kn({siteKey:r,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[r]=s,s}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=n=>typeof n!="string"&&"strTag"in n,Jn=(n,e,t)=>{let r=n[0];for(let i=1;i<n.length;i++)r+=e[i-1],r+=n[i];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=(n=>Zn(n)?Jn(n.strings,n.values):n);let E=Qn;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ea{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let n=0;n<256;n++)(n>>4&15).toString(16)+(n&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ta=new ea;ta.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ra={CHILD:2},ia=n=>(...e)=>({_$litDirective$:n,values:e});class na{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hr extends na{constructor(e){if(super(e),this.et=N,e.type!==ra.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this.ft=void 0,this.et=e;if(e===xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}hr.directiveName="unsafeHTML",hr.resultType=1;const Ui=ia(hr);/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:Fi,setPrototypeOf:pi,isFrozen:aa,getPrototypeOf:sa,getOwnPropertyDescriptor:oa}=Object;let{freeze:V,seal:q,create:zi}=Object,{apply:pr,construct:fr}=typeof Reflect<"u"&&Reflect;V||(V=function(e){return e});q||(q=function(e){return e});pr||(pr=function(e,t,r){return e.apply(t,r)});fr||(fr=function(e,t){return new e(...t)});const lt=j(Array.prototype.forEach),la=j(Array.prototype.lastIndexOf),fi=j(Array.prototype.pop),Fe=j(Array.prototype.push),ca=j(Array.prototype.splice),ut=j(String.prototype.toLowerCase),Yt=j(String.prototype.toString),vi=j(String.prototype.match),ze=j(String.prototype.replace),da=j(String.prototype.indexOf),ua=j(String.prototype.trim),Z=j(Object.prototype.hasOwnProperty),z=j(RegExp.prototype.test),Ve=ha(TypeError);function j(n){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return pr(n,e,r)}}function ha(n){return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return fr(n,t)}}function $(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ut;pi&&pi(n,null);let r=e.length;for(;r--;){let i=e[r];if(typeof i=="string"){const a=t(i);a!==i&&(aa(e)||(e[r]=a),i=a)}n[i]=!0}return n}function pa(n){for(let e=0;e<n.length;e++)Z(n,e)||(n[e]=null);return n}function fe(n){const e=zi(null);for(const[t,r]of Fi(n))Z(n,t)&&(Array.isArray(r)?e[t]=pa(r):r&&typeof r=="object"&&r.constructor===Object?e[t]=fe(r):e[t]=r);return e}function je(n,e){for(;n!==null;){const r=oa(n,e);if(r){if(r.get)return j(r.get);if(typeof r.value=="function")return j(r.value)}n=sa(n)}function t(){return null}return t}const mi=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Kt=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xt=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),fa=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zt=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),va=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),gi=V(["#text"]),wi=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Jt=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),yi=V(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ct=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ma=q(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ga=q(/<%[\w\W]*|[\w\W]*%>/gm),wa=q(/\$\{[\w\W]*/gm),ya=q(/^data-[\-\w.\u00B7-\uFFFF]+$/),ba=q(/^aria-[\-\w]+$/),Vi=q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_a=q(/^(?:\w+script|data):/i),$a=q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ji=q(/^html$/i),Aa=q(/^[a-z][.\w]*(-[.\w]+)+$/i);var bi=Object.freeze({__proto__:null,ARIA_ATTR:ba,ATTR_WHITESPACE:$a,CUSTOM_ELEMENT:Aa,DATA_ATTR:ya,DOCTYPE_NAME:ji,ERB_EXPR:ga,IS_ALLOWED_URI:Vi,IS_SCRIPT_OR_DATA:_a,MUSTACHE_EXPR:ma,TMPLIT_EXPR:wa});const We={element:1,text:3,progressingInstruction:7,comment:8,document:9},Ea=function(){return typeof window>"u"?null:window},Sa=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(r=t.getAttribute(i));const a="dompurify"+(r?"#"+r:"");try{return e.createPolicy(a,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},_i=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Wi(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ea();const e=w=>Wi(w);if(e.version="3.2.5",e.removed=[],!n||!n.document||n.document.nodeType!==We.document||!n.Element)return e.isSupported=!1,e;let{document:t}=n;const r=t,i=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:d,Element:c,NodeFilter:h,NamedNodeMap:f=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:m,DOMParser:_,trustedTypes:S}=n,ie=c.prototype,X=je(ie,"cloneNode"),qi=je(ie,"remove"),Yi=je(ie,"nextSibling"),Ki=je(ie,"childNodes"),Qe=je(ie,"parentNode");if(typeof s=="function"){const w=t.createElement("template");w.content&&w.content.ownerDocument&&(t=w.content.ownerDocument)}let H,Ie="";const{implementation:$t,createNodeIterator:Xi,createDocumentFragment:Zi,getElementsByTagName:Ji}=t,{importNode:Qi}=r;let U=_i();e.isSupported=typeof Fi=="function"&&typeof Qe=="function"&&$t&&$t.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:Et,TMPLIT_EXPR:St,DATA_ATTR:en,ARIA_ATTR:tn,IS_SCRIPT_OR_DATA:rn,ATTR_WHITESPACE:yr,CUSTOM_ELEMENT:nn}=bi;let{IS_ALLOWED_URI:br}=bi,I=null;const _r=$({},[...mi,...Kt,...Xt,...Zt,...gi]);let O=null;const $r=$({},[...wi,...Jt,...yi,...ct]);let L=Object.seal(zi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Tt=null,Ar=!0,Rt=!0,Er=!1,Sr=!0,be=!1,xt=!0,ue=!1,Ct=!1,Mt=!1,_e=!1,et=!1,tt=!1,Tr=!0,Rr=!1;const an="user-content-";let kt=!0,Oe=!1,$e={},Ae=null;const xr=$({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Cr=null;const Mr=$({},["audio","video","img","source","image","track"]);let Lt=null;const kr=$({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),rt="http://www.w3.org/1998/Math/MathML",it="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let Ee=ne,Nt=!1,It=null;const sn=$({},[rt,it,ne],Yt);let nt=$({},["mi","mo","mn","ms","mtext"]),at=$({},["annotation-xml"]);const on=$({},["title","style","font","a","script"]);let Pe=null;const ln=["application/xhtml+xml","text/html"],cn="text/html";let D=null,Se=null;const dn=t.createElement("form"),Lr=function(o){return o instanceof RegExp||o instanceof Function},Dt=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Se&&Se===o)){if((!o||typeof o!="object")&&(o={}),o=fe(o),Pe=ln.indexOf(o.PARSER_MEDIA_TYPE)===-1?cn:o.PARSER_MEDIA_TYPE,D=Pe==="application/xhtml+xml"?Yt:ut,I=Z(o,"ALLOWED_TAGS")?$({},o.ALLOWED_TAGS,D):_r,O=Z(o,"ALLOWED_ATTR")?$({},o.ALLOWED_ATTR,D):$r,It=Z(o,"ALLOWED_NAMESPACES")?$({},o.ALLOWED_NAMESPACES,Yt):sn,Lt=Z(o,"ADD_URI_SAFE_ATTR")?$(fe(kr),o.ADD_URI_SAFE_ATTR,D):kr,Cr=Z(o,"ADD_DATA_URI_TAGS")?$(fe(Mr),o.ADD_DATA_URI_TAGS,D):Mr,Ae=Z(o,"FORBID_CONTENTS")?$({},o.FORBID_CONTENTS,D):xr,De=Z(o,"FORBID_TAGS")?$({},o.FORBID_TAGS,D):{},Tt=Z(o,"FORBID_ATTR")?$({},o.FORBID_ATTR,D):{},$e=Z(o,"USE_PROFILES")?o.USE_PROFILES:!1,Ar=o.ALLOW_ARIA_ATTR!==!1,Rt=o.ALLOW_DATA_ATTR!==!1,Er=o.ALLOW_UNKNOWN_PROTOCOLS||!1,Sr=o.ALLOW_SELF_CLOSE_IN_ATTR!==!1,be=o.SAFE_FOR_TEMPLATES||!1,xt=o.SAFE_FOR_XML!==!1,ue=o.WHOLE_DOCUMENT||!1,_e=o.RETURN_DOM||!1,et=o.RETURN_DOM_FRAGMENT||!1,tt=o.RETURN_TRUSTED_TYPE||!1,Mt=o.FORCE_BODY||!1,Tr=o.SANITIZE_DOM!==!1,Rr=o.SANITIZE_NAMED_PROPS||!1,kt=o.KEEP_CONTENT!==!1,Oe=o.IN_PLACE||!1,br=o.ALLOWED_URI_REGEXP||Vi,Ee=o.NAMESPACE||ne,nt=o.MATHML_TEXT_INTEGRATION_POINTS||nt,at=o.HTML_INTEGRATION_POINTS||at,L=o.CUSTOM_ELEMENT_HANDLING||{},o.CUSTOM_ELEMENT_HANDLING&&Lr(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=o.CUSTOM_ELEMENT_HANDLING.tagNameCheck),o.CUSTOM_ELEMENT_HANDLING&&Lr(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),o.CUSTOM_ELEMENT_HANDLING&&typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),be&&(Rt=!1),et&&(_e=!0),$e&&(I=$({},gi),O=[],$e.html===!0&&($(I,mi),$(O,wi)),$e.svg===!0&&($(I,Kt),$(O,Jt),$(O,ct)),$e.svgFilters===!0&&($(I,Xt),$(O,Jt),$(O,ct)),$e.mathMl===!0&&($(I,Zt),$(O,yi),$(O,ct))),o.ADD_TAGS&&(I===_r&&(I=fe(I)),$(I,o.ADD_TAGS,D)),o.ADD_ATTR&&(O===$r&&(O=fe(O)),$(O,o.ADD_ATTR,D)),o.ADD_URI_SAFE_ATTR&&$(Lt,o.ADD_URI_SAFE_ATTR,D),o.FORBID_CONTENTS&&(Ae===xr&&(Ae=fe(Ae)),$(Ae,o.FORBID_CONTENTS,D)),kt&&(I["#text"]=!0),ue&&$(I,["html","head","body"]),I.table&&($(I,["tbody"]),delete De.tbody),o.TRUSTED_TYPES_POLICY){if(typeof o.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ve('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof o.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ve('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');H=o.TRUSTED_TYPES_POLICY,Ie=H.createHTML("")}else H===void 0&&(H=Sa(S,i)),H!==null&&typeof Ie=="string"&&(Ie=H.createHTML(""));V&&V(o),Se=o}},Nr=$({},[...Kt,...Xt,...fa]),Ir=$({},[...Zt,...va]),un=function(o){let u=Qe(o);(!u||!u.tagName)&&(u={namespaceURI:Ee,tagName:"template"});const v=ut(o.tagName),C=ut(u.tagName);return It[o.namespaceURI]?o.namespaceURI===it?u.namespaceURI===ne?v==="svg":u.namespaceURI===rt?v==="svg"&&(C==="annotation-xml"||nt[C]):!!Nr[v]:o.namespaceURI===rt?u.namespaceURI===ne?v==="math":u.namespaceURI===it?v==="math"&&at[C]:!!Ir[v]:o.namespaceURI===ne?u.namespaceURI===it&&!at[C]||u.namespaceURI===rt&&!nt[C]?!1:!Ir[v]&&(on[v]||!Nr[v]):!!(Pe==="application/xhtml+xml"&&It[o.namespaceURI]):!1},ee=function(o){Fe(e.removed,{element:o});try{Qe(o).removeChild(o)}catch{qi(o)}},st=function(o,u){try{Fe(e.removed,{attribute:u.getAttributeNode(o),from:u})}catch{Fe(e.removed,{attribute:null,from:u})}if(u.removeAttribute(o),o==="is")if(_e||et)try{ee(u)}catch{}else try{u.setAttribute(o,"")}catch{}},Dr=function(o){let u=null,v=null;if(Mt)o="<remove></remove>"+o;else{const P=vi(o,/^[\r\n\t ]+/);v=P&&P[0]}Pe==="application/xhtml+xml"&&Ee===ne&&(o='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+o+"</body></html>");const C=H?H.createHTML(o):o;if(Ee===ne)try{u=new _().parseFromString(C,Pe)}catch{}if(!u||!u.documentElement){u=$t.createDocument(Ee,"template",null);try{u.documentElement.innerHTML=Nt?Ie:C}catch{}}const B=u.body||u.documentElement;return o&&v&&B.insertBefore(t.createTextNode(v),B.childNodes[0]||null),Ee===ne?Ji.call(u,ue?"html":"body")[0]:ue?u.documentElement:B},Or=function(o){return Xi.call(o.ownerDocument||o,o,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Ot=function(o){return o instanceof m&&(typeof o.nodeName!="string"||typeof o.textContent!="string"||typeof o.removeChild!="function"||!(o.attributes instanceof f)||typeof o.removeAttribute!="function"||typeof o.setAttribute!="function"||typeof o.namespaceURI!="string"||typeof o.insertBefore!="function"||typeof o.hasChildNodes!="function")},Pr=function(o){return typeof d=="function"&&o instanceof d};function ae(w,o,u){lt(w,v=>{v.call(e,o,u,Se)})}const Br=function(o){let u=null;if(ae(U.beforeSanitizeElements,o,null),Ot(o))return ee(o),!0;const v=D(o.nodeName);if(ae(U.uponSanitizeElement,o,{tagName:v,allowedTags:I}),o.hasChildNodes()&&!Pr(o.firstElementChild)&&z(/<[/\w!]/g,o.innerHTML)&&z(/<[/\w!]/g,o.textContent)||o.nodeType===We.progressingInstruction||xt&&o.nodeType===We.comment&&z(/<[/\w]/g,o.data))return ee(o),!0;if(!I[v]||De[v]){if(!De[v]&&Ur(v)&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,v)||L.tagNameCheck instanceof Function&&L.tagNameCheck(v)))return!1;if(kt&&!Ae[v]){const C=Qe(o)||o.parentNode,B=Ki(o)||o.childNodes;if(B&&C){const P=B.length;for(let W=P-1;W>=0;--W){const te=X(B[W],!0);te.__removalCount=(o.__removalCount||0)+1,C.insertBefore(te,Yi(o))}}}return ee(o),!0}return o instanceof c&&!un(o)||(v==="noscript"||v==="noembed"||v==="noframes")&&z(/<\/no(script|embed|frames)/i,o.innerHTML)?(ee(o),!0):(be&&o.nodeType===We.text&&(u=o.textContent,lt([At,Et,St],C=>{u=ze(u,C," ")}),o.textContent!==u&&(Fe(e.removed,{element:o.cloneNode()}),o.textContent=u)),ae(U.afterSanitizeElements,o,null),!1)},Hr=function(o,u,v){if(Tr&&(u==="id"||u==="name")&&(v in t||v in dn))return!1;if(!(Rt&&!Tt[u]&&z(en,u))){if(!(Ar&&z(tn,u))){if(!O[u]||Tt[u]){if(!(Ur(o)&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,o)||L.tagNameCheck instanceof Function&&L.tagNameCheck(o))&&(L.attributeNameCheck instanceof RegExp&&z(L.attributeNameCheck,u)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(u))||u==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,v)||L.tagNameCheck instanceof Function&&L.tagNameCheck(v))))return!1}else if(!Lt[u]){if(!z(br,ze(v,yr,""))){if(!((u==="src"||u==="xlink:href"||u==="href")&&o!=="script"&&da(v,"data:")===0&&Cr[o])){if(!(Er&&!z(rn,ze(v,yr,"")))){if(v)return!1}}}}}}return!0},Ur=function(o){return o!=="annotation-xml"&&vi(o,nn)},Fr=function(o){ae(U.beforeSanitizeAttributes,o,null);const{attributes:u}=o;if(!u||Ot(o))return;const v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:O,forceKeepAttr:void 0};let C=u.length;for(;C--;){const B=u[C],{name:P,namespaceURI:W,value:te}=B,Be=D(P);let F=P==="value"?te:ua(te);if(v.attrName=Be,v.attrValue=F,v.keepAttr=!0,v.forceKeepAttr=void 0,ae(U.uponSanitizeAttribute,o,v),F=v.attrValue,Rr&&(Be==="id"||Be==="name")&&(st(P,o),F=an+F),xt&&z(/((--!?|])>)|<\/(style|title)/i,F)){st(P,o);continue}if(v.forceKeepAttr||(st(P,o),!v.keepAttr))continue;if(!Sr&&z(/\/>/i,F)){st(P,o);continue}be&&lt([At,Et,St],Vr=>{F=ze(F,Vr," ")});const zr=D(o.nodeName);if(Hr(zr,Be,F)){if(H&&typeof S=="object"&&typeof S.getAttributeType=="function"&&!W)switch(S.getAttributeType(zr,Be)){case"TrustedHTML":{F=H.createHTML(F);break}case"TrustedScriptURL":{F=H.createScriptURL(F);break}}try{W?o.setAttributeNS(W,P,F):o.setAttribute(P,F),Ot(o)?ee(o):fi(e.removed)}catch{}}}ae(U.afterSanitizeAttributes,o,null)},hn=function w(o){let u=null;const v=Or(o);for(ae(U.beforeSanitizeShadowDOM,o,null);u=v.nextNode();)ae(U.uponSanitizeShadowNode,u,null),Br(u),Fr(u),u.content instanceof a&&w(u.content);ae(U.afterSanitizeShadowDOM,o,null)};return e.sanitize=function(w){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=null,v=null,C=null,B=null;if(Nt=!w,Nt&&(w="<!-->"),typeof w!="string"&&!Pr(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw Ve("dirty is not a string, aborting")}else throw Ve("toString is not a function");if(!e.isSupported)return w;if(Ct||Dt(o),e.removed=[],typeof w=="string"&&(Oe=!1),Oe){if(w.nodeName){const te=D(w.nodeName);if(!I[te]||De[te])throw Ve("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof d)u=Dr("<!---->"),v=u.ownerDocument.importNode(w,!0),v.nodeType===We.element&&v.nodeName==="BODY"||v.nodeName==="HTML"?u=v:u.appendChild(v);else{if(!_e&&!be&&!ue&&w.indexOf("<")===-1)return H&&tt?H.createHTML(w):w;if(u=Dr(w),!u)return _e?null:tt?Ie:""}u&&Mt&&ee(u.firstChild);const P=Or(Oe?w:u);for(;C=P.nextNode();)Br(C),Fr(C),C.content instanceof a&&hn(C.content);if(Oe)return w;if(_e){if(et)for(B=Zi.call(u.ownerDocument);u.firstChild;)B.appendChild(u.firstChild);else B=u;return(O.shadowroot||O.shadowrootmode)&&(B=Qi.call(r,B,!0)),B}let W=ue?u.outerHTML:u.innerHTML;return ue&&I["!doctype"]&&u.ownerDocument&&u.ownerDocument.doctype&&u.ownerDocument.doctype.name&&z(ji,u.ownerDocument.doctype.name)&&(W="<!DOCTYPE "+u.ownerDocument.doctype.name+`>
`+W),be&&lt([At,Et,St],te=>{W=ze(W,te," ")}),H&&tt?H.createHTML(W):W},e.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Dt(w),Ct=!0},e.clearConfig=function(){Se=null,Ct=!1},e.isValidAttribute=function(w,o,u){Se||Dt({});const v=D(w),C=D(o);return Hr(v,C,u)},e.addHook=function(w,o){typeof o=="function"&&Fe(U[w],o)},e.removeHook=function(w,o){if(o!==void 0){const u=la(U[w],o);return u===-1?void 0:ca(U[w],u,1)[0]}return fi(U[w])},e.removeHooks=function(w){U[w]=[]},e.removeAllHooks=function(){U=_i()},e}var vr=Wi();const $i=R`var(--white, #fff)`,Ta=R`var(--ia-theme-link-color, #4b64ff)`,Ra=R`var(--primaryDisableCTAFill, #767676)`,xa=R`var(--secondaryCTABorder, #999)`,Ca=R`var(--primaryCTAFill, #194880)`,Qt=R`var(--primaryCTAFillRGB, 25, 72, 128)`,Ma=R`var(--primaryCTABorder, #c5d1df)`,ka=R`var(--primaryErrorCTAFill, #d9534f)`,er=R`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,La=R`var(--primaryErrorCTABorder, #d43f3a)`,Na=R`var(--secondaryCTAFill, #333)`,tr=R`var(--secondaryCTAFillRGB, 51, 51, 51)`,Ia=R`var(--primaryCTABorder, #979797)`,Da=R`var(---primaryWarningFill, #ee8950)`,rr=R`var(--primaryWarningFillRGB, 238, 137, 80)`,Oa=R`var(--primaryWarningBorder, #ec7939)`,Gi=R`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${$i};
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
    outline-color: ${$i};
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
    background-color: ${Ra};
    border: 1px solid ${xa};
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
    background-color: ${Ca};
    border-color: ${Ma};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Qt}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Qt}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Qt}, 0.7);
  }

  .ia-button.danger {
    background-color: ${ka};
    border-color: ${La};
  }
  .ia-button.danger:hover {
    background-color: rgba(${er}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${er}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${er}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Da};
    border-color: ${Oa};
  }
  .ia-button.warning:hover {
    background-color: rgba(${rr}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${rr}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${rr}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Na};
    border-color: ${Ia};
  }
  .ia-button.dark:hover {
    background-color: rgba(${tr}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${tr}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${tr}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Ta};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;R`
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
`;var Ai;(function(n){n.processing="processing",n.complete="complete"})(Ai||(Ai={}));let mr=class extends se{constructor(){super(...arguments),this.mode="processing"}render(){return y`
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
    `}static get styles(){const e=R`var(--activityIndicatorCheckmarkColor, #31A481)`,t=R`var(--activityIndicatorCompletedRingColor, #31A481)`,r=R`var(--activityIndicatorLoadingRingColor, #333333)`,i=R`var(--activityIndicatorLoadingDotColor, #333333)`;return R`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${r};
      }

      #activity-dots {
        fill: ${i};
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
    `}};l([b({type:String})],mr.prototype,"mode",void 0);mr=l([Je("ia-activity-indicator")],mr);const Pa=bt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ba=bt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ha=bt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function Ei(n=""){if(n.length<=40)return n;const t=n.substring(0,40)+"...";return y`<span title="${n}">${t}</span>`}const Ua=["a"];function Fa(n){return vr.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),vr.sanitize(n,{ALLOWED_TAGS:Ua})}function za(n,e=100,t=!0){if(n.length<e)return n;let r=e;if(t){const i=n.indexOf(" ",e),a=i-e<=20;if(a&&i===n.length-1)return n;i!==-1&&a&&(r=i)}return Va(n,r,e)}function Va(n,e,t){let r=n.slice(0,e);const i=r.match(/<a/gi);if(i){const a=r.match(/<\/a/gi);if(!a||a.length<i.length){const s=n.indexOf("</a>",e),d=s-t<=20;if(d&&n.length===s+4)return n;if(s!==-1&&d)r=n.slice(0,s+4);else{const c=r.lastIndexOf("<a");r=n.slice(0,c)}}}return r.concat("...")}const ja=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Wa(n){return n.replace(new RegExp('(?<=href=")[^"]+(?=")'),r=>r.replace(".","__DOT__")).replace(ja,r=>r=`<a href="${r.match(/^(https|http)/)?r:"https://"+r}" rel="ugc nofollow" target="_blank">${r}</a>`).replace("__DOT__",".")}function Ga(n){return n.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const qa=bt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let Y=class extends se{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?y`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?y`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${qa}
                  </button>
                `:A}
            <div class="top-line">
              <b>${E("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${E("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?y`<i>${E(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:y`
          <div class="error">
            ${E("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return A;const r=Fa(t),i=this.truncateContent(r,this.maxBodyLength);return y`${Ui(this.prepReview(i))}`}get truncationButtonsTemplate(){var e,t,r,i,a,s;return this.bypassTruncation||((r=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&r!==void 0?r:0)<=this.maxSubjectLength&&((s=(a=(i=this.review)===null||i===void 0?void 0:i.reviewbody)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:0)<=this.maxBodyLength?A:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return y`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${E("More...")}
      </button>
    `}get lessButtonTemplate(){return y`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${E("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?y`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${Ei(this.review.reviewer)}
            </a>
          `:y`${Ei(this.review.reviewer)}`:A}get starsTemplate(){return!this.review||!this.review.stars?A:y`
      <div
        class="review-stars"
        title="${E(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>y`<div class="review-star">${Ha}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return A;const r=new Date(this.review.reviewdate),i=new Date(this.review.createdate),a=i.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),s=r.getTime()!==i.getTime()?"(edited)":"";return E(`${a} ${s}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:za(e,t)}prepReview(e){return Ga(Wa(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(E("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return R`
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
    `}};l([b({type:Object})],Y.prototype,"review",void 0);l([b({type:String})],Y.prototype,"identifier",void 0);l([b({type:Number})],Y.prototype,"maxSubjectLength",void 0);l([b({type:Number})],Y.prototype,"maxBodyLength",void 0);l([b({type:String})],Y.prototype,"baseHost",void 0);l([b({type:String})],Y.prototype,"csrfToken",void 0);l([b({type:Boolean})],Y.prototype,"canDelete",void 0);l([b({type:Boolean})],Y.prototype,"bypassTruncation",void 0);l([k()],Y.prototype,"showTruncatedContent",void 0);l([k()],Y.prototype,"deleteMsg",void 0);Y=l([Je("ia-review")],Y);let M=class extends se{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return y`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:y`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,r,i,a,s,d,c,h;e.has("oldReview")&&(this.currentStars=(r=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&r!==void 0?r:0,this.currentSubjectLength=(s=(a=(i=this.oldReview)===null||i===void 0?void 0:i.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:0,this.currentBodyLength=(h=(c=(d=this.oldReview)===null||d===void 0?void 0:d.reviewbody)===null||c===void 0?void 0:c.length)!==null&&h!==void 0?h:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?y`
          <div class="unrecoverable-error">
            <span class="error-msg">${E(this.unrecoverableError)}</span>
          </div>
        `:A}get recoverableErrorTemplate(){return this.recoverableError?y`
          <div class="recoverable-error">
            ${Ui(this.sanitizeErrorMsg(E(this.recoverableError)))}
          </div>
        `:A}get recaptchaMessageTemplate(){return this.bypassRecaptcha?A:y`
      <span class="recaptcha-disclaimer"
        >${E(y`This site is protected by reCAPTCHA and the Google
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
    `}get starsInputTemplate(){return y`
      <div class="form-heading rating">
        <label for="stars-field">${E("Rating (optional)")}</label>
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
          ${E("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return y`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${E("Subject")}</label>
        ${this.maxSubjectLength?y`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:A}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?y`
            <div class="input-error">
              ${E(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:A}</div></span>
    `}get bodyInputTemplate(){var e,t;return y`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${E("Review")}</label>
          ${this.maxBodyLength?y`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:A}
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
        ${this.maxBodyLength?y`
              <div class="input-error">
                ${E(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:A}
      </span>
    `}get hiddenInputsTemplate(){return y`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?y`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:A}
    `}get actionButtonsTemplate(){return y`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${E("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?y`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:E("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,r=E(`Rate ${e>1?`${e} stars`:"1 star"}`);return y`
      <button
        class="star star-${e}"
        title=${t?E("Clear rating"):r}
        @click=${i=>this.handleStarClicked(i,e)}
      >
        ${e<=this.currentStars?Pa:Ba}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return vr.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const r=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();r.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))r.append(a[0],a[1]);r.append("submitter","review-form");const i=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:r});if((i==null?void 0:i.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),s=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(s)}else this.recoverableError=(t=i.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(r){console.error(r),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,r,i,a,s;const d=new Date().toDateString();return new J({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:d,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(i=(r=this.oldReview)===null||r===void 0?void 0:r.reviewer_itemname)!==null&&i!==void 0?i:this.submitterItemname,createdate:(s=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&s!==void 0?s:d})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Gi,R`
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
      `]}};l([b({type:String})],M.prototype,"identifier",void 0);l([b({type:String})],M.prototype,"token",void 0);l([b({type:String})],M.prototype,"baseHost",void 0);l([b({type:String})],M.prototype,"endpointPath",void 0);l([b({type:String})],M.prototype,"submitterScreenname",void 0);l([b({type:String})],M.prototype,"submitterItemname",void 0);l([b({type:Object})],M.prototype,"oldReview",void 0);l([b({type:String})],M.prototype,"unrecoverableError",void 0);l([b({type:Number})],M.prototype,"maxSubjectLength",void 0);l([b({type:Number})],M.prototype,"maxBodyLength",void 0);l([b({type:Object})],M.prototype,"fetchHandler",void 0);l([b({type:Object})],M.prototype,"recaptchaManager",void 0);l([b({type:Boolean})],M.prototype,"bypassRecaptcha",void 0);l([k()],M.prototype,"currentStars",void 0);l([k()],M.prototype,"currentSubjectLength",void 0);l([k()],M.prototype,"currentBodyLength",void 0);l([k()],M.prototype,"recoverableError",void 0);l([k()],M.prototype,"formCanSubmit",void 0);l([k()],M.prototype,"submissionInProgress",void 0);l([Hi("#review-form")],M.prototype,"reviewForm",void 0);M=l([Je("ia-review-form")],M);class Ya{constructor(e){var t,r,i,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(r=e==null?void 0:e.imageUrl)!==null&&r!==void 0?r:this.DEFAULT_IMAGE_URL,this.imageContainer=(i=e==null?void 0:e.imageContainer)!==null&&i!==void 0?i:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const r=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{r(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,r={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(r)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const r=e;r.eventConfiguration=t,this.sendEvent(r)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const r=e??{};r.service=(t=r.service)!==null&&t!==void 0?t:this.defaultService;const i=new URL(this.imageUrl),a=Object.keys(r);return a.forEach(s=>{const d=r[s];i.searchParams.append(s,d)}),i.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),i.searchParams.append("count",`${a.length+2}`),i}}class Ka{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const r=new URL(e).searchParams.get("iax");if(!r)return;const i=r.split("|"),a=i.length>=1?i[1]:"",s=i.length>=2?i[2]:"";this.analyticsManager.sendEventNoSampling({category:i[0],action:a,label:s})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:r,defaultFontSize:i}=this;r&&(t.loadtime=r),i&&(t.iaprop_fontSize=i),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,r=parseFloat(t)*1.6,i=t.replace(/(\d*\.\d+)|\d+/,"");return`${r}${i}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Xa{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Ya,this.analyticsHelpers=new Ka(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,r,i){this.sendEvent({category:e,action:t,label:r,eventConfiguration:i})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Za(n){return new Promise(e=>setTimeout(e,n))}class Ja{constructor(e){this.analyticsHandler=new Xa({enableAnalytics:!0}),this.sleep=Za,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,r=this.retryCount){const i=typeof e=="string"?e:e.url,a=this.retryCount-r+1;try{const s=await fetch(e,t);return s.ok?s:s.status===404?(this.log404Event(i),s):r>0?(await this.sleep(this.retryDelay),this.logRetryEvent(i,a,s.statusText,s.status),this.fetchRetry(e,t,r-1)):(this.logFailureEvent(i,s.status),s)}catch(s){if(this.isContentBlockerError(s))throw this.logContentBlockingEvent(i,s),s;if(r>0)return await this.sleep(this.retryDelay),this.logRetryEvent(i,a,s,s),this.fetchRetry(e,t,r-1);throw this.logFailureEvent(i,s),s}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,r,i){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${i}, status: ${r}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class Qa{constructor(e){this.fetchRetrier=new Ja,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const r=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(r,t)}async fetchApiResponse(e,t){const r={};return t!=null&&t.includeCredentials&&(r.credentials="include"),t!=null&&t.method&&(r.method=t.method),t!=null&&t.body&&(r.body=t.body),t!=null&&t.headers&&(r.headers=t.headers),await(await this.fetch(e,r)).json()}async fetch(e,t){let r=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(r=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(r,t)}addSearchParams(e,t){const r=typeof e=="string"?e:e.url,i=new URL(r,window.location.href);for(const[a,s]of Object.entries(t))i.searchParams.set(a,s);return typeof e=="string"?i.href:new Request(i.href,e)}}let x=class extends se{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new Qa,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?y`
      <div class="reviews-list">
        ${this.reviewsFrozen?y`<div class="message">
              ${E("Reviews can no longer be added to this item.")}
            </div>`:A}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):A)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return y`<div class="message">
      ${E("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?y`
        <div class="message">
          ${E("Reviews cannot be added to this item.")}
        </div>
      `:y`
      <div class="message">
        ${E("There are no reviews yet.")}
        ${E(y`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return y`
      <div class="message">
        ${this.reviewsCount===1?E("There is 1 review for this item."):E(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${E(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?A:y`<div class="own-review-container">
      ${this.displayReviewForm?y`<ia-review-form
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(r=>{!e&&r.reviewer_itemname===this.submitterItemname?e=r:t.push(r)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((r,i)=>r.createdate&&i.createdate?new Date(i.createdate).getTime()-new Date(r.createdate).getTime():0)}renderReview(e){return e?y`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:A}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[Gi,R`
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
      `]}};l([b({type:String})],x.prototype,"identifier",void 0);l([b({type:Array})],x.prototype,"reviews",void 0);l([b({type:Boolean})],x.prototype,"reviewsDisabled",void 0);l([b({type:Boolean})],x.prototype,"reviewsFrozen",void 0);l([b({type:Boolean})],x.prototype,"canDelete",void 0);l([b({type:Boolean})],x.prototype,"displayReviewsByDefault",void 0);l([b({type:Number})],x.prototype,"maxSubjectLength",void 0);l([b({type:Number})],x.prototype,"maxBodyLength",void 0);l([b({type:String})],x.prototype,"baseHost",void 0);l([b({type:String})],x.prototype,"token",void 0);l([b({type:String})],x.prototype,"endpointPath",void 0);l([b({type:String})],x.prototype,"submitterScreenname",void 0);l([b({type:String})],x.prototype,"submitterItemname",void 0);l([b({type:Object})],x.prototype,"recaptchaManager",void 0);l([b({type:Boolean})],x.prototype,"bypassRecaptcha",void 0);l([b({type:String})],x.prototype,"reviewSubmissionError",void 0);l([b({type:Boolean})],x.prototype,"reviewAddEditRequested",void 0);l([b({type:Object})],x.prototype,"fetchHandler",void 0);l([k()],x.prototype,"displayReviewForm",void 0);l([k()],x.prototype,"displayReviews",void 0);l([k()],x.prototype,"filteredReviews",void 0);l([k()],x.prototype,"currentReview",void 0);l([k()],x.prototype,"reviewsCount",void 0);l([k()],x.prototype,"recaptchaActivated",void 0);x=l([Je("ia-reviews")],x);class es{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let K=class extends se{constructor(){super(...arguments),this.mockOldReview=new J({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new J({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new J({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new J({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new J({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new J({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new es,this.mockRecaptchaManager=new Xn({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return y` <h2>General settings</h2>
      <button
        @click=${()=>this.useExistingReviews=!this.useExistingReviews}
      >
        ${this.useExistingReviews?"Remove":"Show"} existing reviews
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
          .reviews=${this.useExistingReviews?this.reviews.concat(this.review):[]}
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
      </div>`}renderReviewToggle(e,t){return y`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};K.styles=R`
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
  `;l([k()],K.prototype,"bypassRecaptcha",void 0);l([k()],K.prototype,"unrecoverableError",void 0);l([k()],K.prototype,"useCharCounts",void 0);l([k()],K.prototype,"allowDeletion",void 0);l([k()],K.prototype,"useExistingReviews",void 0);l([k()],K.prototype,"review",void 0);l([k()],K.prototype,"reviewsDisabled",void 0);l([k()],K.prototype,"reviewsFrozen",void 0);l([Hi("ia-reviews")],K.prototype,"reviewsComponent",void 0);K=l([Je("app-root")],K);
