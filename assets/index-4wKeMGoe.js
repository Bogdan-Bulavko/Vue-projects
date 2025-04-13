(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},ss=[],rn=()=>{},hv=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hc=t=>t.startsWith("onUpdate:"),Je=Object.assign,qc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dv=Object.prototype.hasOwnProperty,be=(t,e)=>dv.call(t,e),ce=Array.isArray,is=t=>ba(t)==="[object Map]",yp=t=>ba(t)==="[object Set]",pe=t=>typeof t=="function",Be=t=>typeof t=="string",ar=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",vp=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),Ep=Object.prototype.toString,ba=t=>Ep.call(t),fv=t=>ba(t).slice(8,-1),Tp=t=>ba(t)==="[object Object]",zc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,li=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pv=/-(\w)/g,Zn=Aa(t=>t.replace(pv,(e,n)=>n?n.toUpperCase():"")),mv=/\B([A-Z])/g,Mr=Aa(t=>t.replace(mv,"-$1").toLowerCase()),wp=Aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=Aa(t=>t?`on${wp(t)}`:""),Wn=(t,e)=>!Object.is(t,e),Ro=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ip=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gv=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let qh;const Sa=()=>qh||(qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?Ev(r):Wc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||De(t))return t}const _v=/;(?![^(]*\))/g,yv=/:([^]+)/,vv=/\/\*[^]*?\*\//g;function Ev(t){const e={};return t.replace(vv,"").split(_v).forEach(n=>{if(n){const r=n.split(yv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kc(t){let e="";if(Be(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Kc(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=jc(Tv);function bp(t){return!!t||t===""}const Ap=t=>!!(t&&t.__v_isRef===!0),mt=t=>Be(t)?t:t==null?"":ce(t)||De(t)&&(t.toString===Ep||!pe(t.toString))?Ap(t)?mt(t.value):JSON.stringify(t,Sp,2):String(t),Sp=(t,e)=>Ap(e)?Sp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Il(r,i)+" =>"]=s,n),{})}:yp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Il(n))}:ar(e)?Il(e):De(e)&&!ce(e)&&!Tp(e)?String(e):e,Il=(t,e="")=>{var n;return ar(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class Iv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bv(){return Ot}let xe;const bl=new WeakSet;class Rp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bl.has(this)&&(bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zh(this),kp(this);const e=xe,n=qt;xe=this,qt=!0;try{return this.fn()}finally{Op(this),xe=e,qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jc(e);this.deps=this.depsTail=void 0,zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xl(this)&&this.run()}get dirty(){return Xl(this)}}let Cp=0,ci,ui;function Pp(t,e=!1){if(t.flags|=8,e){t.next=ui,ui=t;return}t.next=ci,ci=t}function Gc(){Cp++}function Qc(){if(--Cp>0)return;if(ui){let e=ui;for(ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ci;){let e=ci;for(ci=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function kp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Op(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jc(r),Av(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Xl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ei))return;t.globalVersion=Ei;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Xl(t)){t.flags&=-3;return}const n=xe,r=qt;xe=t,qt=!0;try{kp(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,qt=r,Op(t),t.flags&=-3}}function Jc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Av(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qt=!0;const Np=[];function lr(){Np.push(qt),qt=!1}function cr(){const t=Np.pop();qt=t===void 0?!0:t}function zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Ei=0;class Sv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xe||!qt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new Sv(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,Dp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Ei++,this.notify(e)}notify(e){Gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qc()}}}function Dp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Yl=new WeakMap,Sr=Symbol(""),Zl=Symbol(""),Ti=Symbol("");function ut(t,e,n){if(qt&&xe){let r=Yl.get(t);r||Yl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xc),s.map=r,s.key=n),s.track()}}function _n(t,e,n,r,s,i){const o=Yl.get(t);if(!o){Ei++;return}const l=c=>{c&&c.trigger()};if(Gc(),e==="clear")o.forEach(l);else{const c=ce(t),u=c&&zc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ti||!ar(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ti)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Sr)),is(t)&&l(o.get(Zl)));break;case"delete":c||(l(o.get(Sr)),is(t)&&l(o.get(Zl)));break;case"set":is(t)&&l(o.get(Sr));break}}Qc()}function Gr(t){const e=Ie(t);return e===t?e:(ut(e,"iterate",Ti),Bt(t)?e:e.map(ht))}function Ra(t){return ut(t=Ie(t),"iterate",Ti),t}const Rv={__proto__:null,[Symbol.iterator](){return Al(this,Symbol.iterator,ht)},concat(...t){return Gr(this).concat(...t.map(e=>ce(e)?Gr(e):e))},entries(){return Al(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return mn(this,"find",t,e,ht,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Sl(this,"includes",t)},indexOf(...t){return Sl(this,"indexOf",t)},join(t){return Gr(this).join(t)},lastIndexOf(...t){return Sl(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return Wh(this,"reduce",t,e)},reduceRight(t,...e){return Wh(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return Gr(this).toReversed()},toSorted(t){return Gr(this).toSorted(t)},toSpliced(...t){return Gr(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return Al(this,"values",ht)}};function Al(t,e,n){const r=Ra(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Cv=Array.prototype;function mn(t,e,n,r,s,i){const o=Ra(t),l=o!==t&&!Bt(t),c=o[e];if(c!==Cv[e]){const p=c.apply(t,i);return l?ht(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,ht(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Wh(t,e,n,r){const s=Ra(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ht(l),c,t)}),s[e](i,...r)}function Sl(t,e,n){const r=Ie(t);ut(r,"iterate",Ti);const s=r[e](...n);return(s===-1||s===!1)&&eu(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Ys(t,e,n=[]){lr(),Gc();const r=Ie(t)[e].apply(t,n);return Qc(),cr(),r}const Pv=jc("__proto__,__v_isRef,__isVue"),Vp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ar));function kv(t){ar(t)||(t=String(t));const e=Ie(this);return ut(e,"has",t),e.hasOwnProperty(t)}class Lp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Bv:Bp:i?Up:Fp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ce(e);if(!s){let c;if(o&&(c=Rv[n]))return c;if(n==="hasOwnProperty")return kv}const l=Reflect.get(e,n,gt(e)?e:r);return(ar(n)?Vp.has(n):Pv(n))||(s||ut(e,"get",n),i)?l:gt(l)?o&&zc(n)?l:l.value:De(l)?s?$p(l):Ca(l):l}}class Mp extends Lp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Cr(i);if(!Bt(r)&&!Cr(r)&&(i=Ie(i),r=Ie(r)),!ce(e)&&gt(i)&&!gt(r))return c?!1:(i.value=r,!0)}const o=ce(e)&&zc(n)?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,gt(e)?e:s);return e===Ie(s)&&(o?Wn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ar(n)||!Vp.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",ce(e)?"length":Sr),Reflect.ownKeys(e)}}class Ov extends Lp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xv=new Mp,Nv=new Ov,Dv=new Mp(!0);const ec=t=>t,go=t=>Reflect.getPrototypeOf(t);function Vv(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=is(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?ec:e?tc:ht;return!e&&ut(i,"iterate",c?Zl:Sr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function _o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lv(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(Wn(s,l)&&ut(o,"get",s),ut(o,"get",l));const{has:c}=go(o),u=e?ec:t?tc:ht;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ut(Ie(s),"iterate",Sr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(Wn(s,l)&&ut(o,"has",s),ut(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),u=e?ec:t?tc:ht;return!t&&ut(c,"iterate",Sr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Je(n,t?{add:_o("add"),set:_o("set"),delete:_o("delete"),clear:_o("clear")}:{add(s){!e&&!Bt(s)&&!Cr(s)&&(s=Ie(s));const i=Ie(this);return go(i).has.call(i,s)||(i.add(s),_n(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!Cr(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=go(o);let u=l.call(o,s);u||(s=Ie(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?Wn(i,d)&&_n(o,"set",s,i):_n(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=go(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&_n(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&_n(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vv(s,t,e)}),n}function Yc(t,e){const n=Lv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Mv={get:Yc(!1,!1)},Fv={get:Yc(!1,!0)},Uv={get:Yc(!0,!1)};const Fp=new WeakMap,Up=new WeakMap,Bp=new WeakMap,Bv=new WeakMap;function $v(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jv(t){return t.__v_skip||!Object.isExtensible(t)?0:$v(fv(t))}function Ca(t){return Cr(t)?t:Zc(t,!1,xv,Mv,Fp)}function Hv(t){return Zc(t,!1,Dv,Fv,Up)}function $p(t){return Zc(t,!0,Nv,Uv,Bp)}function Zc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function os(t){return Cr(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function Cr(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function eu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function qv(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&Ip(t,"__v_skip",!0),t}const ht=t=>De(t)?Ca(t):t,tc=t=>De(t)?$p(t):t;function gt(t){return t?t.__v_isRef===!0:!1}function zv(t){return Wv(t,!1)}function Wv(t,e){return gt(t)?t:new Kv(t,e)}class Kv{constructor(e,n){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||Cr(e);e=r?e:Ie(e),Wn(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function zo(t){return gt(t)?t.value:t}const Gv={get:(t,e,n)=>e==="__v_raw"?t:zo(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return gt(s)&&!gt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jp(t){return os(t)?t:new Proxy(t,Gv)}class Qv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return Pp(this,!0),!0}get value(){const e=this.dep.track();return xp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Qv(r,s,n)}const yo={},Wo=new WeakMap;let Tr;function Xv(t,e=!1,n=Tr){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function Yv(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:Bt(q)||s===!1||s===0?yn(q,1):yn(q);let d,p,g,I,R=!1,O=!1;if(gt(t)?(p=()=>t.value,R=Bt(t)):os(t)?(p=()=>u(t),R=!0):ce(t)?(O=!0,R=t.some(q=>os(q)||Bt(q)),p=()=>t.map(q=>{if(gt(q))return q.value;if(os(q))return u(q);if(pe(q))return c?c(q,2):q()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){lr();try{g()}finally{cr()}}const q=Tr;Tr=d;try{return c?c(t,3,[I]):t(I)}finally{Tr=q}}:p=rn,e&&s){const q=p,Z=s===!0?1/0:s;p=()=>yn(q(),Z)}const P=bv(),j=()=>{d.stop(),P&&P.active&&qc(P.effects,d)};if(i&&e){const q=e;e=(...Z)=>{q(...Z),j()}}let K=O?new Array(t.length).fill(yo):yo;const G=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const Z=d.run();if(s||R||(O?Z.some((ie,b)=>Wn(ie,K[b])):Wn(Z,K))){g&&g();const ie=Tr;Tr=d;try{const b=[Z,K===yo?void 0:O&&K[0]===yo?[]:K,I];c?c(e,3,b):e(...b),K=Z}finally{Tr=ie}}}else d.run()};return l&&l(G),d=new Rp(p),d.scheduler=o?()=>o(G,!1):G,I=q=>Xv(q,!1,d),g=d.onStop=()=>{const q=Wo.get(d);if(q){if(c)c(q,4);else for(const Z of q)Z();Wo.delete(d)}},e?r?G(!0):K=d.run():o?o(G.bind(null,!0),!0):d.run(),j.pause=d.pause.bind(d),j.resume=d.resume.bind(d),j.stop=j,j}function yn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,gt(t))yn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)yn(t[r],e,n);else if(yp(t)||is(t))t.forEach(r=>{yn(r,e,n)});else if(Tp(t)){for(const r in t)yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Li(t,e,n,r){try{return r?t(...r):t()}catch(s){Pa(s,e,n)}}function Wt(t,e,n,r){if(pe(t)){const s=Li(t,e,n,r);return s&&vp(s)&&s.catch(i=>{Pa(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}}function Pa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){lr(),Li(i,null,10,[t,c,u]),cr();return}}Zv(t,n,s,r,o)}function Zv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let en=-1;const as=[];let Fn=null,Xr=0;const Hp=Promise.resolve();let Ko=null;function eE(t){const e=Ko||Hp;return t?e.then(this?t.bind(this):t):e}function tE(t){let e=en+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=wi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function tu(t){if(!(t.flags&1)){const e=wi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=wi(n)?wt.push(t):wt.splice(tE(e),0,t),t.flags|=1,qp()}}function qp(){Ko||(Ko=Hp.then(Wp))}function nE(t){ce(t)?as.push(...t):Fn&&t.id===-1?Fn.splice(Xr+1,0,t):t.flags&1||(as.push(t),t.flags|=1),qp()}function Kh(t,e,n=en+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zp(t){if(as.length){const e=[...new Set(as)].sort((n,r)=>wi(n)-wi(r));if(as.length=0,Fn){Fn.push(...e);return}for(Fn=e,Xr=0;Xr<Fn.length;Xr++){const n=Fn[Xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,Xr=0}}const wi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wp(t){try{for(en=0;en<wt.length;en++){const e=wt[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<wt.length;en++){const e=wt[en];e&&(e.flags&=-2)}en=-1,wt.length=0,zp(),Ko=null,(wt.length||as.length)&&Wp()}}let xt=null,Kp=null;function Go(t){const e=xt;return xt=t,Kp=t&&t.type.__scopeId||null,e}function ms(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&rd(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&rd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ls(t,e){if(xt===null)return t;const n=Da(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Pe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&yn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function yr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(lr(),Wt(c,n,8,[t.el,l,t,e]),cr())}}const rE=Symbol("_vte"),Gp=t=>t.__isTeleport,Un=Symbol("_leaveCb"),vo=Symbol("_enterCb");function Qp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mi(()=>{t.isMounted=!0}),rm(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Jp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},Xp=t=>{const e=t.subTree;return e.component?Xp(e.component):e},sE={name:"BaseTransition",props:Jp,setup(t,{slots:e}){const n=Am(),r=Qp();return()=>{const s=e.default&&nu(e.default(),!0);if(!s||!s.length)return;const i=Yp(s),o=Ie(t),{mode:l}=o;if(r.isLeaving)return Rl(i);const c=Gh(i);if(!c)return Rl(i);let u=Ii(c,o,r,n,p=>u=p);c.type!==At&&Pr(c,u);let d=n.subTree&&Gh(n.subTree);if(d&&d.type!==At&&!Ir(c,d)&&Xp(n).type!==At){let p=Ii(d,o,r,n);if(Pr(d,p),l==="out-in"&&c.type!==At)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Rl(i);l==="in-out"&&c.type!==At?p.delayLeave=(g,I,R)=>{const O=Zp(r,d);O[String(d.key)]=d,g[Un]=()=>{I(),g[Un]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Yp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==At){e=n;break}}return e}const iE=sE;function Zp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ii(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:I,onAfterLeave:R,onLeaveCancelled:O,onBeforeAppear:P,onAppear:j,onAfterAppear:K,onAppearCancelled:G}=e,q=String(t.key),Z=Zp(n,t),ie=(_,w)=>{_&&Wt(_,r,9,w)},b=(_,w)=>{const A=w[1];ie(_,w),ce(_)?_.every(T=>T.length<=1)&&A():_.length<=1&&A()},y={mode:o,persisted:l,beforeEnter(_){let w=c;if(!n.isMounted)if(i)w=P||c;else return;_[Un]&&_[Un](!0);const A=Z[q];A&&Ir(t,A)&&A.el[Un]&&A.el[Un](),ie(w,[_])},enter(_){let w=u,A=d,T=p;if(!n.isMounted)if(i)w=j||u,A=K||d,T=G||p;else return;let v=!1;const Oe=_[vo]=yt=>{v||(v=!0,yt?ie(T,[_]):ie(A,[_]),y.delayedLeave&&y.delayedLeave(),_[vo]=void 0)};w?b(w,[_,Oe]):Oe()},leave(_,w){const A=String(t.key);if(_[vo]&&_[vo](!0),n.isUnmounting)return w();ie(g,[_]);let T=!1;const v=_[Un]=Oe=>{T||(T=!0,w(),Oe?ie(O,[_]):ie(R,[_]),_[Un]=void 0,Z[A]===t&&delete Z[A])};Z[A]=t,I?b(I,[_,v]):v()},clone(_){const w=Ii(_,e,n,r,s);return s&&s(w),w}};return y}function Rl(t){if(ka(t))return t=er(t),t.children=null,t}function Gh(t){if(!ka(t))return Gp(t.type)&&t.children?Yp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Pr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Pr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nu(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Fe?(o.patchFlag&128&&s++,r=r.concat(nu(o.children,e,l))):(e||o.type!==At)&&r.push(l!=null?er(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function em(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qo(t,e,n,r,s=!1){if(ce(t)){t.forEach((R,O)=>Qo(R,e&&(ce(e)?e[O]:e),n,r,s));return}if(hi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Da(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,g=Ie(p),I=p===Pe?()=>!1:R=>be(g,R);if(u!=null&&u!==c&&(Be(u)?(d[u]=null,I(u)&&(p[u]=null)):gt(u)&&(u.value=null)),pe(c))Li(c,l,12,[o,d]);else{const R=Be(c),O=gt(c);if(R||O){const P=()=>{if(t.f){const j=R?I(c)?p[c]:d[c]:c.value;s?ce(j)&&qc(j,i):ce(j)?j.includes(i)||j.push(i):R?(d[c]=[i],I(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else R?(d[c]=o,I(c)&&(p[c]=o)):O&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,kt(P,n)):P()}}}Sa().requestIdleCallback;Sa().cancelIdleCallback;const hi=t=>!!t.type.__asyncLoader,ka=t=>t.type.__isKeepAlive;function oE(t,e){tm(t,"a",e)}function aE(t,e){tm(t,"da",e)}function tm(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Oa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ka(s.parent.vnode)&&lE(r,e,n,s),s=s.parent}}function lE(t,e,n,r){const s=Oa(e,t,r,!0);sm(()=>{qc(r[e],s)},n)}function Oa(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const l=Ui(n),c=Wt(e,n,t,o);return l(),cr(),c});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=ft)=>{(!Si||t==="sp")&&Oa(t,(...r)=>e(...r),n)},cE=Cn("bm"),Mi=Cn("m"),uE=Cn("bu"),nm=Cn("u"),rm=Cn("bum"),sm=Cn("um"),hE=Cn("sp"),dE=Cn("rtg"),fE=Cn("rtc");function pE(t,e=ft){Oa("ec",t,e)}const mE=Symbol.for("v-ndc");function Fi(t,e,n,r){let s;const i=n,o=ce(t);if(o||Be(t)){const l=o&&os(t);let c=!1;l&&(c=!Bt(t),t=Ra(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?ht(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const nc=t=>t?Sm(t)?Da(t):nc(t.parent):null,di=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>om(t),$forceUpdate:t=>t.f||(t.f=()=>{tu(t.update)}),$nextTick:t=>t.n||(t.n=eE.bind(t.proxy)),$watch:t=>ME.bind(t)}),Cl=(t,e)=>t!==Pe&&!t.__isScriptSetup&&be(t,e),gE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cl(r,e))return o[e]=1,r[e];if(s!==Pe&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Pe&&be(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const d=di[e];let p,g;if(d)return e==="$attrs"&&ut(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&be(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cl(s,e)?(s[e]=n,!0):r!==Pe&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Pe&&be(t,o)||Cl(e,o)||(l=i[0])&&be(l,o)||be(r,o)||be(di,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function _E(t){const e=om(t),n=t.proxy,r=t.ctx;rc=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:I,updated:R,activated:O,deactivated:P,beforeDestroy:j,beforeUnmount:K,destroyed:G,unmounted:q,render:Z,renderTracked:ie,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:w,inheritAttrs:A,components:T,directives:v,filters:Oe}=e;if(u&&yE(u,r,null),o)for(const Re in o){const Te=o[Re];pe(Te)&&(r[Re]=Te.bind(n))}if(s){const Re=s.call(n,n);De(Re)&&(t.data=Ca(Re))}if(rc=!0,i)for(const Re in i){const Te=i[Re],$t=pe(Te)?Te.bind(n,n):pe(Te.get)?Te.get.bind(n,n):rn,hr=!pe(Te)&&pe(Te.set)?Te.set.bind(n):rn,hn=Ae({get:$t,set:hr});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>hn.value,set:qe=>hn.value=qe})}if(l)for(const Re in l)im(l[Re],r,n,Re);if(c){const Re=pe(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(Te=>{bE(Te,Re[Te])})}d&&Jh(d,t,"c");function je(Re,Te){ce(Te)?Te.forEach($t=>Re($t.bind(n))):Te&&Re(Te.bind(n))}if(je(cE,p),je(Mi,g),je(uE,I),je(nm,R),je(oE,O),je(aE,P),je(pE,y),je(fE,ie),je(dE,b),je(rm,K),je(sm,q),je(hE,_),ce(w))if(w.length){const Re=t.exposed||(t.exposed={});w.forEach(Te=>{Object.defineProperty(Re,Te,{get:()=>n[Te],set:$t=>n[Te]=$t})})}else t.exposed||(t.exposed={});Z&&t.render===rn&&(t.render=Z),A!=null&&(t.inheritAttrs=A),T&&(t.components=T),v&&(t.directives=v),_&&em(t)}function yE(t,e,n=rn){ce(t)&&(t=sc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Co(s.from||r,s.default,!0):i=Co(s.from||r):i=Co(s),gt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Jh(t,e,n){Wt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function im(t,e,n,r){let s=r.includes(".")?Em(n,r):()=>n[r];if(Be(t)){const i=e[t];pe(i)&&fi(s,i)}else if(pe(t))fi(s,t.bind(n));else if(De(t))if(ce(t))t.forEach(i=>im(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&fi(s,i,t)}}function om(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Jo(c,u,o,!0)),Jo(c,e,o)),De(e)&&i.set(e,c),c}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=vE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const vE={data:Xh,props:Yh,emits:Yh,methods:ni,computed:ni,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:ni,directives:ni,watch:TE,provide:Xh,inject:EE};function Xh(t,e){return e?t?function(){return Je(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function EE(t,e){return ni(sc(t),sc(e))}function sc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Je(Object.create(null),t,e):e}function Yh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:Je(Object.create(null),Qh(t),Qh(e??{})):e}function TE(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function am(){return{app:null,config:{isNativeTag:hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wE=0;function IE(t,e){return function(r,s=null){pe(r)||(r=Je({},r)),s!=null&&!De(s)&&(s=null);const i=am(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:wE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const I=u._ceVNode||ke(r,s);return I.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(I,d,g),c=!0,u._container=d,d.__vue_app__=u,Da(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Wt(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=cs;cs=u;try{return d()}finally{cs=p}}};return u}}let cs=null;function bE(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function Co(t,e,n=!1){const r=ft||xt;if(r||cs){const s=cs?cs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const lm={},cm=()=>Object.create(lm),um=t=>Object.getPrototypeOf(t)===lm;function AE(t,e,n,r=!1){const s={},i=cm();t.propsDefaults=Object.create(null),hm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Hv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function SE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(xa(t.emitsOptions,g))continue;const I=e[g];if(c)if(be(i,g))I!==i[g]&&(i[g]=I,u=!0);else{const R=Zn(g);s[R]=ic(c,l,R,I,t,!1)}else I!==i[g]&&(i[g]=I,u=!0)}}}else{hm(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!be(e,p)&&((d=Mr(p))===p||!be(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ic(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&_n(t.attrs,"set","")}function hm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(li(c))continue;const u=e[c];let d;s&&be(s,d=Zn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:xa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ie(n),u=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ic(s,c,p,u[p],t,!be(u,p))}}return o}function ic(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=be(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Ui(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}const RE=new WeakMap;function dm(t,e,n=!1){const r=n?RE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,I]=dm(p,e,!0);Je(o,g),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,ss),ss;if(ce(i))for(let d=0;d<i.length;d++){const p=Zn(i[d]);Zh(p)&&(o[p]=Pe)}else if(i)for(const d in i){const p=Zn(d);if(Zh(p)){const g=i[d],I=o[p]=ce(g)||pe(g)?{type:g}:Je({},g),R=I.type;let O=!1,P=!0;if(ce(R))for(let j=0;j<R.length;++j){const K=R[j],G=pe(K)&&K.name;if(G==="Boolean"){O=!0;break}else G==="String"&&(P=!1)}else O=pe(R)&&R.name==="Boolean";I[0]=O,I[1]=P,(O||be(I,"default"))&&l.push(p)}}const u=[o,l];return De(t)&&r.set(t,u),u}function Zh(t){return t[0]!=="$"&&!li(t)}const fm=t=>t[0]==="_"||t==="$stable",ru=t=>ce(t)?t.map(nn):[nn(t)],CE=(t,e,n)=>{if(e._n)return e;const r=ms((...s)=>ru(e(...s)),n);return r._c=!1,r},pm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fm(s))continue;const i=t[s];if(pe(i))e[s]=CE(s,i,r);else if(i!=null){const o=ru(i);e[s]=()=>o}}},mm=(t,e)=>{const n=ru(e);t.slots.default=()=>n},gm=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},PE=(t,e,n)=>{const r=t.slots=cm();if(t.vnode.shapeFlag&32){const s=e._;s?(gm(r,e,n),n&&Ip(r,"_",s,!0)):pm(e,r)}else e&&mm(t,e)},kE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:gm(s,e,n):(i=!e.$stable,pm(e,s)),o=e}else e&&(mm(t,e),o={default:1});if(i)for(const l in s)!fm(l)&&o[l]==null&&delete s[l]},kt=qE;function OE(t){return xE(t)}function xE(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:I=rn,insertStaticContent:R}=t,O=(E,S,D,F=null,L=null,U=null,Q=void 0,z=null,H=!!S.dynamicChildren)=>{if(E===S)return;E&&!Ir(E,S)&&(F=dn(E),qe(E,L,U,!0),E=null),S.patchFlag===-2&&(H=!1,S.dynamicChildren=null);const{type:B,ref:re,shapeFlag:J}=S;switch(B){case Na:P(E,S,D,F);break;case At:j(E,S,D,F);break;case Po:E==null&&K(S,D,F,Q);break;case Fe:T(E,S,D,F,L,U,Q,z,H);break;default:J&1?Z(E,S,D,F,L,U,Q,z,H):J&6?v(E,S,D,F,L,U,Q,z,H):(J&64||J&128)&&B.process(E,S,D,F,L,U,Q,z,H,Jt)}re!=null&&L&&Qo(re,E&&E.ref,U,S||E,!S)},P=(E,S,D,F)=>{if(E==null)r(S.el=l(S.children),D,F);else{const L=S.el=E.el;S.children!==E.children&&u(L,S.children)}},j=(E,S,D,F)=>{E==null?r(S.el=c(S.children||""),D,F):S.el=E.el},K=(E,S,D,F)=>{[E.el,E.anchor]=R(E.children,S,D,F,E.el,E.anchor)},G=({el:E,anchor:S},D,F)=>{let L;for(;E&&E!==S;)L=g(E),r(E,D,F),E=L;r(S,D,F)},q=({el:E,anchor:S})=>{let D;for(;E&&E!==S;)D=g(E),s(E),E=D;s(S)},Z=(E,S,D,F,L,U,Q,z,H)=>{S.type==="svg"?Q="svg":S.type==="math"&&(Q="mathml"),E==null?ie(S,D,F,L,U,Q,z,H):_(E,S,L,U,Q,z,H)},ie=(E,S,D,F,L,U,Q,z)=>{let H,B;const{props:re,shapeFlag:J,transition:Y,dirs:ae}=E;if(H=E.el=o(E.type,U,re&&re.is,re),J&8?d(H,E.children):J&16&&y(E.children,H,null,F,L,Pl(E,U),Q,z),ae&&yr(E,null,F,"created"),b(H,E,E.scopeId,Q,F),re){for(const de in re)de!=="value"&&!li(de)&&i(H,de,null,re[de],U,F);"value"in re&&i(H,"value",null,re.value,U),(B=re.onVnodeBeforeMount)&&Xt(B,F,E)}ae&&yr(E,null,F,"beforeMount");const se=NE(L,Y);se&&Y.beforeEnter(H),r(H,S,D),((B=re&&re.onVnodeMounted)||se||ae)&&kt(()=>{B&&Xt(B,F,E),se&&Y.enter(H),ae&&yr(E,null,F,"mounted")},L)},b=(E,S,D,F,L)=>{if(D&&I(E,D),F)for(let U=0;U<F.length;U++)I(E,F[U]);if(L){let U=L.subTree;if(S===U||wm(U.type)&&(U.ssContent===S||U.ssFallback===S)){const Q=L.vnode;b(E,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},y=(E,S,D,F,L,U,Q,z,H=0)=>{for(let B=H;B<E.length;B++){const re=E[B]=z?Bn(E[B]):nn(E[B]);O(null,re,S,D,F,L,U,Q,z)}},_=(E,S,D,F,L,U,Q)=>{const z=S.el=E.el;let{patchFlag:H,dynamicChildren:B,dirs:re}=S;H|=E.patchFlag&16;const J=E.props||Pe,Y=S.props||Pe;let ae;if(D&&vr(D,!1),(ae=Y.onVnodeBeforeUpdate)&&Xt(ae,D,S,E),re&&yr(S,E,D,"beforeUpdate"),D&&vr(D,!0),(J.innerHTML&&Y.innerHTML==null||J.textContent&&Y.textContent==null)&&d(z,""),B?w(E.dynamicChildren,B,z,D,F,Pl(S,L),U):Q||Te(E,S,z,null,D,F,Pl(S,L),U,!1),H>0){if(H&16)A(z,J,Y,D,L);else if(H&2&&J.class!==Y.class&&i(z,"class",null,Y.class,L),H&4&&i(z,"style",J.style,Y.style,L),H&8){const se=S.dynamicProps;for(let de=0;de<se.length;de++){const ve=se[de],rt=J[ve],Xe=Y[ve];(Xe!==rt||ve==="value")&&i(z,ve,rt,Xe,L,D)}}H&1&&E.children!==S.children&&d(z,S.children)}else!Q&&B==null&&A(z,J,Y,D,L);((ae=Y.onVnodeUpdated)||re)&&kt(()=>{ae&&Xt(ae,D,S,E),re&&yr(S,E,D,"updated")},F)},w=(E,S,D,F,L,U,Q)=>{for(let z=0;z<S.length;z++){const H=E[z],B=S[z],re=H.el&&(H.type===Fe||!Ir(H,B)||H.shapeFlag&70)?p(H.el):D;O(H,B,re,null,F,L,U,Q,!0)}},A=(E,S,D,F,L)=>{if(S!==D){if(S!==Pe)for(const U in S)!li(U)&&!(U in D)&&i(E,U,S[U],null,L,F);for(const U in D){if(li(U))continue;const Q=D[U],z=S[U];Q!==z&&U!=="value"&&i(E,U,z,Q,L,F)}"value"in D&&i(E,"value",S.value,D.value,L)}},T=(E,S,D,F,L,U,Q,z,H)=>{const B=S.el=E?E.el:l(""),re=S.anchor=E?E.anchor:l("");let{patchFlag:J,dynamicChildren:Y,slotScopeIds:ae}=S;ae&&(z=z?z.concat(ae):ae),E==null?(r(B,D,F),r(re,D,F),y(S.children||[],D,re,L,U,Q,z,H)):J>0&&J&64&&Y&&E.dynamicChildren?(w(E.dynamicChildren,Y,D,L,U,Q,z),(S.key!=null||L&&S===L.subTree)&&_m(E,S,!0)):Te(E,S,D,re,L,U,Q,z,H)},v=(E,S,D,F,L,U,Q,z,H)=>{S.slotScopeIds=z,E==null?S.shapeFlag&512?L.ctx.activate(S,D,F,Q,H):Oe(S,D,F,L,U,Q,H):yt(E,S,H)},Oe=(E,S,D,F,L,U,Q)=>{const z=E.component=YE(E,F,L);if(ka(E)&&(z.ctx.renderer=Jt),ZE(z,!1,Q),z.asyncDep){if(L&&L.registerDep(z,je,Q),!E.el){const H=z.subTree=ke(At);j(null,H,S,D)}}else je(z,E,S,D,L,U,Q)},yt=(E,S,D)=>{const F=S.component=E.component;if(jE(E,S,D))if(F.asyncDep&&!F.asyncResolved){Re(F,S,D);return}else F.next=S,F.update();else S.el=E.el,F.vnode=S},je=(E,S,D,F,L,U,Q)=>{const z=()=>{if(E.isMounted){let{next:J,bu:Y,u:ae,parent:se,vnode:de}=E;{const st=ym(E);if(st){J&&(J.el=de.el,Re(E,J,Q)),st.asyncDep.then(()=>{E.isUnmounted||z()});return}}let ve=J,rt;vr(E,!1),J?(J.el=de.el,Re(E,J,Q)):J=de,Y&&Ro(Y),(rt=J.props&&J.props.onVnodeBeforeUpdate)&&Xt(rt,se,J,de),vr(E,!0);const Xe=td(E),Vt=E.subTree;E.subTree=Xe,O(Vt,Xe,p(Vt.el),dn(Vt),E,L,U),J.el=Xe.el,ve===null&&HE(E,Xe.el),ae&&kt(ae,L),(rt=J.props&&J.props.onVnodeUpdated)&&kt(()=>Xt(rt,se,J,de),L)}else{let J;const{el:Y,props:ae}=S,{bm:se,m:de,parent:ve,root:rt,type:Xe}=E,Vt=hi(S);vr(E,!1),se&&Ro(se),!Vt&&(J=ae&&ae.onVnodeBeforeMount)&&Xt(J,ve,S),vr(E,!0);{rt.ce&&rt.ce._injectChildStyle(Xe);const st=E.subTree=td(E);O(null,st,D,F,E,L,U),S.el=st.el}if(de&&kt(de,L),!Vt&&(J=ae&&ae.onVnodeMounted)){const st=S;kt(()=>Xt(J,ve,st),L)}(S.shapeFlag&256||ve&&hi(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&kt(E.a,L),E.isMounted=!0,S=D=F=null}};E.scope.on();const H=E.effect=new Rp(z);E.scope.off();const B=E.update=H.run.bind(H),re=E.job=H.runIfDirty.bind(H);re.i=E,re.id=E.uid,H.scheduler=()=>tu(re),vr(E,!0),B()},Re=(E,S,D)=>{S.component=E;const F=E.vnode.props;E.vnode=S,E.next=null,SE(E,S.props,F,D),kE(E,S.children,D),lr(),Kh(E),cr()},Te=(E,S,D,F,L,U,Q,z,H=!1)=>{const B=E&&E.children,re=E?E.shapeFlag:0,J=S.children,{patchFlag:Y,shapeFlag:ae}=S;if(Y>0){if(Y&128){hr(B,J,D,F,L,U,Q,z,H);return}else if(Y&256){$t(B,J,D,F,L,U,Q,z,H);return}}ae&8?(re&16&&fr(B,L,U),J!==B&&d(D,J)):re&16?ae&16?hr(B,J,D,F,L,U,Q,z,H):fr(B,L,U,!0):(re&8&&d(D,""),ae&16&&y(J,D,F,L,U,Q,z,H))},$t=(E,S,D,F,L,U,Q,z,H)=>{E=E||ss,S=S||ss;const B=E.length,re=S.length,J=Math.min(B,re);let Y;for(Y=0;Y<J;Y++){const ae=S[Y]=H?Bn(S[Y]):nn(S[Y]);O(E[Y],ae,D,null,L,U,Q,z,H)}B>re?fr(E,L,U,!0,!1,J):y(S,D,F,L,U,Q,z,H,J)},hr=(E,S,D,F,L,U,Q,z,H)=>{let B=0;const re=S.length;let J=E.length-1,Y=re-1;for(;B<=J&&B<=Y;){const ae=E[B],se=S[B]=H?Bn(S[B]):nn(S[B]);if(Ir(ae,se))O(ae,se,D,null,L,U,Q,z,H);else break;B++}for(;B<=J&&B<=Y;){const ae=E[J],se=S[Y]=H?Bn(S[Y]):nn(S[Y]);if(Ir(ae,se))O(ae,se,D,null,L,U,Q,z,H);else break;J--,Y--}if(B>J){if(B<=Y){const ae=Y+1,se=ae<re?S[ae].el:F;for(;B<=Y;)O(null,S[B]=H?Bn(S[B]):nn(S[B]),D,se,L,U,Q,z,H),B++}}else if(B>Y)for(;B<=J;)qe(E[B],L,U,!0),B++;else{const ae=B,se=B,de=new Map;for(B=se;B<=Y;B++){const Ye=S[B]=H?Bn(S[B]):nn(S[B]);Ye.key!=null&&de.set(Ye.key,B)}let ve,rt=0;const Xe=Y-se+1;let Vt=!1,st=0;const On=new Array(Xe);for(B=0;B<Xe;B++)On[B]=0;for(B=ae;B<=J;B++){const Ye=E[B];if(rt>=Xe){qe(Ye,L,U,!0);continue}let Lt;if(Ye.key!=null)Lt=de.get(Ye.key);else for(ve=se;ve<=Y;ve++)if(On[ve-se]===0&&Ir(Ye,S[ve])){Lt=ve;break}Lt===void 0?qe(Ye,L,U,!0):(On[Lt-se]=B+1,Lt>=st?st=Lt:Vt=!0,O(Ye,S[Lt],D,null,L,U,Q,z,H),rt++)}const Us=Vt?DE(On):ss;for(ve=Us.length-1,B=Xe-1;B>=0;B--){const Ye=se+B,Lt=S[Ye],Zi=Ye+1<re?S[Ye+1].el:F;On[B]===0?O(null,Lt,D,Zi,L,U,Q,z,H):Vt&&(ve<0||B!==Us[ve]?hn(Lt,D,Zi,2):ve--)}}},hn=(E,S,D,F,L=null)=>{const{el:U,type:Q,transition:z,children:H,shapeFlag:B}=E;if(B&6){hn(E.component.subTree,S,D,F);return}if(B&128){E.suspense.move(S,D,F);return}if(B&64){Q.move(E,S,D,Jt);return}if(Q===Fe){r(U,S,D);for(let J=0;J<H.length;J++)hn(H[J],S,D,F);r(E.anchor,S,D);return}if(Q===Po){G(E,S,D);return}if(F!==2&&B&1&&z)if(F===0)z.beforeEnter(U),r(U,S,D),kt(()=>z.enter(U),L);else{const{leave:J,delayLeave:Y,afterLeave:ae}=z,se=()=>r(U,S,D),de=()=>{J(U,()=>{se(),ae&&ae()})};Y?Y(U,se,de):de()}else r(U,S,D)},qe=(E,S,D,F=!1,L=!1)=>{const{type:U,props:Q,ref:z,children:H,dynamicChildren:B,shapeFlag:re,patchFlag:J,dirs:Y,cacheIndex:ae}=E;if(J===-2&&(L=!1),z!=null&&Qo(z,null,D,E,!0),ae!=null&&(S.renderCache[ae]=void 0),re&256){S.ctx.deactivate(E);return}const se=re&1&&Y,de=!hi(E);let ve;if(de&&(ve=Q&&Q.onVnodeBeforeUnmount)&&Xt(ve,S,E),re&6)dr(E.component,D,F);else{if(re&128){E.suspense.unmount(D,F);return}se&&yr(E,null,S,"beforeUnmount"),re&64?E.type.remove(E,S,D,Jt,F):B&&!B.hasOnce&&(U!==Fe||J>0&&J&64)?fr(B,S,D,!1,!0):(U===Fe&&J&384||!L&&re&16)&&fr(H,S,D),F&&ze(E)}(de&&(ve=Q&&Q.onVnodeUnmounted)||se)&&kt(()=>{ve&&Xt(ve,S,E),se&&yr(E,null,S,"unmounted")},D)},ze=E=>{const{type:S,el:D,anchor:F,transition:L}=E;if(S===Fe){ol(D,F);return}if(S===Po){q(E);return}const U=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:z}=L,H=()=>Q(D,U);z?z(E.el,U,H):H()}else U()},ol=(E,S)=>{let D;for(;E!==S;)D=g(E),s(E),E=D;s(S)},dr=(E,S,D)=>{const{bum:F,scope:L,job:U,subTree:Q,um:z,m:H,a:B}=E;ed(H),ed(B),F&&Ro(F),L.stop(),U&&(U.flags|=8,qe(Q,E,S,D)),z&&kt(z,S),kt(()=>{E.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},fr=(E,S,D,F=!1,L=!1,U=0)=>{for(let Q=U;Q<E.length;Q++)qe(E[Q],S,D,F,L)},dn=E=>{if(E.shapeFlag&6)return dn(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const S=g(E.anchor||E.el),D=S&&S[rE];return D?g(D):S};let Ms=!1;const Yi=(E,S,D)=>{E==null?S._vnode&&qe(S._vnode,null,null,!0):O(S._vnode||null,E,S,null,null,null,D),S._vnode=E,Ms||(Ms=!0,Kh(),zp(),Ms=!1)},Jt={p:O,um:qe,m:hn,r:ze,mt:Oe,mc:y,pc:Te,pbc:w,n:dn,o:t};return{render:Yi,hydrate:void 0,createApp:IE(Yi)}}function Pl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function NE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _m(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Bn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&_m(o,l)),l.type===Na&&(l.el=o.el)}}function DE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ym(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ym(e)}function ed(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const VE=Symbol.for("v-scx"),LE=()=>Co(VE);function fi(t,e,n){return vm(t,e,n)}function vm(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:o}=n,l=Je({},n),c=e&&r||!e&&i!=="post";let u;if(Si){if(i==="sync"){const I=LE();u=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=rn,I.resume=rn,I.pause=rn,I}}const d=ft;l.call=(I,R,O)=>Wt(I,d,R,O);let p=!1;i==="post"?l.scheduler=I=>{kt(I,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,R)=>{R?I():tu(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const g=Yv(t,e,l);return Si&&(u?u.push(g):c&&g()),g}function ME(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Em(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Ui(this),l=vm(s,i.bind(r),n);return o(),l}function Em(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const FE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zn(e)}Modifiers`]||t[`${Mr(e)}Modifiers`];function UE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&FE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Be(d)?d.trim():d)),o.number&&(s=n.map(Jl)));let l,c=r[l=wl(e)]||r[l=wl(Zn(e))];!c&&i&&(c=r[l=wl(Mr(e))]),c&&Wt(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Wt(u,t,6,s)}}function Tm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=Tm(u,e,!0);d&&(l=!0,Je(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):Je(o,i),De(t)&&r.set(t,o),o)}function xa(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Mr(e))||be(t,e))}function td(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:I,ctx:R,inheritAttrs:O}=t,P=Go(t);let j,K;try{if(n.shapeFlag&4){const q=s||r,Z=q;j=nn(u.call(Z,q,d,p,I,g,R)),K=l}else{const q=e;j=nn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),K=e.props?l:BE(l)}}catch(q){pi.length=0,Pa(q,t,1),j=ke(At)}let G=j;if(K&&O!==!1){const q=Object.keys(K),{shapeFlag:Z}=G;q.length&&Z&7&&(i&&q.some(Hc)&&(K=$E(K,i)),G=er(G,K,!1,!0))}return n.dirs&&(G=er(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&Pr(G,n.transition),j=G,Go(P),j}const BE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},$E=(t,e)=>{const n={};for(const r in t)(!Hc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!xa(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?nd(r,o,u):!0:!!o;return!1}function nd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xa(n,i))return!0}return!1}function HE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wm=t=>t.__isSuspense;function qE(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):nE(t)}const Fe=Symbol.for("v-fgt"),Na=Symbol.for("v-txt"),At=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),pi=[];let Nt=null;function te(t=!1){pi.push(Nt=t?null:[])}function zE(){pi.pop(),Nt=pi[pi.length-1]||null}let bi=1;function rd(t,e=!1){bi+=t,t<0&&Nt&&e&&(Nt.hasOnce=!0)}function Im(t){return t.dynamicChildren=bi>0?Nt||ss:null,zE(),bi>0&&Nt&&Nt.push(t),t}function ge(t,e,n,r,s,i){return Im(k(t,e,n,r,s,i,!0))}function Tt(t,e,n,r,s){return Im(ke(t,e,n,r,s,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const bm=({key:t})=>t??null,ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||gt(t)||pe(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bm(e),ref:e&&ko(e),scopeId:Kp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return l?(su(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),bi>0&&!o&&Nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Nt.push(c),c}const ke=WE;function WE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mE)&&(t=At),Xo(t)){const l=er(t,e,!0);return n&&su(l,n),bi>0&&!i&&Nt&&(l.shapeFlag&6?Nt[Nt.indexOf(t)]=l:Nt.push(l)),l.patchFlag=-2,l}if(rT(t)&&(t=t.__vccOpts),e){e=KE(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=Kc(l)),De(c)&&(eu(c)&&!ce(c)&&(c=Je({},c)),e.style=Wc(c))}const o=Be(t)?1:wm(t)?128:Gp(t)?64:De(t)?4:pe(t)?2:0;return k(t,e,n,r,s,o,i,!0)}function KE(t){return t?eu(t)||um(t)?Je({},t):t:null}function er(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?QE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&bm(u),ref:e&&e.ref?n&&i?ce(i)?i.concat(ko(e)):[i,ko(e)]:ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&er(t.ssContent),ssFallback:t.ssFallback&&er(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Pr(d,c.clone(d)),d}function Ai(t=" ",e=0){return ke(Na,null,t,e)}function GE(t,e){const n=ke(Po,null,t);return n.staticCount=e,n}function lt(t="",e=!1){return e?(te(),Tt(At,null,t)):ke(At,null,t)}function nn(t){return t==null||typeof t=="boolean"?ke(At):ce(t)?ke(Fe,null,t.slice()):Xo(t)?Bn(t):ke(Na,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:er(t)}function su(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),su(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!um(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[Ai(e)]):n=8);t.children=e,t.shapeFlag|=n}function QE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kc([e.class,r.class]));else if(s==="style")e.style=Wc([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Wt(t,e,7,[n,r])}const JE=am();let XE=0;function YE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||JE,i={uid:XE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Iv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(r,s),emitsOptions:Tm(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UE.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const Am=()=>ft||xt;let Yo,oc;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),oc=e("__VUE_SSR_SETTERS__",n=>Si=n)}const Ui=t=>{const e=ft;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},sd=()=>{ft&&ft.scope.off(),Yo(null)};function Sm(t){return t.vnode.shapeFlag&4}let Si=!1;function ZE(t,e=!1,n=!1){e&&oc(e);const{props:r,children:s}=t.vnode,i=Sm(t);AE(t,r,i,e),PE(t,s,n);const o=i?eT(t,e):void 0;return e&&oc(!1),o}function eT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gE);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?nT(t):null,i=Ui(t),o=Li(r,t,0,[t.props,s]),l=vp(o);if(cr(),i(),(l||t.sp)&&!hi(t)&&em(t),l){if(o.then(sd,sd),e)return o.then(c=>{id(t,c)}).catch(c=>{Pa(c,t,0)});t.asyncDep=o}else id(t,o)}else Rm(t)}function id(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=jp(e)),Rm(t)}function Rm(t,e,n){const r=t.type;t.render||(t.render=r.render||rn);{const s=Ui(t);lr();try{_E(t)}finally{cr(),s()}}}const tT={get(t,e){return ut(t,"get",""),t[e]}};function nT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tT),slots:t.slots,emit:t.emit,expose:e}}function Da(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jp(qv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}})):t.proxy}function rT(t){return pe(t)&&"__vccOpts"in t}const Ae=(t,e)=>Jv(t,e,Si);function sT(t,e,n){const r=arguments.length;return r===2?De(e)&&!ce(e)?Xo(e)?ke(t,null,[e]):ke(t,e):ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xo(n)&&(n=[n]),ke(t,e,n))}const iT="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const od=typeof window<"u"&&window.trustedTypes;if(od)try{ac=od.createPolicy("vue",{createHTML:t=>t})}catch{}const Cm=ac?t=>ac.createHTML(t):t=>t,oT="http://www.w3.org/2000/svg",aT="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,ad=gn&&gn.createElement("template"),lT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gn.createElementNS(oT,t):e==="mathml"?gn.createElementNS(aT,t):n?gn.createElement(t,{is:n}):gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ad.innerHTML=Cm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ad.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vn="transition",Zs="animation",gs=Symbol("_vtc"),Pm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},km=Je({},Jp,Pm),cT=t=>(t.displayName="Transition",t.props=km,t),ld=cT((t,{slots:e})=>sT(iE,Om(t),e)),Er=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},cd=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function Om(t){const e={};for(const T in t)T in Pm||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,R=uT(s),O=R&&R[0],P=R&&R[1],{onBeforeEnter:j,onEnter:K,onEnterCancelled:G,onLeave:q,onLeaveCancelled:Z,onBeforeAppear:ie=j,onAppear:b=K,onAppearCancelled:y=G}=e,_=(T,v,Oe,yt)=>{T._enterCancelled=yt,Mn(T,v?d:l),Mn(T,v?u:o),Oe&&Oe()},w=(T,v)=>{T._isLeaving=!1,Mn(T,p),Mn(T,I),Mn(T,g),v&&v()},A=T=>(v,Oe)=>{const yt=T?b:K,je=()=>_(v,T,Oe);Er(yt,[v,je]),ud(()=>{Mn(v,T?c:i),Zt(v,T?d:l),cd(yt)||hd(v,r,O,je)})};return Je(e,{onBeforeEnter(T){Er(j,[T]),Zt(T,i),Zt(T,o)},onBeforeAppear(T){Er(ie,[T]),Zt(T,c),Zt(T,u)},onEnter:A(!1),onAppear:A(!0),onLeave(T,v){T._isLeaving=!0;const Oe=()=>w(T,v);Zt(T,p),T._enterCancelled?(Zt(T,g),lc()):(lc(),Zt(T,g)),ud(()=>{T._isLeaving&&(Mn(T,p),Zt(T,I),cd(q)||hd(T,r,P,Oe))}),Er(q,[T,Oe])},onEnterCancelled(T){_(T,!1,void 0,!0),Er(G,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),Er(y,[T])},onLeaveCancelled(T){w(T),Er(Z,[T])}})}function uT(t){if(t==null)return null;if(De(t))return[kl(t.enter),kl(t.leave)];{const e=kl(t);return[e,e]}}function kl(t){return gv(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[gs]||(t[gs]=new Set)).add(e)}function Mn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[gs];n&&(n.delete(e),n.size||(t[gs]=void 0))}function ud(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hT=0;function hd(t,e,n,r){const s=t._endId=++hT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=xm(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=I=>{I.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function xm(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${Vn}Delay`),i=r(`${Vn}Duration`),o=dd(s,i),l=r(`${Zs}Delay`),c=r(`${Zs}Duration`),u=dd(l,c);let d=null,p=0,g=0;e===Vn?o>0&&(d=Vn,p=o,g=i.length):e===Zs?u>0&&(d=Zs,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?Vn:Zs:null,g=d?d===Vn?i.length:c.length:0);const I=d===Vn&&/\b(transform|all)(,|$)/.test(r(`${Vn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:I}}function dd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>fd(n)+fd(t[r])))}function fd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function lc(){return document.body.offsetHeight}function dT(t,e,n){const r=t[gs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pd=Symbol("_vod"),fT=Symbol("_vsh"),pT=Symbol(""),mT=/(^|;)\s*display\s*:/;function gT(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Oo(r,l,"")}else for(const o in e)n[o]==null&&Oo(r,o,"");for(const o in n)o==="display"&&(i=!0),Oo(r,o,n[o])}else if(s){if(e!==n){const o=r[pT];o&&(n+=";"+o),r.cssText=n,i=mT.test(n)}}else e&&t.removeAttribute("style");pd in t&&(t[pd]=i?r.display:"",t[fT]&&(r.display="none"))}const md=/\s*!important$/;function Oo(t,e,n){if(ce(n))n.forEach(r=>Oo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_T(t,e);md.test(n)?t.setProperty(Mr(r),n.replace(md,""),"important"):t[r]=n}}const gd=["Webkit","Moz","ms"],Ol={};function _T(t,e){const n=Ol[e];if(n)return n;let r=Zn(e);if(r!=="filter"&&r in t)return Ol[e]=r;r=wp(r);for(let s=0;s<gd.length;s++){const i=gd[s]+r;if(i in t)return Ol[e]=i}return e}const _d="http://www.w3.org/1999/xlink";function yd(t,e,n,r,s,i=wv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_d,e.slice(6,e.length)):t.setAttributeNS(_d,e,n):n==null||i&&!bp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ar(n)?String(n):n)}function vd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=bp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yr(t,e,n,r){t.addEventListener(e,n,r)}function yT(t,e,n,r){t.removeEventListener(e,n,r)}const Ed=Symbol("_vei");function vT(t,e,n,r,s=null){const i=t[Ed]||(t[Ed]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=ET(e);if(r){const u=i[e]=IT(r,s);Yr(t,l,u,c)}else o&&(yT(t,l,o,c),i[e]=void 0)}}const Td=/(?:Once|Passive|Capture)$/;function ET(t){let e;if(Td.test(t)){e={};let r;for(;r=t.match(Td);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let xl=0;const TT=Promise.resolve(),wT=()=>xl||(TT.then(()=>xl=0),xl=Date.now());function IT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(bT(r,n.value),e,5,[r])};return n.value=t,n.attached=wT(),n}function bT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,AT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?dT(t,r,o):e==="style"?gT(t,n,r):Ia(e)?Hc(e)||vT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ST(t,e,r,o))?(vd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?vd(t,Zn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yd(t,e,r,o))};function ST(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wd(e)&&Be(n)?!1:e in t}const Nm=new WeakMap,Dm=new WeakMap,Zo=Symbol("_moveCb"),Id=Symbol("_enterCb"),RT=t=>(delete t.props.mode,t),CT=RT({name:"TransitionGroup",props:Je({},km,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Am(),r=Qp();let s,i;return nm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!xT(s[0].el,n.vnode.el,o))return;s.forEach(PT),s.forEach(kT);const l=s.filter(OT);lc(),l.forEach(c=>{const u=c.el,d=u.style;Zt(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Zo]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Zo]=null,Mn(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Ie(t),l=Om(o);let c=o.tag||Fe;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Pr(d,Ii(d,l,r,n)),Nm.set(d,d.el.getBoundingClientRect()))}i=e.default?nu(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Pr(d,Ii(d,l,r,n))}return ke(c,null,i)}}}),iu=CT;function PT(t){const e=t.el;e[Zo]&&e[Zo](),e[Id]&&e[Id]()}function kT(t){Dm.set(t,t.el.getBoundingClientRect())}function OT(t){const e=Nm.get(t),n=Dm.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function xT(t,e,n){const r=t.cloneNode(),s=t[gs];s&&s.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=xm(r);return i.removeChild(r),o}const bd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Ro(e,n):e};function NT(t){t.target.composing=!0}function Ad(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nl=Symbol("_assign"),us={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Nl]=bd(s);const i=r||s.props&&s.props.type==="number";Yr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Jl(l)),t[Nl](l)}),n&&Yr(t,"change",()=>{t.value=t.value.trim()}),e||(Yr(t,"compositionstart",NT),Yr(t,"compositionend",Ad),Yr(t,"change",Ad))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Nl]=bd(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Jl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},DT=["ctrl","shift","alt","meta"],VT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>DT.some(n=>t[`${n}Key`]&&!e.includes(n))},_s=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=VT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},LT=Je({patchProp:AT},lT);let Sd;function MT(){return Sd||(Sd=OE(LT))}const FT=(...t)=>{const e=MT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BT(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,UT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function UT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function BT(t){return Be(t)?document.querySelector(t):t}function Vm(t,e){return function(){return t.apply(e,arguments)}}const{toString:$T}=Object.prototype,{getPrototypeOf:ou}=Object,Va=(t=>e=>{const n=$T.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Gt=t=>(t=t.toLowerCase(),e=>Va(e)===t),La=t=>e=>typeof e===t,{isArray:Rs}=Array,Ri=La("undefined");function jT(t){return t!==null&&!Ri(t)&&t.constructor!==null&&!Ri(t.constructor)&&Dt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Lm=Gt("ArrayBuffer");function HT(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Lm(t.buffer),e}const qT=La("string"),Dt=La("function"),Mm=La("number"),Ma=t=>t!==null&&typeof t=="object",zT=t=>t===!0||t===!1,xo=t=>{if(Va(t)!=="object")return!1;const e=ou(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},WT=Gt("Date"),KT=Gt("File"),GT=Gt("Blob"),QT=Gt("FileList"),JT=t=>Ma(t)&&Dt(t.pipe),XT=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Dt(t.append)&&((e=Va(t))==="formdata"||e==="object"&&Dt(t.toString)&&t.toString()==="[object FormData]"))},YT=Gt("URLSearchParams"),[ZT,ew,tw,nw]=["ReadableStream","Request","Response","Headers"].map(Gt),rw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Rs(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let l;for(r=0;r<o;r++)l=i[r],e.call(null,t[l],l,t)}}function Fm(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const br=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Um=t=>!Ri(t)&&t!==br;function cc(){const{caseless:t}=Um(this)&&this||{},e={},n=(r,s)=>{const i=t&&Fm(e,s)||s;xo(e[i])&&xo(r)?e[i]=cc(e[i],r):xo(r)?e[i]=cc({},r):Rs(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Bi(arguments[r],n);return e}const sw=(t,e,n,{allOwnKeys:r}={})=>(Bi(e,(s,i)=>{n&&Dt(s)?t[i]=Vm(s,n):t[i]=s},{allOwnKeys:r}),t),iw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ow=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},aw=(t,e,n,r)=>{let s,i,o;const l={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&ou(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},lw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},cw=t=>{if(!t)return null;if(Rs(t))return t;let e=t.length;if(!Mm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},uw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ou(Uint8Array)),hw=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},dw=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},fw=Gt("HTMLFormElement"),pw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Rd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),mw=Gt("RegExp"),Bm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Bi(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},gw=t=>{Bm(t,(e,n)=>{if(Dt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Dt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_w=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Rs(t)?r(t):r(String(t).split(e)),n},yw=()=>{},vw=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Dl="abcdefghijklmnopqrstuvwxyz",Cd="0123456789",$m={DIGIT:Cd,ALPHA:Dl,ALPHA_DIGIT:Dl+Dl.toUpperCase()+Cd},Ew=(t=16,e=$m.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Tw(t){return!!(t&&Dt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ww=t=>{const e=new Array(10),n=(r,s)=>{if(Ma(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Rs(r)?[]:{};return Bi(r,(o,l)=>{const c=n(o,s+1);!Ri(c)&&(i[l]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Iw=Gt("AsyncFunction"),bw=t=>t&&(Ma(t)||Dt(t))&&Dt(t.then)&&Dt(t.catch),jm=((t,e)=>t?setImmediate:e?((n,r)=>(br.addEventListener("message",({source:s,data:i})=>{s===br&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),br.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Dt(br.postMessage)),Aw=typeof queueMicrotask<"u"?queueMicrotask.bind(br):typeof process<"u"&&process.nextTick||jm,N={isArray:Rs,isArrayBuffer:Lm,isBuffer:jT,isFormData:XT,isArrayBufferView:HT,isString:qT,isNumber:Mm,isBoolean:zT,isObject:Ma,isPlainObject:xo,isReadableStream:ZT,isRequest:ew,isResponse:tw,isHeaders:nw,isUndefined:Ri,isDate:WT,isFile:KT,isBlob:GT,isRegExp:mw,isFunction:Dt,isStream:JT,isURLSearchParams:YT,isTypedArray:uw,isFileList:QT,forEach:Bi,merge:cc,extend:sw,trim:rw,stripBOM:iw,inherits:ow,toFlatObject:aw,kindOf:Va,kindOfTest:Gt,endsWith:lw,toArray:cw,forEachEntry:hw,matchAll:dw,isHTMLForm:fw,hasOwnProperty:Rd,hasOwnProp:Rd,reduceDescriptors:Bm,freezeMethods:gw,toObjectSet:_w,toCamelCase:pw,noop:yw,toFiniteNumber:vw,findKey:Fm,global:br,isContextDefined:Um,ALPHABET:$m,generateString:Ew,isSpecCompliantForm:Tw,toJSONObject:ww,isAsyncFn:Iw,isThenable:bw,setImmediate:jm,asap:Aw};function fe(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}N.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const Hm=fe.prototype,qm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{qm[t]={value:t}});Object.defineProperties(fe,qm);Object.defineProperty(Hm,"isAxiosError",{value:!0});fe.from=(t,e,n,r,s,i)=>{const o=Object.create(Hm);return N.toFlatObject(t,o,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),fe.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Sw=null;function uc(t){return N.isPlainObject(t)||N.isArray(t)}function zm(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function Pd(t,e,n){return t?t.concat(e).map(function(s,i){return s=zm(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Rw(t){return N.isArray(t)&&!t.some(uc)}const Cw=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function Fa(t,e,n){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(O,P){return!N.isUndefined(P[O])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(s))throw new TypeError("visitor must be a function");function u(R){if(R===null)return"";if(N.isDate(R))return R.toISOString();if(!c&&N.isBlob(R))throw new fe("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(R)||N.isTypedArray(R)?c&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function d(R,O,P){let j=R;if(R&&!P&&typeof R=="object"){if(N.endsWith(O,"{}"))O=r?O:O.slice(0,-2),R=JSON.stringify(R);else if(N.isArray(R)&&Rw(R)||(N.isFileList(R)||N.endsWith(O,"[]"))&&(j=N.toArray(R)))return O=zm(O),j.forEach(function(G,q){!(N.isUndefined(G)||G===null)&&e.append(o===!0?Pd([O],q,i):o===null?O:O+"[]",u(G))}),!1}return uc(R)?!0:(e.append(Pd(P,O,i),u(R)),!1)}const p=[],g=Object.assign(Cw,{defaultVisitor:d,convertValue:u,isVisitable:uc});function I(R,O){if(!N.isUndefined(R)){if(p.indexOf(R)!==-1)throw Error("Circular reference detected in "+O.join("."));p.push(R),N.forEach(R,function(j,K){(!(N.isUndefined(j)||j===null)&&s.call(e,j,N.isString(K)?K.trim():K,O,g))===!0&&I(j,O?O.concat(K):[K])}),p.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return I(t),e}function kd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function au(t,e){this._pairs=[],t&&Fa(t,this,e)}const Wm=au.prototype;Wm.append=function(e,n){this._pairs.push([e,n])};Wm.toString=function(e){const n=e?function(r){return e.call(this,r,kd)}:kd;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Km(t,e,n){if(!e)return t;const r=n&&n.encode||Pw;N.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=N.isURLSearchParams(e)?e.toString():new au(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Od{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Gm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kw=typeof URLSearchParams<"u"?URLSearchParams:au,Ow=typeof FormData<"u"?FormData:null,xw=typeof Blob<"u"?Blob:null,Nw={isBrowser:!0,classes:{URLSearchParams:kw,FormData:Ow,Blob:xw},protocols:["http","https","file","blob","url","data"]},lu=typeof window<"u"&&typeof document<"u",hc=typeof navigator=="object"&&navigator||void 0,Dw=lu&&(!hc||["ReactNative","NativeScript","NS"].indexOf(hc.product)<0),Vw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Lw=lu&&window.location.href||"http://localhost",Mw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lu,hasStandardBrowserEnv:Dw,hasStandardBrowserWebWorkerEnv:Vw,navigator:hc,origin:Lw},Symbol.toStringTag,{value:"Module"})),pt={...Mw,...Nw};function Fw(t,e){return Fa(t,new pt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return pt.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Uw(t){return N.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Bw(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Qm(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=i>=n.length;return o=!o&&N.isArray(s)?s.length:o,c?(N.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!N.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&N.isArray(s[o])&&(s[o]=Bw(s[o])),!l)}if(N.isFormData(t)&&N.isFunction(t.entries)){const n={};return N.forEachEntry(t,(r,s)=>{e(Uw(r),s,n,0)}),n}return null}function $w(t,e,n){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const $i={transitional:Gm,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=N.isObject(e);if(i&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return s?JSON.stringify(Qm(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Fw(e,this.formSerializer).toString();if((l=N.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Fa(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$w(e)):e}],transformResponse:[function(e){const n=this.transitional||$i.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?fe.from(l,fe.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pt.classes.FormData,Blob:pt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],t=>{$i.headers[t]={}});const jw=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Hw=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&jw[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},xd=Symbol("internals");function ei(t){return t&&String(t).trim().toLowerCase()}function No(t){return t===!1||t==null?t:N.isArray(t)?t.map(No):String(t)}function qw(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const zw=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Vl(t,e,n,r,s){if(N.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!N.isString(e)){if(N.isString(r))return e.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(e)}}function Ww(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Kw(t,e){const n=N.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let St=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(l,c,u){const d=ei(c);if(!d)throw new Error("header name must be a non-empty string");const p=N.findKey(s,d);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||c]=No(l))}const o=(l,c)=>N.forEach(l,(u,d)=>i(u,d,c));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(N.isString(e)&&(e=e.trim())&&!zw(e))o(Hw(e),n);else if(N.isHeaders(e))for(const[l,c]of e.entries())i(c,l,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=ei(e),e){const r=N.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return qw(s);if(N.isFunction(n))return n.call(this,s,r);if(N.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ei(e),e){const r=N.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Vl(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=ei(o),o){const l=N.findKey(r,o);l&&(!n||Vl(r,r[l],l,n))&&(delete r[l],s=!0)}}return N.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Vl(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return N.forEach(this,(s,i)=>{const o=N.findKey(r,i);if(o){n[o]=No(s),delete n[i];return}const l=e?Ww(i):String(i).trim();l!==i&&delete n[i],n[l]=No(s),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return N.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[xd]=this[xd]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=ei(o);r[l]||(Kw(s,o),r[l]=!0)}return N.isArray(e)?e.forEach(i):i(e),this}};St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});N.freezeMethods(St);function Ll(t,e){const n=this||$i,r=e||n,s=St.from(r.headers);let i=r.data;return N.forEach(t,function(l){i=l.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Jm(t){return!!(t&&t.__CANCEL__)}function Cs(t,e,n){fe.call(this,t??"canceled",fe.ERR_CANCELED,e,n),this.name="CanceledError"}N.inherits(Cs,fe,{__CANCEL__:!0});function Xm(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Gw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Qw(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),d=r[i];o||(o=u),n[s]=c,r[s]=u;let p=i,g=0;for(;p!==s;)g+=n[p++],p=p%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const I=d&&u-d;return I?Math.round(g*1e3/I):void 0}}function Jw(t,e){let n=0,r=1e3/e,s,i;const o=(u,d=Date.now())=>{n=d,s=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const d=Date.now(),p=d-n;p>=r?o(u,d):(s=u,i||(i=setTimeout(()=>{i=null,o(s)},r-p)))},()=>s&&o(s)]}const ea=(t,e,n=3)=>{let r=0;const s=Qw(50,250);return Jw(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,c=o-r,u=s(c),d=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-o)/u:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},Nd=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Dd=t=>(...e)=>N.asap(()=>t(...e)),Xw=pt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,pt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(pt.origin),pt.navigator&&/(msie|trident)/i.test(pt.navigator.userAgent)):()=>!0,Yw=pt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];N.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),N.isString(r)&&o.push("path="+r),N.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Zw(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function eI(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ym(t,e){return t&&!Zw(e)?eI(t,e):e}const Vd=t=>t instanceof St?{...t}:t;function kr(t,e){e=e||{};const n={};function r(u,d,p,g){return N.isPlainObject(u)&&N.isPlainObject(d)?N.merge.call({caseless:g},u,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d}function s(u,d,p,g){if(N.isUndefined(d)){if(!N.isUndefined(u))return r(void 0,u,p,g)}else return r(u,d,p,g)}function i(u,d){if(!N.isUndefined(d))return r(void 0,d)}function o(u,d){if(N.isUndefined(d)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,p){if(p in e)return r(u,d);if(p in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,d,p)=>s(Vd(u),Vd(d),p,!0)};return N.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=c[d]||s,g=p(t[d],e[d],d);N.isUndefined(g)&&p!==l||(n[d]=g)}),n}const Zm=t=>{const e=kr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:l}=e;e.headers=o=St.from(o),e.url=Km(Ym(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(N.isFormData(n)){if(pt.hasStandardBrowserEnv||pt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...d]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(pt.hasStandardBrowserEnv&&(r&&N.isFunction(r)&&(r=r(e)),r||r!==!1&&Xw(e.url))){const u=s&&i&&Yw.read(i);u&&o.set(s,u)}return e},tI=typeof XMLHttpRequest<"u",nI=tI&&function(t){return new Promise(function(n,r){const s=Zm(t);let i=s.data;const o=St.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=s,d,p,g,I,R;function O(){I&&I(),R&&R(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function j(){if(!P)return;const G=St.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),Z={data:!l||l==="text"||l==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:G,config:t,request:P};Xm(function(b){n(b),O()},function(b){r(b),O()},Z),P=null}"onloadend"in P?P.onloadend=j:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(j)},P.onabort=function(){P&&(r(new fe("Request aborted",fe.ECONNABORTED,t,P)),P=null)},P.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,t,P)),P=null},P.ontimeout=function(){let q=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const Z=s.transitional||Gm;s.timeoutErrorMessage&&(q=s.timeoutErrorMessage),r(new fe(q,Z.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,t,P)),P=null},i===void 0&&o.setContentType(null),"setRequestHeader"in P&&N.forEach(o.toJSON(),function(q,Z){P.setRequestHeader(Z,q)}),N.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),l&&l!=="json"&&(P.responseType=s.responseType),u&&([g,R]=ea(u,!0),P.addEventListener("progress",g)),c&&P.upload&&([p,I]=ea(c),P.upload.addEventListener("progress",p),P.upload.addEventListener("loadend",I)),(s.cancelToken||s.signal)&&(d=G=>{P&&(r(!G||G.type?new Cs(null,t,P):G),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const K=Gw(s.url);if(K&&pt.protocols.indexOf(K)===-1){r(new fe("Unsupported protocol "+K+":",fe.ERR_BAD_REQUEST,t));return}P.send(i||null)})},rI=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,l();const d=u instanceof Error?u:this.reason;r.abort(d instanceof fe?d:new Cs(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,i(new fe(`timeout ${e} of ms exceeded`,fe.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>N.asap(l),c}},sI=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},iI=async function*(t,e){for await(const n of oI(t))yield*sI(n,e)},oI=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Ld=(t,e,n,r)=>{const s=iI(t,e);let i=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await s.next();if(u){l(),c.close();return}let p=d.byteLength;if(n){let g=i+=p;n(g)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},Ua=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",eg=Ua&&typeof ReadableStream=="function",aI=Ua&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),tg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},lI=eg&&tg(()=>{let t=!1;const e=new Request(pt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Md=64*1024,dc=eg&&tg(()=>N.isReadableStream(new Response("").body)),ta={stream:dc&&(t=>t.body)};Ua&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ta[e]&&(ta[e]=N.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new fe(`Response type '${e}' is not supported`,fe.ERR_NOT_SUPPORT,r)})})})(new Response);const cI=async t=>{if(t==null)return 0;if(N.isBlob(t))return t.size;if(N.isSpecCompliantForm(t))return(await new Request(pt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(N.isArrayBufferView(t)||N.isArrayBuffer(t))return t.byteLength;if(N.isURLSearchParams(t)&&(t=t+""),N.isString(t))return(await aI(t)).byteLength},uI=async(t,e)=>{const n=N.toFiniteNumber(t.getContentLength());return n??cI(e)},hI=Ua&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:p="same-origin",fetchOptions:g}=Zm(t);u=u?(u+"").toLowerCase():"text";let I=rI([s,i&&i.toAbortSignal()],o),R;const O=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let P;try{if(c&&lI&&n!=="get"&&n!=="head"&&(P=await uI(d,r))!==0){let Z=new Request(e,{method:"POST",body:r,duplex:"half"}),ie;if(N.isFormData(r)&&(ie=Z.headers.get("content-type"))&&d.setContentType(ie),Z.body){const[b,y]=Nd(P,ea(Dd(c)));r=Ld(Z.body,Md,b,y)}}N.isString(p)||(p=p?"include":"omit");const j="credentials"in Request.prototype;R=new Request(e,{...g,signal:I,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:j?p:void 0});let K=await fetch(R);const G=dc&&(u==="stream"||u==="response");if(dc&&(l||G&&O)){const Z={};["status","statusText","headers"].forEach(_=>{Z[_]=K[_]});const ie=N.toFiniteNumber(K.headers.get("content-length")),[b,y]=l&&Nd(ie,ea(Dd(l),!0))||[];K=new Response(Ld(K.body,Md,b,()=>{y&&y(),O&&O()}),Z)}u=u||"text";let q=await ta[N.findKey(ta,u)||"text"](K,t);return!G&&O&&O(),await new Promise((Z,ie)=>{Xm(Z,ie,{data:q,headers:St.from(K.headers),status:K.status,statusText:K.statusText,config:t,request:R})})}catch(j){throw O&&O(),j&&j.name==="TypeError"&&/fetch/i.test(j.message)?Object.assign(new fe("Network Error",fe.ERR_NETWORK,t,R),{cause:j.cause||j}):fe.from(j,j&&j.code,t,R)}}),fc={http:Sw,xhr:nI,fetch:hI};N.forEach(fc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Fd=t=>`- ${t}`,dI=t=>N.isFunction(t)||t===null||t===!1,ng={getAdapter:t=>{t=N.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!dI(n)&&(r=fc[(o=String(n)).toLowerCase()],r===void 0))throw new fe(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Fd).join(`
`):" "+Fd(i[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:fc};function Ml(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Cs(null,t)}function Ud(t){return Ml(t),t.headers=St.from(t.headers),t.data=Ll.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ng.getAdapter(t.adapter||$i.adapter)(t).then(function(r){return Ml(t),r.data=Ll.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return Jm(r)||(Ml(t),r&&r.response&&(r.response.data=Ll.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const rg="1.7.9",Ba={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ba[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Bd={};Ba.transitional=function(e,n,r){function s(i,o){return"[Axios v"+rg+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(e===!1)throw new fe(s(o," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!Bd[o]&&(Bd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,l):!0}};Ba.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function fI(t,e,n){if(typeof t!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const l=t[i],c=l===void 0||o(l,i,t);if(c!==!0)throw new fe("option "+i+" must be "+c,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+i,fe.ERR_BAD_OPTION)}}const Do={assertOptions:fI,validators:Ba},Yt=Do.validators;let Rr=class{constructor(e){this.defaults=e,this.interceptors={request:new Od,response:new Od}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=kr(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Do.assertOptions(r,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1),s!=null&&(N.isFunction(s)?n.paramsSerializer={serialize:s}:Do.assertOptions(s,{encode:Yt.function,serialize:Yt.function},!0)),Do.assertOptions(n,{baseUrl:Yt.spelling("baseURL"),withXsrfToken:Yt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&N.merge(i.common,i[n.method]);i&&N.forEach(["delete","get","head","post","put","patch","common"],R=>{delete i[R]}),n.headers=St.concat(o,i);const l=[];let c=!0;this.interceptors.request.forEach(function(O){typeof O.runWhen=="function"&&O.runWhen(n)===!1||(c=c&&O.synchronous,l.unshift(O.fulfilled,O.rejected))});const u=[];this.interceptors.response.forEach(function(O){u.push(O.fulfilled,O.rejected)});let d,p=0,g;if(!c){const R=[Ud.bind(this),void 0];for(R.unshift.apply(R,l),R.push.apply(R,u),g=R.length,d=Promise.resolve(n);p<g;)d=d.then(R[p++],R[p++]);return d}g=l.length;let I=n;for(p=0;p<g;){const R=l[p++],O=l[p++];try{I=R(I)}catch(P){O.call(this,P);break}}try{d=Ud.call(this,I)}catch(R){return Promise.reject(R)}for(p=0,g=u.length;p<g;)d=d.then(u[p++],u[p++]);return d}getUri(e){e=kr(this.defaults,e);const n=Ym(e.baseURL,e.url);return Km(n,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){Rr.prototype[e]=function(n,r){return this.request(kr(r||{},{method:e,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,l){return this.request(kr(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Rr.prototype[e]=n(),Rr.prototype[e+"Form"]=n(!0)});let pI=class sg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,l){r.reason||(r.reason=new Cs(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new sg(function(s){e=s}),cancel:e}}};function mI(t){return function(n){return t.apply(null,n)}}function gI(t){return N.isObject(t)&&t.isAxiosError===!0}const pc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pc).forEach(([t,e])=>{pc[e]=t});function ig(t){const e=new Rr(t),n=Vm(Rr.prototype.request,e);return N.extend(n,Rr.prototype,e,{allOwnKeys:!0}),N.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return ig(kr(t,s))},n}const $e=ig($i);$e.Axios=Rr;$e.CanceledError=Cs;$e.CancelToken=pI;$e.isCancel=Jm;$e.VERSION=rg;$e.toFormData=Fa;$e.AxiosError=fe;$e.Cancel=$e.CanceledError;$e.all=function(e){return Promise.all(e)};$e.spread=mI;$e.isAxiosError=gI;$e.mergeConfig=kr;$e.AxiosHeaders=St;$e.formToJSON=t=>Qm(N.isHTMLForm(t)?new FormData(t):t);$e.getAdapter=ng.getAdapter;$e.HttpStatusCode=pc;$e.default=$e;const{Axios:sx,AxiosError:ix,CanceledError:ox,isCancel:ax,CancelToken:lx,VERSION:cx,all:ux,Cancel:hx,isAxiosError:dx,spread:fx,toFormData:px,AxiosHeaders:mx,HttpStatusCode:gx,formToJSON:_x,getAdapter:yx,mergeConfig:vx}=$e,_I=()=>{};var $d={};/**
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
 */const og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,I=u&63;c||(I=64,o||(g=64)),r.push(n[d],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new vI;const g=i<<2|l>>4;if(r.push(g),u!==64){const I=l<<4&240|u>>2;if(r.push(I),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EI=function(t){const e=og(t);return ag.encodeByteArray(e,!0)},na=function(t){return EI(t).replace(/\./g,"")},lg=function(t){try{return ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wI=()=>TI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof $d>"u")return;const t=$d.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lg(t[1]);return e&&JSON.parse(e)},$a=()=>{try{return _I()||wI()||II()||bI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cg=t=>{var e,n;return(n=(e=$a())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AI=t=>{const e=cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ug=()=>{var t;return(t=$a())===null||t===void 0?void 0:t.config},hg=t=>{var e;return(e=$a())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class SI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function RI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function CI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function PI(){var t;const e=(t=$a())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NI(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DI(){return!PI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const MI="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MI,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?FI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Pn(s,l,r)}}function FI(t,e){return t.replace(UI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jd(i)&&jd(o)){if(!Or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jd(t){return t!==null&&typeof t=="object"}/**
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
 */function Hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $I(t,e){const n=new jI(t,e);return n.subscribe.bind(n)}class jI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fl),s.error===void 0&&(s.error=Fl),s.complete===void 0&&(s.complete=Fl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class qI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(t){return t===wr?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
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
 */class KI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const GI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},QI=_e.INFO,JI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cu{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const YI=(t,e)=>e.some(n=>t instanceof n);let Hd,qd;function ZI(){return Hd||(Hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eb(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,mc=new WeakMap,fg=new WeakMap,Ul=new WeakMap,uu=new WeakMap;function tb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),uu.set(e,t),e}function nb(t){if(mc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rb(t){gc=t(gc)}function sb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bl(this),e,...n);return fg.set(r,e.sort?e.sort():[e]),Kn(r)}:eb().includes(t)?function(...e){return t.apply(Bl(this),e),Kn(dg.get(this))}:function(...e){return Kn(t.apply(Bl(this),e))}}function ib(t){return typeof t=="function"?sb(t):(t instanceof IDBTransaction&&nb(t),YI(t,ZI())?new Proxy(t,gc):t)}function Kn(t){if(t instanceof IDBRequest)return tb(t);if(Ul.has(t))return Ul.get(t);const e=ib(t);return e!==t&&(Ul.set(t,e),uu.set(e,t)),e}const Bl=t=>uu.get(t);function ob(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kn(o.result),c.oldVersion,c.newVersion,Kn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ab=["get","getKey","getAll","getAllKeys","count"],lb=["put","add","delete","clear"],$l=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ab.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return $l.set(e,i),i}rb(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
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
 */class cb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ub(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ub(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _c="@firebase/app",Wd="0.11.3";/**
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
 */const bn=new cu("@firebase/app"),hb="@firebase/app-compat",db="@firebase/analytics-compat",fb="@firebase/analytics",pb="@firebase/app-check-compat",mb="@firebase/app-check",gb="@firebase/auth",_b="@firebase/auth-compat",yb="@firebase/database",vb="@firebase/data-connect",Eb="@firebase/database-compat",Tb="@firebase/functions",wb="@firebase/functions-compat",Ib="@firebase/installations",bb="@firebase/installations-compat",Ab="@firebase/messaging",Sb="@firebase/messaging-compat",Rb="@firebase/performance",Cb="@firebase/performance-compat",Pb="@firebase/remote-config",kb="@firebase/remote-config-compat",Ob="@firebase/storage",xb="@firebase/storage-compat",Nb="@firebase/firestore",Db="@firebase/vertexai",Vb="@firebase/firestore-compat",Lb="firebase",Mb="11.5.0";/**
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
 */const yc="[DEFAULT]",Fb={[_c]:"fire-core",[hb]:"fire-core-compat",[fb]:"fire-analytics",[db]:"fire-analytics-compat",[mb]:"fire-app-check",[pb]:"fire-app-check-compat",[gb]:"fire-auth",[_b]:"fire-auth-compat",[yb]:"fire-rtdb",[vb]:"fire-data-connect",[Eb]:"fire-rtdb-compat",[Tb]:"fire-fn",[wb]:"fire-fn-compat",[Ib]:"fire-iid",[bb]:"fire-iid-compat",[Ab]:"fire-fcm",[Sb]:"fire-fcm-compat",[Rb]:"fire-perf",[Cb]:"fire-perf-compat",[Pb]:"fire-rc",[kb]:"fire-rc-compat",[Ob]:"fire-gcs",[xb]:"fire-gcs-compat",[Nb]:"fire-fst",[Vb]:"fire-fst-compat",[Db]:"fire-vertex","fire-js":"fire-js",[Lb]:"fire-js-all"};/**
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
 */const ra=new Map,Ub=new Map,vc=new Map;function Kd(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(vc.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,t);for(const n of ra.values())Kd(n,t);for(const n of Ub.values())Kd(n,t);return!0}function hu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Bb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new ji("app","Firebase",Bb);/**
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
 */class $b{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=Mb;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=ug()),!n)throw Gn.create("no-options");const i=ra.get(s);if(i){if(Or(n,i.options)&&Or(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new KI(s);for(const c of vc.values())o.addComponent(c);const l=new $b(n,r,o);return ra.set(s,l),l}function mg(t=yc){const e=ra.get(t);if(!e&&t===yc&&ug())return pg();if(!e)throw Gn.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let s=(r=Fb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}ys(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jb="firebase-heartbeat-database",Hb=1,Ci="firebase-heartbeat-store";let jl=null;function gg(){return jl||(jl=ob(jb,Hb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),jl}async function qb(t){try{const n=(await gg()).transaction(Ci),r=await n.objectStore(Ci).get(_g(t));return await n.done,r}catch(e){if(e instanceof Pn)bn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Gd(t,e){try{const r=(await gg()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,_g(t)),await r.done}catch(n){if(n instanceof Pn)bn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zb=1024,Wb=30;class Kb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Wb){const o=Jb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qd(),{heartbeatsToSend:r,unsentEntries:s}=Gb(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function Qd(){return new Date().toISOString().substring(0,10)}function Gb(t,e=zb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jd(t){return na(JSON.stringify({version:2,heartbeats:t})).length}function Jb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Xb(t){ys(new xr("platform-logger",e=>new cb(e),"PRIVATE")),ys(new xr("heartbeat",e=>new Kb(e),"PRIVATE")),Qn(_c,Wd,t),Qn(_c,Wd,"esm2017"),Qn("fire-js","")}Xb("");var Yb="firebase",Zb="11.5.0";/**
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
 */Qn(Yb,Zb,"app");function du(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e0=yg,vg=new ji("auth","Firebase",yg());/**
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
 */const sa=new cu("@firebase/auth");function t0(t,...e){sa.logLevel<=_e.WARN&&sa.warn(`Auth (${Ps}): ${t}`,...e)}function Vo(t,...e){sa.logLevel<=_e.ERROR&&sa.error(`Auth (${Ps}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw fu(t,...e)}function sn(t,...e){return fu(t,...e)}function Eg(t,e,n){const r=Object.assign(Object.assign({},e0()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return Eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vg.create(t,...e)}function oe(t,e,...n){if(!t)throw fu(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function An(t,e){t||vn(e)}/**
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
 */function Ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function n0(){return Xd()==="http:"||Xd()==="https:"}function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function r0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n0()||OI()||"connection"in navigator)?navigator.onLine:!0}function s0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=CI()||xI()}get(){return r0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pu(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const i0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const o0=new qi(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,r,s={}){return wg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return kI()||(u.referrerPolicy="no-referrer"),Tg.fetch()(Ig(t,t.config.apiHost,n,l),u)})}async function wg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},i0),e);try{const s=new l0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Eo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Eg(t,d,u);Kt(t,d)}}catch(s){if(s instanceof Pn)throw s;Kt(t,"network-request-failed",{message:String(s)})}}async function zi(t,e,n,r,s={}){const i=await kn(t,e,n,r,s);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ig(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pu(t.config,s):`${t.config.apiScheme}://${s}`}function a0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class l0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),o0.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function Yd(t){return t!==void 0&&t.enterprise!==void 0}class c0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return a0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function u0(t,e){return kn(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
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
 */async function h0(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function bg(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d0(t,e=!1){const n=It(t),r=await n.getIdToken(e),s=mu(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:mi(Hl(s.auth_time)),issuedAtTime:mi(Hl(s.iat)),expirationTime:mi(Hl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hl(t){return Number(t)*1e3}function mu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=lg(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zd(t){const e=mu(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&f0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function f0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class p0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vs(t,bg(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ag(i.providerUserInfo):[],l=g0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function m0(t){const e=It(t);await ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ag(t){return t.map(e=>{var{providerId:n}=e,r=du(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _0(t,e){const n=await wg(t,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ig(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function y0(t,e){return kn(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Zd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hs;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Ln(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d0(this,e)}reload(){return m0(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await vs(this,h0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,K=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:q,isAnonymous:Z,providerData:ie,stsTokenManager:b}=n;oe(G&&b,e,"internal-error");const y=hs.fromJSON(this.name,b);oe(typeof G=="string",e,"internal-error"),Ln(p,e.name),Ln(g,e.name),oe(typeof q=="boolean",e,"internal-error"),oe(typeof Z=="boolean",e,"internal-error"),Ln(I,e.name),Ln(R,e.name),Ln(O,e.name),Ln(P,e.name),Ln(j,e.name),Ln(K,e.name);const _=new En({uid:G,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:Z,photoURL:R,phoneNumber:I,tenantId:O,stsTokenManager:y,createdAt:j,lastLoginAt:K});return ie&&Array.isArray(ie)&&(_.providerData=ie.map(w=>Object.assign({},w))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new hs;s.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ag(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new hs;l.updateFromIdToken(r);const c=new En({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Tc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ef=new Map;function Tn(t){An(t instanceof Function,"Expected a class definition");let e=ef.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ef.set(t,e),e)}/**
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
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const tf=Sg;/**
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
 */function Lo(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Tn(tf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Tn(tf);const o=Lo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=En._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ds(i,e,r))}}/**
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
 */function nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xg(e))return"Blackberry";if(Ng(e))return"Webos";if(Cg(e))return"Safari";if((e.includes("chrome/")||Pg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rg(t=_t()){return/firefox\//i.test(t)}function Cg(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pg(t=_t()){return/crios\//i.test(t)}function kg(t=_t()){return/iemobile/i.test(t)}function Og(t=_t()){return/android/i.test(t)}function xg(t=_t()){return/blackberry/i.test(t)}function Ng(t=_t()){return/webos/i.test(t)}function gu(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function v0(t=_t()){var e;return gu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E0(){return NI()&&document.documentMode===10}function Dg(t=_t()){return gu(t)||Og(t)||Ng(t)||xg(t)||/windows phone/i.test(t)||kg(t)}/**
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
 */function Vg(t,e=[]){let n;switch(t){case"Browser":n=nf(_t());break;case"Worker":n=`${nf(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
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
 */class T0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function w0(t,e={}){return kn(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
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
 */const I0=6;class b0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:I0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class A0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rf(this),this.idTokenSubscription=new rf(this),this.beforeStateQueue=new T0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bg(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(wn(this));const n=e?It(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w0(this),n=new b0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await y0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&t0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(t){return It(t)}class rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=$I(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S0(t){ja=t}function Lg(t){return ja.loadJS(t)}function R0(){return ja.recaptchaEnterpriseScript}function C0(){return ja.gapiScript}function P0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class k0{constructor(){this.enterprise=new O0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class O0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const x0="recaptcha-enterprise",Mg="NO_RECAPTCHA";class N0{constructor(e){this.type=x0,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{u0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new c0(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Mg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new k0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Yd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=R0();c.length!==0&&(c+=l),Lg(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function sf(t,e,n,r=!1,s=!1){const i=new N0(t);let o;if(s)o=Mg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function D0(t,e){const n=hu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Or(i,e??{}))return s;Kt(s,"already-initialized")}return n.initialize({options:e})}function V0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function L0(t,e,n){const r=Fr(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fg(e),{host:o,port:l}=M0(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Or(u,r.config.emulator)&&Or(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,F0()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function M0(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:of(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:of(o)}}}function of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function F0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class _u{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function U0(t,e){return kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function B0(t,e){return zi(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
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
 */async function $0(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function j0(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
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
 */class Pi extends _u{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,n,"signInWithPassword",B0);case"emailLink":return $0(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wc(e,r,"signUpPassword",U0);case"emailLink":return j0(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fs(t,e){return zi(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
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
 */const H0="http://localhost";class Nr extends _u{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=du(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:H0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
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
 */function q0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function z0(t){const e=ri(si(t)).link,n=e?ri(si(e)).deep_link_id:null,r=ri(si(t)).deep_link_id;return(r?ri(si(r)).link:null)||r||n||e||t}class yu{constructor(e){var n,r,s,i,o,l;const c=ri(si(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=q0((s=c.mode)!==null&&s!==void 0?s:null);oe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=z0(e);try{return new yu(n)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yu.parseLink(n);return oe(r,"argument-error"),Pi._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends Wi{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class jn extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class Hn extends Wi{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */class qn extends Wi{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function W0(t,e){return zi(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
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
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await En._fromIdTokenResponse(e,r,s),o=af(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=af(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oa(e,n,r,s)}}function Bg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,r):i})}async function K0(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
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
 */async function G0(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await vs(t,Bg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=mu(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),i}}/**
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
 */async function $g(t,e,n=!1){if(Ft(t.app))return Promise.reject(wn(t));const r="signIn",s=await Bg(t,r,e),i=await Dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Q0(t,e){return $g(Fr(t),e)}/**
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
 */async function jg(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function J0(t,e,n){if(Ft(t.app))return Promise.reject(wn(t));const r=Fr(t),o=await wc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",W0).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&jg(t),c}),l=await Dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function X0(t,e,n){return Ft(t.app)?Promise.reject(wn(t)):Q0(It(t),ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jg(t),r})}/**
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
 */async function Y0(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lf(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=It(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vs(r,Y0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Z0(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function eA(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function tA(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}function nA(t){return It(t).signOut()}const aa="__sak";/**
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
 */class Hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rA=1e3,sA=10;class qg extends Hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);E0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qg.type="LOCAL";const iA=qg;/**
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
 */class zg extends Hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zg.type="SESSION";const Wg=zg;/**
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
 */function oA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ha{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ha(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await oA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
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
 */function vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=vu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function on(){return window}function lA(t){on().location.href=t}/**
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
 */function Kg(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function cA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hA(){return Kg()?self:null}/**
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
 */const Gg="firebaseLocalStorageDb",dA=1,la="firebaseLocalStorage",Qg="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qa(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function fA(){const t=indexedDB.deleteDatabase(Gg);return new Ki(t).toPromise()}function Ic(){const t=indexedDB.open(Gg,dA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(la,{keyPath:Qg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(la)?e(r):(r.close(),await fA(),e(await Ic()))})})}async function cf(t,e,n){const r=qa(t,!0).put({[Qg]:e,value:n});return new Ki(r).toPromise()}async function pA(t,e){const n=qa(t,!1).get(e),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function uf(t,e){const n=qa(t,!0).delete(e);return new Ki(n).toPromise()}const mA=800,gA=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(hA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cA(),!this.activeServiceWorker)return;this.sender=new aA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ic();return await cf(e,aa,"1"),await uf(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qa(s,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const _A=Jg;new qi(3e4,6e4);/**
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
 */function yA(t,e){return e?Tn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Eu extends _u{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vA(t){return $g(t.auth,new Eu(t),t.bypassAuthState)}function EA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),G0(n,new Eu(t),t.bypassAuthState)}async function TA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),K0(n,new Eu(t),t.bypassAuthState)}/**
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
 */class Xg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vA;case"linkViaPopup":case"linkViaRedirect":return TA;case"reauthViaPopup":case"reauthViaRedirect":return EA;default:Kt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wA=new qi(2e3,1e4);class rs extends Xg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wA.get())};e()}}rs.currentPopupAction=null;/**
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
 */const IA="pendingRedirect",Mo=new Map;class bA extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await AA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AA(t,e){const n=CA(e),r=RA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SA(t,e){Mo.set(t._key(),e)}function RA(t){return Tn(t._redirectPersistence)}function CA(t){return Lo(IA,t.config.apiKey,t.name)}async function PA(t,e,n=!1){if(Ft(t.app))return Promise.reject(wn(t));const r=Fr(t),s=yA(r,e),o=await new bA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kA=10*60*1e3;class OA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kA&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(e))}saveEventToCache(e){this.cachedEventUids.add(hf(e)),this.lastProcessedEventTime=Date.now()}}function hf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(t);default:return!1}}/**
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
 */async function NA(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
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
 */const DA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VA=/^https?/;async function LA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NA(t);for(const n of e)try{if(MA(n))return}catch{}Kt(t,"unauthorized-domain")}function MA(t){const e=Ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VA.test(n))return!1;if(DA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const FA=new qi(3e4,6e4);function df(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UA(t){return new Promise((e,n)=>{var r,s,i;function o(){df(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{df(),n(sn(t,"network-request-failed"))},timeout:FA.get()})}if(!((s=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)o();else{const l=P0("iframefcb");return on()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},Lg(`${C0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function BA(t){return Fo=Fo||UA(t),Fo}/**
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
 */const $A=new qi(5e3,15e3),jA="__/auth/iframe",HA="emulator/auth/iframe",qA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WA(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pu(e,HA):`https://${t.config.authDomain}/${jA}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=zA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hi(r).slice(1)}`}async function KA(t){const e=await BA(t),n=on().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:WA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{i(o)},$A.get());function c(){on().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const GA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QA=500,JA=600,XA="_blank",YA="http://localhost";class ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZA(t,e,n,r=QA,s=JA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},GA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_t().toLowerCase();n&&(l=Pg(u)?XA:n),Rg(u)&&(e=e||YA,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[I,R])=>`${g}${I}=${R},`,"");if(v0(u)&&l!=="_self")return eS(e||"",l),new ff(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new ff(p)}function eS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tS="__/auth/handler",nS="emulator/auth/handler",rS=encodeURIComponent("fac");async function pf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof Ug){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Wi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${rS}=${encodeURIComponent(c)}`:"";return`${sS(t)}?${Hi(l).slice(1)}${u}`}function sS({config:t}){return t.emulator?pu(t,nS):`https://${t.authDomain}/${tS}`}/**
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
 */const ql="webStorageSupport";class iS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=PA,this._overrideRedirectResult=SA}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await pf(e,n,r,Ec(),s);return ZA(e,o,vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await pf(e,n,r,Ec(),s);return lA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KA(e),r=new OA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ql,{type:ql},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ql];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dg()||Cg()||gu()}}const oS=iS;var mf="@firebase/auth",gf="1.9.1";/**
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
 */class aS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cS(t){ys(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vg(t)},u=new A0(r,s,i,c);return V0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ys(new xr("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new aS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(mf,gf,lS(t)),Qn(mf,gf,"esm2017")}/**
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
 */const uS=5*60,hS=hg("authIdTokenMaxAge")||uS;let _f=null;const dS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hS)return;const s=n==null?void 0:n.token;_f!==s&&(_f=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fS(t=mg()){const e=hu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=D0(t,{popupRedirectResolver:oS,persistence:[_A,iA,Wg]}),r=hg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=dS(i.toString());eA(n,o,()=>o(n.currentUser)),Z0(n,l=>o(l))}}const s=cg("auth");return s&&L0(n,`http://${s}`),n}function pS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}S0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cS("Browser");var yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Zg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.D=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,A,T){for(var v=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)v[Oe-2]=arguments[Oe];return y.prototype[A].apply(w,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);var w=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)w[A]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(A=0;16>A;++A)w[A]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],A=b.g[2];var T=b.g[3],v=y+(T^_&(A^T))+w[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=T+(A^y&(_^A))+w[1]+3905402710&4294967295,T=y+(v<<12&4294967295|v>>>20),v=A+(_^T&(y^_))+w[2]+606105819&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(y^A&(T^y))+w[3]+3250441966&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(T^_&(A^T))+w[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=T+(A^y&(_^A))+w[5]+1200080426&4294967295,T=y+(v<<12&4294967295|v>>>20),v=A+(_^T&(y^_))+w[6]+2821735955&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(y^A&(T^y))+w[7]+4249261313&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(T^_&(A^T))+w[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=T+(A^y&(_^A))+w[9]+2336552879&4294967295,T=y+(v<<12&4294967295|v>>>20),v=A+(_^T&(y^_))+w[10]+4294925233&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(y^A&(T^y))+w[11]+2304563134&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(T^_&(A^T))+w[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=T+(A^y&(_^A))+w[13]+4254626195&4294967295,T=y+(v<<12&4294967295|v>>>20),v=A+(_^T&(y^_))+w[14]+2792965006&4294967295,A=T+(v<<17&4294967295|v>>>15),v=_+(y^A&(T^y))+w[15]+1236535329&4294967295,_=A+(v<<22&4294967295|v>>>10),v=y+(A^T&(_^A))+w[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(y^_))+w[6]+3225465664&4294967295,T=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(T^y))+w[11]+643717713&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(A^T))+w[0]+3921069994&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(A^T&(_^A))+w[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(y^_))+w[10]+38016083&4294967295,T=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(T^y))+w[15]+3634488961&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(A^T))+w[4]+3889429448&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(A^T&(_^A))+w[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(y^_))+w[14]+3275163606&4294967295,T=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(T^y))+w[3]+4107603335&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(A^T))+w[8]+1163531501&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(A^T&(_^A))+w[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^A&(y^_))+w[2]+4243563512&4294967295,T=y+(v<<9&4294967295|v>>>23),v=A+(y^_&(T^y))+w[7]+1735328473&4294967295,A=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(A^T))+w[12]+2368359562&4294967295,_=A+(v<<20&4294967295|v>>>12),v=y+(_^A^T)+w[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^A)+w[8]+2272392833&4294967295,T=y+(v<<11&4294967295|v>>>21),v=A+(T^y^_)+w[11]+1839030562&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^y)+w[14]+4259657740&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(_^A^T)+w[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^A)+w[4]+1272893353&4294967295,T=y+(v<<11&4294967295|v>>>21),v=A+(T^y^_)+w[7]+4139469664&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^y)+w[10]+3200236656&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(_^A^T)+w[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^A)+w[0]+3936430074&4294967295,T=y+(v<<11&4294967295|v>>>21),v=A+(T^y^_)+w[3]+3572445317&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^y)+w[6]+76029189&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(_^A^T)+w[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^A)+w[12]+3873151461&4294967295,T=y+(v<<11&4294967295|v>>>21),v=A+(T^y^_)+w[15]+530742520&4294967295,A=T+(v<<16&4294967295|v>>>16),v=_+(A^T^y)+w[2]+3299628645&4294967295,_=A+(v<<23&4294967295|v>>>9),v=y+(A^(_|~T))+w[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~A))+w[7]+1126891415&4294967295,T=y+(v<<10&4294967295|v>>>22),v=A+(y^(T|~_))+w[14]+2878612391&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~y))+w[5]+4237533241&4294967295,_=A+(v<<21&4294967295|v>>>11),v=y+(A^(_|~T))+w[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~A))+w[3]+2399980690&4294967295,T=y+(v<<10&4294967295|v>>>22),v=A+(y^(T|~_))+w[10]+4293915773&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~y))+w[1]+2240044497&4294967295,_=A+(v<<21&4294967295|v>>>11),v=y+(A^(_|~T))+w[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~A))+w[15]+4264355552&4294967295,T=y+(v<<10&4294967295|v>>>22),v=A+(y^(T|~_))+w[6]+2734768916&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~y))+w[13]+1309151649&4294967295,_=A+(v<<21&4294967295|v>>>11),v=y+(A^(_|~T))+w[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~A))+w[11]+3174756917&4294967295,T=y+(v<<10&4294967295|v>>>22),v=A+(y^(T|~_))+w[2]+718787259&4294967295,A=T+(v<<15&4294967295|v>>>17),v=_+(T^(A|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var _=y-this.blockSize,w=this.B,A=this.h,T=0;T<y;){if(A==0)for(;T<=_;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(w[A++]=b.charCodeAt(T++),A==this.blockSize){s(this,w),A=0;break}}else for(;T<y;)if(w[A++]=b[T++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var _=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=_&255,_/=256;for(this.u(b),b=Array(16),y=_=0;4>y;++y)for(var w=0;32>w;w+=8)b[_++]=this.g[y]>>>w&255;return b};function i(b,y){var _=l;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;for(var _=[],w=!0,A=b.length-1;0<=A;A--){var T=b[A]|0;w&&T==y||(_[A]=T,w=!1)}this.g=_}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return P(u(-b));for(var y=[],_=1,w=0;b>=_;w++)y[w]=b/_|0,_*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return P(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),w=p,A=0;A<b.length;A+=8){var T=Math.min(8,b.length-A),v=parseInt(b.substring(A,A+T),y);8>T?(T=u(Math.pow(y,T)),w=w.j(T).add(u(v))):(w=w.j(_),w=w.add(u(v)))}return w}var p=c(0),g=c(1),I=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-P(this).m();for(var b=0,y=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(O(this))return"-"+P(this).toString(b);for(var y=u(Math.pow(b,6)),_=this,w="";;){var A=q(_,y).g;_=j(_,A.j(y));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=A,R(_))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=j(this,b),O(b)?-1:R(b)?0:1};function P(b){for(var y=b.g.length,_=[],w=0;w<y;w++)_[w]=~b.g[w];return new o(_,~b.h).add(g)}t.abs=function(){return O(this)?P(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0,A=0;A<=y;A++){var T=w+(this.i(A)&65535)+(b.i(A)&65535),v=(T>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);w=v>>>16,T&=65535,v&=65535,_[A]=v<<16|T}return new o(_,_[_.length-1]&-2147483648?-1:0)};function j(b,y){return b.add(P(y))}t.j=function(b){if(R(this)||R(b))return p;if(O(this))return O(b)?P(this).j(P(b)):P(P(this).j(b));if(O(b))return P(this.j(P(b)));if(0>this.l(I)&&0>b.l(I))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,_=[],w=0;w<2*y;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var A=0;A<b.g.length;A++){var T=this.i(w)>>>16,v=this.i(w)&65535,Oe=b.i(A)>>>16,yt=b.i(A)&65535;_[2*w+2*A]+=v*yt,K(_,2*w+2*A),_[2*w+2*A+1]+=T*yt,K(_,2*w+2*A+1),_[2*w+2*A+1]+=v*Oe,K(_,2*w+2*A+1),_[2*w+2*A+2]+=T*Oe,K(_,2*w+2*A+2)}for(w=0;w<y;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=y;w<2*y;w++)_[w]=0;return new o(_,0)};function K(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function G(b,y){this.g=b,this.h=y}function q(b,y){if(R(y))throw Error("division by zero");if(R(b))return new G(p,p);if(O(b))return y=q(P(b),y),new G(P(y.g),P(y.h));if(O(y))return y=q(b,P(y)),new G(P(y.g),y.h);if(30<b.g.length){if(O(b)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,w=y;0>=w.l(b);)_=Z(_),w=Z(w);var A=ie(_,1),T=ie(w,1);for(w=ie(w,2),_=ie(_,2);!R(w);){var v=T.add(w);0>=v.l(b)&&(A=A.add(_),T=v),w=ie(w,1),_=ie(_,1)}return y=j(b,A.j(y)),new G(A,y)}for(A=p;0<=b.l(y);){for(_=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=u(_),v=T.j(y);O(v)||0<v.l(b);)_-=w,T=u(_),v=T.j(y);R(T)&&(T=g),A=A.add(T),b=j(b,v)}return new G(A,b)}t.A=function(b){return q(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)&b.i(w);return new o(_,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)|b.i(w);return new o(_,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),_=[],w=0;w<y;w++)_[w]=this.i(w)^b.i(w);return new o(_,this.h^b.h)};function Z(b){for(var y=b.g.length+1,_=[],w=0;w<y;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(_,b.h)}function ie(b,y){var _=y>>5;y%=32;for(var w=b.g.length-_,A=[],T=0;T<w;T++)A[T]=0<y?b.i(T+_)>>>y|b.i(T+_+1)<<32-y:b.i(T+_);return new o(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Jn=o}).apply(typeof yf<"u"?yf:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_,ii,t_,Uo,bc,n_,r_,s_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,C={next:function(){if(!m&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,C,x){for(var W=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)W[Ce-2]=arguments[Ce];return h.prototype[C].apply(m,W)}}function O(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=a.length||0,x=m.length||0;a.length=C+x;for(let W=0;W<x;W++)a[C+W]=m[W]}else a.push(m)}}class j{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function K(a){return/^[\s\xa0]*$/.test(a)}function G(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Z=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ie(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let x=0;x<_.length;x++)f=_[x],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){l.setTimeout(()=>{throw a},0)}function v(){var a=$t;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Oe{constructor(){this.h=this.g=null}add(h,f){const m=yt.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var yt=new j(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Te=!1,$t=new Oe,hr=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(hn)}};var hn=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){T(f)}var h=yt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Te=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var ol=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function dr(a,h){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{q(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:fr[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dr.aa.h.call(this)}}R(dr,ze);var fr={2:"touch",3:"pen",4:"mouse"};dr.prototype.h=function(){dr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),Ms=0;function Yi(a,h,f,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=C,this.key=++Ms,this.da=this.fa=!1}function Jt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fs(a){this.src=a,this.g={},this.h=0}Fs.prototype.add=function(a,h,f,m,C){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var W=S(a,h,m,C);return-1<W?(h=a[W],f||(h.fa=!1)):(h=new Yi(h,this.src,x,!!m,C),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=C)&&Array.prototype.splice.call(m,C,1),x&&(Jt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function S(a,h,f,m){for(var C=0;C<a.length;++C){var x=a[C];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==m)return C}return-1}var D="closure_lm_"+(1e6*Math.random()|0),F={};function L(a,h,f,m,C){if(Array.isArray(h)){for(var x=0;x<h.length;x++)L(a,h[x],f,m,C);return null}return f=ae(f),a&&a[dn]?a.K(h,f,u(m)?!!m.capture:!1,C):U(a,h,f,!1,m,C)}function U(a,h,f,m,C,x){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,Ce=J(a);if(Ce||(a[D]=Ce=new Fs(a)),f=Ce.add(h,f,m,W,x),f.proxy)return f;if(m=Q(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)ol||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(B(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q(){function a(f){return h.call(a.src,a.listener,f)}const h=re;return a}function z(a,h,f,m,C){if(Array.isArray(h))for(var x=0;x<h.length;x++)z(a,h[x],f,m,C);else m=u(m)?!!m.capture:!!m,f=ae(f),a&&a[dn]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=S(x,f,m,C),-1<f&&(Jt(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=S(h,f,m,C)),(f=-1<a?h[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dn])E(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(B(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=J(h))?(E(f,a),f.h==0&&(f.src=null,h[D]=null)):Jt(a)}}}function B(a){return a in F?F[a]:F[a]="on"+a}function re(a,h){if(a.da)a=!0;else{h=new dr(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&H(a),a=f.call(m,h)}return a}function J(a){return a=a[D],a instanceof Fs?a:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[Y]||(a[Y]=function(h){return a.handleEvent(h)}),a[Y])}function se(){qe.call(this),this.i=new Fs(this),this.M=this,this.F=null}R(se,qe),se.prototype[dn]=!0,se.prototype.removeEventListener=function(a,h,f,m){z(this,a,h,f,m)};function de(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new ze(h,a);else if(h instanceof ze)h.target=h.target||a;else{var C=h;h=new ze(m,a),w(h,C)}if(C=!0,f)for(var x=f.length-1;0<=x;x--){var W=h.g=f[x];C=ve(W,m,!0,h)&&C}if(W=h.g=a,C=ve(W,m,!0,h)&&C,C=ve(W,m,!1,h)&&C,f)for(x=0;x<f.length;x++)W=h.g=f[x],C=ve(W,m,!1,h)&&C}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)Jt(f[m]);delete a.g[h],a.h--}}this.F=null},se.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},se.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function ve(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,x=0;x<h.length;++x){var W=h[x];if(W&&!W.da&&W.capture==f){var Ce=W.listener,Ze=W.ha||W.src;W.fa&&E(a.i,W),C=Ce.call(Ze,m)!==!1&&C}}return C&&!m.defaultPrevented}function rt(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Xe(a){a.g=rt(()=>{a.g=null,a.i&&(a.i=!1,Xe(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Vt extends qe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){qe.call(this),this.h=a,this.g={}}R(st,qe);var On=[];function Us(a){ie(a.g,function(h,f){this.g.hasOwnProperty(f)&&H(h)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),Us(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=l.JSON.stringify,Lt=l.JSON.parse,Zi=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function al(){}al.prototype.h=null;function Zu(a){return a.h||(a.h=a.i())}function eh(){}var Bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ll(){ze.call(this,"d")}R(ll,ze);function cl(){ze.call(this,"c")}R(cl,ze);var pr={},th=null;function eo(){return th=th||new se}pr.La="serverreachability";function nh(a){ze.call(this,pr.La,a)}R(nh,ze);function $s(a){const h=eo();de(h,new nh(h))}pr.STAT_EVENT="statevent";function rh(a,h){ze.call(this,pr.STAT_EVENT,a),this.stat=h}R(rh,ze);function vt(a){const h=eo();de(h,new rh(h,a))}pr.Ma="timingevent";function sh(a,h){ze.call(this,pr.Ma,a),this.size=h}R(sh,ze);function js(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hs(){this.g=!0}Hs.prototype.xa=function(){this.g=!1};function jy(a,h,f,m,C,x){a.info(function(){if(a.g)if(x)for(var W="",Ce=x.split("&"),Ze=0;Ze<Ce.length;Ze++){var we=Ce[Ze].split("=");if(1<we.length){var it=we[0];we=we[1];var ot=it.split("_");W=2<=ot.length&&ot[1]=="type"?W+(it+"="+we+"&"):W+(it+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+f+`
`+W})}function Hy(a,h,f,m,C,x,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+f+`
`+x+" "+W})}function qr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+zy(a,f)+(m?" "+m:"")})}function qy(a,h){a.info(function(){return"TIMEOUT: "+h})}Hs.prototype.info=function(){};function zy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return Ye(f)}catch{return h}}var to={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ih={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ul;function no(){}R(no,al),no.prototype.g=function(){return new XMLHttpRequest},no.prototype.i=function(){return{}},ul=new no;function xn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oh}function oh(){this.i=null,this.g="",this.h=!1}var ah={},hl={};function dl(a,h,f){a.L=1,a.v=oo(fn(h)),a.m=f,a.P=!0,lh(a,null)}function lh(a,h){a.F=Date.now(),ro(a),a.A=fn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),wh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new oh,a.g=Bh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Vt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(On[0]=C.toString()),C=On);for(var x=0;x<C.length;x++){var W=L(f,C[x],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$s(),jy(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&pn(a)==3?h.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=pn(this.g);var h=this.g.Ba();const Kr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Ph(this.g)))){this.J||ot!=4||h==7||(h==8||0>=Kr?$s(3):$s(2)),fl(this);var f=this.g.Z();this.X=f;t:if(ch(this)){var m=Ph(this.g);a="";var C=m.length,x=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),qs(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(x&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Hy(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Ze=this.g;if((Ce=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ce)){var we=Ce;break t}}we=null}if(f=we)qr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pl(this,f);else{this.o=!1,this.s=3,vt(12),mr(this),qs(this);break e}}if(this.P){f=!0;let jt;for(;!this.J&&this.C<W.length;)if(jt=Wy(this,W),jt==hl){ot==4&&(this.s=4,vt(14),f=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==ah){this.s=4,vt(15),qr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else qr(this.i,this.l,jt,null),pl(this,jt);if(ch(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||W.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)qr(this.i,this.l,W,"[Invalid Chunked Response]"),mr(this),qs(this);else if(0<W.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),El(it),it.M=!0,vt(11))}}else qr(this.i,this.l,W,null),pl(this,W);ot==4&&mr(this),this.o&&!this.J&&(ot==4?Lh(this.j,this):(this.o=!1,ro(this)))}else cv(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),mr(this),qs(this)}}}catch{}finally{}};function ch(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Wy(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?hl:(f=Number(h.substring(f,m)),isNaN(f)?ah:(m+=1,m+f>h.length?hl:(h=h.slice(m,m+f),a.C=m+f,h)))}xn.prototype.cancel=function(){this.J=!0,mr(this)};function ro(a){a.S=Date.now()+a.I,uh(a,a.I)}function uh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=js(g(a.ba,a),h)}function fl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qy(this.i,this.A),this.L!=2&&($s(),vt(17)),mr(this),this.s=2,qs(this)):uh(this,this.S-a)};function qs(a){a.j.G==0||a.J||Lh(a.j,a)}function mr(a){fl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Us(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function pl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||ml(f.h,a))){if(!a.K&&ml(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)fo(f),uo(f);else break e;vl(f),vt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=js(g(f.Za,f),6e3));if(1>=fh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else _r(f,11)}else if((a.K||f.g==a)&&fo(f),!K(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let we=C[h];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const it=we[3];it!=null&&(f.la=it,f.j.info("VER="+f.la));const ot=we[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Kr=we[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(m=1.5*Kr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const jt=a.g;if(jt){const mo=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var x=m.h;x.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(gl(x,x.h),x.h=null))}if(m.D){const Tl=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Tl&&(m.ya=Tl,Ne(m.I,m.D,Tl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var W=a;if(m.qa=Uh(m,m.J?m.ia:null,m.W),W.K){ph(m.h,W);var Ce=W,Ze=m.L;Ze&&(Ce.I=Ze),Ce.B&&(fl(Ce),ro(Ce)),m.g=W}else Dh(m);0<f.i.length&&ho(f)}else we[0]!="stop"&&we[0]!="close"||_r(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?_r(f,7):yl(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}$s(4)}catch{}}var Ky=class{constructor(a,h){this.g=a,this.map=h}};function hh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fh(a){return a.h?1:a.g?a.g.size:0}function ml(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function gl(a,h){a.g?a.g.add(h):a.h=h}function ph(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hh.prototype.cancel=function(){if(this.i=mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return O(a.i)}function Gy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function Qy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function gh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Qy(a),m=Gy(a),C=m.length,x=0;x<C;x++)h.call(void 0,m[x],f&&f[x],a)}var _h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jy(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),C=null;if(0<=m){var x=a[f].substring(0,m);C=a[f].substring(m+1)}else x=a[f];h(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,so(this,a.j),this.o=a.o,this.g=a.g,io(this,a.s),this.l=a.l;var h=a.i,f=new Ks;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),yh(this,f),this.m=a.m}else a&&(h=String(a).match(_h))?(this.h=!1,so(this,h[1]||"",!0),this.o=zs(h[2]||""),this.g=zs(h[3]||"",!0),io(this,h[4]),this.l=zs(h[5]||"",!0),yh(this,h[6]||"",!0),this.m=zs(h[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}gr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ws(h,vh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ws(h,vh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ws(f,f.charAt(0)=="/"?Zy:Yy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ws(f,tv)),a.join("")};function fn(a){return new gr(a)}function so(a,h,f){a.j=f?zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function io(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yh(a,h,f){h instanceof Ks?(a.i=h,nv(a.i,a.h)):(f||(h=Ws(h,ev)),a.i=new Ks(h,a.h))}function Ne(a,h,f){a.i.set(h,f)}function oo(a){return Ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Xy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vh=/[#\/\?@]/g,Yy=/[#\?:]/g,Zy=/[#\?]/g,ev=/[#\?@]/g,tv=/#/g;function Ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&Jy(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ks.prototype,t.add=function(a,h){Nn(this),this.i=null,a=zr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Eh(a,h){Nn(a),h=zr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Th(a,h){return Nn(a),h=zr(a,h),a.g.has(h)}t.forEach=function(a,h){Nn(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const C=a[m];for(let x=0;x<C.length;x++)f.push(h[m])}return f},t.V=function(a){Nn(this);let h=[];if(typeof a=="string")Th(this,a)&&(h=h.concat(this.g.get(zr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Nn(this),this.i=null,a=zr(this,a),Th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function wh(a,h,f){Eh(a,h),0<f.length&&(a.i=null,a.g.set(zr(a,h),O(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=x;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),a.push(C)}}return this.i=a.join("&")};function zr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function nv(a,h){h&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(Eh(this,m),wh(this,C,f))},a)),a.j=h}function rv(a,h){const f=new Hs;if(l.Image){const m=new Image;m.onload=I(Dn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=I(Dn,f,"TestLoadImage: error",!1,h,m),m.onabort=I(Dn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=I(Dn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function sv(a,h){const f=new Hs,m=new AbortController,C=setTimeout(()=>{m.abort(),Dn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(x=>{clearTimeout(C),x.ok?Dn(f,"TestPingServer: ok",!0,h):Dn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Dn(f,"TestPingServer: error",!1,h)})}function Dn(a,h,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function iv(){this.g=new Zi}function ov(a,h,f){const m=f||"";try{gh(a,function(C,x){let W=C;u(C)&&(W=Ye(C)),h.push(m+x+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function ao(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ao,al),ao.prototype.g=function(){return new lo(this.l,this.j)},ao.prototype.i=function(a){return function(){return a}}({});function lo(a,h){se.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(lo,se),t=lo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Qs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ih(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ih(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Gs(this):Qs(this),this.readyState==3&&Ih(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Qs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bh(a){let h="";return ie(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function _l(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=bh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ne(a,h,f))}function Me(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Me,se);var av=/^https?$/i,lv=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ul.g(),this.v=this.o?Zu(this.o):Zu(ul),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Ah(this,x);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())f.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lv,h,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of f)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ch(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){Ah(this,x)}};function Ah(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sh(a),co(a)}function Sh(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),co(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rh(this):this.bb())},t.bb=function(){Rh(this)};function Rh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)rt(a.Ea,0,a);else if(de(a,"readystatechange"),pn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=W===0){var C=String(a.D).match(_h)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!av.test(C?C.toLowerCase():"")}f=m}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var x=2<pn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",Sh(a)}}finally{co(a)}}}}function co(a,h){if(a.g){Ch(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{f.onreadystatechange=m}catch{}}}function Ch(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Lt(h)}};function Ph(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cv(a){const h={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(K(a[m]))continue;var f=A(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[C]||[];h[C]=x,x.push(f)}b(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function kh(a){this.Aa=0,this.i=[],this.j=new Hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,a),this.cb=Js("retryDelaySeedMs",1e4,a),this.Wa=Js("forwardChannelMaxRetries",2,a),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hh(a&&a.concurrentRequestLimit),this.Da=new iv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kh.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){vt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Uh(this,null,this.W),ho(this)};function yl(a){if(Oh(a),a.G==3){var h=a.U++,f=fn(a.I);if(Ne(f,"SID",a.K),Ne(f,"RID",h),Ne(f,"TYPE","terminate"),Xs(a,f),h=new xn(a,a.j,h),h.L=2,h.v=oo(fn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Bh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ro(h)}Fh(a)}function uo(a){a.g&&(El(a),a.g.cancel(),a.g=null)}function Oh(a){uo(a),a.u&&(l.clearTimeout(a.u),a.u=null),fo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ho(a){if(!dh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Re||hr(),Te||(Re(),Te=!0),$t.add(h,a),a.B=0}}function uv(a,h){return fh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=js(g(a.Ga,a,h),Mh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new xn(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Nh(this,C,h),f=fn(this.I),Ne(f,"RID",a),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),Xs(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(bh(x)))+"&"+h:this.m&&_l(f,this.m,x)),gl(this.h,C),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",h),Ne(f,"SID","null"),C.T=!0,dl(C,f,null)):dl(C,f,h),this.G=2}}else this.G==3&&(a?xh(this,a):this.i.length==0||dh(this.h)||xh(this))};function xh(a,h){var f;h?f=h.l:f=a.U++;const m=fn(a.I);Ne(m,"SID",a.K),Ne(m,"RID",f),Ne(m,"AID",a.T),Xs(a,m),a.m&&a.o&&_l(m,a.m,a.o),f=new xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Nh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),gl(a.h,f),dl(f,m,h)}function Xs(a,h){a.H&&ie(a.H,function(f,m){Ne(h,m,f)}),a.l&&gh({},function(f,m){Ne(h,m,f)})}function Nh(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let x=-1;for(;;){const W=["count="+f];x==-1?0<f?(x=C[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let Ce=!0;for(let Ze=0;Ze<f;Ze++){let we=C[Ze].g;const it=C[Ze].map;if(we-=x,0>we)x=Math.max(0,C[Ze].g-100),Ce=!1;else try{ov(it,W,"req"+we+"_")}catch{m&&m(it)}}if(Ce){m=W.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Dh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Re||hr(),Te||(Re(),Te=!0),$t.add(h,a),a.v=0}}function vl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=js(g(a.Fa,a),Mh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=js(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),uo(this),Vh(this))};function El(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vh(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);Ne(h,"RID","rpc"),Ne(h,"SID",a.K),Ne(h,"AID",a.T),Ne(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ne(h,"TO",a.ja),Ne(h,"TYPE","xmlhttp"),Xs(a,h),a.m&&a.o&&_l(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=oo(fn(h)),f.m=null,f.P=!0,lh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,uo(this),vl(this),vt(19))};function fo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lh(a,h){var f=null;if(a.g==h){fo(a),El(a),a.g=null;var m=2}else if(ml(a.h,h))f=h.D,ph(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=eo(),de(m,new sh(m,f)),ho(a)}else Dh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&uv(a,h)||m==2&&vl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:_r(a,5);break;case 4:_r(a,10);break;case 3:_r(a,6);break;default:_r(a,2)}}}function Mh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function _r(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const C=!m;m=new gr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||so(m,"https"),oo(m),C?rv(m.toString(),f):sv(m.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(h),Fh(a),Oh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Fh(a){if(a.G=0,a.ka=[],a.l){const h=mh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function Uh(a,h,f){var m=f instanceof gr?fn(f):new gr(f);if(m.g!="")h&&(m.g=h+"."+m.g),io(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var x=new gr(null);m&&so(x,m),h&&(x.g=h),C&&io(x,C),f&&(x.l=f),m=x}return f=a.D,h=a.ya,f&&h&&Ne(m,f,h),Ne(m,"VER",a.la),Xs(a,m),m}function Bh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Me(new ao({eb:f})):new Me(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $h(){}t=$h.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function po(){}po.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){se.call(this),this.g=new kh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!K(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!K(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Wr(this)}R(Ct,se),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){yl(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ye(a),a=f);h.i.push(new Ky(h.Ya++,a)),h.G==3&&ho(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,yl(this.g),delete this.g,Ct.aa.N.call(this)};function jh(a){ll.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(jh,ll);function Hh(){cl.call(this),this.status=1}R(Hh,cl);function Wr(a){this.g=a}R(Wr,$h),Wr.prototype.ua=function(){de(this.g,"a")},Wr.prototype.ta=function(a){de(this.g,new jh(a))},Wr.prototype.sa=function(a){de(this.g,new Hh)},Wr.prototype.ra=function(){de(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,s_=function(){return new po},r_=function(){return eo()},n_=pr,bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,Uo=to,ih.COMPLETE="complete",t_=ih,eh.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",se.prototype.listen=se.prototype.K,ii=eh,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,e_=Me}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const vf="@firebase/firestore",Ef="4.7.10";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Os="11.5.0";/**
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
 */const Vr=new cu("@firebase/firestore");function Zr(){return Vr.logLevel}function X(t,...e){if(Vr.logLevel<=_e.DEBUG){const n=e.map(Tu);Vr.debug(`Firestore (${Os}): ${t}`,...n)}}function Sn(t,...e){if(Vr.logLevel<=_e.ERROR){const n=e.map(Tu);Vr.error(`Firestore (${Os}): ${t}`,...n)}}function Es(t,...e){if(Vr.logLevel<=_e.WARN){const n=e.map(Tu);Vr.warn(`Firestore (${Os}): ${t}`,...n)}}function Tu(t){if(typeof t=="string")return t;try{/**
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
 */function le(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function Se(t,e){t||le()}function he(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class i_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class gS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _S{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new i_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ct(e)}}class yS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class vS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ES{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Tf(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new Tf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function o_(){return new TextEncoder}/**
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
 */class a_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=TS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Ac(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return me(r,s);{const i=o_(),o=wS(i.encode(wf(t,n)),i.encode(wf(e,n)));return o!==0?o:me(r,s)}}n+=r>65535?2:1}return me(t.length,e.length)}function wf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function wS(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return me(t[n],e[n]);return me(t.length,e.length)}function Ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const If=-62135596800,bf=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*bf);return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<If)throw new ee(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bf}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-If;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ke(0,0))}static max(){return new ue(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Af="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),s=tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?tn.extractNumericId(e).compare(tn.extractNumericId(n)):Ac(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class Ve extends tn{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const IS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends tn{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return IS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Af}static keyField(){return new tt([Af])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ve.fromString(e))}static fromName(e){return new ne(Ve.fromString(e).popFirst(5))}static empty(){return new ne(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ve(e.slice()))}}/**
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
 */const ki=-1;function bS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new tr(s,ne.empty(),e)}function AS(t){return new tr(t.readTime,t.key,ki)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(ue.min(),ne.empty(),ki)}static max(){return new tr(ue.max(),ne.empty(),ki)}}function SS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const RS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==RS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function PS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}za.ae=-1;/**
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
 */const wu=-1;function Wa(t){return t==null}function ca(t){return t===0&&1/t==-1/0}function kS(t){return typeof t=="number"&&Number.isInteger(t)&&!ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const l_="";function OS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sf(e)),e=xS(t.get(n),e);return Sf(e)}function xS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case l_:n+="";break;default:n+=i}}return n}function Sf(t){return t+l_+""}/**
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
 */function Rf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Le{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cf(this.data.getIterator())}getIteratorFrom(e){return new Cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ge(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class u_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new u_("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const NS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=NS.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */const h_="server_timestamp",d_="__type__",f_="__previous_value__",p_="__local_write_time__";function Iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[d_])===null||n===void 0?void 0:n.stringValue)===h_}function Ka(t){const e=t.mapValue.fields[f_];return Iu(e)?Ka(e):e}function Oi(t){const e=nr(t.mapValue.fields[p_].timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class DS{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}const ua="(default)";class xi{constructor(e,n){this.projectId=e,this.database=n||ua}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===ua}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const m_="__type__",VS="__max__",Io={mapValue:{}},g_="__vector__",ha="value";function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Iu(t)?4:MS(t)?9007199254740991:LS(t)?10:11:le()}function cn(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=nr(s.timestampValue),l=nr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),l=Ue(i.doubleValue);return o===l?ca(o)===ca(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Rf(o)!==Rf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!cn(o[c],l[c])))return!1;return!0}(t,e);default:return le()}}function Ni(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ue(i.integerValue||i.doubleValue),c=Ue(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Pf(t.timestampValue,e.timestampValue);case 4:return Pf(Oi(t),Oi(e));case 5:return Ac(t.stringValue,e.stringValue);case 6:return function(i,o){const l=rr(i),c=rr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=me(l[u],c[u]);if(d!==0)return d}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=me(Ue(i.latitude),Ue(o.latitude));return l!==0?l:me(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},I=(l=p[ha])===null||l===void 0?void 0:l.arrayValue,R=(c=g[ha])===null||c===void 0?void 0:c.arrayValue,O=me(((u=I==null?void 0:I.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:kf(I,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Io.mapValue&&o===Io.mapValue)return 0;if(i===Io.mapValue)return 1;if(o===Io.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Ac(c[p],d[p]);if(g!==0)return g;const I=ws(l[c[p]],u[d[p]]);if(I!==0)return I}return me(c.length,d.length)}(t.mapValue,e.mapValue);default:throw le()}}function Pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=nr(t),r=nr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function kf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ws(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Is(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sc(n.fields[o])}`;return s+"}"}(t.mapValue):le()}function Bo(t){switch(sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ka(t);return e?16+Bo(e):16;case 5:return 2*t.stringValue.length;case 6:return rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Bo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ur(r.fields,(i,o)=>{s+=i.length+Bo(o)}),s}(t.mapValue);default:throw le()}}function Rc(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function Of(t){return!!t&&"nullValue"in t}function xf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function LS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[m_])===null||n===void 0?void 0:n.stringValue)===g_}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===VS}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=gi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(gi(this.value))}}function __(t){const e=[];return Ur(t.fields,(n,r)=>{const s=new tt([n]);if($o(r)){const i=__(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ue.min(),ue.min(),ue.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ue.min(),ue.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ue.min(),ue.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class da{constructor(e,n){this.position=e,this.inclusive=n}}function Nf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function FS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class y_{}class We extends y_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BS(e,n,r):n==="array-contains"?new HS(e,r):n==="in"?new qS(e,r):n==="not-in"?new zS(e,r):n==="array-contains-any"?new WS(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $S(e,r):new jS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends y_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new un(e,n)}matches(e){return v_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function v_(t){return t.op==="and"}function E_(t){return US(t)&&v_(t)}function US(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Cc(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(E_(t))return t.filters.map(e=>Cc(e)).join(",");{const e=t.filters.map(n=>Cc(n)).join(",");return`${t.op}(${e})`}}function T_(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&T_(o,s.filters[l]),!0):!1}(t,e):void le()}function w_(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(w_).join(" ,")+"}"}(t):"Filter"}class BS extends We{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class $S extends We{constructor(e,n){super(e,"in",n),this.keys=I_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jS extends We{constructor(e,n){super(e,"not-in",n),this.keys=I_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function I_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class HS extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&Ni(n.arrayValue,this.value)}}class qS extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class zS extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class WS extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
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
 */class KS{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.le=null}}function Vf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KS(t,e,n,r,s,i,o)}function Au(t){const e=he(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.le=n}return e.le}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Df(t.startAt,e.startAt)&&Df(t.endAt,e.endAt)}function Pc(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ga{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function GS(t,e,n,r,s,i,o,l){return new Ga(t,e,n,r,s,i,o,l)}function b_(t){return new Ga(t)}function Lf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QS(t){return t.collectionGroup!==null}function _i(t){const e=he(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new fa(i,r))}),n.has(tt.keyField().canonicalString())||e.he.push(new fa(tt.keyField(),r))}return e.he}function an(t){const e=he(t);return e.Pe||(e.Pe=JS(e,_i(t))),e.Pe}function JS(t,e){if(t.limitType==="F")return Vf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fa(s.field,i)});const n=t.endAt?new da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new da(t.startAt.position,t.startAt.inclusive):null;return Vf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kc(t,e,n){return new Ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qa(t,e){return Su(an(t),an(e))&&t.limitType===e.limitType}function A_(t){return`${Au(an(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>w_(s)).join(", ")}]`),Wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Ja(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Nf(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,_i(r),s)||r.endAt&&!function(o,l,c){const u=Nf(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,_i(r),s))}(t,e)}function XS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S_(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=YS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function YS(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ws(c,u):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
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
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return c_(this.inner)}size(){return this.innerSize}}/**
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
 */const ZS=new Le(ne.comparator);function Rn(){return ZS}const R_=new Le(ne.comparator);function oi(...t){let e=R_;for(const n of t)e=e.insert(n.key,n);return e}function C_(t){let e=R_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return yi()}function P_(){return yi()}function yi(){return new Br(t=>t.toString(),(t,e)=>t.isEqual(e))}const eR=new Le(ne.comparator),tR=new Ge(ne.comparator);function ye(...t){let e=tR;for(const n of t)e=e.add(n);return e}const nR=new Ge(me);function rR(){return nR}/**
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
 */function Ru(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function k_(t){return{integerValue:""+t}}function sR(t,e){return kS(e)?k_(e):Ru(t,e)}/**
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
 */class Xa{constructor(){this._=void 0}}function iR(t,e,n){return t instanceof pa?function(s,i){const o={fields:{[d_]:{stringValue:h_},[p_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Iu(i)&&(i=Ka(i)),i&&(o.fields[f_]=i),{mapValue:o}}(n,e):t instanceof Di?x_(t,e):t instanceof Vi?N_(t,e):function(s,i){const o=O_(s,i),l=Mf(o)+Mf(s.Ie);return Rc(o)&&Rc(s.Ie)?k_(l):Ru(s.serializer,l)}(t,e)}function oR(t,e,n){return t instanceof Di?x_(t,e):t instanceof Vi?N_(t,e):n}function O_(t,e){return t instanceof ma?function(r){return Rc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pa extends Xa{}class Di extends Xa{constructor(e){super(),this.elements=e}}function x_(t,e){const n=D_(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends Xa{constructor(e){super(),this.elements=e}}function N_(t,e){let n=D_(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class ma extends Xa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Mf(t){return Ue(t.integerValue||t.doubleValue)}function D_(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Vi&&s instanceof Vi?Ts(r.elements,s.elements,cn):r instanceof ma&&s instanceof ma?cn(r.Ie,s.Ie):r instanceof pa&&s instanceof pa}(t.transform,e.transform)}class lR{constructor(e,n){this.version=e,this.transformResults=n}}class In{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new In}static exists(e){return new In(void 0,e)}static updateTime(e){return new In(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ya{}function V_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new M_(t.key,In.none()):new Gi(t.key,t.data,In.none());{const n=t.data,r=Ut.empty();let s=new Ge(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new Ht(s.toArray()),In.none())}}function cR(t,e,n){t instanceof Gi?function(s,i,o){const l=s.value.clone(),c=Uf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Uf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(L_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vi(t,e,n,r){return t instanceof Gi?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=i.value.clone(),d=Bf(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=Bf(i.fieldTransforms,c,o),d=o.data;return d.setAll(L_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=O_(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Ff(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ts(r,s,(i,o)=>aR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gi extends Ya{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends Ya{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function L_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uf(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,oR(o,l,n[s]))}return r}function Bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iR(i,o,e))}return r}class M_ extends Ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hR extends Ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=P_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=V_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>Ff(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>Ff(n,r))}}class Cu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return eR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cu(e,n,r,s)}}/**
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
 */class fR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Ee;function mR(t){switch(t){case M.OK:return le();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return le()}}function F_(t){if(t===void 0)return Sn("GRPC error has no .code"),M.UNKNOWN;switch(t){case He.OK:return M.OK;case He.CANCELLED:return M.CANCELLED;case He.UNKNOWN:return M.UNKNOWN;case He.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case He.INTERNAL:return M.INTERNAL;case He.UNAVAILABLE:return M.UNAVAILABLE;case He.UNAUTHENTICATED:return M.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case He.NOT_FOUND:return M.NOT_FOUND;case He.ALREADY_EXISTS:return M.ALREADY_EXISTS;case He.PERMISSION_DENIED:return M.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case He.ABORTED:return M.ABORTED;case He.OUT_OF_RANGE:return M.OUT_OF_RANGE;case He.UNIMPLEMENTED:return M.UNIMPLEMENTED;case He.DATA_LOSS:return M.DATA_LOSS;default:return le()}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const gR=new Jn([4294967295,4294967295],0);function $f(t){const e=o_().encode(t),n=new Zg;return n.update(e),new Uint8Array(n.digest())}function jf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jn([n,r],0),new Jn([s,i],0)]}class Pu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ai(`Invalid padding: ${n}`);if(r<0)throw new ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ai(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Jn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Jn.fromNumber(r)));return s.compare(gR)===1&&(s=new Jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=$f(e),[r,s]=jf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Pu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=$f(e),[r,s]=jf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Za{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Za(ue.min(),s,new Le(me),Rn(),ye())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,ye(),ye(),ye())}}/**
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
 */class Ho{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class U_{constructor(e,n){this.targetId=e,this.ge=n}}class B_{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hf{constructor(){this.pe=0,this.ye=qf(),this.we=nt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ye(),n=ye(),r=ye();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le()}}),new Qi(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=qf()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Se(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class _R{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Rn(),this.$e=bo(),this.Ue=bo(),this.Ke=new Le(me)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Pc(i))if(r===0){const o=new ne(i.path);this.ze(n,o,dt.newNoDocument(o,ue.min()))}else Se(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),c=l?this.nt(l,e,o):1;if(c!==0){this.Ye(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=rr(r).toUint8Array()}catch(c){if(c instanceof u_)return Es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Pu(o,s,i)}catch(c){return Es(c instanceof ai?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const l=this.Xe(o);if(l){if(i.current&&Pc(l.target)){const c=new ne(l.target.path);this._t(c).has(o)||this.ut(o,c)||this.ze(o,c,dt.newNoDocument(c,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let r=ye();this.Ue.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Za(e,n,this.Ke,this.Qe,r);return this.Qe=Rn(),this.$e=bo(),this.Ue=bo(),this.Ke=new Le(me),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Hf,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ge(me),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ge(me),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Hf),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function bo(){return new Le(ne.comparator)}function qf(){return new Le(ne.comparator)}const yR={asc:"ASCENDING",desc:"DESCENDING"},vR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ER={and:"AND",or:"OR"};class TR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Oc(t,e){return t.useProto3Json||Wa(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wR(t,e){return ga(t,e.toTimestamp())}function ln(t){return Se(!!t),ue.fromTimestamp(function(n){const r=nr(n);return new Ke(r.seconds,r.nanos)}(t))}function ku(t,e){return xc(t,e).canonicalString()}function xc(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function j_(t){const e=Ve.fromString(t);return Se(K_(e)),e}function Nc(t,e){return ku(t.databaseId,e.path)}function zl(t,e){const n=j_(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(q_(n))}function H_(t,e){return ku(t.databaseId,e)}function IR(t){const e=j_(t);return e.length===4?Ve.emptyPath():q_(e)}function Dc(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function q_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zf(t,e,n){return{name:Nc(t,e),fields:n.value.mapValue.fields}}function bR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Se(d===void 0||typeof d=="string"),nt.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array),nt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?M.UNKNOWN:F_(u.code);return new ee(d,u.message||"")}(o);n=new B_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=zl(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):ue.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ho(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=zl(t,r.document),i=r.readTime?ln(r.readTime):ue.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ho([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=zl(t,r.document),i=r.removedTargetIds||[];n=new Ho([],i,s,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pR(s,i),l=r.targetId;n=new U_(l,o)}}return n}function AR(t,e){let n;if(e instanceof Gi)n={update:zf(t,e.key,e.value)};else if(e instanceof M_)n={delete:Nc(t,e.key)};else if(e instanceof $r)n={update:zf(t,e.key,e.data),updateMask:DR(e.fieldMask)};else{if(!(e instanceof hR))return le();n={verify:Nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le()}(t,e.precondition)),n}function SR(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(ue.min())&&(o=ln(i)),new lR(o,s.transformResults||[])}(n,e))):[]}function RR(t,e){return{documents:[H_(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=H_(t,s);const i=function(u){if(u.length!==0)return W_(un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:ts(g.field),direction:OR(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Oc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:s}}function PR(t){let e=IR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=z_(p);return g instanceof un&&E_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new fa(ns(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Wa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,I=p.values||[];return new da(I,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,I=p.values||[];return new da(I,g)}(n.endAt)),GS(e,s,o,i,l,"F",c,u)}function kR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function z_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>z_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function OR(t){return yR[t]}function xR(t){return vR[t]}function NR(t){return ER[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return tt.fromServerFormat(t.fieldPath)}function W_(t){return t instanceof We?function(n){if(n.op==="=="){if(xf(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(Of(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xf(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(Of(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:xR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>W_(s));return r.length===1?r[0]:{compositeFilter:{op:NR(n.op),filters:r}}}(t):le()}function DR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function K_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class zn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VR{constructor(e){this.Tt=e}}function LR(t){const e=PR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class MR{constructor(){this.Tn=new FR}addToCollectionParentIndex(e,n){return this.Tn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(tr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Ve.comparator)).toArray()}}/**
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
 */const Wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},G_=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(G_,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */class bs{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new bs(0)}static Kn(){return new bs(-1)}}/**
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
 */const Kf="LruGarbageCollector",UR=1048576;function Gf([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class BR{constructor(e){this.Hn=e,this.buffer=new Ge(Gf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $R{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){X(Kf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?X(Kf,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.er(3e5)})}}class jR{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(za.ae);const r=new BR(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Wf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wf):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Zr()<=_e.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function HR(t,e){return new jR(t,e)}/**
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
 */class qR{constructor(){this.changes=new Br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&vi(r.mutation,s,Ht.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Rn();const o=yi(),l=function(){return yi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof $r)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),vi(d.mutation,u,d.mutation.getFieldMask(),Ke.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new zR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=yi();let s=new Le((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Ht.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=P_();d.forEach(g=>{if(!i.has(g)){const I=V_(n.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Ar());let l=ki,c=i;return o.next(u=>V.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(d=>({batchId:l,changes:C_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oi();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const u=function(p,g){return new Ga(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,dt.newInvalidDocument(d)))});let l=oi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&vi(d.mutation,u,Ht.empty(),Ke.now()),Ja(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class KR{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return V.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:LR(s.bundledQuery),readTime:ln(s.readTime)}}(n)),V.resolve()}}/**
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
 */class GR{constructor(){this.overlays=new Le(ne.comparator),this.Rr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Le((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Ar(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return V.resolve(l)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fR(n,r));let i=this.Rr.get(n);i===void 0&&(i=ye(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
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
 */class QR{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class Ou{constructor(){this.Vr=new Ge(Qe.mr),this.gr=new Ge(Qe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Qe(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new ne(new Ve([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.gr.forEachInRange([r,s],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ne(new Ve([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=ye();return this.gr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ne.comparator(e.key,n.key)||me(e.Cr,n.Cr)}static pr(e,n){return me(e.Cr,n.Cr)||ne.comparator(e.key,n.key)}}/**
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
 */class JR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ge(Qe.mr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Mr=this.Mr.add(new Qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?wu:this.Fr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],o=>{const l=this.Or(o.Cr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(me);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],l=>{r=r.add(l.Cr)})}),V.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new ne(i),0);let l=new Ge(me);return this.Mr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Cr)),!0)},o),V.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return V.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Mr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class XR{constructor(e){this.kr=e,this.docs=function(){return new Le(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||SS(AS(d),r)<=0||(s.has(d.key)||Ja(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le()}qr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YR(this)}getSize(e){return V.resolve(this.size)}}class YR extends qR{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class ZR{constructor(e){this.persistence=e,this.Qr=new Br(n=>Au(n),Su),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Ou,this.targetCount=0,this.Kr=bs.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),V.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.zn(n),V.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Ur.containsKey(n))}}/**
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
 */class Q_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new za(0),this.zr=!1,this.zr=!0,this.jr=new QR,this.referenceDelegate=e(this),this.Hr=new ZR(this),this.indexManager=new MR,this.remoteDocumentCache=function(s){return new XR(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new VR(n),this.Yr=new KR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new JR(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new eC(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return V.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class eC extends CS{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.ti=new Ou,this.ni=null}static ri(e){return new xu(e)}get ii(){if(this.ni)return this.ni;throw le()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),V.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ii,r=>{const s=ne.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return V.or([()=>V.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class _a{constructor(e,n){this.persistence=e,this.oi=new Br(r=>OS(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=HR(this,n)}static ri(e,n){return new _a(e,n)}Zr(){}Xr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return V.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),V.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Bo(e.data.value)),n}ar(e,n,r){return V.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Nu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Nu(e,n.fromCache,r,s)}}/**
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
 */class tC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return DI()?8:PS(_t())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new tC;return this._s(e,n,o).next(l=>{if(i.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Zr()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),V.resolve()):(Zr()<=_e.DEBUG&&X("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Zr()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):V.resolve())}rs(e,n){if(Lf(n))return V.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=kc(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.cs(n,l);return this.ls(n,u,o,c.readTime)?this.rs(e,kc(n,null,"F")):this.hs(e,u,n,c)}))})))}ss(e,n,r,s){return Lf(n)||s.isEqual(ue.min())?V.resolve(null):this.ns.getDocuments(e,r).next(i=>{const o=this.cs(n,i);return this.ls(n,o,r,s)?V.resolve(null):(Zr()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.hs(e,o,n,bS(s,ki)).next(l=>l))})}cs(e,n){let r=new Ge(S_(e));return n.forEach((s,i)=>{Ja(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Zr()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",es(n)),this.ns.getDocumentsMatchingQuery(e,n,tr.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Du="LocalStore",rC=3e8;class sC{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Le(me),this.Is=new Br(i=>Au(i),Su),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function iC(t,e,n,r){return new sC(t,e,n,r)}async function J_(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ye();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:l}))})})}function oC(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let I=V.resolve();return g.forEach(R=>{I=I.next(()=>d.getEntry(c,R)).next(O=>{const P=u.docVersions.get(R);Se(P!==null),O.version.compareTo(P)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function X_(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function aC(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Hr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,d.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(nt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(O,P,j){return O.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=rC?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,I,d)&&l.push(n.Hr.updateTargetData(i,I))});let c=Rn(),u=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(lC(i,o,e.documentUpdates).next(d=>{c=d.Vs,u=d.fs})),!r.isEqual(ue.min())){const d=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ts=s,i))}function lC(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Rn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(Du,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Vs:o,fs:s}})}function cC(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uC(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Hr.allocateTargetId(r).next(o=>(s=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Vc(t,e,n){const r=he(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ns(o))throw o;X(Du,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Qf(t,e,n){const r=he(t);let s=ue.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=he(c),g=p.Is.get(d);return g!==void 0?V.resolve(p.Ts.get(g)):p.Hr.getTargetData(u,d)}(r,o,an(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ye())).next(l=>(hC(r,XS(e),l),{documents:l,gs:i})))}function hC(t,e,n){let r=t.Es.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Jf{constructor(){this.activeTargetIds=rR()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dC{constructor(){this.ho=new Jf,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Jf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fC{To(e){}shutdown(){}}/**
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
 */const Xf="ConnectivityMonitor";class Yf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){X(Xf,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){X(Xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ao=null;function Lc(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
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
 */const Wl="RestConnection",pC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mC{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===ua?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const o=Lc(),l=this.bo(e,n.toUriEncodedString());X(Wl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(e,l,c,r).then(u=>(X(Wl,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Es(Wl,`RPC '${e}' ${o} failed with error: `,u,"url: ",l,"request:",r),u})}Co(e,n,r,s,i,o){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=pC[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class gC{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const at="WebChannelConnection";class _C extends mC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Lc();return new Promise((o,l)=>{const c=new e_;c.setWithCredentials(!0),c.listenOnce(t_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Uo.NO_ERROR:const d=c.getResponseJson();X(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Uo.TIMEOUT:X(at,`RPC '${e}' ${i} timed out`),l(new ee(M.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const p=c.getStatus();if(X(at,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const R=function(P){const j=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(j)>=0?j:M.UNKNOWN}(I.status);l(new ee(R,I.message))}else l(new ee(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee(M.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{X(at,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);X(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Wo(e,n,r){const s=Lc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=s_(),l=r_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,I=!1;const R=new gC({Fo:P=>{I?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(at,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Mo:()=>p.close()}),O=(P,j,K)=>{P.listen(j,G=>{try{K(G)}catch(q){setTimeout(()=>{throw q},0)}})};return O(p,ii.EventType.OPEN,()=>{I||(X(at,`RPC '${e}' stream ${s} transport opened.`),R.Qo())}),O(p,ii.EventType.CLOSE,()=>{I||(I=!0,X(at,`RPC '${e}' stream ${s} transport closed`),R.Uo())}),O(p,ii.EventType.ERROR,P=>{I||(I=!0,Es(at,`RPC '${e}' stream ${s} transport errored:`,P),R.Uo(new ee(M.UNAVAILABLE,"The operation could not be completed")))}),O(p,ii.EventType.MESSAGE,P=>{var j;if(!I){const K=P.data[0];Se(!!K);const G=K,q=(G==null?void 0:G.error)||((j=G[0])===null||j===void 0?void 0:j.error);if(q){X(at,`RPC '${e}' stream ${s} received error:`,q);const Z=q.status;let ie=function(_){const w=He[_];if(w!==void 0)return F_(w)}(Z),b=q.message;ie===void 0&&(ie=M.INTERNAL,b="Unknown error status: "+Z+" with message "+q.message),I=!0,R.Uo(new ee(ie,b)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,K),R.Ko(K)}}),O(l,n_.STAT_EVENT,P=>{P.stat===bc.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===bc.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.$o()},0),R}}function Kl(){return typeof document<"u"?document:null}/**
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
 */function el(t){return new TR(t,!0)}/**
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
 */class Y_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Zf="PersistentStream";class Z_{constructor(e,n,r,s,i,o,l,c){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Y_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new ee(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return X(Zf,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(X(Zf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yC extends Z_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=bR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?ln(o.readTime):ue.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Dc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Pc(c)?{documents:RR(i,c)}:{query:CR(i,c).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$_(i,o.resumeToken);const u=Oc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=ga(i,o.snapshotVersion.toTimestamp());const u=Oc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=kR(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Dc(this.serializer),n.removeTarget=e,this.I_(n)}}class vC extends Z_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=SR(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Dc(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AR(this.serializer,r))};this.I_(n)}}/**
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
 */class EC{}class TC extends EC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new ee(M.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,xc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(M.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,xc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(M.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class wC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Sn(n),this.N_=!1):X("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Lr="RemoteStore";class IC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{r.enqueueAndForget(async()=>{jr(this)&&(X(Lr,"Restarting streams for network reachability change."),await async function(c){const u=he(c);u.W_.add(4),await Ji(u),u.j_.set("Unknown"),u.W_.delete(4),await tl(u)}(this))})}),this.j_=new wC(r,s)}}async function tl(t){if(jr(t))for(const e of t.G_)await e(!0)}async function Ji(t){for(const e of t.G_)await e(!1)}function ey(t,e){const n=he(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Fu(n)?Mu(n):Ds(n).c_()&&Lu(n,e))}function Vu(t,e){const n=he(t),r=Ds(n);n.K_.delete(e),r.c_()&&ty(n,e),n.K_.size===0&&(r.c_()?r.P_():jr(n)&&n.j_.set("Unknown"))}function Lu(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).y_(e)}function ty(t,e){t.H_.Ne(e),Ds(t).w_(e)}function Mu(t){t.H_=new _R({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.j_.B_()}function Fu(t){return jr(t)&&!Ds(t).u_()&&t.K_.size>0}function jr(t){return he(t).W_.size===0}function ny(t){t.H_=void 0}async function bC(t){t.j_.set("Online")}async function AC(t){t.K_.forEach((e,n)=>{Lu(t,e)})}async function SC(t,e){ny(t),Fu(t)?(t.j_.q_(e),Mu(t)):t.j_.set("Unknown")}async function RC(t,e,n){if(t.j_.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.K_.delete(l),s.H_.removeTarget(l))}(t,e)}catch(r){X(Lr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ya(t,r)}else if(e instanceof Ho?t.H_.We(e):e instanceof U_?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ue.min()))try{const r=await X_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.H_.ot(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.K_.get(u);d&&i.K_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.K_.get(c);if(!d)return;i.K_.set(c,d.withResumeToken(nt.EMPTY_BYTE_STRING,d.snapshotVersion)),ty(i,c);const p=new zn(d.target,c,u,d.sequenceNumber);Lu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Lr,"Failed to raise snapshot:",r),await ya(t,r)}}async function ya(t,e,n){if(!Ns(e))throw e;t.W_.add(1),await Ji(t),t.j_.set("Offline"),n||(n=()=>X_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Lr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await tl(t)})}function ry(t,e){return e().catch(n=>ya(t,n,e))}async function nl(t){const e=he(t),n=ir(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:wu;for(;CC(e);)try{const s=await cC(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,PC(e,s)}catch(s){await ya(e,s)}sy(e)&&iy(e)}function CC(t){return jr(t)&&t.U_.length<10}function PC(t,e){t.U_.push(e);const n=ir(t);n.c_()&&n.S_&&n.b_(e.mutations)}function sy(t){return jr(t)&&!ir(t).u_()&&t.U_.length>0}function iy(t){ir(t).start()}async function kC(t){ir(t).C_()}async function OC(t){const e=ir(t);for(const n of t.U_)e.b_(n.mutations)}async function xC(t,e,n){const r=t.U_.shift(),s=Cu.from(r,e,n);await ry(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await nl(t)}async function NC(t,e){e&&ir(t).S_&&await async function(r,s){if(function(o){return mR(o)&&o!==M.ABORTED}(s.code)){const i=r.U_.shift();ir(r).h_(),await ry(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nl(r)}}(t,e),sy(t)&&iy(t)}async function ep(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),X(Lr,"RemoteStore received new credentials");const r=jr(n);n.W_.add(3),await Ji(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await tl(n)}async function DC(t,e){const n=he(t);e?(n.W_.delete(2),await tl(n)):e||(n.W_.add(2),await Ji(n),n.j_.set("Unknown"))}function Ds(t){return t.J_||(t.J_=function(n,r,s){const i=he(n);return i.M_(),new yC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:bC.bind(null,t),No:AC.bind(null,t),Lo:SC.bind(null,t),p_:RC.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Fu(t)?Mu(t):t.j_.set("Unknown")):(await t.J_.stop(),ny(t))})),t.J_}function ir(t){return t.Y_||(t.Y_=function(n,r,s){const i=he(n);return i.M_(),new vC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:kC.bind(null,t),Lo:NC.bind(null,t),D_:OC.bind(null,t),v_:xC.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await nl(t)):(await t.Y_.stop(),t.U_.length>0&&(X(Lr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class Uu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Uu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Ns(t))return new ee(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ps{static emptySet(e){return new ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=oi(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tp{constructor(){this.Z_=new Le(ne.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):le():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new As(e,n,ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class VC{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class LC{constructor(){this.queries=np(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=np(),i.forEach((o,l)=>{for(const c of l.ta)c.onError(r)})})(this,new ee(M.ABORTED,"Firestore shutting down"))}}function np(){return new Br(t=>A_(t),Qa)}async function MC(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new VC,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Bu(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&$u(n)}async function FC(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UC(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ta)l.oa(s)&&(r=!0);o.ea=s}}r&&$u(n)}function BC(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function $u(t){t.ia.forEach(e=>{e.next()})}var Mc,rp;(rp=Mc||(Mc={}))._a="default",rp.Cache="cache";class $C{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Mc.Cache}}/**
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
 */class oy{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class jC{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ye(),this.mutatedKeys=ye(),this.ya=S_(e),this.wa=new ps(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new tp,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),I=Ja(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),O=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let P=!1;g&&I?g.data.isEqual(I.data)?R!==O&&(r.track({type:3,doc:I}),P=!0):this.va(g,I)||(r.track({type:2,doc:I}),P=!0,(c&&this.ya(I,c)>0||u&&this.ya(I,u)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),P=!0):g&&!I&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(I?(o=o.add(I),i=O?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{wa:o,Da:r,ls:l,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((d,p)=>function(I,R){const O=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return O(I)-O(R)}(d.type,p.type)||this.ya(d.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,u=c!==this.ga;return this.ga=c,o.length!==0||u?{snapshot:new As(this.query,e.wa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new tp,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ye(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new ay(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new oy(r))}),n}Oa(e){this.fa=e.gs,this.pa=ye();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return As.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ju="SyncEngine";class HC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qC{constructor(e){this.key=e,this.Ba=!1}}class zC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Br(l=>A_(l),Qa),this.qa=new Map,this.Qa=new Set,this.$a=new Le(ne.comparator),this.Ua=new Map,this.Ka=new Ou,this.Wa={},this.Ga=new Map,this.za=bs.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function WC(t,e,n=!0){const r=fy(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await ly(r,e,n,!0),s}async function KC(t,e){const n=fy(t);await ly(n,e,!0,!1)}async function ly(t,e,n,r){const s=await uC(t.localStore,an(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await GC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ey(t.remoteStore,s),l}async function GC(t,e,n,r,s){t.Ha=(p,g,I)=>async function(O,P,j,K){let G=P.view.ba(j);G.ls&&(G=await Qf(O.localStore,P.query,!1).then(({documents:b})=>P.view.ba(b,G)));const q=K&&K.targetChanges.get(P.targetId),Z=K&&K.targetMismatches.get(P.targetId)!=null,ie=P.view.applyChanges(G,O.isPrimaryClient,q,Z);return ip(O,P.targetId,ie.Ma),ie.snapshot}(t,p,g,I);const i=await Qf(t.localStore,e,!0),o=new jC(e,i.gs),l=o.ba(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);ip(t,n,u.Ma);const d=new HC(e,n,o);return t.ka.set(e,d),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function QC(t,e,n){const r=he(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(o=>!Qa(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Vu(r.remoteStore,s.targetId),Fc(r,s.targetId)}).catch(xs)):(Fc(r,s.targetId),await Vc(r.localStore,s.targetId,!0))}async function JC(t,e){const n=he(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Vu(n.remoteStore,r.targetId))}async function XC(t,e,n){const r=sP(t);try{const s=await function(o,l){const c=he(o),u=Ke.now(),d=l.reduce((I,R)=>I.add(R.key),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=Rn(),O=ye();return c.ds.getEntries(I,d).next(P=>{R=P,R.forEach((j,K)=>{K.isValidDocument()||(O=O.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,R)).next(P=>{p=P;const j=[];for(const K of l){const G=uR(K,p.get(K.key).overlayedDocument);G!=null&&j.push(new $r(K.key,G,__(G.value.mapValue),In.exists(!0)))}return c.mutationQueue.addMutationBatch(I,u,j,l)}).next(P=>{g=P;const j=P.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(I,P.batchId,j)})}).then(()=>({batchId:g.batchId,changes:C_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Wa[o.currentUser.toKey()];u||(u=new Le(me)),u=u.insert(l,c),o.Wa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Xi(r,s.changes),await nl(r.remoteStore)}catch(s){const i=Bu(s,"Failed to persist write");n.reject(i)}}async function cy(t,e){const n=he(t);try{const r=await aC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ua.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ba=!0:s.modifiedDocuments.size>0?Se(o.Ba):s.removedDocuments.size>0&&(Se(o.Ba),o.Ba=!1))}),await Xi(n,r,e)}catch(r){await xs(r)}}function sp(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,o)=>{const l=o.view.sa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=he(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.ta)g.sa(l)&&(u=!0)}),u&&$u(c)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let o=new Le(ne.comparator);o=o.insert(i,dt.newNoDocument(i,ue.min()));const l=ye().add(i),c=new Za(ue.min(),new Map,new Le(me),o,l);await cy(r,c),r.$a=r.$a.remove(i),r.Ua.delete(e),Hu(r)}else await Vc(r.localStore,e,!1).then(()=>Fc(r,e,n)).catch(xs)}async function ZC(t,e){const n=he(t),r=e.batch.batchId;try{const s=await oC(n.localStore,e);hy(n,r,null),uy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await xs(s)}}async function eP(t,e,n){const r=he(t);try{const s=await function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Se(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);hy(r,e,n),uy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await xs(s)}}function uy(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function hy(t,e,n){const r=he(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||dy(t,r)})}function dy(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Vu(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Hu(t))}function ip(t,e,n){for(const r of n)r instanceof oy?(t.Ka.addReference(r.key,e),tP(t,r)):r instanceof ay?(X(ju,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||dy(t,r.key)):le()}function tP(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(X(ju,"New document in limbo: "+n),t.Qa.add(r),Hu(t))}function Hu(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new ne(Ve.fromString(e)),r=t.za.next();t.Ua.set(r,new qC(n)),t.$a=t.$a.insert(n,r),ey(t.remoteStore,new zn(an(b_(n.path)),r,"TargetPurposeLimboResolution",za.ae))}}async function Xi(t,e,n){const r=he(t),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{o.push(r.Ha(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Nu.Yi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.La.p_(s),await async function(c,u){const d=he(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(u,g=>V.forEach(g.Hi,I=>d.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>V.forEach(g.Ji,I=>d.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!Ns(p))throw p;X(Du,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const I=d.Ts.get(g),R=I.snapshotVersion,O=I.withLastLimboFreeSnapshotVersion(R);d.Ts=d.Ts.insert(g,O)}}}(r.localStore,i))}async function nP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){X(ju,"User change. New user:",e.toKey());const r=await J_(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new ee(M.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r.Rs)}}function rP(t,e){const n=he(t),r=n.Ua.get(e);if(r&&r.Ba)return ye().add(r.key);{let s=ye();const i=n.qa.get(e);if(!i)return s;for(const o of i){const l=n.ka.get(o);s=s.unionWith(l.view.Sa)}return s}}function fy(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.La.p_=UC.bind(null,e.eventManager),e.La.Ja=BC.bind(null,e.eventManager),e}function sP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eP.bind(null,e),e}class va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=el(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return iC(this.persistence,new nC,e.initialUser,this.serializer)}Xa(e){return new Q_(xu.ri,this.serializer)}Za(e){return new dC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}va.provider={build:()=>new va};class iP extends va{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Se(this.persistence.referenceDelegate instanceof _a);const r=this.persistence.referenceDelegate.garbageCollector;return new $R(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new Q_(r=>_a.ri(r,n),this.serializer)}}class Uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nP.bind(null,this.syncEngine),await DC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LC}()}createDatastore(e){const n=el(e.databaseInfo.databaseId),r=function(i){return new _C(i)}(e.databaseInfo);return function(i,o,l,c){return new TC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new IC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sp(this.syncEngine,n,0),function(){return Yf.D()?new Yf:new fC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new zC(s,i,o,l,c,u);return d&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);X(Lr,"RemoteStore shutting down."),i.W_.add(5),await Ji(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uc.provider={build:()=>new Uc};/**
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
 */class oP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const or="FirestoreClient";class aP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=a_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gl(t,e){t.asyncQueue.verifyOperationInProgress(),X(or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await J_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lP(t);X(or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ep(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ep(e.remoteStore,s)),t._onlineComponents=e}async function lP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(or,"Using user provided OfflineComponentProvider");try{await Gl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await Gl(t,new va)}}else X(or,"Using default OfflineComponentProvider"),await Gl(t,new iP(void 0));return t._offlineComponents}async function py(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(or,"Using user provided OnlineComponentProvider"),await op(t,t._uninitializedComponentsProvider._online)):(X(or,"Using default OnlineComponentProvider"),await op(t,new Uc))),t._onlineComponents}function cP(t){return py(t).then(e=>e.syncEngine)}async function uP(t){const e=await py(t),n=e.eventManager;return n.onListen=WC.bind(null,e.syncEngine),n.onUnlisten=QC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JC.bind(null,e.syncEngine),n}function hP(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new oP({next:g=>{d.su(),o.enqueueAndForget(()=>FC(i,p)),g.fromCache&&c.source==="server"?u.reject(new ee(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new $C(l,d,{includeMetadataChanges:!0,Ta:!0});return MC(i,p)}(await uP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function my(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ap=new Map;/**
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
 */function gy(t,e,n){if(!n)throw new ee(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dP(t,e,n,r){if(e===!0&&r===!0)throw new ee(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lp(t){if(!ne.isDocumentKey(t))throw new ee(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cp(t){if(ne.isDocumentKey(t))throw new ee(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function Ea(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new ee(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const _y="firestore.googleapis.com",up=!0;class hp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_y,this.ssl=up}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:up;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UR)throw new ee(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=my((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mS;switch(r.type){case"firstParty":return new vS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ap.get(n);r&&(X("ComponentProvider","Removing Datastore"),ap.delete(n),r.terminate())}(this),Promise.resolve()}}function fP(t,e,n,r={}){var s;const i=(t=Ea(t,rl))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==_y&&i.host!==l&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Or(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=ct.MOCK_USER;else{u=RI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ee(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ct(p)}t._authCredentials=new gS(new i_(u,d))}}/**
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
 */class sl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sl(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Yn extends sl{constructor(e,n,r){super(e,n,b_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new ne(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function dp(t,e,...n){if(t=It(t),gy("collection","path",e),t instanceof rl){const r=Ve.fromString(e,...n);return cp(r),new Yn(t,null,r)}{if(!(t instanceof zt||t instanceof Yn))throw new ee(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return cp(r),new Yn(t.firestore,null,r)}}function pP(t,e,...n){if(t=It(t),arguments.length===1&&(e=a_.newId()),gy("doc","path",e),t instanceof rl){const r=Ve.fromString(e,...n);return lp(r),new zt(t,null,new ne(r))}{if(!(t instanceof zt||t instanceof Yn))throw new ee(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return lp(r),new zt(t.firestore,t instanceof Yn?t.converter:null,new ne(r))}}/**
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
 */const fp="AsyncQueue";class pp{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Y_(this,"async_queue_retry"),this.Su=()=>{const r=Kl();r&&X(fp,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Kl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Xn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ns(e))throw e;X(fp,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=Uu.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&le()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class zu extends rl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new pp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pp(e),this._firestoreClient=void 0,await e}}}function mP(t,e){const n=typeof t=="object"?t:mg(),r=typeof t=="string"?t:ua,s=hu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=AI("firestore");i&&fP(s,...i)}return s}function yy(t){if(t._terminated)throw new ee(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gP(t),t._firestoreClient}function gP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new DS(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,my(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new aP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(nt.fromBase64String(e))}catch(n){throw new ee(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vy{constructor(e){this._methodName=e}}/**
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
 */class Ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class Gu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const _P=/^__.*__$/;class yP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}function Ey(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ta(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Ey(this.Lu)&&_P.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class vP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||el(e)}ju(e,n,r,s=!1){return new Qu({Lu:e,methodName:n,zu:r,path:tt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function EP(t){const e=t._freezeSettings(),n=el(t._databaseId);return new vP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TP(t,e,n,r,s,i={}){const o=t.ju(i.merge||i.mergeFields?2:0,e,n,s);by("Data must be an object, but it was:",o,r);const l=wy(r,o);let c,u;if(i.merge)c=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=wP(e,p,n);if(!o.contains(g))throw new ee(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);bP(d,g)||d.push(g)}c=new Ht(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new yP(new Ut(l),c,u)}function Ty(t,e){if(Iy(t=It(t)))return by("Unsupported field value:",e,t),wy(t,e);if(t instanceof vy)return function(r,s){if(!Ey(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ty(l,s.Ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:ga(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ga(s.serializer,i)}}if(r instanceof Ku)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:$_(s.serializer,r._byteString)};if(r instanceof zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ku(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gu)return function(o,l){return{mapValue:{fields:{[m_]:{stringValue:g_},[ha]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Wu("VectorValues must only contain numeric values.");return Ru(l.serializer,u)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${qu(r)}`)}(t,e)}function wy(t,e){const n={};return c_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,s)=>{const i=Ty(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Iy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Ku||t instanceof Ss||t instanceof zt||t instanceof vy||t instanceof Gu)}function by(t,e,n){if(!Iy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=qu(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function wP(t,e,n){if((e=It(e))instanceof Wu)return e._internalPath;if(typeof e=="string")return Ay(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const IP=new RegExp("[~\\*/\\[\\]]");function Ay(t,e,n){if(e.search(IP)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wu(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(M.INVALID_ARGUMENT,l+t+c)}function bP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Sy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ry("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AP extends Sy{data(){return super.data()}}function Ry(t,e){return typeof e=="string"?Ay(t,e):e instanceof Wu?e._internalPath:e._delegate._internalPath}/**
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
 */function SP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class RP{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ha].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ue(o.doubleValue));return new Gu(i)}convertGeoPoint(e){return new Ku(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ka(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Se(K_(r));const s=new xi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function CP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class So{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PP extends Sy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ry("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qo extends PP{data(e={}){return super.data(e)}}class kP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new So(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qo(this._firestore,this._userDataWriter,r.key,r,new So(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new So(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new So(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:OP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}class xP extends RP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function NP(t){t=Ea(t,sl);const e=Ea(t.firestore,zu),n=yy(e),r=new xP(e);return SP(t._query),hP(n,t._query).then(s=>new kP(e,r,t,s))}function DP(t,e){const n=Ea(t.firestore,zu),r=pP(t),s=CP(t.converter,e);return VP(n,[TP(EP(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,In.exists(!1))]).then(()=>r)}function VP(t,e){return function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget(async()=>XC(await cP(r),s,i)),i.promise}(yy(t),e)}(function(e,n=!0){(function(s){Os=s})(Ps),ys(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new zu(new _S(r.getProvider("auth-internal")),new ES(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qn(vf,Ef,e),Qn(vf,Ef,"esm2017")})();const LP={apiKey:"AIzaSyCyf0tk5tX_yhQ3t-1p5WBg-CJW0l8HShw",authDomain:"online-store-75b01.firebaseapp.com",projectId:"online-store-75b01",storageBucket:"online-store-75b01.firebasestorage.app",messagingSenderId:"1028336788782",appId:"1:1028336788782:web:805c645ea42500387246bf",measurementId:"G-RGMVX5WLYJ"},Cy=pg(LP),ti=fS(Cy),mp=mP(Cy);function MP(){return Py().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Py(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const FP=typeof Proxy=="function",UP="devtools-plugin:setup",BP="plugin:settings:set";let Qr,Bc;function $P(){var t;return Qr!==void 0||(typeof window<"u"&&window.performance?(Qr=!0,Bc=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Qr=!0,Bc=globalThis.perf_hooks.performance):Qr=!1),Qr}function jP(){return $P()?Bc.now():Date.now()}class HP{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const l=e.settings[o];r[o]=l.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),l=JSON.parse(o);Object.assign(i,l)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return jP()}},n&&n.on(BP,(o,l)=>{o===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(o,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:l,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qP(t,e){const n=t,r=Py(),s=MP(),i=FP&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(UP,t,e);else{const o=i?new HP(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var zP="store";function Vs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function WP(t){return t!==null&&typeof t=="object"}function KP(t){return t&&typeof t.then=="function"}function GP(t,e){return function(){return t(e)}}function ky(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Oy(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;il(t,n,[],t._modules.root,!0),Ju(t,n,e)}function Ju(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Vs(s,function(o,l){i[l]=GP(o,t),Object.defineProperty(t.getters,l,{get:function(){return i[l]()},enumerable:!0})}),t._state=Ca({data:e}),t.strict&&ZP(t),r&&n&&t._withCommit(function(){r.data=null})}function il(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var l=Xu(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){l[c]=r.state})}var u=r.context=QP(t,o,n);r.forEachMutation(function(d,p){var g=o+p;JP(t,g,d,u)}),r.forEachAction(function(d,p){var g=d.root?p:o+p,I=d.handler||d;XP(t,g,I,u)}),r.forEachGetter(function(d,p){var g=o+p;YP(t,g,d,u)}),r.forEachChild(function(d,p){il(t,e,n.concat(p),d,s)})}function QP(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,l){var c=wa(i,o,l),u=c.payload,d=c.options,p=c.type;return(!d||!d.root)&&(p=e+p),t.dispatch(p,u)},commit:r?t.commit:function(i,o,l){var c=wa(i,o,l),u=c.payload,d=c.options,p=c.type;(!d||!d.root)&&(p=e+p),t.commit(p,u,d)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return xy(t,e)}},state:{get:function(){return Xu(t.state,n)}}}),s}function xy(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function JP(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function XP(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var l=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return KP(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):l})}function YP(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function ZP(t){fi(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Xu(t,e){return e.reduce(function(n,r){return n[r]},t)}function wa(t,e,n){return WP(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var ek="vuex bindings",gp="vuex:mutations",Ql="vuex:actions",Jr="vuex",tk=0;function nk(t,e){qP({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ek]},function(n){n.addTimelineLayer({id:gp,label:"Vuex Mutations",color:_p}),n.addTimelineLayer({id:Ql,label:"Vuex Actions",color:_p}),n.addInspector({id:Jr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Jr)if(r.filter){var s=[];Ly(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Vy(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Jr){var s=r.nodeId;xy(e,s),r.state=ik(ak(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Jr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Jr),n.sendInspectorState(Jr),n.addTimelineEvent({layerId:gp,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=tk++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ql,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ql,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var _p=8702998,rk=6710886,sk=16777215,Ny={label:"namespaced",textColor:sk,backgroundColor:rk};function Dy(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Vy(t,e){return{id:e||"root",label:Dy(e),tags:t.namespaced?[Ny]:[],children:Object.keys(t._children).map(function(n){return Vy(t._children[n],e+n+"/")})}}function Ly(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Ny]:[]}),Object.keys(e._children).forEach(function(s){Ly(t,e._children[s],n,r+s+"/")})}function ik(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=ok(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Dy(o):o,editable:!1,value:$c(function(){return i[o]})}})}return s}function ok(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=$c(function(){return t[n]})}else e[n]=$c(function(){return t[n]})}),e}function ak(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function $c(t){try{return t()}catch(e){return e}}var Qt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},My={namespaced:{configurable:!0}};My.namespaced.get=function(){return!!this._rawModule.namespaced};Qt.prototype.addChild=function(e,n){this._children[e]=n};Qt.prototype.removeChild=function(e){delete this._children[e]};Qt.prototype.getChild=function(e){return this._children[e]};Qt.prototype.hasChild=function(e){return e in this._children};Qt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Qt.prototype.forEachChild=function(e){Vs(this._children,e)};Qt.prototype.forEachGetter=function(e){this._rawModule.getters&&Vs(this._rawModule.getters,e)};Qt.prototype.forEachAction=function(e){this._rawModule.actions&&Vs(this._rawModule.actions,e)};Qt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Vs(this._rawModule.mutations,e)};Object.defineProperties(Qt.prototype,My);var Hr=function(e){this.register([],e,!1)};Hr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Hr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Hr.prototype.update=function(e){Fy([],this.root,e)};Hr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Qt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Vs(n.modules,function(l,c){s.register(e.concat(c),l,r)})};Hr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Hr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Fy(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Fy(t.concat(r),e.getChild(r),n.modules[r])}}function lk(t){return new Rt(t)}var Rt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Hr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,l=this,c=l.dispatch,u=l.commit;this.dispatch=function(g,I){return c.call(o,g,I)},this.commit=function(g,I,R){return u.call(o,g,I,R)},this.strict=s;var d=this._modules.root.state;il(this,d,[],this._modules.root),Ju(this,d),r.forEach(function(p){return p(n)})},Yu={state:{configurable:!0}};Rt.prototype.install=function(e,n){e.provide(n||zP,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&nk(e,this)};Yu.state.get=function(){return this._state.data};Yu.state.set=function(t){};Rt.prototype.commit=function(e,n,r){var s=this,i=wa(e,n,r),o=i.type,l=i.payload,c={type:o,payload:l},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(p){p(l)})}),this._subscribers.slice().forEach(function(d){return d(c,s.state)}))};Rt.prototype.dispatch=function(e,n){var r=this,s=wa(e,n),i=s.type,o=s.payload,l={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(l,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(d){return d(o)})):c[0](o);return new Promise(function(d,p){u.then(function(g){try{r._actionSubscribers.filter(function(I){return I.after}).forEach(function(I){return I.after(l,r.state)})}catch{}d(g)},function(g){try{r._actionSubscribers.filter(function(I){return I.error}).forEach(function(I){return I.error(l,r.state,g)})}catch{}p(g)})})}};Rt.prototype.subscribe=function(e,n){return ky(e,this._subscribers,n)};Rt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return ky(r,this._actionSubscribers,n)};Rt.prototype.watch=function(e,n,r){var s=this;return fi(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Rt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Rt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),il(this,this.state,e,this._modules.get(e),r.preserveState),Ju(this,this.state)};Rt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Xu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Oy(this)};Rt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Rt.prototype.hotUpdate=function(e){this._modules.update(e),Oy(this,!0)};Rt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Rt.prototype,Yu);const Uy=5,Pt={success:"checked.svg",error:"error.png",empty:""},$=lk({state:{user:null,listOrders:null,email:"",password:"",name:"",isSubmitting:!1,products:[],sortingProducts:[],basketProducts:[],activeOpenCard:{},dataFavorite:JSON.parse(localStorage.getItem("favorite")),dataIndexProductsInBasket:JSON.parse(localStorage.getItem("productsInBasket")),openAllProducts:!0,openFormRegister:!1,openFormLogin:!1,isAuthorized:!1,openProfile:!1,openBasket:!1,openBookmarks:!1,openCard:!1,openNotification:!1,textNotification:"",imgNotification:"",notEmptyBookMarks:!1,notEmptyBasket:"empty",notEmptyListOrders:"empty",totalPrice:JSON.parse(localStorage.getItem("totalPrice")),tax:0},mutations:{addCardsInProducts(t,e){t.products=e},addCardsInSortingProducts(t,e){t.sortingProducts=e},addProductsInBasket(t,e){t.basketProducts=e},sortProducts(t,e){switch(e.target.options[e.target.selectedIndex].id){case"name":t.sortingProducts.sort((n,r)=>n.title<r.title?-1:n.title>r.title?1:0);break;case"cheap":t.sortingProducts.sort((n,r)=>n.price-r.price);break;case"dear":t.sortingProducts.sort((n,r)=>r.price-n.price);break}},searchProduct(t,e){e.target.value===""&&(t.sortingProducts=t.products),t.sortingProducts=t.products.filter(n=>{if(new RegExp(e.target.value,"i").test(n.title))return n})},addOrRemoveProductFromFavorites(t,e){const n=e.id;e.isFavorite=!e.isFavorite,t.dataFavorite.includes(n)?(t.dataFavorite=t.dataFavorite.filter(r=>{if(r!==n)return r}),localStorage.setItem("favorite",JSON.stringify(t.dataFavorite))):(t.dataFavorite=[...t.dataFavorite,n],localStorage.setItem("favorite",JSON.stringify(t.dataFavorite))),t.dataFavorite.length?t.notEmptyBookMarks=!1:t.notEmptyBookMarks=!0},addOrRemoveProductFromIsAdded(t,e){const n=e.id;e.isAdded=!e.isAdded,t.basketProducts=t.products.filter(r=>r.isAdded),t.dataIndexProductsInBasket.includes(n)?(t.dataIndexProductsInBasket=t.dataIndexProductsInBasket.filter(r=>{if(r!==n)return r}),localStorage.setItem("productsInBasket",JSON.stringify(t.dataIndexProductsInBasket))):(t.dataIndexProductsInBasket=[...t.dataIndexProductsInBasket,n],localStorage.setItem("productsInBasket",JSON.stringify(t.dataIndexProductsInBasket))),t.dataIndexProductsInBasket.length?t.notEmptyBasket="notEmpty":t.notEmptyBasket="empty"},openOrCloseAllProducts(t){t.openAllProducts=!0,t.openBookmarks=!1,t.openProfile=!1},openOrCloseBookMarks(t){t.openBookmarks=!0,t.openAllProducts=!1,t.openProfile=!1},openOrCloseProfile(t){t.openProfile=!0,t.openAllProducts=!1,t.openBookmarks=!1},openOrCloseBusket(t,e){(e==="btnOrderPlaced"||e==="backgroundOrderPlaced")&&(t.notEmptyBasket="empty"),t.dataIndexProductsInBasket.length&&(t.notEmptyBasket="notEmpty"),t.openBasket=!t.openBasket},openOrCloseCard(t,e){t.openCard=!t.openCard,t.openCard&&(t.activeOpenCard=e)},openOrCloseFormRegister(t,e=!0){t.openFormRegister=e},openOrCloseFormLogin(t,e=!0){t.openFormLogin=e},openOrCloseNotification(t,{text:e,img:n}){t.openNotification=!t.openNotification,t.textNotification=e,t.imgNotification=n},updateName(t,e){t.name=e},updatePassword(t,e){t.password=e},updateEmail(t,e){t.email=e},deleteProductsFromBasket(t){t.basketProducts=[],t.products=t.products.map(e=>(e.isAdded&&(e.isAdded=!e.isAdded),e)),t.sortingProducts=t.products,t.dataIndexProductsInBasket=[],localStorage.setItem("productsInBasket",JSON.stringify(t.dataIndexProductsInBasket))}},actions:{async placeAnOrder({state:t}){try{if(!t.user)throw new Error("Пользователь не авторизован.");const e=dp(mp,`users/${t.user.uid}/orders`),n=await DP(e,{basketProducts:t.basketProducts,totalPrice:t.totalPrice,createdAt:new Date});$.commit("deleteProductsFromBasket"),t.notEmptyBasket="orderPlaced",console.log("Заказ сохранен с ID:",n.id),$.commit("openOrCloseNotification",{text:"Ваш заказ успешно оформлен!",img:Pt.success}),setTimeout(()=>{$.commit("openOrCloseNotification",{text:"",img:""})},2e3)}catch(e){$.commit("openOrCloseNotification",{text:e,img:Pt.error}),setTimeout(()=>{$.commit("openOrCloseNotification",{text:"",img:""})},2e3)}},async getPlaceanOrders({state:t}){const e=await NP(dp(mp,`users/${t.user.uid}/orders`));t.listOrders=e.docs.map(n=>n.data()),t.listOrders.length?t.notEmptyListOrders="notEmpty":t.notEmptyListOrders="empty",console.log(t.listOrders.length)},async getProducts({state:t,commit:e}){try{t.dataFavorite===null&&(t.dataFavorite=[],localStorage.setItem("favorite",JSON.stringify(t.dataFavorite))),t.dataIndexProductsInBasket===null&&(t.dataIndexProductsInBasket=[],localStorage.setItem("productsInBasket",JSON.stringify(t.dataIndexProductsInBasket))),t.dataFavorite.length?t.notEmptyBookMarks=!1:t.notEmptyBookMarks=!0,t.dataIndexProductsInBasket.length?t.notEmptyBasket="notEmpty":t.notEmptyBasket="empty";const{data:n}=await $e.get("https://34643c0fb49ad60b.mokky.dev/items"),r=await n.map(i=>({...i,isAdded:t.dataIndexProductsInBasket.includes(i.id),isFavorite:t.dataFavorite.includes(i.id)})),s=r.filter(i=>i.isAdded);e("addCardsInProducts",r),e("addCardsInSortingProducts",r),e("addProductsInBasket",s)}catch(n){console.log(n)}},async getUserOnLogin({state:t}){tA(ti,e=>{e?(t.user=e,t.name=t.user.displayName):t.user=null})},async handleRegister({state:t}){t.isSubmitting=!0;try{await J0(ti,t.email,t.password);const e=ti.currentUser;e&&await lf(e,{displayName:t.name}),$.commit("openOrCloseNotification",{text:"Ваш аккаунт успешно зарегистрирован!",img:Pt.success})}catch{$.commit("openOrCloseNotification",{text:"Пользователь с этим email уже зарегистрирован!",img:Pt.error})}finally{t.isSubmitting=!1,setTimeout(()=>{$.commit("openOrCloseNotification",{text:"",img:Pt.empty})},3e3),setTimeout(()=>{$.commit("openOrCloseFormRegister",!1)},4e3)}},async handleLogin({state:t}){try{await X0(ti,t.email,t.password),$.commit("openOrCloseNotification",{text:"Вы успешно авторизовались",img:Pt.success})}catch{$.commit("openOrCloseNotification",{text:"Неверный email или пароль",img:Pt.error})}finally{setTimeout(()=>{$.commit("openOrCloseNotification",{text:"",img:Pt.empty})},3e3),setTimeout(()=>{$.commit("openOrCloseFormLogin",!1)},4e3)}},async logout(){await nA(ti),$.commit("openOrCloseAllProducts"),$.commit("openOrCloseNotification",{text:"Вы вышли из аккаунта",img:Pt.success}),setTimeout(()=>{$.commit("openOrCloseNotification",{text:"",img:Pt.empty})},3e3)},async changeName({state:t}){try{t.user&&(await lf(t.user,{displayName:t.name}),$.commit("openOrCloseNotification",{text:`Вы изменили имя на ${t.name}`,img:Pt.success}))}catch(e){$.commit("openOrCloseNotification",{text:`Ошибка при установке имени: ${e.message}`,img:Pt.error})}finally{setTimeout(()=>{$.commit("openOrCloseNotification",{text:"",img:Pt.empty})},3e3)}}},getters:{priceCalculation(t){return t.totalPrice=t.products.reduce((e,n)=>n.isAdded?(e+=n.price,localStorage.setItem("totalPrice",e),e):(localStorage.setItem("totalPrice",e),e),0)},taxCalculation(t){return Math.floor(t.totalPrice/100*Uy)}}}),ck="/Vue-projects/search.svg",uk=["id"],hk=["src"],dk=["src"],fk={class:"leading-[17px] mb-4"},pk={class:"flex justify-between"},mk={class:"font-bold"},gk=["src"],By={__name:"CardProduct",props:{id:Number,imageUrl:String,title:String,price:Number,isFavorite:Boolean,isAdded:Boolean,onProductsInBasket:Function,onFavoriteProducts:Function,onOpenCard:Function},setup(t){return(e,n)=>(te(),ge("li",null,[k("article",{class:"w-[210px] pb-9 px-9 pt-6 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition",id:t.id,onClick:n[2]||(n[2]=(...r)=>t.onOpenCard&&t.onOpenCard(...r))},[k("img",{class:"z-10",src:t.isFavorite?"like-2.svg":"like-1.svg",alt:"button like",onClick:n[0]||(n[0]=_s((...r)=>t.onFavoriteProducts&&t.onFavoriteProducts(...r),["stop"]))},null,8,hk),k("img",{class:"block w-[133px] h-[112px] mb-4",src:`${t.imageUrl}`,alt:"image sneakers"},null,8,dk),k("p",fk,mt(t.title),1),k("div",pk,[k("div",null,[n[3]||(n[3]=k("p",{class:"text-[0.8rem] text-[#BDBDBD]"},"ЦЕНА:",-1)),k("p",mk,mt(t.price)+"руб.",1)]),k("img",{class:"block",src:t.isAdded?"checked.svg":"plus.svg",alt:"Add Product",onClick:n[1]||(n[1]=_s((...r)=>t.onProductsInBasket&&t.onProductsInBasket(...r),["stop"]))},null,8,gk)])],8,uk)]))}},Ls=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_k={class:"grid grid-cols-4 justify-between gap-11"},yk={__name:"CardList",setup(t){const e=Ae(()=>$.state.sortingProducts),n=i=>{$.commit("addOrRemoveProductFromFavorites",i)},r=i=>{$.commit("addOrRemoveProductFromIsAdded",i)},s=i=>{$.commit("openOrCloseCard",i)};return Mi(()=>{$.dispatch("getProducts")}),(i,o)=>(te(),ge("ul",_k,[ke(iu,{name:"list"},{default:ms(()=>[(te(!0),ge(Fe,null,Fi(e.value,l=>(te(),Tt(By,{key:l.id,id:l.id,imageUrl:l.imageUrl,title:l.title,price:l.price,isFavorite:l.isFavorite,isAdded:l.isAdded,onProductsInBasket:()=>r(l),onFavoriteProducts:()=>n(l),onOpenCard:()=>s(l)},null,8,["id","imageUrl","title","price","isFavorite","isAdded","onProductsInBasket","onFavoriteProducts","onOpenCard"]))),128))]),_:1})]))}},vk=Ls(yk,[["__scopeId","data-v-fb6526a7"]]),Ek={class:"flex justify-between mb-11"},Tk={class:"flex gap-4"},wk={class:"flex border pl-5 border-gray-300 rounded-md focus:border-gray-500"},Ik={__name:"AllProducts",setup(t){const e=r=>{$.commit("sortProducts",r)},n=r=>{$.commit("searchProduct",r)};return(r,s)=>(te(),ge("section",null,[k("div",Ek,[s[2]||(s[2]=k("h2",{class:"text-4xl font-bold"},"Все кроссовки",-1)),k("div",Tk,[k("select",{class:"py-2 px-3 border border-gray-300 rounded-md outline-none",onChange:e},s[0]||(s[0]=[k("option",{value:"",disabled:"",selected:"",hidden:""},"Отсортировать",-1),k("option",{id:"name"},"По названию",-1),k("option",{id:"cheap"},"По цене (дешевые)",-1),k("option",{id:"dear"},"По цене (дорогие)",-1)]),32),k("div",wk,[s[1]||(s[1]=k("img",{class:"",src:ck,alt:"search image"},null,-1)),k("input",{class:"py-2 pl-5 pr-4 outline-none",type:"text",placeholder:"Поиск...",onInput:n},null,32)])])]),ke(vk)]))}},bk="/Vue-projects/assets/package-icon-BvUgkqQO.png",Ak="/Vue-projects/assets/orderPlaced-CI02k0xc.svg",Sk="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='31'%20height='31'%20rx='7.5'%20fill='white'%20stroke='%23DBDBDB'/%3e%3cpath%20d='M20.0799%2018.6155L17.6311%2016.1667L20.0798%2013.718C21.0241%2012.7738%2019.5596%2011.3093%2018.6154%2012.2536L16.1667%2014.7023L13.7179%2012.2535C12.7738%2011.3095%2011.3095%2012.7738%2012.2535%2013.7179L14.7023%2016.1667L12.2536%2018.6154C11.3093%2019.5596%2012.7738%2021.0241%2013.718%2020.0798L16.1667%2017.6311L18.6155%2020.0799C19.5597%2021.0241%2021.0241%2019.5597%2020.0799%2018.6155Z'%20fill='%23B5B5B5'/%3e%3c/svg%3e",Rk=["id"],Ck=["src"],Pk={class:"w-40"},kk={__name:"CardProductBasket",props:{id:Number,imageUrl:String,title:String,price:Number,onDeleteCard:Function,onOpenCard:Function},setup(t){return(e,n)=>(te(),ge("li",null,[k("article",{class:"max-w-full h-32 mb-6 mr-2 p-6 rounded-3xl border border-[#F2F2F2] flex justify-between items-center cursor-pointer",id:t.id,onClick:n[1]||(n[1]=(...r)=>t.onOpenCard&&t.onOpenCard(...r))},[k("img",{class:"block w-[70px] h-[70px] mr-6",src:t.imageUrl,alt:"Sneakers Image"},null,8,Ck),k("div",null,[k("p",Pk,mt(t.title),1),k("b",null,mt(t.price),1)]),k("img",{class:"self-end",src:Sk,alt:"Delete Product",onClick:n[0]||(n[0]=_s((...r)=>t.onDeleteCard&&t.onDeleteCard(...r),["stop"]))})],8,Rk)]))}},Ok={class:"overflow-auto overflow-x-hidden"},xk={__name:"BusketCardList",setup(t){const e=s=>{$.commit("openOrCloseCard",s)},n=Ae(()=>$.state.products),r=s=>{$.commit("addOrRemoveProductFromIsAdded",s)};return(s,i)=>(te(),ge("ul",Ok,[ke(iu,{name:"list"},{default:ms(()=>[(te(!0),ge(Fe,null,Fi(n.value,o=>(te(),ge(Fe,null,[o.isAdded?(te(),Tt(kk,{key:o.id,id:o.id,imageUrl:o.imageUrl,title:o.title,price:o.price,onDeleteCard:()=>r(o),onOpenCard:()=>e(o)},null,8,["id","imageUrl","title","price","onDeleteCard","onOpenCard"])):lt("",!0)],64))),256))]),_:1})]))}},Nk=Ls(xk,[["__scopeId","data-v-71fe6e93"]]),Dk={class:"flex flex-col mt-5 mb-14"},Vk={class:"flex gap-2"},Lk={class:"flex gap-2"},Mk={class:"text-[16px]"},Fk={__name:"BusketResult",setup(t){const e=Ae(()=>$.state.totalPrice),n=Ae(()=>$.getters.taxCalculation),r=()=>{$.dispatch("placeAnOrder")};return(s,i)=>(te(),ge("div",Dk,[k("div",Vk,[i[0]||(i[0]=k("span",{class:"text-[16px]"},"Итого:",-1)),i[1]||(i[1]=k("div",{class:"flex-1 border-b border-dashed border-[#DFDFDF]"},null,-1)),k("b",null,mt(e.value)+" ₽",1)]),k("div",Lk,[k("span",Mk,"Налог "+mt(zo(Uy))+"%:",1),i[2]||(i[2]=k("div",{class:"flex-1 border-b border-dashed border-[#DFDFDF]"},null,-1)),k("b",null,mt(n.value)+" ₽",1)]),k("button",{onClick:r,class:"mt-7 max-w-full w-full inline-block rounded-3xl py-4 bg-[#A5D364] text-white"}," Оформить заказ ")]))}},Uk={class:"fixed flex w-[100vw] h-[100vh]"},Bk={class:"z-20 w-[20%] h-full p-9 bg-white"},$k={key:0,class:"h-full flex flex-col items-center justify-center"},jk={class:"h-full flex flex-col justify-between pb-9"},Hk={key:2,class:"h-full flex flex-col items-center justify-center"},qk={__name:"Basket",setup(t){const e=Ae(()=>$.state.notEmptyBasket),n=r=>{$.commit("openOrCloseBusket",r.currentTarget.id)};return(r,s)=>(te(),ge("div",Uk,[k("div",{id:"backgroundOrderPlaced",class:"z-10 w-[80%] h-full bg-black opacity-50",onClick:n}),k("div",Bk,[e.value==="empty"?(te(),ge("div",$k,[s[0]||(s[0]=k("img",{class:"inline w-[70px] mb-8",src:bk},null,-1)),s[1]||(s[1]=k("h2",{class:"text-3xl font-semibold mb-3"},"Корзина пустая",-1)),s[2]||(s[2]=k("p",{class:"text-gray-400 mb-19 text-center"}," Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ. ",-1)),k("button",{onClick:n,class:"w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"}," Вернуться назад ")])):lt("",!0),e.value==="notEmpty"?(te(),ge(Fe,{key:1},[s[3]||(s[3]=k("h3",{class:"text-3xl font-bold mb-9"},"Корзина",-1)),k("div",jk,[ke(Nk),ke(Fk)])],64)):lt("",!0),e.value==="orderPlaced"?(te(),ge("div",Hk,[s[4]||(s[4]=k("img",{class:"inline w-[70px] mb-8",src:Ak},null,-1)),s[5]||(s[5]=k("h2",{class:"text-3xl text-[#87C20A] font-semibold mb-3"},"Заказ оформлен!",-1)),s[6]||(s[6]=k("p",{class:"text-gray-400 mb-19 text-center"}," Ваш заказ #18 скоро будет передан курьерской доставке ",-1)),k("button",{id:"btnOrderPlaced",onClick:n,class:"w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"}," Вернуться назад ")])):lt("",!0)])]))}},zk=Ls(qk,[["__scopeId","data-v-76f2068f"]]),Wk="/Vue-projects/logo.png",Kk="/Vue-projects/cart.svg",Gk="/Vue-projects/heart.svg",Qk="/Vue-projects/profile.svg",Jk={class:"flex justify-between border-b border-slate-300 pb-12"},Xk={class:"flex items-center gap-2.5"},Yk={class:"text-gray-500 hover:text-black"},Zk={class:"flex items-center gap-2.5 cursor-pointer"},eO={key:1,class:"text-gray-500"},tO={__name:"HeaderOnlineStore",setup(t){const e=Ae(()=>$.state.user);Mi(()=>{$.dispatch("getUserOnLogin")});const n=()=>{$.commit("openOrCloseProfile")},r=()=>{$.commit("openOrCloseFormRegister")},s=()=>{$.commit("openOrCloseFormLogin")},i=Ae(()=>$.getters.priceCalculation),o=()=>{$.commit("openOrCloseBusket")},l=u=>{$.commit("openOrCloseBookMarks",u)},c=()=>{$.commit("openOrCloseAllProducts")};return(u,d)=>(te(),ge("header",Jk,[k("div",{id:"logo",class:"flex items-center cursor-pointer",onClick:c},d[0]||(d[0]=[k("div",{class:"mr-4"},[k("img",{src:Wk,alt:"Logo",class:"w-[40px]"})],-1),k("div",null,[k("h2",{class:"text-xl font-bold uppercase"},"Vue Online Store"),k("p",{class:"text-gray-500"},"Магазин лучших кроссовок")],-1)])),k("ul",Xk,[k("li",{class:"flex items-center gap-2.5 cursor-pointer",onClick:o},[d[1]||(d[1]=k("img",{src:Kk,alt:"Cart"},null,-1)),k("b",Yk,mt(i.value)+" руб.",1)]),k("li",{id:"bookmarks",class:"flex items-center gap-2.5 cursor-pointer",onClick:l},d[2]||(d[2]=[k("img",{src:Gk,alt:"Heart"},null,-1),k("b",{class:"text-gray-500 hover:text-black"},"Закладки",-1)])),k("li",Zk,[d[4]||(d[4]=k("img",{src:Qk,alt:"Profile"},null,-1)),e.value?(te(),ge("b",{key:0,onClick:n,class:"text-gray-500 hover:text-black"},"Профиль")):(te(),ge("b",eO,[k("span",{class:"hover:text-black",onClick:r},"Зарегистрироваться"),d[3]||(d[3]=Ai(" / ")),k("span",{class:"hover:text-black",onClick:s},"Войти")]))])])]))}},nO="/Vue-projects/image%207.png",rO="/Vue-projects/image%206.png",sO={},iO={class:"my-12"};function oO(t,e){return te(),ge("section",iO,e[0]||(e[0]=[GE('<div class="pl-6 flex justify-between w-full h-[300px] bg-[#F4EFE9] rounded-3xl"><div class="flex flex-col justify-between"><img class="block mt-5 w-[99px]" src="'+nO+'" alt="logo image"><div class="mb-14 ml-14"><h1 class="w-64 text-3xl font-bold mb-4"><span class="text-[#A5D364]">Stan Smith</span>, Forever! </h1><button class="w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"> Купить </button></div></div><img class="w-[65%] block h-full" src="'+rO+'" alt="Slider Image"></div>',1)]))}const aO=Ls(sO,[["render",oO]]),$y="/Vue-projects/assets/emoji-1-D2CoJfvu.png",lO={class:"grid grid-cols-4 justify-between gap-11"},cO={__name:"BookMarksCardList",setup(t){const e=Ae(()=>$.state.products),n=i=>{$.commit("addOrRemoveProductFromFavorites",i)},r=i=>{$.commit("addOrRemoveProductFromIsAdded",i)},s=i=>{$.commit("openOrCloseCard",i)};return(i,o)=>(te(),ge("ul",lO,[ke(iu,{name:"list"},{default:ms(()=>[(te(!0),ge(Fe,null,Fi(e.value,l=>(te(),ge(Fe,null,[l.isFavorite?(te(),Tt(By,{key:l.id,id:l.id,imageUrl:l.imageUrl,title:l.title,price:l.price,isFavorite:l.isFavorite,isAdded:l.isAdded,onProductsInBasket:()=>r(l),onFavoriteProducts:()=>n(l),onOpenCard:()=>s(l)},null,8,["id","imageUrl","title","price","isFavorite","isAdded","onProductsInBasket","onFavoriteProducts","onOpenCard"])):lt("",!0)],64))),256))]),_:1})]))}},uO=Ls(cO,[["__scopeId","data-v-cf0f6290"]]),hO={class:"mt-5"},dO={key:0,class:"h-full flex flex-col items-center"},fO={__name:"Bookmarks",setup(t){const e=Ae(()=>$.state.notEmptyBookMarks),n=()=>{$.commit("openOrCloseAllProducts")};return(r,s)=>(te(),ge("section",hO,[e.value?(te(),ge("div",dO,[s[0]||(s[0]=k("img",{class:"inline w-[70px] mb-8",src:$y},null,-1)),s[1]||(s[1]=k("h2",{class:"text-3xl font-semibold mb-3"},"Закладок нет :(",-1)),s[2]||(s[2]=k("p",{class:"text-gray-400 mb-19"},"Вы ничего не добавляли в закладки",-1)),k("button",{id:"bookmarks-button",onClick:n,class:"w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"}," Вернуться назад ")])):(te(),ge(Fe,{key:1},[s[3]||(s[3]=k("h2",{class:"mb-5 text-4xl font-bold"},"Закладки",-1)),ke(uO)],64))]))}},pO={class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"},mO=["id"],gO=["src"],_O=["src"],yO={class:"text-2xl mb-4"},vO={class:"text-base font-bold"},EO=["src"],TO={__name:"OpenProductCard",props:{id:Number,imageUrl:String,title:String,price:Number,isFavorite:Boolean,isAdded:Boolean,onProductsInBasket:Function,onFavoriteProducts:Function},setup(t){const e=()=>{$.commit("openOrCloseCard")};return(n,r)=>(te(),ge("section",null,[k("div",{class:"fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50",onClick:e}),k("div",pO,[k("article",{class:"relative w-[350px] pb-9 px-9 pt-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition z-10",id:t.id},[k("img",{class:"absolute left-9 block w-14",src:t.isFavorite?"like-2.svg":"like-1.svg",alt:"button like",onClick:r[0]||(r[0]=(...s)=>t.onFavoriteProducts&&t.onFavoriteProducts(...s))},null,8,gO),k("img",{class:"block w-full h-[224px] mb-4",src:t.imageUrl,alt:"image sneakers"},null,8,_O),k("p",yO,mt(t.title),1),k("div",null,[r[2]||(r[2]=k("p",{class:"text-base text-[#BDBDBD]"},"ЦЕНА:",-1)),k("p",vO,mt(t.price)+"руб.",1)]),k("img",{class:"absolute bottom-9 right-9 block",src:t.isAdded?"checked.svg":"plus.svg",alt:"Added Product",onClick:r[1]||(r[1]=(...s)=>t.onProductsInBasket&&t.onProductsInBasket(...s))},null,8,EO)],8,mO)])]))}},wO={class:"w-[300px] bg-white p-2.5 rounded-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"},IO=["disabled"],bO={__name:"Register",setup(t){const e=Ae({get(){return $.state.name},set(l){$.commit("updateName",l)}}),n=Ae({get(){return $.state.password},set(l){$.commit("updatePassword",l)}}),r=Ae({get(){return $.state.email},set(l){$.commit("updateEmail",l)}}),s=Ae(()=>$.state.isSubmitting),i=()=>{$.commit("openOrCloseFormRegister",!1)},o=async()=>{$.dispatch("handleRegister")};return(l,c)=>(te(),ge("section",null,[k("div",{class:"fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50",onClick:i}),k("div",wO,[c[6]||(c[6]=k("h2",{class:"text-2xl font-bold text-center text-gray-800 mb-6"},"Регистрация",-1)),k("form",{onSubmit:_s(o,["prevent"]),class:"space-y-4"},[k("div",null,[c[3]||(c[3]=k("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Имя",-1)),ls(k("input",{id:"name","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",placeholder:"Введите ваше Имя",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[us,e.value]])]),k("div",null,[c[4]||(c[4]=k("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1)),ls(k("input",{id:"email","onUpdate:modelValue":c[1]||(c[1]=u=>r.value=u),type:"email",placeholder:"Введите ваш email",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[us,r.value]])]),k("div",null,[c[5]||(c[5]=k("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Пароль",-1)),ls(k("input",{id:"password","onUpdate:modelValue":c[2]||(c[2]=u=>n.value=u),type:"password",placeholder:"Введите пароль",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[us,n.value]])]),k("button",{type:"submit",disabled:s.value,class:"m-auto block w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"}," Зарегистрироваться ",8,IO)],32)])]))}},AO={class:"w-[300px] bg-white p-2.5 rounded-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"},SO={class:"mb-3"},RO={class:"mb-3"},CO=["disabled"],PO={__name:"Login",setup(t){const e=Ae({get(){return $.state.password},set(i){$.commit("updatePassword",i)}}),n=Ae({get(){return $.state.email},set(i){$.commit("updateEmail",i)}}),r=async()=>{$.dispatch("handleLogin")},s=()=>{$.commit("openOrCloseFormLogin",!1)};return(i,o)=>(te(),ge("section",null,[k("div",{class:"fixed top-0 left-0 z-10 w-full h-full bg-black opacity-50",onClick:s}),k("div",AO,[o[4]||(o[4]=k("h2",{class:"text-2xl font-bold text-center text-gray-800 mb-6"},"Вход",-1)),k("form",{onSubmit:_s(r,["prevent"])},[k("div",SO,[o[2]||(o[2]=k("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1)),ls(k("input",{id:"email","onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),type:"email",placeholder:"Введите ваш email",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[us,n.value]])]),k("div",RO,[o[3]||(o[3]=k("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Пароль",-1)),ls(k("input",{id:"password","onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),type:"password",placeholder:"Введите пароль",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",required:""},null,512),[[us,e.value]])]),k("button",{class:"m-auto block w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white",type:"submit",disabled:i.isSubmitting}," Войти ",8,CO)],32)])]))}},kO={class:"w-full p-6 space-y-6"},OO={class:"w-[400px] space-y-4"},xO={class:"font-medium"},NO={__name:"PersonalAccount",setup(t){const e=Ae({get(){return $.user||$.state.name},set(s){$.commit("updateName",s)}}),n=async()=>{$.dispatch("logout")},r=async()=>{$.dispatch("changeName")};return(s,i)=>(te(),ge("div",kO,[i[3]||(i[3]=k("h1",{class:"text-2xl font-bold"},"Личный кабинет",-1)),k("div",OO,[i[2]||(i[2]=k("h2",{class:"text-xl font-semibold"},"Персональная информация",-1)),k("form",{class:"flex flex-col",onSubmit:_s(r,["prevent"])},[k("label",xO,"Имя: "+mt(e.value),1),ls(k("input",{type:"text",placeholder:"Введите имя",class:"px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500","onUpdate:modelValue":i[0]||(i[0]=o=>e.value=o),required:""},null,512),[[us,e.value]]),i[1]||(i[1]=k("button",{type:"submit",class:"mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"}," Изменить Имя ",-1))],32),k("button",{onClick:n,class:"mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"}," Выйти ")])]))}},DO={class:"flex justify-between items-center mb-5 w-full p-2.5 border-y border-slate-300"},VO={class:"text-gray-500 text-2xl text-center"},LO={class:"block"},MO={class:"block"},FO={class:"flex w-[363px] overflow-x-auto"},UO=["src"],BO={class:"text-gray-500 text-2xl"},$O={__name:"Order",props:{order:Object},setup(t){const e=t,n=e.order.createdAt.seconds,r=e.order.createdAt.nanoseconds,s=n*1e3+Math.floor(r/1e6),i=new Date(s),o=i.toLocaleDateString("ru-RU",{timeZone:"Europe/Moscow"}),l=i.toLocaleTimeString("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"});return(c,u)=>(te(),ge("li",DO,[k("div",VO,[k("span",LO,mt(zo(o)),1),u[0]||(u[0]=Ai()),k("span",MO,mt(zo(l)),1)]),k("ul",FO,[(te(!0),ge(Fe,null,Fi(t.order.basketProducts,d=>(te(),ge("li",{key:d.id},[k("img",{class:"max-w-[80px] h-[67px]",src:d.imageUrl,alt:""},null,8,UO)]))),128))]),k("span",BO,mt(t.order.totalPrice)+"₽",1)]))}},jO={key:0,class:"w-full p-6"},HO={class:"w-full"},qO={key:1,class:"h-full flex flex-col items-center justify-center"},zO={__name:"PersonalOrders",setup(t){const e=Ae(()=>$.state.listOrders),n=Ae(()=>$.state.notEmptyListOrders),r=()=>{$.commit("openOrCloseAllProducts")};return Mi(()=>{$.dispatch("getPlaceanOrders")}),(s,i)=>n.value==="notEmpty"?(te(),ge("div",jO,[i[0]||(i[0]=k("h2",{class:"mb-3.5 text-3xl font-medium"},"Все Заказы",-1)),i[1]||(i[1]=k("div",{class:"m-auto mb-3.5 w-[95%] flex justify-between"},[k("span",null,"Дата заказа"),Ai(),k("span",null,"Товары"),Ai(),k("span",null,"Цена")],-1)),k("ul",HO,[(te(!0),ge(Fe,null,Fi(e.value,o=>(te(),Tt($O,{key:o.id,order:o,id:o},null,8,["order","id"]))),128))])])):n.value==="empty"?(te(),ge("div",qO,[i[2]||(i[2]=k("img",{class:"inline w-[70px] mb-8",src:$y},null,-1)),i[3]||(i[3]=k("h2",{class:"text-3xl font-semibold mb-3"},"Нет оформленных заказов :(",-1)),i[4]||(i[4]=k("p",{class:"text-gray-400 mb-15"},"Сделайте хотя-бы один заказ",-1)),k("button",{id:"bookmarks-button",onClick:r,class:"w-48 rounded-4xl py-4 bg-[#A5D364] cursor-pointer text-white"}," Вернуться назад ")])):lt("",!0)}},WO={class:"h-full pt-3.5 flex"},KO={class:"w-full"},GO={__name:"ProfileContent",setup(t){const e=zv("personal-account"),n=r=>{const s=r.currentTarget;switch(s.id){case"personal-account":e.value=s.id;break;case"personal-orders":e.value=s.id;break}};return(r,s)=>(te(),ge("div",WO,[k("section",{class:"pr-3.5 border-r border-slate-300"},[k("ul",null,[k("li",{onClick:n,class:"mb-3.5",id:"personal-account"},s[0]||(s[0]=[k("p",{class:"cursor-pointer text-gray-500 hover:text-black text-2xl"},"Профиль",-1)])),k("li",{onClick:n,class:"mb-3.5",id:"personal-orders"},s[1]||(s[1]=[k("p",{class:"cursor-pointer text-gray-500 hover:text-black text-2xl"},"Заказы",-1)]))])]),k("section",KO,[e.value==="personal-account"?(te(),Tt(NO,{key:0})):lt("",!0),e.value==="personal-orders"?(te(),Tt(zO,{key:1})):lt("",!0)])]))}},QO={class:"fixed flex w-[400px] bg-white p-4 rounded-2xl text-2xl font-bold text-gray-800 z-30"},JO=["src"],XO={__name:"Notification",setup(t){const e=Ae(()=>$.state.textNotification),n=Ae(()=>$.state.imgNotification);return(r,s)=>(te(),ge("div",QO,[k("img",{class:"mr-4 w-[30px] h-[30px]",src:n.value,alt:"Created acc"},null,8,JO),k("span",null,mt(e.value),1)]))}},YO={class:"w-[1080px] px-16 py-12 m-auto bg-white rounded-3xl shadow-xl h-[100vh] overflow-y-auto"},ZO={__name:"MainPage",setup(t){const e=Ae(()=>$.state.openNotification),n=Ae(()=>$.state.openProfile),r=Ae(()=>$.state.openFormRegister),s=Ae(()=>$.state.openFormLogin),i=Ae(()=>$.state.openBasket),o=Ae(()=>$.state.openBookmarks),l=Ae(()=>$.state.activeOpenCard),c=Ae(()=>$.state.openCard),u=Ae(()=>$.state.openAllProducts),d=g=>{$.commit("addOrRemoveProductFromFavorites",g)},p=g=>{$.commit("addOrRemoveProductFromIsAdded",g)};return(g,I)=>(te(),ge(Fe,null,[ke(ld,{name:"notification"},{default:ms(()=>[e.value?(te(),Tt(XO,{key:0})):lt("",!0)]),_:1}),r.value?(te(),Tt(bO,{key:0})):lt("",!0),s.value?(te(),Tt(PO,{key:1})):lt("",!0),ke(ld,{name:"fade"},{default:ms(()=>[i.value?(te(),Tt(zk,{key:0})):lt("",!0)]),_:1}),c.value?(te(),Tt(TO,{key:2,id:l.value.id,imageUrl:l.value.imageUrl,title:l.value.title,price:l.value.price,isFavorite:l.value.isFavorite,isAdded:l.value.isAdded,onProductsInBasket:()=>p(l.value),onFavoriteProducts:()=>d(l.value)},null,8,["id","imageUrl","title","price","isFavorite","isAdded","onProductsInBasket","onFavoriteProducts"])):lt("",!0),k("div",YO,[ke(tO),o.value?(te(),Tt(fO,{key:0})):lt("",!0),n.value?(te(),Tt(GO,{key:1})):lt("",!0),u.value?(te(),ge(Fe,{key:2},[ke(aO),ke(Ik)],64)):lt("",!0)])],64))}},ex=Ls(ZO,[["__scopeId","data-v-52e6f258"]]),tx={__name:"App",setup(t){return(e,n)=>(te(),Tt(ex))}};FT(tx).mount("#app");
