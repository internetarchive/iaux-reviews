(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function d(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(s=i[c])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function at(i,e,t,n){function r(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function c(p){try{h(n.next(p))}catch(g){s(g)}}function l(p){try{h(n.throw(p))}catch(g){s(g)}}function h(p){p.done?a(p.value):r(p.value).then(c,l)}h((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=window,yn=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wn=Symbol(),jn=new WeakMap;let xr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==wn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=jn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&jn.set(t,e))}return e}toString(){return this.cssText}};const fi=i=>new xr(typeof i=="string"?i:i+"",void 0,wn),S=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new xr(t,i,wn)},pi=(i,e)=>{yn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=lt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Wn=yn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return fi(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const ut=window,Gn=ut.trustedTypes,mi=Gn?Gn.emptyScript:"",Yn=ut.reactiveElementPolyfillSupport,nn={toAttribute(i,e){switch(e){case Boolean:i=i?mi:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Rr=(i,e)=>e!==i&&(e==e||i==i),Dt={attribute:!0,type:String,converter:nn,reflect:!1,hasChanged:Rr},rn="finalized";let Se=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=Dt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Dt}static finalize(){if(this.hasOwnProperty(rn))return!1;this[rn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Wn(r))}else e!==void 0&&t.push(Wn(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return pi(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Dt){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const s=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:nn).toAttribute(t,n.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=r.getPropertyOptions(a),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:nn;this._$El=a,this[a]=c.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Rr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Se[rn]=!0,Se.elementProperties=new Map,Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Yn==null||Yn({ReactiveElement:Se}),((Pt=ut.reactiveElementVersions)!==null&&Pt!==void 0?Pt:ut.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;const ct=window,Te=ct.trustedTypes,qn=Te?Te.createPolicy("lit-html",{createHTML:i=>i}):void 0,an="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,Cr="?"+se,gi=`<${Cr}>`,ye=document,ht=()=>ye.createComment(""),We=i=>i===null||typeof i!="object"&&typeof i!="function",Mr=Array.isArray,yi=i=>Mr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Bt=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kn=/-->/g,Xn=/>/g,ce=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zn=/'/g,Jn=/"/g,kr=/^(?:script|style|textarea|title)$/i,xe=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Qn=new WeakMap,pe=ye.createTreeWalker(ye,129,null,!1);function Lr(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return qn!==void 0?qn.createHTML(e):e}const wi=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",s=He;for(let c=0;c<t;c++){const l=i[c];let h,p,g=-1,v=0;for(;v<l.length&&(s.lastIndex=v,p=s.exec(l),p!==null);)v=s.lastIndex,s===He?p[1]==="!--"?s=Kn:p[1]!==void 0?s=Xn:p[2]!==void 0?(kr.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=ce):p[3]!==void 0&&(s=ce):s===ce?p[0]===">"?(s=r??He,g=-1):p[1]===void 0?g=-2:(g=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?ce:p[3]==='"'?Jn:Zn):s===Jn||s===Zn?s=ce:s===Kn||s===Xn?s=He:(s=ce,r=void 0);const $=s===ce&&i[c+1].startsWith("/>")?" ":"";a+=s===He?l+gi:g>=0?(n.push(h),l.slice(0,g)+an+l.slice(g)+se+$):l+se+(g===-2?(n.push(void 0),c):$)}return[Lr(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let sn=class Nr{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,s=0;const c=e.length-1,l=this.parts,[h,p]=wi(e,t);if(this.el=Nr.createElement(h,n),pe.currentNode=this.el.content,t===2){const g=this.el.content,v=g.firstChild;v.remove(),g.append(...v.childNodes)}for(;(r=pe.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const v of r.getAttributeNames())if(v.endsWith(an)||v.startsWith(se)){const $=p[s++];if(g.push(v),$!==void 0){const te=r.getAttribute($.toLowerCase()+an).split(se),Y=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:Y[2],strings:te,ctor:Y[1]==="."?bi:Y[1]==="?"?Ai:Y[1]==="@"?$i:yt})}else l.push({type:6,index:a})}for(const v of g)r.removeAttribute(v)}if(kr.test(r.tagName)){const g=r.textContent.split(se),v=g.length-1;if(v>0){r.textContent=Te?Te.emptyScript:"";for(let $=0;$<v;$++)r.append(g[$],ht()),pe.nextNode(),l.push({type:2,index:++a});r.append(g[v],ht())}}}else if(r.nodeType===8)if(r.data===Cr)l.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(se,g+1))!==-1;)l.push({type:7,index:a}),g+=se.length-1}a++}}static createElement(e,t){const n=ye.createElement("template");return n.innerHTML=e,n}};function Re(i,e,t=i,n){var r,a,s,c;if(e===xe)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=We(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,t,n)),n!==void 0?((s=(c=t)._$Co)!==null&&s!==void 0?s:c._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=Re(i,l._$AS(i,e.values),l,n)),e}let vi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ye).importNode(n,!0);pe.currentNode=a;let s=pe.nextNode(),c=0,l=0,h=r[0];for(;h!==void 0;){if(c===h.index){let p;h.type===2?p=new Ir(s,s.nextSibling,this,e):h.type===1?p=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(p=new Ei(s,this,e)),this._$AV.push(p),h=r[++l]}c!==(h==null?void 0:h.index)&&(s=pe.nextNode(),c++)}return pe.currentNode=ye,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Ir=class Or{constructor(e,t,n,r){var a;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Re(this,e,t),We(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):yi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&We(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=sn.createElement(Lr(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new vi(a,this),c=s.u(this.options);s.v(n),this.$(c),this._$AH=s}}_$AC(e){let t=Qn.get(e.strings);return t===void 0&&Qn.set(e.strings,t=new sn(e)),t}T(e){Mr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Or(this.k(ht()),this.k(ht()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},yt=class{constructor(e,t,n,r,a){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let s=!1;if(a===void 0)e=Re(this,e,t,0),s=!We(e)||e!==this._$AH&&e!==xe,s&&(this._$AH=e);else{const c=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=Re(this,c[n+l],t,l),h===xe&&(h=this._$AH[l]),s||(s=!We(h)||h!==this._$AH[l]),h===k?e=k:e!==k&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}s&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bi=class extends yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}};const _i=Te?Te.emptyScript:"";let Ai=class extends yt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==k?this.element.setAttribute(this.name,_i):this.element.removeAttribute(this.name)}},$i=class extends yt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Re(this,e,t,0))!==null&&n!==void 0?n:k)===xe)return;const r=this._$AH,a=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==k&&(r===k||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Ei=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}};const er=ct.litHtmlPolyfillSupport;er==null||er(sn,Ir),((Ht=ct.litHtmlVersions)!==null&&Ht!==void 0?Ht:ct.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ut;const ft=window,Ce=ft.trustedTypes,tr=Ce?Ce.createPolicy("lit-html",{createHTML:i=>i}):void 0,on="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,Pr="?"+oe,Si=`<${Pr}>`,we=document,Ge=()=>we.createComment(""),Ye=i=>i===null||typeof i!="object"&&typeof i!="function",Dr=Array.isArray,Ti=i=>Dr(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ft=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nr=/-->/g,rr=/>/g,he=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ir=/'/g,ar=/"/g,Hr=/^(?:script|style|textarea|title)$/i,Br=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=Br(1),wt=Br(2),Me=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),sr=new WeakMap,me=we.createTreeWalker(we,129,null,!1);function Ur(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tr!==void 0?tr.createHTML(e):e}const xi=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",s=Be;for(let c=0;c<t;c++){const l=i[c];let h,p,g=-1,v=0;for(;v<l.length&&(s.lastIndex=v,p=s.exec(l),p!==null);)v=s.lastIndex,s===Be?p[1]==="!--"?s=nr:p[1]!==void 0?s=rr:p[2]!==void 0?(Hr.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=he):p[3]!==void 0&&(s=he):s===he?p[0]===">"?(s=r??Be,g=-1):p[1]===void 0?g=-2:(g=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?he:p[3]==='"'?ar:ir):s===ar||s===ir?s=he:s===nr||s===rr?s=Be:(s=he,r=void 0);const $=s===he&&i[c+1].startsWith("/>")?" ":"";a+=s===Be?l+Si:g>=0?(n.push(h),l.slice(0,g)+on+l.slice(g)+oe+$):l+oe+(g===-2?(n.push(void 0),c):$)}return[Ur(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class qe{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,s=0;const c=e.length-1,l=this.parts,[h,p]=xi(e,t);if(this.el=qe.createElement(h,n),me.currentNode=this.el.content,t===2){const g=this.el.content,v=g.firstChild;v.remove(),g.append(...v.childNodes)}for(;(r=me.nextNode())!==null&&l.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const v of r.getAttributeNames())if(v.endsWith(on)||v.startsWith(oe)){const $=p[s++];if(g.push(v),$!==void 0){const te=r.getAttribute($.toLowerCase()+on).split(oe),Y=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:Y[2],strings:te,ctor:Y[1]==="."?Ci:Y[1]==="?"?ki:Y[1]==="@"?Li:vt})}else l.push({type:6,index:a})}for(const v of g)r.removeAttribute(v)}if(Hr.test(r.tagName)){const g=r.textContent.split(oe),v=g.length-1;if(v>0){r.textContent=Ce?Ce.emptyScript:"";for(let $=0;$<v;$++)r.append(g[$],Ge()),me.nextNode(),l.push({type:2,index:++a});r.append(g[v],Ge())}}}else if(r.nodeType===8)if(r.data===Pr)l.push({type:2,index:a});else{let g=-1;for(;(g=r.data.indexOf(oe,g+1))!==-1;)l.push({type:7,index:a}),g+=oe.length-1}a++}}static createElement(e,t){const n=we.createElement("template");return n.innerHTML=e,n}}function ke(i,e,t=i,n){var r,a,s,c;if(e===Me)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=Ye(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,t,n)),n!==void 0?((s=(c=t)._$Co)!==null&&s!==void 0?s:c._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=ke(i,l._$AS(i,e.values),l,n)),e}class Ri{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:we).importNode(n,!0);me.currentNode=a;let s=me.nextNode(),c=0,l=0,h=r[0];for(;h!==void 0;){if(c===h.index){let p;h.type===2?p=new Xe(s,s.nextSibling,this,e):h.type===1?p=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(p=new Ni(s,this,e)),this._$AV.push(p),h=r[++l]}c!==(h==null?void 0:h.index)&&(s=me.nextNode(),c++)}return me.currentNode=we,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Xe{constructor(e,t,n,r){var a;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ke(this,e,t),Ye(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Me&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ti(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(we.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=qe.createElement(Ur(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new Ri(a,this),c=s.u(this.options);s.v(n),this.$(c),this._$AH=s}}_$AC(e){let t=sr.get(e.strings);return t===void 0&&sr.set(e.strings,t=new qe(e)),t}T(e){Dr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new Xe(this.k(Ge()),this.k(Ge()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class vt{constructor(e,t,n,r,a){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let s=!1;if(a===void 0)e=ke(this,e,t,0),s=!Ye(e)||e!==this._$AH&&e!==Me,s&&(this._$AH=e);else{const c=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=ke(this,c[n+l],t,l),h===Me&&(h=this._$AH[l]),s||(s=!Ye(h)||h!==this._$AH[l]),h===b?e=b:e!==b&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}s&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ci extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const Mi=Ce?Ce.emptyScript:"";class ki extends vt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Mi):this.element.removeAttribute(this.name)}}class Li extends vt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=ke(this,e,t,0))!==null&&n!==void 0?n:b)===Me)return;const r=this._$AH,a=e===b&&r!==b||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==b&&(r===b||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ni{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}}const or=ft.litHtmlPolyfillSupport;or==null||or(qe,Xe),((Ut=ft.litHtmlVersions)!==null&&Ut!==void 0?Ut:ft.litHtmlVersions=[]).push("2.8.0");const Ii=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let s=a._$litPart$;if(s===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=s=new Xe(e.insertBefore(Ge(),c),c,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt,Vt;class le extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ii(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Me}}le.finalized=!0,le._$litElement$=!0,(zt=globalThis.litElementHydrateSupport)===null||zt===void 0||zt.call(globalThis,{LitElement:le});const lr=globalThis.litElementPolyfillSupport;lr==null||lr({LitElement:le});((Vt=globalThis.litElementVersions)!==null&&Vt!==void 0?Vt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(s){customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Pi=(i,e,t)=>{e.constructor.createProperty(t,i)};function R(i){return(e,t)=>t!==void 0?Pi(i,e,t):Oi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(i){return R({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(s.finisher=function(c){i(c,a)}),s}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fr(i,e){return Di({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt;((jt=window.HTMLSlotElement)===null||jt===void 0?void 0:jt.prototype.assignedElements)!=null;function f(i){let e,t,n;return e=i,(r,a,s)=>{if(s.value!=null)s.value=dr(s.value,e,t,n);else if(s.get!=null)s.get=dr(s.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Wt=new Map;function dr(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let s;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let c=this[r];if(Array.isArray(n))for(const l of n)Wt.has(l)?Wt.get(l).push(c):Wt.set(l,[c]);if(e||a.length>0||t>0){let l;e===!0?l=a.map(g=>g.toString()).join("!"):e?l=e.apply(this,a):l=a[0];const h=`${l}__timestamp`;let p=!1;if(t>0)if(!c.has(h))p=!0;else{let g=c.get(h);p=Date.now()-g>t}c.has(l)&&!p?s=c.get(l):(s=i.apply(this,a),c.set(l,s),t>0&&c.set(h,Date.now()))}else{const l=this;c.has(l)?s=c.get(l):(s=i.apply(this,a),c.set(l,s))}return s}}class ln{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}ln.shared=new ln;class de{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}de.shared=new de;class pt{parseValue(e){return de.shared.parseValue(e)}}pt.shared=new pt;class Ke{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}Ke.shared=new Ke;class mt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const s=parseFloat(r);if(Number.isNaN(s))return t=!0,0;const l=60**(e.length-1-a);return s*Math.floor(l)}).reduce((r,a)=>r+a,0);return t?void 0:n}}mt.shared=new mt;class dn{parseValue(e){if(typeof e=="string")return e}}dn.shared=new dn;class Hi{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class un{parseValue(e){if(typeof e=="string")return e}}un.shared=new un;class gt{parseValue(e){return String(e)}}gt.shared=new gt;class X{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}d([f()],X.prototype,"values",null);d([f()],X.prototype,"value",null);class Bi extends X{constructor(e){super(ln.shared,e)}}class ae extends X{constructor(e){super(Ke.shared,e)}}class Gt extends X{constructor(e){super(mt.shared,e)}}class W extends X{constructor(e){super(de.shared,e)}}class E extends X{constructor(e){super(gt.shared,e)}}class Ui extends X{constructor(e){super(un.shared,e)}}class ur extends X{constructor(e){super(pt.shared,e)}}class Fi extends X{constructor(e){super(dn.shared,e)}}class zi extends X{constructor(e,t){super(t,e)}}class Vi extends zi{constructor(e){const t=new Hi(gt.shared);super(e,t)}}class y{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ae(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new E(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new W(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new W(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new E(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new E(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ur(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new E(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new E(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new E(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new E(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ae(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new E(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new W(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Gt(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new E(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new W(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ae(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new E(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new E(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new W(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ur(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new E(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Gt(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new E(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new W(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Fi(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Bi(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new E(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new W(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new W(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new E(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new E(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Ui(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new E(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new W(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ae(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new E(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ae(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Gt(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new E(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new E(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ae(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ae(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ae(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Vi(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new E(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new E(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new E(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new W(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new E(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new E(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new W(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new E(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new E(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new W(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new W(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}d([f()],y.prototype,"addeddate",null);d([f()],y.prototype,"audio_codec",null);d([f()],y.prototype,"audio_sample_rate",null);d([f()],y.prototype,"avg_rating",null);d([f()],y.prototype,"collection",null);d([f()],y.prototype,"collections_raw",null);d([f()],y.prototype,"collection_size",null);d([f()],y.prototype,"contributor",null);d([f()],y.prototype,"coverage",null);d([f()],y.prototype,"creator",null);d([f()],y.prototype,"collection_layout",null);d([f()],y.prototype,"date",null);d([f()],y.prototype,"description",null);d([f()],y.prototype,"downloads",null);d([f()],y.prototype,"duration",null);d([f()],y.prototype,"external_identifier",null);d([f()],y.prototype,"files_count",null);d([f()],y.prototype,"indexdate",null);d([f()],y.prototype,"isbn",null);d([f()],y.prototype,"issue",null);d([f()],y.prototype,"item_count",null);d([f()],y.prototype,"item_size",null);d([f()],y.prototype,"language",null);d([f()],y.prototype,"length",null);d([f()],y.prototype,"lineage",null);d([f()],y.prototype,"month",null);d([f()],y.prototype,"mediatype",null);d([f()],y.prototype,"noindex",null);d([f()],y.prototype,"notes",null);d([f()],y.prototype,"num_favorites",null);d([f()],y.prototype,"num_reviews",null);d([f()],y.prototype,"openlibrary_edition",null);d([f()],y.prototype,"openlibrary_work",null);d([f()],y.prototype,"page_progression",null);d([f()],y.prototype,"partner",null);d([f()],y.prototype,"ppi",null);d([f()],y.prototype,"publicdate",null);d([f()],y.prototype,"publisher",null);d([f()],y.prototype,"reviewdate",null);d([f()],y.prototype,"runtime",null);d([f()],y.prototype,"scanner",null);d([f()],y.prototype,"source",null);d([f()],y.prototype,"start_localtime",null);d([f()],y.prototype,"start_time",null);d([f()],y.prototype,"stop_time",null);d([f()],y.prototype,"subject",null);d([f()],y.prototype,"taper",null);d([f()],y.prototype,"title",null);d([f()],y.prototype,"transferer",null);d([f()],y.prototype,"track",null);d([f()],y.prototype,"type",null);d([f()],y.prototype,"uploader",null);d([f()],y.prototype,"utc_offset",null);d([f()],y.prototype,"venue",null);d([f()],y.prototype,"volume",null);d([f()],y.prototype,"week",null);d([f()],y.prototype,"year",null);class Le{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?pt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?mt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?de.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?de.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?de.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}d([f()],Le.prototype,"size",null);d([f()],Le.prototype,"length",null);d([f()],Le.prototype,"height",null);d([f()],Le.prototype,"width",null);d([f()],Le.prototype,"track",null);class ie{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Ke.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Ke.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?de.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}d([f()],ie.prototype,"reviewdate",null);d([f()],ie.prototype,"createdate",null);d([f()],ie.prototype,"stars",null);class ji{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Le(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new y(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new ie(r))}}var ge;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(ge||(ge={}));class cn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Wi{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const s=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,s)}catch(s){const c=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(ge.networkError,c)}try{const s=await a.json(),c=s.error;if(c){const l=s.forensics;return this.getErrorResult(ge.searchEngineError,c,l)}else return{success:s}}catch(s){const c=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(ge.decodingError,c)}}getErrorResult(e,t,n){return{error:new cn(e,t,n)}}}class cr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new cn(ge.itemNotFound)}:{success:new ji(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new cn(ge.itemNotFound)}:{success:r.success.result}}}cr.default=new cr(new Wi);let Gi=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Yi(i){return new Promise(e=>setTimeout(e,i))}var Q;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(Q||(Q={}));const hr="lazyLoaderService";class qi{constructor(e){var t,n,r;this.emitter=Gi(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return at(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return at(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return at(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${Q.owner}='${hr}'][${Q.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((s,c)=>{if(a.getAttribute(Q.dynamicImportLoaded)){s();return}const l=e.scriptBeingRetried,h=a.onload||(l==null?void 0:l.onload);a.onload=g=>{h==null||h(g),a.setAttribute(Q.dynamicImportLoaded,"true"),s()};const p=a.onerror||(l==null?void 0:l.onerror);a.onerror=g=>at(this,void 0,void 0,function*(){const v=a.getAttribute(Q.hasBeenRetried);if(n<this.retryCount&&!v){a.setAttribute(Q.hasBeenRetried,"true"),yield Yi(this.retryInterval*1e3);const $=n+1;this.emitter.emit("scriptLoadRetried",e.src,$),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:$,scriptBeingRetried:a}))}else v||this.emitter.emit("scriptLoadFailed",e.src,g),p==null||p(g),c(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(Q.owner,hr),r.setAttribute("src",n),r.setAttribute(Q.retryNumber,a.toString()),r.async=!0;const s=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(s).forEach(c=>{r.setAttribute(c,s[c])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Ki{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class fr{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new qi,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),s=new Ki({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=s,s}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=i=>typeof i!="string"&&"strTag"in i,Zi=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=i=>Xi(i)?Zi(i.strings,i.values):i;let M=Ji;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qi{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ea=new Qi;ea.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},na=i=>(...e)=>({_$litDirective$:i,values:e});class ra{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hn extends ra{constructor(e){if(super(e),this.et=k,e.type!==ta.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===k||e==null)return this.ft=void 0,this.et=e;if(e===xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}hn.directiveName="unsafeHTML",hn.resultType=1;const zr=na(hn);/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:Vr,setPrototypeOf:pr,isFrozen:ia,getPrototypeOf:aa,getOwnPropertyDescriptor:sa}=Object;let{freeze:F,seal:G,create:jr}=Object,{apply:fn,construct:pn}=typeof Reflect<"u"&&Reflect;F||(F=function(e){return e});G||(G=function(e){return e});fn||(fn=function(e,t,n){return e.apply(t,n)});pn||(pn=function(e,t){return new e(...t)});const st=z(Array.prototype.forEach),oa=z(Array.prototype.lastIndexOf),mr=z(Array.prototype.pop),Ue=z(Array.prototype.push),la=z(Array.prototype.splice),dt=z(String.prototype.toLowerCase),Yt=z(String.prototype.toString),gr=z(String.prototype.match),Fe=z(String.prototype.replace),da=z(String.prototype.indexOf),ua=z(String.prototype.trim),q=z(Object.prototype.hasOwnProperty),U=z(RegExp.prototype.test),ze=ca(TypeError);function z(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return fn(i,e,n)}}function ca(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return pn(i,t)}}function _(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:dt;pr&&pr(i,null);let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(ia(e)||(e[n]=a),r=a)}i[r]=!0}return i}function ha(i){for(let e=0;e<i.length;e++)q(i,e)||(i[e]=null);return i}function fe(i){const e=jr(null);for(const[t,n]of Vr(i))q(i,t)&&(Array.isArray(n)?e[t]=ha(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=fe(n):e[t]=n);return e}function Ve(i,e){for(;i!==null;){const n=sa(i,e);if(n){if(n.get)return z(n.get);if(typeof n.value=="function")return z(n.value)}i=aa(i)}function t(){return null}return t}const yr=F(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),qt=F(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Kt=F(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),fa=F(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Xt=F(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),pa=F(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),wr=F(["#text"]),vr=F(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Zt=F(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),br=F(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ot=F(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ma=G(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ga=G(/<%[\w\W]*|[\w\W]*%>/gm),ya=G(/\$\{[\w\W]*/gm),wa=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),va=G(/^aria-[\-\w]+$/),Wr=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ba=G(/^(?:\w+script|data):/i),_a=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gr=G(/^html$/i),Aa=G(/^[a-z][.\w]*(-[.\w]+)+$/i);var _r=Object.freeze({__proto__:null,ARIA_ATTR:va,ATTR_WHITESPACE:_a,CUSTOM_ELEMENT:Aa,DATA_ATTR:wa,DOCTYPE_NAME:Gr,ERB_EXPR:ga,IS_ALLOWED_URI:Wr,IS_SCRIPT_OR_DATA:ba,MUSTACHE_EXPR:ma,TMPLIT_EXPR:ya});const je={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},$a=function(){return typeof window>"u"?null:window},Ea=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Ar=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Yr(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$a();const e=w=>Yr(w);if(e.version="3.2.5",e.removed=[],!i||!i.document||i.document.nodeType!==je.document||!i.Element)return e.isSupported=!1,e;let{document:t}=i;const n=t,r=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:c,Element:l,NodeFilter:h,NamedNodeMap:p=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:g,DOMParser:v,trustedTypes:$}=i,te=l.prototype,Y=Ve(te,"cloneNode"),qr=Ve(te,"remove"),Kr=Ve(te,"nextSibling"),Xr=Ve(te,"childNodes"),Ze=Ve(te,"parentNode");if(typeof s=="function"){const w=t.createElement("template");w.content&&w.content.ownerDocument&&(t=w.content.ownerDocument)}let D,Ne="";const{implementation:_t,createNodeIterator:Zr,createDocumentFragment:Jr,getElementsByTagName:Qr}=t,{importNode:ei}=n;let H=Ar();e.isSupported=typeof Vr=="function"&&typeof Ze=="function"&&_t&&_t.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:$t,TMPLIT_EXPR:Et,DATA_ATTR:ti,ARIA_ATTR:ni,IS_SCRIPT_OR_DATA:ri,ATTR_WHITESPACE:vn,CUSTOM_ELEMENT:ii}=_r;let{IS_ALLOWED_URI:bn}=_r,L=null;const _n=_({},[...yr,...qt,...Kt,...Xt,...wr]);let I=null;const An=_({},[...vr,...Zt,...br,...ot]);let C=Object.seal(jr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,St=null,$n=!0,Tt=!0,En=!1,Sn=!0,ve=!1,xt=!0,ue=!1,Rt=!1,Ct=!1,be=!1,Je=!1,Qe=!1,Tn=!0,xn=!1;const ai="user-content-";let Mt=!0,Oe=!1,_e={},Ae=null;const Rn=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Cn=null;const Mn=_({},["audio","video","img","source","image","track"]);let kt=null;const kn=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let $e=ne,Lt=!1,Nt=null;const si=_({},[et,tt,ne],Yt);let nt=_({},["mi","mo","mn","ms","mtext"]),rt=_({},["annotation-xml"]);const oi=_({},["title","style","font","a","script"]);let Pe=null;const li=["application/xhtml+xml","text/html"],di="text/html";let N=null,Ee=null;const ui=t.createElement("form"),Ln=function(o){return o instanceof RegExp||o instanceof Function},It=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ee&&Ee===o)){if((!o||typeof o!="object")&&(o={}),o=fe(o),Pe=li.indexOf(o.PARSER_MEDIA_TYPE)===-1?di:o.PARSER_MEDIA_TYPE,N=Pe==="application/xhtml+xml"?Yt:dt,L=q(o,"ALLOWED_TAGS")?_({},o.ALLOWED_TAGS,N):_n,I=q(o,"ALLOWED_ATTR")?_({},o.ALLOWED_ATTR,N):An,Nt=q(o,"ALLOWED_NAMESPACES")?_({},o.ALLOWED_NAMESPACES,Yt):si,kt=q(o,"ADD_URI_SAFE_ATTR")?_(fe(kn),o.ADD_URI_SAFE_ATTR,N):kn,Cn=q(o,"ADD_DATA_URI_TAGS")?_(fe(Mn),o.ADD_DATA_URI_TAGS,N):Mn,Ae=q(o,"FORBID_CONTENTS")?_({},o.FORBID_CONTENTS,N):Rn,Ie=q(o,"FORBID_TAGS")?_({},o.FORBID_TAGS,N):{},St=q(o,"FORBID_ATTR")?_({},o.FORBID_ATTR,N):{},_e=q(o,"USE_PROFILES")?o.USE_PROFILES:!1,$n=o.ALLOW_ARIA_ATTR!==!1,Tt=o.ALLOW_DATA_ATTR!==!1,En=o.ALLOW_UNKNOWN_PROTOCOLS||!1,Sn=o.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ve=o.SAFE_FOR_TEMPLATES||!1,xt=o.SAFE_FOR_XML!==!1,ue=o.WHOLE_DOCUMENT||!1,be=o.RETURN_DOM||!1,Je=o.RETURN_DOM_FRAGMENT||!1,Qe=o.RETURN_TRUSTED_TYPE||!1,Ct=o.FORCE_BODY||!1,Tn=o.SANITIZE_DOM!==!1,xn=o.SANITIZE_NAMED_PROPS||!1,Mt=o.KEEP_CONTENT!==!1,Oe=o.IN_PLACE||!1,bn=o.ALLOWED_URI_REGEXP||Wr,$e=o.NAMESPACE||ne,nt=o.MATHML_TEXT_INTEGRATION_POINTS||nt,rt=o.HTML_INTEGRATION_POINTS||rt,C=o.CUSTOM_ELEMENT_HANDLING||{},o.CUSTOM_ELEMENT_HANDLING&&Ln(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(C.tagNameCheck=o.CUSTOM_ELEMENT_HANDLING.tagNameCheck),o.CUSTOM_ELEMENT_HANDLING&&Ln(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(C.attributeNameCheck=o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),o.CUSTOM_ELEMENT_HANDLING&&typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(C.allowCustomizedBuiltInElements=o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ve&&(Tt=!1),Je&&(be=!0),_e&&(L=_({},wr),I=[],_e.html===!0&&(_(L,yr),_(I,vr)),_e.svg===!0&&(_(L,qt),_(I,Zt),_(I,ot)),_e.svgFilters===!0&&(_(L,Kt),_(I,Zt),_(I,ot)),_e.mathMl===!0&&(_(L,Xt),_(I,br),_(I,ot))),o.ADD_TAGS&&(L===_n&&(L=fe(L)),_(L,o.ADD_TAGS,N)),o.ADD_ATTR&&(I===An&&(I=fe(I)),_(I,o.ADD_ATTR,N)),o.ADD_URI_SAFE_ATTR&&_(kt,o.ADD_URI_SAFE_ATTR,N),o.FORBID_CONTENTS&&(Ae===Rn&&(Ae=fe(Ae)),_(Ae,o.FORBID_CONTENTS,N)),Mt&&(L["#text"]=!0),ue&&_(L,["html","head","body"]),L.table&&(_(L,["tbody"]),delete Ie.tbody),o.TRUSTED_TYPES_POLICY){if(typeof o.TRUSTED_TYPES_POLICY.createHTML!="function")throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof o.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ze('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');D=o.TRUSTED_TYPES_POLICY,Ne=D.createHTML("")}else D===void 0&&(D=Ea($,r)),D!==null&&typeof Ne=="string"&&(Ne=D.createHTML(""));F&&F(o),Ee=o}},Nn=_({},[...qt,...Kt,...fa]),In=_({},[...Xt,...pa]),ci=function(o){let u=Ze(o);(!u||!u.tagName)&&(u={namespaceURI:$e,tagName:"template"});const m=dt(o.tagName),T=dt(u.tagName);return Nt[o.namespaceURI]?o.namespaceURI===tt?u.namespaceURI===ne?m==="svg":u.namespaceURI===et?m==="svg"&&(T==="annotation-xml"||nt[T]):!!Nn[m]:o.namespaceURI===et?u.namespaceURI===ne?m==="math":u.namespaceURI===tt?m==="math"&&rt[T]:!!In[m]:o.namespaceURI===ne?u.namespaceURI===tt&&!rt[T]||u.namespaceURI===et&&!nt[T]?!1:!In[m]&&(oi[m]||!Nn[m]):!!(Pe==="application/xhtml+xml"&&Nt[o.namespaceURI]):!1},Z=function(o){Ue(e.removed,{element:o});try{Ze(o).removeChild(o)}catch{qr(o)}},it=function(o,u){try{Ue(e.removed,{attribute:u.getAttributeNode(o),from:u})}catch{Ue(e.removed,{attribute:null,from:u})}if(u.removeAttribute(o),o==="is")if(be||Je)try{Z(u)}catch{}else try{u.setAttribute(o,"")}catch{}},On=function(o){let u=null,m=null;if(Ct)o="<remove></remove>"+o;else{const O=gr(o,/^[\r\n\t ]+/);m=O&&O[0]}Pe==="application/xhtml+xml"&&$e===ne&&(o='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+o+"</body></html>");const T=D?D.createHTML(o):o;if($e===ne)try{u=new v().parseFromString(T,Pe)}catch{}if(!u||!u.documentElement){u=_t.createDocument($e,"template",null);try{u.documentElement.innerHTML=Lt?Ne:T}catch{}}const P=u.body||u.documentElement;return o&&m&&P.insertBefore(t.createTextNode(m),P.childNodes[0]||null),$e===ne?Qr.call(u,ue?"html":"body")[0]:ue?u.documentElement:P},Pn=function(o){return Zr.call(o.ownerDocument||o,o,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Ot=function(o){return o instanceof g&&(typeof o.nodeName!="string"||typeof o.textContent!="string"||typeof o.removeChild!="function"||!(o.attributes instanceof p)||typeof o.removeAttribute!="function"||typeof o.setAttribute!="function"||typeof o.namespaceURI!="string"||typeof o.insertBefore!="function"||typeof o.hasChildNodes!="function")},Dn=function(o){return typeof c=="function"&&o instanceof c};function re(w,o,u){st(w,m=>{m.call(e,o,u,Ee)})}const Hn=function(o){let u=null;if(re(H.beforeSanitizeElements,o,null),Ot(o))return Z(o),!0;const m=N(o.nodeName);if(re(H.uponSanitizeElement,o,{tagName:m,allowedTags:L}),o.hasChildNodes()&&!Dn(o.firstElementChild)&&U(/<[/\w!]/g,o.innerHTML)&&U(/<[/\w!]/g,o.textContent)||o.nodeType===je.progressingInstruction||xt&&o.nodeType===je.comment&&U(/<[/\w]/g,o.data))return Z(o),!0;if(!L[m]||Ie[m]){if(!Ie[m]&&Un(m)&&(C.tagNameCheck instanceof RegExp&&U(C.tagNameCheck,m)||C.tagNameCheck instanceof Function&&C.tagNameCheck(m)))return!1;if(Mt&&!Ae[m]){const T=Ze(o)||o.parentNode,P=Xr(o)||o.childNodes;if(P&&T){const O=P.length;for(let j=O-1;j>=0;--j){const J=Y(P[j],!0);J.__removalCount=(o.__removalCount||0)+1,T.insertBefore(J,Kr(o))}}}return Z(o),!0}return o instanceof l&&!ci(o)||(m==="noscript"||m==="noembed"||m==="noframes")&&U(/<\/no(script|embed|frames)/i,o.innerHTML)?(Z(o),!0):(ve&&o.nodeType===je.text&&(u=o.textContent,st([At,$t,Et],T=>{u=Fe(u,T," ")}),o.textContent!==u&&(Ue(e.removed,{element:o.cloneNode()}),o.textContent=u)),re(H.afterSanitizeElements,o,null),!1)},Bn=function(o,u,m){if(Tn&&(u==="id"||u==="name")&&(m in t||m in ui))return!1;if(!(Tt&&!St[u]&&U(ti,u))){if(!($n&&U(ni,u))){if(!I[u]||St[u]){if(!(Un(o)&&(C.tagNameCheck instanceof RegExp&&U(C.tagNameCheck,o)||C.tagNameCheck instanceof Function&&C.tagNameCheck(o))&&(C.attributeNameCheck instanceof RegExp&&U(C.attributeNameCheck,u)||C.attributeNameCheck instanceof Function&&C.attributeNameCheck(u))||u==="is"&&C.allowCustomizedBuiltInElements&&(C.tagNameCheck instanceof RegExp&&U(C.tagNameCheck,m)||C.tagNameCheck instanceof Function&&C.tagNameCheck(m))))return!1}else if(!kt[u]){if(!U(bn,Fe(m,vn,""))){if(!((u==="src"||u==="xlink:href"||u==="href")&&o!=="script"&&da(m,"data:")===0&&Cn[o])){if(!(En&&!U(ri,Fe(m,vn,"")))){if(m)return!1}}}}}}return!0},Un=function(o){return o!=="annotation-xml"&&gr(o,ii)},Fn=function(o){re(H.beforeSanitizeAttributes,o,null);const{attributes:u}=o;if(!u||Ot(o))return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0};let T=u.length;for(;T--;){const P=u[T],{name:O,namespaceURI:j,value:J}=P,De=N(O);let B=O==="value"?J:ua(J);if(m.attrName=De,m.attrValue=B,m.keepAttr=!0,m.forceKeepAttr=void 0,re(H.uponSanitizeAttribute,o,m),B=m.attrValue,xn&&(De==="id"||De==="name")&&(it(O,o),B=ai+B),xt&&U(/((--!?|])>)|<\/(style|title)/i,B)){it(O,o);continue}if(m.forceKeepAttr||(it(O,o),!m.keepAttr))continue;if(!Sn&&U(/\/>/i,B)){it(O,o);continue}ve&&st([At,$t,Et],Vn=>{B=Fe(B,Vn," ")});const zn=N(o.nodeName);if(Bn(zn,De,B)){if(D&&typeof $=="object"&&typeof $.getAttributeType=="function"&&!j)switch($.getAttributeType(zn,De)){case"TrustedHTML":{B=D.createHTML(B);break}case"TrustedScriptURL":{B=D.createScriptURL(B);break}}try{j?o.setAttributeNS(j,O,B):o.setAttribute(O,B),Ot(o)?Z(o):mr(e.removed)}catch{}}}re(H.afterSanitizeAttributes,o,null)},hi=function w(o){let u=null;const m=Pn(o);for(re(H.beforeSanitizeShadowDOM,o,null);u=m.nextNode();)re(H.uponSanitizeShadowNode,u,null),Hn(u),Fn(u),u.content instanceof a&&w(u.content);re(H.afterSanitizeShadowDOM,o,null)};return e.sanitize=function(w){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=null,m=null,T=null,P=null;if(Lt=!w,Lt&&(w="<!-->"),typeof w!="string"&&!Dn(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw ze("dirty is not a string, aborting")}else throw ze("toString is not a function");if(!e.isSupported)return w;if(Rt||It(o),e.removed=[],typeof w=="string"&&(Oe=!1),Oe){if(w.nodeName){const J=N(w.nodeName);if(!L[J]||Ie[J])throw ze("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof c)u=On("<!---->"),m=u.ownerDocument.importNode(w,!0),m.nodeType===je.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?u=m:u.appendChild(m);else{if(!be&&!ve&&!ue&&w.indexOf("<")===-1)return D&&Qe?D.createHTML(w):w;if(u=On(w),!u)return be?null:Qe?Ne:""}u&&Ct&&Z(u.firstChild);const O=Pn(Oe?w:u);for(;T=O.nextNode();)Hn(T),Fn(T),T.content instanceof a&&hi(T.content);if(Oe)return w;if(be){if(Je)for(P=Jr.call(u.ownerDocument);u.firstChild;)P.appendChild(u.firstChild);else P=u;return(I.shadowroot||I.shadowrootmode)&&(P=ei.call(n,P,!0)),P}let j=ue?u.outerHTML:u.innerHTML;return ue&&L["!doctype"]&&u.ownerDocument&&u.ownerDocument.doctype&&u.ownerDocument.doctype.name&&U(Gr,u.ownerDocument.doctype.name)&&(j="<!DOCTYPE "+u.ownerDocument.doctype.name+`>
`+j),ve&&st([At,$t,Et],J=>{j=Fe(j,J," ")}),D&&Qe?D.createHTML(j):j},e.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};It(w),Rt=!0},e.clearConfig=function(){Ee=null,Rt=!1},e.isValidAttribute=function(w,o,u){Ee||It({});const m=N(w),T=N(o);return Bn(m,T,u)},e.addHook=function(w,o){typeof o=="function"&&Ue(H[w],o)},e.removeHook=function(w,o){if(o!==void 0){const u=oa(H[w],o);return u===-1?void 0:la(H[w],u,1)[0]}return mr(H[w])},e.removeHooks=function(w){H[w]=[]},e.removeAllHooks=function(){H=Ar()},e}var mn=Yr();const $r=S`var(--white, #fff)`,Sa=S`var(--ia-theme-link-color, #4b64ff)`,Ta=S`var(--primaryDisableCTAFill, #767676)`,xa=S`var(--secondaryCTABorder, #999)`,Ra=S`var(--primaryCTAFill, #194880)`,Jt=S`var(--primaryCTAFillRGB, 25, 72, 128)`,Ca=S`var(--primaryCTABorder, #c5d1df)`,Ma=S`var(--primaryErrorCTAFill, #d9534f)`,Qt=S`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,ka=S`var(--primaryErrorCTABorder, #d43f3a)`,La=S`var(--secondaryCTAFill, #333)`,en=S`var(--secondaryCTAFillRGB, 51, 51, 51)`,Na=S`var(--primaryCTABorder, #979797)`,Ia=S`var(---primaryWarningFill, #ee8950)`,tn=S`var(--primaryWarningFillRGB, 238, 137, 80)`,Oa=S`var(--primaryWarningBorder, #ec7939)`,Pa=S`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${$r};
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
    outline-color: ${$r};
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
    background-color: ${Ta};
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
    background-color: ${Ra};
    border-color: ${Ca};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Jt}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Jt}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Jt}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Ma};
    border-color: ${ka};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Qt}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Qt}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Qt}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Ia};
    border-color: ${Oa};
  }
  .ia-button.warning:hover {
    background-color: rgba(${tn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${tn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${tn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${La};
    border-color: ${Na};
  }
  .ia-button.dark:hover {
    background-color: rgba(${en}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${en}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${en}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Sa};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;S`
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
`;var Er;(function(i){i.processing="processing",i.complete="complete"})(Er||(Er={}));let gn=class extends le{constructor(){super(...arguments),this.mode="processing"}render(){return A`
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
    `}static get styles(){const e=S`var(--activityIndicatorCheckmarkColor, #31A481)`,t=S`var(--activityIndicatorCompletedRingColor, #31A481)`,n=S`var(--activityIndicatorLoadingRingColor, #333333)`,r=S`var(--activityIndicatorLoadingDotColor, #333333)`;return S`
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
    `}};d([R({type:String})],gn.prototype,"mode",void 0);gn=d([bt("ia-activity-indicator")],gn);class Da{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(s=>{const c=n[s];r.searchParams.append(s,c)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class Ha{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",s=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:s})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Ba{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Da,this.analyticsHelpers=new Ha(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Ua(i){return new Promise(e=>setTimeout(e,i))}class Fa{constructor(e){this.analyticsHandler=new Ba({enableAnalytics:!0}),this.sleep=Ua,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const s=await fetch(e,t);return s.ok?s:s.status===404?(this.log404Event(r),s):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,s.statusText,s.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,s.status),s)}catch(s){if(this.isContentBlockerError(s))throw this.logContentBlockingEvent(r,s),s;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,s,s),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,s),s}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class za{constructor(e){this.fetchRetrier=new Fa,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,s]of Object.entries(t))r.searchParams.set(a,s);return typeof e=="string"?r.href:new Request(r.href,e)}}const Va=wt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,ja=wt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Wa=wt`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function Sr(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return A`<span title="${i}">${t}</span>`}const Ga=["a"];function Ya(i){return mn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),mn.sanitize(i,{ALLOWED_TAGS:Ga})}function Tr(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return qa(i,n,e)}function qa(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const s=i.indexOf("</a>",e),c=s-t<=20;if(c&&i.length===s+4)return i;if(s!==-1&&c)n=i.slice(0,s+4);else{const l=n.lastIndexOf("<a");n=i.slice(0,l)}}}return n.concat("...")}const Ka=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Xa(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Ka,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function Za(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const Ja=wt`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let ee=class extends le{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.canDelete=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?A`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?A`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${Ja}
                  </button>
                `:b}
            <div class="top-line">
              <b>${M("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${M("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?A`<i>${M(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:A`
          <div class="error">
            ${M("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;return!((e=this.review)===null||e===void 0)&&e.reviewtitle?this.review.reviewtitle.length<=this.maxSubjectLength||this.showTruncatedContent?this.review.reviewtitle:Tr(this.review.reviewtitle,this.maxSubjectLength):""}get bodyTemplate(){var e;if(!(!((e=this.review)===null||e===void 0)&&e.reviewbody))return b;const t=Ya(this.review.reviewbody),n=t.length<=this.maxBodyLength||this.showTruncatedContent?t:Tr(t,this.maxBodyLength);return A`${zr(this.prepReview(n))}`}get truncationButtonsTemplate(){var e,t;return!(!((e=this.review)===null||e===void 0)&&e.reviewtitle)||!(!((t=this.review)===null||t===void 0)&&t.reviewbody)||this.review.reviewtitle.length<=this.maxSubjectLength&&this.review.reviewbody.length<=this.maxBodyLength?b:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return A`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${M("More...")}
      </button>
    `}get lessButtonTemplate(){return A`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${M("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?A`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${Sr(this.review.reviewer)}
            </a>
          `:A`${Sr(this.review.reviewer)}`:b}get starsTemplate(){return!this.review||!this.review.stars?b:A`
      <div
        class="review-stars"
        title="${M(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>A`<div class="review-star">${Wa}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return b;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),s=n.getTime()!==r.getTime()?"(edited)":"";return M(`${a} ${s}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}prepReview(e){return Za(Xa(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm("Are you sure you want to delete this review?"))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer_itemname}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return S`
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
    `}};d([R({type:Object})],ee.prototype,"review",void 0);d([R({type:String})],ee.prototype,"identifier",void 0);d([R({type:Number})],ee.prototype,"maxSubjectLength",void 0);d([R({type:Number})],ee.prototype,"maxBodyLength",void 0);d([R({type:String})],ee.prototype,"baseHost",void 0);d([R({type:Boolean})],ee.prototype,"canDelete",void 0);d([V()],ee.prototype,"showTruncatedContent",void 0);d([V()],ee.prototype,"deleteMsg",void 0);ee=d([bt("ia-review")],ee);let x=class extends le{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.displayMode="form",this.submitterScreenname="Anonymous",this.fetchHandler=new za,this.bypassRecaptcha=!1,this.canDelete=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return this.displayMode==="review"?this.reviewTemplate:A`<form id="review-form" @submit=${this.handleSubmit}>
          ${this.unrecoverableError?this.unrecoverableErrorTemplate:A`
                <span class="inputs">
                  ${this.starsInputTemplate} ${this.subjectInputTemplate}
                  ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
                </span>
              `}
          ${this.recoverableErrorTemplate} ${this.actionButtonsTemplate}
        </form>`}firstUpdated(){this.formCanSubmit=this.checkSubmissionAllowed()}updated(e){e.has("oldReview")&&this.oldReview&&(this.oldReview.stars&&(this.currentStars=this.oldReview.stars),this.oldReview.reviewtitle&&(this.currentSubjectLength=this.oldReview.reviewtitle.length),this.oldReview.reviewbody&&(this.currentBodyLength=this.oldReview.reviewbody.length)),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&!this.unrecoverableError&&this.setupRecaptcha(),(e.has("currentSubjectLength")||e.has("currentBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get reviewTemplate(){return this.oldReview?A`
      <div class="review-container">
        <ia-review
          .identifier=${this.identifier}
          .review=${this.oldReview}
          .baseHost=${this.baseHost}
          ?canDelete=${this.canDelete}
        ></ia-review>
      </div>
    `:b}get unrecoverableErrorTemplate(){return this.unrecoverableError?A`
          <div class="unrecoverable-error">
            <span class="error-msg">${M(this.unrecoverableError)}</span>
          </div>
        `:b}get recoverableErrorTemplate(){return this.recoverableError?A`
          <div class="recoverable-error">
            ${zr(this.sanitizeErrorMsg(M(this.recoverableError)))}
          </div>
        `:b}get starsInputTemplate(){return A`
      <div class="form-heading rating">
        <label for="stars-field">${M("Rating (optional)")}</label>
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
          ${M("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return A`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${M("Subject")}</label>
        ${this.maxSubjectLength?A`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:b}
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
              ${M(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:b}</div></span>
    `}get bodyInputTemplate(){var e,t;return A`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${M("Review")}</label>
          ${this.maxBodyLength?A`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:b}
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
                ${M(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:b}
      </span>
    `}get hiddenInputsTemplate(){return A`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?A`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:b}
    `}get actionButtonsTemplate(){return A`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${()=>this.displayMode="review"}
      >
        ${M("Cancel")}
      </button>
      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        ?disabled=${!this.formCanSubmit||this.submissionInProgress}
      >
        ${this.submissionInProgress?A`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:M("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=M(`Rate ${e>1?`${e} stars`:"1 star"}`);return A`
      <button
        class="star star-${e}"
        title=${t?M("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?Va:ja}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return mn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});(r==null?void 0:r.success)===!0?(this.submissionInProgress=!1,this.oldReview=this.generateSubmittedReview(),this.displayMode="review"):(this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission())}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,s;const c=new Date().toDateString();return new ie({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:c,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(s=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&s!==void 0?s:c})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Pa,S`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);

          --container-error-color: #ea0202;
          --container-link-color: #4f65f5;
          --container-bg-color: #fbfbfd;
          --container-border-color: #999999;
        }

        ia-review {
          --error-color: var(--container-error-color, #ea0202);
          --link-color: var(--container-link-color, #4f65f5);
        }

        form,
        .review-container {
          border: 2px solid var(--container-border-color, #999999);
          border-radius: 5px;
          background-color: var(--container-bg-color, #fbfbfd);
          padding: 10px;
          margin-bottom: 20px;
        }

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

        @media only screen and (max-width: 350px) {
          .action-btns {
            flex-direction: column-reverse;
            align-items: center;
          }
        }
      `]}};d([R({type:String})],x.prototype,"identifier",void 0);d([R({type:String})],x.prototype,"token",void 0);d([R({type:String})],x.prototype,"baseHost",void 0);d([R({type:String})],x.prototype,"endpointPath",void 0);d([R({type:String})],x.prototype,"displayMode",void 0);d([R({type:String})],x.prototype,"submitterScreenname",void 0);d([R({type:String})],x.prototype,"submitterItemname",void 0);d([R({type:Object})],x.prototype,"oldReview",void 0);d([R({type:String})],x.prototype,"unrecoverableError",void 0);d([R({type:Number})],x.prototype,"maxSubjectLength",void 0);d([R({type:Number})],x.prototype,"maxBodyLength",void 0);d([R({type:Object})],x.prototype,"fetchHandler",void 0);d([R({type:Object})],x.prototype,"recaptchaManager",void 0);d([R({type:Boolean})],x.prototype,"bypassRecaptcha",void 0);d([R({type:Boolean})],x.prototype,"canDelete",void 0);d([V()],x.prototype,"currentStars",void 0);d([V()],x.prototype,"currentSubjectLength",void 0);d([V()],x.prototype,"currentBodyLength",void 0);d([V()],x.prototype,"recoverableError",void 0);d([V()],x.prototype,"formCanSubmit",void 0);d([V()],x.prototype,"submissionInProgress",void 0);d([Fr("#review-form")],x.prototype,"reviewForm",void 0);x=d([bt("ia-review-form")],x);class Qa{async fetchApiResponse(e,t){return{success:!0}}async fetchIAApiResponse(e,t){return{}}async fetch(e,t){return new Response}}let K=class extends le{constructor(){super(...arguments),this.mockOldReview=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new ie({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new ie({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.fetchHandler=new Qa,this.goodRecaptchaManager=new fr({defaultSiteKey:"6Ld64a8UAAAAAGbDwi1927ztGNw7YABQ-dqzvTN2"}),this.badRecaptchaManager=new fr({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.recoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.review=this.mockOldReview}render(){return A` <h2>Toggle ReCaptcha</h2>
      ${this.recaptchaManager?b:A`
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
      <button
        @click=${()=>{this.reviewForm.displayMode="form"}}
      >
        Switch to form view
      </button>
      ${this.review!==this.mockOldReview?A`<button @click=${()=>this.review=this.mockOldReview}>
            Prefill normal review
          </button>`:b}
      ${this.review!==this.longReview?A`<button @click=${()=>this.review=this.longReview}>
            Prefill long review
          </button>`:b}
      ${this.review!==this.reviewWithLink?A`<button @click=${()=>this.review=this.reviewWithLink}>
            Prefill review with link
          </button>`:b}
      ${this.review!==this.reviewWithTextLink?A`<button @click=${()=>this.review=this.reviewWithTextLink}>
            Prefill review with text link
          </button>`:b}
      <button @click=${()=>this.allowDeletion=!this.allowDeletion}>
        ${this.allowDeletion?"Prevent":"Allow"} deletion
      </button>

      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${this.review}
          .recaptchaManager=${this.recaptchaManager}
          .unrecoverableError=${this.unrecoverableError?"You must be logged in to write reviews.":void 0}
          .recoverableError=${this.recoverableError?"There's a problem submitting your review, please try again later.":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .fetchHandler=${this.fetchHandler}
          ?canDelete=${this.allowDeletion}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?submissionInProgress=${!0}
        ></ia-review-form>
      </div>`}};K.styles=S`
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
  `;d([V()],K.prototype,"recaptchaManager",void 0);d([V()],K.prototype,"bypassRecaptcha",void 0);d([V()],K.prototype,"unrecoverableError",void 0);d([V()],K.prototype,"recoverableError",void 0);d([V()],K.prototype,"useCharCounts",void 0);d([V()],K.prototype,"allowDeletion",void 0);d([V()],K.prototype,"review",void 0);d([Fr("ia-review-form")],K.prototype,"reviewForm",void 0);K=d([bt("app-root")],K);
