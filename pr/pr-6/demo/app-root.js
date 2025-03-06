(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function o(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var u=i.length-1;u>=0;u--)(s=i[u])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=window,Oe=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),De=new WeakMap;let dt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Oe&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=De.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&De.set(t,e))}return e}toString(){return this.cssText}};const St=i=>new dt(typeof i=="string"?i:i+"",void 0,ze),y=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[a+1],i[0]);return new dt(t,i,ze)},Et=(i,e)=>{Oe?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=re.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Fe=Oe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return St(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe;const ie=window,Le=ie.trustedTypes,xt=Le?Le.emptyScript:"",Ie=ie.reactiveElementPolyfillSupport,Ce={toAttribute(i,e){switch(e){case Boolean:i=i?xt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ut=(i,e)=>e!==i&&(e==e||i==i),ge={attribute:!0,type:String,converter:Ce,reflect:!1,hasChanged:ut},ke="finalized";let z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const a=this[e];this[t]=r,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ge}static finalize(){if(this.hasOwnProperty(ke))return!1;this[ke]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Fe(r))}else e!==void 0&&t.push(Fe(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ge){var r;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const s=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:Ce).toAttribute(t,n.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,a=r._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=r.getPropertyOptions(a),u=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Ce;this._$El=a,this[a]=u.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ut)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,a)=>this[a]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};z[ke]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},Ie==null||Ie({ReactiveElement:z}),((fe=ie.reactiveElementVersions)!==null&&fe!==void 0?fe:ie.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;const se=window,F=se.trustedTypes,je=F?F.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ne="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+C,Ct=`<${ht}>`,B=document,ae=()=>B.createComment(""),G=i=>i===null||typeof i!="object"&&typeof i!="function",ct=Array.isArray,kt=i=>ct(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",we=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,We=/>/g,H=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Ke=/"/g,pt=/^(?:script|style|textarea|title)$/i,J=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Ge=new WeakMap,P=B.createTreeWalker(B,129,null,!1);function ft(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return je!==void 0?je.createHTML(e):e}const Nt=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",s=Z;for(let u=0;u<t;u++){const l=i[u];let h,p,f=-1,g=0;for(;g<l.length&&(s.lastIndex=g,p=s.exec(l),p!==null);)g=s.lastIndex,s===Z?p[1]==="!--"?s=qe:p[1]!==void 0?s=We:p[2]!==void 0?(pt.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=H):p[3]!==void 0&&(s=H):s===H?p[0]===">"?(s=r??Z,f=-1):p[1]===void 0?f=-2:(f=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?H:p[3]==='"'?Ke:Ze):s===Ke||s===Ze?s=H:s===qe||s===We?s=Z:(s=H,r=void 0);const m=s===H&&i[u+1].startsWith("/>")?" ":"";a+=s===Z?l+Ct:f>=0?(n.push(h),l.slice(0,f)+Ne+l.slice(f)+C+m):l+C+(f===-2?(n.push(void 0),u):m)}return[ft(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let He=class gt{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,s=0;const u=e.length-1,l=this.parts,[h,p]=Nt(e,t);if(this.el=gt.createElement(h,n),P.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=P.nextNode())!==null&&l.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const g of r.getAttributeNames())if(g.endsWith(Ne)||g.startsWith(C)){const m=p[s++];if(f.push(g),m!==void 0){const pe=r.getAttribute(m.toLowerCase()+Ne).split(C),M=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:M[2],strings:pe,ctor:M[1]==="."?Tt:M[1]==="?"?Rt:M[1]==="@"?Vt:he})}else l.push({type:6,index:a})}for(const g of f)r.removeAttribute(g)}if(pt.test(r.tagName)){const f=r.textContent.split(C),g=f.length-1;if(g>0){r.textContent=F?F.emptyScript:"";for(let m=0;m<g;m++)r.append(f[m],ae()),P.nextNode(),l.push({type:2,index:++a});r.append(f[g],ae())}}}else if(r.nodeType===8)if(r.data===ht)l.push({type:2,index:a});else{let f=-1;for(;(f=r.data.indexOf(C,f+1))!==-1;)l.push({type:7,index:a}),f+=C.length-1}a++}}static createElement(e,t){const n=B.createElement("template");return n.innerHTML=e,n}};function L(i,e,t=i,n){var r,a,s,u;if(e===J)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=G(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,t,n)),n!==void 0?((s=(u=t)._$Co)!==null&&s!==void 0?s:u._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=L(i,l._$AS(i,e.values),l,n)),e}let Ht=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:B).importNode(n,!0);P.currentNode=a;let s=P.nextNode(),u=0,l=0,h=r[0];for(;h!==void 0;){if(u===h.index){let p;h.type===2?p=new $t(s,s.nextSibling,this,e):h.type===1?p=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(p=new Bt(s,this,e)),this._$AV.push(p),h=r[++l]}u!==(h==null?void 0:h.index)&&(s=P.nextNode(),u++)}return P.currentNode=B,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},$t=class wt{constructor(e,t,n,r){var a;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),G(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):kt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&G(this._$AH)?this._$AA.nextSibling.data=e:this.$(B.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=He.createElement(ft(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new Ht(a,this),u=s.u(this.options);s.v(n),this.$(u),this._$AH=s}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new He(e)),t}T(e){ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new wt(this.k(ae()),this.k(ae()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},he=class{constructor(e,t,n,r,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let s=!1;if(a===void 0)e=L(this,e,t,0),s=!G(e)||e!==this._$AH&&e!==J,s&&(this._$AH=e);else{const u=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=L(this,u[n+l],t,l),h===J&&(h=this._$AH[l]),s||(s=!G(h)||h!==this._$AH[l]),h===_?e=_:e!==_&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}s&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Tt=class extends he{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}};const Pt=F?F.emptyScript:"";let Rt=class extends he{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}},Vt=class extends he{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=L(this,e,t,0))!==null&&n!==void 0?n:_)===J)return;const r=this._$AH,a=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==_&&(r===_||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Bt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}};const Je=se.litHtmlPolyfillSupport;Je==null||Je(He,$t),(($e=se.litHtmlVersions)!==null&&$e!==void 0?$e:se.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me;const le=window,I=le.trustedTypes,Qe=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,Te="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,mt="?"+k,Ut=`<${mt}>`,U=document,Q=()=>U.createComment(""),X=i=>i===null||typeof i!="object"&&typeof i!="function",_t=Array.isArray,Ot=i=>_t(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ye=/>/g,T=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,yt=/^(?:script|style|textarea|title)$/i,vt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=vt(1),bt=vt(2),j=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),nt=new WeakMap,R=U.createTreeWalker(U,129,null,!1);function At(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(e):e}const zt=(i,e)=>{const t=i.length-1,n=[];let r,a=e===2?"<svg>":"",s=K;for(let u=0;u<t;u++){const l=i[u];let h,p,f=-1,g=0;for(;g<l.length&&(s.lastIndex=g,p=s.exec(l),p!==null);)g=s.lastIndex,s===K?p[1]==="!--"?s=Xe:p[1]!==void 0?s=Ye:p[2]!==void 0?(yt.test(p[2])&&(r=RegExp("</"+p[2],"g")),s=T):p[3]!==void 0&&(s=T):s===T?p[0]===">"?(s=r??K,f=-1):p[1]===void 0?f=-2:(f=s.lastIndex-p[2].length,h=p[1],s=p[3]===void 0?T:p[3]==='"'?tt:et):s===tt||s===et?s=T:s===Xe||s===Ye?s=K:(s=T,r=void 0);const m=s===T&&i[u+1].startsWith("/>")?" ":"";a+=s===K?l+Ut:f>=0?(n.push(h),l.slice(0,f)+Te+l.slice(f)+k+m):l+k+(f===-2?(n.push(void 0),u):m)}return[At(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class Y{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,s=0;const u=e.length-1,l=this.parts,[h,p]=zt(e,t);if(this.el=Y.createElement(h,n),R.currentNode=this.el.content,t===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(r=R.nextNode())!==null&&l.length<u;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const g of r.getAttributeNames())if(g.endsWith(Te)||g.startsWith(k)){const m=p[s++];if(f.push(g),m!==void 0){const pe=r.getAttribute(m.toLowerCase()+Te).split(k),M=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:M[2],strings:pe,ctor:M[1]==="."?Ft:M[1]==="?"?It:M[1]==="@"?jt:ce})}else l.push({type:6,index:a})}for(const g of f)r.removeAttribute(g)}if(yt.test(r.tagName)){const f=r.textContent.split(k),g=f.length-1;if(g>0){r.textContent=I?I.emptyScript:"";for(let m=0;m<g;m++)r.append(f[m],Q()),R.nextNode(),l.push({type:2,index:++a});r.append(f[g],Q())}}}else if(r.nodeType===8)if(r.data===mt)l.push({type:2,index:a});else{let f=-1;for(;(f=r.data.indexOf(k,f+1))!==-1;)l.push({type:7,index:a}),f+=k.length-1}a++}}static createElement(e,t){const n=U.createElement("template");return n.innerHTML=e,n}}function q(i,e,t=i,n){var r,a,s,u;if(e===j)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const h=X(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,t,n)),n!==void 0?((s=(u=t)._$Co)!==null&&s!==void 0?s:u._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=q(i,l._$AS(i,e.values),l,n)),e}class Dt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:U).importNode(n,!0);R.currentNode=a;let s=R.nextNode(),u=0,l=0,h=r[0];for(;h!==void 0;){if(u===h.index){let p;h.type===2?p=new te(s,s.nextSibling,this,e):h.type===1?p=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(p=new qt(s,this,e)),this._$AV.push(p),h=r[++l]}u!==(h==null?void 0:h.index)&&(s=R.nextNode(),u++)}return R.currentNode=U,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class te{constructor(e,t,n,r){var a;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),X(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ot(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==w&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(U.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Y.createElement(At(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new Dt(a,this),u=s.u(this.options);s.v(n),this.$(u),this._$AH=s}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new Y(e)),t}T(e){_t(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const a of e)r===t.length?t.push(n=new te(this.k(Q()),this.k(Q()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ce{constructor(e,t,n,r,a){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const a=this.strings;let s=!1;if(a===void 0)e=q(this,e,t,0),s=!X(e)||e!==this._$AH&&e!==j,s&&(this._$AH=e);else{const u=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=q(this,u[n+l],t,l),h===j&&(h=this._$AH[l]),s||(s=!X(h)||h!==this._$AH[l]),h===w?e=w:e!==w&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}s&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ft extends ce{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}const Lt=I?I.emptyScript:"";class It extends ce{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,Lt):this.element.removeAttribute(this.name)}}class jt extends ce{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=q(this,e,t,0))!==null&&n!==void 0?n:w)===j)return;const r=this._$AH,a=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==w&&(r===w||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class qt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const rt=le.litHtmlPolyfillSupport;rt==null||rt(Y,te),((me=le.litHtmlVersions)!==null&&me!==void 0?me:le.litHtmlVersions=[]).push("2.8.0");const Wt=(i,e,t)=>{var n,r;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let s=a._$litPart$;if(s===void 0){const u=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=s=new te(e.insertBefore(Q(),u),u,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye,ve;class D extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return j}}D.finalized=!0,D._$litElement$=!0,(ye=globalThis.litElementHydrateSupport)===null||ye===void 0||ye.call(globalThis,{LitElement:D});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:D});((ve=globalThis.litElementVersions)!==null&&ve!==void 0?ve:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:a}=n;return{kind:r,elements:a,finisher(s){customElements.define(t,s)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Kt=(i,e,t)=>{e.constructor.createProperty(t,i)};function O(i){return(e,t)=>t!==void 0?Kt(i,e,t):Zt(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(i){return O({...i,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be;((be=window.HTMLSlotElement)===null||be===void 0?void 0:be.prototype.assignedElements)!=null;function d(i){let e,t,n;return e=i,(r,a,s)=>{if(s.value!=null)s.value=st(s.value,e,t,n);else if(s.get!=null)s.get=st(s.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ae=new Map;function st(i,e,t=0,n){const r=Symbol("__memoized_map__");return function(...a){let s;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let u=this[r];if(Array.isArray(n))for(const l of n)Ae.has(l)?Ae.get(l).push(u):Ae.set(l,[u]);if(e||a.length>0||t>0){let l;e===!0?l=a.map(f=>f.toString()).join("!"):e?l=e.apply(this,a):l=a[0];const h=`${l}__timestamp`;let p=!1;if(t>0)if(!u.has(h))p=!0;else{let f=u.get(h);p=Date.now()-f>t}u.has(l)&&!p?s=u.get(l):(s=i.apply(this,a),u.set(l,s),t>0&&u.set(h,Date.now()))}else{const l=this;u.has(l)?s=u.get(l):(s=i.apply(this,a),u.set(l,s))}return s}}class Pe{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Pe.shared=new Pe;class N{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}N.shared=new N;class oe{parseValue(e){return N.shared.parseValue(e)}}oe.shared=new oe;class ee{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ee.shared=new ee;class de{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,a)=>{const s=parseFloat(r);if(Number.isNaN(s))return t=!0,0;const l=60**(e.length-1-a);return s*Math.floor(l)}).reduce((r,a)=>r+a,0);return t?void 0:n}}de.shared=new de;class Re{parseValue(e){if(typeof e=="string")return e}}Re.shared=new Re;class Jt{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),r=[];return n.forEach(a=>{a!==void 0&&r.push(a)}),r}}class Ve{parseValue(e){if(typeof e=="string")return e}}Ve.shared=new Ve;class ue{parseValue(e){return String(e)}}ue.shared=new ue;class A{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}o([d()],A.prototype,"values",null);o([d()],A.prototype,"value",null);class Qt extends A{constructor(e){super(Pe.shared,e)}}class E extends A{constructor(e){super(ee.shared,e)}}class Me extends A{constructor(e){super(de.shared,e)}}class v extends A{constructor(e){super(N.shared,e)}}class $ extends A{constructor(e){super(ue.shared,e)}}class Xt extends A{constructor(e){super(Ve.shared,e)}}class at extends A{constructor(e){super(oe.shared,e)}}class Yt extends A{constructor(e){super(Re.shared,e)}}class en extends A{constructor(e,t){super(t,e)}}class tn extends en{constructor(e){const t=new Jt(ue.shared);super(e,t)}}class c{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new E(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new $(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new v(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new v(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new $(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new $(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new at(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new $(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new $(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new $(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new $(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new E(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new $(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new v(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Me(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new $(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new v(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new E(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new $(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new $(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new v(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new at(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new $(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Me(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new $(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new v(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Yt(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Qt(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new $(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new v(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new v(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new $(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new $(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new Xt(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new $(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new v(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new E(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new $(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new E(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Me(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new $(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new $(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new E(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new E(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new E(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new tn(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new $(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new $(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new $(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new v(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new $(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new $(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new v(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new $(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new $(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new v(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new v(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}o([d()],c.prototype,"addeddate",null);o([d()],c.prototype,"audio_codec",null);o([d()],c.prototype,"audio_sample_rate",null);o([d()],c.prototype,"avg_rating",null);o([d()],c.prototype,"collection",null);o([d()],c.prototype,"collections_raw",null);o([d()],c.prototype,"collection_size",null);o([d()],c.prototype,"contributor",null);o([d()],c.prototype,"coverage",null);o([d()],c.prototype,"creator",null);o([d()],c.prototype,"collection_layout",null);o([d()],c.prototype,"date",null);o([d()],c.prototype,"description",null);o([d()],c.prototype,"downloads",null);o([d()],c.prototype,"duration",null);o([d()],c.prototype,"external_identifier",null);o([d()],c.prototype,"files_count",null);o([d()],c.prototype,"indexdate",null);o([d()],c.prototype,"isbn",null);o([d()],c.prototype,"issue",null);o([d()],c.prototype,"item_count",null);o([d()],c.prototype,"item_size",null);o([d()],c.prototype,"language",null);o([d()],c.prototype,"length",null);o([d()],c.prototype,"lineage",null);o([d()],c.prototype,"month",null);o([d()],c.prototype,"mediatype",null);o([d()],c.prototype,"noindex",null);o([d()],c.prototype,"notes",null);o([d()],c.prototype,"num_favorites",null);o([d()],c.prototype,"num_reviews",null);o([d()],c.prototype,"openlibrary_edition",null);o([d()],c.prototype,"openlibrary_work",null);o([d()],c.prototype,"page_progression",null);o([d()],c.prototype,"partner",null);o([d()],c.prototype,"ppi",null);o([d()],c.prototype,"publicdate",null);o([d()],c.prototype,"publisher",null);o([d()],c.prototype,"reviewdate",null);o([d()],c.prototype,"runtime",null);o([d()],c.prototype,"scanner",null);o([d()],c.prototype,"source",null);o([d()],c.prototype,"start_localtime",null);o([d()],c.prototype,"start_time",null);o([d()],c.prototype,"stop_time",null);o([d()],c.prototype,"subject",null);o([d()],c.prototype,"taper",null);o([d()],c.prototype,"title",null);o([d()],c.prototype,"transferer",null);o([d()],c.prototype,"track",null);o([d()],c.prototype,"type",null);o([d()],c.prototype,"uploader",null);o([d()],c.prototype,"utc_offset",null);o([d()],c.prototype,"venue",null);o([d()],c.prototype,"volume",null);o([d()],c.prototype,"week",null);o([d()],c.prototype,"year",null);class W{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?oe.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?de.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?N.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?N.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?N.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}o([d()],W.prototype,"size",null);o([d()],W.prototype,"length",null);o([d()],W.prototype,"height",null);o([d()],W.prototype,"width",null);o([d()],W.prototype,"track",null);class ne{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate!=null?ee.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?ee.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?N.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}o([d()],ne.prototype,"reviewdate",null);o([d()],ne.prototype,"createdate",null);o([d()],ne.prototype,"stars",null);class nn{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new W(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new c(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(r=>new ne(r))}}var V;(function(i){i.networkError="MetadataService.NetworkError",i.itemNotFound="MetadataService.ItemNotFound",i.decodingError="MetadataService.DecodingError",i.searchEngineError="MetadataService.SearchEngineError"})(V||(V={}));class Be extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class rn{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let a;try{const s=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(r.href,s)}catch(s){const u=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(V.networkError,u)}try{const s=await a.json(),u=s.error;if(u){const l=s.forensics;return this.getErrorResult(V.searchEngineError,u,l)}else return{success:s}}catch(s){const u=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(V.decodingError,u)}}getErrorResult(e,t,n){return{error:new Be(e,t,n)}}}class lt{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Be(V.itemNotFound)}:{success:new nn(n.success)}}async fetchMetadataValue(e,t){var n;const r=await this.backend.fetchMetadata(e,t);return r.error?r:((n=r.success)===null||n===void 0?void 0:n.result)===void 0?{error:new Be(V.itemNotFound)}:{success:r.success.result}}}lt.default=new lt(new rn);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=i=>typeof i!="string"&&"strTag"in i,an=(i,e,t)=>{let n=i[0];for(let r=1;r<i.length;r++)n+=e[r-1],n+=i[r];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln=i=>sn(i)?an(i.strings,i.values):i;let x=ln;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class on{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let i=0;i<256;i++)(i>>4&15).toString(16)+(i&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dn=new on;dn.resolve();const un=bt`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,hn=bt`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,ot=y`var(--white, #fff)`,cn=y`var(--primaryDisableCTAFill, #767676)`,pn=y`var(--secondaryCTABorder, #999)`,fn=y`var(--primaryCTAFill, #194880)`,Se=y`var(--primaryCTAFillRGB, 25, 72, 128)`,gn=y`var(--primaryCTABorder, #c5d1df)`,$n=y`var(--primaryErrorCTAFill, #d9534f)`,Ee=y`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,wn=y`var(--primaryErrorCTABorder, #d43f3a)`,mn=y`var(--secondaryCTAFill, #333)`,xe=y`var(--secondaryCTAFillRGB, 51, 51, 51)`,_n=y`var(--primaryCTABorder, #979797)`,yn=y`#ee8950`,vn=y`#ec7939`,bn=y`
  .ia-button {
    height: 3.5rem;
    min-height: 3rem;
    cursor: pointer;
    color: ${ot};
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
    outline-color: ${ot};
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
    background-color: ${cn};
    border: 1px solid ${pn};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${yn}
    border-color: ${vn};
  }

  .ia-button.primary {
    background-color: ${fn};
    border-color: ${gn};
  }
  .ia-button.primary:hover {
    background-color: rgba(${Se}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${Se}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${Se}, 0.7);
  }

  .ia-button.danger {
    background-color: ${$n};
    border-color: ${wn};
  }
  .ia-button.danger:hover {
    background-color: rgba(${Ee}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${Ee}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${Ee}, 0.7);
  }

  .ia-button.dark {
    background-color: ${mn};
    border-color: ${_n};
  }
  .ia-button.dark:hover {
    background-color: rgba(${xe}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${xe}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${xe}, 0.7);
  }
`;let S=class extends D{constructor(){super(...arguments),this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.currentStars=0}render(){return b`<form action="${this.baseHost}${this.endpointPath}">
      ${this.errors?b`<div class="errors">${this.errors.join(" ")}</div>`:w}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate}
      ${this.identifier?b`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:w}
      ${this.token?b`<input
            type="hidden"
            name="field_reviewtoken"
            .value=${this.token}
          />`:w}
      ${this.actionButtonsTemplate}
    </form>`}updated(e){var t;e.has("oldReview")&&(!((t=this.oldReview)===null||t===void 0)&&t.stars)&&(this.currentStars=this.oldReview.stars)}get starsInputTemplate(){return b`
      <div class="form-heading">
        <label for="stars-field">${x("Rating (optional)")}</label>
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
          ${x("Clear")}
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return b`<div class="form-heading">
        <label for="subject-input">${x("Subject")}</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        required
      />`}get bodyInputTemplate(){var e,t;return b`<div class="form-heading">
        <label for="body-input">${x("Review")}</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
        rows="10"
        cols="50"
        required
      ></textarea>`}get actionButtonsTemplate(){return b`<div class="action-btns">
      ${this.identifier?b`<a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            ${x("Cancel")}
          </a>`:w}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        value="Submit review"
      >
        ${x("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=x(`Rate ${e>1?`${e} stars`:"1 star"}`);return b`
      <button
        class="star star-${e}"
        title=${t?x("Clear rating"):n}
        @click=${r=>this.handleStarClicked(r,e)}
      >
        ${e<=this.currentStars?un:hn}
      </button>
    `}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}static get styles(){return[bn,y`
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
      `]}};o([O({type:String})],S.prototype,"identifier",void 0);o([O({type:String})],S.prototype,"token",void 0);o([O({type:String})],S.prototype,"baseHost",void 0);o([O({type:String})],S.prototype,"endpointPath",void 0);o([O({type:Object})],S.prototype,"oldReview",void 0);o([O({type:Array})],S.prototype,"errors",void 0);o([Gt()],S.prototype,"currentStars",void 0);S=o([Mt("ia-review-form")],S);const An=new ne({stars:3,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"foo-bar",reviewdate:"2025-03-03 18:13:36",createdate:"2025-02-25 14:28:19"});let Ue=class extends D{render(){return b`
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${An}
        ></ia-review-form>
      </div>
    `}};Ue.styles=y`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;Ue=o([Mt("app-root")],Ue);
