(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function u(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var h=i.length-1;h>=0;h--)(o=i[h])&&(a=(r<3?o(a):r>3?o(e,t,a):o(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function Mt(i,e,t,n){function r(a){return a instanceof t?a:new t(function(o){o(a)})}return new(t||(t=Promise))(function(a,o){function h(g){try{p(n.next(g))}catch(y){o(y)}}function d(g){try{p(n.throw(g))}catch(y){o(y)}}function p(g){g.done?a(g.value):r(g.value).then(h,d)}p((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=window,jn=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vn=Symbol(),vr=new WeakMap;let ai=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=vr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&vr.set(t,e))}return e}toString(){return this.cssText}};const es=i=>new ai(typeof i=="string"?i:i+"",void 0,Vn),M=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new ai(t,i,Vn)},ts=(i,e)=>{jn?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=Lt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},br=jn?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return es(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var un;const Nt=window,_r=Nt.trustedTypes,ns=_r?_r.emptyScript:"",Ar=Nt.reactiveElementPolyfillSupport,Cn={toAttribute(i,e){switch(e){case Boolean:i=i?ns:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},oi=(i,e)=>e!==i&&(e==e||i==i),dn={attribute:!0,type:String,converter:Cn,reflect:!1,hasChanged:oi},Mn="finalized";let We=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=dn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||dn}static finalize(){if(this.hasOwnProperty(Mn))return!1;this[Mn]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(br(r))}else e!==void 0&&t.push(br(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ts(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=dn){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const o=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Cn).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=r.getPropertyOptions(a),h=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Cn;this._$El=a,this[a]=h.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||oi)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};We[Mn]=!0,We.elementProperties=new Map,We.elementStyles=[],We.shadowRootOptions={mode:"open"},Ar==null||Ar({ReactiveElement:We}),((un=Nt.reactiveElementVersions)!==null&&un!==void 0?un:Nt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cn;const It=window,Ye=It.trustedTypes,Er=Ye?Ye.createPolicy("lit-html",{createHTML:i=>i}):void 0,kn="$lit$",ve=`lit$${(Math.random()+"").slice(9)}$`,li="?"+ve,rs=`<${li}>`,Ie=document,Ot=()=>Ie.createComment(""),dt=i=>i===null||typeof i!="object"&&typeof i!="function",ui=Array.isArray,is=i=>ui(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",hn=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$r=/-->/g,Tr=/>/g,xe=RegExp(`>|${hn}(?:([^\\s"'>=/]+)(${hn}*=${hn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sr=/'/g,Rr=/"/g,di=/^(?:script|style|textarea|title)$/i,qe=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),xr=new WeakMap,ke=Ie.createTreeWalker(Ie,129,null,!1);function ci(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Er!==void 0?Er.createHTML(e):e}const ss=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=st;for(let h=0;h<t;h++){const d=i[h];let p,g,y=-1,_=0;for(;_<d.length&&(o.lastIndex=_,g=o.exec(d),g!==null);)_=o.lastIndex,o===st?g[1]==="!--"?o=$r:g[1]!==void 0?o=Tr:g[2]!==void 0?(di.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=xe):g[3]!==void 0&&(o=xe):o===xe?g[0]===">"?(o=r??st,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,p=g[1],o=g[3]===void 0?xe:g[3]==='"'?Rr:Sr):o===Rr||o===Sr?o=xe:o===$r||o===Tr?o=st:(o=xe,r=void 0);const k=o===xe&&i[h+1].startsWith("/>")?" ":"";a+=o===st?d+rs:y>=0?(n.push(p),d.slice(0,y)+kn+d.slice(y)+ve+k):d+ve+(y===-2?(n.push(void 0),h):k)}return[ci(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Ln=class hi{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const h=e.length-1,d=this.parts,[p,g]=ss(e,t);if(this.el=hi.createElement(p,n),ke.currentNode=this.el.content,t===2){const y=this.el.content,_=y.firstChild;_.remove(),y.append(..._.childNodes)}for(;(r=ke.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const _ of r.getAttributeNames())if(_.endsWith(kn)||_.startsWith(ve)){const k=g[o++];if(y.push(_),k!==void 0){const Ee=r.getAttribute(k.toLowerCase()+kn).split(ve),re=/([.?@])?(.*)/.exec(k);d.push({type:1,index:a,name:re[2],strings:Ee,ctor:re[1]==="."?os:re[1]==="?"?us:re[1]==="@"?ds:Ft})}else d.push({type:6,index:a})}for(const _ of y)r.removeAttribute(_)}if(di.test(r.tagName)){const y=r.textContent.split(ve),_=y.length-1;if(_>0){r.textContent=Ye?Ye.emptyScript:"";for(let k=0;k<_;k++)r.append(y[k],Ot()),ke.nextNode(),d.push({type:2,index:++a});r.append(y[_],Ot())}}}else if(r.nodeType===8)if(r.data===li)d.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(ve,y+1))!==-1;)d.push({type:7,index:a}),y+=ve.length-1}a++}}static createElement(e,t){const n=Ie.createElement("template");return n.innerHTML=e,n}};function Ke(i,e,t=i,n){var r,a,o,h;if(e===qe)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const p=dt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==p&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),p===void 0?d=void 0:(d=new p(i),d._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Ke(i,d._$AS(i,e.values),d,n)),e}let as=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ie).importNode(n,!0);ke.currentNode=a;let o=ke.nextNode(),h=0,d=0,p=r[0];for(;p!==void 0;){if(h===p.index){let g;p.type===2?g=new fi(o,o.nextSibling,this,e):p.type===1?g=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(g=new cs(o,this,e)),this._$AV.push(g),p=r[++d]}h!==(p==null?void 0:p.index)&&(o=ke.nextNode(),h++)}return ke.currentNode=Ie,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},fi=class pi{constructor(e,t,n,r){var a;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),dt(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==qe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):is(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&dt(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ie.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ln.createElement(ci(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new as(a,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=xr.get(e.strings);return t===void 0&&xr.set(e.strings,t=new Ln(e)),t}T(e){ui(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new pi(this.k(Ot()),this.k(Ot()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ft=class{constructor(e,t,n,r,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Ke(this,e,t,0),o=!dt(e)||e!==this._$AH&&e!==qe,o&&(this._$AH=e);else{const h=e;let d,p;for(e=a[0],d=0;d<a.length-1;d++)p=Ke(this,h[n+d],t,d),p===qe&&(p=this._$AH[d]),o||(o=!dt(p)||p!==this._$AH[d]),p===U?e=U:e!==U&&(e+=(p??"")+a[d+1]),this._$AH[d]=p}o&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},os=class extends Ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};const ls=Ye?Ye.emptyScript:"";let us=class extends Ft{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,ls):this.element.removeAttribute(this.name)}},ds=class extends Ft{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ke(this,e,t,0))!==null&&n!==void 0?n:U)===qe)return;const r=this._$AH,a=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},cs=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const Cr=It.litHtmlPolyfillSupport;Cr==null||Cr(Ln,fi),((cn=It.litHtmlVersions)!==null&&cn!==void 0?cn:It.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fn;const Dt=window,Xe=Dt.trustedTypes,Mr=Xe?Xe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Nn="$lit$",be=`lit$${(Math.random()+"").slice(9)}$`,mi="?"+be,hs=`<${mi}>`,Oe=document,ct=()=>Oe.createComment(""),ht=i=>i===null||typeof i!="object"&&typeof i!="function",gi=Array.isArray,fs=i=>gi(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",pn=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kr=/-->/g,Lr=/>/g,Ce=RegExp(`>|${pn}(?:([^\\s"'>=/]+)(${pn}*=${pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nr=/'/g,Ir=/"/g,yi=/^(?:script|style|textarea|title)$/i,wi=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),A=wi(1),Ut=wi(2),Ze=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Or=new WeakMap,Le=Oe.createTreeWalker(Oe,129,null,!1);function vi(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mr!==void 0?Mr.createHTML(e):e}const ps=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",o=at;for(let h=0;h<t;h++){const d=i[h];let p,g,y=-1,_=0;for(;_<d.length&&(o.lastIndex=_,g=o.exec(d),g!==null);)_=o.lastIndex,o===at?g[1]==="!--"?o=kr:g[1]!==void 0?o=Lr:g[2]!==void 0?(yi.test(g[2])&&(r=RegExp("</"+g[2],"g")),o=Ce):g[3]!==void 0&&(o=Ce):o===Ce?g[0]===">"?(o=r??at,y=-1):g[1]===void 0?y=-2:(y=o.lastIndex-g[2].length,p=g[1],o=g[3]===void 0?Ce:g[3]==='"'?Ir:Nr):o===Ir||o===Nr?o=Ce:o===kr||o===Lr?o=at:(o=Ce,r=void 0);const k=o===Ce&&i[h+1].startsWith("/>")?" ":"";a+=o===at?d+hs:y>=0?(n.push(p),d.slice(0,y)+Nn+d.slice(y)+be+k):d+be+(y===-2?(n.push(void 0),h):k)}return[vi(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ft{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,o=0;const h=e.length-1,d=this.parts,[p,g]=ps(e,t);if(this.el=ft.createElement(p,n),Le.currentNode=this.el.content,t===2){const y=this.el.content,_=y.firstChild;_.remove(),y.append(..._.childNodes)}for(;(r=Le.nextNode())!==null&&d.length<h;){if(r.nodeType===1){if(r.hasAttributes()){const y=[];for(const _ of r.getAttributeNames())if(_.endsWith(Nn)||_.startsWith(be)){const k=g[o++];if(y.push(_),k!==void 0){const Ee=r.getAttribute(k.toLowerCase()+Nn).split(be),re=/([.?@])?(.*)/.exec(k);d.push({type:1,index:a,name:re[2],strings:Ee,ctor:re[1]==="."?gs:re[1]==="?"?ws:re[1]==="@"?vs:zt})}else d.push({type:6,index:a})}for(const _ of y)r.removeAttribute(_)}if(yi.test(r.tagName)){const y=r.textContent.split(be),_=y.length-1;if(_>0){r.textContent=Xe?Xe.emptyScript:"";for(let k=0;k<_;k++)r.append(y[k],ct()),Le.nextNode(),d.push({type:2,index:++a});r.append(y[_],ct())}}}else if(r.nodeType===8)if(r.data===mi)d.push({type:2,index:a});else{let y=-1;for(;(y=r.data.indexOf(be,y+1))!==-1;)d.push({type:7,index:a}),y+=be.length-1}a++}}static createElement(e,t){const n=Oe.createElement("template");return n.innerHTML=e,n}}function Je(i,e,t=i,n){var r,a,o,h;if(e===Ze)return e;let d=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const p=ht(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==p&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),p===void 0?d=void 0:(d=new p(i),d._$AT(i,t,n)),n!==void 0?((o=(h=t)._$Co)!==null&&o!==void 0?o:h._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Je(i,d._$AS(i,e.values),d,n)),e}class ms{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Oe).importNode(n,!0);Le.currentNode=a;let o=Le.nextNode(),h=0,d=0,p=r[0];for(;p!==void 0;){if(h===p.index){let g;p.type===2?g=new mt(o,o.nextSibling,this,e):p.type===1?g=new p.ctor(o,p.name,p.strings,this,e):p.type===6&&(g=new bs(o,this,e)),this._$AV.push(g),p=r[++d]}h!==(p==null?void 0:p.index)&&(o=Le.nextNode(),h++)}return Le.currentNode=Oe,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class mt{constructor(e,t,n,r){var a;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),ht(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Ze&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):fs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&ht(this._$AH)?this._$AA.nextSibling.data=e:this.$(Oe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ft.createElement(vi(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const o=new ms(a,this),h=o.u(this.options);o.v(n),this.$(h),this._$AH=o}}_$AC(e){let t=Or.get(e.strings);return t===void 0&&Or.set(e.strings,t=new ft(e)),t}T(e){gi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new mt(this.k(ct()),this.k(ct()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class zt{constructor(e,t,n,r,a){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let o=!1;if(a===void 0)e=Je(this,e,t,0),o=!ht(e)||e!==this._$AH&&e!==Ze,o&&(this._$AH=e);else{const h=e;let d,p;for(e=a[0],d=0;d<a.length-1;d++)p=Je(this,h[n+d],t,d),p===Ze&&(p=this._$AH[d]),o||(o=!ht(p)||p!==this._$AH[d]),p===T?e=T:e!==T&&(e+=(p??"")+a[d+1]),this._$AH[d]=p}o&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gs extends zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}const ys=Xe?Xe.emptyScript:"";class ws extends zt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,ys):this.element.removeAttribute(this.name)}}class vs extends zt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Je(this,e,t,0))!==null&&n!==void 0?n:T)===Ze)return;const r=this._$AH,a=e===T&&r!==T||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==T&&(r===T||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class bs{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}}const Dr=Dt.litHtmlPolyfillSupport;Dr==null||Dr(ft,mt),((fn=Dt.litHtmlVersions)!==null&&fn!==void 0?fn:Dt.litHtmlVersions=[]).push("2.8.0");const _s=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=a._$litPart$;if(o===void 0){const h=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new mt(e.insertBefore(ct(),h),h,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn,gn;class he extends We{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_s(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ze}}he.finalized=!0,he._$litElement$=!0,(mn=globalThis.litElementHydrateSupport)===null||mn===void 0||mn.call(globalThis,{LitElement:he});const Pr=globalThis.litElementPolyfillSupport;Pr==null||Pr({LitElement:he});((gn=globalThis.litElementVersions)!==null&&gn!==void 0?gn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(o){customElements.define(t,o)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Es=(i,e,t)=>{e.constructor.createProperty(t,i)};function $(i){return(e,t)=>t!==void 0?Es(i,e,t):As(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(i){return $({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const a=(r=t.originalKey)!==null&&r!==void 0?r:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(o.finisher=function(h){i(h,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bi(i,e){return $s({descriptor:t=>({get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn;((yn=window.HTMLSlotElement)===null||yn===void 0?void 0:yn.prototype.assignedElements)!=null;function m(i){let e,t,n;return e=i,(r,a,o)=>{if(o.value!=null)o.value=Br(o.value,e,t,n);else if(o.get!=null)o.get=Br(o.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const wn=new Map;function Br(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let h=this[r];if(Array.isArray(n))for(const d of n)wn.has(d)?wn.get(d).push(h):wn.set(d,[h]);if(e||a.length>0||t>0){let d;e===!0?d=a.map(y=>y.toString()).join("!"):e?d=e.apply(this,a):d=a[0];const p=`${d}__timestamp`;let g=!1;if(t>0)if(!h.has(p))g=!0;else{let y=h.get(p);g=Date.now()-y>t}h.has(d)&&!g?o=h.get(d):(o=i.apply(this,a),h.set(d,o),t>0&&h.set(p,Date.now()))}else{const d=this;h.has(d)?o=h.get(d):(o=i.apply(this,a),h.set(d,o))}return o}}class In{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}In.shared=new In;class Ae{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Ae.shared=new Ae;class Pt{parseValue(e){return Ae.shared.parseValue(e)}}Pt.shared=new Pt;class pt{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}pt.shared=new pt;class Bt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const o=parseFloat(r);if(Number.isNaN(o))return t=!0,0;const d=60**(e.length-1-a);return o*Math.floor(d)}).reduce((r,a)=>r+a,0);return t?void 0:n}}Bt.shared=new Bt;class On{parseValue(e){if(typeof e=="string")return e}}On.shared=new On;class Ts{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class Dn{parseValue(e){if(typeof e=="string")return e}}Dn.shared=new Dn;class Ht{parseValue(e){return String(e)}}Ht.shared=new Ht;class ae{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}u([m()],ae.prototype,"values",null);u([m()],ae.prototype,"value",null);class Ss extends ae{constructor(e){super(In.shared,e)}}class ye extends ae{constructor(e){super(pt.shared,e)}}class vn extends ae{constructor(e){super(Bt.shared,e)}}class Q extends ae{constructor(e){super(Ae.shared,e)}}class C extends ae{constructor(e){super(Ht.shared,e)}}class Rs extends ae{constructor(e){super(Dn.shared,e)}}class Hr extends ae{constructor(e){super(Pt.shared,e)}}class xs extends ae{constructor(e){super(On.shared,e)}}class Cs extends ae{constructor(e,t){super(t,e)}}class Ms extends Cs{constructor(e){const t=new Ts(Ht.shared);super(e,t)}}class v{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new ye(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new C(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new Q(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new Q(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new C(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new C(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Hr(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new C(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new C(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new C(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new C(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new ye(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new C(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new Q(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new vn(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new C(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new Q(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new ye(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new C(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new C(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new Q(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Hr(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new C(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new vn(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new C(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new Q(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new xs(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Ss(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new C(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new Q(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new Q(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new C(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new C(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Rs(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new C(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new Q(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new ye(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new C(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new ye(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new vn(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new C(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new C(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new ye(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new ye(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new ye(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Ms(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new C(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new C(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new C(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new Q(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new C(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new C(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new Q(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new C(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new C(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new Q(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new Q(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}u([m()],v.prototype,"addeddate",null);u([m()],v.prototype,"audio_codec",null);u([m()],v.prototype,"audio_sample_rate",null);u([m()],v.prototype,"avg_rating",null);u([m()],v.prototype,"collection",null);u([m()],v.prototype,"collections_raw",null);u([m()],v.prototype,"collection_size",null);u([m()],v.prototype,"contributor",null);u([m()],v.prototype,"coverage",null);u([m()],v.prototype,"creator",null);u([m()],v.prototype,"collection_layout",null);u([m()],v.prototype,"date",null);u([m()],v.prototype,"description",null);u([m()],v.prototype,"downloads",null);u([m()],v.prototype,"duration",null);u([m()],v.prototype,"external_identifier",null);u([m()],v.prototype,"files_count",null);u([m()],v.prototype,"indexdate",null);u([m()],v.prototype,"isbn",null);u([m()],v.prototype,"issue",null);u([m()],v.prototype,"item_count",null);u([m()],v.prototype,"item_size",null);u([m()],v.prototype,"language",null);u([m()],v.prototype,"length",null);u([m()],v.prototype,"lineage",null);u([m()],v.prototype,"month",null);u([m()],v.prototype,"mediatype",null);u([m()],v.prototype,"noindex",null);u([m()],v.prototype,"notes",null);u([m()],v.prototype,"num_favorites",null);u([m()],v.prototype,"num_reviews",null);u([m()],v.prototype,"openlibrary_edition",null);u([m()],v.prototype,"openlibrary_work",null);u([m()],v.prototype,"page_progression",null);u([m()],v.prototype,"partner",null);u([m()],v.prototype,"ppi",null);u([m()],v.prototype,"publicdate",null);u([m()],v.prototype,"publisher",null);u([m()],v.prototype,"reviewdate",null);u([m()],v.prototype,"runtime",null);u([m()],v.prototype,"scanner",null);u([m()],v.prototype,"source",null);u([m()],v.prototype,"start_localtime",null);u([m()],v.prototype,"start_time",null);u([m()],v.prototype,"stop_time",null);u([m()],v.prototype,"subject",null);u([m()],v.prototype,"taper",null);u([m()],v.prototype,"title",null);u([m()],v.prototype,"transferer",null);u([m()],v.prototype,"track",null);u([m()],v.prototype,"type",null);u([m()],v.prototype,"uploader",null);u([m()],v.prototype,"utc_offset",null);u([m()],v.prototype,"venue",null);u([m()],v.prototype,"volume",null);u([m()],v.prototype,"week",null);u([m()],v.prototype,"year",null);class Qe{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Pt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?Bt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?Ae.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?Ae.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?Ae.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}u([m()],Qe.prototype,"size",null);u([m()],Qe.prototype,"length",null);u([m()],Qe.prototype,"height",null);u([m()],Qe.prototype,"width",null);u([m()],Qe.prototype,"track",null);class se{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?pt.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?pt.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?Ae.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}u([m()],se.prototype,"reviewdate",null);u([m()],se.prototype,"createdate",null);u([m()],se.prototype,"stars",null);class ks{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new Qe(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new se(r))}}var Ne;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(Ne||(Ne={}));class Pn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Ls{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const o=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,o)}catch(o){const h=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Ne.networkError,h)}try{const o=await a.json(),h=o.error;if(h){const d=o.forensics;return this.getErrorResult(Ne.searchEngineError,h,d)}else return{success:o}}catch(o){const h=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(Ne.decodingError,h)}}getErrorResult(e,t,n){return{error:new Pn(e,t,n)}}}class Fr{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Pn(Ne.itemNotFound)}:{success:new ks(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new Pn(Ne.itemNotFound)}:{success:r.success.result}}}Fr.default=new Fr(new Ls);let Ns=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Is(i){return new Promise(e=>setTimeout(e,i))}var ce;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(ce||(ce={}));const Ur="lazyLoaderService";class Os{constructor(e){var t,n,r;this.emitter=Ns(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(r=e==null?void 0:e.retryInterval)!==null&&r!==void 0?r:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return Mt(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return Mt(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return Mt(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,r=`script[src='${e.src}'][async][${ce.owner}='${Ur}'][${ce.retryNumber}='${n}']`;let a=this.container.querySelector(r);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((o,h)=>{if(a.getAttribute(ce.dynamicImportLoaded)){o();return}const d=e.scriptBeingRetried,p=a.onload||(d==null?void 0:d.onload);a.onload=y=>{p==null||p(y),a.setAttribute(ce.dynamicImportLoaded,"true"),o()};const g=a.onerror||(d==null?void 0:d.onerror);a.onerror=y=>Mt(this,void 0,void 0,function*(){const _=a.getAttribute(ce.hasBeenRetried);if(n<this.retryCount&&!_){a.setAttribute(ce.hasBeenRetried,"true"),yield Is(this.retryInterval*1e3);const k=n+1;this.emitter.emit("scriptLoadRetried",e.src,k),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:k,scriptBeingRetried:a}))}else _||this.emitter.emit("scriptLoadFailed",e.src,y),g==null||g(y),h(y)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),r=document.createElement("script"),a=e.retryNumber;r.setAttribute(ce.owner,Ur),r.setAttribute("src",n),r.setAttribute(ce.retryNumber,a.toString()),r.async=!0;const o=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(o).forEach(h=>{r.setAttribute(h,o[h])}),e.bundleType){case"module":r.setAttribute("type",e.bundleType);break;case"nomodule":r.setAttribute(e.bundleType,"");break}return r}}class Ds{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=r=>{this.finishExecution(),t(r)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Ps{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Os,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const r=this.recaptchaCache[n];if(r)return r;const a=await this.getRecaptchaLibrary(),o=new Ds({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=o,o}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=i=>typeof i!="string"&&"strTag"in i,Hs=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=i=>Bs(i)?Hs(i.strings,i.values):i;let R=Fs;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zs=new Us;zs.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vs=i=>(...e)=>({_$litDirective$:i,values:e});class Ws{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bn extends Ws{constructor(e){if(super(e),this.et=U,e.type!==js.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this.ft=void 0,this.et=e;if(e===qe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Bn.directiveName="unsafeHTML",Bn.resultType=1;const _i=Vs(Bn);/*! @license DOMPurify 3.4.13 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.13/LICENSE */function zr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function Gs(i){if(Array.isArray(i))return i}function Ys(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,h=[],d=!0,p=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(d=(n=a.call(t)).done)&&(h.push(n.value),h.length!==e);d=!0);}catch(g){p=!0,r=g}finally{try{if(!d&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(p)throw r}}return h}}function qs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(i,e){return Gs(i)||Ys(i,e)||Xs(i,e)||qs()}function Xs(i,e){if(i){if(typeof i=="string")return zr(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?zr(i,e):void 0}}const Ai=Object.entries,jr=Object.setPrototypeOf,Zs=Object.isFrozen,Js=Object.getPrototypeOf,Qs=Object.getOwnPropertyDescriptor;let W=Object.freeze,G=Object.seal,Ge=Object.create,Ei=typeof Reflect<"u"&&Reflect,Hn=Ei.apply,Fn=Ei.construct;W||(W=function(e){return e});G||(G=function(e){return e});Hn||(Hn=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return e.apply(t,r)});Fn||(Fn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new e(...n)});const je=z(Array.prototype.forEach),ea=z(Array.prototype.lastIndexOf),Vr=z(Array.prototype.pop),Ve=z(Array.prototype.push),ta=z(Array.prototype.splice),_e=Array.isArray,ut=z(String.prototype.toLowerCase),bn=z(String.prototype.toString),Wr=z(String.prototype.match),ot=z(String.prototype.replace),Gr=z(String.prototype.indexOf),na=z(String.prototype.trim),ra=z(Number.prototype.toString),ia=z(Boolean.prototype.toString),Yr=typeof BigInt>"u"?null:z(BigInt.prototype.toString),qr=typeof Symbol>"u"?null:z(Symbol.prototype.toString),V=z(Object.prototype.hasOwnProperty),lt=z(Object.prototype.toString),j=z(RegExp.prototype.test),Me=sa(TypeError);function z(i){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Hn(i,e,n)}}function sa(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Fn(i,t)}}function S(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ut;if(jr&&jr(i,null),!_e(e))return i;let n=e.length;for(;n--;){let r=e[n];if(typeof r=="string"){const a=t(r);a!==r&&(Zs(e)||(e[n]=a),r=a)}i[r]=!0}return i}function aa(i){for(let e=0;e<i.length;e++)V(i,e)||(i[e]=null);return i}function Y(i){const e=Ge(null);for(const n of Ai(i)){var t=Ks(n,2);const r=t[0],a=t[1];V(i,r)&&(_e(a)?e[r]=aa(a):a&&typeof a=="object"&&a.constructor===Object?e[r]=Y(a):e[r]=a)}return e}function oa(i){switch(typeof i){case"string":return i;case"number":return ra(i);case"boolean":return ia(i);case"bigint":return Yr?Yr(i):"0";case"symbol":return qr?qr(i):"Symbol()";case"undefined":return lt(i);case"function":case"object":{if(i===null)return lt(i);const e=i,t=ie(e,"toString");if(typeof t=="function"){const n=t(e);return typeof n=="string"?n:lt(n)}return lt(i)}default:return lt(i)}}function ie(i,e){for(;i!==null;){const n=Qs(i,e);if(n){if(n.get)return z(n.get);if(typeof n.value=="function")return z(n.value)}i=Js(i)}function t(){return null}return t}function la(i){try{return j(i,""),!0}catch{return!1}}const Kr=W(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_n=W(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),An=W(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ua=W(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),En=W(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),da=W(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xr=W(["#text"]),Zr=W(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),$n=W(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Jr=W(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),kt=W(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ca=G(/{{[\w\W]*|^[\w\W]*}}/g),ha=G(/<%[\w\W]*|^[\w\W]*%>/g),fa=G(/\${[\w\W]*/g),pa=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),ma=G(/^aria-[\-\w]+$/),Qr=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ga=G(/^(?:\w+script|data):/i),ya=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wa=G(/^html$/i),va=G(/^[a-z][.\w]*(-[.\w]+)+$/i),ei=G(/<[/\w!]/g),ti=G(/<[/\w]/g),ba=G(/<\/no(script|embed|frames)/i),_a=G(/\/>/i),ee={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Aa=function(){return typeof window>"u"?null:window},Ea=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(n=t.getAttribute(r));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},ni=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},we=function(e,t,n,r){return V(e,t)&&_e(e[t])?S(r.base?Y(r.base):{},e[t],r.transform):n};function $i(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Aa();const e=f=>$i(f);if(e.version="3.4.13",e.removed=[],!i||!i.document||i.document.nodeType!==ee.document||!i.Element)return e.isSupported=!1,e;let t=i.document;const n=t,r=n.currentScript;i.DocumentFragment;const a=i.HTMLTemplateElement,o=i.Node,h=i.Element,d=i.NodeFilter,p=i.NamedNodeMap;p===void 0&&(i.NamedNodeMap||i.MozNamedAttrMap),i.HTMLFormElement;const g=i.DOMParser,y=i.trustedTypes,_=h.prototype,k=ie(_,"cloneNode"),Ee=ie(_,"remove"),re=ie(_,"nextSibling"),De=ie(_,"childNodes"),$e=ie(_,"parentNode"),Wn=ie(_,"shadowRoot"),jt=ie(_,"attributes"),q=o&&o.prototype?ie(o.prototype,"nodeType"):null,oe=o&&o.prototype?ie(o.prototype,"nodeName"):null,yt=o&&o.prototype?ie(o.prototype,"ownerDocument"):null;if(typeof a=="function"){const f=t.createElement("template");f.content&&f.content.ownerDocument&&(t=f.content.ownerDocument)}let X,Te="",Vt,Gn=!1,et=0;const Yn=function(){if(et>0)throw Me('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Pe=function(s){Yn(),et++;try{return X.createHTML(s)}finally{et--}},Si=function(s){Yn(),et++;try{return X.createScriptURL(s)}finally{et--}},Ri=function(){return Gn||(Vt=Ea(y,r),Gn=!0),Vt},wt=t,Wt=wt.implementation,qn=wt.createNodeIterator,xi=wt.createDocumentFragment,Ci=wt.getElementsByTagName,Mi=n.importNode;let N=ni();e.isSupported=typeof Ai=="function"&&typeof $e=="function"&&Wt&&Wt.createHTMLDocument!==void 0;const ki=ca,Li=ha,Ni=fa,Ii=pa,Oi=ma,Di=ga,Kn=ya,Pi=va;let Xn=Qr,I=null;const Gt=S({},[...Kr,..._n,...An,...En,...Xr]);let O=null;const Yt=S({},[...Zr,...$n,...Jr,...kt]);let B=Object.seal(Ge(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),tt=null,Zn=null;const fe=Object.seal(Ge(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Jn=!0,qt=!0,Qn=!1,er=!0,pe=!1,me=!0,Se=!1,Kt=!1,vt=null,bt=null,Xt=!1,Be=!1,_t=!1,At=!1,tr=!0,nr=!1;const rr="user-content-";let Zt=!0,Et=!1,He={},le=null;const Jt=S({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let ir=null;const sr=S({},["audio","video","img","source","image","track"]);let Qt=null;const ar=S({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$t="http://www.w3.org/1998/Math/MathML",Tt="http://www.w3.org/2000/svg",ue="http://www.w3.org/1999/xhtml";let Fe=ue,en=!1,tn=null;const Bi=S({},[$t,Tt,ue],bn),or=W(["mi","mo","mn","ms","mtext"]);let nn=S({},or);const lr=W(["annotation-xml"]);let rn=S({},lr);const Hi=S({},["title","style","font","a","script"]);let nt=null;const Fi=["application/xhtml+xml","text/html"],Ui="text/html";let D=null,Ue=null;const zi=t.createElement("form"),ur=function(s){return s instanceof RegExp||s instanceof Function},sn=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Ue&&Ue===s)return;(!s||typeof s!="object")&&(s={}),s=Y(s),nt=Fi.indexOf(s.PARSER_MEDIA_TYPE)===-1?Ui:s.PARSER_MEDIA_TYPE,D=nt==="application/xhtml+xml"?bn:ut,I=we(s,"ALLOWED_TAGS",Gt,{transform:D}),O=we(s,"ALLOWED_ATTR",Yt,{transform:D}),tn=we(s,"ALLOWED_NAMESPACES",Bi,{transform:bn}),Qt=we(s,"ADD_URI_SAFE_ATTR",ar,{transform:D,base:ar}),ir=we(s,"ADD_DATA_URI_TAGS",sr,{transform:D,base:sr}),le=we(s,"FORBID_CONTENTS",Jt,{transform:D}),tt=we(s,"FORBID_TAGS",Y({}),{transform:D}),Zn=we(s,"FORBID_ATTR",Y({}),{transform:D}),He=V(s,"USE_PROFILES")?s.USE_PROFILES&&typeof s.USE_PROFILES=="object"?Y(s.USE_PROFILES):s.USE_PROFILES:!1,Jn=s.ALLOW_ARIA_ATTR!==!1,qt=s.ALLOW_DATA_ATTR!==!1,Qn=s.ALLOW_UNKNOWN_PROTOCOLS||!1,er=s.ALLOW_SELF_CLOSE_IN_ATTR!==!1,pe=s.SAFE_FOR_TEMPLATES||!1,me=s.SAFE_FOR_XML!==!1,Se=s.WHOLE_DOCUMENT||!1,Be=s.RETURN_DOM||!1,_t=s.RETURN_DOM_FRAGMENT||!1,At=s.RETURN_TRUSTED_TYPE||!1,Xt=s.FORCE_BODY||!1,tr=s.SANITIZE_DOM!==!1,nr=s.SANITIZE_NAMED_PROPS||!1,Zt=s.KEEP_CONTENT!==!1,Et=s.IN_PLACE||!1,Xn=la(s.ALLOWED_URI_REGEXP)?s.ALLOWED_URI_REGEXP:Qr,Fe=typeof s.NAMESPACE=="string"?s.NAMESPACE:ue,nn=V(s,"MATHML_TEXT_INTEGRATION_POINTS")&&s.MATHML_TEXT_INTEGRATION_POINTS&&typeof s.MATHML_TEXT_INTEGRATION_POINTS=="object"?Y(s.MATHML_TEXT_INTEGRATION_POINTS):S({},or),rn=V(s,"HTML_INTEGRATION_POINTS")&&s.HTML_INTEGRATION_POINTS&&typeof s.HTML_INTEGRATION_POINTS=="object"?Y(s.HTML_INTEGRATION_POINTS):S({},lr);const l=V(s,"CUSTOM_ELEMENT_HANDLING")&&s.CUSTOM_ELEMENT_HANDLING&&typeof s.CUSTOM_ELEMENT_HANDLING=="object"?Y(s.CUSTOM_ELEMENT_HANDLING):Ge(null);if(B=Ge(null),V(l,"tagNameCheck")&&ur(l.tagNameCheck)&&(B.tagNameCheck=l.tagNameCheck),V(l,"attributeNameCheck")&&ur(l.attributeNameCheck)&&(B.attributeNameCheck=l.attributeNameCheck),V(l,"allowCustomizedBuiltInElements")&&typeof l.allowCustomizedBuiltInElements=="boolean"&&(B.allowCustomizedBuiltInElements=l.allowCustomizedBuiltInElements),G(B),pe&&(qt=!1),_t&&(Be=!0),He&&(I=S({},Xr),O=Ge(null),He.html===!0&&(S(I,Kr),S(O,Zr)),He.svg===!0&&(S(I,_n),S(O,$n),S(O,kt)),He.svgFilters===!0&&(S(I,An),S(O,$n),S(O,kt)),He.mathMl===!0&&(S(I,En),S(O,Jr),S(O,kt))),fe.tagCheck=null,fe.attributeCheck=null,V(s,"ADD_TAGS")&&(typeof s.ADD_TAGS=="function"?fe.tagCheck=s.ADD_TAGS:_e(s.ADD_TAGS)&&(I===Gt&&(I=Y(I)),S(I,s.ADD_TAGS,D))),V(s,"ADD_ATTR")&&(typeof s.ADD_ATTR=="function"?fe.attributeCheck=s.ADD_ATTR:_e(s.ADD_ATTR)&&(O===Yt&&(O=Y(O)),S(O,s.ADD_ATTR,D))),V(s,"ADD_URI_SAFE_ATTR")&&_e(s.ADD_URI_SAFE_ATTR)&&S(Qt,s.ADD_URI_SAFE_ATTR,D),V(s,"FORBID_CONTENTS")&&_e(s.FORBID_CONTENTS)&&(le===Jt&&(le=Y(le)),S(le,s.FORBID_CONTENTS,D)),V(s,"ADD_FORBID_CONTENTS")&&_e(s.ADD_FORBID_CONTENTS)&&(le===Jt&&(le=Y(le)),S(le,s.ADD_FORBID_CONTENTS,D)),Zt&&(I["#text"]=!0),Se&&S(I,["html","head","body"]),I.table&&(S(I,["tbody"]),delete tt.tbody),s.TRUSTED_TYPES_POLICY){if(typeof s.TRUSTED_TYPES_POLICY.createHTML!="function")throw Me('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof s.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Me('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const c=X;X=s.TRUSTED_TYPES_POLICY;try{Te=Pe("")}catch(w){throw X=c,w}}else s.TRUSTED_TYPES_POLICY===null?(X=void 0,Te=""):(X===void 0&&(X=Ri()),X&&typeof Te=="string"&&(Te=Pe("")));W&&W(s),Ue=s},dr=S({},[..._n,...An,...ua]),cr=S({},[...En,...da]),ji=function(s,l,c){return l.namespaceURI===ue?s==="svg":l.namespaceURI===$t?s==="svg"&&(c==="annotation-xml"||nn[c]):!!dr[s]},Vi=function(s,l,c){return l.namespaceURI===ue?s==="math":l.namespaceURI===Tt?s==="math"&&rn[c]:!!cr[s]},Wi=function(s,l,c){return l.namespaceURI===Tt&&!rn[c]||l.namespaceURI===$t&&!nn[c]?!1:!cr[s]&&(Hi[s]||!dr[s])},Gi=function(s){let l=$e(s);(!l||!l.tagName)&&(l={namespaceURI:Fe,tagName:"template"});const c=ut(s.tagName),w=ut(l.tagName);return tn[s.namespaceURI]?s.namespaceURI===Tt?ji(c,l,w):s.namespaceURI===$t?Vi(c,l,w):s.namespaceURI===ue?Wi(c,l,w):!!(nt==="application/xhtml+xml"&&tn[s.namespaceURI]):!1},ge=function(s){Ve(e.removed,{element:s});try{$e(s).removeChild(s)}catch{if(Ee(s),!$e(s))throw Me("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},St=function(s){rt(s);const l=De(s);if(l){const w=[];je(l,b=>{Ve(w,b)}),je(w,b=>{try{Ee(b)}catch{}})}const c=jt(s);if(c)for(let w=c.length-1;w>=0;--w){const b=c[w],E=b&&b.name;if(typeof E=="string")try{s.removeAttribute(E)}catch{}}},Re=function(s,l){try{Ve(e.removed,{attribute:l.getAttributeNode(s),from:l})}catch{Ve(e.removed,{attribute:null,from:l})}if(l.removeAttribute(s),s==="is")if(Be||_t)try{ge(l)}catch{}else try{l.setAttribute(s,"")}catch{}},Yi=function(s){const l=jt(s);if(l)for(let c=l.length-1;c>=0;--c){const w=l[c],b=w&&w.name;if(!(typeof b!="string"||O[D(b)]))try{s.removeAttribute(b)}catch{}}},rt=function(s){const l=[s];for(;l.length>0;){const c=l.pop();(q?q(c):c.nodeType)===ee.element&&Yi(c);const b=De(c);if(b)for(let E=b.length-1;E>=0;--E)l.push(b[E])}},qi=function(s){if(!me)return;const l=[s];for(;l.length>0;){const c=l.pop(),w=q?q(c):c.nodeType;if(w===ee.processingInstruction||w===ee.comment&&j(ti,c.data)){try{Ee(c)}catch{}continue}if(w===ee.element){const E=c,x=D(oe?oe(c):c.nodeName);try{E.hasAttribute&&E.hasAttribute("patchsrc")&&E.removeAttribute("patchsrc"),E.hasAttribute&&E.hasAttribute("for")&&x!=="label"&&x!=="output"&&E.removeAttribute("for")}catch{}}const b=De(c);if(b)for(let E=b.length-1;E>=0;--E)l.push(b[E])}},hr=function(s){let l=null,c=null;if(Xt)s="<remove></remove>"+s;else{const E=Wr(s,/^[\r\n\t ]+/);c=E&&E[0]}nt==="application/xhtml+xml"&&Fe===ue&&(s='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+s+"</body></html>");const w=X?Pe(s):s;if(Fe===ue)try{l=new g().parseFromString(w,nt)}catch{}if(!l||!l.documentElement){l=Wt.createDocument(Fe,"template",null);try{l.documentElement.innerHTML=en?Te:w}catch{}}const b=l.body||l.documentElement;return s&&c&&b.insertBefore(t.createTextNode(c),b.childNodes[0]||null),Fe===ue?Ci.call(l,Se?"html":"body")[0]:Se?l.documentElement:b},fr=function(s){const l=yt?yt(s):s.ownerDocument;return qn.call(l||s,s,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Rt=function(s){return s=ot(s,ki," "),s=ot(s,Li," "),s=ot(s,Ni," "),s},an=function(s){var l;s.normalize();const c=yt?yt(s):s.ownerDocument,w=qn.call(c||s,s,d.SHOW_TEXT|d.SHOW_COMMENT|d.SHOW_CDATA_SECTION|d.SHOW_PROCESSING_INSTRUCTION,null);let b=w.nextNode();for(;b;)b.data=Rt(b.data),b=w.nextNode();const E=(l=s.querySelectorAll)===null||l===void 0?void 0:l.call(s,"template");E&&je(E,x=>{ze(x.content)&&an(x.content)})},xt=function(s){const l=oe?oe(s):null;return typeof l!="string"||D(l)!=="form"?!1:typeof s.nodeName!="string"||typeof s.textContent!="string"||typeof s.removeChild!="function"||s.attributes!==jt(s)||typeof s.removeAttribute!="function"||typeof s.setAttribute!="function"||typeof s.namespaceURI!="string"||typeof s.insertBefore!="function"||typeof s.hasChildNodes!="function"||s.nodeType!==q(s)||s.childNodes!==De(s)},ze=function(s){if(!q||typeof s!="object"||s===null)return!1;try{return q(s)===ee.documentFragment}catch{return!1}},it=function(s){if(!q||typeof s!="object"||s===null)return!1;try{return typeof q(s)=="number"}catch{return!1}};function de(f,s,l){f.length!==0&&je(f,c=>{c.call(e,s,l,Ue)})}const Ki=function(s,l){return!!(me&&s.hasChildNodes()&&!it(s.firstElementChild)&&j(ei,s.textContent)&&j(ei,s.innerHTML)||me&&s.namespaceURI===ue&&l==="style"&&it(s.firstElementChild)||s.nodeType===ee.processingInstruction||me&&s.nodeType===ee.comment&&j(ti,s.data))},Xi=function(s,l,c){if(!tt[l]&&yr(l)&&(B.tagNameCheck instanceof RegExp&&j(B.tagNameCheck,l)||B.tagNameCheck instanceof Function&&B.tagNameCheck(l)))return!1;if(Zt&&!le[l]){const w=$e(s),b=De(s);if(b&&w){const E=b.length;for(let x=E-1;x>=0;--x){const P=s===c?k(b[x],!0):b[x];w.insertBefore(P,re(s))}}}return ge(s),!0},pr=function(s,l,c,w){return s.length===0?l:l===c||l===w?Y(l):l},mr=function(s,l){if(de(N.beforeSanitizeElements,s,null),s!==l&&$e(s)===null)return Et&&rt(s),!0;if(xt(s))return ge(s),!0;const c=D(oe?oe(s):s.nodeName);if(I=pr(N.uponSanitizeElement,I,Gt,vt),de(N.uponSanitizeElement,s,{tagName:c,allowedTags:I}),s!==l&&$e(s)===null)return Et&&rt(s),!0;if(Ki(s,c))return ge(s),!0;if(tt[c]||!(fe.tagCheck instanceof Function&&fe.tagCheck(c))&&!I[c]){const b=Xi(s,c,l);return b===!1&&de(N.afterSanitizeElements,s,null),b}if((q?q(s):s.nodeType)===ee.element&&!Gi(s)||(c==="noscript"||c==="noembed"||c==="noframes")&&j(ba,s.innerHTML))return ge(s),!0;if(pe&&s.nodeType===ee.text){const b=Rt(s.textContent);s.textContent!==b&&(Ve(e.removed,{element:s.cloneNode()}),s.textContent=b)}return de(N.afterSanitizeElements,s,null),!1},gr=function(s,l,c){if(Zn[l]||me&&l==="patchsrc"||me&&l==="for"&&s!=="label"&&s!=="output"||tr&&(l==="id"||l==="name")&&(c in t||c in zi))return!1;const w=O[l]||fe.attributeCheck instanceof Function&&fe.attributeCheck(l,s);if(!(qt&&j(Ii,l))){if(!(Jn&&j(Oi,l))){if(w){if(!Qt[l]){if(!j(Xn,ot(c,Kn,""))){if(!((l==="src"||l==="xlink:href"||l==="href")&&s!=="script"&&Gr(c,"data:")===0&&ir[s])){if(!(Qn&&!j(Di,ot(c,Kn,"")))){if(c)return!1}}}}}else if(!(yr(s)&&(B.tagNameCheck instanceof RegExp&&j(B.tagNameCheck,s)||B.tagNameCheck instanceof Function&&B.tagNameCheck(s))&&(B.attributeNameCheck instanceof RegExp&&j(B.attributeNameCheck,l)||B.attributeNameCheck instanceof Function&&B.attributeNameCheck(l,s))||l==="is"&&B.allowCustomizedBuiltInElements&&(B.tagNameCheck instanceof RegExp&&j(B.tagNameCheck,c)||B.tagNameCheck instanceof Function&&B.tagNameCheck(c))))return!1}}return!0},Zi=S({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),yr=function(s){return!Zi[ut(s)]&&j(Pi,s)},Ji=function(s,l,c,w){if(X&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!c)switch(y.getAttributeType(s,l)){case"TrustedHTML":return Pe(w);case"TrustedScriptURL":return Si(w)}return w},Qi=function(s,l,c,w){try{c?s.setAttributeNS(c,l,w):s.setAttribute(l,w),xt(s)?ge(s):Vr(e.removed)}catch{Re(l,s)}},wr=function(s){de(N.beforeSanitizeAttributes,s,null);const l=s.attributes;if(!l||xt(s))return;O=pr(N.uponSanitizeAttribute,O,Yt,bt);const c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:O,forceKeepAttr:void 0};let w=l.length;const b=D(s.nodeName);for(;w--;){const E=l[w],x=E.name,P=E.namespaceURI,Z=E.value,J=D(x),ln=Z;let K=x==="value"?ln:na(ln);if(c.attrName=J,c.attrValue=K,c.keepAttr=!0,c.forceKeepAttr=void 0,de(N.uponSanitizeAttribute,s,c),K=c.attrValue,nr&&(J==="id"||J==="name")&&Gr(K,rr)!==0&&(Re(x,s),K=rr+K),me&&j(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,K)){Re(x,s);continue}if(J==="attributename"&&Wr(K,"href")){Re(x,s);continue}if(!c.forceKeepAttr){if(!c.keepAttr){Re(x,s);continue}if(!er&&j(_a,K)){Re(x,s);continue}if(pe&&(K=Rt(K)),!gr(b,J,K)){Re(x,s);continue}K=Ji(b,J,P,K),K!==ln&&Qi(s,x,P,K)}}de(N.afterSanitizeAttributes,s,null)},Ct=function(s){let l=null;const c=fr(s);for(de(N.beforeSanitizeShadowDOM,s,null);l=c.nextNode();)if(de(N.uponSanitizeShadowNode,l,null),mr(l,s),wr(l),ze(l.content)&&Ct(l.content),(q?q(l):l.nodeType)===ee.element){const b=Wn(l);ze(b)&&(on(b),Ct(b))}de(N.afterSanitizeShadowDOM,s,null)},on=function(s){const l=[{node:s,shadow:null}];for(;l.length>0;){const c=l.pop();if(c.shadow){Ct(c.shadow);continue}const w=c.node,E=(q?q(w):w.nodeType)===ee.element,x=De(w);if(x)for(let P=x.length-1;P>=0;--P)l.push({node:x[P],shadow:null});if(E){const P=oe?oe(w):null;if(typeof P=="string"&&D(P)==="template"){const Z=w.content;ze(Z)&&l.push({node:Z,shadow:null})}}if(E){const P=Wn(w);ze(P)&&l.push({node:null,shadow:P},{node:P,shadow:null})}}};return e.sanitize=function(f){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=null,c=null,w=null,b=null;if(en=!f,en&&(f="<!-->"),typeof f!="string"&&!it(f)&&(f=oa(f),typeof f!="string"))throw Me("dirty is not a string, aborting");if(!e.isSupported)return f;Kt?(I=vt,O=bt):sn(s),(N.uponSanitizeElement.length>0||N.uponSanitizeAttribute.length>0)&&(I=Y(I)),N.uponSanitizeAttribute.length>0&&(O=Y(O)),e.removed=[];const E=Et&&typeof f!="string"&&it(f);if(E){qi(f);const Z=oe?oe(f):f.nodeName;if(typeof Z=="string"){const J=D(Z);if(!I[J]||tt[J])throw St(f),Me("root node is forbidden and cannot be sanitized in-place")}if(xt(f))throw St(f),Me("root node is clobbered and cannot be sanitized in-place");try{on(f)}catch(J){throw St(f),J}}else if(it(f))l=hr("<!---->"),c=l.ownerDocument.importNode(f,!0),c.nodeType===ee.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?l=c:l.appendChild(c),on(c);else{if(!Be&&!pe&&!Se&&f.indexOf("<")===-1)return X&&At?Pe(f):f;if(l=hr(f),!l)return Be?null:At?Te:""}l&&Xt&&ge(l.firstChild);const x=E?f:l;try{const Z=fr(x);for(;w=Z.nextNode();)mr(w,x),wr(w),ze(w.content)&&Ct(w.content)}catch(Z){throw E&&(St(f),je(e.removed,J=>{J.element&&rt(J.element)})),Z}if(E)return je(e.removed,Z=>{Z.element&&rt(Z.element)}),pe&&an(f),f;if(Be){if(pe&&an(l),_t)for(b=xi.call(l.ownerDocument);l.firstChild;)b.appendChild(l.firstChild);else b=l;return(O.shadowroot||O.shadowrootmode)&&(b=Mi.call(n,b,!0)),b}let P=Se?l.outerHTML:l.innerHTML;return Se&&I["!doctype"]&&l.ownerDocument&&l.ownerDocument.doctype&&l.ownerDocument.doctype.name&&j(wa,l.ownerDocument.doctype.name)&&(P="<!DOCTYPE "+l.ownerDocument.doctype.name+`>
`+P),pe&&(P=Rt(P)),X&&At?Pe(P):P},e.setConfig=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};sn(f),Kt=!0,vt=I,bt=O},e.clearConfig=function(){Ue=null,Kt=!1,vt=null,bt=null,X=Vt,Te=""},e.isValidAttribute=function(f,s,l){Ue||sn({});const c=D(f),w=D(s);return gr(c,w,l)},e.addHook=function(f,s){typeof s=="function"&&V(N,f)&&Ve(N[f],s)},e.removeHook=function(f,s){if(V(N,f)){if(s!==void 0){const l=ea(N[f],s);return l===-1?void 0:ta(N[f],l,1)[0]}return Vr(N[f])}},e.removeHooks=function(f){V(N,f)&&(N[f]=[])},e.removeAllHooks=function(){N=ni()},e}var Un=$i();const ri=M`var(--white, #fff)`,$a=M`var(--ia-theme-link-color, #4b64ff)`,Ta=M`var(--primaryDisableCTAFill, #767676)`,Sa=M`var(--secondaryCTABorder, #999)`,Ra=M`var(--primaryCTAFill, #194880)`,Tn=M`var(--primaryCTAFillRGB, 25, 72, 128)`,xa=M`var(--primaryCTABorder, #c5d1df)`,Ca=M`var(--primaryErrorCTAFill, #d9534f)`,Sn=M`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Ma=M`var(--primaryErrorCTABorder, #d43f3a)`,ka=M`var(--secondaryCTAFill, #333)`,Rn=M`var(--secondaryCTAFillRGB, 51, 51, 51)`,La=M`var(--primaryCTABorder, #979797)`,Na=M`var(---primaryWarningFill, #ee8950)`,xn=M`var(--primaryWarningFillRGB, 238, 137, 80)`,Ia=M`var(--primaryWarningBorder, #ec7939)`,Ti=M`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${ri};
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
    outline-color: ${ri};
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
    border: 1px solid ${Sa};
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
    border-color: ${xa};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Tn}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Tn}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Tn}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Ca};
    border-color: ${Ma};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Sn}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Sn}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Sn}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Na};
    border-color: ${Ia};
  }
  .ia-button.warning:hover {
    background-color: rgba(${xn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${xn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${xn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${ka};
    border-color: ${La};
  }
  .ia-button.dark:hover {
    background-color: rgba(${Rn}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${Rn}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${Rn}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${$a};
    text-decoration: none;
    cursor: pointer;
  }
  .ia-button.link:hover {
    text-decoration: underline;
  }
`;M`
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
`;var ii;(function(i){i.processing="processing",i.complete="complete"})(ii||(ii={}));let zn=class extends he{constructor(){super(...arguments),this.mode="processing"}render(){return A`
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
    `}static get styles(){const e=M`var(--activityIndicatorCheckmarkColor, #31A481)`,t=M`var(--activityIndicatorCompletedRingColor, #31A481)`,n=M`var(--activityIndicatorLoadingRingColor, #333333)`,r=M`var(--activityIndicatorLoadingDotColor, #333333)`;return M`
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
    `}};u([$({type:String})],zn.prototype,"mode",void 0);zn=u([gt("ia-activity-indicator")],zn);const Oa=Ut`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Da=Ut`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Pa=Ut`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function si(i=""){if(i.length<=40)return i;const t=i.substring(0,40)+"...";return A`<span title="${i}">${t}</span>`}const Ba=["a"];function Ha(i){return Un.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),Un.sanitize(i,{ALLOWED_TAGS:Ba})}function Fa(i,e=100,t=!0){if(i.length<e)return i;let n=e;if(t){const r=i.indexOf(" ",e),a=r-e<=20;if(a&&r===i.length-1)return i;r!==-1&&a&&(n=r)}return Ua(i,n,e)}function Ua(i,e,t){let n=i.slice(0,e);const r=n.match(/<a/gi);if(r){const a=n.match(/<\/a/gi);if(!a||a.length<r.length){const o=i.indexOf("</a>",e),h=o-t<=20;if(h&&i.length===o+4)return i;if(o!==-1&&h)n=i.slice(0,o+4);else{const d=n.lastIndexOf("<a");n=i.slice(0,d)}}}return n.concat("...")}const za=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function ja(i){return i.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(za,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function Va(i){return i.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const Wa=Ut`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let te=class extends he{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.csrfToken="",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?A`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?A`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${Wa}
                  </button>
                `:T}
            <div class="top-line">
              <b>${R("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${R("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?A`<i>${R(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:A`
          <div class="error">
            ${R("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return T;const n=Ha(t),r=this.truncateContent(n,this.maxBodyLength);return A`${_i(this.prepReview(r))}`}get truncationButtonsTemplate(){var e,t,n,r,a,o;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((o=(a=(r=this.review)===null||r===void 0?void 0:r.reviewbody)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0)<=this.maxBodyLength?T:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return A`
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
              ${si(this.review.reviewer)}
            </a>
          `:A`${si(this.review.reviewer)}`:T}get starsTemplate(){return!this.review||!this.review.stars?T:A`
      <div
        class="review-stars"
        title="${R(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>A`<div class="review-star">${Pa}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return T;const n=new Date(this.review.reviewdate),r=new Date(this.review.createdate),a=r.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),o=n.getTime()!==r.getTime()?"(edited)":"";return R(`${a} ${o}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:Fa(e,t)}prepReview(e){return Va(ja(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(R("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}&deleteReviewerItemname=${this.review.reviewer_itemname}&csrf_token=${this.csrfToken}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return M`
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
    `}};u([$({type:Object})],te.prototype,"review",void 0);u([$({type:String})],te.prototype,"identifier",void 0);u([$({type:Number})],te.prototype,"maxSubjectLength",void 0);u([$({type:Number})],te.prototype,"maxBodyLength",void 0);u([$({type:String})],te.prototype,"baseHost",void 0);u([$({type:String})],te.prototype,"csrfToken",void 0);u([$({type:Boolean})],te.prototype,"canDelete",void 0);u([$({type:Boolean})],te.prototype,"bypassTruncation",void 0);u([F()],te.prototype,"showTruncatedContent",void 0);u([F()],te.prototype,"deleteMsg",void 0);te=u([gt("ia-review")],te);let H=class extends he{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return A`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:A`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}willUpdate(e){var t,n,r,a,o,h,d,p;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(o=(a=(r=this.oldReview)===null||r===void 0?void 0:r.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&o!==void 0?o:0,this.currentBodyLength=(p=(d=(h=this.oldReview)===null||h===void 0?void 0:h.reviewbody)===null||d===void 0?void 0:d.length)!==null&&p!==void 0?p:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&this.setupRecaptcha(),e.has("unrecoverableError")&&(this.formCanSubmit=this.checkSubmissionAllowed()),(e.has("currentSubjectLength")||e.has("currentBodyLength")||e.has("maxSubjectLength")||e.has("maxBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?A`
          <div class="unrecoverable-error">
            <span class="error-msg">${R(this.unrecoverableError)}</span>
          </div>
        `:T}get recoverableErrorTemplate(){return this.recoverableError?A`
          <div class="recoverable-error">
            ${_i(this.sanitizeErrorMsg(R(this.recoverableError)))}
          </div>
        `:T}get recaptchaMessageTemplate(){return this.bypassRecaptcha?T:A`
      <span class="recaptcha-disclaimer"
        >${R(A`This site is protected by reCAPTCHA and the Google
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
    `}get starsInputTemplate(){return A`
      <div class="form-heading rating">
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
        <button
          type="button"
          class="clear-stars-btn"
          @click=${this.handleClearBtnClicked}
        >
          ${R("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return A`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${R("Subject")}</label>
        ${this.maxSubjectLength?A`<div class="char-count subject">
                ${this.currentSubjectLength}/${this.maxSubjectLength}
              </div>`:T}
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
          `:T}</div></span>
    `}get bodyInputTemplate(){var e,t;return A`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${R("Review")}</label>
          ${this.maxBodyLength?A`<div class="char-count body">
                ${this.currentBodyLength}/${this.maxBodyLength}
              </div>`:T}
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
            `:T}
      </span>
    `}get hiddenInputsTemplate(){return A`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?A`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:T}
    `}get actionButtonsTemplate(){return A`<div class="action-btns">
      <button
        type="button"
        class="ia-button dark"
        data-testid="cancel-btn"
        @click=${this.cancelReviewEdit}
      >
        ${R("Cancel")}
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
            `:R("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=R(`Rate ${e>1?`${e} stars`:"1 star"}`);return A`
      <button
        class="star star-${e}"
        title=${t?R("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?Oa:Da}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return Un.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const r=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((r==null?void 0:r.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),o=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(o)}else this.recoverableError=(t=r.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,r,a,o;const h=new Date().toDateString();return new se({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:h,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(r=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&r!==void 0?r:this.submitterItemname,createdate:(o=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&o!==void 0?o:h})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[Ti,M`
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
      `]}};u([$({type:String})],H.prototype,"identifier",void 0);u([$({type:String})],H.prototype,"token",void 0);u([$({type:String})],H.prototype,"baseHost",void 0);u([$({type:String})],H.prototype,"endpointPath",void 0);u([$({type:String})],H.prototype,"submitterScreenname",void 0);u([$({type:String})],H.prototype,"submitterItemname",void 0);u([$({type:Object})],H.prototype,"oldReview",void 0);u([$({type:String})],H.prototype,"unrecoverableError",void 0);u([$({type:Number})],H.prototype,"maxSubjectLength",void 0);u([$({type:Number})],H.prototype,"maxBodyLength",void 0);u([$({type:Object})],H.prototype,"fetchHandler",void 0);u([$({type:Object})],H.prototype,"recaptchaManager",void 0);u([$({type:Boolean})],H.prototype,"bypassRecaptcha",void 0);u([F()],H.prototype,"currentStars",void 0);u([F()],H.prototype,"currentSubjectLength",void 0);u([F()],H.prototype,"currentBodyLength",void 0);u([F()],H.prototype,"recoverableError",void 0);u([F()],H.prototype,"formCanSubmit",void 0);u([F()],H.prototype,"submissionInProgress",void 0);u([bi("#review-form")],H.prototype,"reviewForm",void 0);H=u([gt("ia-review-form")],H);class Ga{constructor(e){var t,n,r,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(r=e==null?void 0:e.imageContainer)!==null&&r!==void 0?r:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const r=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(o=>{const h=n[o];r.searchParams.append(o,h)}),r.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),r.searchParams.append("count",`${a.length+2}`),r}}class Ya{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const r=n.split("|"),a=r.length>=1?r[1]:"",o=r.length>=2?r[2]:"";this.analyticsManager.sendEventNoSampling({category:r[0],action:a,label:o})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:r}=this;n&&(t.loadtime=n),r&&(t.iaprop_fontSize=r),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,r=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${r}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class qa{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Ga,this.analyticsHelpers=new Ya(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,r){this.sendEvent({category:e,action:t,label:n,eventConfiguration:r})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Ka(i){return new Promise(e=>setTimeout(e,i))}class Xa{constructor(e){this.analyticsHandler=new qa({enableAnalytics:!0}),this.sleep=Ka,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const r=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const o=await fetch(e,t);return o.ok?o:o.status===404?(this.log404Event(r),o):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o.statusText,o.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(r,o.status),o)}catch(o){if(this.isContentBlockerError(o))throw this.logContentBlockingEvent(r,o),o;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(r,a,o,o),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(r,o),o}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,r){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${r}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class Za{constructor(e){this.fetchRetrier=new Xa,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,r=new URL(n,window.location.href);for(const[a,o]of Object.entries(t))r.searchParams.set(a,o);return typeof e=="string"?r.href:new Request(r.href,e)}}let L=class extends he{constructor(){super(...arguments),this.reviews=[],this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.reviewAddEditRequested=!1,this.fetchHandler=new Za,this.displayReviewForm=!1,this.displayReviews=!1,this.filteredReviews=[],this.reviewsCount=0,this.recaptchaActivated=!1}render(){return this.reviewsDisabled?this.reviewsDisabledTemplate:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?A`
      <div class="reviews-list">
        ${this.reviewsFrozen?A`<div class="message">
              ${R("Reviews can no longer be added to this item.")}
            </div>`:T}
        ${this.editableCurrentReviewTemplate}
        ${this.filteredReviews.map(e=>e.reviewer_itemname!==this.submitterItemname?this.renderReview(e):T)}
      </div>
    `:this.displayReviewsMsgTemplate}willUpdate(e){(e.has("reviews")||e.has("submitterItemname"))&&(this.reviewsCount=this.reviews.length,this.sortFilterReviews()),e.has("displayReviewForm")&&this.displayReviewForm===!0&&(!this.bypassRecaptcha&&!this.recaptchaActivated&&(this.recaptchaActivated=!0),this.displayReviews=!0),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsDisabledTemplate(){return A`<div class="message">
      ${R("Reviews have been disabled for this item.")}
    </div>`}get noReviewsMsgTemplate(){return this.reviewsFrozen?A`
        <div class="message">
          ${R("Reviews cannot be added to this item.")}
        </div>
      `:A`
      <div class="message">
        ${R("There are no reviews yet.")}
        ${R(A`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${this.addEditReview}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return A`
      <div class="message">
        ${this.reviewsCount===1?R("There is 1 review for this item."):R(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${R(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?T:A`<div class="own-review-container">
      ${this.displayReviewForm?A`<ia-review-form
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
    </div>`}sortFilterReviews(){let e;const t=[];this.reviews.forEach(n=>{!e&&n.reviewer_itemname===this.submitterItemname?e=n:t.push(n)}),this.currentReview=e,this.filteredReviews=this.sortReviews(t)}sortReviews(e){return[...e].sort((n,r)=>n.createdate&&r.createdate?new Date(r.createdate).getTime()-new Date(n.createdate).getTime():0)}renderReview(e){return e?A`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      .baseHost=${this.baseHost}
      .csrfToken=${this.token}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
    ></ia-review>`:T}addEditReview(){this.bypassRecaptcha||(this.recaptchaActivated=!0),this.displayReviewForm=!0}handleReviewUpdate(e){!this.currentReview&&e.detail&&(this.dispatchEvent(new CustomEvent("newReviewAdded")),this.reviewsCount+=1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[Ti,M`
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
      `]}};u([$({type:String})],L.prototype,"identifier",void 0);u([$({type:Array})],L.prototype,"reviews",void 0);u([$({type:Boolean})],L.prototype,"reviewsDisabled",void 0);u([$({type:Boolean})],L.prototype,"reviewsFrozen",void 0);u([$({type:Boolean})],L.prototype,"canDelete",void 0);u([$({type:Boolean})],L.prototype,"displayReviewsByDefault",void 0);u([$({type:Number})],L.prototype,"maxSubjectLength",void 0);u([$({type:Number})],L.prototype,"maxBodyLength",void 0);u([$({type:String})],L.prototype,"baseHost",void 0);u([$({type:String})],L.prototype,"token",void 0);u([$({type:String})],L.prototype,"endpointPath",void 0);u([$({type:String})],L.prototype,"submitterScreenname",void 0);u([$({type:String})],L.prototype,"submitterItemname",void 0);u([$({type:Object})],L.prototype,"recaptchaManager",void 0);u([$({type:Boolean})],L.prototype,"bypassRecaptcha",void 0);u([$({type:String})],L.prototype,"reviewSubmissionError",void 0);u([$({type:Boolean})],L.prototype,"reviewAddEditRequested",void 0);u([$({type:Object})],L.prototype,"fetchHandler",void 0);u([F()],L.prototype,"displayReviewForm",void 0);u([F()],L.prototype,"displayReviews",void 0);u([F()],L.prototype,"filteredReviews",void 0);u([F()],L.prototype,"currentReview",void 0);u([F()],L.prototype,"reviewsCount",void 0);u([F()],L.prototype,"recaptchaActivated",void 0);L=u([gt("ia-reviews")],L);class Ja{async fetchApiResponse(){return{success:!0}}async fetchIAApiResponse(){return{}}async fetch(){return new Response}}let ne=class extends he{constructor(){super(...arguments),this.mockOldReview=new se({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new se({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new se({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new se({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviews=[new se({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/07/2025",reviewer_itemname:"@bar-baz"}),new se({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new Ja,this.mockRecaptchaManager=new Ps({defaultSiteKey:"demo-key"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.useExistingReviews=!0,this.review=this.mockOldReview,this.reviewsDisabled=!1,this.reviewsFrozen=!1}render(){return A` <h2>General settings</h2>
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
      </div>`}renderReviewToggle(e,t){return A`
      <button
        @click=${()=>{this.switchInOutReview(e)}}
      >
        ${this.review!==e?"Prefill":"Remove"} ${t}
      </button>
    `}switchInOutReview(e){this.useExistingReviews=!0,this.review!==e?this.review=e:this.review=this.mockOldReview}};ne.styles=M`
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
  `;u([F()],ne.prototype,"bypassRecaptcha",void 0);u([F()],ne.prototype,"unrecoverableError",void 0);u([F()],ne.prototype,"useCharCounts",void 0);u([F()],ne.prototype,"allowDeletion",void 0);u([F()],ne.prototype,"useExistingReviews",void 0);u([F()],ne.prototype,"review",void 0);u([F()],ne.prototype,"reviewsDisabled",void 0);u([F()],ne.prototype,"reviewsFrozen",void 0);u([bi("ia-reviews")],ne.prototype,"reviewsComponent",void 0);ne=u([gt("app-root")],ne);
