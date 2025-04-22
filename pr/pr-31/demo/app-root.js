(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function u(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(o=i[c])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function at(i,e,t,n){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function c(f){try{h(n.next(f))}catch(g){o(g)}}function l(f){try{h(n.throw(f))}catch(g){o(g)}}function h(f){f.done?a(f.value):r(f.value).then(c,l)}h((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=window,mn=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gn=Symbol(),Wn=new WeakMap;let xr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==gn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(mn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Wn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Wn.set(t,e))}return e}toString(){return this.cssText}};const hi=i=>new xr(typeof i=="string"?i:i+"",void 0,gn),T=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new xr(t,i,gn)},pi=(i,e)=>{mn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=lt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Vn=mn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return hi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var It;const dt=window,jn=dt.trustedTypes,fi=jn?jn.emptyScript:"",Gn=dt.reactiveElementPolyfillSupport,tn={toAttribute(i,e){switch(e){case Boolean:i=i?fi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Mr=(i,e)=>e!==i&&(e==e||i==i),Dt={attribute:!0,type:String,converter:tn,reflect:!1,hasChanged:Mr},nn="finalized";let Te=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=Dt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dt}static finalize(){if(this.hasOwnProperty(nn))return!1;this[nn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Vn(r))}else e!==void 0&&t.push(Vn(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return pi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Dt){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:tn).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:tn;this._$El=a,this[a]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Mr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Te[nn]=!0,Te.elementProperties=new Map,Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Gn==null||Gn({ReactiveElement:Te}),((It=dt.reactiveElementVersions)!==null&&It!==void 0?It:dt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const ct=window,Se=ct.trustedTypes,Yn=Se?Se.createPolicy("lit-html",{createHTML:i=>i}):void 0,rn="$lit$",ae=`lit$${(Math.random()+"").slice(9)}$`,Cr="?"+ae,mi=`<${Cr}>`,ge=document,ht=()=>ge.createComment(""),je=i=>i===null||typeof i!="object"&&typeof i!="function",Rr=Array.isArray,gi=i=>Rr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Bt=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qn=/-->/g,Kn=/>/g,de=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xn=/'/g,Zn=/"/g,kr=/^(?:script|style|textarea|title)$/i,xe=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Jn=new WeakMap,pe=ge.createTreeWalker(ge,129,null,!1);function Lr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yn!==void 0?Yn.createHTML(e):e}const yi=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=Be;for(let c=0;c<t;c++){const l=i[c];let h,f,g=-1,b=0;for(;b<l.length&&(o.lastIndex=b,f=o.exec(l),f!==null);)b=o.lastIndex,o===Be?f[1]==="!--"?o=qn:f[1]!==void 0?o=Kn:f[2]!==void 0?(kr.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=de):f[3]!==void 0&&(o=de):o===de?f[0]===">"?(o=r??Be,g=-1):f[1]===void 0?g=-2:(g=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?de:f[3]==='"'?Zn:Xn):o===Zn||o===Xn?o=de:o===qn||o===Kn?o=Be:(o=de,r=void 0);const $=o===de&&i[c+1].startsWith("/>")?" ":"";a+=o===Be?l+mi:g>=0?(n.push(h),l.slice(0,g)+rn+l.slice(g)+ae+$):l+ae+(g===-2?(n.push(void 0),c):$)}return[Lr(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let an=class Nr{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const c=e.length-1,l=this.parts,[h,f]=yi(e,t);if(this.el=Nr.createElement(h,n),pe.currentNode=this.el.content,t===2){const g=this.el.content,b=g.firstChild;b.remove(),g.append(...b.childNodes)}for(;(r=pe.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const b of r.getAttributeNames())if(b.endsWith(rn)||b.startsWith(ae)){const $=f[o++];if(g.push(b),$!==void 0){const ee=r.getAttribute($.toLowerCase()+rn).split(ae),Y=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:Y[2],strings:ee,ctor:Y[1]==="."?bi:Y[1]==="?"?vi:Y[1]==="@"?Ai:yt})}else l.push({type:6,index:a})}for(const b of g)r.removeAttribute(b)}if(kr.test(r.tagName)){const g=r.textContent.split(ae),b=g.length-1;if(b>0){r.textContent=Se?Se.emptyScript:"";for(let $=0;$<b;$++)r.append(g[$],ht()),pe.nextNode(),l.push({type:2,index:++a});r.append(g[b],ht())}}}else if(r.nodeType===8)if(r.data===Cr)l.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(ae,g+1))!==-1;)l.push({type:7,index:a}),g+=ae.length-1}a++}}static createElement(e,t){const n=ge.createElement("template");return n.innerHTML=e,n}};function Me(i,e,t=i,n){var r,a,o,c;if(e===xe)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=je(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=Me(i,l._$AS(i,e.values),l,n)),e}let wi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ge).importNode(n,!0);pe.currentNode=a;let o=pe.nextNode(),c=0,l=0,h=r[0];for(;h!==void 0;){if(c===h.index){let f;h.type===2?f=new Or(o,o.nextSibling,this,e):h.type===1?f=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(f=new $i(o,this,e)),this._$AV.push(f),h=r[++l]}c!==(h==null?void 0:h.index)&&(o=pe.nextNode(),c++)}return pe.currentNode=ge,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Or=class Ir{constructor(e,t,n,r){var a;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Me(this,e,t),je(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):gi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&je(this._$AH)?this._$AA.nextSibling.data=e:this.$(ge.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=an.createElement(Lr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new wi(a,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=Jn.get(e.strings);return t===void 0&&Jn.set(e.strings,t=new an(e)),t}T(e){Rr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Ir(this.k(ht()),this.k(ht()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},yt=class{constructor(e,t,n,r,a){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Me(this,e,t,0),o=!je(e)||e!==this._$AH&&e!==xe,o&&(this._$AH=e);else{const c=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=Me(this,c[n+l],t,l),h===xe&&(h=this._$AH[l]),o||(o=!je(h)||h!==this._$AH[l]),h===C?e=C:e!==C&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bi=class extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}};const _i=Se?Se.emptyScript:"";let vi=class extends yt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,_i):this.element.removeAttribute(this.name)}},Ai=class extends yt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Me(this,e,t,0))!==null&&n!==void 0?n:C)===xe)return;const r=this._$AH,a=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==C&&(r===C||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},$i=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Me(this,e)}};const Qn=ct.litHtmlPolyfillSupport;Qn==null||Qn(an,Or),((Pt=ct.litHtmlVersions)!==null&&Pt!==void 0?Pt:ct.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;const pt=window,Ce=pt.trustedTypes,er=Ce?Ce.createPolicy("lit-html",{createHTML:i=>i}):void 0,sn="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,Dr="?"+se,Ei=`<${Dr}>`,ye=document,Ge=()=>ye.createComment(""),Ye=i=>i===null||typeof i!="object"&&typeof i!="function",Pr=Array.isArray,Ti=i=>Pr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ut=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tr=/-->/g,nr=/>/g,ce=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rr=/'/g,ir=/"/g,Br=/^(?:script|style|textarea|title)$/i,Hr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=Hr(1),yn=Hr(2),Re=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ar=new WeakMap,fe=ye.createTreeWalker(ye,129,null,!1);function Ur(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return er!==void 0?er.createHTML(e):e}const Si=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=He;for(let c=0;c<t;c++){const l=i[c];let h,f,g=-1,b=0;for(;b<l.length&&(o.lastIndex=b,f=o.exec(l),f!==null);)b=o.lastIndex,o===He?f[1]==="!--"?o=tr:f[1]!==void 0?o=nr:f[2]!==void 0?(Br.test(f[2])&&(r=RegExp("</"+f[2],"g")),o=ce):f[3]!==void 0&&(o=ce):o===ce?f[0]===">"?(o=r??He,g=-1):f[1]===void 0?g=-2:(g=o.lastIndex-f[2].length,h=f[1],o=f[3]===void 0?ce:f[3]==='"'?ir:rr):o===ir||o===rr?o=ce:o===tr||o===nr?o=He:(o=ce,r=void 0);const $=o===ce&&i[c+1].startsWith("/>")?" ":"";a+=o===He?l+Ei:g>=0?(n.push(h),l.slice(0,g)+sn+l.slice(g)+se+$):l+se+(g===-2?(n.push(void 0),c):$)}return[Ur(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class qe{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const c=e.length-1,l=this.parts,[h,f]=Si(e,t);if(this.el=qe.createElement(h,n),fe.currentNode=this.el.content,t===2){const g=this.el.content,b=g.firstChild;b.remove(),g.append(...b.childNodes)}for(;(r=fe.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const b of r.getAttributeNames())if(b.endsWith(sn)||b.startsWith(se)){const $=f[o++];if(g.push(b),$!==void 0){const ee=r.getAttribute($.toLowerCase()+sn).split(se),Y=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:Y[2],strings:ee,ctor:Y[1]==="."?Mi:Y[1]==="?"?Ri:Y[1]==="@"?ki:wt})}else l.push({type:6,index:a})}for(const b of g)r.removeAttribute(b)}if(Br.test(r.tagName)){const g=r.textContent.split(se),b=g.length-1;if(b>0){r.textContent=Ce?Ce.emptyScript:"";for(let $=0;$<b;$++)r.append(g[$],Ge()),fe.nextNode(),l.push({type:2,index:++a});r.append(g[b],Ge())}}}else if(r.nodeType===8)if(r.data===Dr)l.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(se,g+1))!==-1;)l.push({type:7,index:a}),g+=se.length-1}a++}}static createElement(e,t){const n=ye.createElement("template");return n.innerHTML=e,n}}function ke(i,e,t=i,n){var r,a,o,c;if(e===Re)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=Ye(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,t,n)),n!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=ke(i,l._$AS(i,e.values),l,n)),e}class xi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ye).importNode(n,!0);fe.currentNode=a;let o=fe.nextNode(),c=0,l=0,h=r[0];for(;h!==void 0;){if(c===h.index){let f;h.type===2?f=new Xe(o,o.nextSibling,this,e):h.type===1?f=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(f=new Li(o,this,e)),this._$AV.push(f),h=r[++l]}c!==(h==null?void 0:h.index)&&(o=fe.nextNode(),c++)}return fe.currentNode=ye,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Xe{constructor(e,t,n,r){var a;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),Ye(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Re&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ti(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==v&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=qe.createElement(Ur(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new xi(a,this),c=o.u(this.options);o.v(n),this.$(c),this._$AH=o}}_$AC(e){let t=ar.get(e.strings);return t===void 0&&ar.set(e.strings,t=new qe(e)),t}T(e){Pr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Xe(this.k(Ge()),this.k(Ge()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class wt{constructor(e,t,n,r,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=ke(this,e,t,0),o=!Ye(e)||e!==this._$AH&&e!==Re,o&&(this._$AH=e);else{const c=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=ke(this,c[n+l],t,l),h===Re&&(h=this._$AH[l]),o||(o=!Ye(h)||h!==this._$AH[l]),h===v?e=v:e!==v&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mi extends wt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}const Ci=Ce?Ce.emptyScript:"";class Ri extends wt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==v?this.element.setAttribute(this.name,Ci):this.element.removeAttribute(this.name)}}class ki extends wt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=ke(this,e,t,0))!==null&&n!==void 0?n:v)===Re)return;const r=this._$AH,a=e===v&&r!==v||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==v&&(r===v||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Li{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}}const sr=pt.litHtmlPolyfillSupport;sr==null||sr(qe,Xe),((Ht=pt.litHtmlVersions)!==null&&Ht!==void 0?Ht:pt.litHtmlVersions=[]).push("2.8.0");const Ni=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=a._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new Xe(e.insertBefore(Ge(),c),c,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft,zt;class oe extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ni(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Re}}oe.finalized=!0,oe._$litElement$=!0,(Ft=globalThis.litElementHydrateSupport)===null||Ft===void 0||Ft.call(globalThis,{LitElement:oe});const or=globalThis.litElementPolyfillSupport;or==null||or({LitElement:oe});((zt=globalThis.litElementVersions)!==null&&zt!==void 0?zt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ii=(i,e,t)=>{e.constructor.createProperty(t,i)};function I(i){return(e,t)=>t!==void 0?Ii(i,e,t):Oi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(i){return I({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(o.finisher=function(c){i(c,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fr(i,e){return Di({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;((Wt=window.HTMLSlotElement)===null||Wt===void 0?void 0:Wt.prototype.assignedElements)!=null;function p(i){let e,t,n;return e=i,(r,a,o)=>{if(o.value!=null)o.value=lr(o.value,e,t,n);else if(o.get!=null)o.get=lr(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Vt=new Map;function lr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let c=this[r];if(Array.isArray(n))for(const l of n)Vt.has(l)?Vt.get(l).push(c):Vt.set(l,[c]);if(e||a.length>0||t>0){let l;e===!0?l=a.map(g=>g.toString()).join("!"):e?l=e.apply(this,a):l=a[0];const h=`${l}__timestamp`;let f=!1;if(t>0)if(!c.has(h))f=!0;else{let g=c.get(h);f=Date.now()-g>t}c.has(l)&&!f?o=c.get(l):(o=i.apply(this,a),c.set(l,o),t>0&&c.set(h,Date.now()))}else{const l=this;c.has(l)?o=c.get(l):(o=i.apply(this,a),c.set(l,o))}return o}}class on{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}on.shared=new on;class le{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}le.shared=new le;class ft{parseValue(e){return le.shared.parseValue(e)}}ft.shared=new ft;class Ke{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Ke.shared=new Ke;class mt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const l=60**(e.length-1-a);return o*Math.floor(l)}).reduce((r,a)=>r+a,0);return t?void 0:n}}mt.shared=new mt;class ln{parseValue(e){if(typeof e=="string")return e}}ln.shared=new ln;class Pi{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class un{parseValue(e){if(typeof e=="string")return e}}un.shared=new un;class gt{parseValue(e){return String(e)}}gt.shared=new gt;class X{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}u([p()],X.prototype,"values",null);u([p()],X.prototype,"value",null);class Bi extends X{constructor(e){super(on.shared,e)}}class ie extends X{constructor(e){super(Ke.shared,e)}}class jt extends X{constructor(e){super(mt.shared,e)}}class j extends X{constructor(e){super(le.shared,e)}}class E extends X{constructor(e){super(gt.shared,e)}}class Hi extends X{constructor(e){super(un.shared,e)}}class ur extends X{constructor(e){super(ft.shared,e)}}class Ui extends X{constructor(e){super(ln.shared,e)}}class Fi extends X{constructor(e,t){super(t,e)}}class zi extends Fi{constructor(e){const t=new Pi(gt.shared);super(e,t)}}class y{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ie(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new E(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new j(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new j(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new E(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new E(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ur(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new E(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new E(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new E(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new E(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ie(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new E(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new j(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new jt(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new E(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new j(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ie(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new E(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new E(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new j(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ur(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new E(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new jt(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new E(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new j(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Ui(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Bi(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new E(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new j(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new j(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new E(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new E(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Hi(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new E(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new j(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ie(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new E(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ie(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new jt(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new E(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new E(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ie(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ie(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ie(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new zi(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new E(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new E(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new E(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new j(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new E(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new E(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new j(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new E(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new E(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new j(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new j(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}u([p()],y.prototype,"addeddate",null);u([p()],y.prototype,"audio_codec",null);u([p()],y.prototype,"audio_sample_rate",null);u([p()],y.prototype,"avg_rating",null);u([p()],y.prototype,"collection",null);u([p()],y.prototype,"collections_raw",null);u([p()],y.prototype,"collection_size",null);u([p()],y.prototype,"contributor",null);u([p()],y.prototype,"coverage",null);u([p()],y.prototype,"creator",null);u([p()],y.prototype,"collection_layout",null);u([p()],y.prototype,"date",null);u([p()],y.prototype,"description",null);u([p()],y.prototype,"downloads",null);u([p()],y.prototype,"duration",null);u([p()],y.prototype,"external_identifier",null);u([p()],y.prototype,"files_count",null);u([p()],y.prototype,"indexdate",null);u([p()],y.prototype,"isbn",null);u([p()],y.prototype,"issue",null);u([p()],y.prototype,"item_count",null);u([p()],y.prototype,"item_size",null);u([p()],y.prototype,"language",null);u([p()],y.prototype,"length",null);u([p()],y.prototype,"lineage",null);u([p()],y.prototype,"month",null);u([p()],y.prototype,"mediatype",null);u([p()],y.prototype,"noindex",null);u([p()],y.prototype,"notes",null);u([p()],y.prototype,"num_favorites",null);u([p()],y.prototype,"num_reviews",null);u([p()],y.prototype,"openlibrary_edition",null);u([p()],y.prototype,"openlibrary_work",null);u([p()],y.prototype,"page_progression",null);u([p()],y.prototype,"partner",null);u([p()],y.prototype,"ppi",null);u([p()],y.prototype,"publicdate",null);u([p()],y.prototype,"publisher",null);u([p()],y.prototype,"reviewdate",null);u([p()],y.prototype,"runtime",null);u([p()],y.prototype,"scanner",null);u([p()],y.prototype,"source",null);u([p()],y.prototype,"start_localtime",null);u([p()],y.prototype,"start_time",null);u([p()],y.prototype,"stop_time",null);u([p()],y.prototype,"subject",null);u([p()],y.prototype,"taper",null);u([p()],y.prototype,"title",null);u([p()],y.prototype,"transferer",null);u([p()],y.prototype,"track",null);u([p()],y.prototype,"type",null);u([p()],y.prototype,"uploader",null);u([p()],y.prototype,"utc_offset",null);u([p()],y.prototype,"venue",null);u([p()],y.prototype,"volume",null);u([p()],y.prototype,"week",null);u([p()],y.prototype,"year",null);class Le{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?ft.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?mt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?le.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?le.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?le.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}u([p()],Le.prototype,"size",null);u([p()],Le.prototype,"length",null);u([p()],Le.prototype,"height",null);u([p()],Le.prototype,"width",null);u([p()],Le.prototype,"track",null);class re{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Ke.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Ke.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?le.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}u([p()],re.prototype,"reviewdate",null);u([p()],re.prototype,"createdate",null);u([p()],re.prototype,"stars",null);class Wi{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Le(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new y(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new re(r))}}var me;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(me||(me={}));class dn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Vi{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(me.networkError,c)}try{const o=await a.json(),c=o.error;if(c){const l=o.forensics;return this.getErrorResult(me.searchEngineError,c,l)}else return{success:o}}catch(o){const c=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(me.decodingError,c)}}getErrorResult(e,t,n){return{error:new dn(e,t,n)}}}class dr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new dn(me.itemNotFound)}:{success:new Wi(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new dn(me.itemNotFound)}:{success:r.success.result}}}dr.default=new dr(new Vi);let ji=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Gi(i){return new Promise(e=>setTimeout(e,i))}var Q;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(Q||(Q={}));const cr="lazyLoaderService";class Yi{constructor(e){var t,n,r;this.emitter=ji(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return at(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return at(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return at(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${Q.owner}='${cr}'][${Q.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((o,c)=>{if(a.getAttribute(Q.dynamicImportLoaded)){o();return}const l=e.scriptBeingRetried,h=a.onload||(l==null?void 0:l.onload);a.onload=g=>{h==null||h(g),a.setAttribute(Q.dynamicImportLoaded,"true"),o()};const f=a.onerror||(l==null?void 0:l.onerror);a.onerror=g=>at(this,void 0,void 0,function*(){const b=a.getAttribute(Q.hasBeenRetried);if(n<this.retryCount&&!b){a.setAttribute(Q.hasBeenRetried,"true"),yield Gi(this.retryInterval*1e3);const $=n+1;this.emitter.emit("scriptLoadRetried",e.src,$),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:$,scriptBeingRetried:a}))}else b||this.emitter.emit("scriptLoadFailed",e.src,g),f==null||f(g),c(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(Q.owner,cr),r.setAttribute("src",n),r.setAttribute(Q.retryNumber,a.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(c=>{r.setAttribute(c,o[c])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class qi{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class hr{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Yi,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),o=new qi({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=i=>typeof i!="string"&&"strTag"in i,Xi=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=i=>Ki(i)?Xi(i.strings,i.values):i;let R=Zi;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ji{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qi=new Ji;Qi.resolve();const pr=T`var(--white, #fff)`,ea=T`var(--ia-theme-link-color, #4b64ff)`,ta=T`var(--primaryDisableCTAFill, #767676)`,na=T`var(--secondaryCTABorder, #999)`,ra=T`var(--primaryCTAFill, #194880)`,Gt=T`var(--primaryCTAFillRGB, 25, 72, 128)`,ia=T`var(--primaryCTABorder, #c5d1df)`,aa=T`var(--primaryErrorCTAFill, #d9534f)`,Yt=T`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,sa=T`var(--primaryErrorCTABorder, #d43f3a)`,oa=T`var(--secondaryCTAFill, #333)`,qt=T`var(--secondaryCTAFillRGB, 51, 51, 51)`,la=T`var(--primaryCTABorder, #979797)`,ua=T`var(---primaryWarningFill, #ee8950)`,Kt=T`var(--primaryWarningFillRGB, 238, 137, 80)`,da=T`var(--primaryWarningBorder, #ec7939)`,ca=T`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${pr};
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
    outline-color: ${pr};
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
    background-color: ${ta};
    border: 1px solid ${na};
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
    background-color: ${ra};
    border-color: ${ia};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Gt}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Gt}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Gt}, 0.7);
  }

  .ia-button.danger {
    background-color: ${aa};
    border-color: ${sa};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Yt}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Yt}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Yt}, 0.7);
  }

  .ia-button.warning {
    background-color: ${ua};
    border-color: ${da};
  }
  .ia-button.warning:hover {
    background-color: rgba(${Kt}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${Kt}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${Kt}, 0.7);
  }

  .ia-button.dark {
    background-color: ${oa};
    border-color: ${la};
  }
  .ia-button.dark:hover {
    background-color: rgba(${qt}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${qt}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${qt}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${ea};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;T`
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
`;var fr;(function(i){i.processing="processing",i.complete="complete"})(fr||(fr={}));let cn=class extends oe{constructor(){super(...arguments),this.mode="processing"}render(){return A`
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
    `}static get styles(){const e=T`var(--activityIndicatorCheckmarkColor, #31A481)`,t=T`var(--activityIndicatorCompletedRingColor, #31A481)`,n=T`var(--activityIndicatorLoadingRingColor, #333333)`,r=T`var(--activityIndicatorLoadingDotColor, #333333)`;return T`
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
    `}};u([I({type:String})],cn.prototype,"mode",void 0);cn=u([bt("ia-activity-indicator")],cn);const ha=yn`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,pa=yn`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ma=i=>(...e)=>({_$litDirective$:i,values:e});class ga{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hn extends ga{constructor(e){if(super(e),this.et=C,e.type!==fa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this.ft=void 0,this.et=e;if(e===xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}hn.directiveName="unsafeHTML",hn.resultType=1;const ya=ma(hn),wa=yn`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="currentColor"
  />
</svg>`;function mr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return A`<span title="${i}">${t}</span>`}/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:zr,setPrototypeOf:gr,isFrozen:ba,getPrototypeOf:_a,getOwnPropertyDescriptor:va}=Object;let{freeze:F,seal:G,create:Wr}=Object,{apply:pn,construct:fn}=typeof Reflect<"u"&&Reflect;F||(F=function(e){return e});G||(G=function(e){return e});pn||(pn=function(e,t,n){return e.apply(t,n)});fn||(fn=function(e,t){return new e(...t)});const st=z(Array.prototype.forEach),Aa=z(Array.prototype.lastIndexOf),yr=z(Array.prototype.pop),Ue=z(Array.prototype.push),$a=z(Array.prototype.splice),ut=z(String.prototype.toLowerCase),Xt=z(String.prototype.toString),wr=z(String.prototype.match),Fe=z(String.prototype.replace),Ea=z(String.prototype.indexOf),Ta=z(String.prototype.trim),q=z(Object.prototype.hasOwnProperty),U=z(RegExp.prototype.test),ze=Sa(TypeError);function z(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return pn(i,e,n)}}function Sa(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fn(i,t)}}function _(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ut;gr&&gr(i,null);let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(ba(e)||(e[n]=a),r=a)}i[r]=!0}return i}function xa(i){for(let e=0;e<i.length;e++)q(i,e)||(i[e]=null);return i}function he(i){const e=Wr(null);for(const[t,n]of zr(i))q(i,t)&&(Array.isArray(n)?e[t]=xa(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=he(n):e[t]=n);return e}function We(i,e){for(;i!==null;){const n=va(i,e);if(n){if(n.get)return z(n.get);if(typeof n.value=="function")return z(n.value)}i=_a(i)}function t(){return null}return t}const br=F(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Zt=F(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Jt=F(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ma=F(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Qt=F(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Ca=F(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),_r=F(["#text"]),vr=F(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),en=F(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ar=F(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ot=F(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ra=G(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ka=G(/<%[\w\W]*|[\w\W]*%>/gm),La=G(/\$\{[\w\W]*/gm),Na=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),Oa=G(/^aria-[\-\w]+$/),Vr=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ia=G(/^(?:\w+script|data):/i),Da=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jr=G(/^html$/i),Pa=G(/^[a-z][.\w]*(-[.\w]+)+$/i);var $r=Object.freeze({__proto__:null,ARIA_ATTR:Oa,ATTR_WHITESPACE:Da,CUSTOM_ELEMENT:Pa,DATA_ATTR:Na,DOCTYPE_NAME:jr,ERB_EXPR:ka,IS_ALLOWED_URI:Vr,IS_SCRIPT_OR_DATA:Ia,MUSTACHE_EXPR:Ra,TMPLIT_EXPR:La});const Ve={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ba=function(){return typeof window>"u"?null:window},Ha=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Er=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Gr(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ba();const e=w=>Gr(w);if(e.version="3.2.5",e.removed=[],!i||!i.document||i.document.nodeType!==Ve.document||!i.Element)return e.isSupported=!1,e;let{document:t}=i;const n=t,r=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:c,Element:l,NodeFilter:h,NamedNodeMap:f=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:g,DOMParser:b,trustedTypes:$}=i,ee=l.prototype,Y=We(ee,"cloneNode"),Yr=We(ee,"remove"),qr=We(ee,"nextSibling"),Kr=We(ee,"childNodes"),Ze=We(ee,"parentNode");if(typeof o=="function"){const w=t.createElement("template");w.content&&w.content.ownerDocument&&(t=w.content.ownerDocument)}let P,Ne="";const{implementation:_t,createNodeIterator:Xr,createDocumentFragment:Zr,getElementsByTagName:Jr}=t,{importNode:Qr}=n;let B=Er();e.isSupported=typeof zr=="function"&&typeof Ze=="function"&&_t&&_t.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:vt,ERB_EXPR:At,TMPLIT_EXPR:$t,DATA_ATTR:ei,ARIA_ATTR:ti,IS_SCRIPT_OR_DATA:ni,ATTR_WHITESPACE:wn,CUSTOM_ELEMENT:ri}=$r;let{IS_ALLOWED_URI:bn}=$r,k=null;const _n=_({},[...br,...Zt,...Jt,...Qt,..._r]);let N=null;const vn=_({},[...vr,...en,...Ar,...ot]);let x=Object.seal(Wr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,Et=null,An=!0,Tt=!0,$n=!1,En=!0,be=!1,St=!0,ue=!1,xt=!1,Mt=!1,_e=!1,Je=!1,Qe=!1,Tn=!0,Sn=!1;const ii="user-content-";let Ct=!0,Ie=!1,ve={},Ae=null;const xn=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Mn=null;const Cn=_({},["audio","video","img","source","image","track"]);let Rt=null;const Rn=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",te="http://www.w3.org/1999/xhtml";let $e=te,kt=!1,Lt=null;const ai=_({},[et,tt,te],Xt);let nt=_({},["mi","mo","mn","ms","mtext"]),rt=_({},["annotation-xml"]);const si=_({},["title","style","font","a","script"]);let De=null;const oi=["application/xhtml+xml","text/html"],li="text/html";let L=null,Ee=null;const ui=t.createElement("form"),kn=function(s){return s instanceof RegExp||s instanceof Function},Nt=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ee&&Ee===s)){if((!s||typeof s!="object")&&(s={}),s=he(s),De=oi.indexOf(s.PARSER_MEDIA_TYPE)===-1?li:s.PARSER_MEDIA_TYPE,L=De==="application/xhtml+xml"?Xt:ut,k=q(s,"ALLOWED_TAGS")?_({},s.ALLOWED_TAGS,L):_n,N=q(s,"ALLOWED_ATTR")?_({},s.ALLOWED_ATTR,L):vn,Lt=q(s,"ALLOWED_NAMESPACES")?_({},s.ALLOWED_NAMESPACES,Xt):ai,Rt=q(s,"ADD_URI_SAFE_ATTR")?_(he(Rn),s.ADD_URI_SAFE_ATTR,L):Rn,Mn=q(s,"ADD_DATA_URI_TAGS")?_(he(Cn),s.ADD_DATA_URI_TAGS,L):Cn,Ae=q(s,"FORBID_CONTENTS")?_({},s.FORBID_CONTENTS,L):xn,Oe=q(s,"FORBID_TAGS")?_({},s.FORBID_TAGS,L):{},Et=q(s,"FORBID_ATTR")?_({},s.FORBID_ATTR,L):{},ve=q(s,"USE_PROFILES")?s.USE_PROFILES:!1,An=s.ALLOW_ARIA_ATTR!==!1,Tt=s.ALLOW_DATA_ATTR!==!1,$n=s.ALLOW_UNKNOWN_PROTOCOLS||!1,En=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,be=s.SAFE_FOR_TEMPLATES||!1,St=s.SAFE_FOR_XML!==!1,ue=s.WHOLE_DOCUMENT||!1,_e=s.RETURN_DOM||!1,Je=s.RETURN_DOM_FRAGMENT||!1,Qe=s.RETURN_TRUSTED_TYPE||!1,Mt=s.FORCE_BODY||!1,Tn=s.SANITIZE_DOM!==!1,Sn=s.SANITIZE_NAMED_PROPS||!1,Ct=s.KEEP_CONTENT!==!1,Ie=s.IN_PLACE||!1,bn=s.ALLOWED_URI_REGEXP||Vr,$e=s.NAMESPACE||te,nt=s.MATHML_TEXT_INTEGRATION_POINTS||nt,rt=s.HTML_INTEGRATION_POINTS||rt,x=s.CUSTOM_ELEMENT_HANDLING||{},s.CUSTOM_ELEMENT_HANDLING&&kn(s.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(x.tagNameCheck=s.CUSTOM_ELEMENT_HANDLING.tagNameCheck),s.CUSTOM_ELEMENT_HANDLING&&kn(s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(x.attributeNameCheck=s.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(x.allowCustomizedBuiltInElements=s.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),be&&(Tt=!1),Je&&(_e=!0),ve&&(k=_({},_r),N=[],ve.html===!0&&(_(k,br),_(N,vr)),ve.svg===!0&&(_(k,Zt),_(N,en),_(N,ot)),ve.svgFilters===!0&&(_(k,Jt),_(N,en),_(N,ot)),ve.mathMl===!0&&(_(k,Qt),_(N,Ar),_(N,ot))),s.ADD_TAGS&&(k===_n&&(k=he(k)),_(k,s.ADD_TAGS,L)),s.ADD_ATTR&&(N===vn&&(N=he(N)),_(N,s.ADD_ATTR,L)),s.ADD_URI_SAFE_ATTR&&_(Rt,s.ADD_URI_SAFE_ATTR,L),s.FORBID_CONTENTS&&(Ae===xn&&(Ae=he(Ae)),_(Ae,s.FORBID_CONTENTS,L)),Ct&&(k["#text"]=!0),ue&&_(k,["html","head","body"]),k.table&&(_(k,["tbody"]),delete Oe.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');P=s.TRUSTED_TYPES_POLICY,Ne=P.createHTML("")}else P===void 0&&(P=Ha($,r)),P!==null&&typeof Ne=="string"&&(Ne=P.createHTML(""));F&&F(s),Ee=s}},Ln=_({},[...Zt,...Jt,...Ma]),Nn=_({},[...Qt,...Ca]),di=function(s){let d=Ze(s);(!d||!d.tagName)&&(d={namespaceURI:$e,tagName:"template"});const m=ut(s.tagName),S=ut(d.tagName);return Lt[s.namespaceURI]?s.namespaceURI===tt?d.namespaceURI===te?m==="svg":d.namespaceURI===et?m==="svg"&&(S==="annotation-xml"||nt[S]):!!Ln[m]:s.namespaceURI===et?d.namespaceURI===te?m==="math":d.namespaceURI===tt?m==="math"&&rt[S]:!!Nn[m]:s.namespaceURI===te?d.namespaceURI===tt&&!rt[S]||d.namespaceURI===et&&!nt[S]?!1:!Nn[m]&&(si[m]||!Ln[m]):!!(De==="application/xhtml+xml"&&Lt[s.namespaceURI]):!1},Z=function(s){Ue(e.removed,{element:s});try{Ze(s).removeChild(s)}catch{Yr(s)}},it=function(s,d){try{Ue(e.removed,{attribute:d.getAttributeNode(s),from:d})}catch{Ue(e.removed,{attribute:null,from:d})}if(d.removeAttribute(s),s==="is")if(_e||Je)try{Z(d)}catch{}else try{d.setAttribute(s,"")}catch{}},On=function(s){let d=null,m=null;if(Mt)s="<remove></remove>"+s;else{const O=wr(s,/^[\r\n\t ]+/);m=O&&O[0]}De==="application/xhtml+xml"&&$e===te&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const S=P?P.createHTML(s):s;if($e===te)try{d=new b().parseFromString(S,De)}catch{}if(!d||!d.documentElement){d=_t.createDocument($e,"template",null);try{d.documentElement.innerHTML=kt?Ne:S}catch{}}const D=d.body||d.documentElement;return s&&m&&D.insertBefore(t.createTextNode(m),D.childNodes[0]||null),$e===te?Jr.call(d,ue?"html":"body")[0]:ue?d.documentElement:D},In=function(s){return Xr.call(s.ownerDocument||s,s,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Ot=function(s){return s instanceof g&&(typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||!(s.attributes instanceof f)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function")},Dn=function(s){return typeof c=="function"&&s instanceof c};function ne(w,s,d){st(w,m=>{m.call(e,s,d,Ee)})}const Pn=function(s){let d=null;if(ne(B.beforeSanitizeElements,s,null),Ot(s))return Z(s),!0;const m=L(s.nodeName);if(ne(B.uponSanitizeElement,s,{tagName:m,allowedTags:k}),s.hasChildNodes()&&!Dn(s.firstElementChild)&&U(/<[/\w!]/g,s.innerHTML)&&U(/<[/\w!]/g,s.textContent)||s.nodeType===Ve.progressingInstruction||St&&s.nodeType===Ve.comment&&U(/<[/\w]/g,s.data))return Z(s),!0;if(!k[m]||Oe[m]){if(!Oe[m]&&Hn(m)&&(x.tagNameCheck instanceof RegExp&&U(x.tagNameCheck,m)||x.tagNameCheck instanceof Function&&x.tagNameCheck(m)))return!1;if(Ct&&!Ae[m]){const S=Ze(s)||s.parentNode,D=Kr(s)||s.childNodes;if(D&&S){const O=D.length;for(let V=O-1;V>=0;--V){const J=Y(D[V],!0);J.__removalCount=(s.__removalCount||0)+1,S.insertBefore(J,qr(s))}}}return Z(s),!0}return s instanceof l&&!di(s)||(m==="noscript"||m==="noembed"||m==="noframes")&&U(/<\/no(script|embed|frames)/i,s.innerHTML)?(Z(s),!0):(be&&s.nodeType===Ve.text&&(d=s.textContent,st([vt,At,$t],S=>{d=Fe(d,S," ")}),s.textContent!==d&&(Ue(e.removed,{element:s.cloneNode()}),s.textContent=d)),ne(B.afterSanitizeElements,s,null),!1)},Bn=function(s,d,m){if(Tn&&(d==="id"||d==="name")&&(m in t||m in ui))return!1;if(!(Tt&&!Et[d]&&U(ei,d))){if(!(An&&U(ti,d))){if(!N[d]||Et[d]){if(!(Hn(s)&&(x.tagNameCheck instanceof RegExp&&U(x.tagNameCheck,s)||x.tagNameCheck instanceof Function&&x.tagNameCheck(s))&&(x.attributeNameCheck instanceof RegExp&&U(x.attributeNameCheck,d)||x.attributeNameCheck instanceof Function&&x.attributeNameCheck(d))||d==="is"&&x.allowCustomizedBuiltInElements&&(x.tagNameCheck instanceof RegExp&&U(x.tagNameCheck,m)||x.tagNameCheck instanceof Function&&x.tagNameCheck(m))))return!1}else if(!Rt[d]){if(!U(bn,Fe(m,wn,""))){if(!((d==="src"||d==="xlink:href"||d==="href")&&s!=="script"&&Ea(m,"data:")===0&&Mn[s])){if(!($n&&!U(ni,Fe(m,wn,"")))){if(m)return!1}}}}}}return!0},Hn=function(s){return s!=="annotation-xml"&&wr(s,ri)},Un=function(s){ne(B.beforeSanitizeAttributes,s,null);const{attributes:d}=s;if(!d||Ot(s))return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:N,forceKeepAttr:void 0};let S=d.length;for(;S--;){const D=d[S],{name:O,namespaceURI:V,value:J}=D,Pe=L(O);let H=O==="value"?J:Ta(J);if(m.attrName=Pe,m.attrValue=H,m.keepAttr=!0,m.forceKeepAttr=void 0,ne(B.uponSanitizeAttribute,s,m),H=m.attrValue,Sn&&(Pe==="id"||Pe==="name")&&(it(O,s),H=ii+H),St&&U(/((--!?|])>)|<\/(style|title)/i,H)){it(O,s);continue}if(m.forceKeepAttr||(it(O,s),!m.keepAttr))continue;if(!En&&U(/\/>/i,H)){it(O,s);continue}be&&st([vt,At,$t],zn=>{H=Fe(H,zn," ")});const Fn=L(s.nodeName);if(Bn(Fn,Pe,H)){if(P&&typeof $=="object"&&typeof $.getAttributeType=="function"&&!V)switch($.getAttributeType(Fn,Pe)){case"TrustedHTML":{H=P.createHTML(H);break}case"TrustedScriptURL":{H=P.createScriptURL(H);break}}try{V?s.setAttributeNS(V,O,H):s.setAttribute(O,H),Ot(s)?Z(s):yr(e.removed)}catch{}}}ne(B.afterSanitizeAttributes,s,null)},ci=function w(s){let d=null;const m=In(s);for(ne(B.beforeSanitizeShadowDOM,s,null);d=m.nextNode();)ne(B.uponSanitizeShadowNode,d,null),Pn(d),Un(d),d.content instanceof a&&w(d.content);ne(B.afterSanitizeShadowDOM,s,null)};return e.sanitize=function(w){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=null,m=null,S=null,D=null;if(kt=!w,kt&&(w="<!-->"),typeof w!="string"&&!Dn(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw ze("dirty is not a string, aborting")}else throw ze("toString is not a function");if(!e.isSupported)return w;if(xt||Nt(s),e.removed=[],typeof w=="string"&&(Ie=!1),Ie){if(w.nodeName){const J=L(w.nodeName);if(!k[J]||Oe[J])throw ze("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof c)d=On("<!---->"),m=d.ownerDocument.importNode(w,!0),m.nodeType===Ve.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?d=m:d.appendChild(m);else{if(!_e&&!be&&!ue&&w.indexOf("<")===-1)return P&&Qe?P.createHTML(w):w;if(d=On(w),!d)return _e?null:Qe?Ne:""}d&&Mt&&Z(d.firstChild);const O=In(Ie?w:d);for(;S=O.nextNode();)Pn(S),Un(S),S.content instanceof a&&ci(S.content);if(Ie)return w;if(_e){if(Je)for(D=Zr.call(d.ownerDocument);d.firstChild;)D.appendChild(d.firstChild);else D=d;return(N.shadowroot||N.shadowrootmode)&&(D=Qr.call(n,D,!0)),D}let V=ue?d.outerHTML:d.innerHTML;return ue&&k["!doctype"]&&d.ownerDocument&&d.ownerDocument.doctype&&d.ownerDocument.doctype.name&&U(jr,d.ownerDocument.doctype.name)&&(V="<!DOCTYPE "+d.ownerDocument.doctype.name+`>
`+V),be&&st([vt,At,$t],J=>{V=Fe(V,J," ")}),P&&Qe?P.createHTML(V):V},e.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Nt(w),xt=!0},e.clearConfig=function(){Ee=null,xt=!1},e.isValidAttribute=function(w,s,d){Ee||Nt({});const m=L(w),S=L(s);return Bn(m,S,d)},e.addHook=function(w,s){typeof s=="function"&&Ue(B[w],s)},e.removeHook=function(w,s){if(s!==void 0){const d=Aa(B[w],s);return d===-1?void 0:$a(B[w],d,1)[0]}return yr(B[w])},e.removeHooks=function(w){B[w]=[]},e.removeAllHooks=function(){B=Er()},e}var Tr=Gr();const Ua=["a"];function Fa(i){return Tr.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Tr.sanitize(i,{ALLOWED_TAGS:Ua})}function Sr(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return za(i,n,e)}function za(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const o=i.indexOf("</a>",e),c=o-t<=20;if(c&&i.length===o+4)return i;if(o!==-1&&c)n=i.slice(0,o+4);else{const l=n.lastIndexOf("<a");n=i.slice(0,l)}}}return n.concat("...")}const Wa=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Va(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Wa,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function ja(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}let we=class extends oe{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.showTruncatedContent=!1}render(){return this.review?A`
          <article class="review" id=${this.generateDomId()}>
            <div class="top-line">
              <b>${R("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${R("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">${this.bodyTemplate}</div>
            ${this.truncationButtonsTemplate}
          </article>
        `:A`
          <div class="error">
            ${R("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;return!((e=this.review)===null||e===void 0)&&e.reviewtitle?this.review.reviewtitle.length<=this.maxSubjectLength||this.showTruncatedContent?this.review.reviewtitle:Sr(this.review.reviewtitle,this.maxSubjectLength):""}get bodyTemplate(){var e;if(!(!((e=this.review)===null||e===void 0)&&e.reviewbody))return v;const t=Fa(this.review.reviewbody),n=t.length<=this.maxBodyLength||this.showTruncatedContent?t:Sr(t,this.maxBodyLength);return A`${ya(this.prepReview(n))}`}get truncationButtonsTemplate(){var e,t;return!(!((e=this.review)===null||e===void 0)&&e.reviewtitle)||!(!((t=this.review)===null||t===void 0)&&t.reviewbody)||this.review.reviewtitle.length<=this.maxSubjectLength&&this.review.reviewbody.length<=this.maxBodyLength?v:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return A`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${R("More...")}
      </button>
    `}get lessButtonTemplate(){return A`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${R("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?A`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${mr(this.review.reviewer)}
            </a>
          `:A`${mr(this.review.reviewer)}`:v}get starsTemplate(){return!this.review||!this.review.stars?v:A`
      <div
        class="review-stars"
        title="${R(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>A`<div class="review-star">${wa}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return v;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return R(`${a} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}prepReview(e){return ja(Va(e))}static get styles(){return T`
      :host {
        font-family: var(
          --ia-font-stack,
          'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif
        );

        font-size: inherit;
      }

      .error {
        color: var(--ia-theme-error-color, #cc0000);
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
        color: var(--ia-link-color, #4b64ff);
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
    `}};u([I({type:Object})],we.prototype,"review",void 0);u([I({type:Number})],we.prototype,"maxSubjectLength",void 0);u([I({type:Number})],we.prototype,"maxBodyLength",void 0);u([I({type:String})],we.prototype,"baseHost",void 0);u([W()],we.prototype,"showTruncatedContent",void 0);we=u([bt("ia-review")],we);let M=class extends oe{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.displayMode="form",this.bypassRecaptcha=!1,this.recaptchaToken="",this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later."}render(){return this.displayMode==="review"?A`<ia-review .review=${this.oldReview}></ia-review>`:A`
          <form
            id="review-form"
            action="${this.baseHost}${this.endpointPath}"
            method="post"
          >
            ${this.unrecoverableError?this.unrecoverableErrorTemplate:A`
                  <span class="inputs">
                    ${this.starsInputTemplate} ${this.subjectInputTemplate}
                    ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
                  </span>
                `}
            ${this.recoverableErrorTemplate} ${this.actionButtonsTemplate}
          </form>
        `}firstUpdated(){this.formCanSubmit=this.checkSubmissionAllowed()}updated(e){e.has("oldReview")&&this.oldReview&&(this.oldReview.stars&&(this.currentStars=this.oldReview.stars),this.oldReview.reviewtitle&&(this.currentSubjectLength=this.oldReview.reviewtitle.length),this.oldReview.reviewbody&&(this.currentBodyLength=this.oldReview.reviewbody.length)),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&!this.unrecoverableError&&this.setupRecaptcha(),(e.has("currentSubjectLength")||e.has("currentBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?A`
          <div class="unrecoverable-error">
            <span class="error-msg">${R(this.unrecoverableError)}</span>
          </div>
        `:v}get recoverableErrorTemplate(){return this.recoverableError?A`
          <div class="recoverable-error">${R(this.recoverableError)}</div>
        `:v}get starsInputTemplate(){return A`
      <div class="form-heading">
        <label for="stars-field">${R("Rating (optional)")}</label>
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
          ${R("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return A`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${R("Subject")}</label>
        ${this.maxSubjectLength?A`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:v}
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="field_reviewtitle"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        @input=${this.handleSubjectChanged}
        required
    />${this.maxSubjectLength?A`
            <div class="input-error">
              ${R(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:v}</div></span>
    `}get bodyInputTemplate(){var e,t;return A`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${R("Review")}</label>
          ${this.maxBodyLength?A`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:v}
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
        ${this.maxBodyLength?A`
              <div class="input-error">
                ${R(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:v}
      </span>
    `}get hiddenInputsTemplate(){return A`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      <input
        type="hidden"
        name="g-recaptcha-response"
        .value=${this.recaptchaToken}
      />
      <!-- Indicates to backend that form submission is intended -->
      <input type="hidden" name="action" value="1" />
      ${this.identifier?A`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:v}
    `}get actionButtonsTemplate(){return A`
      <div class="action-btns">
        ${this.identifier?A`
              <a
                class="ia-button dark"
                href="${this.baseHost}/details/${this.identifier}"
                data-testid="cancel-btn"
              >
                ${R("Cancel")}
              </a>
            `:v}

        <button
          type="submit"
          class="ia-button primary"
          name="submit"
          ?disabled=${!this.formCanSubmit||this.submissionInProgress}
          @click=${this.handleSubmit}
        >
          ${this.submissionInProgress?A`
                <span class="loading-indicator" alt="Loading indicator">
                  <ia-activity-indicator></ia-activity-indicator>
                </span>
              `:R("Submit review")}
        </button>
      </div>
    `}renderStar(e){const t=e===this.currentStars,n=R(`Rate ${e>1?`${e} stars`:"1 star"}`);return A`
      <button
        class="star star-${e}"
        title=${t?R("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?ha:pa}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}async handleSubmit(e){if(e.preventDefault(),!this.submissionInProgress){if(this.submissionInProgress=!0,!this.reviewForm.reportValidity())return this.stopSubmission();if(this.bypassRecaptcha){this.reviewForm.requestSubmit();return}if(!this.recaptchaWidget)return this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission();try{const t=await this.recaptchaWidget.execute();this.dispatchEvent(new Event("recaptchaFinished")),this.recaptchaToken=t,await this.updateComplete,this.reviewForm.requestSubmit()}catch{return this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}}}stopSubmission(){this.submissionInProgress=!1}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[ca,T`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
          --ia-theme-error-color: #cc0000;
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
        .unrecoverable-error,
        .recoverable-error {
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

        .unrecoverable-error {
          height: 350px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f5f5f7;
        }

        .loading-indicator {
          display: block;
          width: 20px;
          height: 20px;
          margin-top: 2px;
          --activityIndicatorLoadingRingColor: #fff;
          --activityIndicatorLoadingDotColor: #fff;
        }
      `]}};u([I({type:String})],M.prototype,"identifier",void 0);u([I({type:String})],M.prototype,"token",void 0);u([I({type:String})],M.prototype,"baseHost",void 0);u([I({type:String})],M.prototype,"endpointPath",void 0);u([I({type:String})],M.prototype,"displayMode",void 0);u([I({type:Object})],M.prototype,"oldReview",void 0);u([I({type:String})],M.prototype,"unrecoverableError",void 0);u([I({type:Number})],M.prototype,"maxSubjectLength",void 0);u([I({type:Number})],M.prototype,"maxBodyLength",void 0);u([I({type:Object})],M.prototype,"recaptchaManager",void 0);u([I({type:Boolean})],M.prototype,"bypassRecaptcha",void 0);u([W()],M.prototype,"recaptchaToken",void 0);u([W()],M.prototype,"currentStars",void 0);u([W()],M.prototype,"currentSubjectLength",void 0);u([W()],M.prototype,"currentBodyLength",void 0);u([W()],M.prototype,"recoverableError",void 0);u([W()],M.prototype,"formCanSubmit",void 0);u([W()],M.prototype,"submissionInProgress",void 0);u([Fr("#review-form")],M.prototype,"reviewForm",void 0);M=u([bt("ia-review-form")],M);let K=class extends oe{constructor(){super(...arguments),this.mockOldReview=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new re({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new re({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.goodRecaptchaManager=new hr({defaultSiteKey:"demo-key"}),this.badRecaptchaManager=new hr({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.recoverableError=!1,this.useCharCounts=!0,this.useReviewDisplay=!1,this.review=this.mockOldReview}render(){return A` <h2>Toggle ReCaptcha</h2>
      ${this.recaptchaManager?v:A`
            <button
              @click=${()=>this.recaptchaManager=this.goodRecaptchaManager}
            >
              Turn on ReCaptcha (good site key)</button
            ><button
              @click=${()=>this.recaptchaManager=this.badRecaptchaManager}
            >
              Turn on ReCaptcha (bad site key)
            </button>
          `}
      <button @click=${()=>this.bypassRecaptcha=!this.bypassRecaptcha}>
        ${this.bypassRecaptcha?"Enable":"Bypass"} ReCaptcha
      </button>
      <h2>Toggle errors</h2>
      <button
        @click=${()=>this.unrecoverableError=!this.unrecoverableError}
      >
        ${this.unrecoverableError?"Hide":"Show"} unrecoverable error
      </button>
      <button
        @click=${()=>{this.unrecoverableError=!1,this.recoverableError=!this.recoverableError}}
      >
        ${this.recoverableError?"Hide":"Show"} recoverable error
      </button>
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <h2>Toggle review display</h2>
      <button @click=${()=>this.useReviewDisplay=!this.useReviewDisplay}>
        Switch to ${this.useReviewDisplay?"form view":"review view"}
      </button>
      ${this.review!==this.mockOldReview?A`<button @click=${()=>this.review=this.mockOldReview}>
            Prefill normal review
          </button>`:v}
      ${this.review!==this.longReview?A`<button @click=${()=>this.review=this.longReview}>
            Prefill long review
          </button>`:v}
      ${this.review!==this.reviewWithLink?A`<button @click=${()=>this.review=this.reviewWithLink}>
            Prefill review with link
          </button>`:v}
      ${this.review!==this.reviewWithTextLink?A`<button @click=${()=>this.review=this.reviewWithTextLink}>
            Prefill review with text link
          </button>`:v}

      <div class="review-body-form">
        <h2>Adjust review body</h2>
        <textarea id="review-input"></textarea>
        <button
          @click=${()=>this.review=new re({reviewtitle:"What a cool book!",reviewbody:this.reviewInput.value,reviewer:"Foo Bar",reviewdate:new Date().toDateString(),createdate:"02/07/2025",reviewer_itemname:"@foo-bar"})}
        >
          Update
        </button>
      </div>

      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${this.review}
          .recaptchaManager=${this.recaptchaManager}
          .unrecoverableError=${this.unrecoverableError?"Sorry, you're not cool enough to write a review for this item.":void 0}
          .recoverableError=${this.recoverableError?"Why not try submitting again? What's the worst thing that could happen?":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .displayMode=${this.useReviewDisplay?"review":"form"}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?submissionInProgress=${!0}
        ></ia-review-form>
      </div>`}};K.styles=T`
    .container {
      max-width: 750px;
      margin: 10px auto;
      font-size: 1.4rem;
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
  `;u([W()],K.prototype,"recaptchaManager",void 0);u([W()],K.prototype,"bypassRecaptcha",void 0);u([W()],K.prototype,"unrecoverableError",void 0);u([W()],K.prototype,"recoverableError",void 0);u([W()],K.prototype,"useCharCounts",void 0);u([W()],K.prototype,"useReviewDisplay",void 0);u([W()],K.prototype,"review",void 0);u([Fr("#review-input")],K.prototype,"reviewInput",void 0);K=u([bt("app-root")],K);
