import{Q as Cl}from"./QPage.acb8e6ae.js";import{t as Rl,K as hs,l as Pl,L as ps,E as Ll,z as Dl,r as Il,o as Mt,f as Ul,w as Ra,a as I,M as Dt,G as dt,c as wt,h as Sn,F as yn,e as Fl}from"./index.7c117b04.js";import{g as Ne}from"./index.0b27e08a.js";import{S as di}from"./ScrollTrigger.accda2d7.js";import{_ as Nl}from"./arrow_down_b9.324287c8.js";import{_ as Ol}from"./plugin-vue_export-helper.21dcd24c.js";import"./render.fb9d86c6.js";function Bl(n,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(i){if(i!=="default"&&!(i in n)){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}})}),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const Cs=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const zl=Object.prototype.toString,Vl=n=>zl.call(n)==="[object Object]";function Fs(n){return Array.isArray(n)?n:[n]}function kl(n,e,t){return Rl(n,e,{...t,immediate:!0})}const Fo=Cs?window:void 0;Cs&&window.document;Cs&&window.navigator;Cs&&window.location;function Gl(n){var e;const t=ps(n);return(e=t==null?void 0:t.$el)!==null&&e!==void 0?e:t}function Wi(...n){const e=(i,r,s,a)=>(i.addEventListener(r,s,a),()=>i.removeEventListener(r,s,a)),t=Pl(()=>{const i=Fs(ps(n[0])).filter(r=>r!=null);return i.every(r=>typeof r!="string")?i:void 0});return kl(()=>{var i,r;return[(i=(r=t.value)===null||r===void 0?void 0:r.map(s=>Gl(s)))!==null&&i!==void 0?i:[Fo].filter(s=>s!=null),Fs(ps(t.value?n[1]:n[0])),Fs(Ll(t.value?n[2]:n[1])),ps(t.value?n[3]:n[2])]},([i,r,s,a],o,l)=>{if(!(i!=null&&i.length)||!(r!=null&&r.length)||!(s!=null&&s.length))return;const u=Vl(a)?{...a}:a,f=i.flatMap(d=>r.flatMap(h=>s.map(c=>e(d,h,c,u))));l(()=>{f.forEach(d=>d())})},{flush:"post"})}const Hl={page:n=>[n.pageX,n.pageY],client:n=>[n.clientX,n.clientY],screen:n=>[n.screenX,n.screenY],movement:n=>n instanceof MouseEvent?[n.movementX,n.movementY]:null};function Wl(n={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:s=Fo,target:a=s,scroll:o=!0,eventFilter:l}=n;let u=null,f=0,d=0;const h=hs(r.x),c=hs(r.y),m=hs(null),x=typeof e=="function"?e:Hl[e],g=E=>{const T=x(E);u=E,T&&([h.value,c.value]=T,m.value="mouse"),s&&(f=s.scrollX,d=s.scrollY)},p=E=>{if(E.touches.length>0){const T=x(E.touches[0]);T&&([h.value,c.value]=T,m.value="touch")}},_=()=>{if(!u||!s)return;const E=x(u);u instanceof MouseEvent&&E&&(h.value=E[0]+s.scrollX-f,c.value=E[1]+s.scrollY-d)},M=()=>{h.value=r.x,c.value=r.y},A=l?E=>l(()=>g(E),{}):E=>g(E),v=l?E=>l(()=>p(E),{}):E=>p(E),y=l?()=>l(()=>_(),{}):()=>_();if(a){const E={passive:!0};Wi(a,["mousemove","dragover"],A,E),t&&e!=="movement"&&(Wi(a,["touchstart","touchmove"],v,E),i&&Wi(a,"touchend",M,E)),o&&e==="page"&&Wi(s,"scroll",y,E)}return{x:h,y:c,sourceType:m}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="181",Xl=0,Pa=1,Yl=2,No=1,ql=2,fn=3,Dn=0,Rt=1,dn=2,mn=0,hi=1,La=2,Da=3,Ia=4,$l=5,Hn=100,Kl=101,jl=102,Zl=103,Jl=104,Ql=200,ec=201,tc=202,nc=203,Sr=204,yr=205,ic=206,sc=207,rc=208,ac=209,oc=210,lc=211,cc=212,uc=213,fc=214,Mr=0,br=1,Er=2,mi=3,Tr=4,Ar=5,wr=6,Cr=7,Oo=0,dc=1,hc=2,Ln=0,pc=1,mc=2,xc=3,gc=4,vc=5,_c=6,Sc=7,Bo=300,xi=301,gi=302,Rr=303,Pr=304,Rs=306,Lr=1e3,hn=1001,Dr=1002,Nt=1003,yc=1004,Xi=1005,Gt=1006,Ns=1007,Xn=1008,gn=1009,zo=1010,Vo=1011,Ii=1012,da=1013,$n=1014,pn=1015,yi=1016,ha=1017,pa=1018,Ui=1020,ko=35902,Go=35899,Ho=1021,Wo=1022,Kt=1023,Fi=1026,Ni=1027,Xo=1028,ma=1029,xa=1030,ga=1031,va=1033,ms=33776,xs=33777,gs=33778,vs=33779,Ir=35840,Ur=35841,Fr=35842,Nr=35843,Or=36196,Br=37492,zr=37496,Vr=37808,kr=37809,Gr=37810,Hr=37811,Wr=37812,Xr=37813,Yr=37814,qr=37815,$r=37816,Kr=37817,jr=37818,Zr=37819,Jr=37820,Qr=37821,ea=36492,ta=36494,na=36495,ia=36283,sa=36284,ra=36285,aa=36286,Mc=3200,bc=3201,Ec=0,Tc=1,Cn="",kt="srgb",vi="srgb-linear",ys="linear",et="srgb",Zn=7680,Ua=519,Ac=512,wc=513,Cc=514,Yo=515,Rc=516,Pc=517,Lc=518,Dc=519,Fa=35044,Na="300 es",Jt=2e3,Ms=2001;function qo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ic(){const n=bs("canvas");return n.style.display="block",n}const Oa={};function Ba(...n){const e="THREE."+n.shift();console.log(e,...n)}function Oe(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ut(...n){const e="THREE."+n.shift();console.error(e,...n)}function Oi(...n){const e=n.join(" ");e in Oa||(Oa[e]=!0,Oe(...n))}function Uc(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,oa=180/Math.PI;function Bi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function Fc(n,e){return(n%e+e)%e}function Bs(n,e,t){return(1-t)*n+t*e}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3],h=s[a+0],c=s[a+1],m=s[a+2],x=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(o>=1){e[t+0]=h,e[t+1]=c,e[t+2]=m,e[t+3]=x;return}if(d!==x||l!==h||u!==c||f!==m){let g=l*h+u*c+f*m+d*x;g<0&&(h=-h,c=-c,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const _=Math.acos(g),M=Math.sin(_);p=Math.sin(p*_)/M,o=Math.sin(o*_)/M,l=l*p+h*o,u=u*p+c*o,f=f*p+m*o,d=d*p+x*o}else{l=l*p+h*o,u=u*p+c*o,f=f*p+m*o,d=d*p+x*o;const _=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=_,u*=_,f*=_,d*=_}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[a],h=s[a+1],c=s[a+2],m=s[a+3];return e[t]=o*m+f*d+l*c-u*h,e[t+1]=l*m+f*h+u*d-o*c,e[t+2]=u*m+f*c+o*h-l*d,e[t+3]=f*m-o*d-l*h-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),c=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*f*d+u*c*m,this._y=u*c*d-h*f*m,this._z=u*f*m+h*c*d,this._w=u*f*d-h*c*m;break;case"YXZ":this._x=h*f*d+u*c*m,this._y=u*c*d-h*f*m,this._z=u*f*m-h*c*d,this._w=u*f*d+h*c*m;break;case"ZXY":this._x=h*f*d-u*c*m,this._y=u*c*d+h*f*m,this._z=u*f*m+h*c*d,this._w=u*f*d-h*c*m;break;case"ZYX":this._x=h*f*d-u*c*m,this._y=u*c*d+h*f*m,this._z=u*f*m-h*c*d,this._w=u*f*d+h*c*m;break;case"YZX":this._x=h*f*d+u*c*m,this._y=u*c*d+h*f*m,this._z=u*f*m-h*c*d,this._w=u*f*d-h*c*m;break;case"XZY":this._x=h*f*d-u*c*m,this._y=u*c*d-h*f*m,this._z=u*f*m+h*c*d,this._w=u*f*d+h*c*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],f=t[6],d=t[10],h=i+o+d;if(h>0){const c=.5/Math.sqrt(h+1);this._w=.25/c,this._x=(f-l)*c,this._y=(s-u)*c,this._z=(a-r)*c}else if(i>o&&i>d){const c=2*Math.sqrt(1+i-o-d);this._w=(f-l)/c,this._x=.25*c,this._y=(r+a)/c,this._z=(s+u)/c}else if(o>d){const c=2*Math.sqrt(1+o-i-d);this._w=(s-u)/c,this._x=(r+a)/c,this._y=.25*c,this._z=(l+f)/c}else{const c=2*Math.sqrt(1+d-i-o);this._w=(a-r)/c,this._x=(s+u)/c,this._y=(l+f)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,t=Math.sin(t*u)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(za.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*u+a*d-o*f,this.y=i+l*f+o*u-s*d,this.z=r+l*d+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new $,za=new zi;class Be{constructor(e,t,i,r,s,a,o,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],c=i[5],m=i[8],x=r[0],g=r[3],p=r[6],_=r[1],M=r[4],A=r[7],v=r[2],y=r[5],E=r[8];return s[0]=a*x+o*_+l*v,s[3]=a*g+o*M+l*y,s[6]=a*p+o*A+l*E,s[1]=u*x+f*_+d*v,s[4]=u*g+f*M+d*y,s[7]=u*p+f*A+d*E,s[2]=h*x+c*_+m*v,s[5]=h*g+c*M+m*y,s[8]=h*p+c*A+m*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],d=f*a-o*u,h=o*l-f*s,c=u*s-a*l,m=t*d+i*h+r*c;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(f*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=c*x,e[7]=(i*l-u*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Be,Va=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nc(){const n={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vi]:{primaries:e,whitePoint:i,transfer:ys,toXYZ:Va,fromXYZ:ka,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Va,fromXYZ:ka,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const Ke=Nc();function xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Jn;class Oc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jn===void 0&&(Jn=bs("canvas")),Jn.width=e.width,Jn.height=e.height;const r=Jn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xn(t[i]/255)*255):t[i]=xn(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bc=0;class _a{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ks(r[a].image)):s.push(ks(r[a]))}else s=ks(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ks(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Oc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let zc=0;const Gs=new $;class St extends Mi{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=hn,r=hn,s=Gt,a=Xn,o=Kt,l=gn,u=St.DEFAULT_ANISOTROPY,f=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Bi(),this.name="",this.source=new _a(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gs).x}get height(){return this.source.getSize(Gs).y}get depth(){return this.source.getSize(Gs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Bo;St.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],c=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(u+c+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,A=(c+1)/2,v=(p+1)/2,y=(f+h)/4,E=(d+x)/4,T=(m+g)/4;return M>A&&M>v?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=y/i,s=E/i):A>v?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=y/r,s=T/r):v<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),i=E/s,r=T/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+c+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vc extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new St(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _a(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Vc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $o extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kc extends St{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yi.copy(i.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),qi.subVectors(this.max,Ai),Qn.subVectors(e.a,Ai),ei.subVectors(e.b,Ai),ti.subVectors(e.c,Ai),Mn.subVectors(ei,Qn),bn.subVectors(ti,ei),Nn.subVectors(Qn,ti);let t=[0,-Mn.z,Mn.y,0,-bn.z,bn.y,0,-Nn.z,Nn.y,Mn.z,0,-Mn.x,bn.z,0,-bn.x,Nn.z,0,-Nn.x,-Mn.y,Mn.x,0,-bn.y,bn.x,0,-Nn.y,Nn.x,0];return!Hs(t,Qn,ei,ti,qi)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,Qn,ei,ti,qi))?!1:($i.crossVectors(Mn,bn),t=[$i.x,$i.y,$i.z],Hs(t,Qn,ei,ti,qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sn=[new $,new $,new $,new $,new $,new $,new $,new $],Wt=new $,Yi=new Vi,Qn=new $,ei=new $,ti=new $,Mn=new $,bn=new $,Nn=new $,Ai=new $,qi=new $,$i=new $,On=new $;function Hs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){On.fromArray(n,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),l=e.dot(On),u=t.dot(On),f=i.dot(On);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const Gc=new Vi,wi=new $,Ws=new $;class Sa{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gc.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);const t=wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Ws)),this.expandByPoint(wi.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rn=new $,Xs=new $,Ki=new $,En=new $,Ys=new $,ji=new $,qs=new $;class Hc{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xs.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=En.dot(this.direction),l=-En.dot(Ki),u=En.lengthSq(),f=Math.abs(1-a*a);let d,h,c,m;if(f>0)if(d=a*l-o,h=a*o-l,m=s*f,d>=0)if(h>=-m)if(h<=m){const x=1/f;d*=x,h*=x,c=d*(d+a*h+2*o)+h*(a*d+h+2*l)+u}else h=s,d=Math.max(0,-(a*h+o)),c=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(a*h+o)),c=-d*d+h*(h+2*l)+u;else h<=-m?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),c=-d*d+h*(h+2*l)+u):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),c=h*(h+2*l)+u):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),c=-d*d+h*(h+2*l)+u);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),c=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xs).addScaledVector(Ki,h),c}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const i=rn.dot(this.direction),r=rn.dot(rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,r,s){Ys.subVectors(t,e),ji.subVectors(i,e),qs.crossVectors(Ys,ji);let a=this.direction.dot(qs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(ji.crossVectors(En,ji));if(l<0)return null;const u=o*this.direction.dot(Ys.cross(En));if(u<0||l+u>a)return null;const f=-o*En.dot(qs);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,u,f,d,h,c,m,x,g){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,f,d,h,c,m,x,g)}set(e,t,i,r,s,a,o,l,u,f,d,h,c,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=f,p[10]=d,p[14]=h,p[3]=c,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),s=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,c=a*d,m=o*f,x=o*d;t[0]=l*f,t[4]=-l*d,t[8]=u,t[1]=c+m*u,t[5]=h-x*u,t[9]=-o*l,t[2]=x-h*u,t[6]=m+c*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,c=l*d,m=u*f,x=u*d;t[0]=h+x*o,t[4]=m*o-c,t[8]=a*u,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=c*o-m,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,c=l*d,m=u*f,x=u*d;t[0]=h-x*o,t[4]=-a*d,t[8]=m+c*o,t[1]=c+m*o,t[5]=a*f,t[9]=x-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,c=a*d,m=o*f,x=o*d;t[0]=l*f,t[4]=m*u-c,t[8]=h*u+x,t[1]=l*d,t[5]=x*u+h,t[9]=c*u-m,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,c=a*u,m=o*l,x=o*u;t[0]=l*f,t[4]=x-h*d,t[8]=m*d+c,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=c*d+m,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,c=a*u,m=o*l,x=o*u;t[0]=l*f,t[4]=-d,t[8]=u*f,t[1]=h*d+x,t[5]=a*f,t[9]=c*d-m,t[2]=m*d-c,t[6]=o*f,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wc,e,Xc)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Tn.crossVectors(i,It),Tn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Tn.crossVectors(i,It)),Tn.normalize(),Zi.crossVectors(It,Tn),r[0]=Tn.x,r[4]=Zi.x,r[8]=It.x,r[1]=Tn.y,r[5]=Zi.y,r[9]=It.y,r[2]=Tn.z,r[6]=Zi.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],c=i[13],m=i[2],x=i[6],g=i[10],p=i[14],_=i[3],M=i[7],A=i[11],v=i[15],y=r[0],E=r[4],T=r[8],b=r[12],S=r[1],w=r[5],C=r[9],L=r[13],U=r[2],F=r[6],V=r[10],z=r[14],N=r[3],X=r[7],j=r[11],ce=r[15];return s[0]=a*y+o*S+l*U+u*N,s[4]=a*E+o*w+l*F+u*X,s[8]=a*T+o*C+l*V+u*j,s[12]=a*b+o*L+l*z+u*ce,s[1]=f*y+d*S+h*U+c*N,s[5]=f*E+d*w+h*F+c*X,s[9]=f*T+d*C+h*V+c*j,s[13]=f*b+d*L+h*z+c*ce,s[2]=m*y+x*S+g*U+p*N,s[6]=m*E+x*w+g*F+p*X,s[10]=m*T+x*C+g*V+p*j,s[14]=m*b+x*L+g*z+p*ce,s[3]=_*y+M*S+A*U+v*N,s[7]=_*E+M*w+A*F+v*X,s[11]=_*T+M*C+A*V+v*j,s[15]=_*b+M*L+A*z+v*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],c=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+s*l*d-r*u*d-s*o*h+i*u*h+r*o*c-i*l*c)+x*(+t*l*c-t*u*h+s*a*h-r*a*c+r*u*f-s*l*f)+g*(+t*u*d-t*o*c-s*a*d+i*a*c+s*o*f-i*u*f)+p*(-r*o*f-t*l*d+t*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],c=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=d*g*u-x*h*u+x*l*c-o*g*c-d*l*p+o*h*p,M=m*h*u-f*g*u-m*l*c+a*g*c+f*l*p-a*h*p,A=f*x*u-m*d*u+m*o*c-a*x*c-f*o*p+a*d*p,v=m*d*l-f*x*l-m*o*h+a*x*h+f*o*g-a*d*g,y=t*_+i*M+r*A+s*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=_*E,e[1]=(x*h*s-d*g*s-x*r*c+i*g*c+d*r*p-i*h*p)*E,e[2]=(o*g*s-x*l*s+x*r*u-i*g*u-o*r*p+i*l*p)*E,e[3]=(d*l*s-o*h*s-d*r*u+i*h*u+o*r*c-i*l*c)*E,e[4]=M*E,e[5]=(f*g*s-m*h*s+m*r*c-t*g*c-f*r*p+t*h*p)*E,e[6]=(m*l*s-a*g*s-m*r*u+t*g*u+a*r*p-t*l*p)*E,e[7]=(a*h*s-f*l*s+f*r*u-t*h*u-a*r*c+t*l*c)*E,e[8]=A*E,e[9]=(m*d*s-f*x*s-m*i*c+t*x*c+f*i*p-t*d*p)*E,e[10]=(a*x*s-m*o*s+m*i*u-t*x*u-a*i*p+t*o*p)*E,e[11]=(f*o*s-a*d*s-f*i*u+t*d*u+a*i*c-t*o*c)*E,e[12]=v*E,e[13]=(f*x*r-m*d*r+m*i*h-t*x*h-f*i*g+t*d*g)*E,e[14]=(m*o*r-a*x*r-m*i*l+t*x*l+a*i*g-t*o*g)*E,e[15]=(a*d*r-f*o*r+f*i*l-t*d*l-a*i*h+t*o*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,f=a+a,d=o+o,h=s*u,c=s*f,m=s*d,x=a*f,g=a*d,p=o*d,_=l*u,M=l*f,A=l*d,v=i.x,y=i.y,E=i.z;return r[0]=(1-(x+p))*v,r[1]=(c+A)*v,r[2]=(m-M)*v,r[3]=0,r[4]=(c-A)*y,r[5]=(1-(h+p))*y,r[6]=(g+_)*y,r[7]=0,r[8]=(m+M)*E,r[9]=(g-_)*E,r[10]=(1-(h+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const a=ni.set(r[4],r[5],r[6]).length(),o=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const u=1/s,f=1/a,d=1/o;return Xt.elements[0]*=u,Xt.elements[1]*=u,Xt.elements[2]*=u,Xt.elements[4]*=f,Xt.elements[5]*=f,Xt.elements[6]*=f,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Jt,l=!1){const u=this.elements,f=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),c=(i+r)/(i-r);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===Jt)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ms)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=d,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Jt,l=!1){const u=this.elements,f=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),c=-(i+r)/(i-r);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===Jt)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ms)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=d,u[9]=0,u[13]=c,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ni=new $,Xt=new pt,Wc=new $(0,0,0),Xc=new $(1,1,1),Tn=new $,Zi=new $,It=new $,Ga=new pt,Ha=new zi;class vn{constructor(e=0,t=0,i=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],c=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,c),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,c),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,c),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,c),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yc=0;const Wa=new $,ii=new zi,an=new pt,Ji=new $,Ci=new $,qc=new $,$c=new zi,Xa=new $(1,0,0),Ya=new $(0,1,0),qa=new $(0,0,1),$a={type:"added"},Kc={type:"removed"},si={type:"childadded",child:null},$s={type:"childremoved",child:null};class Ot extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new $,t=new vn,i=new zi,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Be}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(Ya,e)}rotateZ(e){return this.rotateOnAxis(qa,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(Ya,e)}translateZ(e){return this.translateOnAxis(qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ji.copy(e):Ji.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ci,Ji,this.up):an.lookAt(Ji,Ci,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(an),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($a),si.child=e,this.dispatchEvent(si),si.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kc),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($a),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,qc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,$c,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),c=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),c.length>0&&(i.animations=c),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new $(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new $,on=new $,Ks=new $,ln=new $,ri=new $,ai=new $,Ka=new $,js=new $,Zs=new $,Js=new $,Qs=new ft,er=new ft,tr=new ft;class $t{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),on.subVectors(i,t),Ks.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(on),l=Yt.dot(Ks),u=on.dot(on),f=on.dot(Ks),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,c=(u*l-o*f)*h,m=(a*f-o*l)*h;return s.set(1-c-m,m,c)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Qs.setScalar(0),er.setScalar(0),tr.setScalar(0),Qs.fromBufferAttribute(e,t),er.fromBufferAttribute(e,i),tr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qs,s.x),a.addScaledVector(er,s.y),a.addScaledVector(tr,s.z),a}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),on.subVectors(e,t),Yt.cross(on).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Yt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ri.subVectors(r,i),ai.subVectors(s,i),js.subVectors(e,i);const l=ri.dot(js),u=ai.dot(js);if(l<=0&&u<=0)return t.copy(i);Zs.subVectors(e,r);const f=ri.dot(Zs),d=ai.dot(Zs);if(f>=0&&d<=f)return t.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(ri,a);Js.subVectors(e,s);const c=ri.dot(Js),m=ai.dot(Js);if(m>=0&&c<=m)return t.copy(s);const x=c*u-l*m;if(x<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(i).addScaledVector(ai,o);const g=f*m-c*d;if(g<=0&&d-f>=0&&c-m>=0)return Ka.subVectors(s,r),o=(d-f)/(d-f+(c-m)),t.copy(r).addScaledVector(Ka,o);const p=1/(g+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(ri,a).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function nr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Fc(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=nr(a,s,e+1/3),this.g=nr(a,s,e),this.b=nr(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=jo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ke.workingToColorSpace(_t.copy(this),e),Math.round(Ye(_t.r*255,0,255))*65536+Math.round(Ye(_t.g*255,0,255))*256+Math.round(Ye(_t.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(_t.copy(this),t);const i=_t.r,r=_t.g,s=_t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=kt){Ke.workingToColorSpace(_t.copy(this),e);const t=_t.r,i=_t.g,r=_t.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Qi);const i=Bs(An.h,Qi.h,t),r=Bs(An.s,Qi.s,t),s=Bs(An.l,Qi.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new tt;tt.NAMES=jo;let jc=0;class Ps extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=hi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=yr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(i.blending=this.blending),this.side!==Dn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sr&&(i.blendSrc=this.blendSrc),this.blendDst!==yr&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zo extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new $,es=new Ze;let Zc=0;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fa,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fa&&(e.usage=this.usage),e}}class Jo extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qo extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qn extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jc=0;const zt=new pt,ir=new Ot,oi=new $,Ut=new Vi,Ri=new Vi,gt=new $;class In extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qo(e)?Qo:Jo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Ut.min,Ri.min),Ut.expandByPoint(gt),gt.addVectors(Ut.max,Ri.max),Ut.expandByPoint(gt)):(Ut.expandByPoint(Ri.min),Ut.expandByPoint(Ri.max))}Ut.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)gt.fromBufferAttribute(o,u),l&&(oi.fromBufferAttribute(e,u),gt.add(oi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new $,l[T]=new $;const u=new $,f=new $,d=new $,h=new Ze,c=new Ze,m=new Ze,x=new $,g=new $;function p(T,b,S){u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,T),c.fromBufferAttribute(s,b),m.fromBufferAttribute(s,S),f.sub(u),d.sub(u),c.sub(h),m.sub(h);const w=1/(c.x*m.y-m.x*c.y);!isFinite(w)||(x.copy(f).multiplyScalar(m.y).addScaledVector(d,-c.y).multiplyScalar(w),g.copy(d).multiplyScalar(c.x).addScaledVector(f,-m.x).multiplyScalar(w),o[T].add(x),o[b].add(x),o[S].add(x),l[T].add(g),l[b].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let T=0,b=_.length;T<b;++T){const S=_[T],w=S.start,C=S.count;for(let L=w,U=w+C;L<U;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new $,A=new $,v=new $,y=new $;function E(T){v.fromBufferAttribute(r,T),y.copy(v);const b=o[T];M.copy(b),M.sub(v.multiplyScalar(v.dot(b))).normalize(),A.crossVectors(y,b);const w=A.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,w)}for(let T=0,b=_.length;T<b;++T){const S=_[T],w=S.start,C=S.count;for(let L=w,U=w+C;L<U;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,c=i.count;h<c;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,u=new $,f=new $,d=new $;if(e)for(let h=0,c=e.count;h<c;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),o.add(f),l.add(f),u.add(f),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,c=t.count;h<c;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,d=o.normalized,h=new u.constructor(l.length*f);let c=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?c=l[x]*o.data.stride+o.offset:c=l[x]*f;for(let p=0;p<f;p++)h[m++]=u[c++]}return new en(h,f,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,d=u.length;f<d;f++){const h=u[f],c=e(h,i);l.push(c)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const c=u[d];f.push(c.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,c=d.length;h<c;h++)f.push(d[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new pt,Bn=new Hc,ts=new Sa,Za=new $,ns=new $,is=new $,ss=new $,sr=new $,rs=new $,Ja=new $,as=new $;class _n extends Ot{constructor(e=new In,t=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],d=s[l];f!==0&&(sr.fromBufferAttribute(d,e),a?rs.addScaledVector(sr,f):rs.addScaledVector(sr.sub(t),f))}t.add(rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ts.copy(i.boundingSphere),ts.applyMatrix4(s),Bn.copy(e.ray).recast(e.near),!(ts.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ts,Za)===null||Bn.origin.distanceToSquared(Za)>(e.far-e.near)**2))&&(ja.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Bn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,c=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=a[g.materialIndex],_=Math.max(g.start,c.start),M=Math.min(o.count,Math.min(g.start+g.count,c.start+c.count));for(let A=_,v=M;A<v;A+=3){const y=o.getX(A),E=o.getX(A+1),T=o.getX(A+2);r=os(this,p,e,i,u,f,d,y,E,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,c.start),x=Math.min(o.count,c.start+c.count);for(let g=m,p=x;g<p;g+=3){const _=o.getX(g),M=o.getX(g+1),A=o.getX(g+2);r=os(this,a,e,i,u,f,d,_,M,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],p=a[g.materialIndex],_=Math.max(g.start,c.start),M=Math.min(l.count,Math.min(g.start+g.count,c.start+c.count));for(let A=_,v=M;A<v;A+=3){const y=A,E=A+1,T=A+2;r=os(this,p,e,i,u,f,d,y,E,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,c.start),x=Math.min(l.count,c.start+c.count);for(let g=m,p=x;g<p;g+=3){const _=g,M=g+1,A=g+2;r=os(this,a,e,i,u,f,d,_,M,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Qc(n,e,t,i,r,s,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Dn,o),l===null)return null;as.copy(o),as.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(as);return u<t.near||u>t.far?null:{distance:u,point:as.clone(),object:n}}function os(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,ns),n.getVertexPosition(l,is),n.getVertexPosition(u,ss);const f=Qc(n,e,t,i,ns,is,ss,Ja);if(f){const d=new $;$t.getBarycoord(Ja,ns,is,ss,d),r&&(f.uv=$t.getInterpolatedAttribute(r,o,l,u,d,new Ze)),s&&(f.uv1=$t.getInterpolatedAttribute(s,o,l,u,d,new Ze)),a&&(f.normal=$t.getInterpolatedAttribute(a,o,l,u,d,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new $,materialIndex:0};$t.getNormal(ns,is,ss,h.normal),f.face=h,f.barycoord=d}return f}class ki extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],d=[];let h=0,c=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(u,3)),this.setAttribute("normal",new qn(f,3)),this.setAttribute("uv",new qn(d,2));function m(x,g,p,_,M,A,v,y,E,T,b){const S=A/E,w=v/T,C=A/2,L=v/2,U=y/2,F=E+1,V=T+1;let z=0,N=0;const X=new $;for(let j=0;j<V;j++){const ce=j*w-L;for(let Me=0;Me<F;Me++){const Ue=Me*S-C;X[x]=Ue*_,X[g]=ce*M,X[p]=U,u.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[p]=y>0?1:-1,f.push(X.x,X.y,X.z),d.push(Me/E),d.push(1-j/T),z+=1}}for(let j=0;j<T;j++)for(let ce=0;ce<E;ce++){const Me=h+ce+F*j,Ue=h+ce+F*(j+1),Xe=h+(ce+1)+F*(j+1),He=h+(ce+1)+F*j;l.push(Me,Ue,He),l.push(Ue,Xe,He),N+=6}o.addGroup(c,N,b),c+=N,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=_i(n[t]);for(const r in i)e[r]=i[r]}return e}function eu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function el(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const tu={clone:_i,merge:bt};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tl extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new $,Qa=new Ze,eo=new Ze;class qt extends tl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,eo),t.subVectors(eo,Qa)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ci=1;class su extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(li,ci,e,t);r.layers=this.layers,this.add(r);const s=new qt(li,ci,e,t);s.layers=this.layers,this.add(s);const a=new qt(li,ci,e,t);a.layers=this.layers,this.add(a);const o=new qt(li,ci,e,t);o.layers=this.layers,this.add(o);const l=new qt(li,ci,e,t);l.layers=this.layers,this.add(l);const u=new qt(li,ci,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Jt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,h,c),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class nl extends St{constructor(e=[],t=xi,i,r,s,a,o,l,u,f){super(e,t,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ki(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:_i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:mn});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Gt),new su(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class ls extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const au={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),p=this._getHandJoint(u,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),c=.02,m=.005;u.inputState.pinching&&h>c+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=c-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(au)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ou extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lu extends St{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Nt,f=Nt,d,h){super(null,a,o,l,u,f,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ar=new $,cu=new $,uu=new Be;class Gn{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ar.subVectors(i,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ar),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uu.getNormalMatrix(e),r=this.coplanarPoint(ar).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Sa,fu=new Ze(.5,.5),cs=new $;class il{constructor(e=new Gn,t=new Gn,i=new Gn,r=new Gn,s=new Gn,a=new Gn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jt,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],f=s[4],d=s[5],h=s[6],c=s[7],m=s[8],x=s[9],g=s[10],p=s[11],_=s[12],M=s[13],A=s[14],v=s[15];if(r[0].setComponents(u-a,c-f,p-m,v-_).normalize(),r[1].setComponents(u+a,c+f,p+m,v+_).normalize(),r[2].setComponents(u+o,c+d,p+x,v+M).normalize(),r[3].setComponents(u-o,c-d,p-x,v-M).normalize(),i)r[4].setComponents(l,h,g,A).normalize(),r[5].setComponents(u-l,c-h,p-g,v-A).normalize();else if(r[4].setComponents(u-l,c-h,p-g,v-A).normalize(),t===Jt)r[5].setComponents(u+l,c+h,p+g,v+A).normalize();else if(t===Ms)r[5].setComponents(l,h,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=fu.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends St{constructor(e,t,i=$n,r,s,a,o=Nt,l=Nt,u,f=Fi,d=1){if(f!==Fi&&f!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _a(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rl extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Si extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,d=e/o,h=t/l,c=[],m=[],x=[],g=[];for(let p=0;p<f;p++){const _=p*h-a;for(let M=0;M<u;M++){const A=M*d-s;m.push(A,-_,0),x.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const M=_+u*p,A=_+u*(p+1),v=_+1+u*(p+1),y=_+1+u*p;c.push(M,A,y),c.push(A,v,y)}this.setIndex(c),this.setAttribute("position",new qn(m,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}class du extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hu extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class al extends tl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pu extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function to(n,e,t,i){const r=xu(i);switch(t){case Ho:return n*e;case Xo:return n*e/r.components*r.byteLength;case ma:return n*e/r.components*r.byteLength;case xa:return n*e*2/r.components*r.byteLength;case ga:return n*e*2/r.components*r.byteLength;case Wo:return n*e*3/r.components*r.byteLength;case Kt:return n*e*4/r.components*r.byteLength;case va:return n*e*4/r.components*r.byteLength;case ms:case xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gs:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ur:case Nr:return Math.max(n,16)*Math.max(e,8)/4;case Ir:case Fr:return Math.max(n,8)*Math.max(e,8)/2;case Or:case Br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xr:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qr:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jr:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ea:case ta:case na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ia:case sa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ra:case aa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xu(n){switch(n){case gn:case zo:return{byteLength:1,components:1};case Ii:case Vo:case yi:return{byteLength:2,components:1};case ha:case pa:return{byteLength:2,components:4};case $n:case da:case pn:return{byteLength:4,components:1};case ko:case Go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window!="undefined"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ol(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gu(n){const e=new WeakMap;function t(o,l){const u=o.array,f=o.usage,d=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,f),o.onUploadCallback();let c;if(u instanceof Float32Array)c=n.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)c=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?c=n.HALF_FLOAT:c=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=n.SHORT;else if(u instanceof Uint32Array)c=n.UNSIGNED_INT;else if(u instanceof Int32Array)c=n.INT;else if(u instanceof Int8Array)c=n.BYTE;else if(u instanceof Uint8Array)c=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const f=l.array,d=l.updateRanges;if(n.bindBuffer(u,o),d.length===0)n.bufferSubData(u,0,f);else{d.sort((c,m)=>c.start-m.start);let h=0;for(let c=1;c<d.length;c++){const m=d[h],x=d[c];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,d[h]=x)}d.length=h+1;for(let c=0,m=d.length;c<m;c++){const x=d[c];n.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ru=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Du=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$u="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ku=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ff=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,od=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ld=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Td=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Od=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:vu,alphahash_pars_fragment:_u,alphamap_fragment:Su,alphamap_pars_fragment:yu,alphatest_fragment:Mu,alphatest_pars_fragment:bu,aomap_fragment:Eu,aomap_pars_fragment:Tu,batching_pars_vertex:Au,batching_vertex:wu,begin_vertex:Cu,beginnormal_vertex:Ru,bsdfs:Pu,iridescence_fragment:Lu,bumpmap_pars_fragment:Du,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Uu,clipping_planes_pars_vertex:Fu,clipping_planes_vertex:Nu,color_fragment:Ou,color_pars_fragment:Bu,color_pars_vertex:zu,color_vertex:Vu,common:ku,cube_uv_reflection_fragment:Gu,defaultnormal_vertex:Hu,displacementmap_pars_vertex:Wu,displacementmap_vertex:Xu,emissivemap_fragment:Yu,emissivemap_pars_fragment:qu,colorspace_fragment:$u,colorspace_pars_fragment:Ku,envmap_fragment:ju,envmap_common_pars_fragment:Zu,envmap_pars_fragment:Ju,envmap_pars_vertex:Qu,envmap_physical_pars_fragment:ff,envmap_vertex:ef,fog_vertex:tf,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:uf,lights_toon_fragment:df,lights_toon_pars_fragment:hf,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:xf,lights_physical_pars_fragment:gf,lights_fragment_begin:vf,lights_fragment_maps:_f,lights_fragment_end:Sf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Ef,map_fragment:Tf,map_pars_fragment:Af,map_particle_fragment:wf,map_particle_pars_fragment:Cf,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Lf,morphcolor_vertex:Df,morphnormal_vertex:If,morphtarget_pars_vertex:Uf,morphtarget_vertex:Ff,normal_fragment_begin:Nf,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:Vf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:Yf,packing:qf,premultiplied_alpha_fragment:$f,project_vertex:Kf,dithering_fragment:jf,dithering_pars_fragment:Zf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:ed,shadowmap_pars_vertex:td,shadowmap_vertex:nd,shadowmask_pars_fragment:id,skinbase_vertex:sd,skinning_pars_vertex:rd,skinning_vertex:ad,skinnormal_vertex:od,specularmap_fragment:ld,specularmap_pars_fragment:cd,tonemapping_fragment:ud,tonemapping_pars_fragment:fd,transmission_fragment:dd,transmission_pars_fragment:hd,uv_pars_fragment:pd,uv_pars_vertex:md,uv_vertex:xd,worldpos_vertex:gd,background_vert:vd,background_frag:_d,backgroundCube_vert:Sd,backgroundCube_frag:yd,cube_vert:Md,cube_frag:bd,depth_vert:Ed,depth_frag:Td,distanceRGBA_vert:Ad,distanceRGBA_frag:wd,equirect_vert:Cd,equirect_frag:Rd,linedashed_vert:Pd,linedashed_frag:Ld,meshbasic_vert:Dd,meshbasic_frag:Id,meshlambert_vert:Ud,meshlambert_frag:Fd,meshmatcap_vert:Nd,meshmatcap_frag:Od,meshnormal_vert:Bd,meshnormal_frag:zd,meshphong_vert:Vd,meshphong_frag:kd,meshphysical_vert:Gd,meshphysical_frag:Hd,meshtoon_vert:Wd,meshtoon_frag:Xd,points_vert:Yd,points_frag:qd,shadow_vert:$d,shadow_frag:Kd,sprite_vert:jd,sprite_frag:Zd},ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Zt={basic:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bt([ue.common,ue.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bt([ue.lights,ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const us={r:0,b:0,g:0},Vn=new vn,Jd=new pt;function Qd(n,e,t,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,u,f,d=null,h=0,c=null;function m(M){let A=M.isScene===!0?M.background:null;return A&&A.isTexture&&(A=(M.backgroundBlurriness>0?t:e).get(A)),A}function x(M){let A=!1;const v=m(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),A=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,A){const v=m(A);v&&(v.isCubeTexture||v.mapping===Rs)?(f===void 0&&(f=new _n(new ki(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:_i(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(y,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Vn.copy(A.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(Vn)),f.material.toneMapped=Ke.getTransfer(v.colorSpace)!==et,(d!==v||h!==v.version||c!==n.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,c=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new _n(new Si(2,2),new nn({name:"BackgroundMaterial",uniforms:_i(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||c!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,c=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function p(M,A){M.getRGB(us,el(n)),i.buffers.color.setClear(us.r,us.g,us.b,A,a)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),l=A,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:x,addToRenderList:g,dispose:_}}function eh(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,w,C,L,U){let F=!1;const V=d(L,C,w);s!==V&&(s=V,u(s.object)),F=c(S,L,C,U),F&&m(S,L,C,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,A(S,w,C,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function f(S){return n.deleteVertexArray(S)}function d(S,w,C){const L=C.wireframe===!0;let U=i[S.id];U===void 0&&(U={},i[S.id]=U);let F=U[w.id];F===void 0&&(F={},U[w.id]=F);let V=F[L];return V===void 0&&(V=h(l()),F[L]=V),V}function h(S){const w=[],C=[],L=[];for(let U=0;U<t;U++)w[U]=0,C[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:C,attributeDivisors:L,object:S,attributes:{},index:null}}function c(S,w,C,L){const U=s.attributes,F=w.attributes;let V=0;const z=C.getAttributes();for(const N in z)if(z[N].location>=0){const j=U[N];let ce=F[N];if(ce===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function m(S,w,C,L){const U={},F=w.attributes;let V=0;const z=C.getAttributes();for(const N in z)if(z[N].location>=0){let j=F[N];j===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),U[N]=ce,V++}s.attributes=U,s.attributesNum=V,s.index=L}function x(){const S=s.newAttributes;for(let w=0,C=S.length;w<C;w++)S[w]=0}function g(S){p(S,0)}function p(S,w){const C=s.newAttributes,L=s.enabledAttributes,U=s.attributeDivisors;C[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),U[S]!==w&&(n.vertexAttribDivisor(S,w),U[S]=w)}function _(){const S=s.newAttributes,w=s.enabledAttributes;for(let C=0,L=w.length;C<L;C++)w[C]!==S[C]&&(n.disableVertexAttribArray(C),w[C]=0)}function M(S,w,C,L,U,F,V){V===!0?n.vertexAttribIPointer(S,w,C,U,F):n.vertexAttribPointer(S,w,C,L,U,F)}function A(S,w,C,L){x();const U=L.attributes,F=C.getAttributes(),V=w.defaultAttributeValues;for(const z in F){const N=F[z];if(N.location>=0){let X=U[z];if(X===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const j=X.normalized,ce=X.itemSize,Me=e.get(X);if(Me===void 0)continue;const Ue=Me.buffer,Xe=Me.type,He=Me.bytesPerElement,W=Xe===n.INT||Xe===n.UNSIGNED_INT||X.gpuType===da;if(X.isInterleavedBufferAttribute){const J=X.data,re=J.stride,Ce=X.offset;if(J.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)p(N.location+xe,J.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<N.locationSize;xe++)g(N.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let xe=0;xe<N.locationSize;xe++)M(N.location+xe,ce/N.locationSize,Xe,j,re*He,(Ce+ce/N.locationSize*xe)*He,W)}else{if(X.isInstancedBufferAttribute){for(let J=0;J<N.locationSize;J++)p(N.location+J,X.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let J=0;J<N.locationSize;J++)g(N.location+J);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let J=0;J<N.locationSize;J++)M(N.location+J,ce/N.locationSize,Xe,j,ce*He,ce/N.locationSize*J*He,W)}}else if(V!==void 0){const j=V[z];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(N.location,j);break;case 3:n.vertexAttrib3fv(N.location,j);break;case 4:n.vertexAttrib4fv(N.location,j);break;default:n.vertexAttrib1fv(N.location,j)}}}}_()}function v(){T();for(const S in i){const w=i[S];for(const C in w){const L=w[C];for(const U in L)f(L[U].object),delete L[U];delete w[C]}delete i[S]}}function y(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const C in w){const L=w[C];for(const U in L)f(L[U].object),delete L[U];delete w[C]}delete i[S.id]}function E(S){for(const w in i){const C=i[w];if(C[S.id]===void 0)continue;const L=C[S.id];for(const U in L)f(L[U].object),delete L[U];delete C[S.id]}}function T(){b(),a=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:b,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function th(n,e,t){let i;function r(u){i=u}function s(u,f){n.drawArrays(i,u,f),t.update(f,i,1)}function a(u,f,d){d!==0&&(n.drawArraysInstanced(i,u,f,d),t.update(f,i,d))}function o(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let c=0;for(let m=0;m<d;m++)c+=f[m];t.update(c,i,1)}function l(u,f,d,h){if(d===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let m=0;m<u.length;m++)a(u[m],f[m],h[m]);else{c.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let m=0;for(let x=0;x<d;x++)m+=f[x]*h[x];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nh(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==Kt&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const T=E===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==gn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==pn&&!T)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=l(u);f!==u&&(Oe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:v,maxSamples:y}}function ih(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const c=d.length!==0||h||i!==0||r;return r=h,i=d.length,c},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,c){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?f(null):u();else{const _=s?0:i,M=_*4;let A=p.clippingState||null;l.value=A,A=f(m,h,M,c);for(let v=0;v!==M;++v)A[v]=t[v];p.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,c,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=c+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,A=c;M!==x;++M,A+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function sh(n){let e=new WeakMap;function t(a,o){return o===Rr?a.mapping=xi:o===Pr&&(a.mapping=gi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rr||o===Pr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new ru(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Rn=4,no=[.125,.215,.35,.446,.526,.582],Wn=20,rh=256,Pi=new al,io=new tt;let or=null,lr=0,cr=0,ur=!1;const ah=new $;class so{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ah}=s;or=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(or,lr,cr),this._renderer.xr.enabled=ur,e.scissorTest=!1,ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),or=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:yi,format:Kt,colorSpace:vi,depthBuffer:!1},r=ro(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oh(s)),this._blurMaterial=ch(s,e,t),this._ggxMaterial=lh(s,e,t)}return r}_compileMaterial(e){const t=new _n(new In,e);this._renderer.compile(t,Pi)}_sceneToCubeUV(e,t,i,r,s){const l=new qt(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,c=d.toneMapping;d.getClearColor(io),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new ki,new Zo({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,p=!0):(g.color.copy(io),p=!0);for(let M=0;M<6;M++){const A=M%3;A===0?(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):A===1?(l.up.set(0,0,u[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const v=this._cubeSize;ui(r,A*v,M>2?v:0,v,v),d.setRenderTarget(r),p&&d.render(x,l),d.render(e,l)}d.toneMapping=c,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xi||e.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ui(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pi)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-f*f),h=.05+u*.95,c=d*h,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-Rn?i-m+Rn:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=c,l.mipInt.value=m-t,ui(s,g,p,3*x,2*x),r.setRenderTarget(s),r.render(o,Pi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,ui(e,g,p,3*x,2*x),r.setRenderTarget(e),r.render(o,Pi)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,c=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*c):2*Math.PI/(2*Wn-1),x=s/m,g=isFinite(s)?1+Math.floor(f*x):Wn;g>Wn&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wn}`);const p=[];let _=0;for(let E=0;E<Wn;++E){const T=E/x,b=Math.exp(-T*T/2);p.push(b),E===0?_+=b:E<g&&(_+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=m,h.mipInt.value=M-i;const A=this._sizeLods[r],v=3*A*(r>M-Rn?r-M+Rn:0),y=4*(this._cubeSize-A);ui(t,v,y,3*A,2*A),l.setRenderTarget(t),l.render(d,Pi)}}function oh(n){const e=[],t=[],i=[];let r=n;const s=n-Rn+1+no.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Rn?l=no[a-n+Rn-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],c=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*c),M=new Float32Array(g*m*c),A=new Float32Array(p*m*c);for(let y=0;y<c;y++){const E=y%3*2/3-1,T=y>2?0:-1,b=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(b,x*m*y),M.set(h,g*m*y);const S=[y,y,y,y,y,y];A.set(S,p*m*y)}const v=new In;v.setAttribute("position",new en(_,x)),v.setAttribute("uv",new en(M,g)),v.setAttribute("faceIndex",new en(A,p)),i.push(new _n(v,null)),r>Rn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ro(n,e,t){const i=new Kn(n,e,t);return i.texture.mapping=Rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ui(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lh(n,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ch(n,e,t){const i=new Float32Array(Wn),r=new $(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ao(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function oo(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ls(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uh(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Rr||l===Pr,f=l===xi||l===gi;if(u||f){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new so(n)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const c=o.image;return u&&c&&c.height>0||f&&c&&r(c)?(t===null&&(t=new so(n)),d=u?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Oi("WebGLRenderer: "+i+" extension not supported."),r}}}function dh(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const c in h)e.update(h[c],n.ARRAY_BUFFER)}function u(d){const h=[],c=d.index,m=d.attributes.position;let x=0;if(c!==null){const _=c.array;x=c.version;for(let M=0,A=_.length;M<A;M+=3){const v=_[M+0],y=_[M+1],E=_[M+2];h.push(v,y,y,E,E,v)}}else if(m!==void 0){const _=m.array;x=m.version;for(let M=0,A=_.length/3-1;M<A;M+=3){const v=M+0,y=M+1,E=M+2;h.push(v,y,y,E,E,v)}}else return;const g=new(qo(h)?Qo:Jo)(h,1);g.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function f(d){const h=s.get(d);if(h){const c=d.index;c!==null&&h.version<c.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function hh(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,c){n.drawElements(i,c,s,h*a),t.update(c,i,1)}function u(h,c,m){m!==0&&(n.drawElementsInstanced(i,c,s,h*a,m),t.update(c,i,m))}function f(h,c,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,c,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=c[p];t.update(g,i,1)}function d(h,c,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)u(h[p]/a,c[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,c,0,s,h,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=c[_]*x[_];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function ph(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mh(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let b=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const c=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;c===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let A=o.attributes.position.count*M,v=1;A>e.maxTextureSize&&(v=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const y=new Float32Array(A*v*4*d),E=new $o(y,A,v,d);E.type=pn,E.needsUpdate=!0;const T=M*4;for(let S=0;S<d;S++){const w=g[S],C=p[S],L=_[S],U=A*v*4*S;for(let F=0;F<w.count;F++){const V=F*T;c===!0&&(r.fromBufferAttribute(w,F),y[U+V+0]=r.x,y[U+V+1]=r.y,y[U+V+2]=r.z,y[U+V+3]=0),m===!0&&(r.fromBufferAttribute(C,F),y[U+V+4]=r.x,y[U+V+5]=r.y,y[U+V+6]=r.z,y[U+V+7]=0),x===!0&&(r.fromBufferAttribute(L,F),y[U+V+8]=r.x,y[U+V+9]=r.y,y[U+V+10]=r.z,y[U+V+11]=L.itemSize===4?r.w:1)}}h={count:d,texture:E,size:new Ze(A,v)},i.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let c=0;for(let x=0;x<u.length;x++)c+=u[x];const m=o.morphTargetsRelative?1:1-c;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function xh(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}const ll=new St,lo=new sl(1,1),cl=new $o,ul=new kc,fl=new nl,co=[],uo=[],fo=new Float32Array(16),ho=new Float32Array(9),po=new Float32Array(4);function bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=co[r];if(s===void 0&&(s=new Float32Array(r),co[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ds(n,e){let t=uo[e];t===void 0&&(t=new Int32Array(e),uo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function _h(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function Sh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function yh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(mt(t,i))return;po.set(i),n.uniformMatrix2fv(this.addr,!1,po),xt(t,i)}}function Mh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(mt(t,i))return;ho.set(i),n.uniformMatrix3fv(this.addr,!1,ho),xt(t,i)}}function bh(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(mt(t,i))return;fo.set(i),n.uniformMatrix4fv(this.addr,!1,fo),xt(t,i)}}function Eh(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Th(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function Ah(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function wh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function Ch(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function Ph(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function Lh(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function Dh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lo.compareFunction=Yo,s=lo):s=ll,t.setTexture2D(e||s,r)}function Ih(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ul,r)}function Uh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fl,r)}function Fh(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||cl,r)}function Nh(n){switch(n){case 5126:return gh;case 35664:return vh;case 35665:return _h;case 35666:return Sh;case 35674:return yh;case 35675:return Mh;case 35676:return bh;case 5124:case 35670:return Eh;case 35667:case 35671:return Th;case 35668:case 35672:return Ah;case 35669:case 35673:return wh;case 5125:return Ch;case 36294:return Rh;case 36295:return Ph;case 36296:return Lh;case 35678:case 36198:case 36298:case 36306:case 35682:return Dh;case 35679:case 36299:case 36307:return Ih;case 35680:case 36300:case 36308:case 36293:return Uh;case 36289:case 36303:case 36311:case 36292:return Fh}}function Oh(n,e){n.uniform1fv(this.addr,e)}function Bh(n,e){const t=bi(e,this.size,2);n.uniform2fv(this.addr,t)}function zh(n,e){const t=bi(e,this.size,3);n.uniform3fv(this.addr,t)}function Vh(n,e){const t=bi(e,this.size,4);n.uniform4fv(this.addr,t)}function kh(n,e){const t=bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gh(n,e){const t=bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hh(n,e){const t=bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wh(n,e){n.uniform1iv(this.addr,e)}function Xh(n,e){n.uniform2iv(this.addr,e)}function Yh(n,e){n.uniform3iv(this.addr,e)}function qh(n,e){n.uniform4iv(this.addr,e)}function $h(n,e){n.uniform1uiv(this.addr,e)}function Kh(n,e){n.uniform2uiv(this.addr,e)}function jh(n,e){n.uniform3uiv(this.addr,e)}function Zh(n,e){n.uniform4uiv(this.addr,e)}function Jh(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ll,s[a])}function Qh(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ul,s[a])}function ep(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fl,s[a])}function tp(n,e,t){const i=this.cache,r=e.length,s=Ds(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||cl,s[a])}function np(n){switch(n){case 5126:return Oh;case 35664:return Bh;case 35665:return zh;case 35666:return Vh;case 35674:return kh;case 35675:return Gh;case 35676:return Hh;case 5124:case 35670:return Wh;case 35667:case 35671:return Xh;case 35668:case 35672:return Yh;case 35669:case 35673:return qh;case 5125:return $h;case 36294:return Kh;case 36295:return jh;case 36296:return Zh;case 35678:case 36198:case 36298:case 36306:case 35682:return Jh;case 35679:case 36299:case 36307:return Qh;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}class ip{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nh(t.type)}}class sp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=np(t.type)}}class rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function mo(n,e){n.seq.push(e),n.map[e.id]=e}function ap(n,e,t){const i=n.name,r=i.length;for(fr.lastIndex=0;;){const s=fr.exec(i),a=fr.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){mo(t,u===void 0?new ip(o,n,e):new sp(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new rp(o),mo(t,d)),t=d}}}class _s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ap(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const op=37297;let lp=0;function cp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const go=new Be;function up(n){Ke._getMatrix(go,Ke.workingColorSpace,n);const e=`mat3( ${go.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case ys:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+cp(n.getShaderSource(e),o)}else return s}function fp(n,e){const t=up(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dp(n,e){let t;switch(e){case pc:t="Linear";break;case mc:t="Reinhard";break;case xc:t="Cineon";break;case gc:t="ACESFilmic";break;case _c:t="AgX";break;case Sc:t="Neutral";break;case vc:t="Custom";break;default:Oe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new $;function hp(){Ke.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function mp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Di(n){return n!==""}function _o(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function So(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(n){return n.replace(gp,_p)}const vp=new Map;function _p(n,e){let t=ze[e];if(t===void 0){const i=vp.get(e);if(i!==void 0)t=ze[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const Sp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(n){return n.replace(Sp,yp)}function yp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mo(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===No?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function bp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xi:case gi:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ep(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Tp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case dc:e="ENVMAP_BLENDING_MIX";break;case hc:e="ENVMAP_BLENDING_ADD";break}return e}function Ap(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mp(t),u=bp(t),f=Ep(t),d=Tp(t),h=Ap(t),c=pp(t),m=mp(s),x=r.createProgram();let g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Di).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Di).join(`
`),p.length>0&&(p+=`
`)):(g=[Mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),p=[Mo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ln?dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,fp("linearToOutputTexel",t.outputColorSpace),hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),a=la(a),a=_o(a,t),a=So(a,t),o=la(o),o=_o(o,t),o=So(o,t),a=yo(a),o=yo(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Na?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Na?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+g+a,A=_+p+o,v=xo(r,r.VERTEX_SHADER,M),y=xo(r,r.FRAGMENT_SHADER,A);r.attachShader(x,v),r.attachShader(x,y),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(w){if(n.debug.checkShaderErrors){const C=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(v)||"",U=r.getShaderInfoLog(y)||"",F=C.trim(),V=L.trim(),z=U.trim();let N=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,v,y);else{const j=vo(r,v,"vertex"),ce=vo(r,y,"fragment");ut("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+j+`
`+ce)}else F!==""?Oe("WebGLProgram: Program Info Log:",F):(V===""||z==="")&&(X=!1);X&&(w.diagnostics={runnable:N,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:z,prefix:p}})}r.deleteShader(v),r.deleteShader(y),T=new _s(r,x),b=xp(r,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,op)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=y,this}let Cp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pp(e),t.set(e,i)),i}}class Pp{constructor(e){this.id=Cp++,this.code=e,this.usedTimes=0}}function Lp(n,e,t,i,r,s,a){const o=new Ko,l=new Rp,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let c=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return u.add(b),b===0?"uv":`uv${b}`}function g(b,S,w,C,L){const U=C.fog,F=L.geometry,V=b.isMeshStandardMaterial?C.environment:null,z=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),N=!!z&&z.mapping===Rs?z.image.height:null,X=m[b.type];b.precision!==null&&(c=r.getMaxPrecision(b.precision),c!==b.precision&&Oe("WebGLProgram.getParameters:",b.precision,"not supported, using",c,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=j!==void 0?j.length:0;let Me=0;F.morphAttributes.position!==void 0&&(Me=1),F.morphAttributes.normal!==void 0&&(Me=2),F.morphAttributes.color!==void 0&&(Me=3);let Ue,Xe,He,W;if(X){const Je=Zt[X];Ue=Je.vertexShader,Xe=Je.fragmentShader}else Ue=b.vertexShader,Xe=b.fragmentShader,l.update(b),He=l.getVertexShaderID(b),W=l.getFragmentShaderID(b);const J=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Pe=!!b.map,qe=!!b.matcap,Ve=!!z,it=!!b.aoMap,O=!!b.lightMap,ke=!!b.bumpMap,Ge=!!b.normalMap,je=!!b.displacementMap,de=!!b.emissiveMap,st=!!b.metalnessMap,ye=!!b.roughnessMap,De=b.anisotropy>0,D=b.clearcoat>0,R=b.dispersion>0,H=b.iridescence>0,Z=b.sheen>0,ee=b.transmission>0,K=De&&!!b.anisotropyMap,_e=D&&!!b.clearcoatMap,ae=D&&!!b.clearcoatNormalMap,Ee=D&&!!b.clearcoatRoughnessMap,Se=H&&!!b.iridescenceMap,te=H&&!!b.iridescenceThicknessMap,se=Z&&!!b.sheenColorMap,Re=Z&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,pe=!!b.specularColorMap,Ie=!!b.specularIntensityMap,B=ee&&!!b.transmissionMap,fe=ee&&!!b.thicknessMap,oe=!!b.gradientMap,le=!!b.alphaMap,ne=b.alphaTest>0,Q=!!b.alphaHash,ge=!!b.extensions;let Fe=Ln;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const rt={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:Xe,defines:b.defines,customVertexShaderID:He,customFragmentShaderID:W,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:c,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vi,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:qe,envMap:Ve,envMapMode:Ve&&z.mapping,envMapCubeUVHeight:N,aoMap:it,lightMap:O,bumpMap:ke,normalMap:Ge,displacementMap:h&&je,emissiveMap:de,normalMapObjectSpace:Ge&&b.normalMapType===Tc,normalMapTangentSpace:Ge&&b.normalMapType===Ec,metalnessMap:st,roughnessMap:ye,anisotropy:De,anisotropyMap:K,clearcoat:D,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:R,iridescence:H,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:se,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:pe,specularIntensityMap:Ie,transmission:ee,transmissionMap:B,thicknessMap:fe,gradientMap:oe,opaque:b.transparent===!1&&b.blending===hi&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:ne,alphaHash:Q,combine:b.combine,mapUv:Pe&&x(b.map.channel),aoMapUv:it&&x(b.aoMap.channel),lightMapUv:O&&x(b.lightMap.channel),bumpMapUv:ke&&x(b.bumpMap.channel),normalMapUv:Ge&&x(b.normalMap.channel),displacementMapUv:je&&x(b.displacementMap.channel),emissiveMapUv:de&&x(b.emissiveMap.channel),metalnessMapUv:st&&x(b.metalnessMap.channel),roughnessMapUv:ye&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:_e&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:se&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(b.sheenRoughnessMap.channel),specularMapUv:Ae&&x(b.specularMap.channel),specularColorMapUv:pe&&x(b.specularColorMap.channel),specularIntensityMapUv:Ie&&x(b.specularIntensityMap.channel),transmissionMapUv:B&&x(b.transmissionMap.channel),thicknessMapUv:fe&&x(b.thicknessMap.channel),alphaMapUv:le&&x(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ge||De),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Pe||le),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===et,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Rt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return rt.vertexUv1s=u.has(1),rt.vertexUv2s=u.has(2),rt.vertexUv3s=u.has(3),u.clear(),rt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const w in b.defines)S.push(w),S.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const S=m[b.type];let w;if(S){const C=Zt[S];w=tu.clone(C.uniforms)}else w=b.uniforms;return w}function v(b,S){let w;for(let C=0,L=f.length;C<L;C++){const U=f[C];if(U.cacheKey===S){w=U,++w.usedTimes;break}}return w===void 0&&(w=new wp(n,S,b,s),f.push(w)),w}function y(b){if(--b.usedTimes===0){const S=f.indexOf(b);f[S]=f[f.length-1],f.pop(),b.destroy()}}function E(b){l.remove(b)}function T(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:y,releaseShaderCache:E,programs:f,dispose:T}}function Dp(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ip(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Eo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,c,m,x,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:c,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=c,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),e++,p}function o(d,h,c,m,x,g){const p=a(d,h,c,m,x,g);c.transmission>0?i.push(p):c.transparent===!0?r.push(p):t.push(p)}function l(d,h,c,m,x,g){const p=a(d,h,c,m,x,g);c.transmission>0?i.unshift(p):c.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,h){t.length>1&&t.sort(d||Ip),i.length>1&&i.sort(h||bo),r.length>1&&r.sort(h||bo)}function f(){for(let d=e,h=n.length;d<h;d++){const c=n[d];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function Up(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Eo,n.set(i,[a])):r>=s.length?(a=new Eo,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new tt};break;case"SpotLight":t={position:new $,direction:new $,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function Np(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Op=0;function Bp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zp(n){const e=new Fp,t=Np(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new pt,a=new pt;function o(u){let f=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let c=0,m=0,x=0,g=0,p=0,_=0,M=0,A=0,v=0,y=0,E=0;u.sort(Bp);for(let b=0,S=u.length;b<S;b++){const w=u[b],C=w.color,L=w.intensity,U=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=C.r*L,d+=C.g*L,h+=C.b*L;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],L);E++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,N=t.get(w);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[c]=N,i.directionalShadowMap[c]=F,i.directionalShadowMatrix[c]=w.shadow.matrix,_++}i.directional[c]=V,c++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(C).multiplyScalar(L),V.distance=U,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[x]=V;const z=w.shadow;if(w.map&&(i.spotLightMap[v]=w.map,v++,z.updateMatrices(w),w.castShadow&&y++),i.spotLightMatrix[x]=z.matrix,w.castShadow){const N=t.get(w);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=F,A++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(C).multiplyScalar(L),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const z=w.shadow,N=t.get(w);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=w.shadow.matrix,M++}i.point[m]=V,m++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(L),V.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==c||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==g||T.hemiLength!==p||T.numDirectionalShadows!==_||T.numPointShadows!==M||T.numSpotShadows!==A||T.numSpotMaps!==v||T.numLightProbes!==E)&&(i.directional.length=c,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=E,T.directionalLength=c,T.pointLength=m,T.spotLength=x,T.rectAreaLength=g,T.hemiLength=p,T.numDirectionalShadows=_,T.numPointShadows=M,T.numSpotShadows=A,T.numSpotMaps=v,T.numLightProbes=E,i.version=Op++)}function l(u,f){let d=0,h=0,c=0,m=0,x=0;const g=f.matrixWorldInverse;for(let p=0,_=u.length;p<_;p++){const M=u[p];if(M.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),d++}else if(M.isSpotLight){const A=i.spot[c];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),c++}else if(M.isRectAreaLight){const A=i.rectArea[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function To(n){const e=new zp(n),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Vp(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new To(n),e.set(r,[o])):s>=a.length?(o=new To(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hp(n,e,t){let i=new il;const r=new Ze,s=new Ze,a=new ft,o=new du({depthPacking:bc}),l=new hu,u={},f=t.maxTextureSize,d={[Dn]:Rt,[Rt]:Dn,[dn]:dn},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:kp,fragmentShader:Gp}),c=h.clone();c.defines.HORIZONTAL_PASS=1;const m=new In;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _n(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let p=this.type;this.render=function(y,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),C=n.state;C.setBlending(mn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=p!==fn&&this.type===fn,U=p===fn&&this.type!==fn;for(let F=0,V=y.length;F<V;F++){const z=y[F],N=z.shadow;if(N===void 0){Oe("WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null||L===!0||U===!0){const ce=this.type!==fn?{minFilter:Nt,magFilter:Nt}:{};N.map!==null&&N.map.dispose(),N.map=new Kn(r.x,r.y,ce),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const j=N.getViewportCount();for(let ce=0;ce<j;ce++){const Me=N.getViewport(ce);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),C.viewport(a),N.updateMatrices(z,ce),i=N.getFrustum(),A(E,T,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===fn&&_(N,T),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,S,w)};function _(y,E){const T=e.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,c.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,c.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Kn(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,T,h,x,null),c.uniforms.shadow_pass.value=y.mapPass.texture,c.uniforms.resolution.value=y.mapSize,c.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,T,c,x,null)}function M(y,E,T,b){let S=null;const w=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)S=w;else if(S=T.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const C=S.uuid,L=E.uuid;let U=u[C];U===void 0&&(U={},u[C]=U);let F=U[L];F===void 0&&(F=S.clone(),U[L]=F,E.addEventListener("dispose",v)),S=F}if(S.visible=E.visible,S.wireframe=E.wireframe,b===fn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=n.properties.get(S);C.light=T}return S}function A(y,E,T,b,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===fn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const L=e.update(y),U=y.material;if(Array.isArray(U)){const F=L.groups;for(let V=0,z=F.length;V<z;V++){const N=F[V],X=U[N.materialIndex];if(X&&X.visible){const j=M(y,X,b,S);y.onBeforeShadow(n,y,E,T,L,j,N),n.renderBufferDirect(T,null,L,j,y,N),y.onAfterShadow(n,y,E,T,L,j,N)}}}else if(U.visible){const F=M(y,U,b,S);y.onBeforeShadow(n,y,E,T,L,F,null),n.renderBufferDirect(T,null,L,F,y,null),y.onAfterShadow(n,y,E,T,L,F,null)}}const C=y.children;for(let L=0,U=C.length;L<U;L++)A(C[L],E,T,b,S)}function v(y){y.target.removeEventListener("dispose",v);for(const T in u){const b=u[T],S=y.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Wp={[Mr]:br,[Er]:wr,[Tr]:Cr,[mi]:Ar,[br]:Mr,[wr]:Er,[Cr]:Tr,[Ar]:mi};function Xp(n,e){function t(){let B=!1;const fe=new ft;let oe=null;const le=new ft(0,0,0,0);return{setMask:function(ne){oe!==ne&&!B&&(n.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){B=ne},setClear:function(ne,Q,ge,Fe,rt){rt===!0&&(ne*=Fe,Q*=Fe,ge*=Fe),fe.set(ne,Q,ge,Fe),le.equals(fe)===!1&&(n.clearColor(ne,Q,ge,Fe),le.copy(fe))},reset:function(){B=!1,oe=null,le.set(-1,0,0,0)}}}function i(){let B=!1,fe=!1,oe=null,le=null,ne=null;return{setReversed:function(Q){if(fe!==Q){const ge=e.get("EXT_clip_control");Q?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),fe=Q;const Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return fe},setTest:function(Q){Q?J(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Q){oe!==Q&&!B&&(n.depthMask(Q),oe=Q)},setFunc:function(Q){if(fe&&(Q=Wp[Q]),le!==Q){switch(Q){case Mr:n.depthFunc(n.NEVER);break;case br:n.depthFunc(n.ALWAYS);break;case Er:n.depthFunc(n.LESS);break;case mi:n.depthFunc(n.LEQUAL);break;case Tr:n.depthFunc(n.EQUAL);break;case Ar:n.depthFunc(n.GEQUAL);break;case wr:n.depthFunc(n.GREATER);break;case Cr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Q}},setLocked:function(Q){B=Q},setClear:function(Q){ne!==Q&&(fe&&(Q=1-Q),n.clearDepth(Q),ne=Q)},reset:function(){B=!1,oe=null,le=null,ne=null,fe=!1}}}function r(){let B=!1,fe=null,oe=null,le=null,ne=null,Q=null,ge=null,Fe=null,rt=null;return{setTest:function(Je){B||(Je?J(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(Je){fe!==Je&&!B&&(n.stencilMask(Je),fe=Je)},setFunc:function(Je,jt,Ht){(oe!==Je||le!==jt||ne!==Ht)&&(n.stencilFunc(Je,jt,Ht),oe=Je,le=jt,ne=Ht)},setOp:function(Je,jt,Ht){(Q!==Je||ge!==jt||Fe!==Ht)&&(n.stencilOp(Je,jt,Ht),Q=Je,ge=jt,Fe=Ht)},setLocked:function(Je){B=Je},setClear:function(Je){rt!==Je&&(n.clearStencil(Je),rt=Je)},reset:function(){B=!1,fe=null,oe=null,le=null,ne=null,Q=null,ge=null,Fe=null,rt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let f={},d={},h=new WeakMap,c=[],m=null,x=!1,g=null,p=null,_=null,M=null,A=null,v=null,y=null,E=new tt(0,0,0),T=0,b=!1,S=null,w=null,C=null,L=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=z>=2);let X=null,j={};const ce=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),Ue=new ft().fromArray(ce),Xe=new ft().fromArray(Me);function He(B,fe,oe,le){const ne=new Uint8Array(4),Q=n.createTexture();n.bindTexture(B,Q),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<oe;ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(fe+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return Q}const W={};W[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(mi),ke(!1),Ge(Pa),J(n.CULL_FACE),it(mn);function J(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function re(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function Ce(B,fe){return d[B]!==fe?(n.bindFramebuffer(B,fe),d[B]=fe,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function xe(B,fe){let oe=c,le=!1;if(B){oe=h.get(fe),oe===void 0&&(oe=[],h.set(fe,oe));const ne=B.textures;if(oe.length!==ne.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,ge=ne.length;Q<ge;Q++)oe[Q]=n.COLOR_ATTACHMENT0+Q;oe.length=ne.length,le=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,le=!0);le&&n.drawBuffers(oe)}function Pe(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const qe={[Hn]:n.FUNC_ADD,[Kl]:n.FUNC_SUBTRACT,[jl]:n.FUNC_REVERSE_SUBTRACT};qe[Zl]=n.MIN,qe[Jl]=n.MAX;const Ve={[Ql]:n.ZERO,[ec]:n.ONE,[tc]:n.SRC_COLOR,[Sr]:n.SRC_ALPHA,[oc]:n.SRC_ALPHA_SATURATE,[rc]:n.DST_COLOR,[ic]:n.DST_ALPHA,[nc]:n.ONE_MINUS_SRC_COLOR,[yr]:n.ONE_MINUS_SRC_ALPHA,[ac]:n.ONE_MINUS_DST_COLOR,[sc]:n.ONE_MINUS_DST_ALPHA,[lc]:n.CONSTANT_COLOR,[cc]:n.ONE_MINUS_CONSTANT_COLOR,[uc]:n.CONSTANT_ALPHA,[fc]:n.ONE_MINUS_CONSTANT_ALPHA};function it(B,fe,oe,le,ne,Q,ge,Fe,rt,Je){if(B===mn){x===!0&&(re(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),B!==$l){if(B!==g||Je!==b){if((p!==Hn||A!==Hn)&&(n.blendEquation(n.FUNC_ADD),p=Hn,A=Hn),Je)switch(B){case hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.ONE,n.ONE);break;case Da:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ia:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ut("WebGLState: Invalid blending: ",B);break}else switch(B){case hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Da:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ia:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",B);break}_=null,M=null,v=null,y=null,E.set(0,0,0),T=0,g=B,b=Je}return}ne=ne||fe,Q=Q||oe,ge=ge||le,(fe!==p||ne!==A)&&(n.blendEquationSeparate(qe[fe],qe[ne]),p=fe,A=ne),(oe!==_||le!==M||Q!==v||ge!==y)&&(n.blendFuncSeparate(Ve[oe],Ve[le],Ve[Q],Ve[ge]),_=oe,M=le,v=Q,y=ge),(Fe.equals(E)===!1||rt!==T)&&(n.blendColor(Fe.r,Fe.g,Fe.b,rt),E.copy(Fe),T=rt),g=B,b=!1}function O(B,fe){B.side===dn?re(n.CULL_FACE):J(n.CULL_FACE);let oe=B.side===Rt;fe&&(oe=!oe),ke(oe),B.blending===hi&&B.transparent===!1?it(mn):it(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const le=B.stencilWrite;o.setTest(le),le&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),de(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(B){S!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),S=B)}function Ge(B){B!==Xl?(J(n.CULL_FACE),B!==w&&(B===Pa?n.cullFace(n.BACK):B===Yl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),w=B}function je(B){B!==C&&(V&&n.lineWidth(B),C=B)}function de(B,fe,oe){B?(J(n.POLYGON_OFFSET_FILL),(L!==fe||U!==oe)&&(n.polygonOffset(fe,oe),L=fe,U=oe)):re(n.POLYGON_OFFSET_FILL)}function st(B){B?J(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function ye(B){B===void 0&&(B=n.TEXTURE0+F-1),X!==B&&(n.activeTexture(B),X=B)}function De(B,fe,oe){oe===void 0&&(X===null?oe=n.TEXTURE0+F-1:oe=X);let le=j[oe];le===void 0&&(le={type:void 0,texture:void 0},j[oe]=le),(le.type!==B||le.texture!==fe)&&(X!==oe&&(n.activeTexture(oe),X=oe),n.bindTexture(B,fe||W[B]),le.type=B,le.texture=fe)}function D(){const B=j[X];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{n.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Z(){try{n.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function ee(){try{n.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function _e(){try{n.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function ae(){try{n.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Ee(){try{n.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Se(){try{n.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function te(){try{n.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function se(B){Ue.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ue.copy(B))}function Re(B){Xe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function Ae(B,fe){let oe=u.get(fe);oe===void 0&&(oe=new WeakMap,u.set(fe,oe));let le=oe.get(B);le===void 0&&(le=n.getUniformBlockIndex(fe,B.name),oe.set(B,le))}function pe(B,fe){const le=u.get(fe).get(B);l.get(fe)!==le&&(n.uniformBlockBinding(fe,le,B.__bindingPointIndex),l.set(fe,le))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},X=null,j={},d={},h=new WeakMap,c=[],m=null,x=!1,g=null,p=null,_=null,M=null,A=null,v=null,y=null,E=new tt(0,0,0),T=0,b=!1,S=null,w=null,C=null,L=null,U=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:re,bindFramebuffer:Ce,drawBuffers:xe,useProgram:Pe,setBlending:it,setMaterial:O,setFlipSided:ke,setCullFace:Ge,setLineWidth:je,setPolygonOffset:de,setScissorTest:st,activeTexture:ye,bindTexture:De,unbindTexture:D,compressedTexImage2D:R,compressedTexImage3D:H,texImage2D:Se,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:_e,scissor:se,viewport:Re,reset:Ie}}function Yp(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,f=new WeakMap;let d;const h=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,R){return c?new OffscreenCanvas(D,R):bs("canvas")}function x(D,R,H){let Z=1;const ee=De(D);if((ee.width>H||ee.height>H)&&(Z=H/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){const K=Math.floor(Z*ee.width),_e=Math.floor(Z*ee.height);d===void 0&&(d=m(K,_e));const ae=R?m(K,_e):d;return ae.width=K,ae.height=_e,ae.getContext("2d").drawImage(D,0,0,K,_e),Oe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+_e+")."),ae}else return"data"in D&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(D,R,H,Z,ee=!1){if(D!==null){if(n[D]!==void 0)return n[D];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let K=R;if(R===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),R===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),R===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),R===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),R===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),R===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),R===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),R===n.RGBA){const _e=ee?ys:Ke.getTransfer(Z);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=_e===et?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(D,R){let H;return D?R===null||R===$n||R===Ui?H=n.DEPTH24_STENCIL8:R===pn?H=n.DEPTH32F_STENCIL8:R===Ii&&(H=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===$n||R===Ui?H=n.DEPTH_COMPONENT24:R===pn?H=n.DEPTH_COMPONENT32F:R===Ii&&(H=n.DEPTH_COMPONENT16),H}function v(D,R){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nt&&D.minFilter!==Gt?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function y(D){const R=D.target;R.removeEventListener("dispose",y),T(R),R.isVideoTexture&&f.delete(R)}function E(D){const R=D.target;R.removeEventListener("dispose",E),S(R)}function T(D){const R=i.get(D);if(R.__webglInit===void 0)return;const H=D.source,Z=h.get(H);if(Z){const ee=Z[R.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(D),Object.keys(Z).length===0&&h.delete(H)}i.remove(D)}function b(D){const R=i.get(D);n.deleteTexture(R.__webglTexture);const H=D.source,Z=h.get(H);delete Z[R.__cacheKey],a.memory.textures--}function S(D){const R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let ee=0;ee<R.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(R.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)n.deleteFramebuffer(R.__webglFramebuffer[Z]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const H=D.textures;for(let Z=0,ee=H.length;Z<ee;Z++){const K=i.get(H[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(H[Z])}i.remove(D)}let w=0;function C(){w=0}function L(){const D=w;return D>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),w+=1,D}function U(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function F(D,R){const H=i.get(D);if(D.isVideoTexture&&st(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const Z=D.image;if(Z===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,D,R);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+R)}function V(D,R){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){W(H,D,R);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+R)}function z(D,R){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){W(H,D,R);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+R)}function N(D,R){const H=i.get(D);if(D.version>0&&H.__version!==D.version){J(H,D,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+R)}const X={[Lr]:n.REPEAT,[hn]:n.CLAMP_TO_EDGE,[Dr]:n.MIRRORED_REPEAT},j={[Nt]:n.NEAREST,[yc]:n.NEAREST_MIPMAP_NEAREST,[Xi]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Ns]:n.LINEAR_MIPMAP_NEAREST,[Xn]:n.LINEAR_MIPMAP_LINEAR},ce={[Ac]:n.NEVER,[Dc]:n.ALWAYS,[wc]:n.LESS,[Yo]:n.LEQUAL,[Cc]:n.EQUAL,[Lc]:n.GEQUAL,[Rc]:n.GREATER,[Pc]:n.NOTEQUAL};function Me(D,R){if(R.type===pn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Gt||R.magFilter===Ns||R.magFilter===Xi||R.magFilter===Xn||R.minFilter===Gt||R.minFilter===Ns||R.minFilter===Xi||R.minFilter===Xn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,X[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,X[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,X[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,j[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,j[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ce[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Nt||R.minFilter!==Xi&&R.minFilter!==Xn||R.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Ue(D,R){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",y));const Z=R.source;let ee=h.get(Z);ee===void 0&&(ee={},h.set(Z,ee));const K=U(R);if(K!==D.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[K].usedTimes++;const _e=ee[D.__cacheKey];_e!==void 0&&(ee[D.__cacheKey].usedTimes--,_e.usedTimes===0&&b(R)),D.__cacheKey=K,D.__webglTexture=ee[K].texture}return H}function Xe(D,R,H){return Math.floor(Math.floor(D/H)/R)}function He(D,R,H,Z){const K=D.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,H,Z,R.data);else{K.sort((te,se)=>te.start-se.start);let _e=0;for(let te=1;te<K.length;te++){const se=K[_e],Re=K[te],Ae=se.start+se.count,pe=Xe(Re.start,R.width,4),Ie=Xe(se.start,R.width,4);Re.start<=Ae+1&&pe===Ie&&Xe(Re.start+Re.count-1,R.width,4)===pe?se.count=Math.max(se.count,Re.start+Re.count-se.start):(++_e,K[_e]=Re)}K.length=_e+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Se=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let te=0,se=K.length;te<se;te++){const Re=K[te],Ae=Math.floor(Re.start/4),pe=Math.ceil(Re.count/4),Ie=Ae%R.width,B=Math.floor(Ae/R.width),fe=pe,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ie,B,fe,oe,H,Z,R.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function W(D,R,H){let Z=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=n.TEXTURE_3D);const ee=Ue(D,R),K=R.source;t.bindTexture(Z,D.__webglTexture,n.TEXTURE0+H);const _e=i.get(K);if(K.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);const ae=Ke.getPrimaries(Ke.workingColorSpace),Ee=R.colorSpace===Cn?null:Ke.getPrimaries(R.colorSpace),Se=R.colorSpace===Cn||ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=x(R.image,!1,r.maxTextureSize);te=ye(R,te);const se=s.convert(R.format,R.colorSpace),Re=s.convert(R.type);let Ae=M(R.internalFormat,se,Re,R.colorSpace,R.isVideoTexture);Me(Z,R);let pe;const Ie=R.mipmaps,B=R.isVideoTexture!==!0,fe=_e.__version===void 0||ee===!0,oe=K.dataReady,le=v(R,te);if(R.isDepthTexture)Ae=A(R.format===Ni,R.type),fe&&(B?t.texStorage2D(n.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ae,te.width,te.height,0,se,Re,null));else if(R.isDataTexture)if(Ie.length>0){B&&fe&&t.texStorage2D(n.TEXTURE_2D,le,Ae,Ie[0].width,Ie[0].height);for(let ne=0,Q=Ie.length;ne<Q;ne++)pe=Ie[ne],B?oe&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,Re,pe.data):t.texImage2D(n.TEXTURE_2D,ne,Ae,pe.width,pe.height,0,se,Re,pe.data);R.generateMipmaps=!1}else B?(fe&&t.texStorage2D(n.TEXTURE_2D,le,Ae,te.width,te.height),oe&&He(R,te,se,Re)):t.texImage2D(n.TEXTURE_2D,0,Ae,te.width,te.height,0,se,Re,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ae,Ie[0].width,Ie[0].height,te.depth);for(let ne=0,Q=Ie.length;ne<Q;ne++)if(pe=Ie[ne],R.format!==Kt)if(se!==null)if(B){if(oe)if(R.layerUpdates.size>0){const ge=to(pe.width,pe.height,R.format,R.type);for(const Fe of R.layerUpdates){const rt=pe.data.subarray(Fe*ge/pe.data.BYTES_PER_ELEMENT,(Fe+1)*ge/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Fe,pe.width,pe.height,1,se,rt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ae,pe.width,pe.height,te.depth,0,pe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,Re,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ae,pe.width,pe.height,te.depth,0,se,Re,pe.data)}else{B&&fe&&t.texStorage2D(n.TEXTURE_2D,le,Ae,Ie[0].width,Ie[0].height);for(let ne=0,Q=Ie.length;ne<Q;ne++)pe=Ie[ne],R.format!==Kt?se!==null?B?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ae,pe.width,pe.height,0,pe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?oe&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,Re,pe.data):t.texImage2D(n.TEXTURE_2D,ne,Ae,pe.width,pe.height,0,se,Re,pe.data)}else if(R.isDataArrayTexture)if(B){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Ae,te.width,te.height,te.depth),oe)if(R.layerUpdates.size>0){const ne=to(te.width,te.height,R.format,R.type);for(const Q of R.layerUpdates){const ge=te.data.subarray(Q*ne/te.data.BYTES_PER_ELEMENT,(Q+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,se,Re,ge)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,se,Re,te.data);else if(R.isData3DTexture)B?(fe&&t.texStorage3D(n.TEXTURE_3D,le,Ae,te.width,te.height,te.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,se,Re,te.data);else if(R.isFramebufferTexture){if(fe)if(B)t.texStorage2D(n.TEXTURE_2D,le,Ae,te.width,te.height);else{let ne=te.width,Q=te.height;for(let ge=0;ge<le;ge++)t.texImage2D(n.TEXTURE_2D,ge,Ae,ne,Q,0,se,Re,null),ne>>=1,Q>>=1}}else if(Ie.length>0){if(B&&fe){const ne=De(Ie[0]);t.texStorage2D(n.TEXTURE_2D,le,Ae,ne.width,ne.height)}for(let ne=0,Q=Ie.length;ne<Q;ne++)pe=Ie[ne],B?oe&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,se,Re,pe):t.texImage2D(n.TEXTURE_2D,ne,Ae,se,Re,pe);R.generateMipmaps=!1}else if(B){if(fe){const ne=De(te);t.texStorage2D(n.TEXTURE_2D,le,Ae,ne.width,ne.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,Ae,se,Re,te);g(R)&&p(Z),_e.__version=K.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function J(D,R,H){if(R.image.length!==6)return;const Z=Ue(D,R),ee=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+H);const K=i.get(ee);if(ee.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);const _e=Ke.getPrimaries(Ke.workingColorSpace),ae=R.colorSpace===Cn?null:Ke.getPrimaries(R.colorSpace),Ee=R.colorSpace===Cn||_e===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Se=R.isCompressedTexture||R.image[0].isCompressedTexture,te=R.image[0]&&R.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!Se&&!te?se[Q]=x(R.image[Q],!0,r.maxCubemapSize):se[Q]=te?R.image[Q].image:R.image[Q],se[Q]=ye(R,se[Q]);const Re=se[0],Ae=s.convert(R.format,R.colorSpace),pe=s.convert(R.type),Ie=M(R.internalFormat,Ae,pe,R.colorSpace),B=R.isVideoTexture!==!0,fe=K.__version===void 0||Z===!0,oe=ee.dataReady;let le=v(R,Re);Me(n.TEXTURE_CUBE_MAP,R);let ne;if(Se){B&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Ie,Re.width,Re.height);for(let Q=0;Q<6;Q++){ne=se[Q].mipmaps;for(let ge=0;ge<ne.length;ge++){const Fe=ne[ge];R.format!==Kt?Ae!==null?B?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,Ie,Fe.width,Fe.height,0,Fe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,Fe.width,Fe.height,Ae,pe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,Ie,Fe.width,Fe.height,0,Ae,pe,Fe.data)}}}else{if(ne=R.mipmaps,B&&fe){ne.length>0&&le++;const Q=De(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Ie,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){B?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,se[Q].width,se[Q].height,Ae,pe,se[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,se[Q].width,se[Q].height,0,Ae,pe,se[Q].data);for(let ge=0;ge<ne.length;ge++){const rt=ne[ge].image[Q].image;B?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,rt.width,rt.height,Ae,pe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,Ie,rt.width,rt.height,0,Ae,pe,rt.data)}}else{B?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,pe,se[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,Ae,pe,se[Q]);for(let ge=0;ge<ne.length;ge++){const Fe=ne[ge];B?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Ae,pe,Fe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,Ie,Ae,pe,Fe.image[Q])}}}g(R)&&p(n.TEXTURE_CUBE_MAP),K.__version=ee.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function re(D,R,H,Z,ee,K){const _e=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),Ee=M(H.internalFormat,_e,ae,H.colorSpace),Se=i.get(R),te=i.get(H);if(te.__renderTarget=R,!Se.__hasExternalTextures){const se=Math.max(1,R.width>>K),Re=Math.max(1,R.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,Ee,se,Re,R.depth,0,_e,ae,null):t.texImage2D(ee,K,Ee,se,Re,0,_e,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),de(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,te.__webglTexture,0,je(R)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,te.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(D,R,H){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){const Z=R.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=A(R.stencilBuffer,ee),_e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=je(R);de(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,K,R.width,R.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,K,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,K,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,D)}else{const Z=R.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],_e=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),Ee=M(K.internalFormat,_e,ae,K.colorSpace),Se=je(R);H&&de(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ee,R.width,R.height):de(R)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,Ee,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(R.depthTexture);Z.__renderTarget=R,(!Z.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);const ee=Z.__webglTexture,K=je(R);if(R.depthTexture.format===Fi)de(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(R.depthTexture.format===Ni)de(R)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(D){const R=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){const ee=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),R.__depthDisposeCallback=ee}R.__boundDepthTexture=Z}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=D.texture.mipmaps;Z&&Z.length>0?xe(R.__webglFramebuffer[0],D):xe(R.__webglFramebuffer,D)}else if(H){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ce(R.__webglDepthbuffer[Z],D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=R.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),Ce(R.__webglDepthbuffer,D,!1);else{const ee=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function qe(D,R,H){const Z=i.get(D);R!==void 0&&re(Z.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Pe(D)}function Ve(D){const R=D.texture,H=i.get(D),Z=i.get(R);D.addEventListener("dispose",E);const ee=D.textures,K=D.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=R.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)H.__webglFramebuffer[ae][Ee]=n.createFramebuffer()}else H.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<R.mipmaps.length;ae++)H.__webglFramebuffer[ae]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ae=0,Ee=ee.length;ae<Ee;ae++){const Se=i.get(ee[ae]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&de(D)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const Ee=ee[ae];H.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);const Se=s.convert(Ee.format,Ee.colorSpace),te=s.convert(Ee.type),se=M(Ee.internalFormat,Se,te,Ee.colorSpace,D.isXRRenderTarget===!0),Re=je(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,se,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Me(n.TEXTURE_CUBE_MAP,R);for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)re(H.__webglFramebuffer[ae][Ee],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else re(H.__webglFramebuffer[ae],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(R)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,Ee=ee.length;ae<Ee;ae++){const Se=ee[ae],te=i.get(Se);let se=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),Me(se,Se),re(H.__webglFramebuffer,D,Se,n.COLOR_ATTACHMENT0+ae,se,0),g(Se)&&p(se)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),Me(ae,R),R.mipmaps&&R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)re(H.__webglFramebuffer[Ee],D,R,n.COLOR_ATTACHMENT0,ae,Ee);else re(H.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,ae,0);g(R)&&p(ae),t.unbindTexture()}D.depthBuffer&&Pe(D)}function it(D){const R=D.textures;for(let H=0,Z=R.length;H<Z;H++){const ee=R[H];if(g(ee)){const K=_(D),_e=i.get(ee).__webglTexture;t.bindTexture(K,_e),p(K),t.unbindTexture()}}}const O=[],ke=[];function Ge(D){if(D.samples>0){if(de(D)===!1){const R=D.textures,H=D.width,Z=D.height;let ee=n.COLOR_BUFFER_BIT;const K=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(D),ae=R.length>1;if(ae)for(let Se=0;Se<R.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=D.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Se]);const te=i.get(R[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,ee,n.NEAREST),l===!0&&(O.length=0,ke.length=0,O.push(n.COLOR_ATTACHMENT0+Se),D.depthBuffer&&D.resolveDepthBuffer===!1&&(O.push(K),ke.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Se=0;Se<R.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Se]);const te=i.get(R[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function je(D){return Math.min(r.maxSamples,D.samples)}function de(D){const R=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function st(D){const R=a.render.frame;f.get(D)!==R&&(f.set(D,R),D.update())}function ye(D,R){const H=D.colorSpace,Z=D.format,ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==vi&&H!==Cn&&(Ke.getTransfer(H)===et?(Z!==Kt||ee!==gn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",H)),R}function De(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=qe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=de}function qp(n,e){function t(i,r=Cn){let s;const a=Ke.getTransfer(r);if(i===gn)return n.UNSIGNED_BYTE;if(i===ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ko)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Go)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zo)return n.BYTE;if(i===Vo)return n.SHORT;if(i===Ii)return n.UNSIGNED_SHORT;if(i===da)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===Ho)return n.ALPHA;if(i===Wo)return n.RGB;if(i===Kt)return n.RGBA;if(i===Fi)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===Xo)return n.RED;if(i===ma)return n.RED_INTEGER;if(i===xa)return n.RG;if(i===ga)return n.RG_INTEGER;if(i===va)return n.RGBA_INTEGER;if(i===ms||i===xs||i===gs||i===vs)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ir||i===Ur||i===Fr||i===Nr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ir)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ur)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Or||i===Br||i===zr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Or||i===Br)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vr||i===kr||i===Gr||i===Hr||i===Wr||i===Xr||i===Yr||i===qr||i===$r||i===Kr||i===jr||i===Zr||i===Jr||i===Qr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$r)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qr)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===ta||i===na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ea)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ia||i===sa||i===ra||i===aa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ia)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===aa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ui?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const $p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nn({vertexShader:$p,fragmentShader:Kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zp extends Mi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,d=null,h=null,c=null,m=null;const x=typeof XRWebGLBinding!="undefined",g=new jp,p={},_=t.getContextAttributes();let M=null,A=null;const v=[],y=[],E=new Ze;let T=null;const b=new qt;b.viewport=new ft;const S=new qt;S.viewport=new ft;const w=[b,S],C=new pu;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=v[W];return J===void 0&&(J=new rr,v[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=v[W];return J===void 0&&(J=new rr,v[W]=J),J.getGripSpace()},this.getHand=function(W){let J=v[W];return J===void 0&&(J=new rr,v[W]=J),J.getHandSpace()};function F(W){const J=y.indexOf(W.inputSource);if(J===-1)return;const re=v[J];re!==void 0&&(re.update(W.inputSource,W.frame,u||a),re.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",z);for(let W=0;W<v.length;W++){const J=y[W];J!==null&&(y[W]=null,v[W].disconnect(J))}L=null,U=null,g.reset();for(const W in p)delete p[W];e.setRenderTarget(M),c=null,h=null,d=null,r=null,A=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:c},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ce=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?Ni:Fi,Ce=_.stencil?Ui:$n);const Pe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Kn(h.textureWidth,h.textureHeight,{format:Kt,type:gn,depthTexture:new sl(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};c=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),A=new Kn(c.framebufferWidth,c.framebufferHeight,{format:Kt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(W){for(let J=0;J<W.removed.length;J++){const re=W.removed[J],Ce=y.indexOf(re);Ce>=0&&(y[Ce]=null,v[Ce].disconnect(re))}for(let J=0;J<W.added.length;J++){const re=W.added[J];let Ce=y.indexOf(re);if(Ce===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=y.length){y.push(re),Ce=Pe;break}else if(y[Pe]===null){y[Pe]=re,Ce=Pe;break}if(Ce===-1)break}const xe=v[Ce];xe&&xe.connect(re)}}const N=new $,X=new $;function j(W,J,re){N.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(re.matrixWorld);const Ce=N.distanceTo(X),xe=J.projectionMatrix.elements,Pe=re.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),Ve=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],O=(xe[9]-1)/xe[5],ke=(xe[8]-1)/xe[0],Ge=(Pe[8]+1)/Pe[0],je=qe*ke,de=qe*Ge,st=Ce/(-ke+Ge),ye=st*-ke;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ye),W.translateZ(st),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xe[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const De=qe+st,D=Ve+st,R=je-ye,H=de+(Ce-ye),Z=it*Ve/D*De,ee=O*Ve/D*De;W.projectionMatrix.makePerspective(R,H,Z,ee,De,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ce(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,re=W.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(re=g.depthFar)),C.near=S.near=b.near=J,C.far=S.far=b.far=re,(L!==C.near||U!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,U=C.far),C.layers.mask=W.layers.mask|6,b.layers.mask=C.layers.mask&3,S.layers.mask=C.layers.mask&5;const Ce=W.parent,xe=C.cameras;ce(C,Ce);for(let Pe=0;Pe<xe.length;Pe++)ce(xe[Pe],Ce);xe.length===2?j(C,b,S):C.projectionMatrix.copy(b.projectionMatrix),Me(W,C,Ce)};function Me(W,J,re){re===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=oa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&c===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(W){return p[W]};let Ue=null;function Xe(W,J){if(f=J.getViewerPose(u||a),m=J,f!==null){const re=f.views;c!==null&&(e.setRenderTargetFramebuffer(A,c.framebuffer),e.setRenderTarget(A));let Ce=!1;re.length!==C.cameras.length&&(C.cameras.length=0,Ce=!0);for(let Ve=0;Ve<re.length;Ve++){const it=re[Ve];let O=null;if(c!==null)O=c.getViewport(it);else{const Ge=d.getViewSubImage(h,it);O=Ge.viewport,Ve===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let ke=w[Ve];ke===void 0&&(ke=new qt,ke.layers.enable(Ve),ke.viewport=new ft,w[Ve]=ke),ke.matrix.fromArray(it.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(it.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(O.x,O.y,O.width,O.height),Ve===0&&(C.matrix.copy(ke.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ce===!0&&C.cameras.push(ke)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const Ve=d.getDepthInformation(re[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<re.length;Ve++){const it=re[Ve].camera;if(it){let O=p[it];O||(O=new rl,p[it]=O);const ke=d.getCameraImage(it);O.sourceTexture=ke}}}}for(let re=0;re<v.length;re++){const Ce=y[re],xe=v[re];Ce!==null&&xe!==void 0&&xe.update(Ce,J,u||a)}Ue&&Ue(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const He=new ol;He.setAnimationLoop(Xe),this.setAnimationLoop=function(W){Ue=W},this.dispose=function(){}}}const kn=new vn,Jp=new pt;function Qp(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,el(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,M,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&c(g,p,A)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,M):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Rt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Rt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p),M=_.envMap,A=_.envMapRotation;M&&(g.envMap.value=M,kn.copy(A),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),g.envMapRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(kn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function c(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function em(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const A=M.program;i.uniformBlockBinding(_,A)}function u(_,M){let A=r[_.id];A===void 0&&(m(_),A=f(_),r[_.id]=A,_.addEventListener("dispose",g));const v=M.program;i.updateUBOMapping(_,v);const y=e.render.frame;s[_.id]!==y&&(h(_),s[_.id]=y)}function f(_){const M=d();_.__bindingPointIndex=M;const A=n.createBuffer(),v=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,v,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const M=r[_.id],A=_.uniforms,v=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,E=A.length;y<E;y++){const T=Array.isArray(A[y])?A[y]:[A[y]];for(let b=0,S=T.length;b<S;b++){const w=T[b];if(c(w,y,b,v)===!0){const C=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let F=0;F<L.length;F++){const V=L[F],z=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,C+U,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function c(_,M,A,v){const y=_.value,E=M+"_"+A;if(v[E]===void 0)return typeof y=="number"||typeof y=="boolean"?v[E]=y:v[E]=y.clone(),!0;{const T=v[E];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return v[E]=y,!0}else if(T.equals(y)===!1)return T.copy(y),!0}return!1}function m(_){const M=_.uniforms;let A=0;const v=16;for(let E=0,T=M.length;E<T;E++){const b=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,w=b.length;S<w;S++){const C=b[S],L=Array.isArray(C.value)?C.value:[C.value];for(let U=0,F=L.length;U<F;U++){const V=L[U],z=x(V),N=A%v,X=N%z.boundary,j=N+X;A+=X,j!==0&&v-j<z.storage&&(A+=v-j),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=z.storage}}}const y=A%v;return y>0&&(A+=v-y),_.__size=A,_.__cache={},this}function x(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Oe("WebGLRenderer: Unsupported uniform value type.",_),M}function g(_){const M=_.target;M.removeEventListener("dispose",g);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}const tm=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let cn=null;function nm(){return cn===null&&(cn=new lu(tm,32,32,xa,yi),cn.minFilter=Gt,cn.magFilter=Gt,cn.wrapS=hn,cn.wrapT=hn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class im{constructor(e={}){const{canvas:t=Ic(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let c;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=i.getContextAttributes().alpha}else c=a;const m=new Set([va,ga,ma]),x=new Set([gn,$n,Ii,Ui,ha,pa]),g=new Uint32Array(4),p=new Int32Array(4);let _=null,M=null;const A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=kt;let T=0,b=0,S=null,w=-1,C=null;const L=new ft,U=new ft;let F=null;const V=new tt(0);let z=0,N=t.width,X=t.height,j=1,ce=null,Me=null;const Ue=new ft(0,0,N,X),Xe=new ft(0,0,N,X);let He=!1;const W=new il;let J=!1,re=!1;const Ce=new pt,xe=new $,Pe=new ft,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function it(){return S===null?j:1}let O=i;function ke(P,k){return t.getContext(P,k)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fa}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ge,!1),O===null){const k="webgl2";if(O=ke(k,P),O===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let Ge,je,de,st,ye,De,D,R,H,Z,ee,K,_e,ae,Ee,Se,te,se,Re,Ae,pe,Ie,B,fe;function oe(){Ge=new fh(O),Ge.init(),Ie=new qp(O,Ge),je=new nh(O,Ge,e,Ie),de=new Xp(O,Ge),je.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),st=new ph(O),ye=new Dp,De=new Yp(O,Ge,de,ye,je,Ie,st),D=new sh(y),R=new uh(y),H=new gu(O),B=new eh(O,H),Z=new dh(O,H,st,B),ee=new xh(O,Z,H,st),Re=new mh(O,je,De),Se=new ih(ye),K=new Lp(y,D,R,Ge,je,B,Se),_e=new Qp(y,ye),ae=new Up,Ee=new Vp(Ge),se=new Qd(y,D,R,de,ee,c,l),te=new Hp(y,ee,je),fe=new em(O,st,je,de),Ae=new th(O,Ge,st),pe=new hh(O,Ge,st),st.programs=K.programs,y.capabilities=je,y.extensions=Ge,y.properties=ye,y.renderLists=ae,y.shadowMap=te,y.state=de,y.info=st}oe();const le=new Zp(y,O);this.xr=le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Ge.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ge.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(N,X,!1))},this.getSize=function(P){return P.set(N,X)},this.setSize=function(P,k,Y=!0){if(le.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,X=k,t.width=Math.floor(P*j),t.height=Math.floor(k*j),Y===!0&&(t.style.width=P+"px",t.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(N*j,X*j).floor()},this.setDrawingBufferSize=function(P,k,Y){N=P,X=k,j=Y,t.width=Math.floor(P*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(Ue)},this.setViewport=function(P,k,Y,q){P.isVector4?Ue.set(P.x,P.y,P.z,P.w):Ue.set(P,k,Y,q),de.viewport(L.copy(Ue).multiplyScalar(j).round())},this.getScissor=function(P){return P.copy(Xe)},this.setScissor=function(P,k,Y,q){P.isVector4?Xe.set(P.x,P.y,P.z,P.w):Xe.set(P,k,Y,q),de.scissor(U.copy(Xe).multiplyScalar(j).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(P){de.setScissorTest(He=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){Me=P},this.getClearColor=function(P){return P.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(P=!0,k=!0,Y=!0){let q=0;if(P){let G=!1;if(S!==null){const ie=S.texture.format;G=m.has(ie)}if(G){const ie=S.texture.type,he=x.has(ie),ve=se.getClearColor(),me=se.getClearAlpha(),we=ve.r,Le=ve.g,be=ve.b;he?(g[0]=we,g[1]=Le,g[2]=be,g[3]=me,O.clearBufferuiv(O.COLOR,0,g)):(p[0]=we,p[1]=Le,p[2]=be,p[3]=me,O.clearBufferiv(O.COLOR,0,p))}else q|=O.COLOR_BUFFER_BIT}k&&(q|=O.DEPTH_BUFFER_BIT),Y&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),se.dispose(),ae.dispose(),Ee.dispose(),ye.dispose(),D.dispose(),R.dispose(),ee.dispose(),B.dispose(),fe.dispose(),K.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ma),le.removeEventListener("sessionend",ba),Un.stop()};function ne(P){P.preventDefault(),Ba("WebGLRenderer: Context Lost."),E=!0}function Q(){Ba("WebGLRenderer: Context Restored."),E=!1;const P=st.autoReset,k=te.enabled,Y=te.autoUpdate,q=te.needsUpdate,G=te.type;oe(),st.autoReset=P,te.enabled=k,te.autoUpdate=Y,te.needsUpdate=q,te.type=G}function ge(P){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Fe(P){const k=P.target;k.removeEventListener("dispose",Fe),rt(k)}function rt(P){Je(P),ye.remove(P)}function Je(P){const k=ye.get(P).programs;k!==void 0&&(k.forEach(function(Y){K.releaseProgram(Y)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,q,G,ie){k===null&&(k=qe);const he=G.isMesh&&G.matrixWorld.determinant()<0,ve=Ml(P,k,Y,q,G);de.setMaterial(q,he);let me=Y.index,we=1;if(q.wireframe===!0){if(me=Z.getWireframeAttribute(Y),me===void 0)return;we=2}const Le=Y.drawRange,be=Y.attributes.position;let We=Le.start*we,Qe=(Le.start+Le.count)*we;ie!==null&&(We=Math.max(We,ie.start*we),Qe=Math.min(Qe,(ie.start+ie.count)*we)),me!==null?(We=Math.max(We,0),Qe=Math.min(Qe,me.count)):be!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,be.count));const lt=Qe-We;if(lt<0||lt===1/0)return;B.setup(G,q,ve,Y,me);let ct,nt=Ae;if(me!==null&&(ct=H.get(me),nt=pe,nt.setIndex(ct)),G.isMesh)q.wireframe===!0?(de.setLineWidth(q.wireframeLinewidth*it()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(G.isLine){let Te=q.linewidth;Te===void 0&&(Te=1),de.setLineWidth(Te*it()),G.isLineSegments?nt.setMode(O.LINES):G.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else G.isPoints?nt.setMode(O.POINTS):G.isSprite&&nt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Oi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Te=G._multiDrawStarts,at=G._multiDrawCounts,$e=G._multiDrawCount,Pt=me?H.get(me).bytesPerElement:1,jn=ye.get(q).currentProgram.getUniforms();for(let Lt=0;Lt<$e;Lt++)jn.setValue(O,"_gl_DrawID",Lt),nt.render(Te[Lt]/Pt,at[Lt])}else if(G.isInstancedMesh)nt.renderInstances(We,lt,G.count);else if(Y.isInstancedBufferGeometry){const Te=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,at=Math.min(Y.instanceCount,Te);nt.renderInstances(We,lt,at)}else nt.render(We,lt)};function jt(P,k,Y){P.transparent===!0&&P.side===dn&&P.forceSinglePass===!1?(P.side=Rt,P.needsUpdate=!0,Hi(P,k,Y),P.side=Dn,P.needsUpdate=!0,Hi(P,k,Y),P.side=dn):Hi(P,k,Y)}this.compile=function(P,k,Y=null){Y===null&&(Y=P),M=Ee.get(Y),M.init(k),v.push(M),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),P!==Y&&P.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const q=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ie=G.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const ve=ie[he];jt(ve,Y,G),q.add(ve)}else jt(ie,Y,G),q.add(ie)}),M=v.pop(),q},this.compileAsync=function(P,k,Y=null){const q=this.compile(P,k,Y);return new Promise(G=>{function ie(){if(q.forEach(function(he){ye.get(he).currentProgram.isReady()&&q.delete(he)}),q.size===0){G(P);return}setTimeout(ie,10)}Ge.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ht=null;function yl(P){Ht&&Ht(P)}function Ma(){Un.stop()}function ba(){Un.start()}const Un=new ol;Un.setAnimationLoop(yl),typeof self!="undefined"&&Un.setContext(self),this.setAnimationLoop=function(P){Ht=P,le.setAnimationLoop(P),P===null?Un.stop():Un.start()},le.addEventListener("sessionstart",Ma),le.addEventListener("sessionend",ba),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(k),k=le.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,k,S),M=Ee.get(P,v.length),M.init(k),v.push(M),Ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(Ce,Jt,k.reversedDepth),re=this.localClippingEnabled,J=Se.init(this.clippingPlanes,re),_=ae.get(P,A.length),_.init(),A.push(_),le.enabled===!0&&le.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&Is(ie,k,-1/0,y.sortObjects)}Is(P,k,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ce,Me),Ve=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ve&&se.addToRenderList(_,P),this.info.render.frame++,J===!0&&Se.beginShadows();const Y=M.state.shadowsArray;te.render(Y,P,k),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=_.opaque,G=_.transmissive;if(M.setupLights(),k.isArrayCamera){const ie=k.cameras;if(G.length>0)for(let he=0,ve=ie.length;he<ve;he++){const me=ie[he];Ta(q,G,P,me)}Ve&&se.render(P);for(let he=0,ve=ie.length;he<ve;he++){const me=ie[he];Ea(_,P,me,me.viewport)}}else G.length>0&&Ta(q,G,P,k),Ve&&se.render(P),Ea(_,P,k);S!==null&&b===0&&(De.updateMultisampleRenderTarget(S),De.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(y,P,k),B.resetDefaultState(),w=-1,C=null,v.pop(),v.length>0?(M=v[v.length-1],J===!0&&Se.setGlobalState(y.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function Is(P,k,Y,q){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||W.intersectsSprite(P)){q&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ce);const he=ee.update(P),ve=P.material;ve.visible&&_.push(P,he,ve,Y,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||W.intersectsObject(P))){const he=ee.update(P),ve=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Pe.copy(he.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const me=he.groups;for(let we=0,Le=me.length;we<Le;we++){const be=me[we],We=ve[be.materialIndex];We&&We.visible&&_.push(P,he,We,Y,Pe.z,be)}}else ve.visible&&_.push(P,he,ve,Y,Pe.z,null)}}const ie=P.children;for(let he=0,ve=ie.length;he<ve;he++)Is(ie[he],k,Y,q)}function Ea(P,k,Y,q){const{opaque:G,transmissive:ie,transparent:he}=P;M.setupLightsView(Y),J===!0&&Se.setGlobalState(y.clippingPlanes,Y),q&&de.viewport(L.copy(q)),G.length>0&&Gi(G,k,Y),ie.length>0&&Gi(ie,k,Y),he.length>0&&Gi(he,k,Y),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ta(P,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[q.id]===void 0&&(M.state.transmissionRenderTarget[q.id]=new Kn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?yi:gn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ie=M.state.transmissionRenderTarget[q.id],he=q.viewport||L;ie.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const ve=y.getRenderTarget(),me=y.getActiveCubeFace(),we=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(V),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&se.render(Y);const Le=y.toneMapping;y.toneMapping=Ln;const be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),J===!0&&Se.setGlobalState(y.clippingPlanes,q),Gi(P,Y,q),De.updateMultisampleRenderTarget(ie),De.updateRenderTargetMipmap(ie),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Qe=0,lt=k.length;Qe<lt;Qe++){const ct=k[Qe],{object:nt,geometry:Te,material:at,group:$e}=ct;if(at.side===dn&&nt.layers.test(q.layers)){const Pt=at.side;at.side=Rt,at.needsUpdate=!0,Aa(nt,Y,q,Te,at,$e),at.side=Pt,at.needsUpdate=!0,We=!0}}We===!0&&(De.updateMultisampleRenderTarget(ie),De.updateRenderTargetMipmap(ie))}y.setRenderTarget(ve,me,we),y.setClearColor(V,z),be!==void 0&&(q.viewport=be),y.toneMapping=Le}function Gi(P,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ie=P.length;G<ie;G++){const he=P[G],{object:ve,geometry:me,group:we}=he;let Le=he.material;Le.allowOverride===!0&&q!==null&&(Le=q),ve.layers.test(Y.layers)&&Aa(ve,k,Y,me,Le,we)}}function Aa(P,k,Y,q,G,ie){P.onBeforeRender(y,k,Y,q,G,ie),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(y,k,Y,q,P,ie),G.transparent===!0&&G.side===dn&&G.forceSinglePass===!1?(G.side=Rt,G.needsUpdate=!0,y.renderBufferDirect(Y,k,q,G,P,ie),G.side=Dn,G.needsUpdate=!0,y.renderBufferDirect(Y,k,q,G,P,ie),G.side=dn):y.renderBufferDirect(Y,k,q,G,P,ie),P.onAfterRender(y,k,Y,q,G,ie)}function Hi(P,k,Y){k.isScene!==!0&&(k=qe);const q=ye.get(P),G=M.state.lights,ie=M.state.shadowsArray,he=G.state.version,ve=K.getParameters(P,G.state,ie,k,Y),me=K.getProgramCacheKey(ve);let we=q.programs;q.environment=P.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(P.isMeshStandardMaterial?R:D).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,we===void 0&&(P.addEventListener("dispose",Fe),we=new Map,q.programs=we);let Le=we.get(me);if(Le!==void 0){if(q.currentProgram===Le&&q.lightsStateVersion===he)return Ca(P,ve),Le}else ve.uniforms=K.getUniforms(P),P.onBeforeCompile(ve,y),Le=K.acquireProgram(ve,me),we.set(me,Le),q.uniforms=ve.uniforms;const be=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(be.clippingPlanes=Se.uniform),Ca(P,ve),q.needsLights=El(P),q.lightsStateVersion=he,q.needsLights&&(be.ambientLightColor.value=G.state.ambient,be.lightProbe.value=G.state.probe,be.directionalLights.value=G.state.directional,be.directionalLightShadows.value=G.state.directionalShadow,be.spotLights.value=G.state.spot,be.spotLightShadows.value=G.state.spotShadow,be.rectAreaLights.value=G.state.rectArea,be.ltc_1.value=G.state.rectAreaLTC1,be.ltc_2.value=G.state.rectAreaLTC2,be.pointLights.value=G.state.point,be.pointLightShadows.value=G.state.pointShadow,be.hemisphereLights.value=G.state.hemi,be.directionalShadowMap.value=G.state.directionalShadowMap,be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,be.spotShadowMap.value=G.state.spotShadowMap,be.spotLightMatrix.value=G.state.spotLightMatrix,be.spotLightMap.value=G.state.spotLightMap,be.pointShadowMap.value=G.state.pointShadowMap,be.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Le,q.uniformsList=null,Le}function wa(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=_s.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function Ca(P,k){const Y=ye.get(P);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Ml(P,k,Y,q,G){k.isScene!==!0&&(k=qe),De.resetTextureUnits();const ie=k.fog,he=q.isMeshStandardMaterial?k.environment:null,ve=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vi,me=(q.isMeshStandardMaterial?R:D).get(q.envMap||he),we=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Le=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),be=!!Y.morphAttributes.position,We=!!Y.morphAttributes.normal,Qe=!!Y.morphAttributes.color;let lt=Ln;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(lt=y.toneMapping);const ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=ct!==void 0?ct.length:0,Te=ye.get(q),at=M.state.lights;if(J===!0&&(re===!0||P!==C)){const yt=P===C&&q.id===w;Se.setState(q,P,yt)}let $e=!1;q.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==at.state.version||Te.outputColorSpace!==ve||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==me||q.fog===!0&&Te.fog!==ie||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Se.numPlanes||Te.numIntersection!==Se.numIntersection)||Te.vertexAlphas!==we||Te.vertexTangents!==Le||Te.morphTargets!==be||Te.morphNormals!==We||Te.morphColors!==Qe||Te.toneMapping!==lt||Te.morphTargetsCount!==nt)&&($e=!0):($e=!0,Te.__version=q.version);let Pt=Te.currentProgram;$e===!0&&(Pt=Hi(q,k,G));let jn=!1,Lt=!1,Ei=!1;const ot=Pt.getUniforms(),Tt=Te.uniforms;if(de.useProgram(Pt.program)&&(jn=!0,Lt=!0,Ei=!0),q.id!==w&&(w=q.id,Lt=!0),jn||C!==P){de.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",P.projectionMatrix),ot.setValue(O,"viewMatrix",P.matrixWorldInverse);const At=ot.map.cameraPosition;At!==void 0&&At.setValue(O,xe.setFromMatrixPosition(P.matrixWorld)),je.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ot.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,Lt=!0,Ei=!0)}if(G.isSkinnedMesh){ot.setOptional(O,G,"bindMatrix"),ot.setOptional(O,G,"bindMatrixInverse");const yt=G.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ot.setValue(O,"boneTexture",yt.boneTexture,De))}G.isBatchedMesh&&(ot.setOptional(O,G,"batchingTexture"),ot.setValue(O,"batchingTexture",G._matricesTexture,De),ot.setOptional(O,G,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",G._indirectTexture,De),ot.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",G._colorsTexture,De));const Bt=Y.morphAttributes;if((Bt.position!==void 0||Bt.normal!==void 0||Bt.color!==void 0)&&Re.update(G,Y,Pt),(Lt||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,ot.setValue(O,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Tt.envMap.value=me,Tt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Tt.envMapIntensity.value=k.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=nm()),Lt&&(ot.setValue(O,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&bl(Tt,Ei),ie&&q.fog===!0&&_e.refreshFogUniforms(Tt,ie),_e.refreshMaterialUniforms(Tt,q,j,X,M.state.transmissionRenderTarget[P.id]),_s.upload(O,wa(Te),Tt,De)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_s.upload(O,wa(Te),Tt,De),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ot.setValue(O,"center",G.center),ot.setValue(O,"modelViewMatrix",G.modelViewMatrix),ot.setValue(O,"normalMatrix",G.normalMatrix),ot.setValue(O,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yt=q.uniformsGroups;for(let At=0,Us=yt.length;At<Us;At++){const Fn=yt[At];fe.update(Fn,Pt),fe.bind(Fn,Pt)}}return Pt}function bl(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function El(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,k,Y){const q=ye.get(P);q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ye.get(P.texture).__webglTexture=k,ye.get(P.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,k){const Y=ye.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Tl=O.createFramebuffer();this.setRenderTarget=function(P,k=0,Y=0){S=P,T=k,b=Y;let q=!0,G=null,ie=!1,he=!1;if(P){const me=ye.get(P);if(me.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(me.__webglFramebuffer===void 0)De.setupRenderTarget(P);else if(me.__hasExternalTextures)De.rebindTextures(P,ye.get(P.texture).__webglTexture,ye.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const be=P.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&ye.has(be)&&(P.width!==be.image.width||P.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(P)}}const we=P.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(he=!0);const Le=ye.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?G=Le[k][Y]:G=Le[k],ie=!0):P.samples>0&&De.useMultisampledRTT(P)===!1?G=ye.get(P).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[Y]:G=Le,L.copy(P.viewport),U.copy(P.scissor),F=P.scissorTest}else L.copy(Ue).multiplyScalar(j).floor(),U.copy(Xe).multiplyScalar(j).floor(),F=He;if(Y!==0&&(G=Tl),de.bindFramebuffer(O.FRAMEBUFFER,G)&&q&&de.drawBuffers(P,G),de.viewport(L),de.scissor(U),de.setScissorTest(F),ie){const me=ye.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,Y)}else if(he){const me=k;for(let we=0;we<P.textures.length;we++){const Le=ye.get(P.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,Le.__webglTexture,Y,me)}}else if(P!==null&&Y!==0){const me=ye.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(P,k,Y,q,G,ie,he,ve=0){if(!(P&&P.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ye.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me){de.bindFramebuffer(O.FRAMEBUFFER,me);try{const we=P.textures[ve],Le=we.format,be=we.type;if(!je.textureFormatReadable(Le)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(be)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-G&&(P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),O.readPixels(k,Y,q,G,Ie.convert(Le),Ie.convert(be),ie))}finally{const we=S!==null?ye.get(S).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(P,k,Y,q,G,ie,he,ve=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ye.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(me=me[he]),me)if(k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-G){de.bindFramebuffer(O.FRAMEBUFFER,me);const we=P.textures[ve],Le=we.format,be=we.type;if(!je.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.bufferData(O.PIXEL_PACK_BUFFER,ie.byteLength,O.STREAM_READ),P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),O.readPixels(k,Y,q,G,Ie.convert(Le),Ie.convert(be),0);const Qe=S!==null?ye.get(S).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,Qe);const lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Uc(O,lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,We),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ie),O.deleteBuffer(We),O.deleteSync(lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,k=null,Y=0){const q=Math.pow(2,-Y),G=Math.floor(P.image.width*q),ie=Math.floor(P.image.height*q),he=k!==null?k.x:0,ve=k!==null?k.y:0;De.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,he,ve,G,ie),de.unbindTexture()};const Al=O.createFramebuffer(),wl=O.createFramebuffer();this.copyTextureToTexture=function(P,k,Y=null,q=null,G=0,ie=null){ie===null&&(G!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=G,G=0):ie=0);let he,ve,me,we,Le,be,We,Qe,lt;const ct=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(Y!==null)he=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,me=Y.isBox3?Y.max.z-Y.min.z:1,we=Y.min.x,Le=Y.min.y,be=Y.isBox3?Y.min.z:0;else{const Bt=Math.pow(2,-G);he=Math.floor(ct.width*Bt),ve=Math.floor(ct.height*Bt),P.isDataArrayTexture?me=ct.depth:P.isData3DTexture?me=Math.floor(ct.depth*Bt):me=1,we=0,Le=0,be=0}q!==null?(We=q.x,Qe=q.y,lt=q.z):(We=0,Qe=0,lt=0);const nt=Ie.convert(k.format),Te=Ie.convert(k.type);let at;k.isData3DTexture?(De.setTexture3D(k,0),at=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(De.setTexture2DArray(k,0),at=O.TEXTURE_2D_ARRAY):(De.setTexture2D(k,0),at=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const $e=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),jn=O.getParameter(O.UNPACK_SKIP_PIXELS),Lt=O.getParameter(O.UNPACK_SKIP_ROWS),Ei=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,we),O.pixelStorei(O.UNPACK_SKIP_ROWS,Le),O.pixelStorei(O.UNPACK_SKIP_IMAGES,be);const ot=P.isDataArrayTexture||P.isData3DTexture,Tt=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Bt=ye.get(P),yt=ye.get(k),At=ye.get(Bt.__renderTarget),Us=ye.get(yt.__renderTarget);de.bindFramebuffer(O.READ_FRAMEBUFFER,At.__webglFramebuffer),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Fn=0;Fn<me;Fn++)ot&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(P).__webglTexture,G,be+Fn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.get(k).__webglTexture,ie,lt+Fn)),O.blitFramebuffer(we,Le,he,ve,We,Qe,he,ve,O.DEPTH_BUFFER_BIT,O.NEAREST);de.bindFramebuffer(O.READ_FRAMEBUFFER,null),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||ye.has(P)){const Bt=ye.get(P),yt=ye.get(k);de.bindFramebuffer(O.READ_FRAMEBUFFER,Al),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,wl);for(let At=0;At<me;At++)ot?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bt.__webglTexture,G,be+At):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,G),Tt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,ie,lt+At):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,ie),G!==0?O.blitFramebuffer(we,Le,he,ve,We,Qe,he,ve,O.COLOR_BUFFER_BIT,O.NEAREST):Tt?O.copyTexSubImage3D(at,ie,We,Qe,lt+At,we,Le,he,ve):O.copyTexSubImage2D(at,ie,We,Qe,we,Le,he,ve);de.bindFramebuffer(O.READ_FRAMEBUFFER,null),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Tt?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(at,ie,We,Qe,lt,he,ve,me,nt,Te,ct.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(at,ie,We,Qe,lt,he,ve,me,nt,ct.data):O.texSubImage3D(at,ie,We,Qe,lt,he,ve,me,nt,Te,ct):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ie,We,Qe,he,ve,nt,Te,ct.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ie,We,Qe,ct.width,ct.height,nt,ct.data):O.texSubImage2D(O.TEXTURE_2D,ie,We,Qe,he,ve,nt,Te,ct);O.pixelStorei(O.UNPACK_ROW_LENGTH,$e),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,jn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ei),ie===0&&k.generateMipmaps&&O.generateMipmap(at),de.unbindTexture()},this.initRenderTarget=function(P){ye.get(P).__webglFramebuffer===void 0&&De.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?De.setTextureCube(P,0):P.isData3DTexture?De.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?De.setTexture2DArray(P,0):De.setTexture2D(P,0),de.unbindTexture()},this.resetState=function(){T=0,b=0,S=null,de.reset(),B.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var dr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function sm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yn={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(n,e){(function(i,r){n.exports=r()})(dr,function(){return function(t){var i={};function r(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=i,r.d=function(s,a,o){r.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:o})},r.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,a){if(a&1&&(s=r(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var l in s)r.d(o,l,function(u){return s[u]}.bind(null,l));return o},r.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(a,"a",a),a},r.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},r.p="",r(r.s=20)}([function(t,i){var r={};t.exports=r,function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(a,o){var l,u;typeof o=="boolean"?(l=2,u=o):(l=1,u=!0);for(var f=l;f<arguments.length;f++){var d=arguments[f];if(d)for(var h in d)u&&d[h]&&d[h].constructor===Object&&(!a[h]||a[h].constructor===Object)?(a[h]=a[h]||{},r.extend(a[h],u,d[h])):a[h]=d[h]}return a},r.clone=function(a,o){return r.extend({},o,a)},r.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var l in a)o.push(l);return o},r.values=function(a){var o=[];if(Object.keys){for(var l=Object.keys(a),u=0;u<l.length;u++)o.push(a[l[u]]);return o}for(var f in a)o.push(a[f]);return o},r.get=function(a,o,l,u){o=o.split(".").slice(l,u);for(var f=0;f<o.length;f+=1)a=a[o[f]];return a},r.set=function(a,o,l,u,f){var d=o.split(".").slice(u,f);return r.get(a,o,0,-1)[d[d.length-1]]=l,l},r.shuffle=function(a){for(var o=a.length-1;o>0;o--){var l=Math.floor(r.random()*(o+1)),u=a[o];a[o]=a[l],a[l]=u}return a},r.choose=function(a){return a[Math.floor(r.random()*a.length)]},r.isElement=function(a){return typeof HTMLElement!="undefined"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},r.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},r.isFunction=function(a){return typeof a=="function"},r.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},r.isString=function(a){return toString.call(a)==="[object String]"},r.clamp=function(a,o,l){return a<o?o:a>l?l:a},r.sign=function(a){return a<0?-1:1},r.now=function(){if(typeof window!="undefined"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(a,o){return a=typeof a!="undefined"?a:0,o=typeof o!="undefined"?o:1,a+s()*(o-a)};var s=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[a]||(r.warn(a),r._warnedOnce[a]=!0)},r.deprecated=function(a,o,l){a[o]=r.chain(function(){r.warnOnce("\u{1F505} deprecated \u{1F505}",l)},a[o])},r.nextId=function(){return r._nextId++},r.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var l=0;l<a.length;l++)if(a[l]===o)return l;return-1},r.map=function(a,o){if(a.map)return a.map(o);for(var l=[],u=0;u<a.length;u+=1)l.push(o(a[u]));return l},r.topologicalSort=function(a){var o=[],l=[],u=[];for(var f in a)!l[f]&&!u[f]&&r._topologicalSort(f,l,u,a,o);return o},r._topologicalSort=function(a,o,l,u,f){var d=u[a]||[];l[a]=!0;for(var h=0;h<d.length;h+=1){var c=d[h];l[c]||o[c]||r._topologicalSort(c,o,l,u,f)}l[a]=!1,o[a]=!0,f.push(a)},r.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var l=arguments[o];l._chained?a.push.apply(a,l._chained):a.push(l)}var u=function(){for(var f,d=new Array(arguments.length),h=0,c=arguments.length;h<c;h++)d[h]=arguments[h];for(h=0;h<a.length;h+=1){var m=a[h].apply(f,d);typeof m!="undefined"&&(f=m)}return f};return u._chained=a,u},r.chainPathBefore=function(a,o,l){return r.set(a,o,r.chain(l,r.get(a,o)))},r.chainPathAfter=function(a,o,l){return r.set(a,o,r.chain(r.get(a,o),l))},r.setDecomp=function(a){r._decomp=a},r.getDecomp=function(){var a=r._decomp;try{!a&&typeof window!="undefined"&&(a=window.decomp),!a&&typeof dr!="undefined"&&(a=dr.decomp)}catch{a=null}return a}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(s){var a={min:{x:0,y:0},max:{x:0,y:0}};return s&&r.update(a,s),a},r.update=function(s,a,o){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var l=0;l<a.length;l++){var u=a[l];u.x>s.max.x&&(s.max.x=u.x),u.x<s.min.x&&(s.min.x=u.x),u.y>s.max.y&&(s.max.y=u.y),u.y<s.min.y&&(s.min.y=u.y)}o&&(o.x>0?s.max.x+=o.x:s.min.x+=o.x,o.y>0?s.max.y+=o.y:s.min.y+=o.y)},r.contains=function(s,a){return a.x>=s.min.x&&a.x<=s.max.x&&a.y>=s.min.y&&a.y<=s.max.y},r.overlaps=function(s,a){return s.min.x<=a.max.x&&s.max.x>=a.min.x&&s.max.y>=a.min.y&&s.min.y<=a.max.y},r.translate=function(s,a){s.min.x+=a.x,s.max.x+=a.x,s.min.y+=a.y,s.max.y+=a.y},r.shift=function(s,a){var o=s.max.x-s.min.x,l=s.max.y-s.min.y;s.min.x=a.x,s.max.x=a.x+o,s.min.y=a.y,s.max.y=a.y+l}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(s,a){return{x:s||0,y:a||0}},r.clone=function(s){return{x:s.x,y:s.y}},r.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},r.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},r.rotate=function(s,a,o){var l=Math.cos(a),u=Math.sin(a);o||(o={});var f=s.x*l-s.y*u;return o.y=s.x*u+s.y*l,o.x=f,o},r.rotateAbout=function(s,a,o,l){var u=Math.cos(a),f=Math.sin(a);l||(l={});var d=o.x+((s.x-o.x)*u-(s.y-o.y)*f);return l.y=o.y+((s.x-o.x)*f+(s.y-o.y)*u),l.x=d,l},r.normalise=function(s){var a=r.magnitude(s);return a===0?{x:0,y:0}:{x:s.x/a,y:s.y/a}},r.dot=function(s,a){return s.x*a.x+s.y*a.y},r.cross=function(s,a){return s.x*a.y-s.y*a.x},r.cross3=function(s,a,o){return(a.x-s.x)*(o.y-s.y)-(a.y-s.y)*(o.x-s.x)},r.add=function(s,a,o){return o||(o={}),o.x=s.x+a.x,o.y=s.y+a.y,o},r.sub=function(s,a,o){return o||(o={}),o.x=s.x-a.x,o.y=s.y-a.y,o},r.mult=function(s,a){return{x:s.x*a,y:s.y*a}},r.div=function(s,a){return{x:s.x/a,y:s.y/a}},r.perp=function(s,a){return a=a===!0?-1:1,{x:a*-s.y,y:a*s.x}},r.neg=function(s){return{x:-s.x,y:-s.y}},r.angle=function(s,a){return Math.atan2(a.y-s.y,a.x-s.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}()},function(t,i,r){var s={};t.exports=s;var a=r(2),o=r(0);(function(){s.create=function(l,u){for(var f=[],d=0;d<l.length;d++){var h=l[d],c={x:h.x,y:h.y,index:d,body:u,isInternal:!1};f.push(c)}return f},s.fromPath=function(l,u){var f=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return l.replace(f,function(h,c,m){d.push({x:parseFloat(c),y:parseFloat(m)})}),s.create(d,u)},s.centre=function(l){for(var u=s.area(l,!0),f={x:0,y:0},d,h,c,m=0;m<l.length;m++)c=(m+1)%l.length,d=a.cross(l[m],l[c]),h=a.mult(a.add(l[m],l[c]),d),f=a.add(f,h);return a.div(f,6*u)},s.mean=function(l){for(var u={x:0,y:0},f=0;f<l.length;f++)u.x+=l[f].x,u.y+=l[f].y;return a.div(u,l.length)},s.area=function(l,u){for(var f=0,d=l.length-1,h=0;h<l.length;h++)f+=(l[d].x-l[h].x)*(l[d].y+l[h].y),d=h;return u?f/2:Math.abs(f)/2},s.inertia=function(l,u){for(var f=0,d=0,h=l,c,m,x=0;x<h.length;x++)m=(x+1)%h.length,c=Math.abs(a.cross(h[m],h[x])),f+=c*(a.dot(h[m],h[m])+a.dot(h[m],h[x])+a.dot(h[x],h[x])),d+=c;return u/6*(f/d)},s.translate=function(l,u,f){f=typeof f!="undefined"?f:1;var d=l.length,h=u.x*f,c=u.y*f,m;for(m=0;m<d;m++)l[m].x+=h,l[m].y+=c;return l},s.rotate=function(l,u,f){if(u!==0){var d=Math.cos(u),h=Math.sin(u),c=f.x,m=f.y,x=l.length,g,p,_,M;for(M=0;M<x;M++)g=l[M],p=g.x-c,_=g.y-m,g.x=c+(p*d-_*h),g.y=m+(p*h+_*d);return l}},s.contains=function(l,u){for(var f=u.x,d=u.y,h=l.length,c=l[h-1],m,x=0;x<h;x++){if(m=l[x],(f-c.x)*(m.y-c.y)+(d-c.y)*(c.x-m.x)>0)return!1;c=m}return!0},s.scale=function(l,u,f,d){if(u===1&&f===1)return l;d=d||s.centre(l);for(var h,c,m=0;m<l.length;m++)h=l[m],c=a.sub(h,d),l[m].x=d.x+c.x*u,l[m].y=d.y+c.y*f;return l},s.chamfer=function(l,u,f,d,h){typeof u=="number"?u=[u]:u=u||[8],f=typeof f!="undefined"?f:-1,d=d||2,h=h||14;for(var c=[],m=0;m<l.length;m++){var x=l[m-1>=0?m-1:l.length-1],g=l[m],p=l[(m+1)%l.length],_=u[m<u.length?m:u.length-1];if(_===0){c.push(g);continue}var M=a.normalise({x:g.y-x.y,y:x.x-g.x}),A=a.normalise({x:p.y-g.y,y:g.x-p.x}),v=Math.sqrt(2*Math.pow(_,2)),y=a.mult(o.clone(M),_),E=a.normalise(a.mult(a.add(M,A),.5)),T=a.sub(g,a.mult(E,v)),b=f;f===-1&&(b=Math.pow(_,.32)*1.75),b=o.clamp(b,d,h),b%2===1&&(b+=1);for(var S=Math.acos(a.dot(M,A)),w=S/b,C=0;C<b;C++)c.push(a.add(a.rotate(y,w*C),T))}return c},s.clockwiseSort=function(l){var u=s.mean(l);return l.sort(function(f,d){return a.angle(u,f)-a.angle(u,d)}),l},s.isConvex=function(l){var u=0,f=l.length,d,h,c,m;if(f<3)return null;for(d=0;d<f;d++)if(h=(d+1)%f,c=(d+2)%f,m=(l[h].x-l[d].x)*(l[c].y-l[h].y),m-=(l[h].y-l[d].y)*(l[c].x-l[h].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},s.hull=function(l){var u=[],f=[],d,h;for(l=l.slice(0),l.sort(function(c,m){var x=c.x-m.x;return x!==0?x:c.y-m.y}),h=0;h<l.length;h+=1){for(d=l[h];f.length>=2&&a.cross3(f[f.length-2],f[f.length-1],d)<=0;)f.pop();f.push(d)}for(h=l.length-1;h>=0;h-=1){for(d=l[h];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}return u.pop(),f.pop(),u.concat(f)}})()},function(t,i,r){var s={};t.exports=s;var a=r(3),o=r(2),l=r(7),u=r(0),f=r(1),d=r(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(c){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},x=u.extend(m,c);return h(x,c),x},s.nextGroup=function(c){return c?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var h=function(c,m){m=m||{},s.set(c,{bounds:c.bounds||f.create(c.vertices),positionPrev:c.positionPrev||o.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),a.rotate(c.vertices,c.angle,c.position),d.rotate(c.axes,c.angle),f.update(c.bounds,c.vertices,c.velocity),s.set(c,{axes:m.axes||c.axes,area:m.area||c.area,mass:m.mass||c.mass,inertia:m.inertia||c.inertia});var x=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),g=c.isStatic?"#555":"#ccc",p=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||x,c.render.strokeStyle=c.render.strokeStyle||g,c.render.lineWidth=c.render.lineWidth||p,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};s.set=function(c,m,x){var g;typeof m=="string"&&(g=m,m={},m[g]=x);for(g in m)if(!!Object.prototype.hasOwnProperty.call(m,g))switch(x=m[g],g){case"isStatic":s.setStatic(c,x);break;case"isSleeping":l.set(c,x);break;case"mass":s.setMass(c,x);break;case"density":s.setDensity(c,x);break;case"inertia":s.setInertia(c,x);break;case"vertices":s.setVertices(c,x);break;case"position":s.setPosition(c,x);break;case"angle":s.setAngle(c,x);break;case"velocity":s.setVelocity(c,x);break;case"angularVelocity":s.setAngularVelocity(c,x);break;case"speed":s.setSpeed(c,x);break;case"angularSpeed":s.setAngularSpeed(c,x);break;case"parts":s.setParts(c,x);break;case"centre":s.setCentre(c,x);break;default:c[g]=x}},s.setStatic=function(c,m){for(var x=0;x<c.parts.length;x++){var g=c.parts[x];m?(g.isStatic||(g._original={restitution:g.restitution,friction:g.friction,mass:g.mass,inertia:g.inertia,density:g.density,inverseMass:g.inverseMass,inverseInertia:g.inverseInertia}),g.restitution=0,g.friction=1,g.mass=g.inertia=g.density=1/0,g.inverseMass=g.inverseInertia=0,g.positionPrev.x=g.position.x,g.positionPrev.y=g.position.y,g.anglePrev=g.angle,g.angularVelocity=0,g.speed=0,g.angularSpeed=0,g.motion=0):g._original&&(g.restitution=g._original.restitution,g.friction=g._original.friction,g.mass=g._original.mass,g.inertia=g._original.inertia,g.density=g._original.density,g.inverseMass=g._original.inverseMass,g.inverseInertia=g._original.inverseInertia,g._original=null),g.isStatic=m}},s.setMass=function(c,m){var x=c.inertia/(c.mass/6);c.inertia=x*(m/6),c.inverseInertia=1/c.inertia,c.mass=m,c.inverseMass=1/c.mass,c.density=c.mass/c.area},s.setDensity=function(c,m){s.setMass(c,m*c.area),c.density=m},s.setInertia=function(c,m){c.inertia=m,c.inverseInertia=1/c.inertia},s.setVertices=function(c,m){m[0].body===c?c.vertices=m:c.vertices=a.create(m,c),c.axes=d.fromVertices(c.vertices),c.area=a.area(c.vertices),s.setMass(c,c.density*c.area);var x=a.centre(c.vertices);a.translate(c.vertices,x,-1),s.setInertia(c,s._inertiaScale*a.inertia(c.vertices,c.mass)),a.translate(c.vertices,c.position),f.update(c.bounds,c.vertices,c.velocity)},s.setParts=function(c,m,x){var g;for(m=m.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,g=0;g<m.length;g++){var p=m[g];p!==c&&(p.parent=c,c.parts.push(p))}if(c.parts.length!==1){if(x=typeof x!="undefined"?x:!0,x){var _=[];for(g=0;g<m.length;g++)_=_.concat(m[g].vertices);a.clockwiseSort(_);var M=a.hull(_),A=a.centre(M);s.setVertices(c,M),a.translate(c.vertices,A)}var v=s._totalProperties(c);c.area=v.area,c.parent=c,c.position.x=v.centre.x,c.position.y=v.centre.y,c.positionPrev.x=v.centre.x,c.positionPrev.y=v.centre.y,s.setMass(c,v.mass),s.setInertia(c,v.inertia),s.setPosition(c,v.centre)}},s.setCentre=function(c,m,x){x?(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y,c.position.x+=m.x,c.position.y+=m.y):(c.positionPrev.x=m.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=m.y-(c.position.y-c.positionPrev.y),c.position.x=m.x,c.position.y=m.y)},s.setPosition=function(c,m,x){var g=o.sub(m,c.position);x?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=g.x,c.velocity.y=g.y,c.speed=o.magnitude(g)):(c.positionPrev.x+=g.x,c.positionPrev.y+=g.y);for(var p=0;p<c.parts.length;p++){var _=c.parts[p];_.position.x+=g.x,_.position.y+=g.y,a.translate(_.vertices,g),f.update(_.bounds,_.vertices,c.velocity)}},s.setAngle=function(c,m,x){var g=m-c.angle;x?(c.anglePrev=c.angle,c.angularVelocity=g,c.angularSpeed=Math.abs(g)):c.anglePrev+=g;for(var p=0;p<c.parts.length;p++){var _=c.parts[p];_.angle+=g,a.rotate(_.vertices,g,c.position),d.rotate(_.axes,g),f.update(_.bounds,_.vertices,c.velocity),p>0&&o.rotateAbout(_.position,g,c.position,_.position)}},s.setVelocity=function(c,m){var x=c.deltaTime/s._baseDelta;c.positionPrev.x=c.position.x-m.x*x,c.positionPrev.y=c.position.y-m.y*x,c.velocity.x=(c.position.x-c.positionPrev.x)/x,c.velocity.y=(c.position.y-c.positionPrev.y)/x,c.speed=o.magnitude(c.velocity)},s.getVelocity=function(c){var m=s._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*m,y:(c.position.y-c.positionPrev.y)*m}},s.getSpeed=function(c){return o.magnitude(s.getVelocity(c))},s.setSpeed=function(c,m){s.setVelocity(c,o.mult(o.normalise(s.getVelocity(c)),m))},s.setAngularVelocity=function(c,m){var x=c.deltaTime/s._baseDelta;c.anglePrev=c.angle-m*x,c.angularVelocity=(c.angle-c.anglePrev)/x,c.angularSpeed=Math.abs(c.angularVelocity)},s.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*s._baseDelta/c.deltaTime},s.getAngularSpeed=function(c){return Math.abs(s.getAngularVelocity(c))},s.setAngularSpeed=function(c,m){s.setAngularVelocity(c,u.sign(s.getAngularVelocity(c))*m)},s.translate=function(c,m,x){s.setPosition(c,o.add(c.position,m),x)},s.rotate=function(c,m,x,g){if(!x)s.setAngle(c,c.angle+m,g);else{var p=Math.cos(m),_=Math.sin(m),M=c.position.x-x.x,A=c.position.y-x.y;s.setPosition(c,{x:x.x+(M*p-A*_),y:x.y+(M*_+A*p)},g),s.setAngle(c,c.angle+m,g)}},s.scale=function(c,m,x,g){var p=0,_=0;g=g||c.position;for(var M=0;M<c.parts.length;M++){var A=c.parts[M];a.scale(A.vertices,m,x,g),A.axes=d.fromVertices(A.vertices),A.area=a.area(A.vertices),s.setMass(A,c.density*A.area),a.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),s.setInertia(A,s._inertiaScale*a.inertia(A.vertices,A.mass)),a.translate(A.vertices,{x:A.position.x,y:A.position.y}),M>0&&(p+=A.area,_+=A.inertia),A.position.x=g.x+(A.position.x-g.x)*m,A.position.y=g.y+(A.position.y-g.y)*x,f.update(A.bounds,A.vertices,c.velocity)}c.parts.length>1&&(c.area=p,c.isStatic||(s.setMass(c,c.density*p),s.setInertia(c,_))),c.circleRadius&&(m===x?c.circleRadius*=m:c.circleRadius=null)},s.update=function(c,m){m=(typeof m!="undefined"?m:1e3/60)*c.timeScale;var x=m*m,g=s._timeCorrection?m/(c.deltaTime||m):1,p=1-c.frictionAir*(m/u._baseDelta),_=(c.position.x-c.positionPrev.x)*g,M=(c.position.y-c.positionPrev.y)*g;c.velocity.x=_*p+c.force.x/c.mass*x,c.velocity.y=M*p+c.force.y/c.mass*x,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=m,c.angularVelocity=(c.angle-c.anglePrev)*p*g+c.torque/c.inertia*x,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var A=0;A<c.parts.length;A++){var v=c.parts[A];a.translate(v.vertices,c.velocity),A>0&&(v.position.x+=c.velocity.x,v.position.y+=c.velocity.y),c.angularVelocity!==0&&(a.rotate(v.vertices,c.angularVelocity,c.position),d.rotate(v.axes,c.angularVelocity),A>0&&o.rotateAbout(v.position,c.angularVelocity,c.position,v.position)),f.update(v.bounds,v.vertices,c.velocity)}},s.updateVelocities=function(c){var m=s._baseDelta/c.deltaTime,x=c.velocity;x.x=(c.position.x-c.positionPrev.x)*m,x.y=(c.position.y-c.positionPrev.y)*m,c.speed=Math.sqrt(x.x*x.x+x.y*x.y),c.angularVelocity=(c.angle-c.anglePrev)*m,c.angularSpeed=Math.abs(c.angularVelocity)},s.applyForce=function(c,m,x){var g={x:m.x-c.position.x,y:m.y-c.position.y};c.force.x+=x.x,c.force.y+=x.y,c.torque+=g.x*x.y-g.y*x.x},s._totalProperties=function(c){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},x=c.parts.length===1?0:1;x<c.parts.length;x++){var g=c.parts[x],p=g.mass!==1/0?g.mass:1;m.mass+=p,m.area+=g.area,m.inertia+=g.inertia,m.centre=o.add(m.centre,o.mult(g.position,p))}return m.centre=o.div(m.centre,m.mass),m}})()},function(t,i,r){var s={};t.exports=s;var a=r(0);(function(){s.on=function(o,l,u){for(var f=l.split(" "),d,h=0;h<f.length;h++)d=f[h],o.events=o.events||{},o.events[d]=o.events[d]||[],o.events[d].push(u);return u},s.off=function(o,l,u){if(!l){o.events={};return}typeof l=="function"&&(u=l,l=a.keys(o.events).join(" "));for(var f=l.split(" "),d=0;d<f.length;d++){var h=o.events[f[d]],c=[];if(u&&h)for(var m=0;m<h.length;m++)h[m]!==u&&c.push(h[m]);o.events[f[d]]=c}},s.trigger=function(o,l,u){var f,d,h,c,m=o.events;if(m&&a.keys(m).length>0){u||(u={}),f=l.split(" ");for(var x=0;x<f.length;x++)if(d=f[x],h=m[d],h){c=a.clone(u,!1),c.name=d,c.source=o;for(var g=0;g<h.length;g++)h[g].apply(o,[c])}}}})()},function(t,i,r){var s={};t.exports=s;var a=r(5),o=r(0),l=r(1),u=r(4);(function(){s.create=function(f){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},f)},s.setModified=function(f,d,h,c){if(f.isModified=d,d&&f.cache&&(f.cache.allBodies=null,f.cache.allConstraints=null,f.cache.allComposites=null),h&&f.parent&&s.setModified(f.parent,d,h,c),c)for(var m=0;m<f.composites.length;m++){var x=f.composites[m];s.setModified(x,d,h,c)}},s.add=function(f,d){var h=[].concat(d);a.trigger(f,"beforeAdd",{object:d});for(var c=0;c<h.length;c++){var m=h[c];switch(m.type){case"body":if(m.parent!==m){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(f,m);break;case"constraint":s.addConstraint(f,m);break;case"composite":s.addComposite(f,m);break;case"mouseConstraint":s.addConstraint(f,m.constraint);break}}return a.trigger(f,"afterAdd",{object:d}),f},s.remove=function(f,d,h){var c=[].concat(d);a.trigger(f,"beforeRemove",{object:d});for(var m=0;m<c.length;m++){var x=c[m];switch(x.type){case"body":s.removeBody(f,x,h);break;case"constraint":s.removeConstraint(f,x,h);break;case"composite":s.removeComposite(f,x,h);break;case"mouseConstraint":s.removeConstraint(f,x.constraint);break}}return a.trigger(f,"afterRemove",{object:d}),f},s.addComposite=function(f,d){return f.composites.push(d),d.parent=f,s.setModified(f,!0,!0,!1),f},s.removeComposite=function(f,d,h){var c=o.indexOf(f.composites,d);if(c!==-1){var m=s.allBodies(d);s.removeCompositeAt(f,c);for(var x=0;x<m.length;x++)m[x].sleepCounter=0}if(h)for(var x=0;x<f.composites.length;x++)s.removeComposite(f.composites[x],d,!0);return f},s.removeCompositeAt=function(f,d){return f.composites.splice(d,1),s.setModified(f,!0,!0,!1),f},s.addBody=function(f,d){return f.bodies.push(d),s.setModified(f,!0,!0,!1),f},s.removeBody=function(f,d,h){var c=o.indexOf(f.bodies,d);if(c!==-1&&(s.removeBodyAt(f,c),d.sleepCounter=0),h)for(var m=0;m<f.composites.length;m++)s.removeBody(f.composites[m],d,!0);return f},s.removeBodyAt=function(f,d){return f.bodies.splice(d,1),s.setModified(f,!0,!0,!1),f},s.addConstraint=function(f,d){return f.constraints.push(d),s.setModified(f,!0,!0,!1),f},s.removeConstraint=function(f,d,h){var c=o.indexOf(f.constraints,d);if(c!==-1&&s.removeConstraintAt(f,c),h)for(var m=0;m<f.composites.length;m++)s.removeConstraint(f.composites[m],d,!0);return f},s.removeConstraintAt=function(f,d){return f.constraints.splice(d,1),s.setModified(f,!0,!0,!1),f},s.clear=function(f,d,h){if(h)for(var c=0;c<f.composites.length;c++)s.clear(f.composites[c],d,!0);return d?f.bodies=f.bodies.filter(function(m){return m.isStatic}):f.bodies.length=0,f.constraints.length=0,f.composites.length=0,s.setModified(f,!0,!0,!1),f},s.allBodies=function(f){if(f.cache&&f.cache.allBodies)return f.cache.allBodies;for(var d=[].concat(f.bodies),h=0;h<f.composites.length;h++)d=d.concat(s.allBodies(f.composites[h]));return f.cache&&(f.cache.allBodies=d),d},s.allConstraints=function(f){if(f.cache&&f.cache.allConstraints)return f.cache.allConstraints;for(var d=[].concat(f.constraints),h=0;h<f.composites.length;h++)d=d.concat(s.allConstraints(f.composites[h]));return f.cache&&(f.cache.allConstraints=d),d},s.allComposites=function(f){if(f.cache&&f.cache.allComposites)return f.cache.allComposites;for(var d=[].concat(f.composites),h=0;h<f.composites.length;h++)d=d.concat(s.allComposites(f.composites[h]));return f.cache&&(f.cache.allComposites=d),d},s.get=function(f,d,h){var c,m;switch(h){case"body":c=s.allBodies(f);break;case"constraint":c=s.allConstraints(f);break;case"composite":c=s.allComposites(f).concat(f);break}return c?(m=c.filter(function(x){return x.id.toString()===d.toString()}),m.length===0?null:m[0]):null},s.move=function(f,d,h){return s.remove(f,d),s.add(h,d),f},s.rebase=function(f){for(var d=s.allBodies(f).concat(s.allConstraints(f)).concat(s.allComposites(f)),h=0;h<d.length;h++)d[h].id=o.nextId();return f},s.translate=function(f,d,h){for(var c=h?s.allBodies(f):f.bodies,m=0;m<c.length;m++)u.translate(c[m],d);return f},s.rotate=function(f,d,h,c){for(var m=Math.cos(d),x=Math.sin(d),g=c?s.allBodies(f):f.bodies,p=0;p<g.length;p++){var _=g[p],M=_.position.x-h.x,A=_.position.y-h.y;u.setPosition(_,{x:h.x+(M*m-A*x),y:h.y+(M*x+A*m)}),u.rotate(_,d)}return f},s.scale=function(f,d,h,c,m){for(var x=m?s.allBodies(f):f.bodies,g=0;g<x.length;g++){var p=x[g],_=p.position.x-c.x,M=p.position.y-c.y;u.setPosition(p,{x:c.x+_*d,y:c.y+M*h}),u.scale(p,d,h)}return f},s.bounds=function(f){for(var d=s.allBodies(f),h=[],c=0;c<d.length;c+=1){var m=d[c];h.push(m.bounds.min,m.bounds.max)}return l.create(h)}})()},function(t,i,r){var s={};t.exports=s;var a=r(4),o=r(5),l=r(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(u,f){for(var d=f/l._baseDelta,h=s._motionSleepThreshold,c=0;c<u.length;c++){var m=u[c],x=a.getSpeed(m),g=a.getAngularSpeed(m),p=x*x+g*g;if(m.force.x!==0||m.force.y!==0){s.set(m,!1);continue}var _=Math.min(m.motion,p),M=Math.max(m.motion,p);m.motion=s._minBias*_+(1-s._minBias)*M,m.sleepThreshold>0&&m.motion<h?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/d&&s.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},s.afterCollisions=function(u){for(var f=s._motionSleepThreshold,d=0;d<u.length;d++){var h=u[d];if(!!h.isActive){var c=h.collision,m=c.bodyA.parent,x=c.bodyB.parent;if(!(m.isSleeping&&x.isSleeping||m.isStatic||x.isStatic)&&(m.isSleeping||x.isSleeping)){var g=m.isSleeping&&!m.isStatic?m:x,p=g===m?x:m;!g.isStatic&&p.motion>f&&s.set(g,!1)}}}},s.set=function(u,f){var d=u.isSleeping;f?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,d||o.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,d&&o.trigger(u,"sleepEnd"))}})()},function(t,i,r){var s={};t.exports=s;var a=r(3),o=r(9);(function(){var l=[],u={overlap:0,axis:null},f={overlap:0,axis:null};s.create=function(d,h){return{pair:null,collided:!1,bodyA:d,bodyB:h,parentA:d.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(d,h,c){if(s._overlapAxes(u,d.vertices,h.vertices,d.axes),u.overlap<=0||(s._overlapAxes(f,h.vertices,d.vertices,h.axes),f.overlap<=0))return null;var m=c&&c.table[o.id(d,h)],x;m?x=m.collision:(x=s.create(d,h),x.collided=!0,x.bodyA=d.id<h.id?d:h,x.bodyB=d.id<h.id?h:d,x.parentA=x.bodyA.parent,x.parentB=x.bodyB.parent),d=x.bodyA,h=x.bodyB;var g;u.overlap<f.overlap?g=u:g=f;var p=x.normal,_=x.tangent,M=x.penetration,A=x.supports,v=g.overlap,y=g.axis,E=y.x,T=y.y,b=h.position.x-d.position.x,S=h.position.y-d.position.y;E*b+T*S>=0&&(E=-E,T=-T),p.x=E,p.y=T,_.x=-T,_.y=E,M.x=E*v,M.y=T*v,x.depth=v;var w=s._findSupports(d,h,p,1),C=0;if(a.contains(d.vertices,w[0])&&(A[C++]=w[0]),a.contains(d.vertices,w[1])&&(A[C++]=w[1]),C<2){var L=s._findSupports(h,d,p,-1);a.contains(h.vertices,L[0])&&(A[C++]=L[0]),C<2&&a.contains(h.vertices,L[1])&&(A[C++]=L[1])}return C===0&&(A[C++]=w[0]),x.supportCount=C,x},s._overlapAxes=function(d,h,c,m){var x=h.length,g=c.length,p=h[0].x,_=h[0].y,M=c[0].x,A=c[0].y,v=m.length,y=Number.MAX_VALUE,E=0,T,b,S,w,C,L;for(C=0;C<v;C++){var U=m[C],F=U.x,V=U.y,z=p*F+_*V,N=M*F+A*V,X=z,j=N;for(L=1;L<x;L+=1)w=h[L].x*F+h[L].y*V,w>X?X=w:w<z&&(z=w);for(L=1;L<g;L+=1)w=c[L].x*F+c[L].y*V,w>j?j=w:w<N&&(N=w);if(b=X-N,S=j-z,T=b<S?b:S,T<y&&(y=T,E=C,T<=0))break}d.axis=m[E],d.overlap=y},s._findSupports=function(d,h,c,m){var x=h.vertices,g=x.length,p=d.position.x,_=d.position.y,M=c.x*m,A=c.y*m,v=x[0],y=v,E=M*(p-y.x)+A*(_-y.y),T,b,S;for(S=1;S<g;S+=1)y=x[S],b=M*(p-y.x)+A*(_-y.y),b<E&&(E=b,v=y);return T=x[(g+v.index-1)%g],E=M*(p-T.x)+A*(_-T.y),y=x[(v.index+1)%g],M*(p-y.x)+A*(_-y.y)<E?(l[0]=v,l[1]=y,l):(l[0]=v,l[1]=T,l)}})()},function(t,i,r){var s={};t.exports=s;var a=r(16);(function(){s.create=function(o,l){var u=o.bodyA,f=o.bodyB,d={id:s.id(u,f),bodyA:u,bodyB:f,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||f.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(d,o,l),d},s.update=function(o,l,u){var f=l.supports,d=l.supportCount,h=o.contacts,c=l.parentA,m=l.parentB;o.isActive=!0,o.timeUpdated=u,o.collision=l,o.separation=l.depth,o.inverseMass=c.inverseMass+m.inverseMass,o.friction=c.friction<m.friction?c.friction:m.friction,o.frictionStatic=c.frictionStatic>m.frictionStatic?c.frictionStatic:m.frictionStatic,o.restitution=c.restitution>m.restitution?c.restitution:m.restitution,o.slop=c.slop>m.slop?c.slop:m.slop,o.contactCount=d,l.pair=o;var x=f[0],g=h[0],p=f[1],_=h[1];(_.vertex===x||g.vertex===p)&&(h[1]=g,h[0]=g=_,_=h[1]),g.vertex=x,_.vertex=p},s.setActive=function(o,l,u){l?(o.isActive=!0,o.timeUpdated=u):(o.isActive=!1,o.contactCount=0)},s.id=function(o,l){return o.id<l.id?o.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+o.id.toString(36)}})()},function(t,i,r){var s={};t.exports=s;var a=r(3),o=r(2),l=r(7),u=r(1),f=r(11),d=r(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(h){var c=h;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var m=c.bodyA?o.add(c.bodyA.position,c.pointA):c.pointA,x=c.bodyB?o.add(c.bodyB.position,c.pointB):c.pointB,g=o.magnitude(o.sub(m,x));c.length=typeof c.length!="undefined"?c.length:g,c.id=c.id||d.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var p={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(p.type="pin",p.anchors=!1):c.stiffness<.9&&(p.type="spring"),c.render=d.extend(p,c.render),c},s.preSolveAll=function(h){for(var c=0;c<h.length;c+=1){var m=h[c],x=m.constraintImpulse;m.isStatic||x.x===0&&x.y===0&&x.angle===0||(m.position.x+=x.x,m.position.y+=x.y,m.angle+=x.angle)}},s.solveAll=function(h,c){for(var m=d.clamp(c/d._baseDelta,0,1),x=0;x<h.length;x+=1){var g=h[x],p=!g.bodyA||g.bodyA&&g.bodyA.isStatic,_=!g.bodyB||g.bodyB&&g.bodyB.isStatic;(p||_)&&s.solve(h[x],m)}for(x=0;x<h.length;x+=1)g=h[x],p=!g.bodyA||g.bodyA&&g.bodyA.isStatic,_=!g.bodyB||g.bodyB&&g.bodyB.isStatic,!p&&!_&&s.solve(h[x],m)},s.solve=function(h,c){var m=h.bodyA,x=h.bodyB,g=h.pointA,p=h.pointB;if(!(!m&&!x)){m&&!m.isStatic&&(o.rotate(g,m.angle-h.angleA,g),h.angleA=m.angle),x&&!x.isStatic&&(o.rotate(p,x.angle-h.angleB,p),h.angleB=x.angle);var _=g,M=p;if(m&&(_=o.add(m.position,g)),x&&(M=o.add(x.position,p)),!(!_||!M)){var A=o.sub(_,M),v=o.magnitude(A);v<s._minLength&&(v=s._minLength);var y=(v-h.length)/v,E=h.stiffness>=1||h.length===0,T=E?h.stiffness*c:h.stiffness*c*c,b=h.damping*c,S=o.mult(A,y*T),w=(m?m.inverseMass:0)+(x?x.inverseMass:0),C=(m?m.inverseInertia:0)+(x?x.inverseInertia:0),L=w+C,U,F,V,z,N;if(b>0){var X=o.create();V=o.div(A,v),N=o.sub(x&&o.sub(x.position,x.positionPrev)||X,m&&o.sub(m.position,m.positionPrev)||X),z=o.dot(V,N)}m&&!m.isStatic&&(F=m.inverseMass/w,m.constraintImpulse.x-=S.x*F,m.constraintImpulse.y-=S.y*F,m.position.x-=S.x*F,m.position.y-=S.y*F,b>0&&(m.positionPrev.x-=b*V.x*z*F,m.positionPrev.y-=b*V.y*z*F),U=o.cross(g,S)/L*s._torqueDampen*m.inverseInertia*(1-h.angularStiffness),m.constraintImpulse.angle-=U,m.angle-=U),x&&!x.isStatic&&(F=x.inverseMass/w,x.constraintImpulse.x+=S.x*F,x.constraintImpulse.y+=S.y*F,x.position.x+=S.x*F,x.position.y+=S.y*F,b>0&&(x.positionPrev.x+=b*V.x*z*F,x.positionPrev.y+=b*V.y*z*F),U=o.cross(p,S)/L*s._torqueDampen*x.inverseInertia*(1-h.angularStiffness),x.constraintImpulse.angle+=U,x.angle+=U)}}},s.postSolveAll=function(h){for(var c=0;c<h.length;c++){var m=h[c],x=m.constraintImpulse;if(!(m.isStatic||x.x===0&&x.y===0&&x.angle===0)){l.set(m,!1);for(var g=0;g<m.parts.length;g++){var p=m.parts[g];a.translate(p.vertices,x),g>0&&(p.position.x+=x.x,p.position.y+=x.y),x.angle!==0&&(a.rotate(p.vertices,x.angle,m.position),f.rotate(p.axes,x.angle),g>0&&o.rotateAbout(p.position,x.angle,m.position,p.position)),u.update(p.bounds,p.vertices,m.velocity)}x.angle*=s._warming,x.x*=s._warming,x.y*=s._warming}}},s.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},s.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},s.currentLength=function(h){var c=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),m=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),x=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),g=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),p=c-x,_=m-g;return Math.sqrt(p*p+_*_)}})()},function(t,i,r){var s={};t.exports=s;var a=r(2),o=r(0);(function(){s.fromVertices=function(l){for(var u={},f=0;f<l.length;f++){var d=(f+1)%l.length,h=a.normalise({x:l[d].y-l[f].y,y:l[f].x-l[d].x}),c=h.y===0?1/0:h.x/h.y;c=c.toFixed(3).toString(),u[c]=h}return o.values(u)},s.rotate=function(l,u){if(u!==0)for(var f=Math.cos(u),d=Math.sin(u),h=0;h<l.length;h++){var c=l[h],m;m=c.x*f-c.y*d,c.y=c.x*d+c.y*f,c.x=m}}})()},function(t,i,r){var s={};t.exports=s;var a=r(3),o=r(0),l=r(4),u=r(1),f=r(2);(function(){s.rectangle=function(d,h,c,m,x){x=x||{};var g={label:"Rectangle Body",position:{x:d,y:h},vertices:a.fromPath("L 0 0 L "+c+" 0 L "+c+" "+m+" L 0 "+m)};if(x.chamfer){var p=x.chamfer;g.vertices=a.chamfer(g.vertices,p.radius,p.quality,p.qualityMin,p.qualityMax),delete x.chamfer}return l.create(o.extend({},g,x))},s.trapezoid=function(d,h,c,m,x,g){g=g||{},x>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),x*=.5;var p=(1-x*2)*c,_=c*x,M=_+p,A=M+_,v;x<.5?v="L 0 0 L "+_+" "+-m+" L "+M+" "+-m+" L "+A+" 0":v="L 0 0 L "+M+" "+-m+" L "+A+" 0";var y={label:"Trapezoid Body",position:{x:d,y:h},vertices:a.fromPath(v)};if(g.chamfer){var E=g.chamfer;y.vertices=a.chamfer(y.vertices,E.radius,E.quality,E.qualityMin,E.qualityMax),delete g.chamfer}return l.create(o.extend({},y,g))},s.circle=function(d,h,c,m,x){m=m||{};var g={label:"Circle Body",circleRadius:c};x=x||25;var p=Math.ceil(Math.max(10,Math.min(x,c)));return p%2===1&&(p+=1),s.polygon(d,h,p,c,o.extend({},g,m))},s.polygon=function(d,h,c,m,x){if(x=x||{},c<3)return s.circle(d,h,m,x);for(var g=2*Math.PI/c,p="",_=g*.5,M=0;M<c;M+=1){var A=_+M*g,v=Math.cos(A)*m,y=Math.sin(A)*m;p+="L "+v.toFixed(3)+" "+y.toFixed(3)+" "}var E={label:"Polygon Body",position:{x:d,y:h},vertices:a.fromPath(p)};if(x.chamfer){var T=x.chamfer;E.vertices=a.chamfer(E.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete x.chamfer}return l.create(o.extend({},E,x))},s.fromVertices=function(d,h,c,m,x,g,p,_){var M=o.getDecomp(),A,v,y,E,T,b,S,w,C,L,U;for(A=Boolean(M&&M.quickDecomp),m=m||{},y=[],x=typeof x!="undefined"?x:!1,g=typeof g!="undefined"?g:.01,p=typeof p!="undefined"?p:10,_=typeof _!="undefined"?_:.01,o.isArray(c[0])||(c=[c]),L=0;L<c.length;L+=1)if(b=c[L],E=a.isConvex(b),T=!E,T&&!A&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),E||!A)E?b=a.clockwiseSort(b):b=a.hull(b),y.push({position:{x:d,y:h},vertices:b});else{var F=b.map(function(W){return[W.x,W.y]});M.makeCCW(F),g!==!1&&M.removeCollinearPoints(F,g),_!==!1&&M.removeDuplicatePoints&&M.removeDuplicatePoints(F,_);var V=M.quickDecomp(F);for(S=0;S<V.length;S++){var z=V[S],N=z.map(function(W){return{x:W[0],y:W[1]}});p>0&&a.area(N)<p||y.push({position:a.centre(N),vertices:N})}}for(S=0;S<y.length;S++)y[S]=l.create(o.extend(y[S],m));if(x){var X=5;for(S=0;S<y.length;S++){var j=y[S];for(w=S+1;w<y.length;w++){var ce=y[w];if(u.overlaps(j.bounds,ce.bounds)){var Me=j.vertices,Ue=ce.vertices;for(C=0;C<j.vertices.length;C++)for(U=0;U<ce.vertices.length;U++){var Xe=f.magnitudeSquared(f.sub(Me[(C+1)%Me.length],Ue[U])),He=f.magnitudeSquared(f.sub(Me[C],Ue[(U+1)%Ue.length]));Xe<X&&He<X&&(Me[C].isInternal=!0,Ue[U].isInternal=!0)}}}}}return y.length>1?(v=l.create(o.extend({parts:y.slice(0)},m)),l.setPosition(v,{x:d,y:h}),v):y[0]}})()},function(t,i,r){var s={};t.exports=s;var a=r(0),o=r(8);(function(){s.create=function(l){var u={bodies:[],collisions:[],pairs:null};return a.extend(u,l)},s.setBodies=function(l,u){l.bodies=u.slice(0)},s.clear=function(l){l.bodies=[],l.collisions=[]},s.collisions=function(l){var u=l.pairs,f=l.bodies,d=f.length,h=s.canCollide,c=o.collides,m=l.collisions,x=0,g,p;for(f.sort(s._compareBoundsX),g=0;g<d;g++){var _=f[g],M=_.bounds,A=_.bounds.max.x,v=_.bounds.max.y,y=_.bounds.min.y,E=_.isStatic||_.isSleeping,T=_.parts.length,b=T===1;for(p=g+1;p<d;p++){var S=f[p],w=S.bounds;if(w.min.x>A)break;if(!(v<w.min.y||y>w.max.y)&&!(E&&(S.isStatic||S.isSleeping))&&!!h(_.collisionFilter,S.collisionFilter)){var C=S.parts.length;if(b&&C===1){var L=c(_,S,u);L&&(m[x++]=L)}else for(var U=T>1?1:0,F=C>1?1:0,V=U;V<T;V++)for(var z=_.parts[V],M=z.bounds,N=F;N<C;N++){var X=S.parts[N],w=X.bounds;if(!(M.min.x>w.max.x||M.max.x<w.min.x||M.max.y<w.min.y||M.min.y>w.max.y)){var L=c(z,X,u);L&&(m[x++]=L)}}}}}return m.length!==x&&(m.length=x),m},s.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},s._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(t,i,r){var s={};t.exports=s;var a=r(0);(function(){s.create=function(o){var l={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=o||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var f=s._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&(l.button=0,u.preventDefault()),l.absolute.x=f.x,l.absolute.y=f.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var f=s._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=f.x,l.absolute.y=f.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var f=s._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&u.preventDefault(),l.button=-1,l.absolute.x=f.x,l.absolute.y=f.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},s.setElement(l,l.element),l},s.setElement=function(o,l){o.element=l,l.addEventListener("mousemove",o.mousemove,{passive:!0}),l.addEventListener("mousedown",o.mousedown,{passive:!0}),l.addEventListener("mouseup",o.mouseup,{passive:!0}),l.addEventListener("wheel",o.mousewheel,{passive:!1}),l.addEventListener("touchmove",o.mousemove,{passive:!1}),l.addEventListener("touchstart",o.mousedown,{passive:!1}),l.addEventListener("touchend",o.mouseup,{passive:!1})},s.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},s.setOffset=function(o,l){o.offset.x=l.x,o.offset.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},s.setScale=function(o,l){o.scale.x=l.x,o.scale.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},s._getRelativeMousePosition=function(o,l,u){var f=l.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,m=o.changedTouches,x,g;return m?(x=m[0].pageX-f.left-h,g=m[0].pageY-f.top-c):(x=o.pageX-f.left-h,g=o.pageY-f.top-c),{x:x/(l.clientWidth/(l.width||l.clientWidth)*u),y:g/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(t,i,r){var s={};t.exports=s;var a=r(0);(function(){s._registry={},s.register=function(o){if(s.isPlugin(o)||a.warn("Plugin.register:",s.toString(o),"does not implement all required fields."),o.name in s._registry){var l=s._registry[o.name],u=s.versionParse(o.version).number,f=s.versionParse(l.version).number;u>f?(a.warn("Plugin.register:",s.toString(l),"was upgraded to",s.toString(o)),s._registry[o.name]=o):u<f?a.warn("Plugin.register:",s.toString(l),"can not be downgraded to",s.toString(o)):o!==l&&a.warn("Plugin.register:",s.toString(o),"is already registered to different plugin object")}else s._registry[o.name]=o;return o},s.resolve=function(o){return s._registry[s.dependencyParse(o).name]},s.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},s.isPlugin=function(o){return o&&o.name&&o.version&&o.install},s.isUsed=function(o,l){return o.used.indexOf(l)>-1},s.isFor=function(o,l){var u=o.for&&s.dependencyParse(o.for);return!o.for||l.name===u.name&&s.versionSatisfies(l.version,u.range)},s.use=function(o,l){if(o.uses=(o.uses||[]).concat(l||[]),o.uses.length===0){a.warn("Plugin.use:",s.toString(o),"does not specify any dependencies to install.");return}for(var u=s.dependencies(o),f=a.topologicalSort(u),d=[],h=0;h<f.length;h+=1)if(f[h]!==o.name){var c=s.resolve(f[h]);if(!c){d.push("\u274C "+f[h]);continue}s.isUsed(o,c.name)||(s.isFor(c,o)||(a.warn("Plugin.use:",s.toString(c),"is for",c.for,"but installed on",s.toString(o)+"."),c._warned=!0),c.install?c.install(o):(a.warn("Plugin.use:",s.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(d.push("\u{1F536} "+s.toString(c)),delete c._warned):d.push("\u2705 "+s.toString(c)),o.used.push(c.name))}d.length>0&&a.info(d.join("  "))},s.dependencies=function(o,l){var u=s.dependencyParse(o),f=u.name;if(l=l||{},!(f in l)){o=s.resolve(o)||o,l[f]=a.map(o.uses||[],function(h){s.isPlugin(h)&&s.register(h);var c=s.dependencyParse(h),m=s.resolve(h);return m&&!s.versionSatisfies(m.version,c.range)?(a.warn("Plugin.dependencies:",s.toString(m),"does not satisfy",s.toString(c),"used by",s.toString(u)+"."),m._warned=!0,o._warned=!0):m||(a.warn("Plugin.dependencies:",s.toString(h),"used by",s.toString(u),"could not be resolved."),o._warned=!0),c.name});for(var d=0;d<l[f].length;d+=1)s.dependencies(l[f][d],l);return l}},s.dependencyParse=function(o){if(a.isString(o)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},s.versionParse=function(o){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var u=l.exec(o),f=Number(u[4]),d=Number(u[5]),h=Number(u[6]);return{isRange:Boolean(u[1]||u[2]),version:u[3],range:o,operator:u[1]||u[2]||"",major:f,minor:d,patch:h,parts:[f,d,h],prerelease:u[7],number:f*1e8+d*1e4+h}},s.versionSatisfies=function(o,l){l=l||"*";var u=s.versionParse(l),f=s.versionParse(o);if(u.isRange){if(u.operator==="*"||o==="*")return!0;if(u.operator===">")return f.number>u.number;if(u.operator===">=")return f.number>=u.number;if(u.operator==="~")return f.major===u.major&&f.minor===u.minor&&f.patch>=u.patch;if(u.operator==="^")return u.major>0?f.major===u.major&&f.number>=u.number:u.minor>0?f.minor===u.minor&&f.patch>=u.patch:f.patch===u.patch}return o===l||o==="*"}})()},function(t,i){var r={};t.exports=r,function(){r.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,r){var s={};t.exports=s;var a=r(7),o=r(18),l=r(13),u=r(19),f=r(5),d=r(6),h=r(10),c=r(0),m=r(4);(function(){s._deltaMax=1e3/60,s.create=function(x){x=x||{};var g={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},p=c.extend(g,x);return p.world=x.world||d.create({label:"World"}),p.pairs=x.pairs||u.create(),p.detector=x.detector||l.create(),p.detector.pairs=p.pairs,p.grid={buckets:[]},p.world.gravity=p.gravity,p.broadphase=p.grid,p.metrics={},p},s.update=function(x,g){var p=c.now(),_=x.world,M=x.detector,A=x.pairs,v=x.timing,y=v.timestamp,E;g>s._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),g=typeof g!="undefined"?g:c._baseDelta,g*=v.timeScale,v.timestamp+=g,v.lastDelta=g;var T={timestamp:v.timestamp,delta:g};f.trigger(x,"beforeUpdate",T);var b=d.allBodies(_),S=d.allConstraints(_);for(_.isModified&&(l.setBodies(M,b),d.setModified(_,!1,!1,!0)),x.enableSleeping&&a.update(b,g),s._bodiesApplyGravity(b,x.gravity),g>0&&s._bodiesUpdate(b,g),f.trigger(x,"beforeSolve",T),h.preSolveAll(b),E=0;E<x.constraintIterations;E++)h.solveAll(S,g);h.postSolveAll(b);var w=l.collisions(M);u.update(A,w,y),x.enableSleeping&&a.afterCollisions(A.list),A.collisionStart.length>0&&f.trigger(x,"collisionStart",{pairs:A.collisionStart,timestamp:v.timestamp,delta:g});var C=c.clamp(20/x.positionIterations,0,1);for(o.preSolvePosition(A.list),E=0;E<x.positionIterations;E++)o.solvePosition(A.list,g,C);for(o.postSolvePosition(b),h.preSolveAll(b),E=0;E<x.constraintIterations;E++)h.solveAll(S,g);for(h.postSolveAll(b),o.preSolveVelocity(A.list),E=0;E<x.velocityIterations;E++)o.solveVelocity(A.list,g);return s._bodiesUpdateVelocities(b),A.collisionActive.length>0&&f.trigger(x,"collisionActive",{pairs:A.collisionActive,timestamp:v.timestamp,delta:g}),A.collisionEnd.length>0&&f.trigger(x,"collisionEnd",{pairs:A.collisionEnd,timestamp:v.timestamp,delta:g}),s._bodiesClearForces(b),f.trigger(x,"afterUpdate",T),x.timing.lastElapsed=c.now()-p,x},s.merge=function(x,g){if(c.extend(x,g),g.world){x.world=g.world,s.clear(x);for(var p=d.allBodies(x.world),_=0;_<p.length;_++){var M=p[_];a.set(M,!1),M.id=c.nextId()}}},s.clear=function(x){u.clear(x.pairs),l.clear(x.detector)},s._bodiesClearForces=function(x){for(var g=x.length,p=0;p<g;p++){var _=x[p];_.force.x=0,_.force.y=0,_.torque=0}},s._bodiesApplyGravity=function(x,g){var p=typeof g.scale!="undefined"?g.scale:.001,_=x.length;if(!(g.x===0&&g.y===0||p===0))for(var M=0;M<_;M++){var A=x[M];A.isStatic||A.isSleeping||(A.force.y+=A.mass*g.y*p,A.force.x+=A.mass*g.x*p)}},s._bodiesUpdate=function(x,g){for(var p=x.length,_=0;_<p;_++){var M=x[_];M.isStatic||M.isSleeping||m.update(M,g)}},s._bodiesUpdateVelocities=function(x){for(var g=x.length,p=0;p<g;p++)m.updateVelocities(x[p])}})()},function(t,i,r){var s={};t.exports=s;var a=r(3),o=r(0),l=r(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(u){var f,d,h,c=u.length;for(f=0;f<c;f++)d=u[f],d.isActive&&(h=d.contactCount,d.collision.parentA.totalContacts+=h,d.collision.parentB.totalContacts+=h)},s.solvePosition=function(u,f,d){var h,c,m,x,g,p,_,M,A=s._positionDampen*(d||1),v=o.clamp(f/o._baseDelta,0,1),y=u.length;for(h=0;h<y;h++)c=u[h],!(!c.isActive||c.isSensor)&&(m=c.collision,x=m.parentA,g=m.parentB,p=m.normal,c.separation=m.depth+p.x*(g.positionImpulse.x-x.positionImpulse.x)+p.y*(g.positionImpulse.y-x.positionImpulse.y));for(h=0;h<y;h++)c=u[h],!(!c.isActive||c.isSensor)&&(m=c.collision,x=m.parentA,g=m.parentB,p=m.normal,M=c.separation-c.slop*v,(x.isStatic||g.isStatic)&&(M*=2),x.isStatic||x.isSleeping||(_=A/x.totalContacts,x.positionImpulse.x+=p.x*M*_,x.positionImpulse.y+=p.y*M*_),g.isStatic||g.isSleeping||(_=A/g.totalContacts,g.positionImpulse.x-=p.x*M*_,g.positionImpulse.y-=p.y*M*_))},s.postSolvePosition=function(u){for(var f=s._positionWarming,d=u.length,h=a.translate,c=l.update,m=0;m<d;m++){var x=u[m],g=x.positionImpulse,p=g.x,_=g.y,M=x.velocity;if(x.totalContacts=0,p!==0||_!==0){for(var A=0;A<x.parts.length;A++){var v=x.parts[A];h(v.vertices,g),c(v.bounds,v.vertices,M),v.position.x+=p,v.position.y+=_}x.positionPrev.x+=p,x.positionPrev.y+=_,p*M.x+_*M.y<0?(g.x=0,g.y=0):(g.x*=f,g.y*=f)}}},s.preSolveVelocity=function(u){var f=u.length,d,h;for(d=0;d<f;d++){var c=u[d];if(!(!c.isActive||c.isSensor)){var m=c.contacts,x=c.contactCount,g=c.collision,p=g.parentA,_=g.parentB,M=g.normal,A=g.tangent;for(h=0;h<x;h++){var v=m[h],y=v.vertex,E=v.normalImpulse,T=v.tangentImpulse;if(E!==0||T!==0){var b=M.x*E+A.x*T,S=M.y*E+A.y*T;p.isStatic||p.isSleeping||(p.positionPrev.x+=b*p.inverseMass,p.positionPrev.y+=S*p.inverseMass,p.anglePrev+=p.inverseInertia*((y.x-p.position.x)*S-(y.y-p.position.y)*b)),_.isStatic||_.isSleeping||(_.positionPrev.x-=b*_.inverseMass,_.positionPrev.y-=S*_.inverseMass,_.anglePrev-=_.inverseInertia*((y.x-_.position.x)*S-(y.y-_.position.y)*b))}}}}},s.solveVelocity=function(u,f){var d=f/o._baseDelta,h=d*d,c=h*d,m=-s._restingThresh*d,x=s._restingThreshTangent,g=s._frictionNormalMultiplier*d,p=s._frictionMaxStatic,_=u.length,M,A,v,y;for(v=0;v<_;v++){var E=u[v];if(!(!E.isActive||E.isSensor)){var T=E.collision,b=T.parentA,S=T.parentB,w=T.normal.x,C=T.normal.y,L=T.tangent.x,U=T.tangent.y,F=E.inverseMass,V=E.friction*E.frictionStatic*g,z=E.contacts,N=E.contactCount,X=1/N,j=b.position.x-b.positionPrev.x,ce=b.position.y-b.positionPrev.y,Me=b.angle-b.anglePrev,Ue=S.position.x-S.positionPrev.x,Xe=S.position.y-S.positionPrev.y,He=S.angle-S.anglePrev;for(y=0;y<N;y++){var W=z[y],J=W.vertex,re=J.x-b.position.x,Ce=J.y-b.position.y,xe=J.x-S.position.x,Pe=J.y-S.position.y,qe=j-Ce*Me,Ve=ce+re*Me,it=Ue-Pe*He,O=Xe+xe*He,ke=qe-it,Ge=Ve-O,je=w*ke+C*Ge,de=L*ke+U*Ge,st=E.separation+je,ye=Math.min(st,1);ye=st<0?0:ye;var De=ye*V;de<-De||de>De?(A=de>0?de:-de,M=E.friction*(de>0?1:-1)*c,M<-A?M=-A:M>A&&(M=A)):(M=de,A=p);var D=re*C-Ce*w,R=xe*C-Pe*w,H=X/(F+b.inverseInertia*D*D+S.inverseInertia*R*R),Z=(1+E.restitution)*je*H;if(M*=H,je<m)W.normalImpulse=0;else{var ee=W.normalImpulse;W.normalImpulse+=Z,W.normalImpulse>0&&(W.normalImpulse=0),Z=W.normalImpulse-ee}if(de<-x||de>x)W.tangentImpulse=0;else{var K=W.tangentImpulse;W.tangentImpulse+=M,W.tangentImpulse<-A&&(W.tangentImpulse=-A),W.tangentImpulse>A&&(W.tangentImpulse=A),M=W.tangentImpulse-K}var _e=w*Z+L*M,ae=C*Z+U*M;b.isStatic||b.isSleeping||(b.positionPrev.x+=_e*b.inverseMass,b.positionPrev.y+=ae*b.inverseMass,b.anglePrev+=(re*ae-Ce*_e)*b.inverseInertia),S.isStatic||S.isSleeping||(S.positionPrev.x-=_e*S.inverseMass,S.positionPrev.y-=ae*S.inverseMass,S.anglePrev-=(xe*ae-Pe*_e)*S.inverseInertia)}}}}})()},function(t,i,r){var s={};t.exports=s;var a=r(9),o=r(0);(function(){s.create=function(l){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},s.update=function(l,u,f){var d=a.update,h=a.create,c=a.setActive,m=l.table,x=l.list,g=x.length,p=g,_=l.collisionStart,M=l.collisionEnd,A=l.collisionActive,v=u.length,y=0,E=0,T=0,b,S,w;for(w=0;w<v;w++)b=u[w],S=b.pair,S?(S.isActive&&(A[T++]=S),d(S,b,f)):(S=h(b,f),m[S.id]=S,_[y++]=S,x[p++]=S);for(p=0,g=x.length,w=0;w<g;w++)S=x[w],S.timeUpdated>=f?x[p++]=S:(c(S,!1,f),S.collision.bodyA.sleepCounter>0&&S.collision.bodyB.sleepCounter>0?x[p++]=S:(M[E++]=S,delete m[S.id]));x.length!==p&&(x.length=p),_.length!==y&&(_.length=y),M.length!==E&&(M.length=E),A.length!==T&&(A.length=T)},s.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(t,i,r){var s=t.exports=r(21);s.Axes=r(11),s.Bodies=r(12),s.Body=r(4),s.Bounds=r(1),s.Collision=r(8),s.Common=r(0),s.Composite=r(6),s.Composites=r(22),s.Constraint=r(10),s.Contact=r(16),s.Detector=r(13),s.Engine=r(17),s.Events=r(5),s.Grid=r(23),s.Mouse=r(14),s.MouseConstraint=r(24),s.Pair=r(9),s.Pairs=r(19),s.Plugin=r(15),s.Query=r(25),s.Render=r(26),s.Resolver=r(18),s.Runner=r(27),s.SAT=r(28),s.Sleeping=r(7),s.Svg=r(29),s.Vector=r(2),s.Vertices=r(3),s.World=r(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")},function(t,i,r){var s={};t.exports=s;var a=r(15),o=r(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){a.use(s,Array.prototype.slice.call(arguments))},s.before=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathBefore(s,l,u)},s.after=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathAfter(s,l,u)}})()},function(t,i,r){var s={};t.exports=s;var a=r(6),o=r(10),l=r(0),u=r(4),f=r(12),d=l.deprecated;(function(){s.stack=function(h,c,m,x,g,p,_){for(var M=a.create({label:"Stack"}),A=h,v=c,y,E=0,T=0;T<x;T++){for(var b=0,S=0;S<m;S++){var w=_(A,v,S,T,y,E);if(w){var C=w.bounds.max.y-w.bounds.min.y,L=w.bounds.max.x-w.bounds.min.x;C>b&&(b=C),u.translate(w,{x:L*.5,y:C*.5}),A=w.bounds.max.x+g,a.addBody(M,w),y=w,E+=1}else A+=g}v+=b+p,A=h}return M},s.chain=function(h,c,m,x,g,p){for(var _=h.bodies,M=1;M<_.length;M++){var A=_[M-1],v=_[M],y=A.bounds.max.y-A.bounds.min.y,E=A.bounds.max.x-A.bounds.min.x,T=v.bounds.max.y-v.bounds.min.y,b=v.bounds.max.x-v.bounds.min.x,S={bodyA:A,pointA:{x:E*c,y:y*m},bodyB:v,pointB:{x:b*x,y:T*g}},w=l.extend(S,p);a.addConstraint(h,o.create(w))}return h.label+=" Chain",h},s.mesh=function(h,c,m,x,g){var p=h.bodies,_,M,A,v,y;for(_=0;_<m;_++){for(M=1;M<c;M++)A=p[M-1+_*c],v=p[M+_*c],a.addConstraint(h,o.create(l.extend({bodyA:A,bodyB:v},g)));if(_>0)for(M=0;M<c;M++)A=p[M+(_-1)*c],v=p[M+_*c],a.addConstraint(h,o.create(l.extend({bodyA:A,bodyB:v},g))),x&&M>0&&(y=p[M-1+(_-1)*c],a.addConstraint(h,o.create(l.extend({bodyA:y,bodyB:v},g)))),x&&M<c-1&&(y=p[M+1+(_-1)*c],a.addConstraint(h,o.create(l.extend({bodyA:y,bodyB:v},g))))}return h.label+=" Mesh",h},s.pyramid=function(h,c,m,x,g,p,_){return s.stack(h,c,m,x,g,p,function(M,A,v,y,E,T){var b=Math.min(x,Math.ceil(m/2)),S=E?E.bounds.max.x-E.bounds.min.x:0;if(!(y>b)){y=b-y;var w=y,C=m-1-y;if(!(v<w||v>C)){T===1&&u.translate(E,{x:(v+(m%2===1?1:-1))*S,y:0});var L=E?v*S:0;return _(h+L+v*g,A,v,y,E,T)}}})},s.newtonsCradle=function(h,c,m,x,g){for(var p=a.create({label:"Newtons Cradle"}),_=0;_<m;_++){var M=1.9,A=f.circle(h+_*(x*M),c+g,x,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),v=o.create({pointA:{x:h+_*(x*M),y:c},bodyB:A});a.addBody(p,A),a.addConstraint(p,v)}return p},d(s,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),s.car=function(h,c,m,x,g){var p=u.nextGroup(!0),_=20,M=-m*.5+_,A=m*.5-_,v=0,y=a.create({label:"Car"}),E=f.rectangle(h,c,m,x,{collisionFilter:{group:p},chamfer:{radius:x*.5},density:2e-4}),T=f.circle(h+M,c+v,g,{collisionFilter:{group:p},friction:.8}),b=f.circle(h+A,c+v,g,{collisionFilter:{group:p},friction:.8}),S=o.create({bodyB:E,pointB:{x:M,y:v},bodyA:T,stiffness:1,length:0}),w=o.create({bodyB:E,pointB:{x:A,y:v},bodyA:b,stiffness:1,length:0});return a.addBody(y,E),a.addBody(y,T),a.addBody(y,b),a.addConstraint(y,S),a.addConstraint(y,w),y},d(s,"car","Composites.car \u27A4 moved to car example"),s.softBody=function(h,c,m,x,g,p,_,M,A,v){A=l.extend({inertia:1/0},A),v=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},v);var y=s.stack(h,c,m,x,g,p,function(E,T){return f.circle(E,T,M,A)});return s.mesh(y,m,x,_,v),y.label="Soft Body",y},d(s,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()},function(t,i,r){var s={};t.exports=s;var a=r(9),o=r(0),l=o.deprecated;(function(){s.create=function(u){var f={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(f,u)},s.update=function(u,f,d,h){var c,m,x,g=d.world,p=u.buckets,_,M,A=!1;for(c=0;c<f.length;c++){var v=f[c];if(!(v.isSleeping&&!h)&&!(g.bounds&&(v.bounds.max.x<g.bounds.min.x||v.bounds.min.x>g.bounds.max.x||v.bounds.max.y<g.bounds.min.y||v.bounds.min.y>g.bounds.max.y))){var y=s._getRegion(u,v);if(!v.region||y.id!==v.region.id||h){(!v.region||h)&&(v.region=y);var E=s._regionUnion(y,v.region);for(m=E.startCol;m<=E.endCol;m++)for(x=E.startRow;x<=E.endRow;x++){M=s._getBucketId(m,x),_=p[M];var T=m>=y.startCol&&m<=y.endCol&&x>=y.startRow&&x<=y.endRow,b=m>=v.region.startCol&&m<=v.region.endCol&&x>=v.region.startRow&&x<=v.region.endRow;!T&&b&&b&&_&&s._bucketRemoveBody(u,_,v),(v.region===y||T&&!b||h)&&(_||(_=s._createBucket(p,M)),s._bucketAddBody(u,_,v))}v.region=y,A=!0}}}A&&(u.pairsList=s._createActivePairsList(u))},l(s,"update","Grid.update \u27A4 replaced by Matter.Detector"),s.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(s,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),s._regionUnion=function(u,f){var d=Math.min(u.startCol,f.startCol),h=Math.max(u.endCol,f.endCol),c=Math.min(u.startRow,f.startRow),m=Math.max(u.endRow,f.endRow);return s._createRegion(d,h,c,m)},s._getRegion=function(u,f){var d=f.bounds,h=Math.floor(d.min.x/u.bucketWidth),c=Math.floor(d.max.x/u.bucketWidth),m=Math.floor(d.min.y/u.bucketHeight),x=Math.floor(d.max.y/u.bucketHeight);return s._createRegion(h,c,m,x)},s._createRegion=function(u,f,d,h){return{id:u+","+f+","+d+","+h,startCol:u,endCol:f,startRow:d,endRow:h}},s._getBucketId=function(u,f){return"C"+u+"R"+f},s._createBucket=function(u,f){var d=u[f]=[];return d},s._bucketAddBody=function(u,f,d){var h=u.pairs,c=a.id,m=f.length,x;for(x=0;x<m;x++){var g=f[x];if(!(d.id===g.id||d.isStatic&&g.isStatic)){var p=c(d,g),_=h[p];_?_[2]+=1:h[p]=[d,g,1]}}f.push(d)},s._bucketRemoveBody=function(u,f,d){var h=u.pairs,c=a.id,m;f.splice(o.indexOf(f,d),1);var x=f.length;for(m=0;m<x;m++){var g=h[c(d,f[m])];g&&(g[2]-=1)}},s._createActivePairsList=function(u){var f,d=u.pairs,h=o.keys(d),c=h.length,m=[],x;for(x=0;x<c;x++)f=d[h[x]],f[2]>0?m.push(f):delete d[h[x]];return m}})()},function(t,i,r){var s={};t.exports=s;var a=r(3),o=r(7),l=r(14),u=r(5),f=r(13),d=r(10),h=r(6),c=r(0),m=r(1);(function(){s.create=function(x,g){var p=(x?x.mouse:null)||(g?g.mouse:null);p||(x&&x.render&&x.render.canvas?p=l.create(x.render.canvas):g&&g.element?p=l.create(g.element):(p=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var _=d.create({label:"Mouse Constraint",pointA:p.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),M={type:"mouseConstraint",mouse:p,element:null,body:null,constraint:_,collisionFilter:{category:1,mask:4294967295,group:0}},A=c.extend(M,g);return u.on(x,"beforeUpdate",function(){var v=h.allBodies(x.world);s.update(A,v),s._triggerEvents(A)}),A},s.update=function(x,g){var p=x.mouse,_=x.constraint,M=x.body;if(p.button===0){if(_.bodyB)o.set(_.bodyB,!1),_.pointA=p.position;else for(var A=0;A<g.length;A++)if(M=g[A],m.contains(M.bounds,p.position)&&f.canCollide(M.collisionFilter,x.collisionFilter))for(var v=M.parts.length>1?1:0;v<M.parts.length;v++){var y=M.parts[v];if(a.contains(y.vertices,p.position)){_.pointA=p.position,_.bodyB=x.body=M,_.pointB={x:p.position.x-M.position.x,y:p.position.y-M.position.y},_.angleB=M.angle,o.set(M,!1),u.trigger(x,"startdrag",{mouse:p,body:M});break}}}else _.bodyB=x.body=null,_.pointB=null,M&&u.trigger(x,"enddrag",{mouse:p,body:M})},s._triggerEvents=function(x){var g=x.mouse,p=g.sourceEvents;p.mousemove&&u.trigger(x,"mousemove",{mouse:g}),p.mousedown&&u.trigger(x,"mousedown",{mouse:g}),p.mouseup&&u.trigger(x,"mouseup",{mouse:g}),l.clearSourceEvents(g)}})()},function(t,i,r){var s={};t.exports=s;var a=r(2),o=r(8),l=r(1),u=r(12),f=r(3);(function(){s.collides=function(d,h){for(var c=[],m=h.length,x=d.bounds,g=o.collides,p=l.overlaps,_=0;_<m;_++){var M=h[_],A=M.parts.length,v=A===1?0:1;if(p(M.bounds,x))for(var y=v;y<A;y++){var E=M.parts[y];if(p(E.bounds,x)){var T=g(E,d);if(T){c.push(T);break}}}}return c},s.ray=function(d,h,c,m){m=m||1e-100;for(var x=a.angle(h,c),g=a.magnitude(a.sub(h,c)),p=(c.x+h.x)*.5,_=(c.y+h.y)*.5,M=u.rectangle(p,_,g,m,{angle:x}),A=s.collides(M,d),v=0;v<A.length;v+=1){var y=A[v];y.body=y.bodyB=y.bodyA}return A},s.region=function(d,h,c){for(var m=[],x=0;x<d.length;x++){var g=d[x],p=l.overlaps(g.bounds,h);(p&&!c||!p&&c)&&m.push(g)}return m},s.point=function(d,h){for(var c=[],m=0;m<d.length;m++){var x=d[m];if(l.contains(x.bounds,h))for(var g=x.parts.length===1?0:1;g<x.parts.length;g++){var p=x.parts[g];if(l.contains(p.bounds,h)&&f.contains(p.vertices,h)){c.push(x);break}}}return c}})()},function(t,i,r){var s={};t.exports=s;var a=r(4),o=r(0),l=r(6),u=r(1),f=r(5),d=r(2),h=r(14);(function(){var c,m;typeof window!="undefined"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(v){window.setTimeout(function(){v(o.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(v){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!v.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},E=o.extend(y,v);return E.canvas&&(E.canvas.width=E.options.width||E.canvas.width,E.canvas.height=E.options.height||E.canvas.height),E.mouse=v.mouse,E.engine=v.engine,E.canvas=E.canvas||p(E.options.width,E.options.height),E.context=E.canvas.getContext("2d"),E.textures={},E.bounds=E.bounds||{min:{x:0,y:0},max:{x:E.canvas.width,y:E.canvas.height}},E.controller=s,E.options.showBroadphase=!1,E.options.pixelRatio!==1&&s.setPixelRatio(E,E.options.pixelRatio),o.isElement(E.element)&&E.element.appendChild(E.canvas),E},s.run=function(v){(function y(E){v.frameRequestId=c(y),x(v,E),s.world(v,E),v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0),(v.options.showStats||v.options.showDebug)&&s.stats(v,v.context,E),(v.options.showPerformance||v.options.showDebug)&&s.performance(v,v.context,E),v.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(v){m(v.frameRequestId)},s.setPixelRatio=function(v,y){var E=v.options,T=v.canvas;y==="auto"&&(y=_(T)),E.pixelRatio=y,T.setAttribute("data-pixel-ratio",y),T.width=E.width*y,T.height=E.height*y,T.style.width=E.width+"px",T.style.height=E.height+"px"},s.setSize=function(v,y,E){v.options.width=y,v.options.height=E,v.bounds.max.x=v.bounds.min.x+y,v.bounds.max.y=v.bounds.min.y+E,v.options.pixelRatio!==1?s.setPixelRatio(v,v.options.pixelRatio):(v.canvas.width=y,v.canvas.height=E)},s.lookAt=function(v,y,E,T){T=typeof T!="undefined"?T:!0,y=o.isArray(y)?y:[y],E=E||{x:0,y:0};for(var b={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},S=0;S<y.length;S+=1){var w=y[S],C=w.bounds?w.bounds.min:w.min||w.position||w,L=w.bounds?w.bounds.max:w.max||w.position||w;C&&L&&(C.x<b.min.x&&(b.min.x=C.x),L.x>b.max.x&&(b.max.x=L.x),C.y<b.min.y&&(b.min.y=C.y),L.y>b.max.y&&(b.max.y=L.y))}var U=b.max.x-b.min.x+2*E.x,F=b.max.y-b.min.y+2*E.y,V=v.canvas.height,z=v.canvas.width,N=z/V,X=U/F,j=1,ce=1;X>N?ce=X/N:j=N/X,v.options.hasBounds=!0,v.bounds.min.x=b.min.x,v.bounds.max.x=b.min.x+U*j,v.bounds.min.y=b.min.y,v.bounds.max.y=b.min.y+F*ce,T&&(v.bounds.min.x+=U*.5-U*j*.5,v.bounds.max.x+=U*.5-U*j*.5,v.bounds.min.y+=F*.5-F*ce*.5,v.bounds.max.y+=F*.5-F*ce*.5),v.bounds.min.x-=E.x,v.bounds.max.x-=E.x,v.bounds.min.y-=E.y,v.bounds.max.y-=E.y,v.mouse&&(h.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.canvas.width,y:(v.bounds.max.y-v.bounds.min.y)/v.canvas.height}),h.setOffset(v.mouse,v.bounds.min))},s.startViewTransform=function(v){var y=v.bounds.max.x-v.bounds.min.x,E=v.bounds.max.y-v.bounds.min.y,T=y/v.options.width,b=E/v.options.height;v.context.setTransform(v.options.pixelRatio/T,0,0,v.options.pixelRatio/b,0,0),v.context.translate(-v.bounds.min.x,-v.bounds.min.y)},s.endViewTransform=function(v){v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0)},s.world=function(v,y){var E=o.now(),T=v.engine,b=T.world,S=v.canvas,w=v.context,C=v.options,L=v.timing,U=l.allBodies(b),F=l.allConstraints(b),V=C.wireframes?C.wireframeBackground:C.background,z=[],N=[],X,j={timestamp:T.timing.timestamp};if(f.trigger(v,"beforeRender",j),v.currentBackground!==V&&A(v,V),w.globalCompositeOperation="source-in",w.fillStyle="transparent",w.fillRect(0,0,S.width,S.height),w.globalCompositeOperation="source-over",C.hasBounds){for(X=0;X<U.length;X++){var ce=U[X];u.overlaps(ce.bounds,v.bounds)&&z.push(ce)}for(X=0;X<F.length;X++){var Me=F[X],Ue=Me.bodyA,Xe=Me.bodyB,He=Me.pointA,W=Me.pointB;Ue&&(He=d.add(Ue.position,Me.pointA)),Xe&&(W=d.add(Xe.position,Me.pointB)),!(!He||!W)&&(u.contains(v.bounds,He)||u.contains(v.bounds,W))&&N.push(Me)}s.startViewTransform(v),v.mouse&&(h.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.options.width,y:(v.bounds.max.y-v.bounds.min.y)/v.options.height}),h.setOffset(v.mouse,v.bounds.min))}else N=F,z=U,v.options.pixelRatio!==1&&v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0);!C.wireframes||T.enableSleeping&&C.showSleeping?s.bodies(v,z,w):(C.showConvexHulls&&s.bodyConvexHulls(v,z,w),s.bodyWireframes(v,z,w)),C.showBounds&&s.bodyBounds(v,z,w),(C.showAxes||C.showAngleIndicator)&&s.bodyAxes(v,z,w),C.showPositions&&s.bodyPositions(v,z,w),C.showVelocity&&s.bodyVelocity(v,z,w),C.showIds&&s.bodyIds(v,z,w),C.showSeparations&&s.separations(v,T.pairs.list,w),C.showCollisions&&s.collisions(v,T.pairs.list,w),C.showVertexNumbers&&s.vertexNumbers(v,z,w),C.showMousePosition&&s.mousePosition(v,v.mouse,w),s.constraints(N,w),C.hasBounds&&s.endViewTransform(v),f.trigger(v,"afterRender",j),L.lastElapsed=o.now()-E},s.stats=function(v,y,E){for(var T=v.engine,b=T.world,S=l.allBodies(b),w=0,C=55,L=44,U=0,F=0,V=0;V<S.length;V+=1)w+=S[V].parts.length;var z={Part:w,Body:S.length,Cons:l.allConstraints(b).length,Comp:l.allComposites(b).length,Pair:T.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(U,F,C*5.5,L),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var N in z){var X=z[N];y.fillStyle="#aaa",y.fillText(N,U+C,F+8),y.fillStyle="#eee",y.fillText(X,U+C,F+26),U+=C}},s.performance=function(v,y){var E=v.engine,T=v.timing,b=T.deltaHistory,S=T.elapsedHistory,w=T.timestampElapsedHistory,C=T.engineDeltaHistory,L=T.engineUpdatesHistory,U=T.engineElapsedHistory,F=E.timing.lastUpdatesPerFrame,V=E.timing.lastDelta,z=g(b),N=g(S),X=g(C),j=g(L),ce=g(U),Me=g(w),Ue=Me/z||0,Xe=Math.round(z/V),He=1e3/z||0,W=4,J=12,re=60,Ce=34,xe=10,Pe=69;y.fillStyle="#0e0f19",y.fillRect(0,50,J*5+re*6+22,Ce),s.status(y,xe,Pe,re,W,b.length,Math.round(He)+" fps",He/s._goodFps,function(qe){return b[qe]/z-1}),s.status(y,xe+J+re,Pe,re,W,C.length,V.toFixed(2)+" dt",s._goodDelta/V,function(qe){return C[qe]/X-1}),s.status(y,xe+(J+re)*2,Pe,re,W,L.length,F+" upf",Math.pow(o.clamp(j/Xe||1,0,1),4),function(qe){return L[qe]/j-1}),s.status(y,xe+(J+re)*3,Pe,re,W,U.length,ce.toFixed(2)+" ut",1-F*ce/s._goodFps,function(qe){return U[qe]/ce-1}),s.status(y,xe+(J+re)*4,Pe,re,W,S.length,N.toFixed(2)+" rt",1-N/s._goodFps,function(qe){return S[qe]/N-1}),s.status(y,xe+(J+re)*5,Pe,re,W,w.length,Ue.toFixed(2)+" x",Ue*Ue*Ue,function(qe){return(w[qe]/b[qe]/Ue||0)-1})},s.status=function(v,y,E,T,b,S,w,C,L){v.strokeStyle="#888",v.fillStyle="#444",v.lineWidth=1,v.fillRect(y,E+7,T,1),v.beginPath(),v.moveTo(y,E+7-b*o.clamp(.4*L(0),-2,2));for(var U=0;U<T;U+=1)v.lineTo(y+U,E+7-(U<S?b*o.clamp(.4*L(U),-2,2):0));v.stroke(),v.fillStyle="hsl("+o.clamp(25+95*C,0,120)+",100%,60%)",v.fillRect(y,E-7,4,4),v.font="12px Arial",v.textBaseline="middle",v.textAlign="right",v.fillStyle="#eee",v.fillText(w,y+T,E-5)},s.constraints=function(v,y){for(var E=y,T=0;T<v.length;T++){var b=v[T];if(!(!b.render.visible||!b.pointA||!b.pointB)){var S=b.bodyA,w=b.bodyB,C,L;if(S?C=d.add(S.position,b.pointA):C=b.pointA,b.render.type==="pin")E.beginPath(),E.arc(C.x,C.y,3,0,2*Math.PI),E.closePath();else{if(w?L=d.add(w.position,b.pointB):L=b.pointB,E.beginPath(),E.moveTo(C.x,C.y),b.render.type==="spring")for(var U=d.sub(L,C),F=d.perp(d.normalise(U)),V=Math.ceil(o.clamp(b.length/5,12,20)),z,N=1;N<V;N+=1)z=N%2===0?1:-1,E.lineTo(C.x+U.x*(N/V)+F.x*z*4,C.y+U.y*(N/V)+F.y*z*4);E.lineTo(L.x,L.y)}b.render.lineWidth&&(E.lineWidth=b.render.lineWidth,E.strokeStyle=b.render.strokeStyle,E.stroke()),b.render.anchors&&(E.fillStyle=b.render.strokeStyle,E.beginPath(),E.arc(C.x,C.y,3,0,2*Math.PI),E.arc(L.x,L.y,3,0,2*Math.PI),E.closePath(),E.fill())}}},s.bodies=function(v,y,E){var T=E;v.engine;var b=v.options,S=b.showInternalEdges||!b.wireframes,w,C,L,U;for(L=0;L<y.length;L++)if(w=y[L],!!w.render.visible){for(U=w.parts.length>1?1:0;U<w.parts.length;U++)if(C=w.parts[U],!!C.render.visible){if(b.showSleeping&&w.isSleeping?T.globalAlpha=.5*C.render.opacity:C.render.opacity!==1&&(T.globalAlpha=C.render.opacity),C.render.sprite&&C.render.sprite.texture&&!b.wireframes){var F=C.render.sprite,V=M(v,F.texture);T.translate(C.position.x,C.position.y),T.rotate(C.angle),T.drawImage(V,V.width*-F.xOffset*F.xScale,V.height*-F.yOffset*F.yScale,V.width*F.xScale,V.height*F.yScale),T.rotate(-C.angle),T.translate(-C.position.x,-C.position.y)}else{if(C.circleRadius)T.beginPath(),T.arc(C.position.x,C.position.y,C.circleRadius,0,2*Math.PI);else{T.beginPath(),T.moveTo(C.vertices[0].x,C.vertices[0].y);for(var z=1;z<C.vertices.length;z++)!C.vertices[z-1].isInternal||S?T.lineTo(C.vertices[z].x,C.vertices[z].y):T.moveTo(C.vertices[z].x,C.vertices[z].y),C.vertices[z].isInternal&&!S&&T.moveTo(C.vertices[(z+1)%C.vertices.length].x,C.vertices[(z+1)%C.vertices.length].y);T.lineTo(C.vertices[0].x,C.vertices[0].y),T.closePath()}b.wireframes?(T.lineWidth=1,T.strokeStyle=v.options.wireframeStrokeStyle,T.stroke()):(T.fillStyle=C.render.fillStyle,C.render.lineWidth&&(T.lineWidth=C.render.lineWidth,T.strokeStyle=C.render.strokeStyle,T.stroke()),T.fill())}T.globalAlpha=1}}},s.bodyWireframes=function(v,y,E){var T=E,b=v.options.showInternalEdges,S,w,C,L,U;for(T.beginPath(),C=0;C<y.length;C++)if(S=y[C],!!S.render.visible)for(U=S.parts.length>1?1:0;U<S.parts.length;U++){for(w=S.parts[U],T.moveTo(w.vertices[0].x,w.vertices[0].y),L=1;L<w.vertices.length;L++)!w.vertices[L-1].isInternal||b?T.lineTo(w.vertices[L].x,w.vertices[L].y):T.moveTo(w.vertices[L].x,w.vertices[L].y),w.vertices[L].isInternal&&!b&&T.moveTo(w.vertices[(L+1)%w.vertices.length].x,w.vertices[(L+1)%w.vertices.length].y);T.lineTo(w.vertices[0].x,w.vertices[0].y)}T.lineWidth=1,T.strokeStyle=v.options.wireframeStrokeStyle,T.stroke()},s.bodyConvexHulls=function(v,y,E){var T=E,b,S,w;for(T.beginPath(),S=0;S<y.length;S++)if(b=y[S],!(!b.render.visible||b.parts.length===1)){for(T.moveTo(b.vertices[0].x,b.vertices[0].y),w=1;w<b.vertices.length;w++)T.lineTo(b.vertices[w].x,b.vertices[w].y);T.lineTo(b.vertices[0].x,b.vertices[0].y)}T.lineWidth=1,T.strokeStyle="rgba(255,255,255,0.2)",T.stroke()},s.vertexNumbers=function(v,y,E){var T=E,b,S,w;for(b=0;b<y.length;b++){var C=y[b].parts;for(w=C.length>1?1:0;w<C.length;w++){var L=C[w];for(S=0;S<L.vertices.length;S++)T.fillStyle="rgba(255,255,255,0.2)",T.fillText(b+"_"+S,L.position.x+(L.vertices[S].x-L.position.x)*.8,L.position.y+(L.vertices[S].y-L.position.y)*.8)}}},s.mousePosition=function(v,y,E){var T=E;T.fillStyle="rgba(255,255,255,0.8)",T.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},s.bodyBounds=function(v,y,E){var T=E;v.engine;var b=v.options;T.beginPath();for(var S=0;S<y.length;S++){var w=y[S];if(w.render.visible)for(var C=y[S].parts,L=C.length>1?1:0;L<C.length;L++){var U=C[L];T.rect(U.bounds.min.x,U.bounds.min.y,U.bounds.max.x-U.bounds.min.x,U.bounds.max.y-U.bounds.min.y)}}b.wireframes?T.strokeStyle="rgba(255,255,255,0.08)":T.strokeStyle="rgba(0,0,0,0.1)",T.lineWidth=1,T.stroke()},s.bodyAxes=function(v,y,E){var T=E;v.engine;var b=v.options,S,w,C,L;for(T.beginPath(),w=0;w<y.length;w++){var U=y[w],F=U.parts;if(!!U.render.visible)if(b.showAxes)for(C=F.length>1?1:0;C<F.length;C++)for(S=F[C],L=0;L<S.axes.length;L++){var V=S.axes[L];T.moveTo(S.position.x,S.position.y),T.lineTo(S.position.x+V.x*20,S.position.y+V.y*20)}else for(C=F.length>1?1:0;C<F.length;C++)for(S=F[C],L=0;L<S.axes.length;L++)T.moveTo(S.position.x,S.position.y),T.lineTo((S.vertices[0].x+S.vertices[S.vertices.length-1].x)/2,(S.vertices[0].y+S.vertices[S.vertices.length-1].y)/2)}b.wireframes?(T.strokeStyle="indianred",T.lineWidth=1):(T.strokeStyle="rgba(255, 255, 255, 0.4)",T.globalCompositeOperation="overlay",T.lineWidth=2),T.stroke(),T.globalCompositeOperation="source-over"},s.bodyPositions=function(v,y,E){var T=E;v.engine;var b=v.options,S,w,C,L;for(T.beginPath(),C=0;C<y.length;C++)if(S=y[C],!!S.render.visible)for(L=0;L<S.parts.length;L++)w=S.parts[L],T.arc(w.position.x,w.position.y,3,0,2*Math.PI,!1),T.closePath();for(b.wireframes?T.fillStyle="indianred":T.fillStyle="rgba(0,0,0,0.5)",T.fill(),T.beginPath(),C=0;C<y.length;C++)S=y[C],S.render.visible&&(T.arc(S.positionPrev.x,S.positionPrev.y,2,0,2*Math.PI,!1),T.closePath());T.fillStyle="rgba(255,165,0,0.8)",T.fill()},s.bodyVelocity=function(v,y,E){var T=E;T.beginPath();for(var b=0;b<y.length;b++){var S=y[b];if(!!S.render.visible){var w=a.getVelocity(S);T.moveTo(S.position.x,S.position.y),T.lineTo(S.position.x+w.x,S.position.y+w.y)}}T.lineWidth=3,T.strokeStyle="cornflowerblue",T.stroke()},s.bodyIds=function(v,y,E){var T=E,b,S;for(b=0;b<y.length;b++)if(!!y[b].render.visible){var w=y[b].parts;for(S=w.length>1?1:0;S<w.length;S++){var C=w[S];T.font="12px Arial",T.fillStyle="rgba(255,255,255,0.5)",T.fillText(C.id,C.position.x+10,C.position.y-10)}}},s.collisions=function(v,y,E){var T=E,b=v.options,S,w,C,L;for(T.beginPath(),C=0;C<y.length;C++)if(S=y[C],!!S.isActive)for(w=S.collision,L=0;L<S.contactCount;L++){var U=S.contacts[L],F=U.vertex;T.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(b.wireframes?T.fillStyle="rgba(255,255,255,0.7)":T.fillStyle="orange",T.fill(),T.beginPath(),C=0;C<y.length;C++)if(S=y[C],!!S.isActive&&(w=S.collision,S.contactCount>0)){var V=S.contacts[0].vertex.x,z=S.contacts[0].vertex.y;S.contactCount===2&&(V=(S.contacts[0].vertex.x+S.contacts[1].vertex.x)/2,z=(S.contacts[0].vertex.y+S.contacts[1].vertex.y)/2),w.bodyB===w.supports[0].body||w.bodyA.isStatic===!0?T.moveTo(V-w.normal.x*8,z-w.normal.y*8):T.moveTo(V+w.normal.x*8,z+w.normal.y*8),T.lineTo(V,z)}b.wireframes?T.strokeStyle="rgba(255,165,0,0.7)":T.strokeStyle="orange",T.lineWidth=1,T.stroke()},s.separations=function(v,y,E){var T=E,b=v.options,S,w,C,L,U;for(T.beginPath(),U=0;U<y.length;U++)if(S=y[U],!!S.isActive){w=S.collision,C=w.bodyA,L=w.bodyB;var F=1;!L.isStatic&&!C.isStatic&&(F=.5),L.isStatic&&(F=0),T.moveTo(L.position.x,L.position.y),T.lineTo(L.position.x-w.penetration.x*F,L.position.y-w.penetration.y*F),F=1,!L.isStatic&&!C.isStatic&&(F=.5),C.isStatic&&(F=0),T.moveTo(C.position.x,C.position.y),T.lineTo(C.position.x+w.penetration.x*F,C.position.y+w.penetration.y*F)}b.wireframes?T.strokeStyle="rgba(255,165,0,0.5)":T.strokeStyle="orange",T.stroke()},s.inspector=function(v,y){v.engine;var E=v.selected,T=v.render,b=T.options,S;if(b.hasBounds){var w=T.bounds.max.x-T.bounds.min.x,C=T.bounds.max.y-T.bounds.min.y,L=w/T.options.width,U=C/T.options.height;y.scale(1/L,1/U),y.translate(-T.bounds.min.x,-T.bounds.min.y)}for(var F=0;F<E.length;F++){var V=E[F].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),V.type){case"body":S=V.bounds,y.beginPath(),y.rect(Math.floor(S.min.x-3),Math.floor(S.min.y-3),Math.floor(S.max.x-S.min.x+6),Math.floor(S.max.y-S.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var z=V.pointA;V.bodyA&&(z=V.pointB),y.beginPath(),y.arc(z.x,z.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}v.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",S=v.selectBounds,y.beginPath(),y.rect(Math.floor(S.min.x),Math.floor(S.min.y),Math.floor(S.max.x-S.min.x),Math.floor(S.max.y-S.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),b.hasBounds&&y.setTransform(1,0,0,1,0,0)};var x=function(v,y){var E=v.engine,T=v.timing,b=T.historySize,S=E.timing.timestamp;T.delta=y-T.lastTime||s._goodDelta,T.lastTime=y,T.timestampElapsed=S-T.lastTimestamp||0,T.lastTimestamp=S,T.deltaHistory.unshift(T.delta),T.deltaHistory.length=Math.min(T.deltaHistory.length,b),T.engineDeltaHistory.unshift(E.timing.lastDelta),T.engineDeltaHistory.length=Math.min(T.engineDeltaHistory.length,b),T.timestampElapsedHistory.unshift(T.timestampElapsed),T.timestampElapsedHistory.length=Math.min(T.timestampElapsedHistory.length,b),T.engineUpdatesHistory.unshift(E.timing.lastUpdatesPerFrame),T.engineUpdatesHistory.length=Math.min(T.engineUpdatesHistory.length,b),T.engineElapsedHistory.unshift(E.timing.lastElapsed),T.engineElapsedHistory.length=Math.min(T.engineElapsedHistory.length,b),T.elapsedHistory.unshift(T.lastElapsed),T.elapsedHistory.length=Math.min(T.elapsedHistory.length,b)},g=function(v){for(var y=0,E=0;E<v.length;E+=1)y+=v[E];return y/v.length||0},p=function(v,y){var E=document.createElement("canvas");return E.width=v,E.height=y,E.oncontextmenu=function(){return!1},E.onselectstart=function(){return!1},E},_=function(v){var y=v.getContext("2d"),E=window.devicePixelRatio||1,T=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return E/T},M=function(v,y){var E=v.textures[y];return E||(E=v.textures[y]=new Image,E.src=y,E)},A=function(v,y){var E=y;/(jpg|gif|png)$/.test(y)&&(E="url("+y+")"),v.canvas.style.background=E,v.canvas.style.backgroundSize="contain",v.currentBackground=y}})()},function(t,i,r){var s={};t.exports=s;var a=r(5),o=r(17),l=r(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(f){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=l.extend(d,f);return h.fps=0,h},s.run=function(f,d){return f.timeBuffer=s._frameDeltaFallback,function h(c){f.frameRequestId=s._onNextFrame(f,h),c&&f.enabled&&s.tick(f,d,c)}(),f},s.tick=function(f,d,h){var c=l.now(),m=f.delta,x=0,g=h-f.timeLastTick;if((!g||!f.timeLastTick||g>Math.max(s._maxFrameDelta,f.maxFrameTime))&&(g=f.frameDelta||s._frameDeltaFallback),f.frameDeltaSmoothing){f.frameDeltaHistory.push(g),f.frameDeltaHistory=f.frameDeltaHistory.slice(-f.frameDeltaHistorySize);var p=f.frameDeltaHistory.slice(0).sort(),_=f.frameDeltaHistory.slice(p.length*s._smoothingLowerBound,p.length*s._smoothingUpperBound),M=u(_);g=M||g}f.frameDeltaSnapping&&(g=1e3/Math.round(1e3/g)),f.frameDelta=g,f.timeLastTick=h,f.timeBuffer+=f.frameDelta,f.timeBuffer=l.clamp(f.timeBuffer,0,f.frameDelta+m*s._timeBufferMargin),f.lastUpdatesDeferred=0;var A=f.maxUpdates||Math.ceil(f.maxFrameTime/m),v={timestamp:d.timing.timestamp};a.trigger(f,"beforeTick",v),a.trigger(f,"tick",v);for(var y=l.now();m>0&&f.timeBuffer>=m*s._timeBufferMargin;){a.trigger(f,"beforeUpdate",v),o.update(d,m),a.trigger(f,"afterUpdate",v),f.timeBuffer-=m,x+=1;var E=l.now()-c,T=l.now()-y,b=E+s._elapsedNextEstimate*T/x;if(x>=A||b>f.maxFrameTime){f.lastUpdatesDeferred=Math.round(Math.max(0,f.timeBuffer/m-s._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=x,a.trigger(f,"afterTick",v),f.frameDeltaHistory.length>=100&&(f.lastUpdatesDeferred&&Math.round(f.frameDelta/m)>A?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):f.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof f.isFixed!="undefined"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(f.deltaMin||f.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),f.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(f){s._cancelNextFrame(f)},s._onNextFrame=function(f,d){if(typeof window!="undefined"&&window.requestAnimationFrame)f.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return f.frameRequestId},s._cancelNextFrame=function(f){if(typeof window!="undefined"&&window.cancelAnimationFrame)window.cancelAnimationFrame(f.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(f){for(var d=0,h=f.length,c=0;c<h;c+=1)d+=f[c];return d/h||0}})()},function(t,i,r){var s={};t.exports=s;var a=r(8),o=r(0),l=o.deprecated;(function(){s.collides=function(u,f){return a.collides(u,f)},l(s,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()},function(t,i,r){var s={};t.exports=s,r(1);var a=r(0);(function(){s.pathToVertices=function(o,l){typeof window!="undefined"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,f,d,h,c,m,x,g,p,_,M=[],A,v,y=0,E=0,T=0;l=l||15;var b=function(w,C,L){var U=L%2===1&&L>1;if(!p||w!=p.x||C!=p.y){p&&U?(A=p.x,v=p.y):(A=0,v=0);var F={x:A+w,y:v+C};(U||!p)&&(p=F),M.push(F),E=A+w,T=v+C}},S=function(w){var C=w.pathSegTypeAsLetter.toUpperCase();if(C!=="Z"){switch(C){case"M":case"L":case"T":case"C":case"S":case"Q":E=w.x,T=w.y;break;case"H":E=w.x;break;case"V":T=w.y;break}b(E,T,w.pathSegType)}};for(s._svgPathToAbsolute(o),d=o.getTotalLength(),m=[],u=0;u<o.pathSegList.numberOfItems;u+=1)m.push(o.pathSegList.getItem(u));for(x=m.concat();y<d;){if(_=o.getPathSegAtLength(y),c=m[_],c!=g){for(;x.length&&x[0]!=c;)S(x.shift());g=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=o.getPointAtLength(y),b(h.x,h.y,0);break}y+=l}for(u=0,f=x.length;u<f;++u)S(x[u]);return M},s._svgPathToAbsolute=function(o){for(var l,u,f,d,h,c,m=o.pathSegList,x=0,g=0,p=m.numberOfItems,_=0;_<p;++_){var M=m.getItem(_),A=M.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in M&&(x=M.x),"y"in M&&(g=M.y);else switch("x1"in M&&(f=x+M.x1),"x2"in M&&(h=x+M.x2),"y1"in M&&(d=g+M.y1),"y2"in M&&(c=g+M.y2),"x"in M&&(x+=M.x),"y"in M&&(g+=M.y),A){case"m":m.replaceItem(o.createSVGPathSegMovetoAbs(x,g),_);break;case"l":m.replaceItem(o.createSVGPathSegLinetoAbs(x,g),_);break;case"h":m.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(x),_);break;case"v":m.replaceItem(o.createSVGPathSegLinetoVerticalAbs(g),_);break;case"c":m.replaceItem(o.createSVGPathSegCurvetoCubicAbs(x,g,f,d,h,c),_);break;case"s":m.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(x,g,h,c),_);break;case"q":m.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(x,g,f,d),_);break;case"t":m.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(x,g),_);break;case"a":m.replaceItem(o.createSVGPathSegArcAbs(x,g,M.r1,M.r2,M.angle,M.largeArcFlag,M.sweepFlag),_);break;case"z":case"Z":x=l,g=u;break}(A=="M"||A=="m")&&(l=x,u=g)}}})()},function(t,i,r){var s={};t.exports=s;var a=r(6);r(0),function(){s.create=a.create,s.add=a.add,s.remove=a.remove,s.clear=a.clear,s.addComposite=a.addComposite,s.addBody=a.addBody,s.addConstraint=a.addConstraint}()}])})})(Yn);var rm=sm(Yn.exports),am=Bl({__proto__:null,default:rm},[Yn.exports]);const om=`
    varying vec2 vUv;
    void main() {
      vec3 pos = position.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
      vUv = uv;
    }
  `,lm=`
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform vec3 uColor5;
    uniform vec3 uColor6;
    uniform float uSpeed;
    uniform float uIntensity;
    uniform sampler2D uTouchTexture;
    uniform float uGrainIntensity;
    uniform float uZoom;
    uniform vec3 uDarkNavy;
    uniform float uGradientSize;
    uniform float uGradientCount;
    uniform float uColor1Weight;
    uniform float uColor2Weight;

    varying vec2 vUv;

    #define PI 3.14159265359

    // Grain function for film grain effect
    float grain(vec2 uv, float time) {
      vec2 grainUv = uv * uResolution * 0.5;
      float grainValue = fract(sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453);
      return grainValue * 2.0 - 1.0;
    }

    vec3 getGradientColor(vec2 uv, float time) {
      float gradientRadius = uGradientSize;

      // Multiple animated centers
      vec2 center1 = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
    vec2 center2 = vec2(0.5 + cos(time * uSpeed * 0.6 + 1.0) * 0.5, 0.5 + sin(time * uSpeed * 0.45 + 0.5) * 0.5);
    vec2 center3 = vec2(0.5 + sin(time * uSpeed * 0.35 + 2.0) * 0.45, 0.5 + cos(time * uSpeed * 0.55 + 1.5) * 0.45);
    vec2 center4 = vec2(0.5 + cos(time * uSpeed * 0.5 + 3.0) * 0.4, 0.5 + sin(time * uSpeed * 0.4 + 2.5) * 0.4);
    vec2 center5 = vec2(0.5 + sin(time * uSpeed * 0.7 + 4.0) * 0.35, 0.5 + cos(time * uSpeed * 0.6 + 3.5) * 0.35);
    vec2 center6 = vec2(0.5 + cos(time * uSpeed * 0.45 + 5.0) * 0.5, 0.5 + sin(time * uSpeed * 0.65 + 4.5) * 0.5);

      float dist1 = length(uv - center1);
      float dist2 = length(uv - center2);
      float dist3 = length(uv - center3);
      float dist4 = length(uv - center4);
      float dist5 = length(uv - center5);
      float dist6 = length(uv - center6);

      float influence1 = 1.0 - smoothstep(0.0, gradientRadius, dist1);
      float influence2 = 1.0 - smoothstep(0.0, gradientRadius, dist2);
      float influence3 = 1.0 - smoothstep(0.0, gradientRadius, dist3);
      float influence4 = 1.0 - smoothstep(0.0, gradientRadius, dist4);
      float influence5 = 1.0 - smoothstep(0.0, gradientRadius, dist5);
      float influence6 = 1.0 - smoothstep(0.0, gradientRadius, dist6);

      float totalInfluence = (influence1 + influence2 + influence3 + influence4 + influence5 + influence6) / uGradientCount;

      // Touch Texture influence
      vec4 touch = texture2D(uTouchTexture, uv);
      float touchIntensity = touch.r * 0.5 + touch.g * 0.5;

      // Color mixing
      vec3 colorA = mix(uColor1, uColor2, sin(uTime * 0.5));
      vec3 colorB = mix(uColor3, uColor4, cos(uTime * 0.4));

      vec3 blendedColor = mix(uDarkNavy, colorA, uColor1Weight * (influence1 + influence3 + influence5));
      blendedColor = mix(blendedColor, colorB, uColor2Weight * (influence2 + influence4 + influence6));

      blendedColor = mix(blendedColor, uDarkNavy, 0.4);
      blendedColor += touchIntensity * 0.5;

      return blendedColor;
    }

    void main() {
      vec2 uv = vUv;

      uv = (uv - 0.5) / uZoom + 0.5;

      vec3 finalColor = getGradientColor(uv, uTime);

      // Add Film Grain
      float noise = grain(gl_FragCoord.xy / uResolution.xy, uTime);
      finalColor += noise * uGrainIntensity;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;class cm{constructor(){this.size=64,this.width=this.height=this.size,this.maxAge=64,this.radius=.16*this.size,this.speed=1/this.maxAge,this.trail=[],this.last=null,this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new St(this.canvas)}update(){this.clear();let e=this.speed;for(let t=this.trail.length-1;t>=0;t--){const i=this.trail[t];let r=i.force*e*(1-i.age/this.maxAge);i.x+=i.vx*r,i.y+=i.vy*r,i.age++,i.age>this.maxAge?this.trail.splice(t,1):this.drawPoint(i)}this.texture.needsUpdate=!0}clear(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){let t=0,i=0,r=0;const s=this.last;if(s){const a=e.x-s.x,o=e.y-s.y;if(a===0&&o===0)return;const l=a*a+o*o;let u=Math.sqrt(l);i=a/u,r=o/u,t=Math.min(l*2e4,2)}this.last={x:e.x,y:e.y},this.trail.push({x:e.x,y:e.y,age:0,force:t,vx:i,vy:r})}drawPoint(e){const t={x:e.x*this.width,y:(1-e.y)*this.height};let i=1;if(e.age<this.maxAge*.3)i=Math.sin(e.age/(this.maxAge*.3)*(Math.PI/2));else{const o=1-(e.age-this.maxAge*.3)/(this.maxAge*.7);i=-o*(o-2)}i*=e.force;const r=this.radius;let s=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${i*255}`,a=this.size*5;this.ctx.shadowOffsetX=a,this.ctx.shadowOffsetY=a,this.ctx.shadowBlur=r*1,this.ctx.shadowColor=`rgba(${s},${.2*i})`,this.ctx.beginPath(),this.ctx.fillStyle="rgba(255,0,0,1)",this.ctx.arc(t.x-a,t.y-a,r,0,Math.PI*2),this.ctx.fill()}}function um(n){if(!n)return null;const e=window.innerWidth,t=window.innerHeight,i=new mu,r=new al(e/-2,e/2,t/2,t/-2,1,1e3);r.position.z=1;const s=new ou,a=new im({canvas:n,antialias:!0});a.setSize(e,t),a.setPixelRatio(window.devicePixelRatio);const o=new cm,l=new $(.33,.53,.96),u=new $(.5,.7,1),f={uTime:{value:0},uResolution:{value:new Ze(e,t)},uColor1:{value:u},uColor3:{value:u},uColor5:{value:u},uColor2:{value:l},uColor4:{value:l},uColor6:{value:l},uSpeed:{value:1.2},uIntensity:{value:1.8},uTouchTexture:{value:o.texture},uGrainIntensity:{value:.02},uZoom:{value:1},uDarkNavy:{value:l},uGradientSize:{value:.5},uGradientCount:{value:4},uColor1Weight:{value:1},uColor2Weight:{value:1}},d=new Si(e,t,1,1),h=new nn({uniforms:f,vertexShader:om,fragmentShader:lm}),c=new _n(d,h);s.add(c);let m;const x=()=>{const _=i.getDelta();f.uTime.value+=_,o.update(),a.render(s,r),m=requestAnimationFrame(x)},g=()=>{const _=window.innerWidth,M=window.innerHeight;r.left=_/-2,r.right=_/2,r.top=M/2,r.bottom=M/-2,r.updateProjectionMatrix(),a.setSize(_,M),f.uResolution.value.set(_,M),c.geometry.dispose(),c.geometry=new Si(_,M,1,1)},p=_=>{const M=_.clientX/window.innerWidth,A=(window.innerHeight-_.clientY)/window.innerHeight;o.addTouch({x:M,y:A})};return window.addEventListener("resize",g),window.addEventListener("mousemove",p),x(),{destroy:()=>{window.removeEventListener("resize",g),window.removeEventListener("mousemove",p),cancelAnimationFrame(m),a.dispose(),h.dispose(),d.dispose()}}}function Ao(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function ya(n={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof n[i]=="undefined"?n[i]=e[i]:Ao(e[i])&&Ao(n[i])&&Object.keys(e[i]).length>0&&ya(n[i],e[i])})}const dl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tn(){const n=typeof document!="undefined"?document:{};return ya(n,dl),n}const fm={document:dl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout=="undefined"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout!="undefined"&&clearTimeout(n)}};function Et(){const n=typeof window!="undefined"?window:{};return ya(n,fm),n}function dm(n=""){return n.trim().split(" ").filter(e=>!!e.trim())}function hm(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function hl(n,e=0){return setTimeout(n,e)}function Es(){return Date.now()}function pm(n){const e=Et();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function mm(n,e="x"){const t=Et();let i,r,s;const a=pm(n);return t.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function ds(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function xm(n){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Ft(...n){const e=Object(n[0]);for(let t=1;t<n.length;t+=1){const i=n[t];if(i!=null&&!xm(i)){const r=Object.keys(Object(i)).filter(s=>s!=="__proto__"&&s!=="constructor"&&s!=="prototype");for(let s=0,a=r.length;s<a;s+=1){const o=r[s],l=Object.getOwnPropertyDescriptor(i,o);l!==void 0&&l.enumerable&&(ds(e[o])&&ds(i[o])?i[o].__swiper__?e[o]=i[o]:Ft(e[o],i[o]):!ds(e[o])&&ds(i[o])?(e[o]={},i[o].__swiper__?e[o]=i[o]:Ft(e[o],i[o])):e[o]=i[o])}}}return e}function fi(n,e,t){n.style.setProperty(e,t)}function pl({swiper:n,targetPosition:e,side:t}){const i=Et(),r=-n.translate;let s=null,a;const o=n.params.speed;n.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(n.cssModeFrameID);const l=e>r?"next":"prev",u=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,f=()=>{a=new Date().getTime(),s===null&&(s=a);const d=Math.max(Math.min((a-s)/o,1),0),h=.5-Math.cos(d*Math.PI)/2;let c=r+h*(e-r);if(u(c,e)&&(c=e),n.wrapperEl.scrollTo({[t]:c}),u(c,e)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[t]:c})}),i.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Qt(n,e=""){const t=Et(),i=[...n.children];return t.HTMLSlotElement&&n instanceof HTMLSlotElement&&i.push(...n.assignedElements()),e?i.filter(r=>r.matches(e)):i}function gm(n,e){const t=[e];for(;t.length>0;){const i=t.shift();if(n===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function vm(n,e){const t=Et();let i=e.contains(n);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(n),i||(i=gm(n,e))),i}function Ts(n){try{console.warn(n);return}catch{}}function As(n,e=[]){const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:dm(e)),t}function _m(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Sm(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Pn(n,e){return Et().getComputedStyle(n,null).getPropertyValue(e)}function ws(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function ml(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function ca(n,e,t){const i=Et();return t?n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):n.offsetWidth}function un(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}function wo(n,e=""){typeof trustedTypes!="undefined"?n.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):n.innerHTML=e}let hr;function ym(){const n=Et(),e=tn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function xl(){return hr||(hr=ym()),hr}let pr;function Mm({userAgent:n}={}){const e=xl(),t=Et(),i=t.navigator.platform,r=n||t.navigator.userAgent,s={ios:!1,android:!1},a=t.screen.width,o=t.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let u=r.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const f=r.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=i==="Win32";let c=i==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&c&&e.touch&&m.indexOf(`${a}x${o}`)>=0&&(u=r.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),c=!1),l&&!h&&(s.os="android",s.android=!0),(u||d||f)&&(s.os="ios",s.ios=!0),s}function gl(n={}){return pr||(pr=Mm(n)),pr}let mr;function bm(){const n=Et(),e=gl();let t=!1;function i(){const o=n.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(n.navigator.userAgent);if(o.includes("Version/")){const[l,u]=o.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=l<16||l===16&&u<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=i(),a=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:r}}function vl(){return mr||(mr=bm()),mr}function Em({swiper:n,on:e,emit:t}){const i=Et();let r=null,s=null;const a=()=>{!n||n.destroyed||!n.initialized||(t("beforeResize"),t("resize"))},o=()=>{!n||n.destroyed||!n.initialized||(r=new ResizeObserver(f=>{s=i.requestAnimationFrame(()=>{const{width:d,height:h}=n;let c=d,m=h;f.forEach(({contentBoxSize:x,contentRect:g,target:p})=>{p&&p!==n.el||(c=g?g.width:(x[0]||x).inlineSize,m=g?g.height:(x[0]||x).blockSize)}),(c!==d||m!==h)&&a()})}),r.observe(n.el))},l=()=>{s&&i.cancelAnimationFrame(s),r&&r.unobserve&&n.el&&(r.unobserve(n.el),r=null)},u=()=>{!n||n.destroyed||!n.initialized||t("orientationchange")};e("init",()=>{if(n.params.resizeObserver&&typeof i.ResizeObserver!="undefined"){o();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",u)}),e("destroy",()=>{l(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",u)})}function Tm({swiper:n,extendParams:e,on:t,emit:i}){const r=[],s=Et(),a=(u,f={})=>{const d=s.MutationObserver||s.WebkitMutationObserver,h=new d(c=>{if(n.__preventObserver__)return;if(c.length===1){i("observerUpdate",c[0]);return}const m=function(){i("observerUpdate",c[0])};s.requestAnimationFrame?s.requestAnimationFrame(m):s.setTimeout(m,0)});h.observe(u,{attributes:typeof f.attributes=="undefined"?!0:f.attributes,childList:n.isElement||(typeof f.childList=="undefined"?!0:f).childList,characterData:typeof f.characterData=="undefined"?!0:f.characterData}),r.push(h)},o=()=>{if(!!n.params.observer){if(n.params.observeParents){const u=ml(n.hostEl);for(let f=0;f<u.length;f+=1)a(u[f])}a(n.hostEl,{childList:n.params.observeSlideChildren}),a(n.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(u=>{u.disconnect()}),r.splice(0,r.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",l)}var Am={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return n.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(...s){i.off(n,r),r.__emitterProxy&&delete r.__emitterProxy,e.apply(i,s)}return r.__emitterProxy=e,i.on(n,r,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e=="undefined"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(s,1)})}),t},emit(...n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,r;return typeof n[0]=="string"||Array.isArray(n[0])?(t=n[0],i=n.slice(1,n.length),r=e):(t=n[0].events,i=n[0].data,r=n[0].context||e),i.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(r,[a,...i])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(o=>{o.apply(r,i)})}),e}};function wm(){const n=this;let e,t;const i=n.el;typeof n.params.width!="undefined"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height!="undefined"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(Pn(i,"padding-left")||0,10)-parseInt(Pn(i,"padding-right")||0,10),t=t-parseInt(Pn(i,"padding-top")||0,10)-parseInt(Pn(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Cm(){const n=this;function e(S,w){return parseFloat(S.getPropertyValue(n.getDirectionLabel(w))||0)}const t=n.params,{wrapperEl:i,slidesEl:r,rtlTranslate:s,wrongRTL:a}=n,o=n.virtual&&t.virtual.enabled,l=o?n.virtual.slides.length:n.slides.length,u=Qt(r,`.${n.params.slideClass}, swiper-slide`),f=o?n.virtual.slides.length:u.length;let d=[];const h=[],c=[];let m=t.slidesOffsetBefore;typeof m=="function"&&(m=t.slidesOffsetBefore.call(n));let x=t.slidesOffsetAfter;typeof x=="function"&&(x=t.slidesOffsetAfter.call(n));const g=n.snapGrid.length,p=n.slidesGrid.length,_=n.size-m-x;let M=t.spaceBetween,A=-m,v=0,y=0;if(typeof _=="undefined")return;typeof M=="string"&&M.indexOf("%")>=0?M=parseFloat(M.replace("%",""))/100*_:typeof M=="string"&&(M=parseFloat(M)),n.virtualSize=-M-m-x,u.forEach(S=>{s?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(fi(i,"--swiper-centered-offset-before",""),fi(i,"--swiper-centered-offset-after","")),t.cssMode&&(fi(i,"--swiper-slides-offset-before",`${m}px`),fi(i,"--swiper-slides-offset-after",`${x}px`));const E=t.grid&&t.grid.rows>1&&n.grid;E?n.grid.initSlides(u):n.grid&&n.grid.unsetSlides();let T;const b=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(S=>typeof t.breakpoints[S].slidesPerView!="undefined").length>0;for(let S=0;S<f;S+=1){T=0;const w=u[S];if(!(w&&(E&&n.grid.updateSlide(S,w,u),Pn(w,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(T=t.virtual.slidesPerViewAutoSlideSize),T&&w&&(t.roundLengths&&(T=Math.floor(T)),w.style[n.getDirectionLabel("width")]=`${T}px`);else if(t.slidesPerView==="auto"){b&&(w.style[n.getDirectionLabel("width")]="");const C=getComputedStyle(w),L=w.style.transform,U=w.style.webkitTransform;if(L&&(w.style.transform="none"),U&&(w.style.webkitTransform="none"),t.roundLengths)T=n.isHorizontal()?ca(w,"width",!0):ca(w,"height",!0);else{const F=e(C,"width"),V=e(C,"padding-left"),z=e(C,"padding-right"),N=e(C,"margin-left"),X=e(C,"margin-right"),j=C.getPropertyValue("box-sizing");if(j&&j==="border-box")T=F+N+X;else{const{clientWidth:ce,offsetWidth:Me}=w;T=F+V+z+N+X+(Me-ce)}}L&&(w.style.transform=L),U&&(w.style.webkitTransform=U),t.roundLengths&&(T=Math.floor(T))}else T=(_-(t.slidesPerView-1)*M)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),w&&(w.style[n.getDirectionLabel("width")]=`${T}px`);w&&(w.swiperSlideSize=T),c.push(T),t.centeredSlides?(A=A+T/2+v/2+M,v===0&&S!==0&&(A=A-_/2-M),S===0&&(A=A-_/2-M),Math.abs(A)<1/1e3&&(A=0),t.roundLengths&&(A=Math.floor(A)),y%t.slidesPerGroup===0&&d.push(A),h.push(A)):(t.roundLengths&&(A=Math.floor(A)),(y-Math.min(n.params.slidesPerGroupSkip,y))%n.params.slidesPerGroup===0&&d.push(A),h.push(A),A=A+T+M),n.virtualSize+=T+M,v=T,y+=1}}if(n.virtualSize=Math.max(n.virtualSize,_)+x,s&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+M}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+M}px`),E&&n.grid.updateWrapperSize(T,d),!t.centeredSlides){const S=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,w=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||S);let C=d.length;if(w){let U;if(t.slidesPerView==="auto"){U=1;let F=0;for(let V=c.length-1;V>=0&&(F+=c[V]+(V<c.length-1?M:0),F<=_);V-=1)U=c.length-V}else U=Math.floor(t.slidesPerView);C=Math.max(f-U,0)}const L=[];for(let U=0;U<d.length;U+=1){let F=d[U];t.roundLengths&&(F=Math.floor(F)),w?U<=C&&L.push(F):d[U]<=n.virtualSize-_&&L.push(F)}d=L,Math.floor(n.virtualSize-_)-Math.floor(d[d.length-1])>1&&(w||d.push(n.virtualSize-_))}if(o&&t.loop){const S=c[0]+M;if(t.slidesPerGroup>1){const w=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),C=S*t.slidesPerGroup;for(let L=0;L<w;L+=1)d.push(d[d.length-1]+C)}for(let w=0;w<n.virtual.slidesBefore+n.virtual.slidesAfter;w+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+S),h.push(h[h.length-1]+S),n.virtualSize+=S}if(d.length===0&&(d=[0]),M!==0){const S=n.isHorizontal()&&s?"marginLeft":n.getDirectionLabel("marginRight");u.filter((w,C)=>!t.cssMode||t.loop?!0:C!==u.length-1).forEach(w=>{w.style[S]=`${M}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let S=0;c.forEach(C=>{S+=C+(M||0)}),S-=M;const w=S>_?S-_:0;d=d.map(C=>C<=0?-m:C>w?w+x:C)}if(t.centerInsufficientSlides){let S=0;if(c.forEach(w=>{S+=w+(M||0)}),S-=M,S<_){const w=(_-S)/2;d.forEach((C,L)=>{d[L]=C-w}),h.forEach((C,L)=>{h[L]=C+w})}}if(Object.assign(n,{slides:u,snapGrid:d,slidesGrid:h,slidesSizesGrid:c}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){fi(i,"--swiper-centered-offset-before",`${-d[0]}px`),fi(i,"--swiper-centered-offset-after",`${n.size/2-c[c.length-1]/2}px`);const S=-n.snapGrid[0],w=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(C=>C+S),n.slidesGrid=n.slidesGrid.map(C=>C+w)}if(f!==l&&n.emit("slidesLengthChange"),d.length!==g&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),h.length!==p&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const S=`${t.containerModifierClass}backface-hidden`,w=n.el.classList.contains(S);f<=t.maxBackfaceHiddenSlides?w||n.el.classList.add(S):w&&n.el.classList.remove(S)}}function Rm(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!i)break;t.push(a(o))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]!="undefined"){const o=t[s].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function Pm(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}const Co=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Lm(n=this&&this.translate||0){const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let a=-n;r&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<i.length;l+=1){const u=i[l];let f=u.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=i[0].swiperSlideOffset);const d=(a+(t.centeredSlides?e.minTranslate():0)-f)/(u.swiperSlideSize+o),h=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(u.swiperSlideSize+o),c=-(a-f),m=c+e.slidesSizesGrid[l],x=c>=0&&c<=e.size-e.slidesSizesGrid[l],g=c>=0&&c<e.size-1||m>1&&m<=e.size||c<=0&&m>=e.size;g&&(e.visibleSlides.push(u),e.visibleSlidesIndexes.push(l)),Co(u,g,t.slideVisibleClass),Co(u,x,t.slideFullyVisibleClass),u.progress=r?-d:d,u.originalProgress=r?-h:h}}function Dm(n){const e=this;if(typeof n=="undefined"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,u=a;if(i===0)r=0,s=!0,a=!0;else{r=(n-e.minTranslate())/i;const f=Math.abs(n-e.minTranslate())<1,d=Math.abs(n-e.maxTranslate())<1;s=f||r<=0,a=d||r>=1,f&&(r=0),d&&(r=1)}if(t.loop){const f=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[f],c=e.slidesGrid[d],m=e.slidesGrid[e.slidesGrid.length-1],x=Math.abs(n);x>=h?o=(x-h)/m:o=(x+m-c)/m,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!l&&e.emit("reachBeginning toEdge"),a&&!u&&e.emit("reachEnd toEdge"),(l&&!s||u&&!a)&&e.emit("fromEdge"),e.emit("progress",r)}const xr=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Im(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=n,s=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,o=d=>Qt(i,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,u,f;if(s)if(t.loop){let d=r-n.virtual.slidesBefore;d<0&&(d=n.virtual.slides.length+d),d>=n.virtual.slides.length&&(d-=n.virtual.slides.length),l=o(`[data-swiper-slide-index="${d}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else a?(l=e.find(d=>d.column===r),f=e.find(d=>d.column===r+1),u=e.find(d=>d.column===r-1)):l=e[r];l&&(a||(f=Sm(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),u=_m(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u===0&&(u=e[e.length-1]))),e.forEach(d=>{xr(d,d===l,t.slideActiveClass),xr(d,d===f,t.slideNextClass),xr(d,d===u,t.slidePrevClass)}),n.emitSlidesClasses()}const Ss=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${n.params.lazyPreloaderClass}`);!r&&n.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),r&&!r.lazyPreloaderManaged&&r.remove())})),r&&!r.lazyPreloaderManaged&&r.remove()}},gr=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ua=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),r=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=r,o=[a-e];o.push(...Array.from({length:e}).map((l,u)=>a+i+u)),n.slides.forEach((l,u)=>{o.includes(l.column)&&gr(n,u)});return}const s=r+i-1;if(n.params.rewind||n.params.loop)for(let a=r-e;a<=s+e;a+=1){const o=(a%t+t)%t;(o<r||o>s)&&gr(n,o)}else for(let a=Math.max(r-e,0);a<=Math.min(s+e,t-1);a+=1)a!==r&&(a>s||a<r)&&gr(n,a)};function Um(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]!="undefined"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r=="undefined")&&(r=0),r}function Fm(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=n,u;const f=c=>{let m=c-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof l=="undefined"&&(l=Um(e)),i.indexOf(t)>=0)u=i.indexOf(t);else{const c=Math.min(r.slidesPerGroupSkip,l);u=c+Math.floor((l-c)/r.slidesPerGroup)}if(u>=i.length&&(u=i.length-1),l===s&&!e.params.loop){u!==o&&(e.snapIndex=u,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(l);return}const d=e.grid&&r.grid&&r.grid.rows>1;let h;if(e.virtual&&r.virtual.enabled)r.loop?h=f(l):h=l;else if(d){const c=e.slides.find(x=>x.column===l);let m=parseInt(c.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(c),0)),h=Math.floor(m/r.grid.rows)}else if(e.slides[l]){const c=e.slides[l].getAttribute("data-swiper-slide-index");c?h=parseInt(c,10):h=l}else h=l;Object.assign(e,{previousSnapIndex:o,snapIndex:u,previousRealIndex:a,realIndex:h,previousIndex:s,activeIndex:l}),e.initialized&&ua(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function Nm(n,e){const t=this,i=t.params;let r=n.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(r=o)});let s=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){s=!0,a=o;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Om={updateSize:wm,updateSlides:Cm,updateAutoHeight:Rm,updateSlidesOffset:Pm,updateSlidesProgress:Lm,updateProgress:Dm,updateSlidesClasses:Im,updateActiveIndex:Fm,updateClickedSlide:Nm};function Bm(n=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let a=mm(s,n);return a+=e.cssOverflowAdjustment(),i&&(a=-a),a||0}function zm(n,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:a}=t;let o=0,l=0;const u=0;t.isHorizontal()?o=i?-n:n:l=n,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${u}px)`);let f;const d=t.maxTranslate()-t.minTranslate();d===0?f=0:f=(n-t.minTranslate())/d,f!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Vm(){return-this.snapGrid[0]}function km(){return-this.snapGrid[this.snapGrid.length-1]}function Gm(n=0,e=this.params.speed,t=!0,i=!0,r){const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let f;if(i&&n>l?f=l:i&&n<u?f=u:f=n,s.updateProgress(f),a.cssMode){const d=s.isHorizontal();if(e===0)o[d?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return pl({swiper:s,targetPosition:-f,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Hm={getTranslate:Bm,setTranslate:zm,minTranslate:Vm,maxTranslate:km,translateTo:Gm};function Wm(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function _l({swiper:n,runCallbacks:e,direction:t,step:i}){const{activeIndex:r,previousIndex:s}=n;let a=t;a||(r>s?a="next":r<s?a="prev":a="reset"),n.emit(`transition${i}`),e&&a==="reset"?n.emit(`slideResetTransition${i}`):e&&r!==s&&(n.emit(`slideChangeTransition${i}`),a==="next"?n.emit(`slideNextTransition${i}`):n.emit(`slidePrevTransition${i}`))}function Xm(n=!0,e){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),_l({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function Ym(n=!0,e){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),_l({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var qm={setTransition:Wm,transitionStart:Xm,transitionEnd:Ym};function $m(n=0,e,t=!0,i,r){typeof n=="string"&&(n=parseInt(n,10));const s=this;let a=n;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:u,previousIndex:f,activeIndex:d,rtlTranslate:h,wrapperEl:c,enabled:m}=s;if(!m&&!i&&!r||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e=="undefined"&&(e=s.params.speed);const x=Math.min(s.params.slidesPerGroupSkip,a);let g=x+Math.floor((a-x)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const p=-l[g];if(o.normalizeSlideIndex)for(let E=0;E<u.length;E+=1){const T=-Math.floor(p*100),b=Math.floor(u[E]*100),S=Math.floor(u[E+1]*100);typeof u[E+1]!="undefined"?T>=b&&T<S-(S-b)/2?a=E:T>=b&&T<S&&(a=E+1):T>=b&&(a=E)}if(s.initialized&&a!==d&&(!s.allowSlideNext&&(h?p>s.translate&&p>s.minTranslate():p<s.translate&&p<s.minTranslate())||!s.allowSlidePrev&&p>s.translate&&p>s.maxTranslate()&&(d||0)!==a))return!1;a!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(p);let _;a>d?_="next":a<d?_="prev":_="reset";const M=s.virtual&&s.params.virtual.enabled;if(!(M&&r)&&(h&&-p===s.translate||!h&&p===s.translate))return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(p),_!=="reset"&&(s.transitionStart(t,_),s.transitionEnd(t,_)),!1;if(o.cssMode){const E=s.isHorizontal(),T=h?p:-p;if(e===0)M&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),M&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{c[E?"scrollLeft":"scrollTop"]=T})):c[E?"scrollLeft":"scrollTop"]=T,M&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return pl({swiper:s,targetPosition:T,side:E?"left":"top"}),!0;c.scrollTo({[E?"left":"top"]:T,behavior:"smooth"})}return!0}const y=vl().isSafari;return M&&!r&&y&&s.isElement&&s.virtual.update(!1,!1,a),s.setTransition(e),s.setTranslate(p),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(t,_),e===0?s.transitionEnd(t,_):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(T){!s||s.destroyed||T.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,_))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Km(n=0,e,t=!0,i){typeof n=="string"&&(n=parseInt(n,10));const r=this;if(r.destroyed)return;typeof e=="undefined"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let a=n;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)a=a+r.virtual.slidesBefore;else{let o;if(s){const x=a*r.params.grid.rows;o=r.slides.find(g=>g.getAttribute("data-swiper-slide-index")*1===x).column}else o=r.getSlideIndexByData(a);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:u,slidesOffsetBefore:f,slidesOffsetAfter:d}=r.params,h=u||!!f||!!d;let c=r.params.slidesPerView;c==="auto"?c=r.slidesPerViewDynamic():(c=Math.ceil(parseFloat(r.params.slidesPerView,10)),h&&c%2===0&&(c=c+1));let m=l-o<c;if(h&&(m=m||o<Math.ceil(c/2)),i&&h&&r.params.slidesPerView!=="auto"&&!s&&(m=!1),m){const x=h?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?o+1:o-l+1,slideRealIndex:x==="next"?r.realIndex:void 0})}if(s){const x=a*r.params.grid.rows;a=r.slides.find(g=>g.getAttribute("data-swiper-slide-index")*1===x).column}else a=r.getSlideIndexByData(a)}return requestAnimationFrame(()=>{r.slideTo(a,e,t,i)}),r}function jm(n,e=!0,t){const i=this,{enabled:r,params:s,animating:a}=i;if(!r||i.destroyed)return i;typeof n=="undefined"&&(n=i.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:o,u=i.virtual&&s.virtual.enabled;if(s.loop){if(a&&!u&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function Zm(n,e=!0,t){const i=this,{params:r,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:u}=i;if(!l||i.destroyed)return i;typeof n=="undefined"&&(n=i.params.speed);const f=i.virtual&&r.virtual.enabled;if(r.loop){if(u&&!f&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const d=o?i.translate:-i.translate;function h(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const c=h(d),m=s.map(_=>h(_)),x=r.freeMode&&r.freeMode.enabled;let g=s[m.indexOf(c)-1];if(typeof g=="undefined"&&(r.cssMode||x)){let _;s.forEach((M,A)=>{c>=M&&(_=A)}),typeof _!="undefined"&&(g=x?s[_]:s[_>0?_-1:_])}let p=0;if(typeof g!="undefined"&&(p=a.indexOf(g),p<0&&(p=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(p=p-i.slidesPerViewDynamic("previous",!0)+1,p=Math.max(p,0))),r.rewind&&i.isBeginning){const _=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(_,n,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(p,n,e,t)}),!0;return i.slideTo(p,n,e,t)}function Jm(n,e=!0,t){const i=this;if(!i.destroyed)return typeof n=="undefined"&&(n=i.params.speed),i.slideTo(i.activeIndex,n,e,t)}function Qm(n,e=!0,t,i=.5){const r=this;if(r.destroyed)return;typeof n=="undefined"&&(n=r.params.speed);let s=r.activeIndex;const a=Math.min(r.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){const u=r.snapGrid[o],f=r.snapGrid[o+1];l-u>(f-u)*i&&(s+=r.params.slidesPerGroup)}else{const u=r.snapGrid[o-1],f=r.snapGrid[o];l-u<=(f-u)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,n,e,t)}function e0(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let r=n.getSlideIndexWhenGrid(n.clickedIndex),s;const a=n.isElement?"swiper-slide":`.${e.slideClass}`,o=n.grid&&n.params.grid&&n.params.grid.rows>1;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n.slideToLoop(s):r>(o?(n.slides.length-i)/2-(n.params.grid.rows-1):n.slides.length-i)?(n.loopFix(),r=n.getSlideIndex(Qt(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),hl(()=>{n.slideTo(r)})):n.slideTo(r)}else n.slideTo(r)}var t0={slideTo:$m,slideToLoop:Km,slideNext:jm,slidePrev:Zm,slideReset:Jm,slideToClosest:Qm,slideToClickedSlide:e0};function n0(n,e){const t=this,{params:i,slidesEl:r}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const s=()=>{Qt(r,`.${i.slideClass}, swiper-slide`).forEach((m,x)=>{m.setAttribute("data-swiper-slide-index",x)})},a=()=>{const c=Qt(r,`.${i.slideBlankClass}`);c.forEach(m=>{m.remove()}),c.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||o)&&a();const l=i.slidesPerGroup*(o?i.grid.rows:1),u=t.slides.length%l!==0,f=o&&t.slides.length%i.grid.rows!==0,d=c=>{for(let m=0;m<c;m+=1){const x=t.isElement?As("swiper-slide",[i.slideBlankClass]):As("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(x)}};if(u){if(i.loopAddBlankSlides){const c=l-t.slides.length%l;d(c),t.recalcSlides(),t.updateSlides()}else Ts("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(f){if(i.loopAddBlankSlides){const c=i.grid.rows-t.slides.length%i.grid.rows;d(c),t.recalcSlides(),t.updateSlides()}else Ts("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();const h=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:n,direction:h?void 0:"next",initial:e})}function i0({slideRealIndex:n,slideTo:e=!0,direction:t,setTranslate:i,activeSlideIndex:r,initial:s,byController:a,byMousewheel:o}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:f,allowSlideNext:d,slidesEl:h,params:c}=l,{centeredSlides:m,slidesOffsetBefore:x,slidesOffsetAfter:g,initialSlide:p}=c,_=m||!!x||!!g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&c.virtual.enabled){e&&(!_&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):_&&l.snapIndex<c.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=d,l.emit("loopFix");return}let M=c.slidesPerView;M==="auto"?M=l.slidesPerViewDynamic():(M=Math.ceil(parseFloat(c.slidesPerView,10)),_&&M%2===0&&(M=M+1));const A=c.slidesPerGroupAuto?M:c.slidesPerGroup;let v=_?Math.max(A,Math.ceil(M/2)):A;v%A!==0&&(v+=A-v%A),v+=c.loopAdditionalSlides,l.loopedSlides=v;const y=l.grid&&c.grid&&c.grid.rows>1;u.length<M+v||l.params.effect==="cards"&&u.length<M+v*2?Ts("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&c.grid.fill==="row"&&Ts("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],T=[],b=y?Math.ceil(u.length/c.grid.rows):u.length,S=s&&b-p<M&&!_;let w=S?p:l.activeIndex;typeof r=="undefined"?r=l.getSlideIndex(u.find(N=>N.classList.contains(c.slideActiveClass))):w=r;const C=t==="next"||!t,L=t==="prev"||!t;let U=0,F=0;const z=(y?u[r].column:r)+(_&&typeof i=="undefined"?-M/2+.5:0);if(z<v){U=Math.max(v-z,A);for(let N=0;N<v-z;N+=1){const X=N-Math.floor(N/b)*b;if(y){const j=b-X-1;for(let ce=u.length-1;ce>=0;ce-=1)u[ce].column===j&&E.push(ce)}else E.push(b-X-1)}}else if(z+M>b-v){F=Math.max(z-(b-v*2),A),S&&(F=Math.max(F,M-b+p+1));for(let N=0;N<F;N+=1){const X=N-Math.floor(N/b)*b;y?u.forEach((j,ce)=>{j.column===X&&T.push(ce)}):T.push(X)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&u.length<M+v*2&&(T.includes(r)&&T.splice(T.indexOf(r),1),E.includes(r)&&E.splice(E.indexOf(r),1)),L&&E.forEach(N=>{u[N].swiperLoopMoveDOM=!0,h.prepend(u[N]),u[N].swiperLoopMoveDOM=!1}),C&&T.forEach(N=>{u[N].swiperLoopMoveDOM=!0,h.append(u[N]),u[N].swiperLoopMoveDOM=!1}),l.recalcSlides(),c.slidesPerView==="auto"?l.updateSlides():y&&(E.length>0&&L||T.length>0&&C)&&l.slides.forEach((N,X)=>{l.grid.updateSlide(X,N,l.slides)}),c.watchSlidesProgress&&l.updateSlidesOffset(),e){if(E.length>0&&L){if(typeof n=="undefined"){const N=l.slidesGrid[w],j=l.slidesGrid[w+U]-N;o?l.setTranslate(l.translate-j):(l.slideTo(w+Math.ceil(U),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-j,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-j))}else if(i){const N=y?E.length/c.grid.rows:E.length;l.slideTo(l.activeIndex+N,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(T.length>0&&C)if(typeof n=="undefined"){const N=l.slidesGrid[w],j=l.slidesGrid[w-F]-N;o?l.setTranslate(l.translate-j):(l.slideTo(w-F,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-j,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-j))}else{const N=y?T.length/c.grid.rows:T.length;l.slideTo(l.activeIndex-N,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=d,l.controller&&l.controller.control&&!a){const N={slideRealIndex:n,direction:t,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(X=>{!X.destroyed&&X.params.loop&&X.loopFix({...N,slideTo:X.params.slidesPerView===c.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...N,slideTo:l.controller.control.params.slidesPerView===c.slidesPerView?e:!1})}l.emit("loopFix")}function s0(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||!t||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(r=>{const s=typeof r.swiperSlideIndex=="undefined"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),n.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var r0={loopCreate:n0,loopFix:i0,loopDestroy:s0};function a0(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function o0(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var l0={setGrabCursor:a0,unsetGrabCursor:o0};function c0(n,e=this){function t(i){if(!i||i===tn()||i===Et())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(n);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function Ro(n,e,t){const i=Et(),{params:r}=n,s=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return s&&(t<=a||t>=i.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function u0(n){const e=this,t=tn();let i=n;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Ro(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!vm(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",f=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&f&&(l=f[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(h?c0(d,l):l.closest(d))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;const c=a.currentX,m=a.currentY;if(!Ro(e,i,c))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=c,a.startY=m,r.touchStartTime=Es(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let x=!0;l.matches(r.focusableElements)&&(x=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&t.activeElement.blur();const g=x&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||g)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function f0(n){const e=tn(),t=this,i=t.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].find(y=>y.identifier===i.touchId),!u||u.identifier!==i.touchId)return}else u=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const f=u.pageX,d=u.pageY;if(l.preventedByNestedSwiper){s.startX=f,s.startY=d;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:f,startY:d,currentX:f,currentY:d}),i.touchStartTime=Es());return}if(r.touchReleaseOnEdges&&!r.loop)if(t.isVertical()){if(d<s.startY&&t.translate<=t.maxTranslate()||d>s.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(a&&(f>s.startX&&-t.translate<=t.maxTranslate()||f<s.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=d;const h=s.currentX-s.startX,c=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(h**2+c**2)<t.params.threshold)return;if(typeof i.isScrolling=="undefined"){let y;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:h*h+c*c>=25&&(y=Math.atan2(Math.abs(c),Math.abs(h))*180/Math.PI,i.isScrolling=t.isHorizontal()?y>r.touchAngle:90-y>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving=="undefined"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=t.isHorizontal()?h:c,x=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),s.diff=m,m*=r.touchRatio,a&&(m=-m,x=-x);const g=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=x>0?"prev":"next";const p=t.params.loop&&!r.cssMode,_=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(p&&_&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const y=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(y)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let M;if(new Date().getTime(),r._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&g!==t.touchesDirection&&p&&_&&Math.abs(m)>=1){Object.assign(s,{startX:f,startY:d,currentX:f,currentY:d,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let A=!0,v=r.resistanceRatio;if(r.touchReleaseOnEdges&&(v=0),m>0?(p&&_&&!M&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(A=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+m)**v))):m<0&&(p&&_&&!M&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(A=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-m)**v))),A&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(m)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function d0(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].find(v=>v.identifier===t.touchId),!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:u,enabled:f}=e;if(!f||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=Es(),h=d-t.touchStartTime;if(e.allowClick){const v=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(v&&v[0]||i.target,v),e.emit("tap click",i),h<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Es(),hl(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let c;if(a.followFinger?c=l?e.translate:-e.translate:c=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:c});return}const m=c>=-e.maxTranslate()&&!e.params.loop;let x=0,g=e.slidesSizesGrid[0];for(let v=0;v<u.length;v+=v<a.slidesPerGroupSkip?1:a.slidesPerGroup){const y=v<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof u[v+y]!="undefined"?(m||c>=u[v]&&c<u[v+y])&&(x=v,g=u[v+y]-u[v]):(m||c>=u[v])&&(x=v,g=u[u.length-1]-u[u.length-2])}let p=null,_=null;a.rewind&&(e.isBeginning?_=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(p=0));const M=(c-u[x])/g,A=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(M>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?p:x+A):e.slideTo(x)),e.swipeDirection==="prev"&&(M>1-a.longSwipesRatio?e.slideTo(x+A):_!==null&&M<0&&Math.abs(M)>a.longSwipesRatio?e.slideTo(_):e.slideTo(x))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(x+A):e.slideTo(x):(e.swipeDirection==="next"&&e.slideTo(p!==null?p:x+A),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:x))}}function Po(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!o?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=r,n.allowSlideNext=i,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function h0(n){const e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation()))}function p0(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let r;const s=n.maxTranslate()-n.minTranslate();s===0?r=0:r=(n.translate-n.minTranslate())/s,r!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function m0(n){const e=this;Ss(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function x0(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const Sl=(n,e)=>{const t=tn(),{params:i,el:r,wrapperEl:s,device:a}=n,o=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",u=e;!r||typeof r=="string"||(t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",n.onTouchStart,{passive:!1}),r[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",n.onClick,!0),i.cssMode&&s[l]("scroll",n.onScroll),i.updateOnWindowResize?n[u](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Po,!0):n[u]("observerUpdate",Po,!0),r[l]("load",n.onLoad,{capture:!0}))};function g0(){const n=this,{params:e}=n;n.onTouchStart=u0.bind(n),n.onTouchMove=f0.bind(n),n.onTouchEnd=d0.bind(n),n.onDocumentTouchStart=x0.bind(n),e.cssMode&&(n.onScroll=p0.bind(n)),n.onClick=h0.bind(n),n.onLoad=m0.bind(n),Sl(n,"on")}function v0(){Sl(this,"off")}var _0={attachEvents:g0,detachEvents:v0};const Lo=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function S0(){const n=this,{realIndex:e,initialized:t,params:i,el:r}=n,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=tn(),o=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?n.el:a.querySelector(i.breakpointsBase),u=n.getBreakpoint(s,o,l);if(!u||n.currentBreakpoint===u)return;const d=(u in s?s[u]:void 0)||n.originalParams,h=Lo(n,i),c=Lo(n,d),m=n.params.grabCursor,x=d.grabCursor,g=i.enabled;h&&!c?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!h&&c&&(r.classList.add(`${i.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),m&&!x?n.unsetGrabCursor():!m&&x&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(y=>{if(typeof d[y]=="undefined")return;const E=i[y]&&i[y].enabled,T=d[y]&&d[y].enabled;E&&!T&&n[y].disable(),!E&&T&&n[y].enable()});const p=d.direction&&d.direction!==i.direction,_=i.loop&&(d.slidesPerView!==i.slidesPerView||p),M=i.loop;p&&t&&n.changeDirection(),Ft(n.params,d);const A=n.params.enabled,v=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),g&&!A?n.disable():!g&&A&&n.enable(),n.currentBreakpoint=u,n.emit("_beforeBreakpoint",d),t&&(_?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!M&&v?(n.loopCreate(e),n.updateSlides()):M&&!v&&n.loopDestroy()),n.emit("breakpoint",d)}function y0(n,e="window",t){if(!n||e==="container"&&!t)return;let i=!1;const r=Et(),s=e==="window"?r.innerHeight:t.clientHeight,a=Object.keys(n).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:u}=a[o];e==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(i=l):u<=t.clientWidth&&(i=l)}return i||"max"}var M0={setBreakpoint:S0,getBreakpoint:y0};function b0(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function E0(){const n=this,{classNames:e,params:t,rtl:i,el:r,device:s}=n,a=b0(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),r.classList.add(...e),n.emitContainerClasses()}function T0(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var A0={addClasses:E0,removeClasses:T0};function w0(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const r=n.slides.length-1,s=n.slidesGrid[r]+n.slidesSizesGrid[r]+i*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var C0={checkOverflow:w0},Do={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function R0(n,e){return function(i={}){const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){Ft(e,i);return}if(n[r]===!0&&(n[r]={enabled:!0}),r==="navigation"&&n[r]&&n[r].enabled&&!n[r].prevEl&&!n[r].nextEl&&(n[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&n[r]&&n[r].enabled&&!n[r].el&&(n[r].auto=!0),!(r in n&&"enabled"in s)){Ft(e,i);return}typeof n[r]=="object"&&!("enabled"in n[r])&&(n[r].enabled=!0),n[r]||(n[r]={enabled:!1}),Ft(e,i)}}const vr={eventsEmitter:Am,update:Om,translate:Hm,transition:qm,slide:t0,loop:r0,grabCursor:l0,events:_0,breakpoints:M0,checkOverflow:C0,classes:A0},_r={};class Vt{constructor(...e){let t,i;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?i=e[0]:[t,i]=e,i||(i={}),i=Ft({},i),t&&!i.el&&(i.el=t);const r=tn();if(i.el&&typeof i.el=="string"&&r.querySelectorAll(i.el).length>1){const l=[];return r.querySelectorAll(i.el).forEach(u=>{const f=Ft({},i,{el:u});l.push(new Vt(f))}),l}const s=this;s.__swiper__=!0,s.support=xl(),s.device=gl({userAgent:i.userAgent}),s.browser=vl(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(l=>{typeof l=="function"&&s.modules.indexOf(l)<0&&s.modules.push(l)});const a={};s.modules.forEach(l=>{l({params:i,swiper:s,extendParams:R0(i,a),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const o=Ft({},Do,a);return s.params=Ft({},o,_r,i),s.originalParams=Ft({},s.params),s.passedParams=Ft({},i),s.params&&s.params.on&&Object.keys(s.params.on).forEach(l=>{s.on(l,s.params.on[l])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=Qt(t,`.${i.slideClass}, swiper-slide`),s=ws(r[0]);return ws(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=Qt(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),a=(i.maxTranslate()-r)*e+r;i.translateTo(a,typeof t=="undefined"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const i=this,{params:r,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:u}=i;let f=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let d=s[u]?Math.ceil(s[u].swiperSlideSize):0,h;for(let c=u+1;c<s.length;c+=1)s[c]&&!h&&(d+=Math.ceil(s[c].swiperSlideSize),f+=1,d>l&&(h=!0));for(let c=u-1;c>=0;c-=1)s[c]&&!h&&(d+=s[c].swiperSlideSize,f+=1,d>l&&(h=!0))}else if(e==="current")for(let d=u+1;d<s.length;d+=1)(t?a[d]+o[d]-a[u]<l:a[d]-a[u]<l)&&(f+=1);else for(let d=u-1;d>=0;d-=1)a[u]-a[d]<l&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Ss(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const a=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Qt(i,r())[0])();return!a&&t.params.createElements&&(a=As("div",t.params.wrapperClass),i.append(a),Qt(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Pn(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Pn(i,"direction")==="rtl"),wrongRTL:Pn(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?Ss(t,s):s.addEventListener("load",a=>{Ss(t,a.target)})}),ua(t),t.initialized=!0,ua(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:r,el:s,wrapperEl:a,slides:o}=i;return typeof i.params=="undefined"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),hm(i)),i.destroyed=!0),null}static extendDefaults(e){Ft(_r,e)}static get extendedDefaults(){return _r}static get defaults(){return Do}static installModule(e){Vt.prototype.__modules__||(Vt.prototype.__modules__=[]);const t=Vt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Vt.installModule(t)),Vt):(Vt.installModule(e),Vt)}}Object.keys(vr).forEach(n=>{Object.keys(vr[n]).forEach(e=>{Vt.prototype[e]=vr[n][e]})});Vt.use([Em,Tm]);function P0(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let s=Qt(n.el,`.${i[r]}`)[0];s||(s=As("div",i[r]),s.className=i[r],n.el.append(s)),t[r]=s,e[r]=s}}),t}function Li(n=""){return`.${n.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function L0({swiper:n,extendParams:e,on:t,emit:i}){const r="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),n.pagination={el:null,bullets:[]};let s,a=0;function o(){return!n.params.pagination.el||!n.pagination.el||Array.isArray(n.pagination.el)&&n.pagination.el.length===0}function l(p,_){const{bulletActiveClass:M}=n.params.pagination;!p||(p=p[`${_==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${M}-${_}`),p=p[`${_==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${M}-${_}-${_}`)))}function u(p,_,M){if(p=p%M,_=_%M,_===p+1)return"next";if(_===p-1)return"previous"}function f(p){const _=p.target.closest(Li(n.params.pagination.bulletClass));if(!_)return;p.preventDefault();const M=ws(_)*n.params.slidesPerGroup;if(n.params.loop){if(n.realIndex===M)return;const A=u(n.realIndex,M,n.slides.length);A==="next"?n.slideNext():A==="previous"?n.slidePrev():n.slideToLoop(M)}else n.slideTo(M)}function d(){const p=n.rtl,_=n.params.pagination;if(o())return;let M=n.pagination.el;M=un(M);let A,v;const y=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,E=n.params.loop?Math.ceil(y/n.params.slidesPerGroup):n.snapGrid.length;if(n.params.loop?(v=n.previousRealIndex||0,A=n.params.slidesPerGroup>1?Math.floor(n.realIndex/n.params.slidesPerGroup):n.realIndex):typeof n.snapIndex!="undefined"?(A=n.snapIndex,v=n.previousSnapIndex):(v=n.previousIndex||0,A=n.activeIndex||0),_.type==="bullets"&&n.pagination.bullets&&n.pagination.bullets.length>0){const T=n.pagination.bullets;let b,S,w;if(_.dynamicBullets&&(s=ca(T[0],n.isHorizontal()?"width":"height",!0),M.forEach(C=>{C.style[n.isHorizontal()?"width":"height"]=`${s*(_.dynamicMainBullets+4)}px`}),_.dynamicMainBullets>1&&v!==void 0&&(a+=A-(v||0),a>_.dynamicMainBullets-1?a=_.dynamicMainBullets-1:a<0&&(a=0)),b=Math.max(A-a,0),S=b+(Math.min(T.length,_.dynamicMainBullets)-1),w=(S+b)/2),T.forEach(C=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${_.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();C.classList.remove(...L)}),M.length>1)T.forEach(C=>{const L=ws(C);L===A?C.classList.add(..._.bulletActiveClass.split(" ")):n.isElement&&C.setAttribute("part","bullet"),_.dynamicBullets&&(L>=b&&L<=S&&C.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),L===b&&l(C,"prev"),L===S&&l(C,"next"))});else{const C=T[A];if(C&&C.classList.add(..._.bulletActiveClass.split(" ")),n.isElement&&T.forEach((L,U)=>{L.setAttribute("part",U===A?"bullet-active":"bullet")}),_.dynamicBullets){const L=T[b],U=T[S];for(let F=b;F<=S;F+=1)T[F]&&T[F].classList.add(...`${_.bulletActiveClass}-main`.split(" "));l(L,"prev"),l(U,"next")}}if(_.dynamicBullets){const C=Math.min(T.length,_.dynamicMainBullets+4),L=(s*C-s)/2-w*s,U=p?"right":"left";T.forEach(F=>{F.style[n.isHorizontal()?U:"top"]=`${L}px`})}}M.forEach((T,b)=>{if(_.type==="fraction"&&(T.querySelectorAll(Li(_.currentClass)).forEach(S=>{S.textContent=_.formatFractionCurrent(A+1)}),T.querySelectorAll(Li(_.totalClass)).forEach(S=>{S.textContent=_.formatFractionTotal(E)})),_.type==="progressbar"){let S;_.progressbarOpposite?S=n.isHorizontal()?"vertical":"horizontal":S=n.isHorizontal()?"horizontal":"vertical";const w=(A+1)/E;let C=1,L=1;S==="horizontal"?C=w:L=w,T.querySelectorAll(Li(_.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${L})`,U.style.transitionDuration=`${n.params.speed}ms`})}_.type==="custom"&&_.renderCustom?(wo(T,_.renderCustom(n,A+1,E)),b===0&&i("paginationRender",T)):(b===0&&i("paginationRender",T),i("paginationUpdate",T)),n.params.watchOverflow&&n.enabled&&T.classList[n.isLocked?"add":"remove"](_.lockClass)})}function h(){const p=n.params.pagination;if(o())return;const _=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.grid&&n.params.grid.rows>1?n.slides.length/Math.ceil(n.params.grid.rows):n.slides.length;let M=n.pagination.el;M=un(M);let A="";if(p.type==="bullets"){let v=n.params.loop?Math.ceil(_/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&v>_&&(v=_);for(let y=0;y<v;y+=1)p.renderBullet?A+=p.renderBullet.call(n,y,p.bulletClass):A+=`<${p.bulletElement} ${n.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?A=p.renderFraction.call(n,p.currentClass,p.totalClass):A=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?A=p.renderProgressbar.call(n,p.progressbarFillClass):A=`<span class="${p.progressbarFillClass}"></span>`),n.pagination.bullets=[],M.forEach(v=>{p.type!=="custom"&&wo(v,A||""),p.type==="bullets"&&n.pagination.bullets.push(...v.querySelectorAll(Li(p.bulletClass)))}),p.type!=="custom"&&i("paginationRender",M[0])}function c(){n.params.pagination=P0(n,n.originalParams.pagination,n.params.pagination,{el:"swiper-pagination"});const p=n.params.pagination;if(!p.el)return;let _;typeof p.el=="string"&&n.isElement&&(_=n.el.querySelector(p.el)),!_&&typeof p.el=="string"&&(_=[...document.querySelectorAll(p.el)]),_||(_=p.el),!(!_||_.length===0)&&(n.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(_)&&_.length>1&&(_=[...n.el.querySelectorAll(p.el)],_.length>1&&(_=_.find(M=>ml(M,".swiper")[0]===n.el))),Array.isArray(_)&&_.length===1&&(_=_[0]),Object.assign(n.pagination,{el:_}),_=un(_),_.forEach(M=>{p.type==="bullets"&&p.clickable&&M.classList.add(...(p.clickableClass||"").split(" ")),M.classList.add(p.modifierClass+p.type),M.classList.add(n.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(M.classList.add(`${p.modifierClass}${p.type}-dynamic`),a=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&M.classList.add(p.progressbarOppositeClass),p.clickable&&M.addEventListener("click",f),n.enabled||M.classList.add(p.lockClass)}))}function m(){const p=n.params.pagination;if(o())return;let _=n.pagination.el;_&&(_=un(_),_.forEach(M=>{M.classList.remove(p.hiddenClass),M.classList.remove(p.modifierClass+p.type),M.classList.remove(n.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(M.classList.remove(...(p.clickableClass||"").split(" ")),M.removeEventListener("click",f))})),n.pagination.bullets&&n.pagination.bullets.forEach(M=>M.classList.remove(...p.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!n.pagination||!n.pagination.el)return;const p=n.params.pagination;let{el:_}=n.pagination;_=un(_),_.forEach(M=>{M.classList.remove(p.horizontalClass,p.verticalClass),M.classList.add(n.isHorizontal()?p.horizontalClass:p.verticalClass)})}),t("init",()=>{n.params.pagination.enabled===!1?g():(c(),h(),d())}),t("activeIndexChange",()=>{typeof n.snapIndex=="undefined"&&d()}),t("snapIndexChange",()=>{d()}),t("snapGridLengthChange",()=>{h(),d()}),t("destroy",()=>{m()}),t("enable disable",()=>{let{el:p}=n.pagination;p&&(p=un(p),p.forEach(_=>_.classList[n.enabled?"remove":"add"](n.params.pagination.lockClass)))}),t("lock unlock",()=>{d()}),t("click",(p,_)=>{const M=_.target,A=un(n.pagination.el);if(n.params.pagination.el&&n.params.pagination.hideOnClick&&A&&A.length>0&&!M.classList.contains(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&M===n.navigation.nextEl||n.navigation.prevEl&&M===n.navigation.prevEl))return;const v=A[0].classList.contains(n.params.pagination.hiddenClass);i(v===!0?"paginationShow":"paginationHide"),A.forEach(y=>y.classList.toggle(n.params.pagination.hiddenClass))}});const x=()=>{n.el.classList.remove(n.params.pagination.paginationDisabledClass);let{el:p}=n.pagination;p&&(p=un(p),p.forEach(_=>_.classList.remove(n.params.pagination.paginationDisabledClass))),c(),h(),d()},g=()=>{n.el.classList.add(n.params.pagination.paginationDisabledClass);let{el:p}=n.pagination;p&&(p=un(p),p.forEach(_=>_.classList.add(n.params.pagination.paginationDisabledClass))),m()};Object.assign(n.pagination,{enable:x,disable:g,render:h,update:d,init:c,destroy:m})}function D0({swiper:n,extendParams:e,on:t,emit:i,params:r}){n.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,a,o=r&&r.autoplay?r.autoplay.delay:3e3,l=r&&r.autoplay?r.autoplay.delay:3e3,u,f=new Date().getTime(),d,h,c,m,x,g;function p(z){!n||n.destroyed||!n.wrapperEl||z.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",p),!(g||z.detail&&z.detail.bySwiperTouchMove)&&b())}const _=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?d=!0:d&&(l=u,d=!1);const z=n.autoplay.paused?u:f+l-new Date().getTime();n.autoplay.timeLeft=z,i("autoplayTimeLeft",z,z/o),a=requestAnimationFrame(()=>{_()})},M=()=>{let z;return n.virtual&&n.params.virtual.enabled?z=n.slides.find(X=>X.classList.contains("swiper-slide-active")):z=n.slides[n.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},A=()=>{let z=n.params.autoplay.delay;const N=M();return!Number.isNaN(N)&&N>0&&(z=N),z},v=z=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(a),_();let N=z;typeof N=="undefined"&&(N=A(),o=N,l=N),u=N;const X=n.params.speed,j=()=>{!n||n.destroyed||(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(X,!0,!0),i("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,X,!0,!0),i("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(X,!0,!0),i("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,X,!0,!0),i("autoplay")),n.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{v()})))};return N>0?(clearTimeout(s),s=setTimeout(()=>{j()},N)):requestAnimationFrame(()=>{j()}),N},y=()=>{f=new Date().getTime(),n.autoplay.running=!0,v(),i("autoplayStart")},E=()=>{n.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(a),i("autoplayStop")},T=(z,N)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(s),z||(x=!0);const X=()=>{i("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",p):b()};if(n.autoplay.paused=!0,N){X();return}u=(u||n.params.autoplay.delay)-(new Date().getTime()-f),!(n.isEnd&&u<0&&!n.params.loop)&&(u<0&&(u=0),X())},b=()=>{n.isEnd&&u<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(f=new Date().getTime(),x?(x=!1,v(u)):v(),n.autoplay.paused=!1,i("autoplayResume"))},S=()=>{if(n.destroyed||!n.autoplay.running)return;const z=tn();z.visibilityState==="hidden"&&(x=!0,T(!0)),z.visibilityState==="visible"&&b()},w=z=>{z.pointerType==="mouse"&&(x=!0,g=!0,!(n.animating||n.autoplay.paused)&&T(!0))},C=z=>{z.pointerType==="mouse"&&(g=!1,n.autoplay.paused&&b())},L=()=>{n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",w),n.el.addEventListener("pointerleave",C))},U=()=>{n.el&&typeof n.el!="string"&&(n.el.removeEventListener("pointerenter",w),n.el.removeEventListener("pointerleave",C))},F=()=>{tn().addEventListener("visibilitychange",S)},V=()=>{tn().removeEventListener("visibilitychange",S)};t("init",()=>{n.params.autoplay.enabled&&(L(),F(),y())}),t("destroy",()=>{U(),V(),n.autoplay.running&&E()}),t("_freeModeStaticRelease",()=>{(c||x)&&b()}),t("_freeModeNoMomentumRelease",()=>{n.params.autoplay.disableOnInteraction?E():T(!0,!0)}),t("beforeTransitionStart",(z,N,X)=>{n.destroyed||!n.autoplay.running||(X||!n.params.autoplay.disableOnInteraction?T(!0,!0):E())}),t("sliderFirstMove",()=>{if(!(n.destroyed||!n.autoplay.running)){if(n.params.autoplay.disableOnInteraction){E();return}h=!0,c=!1,x=!1,m=setTimeout(()=>{x=!0,c=!0,T(!0)},200)}}),t("touchEnd",()=>{if(!(n.destroyed||!n.autoplay.running||!h)){if(clearTimeout(m),clearTimeout(s),n.params.autoplay.disableOnInteraction){c=!1,h=!1;return}c&&n.params.cssMode&&b(),c=!1,h=!1}}),t("slideChange",()=>{n.destroyed||!n.autoplay.running||n.autoplay.paused&&(u=A(),o=A())}),Object.assign(n.autoplay,{start:y,stop:E,pause:T,resume:b})}var Io="/portfolio/assets/profile_img01.5c13d2f0.png",I0="/portfolio/assets/mac_3d_icon.0444e804.png",Uo="/portfolio/assets/bio03.0871549c.mp4",U0="/portfolio/assets/bio02.db7f0bf8.mp4",F0="/portfolio/assets/identity01.ce33e7e1.png",N0="/portfolio/assets/identity02.dafc4cc4.png",O0="/portfolio/assets/identity03.5b2b45dd.png",B0="/portfolio/assets/identity04.c29bdb00.png",z0="/portfolio/assets/macbook.fffc7b69.png",V0="/portfolio/assets/thumb01.ec77c699.jpg",k0="/portfolio/assets/thumb01.26a6203a.jpg",G0="/portfolio/assets/thumb01.749f32cf.jpg",H0="/portfolio/assets/thumb01.3ad0a2a7.jpg",W0="/portfolio/assets/thumb01.5577378e.jpg",X0="/portfolio/assets/thumb01.8f242a15.jpg",Y0="/portfolio/assets/thumb01.9f5ab86b.jpg";Ne.registerPlugin(di);const q0={name:"AboutPage",data(){return{texts:[{en:"User-Centric"},{en:"Semantic"},{en:"Responsive"},{en:"Accessible"},{en:"Optimized"},{en:"Interactive"}],index:0,currentEnText:"",enIndex:0,isDeleting:!1,typingSpeed:80,deletingSpeed:70,delayAfterTyping:2e3,timer:null,rollingTls:[],horizontalScrollTween:null,visionInstance:null,handleResize:null,profileData:{personal:{title:"Personal Information",items:[{label:"Name",value:"\uC774\uC724\uC815"},{label:"Birth",value:"1998.05.15"},{label:"Tel",value:"010-2717-5354"},{label:"Email",value:"dbswjd2825@naver.com"}]},experience:[{date:"2024.07 ~",text:"(\uC8FC)\uD06C\uB808\uB527 \uC6F9\uD37C\uBE14\uB9AC\uC154"},{date:"2021.10 - 2023.10",text:"\uC758\uB8CC\uBC95\uC778\uD61C\uC6D0\uC758\uB8CC\uC7AC\uB2E8 \uC0AC\uBB34"}],education:[{date:"2023.12 - 2024.04",text:`\uC774\uC9C0\uB514\uC790\uC778\uCEF4\uD4E8\uD130\uD559\uC6D0 \uAD50\uC721
[\uC6F9\uB514\uC790\uC778&\uC6F9\uD37C\uBE14\uB9AC\uC2F1 UI/UX \uCF58\uD150\uCE20\uAC1C\uBC1C]`},{date:"2017.03 - 2021.02",text:"\uCCAD\uC8FC\uB300\uD559\uAD50 \uC758\uB8CC\uACBD\uC601\uD559\uACFC \uC804\uACF5"},{date:"2014.03 - 2017.02",text:"\uCDA9\uBD81\uC5EC\uC790\uACE0\uB4F1\uD559\uAD50"}],activities:[{date:"2019.03 - 2020.02",text:"\uCCAD\uC8FC\uB300\uD559\uAD50 \uCD1D\uD559\uC0DD\uD68C \uD64D\uBCF4\uBD80\uC7A5"},{date:"2018.03 - 2019.02",text:"\uCCAD\uC8FC\uB300\uD559\uAD50 \uB3D9\uC544\uB9AC\uC5F0\uD569\uD68C \uD64D\uBCF4\uCC28\uC7A5"}],licenses:[{date:"2024.04",text:"\uC6F9\uB514\uC790\uC778\uAE30\uB2A5\uC0AC"},{date:"2024.02",text:"GTQ\uADF8\uB798\uD53D\uAE30\uC220\uC790\uACA9 1\uAE09"},{date:"2021.07",text:"\uC6B4\uC804\uBA74\uD5C8 2\uC885 \uBCF4\uD1B5"},{date:"2021.03",text:"\uBCF4\uAC74\uC758\uB8CC\uC815\uBCF4\uAD00\uB9AC\uC0AC"},{date:"2020.11",text:"\uC0AC\uD68C\uC870\uC0AC\uBD84\uC11D\uC0AC(2\uAE09)"}],skills:["html5","css","JavaScript","Vue.js","SCSS","GSAP","Figma","XD","Photoshop","Illustrator"]}}},methods:{typeEn(){clearTimeout(this.timer);const n=this.index%this.texts.length,e=this.texts[n].en;if(this.isDeleting)this.currentEnText=e.substring(0,this.enIndex-1),this.enIndex--,this.enIndex<=0&&(this.isDeleting=!1,this.index=(this.index+1)%this.texts.length);else if(this.currentEnText=e.substring(0,this.enIndex+1),this.enIndex++,this.enIndex>=e.length){this.isDeleting=!0,this.timer=setTimeout(this.typeEn,this.delayAfterTyping);return}this.timer=setTimeout(this.typeEn,this.isDeleting?this.deletingSpeed:this.typingSpeed)},initRollingText(){const n=document.querySelectorAll(".rolling-content");n.length!==0&&n.forEach((e,t)=>{const i=t===1,r=e.offsetWidth/2,s=i?-r:0,a=i?0:-r;Ne.set(e,{x:s});const o=Ne.to(e,{x:a,duration:35,ease:"none",repeat:-1});di.create({trigger:".rolling-section",start:"top bottom",end:"bottom top",onUpdate:l=>{const u=Math.abs(l.getVelocity()/150),f=1+u;Ne.to(o,{timeScale:f,duration:.3}),Ne.to(o,{timeScale:1,delay:.5,duration:1})}}),this.rollingTls.push(o)})},initIntroAnimation(){const n=document.querySelectorAll(".intro-section .split-text");if(n.length===0)return;n.forEach(r=>{const s=r.innerHTML;r.innerHTML="",s.split(/(<br[^>]*>)/i).forEach(o=>{o.toLowerCase().startsWith("<br")?r.innerHTML+=o:[...o].forEach(l=>{const u=document.createElement("span");u.classList.add("char"),u.innerText=l===" "?"\xA0":l,r.appendChild(u)})})});const e=document.querySelectorAll(".en-text .char"),t=document.querySelector(".kr-text");Ne.timeline({scrollTrigger:{trigger:".intro-section",start:"top top",end:"+=2000",pin:!0,scrub:1,anticipatePin:1}}).to(e,{color:"#fff",opacity:1,stagger:.1,ease:"none"}).to(t,{opacity:1,y:0,duration:1,ease:"power2.out"}).to({},{duration:1})},initBioReveal(){document.querySelectorAll(".bio-row, .row01, .row02, .row03 .row04").forEach(e=>{const t=e.children;Ne.set(t,{opacity:0,y:50}),Ne.to(t,{opacity:1,y:0,duration:.8,stagger:.2,ease:"back.out(1.7)",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}})})},initHorizontalScroll(){const n=document.querySelector(".horizontal-section"),e=document.querySelector(".horizontal-inner"),t=document.querySelector(".planet-sphere");if(!n||!e)return;let i=Ne.matchMedia();i.add("(min-width: 768px)",()=>{const r=Ne.to(e,{x:()=>-(e.scrollWidth-window.innerWidth),ease:"none",scrollTrigger:{trigger:n,start:"top top",end:()=>`+=${e.scrollWidth}`,pin:!0,scrub:1,invalidateOnRefresh:!0}});return document.querySelectorAll(".one-page").forEach(a=>{const o=a.querySelectorAll(".reveal-text h2, .reveal-text p");o.length>0&&Ne.to(o,{clipPath:"inset(0 0% 0 0)",duration:1.2,stagger:.3,ease:"power2.inOut",scrollTrigger:{trigger:a,containerAnimation:r,start:"left 70%",toggleActions:"play none none reverse"}});const l=a.querySelectorAll(".workflow-tags .tag");l.length>0&&Ne.fromTo(l,{opacity:0,x:50},{opacity:1,x:0,duration:.8,stagger:.4,ease:"back.out(1.2)",scrollTrigger:{trigger:a,containerAnimation:r,start:"left 40%",toggleActions:"play none none reverse"}})}),di.create({trigger:".focus-section",containerAnimation:r,start:"left 60%",onEnter:()=>{Ne.to(n,{backgroundColor:"#000000",duration:.8}),t&&Ne.to(t,{opacity:1,scale:1,duration:1.2})},onLeaveBack:()=>{Ne.to(n,{backgroundColor:"#ffffff",duration:.8}),t&&Ne.to(t,{opacity:0,scale:.5,duration:.8})}}),this.initIdentityAnimation(r),this.initExperienceFloating(r),()=>{Ne.set(".reveal-text h2, .reveal-text p",{clearProps:"all"}),Ne.set(".workflow-tags .tag",{clearProps:"all"}),Ne.set(e,{clearProps:"all"}),Ne.set(n,{clearProps:"all"}),t&&Ne.set(t,{clearProps:"all"})}}),i.add("(max-width: 767px)",()=>{Ne.set(".reveal-text h2, .reveal-text p",{clipPath:"inset(0 0% 0 0)",opacity:1,visibility:"visible"}),Ne.set(".workflow-tags .tag",{opacity:1,x:0}),document.querySelectorAll(".icon-item").forEach(s=>{s.classList.remove("is-floating"),Ne.set(s,{opacity:1,scale:1,y:0})})})},initFocus3DText(){const n=this.$refs.focusTxt;if(!n)return;const t=n.textContent.trim().split("");n.innerHTML="";const i=window.innerWidth<768,r=window.innerWidth;let s=i?Math.max(100,t.length*8):Math.max(200,t.length*15);i&&s>r*.35&&(s=r*.35);const a=-s,o=25,l=document.createElement("div");l.className="sphere";const u=s*1.8;Object.assign(l.style,{position:"absolute",left:"50%",top:"50%",width:`${u}px`,height:`${u}px`,background:"radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.02))",borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.1)",backdropFilter:"blur(2px)",WebkitBackdropFilter:"blur(2px)",transform:`translate(-50%, -50%) translateZ(${i?-250:-300}px)`,zIndex:0,pointerEvents:"none"}),n.appendChild(l);const f=t.map(h=>{const c=document.createElement("span");return c.innerText=h===" "?"\xA0":h,c.className="char",Object.assign(c.style,{position:"absolute",left:"50%",top:"50%",display:"inline-block",transformOrigin:`50% 50% ${a}px`,transformStyle:"preserve-3d",color:"#fff",fontSize:i?"12px":"18px",fontWeight:"500",zIndex:10,pointerEvents:"none",backfaceVisibility:"visible"}),n.appendChild(c),c});Ne.set(n,{rotationZ:15,rotationX:10,transformStyle:"preserve-3d",perspective:i?"1000px":"1500px"});const d=Ne.timeline({repeat:-1});f.forEach((h,c)=>{const m=c/f.length*360;d.fromTo(h,{rotationY:m,xPercent:-50,yPercent:-50},{rotationY:m-360,duration:o,ease:"none"},0)})},initIdentityAnimation(n){const e=document.querySelector(".identity-section");if(!e)return;const t=e.querySelectorAll(".title-wrap h2, .title-wrap p"),i=e.querySelectorAll(".icon-item");Ne.set(t,{opacity:0,y:30}),Ne.set(i,{opacity:0,scale:.5,y:20}),Ne.timeline({scrollTrigger:{trigger:e,containerAnimation:n,start:"left 70%",toggleActions:"play none none reverse"}}).to(t,{opacity:1,y:0,duration:.6,stagger:.2}).to(i,{opacity:1,scale:1,y:0,duration:.5,stagger:.15,ease:"back.out(1.7)",onComplete:()=>{i.forEach(s=>s.classList.add("is-floating"))}},"-=0.3")},initExperienceFloating(n){const e=document.querySelector(".experience-section .img-wrap");if(!e)return;const t=e.querySelector(".macbook-img"),i=e.querySelector(".code-symbol"),r=e.querySelector(".code-greeting");Ne.fromTo([t,i,r],{yPercent:150,opacity:0,scale:.5},{yPercent:0,opacity:1,scale:1,duration:1.2,stagger:.1,ease:"back.out(1.5)",scrollTrigger:{trigger:".experience-section",containerAnimation:n,start:"left 75%",toggleActions:"play none none reverse",onComplete:()=>s()}});const s=()=>{Ne.getTweensOf(t).length>1||(Ne.to(t,{y:"-=25",duration:3,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Ne.to(i,{y:"+=30",x:"-=15",rotation:"-=8",duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:.2}),Ne.to(r,{y:"-=35",x:"+=20",rotation:"+=5",duration:4,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:.4}))}},initSkillsAnimation(){const n=this.$refs.skillsSection,e=Ne.utils.toArray(".skill-card"),t=this.$refs.bgTitle,i=document.querySelector(".project-section");if(!n||e.length===0||!t||!i)return;Ne.set(i,{y:"100vh"}),Ne.set(e,{y:"110vh"});const r=Ne.timeline({scrollTrigger:{trigger:n,start:"top top",end:`+=${e.length*90}%`,pin:!0,scrub:.5,pinSpacing:!0,onRefresh:s=>{s.progress>0&&s.animation.progress(1)}}});e.forEach((s,a)=>{const o=a===e.length-1,l=a*1.5;o?r.to(s,{y:0,duration:1,ease:"none",onStart:()=>this.animateBgTitle(s.getAttribute("data-title"))},l):r.to(s,{y:0,duration:1,ease:"none",onStart:()=>this.animateBgTitle(s.getAttribute("data-title")),onReverseComplete:()=>{const u=a>0?e[a-1].getAttribute("data-title"):"";this.animateBgTitle(u)}},l).to(s,{y:"-100vh",duration:1,ease:"none"},"+=0.3")}),r.to(i,{y:0,duration:2,ease:"power2.inOut",onStart:()=>{},onReverseComplete:()=>{const s=e[e.length-1].getAttribute("data-title");this.animateBgTitle(s)}},"+=0.2")},animateBgTitle(n){const e=this.$refs.bgTitle;!e||e.innerText===n||(Ne.killTweensOf(e),Ne.timeline().to(e,{opacity:0,duration:.2,onComplete:()=>{e.innerText=n}}).to(e,{opacity:1,duration:.3}))},initProjectSwiper(){this.swiperInstance&&this.swiperInstance.destroy(!0,!0),this.swiperInstance=new Vt(".project-swiper",{modules:[L0,D0],grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:15,loop:!0,loopedSlides:6,loopPreventsSliding:!1,speed:600,autoplay:{delay:3e3,disableOnInteraction:!1},observer:!0,observeParents:!0,breakpoints:{768:{spaceBetween:30}}})},initVisionPhysics(){const n=this.$refs.canvasContainer,e=document.querySelector(".main-text"),t=document.querySelector(".sub-text");if(!n||!e||!t)return;const{Engine:i,Render:r,Runner:s,Bodies:a,Composite:o,Events:l,Body:u}=am,f=i.create(),d=s.create();d.enabled=!1;const h=r.create({element:n,engine:f,options:{width:n.clientWidth,height:n.clientHeight,background:"transparent",wireframes:!1,pixelRatio:window.devicePixelRatio||1}}),c=100,m=a.rectangle(n.clientWidth/2,n.clientHeight+c/2,n.clientWidth,c,{isStatic:!0,render:{visible:!1}}),x=a.rectangle(-c/2,n.clientHeight/2,c,n.clientHeight*2,{isStatic:!0,render:{visible:!1}}),g=a.rectangle(n.clientWidth+c/2,n.clientHeight/2,c,n.clientHeight*2,{isStatic:!0,render:{visible:!1}}),p=y=>{const E=y.getBoundingClientRect(),T=n.getBoundingClientRect();return a.rectangle(E.left-T.left+E.width/2,E.top-T.top+E.height/2,E.width,E.height,{isStatic:!0,render:{visible:!1}})},_=p(e),M=p(t),v=["DESIGN","RESPONSIVE","PUBLISHING","UX/UI","SEMANTIC","INTERACTIVE","CLEAN CODE","OPTIMIZED","ACCESSIBILITY","ANIMATION"].map((y,E)=>a.rectangle(Math.random()*n.clientWidth,-2e3,y.length*18+30,45,{restitution:.5,render:{fillStyle:"transparent",strokeStyle:"transparent"},friction:.1,label:y,chamfer:{radius:22}}));return o.add(f.world,[m,x,g,_,M,...v]),l.on(h,"afterRender",()=>{const y=h.context;v.forEach(E=>{const{x:T,y:b}=E.position,{angle:S,label:w}=E,C=w.length*18+30,L=45;y.save(),y.translate(T,b),y.rotate(S),y.beginPath(),y.strokeStyle="#ffffff",y.lineWidth=1.2,y.roundRect(-C/2,-L/2,C,L,22),y.stroke(),y.font="500 20px IBM Plex Sans KR",y.fillStyle="#ffffff",y.textAlign="center",y.textBaseline="middle",y.fillText(w,0,0),y.restore()})}),r.run(h),di.create({trigger:".vision-section",start:"top 70%",onEnter:()=>{v.forEach((y,E)=>{u.setPosition(y,{x:Math.random()*(n.clientWidth-100)+50,y:-100-E*150}),u.setVelocity(y,{x:0,y:0})}),d.enabled=!0,s.run(d,f)},once:!0}),{engine:f,runner:d,render:h,stop(){Yn.exports.Render.stop(h),Yn.exports.Runner.stop(d),Yn.exports.World.clear(f.world),Yn.exports.Engine.clear(f),h.canvas.remove()}}}},setup(){const n=hs(null),e=Dl(null),{x:t,y:i}=Wl(),r=a=>{Ne.to(".box",{duration:.6,rotationY:o=>45+o/projects.length*206.5+90*(a.clientX/window.innerWidth)})};return{mouseX:t,mouseY:i,containerRef:e,initGSAPProjectList:a=>{!a||projects.length===0||(Ne.set(a,{perspective:800}),projects.forEach((o,l)=>{const u=document.createElement("div");u.classList.add("box"),u.style.background=`hsl(${l/projects.length*360}, 100%, 50%)`,a.appendChild(u),Ne.set(u,{position:"absolute",left:"50%",top:"50%",x:"-50%",y:"-50%",z:600,width:300,height:600,borderRadius:20,transformOrigin:"50% 50% 1200%",rotationY:90+l/projects.length*206.5})}),window.addEventListener("mousemove",r))},blobEffect:n,handleMouseMove:r}},mounted(){history.scrollRestoration="manual",this.animateBgTitle("HMTL");const n=document.getElementById("BlobBg");n&&(this.blobEffect=um(n)),this.typeEn(),this.$nextTick(()=>{this.initBioReveal(),this.initIntroAnimation(),this.initHorizontalScroll(),this.initSkillsAnimation(),this.initRollingText(),this.containerRef&&this.initGSAPProjectList(this.containerRef),this.visionInstance=this.initVisionPhysics(),setTimeout(()=>{di.refresh(),this.initFocus3DText(),this.initProjectSwiper()},100)}),this.handleResize=()=>{clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.visionInstance&&(this.visionInstance.stop(),this.visionInstance=null),this.visionInstance=this.initVisionPhysics(),di.refresh()},300)},window.addEventListener("resize",this.handleResize)},beforeUnmount(){clearTimeout(this.timer),clearTimeout(this.resizeTimer),this.blobEffect&&this.blobEffect.destroy(),this.visionInstance&&this.visionInstance.stop(),window.removeEventListener("resize",this.handleResize)}},$0={class:"visual-section"},K0={class:"wrapper"},j0={class:"contents-wrap"},Z0={class:"title-wrap"},J0={class:"keyworld-wrap"},Q0={class:"typing-text font_ibm font_500"},ex={class:"profile-section"},tx={class:"wrapper"},nx={class:"content-wrap"},ix={class:"info-area"},sx={class:"sub-section personal"},rx={class:"font_mon font_700"},ax={class:"info-list"},ox={class:"font_mon font_600 label"},lx={class:"font_ibm value"},cx={class:"sub-section experience"},ux={class:"info-list"},fx={class:"date font_mon"},dx={class:"text font_ibm"},hx={class:"sub-section education"},px={class:"info-list"},mx={class:"date font_mon"},xx={class:"text font_ibm"},gx={class:"sub-section activities"},vx={class:"info-list"},_x={class:"date font_mon"},Sx={class:"text font_ibm"},yx={class:"sub-section license"},Mx={class:"info-list"},bx={class:"date font_mon"},Ex={class:"text font_ibm"},Tx={class:"sub-section skills"},Ax={class:"skills-wrap"},wx={class:"rolling-section"},Cx={class:"rolling-wrapper"},Rx={class:"rolling-content"},Px={class:"rolling-wrapper"},Lx={class:"rolling-content"},Dx={class:"intro-section",ref:"introSection"},Ix={class:"horizontal-section",ref:"horizontalSection"},Ux={class:"pin-wrapper"},Fx={class:"horizontal-inner",ref:"horizontalInner"},Nx={class:"focus-section one-page"},Ox={class:"inner"},Bx={class:"fluid-container planet-sphere"},zx={class:"stage"},Vx={class:"txt",ref:"focusTxt"},kx={class:"skills-section",ref:"skillsSection"},Gx={class:"fixed-area"},Hx={class:"bg-title font_ibm font_500",ref:"bgTitle"},Wx={class:"project-section"},Xx={class:"more-btn-wrap"},Yx={class:"vision-section",ref:"sectionRef"},qx={class:"wrapper"},$x={class:"canvas-inner"},Kx={class:"physics-canvas",ref:"canvasContainer"};function jx(n,e,t,i,r,s){const a=Il("router-link");return Mt(),Ul(Cl,{class:"aboutpage-container"},{default:Ra(()=>[I("section",$0,[e[5]||(e[5]=I("div",{class:"gradient-overlay"},null,-1)),e[6]||(e[6]=I("canvas",{id:"BlobBg"},null,-1)),I("div",K0,[I("div",j0,[I("div",Z0,[I("div",J0,[e[0]||(e[0]=I("span",{class:"bracket font_ibm font_500"},"</",-1)),I("span",Q0,Dt(r.currentEnText),1),e[1]||(e[1]=I("span",{class:"bracket font_ibm font_500"},">",-1))]),e[2]||(e[2]=I("span",{class:"stac-text font_ibm"},"Publisher",-1))]),e[3]||(e[3]=I("div",{class:"intro-text"},[I("span",null,"\uC548\uB155\uD558\uC138\uC694! \uCD5C\uC801\uC758 \uB514\uC9C0\uD138 \uACBD\uD5D8\uC744 \uC124\uACC4\uD558\uB294 "),I("span",null,"\uD37C\uBE14\uB9AC\uC154, \uC774\uC724\uC815\uC785\uB2C8\uB2E4.")],-1)),e[4]||(e[4]=I("div",{class:"scroll-icon"},[I("span",{class:"font_ibm"},"SCROLL"),I("div",{class:"icon"},[I("img",{src:Nl,alt:""})])],-1))])])]),I("section",ex,[I("div",tx,[e[13]||(e[13]=I("div",{class:"title"},[I("h2",{class:"font_ibm"},[dt(" \uAE30\uD68D\uC744 \uB514\uC790\uC778\uD558\uACE0 "),I("br",{class:"m-br"}),dt("\uCF54\uB4DC\uB85C \uC644\uC131\uD558\uB294, "),I("br"),dt(" \uB514\uC790\uC778\uD558\uB294 \uD37C\uBE14\uB9AC\uC154 \uC774\uC724\uC815\uC785\uB2C8\uB2E4. ")]),I("div",{class:"profile-img"},[I("img",{src:Io,alt:"\uC774\uC724\uC815 \uD504\uB85C\uD544 \uC0AC\uC9C4"})])],-1)),I("div",nx,[I("div",ix,[I("div",sx,[I("h3",rx,Dt(r.profileData.personal.title),1),I("ul",ax,[(Mt(!0),wt(yn,null,Sn(r.profileData.personal.items,o=>(Mt(),wt("li",{key:o.label,class:"item"},[I("dt",ox,Dt(o.label),1),I("dd",lx,Dt(o.value),1)]))),128))])]),I("div",cx,[e[7]||(e[7]=I("h3",{class:"font_mon font_700"},"Experience",-1)),I("ul",ux,[(Mt(!0),wt(yn,null,Sn(r.profileData.experience,o=>(Mt(),wt("li",{key:o.date},[I("span",fx,Dt(o.date),1),I("span",dx,Dt(o.text),1)]))),128))])]),I("div",hx,[e[8]||(e[8]=I("h3",{class:"font_mon font_700"},"Education",-1)),I("ul",px,[(Mt(!0),wt(yn,null,Sn(r.profileData.education,o=>(Mt(),wt("li",{key:o.date},[I("span",mx,Dt(o.date),1),I("span",xx,Dt(o.text),1)]))),128))])]),I("div",gx,[e[9]||(e[9]=I("h3",{class:"font_mon font_700"},"Campus Activities",-1)),I("ul",vx,[(Mt(!0),wt(yn,null,Sn(r.profileData.activities,o=>(Mt(),wt("li",{key:o.date},[I("span",_x,Dt(o.date),1),I("span",Sx,Dt(o.text),1)]))),128))])]),I("div",yx,[e[10]||(e[10]=I("h3",{class:"font_mon font_700"},"License",-1)),I("ul",Mx,[(Mt(!0),wt(yn,null,Sn(r.profileData.licenses,o=>(Mt(),wt("li",{key:o.date},[I("span",bx,Dt(o.date),1),I("span",Ex,Dt(o.text),1)]))),128))])]),I("div",Tx,[e[11]||(e[11]=I("h3",{class:"font_mon font_700"},"Skills",-1)),I("div",Ax,[(Mt(!0),wt(yn,null,Sn(r.profileData.skills,o=>(Mt(),wt("span",{key:o,class:"skill-item font_mon"},Dt(o),1))),128))])])]),e[12]||(e[12]=I("div",{class:"profile-img"},[I("img",{src:Io,alt:"\uC774\uC724\uC815 \uD504\uB85C\uD544 \uC0AC\uC9C4"})],-1))])])]),I("section",wx,[I("div",Cx,[I("div",Rx,[(Mt(),wt(yn,null,Sn(10,o=>I("div",{class:"rolling-item",key:"name-"+o},[...e[14]||(e[14]=[I("span",{class:"font_mon font_300"},"LEE YUNJEONG",-1),I("div",{class:"circle-icon"},[I("div",{class:"dev-icon"},[I("svg",{width:"105",height:"58",viewBox:"0 0 105 58",fill:"none"},[I("path",{d:"M77.2891 41.3765L98.6214 29.5825V29.0669L77.2891 17.3374V10.4414L105.002 25.9734V32.676L77.2891 48.208V41.3765Z",fill:"white"}),I("path",{d:"M38.5156 57.8744L60.2346 0H66.4861L44.7671 57.8744H38.5156Z",fill:"white"}),I("path",{d:"M0 32.676V25.9734L27.7127 10.4414V17.2729L6.38036 29.0669V29.5825L27.7127 41.312V48.208L0 32.676Z",fill:"white"})])])],-1)])])),64))])]),I("div",Px,[I("div",Lx,[(Mt(),wt(yn,null,Sn(10,o=>I("div",{class:"rolling-item",key:"job-"+o},[...e[15]||(e[15]=[I("span",{class:"font_mon font_300"},"PUBLISHER",-1),I("div",{class:"rolling-icon"},[I("img",{src:I0,alt:"mac"})],-1)])])),64))])])]),e[28]||(e[28]=I("section",{class:"bio-section parallax__item"},[I("div",{class:"wrapper"},[I("div",{class:"bio-content-wrap"},[I("div",{class:"bio-row row01"},[I("div",{class:"video-box"},[I("video",{autoplay:"",muted:"",loop:"",playsinline:"",src:Uo})]),I("span",{class:"bio-text font_ibm"},"I'm Yunjeong Lee!")]),I("div",{class:"bio-row row02"},[I("span",{class:"bio-text font_ibm font_400"},"A Web Publisher "),I("div",{class:"video-box"},[I("video",{autoplay:"",muted:"",loop:"",playsinline:"",src:U0})])]),I("div",{class:"bio-row row03"},[I("span",{class:"bio-text font_ibm font_400"},[dt("delivering optimal "),I("br",{class:"m-br"}),dt("digital experiences.")])]),I("div",{class:"bio-row row04"},[I("span",{class:"bio-text font_ibm font_400"},"Defining the web"),I("div",{class:"video-box"},[I("video",{autoplay:"",muted:"",loop:"",playsinline:"",src:Uo})]),I("span",{class:"bio-text font_ibm font_400"},"since July 2024.")])])])],-1)),I("section",Dx,[...e[16]||(e[16]=[I("div",{class:"pin-wrapper"},[I("div",{class:"wrapper"},[I("div",{class:"title-wrap"},[I("span",{class:"sub-title font_ibm"},"What started it?"),I("h2",{class:"split-text font_ibm en-text font_400"},[dt(" Curiosity about how "),I("br",{class:"m-br"}),dt("design is implemented "),I("br"),dt("on the web led me "),I("br",{class:"m-br"}),dt("to start my career "),I("br"),dt("as a publisher. ")]),I("p",{class:"kr-text font_ibm font_400"}," \uB514\uC790\uC778\uC774 \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C \uAD6C\uD604\uB418\uB294 \uACFC\uC815\uC5D0 \uB300\uD55C \uD638\uAE30\uC2EC\uC73C\uB85C \uD37C\uBE14\uB9AC\uC154\uC758 \uAE38\uC744 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4. ")])])],-1)])],512),I("section",Ix,[I("div",Ux,[I("div",Fx,[e[19]||(e[19]=I("div",{class:"identity-section one-page"},[I("div",{class:"wrapper"},[I("div",{class:"contents-inner"},[I("div",{class:"text-area"},[I("div",{class:"title-wrap"},[I("h2",{class:"font_ibm font_400"},"<Identity/>"),I("p",{class:"font_400"},[dt(" \uB2E8\uC21C\uD788 \uBCF4\uC774\uB294 \uD654\uBA74\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, "),I("br"),dt("\uC2DC\uAC04\uC774 \uC9C0\uB098\uB3C4 \uC720\uC9C0\uB418\uACE0 \uD655\uC7A5\uB420 \uC218 \uC788\uB294 \uCF54\uB4DC\uB97C \uACE0\uBBFC\uD569\uB2C8\uB2E4. ")])]),I("div",{class:"icon-list"},[I("div",{class:"icon-item"},[I("img",{src:F0,alt:"\uC544\uC774\uCF581"})]),I("div",{class:"icon-item"},[I("img",{src:N0,alt:"\uC544\uC774\uCF582"})]),I("div",{class:"icon-item"},[I("img",{src:O0,alt:"\uC544\uC774\uCF583"})]),I("div",{class:"icon-item"},[I("img",{src:B0,alt:"\uC544\uC774\uCF584"})])])])])])],-1)),I("div",Nx,[I("div",Ox,[e[18]||(e[18]=I("div",{class:"title-wrap reveal-text"},[I("h2",{class:"font_ibm font_400"},"<Focus/>"),I("p",{class:"font_500"},[dt(" \uC720\uC9C0\uBCF4\uC218\uB97C \uC804\uC81C\uB85C \uB9C8\uD06C\uC5C5\uD569\uB2C8\uB2E4."),I("br"),dt(" \uBC18\uBCF5\uC744 \uC904\uC774\uACE0, \uC218\uC815\uC5D0 \uAC15\uD55C \uAD6C\uC870\uB97C \uC120\uD638\uD569\uB2C8\uB2E4. ")])],-1)),I("div",Bx,[I("div",zx,[I("div",Vx,"FOCUS ON EXPERIENCE",512),e[17]||(e[17]=I("div",{class:"grain"},null,-1))])])])]),e[20]||(e[20]=I("div",{class:"workflow-section one-page is-dark-bg"},[I("div",{class:"content-wrap"},[I("div",{class:"inner"},[I("div",{class:"title-wrap reveal-text"},[I("h2",{class:"font_ibm"},"<Workflow/>"),I("p",null,[dt(" \uB514\uC790\uC778 \uC758\uB3C4\uB97C \uC774\uD574\uD558\uACE0 "),I("br"),dt("\uAD6C\uC870\uB97C \uD574\uC11D\uD574 \uC6F9 \uC704\uC5D0 \uAD6C\uD604\uD569\uB2C8\uB2E4. ")])]),I("div",{class:"workflow-tags"},[I("span",{class:"tag font_mon font_700"},"DESIGN"),I("span",{class:"tag font_mon font_700"},"CODE"),I("span",{class:"tag font_mon font_700"},"EXPERIENCE")])])])],-1)),e[21]||(e[21]=I("div",{class:"experience-section one-page is-dark-bg"},[I("div",{class:"content-wrap"},[I("div",{class:"inner"},[I("div",{class:"title-wrap reveal-text"},[I("h2",{class:"font_ibm"},"<Experience/>"),I("p",null,[dt(" \uC2E4\uC81C \uC11C\uBE44\uC2A4 \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uCF54\uB4DC\uB97C \uB9CC\uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4."),I("br"),dt(" \uB514\uC790\uC774\uB108, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uBA70 "),I("br"),dt(" \uC6B4\uC601\xB7\uC720\uC9C0\uBCF4\uC218\xB7\uAC1C\uC120\uAE4C\uC9C0 \uC774\uC5B4\uC9C0\uB294 \uC791\uC5C5\uC744 \uACBD\uD5D8\uD574\uC654\uC2B5\uB2C8\uB2E4. ")])]),I("div",{class:"img-wrap"},[I("div",{class:"code-greeting"},[I("span",{class:"font_ibm font_500"},"> Hello,"),I("span",{class:"font_ibm font_500"},"world !")]),I("div",{class:"code-symbol"},[I("span",{class:"font_ibm"},"</>")]),I("div",{class:"macbook-img"},[I("img",{src:z0,alt:""})])])])])],-1))],512)])],512),I("section",kx,[I("div",Gx,[e[22]||(e[22]=I("h2",{class:"section-title font_ibm"},"</Skills>",-1)),I("span",Hx,null,512)]),e[23]||(e[23]=I("div",{class:"wrapper"},[I("div",{class:"skill-card","data-title":"HTML"},[I("div",{class:"skill-info"},[I("div",{class:"title-wrap"},[I("h3",{class:"font_ibm font_500"},"HTML"),I("span",{class:"font_ibm"},"The Semantic Structure")]),I("p",null," \uB2E8\uC21C\uD788 \uD654\uBA74\uC5D0 \uD14D\uC2A4\uD2B8\uB97C \uBCF4\uC774\uAC8C \uD558\uB294 \uAC83\uC744 \uB118\uC5B4, \uC2DC\uB9E8\uD2F1 \uB9C8\uD06C\uC5C5(Semantic Markup) \uC6D0\uCE59\uC744 \uCCA0\uC800\uD788 \uC9C0\uCF1C \uAC80\uC0C9 \uC5D4\uC9C4 \uCD5C\uC801\uD654(SEO)\uC640 \uC6F9 \uC811\uADFC\uC131\uC758 \uAE30\uCD08\uB97C \uB2E8\uB2E8\uD558\uAC8C \uB2E4\uC9C0\uB294 \uC5ED\uD560\uC744 \uC218\uD589\uD569\uB2C8\uB2E4. ")])]),I("div",{class:"skill-card","data-title":"CSS"},[I("div",{class:"skill-info"},[I("div",{class:"title-wrap"},[I("h3",{class:"font_ibm font_500"},"CSS"),I("span",{class:"font_ibm"},"Pixel-Perfect Styling & Responsive UX")]),I("p",null," \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uD53D\uC140 \uB2E8\uC704\uB85C \uC815\uD655\uD558\uAC8C \uAD6C\uD604\uD569\uB2C8\uB2E4. @media \uCFFC\uB9AC\uC640 Flexbox/Grid\uB97C \uD65C\uC6A9\uD558\uC5EC \uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC5D0 \uCD5C\uC801\uD654\uB41C \uBC18\uC751\uD615 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ")])]),I("div",{class:"skill-card","data-title":"JavaScript"},[I("div",{class:"skill-info"},[I("div",{class:"title-wrap"},[I("h3",{class:"font_ibm font_500"},"JavaScript"),I("span",{class:"font_ibm"},"Dynamic Interaction & Problem Solving")]),I("p",null," \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uB3D9\uC801\uC778 \uC778\uD130\uB799\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4. \uC21C\uC218 JavaScript\uB97C \uC774\uC6A9\uD574 \uBCF5\uC7A1\uD55C \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uCC98\uB9AC\uD558\uACE0, \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uB97C \uB2A5\uB3D9\uC801\uC73C\uB85C \uD574\uACB0\uD569\uB2C8\uB2E4. ")])]),I("div",{class:"skill-card","data-title":"jQuery"},[I("div",{class:"skill-info"},[I("div",{class:"title-wrap"},[I("h3",{class:"font_ibm font_500"},"jQuery"),I("span",{class:"font_ibm"},"Efficient DOM Control & Cross-Browser Stability")]),I("p",null," \uAC04\uACB0\uD55C \uBB38\uBC95\uC744 \uD65C\uC6A9\uD558\uC5EC DOM \uC870\uC791 \uBC0F \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uBCF5\uC7A1\uD55C \uD06C\uB85C\uC2A4 \uBE0C\uB77C\uC6B0\uC9D5 \uC774\uC288\uB97C \uCD5C\uC18C\uD654\uD558\uBA70, \uBE60\uB974\uACE0 \uC548\uC815\uC801\uC778 \uC6F9 \uC778\uD130\uB799\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ")])]),I("div",{class:"skill-card","data-title":"Vue.js"},[I("div",{class:"skill-info"},[I("div",{class:"title-wrap"},[I("h3",{class:"font_ibm font_500"},"Vue.js"),I("span",{class:"font_ibm"},"Component-Driven Architecture & Reactive UI")]),I("p",null," Quasar Framework\uB97C \uD65C\uC6A9\uD558\uC5EC \uC6F9, \uBAA8\uBC14\uC77C(\uD558\uC774\uBE0C\uB9AC\uB4DC \uC571), \uB370\uC2A4\uD06C\uD1B1 \uD658\uACBD\uC5D0 \uB300\uC751\uD558\uB294 \uD1B5\uD569\uC801\uC778 UI\uB97C \uAD6C\uCD95\uD569\uB2C8\uB2E4. Material Design \uAE30\uBC18\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC77C\uAD00\uC131 \uC788\uB294 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ")])])],-1))],512),I("section",Wx,[e[25]||(e[25]=I("div",{class:"project-header"},[I("span",{class:"sub-title font_ibm"},"SELECTED"),I("h2",{class:"main-title font_mon"},"PROJECT")],-1)),e[26]||(e[26]=I("div",{class:"swiper project-swiper"},[I("div",{class:"swiper-wrapper"},[I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:V0,alt:""})])]),I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:k0,alt:""})])]),I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:G0,alt:""})])]),I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:H0,alt:""})])]),I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:W0,alt:""})])]),I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:X0,alt:""})])]),I("div",{class:"swiper-slide project-item"},[I("div",{class:"thumb"},[I("img",{src:Y0,alt:""})])])])],-1)),I("div",Xx,[Fl(a,{to:"/projects",class:"more-btn font_ibm"},{default:Ra(()=>[...e[24]||(e[24]=[dt(" MORE THE PROJECT ",-1)])]),_:1})])]),I("section",Yx,[I("div",qx,[I("div",$x,[I("div",Kx,null,512),e[27]||(e[27]=I("div",{class:"contents-wrap"},[I("span",{class:"title font_ibm"},"<Vision/>"),I("div",{class:"text-wrap"},[I("span",{class:"main-text font_mon font_700"},"CREATIVE CODE"),I("div",{class:"sub-text"},[I("span",null,"\uAE54\uB054\uD558\uACE0 \uAD6C\uC870\uD654\uB41C \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC5EC "),I("span",{class:"row02"},"\uB514\uC790\uC778\uACFC \uAE30\uB2A5\uC744 \uC548\uC815\uC801\uC73C\uB85C \uAD6C\uD604\uD569\uB2C8\uB2E4.")])])],-1))])])],512)]),_:1})}var sg=Ol(q0,[["render",jx]]);export{sg as default};
