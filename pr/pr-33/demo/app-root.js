(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function l(r,e,t,n){var i=arguments.length,a=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,n);else for(var u=r.length-1;u>=0;u--)(s=r[u])&&(a=(i<3?s(a):i>3?s(e,t,a):s(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a}function lt(r,e,t,n){function i(a){return a instanceof t?a:new t(function(s){s(a)})}return new(t||(t=Promise))(function(a,s){function u(f){try{h(n.next(f))}catch(g){s(g)}}function d(f){try{h(n.throw(f))}catch(g){s(g)}}function h(f){f.done?a(f.value):i(f.value).then(u,d)}h((n=n.apply(r,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=window,yn=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vn=Symbol(),Wn=new WeakMap;let xi=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==vn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Wn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Wn.set(t,e))}return e}toString(){return this.cssText}};const fr=r=>new xi(typeof r=="string"?r:r+"",void 0,vn),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,i,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new xi(t,r,vn)},mr=(r,e)=>{yn?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),i=ct.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)})},Gn=yn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return fr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const pt=window,Yn=pt.trustedTypes,gr=Yn?Yn.emptyScript:"",qn=pt.reactiveElementPolyfillSupport,rn={toAttribute(r,e){switch(e){case Boolean:r=r?gr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ci=(r,e)=>e!==r&&(e==e||r==r),Bt={attribute:!0,type:String,converter:rn,reflect:!1,hasChanged:Ci},an="finalized";let Te=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=Bt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Bt}static finalize(){if(this.hasOwnProperty(an))return!1;this[an]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Gn(i))}else e!==void 0&&t.push(Gn(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return mr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Bt){var i;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:rn).toAttribute(t,n.type);this._$El=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,a=i._$Ev.get(e);if(a!==void 0&&this._$El!==a){const s=i.getPropertyOptions(a),u=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:rn;this._$El=a,this[a]=u.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ci)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,a)=>this[a]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var a;return(a=i.hostUpdate)===null||a===void 0?void 0:a.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Te[an]=!0,Te.elementProperties=new Map,Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},qn==null||qn({ReactiveElement:Te}),((Pt=pt.reactiveElementVersions)!==null&&Pt!==void 0?Pt:pt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;const ft=window,Re=ft.trustedTypes,Kn=Re?Re.createPolicy("lit-html",{createHTML:r=>r}):void 0,sn="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,Mi="?"+le,wr=`<${Mi}>`,ye=document,mt=()=>ye.createComment(""),Ye=r=>r===null||typeof r!="object"&&typeof r!="function",ki=Array.isArray,yr=r=>ki(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ut=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xn=/-->/g,Zn=/>/g,he=RegExp(`>|${Ut}(?:([^\\s"'>=/]+)(${Ut}*=${Ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jn=/'/g,Qn=/"/g,Li=/^(?:script|style|textarea|title)$/i,xe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),ei=new WeakMap,me=ye.createTreeWalker(ye,129,null,!1);function Ni(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kn!==void 0?Kn.createHTML(e):e}const vr=(r,e)=>{const t=r.length-1,n=[];let i,a=e===2?"<svg>":"",s=Ue;for(let u=0;u<t;u++){const d=r[u];let h,f,g=-1,$=0;for(;$<d.length&&(s.lastIndex=$,f=s.exec(d),f!==null);)$=s.lastIndex,s===Ue?f[1]==="!--"?s=Xn:f[1]!==void 0?s=Zn:f[2]!==void 0?(Li.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=he):f[3]!==void 0&&(s=he):s===he?f[0]===">"?(s=i??Ue,g=-1):f[1]===void 0?g=-2:(g=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?he:f[3]==='"'?Qn:Jn):s===Qn||s===Jn?s=he:s===Xn||s===Zn?s=Ue:(s=he,i=void 0);const S=s===he&&r[u+1].startsWith("/>")?" ":"";a+=s===Ue?d+wr:g>=0?(n.push(h),d.slice(0,g)+sn+d.slice(g)+le+S):d+le+(g===-2?(n.push(void 0),u):S)}return[Ni(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};let on=class Oi{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let a=0,s=0;const u=e.length-1,d=this.parts,[h,f]=vr(e,t);if(this.el=Oi.createElement(h,n),me.currentNode=this.el.content,t===2){const g=this.el.content,$=g.firstChild;$.remove(),g.append(...$.childNodes)}for(;(i=me.nextNode())!==null&&d.length<u;){if(i.nodeType===1){if(i.hasAttributes()){const g=[];for(const $ of i.getAttributeNames())if($.endsWith(sn)||$.startsWith(le)){const S=f[s++];if(g.push($),S!==void 0){const ie=i.getAttribute(S.toLowerCase()+sn).split(le),K=/([.?@])?(.*)/.exec(S);d.push({type:1,index:a,name:K[2],strings:ie,ctor:K[1]==="."?_r:K[1]==="?"?Ar:K[1]==="@"?Er:bt})}else d.push({type:6,index:a})}for(const $ of g)i.removeAttribute($)}if(Li.test(i.tagName)){const g=i.textContent.split(le),$=g.length-1;if($>0){i.textContent=Re?Re.emptyScript:"";for(let S=0;S<$;S++)i.append(g[S],mt()),me.nextNode(),d.push({type:2,index:++a});i.append(g[$],mt())}}}else if(i.nodeType===8)if(i.data===Mi)d.push({type:2,index:a});else{let g=-1;for(;(g=i.data.indexOf(le,g+1))!==-1;)d.push({type:7,index:a}),g+=le.length-1}a++}}static createElement(e,t){const n=ye.createElement("template");return n.innerHTML=e,n}};function Ce(r,e,t=r,n){var i,a,s,u;if(e===xe)return e;let d=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const h=Ye(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),h===void 0?d=void 0:(d=new h(r),d._$AT(r,t,n)),n!==void 0?((s=(u=t)._$Co)!==null&&s!==void 0?s:u._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Ce(r,d._$AS(r,e.values),d,n)),e}let br=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ye).importNode(n,!0);me.currentNode=a;let s=me.nextNode(),u=0,d=0,h=i[0];for(;h!==void 0;){if(u===h.index){let f;h.type===2?f=new Di(s,s.nextSibling,this,e):h.type===1?f=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(f=new Sr(s,this,e)),this._$AV.push(f),h=i[++d]}u!==(h==null?void 0:h.index)&&(s=me.nextNode(),u++)}return me.currentNode=ye,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Di=class Ii{constructor(e,t,n,i){var a;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(a=i==null?void 0:i.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ce(this,e,t),Ye(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):yr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=on.createElement(Ni(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new br(a,this),u=s.u(this.options);s.v(n),this.$(u),this._$AH=s}}_$AC(e){let t=ei.get(e.strings);return t===void 0&&ei.set(e.strings,t=new on(e)),t}T(e){ki(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const a of e)i===t.length?t.push(n=new Ii(this.k(mt()),this.k(mt()),this,this.options)):n=t[i],n._$AI(a),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},bt=class{constructor(e,t,n,i,a){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const a=this.strings;let s=!1;if(a===void 0)e=Ce(this,e,t,0),s=!Ye(e)||e!==this._$AH&&e!==xe,s&&(this._$AH=e);else{const u=e;let d,h;for(e=a[0],d=0;d<a.length-1;d++)h=Ce(this,u[n+d],t,d),h===xe&&(h=this._$AH[d]),s||(s=!Ye(h)||h!==this._$AH[d]),h===N?e=N:e!==N&&(e+=(h??"")+a[d+1]),this._$AH[d]=h}s&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_r=class extends bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const $r=Re?Re.emptyScript:"";let Ar=class extends bt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,$r):this.element.removeAttribute(this.name)}},Er=class extends bt{constructor(e,t,n,i,a){super(e,t,n,i,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ce(this,e,t,0))!==null&&n!==void 0?n:N)===xe)return;const i=this._$AH,a=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==N&&(i===N||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Sr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}};const ti=ft.litHtmlPolyfillSupport;ti==null||ti(on,Di),((Ht=ft.litHtmlVersions)!==null&&Ht!==void 0?Ht:ft.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const gt=window,Me=gt.trustedTypes,ni=Me?Me.createPolicy("lit-html",{createHTML:r=>r}):void 0,ln="$lit$",de=`lit$${(Math.random()+"").slice(9)}$`,Pi="?"+de,Tr=`<${Pi}>`,ve=document,qe=()=>ve.createComment(""),Ke=r=>r===null||typeof r!="object"&&typeof r!="function",Bi=Array.isArray,Rr=r=>Bi(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",zt=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ii=/-->/g,ri=/>/g,pe=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ai=/'/g,si=/"/g,Hi=/^(?:script|style|textarea|title)$/i,Ui=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=Ui(1),Ne=Ui(2),ke=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),oi=new WeakMap,ge=ve.createTreeWalker(ve,129,null,!1);function Fi(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ni!==void 0?ni.createHTML(e):e}const xr=(r,e)=>{const t=r.length-1,n=[];let i,a=e===2?"<svg>":"",s=Fe;for(let u=0;u<t;u++){const d=r[u];let h,f,g=-1,$=0;for(;$<d.length&&(s.lastIndex=$,f=s.exec(d),f!==null);)$=s.lastIndex,s===Fe?f[1]==="!--"?s=ii:f[1]!==void 0?s=ri:f[2]!==void 0?(Hi.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=pe):f[3]!==void 0&&(s=pe):s===pe?f[0]===">"?(s=i??Fe,g=-1):f[1]===void 0?g=-2:(g=s.lastIndex-f[2].length,h=f[1],s=f[3]===void 0?pe:f[3]==='"'?si:ai):s===si||s===ai?s=pe:s===ii||s===ri?s=Fe:(s=pe,i=void 0);const S=s===pe&&r[u+1].startsWith("/>")?" ":"";a+=s===Fe?d+Tr:g>=0?(n.push(h),d.slice(0,g)+ln+d.slice(g)+de+S):d+de+(g===-2?(n.push(void 0),u):S)}return[Fi(r,a+(r[t]||"<?>")+(e===2?"</svg>":"")),n]};class Xe{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let a=0,s=0;const u=e.length-1,d=this.parts,[h,f]=xr(e,t);if(this.el=Xe.createElement(h,n),ge.currentNode=this.el.content,t===2){const g=this.el.content,$=g.firstChild;$.remove(),g.append(...$.childNodes)}for(;(i=ge.nextNode())!==null&&d.length<u;){if(i.nodeType===1){if(i.hasAttributes()){const g=[];for(const $ of i.getAttributeNames())if($.endsWith(ln)||$.startsWith(de)){const S=f[s++];if(g.push($),S!==void 0){const ie=i.getAttribute(S.toLowerCase()+ln).split(de),K=/([.?@])?(.*)/.exec(S);d.push({type:1,index:a,name:K[2],strings:ie,ctor:K[1]==="."?Mr:K[1]==="?"?Lr:K[1]==="@"?Nr:_t})}else d.push({type:6,index:a})}for(const $ of g)i.removeAttribute($)}if(Hi.test(i.tagName)){const g=i.textContent.split(de),$=g.length-1;if($>0){i.textContent=Me?Me.emptyScript:"";for(let S=0;S<$;S++)i.append(g[S],qe()),ge.nextNode(),d.push({type:2,index:++a});i.append(g[$],qe())}}}else if(i.nodeType===8)if(i.data===Pi)d.push({type:2,index:a});else{let g=-1;for(;(g=i.data.indexOf(de,g+1))!==-1;)d.push({type:7,index:a}),g+=de.length-1}a++}}static createElement(e,t){const n=ve.createElement("template");return n.innerHTML=e,n}}function Le(r,e,t=r,n){var i,a,s,u;if(e===ke)return e;let d=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const h=Ke(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),h===void 0?d=void 0:(d=new h(r),d._$AT(r,t,n)),n!==void 0?((s=(u=t)._$Co)!==null&&s!==void 0?s:u._$Co=[])[n]=d:t._$Cl=d),d!==void 0&&(e=Le(r,d._$AS(r,e.values),d,n)),e}class Cr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ve).importNode(n,!0);ge.currentNode=a;let s=ge.nextNode(),u=0,d=0,h=i[0];for(;h!==void 0;){if(u===h.index){let f;h.type===2?f=new Je(s,s.nextSibling,this,e):h.type===1?f=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(f=new Or(s,this,e)),this._$AV.push(f),h=i[++d]}u!==(h==null?void 0:h.index)&&(s=ge.nextNode(),u++)}return ge.currentNode=ve,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Je{constructor(e,t,n,i){var a;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(a=i==null?void 0:i.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),Ke(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==ke&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Rr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&Ke(this._$AH)?this._$AA.nextSibling.data=e:this.$(ve.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Xe.createElement(Fi(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const s=new Cr(a,this),u=s.u(this.options);s.v(n),this.$(u),this._$AH=s}}_$AC(e){let t=oi.get(e.strings);return t===void 0&&oi.set(e.strings,t=new Xe(e)),t}T(e){Bi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const a of e)i===t.length?t.push(n=new Je(this.k(qe()),this.k(qe()),this,this.options)):n=t[i],n._$AI(a),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class _t{constructor(e,t,n,i,a){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const a=this.strings;let s=!1;if(a===void 0)e=Le(this,e,t,0),s=!Ke(e)||e!==this._$AH&&e!==ke,s&&(this._$AH=e);else{const u=e;let d,h;for(e=a[0],d=0;d<a.length-1;d++)h=Le(this,u[n+d],t,d),h===ke&&(h=this._$AH[d]),s||(s=!Ke(h)||h!==this._$AH[d]),h===b?e=b:e!==b&&(e+=(h??"")+a[d+1]),this._$AH[d]=h}s&&!i&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mr extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const kr=Me?Me.emptyScript:"";class Lr extends _t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,kr):this.element.removeAttribute(this.name)}}class Nr extends _t{constructor(e,t,n,i,a){super(e,t,n,i,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Le(this,e,t,0))!==null&&n!==void 0?n:b)===ke)return;const i=this._$AH,a=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==b&&(i===b||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Or{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}}const li=gt.litHtmlPolyfillSupport;li==null||li(Xe,Je),((Ft=gt.litHtmlVersions)!==null&&Ft!==void 0?Ft:gt.litHtmlVersions=[]).push("2.8.0");const Dr=(r,e,t)=>{var n,i;const a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let s=a._$litPart$;if(s===void 0){const u=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;a._$litPart$=s=new Je(e.insertBefore(qe(),u),u,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt,jt;class se extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ke}}se.finalized=!0,se._$litElement$=!0,(Vt=globalThis.litElementHydrateSupport)===null||Vt===void 0||Vt.call(globalThis,{LitElement:se});const di=globalThis.litElementPolyfillSupport;di==null||di({LitElement:se});((jt=globalThis.litElementVersions)!==null&&jt!==void 0?jt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=r=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(r,e):((t,n)=>{const{kind:i,elements:a}=n;return{kind:i,elements:a,finisher(s){customElements.define(t,s)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},Pr=(r,e,t)=>{e.constructor.createProperty(t,r)};function _(r){return(e,t)=>t!==void 0?Pr(r,e,t):Ir(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(r){return _({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br=({finisher:r,descriptor:e})=>(t,n)=>{var i;if(n===void 0){const a=(i=t.originalKey)!==null&&i!==void 0?i:t.key,s=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return r!=null&&(s.finisher=function(u){r(u,a)}),s}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),r==null||r(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hr(r,e){return Br({descriptor:t=>({get(){var i,a;return(a=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wt;((Wt=window.HTMLSlotElement)===null||Wt===void 0?void 0:Wt.prototype.assignedElements)!=null;function p(r){let e,t,n;return e=r,(i,a,s)=>{if(s.value!=null)s.value=ui(s.value,e,t,n);else if(s.get!=null)s.get=ui(s.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Gt=new Map;function ui(r,e,t=0,n){const i=Symbol("__memoized_map__");return function(...a){let s;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let u=this[i];if(Array.isArray(n))for(const d of n)Gt.has(d)?Gt.get(d).push(u):Gt.set(d,[u]);if(e||a.length>0||t>0){let d;e===!0?d=a.map(g=>g.toString()).join("!"):e?d=e.apply(this,a):d=a[0];const h=`${d}__timestamp`;let f=!1;if(t>0)if(!u.has(h))f=!0;else{let g=u.get(h);f=Date.now()-g>t}u.has(d)&&!f?s=u.get(d):(s=r.apply(this,a),u.set(d,s),t>0&&u.set(h,Date.now()))}else{const d=this;u.has(d)?s=u.get(d):(s=r.apply(this,a),u.set(d,s))}return s}}class dn{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}dn.shared=new dn;class ue{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}ue.shared=new ue;class wt{parseValue(e){return ue.shared.parseValue(e)}}wt.shared=new wt;class Ze{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let i=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(i=new Date(i.getTime()+i.getTimezoneOffset()*1e3*60)),i}}Ze.shared=new Ze;class yt{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((i,a)=>{const s=parseFloat(i);if(Number.isNaN(s))return t=!0,0;const d=60**(e.length-1-a);return s*Math.floor(d)}).reduce((i,a)=>i+a,0);return t?void 0:n}}yt.shared=new yt;class un{parseValue(e){if(typeof e=="string")return e}}un.shared=new un;class Ur{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const i of this.separators)if(n=t.split(i),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),i=[];return n.forEach(a=>{a!==void 0&&i.push(a)}),i}}class cn{parseValue(e){if(typeof e=="string")return e}}cn.shared=new cn;class vt{parseValue(e){return String(e)}}vt.shared=new vt;class Q{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const i=this.parser.parseValue(n);Array.isArray(i)?t.push(...i):i!==void 0&&t.push(i)}),t}}l([p()],Q.prototype,"values",null);l([p()],Q.prototype,"value",null);class Fr extends Q{constructor(e){super(dn.shared,e)}}class oe extends Q{constructor(e){super(Ze.shared,e)}}class Yt extends Q{constructor(e){super(yt.shared,e)}}class Y extends Q{constructor(e){super(ue.shared,e)}}class T extends Q{constructor(e){super(vt.shared,e)}}class zr extends Q{constructor(e){super(cn.shared,e)}}class ci extends Q{constructor(e){super(wt.shared,e)}}class Vr extends Q{constructor(e){super(un.shared,e)}}class jr extends Q{constructor(e,t){super(t,e)}}class Wr extends jr{constructor(e){const t=new Ur(vt.shared);super(e,t)}}class w{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new oe(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new T(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new Y(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new Y(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new T(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new T(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new ci(this.rawMetadata.collection_size):void 0}get contributor(){return this.rawMetadata.contributor!=null?new T(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new T(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new T(this.rawMetadata.creator):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new T(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new oe(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new T(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new Y(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new Yt(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new T(this.rawMetadata["external-identifier"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new Y(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new oe(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new T(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new T(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new Y(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new ci(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new T(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new Yt(this.rawMetadata.length):void 0}get lineage(){return this.rawMetadata.lineage!=null?new T(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new Y(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new Vr(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Fr(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new T(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new Y(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new Y(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new T(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new T(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new zr(this.rawMetadata.page_progression):void 0}get partner(){return this.rawMetadata.partner!=null?new T(this.rawMetadata.partner):void 0}get ppi(){return this.rawMetadata.ppi!=null?new Y(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new oe(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new T(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new oe(this.rawMetadata.reviewdate):void 0}get runtime(){return this.rawMetadata.runtime!=null?new Yt(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new T(this.rawMetadata.scanner):void 0}get source(){return this.rawMetadata.source!=null?new T(this.rawMetadata.source):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new oe(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new oe(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new oe(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new Wr(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new T(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new T(this.rawMetadata.title):void 0}get transferer(){return this.rawMetadata.transferer!=null?new T(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new Y(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new T(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new T(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new Y(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new T(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new T(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new Y(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new Y(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}l([p()],w.prototype,"addeddate",null);l([p()],w.prototype,"audio_codec",null);l([p()],w.prototype,"audio_sample_rate",null);l([p()],w.prototype,"avg_rating",null);l([p()],w.prototype,"collection",null);l([p()],w.prototype,"collections_raw",null);l([p()],w.prototype,"collection_size",null);l([p()],w.prototype,"contributor",null);l([p()],w.prototype,"coverage",null);l([p()],w.prototype,"creator",null);l([p()],w.prototype,"collection_layout",null);l([p()],w.prototype,"date",null);l([p()],w.prototype,"description",null);l([p()],w.prototype,"downloads",null);l([p()],w.prototype,"duration",null);l([p()],w.prototype,"external_identifier",null);l([p()],w.prototype,"files_count",null);l([p()],w.prototype,"indexdate",null);l([p()],w.prototype,"isbn",null);l([p()],w.prototype,"issue",null);l([p()],w.prototype,"item_count",null);l([p()],w.prototype,"item_size",null);l([p()],w.prototype,"language",null);l([p()],w.prototype,"length",null);l([p()],w.prototype,"lineage",null);l([p()],w.prototype,"month",null);l([p()],w.prototype,"mediatype",null);l([p()],w.prototype,"noindex",null);l([p()],w.prototype,"notes",null);l([p()],w.prototype,"num_favorites",null);l([p()],w.prototype,"num_reviews",null);l([p()],w.prototype,"openlibrary_edition",null);l([p()],w.prototype,"openlibrary_work",null);l([p()],w.prototype,"page_progression",null);l([p()],w.prototype,"partner",null);l([p()],w.prototype,"ppi",null);l([p()],w.prototype,"publicdate",null);l([p()],w.prototype,"publisher",null);l([p()],w.prototype,"reviewdate",null);l([p()],w.prototype,"runtime",null);l([p()],w.prototype,"scanner",null);l([p()],w.prototype,"source",null);l([p()],w.prototype,"start_localtime",null);l([p()],w.prototype,"start_time",null);l([p()],w.prototype,"stop_time",null);l([p()],w.prototype,"subject",null);l([p()],w.prototype,"taper",null);l([p()],w.prototype,"title",null);l([p()],w.prototype,"transferer",null);l([p()],w.prototype,"track",null);l([p()],w.prototype,"type",null);l([p()],w.prototype,"uploader",null);l([p()],w.prototype,"utc_offset",null);l([p()],w.prototype,"venue",null);l([p()],w.prototype,"volume",null);l([p()],w.prototype,"week",null);l([p()],w.prototype,"year",null);class Oe{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?wt.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?yt.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?ue.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?ue.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?ue.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}l([p()],Oe.prototype,"size",null);l([p()],Oe.prototype,"length",null);l([p()],Oe.prototype,"height",null);l([p()],Oe.prototype,"width",null);l([p()],Oe.prototype,"track",null);class Z{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?Ze.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?Ze.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?ue.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}l([p()],Z.prototype,"reviewdate",null);l([p()],Z.prototype,"createdate",null);l([p()],Z.prototype,"stars",null);class Gr{constructor(e){var t,n;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(i=>new Oe(i)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new w(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(n=e.reviews)===null||n===void 0?void 0:n.map(i=>new Z(i))}}var we;(function(r){r.networkError="MetadataService.NetworkError",r.itemNotFound="MetadataService.ItemNotFound",r.decodingError="MetadataService.DecodingError",r.searchEngineError="MetadataService.SearchEngineError"})(we||(we={}));class hn extends Error{constructor(e,t,n){super(t),this.name=e,this.type=e,this.details=n}}class Yr{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const i=new URL(window.location.href).searchParams.get("scope");i&&(this.requestScope=i)}}async fetchMetadata(e,t){const n=t?`/${t}`:"",i=`https://${this.baseUrl}/metadata/${e}${n}`;return this.fetchUrl(i,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var n;const i=new URL(e);this.requestScope&&i.searchParams.set("scope",this.requestScope);let a;try{const s=(n=t==null?void 0:t.requestOptions)!==null&&n!==void 0?n:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(i.href,s)}catch(s){const u=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(we.networkError,u)}try{const s=await a.json(),u=s.error;if(u){const d=s.forensics;return this.getErrorResult(we.searchEngineError,u,d)}else return{success:s}}catch(s){const u=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(we.decodingError,u)}}getErrorResult(e,t,n){return{error:new hn(e,t,n)}}}class hi{constructor(e){this.backend=e}async fetchMetadata(e){var t;const n=await this.backend.fetchMetadata(e);return n.error?n:((t=n.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new hn(we.itemNotFound)}:{success:new Gr(n.success)}}async fetchMetadataValue(e,t){var n;const i=await this.backend.fetchMetadata(e,t);return i.error?i:((n=i.success)===null||n===void 0?void 0:n.result)===void 0?{error:new hn(we.itemNotFound)}:{success:i.success.result}}}hi.default=new hi(new Yr);let qr=()=>({events:{},emit(r,...e){(this.events[r]||[]).forEach(t=>t(...e))},on(r,e){return(this.events[r]=this.events[r]||[]).push(e),()=>this.events[r]=(this.events[r]||[]).filter(t=>t!==e)}});function Kr(r){return new Promise(e=>setTimeout(e,r))}var ne;(function(r){r.retryNumber="retryNumber",r.owner="owner",r.dynamicImportLoaded="dynamicImportLoaded",r.hasBeenRetried="hasBeenRetried"})(ne||(ne={}));const pi="lazyLoaderService";class Xr{constructor(e){var t,n,i;this.emitter=qr(),this.container=(t=e==null?void 0:e.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e==null?void 0:e.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(i=e==null?void 0:e.retryInterval)!==null&&i!==void 0?i:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return lt(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return lt(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return lt(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,i=`script[src='${e.src}'][async][${ne.owner}='${pi}'][${ne.retryNumber}='${n}']`;let a=this.container.querySelector(i);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((s,u)=>{if(a.getAttribute(ne.dynamicImportLoaded)){s();return}const d=e.scriptBeingRetried,h=a.onload||(d==null?void 0:d.onload);a.onload=g=>{h==null||h(g),a.setAttribute(ne.dynamicImportLoaded,"true"),s()};const f=a.onerror||(d==null?void 0:d.onerror);a.onerror=g=>lt(this,void 0,void 0,function*(){const $=a.getAttribute(ne.hasBeenRetried);if(n<this.retryCount&&!$){a.setAttribute(ne.hasBeenRetried,"true"),yield Kr(this.retryInterval*1e3);const S=n+1;this.emitter.emit("scriptLoadRetried",e.src,S),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:S,scriptBeingRetried:a}))}else $||this.emitter.emit("scriptLoadFailed",e.src,g),f==null||f(g),u(g)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),i=document.createElement("script"),a=e.retryNumber;i.setAttribute(ne.owner,pi),i.setAttribute("src",n),i.setAttribute(ne.retryNumber,a.toString()),i.async=!0;const s=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(s).forEach(u=>{i.setAttribute(u,s[u])}),e.bundleType){case"module":i.setAttribute("type",e.bundleType);break;case"nomodule":i.setAttribute(e.bundleType,"");break}return i}}class Zr{constructor(e,t){this.widgetId=null,this.isExecuting=!1,this.siteKey=e.siteKey,this.grecaptchaLibrary=e.grecaptchaLibrary;const n=this.createContainer();this.setup(n,t)}async execute(){const{widgetId:e}=this;if(e===null)throw new Error("Recaptcha is not setup");return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,n)=>{this.executionSuccessBlock=i=>{this.finishExecution(),t(i)},this.executionExpiredBlock=()=>{this.finishExecution(),n(new Error("expired"))},this.executionErrorBlock=()=>{this.finishExecution(),n(new Error("error"))},this.grecaptchaLibrary.execute(e)})}finishExecution(){this.isExecuting=!1;const{widgetId:e}=this;e!==null&&this.grecaptchaLibrary.reset(e)}setup(e,t){var n;this.widgetId=this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t==null?void 0:t.tabindex,theme:t==null?void 0:t.theme,type:t==null?void 0:t.type,size:(n=t==null?void 0:t.size)!==null&&n!==void 0?n:"invisible",badge:t==null?void 0:t.badge})}createContainer(e){const t=`recaptchaManager-${this.siteKey}`;let n=document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.zIndex=e?`${e}`:"10",document.body.appendChild(n)),n}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class fi{constructor(e){var t;this.recaptchaCache={},this.defaultSiteKey=e==null?void 0:e.defaultSiteKey,this.lazyLoader=(t=e==null?void 0:e.lazyLoader)!==null&&t!==void 0?t:new Xr,this.grecaptchaLibraryCache=e==null?void 0:e.grecaptchaLibrary}async getRecaptchaWidget(e){var t;const n=(t=e==null?void 0:e.siteKey)!==null&&t!==void 0?t:this.defaultSiteKey;if(!n)throw new Error("The reCaptcha widget requires a site key");const i=this.recaptchaCache[n];if(i)return i;const a=await this.getRecaptchaLibrary(),s=new Zr({siteKey:n,grecaptchaLibrary:a},e==null?void 0:e.recaptchaParams);return this.recaptchaCache[n]=s,s}async getRecaptchaLibrary(){return this.grecaptchaLibraryCache?this.grecaptchaLibraryCache:new Promise(e=>{window.grecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.grecaptchaLoadedCallback},10),this.grecaptchaLibraryCache=window.grecaptcha,e(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadedCallback&render=explicit"})})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=r=>typeof r!="string"&&"strTag"in r,Qr=(r,e,t)=>{let n=r[0];for(let i=1;i<r.length;i++)n+=e[i-1],n+=r[i];return n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea=r=>Jr(r)?Qr(r.strings,r.values):r;let E=ea;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ta{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let r=0;r<256;r++)(r>>4&15).toString(16)+(r&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let na=new ta;na.resolve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ia={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ra=r=>(...e)=>({_$litDirective$:r,values:e});class aa{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn extends aa{constructor(e){if(super(e),this.et=N,e.type!==ia.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this.ft=void 0,this.et=e;if(e===xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}pn.directiveName="unsafeHTML",pn.resultType=1;const zi=ra(pn);/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */const{entries:Vi,setPrototypeOf:mi,isFrozen:sa,getPrototypeOf:oa,getOwnPropertyDescriptor:la}=Object;let{freeze:V,seal:q,create:ji}=Object,{apply:fn,construct:mn}=typeof Reflect<"u"&&Reflect;V||(V=function(e){return e});q||(q=function(e){return e});fn||(fn=function(e,t,n){return e.apply(t,n)});mn||(mn=function(e,t){return new e(...t)});const dt=j(Array.prototype.forEach),da=j(Array.prototype.lastIndexOf),gi=j(Array.prototype.pop),ze=j(Array.prototype.push),ua=j(Array.prototype.splice),ht=j(String.prototype.toLowerCase),qt=j(String.prototype.toString),wi=j(String.prototype.match),Ve=j(String.prototype.replace),ca=j(String.prototype.indexOf),ha=j(String.prototype.trim),X=j(Object.prototype.hasOwnProperty),z=j(RegExp.prototype.test),je=pa(TypeError);function j(r){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return fn(r,e,n)}}function pa(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mn(r,t)}}function A(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ht;mi&&mi(r,null);let n=e.length;for(;n--;){let i=e[n];if(typeof i=="string"){const a=t(i);a!==i&&(sa(e)||(e[n]=a),i=a)}r[i]=!0}return r}function fa(r){for(let e=0;e<r.length;e++)X(r,e)||(r[e]=null);return r}function fe(r){const e=ji(null);for(const[t,n]of Vi(r))X(r,t)&&(Array.isArray(n)?e[t]=fa(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=fe(n):e[t]=n);return e}function We(r,e){for(;r!==null;){const n=la(r,e);if(n){if(n.get)return j(n.get);if(typeof n.value=="function")return j(n.value)}r=oa(r)}function t(){return null}return t}const yi=V(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Kt=V(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xt=V(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ma=V(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zt=V(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ga=V(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),vi=V(["#text"]),bi=V(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Jt=V(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),_i=V(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ut=V(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),wa=q(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ya=q(/<%[\w\W]*|[\w\W]*%>/gm),va=q(/\$\{[\w\W]*/gm),ba=q(/^data-[\-\w.\u00B7-\uFFFF]+$/),_a=q(/^aria-[\-\w]+$/),Wi=q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$a=q(/^(?:\w+script|data):/i),Aa=q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gi=q(/^html$/i),Ea=q(/^[a-z][.\w]*(-[.\w]+)+$/i);var $i=Object.freeze({__proto__:null,ARIA_ATTR:_a,ATTR_WHITESPACE:Aa,CUSTOM_ELEMENT:Ea,DATA_ATTR:ba,DOCTYPE_NAME:Gi,ERB_EXPR:ya,IS_ALLOWED_URI:Wi,IS_SCRIPT_OR_DATA:$a,MUSTACHE_EXPR:wa,TMPLIT_EXPR:va});const Ge={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Sa=function(){return typeof window>"u"?null:window},Ta=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(n=t.getAttribute(i));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},Ai=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Yi(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Sa();const e=y=>Yi(y);if(e.version="3.2.5",e.removed=[],!r||!r.document||r.document.nodeType!==Ge.document||!r.Element)return e.isSupported=!1,e;let{document:t}=r;const n=t,i=n.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:u,Element:d,NodeFilter:h,NamedNodeMap:f=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:g,DOMParser:$,trustedTypes:S}=r,ie=d.prototype,K=We(ie,"cloneNode"),Ki=We(ie,"remove"),Xi=We(ie,"nextSibling"),Zi=We(ie,"childNodes"),et=We(ie,"parentNode");if(typeof s=="function"){const y=t.createElement("template");y.content&&y.content.ownerDocument&&(t=y.content.ownerDocument)}let H,De="";const{implementation:$t,createNodeIterator:Ji,createDocumentFragment:Qi,getElementsByTagName:er}=t,{importNode:tr}=n;let U=Ai();e.isSupported=typeof Vi=="function"&&typeof et=="function"&&$t&&$t.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:At,ERB_EXPR:Et,TMPLIT_EXPR:St,DATA_ATTR:nr,ARIA_ATTR:ir,IS_SCRIPT_OR_DATA:rr,ATTR_WHITESPACE:bn,CUSTOM_ELEMENT:ar}=$i;let{IS_ALLOWED_URI:_n}=$i,O=null;const $n=A({},[...yi,...Kt,...Xt,...Zt,...vi]);let I=null;const An=A({},[...bi,...Jt,..._i,...ut]);let L=Object.seal(ji(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Tt=null,En=!0,Rt=!0,Sn=!1,Tn=!0,be=!1,xt=!0,ce=!1,Ct=!1,Mt=!1,_e=!1,tt=!1,nt=!1,Rn=!0,xn=!1;const sr="user-content-";let kt=!0,Pe=!1,$e={},Ae=null;const Cn=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Mn=null;const kn=A({},["audio","video","img","source","image","track"]);let Lt=null;const Ln=A({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",re="http://www.w3.org/1999/xhtml";let Ee=re,Nt=!1,Ot=null;const or=A({},[it,rt,re],qt);let at=A({},["mi","mo","mn","ms","mtext"]),st=A({},["annotation-xml"]);const lr=A({},["title","style","font","a","script"]);let Be=null;const dr=["application/xhtml+xml","text/html"],ur="text/html";let D=null,Se=null;const cr=t.createElement("form"),Nn=function(o){return o instanceof RegExp||o instanceof Function},Dt=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Se&&Se===o)){if((!o||typeof o!="object")&&(o={}),o=fe(o),Be=dr.indexOf(o.PARSER_MEDIA_TYPE)===-1?ur:o.PARSER_MEDIA_TYPE,D=Be==="application/xhtml+xml"?qt:ht,O=X(o,"ALLOWED_TAGS")?A({},o.ALLOWED_TAGS,D):$n,I=X(o,"ALLOWED_ATTR")?A({},o.ALLOWED_ATTR,D):An,Ot=X(o,"ALLOWED_NAMESPACES")?A({},o.ALLOWED_NAMESPACES,qt):or,Lt=X(o,"ADD_URI_SAFE_ATTR")?A(fe(Ln),o.ADD_URI_SAFE_ATTR,D):Ln,Mn=X(o,"ADD_DATA_URI_TAGS")?A(fe(kn),o.ADD_DATA_URI_TAGS,D):kn,Ae=X(o,"FORBID_CONTENTS")?A({},o.FORBID_CONTENTS,D):Cn,Ie=X(o,"FORBID_TAGS")?A({},o.FORBID_TAGS,D):{},Tt=X(o,"FORBID_ATTR")?A({},o.FORBID_ATTR,D):{},$e=X(o,"USE_PROFILES")?o.USE_PROFILES:!1,En=o.ALLOW_ARIA_ATTR!==!1,Rt=o.ALLOW_DATA_ATTR!==!1,Sn=o.ALLOW_UNKNOWN_PROTOCOLS||!1,Tn=o.ALLOW_SELF_CLOSE_IN_ATTR!==!1,be=o.SAFE_FOR_TEMPLATES||!1,xt=o.SAFE_FOR_XML!==!1,ce=o.WHOLE_DOCUMENT||!1,_e=o.RETURN_DOM||!1,tt=o.RETURN_DOM_FRAGMENT||!1,nt=o.RETURN_TRUSTED_TYPE||!1,Mt=o.FORCE_BODY||!1,Rn=o.SANITIZE_DOM!==!1,xn=o.SANITIZE_NAMED_PROPS||!1,kt=o.KEEP_CONTENT!==!1,Pe=o.IN_PLACE||!1,_n=o.ALLOWED_URI_REGEXP||Wi,Ee=o.NAMESPACE||re,at=o.MATHML_TEXT_INTEGRATION_POINTS||at,st=o.HTML_INTEGRATION_POINTS||st,L=o.CUSTOM_ELEMENT_HANDLING||{},o.CUSTOM_ELEMENT_HANDLING&&Nn(o.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(L.tagNameCheck=o.CUSTOM_ELEMENT_HANDLING.tagNameCheck),o.CUSTOM_ELEMENT_HANDLING&&Nn(o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(L.attributeNameCheck=o.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),o.CUSTOM_ELEMENT_HANDLING&&typeof o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(L.allowCustomizedBuiltInElements=o.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),be&&(Rt=!1),tt&&(_e=!0),$e&&(O=A({},vi),I=[],$e.html===!0&&(A(O,yi),A(I,bi)),$e.svg===!0&&(A(O,Kt),A(I,Jt),A(I,ut)),$e.svgFilters===!0&&(A(O,Xt),A(I,Jt),A(I,ut)),$e.mathMl===!0&&(A(O,Zt),A(I,_i),A(I,ut))),o.ADD_TAGS&&(O===$n&&(O=fe(O)),A(O,o.ADD_TAGS,D)),o.ADD_ATTR&&(I===An&&(I=fe(I)),A(I,o.ADD_ATTR,D)),o.ADD_URI_SAFE_ATTR&&A(Lt,o.ADD_URI_SAFE_ATTR,D),o.FORBID_CONTENTS&&(Ae===Cn&&(Ae=fe(Ae)),A(Ae,o.FORBID_CONTENTS,D)),kt&&(O["#text"]=!0),ce&&A(O,["html","head","body"]),O.table&&(A(O,["tbody"]),delete Ie.tbody),o.TRUSTED_TYPES_POLICY){if(typeof o.TRUSTED_TYPES_POLICY.createHTML!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof o.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');H=o.TRUSTED_TYPES_POLICY,De=H.createHTML("")}else H===void 0&&(H=Ta(S,i)),H!==null&&typeof De=="string"&&(De=H.createHTML(""));V&&V(o),Se=o}},On=A({},[...Kt,...Xt,...ma]),Dn=A({},[...Zt,...ga]),hr=function(o){let c=et(o);(!c||!c.tagName)&&(c={namespaceURI:Ee,tagName:"template"});const m=ht(o.tagName),x=ht(c.tagName);return Ot[o.namespaceURI]?o.namespaceURI===rt?c.namespaceURI===re?m==="svg":c.namespaceURI===it?m==="svg"&&(x==="annotation-xml"||at[x]):!!On[m]:o.namespaceURI===it?c.namespaceURI===re?m==="math":c.namespaceURI===rt?m==="math"&&st[x]:!!Dn[m]:o.namespaceURI===re?c.namespaceURI===rt&&!st[x]||c.namespaceURI===it&&!at[x]?!1:!Dn[m]&&(lr[m]||!On[m]):!!(Be==="application/xhtml+xml"&&Ot[o.namespaceURI]):!1},ee=function(o){ze(e.removed,{element:o});try{et(o).removeChild(o)}catch{Ki(o)}},ot=function(o,c){try{ze(e.removed,{attribute:c.getAttributeNode(o),from:c})}catch{ze(e.removed,{attribute:null,from:c})}if(c.removeAttribute(o),o==="is")if(_e||tt)try{ee(c)}catch{}else try{c.setAttribute(o,"")}catch{}},In=function(o){let c=null,m=null;if(Mt)o="<remove></remove>"+o;else{const P=wi(o,/^[\r\n\t ]+/);m=P&&P[0]}Be==="application/xhtml+xml"&&Ee===re&&(o='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+o+"</body></html>");const x=H?H.createHTML(o):o;if(Ee===re)try{c=new $().parseFromString(x,Be)}catch{}if(!c||!c.documentElement){c=$t.createDocument(Ee,"template",null);try{c.documentElement.innerHTML=Nt?De:x}catch{}}const B=c.body||c.documentElement;return o&&m&&B.insertBefore(t.createTextNode(m),B.childNodes[0]||null),Ee===re?er.call(c,ce?"html":"body")[0]:ce?c.documentElement:B},Pn=function(o){return Ji.call(o.ownerDocument||o,o,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},It=function(o){return o instanceof g&&(typeof o.nodeName!="string"||typeof o.textContent!="string"||typeof o.removeChild!="function"||!(o.attributes instanceof f)||typeof o.removeAttribute!="function"||typeof o.setAttribute!="function"||typeof o.namespaceURI!="string"||typeof o.insertBefore!="function"||typeof o.hasChildNodes!="function")},Bn=function(o){return typeof u=="function"&&o instanceof u};function ae(y,o,c){dt(y,m=>{m.call(e,o,c,Se)})}const Hn=function(o){let c=null;if(ae(U.beforeSanitizeElements,o,null),It(o))return ee(o),!0;const m=D(o.nodeName);if(ae(U.uponSanitizeElement,o,{tagName:m,allowedTags:O}),o.hasChildNodes()&&!Bn(o.firstElementChild)&&z(/<[/\w!]/g,o.innerHTML)&&z(/<[/\w!]/g,o.textContent)||o.nodeType===Ge.progressingInstruction||xt&&o.nodeType===Ge.comment&&z(/<[/\w]/g,o.data))return ee(o),!0;if(!O[m]||Ie[m]){if(!Ie[m]&&Fn(m)&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,m)||L.tagNameCheck instanceof Function&&L.tagNameCheck(m)))return!1;if(kt&&!Ae[m]){const x=et(o)||o.parentNode,B=Zi(o)||o.childNodes;if(B&&x){const P=B.length;for(let W=P-1;W>=0;--W){const te=K(B[W],!0);te.__removalCount=(o.__removalCount||0)+1,x.insertBefore(te,Xi(o))}}}return ee(o),!0}return o instanceof d&&!hr(o)||(m==="noscript"||m==="noembed"||m==="noframes")&&z(/<\/no(script|embed|frames)/i,o.innerHTML)?(ee(o),!0):(be&&o.nodeType===Ge.text&&(c=o.textContent,dt([At,Et,St],x=>{c=Ve(c,x," ")}),o.textContent!==c&&(ze(e.removed,{element:o.cloneNode()}),o.textContent=c)),ae(U.afterSanitizeElements,o,null),!1)},Un=function(o,c,m){if(Rn&&(c==="id"||c==="name")&&(m in t||m in cr))return!1;if(!(Rt&&!Tt[c]&&z(nr,c))){if(!(En&&z(ir,c))){if(!I[c]||Tt[c]){if(!(Fn(o)&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,o)||L.tagNameCheck instanceof Function&&L.tagNameCheck(o))&&(L.attributeNameCheck instanceof RegExp&&z(L.attributeNameCheck,c)||L.attributeNameCheck instanceof Function&&L.attributeNameCheck(c))||c==="is"&&L.allowCustomizedBuiltInElements&&(L.tagNameCheck instanceof RegExp&&z(L.tagNameCheck,m)||L.tagNameCheck instanceof Function&&L.tagNameCheck(m))))return!1}else if(!Lt[c]){if(!z(_n,Ve(m,bn,""))){if(!((c==="src"||c==="xlink:href"||c==="href")&&o!=="script"&&ca(m,"data:")===0&&Mn[o])){if(!(Sn&&!z(rr,Ve(m,bn,"")))){if(m)return!1}}}}}}return!0},Fn=function(o){return o!=="annotation-xml"&&wi(o,ar)},zn=function(o){ae(U.beforeSanitizeAttributes,o,null);const{attributes:c}=o;if(!c||It(o))return;const m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0};let x=c.length;for(;x--;){const B=c[x],{name:P,namespaceURI:W,value:te}=B,He=D(P);let F=P==="value"?te:ha(te);if(m.attrName=He,m.attrValue=F,m.keepAttr=!0,m.forceKeepAttr=void 0,ae(U.uponSanitizeAttribute,o,m),F=m.attrValue,xn&&(He==="id"||He==="name")&&(ot(P,o),F=sr+F),xt&&z(/((--!?|])>)|<\/(style|title)/i,F)){ot(P,o);continue}if(m.forceKeepAttr||(ot(P,o),!m.keepAttr))continue;if(!Tn&&z(/\/>/i,F)){ot(P,o);continue}be&&dt([At,Et,St],jn=>{F=Ve(F,jn," ")});const Vn=D(o.nodeName);if(Un(Vn,He,F)){if(H&&typeof S=="object"&&typeof S.getAttributeType=="function"&&!W)switch(S.getAttributeType(Vn,He)){case"TrustedHTML":{F=H.createHTML(F);break}case"TrustedScriptURL":{F=H.createScriptURL(F);break}}try{W?o.setAttributeNS(W,P,F):o.setAttribute(P,F),It(o)?ee(o):gi(e.removed)}catch{}}}ae(U.afterSanitizeAttributes,o,null)},pr=function y(o){let c=null;const m=Pn(o);for(ae(U.beforeSanitizeShadowDOM,o,null);c=m.nextNode();)ae(U.uponSanitizeShadowNode,c,null),Hn(c),zn(c),c.content instanceof a&&y(c.content);ae(U.afterSanitizeShadowDOM,o,null)};return e.sanitize=function(y){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=null,m=null,x=null,B=null;if(Nt=!y,Nt&&(y="<!-->"),typeof y!="string"&&!Bn(y))if(typeof y.toString=="function"){if(y=y.toString(),typeof y!="string")throw je("dirty is not a string, aborting")}else throw je("toString is not a function");if(!e.isSupported)return y;if(Ct||Dt(o),e.removed=[],typeof y=="string"&&(Pe=!1),Pe){if(y.nodeName){const te=D(y.nodeName);if(!O[te]||Ie[te])throw je("root node is forbidden and cannot be sanitized in-place")}}else if(y instanceof u)c=In("<!---->"),m=c.ownerDocument.importNode(y,!0),m.nodeType===Ge.element&&m.nodeName==="BODY"||m.nodeName==="HTML"?c=m:c.appendChild(m);else{if(!_e&&!be&&!ce&&y.indexOf("<")===-1)return H&&nt?H.createHTML(y):y;if(c=In(y),!c)return _e?null:nt?De:""}c&&Mt&&ee(c.firstChild);const P=Pn(Pe?y:c);for(;x=P.nextNode();)Hn(x),zn(x),x.content instanceof a&&pr(x.content);if(Pe)return y;if(_e){if(tt)for(B=Qi.call(c.ownerDocument);c.firstChild;)B.appendChild(c.firstChild);else B=c;return(I.shadowroot||I.shadowrootmode)&&(B=tr.call(n,B,!0)),B}let W=ce?c.outerHTML:c.innerHTML;return ce&&O["!doctype"]&&c.ownerDocument&&c.ownerDocument.doctype&&c.ownerDocument.doctype.name&&z(Gi,c.ownerDocument.doctype.name)&&(W="<!DOCTYPE "+c.ownerDocument.doctype.name+`>
`+W),be&&dt([At,Et,St],te=>{W=Ve(W,te," ")}),H&&nt?H.createHTML(W):W},e.setConfig=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Dt(y),Ct=!0},e.clearConfig=function(){Se=null,Ct=!1},e.isValidAttribute=function(y,o,c){Se||Dt({});const m=D(y),x=D(o);return Un(m,x,c)},e.addHook=function(y,o){typeof o=="function"&&ze(U[y],o)},e.removeHook=function(y,o){if(o!==void 0){const c=da(U[y],o);return c===-1?void 0:ua(U[y],c,1)[0]}return gi(U[y])},e.removeHooks=function(y){U[y]=[]},e.removeAllHooks=function(){U=Ai()},e}var gn=Yi();const Ei=R`var(--white, #fff)`,Ra=R`var(--ia-theme-link-color, #4b64ff)`,xa=R`var(--primaryDisableCTAFill, #767676)`,Ca=R`var(--secondaryCTABorder, #999)`,Ma=R`var(--primaryCTAFill, #194880)`,Qt=R`var(--primaryCTAFillRGB, 25, 72, 128)`,ka=R`var(--primaryCTABorder, #c5d1df)`,La=R`var(--primaryErrorCTAFill, #d9534f)`,en=R`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Na=R`var(--primaryErrorCTABorder, #d43f3a)`,Oa=R`var(--secondaryCTAFill, #333)`,tn=R`var(--secondaryCTAFillRGB, 51, 51, 51)`,Da=R`var(--primaryCTABorder, #979797)`,Ia=R`var(---primaryWarningFill, #ee8950)`,nn=R`var(--primaryWarningFillRGB, 238, 137, 80)`,Pa=R`var(--primaryWarningBorder, #ec7939)`,qi=R`
  .ia-button {
    min-height: 3rem;
    cursor: pointer;
    color: ${Ei};
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
    outline-color: ${Ei};
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
    background-color: ${xa};
    border: 1px solid ${Ca};
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
    background-color: ${Ma};
    border-color: ${ka};
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
    background-color: ${La};
    border-color: ${Na};
  }
  .ia-button.danger:hover {
    background-color: rgba(${en}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${en}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${en}, 0.7);
  }

  .ia-button.warning {
    background-color: ${Ia};
    border-color: ${Pa};
  }
  .ia-button.warning:hover {
    background-color: rgba(${nn}, 0.9);
  }
  .ia-button.warning:focus-visible {
    background-color: rgba(${nn}, 0.8);
  }
  .ia-button.warning:active {
    background-color: rgba(${nn}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Oa};
    border-color: ${Da};
  }
  .ia-button.dark:hover {
    background-color: rgba(${tn}, 0.9);
  }
  .ia-button.dark:focus-visible {
    background-color: rgba(${tn}, 0.8);
  }
  .ia-button.dark:active {
    background-color: rgba(${tn}, 0.7);
  }

  .ia-button.link {
    margin: 0;
    padding: 6px;
    border: 0;
    appearance: none;
    background: none;
    color: ${Ra};
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
`;var Si;(function(r){r.processing="processing",r.complete="complete"})(Si||(Si={}));let wn=class extends se{constructor(){super(...arguments),this.mode="processing"}render(){return v`
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
    `}static get styles(){const e=R`var(--activityIndicatorCheckmarkColor, #31A481)`,t=R`var(--activityIndicatorCompletedRingColor, #31A481)`,n=R`var(--activityIndicatorLoadingRingColor, #333333)`,i=R`var(--activityIndicatorLoadingDotColor, #333333)`;return R`
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
    `}};l([_({type:String})],wn.prototype,"mode",void 0);wn=l([Qe("ia-activity-indicator")],wn);const Ba=Ne`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#c2820a"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ha=Ne`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#ffffff"
    stroke="#c2820a"
    stroke-width="3px"
  />
</svg>`,Ua=Ne`
  <svg class="star-basic" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="2C2C2C"
  />
</svg>`;function Ti(r=""){if(r.length<=40)return r;const t=r.substring(0,40)+"...";return v`<span title="${r}">${t}</span>`}const Fa=["a"];function za(r){return gn.addHook("afterSanitizeAttributes",e=>{e.nodeName.toLowerCase()==="a"&&(e.setAttribute("rel","ugc nofollow"),e.setAttribute("target","_blank"))}),gn.sanitize(r,{ALLOWED_TAGS:Fa})}function Va(r,e=100,t=!0){if(r.length<e)return r;let n=e;if(t){const i=r.indexOf(" ",e),a=i-e<=20;if(a&&i===r.length-1)return r;i!==-1&&a&&(n=i)}return ja(r,n,e)}function ja(r,e,t){let n=r.slice(0,e);const i=n.match(/<a/gi);if(i){const a=n.match(/<\/a/gi);if(!a||a.length<i.length){const s=r.indexOf("</a>",e),u=s-t<=20;if(u&&r.length===s+4)return r;if(s!==-1&&u)n=r.slice(0,s+4);else{const d=n.lastIndexOf("<a");n=r.slice(0,d)}}}return n.concat("...")}const Wa=/(http(s)?)?(:\/\/)?([a-zA-Z][-a-z0-9]*(\.[-a-z0-9]+)+(\/[^\s\?#<]*)*(\?[^\s#]*)?(#[^\s]*)?)/;function Ga(r){return r.replace(new RegExp('(?<=href=")[^"]+(?=")'),n=>n.replace(".","__DOT__")).replace(Wa,n=>n=`<a href="${n.match(/^(https|http)/)?n:"https://"+n}" rel="ugc nofollow" target="_blank">${n}</a>`).replace("__DOT__",".")}function Ya(r){return r.trim().replace(/[ |\t]+/g," ").replace(/[\n|\r\n]+/g,"<br />").replace(/(<br[^>]*>(<\/br>)?)+/g,"<br />")}const qa=Ne`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="delete-icon">
    <rect width="24" height="24" fill="white"/>
    <path d="M5 7.5H19L18 21H6L5 7.5Z" stroke="#000000" stroke-linejoin="round"/>
    <path d="M15.5 9.5L15 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 9.5V19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 9.5L9 19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8" stroke="#000000" stroke-linejoin="round"/>
  </svg>
`;let J=class extends se{constructor(){super(...arguments),this.maxSubjectLength=100,this.maxBodyLength=150,this.baseHost="https://archive.org",this.canDelete=!1,this.bypassTruncation=!1,this.showTruncatedContent=!1,this.deleteMsg=""}render(){return this.review?v`
          <article class="review" id=${this.generateDomId()}>
            ${this.canDelete?v`
                  <button
                    class="delete-btn"
                    title="Delete this review"
                    @click=${this.deleteReview}
                  >
                    ${qa}
                  </button>
                `:b}
            <div class="top-line">
              <b>${E("Reviewer:")}</b> ${this.reviewerTemplate} -
              ${this.starsTemplate}${this.createDateTemplate}
            </div>
            <div class="subject">
              <b>${E("Subject: ")}</b>${this.subjectTemplate}
            </div>
            <div class="body">
              ${this.deleteMsg?v`<i>${E(this.deleteMsg)}</i>`:this.bodyTemplate}
            </div>
            ${this.truncationButtonsTemplate}
          </article>
        `:v`
          <div class="error">
            ${E("This review cannot be displayed at this time.")}
          </div>
        `}get subjectTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle;return this.truncateContent(t??"",this.maxSubjectLength)}get bodyTemplate(){var e;const t=(e=this.review)===null||e===void 0?void 0:e.reviewbody;if(!t)return b;const n=za(t),i=this.truncateContent(n,this.maxBodyLength);return v`${zi(this.prepReview(i))}`}get truncationButtonsTemplate(){var e,t,n,i,a,s;return this.bypassTruncation||((n=(t=(e=this.review)===null||e===void 0?void 0:e.reviewtitle)===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)<=this.maxSubjectLength&&((s=(a=(i=this.review)===null||i===void 0?void 0:i.reviewbody)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:0)<=this.maxBodyLength?b:this.showTruncatedContent?this.lessButtonTemplate:this.moreButtonTemplate}get moreButtonTemplate(){return v`
      <button
        class="simple-link more-btn"
        @click=${()=>this.showTruncatedContent=!0}
      >
        ${E("More...")}
      </button>
    `}get lessButtonTemplate(){return v`<button
      class="simple-link less-btn"
      @click=${()=>this.showTruncatedContent=!1}
    >
      ${E("...Less")}
    </button>`}get reviewerTemplate(){return this.review?this.review.reviewer_itemname?v`
            <a
              href="${this.baseHost}/details/${this.review.reviewer_itemname}"
              class="reviewer-link simple-link"
              data-event-click-tracking="ItemReviews|ReviewerLink"
            >
              ${Ti(this.review.reviewer)}
            </a>
          `:v`${Ti(this.review.reviewer)}`:b}get starsTemplate(){return!this.review||!this.review.stars?b:v`
      <div
        class="review-stars"
        title="${E(`${this.review.stars} out of 5 stars`)}"
      >
        ${new Array(Number(this.review.stars)).fill(null).map(()=>v`<div class="review-star">${Ua}</div>`)}
      </div>
      -
    `}get createDateTemplate(){var e,t;if(!(!((e=this.review)===null||e===void 0)&&e.createdate)||!(!((t=this.review)===null||t===void 0)&&t.reviewdate))return b;const n=new Date(this.review.reviewdate),i=new Date(this.review.createdate),a=i.toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}),s=n.getTime()!==i.getTime()?"(edited)":"";return E(`${a} ${s}`)}generateDomId(){var e;return!((e=this.review)===null||e===void 0)&&e.createdate?`review-${Date.parse(this.review.createdate.toString())}`:""}truncateContent(e,t){return this.showTruncatedContent||this.bypassTruncation?e:Va(e,t)}prepReview(e){return Ya(Ga(e))}async deleteReview(){if(!this.review||!this.identifier||!confirm(E("Are you sure you want to delete this review?")))return;const e=`${this.baseHost}/edit-reviews.php?identifier=${this.identifier}&deleteReviewer=${this.review.reviewer}`;try{await fetch(e,{method:"POST"}),this.deleteMsg="This review has been queued for deletion."}catch{this.deleteMsg="Sorry, we were unable to delete this review."}}static get styles(){return R`
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
    `}};l([_({type:Object})],J.prototype,"review",void 0);l([_({type:String})],J.prototype,"identifier",void 0);l([_({type:Number})],J.prototype,"maxSubjectLength",void 0);l([_({type:Number})],J.prototype,"maxBodyLength",void 0);l([_({type:String})],J.prototype,"baseHost",void 0);l([_({type:Boolean})],J.prototype,"canDelete",void 0);l([_({type:Boolean})],J.prototype,"bypassTruncation",void 0);l([M()],J.prototype,"showTruncatedContent",void 0);l([M()],J.prototype,"deleteMsg",void 0);J=l([Qe("ia-review")],J);let k=class extends se{constructor(){super(...arguments),this.token="",this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.currentStars=0,this.currentSubjectLength=0,this.currentBodyLength=0,this.formCanSubmit=!1,this.submissionInProgress=!1,this.RECAPTCHA_ERROR_MESSAGE="Could not validate review. Please try again later.",this.GENERIC_ERROR_MESSAGE="There's been a temporary error. Please wait a moment and try again."}render(){return v`<form id="review-form" @submit=${this.handleSubmit}>
      ${this.unrecoverableError?this.unrecoverableErrorTemplate:v`
            <span class="inputs">
              ${this.starsInputTemplate} ${this.subjectInputTemplate}
              ${this.bodyInputTemplate} ${this.hiddenInputsTemplate}
            </span>
          `}
      ${this.recaptchaMessageTemplate} ${this.recoverableErrorTemplate}
      ${this.actionButtonsTemplate}
    </form>`}firstUpdated(){this.formCanSubmit=this.checkSubmissionAllowed()}updated(e){var t,n,i,a,s,u,d,h;e.has("oldReview")&&(this.currentStars=(n=(t=this.oldReview)===null||t===void 0?void 0:t.stars)!==null&&n!==void 0?n:0,this.currentSubjectLength=(s=(a=(i=this.oldReview)===null||i===void 0?void 0:i.reviewtitle)===null||a===void 0?void 0:a.length)!==null&&s!==void 0?s:0,this.currentBodyLength=(h=(d=(u=this.oldReview)===null||u===void 0?void 0:u.reviewbody)===null||d===void 0?void 0:d.length)!==null&&h!==void 0?h:0),e.has("recaptchaManager")&&!this.bypassRecaptcha&&this.recaptchaManager&&!this.unrecoverableError&&this.setupRecaptcha(),(e.has("currentSubjectLength")||e.has("currentBodyLength"))&&(this.formCanSubmit=this.checkSubmissionAllowed())}get unrecoverableErrorTemplate(){return this.unrecoverableError?v`
          <div class="unrecoverable-error">
            <span class="error-msg">${E(this.unrecoverableError)}</span>
          </div>
        `:b}get recoverableErrorTemplate(){return this.recoverableError?v`
          <div class="recoverable-error">
            ${zi(this.sanitizeErrorMsg(E(this.recoverableError)))}
          </div>
        `:b}get recaptchaMessageTemplate(){return this.bypassRecaptcha?b:v`${E(v`This site is protected by reCAPTCHA and the Google
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
        apply.`)}`}get starsInputTemplate(){return v`
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
    `}get subjectInputTemplate(){var e,t;return v`
      <span id="subject-input" class="input-box ${this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength?"error":""}"
      ><div class="form-heading">
        <label for="field_reviewtitle">${E("Subject")}</label>
        ${this.maxSubjectLength?v`<div class="char-count subject">
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
    />${this.maxSubjectLength?v`
            <div class="input-error">
              ${E(`Subject may only have ${this.maxSubjectLength} characters`)}
            </div>
          `:b}</div></span>
    `}get bodyInputTemplate(){var e,t;return v`
      <span
        id="body-input"
        class="input-box ${this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength?"error":""}"
        ><div class="form-heading">
          <label for="field_reviewbody">${E("Review")}</label>
          ${this.maxBodyLength?v`<div class="char-count body">
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
        ${this.maxBodyLength?v`
              <div class="input-error">
                ${E(`Review may only have ${this.maxBodyLength} characters`)}
              </div>
            `:b}
      </span>
    `}get hiddenInputsTemplate(){return v`
      <input type="hidden" name="field_reviewtoken" .value=${this.token} />
      ${this.identifier?v`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:b}
    `}get actionButtonsTemplate(){return v`<div class="action-btns">
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
        ${this.submissionInProgress?v`
              <span class="loading-indicator" alt="Loading indicator">
                <ia-activity-indicator></ia-activity-indicator>
              </span>
            `:E("Submit review")}
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=E(`Rate ${e>1?`${e} stars`:"1 star"}`);return v`
      <button
        class="star star-${e}"
        title=${t?E("Clear rating"):n}
        @click=${i=>this.handleStarClicked(i,e)}
      >
        ${e<=this.currentStars?Ba:Ha}
      </button>
    `}async setupRecaptcha(){var e;try{this.recaptchaWidget=await((e=this.recaptchaManager)===null||e===void 0?void 0:e.getRecaptchaWidget())}catch{this.unrecoverableError=this.RECAPTCHA_ERROR_MESSAGE}}sanitizeErrorMsg(e){return gn.sanitize(e,{ALLOWED_TAGS:["a","b","br"]})}async handleSubmit(e){var t;if(e.preventDefault(),!(!this.formCanSubmit||this.submissionInProgress)){if(this.submissionInProgress=!0,this.recoverableError="",!this.reviewForm.reportValidity())return this.stopSubmission();if(!this.fetchHandler)return this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission();try{const n=new URLSearchParams;if(!this.bypassRecaptcha){const a=await this.getRecaptchaToken();if(!a)return this.handleRecaptchaError();n.append("g-recaptcha-response",a??"")}for(const a of new FormData(this.reviewForm))n.append(a[0],a[1]);n.append("submitter","review-form");const i=await this.fetchHandler.fetchApiResponse(`${this.baseHost}${this.endpointPath}`,{method:"POST",includeCredentials:!0,body:n});if((i==null?void 0:i.success)===!0){this.submissionInProgress=!1;const a=this.generateSubmittedReview(),s=new CustomEvent("reviewUpdated",{detail:a});this.dispatchEvent(s)}else this.recoverableError=(t=i.error)!==null&&t!==void 0?t:this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}catch(n){console.error(n),this.recoverableError=this.GENERIC_ERROR_MESSAGE,this.stopSubmission()}}}generateSubmittedReview(){var e,t,n,i,a,s;const u=new Date().toDateString();return new Z({reviewtitle:this.reviewForm.field_reviewtitle.value,reviewbody:this.reviewForm.field_reviewbody.value,stars:this.reviewForm.field_stars.value,reviewdate:u,reviewer:(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewer)!==null&&t!==void 0?t:this.submitterScreenname,reviewer_itemname:(i=(n=this.oldReview)===null||n===void 0?void 0:n.reviewer_itemname)!==null&&i!==void 0?i:this.submitterItemname,createdate:(s=this.dateToString((a=this.oldReview)===null||a===void 0?void 0:a.createdate))!==null&&s!==void 0?s:u})}dateToString(e){return e instanceof Date?e.toDateString():e}async getRecaptchaToken(){if(!this.recaptchaWidget){this.handleRecaptchaError();return}try{return await this.recaptchaWidget.execute()}catch{this.handleRecaptchaError();return}}handleRecaptchaError(){this.recoverableError=this.RECAPTCHA_ERROR_MESSAGE,this.stopSubmission()}stopSubmission(){this.submissionInProgress&&(this.submissionInProgress=!1)}cancelReviewEdit(){const e=new CustomEvent("reviewEditCanceled");this.dispatchEvent(e)}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}handleSubjectChanged(e){const t=e.target;this.currentSubjectLength=t.value.length}handleBodyChanged(e){const t=e.target;this.currentBodyLength=t.value.length}checkSubmissionAllowed(){return!(this.unrecoverableError||!this.currentBodyLength||!this.currentSubjectLength||this.maxSubjectLength&&this.currentSubjectLength>this.maxSubjectLength||this.maxBodyLength&&this.currentBodyLength>this.maxBodyLength)}static get styles(){return[qi,R`
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

        @media only screen and (max-width: 350px) {
          .action-btns {
            flex-direction: column-reverse;
            align-items: center;
          }
        }
      `]}};l([_({type:String})],k.prototype,"identifier",void 0);l([_({type:String})],k.prototype,"token",void 0);l([_({type:String})],k.prototype,"baseHost",void 0);l([_({type:String})],k.prototype,"endpointPath",void 0);l([_({type:String})],k.prototype,"submitterScreenname",void 0);l([_({type:String})],k.prototype,"submitterItemname",void 0);l([_({type:Object})],k.prototype,"oldReview",void 0);l([_({type:String})],k.prototype,"unrecoverableError",void 0);l([_({type:Number})],k.prototype,"maxSubjectLength",void 0);l([_({type:Number})],k.prototype,"maxBodyLength",void 0);l([_({type:Object})],k.prototype,"fetchHandler",void 0);l([_({type:Object})],k.prototype,"recaptchaManager",void 0);l([_({type:Boolean})],k.prototype,"bypassRecaptcha",void 0);l([M()],k.prototype,"currentStars",void 0);l([M()],k.prototype,"currentSubjectLength",void 0);l([M()],k.prototype,"currentBodyLength",void 0);l([M()],k.prototype,"recoverableError",void 0);l([M()],k.prototype,"formCanSubmit",void 0);l([M()],k.prototype,"submissionInProgress",void 0);l([Hr("#review-form")],k.prototype,"reviewForm",void 0);k=l([Qe("ia-review-form")],k);class Ka{constructor(e){var t,n,i,a;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://athena.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(n=e==null?void 0:e.imageUrl)!==null&&n!==void 0?n:this.DEFAULT_IMAGE_URL,this.imageContainer=(i=e==null?void 0:e.imageContainer)!==null&&i!==void 0?i:document.body,this.requireImagePing=(a=e==null?void 0:e.requireImagePing)!==null&&a!==void 0?a:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const n=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{n(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,n={kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random(),...e.eventConfiguration};this.sendPing(n)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const n=e;n.eventConfiguration=t,this.sendEvent(n)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const n=e??{};n.service=(t=n.service)!==null&&t!==void 0?t:this.defaultService;const i=new URL(this.imageUrl),a=Object.keys(n);return a.forEach(s=>{const u=n[s];i.searchParams.append(s,u)}),i.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),i.searchParams.append("count",`${a.length+2}`),i}}class Xa{constructor(e){this.analyticsManager=e}trackIaxParameter(e){const n=new URL(e).searchParams.get("iax");if(!n)return;const i=n.split("|"),a=i.length>=1?i[1]:"",s=i.length>=2?i[2]:"";this.analyticsManager.sendEventNoSampling({category:i[0],action:a,label:s})}trackPageView(e){const t={};t.kind="pageview",t.timediff=new Date().getTimezoneOffset()/60*-1,t.locale=navigator.language,t.referrer=document.referrer===""?"-":document.referrer;const{domInteractive:n,defaultFontSize:i}=this;n&&(t.loadtime=n),i&&(t.iaprop_fontSize=i),"devicePixelRatio"in window&&(t.iaprop_devicePixelRatio=window.devicePixelRatio),e!=null&&e.mediaType&&(t.iaprop_mediaType=e.mediaType),e!=null&&e.mediaLanguage&&(t.iaprop_mediaLanguage=e.mediaLanguage),e!=null&&e.primaryCollection&&(t.iaprop_primaryCollection=e.primaryCollection),e!=null&&e.page&&(t.page=e.page),this.analyticsManager.sendPing(t)}get defaultFontSize(){const e=window.getComputedStyle(document.documentElement);if(!e)return null;const t=e.fontSize,n=parseFloat(t)*1.6,i=t.replace(/(\d*\.\d+)|\d+/,"");return`${n}${i}`}get domInteractive(){if(!window.performance||!window.performance.getEntriesByType)return;const e=window.performance.getEntriesByType("navigation");return e.length===0?void 0:e[0].domInteractive}}class Za{constructor(e){e.enableAnalytics&&(this.analyticsBackend=new Ka,this.analyticsHelpers=new Xa(this.analyticsBackend))}sendPing(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendPing(e)}sendEvent(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEvent(e)}send_event(e,t,n,i){this.sendEvent({category:e,action:t,label:n,eventConfiguration:i})}sendEventNoSampling(e){var t;(t=this.analyticsBackend)===null||t===void 0||t.sendEventNoSampling(e)}trackIaxParameter(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackIaxParameter(e)}trackPageView(e){var t;(t=this.analyticsHelpers)===null||t===void 0||t.trackPageView(e)}}function Ja(r){return new Promise(e=>setTimeout(e,r))}class Qa{constructor(e){this.analyticsHandler=new Za({enableAnalytics:!0}),this.sleep=Ja,this.retryCount=2,this.retryDelay=1e3,this.eventCategory="offshootFetchRetry",e!=null&&e.analyticsHandler&&(this.analyticsHandler=e.analyticsHandler),e!=null&&e.retryCount&&(this.retryCount=e.retryCount),e!=null&&e.retryDelay&&(this.retryDelay=e.retryDelay),e!=null&&e.sleepFn&&(this.sleep=e.sleepFn)}async fetchRetry(e,t,n=this.retryCount){const i=typeof e=="string"?e:e.url,a=this.retryCount-n+1;try{const s=await fetch(e,t);return s.ok?s:s.status===404?(this.log404Event(i),s):n>0?(await this.sleep(this.retryDelay),this.logRetryEvent(i,a,s.statusText,s.status),this.fetchRetry(e,t,n-1)):(this.logFailureEvent(i,s.status),s)}catch(s){if(this.isContentBlockerError(s))throw this.logContentBlockingEvent(i,s),s;if(n>0)return await this.sleep(this.retryDelay),this.logRetryEvent(i,a,s,s),this.fetchRetry(e,t,n-1);throw this.logFailureEvent(i,s),s}}isContentBlockerError(e){return e instanceof TypeError?e.message.toLowerCase().includes("content blocker"):!1}logRetryEvent(e,t,n,i){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"retryingFetch",label:`retryNumber: ${t} / ${this.retryCount}, code: ${i}, status: ${n}, url: ${e}`})}logFailureEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"fetchFailed",label:`error: ${t}, url: ${e}`})}log404Event(e){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"status404NotRetrying",label:`url: ${e}`})}logContentBlockingEvent(e,t){this.analyticsHandler.sendEvent({category:this.eventCategory,action:"contentBlockerDetectedNotRetrying",label:`error: ${t}, url: ${e}`})}}class es{constructor(e){this.fetchRetrier=new Qa,e!=null&&e.iaApiBaseUrl&&(this.iaApiBaseUrl=e.iaApiBaseUrl),e!=null&&e.fetchRetrier&&(this.fetchRetrier=e.fetchRetrier),e!=null&&e.searchParams?this.searchParams=e.searchParams:this.searchParams=window.location.search}async fetchIAApiResponse(e,t){const n=`${this.iaApiBaseUrl}${e}`;return this.fetchApiResponse(n,t)}async fetchApiResponse(e,t){const n={};return t!=null&&t.includeCredentials&&(n.credentials="include"),t!=null&&t.method&&(n.method=t.method),t!=null&&t.body&&(n.body=t.body),t!=null&&t.headers&&(n.headers=t.headers),await(await this.fetch(e,n)).json()}async fetch(e,t){let n=e;return new URLSearchParams(this.searchParams).get("reCache")==="1"&&(n=this.addSearchParams(e,{reCache:"1"})),this.fetchRetrier.fetchRetry(n,t)}addSearchParams(e,t){const n=typeof e=="string"?e:e.url,i=new URL(n,window.location.href);for(const[a,s]of Object.entries(t))i.searchParams.set(a,s);return typeof e=="string"?i.href:new Request(i.href,e)}}const ts=Ne`
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="add-icon">
    <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678654 21.554993 14.678654 35.3383967 0 13.7800281-4.8928871 25.5594936-14.678654 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.624587-21.554993-14.624587-35.3383967-.00225101-9.0014064 2.23243609-17.3524613 6.70406299-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm8.0540642 20h-16l-.001 22h-21.999v16h21.999l.001 22h16v-22h22v-16h-22z" />
  </svg>
`,Ri=Ne`
 <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="reviews-icon" fill="currentColor">
    <path d="m100 7.78013601c0-2.14552613-.7593357-3.978597-2.278007-5.4992126-1.5186713-1.52061561-3.3493984-2.28092341-5.4921813-2.28092341h-84.54977287c-2.08268321 0-3.88336049.7603078-5.40203183 2.28092341-1.51867133 1.5206156-2.278007 3.35368647-2.278007 5.4992126v51.49262709c0 2.0853495.75933567 3.8883321 2.278007 5.4089477 1.51867134 1.5206156 3.31934862 2.2809234 5.40203183 2.2809234h10.53361537l.3571304 33.0373658 32.4087237-33.0373658h41.2468361c2.1427829 0 3.97351-.7603078 5.4921813-2.2809234s2.278007-3.3235982 2.278007-5.4089477z"/>
 </svg>
`;let C=class extends se{constructor(){super(...arguments),this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.canDelete=!1,this.displayReviewsByDefault=!1,this.baseHost="https://archive.org",this.token="",this.endpointPath="/write-review.php",this.submitterScreenname="Anonymous",this.bypassRecaptcha=!1,this.fetchHandler=new es,this.displayReviewForm=!1,this.displayReviews=!1,this.reviewsCount=0}render(){return v`
      <span class="left-icon">${Ri}</span>
      <div class="reviews">
        ${this.reviewsTitleTemplate} ${this.reviewsListTemplate}
      </div>
    `}updated(e){e.has("ownReview")&&(this.currentReview=this.ownReview,this.updateReviewsCount()),e.has("reviews")&&this.updateReviewsCount(),e.has("displayReviewsByDefault")&&this.displayReviewsByDefault&&(this.displayReviews=!0)}get reviewsTitleTemplate(){return v`
      <div class="reviews-title">
        <h2>
          ${Ri}
          ${E(`Reviews ${!this.reviewsDisabled&&this.reviewsCount>0?`(${this.reviewsCount})`:""}`)}
        </h2>
        ${!this.reviewsDisabled&&!this.reviewsFrozen?v`<button class="add-edit-btn" @click=${this.addEditReview}>
              ${ts}
              ${E(this.currentReview?"Edit My Review":"Add Review")}
            </button>`:b}
      </div>
    `}get reviewsListTemplate(){return this.reviewsDisabled?v`<div class="message">
        ${E("Reviews have been disabled for this item.")}
      </div>`:this.reviewsCount===0&&!this.displayReviewForm?this.noReviewsMsgTemplate:this.displayReviews?v`
      <div class="reviews-list">
        ${this.reviewsFrozen?v`<div class="message">
              ${E("Reviews can no longer be added to this item.")}
            </div>`:b}
        ${this.editableCurrentReviewTemplate}${this.reviews?this.reviews.map(e=>this.renderReview(e)):b}
      </div>
    `:this.displayReviewsMsgTemplate}get noReviewsMsgTemplate(){return this.reviewsFrozen?v`
        <div class="message">
          ${E("Reviews cannot be added to this item.")}
        </div>
      `:v`
      <div class="message">
        ${E("There are no reviews yet.")}
        ${E(v`
          Be the first one to
          <button
            class="ia-button link no-reviews-btn"
            @click=${()=>{this.displayReviewForm=!0,this.displayReviews=!0}}
          >
            write a review</button
          >.
        `)}
      </div>
    `}get displayReviewsMsgTemplate(){return v`
      <div class="message">
        ${this.reviewsCount===1?E("There is 1 review for this item."):E(`There are ${this.reviewsCount} reviews for this item.`)}
        <button
          class="ia-button link display-reviews-btn"
          @click=${()=>this.displayReviews=!0}
        >
          ${E(`Display ${this.reviewsCount===1?"review":"reviews"}`)}</button
        >.
      </div>
    `}get editableCurrentReviewTemplate(){return!this.displayReviewForm&&!this.currentReview?b:v`<div class="own-review-container">
      ${this.displayReviewForm?v`<ia-review-form
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
            ?bypassRecaptcha=${this.bypassRecaptcha}
            @reviewUpdated=${this.handleReviewUpdate}
            @reviewEditCanceled=${this.handleEditCanceled}
          ></ia-review-form>`:this.renderReview(this.currentReview)}
    </div>`}updateReviewsCount(){var e,t;this.reviewsCount=((t=(e=this.reviews)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+(this.currentReview?1:0)}renderReview(e){return e?v`<ia-review
      .review=${e}
      .identifier=${this.identifier}
      ?canDelete=${this.canDelete}
      ?bypassTruncation=${this.displayReviewsByDefault}
      .baseHost=${this.baseHost}
    ></ia-review>`:b}addEditReview(){this.displayReviews=!0,this.displayReviewForm=!0}handleReviewUpdate(e){this.currentReview||(this.reviewsCount=this.reviewsCount+1),this.currentReview=e.detail,this.displayReviewForm=!1}handleEditCanceled(){this.displayReviewForm=!1,this.reviewsCount===0&&(this.displayReviews=!1)}static get styles(){return[qi,R`
        :host {
          font-family: var(
            --ia-font-stack,
            'Helvetica Neue',
            Helvetica,
            Arial,
            sans-serif
          );

          color: var(--ia-text-color, #2c2c2c);
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: flex-start;
        }

        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
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

        .reviews-title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid #979797;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }

        .reviews-title .reviews-icon {
          vertical-align: bottom;
          display: none;
        }

        .reviews-icon {
          width: 3.5rem;
          padding-top: 0.5rem;
        }

        .reviews {
          flex-grow: 1;
        }

        .reviews-title h2 {
          font-size: 3rem;
          font-weight: 500;
          margin: 0;
        }

        .add-edit-btn {
          all: unset;
          font-weight: 500;
        }

        .add-edit-btn:hover {
          cursor: pointer;
        }

        .add-icon {
          width: 1.6rem;
          display: inline-block;
          vertical-align: bottom;
        }

        @media only screen and (max-width: 767px) {
          .left-icon {
            display: none;
          }

          .reviews-title .reviews-icon {
            display: inline;
          }
        }
      `]}};l([_({type:String})],C.prototype,"identifier",void 0);l([_({type:Array})],C.prototype,"reviews",void 0);l([_({type:Object})],C.prototype,"ownReview",void 0);l([_({type:Boolean})],C.prototype,"reviewsDisabled",void 0);l([_({type:Boolean})],C.prototype,"reviewsFrozen",void 0);l([_({type:Boolean})],C.prototype,"canDelete",void 0);l([_({type:Boolean})],C.prototype,"displayReviewsByDefault",void 0);l([_({type:Number})],C.prototype,"maxSubjectLength",void 0);l([_({type:Number})],C.prototype,"maxBodyLength",void 0);l([_({type:String})],C.prototype,"baseHost",void 0);l([_({type:String})],C.prototype,"token",void 0);l([_({type:String})],C.prototype,"endpointPath",void 0);l([_({type:String})],C.prototype,"submitterScreenname",void 0);l([_({type:String})],C.prototype,"submitterItemname",void 0);l([_({type:Object})],C.prototype,"recaptchaManager",void 0);l([_({type:Boolean})],C.prototype,"bypassRecaptcha",void 0);l([_({type:String})],C.prototype,"reviewSubmissionError",void 0);l([_({type:Object})],C.prototype,"fetchHandler",void 0);l([M()],C.prototype,"displayReviewForm",void 0);l([M()],C.prototype,"displayReviews",void 0);l([M()],C.prototype,"currentReview",void 0);l([M()],C.prototype,"reviewsCount",void 0);C=l([Qe("ia-reviews")],C);class ns{async fetchApiResponse(e,t){return{success:!0}}async fetchIAApiResponse(e,t){return{}}async fetch(e,t){return new Response}}let G=class extends se{constructor(){super(...arguments),this.mockOldReview=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.longReview=new Z({stars:5,reviewtitle:"What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! What a cool book! ",reviewbody:new Array(100).fill("I loved it.").join(" "),reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithLink=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:'I loved it. You can <a href="https://archive.org/details/goody">read it here.</a>',reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.reviewWithTextLink=new Z({stars:5,reviewtitle:"What a cool book!",reviewbody:"I loved it. You can read it here: archive.org/details/goody",reviewer:"Foo Bar",reviewdate:"03/20/2025",createdate:"02/07/2025",reviewer_itemname:"@foo-bar"}),this.otherReviews=[new Z({stars:2,reviewtitle:"Eh, just ok",reviewbody:"It was fine.",reviewer:"Bar Baz",reviewdate:"04/20/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-baz"}),new Z({stars:5,reviewtitle:"My favorite book!!!!!",reviewbody:"Wow, what a great read",reviewer:"Bar Foo",reviewdate:"04/19/2025",createdate:"04/19/2025",reviewer_itemname:"@bar-foo"})],this.fetchHandler=new ns,this.goodRecaptchaManager=new fi({defaultSiteKey:"demo-key"}),this.badRecaptchaManager=new fi({defaultSiteKey:"i-am-a-bad-key-that-will-fail"}),this.bypassRecaptcha=!0,this.unrecoverableError=!1,this.useCharCounts=!0,this.allowDeletion=!1,this.review=this.mockOldReview,this.useOwnReview=!0,this.useOtherReviews=!0,this.reviewsDisabled=!1,this.reviewsFrozen=!1,this.alwaysDisplay=!1}render(){return v` <h2>General Settings</h2>
      <button @click=${()=>this.useOwnReview=!this.useOwnReview}>
        ${this.useOwnReview?"Remove":"Show"} own review
      </button>
      <button @click=${()=>this.useOtherReviews=!this.useOtherReviews}>
        ${this.useOtherReviews?"Remove":"Show"} other reviews
      </button>
      <button @click=${()=>this.reviewsDisabled=!this.reviewsDisabled}>
        ${this.reviewsDisabled?"Enable":"Disable"} reviews
      </button>
      <button @click=${()=>this.reviewsFrozen=!this.reviewsFrozen}>
        ${this.reviewsFrozen?"Unfreeze":"Freeze"} reviews
      </button>
      <button @click=${()=>this.alwaysDisplay=!this.alwaysDisplay}>
        ${this.alwaysDisplay?"Hide":"Show"} reviews by default
      </button>
      <h2>Toggle ReCaptcha</h2>
      ${this.recaptchaManager?b:v`
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
      <button @click=${()=>this.useCharCounts=!this.useCharCounts}>
        ${this.useCharCounts?"Remove":"Use"} char count limits
      </button>
      <h2>Toggle review display</h2>
      ${this.review!==this.mockOldReview?v`<button
            @click=${()=>{this.useOwnReview=!0,this.review=this.mockOldReview}}
          >
            Prefill normal review
          </button>`:b}
      ${this.review!==this.longReview?v`<button
            @click=${()=>{this.useOwnReview=!0,this.review=this.longReview}}
          >
            Prefill long review
          </button>`:b}
      ${this.review!==this.reviewWithLink?v`<button
            @click=${()=>{this.useOwnReview=!0,this.review=this.reviewWithLink}}
          >
            Prefill review with link
          </button>`:b}
      ${this.review!==this.reviewWithTextLink?v`<button
            @click=${()=>{this.useOwnReview=!0,this.review=this.reviewWithTextLink}}
          >
            Prefill review with text link
          </button>`:b}
      <button @click=${()=>this.allowDeletion=!this.allowDeletion}>
        ${this.allowDeletion?"Prevent":"Allow"} deletion
      </button>

      <div class="container">
        <ia-reviews
          .identifier=${"goody"}
          .reviews=${this.useOtherReviews?this.otherReviews:void 0}
          .ownReview=${this.useOwnReview?this.review:void 0}
          .recaptchaManager=${this.recaptchaManager}
          .submitterItemname=${"@foo-bar"}
          .submitterScreenname=${"Foo Bar"}
          .reviewSubmissionError=${this.unrecoverableError?"You must be logged in to write reviews.":void 0}
          .maxSubjectLength=${this.useCharCounts?100:void 0}
          .maxBodyLength=${this.useCharCounts?1e3:void 0}
          .fetchHandler=${this.fetchHandler}
          ?canDelete=${this.allowDeletion}
          ?displayReviewsByDefault=${this.alwaysDisplay}
          ?bypassRecaptcha=${this.bypassRecaptcha}
          ?reviewsDisabled=${this.reviewsDisabled}
          ?reviewsFrozen=${this.reviewsFrozen}
        ></ia-reviews>
      </div>`}};G.styles=R`
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
  `;l([M()],G.prototype,"recaptchaManager",void 0);l([M()],G.prototype,"bypassRecaptcha",void 0);l([M()],G.prototype,"unrecoverableError",void 0);l([M()],G.prototype,"useCharCounts",void 0);l([M()],G.prototype,"allowDeletion",void 0);l([M()],G.prototype,"review",void 0);l([M()],G.prototype,"useOwnReview",void 0);l([M()],G.prototype,"useOtherReviews",void 0);l([M()],G.prototype,"reviewsDisabled",void 0);l([M()],G.prototype,"reviewsFrozen",void 0);l([M()],G.prototype,"alwaysDisplay",void 0);G=l([Qe("app-root")],G);
