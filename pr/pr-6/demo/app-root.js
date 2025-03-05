(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function y(s,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(o=(i<3?r(o):i>3?r(e,t,o):r(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=window,ge=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),Ae=new WeakMap;let Le=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ge&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ae.set(t,e))}return e}toString(){return this.cssText}};const tt=s=>new Le(typeof s=="string"?s:s+"",void 0,me),_=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new Le(t,s,me)},nt=(s,e)=>{ge?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),i=W.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)})},ye=ge?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return tt(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const q=window,ve=q.trustedTypes,it=ve?ve.emptyScript:"",be=q.reactiveElementPolyfillSupport,he={toAttribute(s,e){switch(e){case Boolean:s=s?it:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},je=(s,e)=>e!==s&&(e==e||s==s),ee={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:je},ce="finalized";let T=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ee}static finalize(){if(this.hasOwnProperty(ce))return!1;this[ce]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(ye(i))}else e!==void 0&&t.push(ye(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ee){var i;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const r=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:he).toAttribute(t,n.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const r=i.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:he;this._$El=o,this[o]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||je)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};T[ce]=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},be==null||be({ReactiveElement:T}),((Y=q.reactiveElementVersions)!==null&&Y!==void 0?Y:q.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var te;const G=window,R=G.trustedTypes,we=R?R.createPolicy("lit-html",{createHTML:s=>s}):void 0,fe="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+v,st=`<${ze}>`,x=document,Z=()=>x.createComment(""),L=s=>s===null||typeof s!="object"&&typeof s!="function",De=Array.isArray,rt=s=>De(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ee=/>/g,w=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ce=/'/g,xe=/"/g,Ve=/^(?:script|style|textarea|title)$/i,j=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),He=new WeakMap,E=x.createTreeWalker(x,129,null,!1);function Fe(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return we!==void 0?we.createHTML(e):e}const ot=(s,e)=>{const t=s.length-1,n=[];let i,o=e===2?"<svg>":"",r=O;for(let a=0;a<t;a++){const l=s[a];let d,u,h=-1,c=0;for(;c<l.length&&(r.lastIndex=c,u=r.exec(l),u!==null);)c=r.lastIndex,r===O?u[1]==="!--"?r=Se:u[1]!==void 0?r=Ee:u[2]!==void 0?(Ve.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=w):u[3]!==void 0&&(r=w):r===w?u[0]===">"?(r=i??O,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?w:u[3]==='"'?xe:Ce):r===xe||r===Ce?r=w:r===Se||r===Ee?r=O:(r=w,i=void 0);const p=r===w&&s[a+1].startsWith("/>")?" ":"";o+=r===O?l+st:h>=0?(n.push(d),l.slice(0,h)+fe+l.slice(h)+v+p):l+v+(h===-2?(n.push(void 0),a):p)}return[Fe(s,o+(s[t]||"<?>")+(e===2?"</svg>":"")),n]};let pe=class We{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[d,u]=ot(e,t);if(this.el=We.createElement(d,n),E.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=E.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const c of i.getAttributeNames())if(c.endsWith(fe)||c.startsWith(v)){const p=u[r++];if(h.push(c),p!==void 0){const X=i.getAttribute(p.toLowerCase()+fe).split(v),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:X,ctor:m[1]==="."?dt:m[1]==="?"?ut:m[1]==="@"?ht:J})}else l.push({type:6,index:o})}for(const c of h)i.removeAttribute(c)}if(Ve.test(i.tagName)){const h=i.textContent.split(v),c=h.length-1;if(c>0){i.textContent=R?R.emptyScript:"";for(let p=0;p<c;p++)i.append(h[p],Z()),E.nextNode(),l.push({type:2,index:++o});i.append(h[c],Z())}}}else if(i.nodeType===8)if(i.data===ze)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(v,h+1))!==-1;)l.push({type:7,index:o}),h+=v.length-1}o++}}static createElement(e,t){const n=x.createElement("template");return n.innerHTML=e,n}};function P(s,e,t=s,n){var i,o,r,a;if(e===j)return e;let l=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const d=L(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,t,n)),n!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=P(s,l._$AS(s,e.values),l,n)),e}let lt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:x).importNode(n,!0);E.currentNode=o;let r=E.nextNode(),a=0,l=0,d=i[0];for(;d!==void 0;){if(a===d.index){let u;d.type===2?u=new qe(r,r.nextSibling,this,e):d.type===1?u=new d.ctor(r,d.name,d.strings,this,e):d.type===6&&(u=new ct(r,this,e)),this._$AV.push(u),d=i[++l]}a!==(d==null?void 0:d.index)&&(r=E.nextNode(),a++)}return E.currentNode=x,o}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},qe=class Ge{constructor(e,t,n,i){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),L(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):rt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(x.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=pe.createElement(Fe(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(n);else{const r=new lt(o,this),a=r.u(this.options);r.v(n),this.$(a),this._$AH=r}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new pe(e)),t}T(e){De(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const o of e)i===t.length?t.push(n=new Ge(this.k(Z()),this.k(Z()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},J=class{constructor(e,t,n,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const o=this.strings;let r=!1;if(o===void 0)e=P(this,e,t,0),r=!L(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=P(this,a[n+l],t,l),d===j&&(d=this._$AH[l]),r||(r=!L(d)||d!==this._$AH[l]),d===$?e=$:e!==$&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}r&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},dt=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}};const at=R?R.emptyScript:"";let ut=class extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,at):this.element.removeAttribute(this.name)}},ht=class extends J{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=P(this,e,t,0))!==null&&n!==void 0?n:$)===j)return;const i=this._$AH,o=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==$&&(i===$||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},ct=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}};const ke=G.litHtmlPolyfillSupport;ke==null||ke(pe,qe),((te=G.litHtmlVersions)!==null&&te!==void 0?te:G.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ie;const K=window,B=K.trustedTypes,Te=B?B.createPolicy("lit-html",{createHTML:s=>s}):void 0,$e="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,Ze="?"+b,ft=`<${Ze}>`,H=document,z=()=>H.createComment(""),D=s=>s===null||typeof s!="object"&&typeof s!="function",Ke=Array.isArray,pt=s=>Ke(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",se=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Re=/>/g,S=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,Be=/"/g,Je=/^(?:script|style|textarea|title)$/i,Qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),g=Qe(1),Xe=Qe(2),U=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ue=new WeakMap,C=H.createTreeWalker(H,129,null,!1);function Ye(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(e):e}const $t=(s,e)=>{const t=s.length-1,n=[];let i,o=e===2?"<svg>":"",r=I;for(let a=0;a<t;a++){const l=s[a];let d,u,h=-1,c=0;for(;c<l.length&&(r.lastIndex=c,u=r.exec(l),u!==null);)c=r.lastIndex,r===I?u[1]==="!--"?r=Ne:u[1]!==void 0?r=Re:u[2]!==void 0?(Je.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=S):u[3]!==void 0&&(r=S):r===S?u[0]===">"?(r=i??I,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?S:u[3]==='"'?Be:Pe):r===Be||r===Pe?r=S:r===Ne||r===Re?r=I:(r=S,i=void 0);const p=r===S&&s[a+1].startsWith("/>")?" ":"";o+=r===I?l+ft:h>=0?(n.push(d),l.slice(0,h)+$e+l.slice(h)+b+p):l+b+(h===-2?(n.push(void 0),a):p)}return[Ye(s,o+(s[t]||"<?>")+(e===2?"</svg>":"")),n]};class V{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[d,u]=$t(e,t);if(this.el=V.createElement(d,n),C.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(i=C.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const c of i.getAttributeNames())if(c.endsWith($e)||c.startsWith(b)){const p=u[r++];if(h.push(c),p!==void 0){const X=i.getAttribute(p.toLowerCase()+$e).split(b),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:m[2],strings:X,ctor:m[1]==="."?gt:m[1]==="?"?At:m[1]==="@"?yt:Q})}else l.push({type:6,index:o})}for(const c of h)i.removeAttribute(c)}if(Je.test(i.tagName)){const h=i.textContent.split(b),c=h.length-1;if(c>0){i.textContent=B?B.emptyScript:"";for(let p=0;p<c;p++)i.append(h[p],z()),C.nextNode(),l.push({type:2,index:++o});i.append(h[c],z())}}}else if(i.nodeType===8)if(i.data===Ze)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(e,t){const n=H.createElement("template");return n.innerHTML=e,n}}function M(s,e,t=s,n){var i,o,r,a;if(e===U)return e;let l=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const d=D(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),d===void 0?l=void 0:(l=new d(s),l._$AT(s,t,n)),n!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=M(s,l._$AS(s,e.values),l,n)),e}class _t{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(n,!0);C.currentNode=o;let r=C.nextNode(),a=0,l=0,d=i[0];for(;d!==void 0;){if(a===d.index){let u;d.type===2?u=new F(r,r.nextSibling,this,e):d.type===1?u=new d.ctor(r,d.name,d.strings,this,e):d.type===6&&(u=new vt(r,this,e)),this._$AV.push(u),d=i[++l]}a!==(d==null?void 0:d.index)&&(r=C.nextNode(),a++)}return C.currentNode=H,o}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class F{constructor(e,t,n,i){var o;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),D(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):pt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=e:this.$(H.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=V.createElement(Ye(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(n);else{const r=new _t(o,this),a=r.u(this.options);r.v(n),this.$(a),this._$AH=r}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new V(e)),t}T(e){Ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const o of e)i===t.length?t.push(n=new F(this.k(z()),this.k(z()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Q{constructor(e,t,n,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const o=this.strings;let r=!1;if(o===void 0)e=M(this,e,t,0),r=!D(e)||e!==this._$AH&&e!==U,r&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=M(this,a[n+l],t,l),d===U&&(d=this._$AH[l]),r||(r=!D(d)||d!==this._$AH[l]),d===f?e=f:e!==f&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}r&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gt extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}const mt=B?B.emptyScript:"";class At extends Q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,mt):this.element.removeAttribute(this.name)}}class yt extends Q{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=M(this,e,t,0))!==null&&n!==void 0?n:f)===U)return;const i=this._$AH,o=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==f&&(i===f||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class vt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const Me=K.litHtmlPolyfillSupport;Me==null||Me(V,F),((ie=K.litHtmlVersions)!==null&&ie!==void 0?ie:K.litHtmlVersions=[]).push("2.8.0");const bt=(s,e,t)=>{var n,i;const o=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let r=o._$litPart$;if(r===void 0){const a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new F(e.insertBefore(z(),a),a,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,oe;class N extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return U}}N.finalized=!0,N._$litElement$=!0,(re=globalThis.litElementHydrateSupport)===null||re===void 0||re.call(globalThis,{LitElement:N});const Oe=globalThis.litElementPolyfillSupport;Oe==null||Oe({LitElement:N});((oe=globalThis.litElementVersions)!==null&&oe!==void 0?oe:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=s=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(s,e):((t,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(r){customElements.define(t,r)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}},St=(s,e,t)=>{e.constructor.createProperty(t,s)};function k(s){return(e,t)=>t!==void 0?St(s,e,t):wt(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(s){return k({...s,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var le;((le=window.HTMLSlotElement)===null||le===void 0?void 0:le.prototype.assignedElements)!=null;const Ct=Xe`
  <svg class="star-selected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#f0b445"
  />
</svg>`,xt=Xe`
  <svg class="star-unselected" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
    fill="#e0e0e0"
  />
</svg>`,Ie=_`var(--white, #fff)`,Ht=_`var(--primaryDisableCTAFill, #767676)`,kt=_`var(--secondaryCTABorder, #999)`,Tt=_`var(--primaryCTAFill, #194880)`,de=_`var(--primaryCTAFillRGB, 25, 72, 128)`,Nt=_`var(--primaryCTABorder, #c5d1df)`,Rt=_`var(--primaryErrorCTAFill, #d9534f)`,ae=_`var(--primaryErrorCTAFillRGB, 229, 28, 38)`,Pt=_`var(--primaryErrorCTABorder, #d43f3a)`,Bt=_`var(--secondaryCTAFill, #333)`,ue=_`var(--secondaryCTAFillRGB, 51, 51, 51)`,Ut=_`var(--primaryCTABorder, #979797)`,Mt=_`#ee8950`,Ot=_`#ec7939`,It=_`
  .ia-button {
    height: 3.5rem;
    min-height: 3rem;
    cursor: pointer;
    color: ${Ie};
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
    outline-color: ${Ie};
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
    background-color: ${Ht};
    border: 1px solid ${kt};
  }
  .ia-button.transparent {
    background-color: transparent;
  }
  .ia-button.warning {
    background-color: ${Mt}
    border-color: ${Ot};
  }

  .ia-button.primary {
    background-color: ${Tt};
    border-color: ${Nt};
  }
  .ia-button.primary:hover {
    background-color: rgba(${de}, 0.9);
  }
  .ia-button.primary:focus-visible {
    background-color: rgba(${de}, 0.8);
  }
  .ia-button.primary:active {
    background-color: rgba(${de}, 0.7);
  }

  .ia-button.danger {
    background-color: ${Rt};
    border-color: ${Pt};
  }
  .ia-button.danger:hover {
    background-color: rgba(${ae}, 0.9);
  }
  .ia-button.danger:focus-visible {
    background-color: rgba(${ae}, 0.8);
  }
  .ia-button.danger:active {
    background-color: rgba(${ae}, 0.7);
  }

  .ia-button.dark {
    background-color: ${Bt};
    border-color: ${Ut};
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
`;let A=class extends N{constructor(){super(...arguments),this.baseHost="https://archive.org",this.endpointPath="/write-review.php",this.currentStars=0}render(){return g`<form action="${this.baseHost}${this.endpointPath}">
      ${this.errors?g`<div class="errors">${this.errors.join(" ")}</div>`:f}
      ${this.starsInputTemplate} ${this.subjectInputTemplate}
      ${this.bodyInputTemplate}
      ${this.identifier?g`<input
            type="hidden"
            name="identifier"
            .value=${this.identifier}
          />`:f}
      ${this.token?g`<input
            type="hidden"
            name="field_reviewtoken"
            .value=${this.token}
          />`:f}
      ${this.actionButtonsTemplate}
    </form>`}updated(e){var t;e.has("oldReview")&&(!((t=this.oldReview)===null||t===void 0)&&t.stars)&&(this.currentStars=this.oldReview.stars)}get starsInputTemplate(){return g`
      <div class="form-heading">
        <label for="stars-field">Rating (optional)</label>
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
          Clear
        </button>
      </div>
    `}get subjectInputTemplate(){var e,t;return g`<div class="form-heading">
        <label for="subject-input">Subject</label>
      </div>
      <input
        type="text"
        name="field_reviewtitle"
        id="subject-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewtitle)!==null&&t!==void 0?t:""}
        required
      />`}get bodyInputTemplate(){var e,t;return g`<div class="form-heading">
        <label for="body-input">Review</label>
      </div>
      <textarea
        name="field_reviewbody"
        id="body-input"
        .value=${(t=(e=this.oldReview)===null||e===void 0?void 0:e.reviewbody)!==null&&t!==void 0?t:""}
        rows="10"
        cols="50"
        required
      ></textarea>`}get actionButtonsTemplate(){return g`<div class="action-btns">
      ${this.identifier?g` <a
            class="ia-button dark"
            href="${this.baseHost}/details/${this.identifier}"
            data-testid="cancel-btn"
          >
            Cancel
          </a>`:f}

      <button
        type="submit"
        class="ia-button primary"
        name="submit"
        value="Submit review"
      >
        Submit review
      </button>
    </div>`}renderStar(e){const t=e===this.currentStars,n=`Rate ${e>1?`${e} stars`:"1 star"}`;return g`
      <button
        class=${`star star-${e}`}
        title=${t?"Clear rating":`${n}`}
        @click=${i=>this.handleStarClicked(i,e)}
      >
        ${e<=this.currentStars?Ct:xt}
      </button>
    `}handleStarClicked(e,t){e.preventDefault(),this.setStars(t)}handleClearBtnClicked(e){e.preventDefault(),this.currentStars=0}setStars(e){this.currentStars=e===this.currentStars?0:e}static get styles(){return[It,_`
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
      `]}};y([k({type:String})],A.prototype,"identifier",void 0);y([k({type:String})],A.prototype,"token",void 0);y([k({type:String})],A.prototype,"baseHost",void 0);y([k({type:String})],A.prototype,"endpointPath",void 0);y([k({type:Object})],A.prototype,"oldReview",void 0);y([k({type:Array})],A.prototype,"errors",void 0);y([Et()],A.prototype,"currentStars",void 0);A=y([et("ia-review-form")],A);const Lt={rawValue:{value:"test"},stars:3,reviewtitle:"What a cool book!",reviewbody:"I loved it.",reviewer:"foo-bar",reviewdate:new Date("2025-03-03 18:13:36"),createdate:new Date("2025-02-25 14:28:19")};let _e=class extends N{render(){return g`
      <div class="container">
        <ia-review-form
          .identifier=${"goody"}
          .oldReview=${Lt}
        ></ia-review-form>
      </div>
    `}};_e.styles=_`
    .container {
      max-width: 750px;
      margin: 0 auto;
    }
  `;_e=y([et("app-root")],_e);
