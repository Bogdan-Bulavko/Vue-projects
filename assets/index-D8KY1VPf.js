(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},zr=[],Gt=()=>{},c_=()=>!1,zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xl=t=>t.startsWith("onUpdate:"),ze=Object.assign,Zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},u_=Object.prototype.hasOwnProperty,Ie=(t,e)=>u_.call(t,e),ie=Array.isArray,Gr=t=>Go(t)==="[object Map]",Xd=t=>Go(t)==="[object Set]",ue=t=>typeof t=="function",Be=t=>typeof t=="string",Zn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Zd=t=>(xe(t)||ue(t))&&ue(t.then)&&ue(t.catch),ef=Object.prototype.toString,Go=t=>ef.call(t),h_=t=>Go(t).slice(8,-1),tf=t=>Go(t)==="[object Object]",ec=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},d_=/-(\w)/g,zn=Qo(t=>t.replace(d_,(e,n)=>n?n.toUpperCase():"")),f_=/\B([A-Z])/g,kr=Qo(t=>t.replace(f_,"-$1").toLowerCase()),nf=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),qa=Qo(t=>t?`on${nf(t)}`:""),$n=(t,e)=>!Object.is(t,e),io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},rf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},p_=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Xu;const Jo=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?y_(r):tc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||xe(t))return t}const g_=/;(?![^(]*\))/g,m_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function y_(t){const e={};return t.replace(__,"").split(g_).forEach(n=>{if(n){const r=n.split(m_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function nc(t){let e="";if(Be(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=nc(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const v_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",E_=Yl(v_);function sf(t){return!!t||t===""}const of=t=>!!(t&&t.__v_isRef===!0),st=t=>Be(t)?t:t==null?"":ie(t)||xe(t)&&(t.toString===ef||!ue(t.toString))?of(t)?st(t.value):JSON.stringify(t,af,2):String(t),af=(t,e)=>of(e)?af(t,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ha(r,i)+" =>"]=s,n),{})}:Xd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ha(n))}:Zn(e)?Ha(e):xe(e)&&!ie(e)&&!tf(e)?String(e):e,Ha=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class lf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){++this._on===1&&(this.prevScope=dt,dt=this)}off(){this._on>0&&--this._on===0&&(dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cf(t){return new lf(t)}function uf(){return dt}function T_(t,e=!1){dt&&dt.cleanups.push(t)}let ke;const Wa=new WeakSet;class hf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ff(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zu(this),pf(this);const e=ke,n=Ft;ke=this,Ft=!0;try{return this.fn()}finally{gf(this),ke=e,Ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ic(e);this.deps=this.depsTail=void 0,Zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let df=0,js,qs;function ff(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=js,js=t}function rc(){df++}function sc(){if(--df>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;js;){let e=js;for(js=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ic(r),w_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function gl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ti)||(t.globalVersion=ti,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!gl(t))))return;t.flags|=2;const e=t.dep,n=ke,r=Ft;ke=t,Ft=!0;try{pf(t);const s=t.fn(t._value);(e.version===0||$n(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Ft=r,gf(t),t.flags&=-3}}function ic(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ic(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function w_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ft=!0;const _f=[];function _n(){_f.push(Ft),Ft=!1}function yn(){const t=_f.pop();Ft=t===void 0?!0:t}function Zu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let ti=0;class I_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!Ft||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new I_(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,yf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,ti++,this.notify(e)}notify(e){rc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{sc()}}}function yf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vo=new WeakMap,gr=Symbol(""),ml=Symbol(""),ni=Symbol("");function pt(t,e,n){if(Ft&&ke){let r=vo.get(t);r||vo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new oc),s.map=r,s.key=n),s.track()}}function un(t,e,n,r,s,i){const o=vo.get(t);if(!o){ti++;return}const l=c=>{c&&c.trigger()};if(rc(),e==="clear")o.forEach(l);else{const c=ie(t),h=c&&ec(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,y)=>{(y==="length"||y===ni||!Zn(y)&&y>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(ni)),e){case"add":c?h&&l(o.get("length")):(l(o.get(gr)),Gr(t)&&l(o.get(ml)));break;case"delete":c||(l(o.get(gr)),Gr(t)&&l(o.get(ml)));break;case"set":Gr(t)&&l(o.get(gr));break}}sc()}function A_(t,e){const n=vo.get(t);return n&&n.get(e)}function Ur(t){const e=me(t);return e===t?e:(pt(e,"iterate",ni),Ot(t)?e:e.map(tt))}function Yo(t){return pt(t=me(t),"iterate",ni),t}const b_={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,tt)},concat(...t){return Ur(this).concat(...t.map(e=>ie(e)?Ur(e):e))},entries(){return Ka(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return ln(this,"every",t,e,void 0,arguments)},filter(t,e){return ln(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return ln(this,"find",t,e,tt,arguments)},findIndex(t,e){return ln(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ln(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return ln(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ln(this,"forEach",t,e,void 0,arguments)},includes(...t){return za(this,"includes",t)},indexOf(...t){return za(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return za(this,"lastIndexOf",t)},map(t,e){return ln(this,"map",t,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...t){return Ds(this,"push",t)},reduce(t,...e){return eh(this,"reduce",t,e)},reduceRight(t,...e){return eh(this,"reduceRight",t,e)},shift(){return Ds(this,"shift")},some(t,e){return ln(this,"some",t,e,void 0,arguments)},splice(...t){return Ds(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return Ds(this,"unshift",t)},values(){return Ka(this,"values",tt)}};function Ka(t,e,n){const r=Yo(t),s=r[e]();return r!==t&&!Ot(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const R_=Array.prototype;function ln(t,e,n,r,s,i){const o=Yo(t),l=o!==t&&!Ot(t),c=o[e];if(c!==R_[e]){const p=c.apply(t,i);return l?tt(p):p}let h=n;o!==t&&(l?h=function(p,y){return n.call(this,tt(p),y,t)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function eh(t,e,n,r){const s=Yo(t);let i=n;return s!==t&&(Ot(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,tt(l),c,t)}),s[e](i,...r)}function za(t,e,n){const r=me(t);pt(r,"iterate",ni);const s=r[e](...n);return(s===-1||s===!1)&&cc(n[0])?(n[0]=me(n[0]),r[e](...n)):s}function Ds(t,e,n=[]){_n(),rc();const r=me(t)[e].apply(t,n);return sc(),yn(),r}const S_=Yl("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function P_(t){Zn(t)||(t=String(t));const e=me(this);return pt(e,"has",t),e.hasOwnProperty(t)}class Ef{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?F_:Af:i?If:wf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=b_[n]))return c;if(n==="hasOwnProperty")return P_}const l=Reflect.get(e,n,Ne(e)?e:r);return(Zn(n)?vf.has(n):S_(n))||(s||pt(e,"get",n),i)?l:Ne(l)?o&&ec(n)?l:l.value:xe(l)?s?bf(l):Xo(l):l}}class Tf extends Ef{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Gn(i);if(!Ot(r)&&!Gn(r)&&(i=me(i),r=me(r)),!ie(e)&&Ne(i)&&!Ne(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&ec(n)?Number(n)<e.length:Ie(e,n),l=Reflect.set(e,n,r,Ne(e)?e:s);return e===me(s)&&(o?$n(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),l}deleteProperty(e,n){const r=Ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zn(n)||!vf.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",ie(e)?"length":gr),Reflect.ownKeys(e)}}class C_ extends Ef{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const k_=new Tf,x_=new C_,D_=new Tf(!0);const _l=t=>t,Gi=t=>Reflect.getPrototypeOf(t);function N_(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=Gr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?_l:e?Eo:tt;return!e&&pt(i,"iterate",c?ml:gr),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function Qi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function O_(t,e){const n={get(s){const i=this.__v_raw,o=me(i),l=me(s);t||($n(s,l)&&pt(o,"get",s),pt(o,"get",l));const{has:c}=Gi(o),h=e?_l:t?Eo:tt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(me(s),"iterate",gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=me(i),l=me(s);return t||($n(s,l)&&pt(o,"has",s),pt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=me(l),h=e?_l:t?Eo:tt;return!t&&pt(c,"iterate",gr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return ze(n,t?{add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear")}:{add(s){!e&&!Ot(s)&&!Gn(s)&&(s=me(s));const i=me(this);return Gi(i).has.call(i,s)||(i.add(s),un(i,"add",s,s)),this},set(s,i){!e&&!Ot(i)&&!Gn(i)&&(i=me(i));const o=me(this),{has:l,get:c}=Gi(o);let h=l.call(o,s);h||(s=me(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?$n(i,d)&&un(o,"set",s,i):un(o,"add",s,i),this},delete(s){const i=me(this),{has:o,get:l}=Gi(i);let c=o.call(i,s);c||(s=me(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&un(i,"delete",s,void 0),h},clear(){const s=me(this),i=s.size!==0,o=s.clear();return i&&un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=N_(s,t,e)}),n}function ac(t,e){const n=O_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ie(n,s)&&s in r?n:r,s,i)}const V_={get:ac(!1,!1)},L_={get:ac(!1,!0)},M_={get:ac(!0,!1)};const wf=new WeakMap,If=new WeakMap,Af=new WeakMap,F_=new WeakMap;function U_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:U_(h_(t))}function Xo(t){return Gn(t)?t:lc(t,!1,k_,V_,wf)}function $_(t){return lc(t,!1,D_,L_,If)}function bf(t){return lc(t,!0,x_,M_,Af)}function lc(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=B_(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function gn(t){return Gn(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Gn(t){return!!(t&&t.__v_isReadonly)}function Ot(t){return!!(t&&t.__v_isShallow)}function cc(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function uc(t){return!Ie(t,"__v_skip")&&Object.isExtensible(t)&&rf(t,"__v_skip",!0),t}const tt=t=>xe(t)?Xo(t):t,Eo=t=>xe(t)?bf(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function He(t){return j_(t,!1)}function j_(t,e){return Ne(t)?t:new q_(t,e)}class q_{constructor(e,n){this.dep=new oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ot(e)||Gn(e);e=r?e:me(e),$n(e,n)&&(this._rawValue=e,this._value=r?e:tt(e),this.dep.trigger())}}function N(t){return Ne(t)?t.value:t}const H_={get:(t,e,n)=>e==="__v_raw"?t:N(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Rf(t){return gn(t)?t:new Proxy(t,H_)}function W_(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=Sf(t,n);return e}class K_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return A_(me(this._object),this._key)}}class z_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function G_(t,e,n){return Ne(t)?t:ue(t)?new z_(t):xe(t)&&arguments.length>1?Sf(t,e,n):He(t)}function Sf(t,e,n){const r=t[e];return Ne(r)?r:new K_(t,e,n)}class Q_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return ff(this,!0),!0}get value(){const e=this.dep.track();return mf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function J_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new Q_(r,s,n)}const Ji={},To=new WeakMap;let hr;function Y_(t,e=!1,n=hr){if(n){let r=To.get(n);r||To.set(n,r=[]),r.push(t)}}function X_(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=x=>s?x:Ot(x)||s===!1||s===0?hn(x,1):hn(x);let d,p,y,R,k=!1,O=!1;if(Ne(t)?(p=()=>t.value,k=Ot(t)):gn(t)?(p=()=>h(t),k=!0):ie(t)?(O=!0,k=t.some(x=>gn(x)||Ot(x)),p=()=>t.map(x=>{if(Ne(x))return x.value;if(gn(x))return h(x);if(ue(x))return c?c(x,2):x()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){_n();try{y()}finally{yn()}}const x=hr;hr=d;try{return c?c(t,3,[R]):t(R)}finally{hr=x}}:p=Gt,e&&s){const x=p,Q=s===!0?1/0:s;p=()=>hn(x(),Q)}const V=uf(),G=()=>{d.stop(),V&&V.active&&Zl(V.effects,d)};if(i&&e){const x=e;e=(...Q)=>{x(...Q),G()}}let J=O?new Array(t.length).fill(Ji):Ji;const Y=x=>{if(!(!(d.flags&1)||!d.dirty&&!x))if(e){const Q=d.run();if(s||k||(O?Q.some((j,I)=>$n(j,J[I])):$n(Q,J))){y&&y();const j=hr;hr=d;try{const I=[Q,J===Ji?void 0:O&&J[0]===Ji?[]:J,R];J=Q,c?c(e,3,I):e(...I)}finally{hr=j}}}else d.run()};return l&&l(Y),d=new hf(p),d.scheduler=o?()=>o(Y,!1):Y,R=x=>Y_(x,!1,d),y=d.onStop=()=>{const x=To.get(d);if(x){if(c)c(x,4);else for(const Q of x)Q();To.delete(d)}},e?r?Y(!0):J=d.run():o?o(Y.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function hn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))hn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)hn(t[r],e,n);else if(Xd(t)||Gr(t))t.forEach(r=>{hn(r,e,n)});else if(tf(t)){for(const r in t)hn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&hn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gi(t,e,n,r){try{return r?t(...r):t()}catch(s){Zo(s,e,n)}}function Bt(t,e,n,r){if(ue(t)){const s=gi(t,e,n,r);return s&&Zd(s)&&s.catch(i=>{Zo(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}}function Zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){_n(),gi(i,null,10,[t,c,h]),yn();return}}Z_(t,n,s,r,o)}function Z_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let Wt=-1;const Qr=[];let Nn=null,$r=0;const Pf=Promise.resolve();let wo=null;function Cf(t){const e=wo||Pf;return t?e.then(this?t.bind(this):t):e}function ey(t){let e=Wt+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function hc(t){if(!(t.flags&1)){const e=ri(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=ri(n)?Tt.push(t):Tt.splice(ey(e),0,t),t.flags|=1,kf()}}function kf(){wo||(wo=Pf.then(Df))}function ty(t){ie(t)?Qr.push(...t):Nn&&t.id===-1?Nn.splice($r+1,0,t):t.flags&1||(Qr.push(t),t.flags|=1),kf()}function th(t,e,n=Wt+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xf(t){if(Qr.length){const e=[...new Set(Qr)].sort((n,r)=>ri(n)-ri(r));if(Qr.length=0,Nn){Nn.push(...e);return}for(Nn=e,$r=0;$r<Nn.length;$r++){const n=Nn[$r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,$r=0}}const ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Df(t){try{for(Wt=0;Wt<Tt.length;Wt++){const e=Tt[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<Tt.length;Wt++){const e=Tt[Wt];e&&(e.flags&=-2)}Wt=-1,Tt.length=0,xf(),wo=null,(Tt.length||Qr.length)&&Df()}}let bt=null,Nf=null;function Io(t){const e=bt;return bt=t,Nf=t&&t.type.__scopeId||null,e}function mr(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hh(-1);const i=Io(e);let o;try{o=t(...s)}finally{Io(i),r._d&&hh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _r(t,e){if(bt===null)return t;const n=ia(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Pe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&hn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(_n(),Bt(c,n,8,[t.el,l,t,e]),yn())}}const ny=Symbol("_vte"),Of=t=>t.__isTeleport,On=Symbol("_leaveCb"),Yi=Symbol("_enterCb");function Vf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return na(()=>{t.isMounted=!0}),qf(()=>{t.isUnmounting=!0}),t}const Nt=[Function,Array],Lf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},Mf=t=>{const e=t.subTree;return e.component?Mf(e.component):e},ry={name:"BaseTransition",props:Lf,setup(t,{slots:e}){const n=hp(),r=Vf();return()=>{const s=e.default&&dc(e.default(),!0);if(!s||!s.length)return;const i=Ff(s),o=me(t),{mode:l}=o;if(r.isLeaving)return Ga(i);const c=nh(i);if(!c)return Ga(i);let h=si(c,o,r,n,p=>h=p);c.type!==It&&Tr(c,h);let d=n.subTree&&nh(n.subTree);if(d&&d.type!==It&&!fr(c,d)&&Mf(n).type!==It){let p=si(d,o,r,n);if(Tr(d,p),l==="out-in"&&c.type!==It)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Ga(i);l==="in-out"&&c.type!==It?p.delayLeave=(y,R,k)=>{const O=Uf(r,d);O[String(d.key)]=d,y[On]=()=>{R(),y[On]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{k(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Ff(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==It){e=n;break}}return e}const sy=ry;function Uf(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function si(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:y,onLeave:R,onAfterLeave:k,onLeaveCancelled:O,onBeforeAppear:V,onAppear:G,onAfterAppear:J,onAppearCancelled:Y}=e,x=String(t.key),Q=Uf(n,t),j=(m,E)=>{m&&Bt(m,r,9,E)},I=(m,E)=>{const A=E[1];j(m,E),ie(m)?m.every(T=>T.length<=1)&&A():m.length<=1&&A()},_={mode:o,persisted:l,beforeEnter(m){let E=c;if(!n.isMounted)if(i)E=V||c;else return;m[On]&&m[On](!0);const A=Q[x];A&&fr(t,A)&&A.el[On]&&A.el[On](),j(E,[m])},enter(m){let E=h,A=d,T=p;if(!n.isMounted)if(i)E=G||h,A=J||d,T=Y||p;else return;let v=!1;const be=m[Yi]=Je=>{v||(v=!0,Je?j(T,[m]):j(A,[m]),_.delayedLeave&&_.delayedLeave(),m[Yi]=void 0)};E?I(E,[m,be]):be()},leave(m,E){const A=String(t.key);if(m[Yi]&&m[Yi](!0),n.isUnmounting)return E();j(y,[m]);let T=!1;const v=m[On]=be=>{T||(T=!0,E(),be?j(O,[m]):j(k,[m]),m[On]=void 0,Q[A]===t&&delete Q[A])};Q[A]=t,R?I(R,[m,v]):v()},clone(m){const E=si(m,e,n,r,s);return s&&s(E),E}};return _}function Ga(t){if(ea(t))return t=Qn(t),t.children=null,t}function nh(t){if(!ea(t))return Of(t.type)&&t.children?Ff(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Tr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Tr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Oe?(o.patchFlag&128&&s++,r=r.concat(dc(o.children,e,l))):(e||o.type!==It)&&r.push(l!=null?Qn(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ge(t,e){return ue(t)?ze({name:t.name},e,{setup:t}):t}function Bf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ao(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,O)=>Ao(k,e&&(ie(e)?e[O]:e),n,r,s));return}if(Hs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ia(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,y=me(p),R=p===Pe?()=>!1:k=>Ie(y,k);if(h!=null&&h!==c&&(Be(h)?(d[h]=null,R(h)&&(p[h]=null)):Ne(h)&&(h.value=null)),ue(c))gi(c,l,12,[o,d]);else{const k=Be(c),O=Ne(c);if(k||O){const V=()=>{if(t.f){const G=k?R(c)?p[c]:d[c]:c.value;s?ie(G)&&Zl(G,i):ie(G)?G.includes(i)||G.push(i):k?(d[c]=[i],R(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=o,R(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(V.id=-1,St(V,n)):V()}}}Jo().requestIdleCallback;Jo().cancelIdleCallback;const Hs=t=>!!t.type.__asyncLoader,ea=t=>t.type.__isKeepAlive;function iy(t,e){$f(t,"a",e)}function oy(t,e){$f(t,"da",e)}function $f(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ea(s.parent.vnode)&&ay(r,e,n,s),s=s.parent}}function ay(t,e,n,r){const s=ta(e,t,r,!0);Hf(()=>{Zl(r[e],s)},n)}function ta(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{_n();const l=mi(n),c=Bt(e,n,t,o);return l(),yn(),c});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=nt)=>{(!oi||t==="sp")&&ta(t,(...r)=>e(...r),n)},ly=In("bm"),na=In("m"),cy=In("bu"),jf=In("u"),qf=In("bum"),Hf=In("um"),uy=In("sp"),hy=In("rtg"),dy=In("rtc");function fy(t,e=nt){ta("ec",t,e)}const py=Symbol.for("v-ndc");function es(t,e,n,r){let s;const i=n,o=ie(t);if(o||Be(t)){const l=o&&gn(t);let c=!1,h=!1;l&&(c=!Ot(t),h=Gn(t),t=Yo(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?Eo(tt(t[d])):tt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const yl=t=>t?dp(t)?ia(t):yl(t.parent):null,Ws=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yl(t.parent),$root:t=>yl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Kf(t),$forceUpdate:t=>t.f||(t.f=()=>{hc(t.update)}),$nextTick:t=>t.n||(t.n=Cf.bind(t.proxy)),$watch:t=>My.bind(t)}),Qa=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Ie(t,e),gy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const R=o[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qa(r,e))return o[e]=1,r[e];if(s!==Pe&&Ie(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ie(h,e))return o[e]=3,i[e];if(n!==Pe&&Ie(n,e))return o[e]=4,n[e];vl&&(o[e]=0)}}const d=Ws[e];let p,y;if(d)return e==="$attrs"&&pt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Ie(n,e))return o[e]=4,n[e];if(y=c.config.globalProperties,Ie(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qa(s,e)?(s[e]=n,!0):r!==Pe&&Ie(r,e)?(r[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Pe&&Ie(t,o)||Qa(e,o)||(l=i[0])&&Ie(l,o)||Ie(r,o)||Ie(Ws,o)||Ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vl=!0;function my(t){const e=Kf(t),n=t.proxy,r=t.ctx;vl=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:R,updated:k,activated:O,deactivated:V,beforeDestroy:G,beforeUnmount:J,destroyed:Y,unmounted:x,render:Q,renderTracked:j,renderTriggered:I,errorCaptured:_,serverPrefetch:m,expose:E,inheritAttrs:A,components:T,directives:v,filters:be}=e;if(h&&_y(h,r,null),o)for(const de in o){const Ee=o[de];ue(Ee)&&(r[de]=Ee.bind(n))}if(s){const de=s.call(n,n);xe(de)&&(t.data=Xo(de))}if(vl=!0,i)for(const de in i){const Ee=i[de],Lt=ue(Ee)?Ee.bind(n,n):ue(Ee.get)?Ee.get.bind(n,n):Gt,tr=!ue(Ee)&&ue(Ee.set)?Ee.set.bind(n):Gt,rn=wr({get:Lt,set:tr});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>rn.value,set:je=>rn.value=je})}if(l)for(const de in l)Wf(l[de],r,n,de);if(c){const de=ue(c)?c.call(n):c;Reflect.ownKeys(de).forEach(Ee=>{Iy(Ee,de[Ee])})}d&&sh(d,t,"c");function Ce(de,Ee){ie(Ee)?Ee.forEach(Lt=>de(Lt.bind(n))):Ee&&de(Ee.bind(n))}if(Ce(ly,p),Ce(na,y),Ce(cy,R),Ce(jf,k),Ce(iy,O),Ce(oy,V),Ce(fy,_),Ce(dy,j),Ce(hy,I),Ce(qf,J),Ce(Hf,x),Ce(uy,m),ie(E))if(E.length){const de=t.exposed||(t.exposed={});E.forEach(Ee=>{Object.defineProperty(de,Ee,{get:()=>n[Ee],set:Lt=>n[Ee]=Lt})})}else t.exposed||(t.exposed={});Q&&t.render===Gt&&(t.render=Q),A!=null&&(t.inheritAttrs=A),T&&(t.components=T),v&&(t.directives=v),m&&Bf(t)}function _y(t,e,n=Gt){ie(t)&&(t=El(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Ks(s.from||r,s.default,!0):i=Ks(s.from||r):i=Ks(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sh(t,e,n){Bt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wf(t,e,n,r){let s=r.includes(".")?ip(n,r):()=>n[r];if(Be(t)){const i=e[t];ue(i)&&zs(s,i)}else if(ue(t))zs(s,t.bind(n));else if(xe(t))if(ie(t))t.forEach(i=>Wf(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&zs(s,i,t)}}function Kf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>bo(c,h,o,!0)),bo(c,e,o)),xe(e)&&i.set(e,c),c}function bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&bo(t,i,n,!0),s&&s.forEach(o=>bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=yy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yy={data:ih,props:oh,emits:oh,methods:Vs,computed:Vs,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Vs,directives:Vs,watch:Ey,provide:ih,inject:vy};function ih(t,e){return e?t?function(){return ze(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function vy(t,e){return Vs(El(t),El(e))}function El(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?ze(Object.create(null),t,e):e}function oh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ze(Object.create(null),rh(t),rh(e??{})):e}function Ey(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=yt(t[r],e[r]);return n}function zf(){return{app:null,config:{isNativeTag:c_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ty=0;function wy(t,e){return function(r,s=null){ue(r)||(r=ze({},r)),s!=null&&!xe(s)&&(s=null);const i=zf(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Ty++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ue(d.install)?(o.add(d),d.install(h,...p)):ue(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!c){const R=h._ceVNode||Re(r,s);return R.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(R,d,y),c=!0,h._container=d,d.__vue_app__=h,ia(R.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Bt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=yr;yr=h;try{return d()}finally{yr=p}}};return h}}let yr=null;function Iy(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function Ks(t,e,n=!1){const r=nt||bt;if(r||yr){let s=yr?yr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}function Ay(){return!!(nt||bt||yr)}const Gf={},Qf=()=>Object.create(Gf),Jf=t=>Object.getPrototypeOf(t)===Gf;function by(t,e,n,r=!1){const s={},i=Qf();t.propsDefaults=Object.create(null),Yf(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ry(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=me(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(ra(t.emitsOptions,y))continue;const R=e[y];if(c)if(Ie(i,y))R!==i[y]&&(i[y]=R,h=!0);else{const k=zn(y);s[k]=Tl(c,l,k,R,t,!1)}else R!==i[y]&&(i[y]=R,h=!0)}}}else{Yf(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ie(e,p)&&((d=kr(p))===p||!Ie(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Tl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&un(t.attrs,"set","")}function Yf(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if($s(c))continue;const h=e[c];let d;s&&Ie(s,d=zn(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ra(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=me(n),h=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Tl(s,c,p,h[p],t,!Ie(h,p))}}return o}function Tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ie(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=mi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===kr(n))&&(r=!0))}return r}const Sy=new WeakMap;function Xf(t,e,n=!1){const r=n?Sy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[y,R]=Xf(p,e,!0);ze(o,y),R&&l.push(...R)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return xe(t)&&r.set(t,zr),zr;if(ie(i))for(let d=0;d<i.length;d++){const p=zn(i[d]);ah(p)&&(o[p]=Pe)}else if(i)for(const d in i){const p=zn(d);if(ah(p)){const y=i[d],R=o[p]=ie(y)||ue(y)?{type:y}:ze({},y),k=R.type;let O=!1,V=!0;if(ie(k))for(let G=0;G<k.length;++G){const J=k[G],Y=ue(J)&&J.name;if(Y==="Boolean"){O=!0;break}else Y==="String"&&(V=!1)}else O=ue(k)&&k.name==="Boolean";R[0]=O,R[1]=V,(O||Ie(R,"default"))&&l.push(p)}}const h=[o,l];return xe(t)&&r.set(t,h),h}function ah(t){return t[0]!=="$"&&!$s(t)}const fc=t=>t[0]==="_"||t==="$stable",pc=t=>ie(t)?t.map(Kt):[Kt(t)],Py=(t,e,n)=>{if(e._n)return e;const r=mr((...s)=>pc(e(...s)),n);return r._c=!1,r},Zf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fc(s))continue;const i=t[s];if(ue(i))e[s]=Py(s,i,r);else if(i!=null){const o=pc(i);e[s]=()=>o}}},ep=(t,e)=>{const n=pc(e);t.slots.default=()=>n},tp=(t,e,n)=>{for(const r in e)(n||!fc(r))&&(t[r]=e[r])},Cy=(t,e,n)=>{const r=t.slots=Qf();if(t.vnode.shapeFlag&32){const s=e._;s?(tp(r,e,n),n&&rf(r,"_",s,!0)):Zf(e,r)}else e&&ep(t,e)},ky=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:tp(s,e,n):(i=!e.$stable,Zf(e,s)),o=e}else e&&(ep(t,e),o={default:1});if(i)for(const l in s)!fc(l)&&o[l]==null&&delete s[l]},St=Hy;function xy(t){return Dy(t)}function Dy(t,e){const n=Jo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:R=Gt,insertStaticContent:k}=t,O=(w,b,D,B=null,L=null,U=null,z=void 0,H=null,q=!!b.dynamicChildren)=>{if(w===b)return;w&&!fr(w,b)&&(B=sn(w),je(w,L,U,!0),w=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:$,ref:ne,shapeFlag:K}=b;switch($){case sa:V(w,b,D,B);break;case It:G(w,b,D,B);break;case oo:w==null&&J(b,D,B,z);break;case Oe:T(w,b,D,B,L,U,z,H,q);break;default:K&1?Q(w,b,D,B,L,U,z,H,q):K&6?v(w,b,D,B,L,U,z,H,q):(K&64||K&128)&&$.process(w,b,D,B,L,U,z,H,q,jt)}ne!=null&&L&&Ao(ne,w&&w.ref,U,b||w,!b)},V=(w,b,D,B)=>{if(w==null)r(b.el=l(b.children),D,B);else{const L=b.el=w.el;b.children!==w.children&&h(L,b.children)}},G=(w,b,D,B)=>{w==null?r(b.el=c(b.children||""),D,B):b.el=w.el},J=(w,b,D,B)=>{[w.el,w.anchor]=k(w.children,b,D,B,w.el,w.anchor)},Y=({el:w,anchor:b},D,B)=>{let L;for(;w&&w!==b;)L=y(w),r(w,D,B),w=L;r(b,D,B)},x=({el:w,anchor:b})=>{let D;for(;w&&w!==b;)D=y(w),s(w),w=D;s(b)},Q=(w,b,D,B,L,U,z,H,q)=>{b.type==="svg"?z="svg":b.type==="math"&&(z="mathml"),w==null?j(b,D,B,L,U,z,H,q):m(w,b,L,U,z,H,q)},j=(w,b,D,B,L,U,z,H)=>{let q,$;const{props:ne,shapeFlag:K,transition:Z,dirs:oe}=w;if(q=w.el=o(w.type,U,ne&&ne.is,ne),K&8?d(q,w.children):K&16&&_(w.children,q,null,B,L,Ja(w,U),z,H),oe&&lr(w,null,B,"created"),I(q,w,w.scopeId,z,B),ne){for(const fe in ne)fe!=="value"&&!$s(fe)&&i(q,fe,null,ne[fe],U,B);"value"in ne&&i(q,"value",null,ne.value,U),($=ne.onVnodeBeforeMount)&&qt($,B,w)}oe&&lr(w,null,B,"beforeMount");const se=Ny(L,Z);se&&Z.beforeEnter(q),r(q,b,D),(($=ne&&ne.onVnodeMounted)||se||oe)&&St(()=>{$&&qt($,B,w),se&&Z.enter(q),oe&&lr(w,null,B,"mounted")},L)},I=(w,b,D,B,L)=>{if(D&&R(w,D),B)for(let U=0;U<B.length;U++)R(w,B[U]);if(L){let U=L.subTree;if(b===U||ap(U.type)&&(U.ssContent===b||U.ssFallback===b)){const z=L.vnode;I(w,z,z.scopeId,z.slotScopeIds,L.parent)}}},_=(w,b,D,B,L,U,z,H,q=0)=>{for(let $=q;$<w.length;$++){const ne=w[$]=H?Vn(w[$]):Kt(w[$]);O(null,ne,b,D,B,L,U,z,H)}},m=(w,b,D,B,L,U,z)=>{const H=b.el=w.el;let{patchFlag:q,dynamicChildren:$,dirs:ne}=b;q|=w.patchFlag&16;const K=w.props||Pe,Z=b.props||Pe;let oe;if(D&&cr(D,!1),(oe=Z.onVnodeBeforeUpdate)&&qt(oe,D,b,w),ne&&lr(b,w,D,"beforeUpdate"),D&&cr(D,!0),(K.innerHTML&&Z.innerHTML==null||K.textContent&&Z.textContent==null)&&d(H,""),$?E(w.dynamicChildren,$,H,D,B,Ja(b,L),U):z||Ee(w,b,H,null,D,B,Ja(b,L),U,!1),q>0){if(q&16)A(H,K,Z,D,L);else if(q&2&&K.class!==Z.class&&i(H,"class",null,Z.class,L),q&4&&i(H,"style",K.style,Z.style,L),q&8){const se=b.dynamicProps;for(let fe=0;fe<se.length;fe++){const ye=se[fe],at=K[ye],Ye=Z[ye];(Ye!==at||ye==="value")&&i(H,ye,at,Ye,L,D)}}q&1&&w.children!==b.children&&d(H,b.children)}else!z&&$==null&&A(H,K,Z,D,L);((oe=Z.onVnodeUpdated)||ne)&&St(()=>{oe&&qt(oe,D,b,w),ne&&lr(b,w,D,"updated")},B)},E=(w,b,D,B,L,U,z)=>{for(let H=0;H<b.length;H++){const q=w[H],$=b[H],ne=q.el&&(q.type===Oe||!fr(q,$)||q.shapeFlag&198)?p(q.el):D;O(q,$,ne,null,B,L,U,z,!0)}},A=(w,b,D,B,L)=>{if(b!==D){if(b!==Pe)for(const U in b)!$s(U)&&!(U in D)&&i(w,U,b[U],null,L,B);for(const U in D){if($s(U))continue;const z=D[U],H=b[U];z!==H&&U!=="value"&&i(w,U,H,z,L,B)}"value"in D&&i(w,"value",b.value,D.value,L)}},T=(w,b,D,B,L,U,z,H,q)=>{const $=b.el=w?w.el:l(""),ne=b.anchor=w?w.anchor:l("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:oe}=b;oe&&(H=H?H.concat(oe):oe),w==null?(r($,D,B),r(ne,D,B),_(b.children||[],D,ne,L,U,z,H,q)):K>0&&K&64&&Z&&w.dynamicChildren?(E(w.dynamicChildren,Z,D,L,U,z,H),(b.key!=null||L&&b===L.subTree)&&np(w,b,!0)):Ee(w,b,D,ne,L,U,z,H,q)},v=(w,b,D,B,L,U,z,H,q)=>{b.slotScopeIds=H,w==null?b.shapeFlag&512?L.ctx.activate(b,D,B,z,q):be(b,D,B,L,U,z,q):Je(w,b,q)},be=(w,b,D,B,L,U,z)=>{const H=w.component=Yy(w,B,L);if(ea(w)&&(H.ctx.renderer=jt),Xy(H,!1,z),H.asyncDep){if(L&&L.registerDep(H,Ce,z),!w.el){const q=H.subTree=Re(It);G(null,q,b,D)}}else Ce(H,w,b,D,L,U,z)},Je=(w,b,D)=>{const B=b.component=w.component;if(jy(w,b,D))if(B.asyncDep&&!B.asyncResolved){de(B,b,D);return}else B.next=b,B.update();else b.el=w.el,B.vnode=b},Ce=(w,b,D,B,L,U,z)=>{const H=()=>{if(w.isMounted){let{next:K,bu:Z,u:oe,parent:se,vnode:fe}=w;{const lt=rp(w);if(lt){K&&(K.el=fe.el,de(w,K,z)),lt.asyncDep.then(()=>{w.isUnmounted||H()});return}}let ye=K,at;cr(w,!1),K?(K.el=fe.el,de(w,K,z)):K=fe,Z&&io(Z),(at=K.props&&K.props.onVnodeBeforeUpdate)&&qt(at,se,K,fe),cr(w,!0);const Ye=ch(w),xt=w.subTree;w.subTree=Ye,O(xt,Ye,p(xt.el),sn(xt),w,L,U),K.el=Ye.el,ye===null&&qy(w,Ye.el),oe&&St(oe,L),(at=K.props&&K.props.onVnodeUpdated)&&St(()=>qt(at,se,K,fe),L)}else{let K;const{el:Z,props:oe}=b,{bm:se,m:fe,parent:ye,root:at,type:Ye}=w,xt=Hs(b);cr(w,!1),se&&io(se),!xt&&(K=oe&&oe.onVnodeBeforeMount)&&qt(K,ye,b),cr(w,!0);{at.ce&&at.ce._injectChildStyle(Ye);const lt=w.subTree=ch(w);O(null,lt,D,B,w,L,U),b.el=lt.el}if(fe&&St(fe,L),!xt&&(K=oe&&oe.onVnodeMounted)){const lt=b;St(()=>qt(K,ye,lt),L)}(b.shapeFlag&256||ye&&Hs(ye.vnode)&&ye.vnode.shapeFlag&256)&&w.a&&St(w.a,L),w.isMounted=!0,b=D=B=null}};w.scope.on();const q=w.effect=new hf(H);w.scope.off();const $=w.update=q.run.bind(q),ne=w.job=q.runIfDirty.bind(q);ne.i=w,ne.id=w.uid,q.scheduler=()=>hc(ne),cr(w,!0),$()},de=(w,b,D)=>{b.component=w;const B=w.vnode.props;w.vnode=b,w.next=null,Ry(w,b.props,B,D),ky(w,b.children,D),_n(),th(w),yn()},Ee=(w,b,D,B,L,U,z,H,q=!1)=>{const $=w&&w.children,ne=w?w.shapeFlag:0,K=b.children,{patchFlag:Z,shapeFlag:oe}=b;if(Z>0){if(Z&128){tr($,K,D,B,L,U,z,H,q);return}else if(Z&256){Lt($,K,D,B,L,U,z,H,q);return}}oe&8?(ne&16&&rr($,L,U),K!==$&&d(D,K)):ne&16?oe&16?tr($,K,D,B,L,U,z,H,q):rr($,L,U,!0):(ne&8&&d(D,""),oe&16&&_(K,D,B,L,U,z,H,q))},Lt=(w,b,D,B,L,U,z,H,q)=>{w=w||zr,b=b||zr;const $=w.length,ne=b.length,K=Math.min($,ne);let Z;for(Z=0;Z<K;Z++){const oe=b[Z]=q?Vn(b[Z]):Kt(b[Z]);O(w[Z],oe,D,null,L,U,z,H,q)}$>ne?rr(w,L,U,!0,!1,K):_(b,D,B,L,U,z,H,q,K)},tr=(w,b,D,B,L,U,z,H,q)=>{let $=0;const ne=b.length;let K=w.length-1,Z=ne-1;for(;$<=K&&$<=Z;){const oe=w[$],se=b[$]=q?Vn(b[$]):Kt(b[$]);if(fr(oe,se))O(oe,se,D,null,L,U,z,H,q);else break;$++}for(;$<=K&&$<=Z;){const oe=w[K],se=b[Z]=q?Vn(b[Z]):Kt(b[Z]);if(fr(oe,se))O(oe,se,D,null,L,U,z,H,q);else break;K--,Z--}if($>K){if($<=Z){const oe=Z+1,se=oe<ne?b[oe].el:B;for(;$<=Z;)O(null,b[$]=q?Vn(b[$]):Kt(b[$]),D,se,L,U,z,H,q),$++}}else if($>Z)for(;$<=K;)je(w[$],L,U,!0),$++;else{const oe=$,se=$,fe=new Map;for($=se;$<=Z;$++){const Xe=b[$]=q?Vn(b[$]):Kt(b[$]);Xe.key!=null&&fe.set(Xe.key,$)}let ye,at=0;const Ye=Z-se+1;let xt=!1,lt=0;const bn=new Array(Ye);for($=0;$<Ye;$++)bn[$]=0;for($=oe;$<=K;$++){const Xe=w[$];if(at>=Ye){je(Xe,L,U,!0);continue}let Dt;if(Xe.key!=null)Dt=fe.get(Xe.key);else for(ye=se;ye<=Z;ye++)if(bn[ye-se]===0&&fr(Xe,b[ye])){Dt=ye;break}Dt===void 0?je(Xe,L,U,!0):(bn[Dt-se]=$+1,Dt>=lt?lt=Dt:xt=!0,O(Xe,b[Dt],D,null,L,U,z,H,q),at++)}const vs=xt?Oy(bn):zr;for(ye=vs.length-1,$=Ye-1;$>=0;$--){const Xe=se+$,Dt=b[Xe],Di=Xe+1<ne?b[Xe+1].el:B;bn[$]===0?O(null,Dt,D,Di,L,U,z,H,q):xt&&(ye<0||$!==vs[ye]?rn(Dt,D,Di,2):ye--)}}},rn=(w,b,D,B,L=null)=>{const{el:U,type:z,transition:H,children:q,shapeFlag:$}=w;if($&6){rn(w.component.subTree,b,D,B);return}if($&128){w.suspense.move(b,D,B);return}if($&64){z.move(w,b,D,jt);return}if(z===Oe){r(U,b,D);for(let K=0;K<q.length;K++)rn(q[K],b,D,B);r(w.anchor,b,D);return}if(z===oo){Y(w,b,D);return}if(B!==2&&$&1&&H)if(B===0)H.beforeEnter(U),r(U,b,D),St(()=>H.enter(U),L);else{const{leave:K,delayLeave:Z,afterLeave:oe}=H,se=()=>{w.ctx.isUnmounted?s(U):r(U,b,D)},fe=()=>{K(U,()=>{se(),oe&&oe()})};Z?Z(U,se,fe):fe()}else r(U,b,D)},je=(w,b,D,B=!1,L=!1)=>{const{type:U,props:z,ref:H,children:q,dynamicChildren:$,shapeFlag:ne,patchFlag:K,dirs:Z,cacheIndex:oe}=w;if(K===-2&&(L=!1),H!=null&&(_n(),Ao(H,null,D,w,!0),yn()),oe!=null&&(b.renderCache[oe]=void 0),ne&256){b.ctx.deactivate(w);return}const se=ne&1&&Z,fe=!Hs(w);let ye;if(fe&&(ye=z&&z.onVnodeBeforeUnmount)&&qt(ye,b,w),ne&6)nr(w.component,D,B);else{if(ne&128){w.suspense.unmount(D,B);return}se&&lr(w,null,b,"beforeUnmount"),ne&64?w.type.remove(w,b,D,jt,B):$&&!$.hasOnce&&(U!==Oe||K>0&&K&64)?rr($,b,D,!1,!0):(U===Oe&&K&384||!L&&ne&16)&&rr(q,b,D),B&&qe(w)}(fe&&(ye=z&&z.onVnodeUnmounted)||se)&&St(()=>{ye&&qt(ye,b,w),se&&lr(w,null,b,"unmounted")},D)},qe=w=>{const{type:b,el:D,anchor:B,transition:L}=w;if(b===Oe){Sa(D,B);return}if(b===oo){x(w);return}const U=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:H}=L,q=()=>z(D,U);H?H(w.el,U,q):q()}else U()},Sa=(w,b)=>{let D;for(;w!==b;)D=y(w),s(w),w=D;s(b)},nr=(w,b,D)=>{const{bum:B,scope:L,job:U,subTree:z,um:H,m:q,a:$,parent:ne,slots:{__:K}}=w;lh(q),lh($),B&&io(B),ne&&ie(K)&&K.forEach(Z=>{ne.renderCache[Z]=void 0}),L.stop(),U&&(U.flags|=8,je(z,w,b,D)),H&&St(H,b),St(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},rr=(w,b,D,B=!1,L=!1,U=0)=>{for(let z=U;z<w.length;z++)je(w[z],b,D,B,L)},sn=w=>{if(w.shapeFlag&6)return sn(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const b=y(w.anchor||w.el),D=b&&b[ny];return D?y(D):b};let _s=!1;const xi=(w,b,D)=>{w==null?b._vnode&&je(b._vnode,null,null,!0):O(b._vnode||null,w,b,null,null,null,D),b._vnode=w,_s||(_s=!0,th(),xf(),_s=!1)},jt={p:O,um:je,m:rn,r:qe,mt:be,mc:_,pc:Ee,pbc:E,n:sn,o:t};return{render:xi,hydrate:void 0,createApp:wy(xi)}}function Ja({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ny(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function np(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Vn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&np(o,l)),l.type===sa&&(l.el=o.el),l.type===It&&!l.el&&(l.el=o.el)}}function Oy(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function rp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rp(e)}function lh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vy=Symbol.for("v-scx"),Ly=()=>Ks(Vy);function zs(t,e,n){return sp(t,e,n)}function sp(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:o}=n,l=ze({},n),c=e&&r||!e&&i!=="post";let h;if(oi){if(i==="sync"){const R=Ly();h=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=Gt,R.resume=Gt,R.pause=Gt,R}}const d=nt;l.call=(R,k,O)=>Bt(R,d,k,O);let p=!1;i==="post"?l.scheduler=R=>{St(R,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(R,k)=>{k?R():hc(R)}),l.augmentJob=R=>{e&&(R.flags|=4),p&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const y=X_(t,e,l);return oi&&(h?h.push(y):c&&y()),y}function My(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?ip(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=mi(this),l=sp(s,i.bind(r),n);return o(),l}function ip(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Fy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zn(e)}Modifiers`]||t[`${kr(e)}Modifiers`];function Uy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&Fy(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Be(d)?d.trim():d)),o.number&&(s=n.map(pl)));let l,c=r[l=qa(e)]||r[l=qa(zn(e))];!c&&i&&(c=r[l=qa(kr(e))]),c&&Bt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Bt(h,t,6,s)}}function op(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ue(t)){const c=h=>{const d=op(h,e,!0);d&&(l=!0,ze(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):ze(o,i),xe(t)&&r.set(t,o),o)}function ra(t,e){return!t||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,kr(e))||Ie(t,e))}function ch(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:y,setupState:R,ctx:k,inheritAttrs:O}=t,V=Io(t);let G,J;try{if(n.shapeFlag&4){const x=s||r,Q=x;G=Kt(h.call(Q,x,d,p,R,y,k)),J=l}else{const x=e;G=Kt(x.length>1?x(p,{attrs:l,slots:o,emit:c}):x(p,null)),J=e.props?l:By(l)}}catch(x){Gs.length=0,Zo(x,t,1),G=Re(It)}let Y=G;if(J&&O!==!1){const x=Object.keys(J),{shapeFlag:Q}=Y;x.length&&Q&7&&(i&&x.some(Xl)&&(J=$y(J,i)),Y=Qn(Y,J,!1,!0))}return n.dirs&&(Y=Qn(Y,null,!1,!0),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&Tr(Y,n.transition),G=Y,Io(V),G}const By=t=>{let e;for(const n in t)(n==="class"||n==="style"||zo(n))&&((e||(e={}))[n]=t[n]);return e},$y=(t,e)=>{const n={};for(const r in t)(!Xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?uh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(o[y]!==r[y]&&!ra(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?uh(r,o,h):!0:!!o;return!1}function uh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ra(n,i))return!0}return!1}function qy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ap=t=>t.__isSuspense;function Hy(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):ty(t)}const Oe=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),Gs=[];let Pt=null;function ee(t=!1){Gs.push(Pt=t?null:[])}function Wy(){Gs.pop(),Pt=Gs[Gs.length-1]||null}let ii=1;function hh(t,e=!1){ii+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function lp(t){return t.dynamicChildren=ii>0?Pt||zr:null,Wy(),ii>0&&Pt&&Pt.push(t),t}function pe(t,e,n,r,s,i){return lp(P(t,e,n,r,s,i,!0))}function vt(t,e,n,r,s){return lp(Re(t,e,n,r,s,!0))}function Ro(t){return t?t.__v_isVNode===!0:!1}function fr(t,e){return t.type===e.type&&t.key===e.key}const cp=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||Ne(t)||ue(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Oe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cp(e),ref:e&&ao(e),scopeId:Nf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(mc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),ii>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Re=Ky;function Ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===py)&&(t=It),Ro(t)){const l=Qn(t,e,!0);return n&&mc(l,n),ii>0&&!i&&Pt&&(l.shapeFlag&6?Pt[Pt.indexOf(t)]=l:Pt.push(l)),l.patchFlag=-2,l}if(nv(t)&&(t=t.__vccOpts),e){e=zy(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=nc(l)),xe(c)&&(cc(c)&&!ie(c)&&(c=ze({},c)),e.style=tc(c))}const o=Be(t)?1:ap(t)?128:Of(t)?64:xe(t)?4:ue(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function zy(t){return t?cc(t)||Jf(t)?ze({},t):t:null}function Qn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Gy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&cp(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Tr(d,c.clone(d)),d}function gc(t=" ",e=0){return Re(sa,null,t,e)}function up(t,e){const n=Re(oo,null,t);return n.staticCount=e,n}function Et(t="",e=!1){return e?(ee(),vt(It,null,t)):Re(It,null,t)}function Kt(t){return t==null||typeof t=="boolean"?Re(It):ie(t)?Re(Oe,null,t.slice()):Ro(t)?Vn(t):Re(sa,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qn(t)}function mc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Jf(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[gc(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=nc([e.class,r.class]));else if(s==="style")e.style=tc([e.style,r.style]);else if(zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Bt(t,e,7,[n,r])}const Qy=zf();let Jy=0;function Yy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qy,i={uid:Jy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(r,s),emitsOptions:op(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uy.bind(null,i),t.ce&&t.ce(i),i}let nt=null;const hp=()=>nt||bt;let So,wl;{const t=Jo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};So=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),wl=e("__VUE_SSR_SETTERS__",n=>oi=n)}const mi=t=>{const e=nt;return So(t),t.scope.on(),()=>{t.scope.off(),So(e)}},dh=()=>{nt&&nt.scope.off(),So(null)};function dp(t){return t.vnode.shapeFlag&4}let oi=!1;function Xy(t,e=!1,n=!1){e&&wl(e);const{props:r,children:s}=t.vnode,i=dp(t);by(t,r,i,e),Cy(t,s,n||e);const o=i?Zy(t,e):void 0;return e&&wl(!1),o}function Zy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gy);const{setup:r}=n;if(r){_n();const s=t.setupContext=r.length>1?tv(t):null,i=mi(t),o=gi(r,t,0,[t.props,s]),l=Zd(o);if(yn(),i(),(l||t.sp)&&!Hs(t)&&Bf(t),l){if(o.then(dh,dh),e)return o.then(c=>{fh(t,c)}).catch(c=>{Zo(c,t,0)});t.asyncDep=o}else fh(t,o)}else fp(t)}function fh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Rf(e)),fp(t)}function fp(t,e,n){const r=t.type;t.render||(t.render=r.render||Gt);{const s=mi(t);_n();try{my(t)}finally{yn(),s()}}}const ev={get(t,e){return pt(t,"get",""),t[e]}};function tv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ev),slots:t.slots,emit:t.emit,expose:e}}function ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rf(uc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}})):t.proxy}function nv(t){return ue(t)&&"__vccOpts"in t}const wr=(t,e)=>J_(t,e,oi);function rv(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ie(e)?Ro(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ro(n)&&(n=[n]),Re(t,e,n))}const sv="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Il;const ph=typeof window<"u"&&window.trustedTypes;if(ph)try{Il=ph.createPolicy("vue",{createHTML:t=>t})}catch{}const pp=Il?t=>Il.createHTML(t):t=>t,iv="http://www.w3.org/2000/svg",ov="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,gh=cn&&cn.createElement("template"),av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?cn.createElementNS(iv,t):e==="mathml"?cn.createElementNS(ov,t):n?cn.createElement(t,{is:n}):cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gh.innerHTML=pp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=gh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cn="transition",Ns="animation",ts=Symbol("_vtc"),gp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mp=ze({},Lf,gp),lv=t=>(t.displayName="Transition",t.props=mp,t),mh=lv((t,{slots:e})=>rv(sy,_p(t),e)),ur=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},_h=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function _p(t){const e={};for(const T in t)T in gp||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=t,k=cv(s),O=k&&k[0],V=k&&k[1],{onBeforeEnter:G,onEnter:J,onEnterCancelled:Y,onLeave:x,onLeaveCancelled:Q,onBeforeAppear:j=G,onAppear:I=J,onAppearCancelled:_=Y}=e,m=(T,v,be,Je)=>{T._enterCancelled=Je,xn(T,v?d:l),xn(T,v?h:o),be&&be()},E=(T,v)=>{T._isLeaving=!1,xn(T,p),xn(T,R),xn(T,y),v&&v()},A=T=>(v,be)=>{const Je=T?I:J,Ce=()=>m(v,T,be);ur(Je,[v,Ce]),yh(()=>{xn(v,T?c:i),Ht(v,T?d:l),_h(Je)||vh(v,r,O,Ce)})};return ze(e,{onBeforeEnter(T){ur(G,[T]),Ht(T,i),Ht(T,o)},onBeforeAppear(T){ur(j,[T]),Ht(T,c),Ht(T,h)},onEnter:A(!1),onAppear:A(!0),onLeave(T,v){T._isLeaving=!0;const be=()=>E(T,v);Ht(T,p),T._enterCancelled?(Ht(T,y),Al()):(Al(),Ht(T,y)),yh(()=>{T._isLeaving&&(xn(T,p),Ht(T,R),_h(x)||vh(T,r,V,be))}),ur(x,[T,be])},onEnterCancelled(T){m(T,!1,void 0,!0),ur(Y,[T])},onAppearCancelled(T){m(T,!0,void 0,!0),ur(_,[T])},onLeaveCancelled(T){E(T),ur(Q,[T])}})}function cv(t){if(t==null)return null;if(xe(t))return[Ya(t.enter),Ya(t.leave)];{const e=Ya(t);return[e,e]}}function Ya(t){return p_(t)}function Ht(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ts]||(t[ts]=new Set)).add(e)}function xn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ts];n&&(n.delete(e),n.size||(t[ts]=void 0))}function yh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let uv=0;function vh(t,e,n,r){const s=t._endId=++uv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=yp(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,y),i()},y=R=>{R.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,y)}function yp(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${Cn}Delay`),i=r(`${Cn}Duration`),o=Eh(s,i),l=r(`${Ns}Delay`),c=r(`${Ns}Duration`),h=Eh(l,c);let d=null,p=0,y=0;e===Cn?o>0&&(d=Cn,p=o,y=i.length):e===Ns?h>0&&(d=Ns,p=h,y=c.length):(p=Math.max(o,h),d=p>0?o>h?Cn:Ns:null,y=d?d===Cn?i.length:c.length:0);const R=d===Cn&&/\b(transform|all)(,|$)/.test(r(`${Cn}Property`).toString());return{type:d,timeout:p,propCount:y,hasTransform:R}}function Eh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Th(n)+Th(t[r])))}function Th(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Al(){return document.body.offsetHeight}function hv(t,e,n){const r=t[ts];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wh=Symbol("_vod"),dv=Symbol("_vsh"),fv=Symbol(""),pv=/(^|;)\s*display\s*:/;function gv(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&lo(r,l,"")}else for(const o in e)n[o]==null&&lo(r,o,"");for(const o in n)o==="display"&&(i=!0),lo(r,o,n[o])}else if(s){if(e!==n){const o=r[fv];o&&(n+=";"+o),r.cssText=n,i=pv.test(n)}}else e&&t.removeAttribute("style");wh in t&&(t[wh]=i?r.display:"",t[dv]&&(r.display="none"))}const Ih=/\s*!important$/;function lo(t,e,n){if(ie(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mv(t,e);Ih.test(n)?t.setProperty(kr(r),n.replace(Ih,""),"important"):t[r]=n}}const Ah=["Webkit","Moz","ms"],Xa={};function mv(t,e){const n=Xa[e];if(n)return n;let r=zn(e);if(r!=="filter"&&r in t)return Xa[e]=r;r=nf(r);for(let s=0;s<Ah.length;s++){const i=Ah[s]+r;if(i in t)return Xa[e]=i}return e}const bh="http://www.w3.org/1999/xlink";function Rh(t,e,n,r,s,i=E_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bh,e.slice(6,e.length)):t.setAttributeNS(bh,e,n):n==null||i&&!sf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zn(n)?String(n):n)}function Sh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=sf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function _v(t,e,n,r){t.removeEventListener(e,n,r)}const Ph=Symbol("_vei");function yv(t,e,n,r,s=null){const i=t[Ph]||(t[Ph]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=vv(e);if(r){const h=i[e]=wv(r,s);jr(t,l,h,c)}else o&&(_v(t,l,o,c),i[e]=void 0)}}const Ch=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(Ch.test(t)){e={};let r;for(;r=t.match(Ch);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kr(t.slice(2)),e]}let Za=0;const Ev=Promise.resolve(),Tv=()=>Za||(Ev.then(()=>Za=0),Za=Date.now());function wv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(Iv(r,n.value),e,5,[r])};return n.value=t,n.attached=Tv(),n}function Iv(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Av=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?hv(t,r,o):e==="style"?gv(t,n,r):zo(e)?Xl(e)||yv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bv(t,e,r,o))?(Sh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?Sh(t,zn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rh(t,e,r,o))};function bv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kh(e)&&Be(n)?!1:e in t}const vp=new WeakMap,Ep=new WeakMap,Po=Symbol("_moveCb"),xh=Symbol("_enterCb"),Rv=t=>(delete t.props.mode,t),Sv=Rv({name:"TransitionGroup",props:ze({},mp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=hp(),r=Vf();let s,i;return jf(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!xv(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(Pv),s.forEach(Cv);const l=s.filter(kv);Al(),l.forEach(c=>{const h=c.el,d=h.style;Ht(h,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=h[Po]=y=>{y&&y.target!==h||(!y||/transform$/.test(y.propertyName))&&(h.removeEventListener("transitionend",p),h[Po]=null,xn(h,o))};h.addEventListener("transitionend",p)}),s=[]}),()=>{const o=me(t),l=_p(o);let c=o.tag||Oe;if(s=[],i)for(let h=0;h<i.length;h++){const d=i[h];d.el&&d.el instanceof Element&&(s.push(d),Tr(d,si(d,l,r,n)),vp.set(d,d.el.getBoundingClientRect()))}i=e.default?dc(e.default()):[];for(let h=0;h<i.length;h++){const d=i[h];d.key!=null&&Tr(d,si(d,l,r,n))}return Re(c,null,i)}}}),Co=Sv;function Pv(t){const e=t.el;e[Po]&&e[Po](),e[xh]&&e[xh]()}function Cv(t){Ep.set(t,t.el.getBoundingClientRect())}function kv(t){const e=vp.get(t),n=Ep.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function xv(t,e,n){const r=t.cloneNode(),s=t[ts];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=yp(r);return i.removeChild(r),o}const Dh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>io(e,n):e};function Dv(t){t.target.composing=!0}function Nh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const el=Symbol("_assign"),vr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[el]=Dh(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=pl(l)),t[el](l)}),n&&jr(t,"change",()=>{t.value=t.value.trim()}),e||(jr(t,"compositionstart",Dv),jr(t,"compositionend",Nh),jr(t,"change",Nh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[el]=Dh(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?pl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Nv=["ctrl","shift","alt","meta"],Ov={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nv.some(n=>t[`${n}Key`]&&!e.includes(n))},ns=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Ov[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Vv=ze({patchProp:Av},av);let Oh;function Lv(){return Oh||(Oh=xy(Vv))}const Mv=(...t)=>{const e=Lv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Fv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Fv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Uv(t){return Be(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Tp;const oa=t=>Tp=t,wp=Symbol();function bl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qs||(Qs={}));function Bv(){const t=cf(!0),e=t.run(()=>He({}));let n=[],r=[];const s=uc({install(i){oa(s),s._a=i,i.provide(wp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ip=()=>{};function Vh(t,e,n,r=Ip){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&uf()&&T_(s),s}function Br(t,...e){t.slice().forEach(n=>{n(...e)})}const $v=t=>t(),Lh=Symbol(),tl=Symbol();function Rl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bl(s)&&bl(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!gn(r)?t[n]=Rl(s,r):t[n]=r}return t}const jv=Symbol();function qv(t){return!bl(t)||!Object.prototype.hasOwnProperty.call(t,jv)}const{assign:Dn}=Object;function Hv(t){return!!(Ne(t)&&t.effect)}function Wv(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=W_(n.state.value[t]);return Dn(d,i,Object.keys(o||{}).reduce((p,y)=>(p[y]=uc(wr(()=>{oa(n);const R=n._s.get(t);return o[y].call(R,R)})),p),{}))}return c=Ap(t,h,e,n,r,!0),c}function Ap(t,e,n={},r,s,i){let o;const l=Dn({actions:{}},n),c={deep:!0};let h,d,p=[],y=[],R;const k=r.state.value[t];!i&&!k&&(r.state.value[t]={}),He({});let O;function V(_){let m;h=d=!1,typeof _=="function"?(_(r.state.value[t]),m={type:Qs.patchFunction,storeId:t,events:R}):(Rl(r.state.value[t],_),m={type:Qs.patchObject,payload:_,storeId:t,events:R});const E=O=Symbol();Cf().then(()=>{O===E&&(h=!0)}),d=!0,Br(p,m,r.state.value[t])}const G=i?function(){const{state:m}=n,E=m?m():{};this.$patch(A=>{Dn(A,E)})}:Ip;function J(){o.stop(),p=[],y=[],r._s.delete(t)}const Y=(_,m="")=>{if(Lh in _)return _[tl]=m,_;const E=function(){oa(r);const A=Array.from(arguments),T=[],v=[];function be(de){T.push(de)}function Je(de){v.push(de)}Br(y,{args:A,name:E[tl],store:Q,after:be,onError:Je});let Ce;try{Ce=_.apply(this&&this.$id===t?this:Q,A)}catch(de){throw Br(v,de),de}return Ce instanceof Promise?Ce.then(de=>(Br(T,de),de)).catch(de=>(Br(v,de),Promise.reject(de))):(Br(T,Ce),Ce)};return E[Lh]=!0,E[tl]=m,E},x={_p:r,$id:t,$onAction:Vh.bind(null,y),$patch:V,$reset:G,$subscribe(_,m={}){const E=Vh(p,_,m.detached,()=>A()),A=o.run(()=>zs(()=>r.state.value[t],T=>{(m.flush==="sync"?d:h)&&_({storeId:t,type:Qs.direct,events:R},T)},Dn({},c,m)));return E},$dispose:J},Q=Xo(x);r._s.set(t,Q);const I=(r._a&&r._a.runWithContext||$v)(()=>r._e.run(()=>(o=cf()).run(()=>e({action:Y}))));for(const _ in I){const m=I[_];if(Ne(m)&&!Hv(m)||gn(m))i||(k&&qv(m)&&(Ne(m)?m.value=k[_]:Rl(m,k[_])),r.state.value[t][_]=m);else if(typeof m=="function"){const E=Y(m,_);I[_]=E,l.actions[_]=m}}return Dn(Q,I),Dn(me(Q),I),Object.defineProperty(Q,"$state",{get:()=>r.state.value[t],set:_=>{V(m=>{Dn(m,_)})}}),r._p.forEach(_=>{Dn(Q,o.run(()=>_({store:Q,app:r._a,pinia:r,options:l})))}),k&&i&&n.hydrate&&n.hydrate(Q.$state,k),h=!0,d=!0,Q}/*! #__NO_SIDE_EFFECTS__ */function _c(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Ay();return o=o||(c?Ks(wp,null):null),o&&oa(o),o=Tp,o._s.has(t)||(s?Ap(t,e,r,o):Wv(t,r,o)),o._s.get(t)}return i.$id=t,i}function aa(t){const e=me(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=wr({get:()=>t[r],set(i){t[r]=i}}):(Ne(s)||gn(s))&&(n[r]=G_(t,r))}return n}const Kv="/Vue-projects/search.svg",tn=_c("products",()=>{const t=He([]),e=He([]),n=He([]),r=He(t.value[0]),s=He([]),i=He([]),o=5,l=kt(),c=x=>{const Q=x.target;switch(Q.options[Q.selectedIndex].id){case"name":n.value.sort((_,m)=>_.title<m.title?-1:_.title>m.title?1:0);break;case"cheap":n.value.sort((_,m)=>_.price-m.price);break;case"dear":n.value.sort((_,m)=>m.price-_.price);break;case"default":n.value=[...t.value];break}},h=x=>{const Q=x.target;Q.value===""&&(n.value=[...t.value]),n.value=[...t.value].filter(j=>{if(new RegExp(Q.value,"i").test(j.title))return j})},d=wr(()=>t.value.reduce((x,Q)=>(Q.isAdded&&(x+=Q.price),x),0)),p=wr(()=>{const x=Math.floor(d.value+d.value/100*o);return localStorage.setItem("taxTotalPrice",String(x)),x}),y=async()=>{try{const x=await fetch("https://34643c0fb49ad60b.mokky.dev/items");if(!x.ok)throw new Error("Ошибка загрузки");return(await x.json()).map(I=>({...I,isAdded:i.value.includes(I.id),isFavorite:s.value.includes(I.id)}))}catch(x){return console.error(x),[]}},R=x=>{x.isFavorite=!x.isFavorite,O(x.id)},k=x=>{x.isAdded=!x.isAdded,x.isAdded?(l.onActiveNotification(x.title+": Добавлен в корзину",x.imageUrl),e.value=[...e.value,x]):(l.onActiveNotification(x.title+": Удалён из корзины",x.imageUrl),e.value=e.value.filter(Q=>Q.id!==x.id)),V(x.id)},O=(x=void 0)=>{const Q=JSON.parse(localStorage.getItem("favorite"));Array.isArray(Q)&&(s.value=Q),typeof x=="number"&&(s.value.includes(x)?(s.value=s.value.filter(j=>{if(j!==x)return j}),localStorage.setItem("favorite",JSON.stringify(s.value))):(s.value=[...s.value,x],localStorage.setItem("favorite",JSON.stringify(s.value))))},V=(x=void 0)=>{const Q=JSON.parse(localStorage.getItem("basket"));Array.isArray(Q)&&(i.value=Q),typeof x=="number"&&(i.value.includes(x)?(i.value=i.value.filter(j=>{if(j!==x)return j}),localStorage.setItem("basket",JSON.stringify(i.value))):(i.value=[...i.value,x],localStorage.setItem("basket",JSON.stringify(i.value))))};return{products:t,productsInBasket:e,sortingProducts:n,activeOpenCard:r,localFavorite:s,localBasket:i,TAXPRODUCT:o,totalPrice:d,calculateTaxTotalPrice:p,getProductsFetch:y,onFavoriteProducts:R,onBasketProducts:k,updateLocalFavorite:O,updateLocalBasket:V,updateProductInBasket:()=>{e.value=t.value.filter(x=>i.value.includes(x.id))},clearProductInBasket:()=>{t.value=t.value.map(x=>(x.isAdded&&(x.isAdded=!1,V(x.id)),x)),e.value=[]},clearProductInFavorite:()=>{t.value=t.value.map(x=>(x.isFavorite&&(x.isFavorite=!1,O(x.id)),x))},changeSorting:c,searchProduct:h}}),kt=_c("activeBlock",()=>{const t=tn(),e=He("allProducts"),n=He(""),r=He("personalAccount"),s=He(!1),i=He([]),o=d=>{const y=d.currentTarget.dataset.id;switch(y){case"allProducts":e.value=y;break;case"bookmarks":e.value=y;break;case"profile":e.value=y,r.value==="personalOrders"&&y==="profile"&&(r.value="personalAccount");break;case"personalAccount":r.value=y;break;case"personalOrders":r.value=y;break}},l=d=>{n.value===d?n.value="":n.value=d};return{activeBlock:e,activeBlockInProfile:r,onActiveBlock:o,activeBlockAboveContent:n,onActiveBlockAboveContent:(d,p)=>{if(d)switch(d.currentTarget.dataset.id){case"basket":l("basket");break;case"cardProduct":l("cardProduct"),p&&(t.activeOpenCard=p);break;case"formLogin":l("formLogin");break;case"formRegistration":l("formRegistration");break}else n.value=""},activeNotification:s,listNotification:i,onActiveNotification:(d,p)=>{i.value.push({text:d,image:p,id:i.value.length}),setTimeout(()=>{i.value.shift()},5e3)}}}),zv=["id"],Gv=["src"],Qv=["src"],Jv={class:"/* Typography */ leading-[17px] mb-4"},Yv={class:"/* Layout */ flex justify-between"},Xv={class:"/* Typography */ font-bold"},Zv=["src"],Mh=Ge({__name:"CardProduct",props:{id:{},imageUrl:{},title:{},price:{},isFavorite:{type:Boolean},isAdded:{type:Boolean},onFavoriteProducts:{type:Function},onBasketProducts:{type:Function},onActiveBlockAboveContent:{type:Function}},setup(t){return(e,n)=>(ee(),pe("li",null,[P("article",{class:"/* Layout */ min-h-[276px] rounded-3xl border hover:-translate-y-2 transition min-[320px]:p-2 min-[450px]:w-[210px] min-[320px]:w-[168px] /* Typography */ /* Border */ border-gray-100 /* Background */ /* Effects */ hover:shadow-xl",id:String(e.id),"data-id":"cardProduct",onClick:n[2]||(n[2]=(...r)=>e.onActiveBlockAboveContent&&e.onActiveBlockAboveContent(...r))},[P("img",{class:"/* Layout */ z-10",src:e.isFavorite?"like-2.svg":"like-1.svg",alt:"button like",onClick:n[0]||(n[0]=ns((...r)=>e.onFavoriteProducts&&e.onFavoriteProducts(...r),["stop"]))},null,8,Gv),P("img",{class:"/* Layout */ block w-[133px] h-[112px] mb-4",src:`${e.imageUrl}`,alt:"image sneakers"},null,8,Qv),P("p",Jv,st(e.title),1),P("div",Yv,[P("div",null,[n[3]||(n[3]=P("p",{class:"/* Typography */ text-[0.8rem] text-[#BDBDBD]"},"ЦЕНА:",-1)),P("p",Xv,st(e.price)+"руб.",1)]),P("img",{class:"/* Layout */ block",src:e.isAdded?"checked.svg":"plus.svg",alt:"Add Product",onClick:n[1]||(n[1]=ns((...r)=>e.onBasketProducts&&e.onBasketProducts(...r),["stop"]))},null,8,Zv)])],8,zv)]))}}),eE={key:0,class:"/* Layout */ grid gap-11 lg:grid-cols-4 md:justify-between min-[320px]:gap-3 min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[320px]:grid-cols-2"},tE={key:1,class:"/* Layout */ grid gap-11 mt-4 lg:grid-cols-4 md:justify-between min-[320px]:justify-items-center min-[600px]:grid-cols-3 min-[510px]:grid-cols-2 min-[425px]:grid-cols-1"},nE=Ge({__name:"CardList",props:{sortingProducts:{}},setup(t){const e=kt(),{onActiveBlockAboveContent:n}=e,r=tn(),{onFavoriteProducts:s,onBasketProducts:i}=r;return(o,l)=>(ee(),pe(Oe,null,[N(e).activeBlock==="allProducts"?(ee(),pe("ul",eE,[Re(Co,{name:"list"},{default:mr(()=>[(ee(!0),pe(Oe,null,es(o.sortingProducts,c=>(ee(),vt(Mh,{key:c.id,id:c.id,imageUrl:c.imageUrl,title:c.title,price:c.price,isFavorite:c.isFavorite,isAdded:c.isAdded,onFavoriteProducts:()=>N(s)(c),onBasketProducts:()=>N(i)(c),onActiveBlockAboveContent:h=>N(n)(h,c)},null,8,["id","imageUrl","title","price","isFavorite","isAdded","onFavoriteProducts","onBasketProducts","onActiveBlockAboveContent"]))),128))]),_:1})])):Et("",!0),N(e).activeBlock==="bookmarks"?(ee(),pe("ul",tE,[Re(Co,{name:"list"},{default:mr(()=>[(ee(!0),pe(Oe,null,es(N(r).products,c=>(ee(),pe(Oe,null,[c.isFavorite?(ee(),vt(Mh,{key:c.id,id:c.id,imageUrl:c.imageUrl,title:c.title,price:c.price,isFavorite:c.isFavorite,isAdded:c.isAdded,onFavoriteProducts:()=>N(s)(c),onBasketProducts:()=>N(i)(c),onActiveBlockAboveContent:h=>N(n)(h,c)},null,8,["id","imageUrl","title","price","isFavorite","isAdded","onFavoriteProducts","onBasketProducts","onActiveBlockAboveContent"])):Et("",!0)],64))),256))]),_:1})])):Et("",!0)],64))}}),_i=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bp=_i(nE,[["__scopeId","data-v-eb9244e3"]]),rE={"data-id":"allProducts"},sE={class:"/* Layout */ flex gap-4 mb-11 p-2 md:justify-between md:flex-row min-[320px]:flex-col /* Border */ /* Background */ /* Effects */"},iE={class:"/* Layout */ flex gap-4 md:flex-row min-[320px]:flex-col /* Border */ /* Background */ /* Effects */"},oE={class:"/* Layout */ flex rounded-md pl-5 /* Border */ border border-gray-300 focus:border-gray-500 /* Background */ /* Effects */"},aE=Ge({__name:"AllProducts",setup(t){const e=tn(),{changeSorting:n,searchProduct:r}=e;return zs(()=>e.products,s=>{s.length>0&&(e.sortingProducts=[...s])},{immediate:!0}),(s,i)=>(ee(),pe("section",rE,[P("div",sE,[i[4]||(i[4]=P("h2",{class:"/* Typography */ text-4xl font-bold /* Layout */ md:mb-0 min-[320px]:mb-3"}," Все кроссовки ",-1)),P("div",iE,[P("select",{class:"/* Layout */ py-2 px-3 rounded-md /* Border */ border border-gray-300 /* Typography */ outline-none /* Effects */",onChange:i[0]||(i[0]=(...o)=>N(n)&&N(n)(...o))},i[2]||(i[2]=[up('<option value="" disabled selected hidden>Отсортировать</option><option id="default">По умолчанию</option><option id="name">По названию</option><option id="cheap">По цене (дешевые)</option><option id="dear">По цене (дорогие)</option>',5)]),32),P("div",oE,[i[3]||(i[3]=P("img",{src:Kv,alt:"search image"},null,-1)),P("input",{class:"/* Layout */ py-2 pl-5 pr-4 /* Border */ /* Typography */ outline-none /* Effects */",type:"text",placeholder:"Поиск...",onInput:i[1]||(i[1]=(...o)=>N(r)&&N(r)(...o))},null,32)])])]),Re(bp,{sortingProducts:N(e).sortingProducts},null,8,["sortingProducts"])]))}}),lE="/Vue-projects/assets/package-icon-BvUgkqQO.png",cE="/Vue-projects/close.png",uE="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='31'%20height='31'%20rx='7.5'%20fill='white'%20stroke='%23DBDBDB'/%3e%3cpath%20d='M20.0799%2018.6155L17.6311%2016.1667L20.0798%2013.718C21.0241%2012.7738%2019.5596%2011.3093%2018.6154%2012.2536L16.1667%2014.7023L13.7179%2012.2535C12.7738%2011.3095%2011.3095%2012.7738%2012.2535%2013.7179L14.7023%2016.1667L12.2536%2018.6154C11.3093%2019.5596%2012.7738%2021.0241%2013.718%2020.0798L16.1667%2017.6311L18.6155%2020.0799C19.5597%2021.0241%2021.0241%2019.5597%2020.0799%2018.6155Z'%20fill='%23B5B5B5'/%3e%3c/svg%3e",hE=["id"],dE=["src"],fE={class:"/* Typography */ w-40"},pE={class:"/* Typography */"},gE=Ge({__name:"BasketCardProduct",props:{id:{},imageUrl:{},title:{},price:{},onBasketProducts:{type:Function},onActiveBlockAboveContent:{type:Function}},setup(t){return(e,n)=>(ee(),pe("li",null,[P("article",{class:"/* Layout */ max-w-full h-32 mb-6 mr-2 p-6 rounded-3xl border flex justify-between items-center cursor-pointer /* Typography */ /* Border */ border-[#F2F2F2] /* Background */ /* Effects */",id:String(e.id),"data-id":"cardProduct",onClick:n[1]||(n[1]=(...r)=>e.onActiveBlockAboveContent&&e.onActiveBlockAboveContent(...r))},[P("img",{class:"/* Layout */ block w-[70px] h-[70px] mr-6",src:e.imageUrl,alt:"Sneakers Image"},null,8,dE),P("div",null,[P("p",fE,st(e.title),1),P("b",pE,st(e.price),1)]),P("img",{class:"/* Layout */ self-end",src:uE,alt:"Delete Product",onClick:n[0]||(n[0]=ns((...r)=>e.onBasketProducts&&e.onBasketProducts(...r),["stop"]))})],8,hE)]))}}),mE={class:"/* Layout */ overflow-auto overflow-x-hidden"},_E=Ge({__name:"BasketCardList",setup(t){const e=kt(),{onActiveBlockAboveContent:n}=e,r=tn(),{onBasketProducts:s}=r;return(i,o)=>(ee(),pe("ul",mE,[Re(Co,{name:"list"},{default:mr(()=>[(ee(!0),pe(Oe,null,es(N(r).products,l=>(ee(),pe(Oe,null,[l.isAdded?(ee(),vt(gE,{key:l.id,id:l.id,imageUrl:l.imageUrl,title:l.title,price:l.price,onBasketProducts:()=>N(s)(l),onActiveBlockAboveContent:c=>N(n)(c,l)},null,8,["id","imageUrl","title","price","onBasketProducts","onActiveBlockAboveContent"])):Et("",!0)],64))),256))]),_:1})]))}}),yE=_i(_E,[["__scopeId","data-v-863ce4d9"]]);var Fh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;c||(R=64,o||(y=64)),r.push(n[d],n[p],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new EE;const y=i<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TE=function(t){const e=Rp(t);return Sp.encodeByteArray(e,!0)},ko=function(t){return TE(t).replace(/\./g,"")},Pp=function(t){try{return Sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=()=>wE().__FIREBASE_DEFAULTS__,AE=()=>{if(typeof process>"u"||typeof Fh>"u")return;const t=Fh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pp(t[1]);return e&&JSON.parse(e)},la=()=>{try{return IE()||AE()||bE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cp=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RE=t=>{const e=Cp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kp=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},xp=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function kE(){var t;const e=(t=la())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OE(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VE(){return!kE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LE(){try{return typeof indexedDB=="object"}catch{return!1}}function ME(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FE,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wt(s,l,r)}}function UE(t,e){return t.replace(BE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const BE=/\{\$([^}]+)}/g;function $E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uh(i)&&Uh(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jE(t,e){const n=new qE(t,e);return n.subscribe.bind(n)}class qE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nl),s.error===void 0&&(s.error=nl),s.complete===void 0&&(s.complete=nl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zE(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(t){return t===dr?void 0:t}function zE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const QE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},JE=_e.INFO,YE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},XE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yc{constructor(e){this.name=e,this._logLevel=JE,this._logHandler=XE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const ZE=(t,e)=>e.some(n=>t instanceof n);let Bh,$h;function eT(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tT(){return $h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dp=new WeakMap,Sl=new WeakMap,Np=new WeakMap,rl=new WeakMap,vc=new WeakMap;function nT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dp.set(n,t)}).catch(()=>{}),vc.set(e,t),e}function rT(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sT(t){Pl=t(Pl)}function iT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sl(this),e,...n);return Np.set(r,e.sort?e.sort():[e]),jn(r)}:tT().includes(t)?function(...e){return t.apply(sl(this),e),jn(Dp.get(this))}:function(...e){return jn(t.apply(sl(this),e))}}function oT(t){return typeof t=="function"?iT(t):(t instanceof IDBTransaction&&rT(t),ZE(t,eT())?new Proxy(t,Pl):t)}function jn(t){if(t instanceof IDBRequest)return nT(t);if(rl.has(t))return rl.get(t);const e=oT(t);return e!==t&&(rl.set(t,e),vc.set(e,t)),e}const sl=t=>vc.get(t);function aT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const lT=["get","getKey","getAll","getAllKeys","count"],cT=["put","add","delete","clear"],il=new Map;function jh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return il.set(e,i),i}sT(t=>({...t,get:(e,n,r)=>jh(e,n)||t.get(e,n,r),has:(e,n)=>!!jh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",qh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new yc("@firebase/app"),dT="@firebase/app-compat",fT="@firebase/analytics-compat",pT="@firebase/analytics",gT="@firebase/app-check-compat",mT="@firebase/app-check",_T="@firebase/auth",yT="@firebase/auth-compat",vT="@firebase/database",ET="@firebase/data-connect",TT="@firebase/database-compat",wT="@firebase/functions",IT="@firebase/functions-compat",AT="@firebase/installations",bT="@firebase/installations-compat",RT="@firebase/messaging",ST="@firebase/messaging-compat",PT="@firebase/performance",CT="@firebase/performance-compat",kT="@firebase/remote-config",xT="@firebase/remote-config-compat",DT="@firebase/storage",NT="@firebase/storage-compat",OT="@firebase/firestore",VT="@firebase/vertexai-preview",LT="@firebase/firestore-compat",MT="firebase",FT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="[DEFAULT]",UT={[Cl]:"fire-core",[dT]:"fire-core-compat",[pT]:"fire-analytics",[fT]:"fire-analytics-compat",[mT]:"fire-app-check",[gT]:"fire-app-check-compat",[_T]:"fire-auth",[yT]:"fire-auth-compat",[vT]:"fire-rtdb",[ET]:"fire-data-connect",[TT]:"fire-rtdb-compat",[wT]:"fire-fn",[IT]:"fire-fn-compat",[AT]:"fire-iid",[bT]:"fire-iid-compat",[RT]:"fire-fcm",[ST]:"fire-fcm-compat",[PT]:"fire-perf",[CT]:"fire-perf-compat",[kT]:"fire-rc",[xT]:"fire-rc-compat",[DT]:"fire-gcs",[NT]:"fire-gcs-compat",[OT]:"fire-fst",[LT]:"fire-fst-compat",[VT]:"fire-vertex","fire-js":"fire-js",[MT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,BT=new Map,xl=new Map;function Hh(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(xl.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of Do.values())Hh(n,t);for(const n of BT.values())Hh(n,t);return!0}function Ec(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new yi("app","Firebase",$T);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=FT;function Op(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=kp()),!n)throw qn.create("no-options");const i=Do.get(s);if(i){if(xo(n,i.options)&&xo(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new GE(s);for(const c of xl.values())o.addComponent(c);const l=new jT(n,r,o);return Do.set(s,l),l}function Vp(t=kl){const e=Do.get(t);if(!e&&t===kl&&kp())return Op();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let s=(r=UT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(l.join(" "));return}rs(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="firebase-heartbeat-database",HT=1,ai="firebase-heartbeat-store";let ol=null;function Lp(){return ol||(ol=aT(qT,HT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),ol}async function WT(t){try{const n=(await Lp()).transaction(ai),r=await n.objectStore(ai).get(Mp(t));return await n.done,r}catch(e){if(e instanceof wt)vn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function Wh(t,e){try{const r=(await Lp()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,Mp(t)),await r.done}catch(n){if(n instanceof wt)vn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function Mp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=1024,zT=30*24*60*60*1e3;class GT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kh(),{heartbeatsToSend:r,unsentEntries:s}=QT(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return vn.warn(n),""}}}function Kh(){return new Date().toISOString().substring(0,10)}function QT(t,e=KT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LE()?ME().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zh(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){rs(new Ir("platform-logger",e=>new uT(e),"PRIVATE")),rs(new Ir("heartbeat",e=>new GT(e),"PRIVATE")),Hn(Cl,qh,t),Hn(Cl,qh,"esm2017"),Hn("fire-js","")}YT("");function Tc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XT=Fp,Up=new yi("auth","Firebase",Fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new yc("@firebase/auth");function ZT(t,...e){No.logLevel<=_e.WARN&&No.warn(`Auth (${ds}): ${t}`,...e)}function co(t,...e){No.logLevel<=_e.ERROR&&No.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw wc(t,...e)}function Qt(t,...e){return wc(t,...e)}function Bp(t,e,n){const r=Object.assign(Object.assign({},XT()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function mn(t){return Bp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Up.create(t,...e)}function ae(t,e,...n){if(!t)throw wc(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw co(e),new Error(e)}function En(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ew(){return Gh()==="http:"||Gh()==="https:"}function Gh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ew()||DE()||"connection"in navigator)?navigator.onLine:!0}function nw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=CE()||NE()}get(){return tw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Ei(3e4,6e4);function An(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nn(t,e,n,r,s={}){return jp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return xE()||(h.referrerPolicy="no-referrer"),$p.fetch()(qp(t,t.config.apiHost,n,l),h)})}async function jp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rw),e);try{const s=new ow(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xi(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bp(t,d,h);$t(t,d)}}catch(s){if(s instanceof wt)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function Ti(t,e,n,r,s={}){const i=await nn(t,e,n,r,s);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ic(t.config,s):`${t.config.apiScheme}://${s}`}function iw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ow{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),sw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qt(t,e,r);return s.customData._tokenResponse=n,s}function Qh(t){return t!==void 0&&t.enterprise!==void 0}class aw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lw(t,e){return nn(t,"GET","/v2/recaptchaConfig",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(t,e){return nn(t,"POST","/v1/accounts:delete",e)}async function Hp(t,e){return nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uw(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Ac(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Js(al(s.auth_time)),issuedAtTime:Js(al(s.iat)),expirationTime:Js(al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function al(t){return Number(t)*1e3}function Ac(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pp(n);return s?JSON.parse(s):(co("Failed to decode base64 JWT payload"),null)}catch(s){return co("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jh(t){const e=Ac(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&hw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ss(t,Hp(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wp(i.providerUserInfo):[],l=pw(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Nl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function fw(t){const e=Fe(t);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wp(t){return t.map(e=>{var{providerId:n}=e,r=Tc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e){const n=await jp(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$p.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mw(t,e){return nn(t,"POST","/v2/accounts:revokeToken",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Jh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ss(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uw(this,e)}reload(){return fw(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await ss(this,cw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,R=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(h=n.createdAt)!==null&&h!==void 0?h:void 0,J=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Y,emailVerified:x,isAnonymous:Q,providerData:j,stsTokenManager:I}=n;ae(Y&&I,e,"internal-error");const _=Jr.fromJSON(this.name,I);ae(typeof Y=="string",e,"internal-error"),kn(p,e.name),kn(y,e.name),ae(typeof x=="boolean",e,"internal-error"),ae(typeof Q=="boolean",e,"internal-error"),kn(R,e.name),kn(k,e.name),kn(O,e.name),kn(V,e.name),kn(G,e.name),kn(J,e.name);const m=new fn({uid:Y,auth:e,email:y,emailVerified:x,displayName:p,isAnonymous:Q,photoURL:k,phoneNumber:R,tenantId:O,stsTokenManager:_,createdAt:G,lastLoginAt:J});return j&&Array.isArray(j)&&(m.providerData=j.map(E=>Object.assign({},E))),V&&(m._redirectEventId=V),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Jr;l.updateFromIdToken(r);const c=new fn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Nl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;function pn(t){En(t instanceof Function,"Expected a class definition");let e=Yh.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kp.type="NONE";const Xh=Kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=uo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(pn(Xh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pn(Xh);const o=uo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=fn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Yr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xp(e))return"Blackberry";if(Zp(e))return"Webos";if(Gp(e))return"Safari";if((e.includes("chrome/")||Qp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zp(t=mt()){return/firefox\//i.test(t)}function Gp(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qp(t=mt()){return/crios\//i.test(t)}function Jp(t=mt()){return/iemobile/i.test(t)}function Yp(t=mt()){return/android/i.test(t)}function Xp(t=mt()){return/blackberry/i.test(t)}function Zp(t=mt()){return/webos/i.test(t)}function bc(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _w(t=mt()){var e;return bc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yw(){return OE()&&document.documentMode===10}function eg(t=mt()){return bc(t)||Yp(t)||Zp(t)||Xp(t)||/windows phone/i.test(t)||Jp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e=[]){let n;switch(t){case"Browser":n=Zh(mt());break;case"Worker":n=`${Zh(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t,e={}){return nn(t,"GET","/v2/passwordPolicy",An(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=6;class ww{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hp(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(mn(this));const n=e?Fe(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ew(this),n=new ww(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return Fe(t)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Aw(t){ca=t}function ng(t){return ca.loadJS(t)}function bw(){return ca.recaptchaEnterpriseScript}function Rw(){return ca.gapiScript}function Sw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Pw="recaptcha-enterprise",Cw="NO_RECAPTCHA";class kw{constructor(e){this.type=Pw,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{lw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new aw(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Qh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Cw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Qh(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=bw();c.length!==0&&(c+=l),ng(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function td(t,e,n,r=!1){const s=new kw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ol(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await td(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await td(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e){const n=Ec(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function Dw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nw(t,e,n){const r=xr(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rg(e),{host:o,port:l}=Ow(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Vw()}function rg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ow(t){const e=rg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:nd(o)}}}function nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function Lw(t,e){return nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t,e){return Ti(t,"POST","/v1/accounts:signInWithPassword",An(t,e))}async function sg(t,e){return nn(t,"POST","/v1/accounts:sendOobCode",An(t,e))}async function Fw(t,e){return sg(t,e)}async function Uw(t,e){return sg(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}async function $w(t,e){return Ti(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Rc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,n,"signInWithPassword",Mw);case"emailLink":return Bw(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,r,"signUpPassword",Lw);case"emailLink":return $w(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return Ti(t,"POST","/v1/accounts:signInWithIdp",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="http://localhost";class Ar extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Tc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:jw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hw(t){const e=Ls(Ms(t)).link,n=e?Ls(Ms(e)).deep_link_id:null,r=Ls(Ms(t)).deep_link_id;return(r?Ls(Ms(r)).link:null)||r||n||e||t}class Sc{constructor(e){var n,r,s,i,o,l;const c=Ls(Ms(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=qw((s=c.mode)!==null&&s!==void 0?s:null);ae(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Hw(e);try{return new Sc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.providerId=Dr.PROVIDER_ID}static credential(e,n){return li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sc.parseLink(n);return ae(r,"argument-error"),li._fromEmailAndCode(e,r.code,r.tenantId)}}Dr.PROVIDER_ID="password";Dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends ig{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends wi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends wi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends wi{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(t,e){return Ti(t,"POST","/v1/accounts:signUp",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=rd(r);return new br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rd(r);return new br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vo(e,n,r,s)}}function og(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,i,e,r):i})}async function Kw(t,e,n=!1){const r=await ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(mn(r));const s="reauthenticate";try{const i=await ss(t,og(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Ac(i.idToken);ae(o,r,"internal-error");const{sub:l}=o;return ae(t.uid===l,r,"user-mismatch"),br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e,n=!1){if(zt(t.app))return Promise.reject(mn(t));const r="signIn",s=await og(t,r,e),i=await br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zw(t,e){return lg(xr(t),e)}async function Gw(t,e){return ag(Fe(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qw(t,e,n){if(zt(t.app))return Promise.reject(mn(t));const r=xr(t),o=await Ol(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ww).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&cg(t),c}),l=await br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Jw(t,e,n){return zt(t.app)?Promise.reject(mn(t)):zw(Fe(t),Dr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cg(t),r})}async function Yw(t,e){const n=Fe(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await Fw(n.auth,s);i!==t.email&&await t.reload()}async function Xw(t,e,n){const r=Fe(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e},{email:o}=await Uw(r.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(t,e){return nn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ss(r,Zw(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function eI(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function tI(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function nI(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function rI(t){return Fe(t).signOut()}async function sI(t){return Fe(t).delete()}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=1e3,oI=10;class hg extends ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hg.type="LOCAL";const aI=hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dg.type="SESSION";const fg=dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await lI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Pc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function uI(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function hI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fI(){return pg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebaseLocalStorageDb",pI=1,Mo="firebaseLocalStorage",mg="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ha(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function gI(){const t=indexedDB.deleteDatabase(gg);return new Ii(t).toPromise()}function Vl(){const t=indexedDB.open(gg,pI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mo,{keyPath:mg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),await gI(),e(await Vl()))})})}async function id(t,e,n){const r=ha(t,!0).put({[mg]:e,value:n});return new Ii(r).toPromise()}async function mI(t,e){const n=ha(t,!1).get(e),r=await new Ii(n).toPromise();return r===void 0?null:r.value}function od(t,e){const n=ha(t,!0).delete(e);return new Ii(n).toPromise()}const _I=800,yI=3;class _g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(fI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hI(),!this.activeServiceWorker)return;this.sender=new cI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vl();return await id(e,Lo,"1"),await od(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>id(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_g.type="LOCAL";const vI=_g;new Ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e){return e?pn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TI(t){return lg(t.auth,new Cc(t),t.bypassAuthState)}function wI(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),ag(n,new Cc(t),t.bypassAuthState)}async function II(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Kw(n,new Cc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TI;case"linkViaPopup":case"linkViaRedirect":return II;case"reauthViaPopup":case"reauthViaRedirect":return wI;default:$t(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Ei(2e3,1e4);class Kr extends yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AI.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="pendingRedirect",ho=new Map;class RI extends yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await SI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(t,e){const n=kI(e),r=CI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function PI(t,e){ho.set(t._key(),e)}function CI(t){return pn(t._redirectPersistence)}function kI(t){return uo(bI,t.config.apiKey,t.name)}async function xI(t,e,n=!1){if(zt(t.app))return Promise.reject(mn(t));const r=xr(t),s=EI(r,e),o=await new RI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=10*60*1e3;class NI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ad(e))}saveEventToCache(e){this.cachedEventUids.add(ad(e)),this.lastProcessedEventTime=Date.now()}}function ad(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e={}){return nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MI=/^https?/;async function FI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VI(t);for(const n of e)try{if(UI(n))return}catch{}$t(t,"unauthorized-domain")}function UI(t){const e=Dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MI.test(n))return!1;if(LI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Ei(3e4,6e4);function ld(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $I(t){return new Promise((e,n)=>{var r,s,i;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(Qt(t,"network-request-failed"))},timeout:BI.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)o();else{const l=Sw("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},ng(`${Rw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw fo=null,e})}let fo=null;function jI(t){return fo=fo||$I(t),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new Ei(5e3,15e3),HI="__/auth/iframe",WI="emulator/auth/iframe",KI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ic(e,WI):`https://${t.config.authDomain}/${HI}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=zI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${vi(r).slice(1)}`}async function QI(t){const e=await jI(t),n=Jt().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:GI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),l=Jt().setTimeout(()=>{i(o)},qI.get());function c(){Jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,XI=600,ZI="_blank",e0="http://localhost";class cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t0(t,e,n,r=YI,s=XI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},JI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=mt().toLowerCase();n&&(l=Qp(h)?ZI:n),zp(h)&&(e=e||e0,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[R,k])=>`${y}${R}=${k},`,"");if(_w(h)&&l!=="_self")return n0(e||"",l),new cd(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new cd(p)}function n0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="__/auth/handler",s0="emulator/auth/handler",i0=encodeURIComponent("fac");async function ud(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof ig){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$E(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof wi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${i0}=${encodeURIComponent(c)}`:"";return`${o0(t)}?${vi(l).slice(1)}${h}`}function o0({config:t}){return t.emulator?Ic(t,s0):`https://${t.authDomain}/${r0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="webStorageSupport";class a0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fg,this._completeRedirectFn=xI,this._overrideRedirectResult=PI}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ud(e,n,r,Dl(),s);return t0(e,o,Pc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ud(e,n,r,Dl(),s);return uI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QI(e),r=new NI(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ll,{type:ll},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ll];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eg()||Gp()||bc()}}const l0=a0;var hd="@firebase/auth",dd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h0(t){rs(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(t)},h=new Iw(r,s,i,c);return Dw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new Ir("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new c0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(hd,dd,u0(t)),Hn(hd,dd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=5*60,f0=xp("authIdTokenMaxAge")||d0;let fd=null;const p0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f0)return;const s=n==null?void 0:n.token;fd!==s&&(fd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function g0(t=Vp()){const e=Ec(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xw(t,{popupRedirectResolver:l0,persistence:[vI,aI,fg]}),r=xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=p0(i.toString());tI(n,o,()=>o(n.currentUser)),eI(n,l=>o(l))}}const s=Cp("auth");return s&&Nw(n,`http://${s}`),n}function m0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Aw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",m0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h0("Browser");var pd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,Eg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function m(){}m.prototype=_.prototype,I.D=_.prototype,I.prototype=new m,I.prototype.constructor=I,I.C=function(E,A,T){for(var v=Array(arguments.length-2),be=2;be<arguments.length;be++)v[be-2]=arguments[be];return _.prototype[A].apply(E,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,m){m||(m=0);var E=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)E[A]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(A=0;16>A;++A)E[A]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=I.g[0],m=I.g[1],A=I.g[2];var T=I.g[3],v=_+(T^m&(A^T))+E[0]+3614090360&4294967295;_=m+(v<<7&4294967295|v>>>25),v=T+(A^_&(m^A))+E[1]+3905402710&4294967295,T=_+(v<<12&4294967295|v>>>20),v=A+(m^T&(_^m))+E[2]+606105819&4294967295,A=T+(v<<17&4294967295|v>>>15),v=m+(_^A&(T^_))+E[3]+3250441966&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(T^m&(A^T))+E[4]+4118548399&4294967295,_=m+(v<<7&4294967295|v>>>25),v=T+(A^_&(m^A))+E[5]+1200080426&4294967295,T=_+(v<<12&4294967295|v>>>20),v=A+(m^T&(_^m))+E[6]+2821735955&4294967295,A=T+(v<<17&4294967295|v>>>15),v=m+(_^A&(T^_))+E[7]+4249261313&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(T^m&(A^T))+E[8]+1770035416&4294967295,_=m+(v<<7&4294967295|v>>>25),v=T+(A^_&(m^A))+E[9]+2336552879&4294967295,T=_+(v<<12&4294967295|v>>>20),v=A+(m^T&(_^m))+E[10]+4294925233&4294967295,A=T+(v<<17&4294967295|v>>>15),v=m+(_^A&(T^_))+E[11]+2304563134&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(T^m&(A^T))+E[12]+1804603682&4294967295,_=m+(v<<7&4294967295|v>>>25),v=T+(A^_&(m^A))+E[13]+4254626195&4294967295,T=_+(v<<12&4294967295|v>>>20),v=A+(m^T&(_^m))+E[14]+2792965006&4294967295,A=T+(v<<17&4294967295|v>>>15),v=m+(_^A&(T^_))+E[15]+1236535329&4294967295,m=A+(v<<22&4294967295|v>>>10),v=_+(A^T&(m^A))+E[1]+4129170786&4294967295,_=m+(v<<5&4294967295|v>>>27),v=T+(m^A&(_^m))+E[6]+3225465664&4294967295,T=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(T^_))+E[11]+643717713&4294967295,A=T+(v<<14&4294967295|v>>>18),v=m+(T^_&(A^T))+E[0]+3921069994&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(A^T&(m^A))+E[5]+3593408605&4294967295,_=m+(v<<5&4294967295|v>>>27),v=T+(m^A&(_^m))+E[10]+38016083&4294967295,T=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(T^_))+E[15]+3634488961&4294967295,A=T+(v<<14&4294967295|v>>>18),v=m+(T^_&(A^T))+E[4]+3889429448&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(A^T&(m^A))+E[9]+568446438&4294967295,_=m+(v<<5&4294967295|v>>>27),v=T+(m^A&(_^m))+E[14]+3275163606&4294967295,T=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(T^_))+E[3]+4107603335&4294967295,A=T+(v<<14&4294967295|v>>>18),v=m+(T^_&(A^T))+E[8]+1163531501&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(A^T&(m^A))+E[13]+2850285829&4294967295,_=m+(v<<5&4294967295|v>>>27),v=T+(m^A&(_^m))+E[2]+4243563512&4294967295,T=_+(v<<9&4294967295|v>>>23),v=A+(_^m&(T^_))+E[7]+1735328473&4294967295,A=T+(v<<14&4294967295|v>>>18),v=m+(T^_&(A^T))+E[12]+2368359562&4294967295,m=A+(v<<20&4294967295|v>>>12),v=_+(m^A^T)+E[5]+4294588738&4294967295,_=m+(v<<4&4294967295|v>>>28),v=T+(_^m^A)+E[8]+2272392833&4294967295,T=_+(v<<11&4294967295|v>>>21),v=A+(T^_^m)+E[11]+1839030562&4294967295,A=T+(v<<16&4294967295|v>>>16),v=m+(A^T^_)+E[14]+4259657740&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(m^A^T)+E[1]+2763975236&4294967295,_=m+(v<<4&4294967295|v>>>28),v=T+(_^m^A)+E[4]+1272893353&4294967295,T=_+(v<<11&4294967295|v>>>21),v=A+(T^_^m)+E[7]+4139469664&4294967295,A=T+(v<<16&4294967295|v>>>16),v=m+(A^T^_)+E[10]+3200236656&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(m^A^T)+E[13]+681279174&4294967295,_=m+(v<<4&4294967295|v>>>28),v=T+(_^m^A)+E[0]+3936430074&4294967295,T=_+(v<<11&4294967295|v>>>21),v=A+(T^_^m)+E[3]+3572445317&4294967295,A=T+(v<<16&4294967295|v>>>16),v=m+(A^T^_)+E[6]+76029189&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(m^A^T)+E[9]+3654602809&4294967295,_=m+(v<<4&4294967295|v>>>28),v=T+(_^m^A)+E[12]+3873151461&4294967295,T=_+(v<<11&4294967295|v>>>21),v=A+(T^_^m)+E[15]+530742520&4294967295,A=T+(v<<16&4294967295|v>>>16),v=m+(A^T^_)+E[2]+3299628645&4294967295,m=A+(v<<23&4294967295|v>>>9),v=_+(A^(m|~T))+E[0]+4096336452&4294967295,_=m+(v<<6&4294967295|v>>>26),v=T+(m^(_|~A))+E[7]+1126891415&4294967295,T=_+(v<<10&4294967295|v>>>22),v=A+(_^(T|~m))+E[14]+2878612391&4294967295,A=T+(v<<15&4294967295|v>>>17),v=m+(T^(A|~_))+E[5]+4237533241&4294967295,m=A+(v<<21&4294967295|v>>>11),v=_+(A^(m|~T))+E[12]+1700485571&4294967295,_=m+(v<<6&4294967295|v>>>26),v=T+(m^(_|~A))+E[3]+2399980690&4294967295,T=_+(v<<10&4294967295|v>>>22),v=A+(_^(T|~m))+E[10]+4293915773&4294967295,A=T+(v<<15&4294967295|v>>>17),v=m+(T^(A|~_))+E[1]+2240044497&4294967295,m=A+(v<<21&4294967295|v>>>11),v=_+(A^(m|~T))+E[8]+1873313359&4294967295,_=m+(v<<6&4294967295|v>>>26),v=T+(m^(_|~A))+E[15]+4264355552&4294967295,T=_+(v<<10&4294967295|v>>>22),v=A+(_^(T|~m))+E[6]+2734768916&4294967295,A=T+(v<<15&4294967295|v>>>17),v=m+(T^(A|~_))+E[13]+1309151649&4294967295,m=A+(v<<21&4294967295|v>>>11),v=_+(A^(m|~T))+E[4]+4149444226&4294967295,_=m+(v<<6&4294967295|v>>>26),v=T+(m^(_|~A))+E[11]+3174756917&4294967295,T=_+(v<<10&4294967295|v>>>22),v=A+(_^(T|~m))+E[2]+718787259&4294967295,A=T+(v<<15&4294967295|v>>>17),v=m+(T^(A|~_))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+T&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var m=_-this.blockSize,E=this.B,A=this.h,T=0;T<_;){if(A==0)for(;T<=m;)s(this,I,T),T+=this.blockSize;if(typeof I=="string"){for(;T<_;)if(E[A++]=I.charCodeAt(T++),A==this.blockSize){s(this,E),A=0;break}}else for(;T<_;)if(E[A++]=I[T++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var m=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=m&255,m/=256;for(this.u(I),I=Array(16),_=m=0;4>_;++_)for(var E=0;32>E;E+=8)I[m++]=this.g[_]>>>E&255;return I};function i(I,_){var m=l;return Object.prototype.hasOwnProperty.call(m,I)?m[I]:m[I]=_(I)}function o(I,_){this.h=_;for(var m=[],E=!0,A=I.length-1;0<=A;A--){var T=I[A]|0;E&&T==_||(m[A]=T,E=!1)}this.g=m}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return V(h(-I));for(var _=[],m=1,E=0;I>=m;E++)_[E]=I/m|0,m*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return V(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=h(Math.pow(_,8)),E=p,A=0;A<I.length;A+=8){var T=Math.min(8,I.length-A),v=parseInt(I.substring(A,A+T),_);8>T?(T=h(Math.pow(_,T)),E=E.j(T).add(h(v))):(E=E.j(m),E=E.add(h(v)))}return E}var p=c(0),y=c(1),R=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-V(this).m();for(var I=0,_=1,m=0;m<this.g.length;m++){var E=this.i(m);I+=(0<=E?E:4294967296+E)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(O(this))return"-"+V(this).toString(I);for(var _=h(Math.pow(I,6)),m=this,E="";;){var A=x(m,_).g;m=G(m,A.j(_));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(I);if(m=A,k(m))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=G(this,I),O(I)?-1:k(I)?0:1};function V(I){for(var _=I.g.length,m=[],E=0;E<_;E++)m[E]=~I.g[E];return new o(m,~I.h).add(y)}t.abs=function(){return O(this)?V(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),m=[],E=0,A=0;A<=_;A++){var T=E+(this.i(A)&65535)+(I.i(A)&65535),v=(T>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);E=v>>>16,T&=65535,v&=65535,m[A]=v<<16|T}return new o(m,m[m.length-1]&-2147483648?-1:0)};function G(I,_){return I.add(V(_))}t.j=function(I){if(k(this)||k(I))return p;if(O(this))return O(I)?V(this).j(V(I)):V(V(this).j(I));if(O(I))return V(this.j(V(I)));if(0>this.l(R)&&0>I.l(R))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,m=[],E=0;E<2*_;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<I.g.length;A++){var T=this.i(E)>>>16,v=this.i(E)&65535,be=I.i(A)>>>16,Je=I.i(A)&65535;m[2*E+2*A]+=v*Je,J(m,2*E+2*A),m[2*E+2*A+1]+=T*Je,J(m,2*E+2*A+1),m[2*E+2*A+1]+=v*be,J(m,2*E+2*A+1),m[2*E+2*A+2]+=T*be,J(m,2*E+2*A+2)}for(E=0;E<_;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=_;E<2*_;E++)m[E]=0;return new o(m,0)};function J(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function Y(I,_){this.g=I,this.h=_}function x(I,_){if(k(_))throw Error("division by zero");if(k(I))return new Y(p,p);if(O(I))return _=x(V(I),_),new Y(V(_.g),V(_.h));if(O(_))return _=x(I,V(_)),new Y(V(_.g),_.h);if(30<I.g.length){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var m=y,E=_;0>=E.l(I);)m=Q(m),E=Q(E);var A=j(m,1),T=j(E,1);for(E=j(E,2),m=j(m,2);!k(E);){var v=T.add(E);0>=v.l(I)&&(A=A.add(m),T=v),E=j(E,1),m=j(m,1)}return _=G(I,A.j(_)),new Y(A,_)}for(A=p;0<=I.l(_);){for(m=Math.max(1,Math.floor(I.m()/_.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=h(m),v=T.j(_);O(v)||0<v.l(I);)m-=E,T=h(m),v=T.j(_);k(T)&&(T=y),A=A.add(T),I=G(I,v)}return new Y(A,I)}t.A=function(I){return x(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)&I.i(E);return new o(m,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)|I.i(E);return new o(m,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)^I.i(E);return new o(m,this.h^I.h)};function Q(I){for(var _=I.g.length+1,m=[],E=0;E<_;E++)m[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(m,I.h)}function j(I,_){var m=_>>5;_%=32;for(var E=I.g.length-m,A=[],T=0;T<E;T++)A[T]=0<_?I.i(T+m)>>>_|I.i(T+m+1)<<32-_:I.i(T+m);return new o(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Eg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Er=o}).apply(typeof pd<"u"?pd:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tg,Fs,wg,po,Ll,Ig,Ag,bg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var C=f++;return{value:u(C,a[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function y(a,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function R(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,C){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return u.prototype[S].apply(g,W)}}function O(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function V(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const S=a.length||0,C=g.length||0;a.length=S+C;for(let W=0;W<C;W++)a[S+W]=g[W]}else a.push(g)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function J(a){return/^[\s\xa0]*$/.test(a)}function Y(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var Q=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function j(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let C=0;C<m.length;C++)f=m[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Lt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class be{constructor(){this.h=this.g=null}add(u,f){const g=Je.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Je=new G(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,Ee=!1,Lt=new be,tr=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(rn)}};var rn=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){T(f)}var u=Je;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ee=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Sa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function nr(a,u){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(Q){e:{try{x(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nr.aa.h.call(this)}}k(nr,qe);var rr={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),_s=0;function xi(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++_s,this.da=this.fa=!1}function jt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ys(a){this.src=a,this.g={},this.h=0}ys.prototype.add=function(a,u,f,g,S){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var W=b(a,u,g,S);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new xi(u,this.src,C,!!g,S),u.fa=f,a.push(u)),u};function w(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(g,S,1),C&&(jt(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,u,f,g){for(var S=0;S<a.length;++S){var C=a[S];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return S}return-1}var D="closure_lm_"+(1e6*Math.random()|0),B={};function L(a,u,f,g,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)L(a,u[C],f,g,S);return null}return f=oe(f),a&&a[sn]?a.K(u,f,h(g)?!!g.capture:!1,S):U(a,u,f,!1,g,S)}function U(a,u,f,g,S,C){if(!u)throw Error("Invalid event type");var W=h(S)?!!S.capture:!!S,Se=K(a);if(Se||(a[D]=Se=new ys(a)),f=Se.add(u,f,g,W,C),f.proxy)return f;if(g=z(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Sa||(S=W),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent($(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return u.call(a.src,a.listener,f)}const u=ne;return a}function H(a,u,f,g,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)H(a,u[C],f,g,S);else g=h(g)?!!g.capture:!!g,f=oe(f),a&&a[sn]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],f=b(C,f,g,S),-1<f&&(jt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=K(a))&&(u=a.g[u.toString()],a=-1,u&&(a=b(u,f,g,S)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[sn])w(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent($(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=K(u))?(w(f,a),f.h==0&&(f.src=null,u[D]=null)):jt(a)}}}function $(a){return a in B?B[a]:B[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new nr(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&q(a),a=f.call(g,u)}return a}function K(a){return a=a[D],a instanceof ys?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(u){return a.handleEvent(u)}),a[Z])}function se(){je.call(this),this.i=new ys(this),this.M=this,this.F=null}k(se,je),se.prototype[sn]=!0,se.prototype.removeEventListener=function(a,u,f,g){H(this,a,u,f,g)};function fe(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new qe(u,a);else if(u instanceof qe)u.target=u.target||a;else{var S=u;u=new qe(g,a),E(u,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var W=u.g=f[C];S=ye(W,g,!0,u)&&S}if(W=u.g=a,S=ye(W,g,!0,u)&&S,S=ye(W,g,!1,u)&&S,f)for(C=0;C<f.length;C++)W=u.g=f[C],S=ye(W,g,!1,u)&&S}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)jt(f[g]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},se.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function ye(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var W=u[C];if(W&&!W.da&&W.capture==f){var Se=W.listener,Ze=W.ha||W.src;W.fa&&w(a.i,W),S=Se.call(Ze,g)!==!1&&S}}return S&&!g.defaultPrevented}function at(a,u,f){if(typeof a=="function")f&&(a=y(a,f));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=at(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class xt extends je{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(a){je.call(this),this.h=a,this.g={}}k(lt,je);var bn=[];function vs(a){j(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}lt.prototype.N=function(){lt.aa.N.call(this),vs(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Dt=l.JSON.parse,Di=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Pa(){}Pa.prototype.h=null;function au(a){return a.h||(a.h=a.i())}function lu(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ca(){qe.call(this,"d")}k(Ca,qe);function ka(){qe.call(this,"c")}k(ka,qe);var sr={},cu=null;function Ni(){return cu=cu||new se}sr.La="serverreachability";function uu(a){qe.call(this,sr.La,a)}k(uu,qe);function Ts(a){const u=Ni();fe(u,new uu(u))}sr.STAT_EVENT="statevent";function hu(a,u){qe.call(this,sr.STAT_EVENT,a),this.stat=u}k(hu,qe);function _t(a){const u=Ni();fe(u,new hu(u,a))}sr.Ma="timingevent";function du(a,u){qe.call(this,sr.Ma,a),this.size=u}k(du,qe);function ws(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function Bm(a,u,f,g,S,C){a.info(function(){if(a.g)if(C)for(var W="",Se=C.split("&"),Ze=0;Ze<Se.length;Ze++){var Te=Se[Ze].split("=");if(1<Te.length){var ct=Te[0];Te=Te[1];var ut=ct.split("_");W=2<=ut.length&&ut[1]=="type"?W+(ct+"="+Te+"&"):W+(ct+"=redacted&")}}else W=null;else W=C;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+W})}function $m(a,u,f,g,S,C,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+C+" "+W})}function Vr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+qm(a,f)+(g?" "+g:"")})}function jm(a,u){a.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function qm(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var W=1;W<S.length;W++)S[W]=""}}}}return Xe(f)}catch{return u}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xa;function Vi(){}k(Vi,Pa),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},xa=new Vi;function Rn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pu}function pu(){this.i=null,this.g="",this.h=!1}var gu={},Da={};function Na(a,u,f){a.L=1,a.v=Ui(on(u)),a.m=f,a.P=!0,mu(a,null)}function mu(a,u){a.F=Date.now(),Li(a),a.A=on(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ku(f.i,"t",g),a.C=0,f=a.j.J,a.h=new pu,a.g=Gu(a.j,f?u:null,!a.m),0<a.O&&(a.M=new xt(y(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(bn[0]=S.toString()),S=bn);for(var C=0;C<S.length;C++){var W=L(f,S[C],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ts(),Bm(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const u=this.M;u&&an(a)==3?u.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=an(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Mu(this.g)))){this.J||ut!=4||u==7||(u==8||0>=Fr?Ts(3):Ts(2)),Oa(this);var f=this.g.Z();this.X=f;t:if(_u(this)){var g=Mu(this.g);a="";var S=g.length,C=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),As(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(C&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,$m(this.i,this.u,this.A,this.l,this.R,ut,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Ze=this.g;if((Se=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Se)){var Te=Se;break t}}Te=null}if(f=Te)Vr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Va(this,f);else{this.o=!1,this.s=3,_t(12),ir(this),As(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<W.length;)if(Mt=Hm(this,W),Mt==Da){ut==4&&(this.s=4,_t(14),f=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==gu){this.s=4,_t(15),Vr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Vr(this.i,this.l,Mt,null),Va(this,Mt);if(_u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||W.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)Vr(this.i,this.l,W,"[Invalid Chunked Response]"),ir(this),As(this);else if(0<W.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),$a(ct),ct.M=!0,_t(11))}}else Vr(this.i,this.l,W,null),Va(this,W);ut==4&&ir(this),this.o&&!this.J&&(ut==4?Hu(this.j,this):(this.o=!1,Li(this)))}else a_(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ir(this),As(this)}}}catch{}finally{}};function _u(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Hm(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?Da:(f=Number(u.substring(f,g)),isNaN(f)?gu:(g+=1,g+f>u.length?Da:(u=u.slice(g,g+f),a.C=g+f,u)))}Rn.prototype.cancel=function(){this.J=!0,ir(this)};function Li(a){a.S=Date.now()+a.I,yu(a,a.I)}function yu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ws(y(a.ba,a),u)}function Oa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jm(this.i,this.A),this.L!=2&&(Ts(),_t(17)),ir(this),this.s=2,As(this)):yu(this,this.S-a)};function As(a){a.j.G==0||a.J||Hu(a.j,a)}function ir(a){Oa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,vs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Va(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||La(f.h,a))){if(!a.K&&La(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Wi(f),qi(f);else break e;Ba(f),_t(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=ws(y(f.Za,f),6e3));if(1>=Tu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ar(f,11)}else if((a.K||f.g==a)&&Wi(f),!J(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Te=S[u];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const ct=Te[3];ct!=null&&(f.la=ct,f.j.info("VER="+f.la));const ut=Te[4];ut!=null&&(f.Aa=ut,f.j.info("SVER="+f.Aa));const Fr=Te[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(g=1.5*Fr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Mt=a.g;if(Mt){const zi=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var C=g.h;C.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ma(C,C.h),C.h=null))}if(g.D){const ja=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ja&&(g.ya=ja,De(g.I,g.D,ja))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=a;if(g.qa=zu(g,g.J?g.ia:null,g.W),W.K){wu(g.h,W);var Se=W,Ze=g.L;Ze&&(Se.I=Ze),Se.B&&(Oa(Se),Li(Se)),g.g=W}else ju(g);0<f.i.length&&Hi(f)}else Te[0]!="stop"&&Te[0]!="close"||ar(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ar(f,7):Ua(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}Ts(4)}catch{}}var Wm=class{constructor(a,u){this.g=a,this.map=u}};function vu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Tu(a){return a.h?1:a.g?a.g.size:0}function La(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ma(a,u){a.g?a.g.add(u):a.h=u}function wu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}vu.prototype.cancel=function(){if(this.i=Iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Iu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return O(a.i)}function Km(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function zm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Au(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=zm(a),g=Km(a),S=g.length,C=0;C<S;C++)u.call(void 0,g[C],f&&f[C],a)}var bu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gm(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var C=a[f].substring(0,g);S=a[f].substring(g+1)}else C=a[f];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Mi(this,a.j),this.o=a.o,this.g=a.g,Fi(this,a.s),this.l=a.l;var u=a.i,f=new Ss;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ru(this,f),this.m=a.m}else a&&(u=String(a).match(bu))?(this.h=!1,Mi(this,u[1]||"",!0),this.o=bs(u[2]||""),this.g=bs(u[3]||"",!0),Fi(this,u[4]),this.l=bs(u[5]||"",!0),Ru(this,u[6]||"",!0),this.m=bs(u[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}or.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Rs(u,Su,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Rs(u,Su,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Rs(f,f.charAt(0)=="/"?Ym:Jm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Rs(f,Zm)),a.join("")};function on(a){return new or(a)}function Mi(a,u,f){a.j=f?bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Fi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ru(a,u,f){u instanceof Ss?(a.i=u,e_(a.i,a.h)):(f||(u=Rs(u,Xm)),a.i=new Ss(u,a.h))}function De(a,u,f){a.i.set(u,f)}function Ui(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Qm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Qm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Su=/[#\/\?@]/g,Jm=/[#\?:]/g,Ym=/[#\?]/g,Xm=/[#\?@]/g,Zm=/#/g;function Ss(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Sn(a){a.g||(a.g=new Map,a.h=0,a.i&&Gm(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ss.prototype,t.add=function(a,u){Sn(this),this.i=null,a=Lr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Pu(a,u){Sn(a),u=Lr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Cu(a,u){return Sn(a),u=Lr(a,u),a.g.has(u)}t.forEach=function(a,u){Sn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){Sn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let C=0;C<S.length;C++)f.push(u[g])}return f},t.V=function(a){Sn(this);let u=[];if(typeof a=="string")Cu(this,a)&&(u=u.concat(this.g.get(Lr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Sn(this),this.i=null,a=Lr(this,a),Cu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ku(a,u,f){Pu(a,u),0<f.length&&(a.i=null,a.g.set(Lr(a,u),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var S=C;W[g]!==""&&(S+="="+encodeURIComponent(String(W[g]))),a.push(S)}}return this.i=a.join("&")};function Lr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function e_(a,u){u&&!a.j&&(Sn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Pu(this,g),ku(this,S,f))},a)),a.j=u}function t_(a,u){const f=new Is;if(l.Image){const g=new Image;g.onload=R(Pn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=R(Pn,f,"TestLoadImage: error",!1,u,g),g.onabort=R(Pn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=R(Pn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function n_(a,u){const f=new Is,g=new AbortController,S=setTimeout(()=>{g.abort(),Pn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(S),C.ok?Pn(f,"TestPingServer: ok",!0,u):Pn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Pn(f,"TestPingServer: error",!1,u)})}function Pn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function r_(){this.g=new Di}function s_(a,u,f){const g=f||"";try{Au(a,function(S,C){let W=S;h(S)&&(W=Xe(S)),u.push(g+C+"="+encodeURIComponent(W))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Bi(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Bi,Pa),Bi.prototype.g=function(){return new $i(this.l,this.j)},Bi.prototype.i=function(a){return function(){return a}}({});function $i(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k($i,se),t=$i.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ps(this):Cs(this),this.readyState==3&&xu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ps(this))},t.Qa=function(a){this.g&&(this.response=a,Ps(this))},t.ga=function(){this.g&&Ps(this)};function Ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Du(a){let u="";return j(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Fa(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Du(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):De(a,u,f))}function Me(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Me,se);var i_=/^https?$/i,o_=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xa.g(),this.v=this.o?au(this.o):au(xa),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Nu(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(o_,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,W]of f)this.g.setRequestHeader(C,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lu(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Nu(this,C)}};function Nu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ou(a),ji(a)}function Ou(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),ji(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vu(this):this.bb())},t.bb=function(){Vu(this)};function Vu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)at(a.Ea,0,a);else if(fe(a,"readystatechange"),an(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=W===0){var S=String(a.D).match(bu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!i_.test(S?S.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var C=2<an(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Ou(a)}}finally{ji(a)}}}}function ji(a,u){if(a.g){Lu(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function Lu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Dt(u)}};function Mu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function a_(a){const u={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(J(a[g]))continue;var f=A(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[S]||[];u[S]=C,C.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Fu(a){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,a),this.cb=ks("retryDelaySeedMs",1e4,a),this.Wa=ks("forwardChannelMaxRetries",2,a),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new vu(a&&a.concurrentRequestLimit),this.Da=new r_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fu.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){_t(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=zu(this,null,this.W),Hi(this)};function Ua(a){if(Uu(a),a.G==3){var u=a.U++,f=on(a.I);if(De(f,"SID",a.K),De(f,"RID",u),De(f,"TYPE","terminate"),xs(a,f),u=new Rn(a,a.j,u),u.L=2,u.v=Ui(on(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Gu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Li(u)}Ku(a)}function qi(a){a.g&&($a(a),a.g.cancel(),a.g=null)}function Uu(a){qi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Hi(a){if(!Eu(a.h)&&!a.s){a.s=!0;var u=a.Ga;de||tr(),Ee||(de(),Ee=!0),Lt.add(u,a),a.B=0}}function l_(a,u){return Tu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ws(y(a.Ga,a,u),Wu(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Rn(this,this.j,a);let C=this.o;if(this.S&&(C?(C=_(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=$u(this,S,u),f=on(this.I),De(f,"RID",a),De(f,"CVER",22),this.D&&De(f,"X-HTTP-Session-Id",this.D),xs(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Du(C)))+"&"+u:this.m&&Fa(f,this.m,C)),Ma(this.h,S),this.Ua&&De(f,"TYPE","init"),this.P?(De(f,"$req",u),De(f,"SID","null"),S.T=!0,Na(S,f,null)):Na(S,f,u),this.G=2}}else this.G==3&&(a?Bu(this,a):this.i.length==0||Eu(this.h)||Bu(this))};function Bu(a,u){var f;u?f=u.l:f=a.U++;const g=on(a.I);De(g,"SID",a.K),De(g,"RID",f),De(g,"AID",a.T),xs(a,g),a.m&&a.o&&Fa(g,a.m,a.o),f=new Rn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=$u(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ma(a.h,f),Na(f,g,u)}function xs(a,u){a.H&&j(a.H,function(f,g){De(u,g,f)}),a.l&&Au({},function(f,g){De(u,g,f)})}function $u(a,u,f){f=Math.min(a.i.length,f);var g=a.l?y(a.l.Na,a.l,a):null;e:{var S=a.i;let C=-1;for(;;){const W=["count="+f];C==-1?0<f?(C=S[0].g,W.push("ofs="+C)):C=0:W.push("ofs="+C);let Se=!0;for(let Ze=0;Ze<f;Ze++){let Te=S[Ze].g;const ct=S[Ze].map;if(Te-=C,0>Te)C=Math.max(0,S[Ze].g-100),Se=!1;else try{s_(ct,W,"req"+Te+"_")}catch{g&&g(ct)}}if(Se){g=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function ju(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;de||tr(),Ee||(de(),Ee=!0),Lt.add(u,a),a.v=0}}function Ba(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ws(y(a.Fa,a),Wu(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ws(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),qi(this),qu(this))};function $a(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function qu(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=on(a.qa);De(u,"RID","rpc"),De(u,"SID",a.K),De(u,"AID",a.T),De(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(u,"TO",a.ja),De(u,"TYPE","xmlhttp"),xs(a,u),a.m&&a.o&&Fa(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ui(on(u)),f.m=null,f.P=!0,mu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,qi(this),Ba(this),_t(19))};function Wi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Hu(a,u){var f=null;if(a.g==u){Wi(a),$a(a),a.g=null;var g=2}else if(La(a.h,u))f=u.D,wu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=Ni(),fe(g,new du(g,f)),Hi(a)}else ju(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&l_(a,u)||g==2&&Ba(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function Wu(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function ar(a,u){if(a.j.info("Error code "+u),u==2){var f=y(a.fb,a),g=a.Xa;const S=!g;g=new or(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mi(g,"https"),Ui(g),S?t_(g.toString(),f):n_(g.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(u),Ku(a),Uu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Ku(a){if(a.G=0,a.ka=[],a.l){const u=Iu(a.h);(u.length!=0||a.i.length!=0)&&(V(a.ka,u),V(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function zu(a,u,f){var g=f instanceof or?on(f):new or(f);if(g.g!="")u&&(g.g=u+"."+g.g),Fi(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new or(null);g&&Mi(C,g),u&&(C.g=u),S&&Fi(C,S),f&&(C.l=f),g=C}return f=a.D,u=a.ya,f&&u&&De(g,f,u),De(g,"VER",a.la),xs(a,g),g}function Gu(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Me(new Bi({eb:f})):new Me(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qu(){}t=Qu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ki(){}Ki.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){se.call(this),this.g=new Fu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!J(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!J(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Mr(this)}k(Rt,se),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ua(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xe(a),a=f);u.i.push(new Wm(u.Ya++,a)),u.G==3&&Hi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ua(this.g),delete this.g,Rt.aa.N.call(this)};function Ju(a){Ca.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(Ju,Ca);function Yu(){ka.call(this),this.status=1}k(Yu,ka);function Mr(a){this.g=a}k(Mr,Qu),Mr.prototype.ua=function(){fe(this.g,"a")},Mr.prototype.ta=function(a){fe(this.g,new Ju(a))},Mr.prototype.sa=function(a){fe(this.g,new Yu)},Mr.prototype.ra=function(){fe(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,bg=function(){return new Ki},Ag=function(){return Ni()},Ig=sr,Ll={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,po=Oi,fu.COMPLETE="complete",wg=fu,lu.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",se.prototype.listen=se.prototype.K,Fs=lu,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Tg=Me}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const gd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new yc("@firebase/firestore");function Os(){return Rr.logLevel}function X(t,...e){if(Rr.logLevel<=_e.DEBUG){const n=e.map(kc);Rr.debug(`Firestore (${fs}): ${t}`,...n)}}function Tn(t,...e){if(Rr.logLevel<=_e.ERROR){const n=e.map(kc);Rr.error(`Firestore (${fs}): ${t}`,...n)}}function is(t,...e){if(Rr.logLevel<=_e.WARN){const n=e.map(kc);Rr.warn(`Firestore (${fs}): ${t}`,...n)}}function kc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function Ae(t,e){t||le()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class y0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class v0{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Rg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new ft(e)}}class E0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class T0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new E0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ae(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new w0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=A0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ke(0,0))}static max(){return new ce(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ci?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends ci{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const b0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends ci{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return b0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new te(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ve.fromString(e))}static fromName(e){return new re(Ve.fromString(e).popFirst(5))}static empty(){return new re(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ve(e.slice()))}}function R0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Jn(s,re.empty(),e)}function S0(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ce.min(),re.empty(),-1)}static max(){return new Jn(ce.max(),re.empty(),-1)}}function P0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==C0)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function x0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xc.oe=-1;function da(t){return t==null}function Fo(t){return t===0&&1/t==-1/0}function D0(t){return typeof t=="number"&&Number.isInteger(t)&&!Fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _d(this.data.getIterator())}getIteratorFrom(e){return new _d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class _d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new it(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cg("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const N0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=N0.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nc(t){const e=t.mapValue.fields.__previous_value__;return Dc(e)?Nc(e):e}function ui(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={mapValue:{}};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dc(t)?4:L0(t)?9007199254740991:V0(t)?10:11:le()}function Zt(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Yn(s.timestampValue),l=Yn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),l=Ue(i.doubleValue);return o===l?Fo(o)===Fo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],Zt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(md(o)!==md(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Zt(o[c],l[c])))return!1;return!0}(t,e);default:return le()}}function di(t,e){return(t.values||[]).find(n=>Zt(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ue(i.integerValue||i.doubleValue),c=Ue(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return yd(t.timestampValue,e.timestampValue);case 4:return yd(ui(t),ui(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Sr(i),c=Sr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=we(l[h],c[h]);if(d!==0)return d}return we(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=we(Ue(i.latitude),Ue(o.latitude));return l!==0?l:we(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},y=o.fields||{},R=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=y.value)===null||c===void 0?void 0:c.arrayValue,O=we(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:vd(R,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===to.mapValue&&o===to.mapValue)return 0;if(i===to.mapValue)return 1;if(o===to.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=we(c[p],d[p]);if(y!==0)return y;const R=as(l[c[p]],h[d[p]]);if(R!==0)return R}return we(c.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function yd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Yn(t),r=Yn(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function vd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=as(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function ls(t){return Ml(t)}function Ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ml(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ml(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Fl(t){return!!t&&"integerValue"in t}function Oc(t){return!!t&&"arrayValue"in t}function Ed(t){return!!t&&"nullValue"in t}function Td(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function V0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ys(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Nr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Ys(this.value))}}function kg(t){const e=[];return Nr(t.fields,(n,r)=>{const s=new rt([n]);if(go(r)){const i=kg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,ce.min(),ce.min(),ce.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,ce.min(),ce.min(),At.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ce.min(),ce.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.position=e,this.inclusive=n}}function wd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=as(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Id(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function M0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{}class We extends xg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U0(e,n,r):n==="array-contains"?new j0(e,r):n==="in"?new q0(e,r):n==="not-in"?new H0(e,r):n==="array-contains-any"?new W0(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B0(e,r):new $0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends xg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return Dg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dg(t){return t.op==="and"}function Ng(t){return F0(t)&&Dg(t)}function F0(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Ul(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(Ng(t))return t.filters.map(e=>Ul(e)).join(",");{const e=t.filters.map(n=>Ul(n)).join(",");return`${t.op}(${e})`}}function Og(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Og(o,s.filters[l]),!0):!1}(t,e):void le()}function Vg(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(Vg).join(" ,")+"}"}(t):"Filter"}class U0 extends We{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class B0 extends We{constructor(e,n){super(e,"in",n),this.keys=Lg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $0 extends We{constructor(e,n){super(e,"not-in",n),this.keys=Lg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Lg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class j0 extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Oc(n)&&di(n.arrayValue,this.value)}}class q0 extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class H0 extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!di(this.value.arrayValue,n)}}class W0 extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Oc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ad(t,e=null,n=[],r=[],s=null,i=null,o=null){return new K0(t,e,n,r,s,i,o)}function Vc(t){const e=he(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ul(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.ue=n}return e.ue}function Lc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Og(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Id(t.startAt,e.startAt)&&Id(t.endAt,e.endAt)}function Bl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function z0(t,e,n,r,s,i,o,l){return new fa(t,e,n,r,s,i,o,l)}function Mg(t){return new fa(t)}function bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function G0(t){return t.collectionGroup!==null}function Xs(t){const e=he(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(rt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Bo(i,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Bo(rt.keyField(),r))}return e.ce}function Yt(t){const e=he(t);return e.le||(e.le=Q0(e,Xs(t))),e.le}function Q0(t,e){if(t.limitType==="F")return Ad(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bo(s.field,i)});const n=t.endAt?new Uo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uo(t.startAt.position,t.startAt.inclusive):null;return Ad(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $l(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return Lc(Yt(t),Yt(e))&&t.limitType===e.limitType}function Fg(t){return`${Vc(Yt(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vg(s)).join(", ")}]`),da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ls(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=wd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Xs(r),s)||r.endAt&&!function(o,l,c){const h=wd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Xs(r),s))}(t,e)}function J0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ug(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=Y0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Y0(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?as(c,h):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Nr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Pg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Le(re.comparator);function wn(){return X0}const Bg=new Le(re.comparator);function Us(...t){let e=Bg;for(const n of t)e=e.insert(n.key,n);return e}function $g(t){let e=Bg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return Zs()}function jg(){return Zs()}function Zs(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z0=new Le(re.comparator),eA=new it(re.comparator);function ge(...t){let e=eA;for(const n of t)e=e.add(n);return e}const tA=new it(we);function nA(){return tA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fo(e)?"-0":e}}function qg(t){return{integerValue:""+t}}function rA(t,e){return D0(e)?qg(e):Mc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this._=void 0}}function sA(t,e,n){return t instanceof $o?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Dc(i)&&(i=Nc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof fi?Wg(t,e):t instanceof pi?Kg(t,e):function(s,i){const o=Hg(s,i),l=Rd(o)+Rd(s.Pe);return Fl(o)&&Fl(s.Pe)?qg(l):Mc(s.serializer,l)}(t,e)}function iA(t,e,n){return t instanceof fi?Wg(t,e):t instanceof pi?Kg(t,e):n}function Hg(t,e){return t instanceof jo?function(r){return Fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $o extends ma{}class fi extends ma{constructor(e){super(),this.elements=e}}function Wg(t,e){const n=zg(e);for(const r of t.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class pi extends ma{constructor(e){super(),this.elements=e}}function Kg(t,e){let n=zg(e);for(const r of t.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class jo extends ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rd(t){return Ue(t.integerValue||t.doubleValue)}function zg(t){return Oc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof pi&&s instanceof pi?os(r.elements,s.elements,Zt):r instanceof jo&&s instanceof jo?Zt(r.Pe,s.Pe):r instanceof $o&&s instanceof $o}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function Gg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fc(t.key,Ut.none()):new Ri(t.key,t.data,Ut.none());{const n=t.data,r=At.empty();let s=new it(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new er(t.key,r,new Ct(s.toArray()),Ut.none())}}function lA(t,e,n){t instanceof Ri?function(s,i,o){const l=s.value.clone(),c=Pd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof er?function(s,i,o){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Pd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Qg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ei(t,e,n,r){return t instanceof Ri?function(i,o,l,c){if(!mo(i.precondition,o))return l;const h=i.value.clone(),d=Cd(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof er?function(i,o,l,c){if(!mo(i.precondition,o))return l;const h=Cd(i.fieldTransforms,c,o),d=o.data;return d.setAll(Qg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Hg(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function Sd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&os(r,s,(i,o)=>oA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ri extends _a{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class er extends _a{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,iA(o,l,n[s]))}return r}function Cd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,sA(i,o,e))}return r}class Fc extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uA extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Gg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Sd(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Sd(n,r))}}class Uc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=function(){return Z0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Uc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ve;function pA(t){switch(t){default:return le();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Jg(t){if(t===void 0)return Tn("GRPC error has no .code"),F.UNKNOWN;switch(t){case $e.OK:return F.OK;case $e.CANCELLED:return F.CANCELLED;case $e.UNKNOWN:return F.UNKNOWN;case $e.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case $e.INTERNAL:return F.INTERNAL;case $e.UNAVAILABLE:return F.UNAVAILABLE;case $e.UNAUTHENTICATED:return F.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case $e.NOT_FOUND:return F.NOT_FOUND;case $e.ALREADY_EXISTS:return F.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return F.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case $e.ABORTED:return F.ABORTED;case $e.OUT_OF_RANGE:return F.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return F.UNIMPLEMENTED;case $e.DATA_LOSS:return F.DATA_LOSS;default:return le()}}(ve=$e||($e={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=new Er([4294967295,4294967295],0);function kd(t){const e=gA().encode(t),n=new Eg;return n.update(e),new Uint8Array(n.digest())}function xd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,r],0),new Er([s,i],0)]}class Bc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Er.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Er.fromNumber(r)));return s.compare(mA)===1&&(s=new Er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=kd(e),[r,s]=xd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=kd(e),[r,s]=xd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(ce.min(),s,new Le(we),wn(),ge())}}class Si{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Si(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Yg{constructor(e,n){this.targetId=e,this.me=n}}class Xg{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Dd{constructor(){this.fe=0,this.ge=Od(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Si(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Od()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _A{constructor(e){this.Le=e,this.Be=new Map,this.ke=wn(),this.qe=Nd(),this.Qe=new Le(we)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Bl(i))if(r===0){const o=new re(i.path);this.Ue(n,o,gt.newNoDocument(o,ce.min()))}else Ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Sr(r).toUint8Array()}catch(c){if(c instanceof Cg)return is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bc(o,s,i)}catch(c){return is(c instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Bl(l.target)){const c=new re(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,gt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ge();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ya(e,n,this.Qe,this.ke,r);return this.ke=wn(),this.qe=Nd(),this.Qe=new Le(we),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Dd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(we),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Nd(){return new Le(re.comparator)}function Od(){return new Le(re.comparator)}const yA={asc:"ASCENDING",desc:"DESCENDING"},vA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EA={and:"AND",or:"OR"};class TA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jl(t,e){return t.useProto3Json||da(e)?e:{value:e}}function qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wA(t,e){return qo(t,e.toTimestamp())}function Xt(t){return Ae(!!t),ce.fromTimestamp(function(n){const r=Yn(n);return new Ke(r.seconds,r.nanos)}(t))}function $c(t,e){return ql(t,e).canonicalString()}function ql(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function em(t){const e=Ve.fromString(t);return Ae(im(e)),e}function Hl(t,e){return $c(t.databaseId,e.path)}function cl(t,e){const n=em(e);if(n.get(1)!==t.databaseId.projectId)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(nm(n))}function tm(t,e){return $c(t.databaseId,e)}function IA(t){const e=em(t);return e.length===4?Ve.emptyPath():nm(e)}function Wl(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nm(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vd(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function AA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ae(d===void 0||typeof d=="string"),ot.fromBase64String(d||"")):(Ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ot.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?F.UNKNOWN:Jg(h.code);return new te(d,h.message||"")}(o);n=new Xg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cl(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):ce.min(),l=new At({mapValue:{fields:r.document.fields}}),c=gt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new _o(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cl(t,r.document),i=r.readTime?Xt(r.readTime):ce.min(),o=gt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new _o([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cl(t,r.document),i=r.removedTargetIds||[];n=new _o([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fA(s,i),l=r.targetId;n=new Yg(l,o)}}return n}function bA(t,e){let n;if(e instanceof Ri)n={update:Vd(t,e.key,e.value)};else if(e instanceof Fc)n={delete:Hl(t,e.key)};else if(e instanceof er)n={update:Vd(t,e.key,e.data),updateMask:OA(e.fieldMask)};else{if(!(e instanceof uA))return le();n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof $o)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function RA(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(ce.min())&&(o=Xt(i)),new aA(o,s.transformResults||[])}(n,e))):[]}function SA(t,e){return{documents:[tm(t,e.path)]}}function PA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tm(t,s);const i=function(h){if(h.length!==0)return sm(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(y){return{field:Hr(y.field),direction:xA(y.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=jl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function CA(t){let e=IA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=rm(p);return y instanceof en&&Ng(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(k){return new Bo(Wr(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,da(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,R=p.values||[];return new Uo(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,R=p.values||[];return new Uo(R,y)}(n.endAt)),z0(e,s,o,i,l,"F",c,h)}function kA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Wr(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Wr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>rm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function xA(t){return yA[t]}function DA(t){return vA[t]}function NA(t){return EA[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function Wr(t){return rt.fromServerFormat(t.fieldPath)}function sm(t){return t instanceof We?function(n){if(n.op==="=="){if(Td(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(Ed(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Td(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(Ed(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:DA(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>sm(s));return r.length===1?r[0]:{compositeFilter:{op:NA(n.op),filters:r}}}(t):le()}function OA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),l=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.ct=e}}function LA(t){const e=CA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$l(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.un=new FA}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Jn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class FA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new cs(0)}static kn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ei(r.mutation,s,Ct.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const s=pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Us();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=wn();const o=Zs(),l=function(){return Zs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof er)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ei(d.mutation,h,d.mutation.getFieldMask(),Ke.now())):o.set(h.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new BA(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new Le((o,l)=>o-l),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ct.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=jg();d.forEach(y=>{if(!i.has(y)){const R=Gg(n.get(y),r.get(y));R!==null&&p.set(y,R),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):G0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(pr());let l=-1,c=i;return o.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ge())).next(d=>({batchId:l,changes:$g(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,y){return new fa(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let l=Us();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ei(d.mutation,h,Ct.empty(),Ke.now()),ga(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:LA(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.overlays=new Le(re.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=pr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dA(n,r));let i=this.Ir.get(n);i===void 0&&(i=ge(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.Tr=new it(Qe.Er),this.dr=new it(Qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Ve([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Ve([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=ge();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||we(e.wr,n.wr)}static Ar(e,n){return we(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(Qe.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(we);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new re(i),0);let l=new it(we);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Qe(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.Mr=e,this.docs=function(){return new Le(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=wn();const o=n.path,l=new re(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||P0(S0(d),r)<=0||(s.has(d.key)||ga(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zA(this)}getSize(e){return M.resolve(this.size)}}class zA extends UA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.persistence=e,this.Nr=new ps(n=>Vc(n),Lc),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jc,this.targetCount=0,this.kr=cs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new xc(0),this.Kr=!1,this.Kr=!0,this.$r=new HA,this.referenceDelegate=e(this),this.Ur=new GA(this),this.indexManager=new MA,this.remoteDocumentCache=function(s){return new KA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VA(n),this.Gr=new jA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new JA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class JA extends k0{constructor(e){super(),this.currentSequenceNumber=e}}class qc{constructor(e){this.persistence=e,this.Jr=new jc,this.Yr=null}static Zr(e){return new qc(e)}get Xr(){if(this.Yr)return this.Yr;throw le()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ge(),s=ge();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return VE()?8:x0(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YA;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Os()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Os()<=_e.DEBUG&&X("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Os()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):M.resolve())}Yi(e,n){if(bd(n))return M.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=$l(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ge(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,$l(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return bd(n)||s.isEqual(ce.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(Os()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.rs(e,o,n,R0(s,-1)).next(l=>l))})}ts(e,n){let r=new it(Ug(e));return n.forEach((s,i)=>{ga(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Os()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",qr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Jn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Le(we),this._s=new ps(i=>Vc(i),Lc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $A(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eb(t,e,n,r){return new ZA(t,e,n,r)}async function om(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ge();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function tb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,y=p.keys();let R=M.resolve();return y.forEach(k=>{R=R.next(()=>d.getEntry(c,k)).next(O=>{const V=h.docVersions.get(k);Ae(V!==null),O.version.compareTo(V)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function am(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nb(t,e){const n=he(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const y=s.get(p);if(!y)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let R=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(p,R),function(O,V,G){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(y,R,d)&&l.push(n.Ur.updateTargetData(i,R))});let c=wn(),h=ge();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(rb(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(ce.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function rb(t,e,n){let r=ge(),s=ge();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=wn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function sb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ib(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=he(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ld(t,e,n){const r=he(t);let s=ce.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=he(c),y=p._s.get(d);return y!==void 0?M.resolve(p.os.get(y)):p.Ur.getTargetData(h,d)}(r,o,Yt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ge())).next(l=>(ob(r,J0(e),l),{documents:l,Ts:i})))}function ob(t,e,n){let r=t.us.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Md{constructor(){this.activeTargetIds=nA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ab{constructor(){this.so=new Md,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Md,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function ul(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class hb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=ul(),c=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw is("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=cb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ul();return new Promise((o,l)=>{const c=new Tg;c.setWithCredentials(!0),c.listenOnce(wg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case po.NO_ERROR:const d=c.getResponseJson();X(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case po.TIMEOUT:X(ht,`RPC '${e}' ${i} timed out`),l(new te(F.DEADLINE_EXCEEDED,"Request time out"));break;case po.HTTP_ERROR:const p=c.getStatus();if(X(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const k=function(V){const G=V.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(G)>=0?G:F.UNKNOWN}(R.status);l(new te(k,R.message))}else l(new te(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(F.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(ht,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(ht,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=ul(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bg(),l=Ag(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(ht,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let y=!1,R=!1;const k=new ub({Io:V=>{R?X(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(y||(X(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),X(ht,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},To:()=>p.close()}),O=(V,G,J)=>{V.listen(G,Y=>{try{J(Y)}catch(x){setTimeout(()=>{throw x},0)}})};return O(p,Fs.EventType.OPEN,()=>{R||(X(ht,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),O(p,Fs.EventType.CLOSE,()=>{R||(R=!0,X(ht,`RPC '${e}' stream ${s} transport closed`),k.So())}),O(p,Fs.EventType.ERROR,V=>{R||(R=!0,is(ht,`RPC '${e}' stream ${s} transport errored:`,V),k.So(new te(F.UNAVAILABLE,"The operation could not be completed")))}),O(p,Fs.EventType.MESSAGE,V=>{var G;if(!R){const J=V.data[0];Ae(!!J);const Y=J,x=Y.error||((G=Y[0])===null||G===void 0?void 0:G.error);if(x){X(ht,`RPC '${e}' stream ${s} received error:`,x);const Q=x.status;let j=function(m){const E=$e[m];if(E!==void 0)return Jg(E)}(Q),I=x.message;j===void 0&&(j=F.INTERNAL,I="Unknown error status: "+Q+" with message "+x.message),R=!0,k.So(new te(j,I)),p.close()}else X(ht,`RPC '${e}' stream ${s} received:`,J),k.bo(J)}}),O(l,Ig.STAT_EVENT,V=>{V.stat===Ll.PROXY?X(ht,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Ll.NOPROXY&&X(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function hl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return new TA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new lm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new te(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class db extends cm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=AA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Xt(o.readTime):ce.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wl(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Bl(c)?{documents:SA(i,c)}:{query:PA(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Zg(i,o.resumeToken);const h=jl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=qo(i,o.snapshotVersion.toTimestamp());const h=jl(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=kA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wl(this.serializer),n.removeTarget=e,this.a_(n)}}class fb extends cm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RA(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,ql(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ql(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tn(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Or(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=he(c);h.L_.add(4),await Pi(h),h.q_.set("Unknown"),h.L_.delete(4),await Ea(h)}(this))})}),this.q_=new gb(r,s)}}async function Ea(t){if(Or(t))for(const e of t.B_)await e(!0)}async function Pi(t){for(const e of t.B_)await e(!1)}function um(t,e){const n=he(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Gc(n)?zc(n):gs(n).r_()&&Kc(n,e))}function Wc(t,e){const n=he(t),r=gs(n);n.N_.delete(e),r.r_()&&hm(n,e),n.N_.size===0&&(r.r_()?r.o_():Or(n)&&n.q_.set("Unknown"))}function Kc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function hm(t,e){t.Q_.xe(e),gs(t).R_(e)}function zc(t){t.Q_=new _A({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function Gc(t){return Or(t)&&!gs(t).n_()&&t.N_.size>0}function Or(t){return he(t).L_.size===0}function dm(t){t.Q_=void 0}async function _b(t){t.q_.set("Online")}async function yb(t){t.N_.forEach((e,n)=>{Kc(t,e)})}async function vb(t,e){dm(t),Gc(t)?(t.q_.M_(e),zc(t)):t.q_.set("Unknown")}async function Eb(t,e,n){if(t.q_.set("Online"),e instanceof Xg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(t,r)}else if(e instanceof _o?t.Q_.Ke(e):e instanceof Yg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ce.min()))try{const r=await am(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ot.EMPTY_BYTE_STRING,d.snapshotVersion)),hm(i,c);const p=new Bn(d.target,c,h,d.sequenceNumber);Kc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Ho(t,r)}}async function Ho(t,e,n){if(!bi(e))throw e;t.L_.add(1),await Pi(t),t.q_.set("Offline"),n||(n=()=>am(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ea(t)})}function fm(t,e){return e().catch(n=>Ho(t,n,e))}async function Ta(t){const e=he(t),n=Xn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Tb(e);)try{const s=await sb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,wb(e,s)}catch(s){await Ho(e,s)}pm(e)&&gm(e)}function Tb(t){return Or(t)&&t.O_.length<10}function wb(t,e){t.O_.push(e);const n=Xn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function pm(t){return Or(t)&&!Xn(t).n_()&&t.O_.length>0}function gm(t){Xn(t).start()}async function Ib(t){Xn(t).p_()}async function Ab(t){const e=Xn(t);for(const n of t.O_)e.m_(n.mutations)}async function bb(t,e,n){const r=t.O_.shift(),s=Uc.from(r,e,n);await fm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function Rb(t,e){e&&Xn(t).V_&&await async function(r,s){if(function(o){return pA(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();Xn(r).s_(),await fm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(r)}}(t,e),pm(t)&&gm(t)}async function Ud(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Or(n);n.L_.add(3),await Pi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ea(n)}async function Sb(t,e){const n=he(t);e?(n.L_.delete(2),await Ea(n)):e||(n.L_.add(2),await Pi(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,s){const i=he(n);return i.w_(),new db(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:_b.bind(null,t),Ro:yb.bind(null,t),mo:vb.bind(null,t),d_:Eb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Gc(t)?zc(t):t.q_.set("Unknown")):(await t.K_.stop(),dm(t))})),t.K_}function Xn(t){return t.U_||(t.U_=function(n,r,s){const i=he(n);return i.w_(),new fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ib.bind(null,t),mo:Rb.bind(null,t),f_:Ab.bind(null,t),g_:bb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ta(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Qc(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jc(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),bi(t))return new te(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new Le(this.comparator)}static emptySet(e){return new Zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.W_=new Le(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):le():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new us(e,n,Zr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Cb{constructor(){this.queries=$d(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=$d(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new te(F.ABORTED,"Firestore shutting down"))}}function $d(){return new ps(t=>Fg(t),pa)}async function kb(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Pb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Jc(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Yc(n)}async function xb(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Db(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Yc(n)}function Nb(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Yc(t){t.Y_.forEach(e=>{e.next()})}var zl,jd;(jd=zl||(zl={})).ea="default",jd.Cache="cache";class Ob{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.key=e}}class _m{constructor(e){this.key=e}}class Vb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=Ug(e),this.Ra=new Zr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Bd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const y=s.get(d),R=ga(this.query,p)?p:null,k=!!y&&this.mutatedKeys.has(y.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;y&&R?y.data.isEqual(R.data)?k!==O&&(r.track({type:3,doc:R}),V=!0):this.ga(y,R)||(r.track({type:2,doc:R}),V=!0,(c&&this.Aa(R,c)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),V=!0):y&&!R&&(r.track({type:1,doc:y}),V=!0,(c||h)&&(l=!0)),V&&(R?(o=o.add(R),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(R,k){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return O(R)-O(k)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new us(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _m(r))}),this.da.forEach(r=>{e.has(r)||n.push(new mm(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return us.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Lb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mb{constructor(e){this.key=e,this.va=!1}}class Fb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ps(l=>Fg(l),pa),this.Ma=new Map,this.xa=new Set,this.Oa=new Le(re.comparator),this.Na=new Map,this.La=new jc,this.Ba={},this.ka=new Map,this.qa=cs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Ub(t,e,n=!0){const r=Im(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ym(r,e,n,!0),s}async function Bb(t,e){const n=Im(t);await ym(n,e,!0,!1)}async function ym(t,e,n,r){const s=await ib(t.localStore,Yt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $b(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&um(t.remoteStore,s),l}async function $b(t,e,n,r,s){t.Ka=(p,y,R)=>async function(O,V,G,J){let Y=V.view.ma(G);Y.ns&&(Y=await Ld(O.localStore,V.query,!1).then(({documents:I})=>V.view.ma(I,Y)));const x=J&&J.targetChanges.get(V.targetId),Q=J&&J.targetMismatches.get(V.targetId)!=null,j=V.view.applyChanges(Y,O.isPrimaryClient,x,Q);return Hd(O,V.targetId,j.wa),j.snapshot}(t,p,y,R);const i=await Ld(t.localStore,e,!0),o=new Vb(e,i.Ts),l=o.ma(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Hd(t,n,h.wa);const d=new Lb(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function jb(t,e,n){const r=he(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!pa(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wc(r.remoteStore,s.targetId),Gl(r,s.targetId)}).catch(Ai)):(Gl(r,s.targetId),await Kl(r.localStore,s.targetId,!0))}async function qb(t,e){const n=he(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wc(n.remoteStore,r.targetId))}async function Hb(t,e,n){const r=Yb(t);try{const s=await function(o,l){const c=he(o),h=Ke.now(),d=l.reduce((R,k)=>R.add(k.key),ge());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=wn(),O=ge();return c.cs.getEntries(R,d).next(V=>{k=V,k.forEach((G,J)=>{J.isValidDocument()||(O=O.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,k)).next(V=>{p=V;const G=[];for(const J of l){const Y=cA(J,p.get(J.key).overlayedDocument);Y!=null&&G.push(new er(J.key,Y,kg(Y.value.mapValue),Ut.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,G,l)}).next(V=>{y=V;const G=V.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(R,V.batchId,G)})}).then(()=>({batchId:y.batchId,changes:$g(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new Le(we)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ci(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=Jc(s,"Failed to persist write");n.reject(i)}}async function vm(t,e){const n=he(t);try{const r=await nb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ae(o.va):s.removedDocuments.size>0&&(Ae(o.va),o.va=!1))}),await Ci(n,r,e)}catch(r){await Ai(r)}}function qd(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&Yc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wb(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Le(re.comparator);o=o.insert(i,gt.newNoDocument(i,ce.min()));const l=ge().add(i),c=new ya(ce.min(),new Map,new Le(we),o,l);await vm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Xc(r)}else await Kl(r.localStore,e,!1).then(()=>Gl(r,e,n)).catch(Ai)}async function Kb(t,e){const n=he(t),r=e.batch.batchId;try{const s=await tb(n.localStore,e);Tm(n,r,null),Em(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(n,s)}catch(s){await Ai(s)}}async function zb(t,e,n){const r=he(t);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ae(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Tm(r,e,n),Em(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ci(r,s)}catch(s){await Ai(s)}}function Em(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Tm(t,e,n){const r=he(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||wm(t,r)})}function wm(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Wc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Xc(t))}function Hd(t,e,n){for(const r of n)r instanceof mm?(t.La.addReference(r.key,e),Gb(t,r)):r instanceof _m?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||wm(t,r.key)):le()}function Gb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),Xc(t))}function Xc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new Mb(n)),t.Oa=t.Oa.insert(n,r),um(t.remoteStore,new Bn(Yt(Mg(n.path)),r,"TargetPurposeLimboResolution",xc.oe))}}async function Ci(t,e,n){const r=he(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,y=>M.forEach(y.$i,R=>d.persistence.referenceDelegate.addReference(p,y.targetId,R)).next(()=>M.forEach(y.Ui,R=>d.persistence.referenceDelegate.removeReference(p,y.targetId,R)))))}catch(p){if(!bi(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const R=d.os.get(y),k=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(k);d.os=d.os.insert(y,O)}}}(r.localStore,i))}async function Qb(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await om(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new te(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(n,r.hs)}}function Jb(t,e){const n=he(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let s=ge();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Im(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wb.bind(null,e),e.Ca.d_=Db.bind(null,e.eventManager),e.Ca.$a=Nb.bind(null,e.eventManager),e}function Yb(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zb.bind(null,e),e}class Wo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eb(this.persistence,new XA,e.initialUser,this.serializer)}Ga(e){return new QA(qc.Zr,this.serializer)}Wa(e){return new ab}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wo.provider={build:()=>new Wo};class Ql{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qb.bind(null,this.syncEngine),await Sb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Cb}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=function(i){return new hb(i)}(e.databaseInfo);return function(i,o,l,c){return new pb(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new mb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qd(this.syncEngine,n,0),function(){return Fd.D()?new Fd:new lb}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new Fb(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);X("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ql.provider={build:()=>new Ql};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Sg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eR(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ud(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ud(e.remoteStore,s)),t._onlineComponents=e}async function eR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await dl(t,new Wo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await dl(t,new Wo);return t._offlineComponents}async function Am(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Wd(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Wd(t,new Ql))),t._onlineComponents}function tR(t){return Am(t).then(e=>e.syncEngine)}async function nR(t){const e=await Am(t),n=e.eventManager;return n.onListen=Ub.bind(null,e.syncEngine),n.onUnlisten=jb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Bb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qb.bind(null,e.syncEngine),n}function rR(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Xb({next:y=>{d.Za(),o.enqueueAndForget(()=>xb(i,p)),y.fromCache&&c.source==="server"?h.reject(new te(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Ob(l,d,{includeMetadataChanges:!0,_a:!0});return kb(i,p)}(await nR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e,n){if(!n)throw new te(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sR(t,e,n,r){if(e===!0&&r===!0)throw new te(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zd(t){if(!re.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gd(t){if(re.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zc(t);throw new te(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _0;switch(r.type){case"firstParty":return new T0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Kd.delete(n),r.terminate())}(this),Promise.resolve()}}function iR(t,e,n,r={}){var s;const i=(t=Cr(t,wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ft.MOCK_USER;else{l=PE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ft(h)}t._authCredentials=new y0(new Rg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Kn extends Ia{constructor(e,n,r){super(e,n,Mg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new re(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function fl(t,e,...n){if(t=Fe(t),Rm("collection","path",e),t instanceof wa){const r=Ve.fromString(e,...n);return Gd(r),new Kn(t,null,r)}{if(!(t instanceof Vt||t instanceof Kn))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Gd(r),new Kn(t.firestore,null,r)}}function Sm(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=Sg.newId()),Rm("doc","path",e),t instanceof wa){const r=Ve.fromString(e,...n);return zd(r),new Vt(t,null,new re(r))}{if(!(t instanceof Vt||t instanceof Kn))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return zd(r),new Vt(t.firestore,t instanceof Kn?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new lm(this,"async_queue_retry"),this.Vu=()=>{const r=hl();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=hl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Wn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bi(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Qc.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&le()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ki extends wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Jd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jd(e),this._firestoreClient=void 0,await e}}}function oR(t,e){const n=typeof t=="object"?t:Vp(),r=typeof t=="string"?t:"(default)",s=Ec(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=RE("firestore");i&&iR(s,...i)}return s}function Pm(t){if(t._terminated)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aR(t),t._firestoreClient}function aR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new O0(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,bm(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Zb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(ot.fromBase64String(e))}catch(n){throw new te(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=/^__.*__$/;class cR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ri(e,this.data,n,this.fieldTransforms)}}class Cm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function km(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class ru{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ko(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(km(this.Cu)&&lR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class uR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}Qu(e,n,r,s=!1){return new ru({Cu:e,methodName:n,qu:r,path:rt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xm(t){const e=t._freezeSettings(),n=va(t._databaseId);return new uR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hR(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);su("Data must be an object, but it was:",o,r);const l=Dm(r,o);let c,h;if(i.merge)c=new Ct(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=Jl(e,p,n);if(!o.contains(y))throw new te(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Om(d,y)||d.push(y)}c=new Ct(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new cR(new At(l),c,h)}class ba extends eu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}function dR(t,e,n,r){const s=t.Qu(1,e,n);su("Data must be an object, but it was:",s,r);const i=[],o=At.empty();Nr(r,(c,h)=>{const d=iu(e,c,n);h=Fe(h);const p=s.Nu(d);if(h instanceof ba)i.push(d);else{const y=Ra(h,p);y!=null&&(i.push(d),o.set(d,y))}});const l=new Ct(i);return new Cm(o,l,s.fieldTransforms)}function fR(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Jl(e,r,n)],c=[s];if(i.length%2!=0)throw new te(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)l.push(Jl(e,i[y])),c.push(i[y+1]);const h=[],d=At.empty();for(let y=l.length-1;y>=0;--y)if(!Om(h,l[y])){const R=l[y];let k=c[y];k=Fe(k);const O=o.Nu(R);if(k instanceof ba)h.push(R);else{const V=Ra(k,O);V!=null&&(h.push(R),d.set(R,V))}}const p=new Ct(h);return new Cm(d,p,o.fieldTransforms)}function Ra(t,e){if(Nm(t=Fe(t)))return su("Unsupported field value:",e,t),Dm(t,e);if(t instanceof eu)return function(r,s){if(!km(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ra(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:qo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qo(s.serializer,i)}}if(r instanceof tu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:Zg(s.serializer,r._byteString)};if(r instanceof Vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$c(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Zc(r)}`)}(t,e)}function Dm(t,e){const n={};return Pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(t,(r,s)=>{const i=Ra(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Nm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof tu||t instanceof hs||t instanceof Vt||t instanceof eu||t instanceof nu)}function su(t,e,n){if(!Nm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Zc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Jl(t,e,n){if((e=Fe(e))instanceof Aa)return e._internalPath;if(typeof e=="string")return iu(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const pR=new RegExp("[~\\*/\\[\\]]");function iu(t,e,n){if(e.search(pR)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Aa(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te(F.INVALID_ARGUMENT,l+t+c)}function Om(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gR extends Vm{data(){return super.data()}}function Lm(t,e){return typeof e=="string"?iu(t,e):e instanceof Aa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _R{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Nr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ue(o.doubleValue));return new nu(i)}convertGeoPoint(e){return new tu(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ae(im(r));const s=new hi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vR extends Vm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yo extends vR{data(e={}){return super.data(e)}}class ER{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yo(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new yo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ro(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new yo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ro(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:TR(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class wR extends _R{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function Yd(t){t=Cr(t,Ia);const e=Cr(t.firestore,ki),n=Pm(e),r=new wR(e);return mR(t._query),rR(n,t._query).then(s=>new ER(e,r,t,s))}function IR(t,e,n,...r){t=Cr(t,Vt);const s=Cr(t.firestore,ki),i=xm(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof Aa?fR(i,"updateDoc",t._key,e,n,r):dR(i,"updateDoc",t._key,e),ou(s,[o.toMutation(t._key,Ut.exists(!0))])}function AR(t){return ou(Cr(t.firestore,ki),[new Fc(t._key,Ut.none())])}function bR(t,e){const n=Cr(t.firestore,ki),r=Sm(t),s=yR(t.converter,e);return ou(n,[hR(xm(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function ou(t,e){return function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget(async()=>Hb(await tR(r),s,i)),i.promise}(Pm(t),e)}(function(e,n=!0){(function(s){fs=s})(ds),rs(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ki(new v0(r.getProvider("auth-internal")),new I0(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Hn(gd,"4.7.3",e),Hn(gd,"4.7.3","esm2017")})();var RR="firebase",SR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(RR,SR,"app");const PR={apiKey:"AIzaSyCKqkWOed9NNUBJbQxW6Q8DIHiyWyqMKV4",authDomain:"online-store-7cc05.firebaseapp.com",projectId:"online-store-7cc05",storageBucket:"online-store-7cc05.firebasestorage.app",messagingSenderId:"723010770296",appId:"1:723010770296:web:cbabb81b7328e0611f248d",measurementId:"G-E9D831H6BW"},Mm=Op(PR),so=oR(Mm),ms=_c("user",()=>{const t=kt(),e=g0(Mm),n=He(null),r=He([]),s=He(""),i=He(""),o=tn(),{clearProductInBasket:l,clearProductInFavorite:c}=o,{productsInBasket:h,calculateTaxTotalPrice:d}=aa(o),p=He({email:"",password:"",name:""});nI(e,async j=>{j&&(n.value=j)});const y=()=>{n.value=null,r.value=[],l(),c()},R=async()=>{try{if(n.value===null)throw"Для оформления заказа вам нужно авторизоваться";const j=new Date,I=await bR(fl(so,`users/${n.value.uid}/orders`),{products:h.value,totalPrice:d.value,date:j.getTime()});await IR(I,{id:I.id}),t.onActiveNotification("Ваш заказ оформлен","checked.svg"),l()}catch(j){j instanceof wt&&t.onActiveNotification(j.message,"error.png")}},k=async()=>{if(n.value!==null){const j=await Yd(fl(so,`users/${n.value.uid}/orders`)),I=[];j.forEach(_=>{I.push(_.data())}),I.sort((_,m)=>m.date-_.date),r.value=I}},O=async()=>{try{const j=e.currentUser;s.value.length>0&&(await sd(j,{displayName:s.value}),V("displayName",s.value),t.onActiveNotification("Изменения успешно сохранены!","checked.svg")),i.value.length>0&&(await Xw(j,i.value),t.onActiveNotification("Мы отправили вам письмо для подтверждения новой почты, подтвердите почту и войдите с новыми данными!","checked.svg"),x())}catch(j){j instanceof wt&&t.onActiveNotification(j.message,"error.png")}finally{s.value="",i.value=""}},V=(j,I)=>{const _=e.currentUser;n.value={..._,[j]:I}},G=async()=>{e.currentUser&&(Yw(e.currentUser),x(),t.onActiveNotification("Мы отправили вам письмо для подтверждения почты, подтвердите для изменения статуса. После подверждения обновите страницу","checked.svg"))},J=async()=>{try{const j=await Qw(e,p.value.email,p.value.password);t.onActiveNotification("Вы успешно зарегистрировались!","checked.svg"),n.value=j.user,s.value!==""&&(await sd(j.user,{displayName:s.value}),s.value=""),setTimeout(()=>{t.activeBlockAboveContent!==""&&(t.onActiveBlockAboveContent(),p.value.email="",p.value.password="")},5e3)}catch(j){j instanceof wt&&t.onActiveNotification(j.message,"error.png")}},Y=async()=>{try{const j=await Jw(e,p.value.email,p.value.password);n.value=j.user,t.onActiveNotification("Вы успешно авторизовались!","checked.svg"),setTimeout(()=>{t.activeBlockAboveContent!==""&&t.onActiveBlockAboveContent()},5e3)}catch(j){j instanceof wt&&t.onActiveNotification(j.message,"error.png")}},x=async()=>{try{t.activeBlock="allProducts",y(),await rI(e)}catch(j){j instanceof wt&&t.onActiveNotification(j.message,"error.png")}};return{formData:p,user:n,listOrders:r,formUpdateName:s,formUpdateEmail:i,placeAnOrder:R,getListOrders:k,registerUser:J,loginUser:Y,updateAccount:O,sendlVerificationEmail:G,signOutUser:x,deleteProfile:async()=>{try{const j=e.currentUser;t.activeBlock="allProducts";const I=Dr.credential(j.email,"kladenec");await Gw(j,I),(await Yd(fl(so,`users/${j.uid}/orders`))).forEach(async m=>{await AR(Sm(so,`users/${j.uid}/orders/${m.id}`))}),y(),await sI(j),t.onActiveNotification("Ваш аккаунт удалён","checked.svg")}catch(j){j instanceof wt&&t.onActiveNotification(j.message,"error.png"),console.log(j)}}}}),CR={class:"/* Layout */ flex flex-col mt-5 mb-14"},kR={class:"/* Layout */ flex gap-2"},xR={class:"/* Layout */ flex gap-2"},DR={class:"/* Typography */ text-[16px]"},NR=Ge({__name:"BasketResult",setup(t){const e=tn(),n=ms();return(r,s)=>(ee(),pe("div",CR,[P("div",kR,[s[1]||(s[1]=P("span",{class:"/* Typography */ text-[16px]"},"Итого:",-1)),s[2]||(s[2]=P("div",{class:"/* Layout */ flex-1 /* Border */ border-b border-dashed border-[#DFDFDF]"},null,-1)),P("b",null,st(N(e).totalPrice)+" ₽",1)]),P("div",xR,[P("span",DR,"Налог "+st(N(e).TAXPRODUCT)+"%:",1),s[3]||(s[3]=P("div",{class:"/* Layout */ flex-1 /* Border */ border-b border-dashed border-[#DFDFDF]"},null,-1)),P("b",null,st(N(e).calculateTaxTotalPrice)+" ₽",1)]),P("button",{onClick:s[0]||(s[0]=(...i)=>N(n).placeAnOrder&&N(n).placeAnOrder(...i)),class:"/* Layout */ mt-7 max-w-full w-full inline-block rounded-3xl py-4 /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"}," Оформить заказ ")]))}}),OR={class:"/* Layout */ fixed flex w-[100vw] h-[100vh]"},VR={class:"/* Layout */ h-full p-9 w-[20%] z-20 lg:w-[40%] md:w-[50%] min-[320px]:w-[100%] /* Typography */ /* Border */ /* Background */ bg-white /* Effects */"},LR={key:0,class:"/* Layout */ h-full flex flex-col items-center justify-center text-center"},MR={class:"/* Layout */ flex items-start justify-between"},FR={class:"/* Layout */ h-full flex flex-col justify-between pb-9"},UR=Ge({__name:"Basket",setup(t){const e=kt(),n=tn(),{onActiveBlockAboveContent:r}=e;return(s,i)=>(ee(),pe("div",OR,[P("div",{"data-id":"basket",class:"/* Layout */ h-full w-[80%] z-10 lg:w-[60%] md:w-[50%] min-[320px]:w-[0%] /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */",onClick:i[0]||(i[0]=(...o)=>N(r)&&N(r)(...o))}),P("div",VR,[N(n).localBasket.length===0?(ee(),pe("div",LR,[i[3]||(i[3]=P("img",{class:"/* Layout */ inline w-[70px] mb-8",src:lE},null,-1)),i[4]||(i[4]=P("h2",{class:"/* Typography */ text-3xl font-semibold mb-3"},"Корзина пустая",-1)),i[5]||(i[5]=P("p",{class:"/* Typography */ text-gray-400 mb-19 text-center"}," Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ. ",-1)),P("button",{"data-id":"basket",onClick:i[1]||(i[1]=(...o)=>N(r)&&N(r)(...o)),class:"/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"}," Вернуться назад ")])):Et("",!0),N(n).localBasket.length>0?(ee(),pe(Oe,{key:1},[P("div",MR,[i[6]||(i[6]=P("h3",{class:"/* Typography */ text-3xl font-bold mb-9"},"Корзина",-1)),P("img",{class:"/* Layout */ w-8",src:cE,onClick:i[2]||(i[2]=(...o)=>N(r)&&N(r)(...o)),"data-id":"basket"})]),P("div",FR,[Re(yE),Re(NR)])],64)):Et("",!0)])]))}}),BR=_i(UR,[["__scopeId","data-v-65dcb4ef"]]),$R="/Vue-projects/logo.png",jR="/Vue-projects/cart.svg",qR="/Vue-projects/heart.svg",HR="/Vue-projects/profile.svg",WR={class:"/* Layout */ min-[320px]:block md:flex justify-between border-b pb-6 /* Typography */ /* Border */ border-slate-300 /* Background */ /* Effects */"},KR={class:"/* Layout */ flex gap-2.5 min-[320px]:justify-center min-[320px]:items-start md:items-center /* Typography */"},zR={class:"/* Typography */ text-gray-500 hover:text-black"},GR={class:"/* Layout */ flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row /* Typography */"},QR={key:1,class:"/* Typography */ text-gray-500"},JR=Ge({__name:"HeaderOnlineStore",setup(t){const e=tn(),n=kt(),{onActiveBlock:r,onActiveBlockAboveContent:s}=n,i=ms();return(o,l)=>(ee(),pe("header",WR,[P("div",{"data-id":"allProducts",class:"/* Layout */ flex items-center min-[320px]:justify-center min-[320px]:mb-6 cursor-pointer /* Typography */",onClick:l[0]||(l[0]=(...c)=>N(r)&&N(r)(...c))},l[6]||(l[6]=[P("div",{class:"mr-4"},[P("img",{src:$R,alt:"Logo",class:"w-[40px]"})],-1),P("div",null,[P("h2",{class:"/* Typography */ text-xl font-bold uppercase"},"Vue Online Store"),P("p",{class:"/* Typography */ text-gray-500"},"Магазин лучших кроссовок")],-1)])),P("ul",KR,[P("li",{"data-id":"basket",class:"/* Layout */ flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row /* Typography */",onClick:l[1]||(l[1]=(...c)=>N(s)&&N(s)(...c))},[l[7]||(l[7]=P("img",{src:jR,alt:"Cart"},null,-1)),P("b",zR,st(N(e).calculateTaxTotalPrice)+" руб.",1)]),P("li",{"data-id":"bookmarks",class:"/* Layout */ flex items-center gap-2.5 cursor-pointer min-[320px]:flex-col md:flex-row /* Typography */",onClick:l[2]||(l[2]=(...c)=>N(r)&&N(r)(...c))},l[8]||(l[8]=[P("img",{src:qR,alt:"Heart"},null,-1),P("b",{class:"/* Typography */ text-gray-500 hover:text-black"},"Закладки",-1)])),P("li",GR,[l[10]||(l[10]=P("img",{src:HR,alt:"Profile"},null,-1)),N(i).user?(ee(),pe("b",{key:0,onClick:l[3]||(l[3]=(...c)=>N(r)&&N(r)(...c)),"data-id":"profile",class:"/* Typography */ text-gray-500 hover:text-black"}," Профиль ")):(ee(),pe("b",QR,[P("span",{class:"/* Typography */ md:inline hover:text-black min-[320px]:text-center",onClick:l[4]||(l[4]=(...c)=>N(s)&&N(s)(...c)),"data-id":"formRegistration"},"Sign up"),l[9]||(l[9]=gc(" / ")),P("span",{class:"/* Typography */ md:inline hover:text-black min-[320px]:text-center",onClick:l[5]||(l[5]=(...c)=>N(s)&&N(s)(...c)),"data-id":"formLogin"},"Sign in")]))])])]))}}),YR="/Vue-projects/image%207.png",XR="/Vue-projects/image%206.png",ZR={},eS={class:"/* Layout */ my-12"};function tS(t,e){return ee(),pe("section",eS,e[0]||(e[0]=[up('<div class="/* Layout */ max-[425px]:pt-2 pl-6 flex w-full rounded-3xl md:pl-2 md:justify-between md:flex-row lg:min-h-[300px] md:min-h-[190px] min-[425px]:items-center min-[320px]:flex-col items-end /* Typography */ /* Border */ /* Background */ bg-[#F4EFE9] /* Effects */"><div class="/* Layout */ flex md:flex-col md:justify-between min-[320px]:flex-row-reverse min-[320px]:mb-5 min-[320px]:items-start md:mb-0 /* Typography */ /* Border */ /* Background */ /* Effects */"><img class="/* Layout */ block mr-6 mt-2 lg:w-[99px] md:w-[90px] min-[320px]:w-[100px]" src="'+YR+'" alt="logo image"><div class="/* Layout */ lg:mb-14 lg:ml-14 md:mb-9 md:ml-14"><h1 class="/* Typography */ text-3xl font-bold lg:mb-4 md:mb-2 min-[425px]:w-64 min-[320px]:mb-5"><span class="text-[#A5D364]">Stan Smith</span>, Forever! </h1><button class="/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"> Купить </button></div></div><img class="/* Layout */ block lg:w-[65%] md:w-[55%] min-[320px]:w-full min-[320px]:h-full" src="'+XR+'" alt="Slider Image"></div>',1)]))}const nS=_i(ZR,[["render",tS]]),Fm="/Vue-projects/assets/emoji-1-D2CoJfvu.png",rS={class:"/* Layout */ mt-5 h-full",id:"bookmarks"},sS={key:0,class:"/* Layout */ h-full flex flex-col items-center justify-center text-center"},iS=Ge({__name:"Bookmarks",setup(t){const e=kt(),{onActiveBlock:n}=e,r=tn();return(s,i)=>(ee(),pe("section",rS,[N(r).localFavorite.length===0?(ee(),pe("div",sS,[i[1]||(i[1]=P("img",{class:"/* Layout */ inline w-[70px] mb-8",src:Fm},null,-1)),i[2]||(i[2]=P("h2",{class:"/* Typography */ text-3xl font-semibold mb-3"},"Закладок нет :(",-1)),i[3]||(i[3]=P("p",{class:"/* Typography */ text-gray-400 mb-19"},"Вы ничего не добавляли в закладки",-1)),P("button",{"data-id":"allProducts",onClick:i[0]||(i[0]=(...o)=>N(n)&&N(n)(...o)),class:"/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"}," Вернуться назад ")])):(ee(),pe(Oe,{key:1},[i[4]||(i[4]=P("h2",{class:"/* Typography */ text-4xl font-bold /* Layout */ md:mb-0 min-[375px]:mb-5"}," Закладки ",-1)),Re(bp)],64))]))}}),oS={class:"/* Layout */ fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"},aS=["id"],lS=["src"],cS=["src"],uS={class:"/* Typography */ text-2xl mb-4"},hS={class:"/* Typography */ text-base font-bold"},dS=["src"],fS=Ge({__name:"OpenProductCard",props:{id:{},imageUrl:{},title:{},price:{},isFavorite:{type:Boolean},isAdded:{type:Boolean},onFavoriteProducts:{type:Function},onBasketProducts:{type:Function}},setup(t){const e=kt(),{onActiveBlockAboveContent:n}=e;return(r,s)=>(ee(),pe("section",null,[P("div",{class:"/* Layout */ fixed top-0 left-0 z-20 w-full h-full /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */","data-id":"cardProduct",onClick:s[0]||(s[0]=(...i)=>N(n)&&N(n)(...i))}),P("div",oS,[P("article",{class:"/* Layout */ relative w-[350px] rounded-3xl border hover:shadow-xl transition z-10 /* Typography */ /* Border */ border-gray-100 /* Background */ bg-white /* Effects */ pb-9 px-9 pt-6",id:String(r.id)},[P("img",{class:"/* Layout */ absolute left-9 block w-14",src:r.isFavorite?"like-2.svg":"like-1.svg",alt:"button like",onClick:s[1]||(s[1]=(...i)=>r.onFavoriteProducts&&r.onFavoriteProducts(...i))},null,8,lS),P("img",{class:"/* Layout */ block w-full h-[224px] mb-4",src:r.imageUrl,alt:"image sneakers"},null,8,cS),P("p",uS,st(r.title),1),P("div",null,[s[3]||(s[3]=P("p",{class:"/* Typography */ text-base text-[#BDBDBD]"},"ЦЕНА:",-1)),P("p",hS,st(r.price)+"руб.",1)]),P("img",{class:"/* Layout */ absolute bottom-9 right-9 block",src:r.isAdded?"checked.svg":"plus.svg",alt:"Added Product",onClick:s[2]||(s[2]=(...i)=>r.onBasketProducts&&r.onBasketProducts(...i))},null,8,dS)],8,aS)])]))}}),pS={class:"/* Layout */ w-[300px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-2.5 rounded-3xl /* Typography */ /* Border */ /* Background */ bg-white /* Effects */"},gS=Ge({__name:"Register",setup(t){const e=kt(),n=ms(),{registerUser:r}=n,{onActiveBlockAboveContent:s}=e;return(i,o)=>(ee(),pe("section",null,[P("div",{class:"/* Layout */ fixed top-0 left-0 z-10 w-full h-full /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */","data-id":"formRegistration",onClick:o[0]||(o[0]=(...l)=>N(s)&&N(s)(...l))}),P("div",pS,[o[9]||(o[9]=P("h2",{class:"/* Typography */ text-2xl font-bold text-center text-gray-800 mb-6"}," Регистрация ",-1)),P("form",{onSubmit:o[4]||(o[4]=ns((...l)=>N(r)&&N(r)(...l),["prevent"])),class:"/* Layout */ space-y-4"},[P("div",null,[o[5]||(o[5]=P("label",{for:"name",class:"/* Typography */ block text-sm font-medium text-gray-700"},"Имя",-1)),_r(P("input",{id:"name","onUpdate:modelValue":o[1]||(o[1]=l=>N(n).formUpdateName=l),type:"text",placeholder:"Введите ваше Имя",class:"/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2"},null,512),[[vr,N(n).formUpdateName]])]),P("div",null,[o[6]||(o[6]=P("label",{for:"email",class:"/* Typography */ block text-sm font-medium text-gray-700"}," Email ",-1)),_r(P("input",{id:"email","onUpdate:modelValue":o[2]||(o[2]=l=>N(n).formData.email=l),type:"email",placeholder:"Введите ваш email",class:"/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2",required:""},null,512),[[vr,N(n).formData.email]])]),P("div",null,[o[7]||(o[7]=P("label",{for:"password",class:"/* Typography */ block text-sm font-medium text-gray-700"},"Пароль",-1)),_r(P("input",{id:"password","onUpdate:modelValue":o[3]||(o[3]=l=>N(n).formData.password=l),type:"password",placeholder:"Введите пароль",class:"/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2",required:""},null,512),[[vr,N(n).formData.password]])]),o[8]||(o[8]=P("button",{type:"submit",class:"/* Layout */ m-auto block w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"}," Зарегистрироваться ",-1))],32)])]))}}),mS={class:"/* Layout */ w-[300px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-2.5 rounded-3xl /* Typography */ /* Border */ /* Background */ bg-white /* Effects */"},_S={class:"mb-3"},yS={class:"mb-3"},vS=Ge({__name:"Login",setup(t){const e=kt(),n=ms(),{loginUser:r}=n,{onActiveBlockAboveContent:s}=e;return(i,o)=>(ee(),pe("section",null,[P("div",{class:"/* Layout */ fixed top-0 left-0 z-10 w-full h-full /* Typography */ /* Border */ /* Background */ bg-black opacity-50 /* Effects */","data-id":"formLogin",onClick:o[0]||(o[0]=(...l)=>N(s)&&N(s)(...l))}),P("div",mS,[o[7]||(o[7]=P("h2",{class:"/* Typography */ text-2xl font-bold text-center text-gray-800 mb-6"},"Вход",-1)),P("form",{onSubmit:o[3]||(o[3]=ns((...l)=>N(r)&&N(r)(...l),["prevent"]))},[P("div",_S,[o[4]||(o[4]=P("label",{for:"email",class:"/* Typography */ block text-sm font-medium text-gray-700"},"Email",-1)),_r(P("input",{id:"email","onUpdate:modelValue":o[1]||(o[1]=l=>N(n).formData.email=l),type:"email",placeholder:"Введите ваш email",class:"/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2",required:""},null,512),[[vr,N(n).formData.email]])]),P("div",yS,[o[5]||(o[5]=P("label",{for:"password",class:"/* Typography */ block text-sm font-medium text-gray-700"},"Пароль",-1)),_r(P("input",{id:"password","onUpdate:modelValue":o[2]||(o[2]=l=>N(n).formData.password=l),type:"password",placeholder:"Введите пароль",class:"/* Layout */ mt-1 block w-full /* Typography */ sm:text-sm /* Border */ border border-gray-300 focus:border-indigo-500 focus:outline-none /* Background */ /* Effects */ focus:ring-indigo-500 shadow-sm rounded-md px-3 py-2",required:""},null,512),[[vr,N(n).formData.password]])]),o[6]||(o[6]=P("button",{class:"/* Layout */ m-auto block w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */",type:"submit"}," Войти ",-1))],32)])]))}}),ES={class:"/* Layout */ w-full p-6 space-y-6 min-[320px]:p-2"},TS={class:"/* Layout */ space-y-4 md:w-[400px]"},wS={class:"/* Typography */ font-medium"},IS={class:"/* Typography */ font-medium"},AS={key:0,class:"text-green-500 text-xs"},bS=Ge({__name:"PersonalAccount",setup(t){const e=ms(),{user:n,formUpdateName:r,formUpdateEmail:s}=aa(e),{signOutUser:i,deleteProfile:o,updateAccount:l,sendlVerificationEmail:c}=e;return(h,d)=>{var p;return ee(),pe("div",ES,[d[8]||(d[8]=P("h1",{class:"/* Typography */ text-2xl font-bold"},"Личный кабинет",-1)),P("div",TS,[d[7]||(d[7]=P("h2",{class:"/* Typography */ text-xl font-semibold"},"Персональная информация",-1)),P("form",{class:"/* Layout */ flex flex-col",onSubmit:d[3]||(d[3]=ns((...y)=>N(l)&&N(l)(...y),["prevent"]))},[P("label",wS,"Имя: "+st(N(e).user!==null?N(e).user.displayName:""),1),_r(P("input",{type:"text",placeholder:"Введите имя",class:"/* Layout */ px-4 py-2 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */","onUpdate:modelValue":d[0]||(d[0]=y=>Ne(r)?r.value=y:null)},null,512),[[vr,N(r)]]),P("label",IS,[gc("Почта: "+st(N(e).user!==null?N(e).user.email:"")+" ",1),(p=N(n))!=null&&p.emailVerified?(ee(),pe("span",AS,"Почта подтверждена")):(ee(),pe("span",{key:1,class:"text-red-500 text-xs cursor-pointer",onClick:d[1]||(d[1]=(...y)=>N(c)&&N(c)(...y))},"Почта не подтверждена"))]),_r(P("input",{type:"email",placeholder:"Введите почту",class:"/* Layout */ px-4 py-2 rounded-md /* Typography */ focus:outline-none /* Border */ border border-gray-300 focus:border-blue-500 /* Background */ /* Effects */","onUpdate:modelValue":d[2]||(d[2]=y=>Ne(s)?s.value=y:null)},null,512),[[vr,N(s)]]),d[6]||(d[6]=P("button",{type:"submit",class:"/* Layout */ mt-4 w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"}," Сохранить изменения ",-1))],32),P("button",{onClick:d[4]||(d[4]=(...y)=>N(o)&&N(o)(...y)),class:"/* Layout */ mt-4 w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"}," Удалить Профиль "),P("button",{onClick:d[5]||(d[5]=(...y)=>N(i)&&N(i)(...y)),class:"/* Layout */ mt-4 w-full py-2 px-4 rounded-md /* Typography */ text-white /* Border */ /* Background */ bg-red-600 /* Effects */ hover:bg-red-700"}," Выйти ")])])}}}),RS={class:"/* Layout */ flex justify-between items-center mb-5 w-full p-2.5 border-y border-slate-300 /* Typography */ /* Border */ /* Background */ /* Effects */"},SS={class:"/* Layout */ mr-5 min-[320px]:ml-2 text-center /* Typography */ text-gray-500 text-4"},PS={class:"block"},CS={class:"block"},kS={class:"/* Layout */ flex overflow-x-auto justify-center w-[500px] md:w-[400px] min-[375px]:w-[90px] min-[320px]:w-[50px]"},xS=["src"],DS={class:"/* Layout */ ml-5 min-[320px]:ml-2 /* Typography */ text-gray-500 text-4"},NS=Ge({__name:"Order",props:{order:{}},setup(t){const e=t,n=wr(()=>{const s=new Date(e.order.date);return`${s.getDate()}.${s.getMonth()+1}.${s.getFullYear()}`}),r=wr(()=>{const s=new Date(e.order.date),i=s.getHours().toString().padStart(2,"0"),o=s.getMinutes().toString().padStart(2,"0");return`${i}:${o}`});return(s,i)=>(ee(),pe("li",RS,[P("div",SS,[P("span",PS,st(n.value),1),P("span",CS,st(r.value),1)]),P("ul",kS,[(ee(!0),pe(Oe,null,es(s.order.products,o=>(ee(),pe("li",{key:o.id},[P("img",{class:"/* Layout */ max-w-[80px] h-[67px] min-[320px]:max-w-[50px] min-[320px]:h-[47px]",src:o.imageUrl,alt:""},null,8,xS)]))),128))]),P("span",DS,st(s.order.totalPrice)+"₽",1)]))}}),OS={key:0,class:"/* Layout */ w-full p-6 min-[320px]:p-1.5 /* Typography */ /* Border */ /* Background */ /* Effects */"},VS={class:"/* Layout */ w-full /* Typography */ /* Border */ /* Background */ /* Effects */"},LS={key:1,class:"/* Layout */ h-full flex flex-col items-center justify-center text-center /* Typography */ /* Border */ /* Background */ /* Effects */"},MS=Ge({__name:"PersonalOrders",setup(t){const e=ms(),{getListOrders:n}=e,{listOrders:r}=aa(e),s=kt(),{onActiveBlock:i}=s;return na(async()=>await n()),(o,l)=>N(r).length!==0?(ee(),pe("div",OS,[l[1]||(l[1]=P("h2",{class:"/* Typography */ text-3xl font-medium mb-3.5"},"Все Заказы",-1)),l[2]||(l[2]=P("div",{class:"/* Layout */ m-auto mb-3.5 w-[95%] flex justify-between /* Typography */ /* Border */ /* Background */ /* Effects */"},[P("span",null,"Дата заказа"),P("span",null,"Товары"),P("span",null,"Цена")],-1)),P("ul",VS,[(ee(!0),pe(Oe,null,es(N(r),c=>(ee(),vt(NS,{key:c.id,order:c,id:c.id},null,8,["order","id"]))),128))])])):(ee(),pe("div",LS,[l[3]||(l[3]=P("img",{class:"/* Layout */ inline w-[70px] mb-8",src:Fm},null,-1)),l[4]||(l[4]=P("h2",{class:"/* Typography */ text-3xl font-semibold mb-3"},"Нет оформленных заказов :(",-1)),l[5]||(l[5]=P("p",{class:"/* Typography */ text-gray-400 mb-15"},"Сделайте хотя-бы один заказ",-1)),P("button",{"data-id":"allProducts",onClick:l[0]||(l[0]=(...c)=>N(i)&&N(i)(...c)),class:"/* Layout */ w-48 rounded-4xl py-4 cursor-pointer /* Typography */ text-white /* Border */ /* Background */ bg-[#A5D364] /* Effects */"}," Вернуться назад ")]))}}),FS={class:"/* Layout */ h-full pt-3.5 flex"},US={class:"/* Layout */ pr-2 border-r /* Border */ border-slate-300"},BS={class:"/* Layout */ w-full"},$S=Ge({__name:"ProfileContent",setup(t){const e=kt();return(n,r)=>(ee(),pe("div",FS,[P("section",US,[P("ul",null,[P("li",{class:"/* Layout */ mb-3.5",onClick:r[0]||(r[0]=(...s)=>N(e).onActiveBlock&&N(e).onActiveBlock(...s)),"data-id":"personalAccount"},r[2]||(r[2]=[P("p",{class:"/* Typography */ text-2xl text-gray-500 hover:text-black cursor-pointer"}," Профиль ",-1)])),P("li",{class:"/* Layout */ mb-3.5",onClick:r[1]||(r[1]=(...s)=>N(e).onActiveBlock&&N(e).onActiveBlock(...s)),"data-id":"personalOrders"},r[3]||(r[3]=[P("p",{class:"/* Typography */ text-2xl text-gray-500 hover:text-black cursor-pointer"}," Заказы ",-1)]))])]),P("section",BS,[N(e).activeBlockInProfile==="personalAccount"?(ee(),vt(bS,{key:0})):Et("",!0),N(e).activeBlockInProfile==="personalOrders"?(ee(),vt(MS,{key:1})):Et("",!0)])]))}}),jS={class:"/* Layout */ fixed flex items-center w-[400px] p-4 rounded-2xl z-30 /* Typography */ text-2xl font-bold text-gray-800 /* Border */ /* Background */ bg-gray-50 /* Effects */ shadow-xl"},qS=["src"],HS=Ge({__name:"Notification",props:{text:{},image:{}},setup(t){return(e,n)=>(ee(),pe("div",jS,[P("img",{class:"/* Layout */ mr-4 w-[50px] h-[50px]",src:e.image,alt:"Notification"},null,8,qS),P("span",null,st(e.text),1)]))}}),WS={class:"/* Layout */ max-w-[1080px] h-[100vh] overflow-y-auto py-12 m-auto rounded-3xl md:px-16 min-[375px]:px-3 /* Typography */ /* Border */ /* Background */ bg-white /* Effects */ shadow-xl"},KS=Ge({__name:"HomePage",setup(t){const e=kt(),n=tn(),{getProductsFetch:r,onFavoriteProducts:s,onBasketProducts:i,updateLocalFavorite:o,updateLocalBasket:l,updateProductInBasket:c}=n,{activeBlock:h,activeBlockAboveContent:d,listNotification:p}=aa(e);return na(async()=>{o(),l(),n.products=await r(),c()}),(y,R)=>(ee(),pe(Oe,null,[Re(Co,{name:"notification"},{default:mr(()=>[(ee(!0),pe(Oe,null,es(N(p),k=>(ee(),vt(mh,{key:k.id},{default:mr(()=>[Re(HS,{text:k.text,image:k.image},null,8,["text","image"])]),_:2},1024))),128))]),_:1}),N(d)==="formRegistration"?(ee(),vt(gS,{key:0})):Et("",!0),N(d)==="formLogin"?(ee(),vt(vS,{key:1})):Et("",!0),Re(mh,{name:"fade"},{default:mr(()=>[N(d)==="basket"?(ee(),vt(BR,{key:0})):Et("",!0)]),_:1}),N(d)==="cardProduct"?(ee(),vt(fS,{key:2,id:N(n).activeOpenCard.id,imageUrl:N(n).activeOpenCard.imageUrl,title:N(n).activeOpenCard.title,price:N(n).activeOpenCard.price,isFavorite:N(n).activeOpenCard.isFavorite,isAdded:N(n).activeOpenCard.isAdded,onBasketProducts:()=>N(i)(N(n).activeOpenCard),onFavoriteProducts:()=>N(s)(N(n).activeOpenCard)},null,8,["id","imageUrl","title","price","isFavorite","isAdded","onBasketProducts","onFavoriteProducts"])):Et("",!0),P("div",WS,[Re(JR),N(h)==="bookmarks"?(ee(),vt(iS,{key:0})):Et("",!0),N(h)==="profile"?(ee(),vt($S,{key:1})):Et("",!0),N(h)==="allProducts"?(ee(),pe(Oe,{key:2},[Re(nS),Re(aE)],64)):Et("",!0)])],64))}}),zS=_i(KS,[["__scopeId","data-v-66351b95"]]),GS=Ge({__name:"App",setup(t){return(e,n)=>(ee(),vt(zS))}}),QS=Bv(),Um=Mv(GS);Um.use(QS);Um.mount("#app");
