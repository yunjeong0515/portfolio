import{Q as Bo}from"./QPage.2f96e799.js";import{t as zo,K as ji,l as Vo,L as Qi,E as Go,z as Ho,o as mr,f as ko,w as Wo,a as V,M as Xo,c as ea,h as ta,F as na,G as It}from"./index.9a139bfc.js";import{g as Xe}from"./index.0b27e08a.js";import{S as Qn}from"./ScrollTrigger.accda2d7.js";import{_ as Yo}from"./plugin-vue_export-helper.21dcd24c.js";import"./render.fb9d86c6.js";function qo(s,e){return e.forEach(function(t){t&&typeof t!="string"&&!Array.isArray(t)&&Object.keys(t).forEach(function(i){if(i!=="default"&&!(i in s)){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}})}),Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}const lr=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const $o=Object.prototype.toString,Ko=s=>$o.call(s)==="[object Object]";function xr(s){return Array.isArray(s)?s:[s]}function Zo(s,e,t){return zo(s,e,{...t,immediate:!0})}const Qa=lr?window:void 0;lr&&window.document;lr&&window.navigator;lr&&window.location;function Jo(s){var e;const t=Qi(s);return(e=t==null?void 0:t.$el)!==null&&e!==void 0?e:t}function Pi(...s){const e=(i,r,n,a)=>(i.addEventListener(r,n,a),()=>i.removeEventListener(r,n,a)),t=Vo(()=>{const i=xr(Qi(s[0])).filter(r=>r!=null);return i.every(r=>typeof r!="string")?i:void 0});return Zo(()=>{var i,r;return[(i=(r=t.value)===null||r===void 0?void 0:r.map(n=>Jo(n)))!==null&&i!==void 0?i:[Qa].filter(n=>n!=null),xr(Qi(t.value?s[1]:s[0])),xr(Go(t.value?s[2]:s[1])),Qi(t.value?s[3]:s[2])]},([i,r,n,a],o,c)=>{if(!(i!=null&&i.length)||!(r!=null&&r.length)||!(n!=null&&n.length))return;const u=Ko(a)?{...a}:a,f=i.flatMap(h=>r.flatMap(d=>n.map(l=>e(h,d,l,u))));c(()=>{f.forEach(h=>h())})},{flush:"post"})}const jo={page:s=>[s.pageX,s.pageY],client:s=>[s.clientX,s.clientY],screen:s=>[s.screenX,s.screenY],movement:s=>s instanceof MouseEvent?[s.movementX,s.movementY]:null};function Qo(s={}){const{type:e="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:n=Qa,target:a=n,scroll:o=!0,eventFilter:c}=s;let u=null,f=0,h=0;const d=ji(r.x),l=ji(r.y),m=ji(null),x=typeof e=="function"?e:jo[e],p=y=>{const T=x(y);u=y,T&&([d.value,l.value]=T,m.value="mouse"),n&&(f=n.scrollX,h=n.scrollY)},g=y=>{if(y.touches.length>0){const T=x(y.touches[0]);T&&([d.value,l.value]=T,m.value="touch")}},b=()=>{if(!u||!n)return;const y=x(u);u instanceof MouseEvent&&y&&(d.value=y[0]+n.scrollX-f,l.value=y[1]+n.scrollY-h)},E=()=>{d.value=r.x,l.value=r.y},A=c?y=>c(()=>p(y),{}):y=>p(y),v=c?y=>c(()=>g(y),{}):y=>g(y),S=c?()=>c(()=>b(),{}):()=>b();if(a){const y={passive:!0};Pi(a,["mousemove","dragover"],A,y),t&&e!=="movement"&&(Pi(a,["touchstart","touchmove"],v,y),i&&Pi(a,"touchend",E,y)),o&&e==="page"&&Pi(n,"scroll",S,y)}return{x:d,y:l,sourceType:m}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Os="181",el=0,ia=1,tl=2,eo=1,nl=2,tn=3,Sn=0,Tt=1,nn=2,an=0,ei=1,ra=2,sa=3,aa=4,il=5,Dn=100,rl=101,sl=102,al=103,ol=104,ll=200,cl=201,fl=202,ul=203,$r=204,Kr=205,dl=206,hl=207,pl=208,ml=209,xl=210,gl=211,vl=212,_l=213,Sl=214,Zr=0,Jr=1,jr=2,ni=3,Qr=4,es=5,ts=6,ns=7,to=0,Ml=1,yl=2,_n=0,bl=1,El=2,Tl=3,Al=4,wl=5,Cl=6,Rl=7,no=300,ii=301,ri=302,is=303,rs=304,cr=306,ss=1e3,rn=1001,as=1002,Pt=1003,Pl=1004,Di=1005,Nt=1006,gr=1007,In=1008,ln=1009,io=1010,ro=1011,_i=1012,Bs=1013,Nn=1014,sn=1015,li=1016,zs=1017,Vs=1018,Si=1020,so=35902,ao=35899,oo=1021,lo=1022,kt=1023,Mi=1026,yi=1027,co=1028,Gs=1029,Hs=1030,ks=1031,Ws=1033,er=33776,tr=33777,nr=33778,ir=33779,os=35840,ls=35841,cs=35842,fs=35843,us=36196,ds=37492,hs=37496,ps=37808,ms=37809,xs=37810,gs=37811,vs=37812,_s=37813,Ss=37814,Ms=37815,ys=37816,bs=37817,Es=37818,Ts=37819,As=37820,ws=37821,Cs=36492,Rs=36494,Ps=36495,Ds=36283,Ls=36284,Is=36285,Us=36286,Dl=3200,Ll=3201,Il=0,Ul=1,gn="",Ft="srgb",si="srgb-linear",sr="linear",et="srgb",zn=7680,oa=519,Fl=512,Nl=513,Ol=514,fo=515,Bl=516,zl=517,Vl=518,Gl=519,la=35044,ca="300 es",Yt=2e3,ar=2001;function uo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hl(){const s=or("canvas");return s.style.display="block",s}const fa={};function ua(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ne(...s){const e="THREE."+s.shift();console.warn(e,...s)}function ft(...s){const e="THREE."+s.shift();console.error(e,...s)}function bi(...s){const e=s.join(" ");e in fa||(fa[e]=!0,Ne(...s))}function kl(s,e,t){return new Promise(function(i,r){function n(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,Fs=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function Wl(s,e){return(s%e+e)%e}function _r(s,e,t){return(1-t)*s+t*e}function di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*r+e.x,this.y=n*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ti{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3],d=n[a+0],l=n[a+1],m=n[a+2],x=n[a+3];if(o<=0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=l,e[t+2]=m,e[t+3]=x;return}if(h!==x||c!==d||u!==l||f!==m){let p=c*d+u*l+f*m+h*x;p<0&&(d=-d,l=-l,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){const b=Math.acos(p),E=Math.sin(b);g=Math.sin(g*b)/E,o=Math.sin(o*b)/E,c=c*g+d*o,u=u*g+l*o,f=f*g+m*o,h=h*g+x*o}else{c=c*g+d*o,u=u*g+l*o,f=f*g+m*o,h=h*g+x*o;const b=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=b,u*=b,f*=b,h*=b}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,n,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],h=n[a],d=n[a+1],l=n[a+2],m=n[a+3];return e[t]=o*m+f*h+c*l-u*d,e[t+1]=c*m+f*d+u*h-o*l,e[t+2]=u*m+f*l+o*d-c*h,e[t+3]=f*m-o*h-c*d-u*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,n=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),h=o(n/2),d=c(i/2),l=c(r/2),m=c(n/2);switch(a){case"XYZ":this._x=d*f*h+u*l*m,this._y=u*l*h-d*f*m,this._z=u*f*m+d*l*h,this._w=u*f*h-d*l*m;break;case"YXZ":this._x=d*f*h+u*l*m,this._y=u*l*h-d*f*m,this._z=u*f*m-d*l*h,this._w=u*f*h+d*l*m;break;case"ZXY":this._x=d*f*h-u*l*m,this._y=u*l*h+d*f*m,this._z=u*f*m+d*l*h,this._w=u*f*h-d*l*m;break;case"ZYX":this._x=d*f*h-u*l*m,this._y=u*l*h+d*f*m,this._z=u*f*m-d*l*h,this._w=u*f*h+d*l*m;break;case"YZX":this._x=d*f*h+u*l*m,this._y=u*l*h+d*f*m,this._z=u*f*m-d*l*h,this._w=u*f*h-d*l*m;break;case"XZY":this._x=d*f*h-u*l*m,this._y=u*l*h-d*f*m,this._z=u*f*m+d*l*h,this._w=u*f*h+d*l*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],a=t[1],o=t[5],c=t[9],u=t[2],f=t[6],h=t[10],d=i+o+h;if(d>0){const l=.5/Math.sqrt(d+1);this._w=.25/l,this._x=(f-c)*l,this._y=(n-u)*l,this._z=(a-r)*l}else if(i>o&&i>h){const l=2*Math.sqrt(1+i-o-h);this._w=(f-c)/l,this._x=.25*l,this._y=(r+a)/l,this._z=(n+u)/l}else if(o>h){const l=2*Math.sqrt(1+o-i-h);this._w=(n-u)/l,this._x=(r+a)/l,this._y=.25*l,this._z=(c+f)/l}else{const l=2*Math.sqrt(1+h-i-o);this._w=(a-r)/l,this._x=(n+u)/l,this._y=(c+f)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,a=e._w,o=t._x,c=t._y,u=t._z,f=t._w;return this._x=i*f+a*o+r*u-n*c,this._y=r*f+a*c+n*o-i*u,this._z=n*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-n*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,n=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,n=-n,a=-a,o=-o);let c=1-t;if(o<.9995){const u=Math.acos(o),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+n*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+n*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*t-n*r),h=2*(n*i-a*t);return this.x=t+c*u+a*h-o*f,this.y=i+c*f+o*u-n*h,this.z=r+c*h+n*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-n*o,this.y=n*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sr.copy(this).projectOnVector(e),this.sub(Sr)}reflect(e){return this.sub(Sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new q,da=new Ti;class Oe{constructor(e,t,i,r,n,a,o,c,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,a,o,c,u)}set(e,t,i,r,n,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=n,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],h=i[7],d=i[2],l=i[5],m=i[8],x=r[0],p=r[3],g=r[6],b=r[1],E=r[4],A=r[7],v=r[2],S=r[5],y=r[8];return n[0]=a*x+o*b+c*v,n[3]=a*p+o*E+c*S,n[6]=a*g+o*A+c*y,n[1]=u*x+f*b+h*v,n[4]=u*p+f*E+h*S,n[7]=u*g+f*A+h*y,n[2]=d*x+l*b+m*v,n[5]=d*p+l*E+m*S,n[8]=d*g+l*A+m*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-i*n*f+i*o*c+r*n*u-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=f*a-o*u,d=o*c-f*n,l=u*n-a*c,m=t*h+i*d+r*l;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(f*t-r*c)*x,e[5]=(r*n-o*t)*x,e[6]=l*x,e[7]=(i*c-u*t)*x,e[8]=(a*t-i*n)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,a,o){const c=Math.cos(n),u=Math.sin(n);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mr.makeScale(e,t)),this}rotate(e){return this.premultiply(Mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new Oe,ha=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pa=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xl(){const s={enabled:!0,workingColorSpace:si,spaces:{},convert:function(r,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===et&&(r.r=on(r.r),r.g=on(r.g),r.b=on(r.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[n].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b))),r},workingToColorSpace:function(r,n){return this.convert(r,this.workingColorSpace,n)},colorSpaceToWorking:function(r,n){return this.convert(r,n,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gn?sr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,n=this.workingColorSpace){return r.fromArray(this.spaces[n].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,n,a){return r.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,n){return bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,n)},toWorkingColorSpace:function(r,n){return bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[si]:{primaries:e,whitePoint:i,transfer:sr,toXYZ:ha,fromXYZ:pa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:et,toXYZ:ha,fromXYZ:pa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}const Ke=Xl();function on(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ti(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vn;class Yl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vn===void 0&&(Vn=or("canvas")),Vn.width=e.width,Vn.height=e.height;const r=Vn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let a=0;a<n.length;a++)n[a]=on(n[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(on(t[i]/255)*255):t[i]=on(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ql=0;class Xs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?n.push(yr(r[a].image)):n.push(yr(r[a]))}else n=yr(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function yr(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Yl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let $l=0;const br=new q;class _t extends ci{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,i=rn,r=rn,n=Nt,a=In,o=kt,c=ln,u=_t.DEFAULT_ANISOTROPY,f=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Ei(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(br).x}get height(){return this.source.getSize(br).y}get depth(){return this.source.getSize(br).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==no)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=no;_t.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const c=e.elements,u=c[0],f=c[4],h=c[8],d=c[1],l=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+p)<.1&&Math.abs(u+l+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(u+1)/2,A=(l+1)/2,v=(g+1)/2,S=(f+d)/4,y=(h+x)/4,T=(m+p)/4;return E>A&&E>v?E<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(E),r=S/i,n=y/i):A>v?A<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(A),i=S/r,n=T/r):v<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(v),i=y/n,r=T/n),this.set(i,r,n,t),this}let b=Math.sqrt((p-m)*(p-m)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-x)/b,this.z=(d-f)/b,this.w=Math.acos((u+l+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kl extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:i.depth},n=new _t(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Kl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ho extends _t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zl extends _t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bt):Bt.fromBufferAttribute(n,a),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Li.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Li.copy(i.boundingBox)),Li.applyMatrix4(e.matrixWorld),this.union(Li)}const r=e.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),Ii.subVectors(this.max,hi),Gn.subVectors(e.a,hi),Hn.subVectors(e.b,hi),kn.subVectors(e.c,hi),un.subVectors(Hn,Gn),dn.subVectors(kn,Hn),En.subVectors(Gn,kn);let t=[0,-un.z,un.y,0,-dn.z,dn.y,0,-En.z,En.y,un.z,0,-un.x,dn.z,0,-dn.x,En.z,0,-En.x,-un.y,un.x,0,-dn.y,dn.x,0,-En.y,En.x,0];return!Er(t,Gn,Hn,kn,Ii)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,Gn,Hn,kn,Ii))?!1:(Ui.crossVectors(un,dn),t=[Ui.x,Ui.y,Ui.z],Er(t,Gn,Hn,kn,Ii))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kt=[new q,new q,new q,new q,new q,new q,new q,new q],Bt=new q,Li=new Ai,Gn=new q,Hn=new q,kn=new q,un=new q,dn=new q,En=new q,hi=new q,Ii=new q,Ui=new q,Tn=new q;function Er(s,e,t,i,r){for(let n=0,a=s.length-3;n<=a;n+=3){Tn.fromArray(s,n);const o=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),c=e.dot(Tn),u=t.dot(Tn),f=i.dot(Tn);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const Jl=new Ai,pi=new q,Tr=new q;class Ys{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jl.setFromPoints(e).getCenter(i);let r=0;for(let n=0,a=e.length;n<a;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(Tr)),this.expandByPoint(pi.copy(e.center).sub(Tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zt=new q,Ar=new q,Fi=new q,hn=new q,wr=new q,Ni=new q,Cr=new q;class jl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ar.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Ar);const n=e.distanceTo(t)*.5,a=-this.direction.dot(Fi),o=hn.dot(this.direction),c=-hn.dot(Fi),u=hn.lengthSq(),f=Math.abs(1-a*a);let h,d,l,m;if(f>0)if(h=a*c-o,d=a*o-c,m=n*f,h>=0)if(d>=-m)if(d<=m){const x=1/f;h*=x,d*=x,l=h*(h+a*d+2*o)+d*(a*h+d+2*c)+u}else d=n,h=Math.max(0,-(a*d+o)),l=-h*h+d*(d+2*c)+u;else d=-n,h=Math.max(0,-(a*d+o)),l=-h*h+d*(d+2*c)+u;else d<=-m?(h=Math.max(0,-(-a*n+o)),d=h>0?-n:Math.min(Math.max(-n,-c),n),l=-h*h+d*(d+2*c)+u):d<=m?(h=0,d=Math.min(Math.max(-n,-c),n),l=d*(d+2*c)+u):(h=Math.max(0,-(a*n+o)),d=h>0?n:Math.min(Math.max(-n,-c),n),l=-h*h+d*(d+2*c)+u);else d=a>0?-n:n,h=Math.max(0,-(a*d+o)),l=-h*h+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ar).addScaledVector(Fi,d),l}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const i=Zt.dot(this.direction),r=Zt.dot(Zt)-i*i,n=e.radius*e.radius;if(r>n)return null;const a=Math.sqrt(n-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(n=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(n=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||n>r||((n>i||isNaN(i))&&(i=n),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,i,r,n){wr.subVectors(t,e),Ni.subVectors(i,e),Cr.crossVectors(wr,Ni);let a=this.direction.dot(Cr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,e);const c=o*this.direction.dot(Ni.crossVectors(hn,Ni));if(c<0)return null;const u=o*this.direction.dot(wr.cross(hn));if(u<0||c+u>a)return null;const f=-o*hn.dot(Cr);return f<0?null:this.at(f/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,n,a,o,c,u,f,h,d,l,m,x,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,a,o,c,u,f,h,d,l,m,x,p)}set(e,t,i,r,n,a,o,c,u,f,h,d,l,m,x,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=a,g[9]=o,g[13]=c,g[2]=u,g[6]=f,g[10]=h,g[14]=d,g[3]=l,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wn.setFromMatrixColumn(e,0).length(),n=1/Wn.setFromMatrixColumn(e,1).length(),a=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(n),h=Math.sin(n);if(e.order==="XYZ"){const d=a*f,l=a*h,m=o*f,x=o*h;t[0]=c*f,t[4]=-c*h,t[8]=u,t[1]=l+m*u,t[5]=d-x*u,t[9]=-o*c,t[2]=x-d*u,t[6]=m+l*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,l=c*h,m=u*f,x=u*h;t[0]=d+x*o,t[4]=m*o-l,t[8]=a*u,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=l*o-m,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,l=c*h,m=u*f,x=u*h;t[0]=d-x*o,t[4]=-a*h,t[8]=m+l*o,t[1]=l+m*o,t[5]=a*f,t[9]=x-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,l=a*h,m=o*f,x=o*h;t[0]=c*f,t[4]=m*u-l,t[8]=d*u+x,t[1]=c*h,t[5]=x*u+d,t[9]=l*u-m,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,l=a*u,m=o*c,x=o*u;t[0]=c*f,t[4]=x-d*h,t[8]=m*h+l,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=l*h+m,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,l=a*u,m=o*c,x=o*u;t[0]=c*f,t[4]=-h,t[8]=u*f,t[1]=d*h+x,t[5]=a*f,t[9]=l*h-m,t[2]=m*h-l,t[6]=o*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ql,e,ec)}lookAt(e,t,i){const r=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),pn.crossVectors(i,Ct),pn.lengthSq()===0&&(Math.abs(i.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),pn.crossVectors(i,Ct)),pn.normalize(),Oi.crossVectors(Ct,pn),r[0]=pn.x,r[4]=Oi.x,r[8]=Ct.x,r[1]=pn.y,r[5]=Oi.y,r[9]=Ct.y,r[2]=pn.z,r[6]=Oi.z,r[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],h=i[5],d=i[9],l=i[13],m=i[2],x=i[6],p=i[10],g=i[14],b=i[3],E=i[7],A=i[11],v=i[15],S=r[0],y=r[4],T=r[8],M=r[12],_=r[1],w=r[5],R=r[9],L=r[13],F=r[2],N=r[6],z=r[10],W=r[14],G=r[3],Z=r[7],ee=r[11],he=r[15];return n[0]=a*S+o*_+c*F+u*G,n[4]=a*y+o*w+c*N+u*Z,n[8]=a*T+o*R+c*z+u*ee,n[12]=a*M+o*L+c*W+u*he,n[1]=f*S+h*_+d*F+l*G,n[5]=f*y+h*w+d*N+l*Z,n[9]=f*T+h*R+d*z+l*ee,n[13]=f*M+h*L+d*W+l*he,n[2]=m*S+x*_+p*F+g*G,n[6]=m*y+x*w+p*N+g*Z,n[10]=m*T+x*R+p*z+g*ee,n[14]=m*M+x*L+p*W+g*he,n[3]=b*S+E*_+A*F+v*G,n[7]=b*y+E*w+A*N+v*Z,n[11]=b*T+E*R+A*z+v*ee,n[15]=b*M+E*L+A*W+v*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],h=e[6],d=e[10],l=e[14],m=e[3],x=e[7],p=e[11],g=e[15];return m*(+n*c*h-r*u*h-n*o*d+i*u*d+r*o*l-i*c*l)+x*(+t*c*l-t*u*d+n*a*d-r*a*l+r*u*f-n*c*f)+p*(+t*u*h-t*o*l-n*a*h+i*a*l+n*o*f-i*u*f)+g*(-r*o*f-t*c*h+t*o*d+r*a*h-i*a*d+i*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=e[9],d=e[10],l=e[11],m=e[12],x=e[13],p=e[14],g=e[15],b=h*p*u-x*d*u+x*c*l-o*p*l-h*c*g+o*d*g,E=m*d*u-f*p*u-m*c*l+a*p*l+f*c*g-a*d*g,A=f*x*u-m*h*u+m*o*l-a*x*l-f*o*g+a*h*g,v=m*h*c-f*x*c-m*o*d+a*x*d+f*o*p-a*h*p,S=t*b+i*E+r*A+n*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=b*y,e[1]=(x*d*n-h*p*n-x*r*l+i*p*l+h*r*g-i*d*g)*y,e[2]=(o*p*n-x*c*n+x*r*u-i*p*u-o*r*g+i*c*g)*y,e[3]=(h*c*n-o*d*n-h*r*u+i*d*u+o*r*l-i*c*l)*y,e[4]=E*y,e[5]=(f*p*n-m*d*n+m*r*l-t*p*l-f*r*g+t*d*g)*y,e[6]=(m*c*n-a*p*n-m*r*u+t*p*u+a*r*g-t*c*g)*y,e[7]=(a*d*n-f*c*n+f*r*u-t*d*u-a*r*l+t*c*l)*y,e[8]=A*y,e[9]=(m*h*n-f*x*n-m*i*l+t*x*l+f*i*g-t*h*g)*y,e[10]=(a*x*n-m*o*n+m*i*u-t*x*u-a*i*g+t*o*g)*y,e[11]=(f*o*n-a*h*n-f*i*u+t*h*u+a*i*l-t*o*l)*y,e[12]=v*y,e[13]=(f*x*r-m*h*r+m*i*d-t*x*d-f*i*p+t*h*p)*y,e[14]=(m*o*r-a*x*r-m*i*c+t*x*c+a*i*p-t*o*p)*y,e[15]=(a*h*r-f*o*r+f*i*c-t*h*c-a*i*d+t*o*d)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,a=e.x,o=e.y,c=e.z,u=n*a,f=n*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,a){return this.set(1,i,n,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,a=t._y,o=t._z,c=t._w,u=n+n,f=a+a,h=o+o,d=n*u,l=n*f,m=n*h,x=a*f,p=a*h,g=o*h,b=c*u,E=c*f,A=c*h,v=i.x,S=i.y,y=i.z;return r[0]=(1-(x+g))*v,r[1]=(l+A)*v,r[2]=(m-E)*v,r[3]=0,r[4]=(l-A)*S,r[5]=(1-(d+g))*S,r[6]=(p+b)*S,r[7]=0,r[8]=(m+E)*y,r[9]=(p-b)*y,r[10]=(1-(d+x))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Wn.set(r[0],r[1],r[2]).length();const a=Wn.set(r[4],r[5],r[6]).length(),o=Wn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const u=1/n,f=1/a,h=1/o;return zt.elements[0]*=u,zt.elements[1]*=u,zt.elements[2]*=u,zt.elements[4]*=f,zt.elements[5]*=f,zt.elements[6]*=f,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),i.x=n,i.y=a,i.z=o,this}makePerspective(e,t,i,r,n,a,o=Yt,c=!1){const u=this.elements,f=2*n/(t-e),h=2*n/(i-r),d=(t+e)/(t-e),l=(i+r)/(i-r);let m,x;if(c)m=n/(a-n),x=a*n/(a-n);else if(o===Yt)m=-(a+n)/(a-n),x=-2*a*n/(a-n);else if(o===ar)m=-a/(a-n),x=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=l,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,n,a,o=Yt,c=!1){const u=this.elements,f=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),l=-(i+r)/(i-r);let m,x;if(c)m=1/(a-n),x=a/(a-n);else if(o===Yt)m=-2/(a-n),x=-(a+n)/(a-n);else if(o===ar)m=-1/(a-n),x=-n/(a-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=l,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wn=new q,zt=new ht,Ql=new q(0,0,0),ec=new q(1,1,1),pn=new q,Oi=new q,Ct=new q,ma=new ht,xa=new Ti;class cn{constructor(e=0,t=0,i=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],h=r[2],d=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,l),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,l),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,l),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,l),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,n)):(this._x=0,this._y=Math.atan2(o,l));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-f,l),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ma,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xa.setFromEuler(this),this.setFromQuaternion(xa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tc=0;const ga=new q,Xn=new Ti,Jt=new ht,Bi=new q,mi=new q,nc=new q,ic=new Ti,va=new q(1,0,0),_a=new q(0,1,0),Sa=new q(0,0,1),Ma={type:"added"},rc={type:"removed"},Yn={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Dt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new q,t=new cn,i=new Ti,r=new q(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Oe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(va,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(va,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bi.copy(e):Bi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(mi,Bi,this.up):Jt.lookAt(Bi,mi,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),Xn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ma),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rc),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ma),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let n=0,a=r.length;n<a;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,ic,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let n=0,a=r.length;n<a;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function n(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];n(e.shapes,h)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(n(e.materials,this.material[c]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(n(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),l=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),l.length>0&&(i.animations=l),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new q(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new q,jt=new q,Pr=new q,Qt=new q,qn=new q,$n=new q,ya=new q,Dr=new q,Lr=new q,Ir=new q,Ur=new ut,Fr=new ut,Nr=new ut;class Ht{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vt.subVectors(e,t),r.cross(Vt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Vt.subVectors(r,t),jt.subVectors(i,t),Pr.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(jt),c=Vt.dot(Pr),u=jt.dot(jt),f=jt.dot(Pr),h=a*u-o*o;if(h===0)return n.set(0,0,0),null;const d=1/h,l=(u*c-o*f)*d,m=(a*f-o*c)*d;return n.set(1-l-m,m,l)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qt)===null?!1:Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getInterpolation(e,t,i,r,n,a,o,c){return this.getBarycoord(e,t,i,r,Qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,Qt.x),c.addScaledVector(a,Qt.y),c.addScaledVector(o,Qt.z),c)}static getInterpolatedAttribute(e,t,i,r,n,a){return Ur.setScalar(0),Fr.setScalar(0),Nr.setScalar(0),Ur.fromBufferAttribute(e,t),Fr.fromBufferAttribute(e,i),Nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ur,n.x),a.addScaledVector(Fr,n.y),a.addScaledVector(Nr,n.z),a}static isFrontFacing(e,t,i,r){return Vt.subVectors(i,t),jt.subVectors(e,t),Vt.cross(jt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Vt.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return Ht.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let a,o;qn.subVectors(r,i),$n.subVectors(n,i),Dr.subVectors(e,i);const c=qn.dot(Dr),u=$n.dot(Dr);if(c<=0&&u<=0)return t.copy(i);Lr.subVectors(e,r);const f=qn.dot(Lr),h=$n.dot(Lr);if(f>=0&&h<=f)return t.copy(r);const d=c*h-f*u;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(qn,a);Ir.subVectors(e,n);const l=qn.dot(Ir),m=$n.dot(Ir);if(m>=0&&l<=m)return t.copy(n);const x=l*u-c*m;if(x<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(i).addScaledVector($n,o);const p=f*m-l*h;if(p<=0&&h-f>=0&&l-m>=0)return ya.subVectors(n,r),o=(h-f)/(h-f+(l-m)),t.copy(r).addScaledVector(ya,o);const g=1/(p+x+d);return a=x*g,o=d*g,t.copy(i).addScaledVector(qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},zi={h:0,s:0,l:0};function Or(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Wl(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=Or(a,n,e+1/3),this.g=Or(a,n,e),this.b=Or(a,n,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function i(n){n!==void 0&&parseFloat(n)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=mo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ke.workingToColorSpace(vt.copy(this),e),Math.round(Ye(vt.r*255,0,255))*65536+Math.round(Ye(vt.g*255,0,255))*256+Math.round(Ye(vt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(vt.copy(this),t);const i=vt.r,r=vt.g,n=vt.b,a=Math.max(i,r,n),o=Math.min(i,r,n);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-n)/h+(r<n?6:0);break;case r:c=(n-i)/h+2;break;case n:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Ft){Ke.workingToColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,r=vt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(zi);const i=_r(mn.h,zi.h,t),r=_r(mn.s,zi.s,t),n=_r(mn.l,zi.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new tt;tt.NAMES=mo;let sc=0;class fr extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ei,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$r,this.blendDst=Kr,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$r&&(i.blendSrc=this.blendSrc),this.blendDst!==Kr&&(i.blendDst=this.blendDst),this.blendEquation!==Dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ni&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const a=[];for(const o in n){const c=n[o];delete c.metadata,a.push(c)}return a}if(t){const n=r(e.textures),a=r(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xo extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new q,Vi=new Je;let ac=0;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ac++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=la,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXY(t,Vi.x,Vi.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),r=Et(r,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}}class go extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vo extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fn extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let oc=0;const Ut=new ht,Br=new Dt,Kn=new q,Rt=new Ai,xi=new Ai,xt=new q;class Mn extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uo(e)?vo:go)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Oe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return Br.lookAt(e),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Rt.setFromBufferAttribute(n),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Rt.min,xi.min),Rt.expandByPoint(xt),xt.addVectors(Rt.max,xi.max),Rt.expandByPoint(xt)):(Rt.expandByPoint(xi.min),Rt.expandByPoint(xi.max))}Rt.getCenter(i);let r=0;for(let n=0,a=e.count;n<a;n++)xt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)xt.fromBufferAttribute(o,u),c&&(Kn.fromBufferAttribute(e,u),xt.add(Kn)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<i.count;T++)o[T]=new q,c[T]=new q;const u=new q,f=new q,h=new q,d=new Je,l=new Je,m=new Je,x=new q,p=new q;function g(T,M,_){u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),d.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),m.fromBufferAttribute(n,_),f.sub(u),h.sub(u),l.sub(d),m.sub(d);const w=1/(l.x*m.y-m.x*l.y);!isFinite(w)||(x.copy(f).multiplyScalar(m.y).addScaledVector(h,-l.y).multiplyScalar(w),p.copy(h).multiplyScalar(l.x).addScaledVector(f,-m.x).multiplyScalar(w),o[T].add(x),o[M].add(x),o[_].add(x),c[T].add(p),c[M].add(p),c[_].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,M=b.length;T<M;++T){const _=b[T],w=_.start,R=_.count;for(let L=w,F=w+R;L<F;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new q,A=new q,v=new q,S=new q;function y(T){v.fromBufferAttribute(r,T),S.copy(v);const M=o[T];E.copy(M),E.sub(v.multiplyScalar(v.dot(M))).normalize(),A.crossVectors(S,M);const w=A.dot(c[T])<0?-1:1;a.setXYZW(T,E.x,E.y,E.z,w)}for(let T=0,M=b.length;T<M;++T){const _=b[T],w=_.start,R=_.count;for(let L=w,F=w+R;L<F;L+=3)y(e.getX(L+0)),y(e.getX(L+1)),y(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,l=i.count;d<l;d++)i.setXYZ(d,0,0,0);const r=new q,n=new q,a=new q,o=new q,c=new q,u=new q,f=new q,h=new q;if(e)for(let d=0,l=e.count;d<l;d+=3){const m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,m),n.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),f.subVectors(a,n),h.subVectors(r,n),f.cross(h),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),o.add(f),c.add(f),u.add(f),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,l=t.count;d<l;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,n),h.subVectors(r,n),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,h=o.normalized,d=new u.constructor(c.length*f);let l=0,m=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?l=c[x]*o.data.stride+o.offset:l=c[x]*f;for(let g=0;g<f;g++)d[m++]=u[l++]}return new qt(d,f,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);t.setAttribute(o,u)}const n=this.morphAttributes;for(const o in n){const c=[],u=n[o];for(let f=0,h=u.length;f<h;f++){const d=u[f],l=e(d,i);c.push(l)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,d=u.length;h<d;h++){const l=u[h];f.push(l.toJSON(e.data))}f.length>0&&(r[c]=f,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const n=e.morphAttributes;for(const u in n){const f=[],h=n[u];for(let d=0,l=h.length;d<l;d++)f.push(h[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new ht,An=new jl,Gi=new Ys,Ea=new q,Hi=new q,ki=new q,Wi=new q,zr=new q,Xi=new q,Ta=new q,Yi=new q;class fn extends Dt{constructor(e=new Mn,t=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=r.length;n<a;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(n&&o){Xi.set(0,0,0);for(let c=0,u=n.length;c<u;c++){const f=o[c],h=n[c];f!==0&&(zr.fromBufferAttribute(h,e),a?Xi.addScaledVector(zr,f):Xi.addScaledVector(zr.sub(t),f))}t.add(Xi)}return t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gi.copy(i.boundingSphere),Gi.applyMatrix4(n),An.copy(e.ray).recast(e.near),!(Gi.containsPoint(An.origin)===!1&&(An.intersectSphere(Gi,Ea)===null||An.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(ba.copy(n).invert(),An.copy(e.ray).applyMatrix4(ba),!(i.boundingBox!==null&&An.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,i){let r;const n=this.geometry,a=this.material,o=n.index,c=n.attributes.position,u=n.attributes.uv,f=n.attributes.uv1,h=n.attributes.normal,d=n.groups,l=n.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const p=d[m],g=a[p.materialIndex],b=Math.max(p.start,l.start),E=Math.min(o.count,Math.min(p.start+p.count,l.start+l.count));for(let A=b,v=E;A<v;A+=3){const S=o.getX(A),y=o.getX(A+1),T=o.getX(A+2);r=qi(this,g,e,i,u,f,h,S,y,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,l.start),x=Math.min(o.count,l.start+l.count);for(let p=m,g=x;p<g;p+=3){const b=o.getX(p),E=o.getX(p+1),A=o.getX(p+2);r=qi(this,a,e,i,u,f,h,b,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const p=d[m],g=a[p.materialIndex],b=Math.max(p.start,l.start),E=Math.min(c.count,Math.min(p.start+p.count,l.start+l.count));for(let A=b,v=E;A<v;A+=3){const S=A,y=A+1,T=A+2;r=qi(this,g,e,i,u,f,h,S,y,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,l.start),x=Math.min(c.count,l.start+l.count);for(let p=m,g=x;p<g;p+=3){const b=p,E=p+1,A=p+2;r=qi(this,a,e,i,u,f,h,b,E,A),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function lc(s,e,t,i,r,n,a,o){let c;if(e.side===Tt?c=i.intersectTriangle(a,n,r,!0,o):c=i.intersectTriangle(r,n,a,e.side===Sn,o),c===null)return null;Yi.copy(o),Yi.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(Yi);return u<t.near||u>t.far?null:{distance:u,point:Yi.clone(),object:s}}function qi(s,e,t,i,r,n,a,o,c,u){s.getVertexPosition(o,Hi),s.getVertexPosition(c,ki),s.getVertexPosition(u,Wi);const f=lc(s,e,t,i,Hi,ki,Wi,Ta);if(f){const h=new q;Ht.getBarycoord(Ta,Hi,ki,Wi,h),r&&(f.uv=Ht.getInterpolatedAttribute(r,o,c,u,h,new Je)),n&&(f.uv1=Ht.getInterpolatedAttribute(n,o,c,u,h,new Je)),a&&(f.normal=Ht.getInterpolatedAttribute(a,o,c,u,h,new q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new q,materialIndex:0};Ht.getNormal(Hi,ki,Wi,d.normal),f.face=d,f.barycoord=h}return f}class wi extends Mn{constructor(e=1,t=1,i=1,r=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:a};const o=this;r=Math.floor(r),n=Math.floor(n),a=Math.floor(a);const c=[],u=[],f=[],h=[];let d=0,l=0;m("z","y","x",-1,-1,i,t,e,a,n,0),m("z","y","x",1,-1,i,t,-e,a,n,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,n,4),m("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new Fn(u,3)),this.setAttribute("normal",new Fn(f,3)),this.setAttribute("uv",new Fn(h,2));function m(x,p,g,b,E,A,v,S,y,T,M){const _=A/y,w=v/T,R=A/2,L=v/2,F=S/2,N=y+1,z=T+1;let W=0,G=0;const Z=new q;for(let ee=0;ee<z;ee++){const he=ee*w-L;for(let be=0;be<N;be++){const Ue=be*_-R;Z[x]=Ue*b,Z[p]=he*E,Z[g]=F,u.push(Z.x,Z.y,Z.z),Z[x]=0,Z[p]=0,Z[g]=S>0?1:-1,f.push(Z.x,Z.y,Z.z),h.push(be/y),h.push(1-ee/T),W+=1}}for(let ee=0;ee<T;ee++)for(let he=0;he<y;he++){const be=d+he+N*ee,Ue=d+he+N*(ee+1),We=d+(he+1)+N*(ee+1),He=d+(he+1)+N*ee;c.push(be,Ue,He),c.push(Ue,We,He),G+=6}o.addGroup(l,G,M),l+=G,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(s){const e={};for(let t=0;t<s.length;t++){const i=ai(s[t]);for(const r in i)e[r]=i[r]}return e}function cc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function _o(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const fc={clone:ai,merge:Mt};var uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=cc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class So extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Yt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new q,Aa=new Je,wa=new Je;class Gt extends So{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xn.x,xn.y).multiplyScalar(-e/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xn.x,xn.y).multiplyScalar(-e/xn.z)}getViewSize(e,t){return this.getViewBounds(e,Aa,wa),t.subVectors(wa,Aa)}setViewOffset(e,t,i,r,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;n+=a.offsetX*r/c,t-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,Jn=1;class hc extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(Zn,Jn,e,t);r.layers=this.layers,this.add(r);const n=new Gt(Zn,Jn,e,t);n.layers=this.layers,this.add(n);const a=new Gt(Zn,Jn,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Zn,Jn,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Zn,Jn,e,t);c.layers=this.layers,this.add(c);const u=new Gt(Zn,Jn,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,n,a,o,c]=t;for(const u of t)this.remove(u);if(e===Yt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,o,c,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,n),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(h,d,l),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Mo extends _t{constructor(e=[],t=ii,i,r,n,a,o,c,u,f){super(e,t,i,r,n,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wi(5,5,5),n=new $t({name:"CubemapFromEquirect",uniforms:ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:an});n.uniforms.tEquirect.value=t;const a=new fn(r,n),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Nt),new hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(n)}}class $i extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mc={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),g=this._getHandJoint(u,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),l=.02,m=.005;u.inputState.pinching&&d>l+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=l-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=n!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class xc extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gc extends _t{constructor(e=null,t=1,i=1,r,n,a,o,c,u=Pt,f=Pt,h,d){super(null,a,o,c,u,f,r,n,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gr=new q,vc=new q,_c=new Oe;class Pn{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gr.subVectors(i,t).cross(vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_c.getNormalMatrix(e),r=this.coplanarPoint(Gr).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new Ys,Sc=new Je(.5,.5),Ki=new q;class yo{constructor(e=new Pn,t=new Pn,i=new Pn,r=new Pn,n=new Pn,a=new Pn){this.planes=[e,t,i,r,n,a]}set(e,t,i,r,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yt,i=!1){const r=this.planes,n=e.elements,a=n[0],o=n[1],c=n[2],u=n[3],f=n[4],h=n[5],d=n[6],l=n[7],m=n[8],x=n[9],p=n[10],g=n[11],b=n[12],E=n[13],A=n[14],v=n[15];if(r[0].setComponents(u-a,l-f,g-m,v-b).normalize(),r[1].setComponents(u+a,l+f,g+m,v+b).normalize(),r[2].setComponents(u+o,l+h,g+x,v+E).normalize(),r[3].setComponents(u-o,l-h,g-x,v-E).normalize(),i)r[4].setComponents(c,d,p,A).normalize(),r[5].setComponents(u-c,l-d,g-p,v-A).normalize();else if(r[4].setComponents(u-c,l-d,g-p,v-A).normalize(),t===Yt)r[5].setComponents(u+c,l+d,g+p,v+A).normalize();else if(t===ar)r[5].setComponents(c,d,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){wn.center.set(0,0,0);const t=Sc.distanceTo(e.center);return wn.radius=.7071067811865476+t,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ki.x=r.normal.x>0?e.max.x:e.min.x,Ki.y=r.normal.y>0?e.max.y:e.min.y,Ki.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bo extends _t{constructor(e,t,i=Nn,r,n,a,o=Pt,c=Pt,u,f=Mi,h=1){if(f!==Mi&&f!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,n,a,o,c,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eo extends _t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oi extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,h=e/o,d=t/c,l=[],m=[],x=[],p=[];for(let g=0;g<f;g++){const b=g*d-a;for(let E=0;E<u;E++){const A=E*h-n;m.push(A,-b,0),x.push(0,0,1),p.push(E/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let b=0;b<o;b++){const E=b+u*g,A=b+u*(g+1),v=b+1+u*(g+1),S=b+1+u*g;l.push(E,A,S),l.push(A,v,S)}this.setIndex(l),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mc extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yc extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class To extends So{constructor(e=-1,t=1,i=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=u*this.view.offsetX,a=n+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bc extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ec{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ca(s,e,t,i){const r=Tc(i);switch(t){case oo:return s*e;case co:return s*e/r.components*r.byteLength;case Gs:return s*e/r.components*r.byteLength;case Hs:return s*e*2/r.components*r.byteLength;case ks:return s*e*2/r.components*r.byteLength;case lo:return s*e*3/r.components*r.byteLength;case kt:return s*e*4/r.components*r.byteLength;case Ws:return s*e*4/r.components*r.byteLength;case er:case tr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ls:case fs:return Math.max(s,16)*Math.max(e,8)/4;case os:case cs:return Math.max(s,8)*Math.max(e,8)/2;case us:case ds:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ps:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ms:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case xs:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gs:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vs:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _s:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ms:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ys:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bs:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Es:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ts:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case As:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ws:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cs:case Rs:case Ps:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ds:case Ls:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Is:case Us:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tc(s){switch(s){case ln:case io:return{byteLength:1,components:1};case _i:case ro:case li:return{byteLength:2,components:1};case zs:case Vs:return{byteLength:2,components:4};case Nn:case Bs:case sn:return{byteLength:4,components:1};case so:case ao:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Os}}));typeof window!="undefined"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Os);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ao(){let s=null,e=!1,t=null,i=null;function r(n,a){t(n,a),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function Ac(s){const e=new WeakMap;function t(o,c){const u=o.array,f=o.usage,h=u.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,u,f),o.onUploadCallback();let l;if(u instanceof Float32Array)l=s.FLOAT;else if(typeof Float16Array!="undefined"&&u instanceof Float16Array)l=s.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?l=s.HALF_FLOAT:l=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)l=s.SHORT;else if(u instanceof Uint32Array)l=s.UNSIGNED_INT;else if(u instanceof Int32Array)l=s.INT;else if(u instanceof Int8Array)l=s.BYTE;else if(u instanceof Uint8Array)l=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)l=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:l,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,u){const f=c.array,h=c.updateRanges;if(s.bindBuffer(u,o),h.length===0)s.bufferSubData(u,0,f);else{h.sort((l,m)=>l.start-m.start);let d=0;for(let l=1;l<h.length;l++){const m=h[d],x=h[l];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let l=0,m=h.length;l<m;l++){const x=h[l];s.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:n,update:a}}var wc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cc=`#ifdef USE_ALPHAHASH
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
#endif`,Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ic=`#ifdef USE_AOMAP
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
#endif`,Uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc=`#ifdef USE_BATCHING
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
#endif`,Nc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vc=`#ifdef USE_IRIDESCENCE
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
#endif`,Gc=`#ifdef USE_BUMPMAP
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
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zc=`#define PI 3.141592653589793
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
} // validated`,Jc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jc=`vec3 transformedNormal = objectNormal;
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
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,af=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
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
#endif`,Af=`uniform sampler2D dfgLUT;
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
}`,wf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Of=`#if defined( USE_POINTS_UV )
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
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,su=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,du=`float getShadowMask() {
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
}`,hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pu=`#ifdef USE_SKINNING
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
#endif`,mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xu=`#ifdef USE_SKINNING
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
#endif`,gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_u=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Su=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mu=`#ifdef USE_TRANSMISSION
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
#endif`,yu=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cu=`uniform sampler2D t2D;
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
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`#include <common>
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
}`,Uu=`#if DEPTH_PACKING == 3200
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
}`,Fu=`#define DISTANCE
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
}`,Nu=`#define DISTANCE
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`uniform float scale;
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
}`,Vu=`uniform vec3 diffuse;
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
}`,Gu=`#include <common>
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
}`,Hu=`uniform vec3 diffuse;
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
}`,ku=`#define LAMBERT
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
}`,Wu=`#define LAMBERT
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
}`,Xu=`#define MATCAP
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
}`,Yu=`#define MATCAP
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
}`,qu=`#define NORMAL
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
}`,$u=`#define NORMAL
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
}`,Ku=`#define PHONG
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
}`,Zu=`#define PHONG
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
}`,Ju=`#define STANDARD
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
}`,ju=`#define STANDARD
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
}`,Qu=`#define TOON
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
}`,ed=`#define TOON
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
}`,td=`uniform float size;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,rd=`uniform vec3 color;
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
}`,sd=`uniform float rotation;
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
}`,ad=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:wc,alphahash_pars_fragment:Cc,alphamap_fragment:Rc,alphamap_pars_fragment:Pc,alphatest_fragment:Dc,alphatest_pars_fragment:Lc,aomap_fragment:Ic,aomap_pars_fragment:Uc,batching_pars_vertex:Fc,batching_vertex:Nc,begin_vertex:Oc,beginnormal_vertex:Bc,bsdfs:zc,iridescence_fragment:Vc,bumpmap_pars_fragment:Gc,clipping_planes_fragment:Hc,clipping_planes_pars_fragment:kc,clipping_planes_pars_vertex:Wc,clipping_planes_vertex:Xc,color_fragment:Yc,color_pars_fragment:qc,color_pars_vertex:$c,color_vertex:Kc,common:Zc,cube_uv_reflection_fragment:Jc,defaultnormal_vertex:jc,displacementmap_pars_vertex:Qc,displacementmap_vertex:ef,emissivemap_fragment:tf,emissivemap_pars_fragment:nf,colorspace_fragment:rf,colorspace_pars_fragment:sf,envmap_fragment:af,envmap_common_pars_fragment:of,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:Sf,envmap_vertex:ff,fog_vertex:uf,fog_pars_vertex:df,fog_fragment:hf,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:xf,lights_lambert_fragment:gf,lights_lambert_pars_fragment:vf,lights_pars_begin:_f,lights_toon_fragment:Mf,lights_toon_pars_fragment:yf,lights_phong_fragment:bf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:wf,lights_fragment_maps:Cf,lights_fragment_end:Rf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:If,map_fragment:Uf,map_pars_fragment:Ff,map_particle_fragment:Nf,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:zf,morphinstance_vertex:Vf,morphcolor_vertex:Gf,morphnormal_vertex:Hf,morphtarget_pars_vertex:kf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:Yf,normal_pars_fragment:qf,normal_pars_vertex:$f,normal_vertex:Kf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:eu,opaque_fragment:tu,packing:nu,premultiplied_alpha_fragment:iu,project_vertex:ru,dithering_fragment:su,dithering_pars_fragment:au,roughnessmap_fragment:ou,roughnessmap_pars_fragment:lu,shadowmap_pars_fragment:cu,shadowmap_pars_vertex:fu,shadowmap_vertex:uu,shadowmask_pars_fragment:du,skinbase_vertex:hu,skinning_pars_vertex:pu,skinning_vertex:mu,skinnormal_vertex:xu,specularmap_fragment:gu,specularmap_pars_fragment:vu,tonemapping_fragment:_u,tonemapping_pars_fragment:Su,transmission_fragment:Mu,transmission_pars_fragment:yu,uv_pars_fragment:bu,uv_pars_vertex:Eu,uv_vertex:Tu,worldpos_vertex:Au,background_vert:wu,background_frag:Cu,backgroundCube_vert:Ru,backgroundCube_frag:Pu,cube_vert:Du,cube_frag:Lu,depth_vert:Iu,depth_frag:Uu,distanceRGBA_vert:Fu,distanceRGBA_frag:Nu,equirect_vert:Ou,equirect_frag:Bu,linedashed_vert:zu,linedashed_frag:Vu,meshbasic_vert:Gu,meshbasic_frag:Hu,meshlambert_vert:ku,meshlambert_frag:Wu,meshmatcap_vert:Xu,meshmatcap_frag:Yu,meshnormal_vert:qu,meshnormal_frag:$u,meshphong_vert:Ku,meshphong_frag:Zu,meshphysical_vert:Ju,meshphysical_frag:ju,meshtoon_vert:Qu,meshtoon_frag:ed,points_vert:td,points_frag:nd,shadow_vert:id,shadow_frag:rd,sprite_vert:sd,sprite_frag:ad},ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Xt={basic:{uniforms:Mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Mt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Mt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Mt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Mt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Mt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Mt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Mt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Mt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Mt([ce.common,ce.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Mt([ce.lights,ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xt.physical={uniforms:Mt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Zi={r:0,b:0,g:0},Cn=new cn,od=new ht;function ld(s,e,t,i,r,n,a){const o=new tt(0);let c=n===!0?0:1,u,f,h=null,d=0,l=null;function m(E){let A=E.isScene===!0?E.background:null;return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?t:e).get(A)),A}function x(E){let A=!1;const v=m(E);v===null?g(o,c):v&&v.isColor&&(g(v,1),A=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(E,A){const v=m(A);v&&(v.isCubeTexture||v.mapping===cr)?(f===void 0&&(f=new fn(new wi(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:ai(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Cn.copy(A.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(od.makeRotationFromEuler(Cn)),f.material.toneMapped=Ke.getTransfer(v.colorSpace)!==et,(h!==v||d!==v.version||l!==s.toneMapping)&&(f.material.needsUpdate=!0,h=v,d=v.version,l=s.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new fn(new oi(2,2),new $t({name:"BackgroundMaterial",uniforms:ai(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||l!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,l=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function g(E,A){E.getRGB(Zi,_o(s)),i.buffers.color.setClear(Zi.r,Zi.g,Zi.b,A,a)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),c=A,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,g(o,c)},render:x,addToRenderList:p,dispose:b}}function cd(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=d(null);let n=r,a=!1;function o(_,w,R,L,F){let N=!1;const z=h(L,R,w);n!==z&&(n=z,u(n.object)),N=l(_,L,R,F),N&&m(_,L,R,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,A(_,w,R,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function u(_){return s.bindVertexArray(_)}function f(_){return s.deleteVertexArray(_)}function h(_,w,R){const L=R.wireframe===!0;let F=i[_.id];F===void 0&&(F={},i[_.id]=F);let N=F[w.id];N===void 0&&(N={},F[w.id]=N);let z=N[L];return z===void 0&&(z=d(c()),N[L]=z),z}function d(_){const w=[],R=[],L=[];for(let F=0;F<t;F++)w[F]=0,R[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:R,attributeDivisors:L,object:_,attributes:{},index:null}}function l(_,w,R,L){const F=n.attributes,N=w.attributes;let z=0;const W=R.getAttributes();for(const G in W)if(W[G].location>=0){const ee=F[G];let he=N[G];if(he===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(he=_.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;z++}return n.attributesNum!==z||n.index!==L}function m(_,w,R,L){const F={},N=w.attributes;let z=0;const W=R.getAttributes();for(const G in W)if(W[G].location>=0){let ee=N[G];ee===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));const he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),F[G]=he,z++}n.attributes=F,n.attributesNum=z,n.index=L}function x(){const _=n.newAttributes;for(let w=0,R=_.length;w<R;w++)_[w]=0}function p(_){g(_,0)}function g(_,w){const R=n.newAttributes,L=n.enabledAttributes,F=n.attributeDivisors;R[_]=1,L[_]===0&&(s.enableVertexAttribArray(_),L[_]=1),F[_]!==w&&(s.vertexAttribDivisor(_,w),F[_]=w)}function b(){const _=n.newAttributes,w=n.enabledAttributes;for(let R=0,L=w.length;R<L;R++)w[R]!==_[R]&&(s.disableVertexAttribArray(R),w[R]=0)}function E(_,w,R,L,F,N,z){z===!0?s.vertexAttribIPointer(_,w,R,F,N):s.vertexAttribPointer(_,w,R,L,F,N)}function A(_,w,R,L){x();const F=L.attributes,N=R.getAttributes(),z=w.defaultAttributeValues;for(const W in N){const G=N[W];if(G.location>=0){let Z=F[W];if(Z===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){const ee=Z.normalized,he=Z.itemSize,be=e.get(Z);if(be===void 0)continue;const Ue=be.buffer,We=be.type,He=be.bytesPerElement,k=We===s.INT||We===s.UNSIGNED_INT||Z.gpuType===Bs;if(Z.isInterleavedBufferAttribute){const J=Z.data,se=J.stride,Ce=Z.offset;if(J.isInstancedInterleavedBuffer){for(let xe=0;xe<G.locationSize;xe++)g(G.location+xe,J.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<G.locationSize;xe++)p(G.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let xe=0;xe<G.locationSize;xe++)E(G.location+xe,he/G.locationSize,We,ee,se*He,(Ce+he/G.locationSize*xe)*He,k)}else{if(Z.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)g(G.location+J,Z.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let J=0;J<G.locationSize;J++)p(G.location+J);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let J=0;J<G.locationSize;J++)E(G.location+J,he/G.locationSize,We,ee,he*He,he/G.locationSize*J*He,k)}}else if(z!==void 0){const ee=z[W];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(G.location,ee);break;case 3:s.vertexAttrib3fv(G.location,ee);break;case 4:s.vertexAttrib4fv(G.location,ee);break;default:s.vertexAttrib1fv(G.location,ee)}}}}b()}function v(){T();for(const _ in i){const w=i[_];for(const R in w){const L=w[R];for(const F in L)f(L[F].object),delete L[F];delete w[R]}delete i[_]}}function S(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const R in w){const L=w[R];for(const F in L)f(L[F].object),delete L[F];delete w[R]}delete i[_.id]}function y(_){for(const w in i){const R=i[w];if(R[_.id]===void 0)continue;const L=R[_.id];for(const F in L)f(L[F].object),delete L[F];delete R[_.id]}}function T(){M(),a=!0,n!==r&&(n=r,u(n.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function fd(s,e,t){let i;function r(u){i=u}function n(u,f){s.drawArrays(i,u,f),t.update(f,i,1)}function a(u,f,h){h!==0&&(s.drawArraysInstanced(i,u,f,h),t.update(f,i,h))}function o(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let l=0;for(let m=0;m<h;m++)l+=f[m];t.update(l,i,1)}function c(u,f,h,d){if(h===0)return;const l=e.get("WEBGL_multi_draw");if(l===null)for(let m=0;m<u.length;m++)a(u[m],f[m],d[m]);else{l.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=f[x]*d[x];t.update(m,i,1)}}this.setMode=r,this.render=n,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ud(s,e,t,i){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==kt&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const T=y===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==ln&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==sn&&!T)}function c(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(Ne("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),l=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:l,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:v,maxSamples:S}}function dd(s){const e=this;let t=null,i=0,r=!1,n=!1;const a=new Pn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const l=h.length!==0||d||i!==0||r;return r=d,i=h.length,l},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,l){const m=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!r||m===null||m.length===0||n&&!p)n?f(null):u();else{const b=n?0:i,E=b*4;let A=g.clippingState||null;c.value=A,A=f(m,d,E,l);for(let v=0;v!==E;++v)A[v]=t[v];g.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,l,m){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const g=l+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,A=l;E!==x;++E,A+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function hd(s){let e=new WeakMap;function t(a,o){return o===is?a.mapping=ii:o===rs&&(a.mapping=ri),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===is||o===rs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new pc(c.height);return u.fromEquirectangularTexture(s,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}const vn=4,Ra=[.125,.215,.35,.446,.526,.582],Ln=20,pd=256,gi=new To,Pa=new tt;let Hr=null,kr=0,Wr=0,Xr=!1;const md=new q;class Da{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,n={}){const{size:a=256,position:o=md}=n;Hr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr,kr,Wr),this._renderer.xr.enabled=Xr,e.scissorTest=!1,jn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:li,format:kt,colorSpace:si,depthBuffer:!1},r=La(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=La(e,t,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xd(n)),this._blurMaterial=vd(n,e,t),this._ggxMaterial=gd(n,e,t)}return r}_compileMaterial(e){const t=new fn(new Mn,e);this._renderer.compile(t,gi)}_sceneToCubeUV(e,t,i,r,n){const c=new Gt(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,l=h.toneMapping;h.getClearColor(Pa),h.toneMapping=_n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new wi,new xo({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let g=!1;const b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(Pa),g=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(c.up.set(0,u[E],0),c.position.set(n.x,n.y,n.z),c.lookAt(n.x+f[E],n.y,n.z)):A===1?(c.up.set(0,0,u[E]),c.position.set(n.x,n.y,n.z),c.lookAt(n.x,n.y+f[E],n.z)):(c.up.set(0,u[E],0),c.position.set(n.x,n.y,n.z),c.lookAt(n.x,n.y,n.z+f[E]));const v=this._cubeSize;jn(r,A*v,E>2?v:0,v,v),h.setRenderTarget(r),g&&h.render(x,c),h.render(e,c)}h.toneMapping=l,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ii||e.mapping===ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const n=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=n;const o=n.uniforms;o.envMap.value=e;const c=this._cubeSize;jn(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,gi)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let n=1;n<r;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,n=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-f*f),d=.05+u*.95,l=h*d,{_lodMax:m}=this,x=this._sizeLods[i],p=3*x*(i>m-vn?i-m+vn:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=l,c.mipInt.value=m-t,jn(n,p,g,3*x,2*x),r.setRenderTarget(n),r.render(o,gi),c.envMap.value=n.texture,c.roughness.value=0,c.mipInt.value=m-i,jn(e,p,g,3*x,2*x),r.setRenderTarget(e),r.render(o,gi)}_blur(e,t,i,r,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",n),this._halfBlur(a,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=u;const d=u.uniforms,l=this._sizeLods[i]-1,m=isFinite(n)?Math.PI/(2*l):2*Math.PI/(2*Ln-1),x=n/m,p=isFinite(n)?1+Math.floor(f*x):Ln;p>Ln&&Ne(`sigmaRadians, ${n}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const g=[];let b=0;for(let y=0;y<Ln;++y){const T=y/x,M=Math.exp(-T*T/2);g.push(M),y===0?b+=M:y<p&&(b+=2*M)}for(let y=0;y<g.length;y++)g[y]=g[y]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-i;const A=this._sizeLods[r],v=3*A*(r>E-vn?r-E+vn:0),S=4*(this._cubeSize-A);jn(t,v,S,3*A,2*A),c.setRenderTarget(t),c.render(h,gi)}}function xd(s){const e=[],t=[],i=[];let r=s;const n=s-vn+1+Ra.length;for(let a=0;a<n;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>s-vn?c=Ra[a-s+vn-1]:a===0&&(c=0),t.push(c);const u=1/(o-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],l=6,m=6,x=3,p=2,g=1,b=new Float32Array(x*m*l),E=new Float32Array(p*m*l),A=new Float32Array(g*m*l);for(let S=0;S<l;S++){const y=S%3*2/3-1,T=S>2?0:-1,M=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];b.set(M,x*m*S),E.set(d,p*m*S);const _=[S,S,S,S,S,S];A.set(_,g*m*S)}const v=new Mn;v.setAttribute("position",new qt(b,x)),v.setAttribute("uv",new qt(E,p)),v.setAttribute("faceIndex",new qt(A,g)),i.push(new fn(v,null)),r>vn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function La(s,e,t){const i=new On(s,e,t);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jn(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function gd(s,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ur(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function vd(s,e,t){const i=new Float32Array(Ln),r=new q(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ur(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ia(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ur(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ua(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function ur(){return`

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
	`}function _d(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===is||c===rs,f=c===ii||c===ri;if(u||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Da(s)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const l=o.image;return u&&l&&l.height>0||f&&l&&r(l)?(t===null&&(t=new Da(s)),h=u?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",n),h.texture):null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function n(o){const c=o.target;c.removeEventListener("dispose",n);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Sd(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=s.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bi("WebGLRenderer: "+i+" extension not supported."),r}}}function Md(s,e,t,i){const r={},n=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const l=n.get(d);l&&(e.remove(l),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const l in d)e.update(d[l],s.ARRAY_BUFFER)}function u(h){const d=[],l=h.index,m=h.attributes.position;let x=0;if(l!==null){const b=l.array;x=l.version;for(let E=0,A=b.length;E<A;E+=3){const v=b[E+0],S=b[E+1],y=b[E+2];d.push(v,S,S,y,y,v)}}else if(m!==void 0){const b=m.array;x=m.version;for(let E=0,A=b.length/3-1;E<A;E+=3){const v=E+0,S=E+1,y=E+2;d.push(v,S,S,y,y,v)}}else return;const p=new(uo(d)?vo:go)(d,1);p.version=x;const g=n.get(h);g&&e.remove(g),n.set(h,p)}function f(h){const d=n.get(h);if(d){const l=h.index;l!==null&&d.version<l.version&&u(h)}else u(h);return n.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function yd(s,e,t){let i;function r(d){i=d}let n,a;function o(d){n=d.type,a=d.bytesPerElement}function c(d,l){s.drawElements(i,l,n,d*a),t.update(l,i,1)}function u(d,l,m){m!==0&&(s.drawElementsInstanced(i,l,n,d*a,m),t.update(l,i,m))}function f(d,l,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,d,0,m);let p=0;for(let g=0;g<m;g++)p+=l[g];t.update(p,i,1)}function h(d,l,m,x){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)u(d[g]/a,l[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(i,l,0,n,d,0,x,0,m);let g=0;for(let b=0;b<m;b++)g+=l[b]*x[b];t.update(g,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function bd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(n/3);break;case s.LINES:t.lines+=o*(n/2);break;case s.LINE_STRIP:t.lines+=o*(n-1);break;case s.LINE_LOOP:t.lines+=o*n;break;case s.POINTS:t.points+=o*n;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ed(s,e,t){const i=new WeakMap,r=new ut;function n(a,o,c){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const l=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;l===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let A=o.attributes.position.count*E,v=1;A>e.maxTextureSize&&(v=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const S=new Float32Array(A*v*4*h),y=new ho(S,A,v,h);y.type=sn,y.needsUpdate=!0;const T=E*4;for(let _=0;_<h;_++){const w=p[_],R=g[_],L=b[_],F=A*v*4*_;for(let N=0;N<w.count;N++){const z=N*T;l===!0&&(r.fromBufferAttribute(w,N),S[F+z+0]=r.x,S[F+z+1]=r.y,S[F+z+2]=r.z,S[F+z+3]=0),m===!0&&(r.fromBufferAttribute(R,N),S[F+z+4]=r.x,S[F+z+5]=r.y,S[F+z+6]=r.z,S[F+z+7]=0),x===!0&&(r.fromBufferAttribute(L,N),S[F+z+8]=r.x,S[F+z+9]=r.y,S[F+z+10]=r.z,S[F+z+11]=L.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new Je(A,v)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let l=0;for(let x=0;x<u.length;x++)l+=u[x];const m=o.morphTargetsRelative?1:1-l;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:n}}function Td(s,e,t,i){let r=new WeakMap;function n(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:n,dispose:a}}const wo=new _t,Fa=new bo(1,1),Co=new ho,Ro=new Zl,Po=new Mo,Na=[],Oa=[],Ba=new Float32Array(16),za=new Float32Array(9),Va=new Float32Array(4);function fi(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=Na[r];if(n===void 0&&(n=new Float32Array(r),Na[r]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(n,o)}return n}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function dr(s,e){let t=Oa[e];t===void 0&&(t=new Int32Array(e),Oa[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Ad(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function Cd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function Rd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function Pd(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Va.set(i),s.uniformMatrix2fv(this.addr,!1,Va),mt(t,i)}}function Dd(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;za.set(i),s.uniformMatrix3fv(this.addr,!1,za),mt(t,i)}}function Ld(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Ba.set(i),s.uniformMatrix4fv(this.addr,!1,Ba),mt(t,i)}}function Id(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ud(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),mt(t,e)}}function Fd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),mt(t,e)}}function Nd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),mt(t,e)}}function Od(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),mt(t,e)}}function zd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),mt(t,e)}}function Vd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),mt(t,e)}}function Gd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let n;this.type===s.SAMPLER_2D_SHADOW?(Fa.compareFunction=fo,n=Fa):n=wo,t.setTexture2D(e||n,r)}function Hd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ro,r)}function kd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Po,r)}function Wd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Co,r)}function Xd(s){switch(s){case 5126:return Ad;case 35664:return wd;case 35665:return Cd;case 35666:return Rd;case 35674:return Pd;case 35675:return Dd;case 35676:return Ld;case 5124:case 35670:return Id;case 35667:case 35671:return Ud;case 35668:case 35672:return Fd;case 35669:case 35673:return Nd;case 5125:return Od;case 36294:return Bd;case 36295:return zd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return Gd;case 35679:case 36299:case 36307:return Hd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Wd}}function Yd(s,e){s.uniform1fv(this.addr,e)}function qd(s,e){const t=fi(e,this.size,2);s.uniform2fv(this.addr,t)}function $d(s,e){const t=fi(e,this.size,3);s.uniform3fv(this.addr,t)}function Kd(s,e){const t=fi(e,this.size,4);s.uniform4fv(this.addr,t)}function Zd(s,e){const t=fi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jd(s,e){const t=fi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jd(s,e){const t=fi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qd(s,e){s.uniform1iv(this.addr,e)}function eh(s,e){s.uniform2iv(this.addr,e)}function th(s,e){s.uniform3iv(this.addr,e)}function nh(s,e){s.uniform4iv(this.addr,e)}function ih(s,e){s.uniform1uiv(this.addr,e)}function rh(s,e){s.uniform2uiv(this.addr,e)}function sh(s,e){s.uniform3uiv(this.addr,e)}function ah(s,e){s.uniform4uiv(this.addr,e)}function oh(s,e,t){const i=this.cache,r=e.length,n=dr(t,r);pt(i,n)||(s.uniform1iv(this.addr,n),mt(i,n));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wo,n[a])}function lh(s,e,t){const i=this.cache,r=e.length,n=dr(t,r);pt(i,n)||(s.uniform1iv(this.addr,n),mt(i,n));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ro,n[a])}function ch(s,e,t){const i=this.cache,r=e.length,n=dr(t,r);pt(i,n)||(s.uniform1iv(this.addr,n),mt(i,n));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Po,n[a])}function fh(s,e,t){const i=this.cache,r=e.length,n=dr(t,r);pt(i,n)||(s.uniform1iv(this.addr,n),mt(i,n));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Co,n[a])}function uh(s){switch(s){case 5126:return Yd;case 35664:return qd;case 35665:return $d;case 35666:return Kd;case 35674:return Zd;case 35675:return Jd;case 35676:return jd;case 5124:case 35670:return Qd;case 35667:case 35671:return eh;case 35668:case 35672:return th;case 35669:case 35673:return nh;case 5125:return ih;case 36294:return rh;case 36295:return sh;case 36296:return ah;case 35678:case 36198:case 36298:case 36306:case 35682:return oh;case 35679:case 36299:case 36307:return lh;case 35680:case 36300:case 36308:case 36293:return ch;case 36289:case 36303:case 36311:case 36292:return fh}}class dh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xd(t.type)}}class hh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uh(t.type)}}class ph{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,a=r.length;n!==a;++n){const o=r[n];o.setValue(e,t[o.id],i)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Ga(s,e){s.seq.push(e),s.map[e.id]=e}function mh(s,e,t){const i=s.name,r=i.length;for(Yr.lastIndex=0;;){const n=Yr.exec(i),a=Yr.lastIndex;let o=n[1];const c=n[2]==="]",u=n[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Ga(t,u===void 0?new dh(o,s,e):new hh(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new ph(o),Ga(t,h)),t=h}}}class rr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),a=e.getUniformLocation(t,n.name);mh(n,a,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,a=t.length;n!==a;++n){const o=t[n],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ha(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const xh=37297;let gh=0;function vh(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=r;a<n;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ka=new Oe;function _h(s){Ke._getMatrix(ka,Ke.workingColorSpace,s);const e=`mat3( ${ka.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case sr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wa(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=(s.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+vh(s.getShaderSource(e),o)}else return n}function Sh(s,e){const t=_h(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mh(s,e){let t;switch(e){case bl:t="Linear";break;case El:t="Reinhard";break;case Tl:t="Cineon";break;case Al:t="ACESFilmic";break;case Cl:t="AgX";break;case Rl:t="Neutral";break;case wl:t="Custom";break;default:Ne("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ji=new q;function yh(){Ke.getLuminanceCoefficients(Ji);const s=Ji.x.toFixed(4),e=Ji.y.toFixed(4),t=Ji.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bh(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vi).join(`
`)}function Eh(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Th(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),a=n.name;let o=1;n.type===s.FLOAT_MAT2&&(o=2),n.type===s.FLOAT_MAT3&&(o=3),n.type===s.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function vi(s){return s!==""}function Xa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ya(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ah=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(s){return s.replace(Ah,Ch)}const wh=new Map;function Ch(s,e){let t=Be[e];if(t===void 0){const i=wh.get(e);if(i!==void 0)t=Be[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ns(t)}const Rh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qa(s){return s.replace(Rh,Ph)}function Ph(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function $a(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dh(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===eo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Lh(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ii:case ri:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ih(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Uh(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case to:e="ENVMAP_BLENDING_MULTIPLY";break;case Ml:e="ENVMAP_BLENDING_MIX";break;case yl:e="ENVMAP_BLENDING_ADD";break}return e}function Fh(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Nh(s,e,t,i){const r=s.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Dh(t),u=Lh(t),f=Ih(t),h=Uh(t),d=Fh(t),l=bh(t),m=Eh(n),x=r.createProgram();let p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vi).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vi).join(`
`),g.length>0&&(g+=`
`)):(p=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),g=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Be.tonemapping_pars_fragment:"",t.toneMapping!==_n?Mh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Sh("linearToOutputTexel",t.outputColorSpace),yh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),a=Ns(a),a=Xa(a,t),a=Ya(a,t),o=Ns(o),o=Xa(o,t),o=Ya(o,t),a=qa(a),o=qa(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=b+p+a,A=b+g+o,v=Ha(r,r.VERTEX_SHADER,E),S=Ha(r,r.FRAGMENT_SHADER,A);r.attachShader(x,v),r.attachShader(x,S),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function y(w){if(s.debug.checkShaderErrors){const R=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(v)||"",F=r.getShaderInfoLog(S)||"",N=R.trim(),z=L.trim(),W=F.trim();let G=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,x,v,S);else{const ee=Wa(r,v,"vertex"),he=Wa(r,S,"fragment");ft("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+ee+`
`+he)}else N!==""?Ne("WebGLProgram: Program Info Log:",N):(z===""||W==="")&&(Z=!1);Z&&(w.diagnostics={runnable:G,programLog:N,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:g}})}r.deleteShader(v),r.deleteShader(S),T=new rr(r,x),M=Th(r,x)}let T;this.getUniforms=function(){return T===void 0&&y(this),T};let M;this.getAttributes=function(){return M===void 0&&y(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,xh)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gh++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=S,this}let Oh=0;class Bh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zh(e),t.set(e,i)),i}}class zh{constructor(e){this.id=Oh++,this.code=e,this.usedTimes=0}}function Vh(s,e,t,i,r,n,a){const o=new po,c=new Bh,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let l=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return u.add(M),M===0?"uv":`uv${M}`}function p(M,_,w,R,L){const F=R.fog,N=L.geometry,z=M.isMeshStandardMaterial?R.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),G=!!W&&W.mapping===cr?W.image.height:null,Z=m[M.type];M.precision!==null&&(l=r.getMaxPrecision(M.precision),l!==M.precision&&Ne("WebGLProgram.getParameters:",M.precision,"not supported, using",l,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=ee!==void 0?ee.length:0;let be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let Ue,We,He,k;if(Z){const je=Xt[Z];Ue=je.vertexShader,We=je.fragmentShader}else Ue=M.vertexShader,We=M.fragmentShader,c.update(M),He=c.getVertexShaderID(M),k=c.getFragmentShaderID(M);const J=s.getRenderTarget(),se=s.state.buffers.depth.getReversed(),Ce=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Pe=!!M.map,qe=!!M.matcap,ze=!!W,it=!!M.aoMap,I=!!M.lightMap,Ve=!!M.bumpMap,Ge=!!M.normalMap,Ze=!!M.displacementMap,ue=!!M.emissiveMap,rt=!!M.metalnessMap,Me=!!M.roughnessMap,Le=M.anisotropy>0,D=M.clearcoat>0,C=M.dispersion>0,H=M.iridescence>0,K=M.sheen>0,Q=M.transmission>0,$=Le&&!!M.anisotropyMap,_e=D&&!!M.clearcoatMap,ae=D&&!!M.clearcoatNormalMap,Ee=D&&!!M.clearcoatRoughnessMap,Se=H&&!!M.iridescenceMap,te=H&&!!M.iridescenceThicknessMap,re=K&&!!M.sheenColorMap,Re=K&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,pe=!!M.specularColorMap,Ie=!!M.specularIntensityMap,U=Q&&!!M.transmissionMap,fe=Q&&!!M.thicknessMap,oe=!!M.gradientMap,le=!!M.alphaMap,ne=M.alphaTest>0,j=!!M.alphaHash,ge=!!M.extensions;let Fe=_n;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const st={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:We,defines:M.defines,customVertexShaderID:He,customFragmentShaderID:k,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:l,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:si,alphaToCoverage:!!M.alphaToCoverage,map:Pe,matcap:qe,envMap:ze,envMapMode:ze&&W.mapping,envMapCubeUVHeight:G,aoMap:it,lightMap:I,bumpMap:Ve,normalMap:Ge,displacementMap:d&&Ze,emissiveMap:ue,normalMapObjectSpace:Ge&&M.normalMapType===Ul,normalMapTangentSpace:Ge&&M.normalMapType===Il,metalnessMap:rt,roughnessMap:Me,anisotropy:Le,anisotropyMap:$,clearcoat:D,clearcoatMap:_e,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:C,iridescence:H,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:K,sheenColorMap:re,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:pe,specularIntensityMap:Ie,transmission:Q,transmissionMap:U,thicknessMap:fe,gradientMap:oe,opaque:M.transparent===!1&&M.blending===ei&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:ne,alphaHash:j,combine:M.combine,mapUv:Pe&&x(M.map.channel),aoMapUv:it&&x(M.aoMap.channel),lightMapUv:I&&x(M.lightMap.channel),bumpMapUv:Ve&&x(M.bumpMap.channel),normalMapUv:Ge&&x(M.normalMap.channel),displacementMapUv:Ze&&x(M.displacementMap.channel),emissiveMapUv:ue&&x(M.emissiveMap.channel),metalnessMapUv:rt&&x(M.metalnessMap.channel),roughnessMapUv:Me&&x(M.roughnessMap.channel),anisotropyMapUv:$&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:pe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ie&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:fe&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ge||Le),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Pe||le),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:ue&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Tt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=u.has(1),st.vertexUv2s=u.has(2),st.vertexUv3s=u.has(3),u.clear(),st}function g(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)_.push(w),_.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(b(_,M),E(_,M),_.push(s.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function b(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function E(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function A(M){const _=m[M.type];let w;if(_){const R=Xt[_];w=fc.clone(R.uniforms)}else w=M.uniforms;return w}function v(M,_){let w;for(let R=0,L=f.length;R<L;R++){const F=f[R];if(F.cacheKey===_){w=F,++w.usedTimes;break}}return w===void 0&&(w=new Nh(s,_,M,n),f.push(w)),w}function S(M){if(--M.usedTimes===0){const _=f.indexOf(M);f[_]=f[f.length-1],f.pop(),M.destroy()}}function y(M){c.remove(M)}function T(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:S,releaseShaderCache:y,programs:f,dispose:T}}function Gh(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function r(a,o,c){s.get(a)[o]=c}function n(){s=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:n}}function Hh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ka(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Za(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,l,m,x,p){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:d,material:l,groupOrder:m,renderOrder:h.renderOrder,z:x,group:p},s[e]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=l,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=x,g.group=p),e++,g}function o(h,d,l,m,x,p){const g=a(h,d,l,m,x,p);l.transmission>0?i.push(g):l.transparent===!0?r.push(g):t.push(g)}function c(h,d,l,m,x,p){const g=a(h,d,l,m,x,p);l.transmission>0?i.unshift(g):l.transparent===!0?r.unshift(g):t.unshift(g)}function u(h,d){t.length>1&&t.sort(h||Hh),i.length>1&&i.sort(d||Ka),r.length>1&&r.sort(d||Ka)}function f(){for(let h=e,d=s.length;h<d;h++){const l=s[h];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:o,unshift:c,finish:f,sort:u}}function kh(){let s=new WeakMap;function e(i,r){const n=s.get(i);let a;return n===void 0?(a=new Za,s.set(i,[a])):r>=n.length?(a=new Za,n.push(a)):a=n[r],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Wh(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new tt};break;case"SpotLight":t={position:new q,direction:new q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function Xh(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Yh=0;function qh(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $h(s){const e=new Wh,t=Xh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,n=new ht,a=new ht;function o(u){let f=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let l=0,m=0,x=0,p=0,g=0,b=0,E=0,A=0,v=0,S=0,y=0;u.sort(qh);for(let M=0,_=u.length;M<_;M++){const w=u[M],R=w.color,L=w.intensity,F=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=R.r*L,h+=R.g*L,d+=R.b*L;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],L);y++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const W=w.shadow,G=t.get(w);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,i.directionalShadow[l]=G,i.directionalShadowMap[l]=N,i.directionalShadowMatrix[l]=w.shadow.matrix,b++}i.directional[l]=z,l++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(R).multiplyScalar(L),z.distance=F,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[x]=z;const W=w.shadow;if(w.map&&(i.spotLightMap[v]=w.map,v++,W.updateMatrices(w),w.castShadow&&S++),i.spotLightMatrix[x]=W.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=N,A++}x++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(R).multiplyScalar(L),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=z,p++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const W=w.shadow,G=t.get(w);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=N,i.pointShadowMatrix[m]=w.shadow.matrix,E++}i.point[m]=z,m++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(L),z.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[g]=z,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==l||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==p||T.hemiLength!==g||T.numDirectionalShadows!==b||T.numPointShadows!==E||T.numSpotShadows!==A||T.numSpotMaps!==v||T.numLightProbes!==y)&&(i.directional.length=l,i.spot.length=x,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+v-S,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=y,T.directionalLength=l,T.pointLength=m,T.spotLength=x,T.rectAreaLength=p,T.hemiLength=g,T.numDirectionalShadows=b,T.numPointShadows=E,T.numSpotShadows=A,T.numSpotMaps=v,T.numLightProbes=y,i.version=Yh++)}function c(u,f){let h=0,d=0,l=0,m=0,x=0;const p=f.matrixWorldInverse;for(let g=0,b=u.length;g<b;g++){const E=u[g];if(E.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),h++}else if(E.isSpotLight){const A=i.spot[l];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),l++}else if(E.isRectAreaLight){const A=i.rectArea[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),a.identity(),n.copy(E.matrixWorld),n.premultiply(p),a.extractRotation(n),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function Ja(s){const e=new $h(s),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function n(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:n,pushShadow:a}}function Kh(s){let e=new WeakMap;function t(r,n=0){const a=e.get(r);let o;return a===void 0?(o=new Ja(s),e.set(r,[o])):n>=a.length?(o=new Ja(s),a.push(o)):o=a[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Zh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jh=`uniform sampler2D shadow_pass;
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
}`;function jh(s,e,t){let i=new yo;const r=new Je,n=new Je,a=new ut,o=new Mc({depthPacking:Ll}),c=new yc,u={},f=t.maxTextureSize,h={[Sn]:Tt,[Tt]:Sn,[nn]:nn},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Zh,fragmentShader:Jh}),l=d.clone();l.defines.HORIZONTAL_PASS=1;const m=new Mn;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new fn(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let g=this.type;this.render=function(S,y,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const M=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),R=s.state;R.setBlending(an),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=g!==tn&&this.type===tn,F=g===tn&&this.type!==tn;for(let N=0,z=S.length;N<z;N++){const W=S[N],G=W.shadow;if(G===void 0){Ne("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const Z=G.getFrameExtents();if(r.multiply(Z),n.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(n.x=Math.floor(f/Z.x),r.x=n.x*Z.x,G.mapSize.x=n.x),r.y>f&&(n.y=Math.floor(f/Z.y),r.y=n.y*Z.y,G.mapSize.y=n.y)),G.map===null||L===!0||F===!0){const he=this.type!==tn?{minFilter:Pt,magFilter:Pt}:{};G.map!==null&&G.map.dispose(),G.map=new On(r.x,r.y,he),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ee=G.getViewportCount();for(let he=0;he<ee;he++){const be=G.getViewport(he);a.set(n.x*be.x,n.y*be.y,n.x*be.z,n.y*be.w),R.viewport(a),G.updateMatrices(W,he),i=G.getFrustum(),A(y,T,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===tn&&b(G,T),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(M,_,w)};function b(S,y){const T=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,l.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,l.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new On(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(y,null,T,d,x,null),l.uniforms.shadow_pass.value=S.mapPass.texture,l.uniforms.resolution.value=S.mapSize,l.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(y,null,T,l,x,null)}function E(S,y,T,M){let _=null;const w=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)_=w;else if(_=T.isPointLight===!0?c:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const R=_.uuid,L=y.uuid;let F=u[R];F===void 0&&(F={},u[R]=F);let N=F[L];N===void 0&&(N=_.clone(),F[L]=N,y.addEventListener("dispose",v)),_=N}if(_.visible=y.visible,_.wireframe=y.wireframe,M===tn?_.side=y.shadowSide!==null?y.shadowSide:y.side:_.side=y.shadowSide!==null?y.shadowSide:h[y.side],_.alphaMap=y.alphaMap,_.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,_.map=y.map,_.clipShadows=y.clipShadows,_.clippingPlanes=y.clippingPlanes,_.clipIntersection=y.clipIntersection,_.displacementMap=y.displacementMap,_.displacementScale=y.displacementScale,_.displacementBias=y.displacementBias,_.wireframeLinewidth=y.wireframeLinewidth,_.linewidth=y.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const R=s.properties.get(_);R.light=T}return _}function A(S,y,T,M,_){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===tn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const L=e.update(S),F=S.material;if(Array.isArray(F)){const N=L.groups;for(let z=0,W=N.length;z<W;z++){const G=N[z],Z=F[G.materialIndex];if(Z&&Z.visible){const ee=E(S,Z,M,_);S.onBeforeShadow(s,S,y,T,L,ee,G),s.renderBufferDirect(T,null,L,ee,S,G),S.onAfterShadow(s,S,y,T,L,ee,G)}}}else if(F.visible){const N=E(S,F,M,_);S.onBeforeShadow(s,S,y,T,L,N,null),s.renderBufferDirect(T,null,L,N,S,null),S.onAfterShadow(s,S,y,T,L,N,null)}}const R=S.children;for(let L=0,F=R.length;L<F;L++)A(R[L],y,T,M,_)}function v(S){S.target.removeEventListener("dispose",v);for(const T in u){const M=u[T],_=S.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Qh={[Zr]:Jr,[jr]:ts,[Qr]:ns,[ni]:es,[Jr]:Zr,[ts]:jr,[ns]:Qr,[es]:ni};function ep(s,e){function t(){let U=!1;const fe=new ut;let oe=null;const le=new ut(0,0,0,0);return{setMask:function(ne){oe!==ne&&!U&&(s.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){U=ne},setClear:function(ne,j,ge,Fe,st){st===!0&&(ne*=Fe,j*=Fe,ge*=Fe),fe.set(ne,j,ge,Fe),le.equals(fe)===!1&&(s.clearColor(ne,j,ge,Fe),le.copy(fe))},reset:function(){U=!1,oe=null,le.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,oe=null,le=null,ne=null;return{setReversed:function(j){if(fe!==j){const ge=e.get("EXT_clip_control");j?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),fe=j;const Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return fe},setTest:function(j){j?J(s.DEPTH_TEST):se(s.DEPTH_TEST)},setMask:function(j){oe!==j&&!U&&(s.depthMask(j),oe=j)},setFunc:function(j){if(fe&&(j=Qh[j]),le!==j){switch(j){case Zr:s.depthFunc(s.NEVER);break;case Jr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case ni:s.depthFunc(s.LEQUAL);break;case Qr:s.depthFunc(s.EQUAL);break;case es:s.depthFunc(s.GEQUAL);break;case ts:s.depthFunc(s.GREATER);break;case ns:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=j}},setLocked:function(j){U=j},setClear:function(j){ne!==j&&(fe&&(j=1-j),s.clearDepth(j),ne=j)},reset:function(){U=!1,oe=null,le=null,ne=null,fe=!1}}}function r(){let U=!1,fe=null,oe=null,le=null,ne=null,j=null,ge=null,Fe=null,st=null;return{setTest:function(je){U||(je?J(s.STENCIL_TEST):se(s.STENCIL_TEST))},setMask:function(je){fe!==je&&!U&&(s.stencilMask(je),fe=je)},setFunc:function(je,Wt,Ot){(oe!==je||le!==Wt||ne!==Ot)&&(s.stencilFunc(je,Wt,Ot),oe=je,le=Wt,ne=Ot)},setOp:function(je,Wt,Ot){(j!==je||ge!==Wt||Fe!==Ot)&&(s.stencilOp(je,Wt,Ot),j=je,ge=Wt,Fe=Ot)},setLocked:function(je){U=je},setClear:function(je){st!==je&&(s.clearStencil(je),st=je)},reset:function(){U=!1,fe=null,oe=null,le=null,ne=null,j=null,ge=null,Fe=null,st=null}}}const n=new t,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let f={},h={},d=new WeakMap,l=[],m=null,x=!1,p=null,g=null,b=null,E=null,A=null,v=null,S=null,y=new tt(0,0,0),T=0,M=!1,_=null,w=null,R=null,L=null,F=null;const N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=W>=2);let Z=null,ee={};const he=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ue=new ut().fromArray(he),We=new ut().fromArray(be);function He(U,fe,oe,le){const ne=new Uint8Array(4),j=s.createTexture();s.bindTexture(U,j),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ge=0;ge<oe;ge++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(fe,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(fe+ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return j}const k={};k[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),k[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),k[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(ni),Ve(!1),Ge(ia),J(s.CULL_FACE),it(an);function J(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function se(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function Ce(U,fe){return h[U]!==fe?(s.bindFramebuffer(U,fe),h[U]=fe,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=fe),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=fe),!0):!1}function xe(U,fe){let oe=l,le=!1;if(U){oe=d.get(fe),oe===void 0&&(oe=[],d.set(fe,oe));const ne=U.textures;if(oe.length!==ne.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let j=0,ge=ne.length;j<ge;j++)oe[j]=s.COLOR_ATTACHMENT0+j;oe.length=ne.length,le=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,le=!0);le&&s.drawBuffers(oe)}function Pe(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const qe={[Dn]:s.FUNC_ADD,[rl]:s.FUNC_SUBTRACT,[sl]:s.FUNC_REVERSE_SUBTRACT};qe[al]=s.MIN,qe[ol]=s.MAX;const ze={[ll]:s.ZERO,[cl]:s.ONE,[fl]:s.SRC_COLOR,[$r]:s.SRC_ALPHA,[xl]:s.SRC_ALPHA_SATURATE,[pl]:s.DST_COLOR,[dl]:s.DST_ALPHA,[ul]:s.ONE_MINUS_SRC_COLOR,[Kr]:s.ONE_MINUS_SRC_ALPHA,[ml]:s.ONE_MINUS_DST_COLOR,[hl]:s.ONE_MINUS_DST_ALPHA,[gl]:s.CONSTANT_COLOR,[vl]:s.ONE_MINUS_CONSTANT_COLOR,[_l]:s.CONSTANT_ALPHA,[Sl]:s.ONE_MINUS_CONSTANT_ALPHA};function it(U,fe,oe,le,ne,j,ge,Fe,st,je){if(U===an){x===!0&&(se(s.BLEND),x=!1);return}if(x===!1&&(J(s.BLEND),x=!0),U!==il){if(U!==p||je!==M){if((g!==Dn||A!==Dn)&&(s.blendEquation(s.FUNC_ADD),g=Dn,A=Dn),je)switch(U){case ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ra:s.blendFunc(s.ONE,s.ONE);break;case sa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case aa:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ft("WebGLState: Invalid blending: ",U);break}else switch(U){case ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ra:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sa:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case aa:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",U);break}b=null,E=null,v=null,S=null,y.set(0,0,0),T=0,p=U,M=je}return}ne=ne||fe,j=j||oe,ge=ge||le,(fe!==g||ne!==A)&&(s.blendEquationSeparate(qe[fe],qe[ne]),g=fe,A=ne),(oe!==b||le!==E||j!==v||ge!==S)&&(s.blendFuncSeparate(ze[oe],ze[le],ze[j],ze[ge]),b=oe,E=le,v=j,S=ge),(Fe.equals(y)===!1||st!==T)&&(s.blendColor(Fe.r,Fe.g,Fe.b,st),y.copy(Fe),T=st),p=U,M=!1}function I(U,fe){U.side===nn?se(s.CULL_FACE):J(s.CULL_FACE);let oe=U.side===Tt;fe&&(oe=!oe),Ve(oe),U.blending===ei&&U.transparent===!1?it(an):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),n.setMask(U.colorWrite);const le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){_!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),_=U)}function Ge(U){U!==el?(J(s.CULL_FACE),U!==w&&(U===ia?s.cullFace(s.BACK):U===tl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):se(s.CULL_FACE),w=U}function Ze(U){U!==R&&(z&&s.lineWidth(U),R=U)}function ue(U,fe,oe){U?(J(s.POLYGON_OFFSET_FILL),(L!==fe||F!==oe)&&(s.polygonOffset(fe,oe),L=fe,F=oe)):se(s.POLYGON_OFFSET_FILL)}function rt(U){U?J(s.SCISSOR_TEST):se(s.SCISSOR_TEST)}function Me(U){U===void 0&&(U=s.TEXTURE0+N-1),Z!==U&&(s.activeTexture(U),Z=U)}function Le(U,fe,oe){oe===void 0&&(Z===null?oe=s.TEXTURE0+N-1:oe=Z);let le=ee[oe];le===void 0&&(le={type:void 0,texture:void 0},ee[oe]=le),(le.type!==U||le.texture!==fe)&&(Z!==oe&&(s.activeTexture(oe),Z=oe),s.bindTexture(U,fe||k[U]),le.type=U,le.texture=fe)}function D(){const U=ee[Z];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function K(){try{s.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Q(){try{s.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ae(){try{s.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function Ee(){try{s.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function Se(){try{s.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function te(){try{s.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function re(U){Ue.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function Re(U){We.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),We.copy(U))}function Ae(U,fe){let oe=u.get(fe);oe===void 0&&(oe=new WeakMap,u.set(fe,oe));let le=oe.get(U);le===void 0&&(le=s.getUniformBlockIndex(fe,U.name),oe.set(U,le))}function pe(U,fe){const le=u.get(fe).get(U);c.get(fe)!==le&&(s.uniformBlockBinding(fe,le,U.__bindingPointIndex),c.set(fe,le))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Z=null,ee={},h={},d=new WeakMap,l=[],m=null,x=!1,p=null,g=null,b=null,E=null,A=null,v=null,S=null,y=new tt(0,0,0),T=0,M=!1,_=null,w=null,R=null,L=null,F=null,Ue.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:J,disable:se,bindFramebuffer:Ce,drawBuffers:xe,useProgram:Pe,setBlending:it,setMaterial:I,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Ze,setPolygonOffset:ue,setScissorTest:rt,activeTexture:Me,bindTexture:Le,unbindTexture:D,compressedTexImage2D:C,compressedTexImage3D:H,texImage2D:Se,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:_e,scissor:re,viewport:Re,reset:Ie}}function tp(s,e,t,i,r,n,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,f=new WeakMap;let h;const d=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,C){return l?new OffscreenCanvas(D,C):or("canvas")}function x(D,C,H){let K=1;const Q=Le(D);if((Q.width>H||Q.height>H)&&(K=H/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){const $=Math.floor(K*Q.width),_e=Math.floor(K*Q.height);h===void 0&&(h=m($,_e));const ae=C?m($,_e):h;return ae.width=$,ae.height=_e,ae.getContext("2d").drawImage(D,0,0,$,_e),Ne("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+_e+")."),ae}else return"data"in D&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function p(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(D,C,H,K,Q=!1){if(D!==null){if(s[D]!==void 0)return s[D];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=C;if(C===s.RED&&(H===s.FLOAT&&($=s.R32F),H===s.HALF_FLOAT&&($=s.R16F),H===s.UNSIGNED_BYTE&&($=s.R8)),C===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.R8UI),H===s.UNSIGNED_SHORT&&($=s.R16UI),H===s.UNSIGNED_INT&&($=s.R32UI),H===s.BYTE&&($=s.R8I),H===s.SHORT&&($=s.R16I),H===s.INT&&($=s.R32I)),C===s.RG&&(H===s.FLOAT&&($=s.RG32F),H===s.HALF_FLOAT&&($=s.RG16F),H===s.UNSIGNED_BYTE&&($=s.RG8)),C===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RG8UI),H===s.UNSIGNED_SHORT&&($=s.RG16UI),H===s.UNSIGNED_INT&&($=s.RG32UI),H===s.BYTE&&($=s.RG8I),H===s.SHORT&&($=s.RG16I),H===s.INT&&($=s.RG32I)),C===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGB8UI),H===s.UNSIGNED_SHORT&&($=s.RGB16UI),H===s.UNSIGNED_INT&&($=s.RGB32UI),H===s.BYTE&&($=s.RGB8I),H===s.SHORT&&($=s.RGB16I),H===s.INT&&($=s.RGB32I)),C===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGBA8UI),H===s.UNSIGNED_SHORT&&($=s.RGBA16UI),H===s.UNSIGNED_INT&&($=s.RGBA32UI),H===s.BYTE&&($=s.RGBA8I),H===s.SHORT&&($=s.RGBA16I),H===s.INT&&($=s.RGBA32I)),C===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),C===s.RGBA){const _e=Q?sr:Ke.getTransfer(K);H===s.FLOAT&&($=s.RGBA32F),H===s.HALF_FLOAT&&($=s.RGBA16F),H===s.UNSIGNED_BYTE&&($=_e===et?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(D,C){let H;return D?C===null||C===Nn||C===Si?H=s.DEPTH24_STENCIL8:C===sn?H=s.DEPTH32F_STENCIL8:C===_i&&(H=s.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Nn||C===Si?H=s.DEPTH_COMPONENT24:C===sn?H=s.DEPTH_COMPONENT32F:C===_i&&(H=s.DEPTH_COMPONENT16),H}function v(D,C){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Pt&&D.minFilter!==Nt?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function S(D){const C=D.target;C.removeEventListener("dispose",S),T(C),C.isVideoTexture&&f.delete(C)}function y(D){const C=D.target;C.removeEventListener("dispose",y),_(C)}function T(D){const C=i.get(D);if(C.__webglInit===void 0)return;const H=D.source,K=d.get(H);if(K){const Q=K[C.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(D),Object.keys(K).length===0&&d.delete(H)}i.remove(D)}function M(D){const C=i.get(D);s.deleteTexture(C.__webglTexture);const H=D.source,K=d.get(H);delete K[C.__cacheKey],a.memory.textures--}function _(D){const C=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(C.__webglFramebuffer[K]))for(let Q=0;Q<C.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(C.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(C.__webglFramebuffer[K]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[K])}else{if(Array.isArray(C.__webglFramebuffer))for(let K=0;K<C.__webglFramebuffer.length;K++)s.deleteFramebuffer(C.__webglFramebuffer[K]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let K=0;K<C.__webglColorRenderbuffer.length;K++)C.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[K]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=D.textures;for(let K=0,Q=H.length;K<Q;K++){const $=i.get(H[K]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[K])}i.remove(D)}let w=0;function R(){w=0}function L(){const D=w;return D>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),w+=1,D}function F(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function N(D,C){const H=i.get(D);if(D.isVideoTexture&&rt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const K=D.image;if(K===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{k(H,D,C);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+C)}function z(D,C){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){k(H,D,C);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+C)}function W(D,C){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){k(H,D,C);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+C)}function G(D,C){const H=i.get(D);if(D.version>0&&H.__version!==D.version){J(H,D,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+C)}const Z={[ss]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[as]:s.MIRRORED_REPEAT},ee={[Pt]:s.NEAREST,[Pl]:s.NEAREST_MIPMAP_NEAREST,[Di]:s.NEAREST_MIPMAP_LINEAR,[Nt]:s.LINEAR,[gr]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},he={[Fl]:s.NEVER,[Gl]:s.ALWAYS,[Nl]:s.LESS,[fo]:s.LEQUAL,[Ol]:s.EQUAL,[Vl]:s.GEQUAL,[Bl]:s.GREATER,[zl]:s.NOTEQUAL};function be(D,C){if(C.type===sn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Nt||C.magFilter===gr||C.magFilter===Di||C.magFilter===In||C.minFilter===Nt||C.minFilter===gr||C.minFilter===Di||C.minFilter===In)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Z[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Z[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Z[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ee[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ee[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,he[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Pt||C.minFilter!==Di&&C.minFilter!==In||C.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ue(D,C){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",S));const K=C.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const $=F(C);if($!==D.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[$].usedTimes++;const _e=Q[D.__cacheKey];_e!==void 0&&(Q[D.__cacheKey].usedTimes--,_e.usedTimes===0&&M(C)),D.__cacheKey=$,D.__webglTexture=Q[$].texture}return H}function We(D,C,H){return Math.floor(Math.floor(D/H)/C)}function He(D,C,H,K){const $=D.updateRanges;if($.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,H,K,C.data);else{$.sort((te,re)=>te.start-re.start);let _e=0;for(let te=1;te<$.length;te++){const re=$[_e],Re=$[te],Ae=re.start+re.count,pe=We(Re.start,C.width,4),Ie=We(re.start,C.width,4);Re.start<=Ae+1&&pe===Ie&&We(Re.start+Re.count-1,C.width,4)===pe?re.count=Math.max(re.count,Re.start+Re.count-re.start):(++_e,$[_e]=Re)}$.length=_e+1;const ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),Se=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let te=0,re=$.length;te<re;te++){const Re=$[te],Ae=Math.floor(Re.start/4),pe=Math.ceil(Re.count/4),Ie=Ae%C.width,U=Math.floor(Ae/C.width),fe=pe,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Ie,U,fe,oe,H,K,C.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function k(D,C,H){let K=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(K=s.TEXTURE_3D);const Q=Ue(D,C),$=C.source;t.bindTexture(K,D.__webglTexture,s.TEXTURE0+H);const _e=i.get($);if($.version!==_e.__version||Q===!0){t.activeTexture(s.TEXTURE0+H);const ae=Ke.getPrimaries(Ke.workingColorSpace),Ee=C.colorSpace===gn?null:Ke.getPrimaries(C.colorSpace),Se=C.colorSpace===gn||ae===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=x(C.image,!1,r.maxTextureSize);te=Me(C,te);const re=n.convert(C.format,C.colorSpace),Re=n.convert(C.type);let Ae=E(C.internalFormat,re,Re,C.colorSpace,C.isVideoTexture);be(K,C);let pe;const Ie=C.mipmaps,U=C.isVideoTexture!==!0,fe=_e.__version===void 0||Q===!0,oe=$.dataReady,le=v(C,te);if(C.isDepthTexture)Ae=A(C.format===yi,C.type),fe&&(U?t.texStorage2D(s.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ae,te.width,te.height,0,re,Re,null));else if(C.isDataTexture)if(Ie.length>0){U&&fe&&t.texStorage2D(s.TEXTURE_2D,le,Ae,Ie[0].width,Ie[0].height);for(let ne=0,j=Ie.length;ne<j;ne++)pe=Ie[ne],U?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,pe.width,pe.height,re,Re,pe.data):t.texImage2D(s.TEXTURE_2D,ne,Ae,pe.width,pe.height,0,re,Re,pe.data);C.generateMipmaps=!1}else U?(fe&&t.texStorage2D(s.TEXTURE_2D,le,Ae,te.width,te.height),oe&&He(C,te,re,Re)):t.texImage2D(s.TEXTURE_2D,0,Ae,te.width,te.height,0,re,Re,te.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){U&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Ae,Ie[0].width,Ie[0].height,te.depth);for(let ne=0,j=Ie.length;ne<j;ne++)if(pe=Ie[ne],C.format!==kt)if(re!==null)if(U){if(oe)if(C.layerUpdates.size>0){const ge=Ca(pe.width,pe.height,C.format,C.type);for(const Fe of C.layerUpdates){const st=pe.data.subarray(Fe*ge/pe.data.BYTES_PER_ELEMENT,(Fe+1)*ge/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Fe,pe.width,pe.height,1,re,st)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,re,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Ae,pe.width,pe.height,te.depth,0,pe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,re,Re,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Ae,pe.width,pe.height,te.depth,0,re,Re,pe.data)}else{U&&fe&&t.texStorage2D(s.TEXTURE_2D,le,Ae,Ie[0].width,Ie[0].height);for(let ne=0,j=Ie.length;ne<j;ne++)pe=Ie[ne],C.format!==kt?re!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,pe.width,pe.height,re,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Ae,pe.width,pe.height,0,pe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,pe.width,pe.height,re,Re,pe.data):t.texImage2D(s.TEXTURE_2D,ne,Ae,pe.width,pe.height,0,re,Re,pe.data)}else if(C.isDataArrayTexture)if(U){if(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Ae,te.width,te.height,te.depth),oe)if(C.layerUpdates.size>0){const ne=Ca(te.width,te.height,C.format,C.type);for(const j of C.layerUpdates){const ge=te.data.subarray(j*ne/te.data.BYTES_PER_ELEMENT,(j+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,re,Re,ge)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,Re,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,re,Re,te.data);else if(C.isData3DTexture)U?(fe&&t.texStorage3D(s.TEXTURE_3D,le,Ae,te.width,te.height,te.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,Re,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,re,Re,te.data);else if(C.isFramebufferTexture){if(fe)if(U)t.texStorage2D(s.TEXTURE_2D,le,Ae,te.width,te.height);else{let ne=te.width,j=te.height;for(let ge=0;ge<le;ge++)t.texImage2D(s.TEXTURE_2D,ge,Ae,ne,j,0,re,Re,null),ne>>=1,j>>=1}}else if(Ie.length>0){if(U&&fe){const ne=Le(Ie[0]);t.texStorage2D(s.TEXTURE_2D,le,Ae,ne.width,ne.height)}for(let ne=0,j=Ie.length;ne<j;ne++)pe=Ie[ne],U?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,re,Re,pe):t.texImage2D(s.TEXTURE_2D,ne,Ae,re,Re,pe);C.generateMipmaps=!1}else if(U){if(fe){const ne=Le(te);t.texStorage2D(s.TEXTURE_2D,le,Ae,ne.width,ne.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,Re,te)}else t.texImage2D(s.TEXTURE_2D,0,Ae,re,Re,te);p(C)&&g(K),_e.__version=$.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function J(D,C,H){if(C.image.length!==6)return;const K=Ue(D,C),Q=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);const $=i.get(Q);if(Q.version!==$.__version||K===!0){t.activeTexture(s.TEXTURE0+H);const _e=Ke.getPrimaries(Ke.workingColorSpace),ae=C.colorSpace===gn?null:Ke.getPrimaries(C.colorSpace),Ee=C.colorSpace===gn||_e===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Se=C.isCompressedTexture||C.image[0].isCompressedTexture,te=C.image[0]&&C.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!Se&&!te?re[j]=x(C.image[j],!0,r.maxCubemapSize):re[j]=te?C.image[j].image:C.image[j],re[j]=Me(C,re[j]);const Re=re[0],Ae=n.convert(C.format,C.colorSpace),pe=n.convert(C.type),Ie=E(C.internalFormat,Ae,pe,C.colorSpace),U=C.isVideoTexture!==!0,fe=$.__version===void 0||K===!0,oe=Q.dataReady;let le=v(C,Re);be(s.TEXTURE_CUBE_MAP,C);let ne;if(Se){U&&fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ie,Re.width,Re.height);for(let j=0;j<6;j++){ne=re[j].mipmaps;for(let ge=0;ge<ne.length;ge++){const Fe=ne[ge];C.format!==kt?Ae!==null?U?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,Ie,Fe.width,Fe.height,0,Fe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,0,0,Fe.width,Fe.height,Ae,pe,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,Ie,Fe.width,Fe.height,0,Ae,pe,Fe.data)}}}else{if(ne=C.mipmaps,U&&fe){ne.length>0&&le++;const j=Le(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,Ie,j.width,j.height)}for(let j=0;j<6;j++)if(te){U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,Ae,pe,re[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,re[j].width,re[j].height,0,Ae,pe,re[j].data);for(let ge=0;ge<ne.length;ge++){const st=ne[ge].image[j].image;U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,0,0,st.width,st.height,Ae,pe,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,Ie,st.width,st.height,0,Ae,pe,st.data)}}else{U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,pe,re[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,Ae,pe,re[j]);for(let ge=0;ge<ne.length;ge++){const Fe=ne[ge];U?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,0,0,Ae,pe,Fe.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,Ie,Ae,pe,Fe.image[j])}}}p(C)&&g(s.TEXTURE_CUBE_MAP),$.__version=Q.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function se(D,C,H,K,Q,$){const _e=n.convert(H.format,H.colorSpace),ae=n.convert(H.type),Ee=E(H.internalFormat,_e,ae,H.colorSpace),Se=i.get(C),te=i.get(H);if(te.__renderTarget=C,!Se.__hasExternalTextures){const re=Math.max(1,C.width>>$),Re=Math.max(1,C.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Ee,re,Re,C.depth,0,_e,ae,null):t.texImage2D(Q,$,Ee,re,Re,0,_e,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ue(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,te.__webglTexture,0,Ze(C)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,te.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(D,C,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const K=C.depthTexture,Q=K&&K.isDepthTexture?K.type:null,$=A(C.stencilBuffer,Q),_e=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=Ze(C);ue(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,$,C.width,C.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,$,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,$,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,D)}else{const K=C.textures;for(let Q=0;Q<K.length;Q++){const $=K[Q],_e=n.convert($.format,$.colorSpace),ae=n.convert($.type),Ee=E($.internalFormat,_e,ae,$.colorSpace),Se=Ze(C);H&&ue(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Ee,C.width,C.height):ue(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Ee,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(C.depthTexture);K.__renderTarget=C,(!K.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),N(C.depthTexture,0);const Q=K.__webglTexture,$=Ze(C);if(C.depthTexture.format===Mi)ue(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(C.depthTexture.format===yi)ue(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(D){const C=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),K){const Q=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),C.__depthDisposeCallback=Q}C.__boundDepthTexture=K}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=D.texture.mipmaps;K&&K.length>0?xe(C.__webglFramebuffer[0],D):xe(C.__webglFramebuffer,D)}else if(H){C.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[K]),C.__webglDepthbuffer[K]===void 0)C.__webglDepthbuffer[K]=s.createRenderbuffer(),Ce(C.__webglDepthbuffer[K],D,!1);else{const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}else{const K=D.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),Ce(C.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(D,C,H){const K=i.get(D);C!==void 0&&se(K.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Pe(D)}function ze(D){const C=D.texture,H=i.get(D),K=i.get(C);D.addEventListener("dispose",y);const Q=D.textures,$=D.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=C.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<C.mipmaps.length;Ee++)H.__webglFramebuffer[ae][Ee]=s.createFramebuffer()}else H.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<C.mipmaps.length;ae++)H.__webglFramebuffer[ae]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(_e)for(let ae=0,Ee=Q.length;ae<Ee;ae++){const Se=i.get(Q[ae]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&ue(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const Ee=Q[ae];H.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);const Se=n.convert(Ee.format,Ee.colorSpace),te=n.convert(Ee.type),re=E(Ee.internalFormat,Se,te,Ee.colorSpace,D.isXRRenderTarget===!0),Re=Ze(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,re,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),be(s.TEXTURE_CUBE_MAP,C);for(let ae=0;ae<6;ae++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ee=0;Ee<C.mipmaps.length;Ee++)se(H.__webglFramebuffer[ae][Ee],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else se(H.__webglFramebuffer[ae],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(C)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,Ee=Q.length;ae<Ee;ae++){const Se=Q[ae],te=i.get(Se);let re=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(re=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,te.__webglTexture),be(re,Se),se(H.__webglFramebuffer,D,Se,s.COLOR_ATTACHMENT0+ae,re,0),p(Se)&&g(re)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),be(ae,C),C.mipmaps&&C.mipmaps.length>0)for(let Ee=0;Ee<C.mipmaps.length;Ee++)se(H.__webglFramebuffer[Ee],D,C,s.COLOR_ATTACHMENT0,ae,Ee);else se(H.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,ae,0);p(C)&&g(ae),t.unbindTexture()}D.depthBuffer&&Pe(D)}function it(D){const C=D.textures;for(let H=0,K=C.length;H<K;H++){const Q=C[H];if(p(Q)){const $=b(D),_e=i.get(Q).__webglTexture;t.bindTexture($,_e),g($),t.unbindTexture()}}}const I=[],Ve=[];function Ge(D){if(D.samples>0){if(ue(D)===!1){const C=D.textures,H=D.width,K=D.height;let Q=s.COLOR_BUFFER_BIT;const $=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=i.get(D),ae=C.length>1;if(ae)for(let Se=0;Se<C.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=D.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Se=0;Se<C.length;Se++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Se]);const te=i.get(C[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,H,K,0,0,H,K,Q,s.NEAREST),c===!0&&(I.length=0,Ve.length=0,I.push(s.COLOR_ATTACHMENT0+Se),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push($),Ve.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let Se=0;Se<C.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,_e.__webglColorRenderbuffer[Se]);const te=i.get(C[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ze(D){return Math.min(r.maxSamples,D.samples)}function ue(D){const C=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function rt(D){const C=a.render.frame;f.get(D)!==C&&(f.set(D,C),D.update())}function Me(D,C){const H=D.colorSpace,K=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==si&&H!==gn&&(Ke.getTransfer(H)===et?(K!==kt||Q!==ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",H)),C}function Le(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=qe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ue}function np(s,e){function t(i,r=gn){let n;const a=Ke.getTransfer(r);if(i===ln)return s.UNSIGNED_BYTE;if(i===zs)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Vs)return s.UNSIGNED_SHORT_5_5_5_1;if(i===so)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ao)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===io)return s.BYTE;if(i===ro)return s.SHORT;if(i===_i)return s.UNSIGNED_SHORT;if(i===Bs)return s.INT;if(i===Nn)return s.UNSIGNED_INT;if(i===sn)return s.FLOAT;if(i===li)return s.HALF_FLOAT;if(i===oo)return s.ALPHA;if(i===lo)return s.RGB;if(i===kt)return s.RGBA;if(i===Mi)return s.DEPTH_COMPONENT;if(i===yi)return s.DEPTH_STENCIL;if(i===co)return s.RED;if(i===Gs)return s.RED_INTEGER;if(i===Hs)return s.RG;if(i===ks)return s.RG_INTEGER;if(i===Ws)return s.RGBA_INTEGER;if(i===er||i===tr||i===nr||i===ir)if(a===et)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===er)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ir)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===er)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tr)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nr)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ir)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===os||i===ls||i===cs||i===fs)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===os)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ls)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cs)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===us||i===ds||i===hs)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===us||i===ds)return a===et?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===hs)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ps||i===ms||i===xs||i===gs||i===vs||i===_s||i===Ss||i===Ms||i===ys||i===bs||i===Es||i===Ts||i===As||i===ws)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===ps)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ms)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xs)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gs)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vs)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_s)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ss)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ms)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ys)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bs)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Es)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ts)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===As)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ws)return a===et?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cs||i===Rs||i===Ps)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===Cs)return a===et?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ps)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ds||i===Ls||i===Is||i===Us)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===Ds)return n.COMPRESSED_RED_RGTC1_EXT;if(i===Ls)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Is)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Us)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Si?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const ip=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rp=`
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

}`;class sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $t({vertexShader:ip,fragmentShader:rp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ap extends ci{constructor(e,t){super();const i=this;let r=null,n=1,a=null,o="local-floor",c=1,u=null,f=null,h=null,d=null,l=null,m=null;const x=typeof XRWebGLBinding!="undefined",p=new sp,g={},b=t.getContextAttributes();let E=null,A=null;const v=[],S=[],y=new Je;let T=null;const M=new Gt;M.viewport=new ut;const _=new Gt;_.viewport=new ut;const w=[M,_],R=new bc;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=v[k];return J===void 0&&(J=new Vr,v[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=v[k];return J===void 0&&(J=new Vr,v[k]=J),J.getGripSpace()},this.getHand=function(k){let J=v[k];return J===void 0&&(J=new Vr,v[k]=J),J.getHandSpace()};function N(k){const J=S.indexOf(k.inputSource);if(J===-1)return;const se=v[J];se!==void 0&&(se.update(k.inputSource,k.frame,u||a),se.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",W);for(let k=0;k<v.length;k++){const J=S[k];J!==null&&(S[k]=null,v[k].disconnect(J))}L=null,F=null,p.reset();for(const k in g)delete g[k];e.setRenderTarget(E),l=null,d=null,h=null,r=null,A=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){n=k,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return d!==null?d:l},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ce=null,xe=null;b.depth&&(xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?yi:Mi,Ce=b.stencil?Si:Nn);const Pe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:n};h=this.getBinding(),d=h.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new On(d.textureWidth,d.textureHeight,{format:kt,type:ln,depthTexture:new bo(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:n};l=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),A=new On(l.framebufferWidth,l.framebufferHeight,{format:kt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(k){for(let J=0;J<k.removed.length;J++){const se=k.removed[J],Ce=S.indexOf(se);Ce>=0&&(S[Ce]=null,v[Ce].disconnect(se))}for(let J=0;J<k.added.length;J++){const se=k.added[J];let Ce=S.indexOf(se);if(Ce===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(se),Ce=Pe;break}else if(S[Pe]===null){S[Pe]=se,Ce=Pe;break}if(Ce===-1)break}const xe=v[Ce];xe&&xe.connect(se)}}const G=new q,Z=new q;function ee(k,J,se){G.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const Ce=G.distanceTo(Z),xe=J.projectionMatrix.elements,Pe=se.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),ze=xe[14]/(xe[10]+1),it=(xe[9]+1)/xe[5],I=(xe[9]-1)/xe[5],Ve=(xe[8]-1)/xe[0],Ge=(Pe[8]+1)/Pe[0],Ze=qe*Ve,ue=qe*Ge,rt=Ce/(-Ve+Ge),Me=rt*-Ve;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Me),k.translateZ(rt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),xe[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Le=qe+rt,D=ze+rt,C=Ze-Me,H=ue+(Ce-Me),K=it*ze/D*Le,Q=I*ze/D*Le;k.projectionMatrix.makePerspective(C,H,K,Q,Le,D),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function he(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let J=k.near,se=k.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(se=p.depthFar)),R.near=_.near=M.near=J,R.far=_.far=M.far=se,(L!==R.near||F!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,F=R.far),R.layers.mask=k.layers.mask|6,M.layers.mask=R.layers.mask&3,_.layers.mask=R.layers.mask&5;const Ce=k.parent,xe=R.cameras;he(R,Ce);for(let Pe=0;Pe<xe.length;Pe++)he(xe[Pe],Ce);xe.length===2?ee(R,M,_):R.projectionMatrix.copy(M.projectionMatrix),be(k,R,Ce)};function be(k,J,se){se===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Fs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&l===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(R)},this.getCameraTexture=function(k){return g[k]};let Ue=null;function We(k,J){if(f=J.getViewerPose(u||a),m=J,f!==null){const se=f.views;l!==null&&(e.setRenderTargetFramebuffer(A,l.framebuffer),e.setRenderTarget(A));let Ce=!1;se.length!==R.cameras.length&&(R.cameras.length=0,Ce=!0);for(let ze=0;ze<se.length;ze++){const it=se[ze];let I=null;if(l!==null)I=l.getViewport(it);else{const Ge=h.getViewSubImage(d,it);I=Ge.viewport,ze===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let Ve=w[ze];Ve===void 0&&(Ve=new Gt,Ve.layers.enable(ze),Ve.viewport=new ut,w[ze]=Ve),Ve.matrix.fromArray(it.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(it.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(I.x,I.y,I.width,I.height),ze===0&&(R.matrix.copy(Ve.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ce===!0&&R.cameras.push(Ve)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ze=h.getDepthInformation(se[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<se.length;ze++){const it=se[ze].camera;if(it){let I=g[it];I||(I=new Eo,g[it]=I);const Ve=h.getCameraImage(it);I.sourceTexture=Ve}}}}for(let se=0;se<v.length;se++){const Ce=S[se],xe=v[se];Ce!==null&&xe!==void 0&&xe.update(Ce,J,u||a)}Ue&&Ue(k,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}const He=new Ao;He.setAnimationLoop(We),this.setAnimationLoop=function(k){Ue=k},this.dispose=function(){}}}const Rn=new cn,op=new ht;function lp(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,_o(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function r(p,g,b,E,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?n(p,g):g.isMeshToonMaterial?(n(p,g),h(p,g)):g.isMeshPhongMaterial?(n(p,g),f(p,g)):g.isMeshStandardMaterial?(n(p,g),d(p,g),g.isMeshPhysicalMaterial&&l(p,g,A)):g.isMeshMatcapMaterial?(n(p,g),m(p,g)):g.isMeshDepthMaterial?n(p,g):g.isMeshDistanceMaterial?(n(p,g),x(p,g)):g.isMeshNormalMaterial?n(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,b,E):g.isSpriteMaterial?u(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Tt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Tt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=e.get(g),E=b.envMap,A=b.envMapRotation;E&&(p.envMap.value=E,Rn.copy(A),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),p.envMapRotation.value.setFromMatrix4(op.makeRotationFromEuler(Rn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,b,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function f(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function l(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cp(s,e,t,i){let r={},n={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const A=E.program;i.uniformBlockBinding(b,A)}function u(b,E){let A=r[b.id];A===void 0&&(m(b),A=f(b),r[b.id]=A,b.addEventListener("dispose",p));const v=E.program;i.updateUBOMapping(b,v);const S=e.render.frame;n[b.id]!==S&&(d(b),n[b.id]=S)}function f(b){const E=h();b.__bindingPointIndex=E;const A=s.createBuffer(),v=b.__size,S=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,v,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,A),A}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=r[b.id],A=b.uniforms,v=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let S=0,y=A.length;S<y;S++){const T=Array.isArray(A[S])?A[S]:[A[S]];for(let M=0,_=T.length;M<_;M++){const w=T[M];if(l(w,S,M,v)===!0){const R=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let F=0;for(let N=0;N<L.length;N++){const z=L[N],W=x(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,R+F,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function l(b,E,A,v){const S=b.value,y=E+"_"+A;if(v[y]===void 0)return typeof S=="number"||typeof S=="boolean"?v[y]=S:v[y]=S.clone(),!0;{const T=v[y];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return v[y]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function m(b){const E=b.uniforms;let A=0;const v=16;for(let y=0,T=E.length;y<T;y++){const M=Array.isArray(E[y])?E[y]:[E[y]];for(let _=0,w=M.length;_<w;_++){const R=M[_],L=Array.isArray(R.value)?R.value:[R.value];for(let F=0,N=L.length;F<N;F++){const z=L[F],W=x(z),G=A%v,Z=G%W.boundary,ee=G+Z;A+=Z,ee!==0&&v-ee<W.storage&&(A+=v-ee),R.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=A,A+=W.storage}}}const S=A%v;return S>0&&(A+=v-S),b.__size=A,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(r[E.id]),delete r[E.id],delete n[E.id]}function g(){for(const b in r)s.deleteBuffer(r[b]);a=[],r={},n={}}return{bind:c,update:u,dispose:g}}const fp=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let en=null;function up(){return en===null&&(en=new gc(fp,32,32,Hs,li),en.minFilter=Nt,en.magFilter=Nt,en.wrapS=rn,en.wrapT=rn,en.generateMipmaps=!1,en.needsUpdate=!0),en}class dp{constructor(e={}){const{canvas:t=Hl(),context:i=null,depth:r=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let l;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=i.getContextAttributes().alpha}else l=a;const m=new Set([Ws,ks,Gs]),x=new Set([ln,Nn,_i,Si,zs,Vs]),p=new Uint32Array(4),g=new Int32Array(4);let b=null,E=null;const A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let y=!1;this._outputColorSpace=Ft;let T=0,M=0,_=null,w=-1,R=null;const L=new ut,F=new ut;let N=null;const z=new tt(0);let W=0,G=t.width,Z=t.height,ee=1,he=null,be=null;const Ue=new ut(0,0,G,Z),We=new ut(0,0,G,Z);let He=!1;const k=new yo;let J=!1,se=!1;const Ce=new ht,xe=new q,Pe=new ut,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function it(){return _===null?ee:1}let I=i;function Ve(P,O){return t.getContext(P,O)}try{const P={alpha:!0,depth:r,stencil:n,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Os}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const O="webgl2";if(I=Ve(O,P),I===null)throw Ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let Ge,Ze,ue,rt,Me,Le,D,C,H,K,Q,$,_e,ae,Ee,Se,te,re,Re,Ae,pe,Ie,U,fe;function oe(){Ge=new Sd(I),Ge.init(),Ie=new np(I,Ge),Ze=new ud(I,Ge,e,Ie),ue=new ep(I,Ge),Ze.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),rt=new bd(I),Me=new Gh,Le=new tp(I,Ge,ue,Me,Ze,Ie,rt),D=new hd(S),C=new _d(S),H=new Ac(I),U=new cd(I,H),K=new Md(I,H,rt,U),Q=new Td(I,K,H,rt),Re=new Ed(I,Ze,Le),Se=new dd(Me),$=new Vh(S,D,C,Ge,Ze,U,Se),_e=new lp(S,Me),ae=new kh,Ee=new Kh(Ge),re=new ld(S,D,C,ue,Q,l,c),te=new jh(S,Q,Ze),fe=new cp(I,rt,Ze,ue),Ae=new fd(I,Ge,rt),pe=new yd(I,Ge,rt),rt.programs=$.programs,S.capabilities=Ze,S.extensions=Ge,S.properties=Me,S.renderLists=ae,S.shadowMap=te,S.state=ue,S.info=rt}oe();const le=new ap(S,I);this.xr=le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=Ge.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ge.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(P){P!==void 0&&(ee=P,this.setSize(G,Z,!1))},this.getSize=function(P){return P.set(G,Z)},this.setSize=function(P,O,X=!0){if(le.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,Z=O,t.width=Math.floor(P*ee),t.height=Math.floor(O*ee),X===!0&&(t.style.width=P+"px",t.style.height=O+"px"),this.setViewport(0,0,P,O)},this.getDrawingBufferSize=function(P){return P.set(G*ee,Z*ee).floor()},this.setDrawingBufferSize=function(P,O,X){G=P,Z=O,ee=X,t.width=Math.floor(P*X),t.height=Math.floor(O*X),this.setViewport(0,0,P,O)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(Ue)},this.setViewport=function(P,O,X,Y){P.isVector4?Ue.set(P.x,P.y,P.z,P.w):Ue.set(P,O,X,Y),ue.viewport(L.copy(Ue).multiplyScalar(ee).round())},this.getScissor=function(P){return P.copy(We)},this.setScissor=function(P,O,X,Y){P.isVector4?We.set(P.x,P.y,P.z,P.w):We.set(P,O,X,Y),ue.scissor(F.copy(We).multiplyScalar(ee).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(P){ue.setScissorTest(He=P)},this.setOpaqueSort=function(P){he=P},this.setTransparentSort=function(P){be=P},this.getClearColor=function(P){return P.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(P=!0,O=!0,X=!0){let Y=0;if(P){let B=!1;if(_!==null){const ie=_.texture.format;B=m.has(ie)}if(B){const ie=_.texture.type,de=x.has(ie),ve=re.getClearColor(),me=re.getClearAlpha(),we=ve.r,De=ve.g,ye=ve.b;de?(p[0]=we,p[1]=De,p[2]=ye,p[3]=me,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=we,g[1]=De,g[2]=ye,g[3]=me,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}O&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),re.dispose(),ae.dispose(),Ee.dispose(),Me.dispose(),D.dispose(),C.dispose(),Q.dispose(),U.dispose(),fe.dispose(),$.dispose(),le.dispose(),le.removeEventListener("sessionstart",qs),le.removeEventListener("sessionend",$s),yn.stop()};function ne(P){P.preventDefault(),ua("WebGLRenderer: Context Lost."),y=!0}function j(){ua("WebGLRenderer: Context Restored."),y=!1;const P=rt.autoReset,O=te.enabled,X=te.autoUpdate,Y=te.needsUpdate,B=te.type;oe(),rt.autoReset=P,te.enabled=O,te.autoUpdate=X,te.needsUpdate=Y,te.type=B}function ge(P){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Fe(P){const O=P.target;O.removeEventListener("dispose",Fe),st(O)}function st(P){je(P),Me.remove(P)}function je(P){const O=Me.get(P).programs;O!==void 0&&(O.forEach(function(X){$.releaseProgram(X)}),P.isShaderMaterial&&$.releaseShaderCache(P))}this.renderBufferDirect=function(P,O,X,Y,B,ie){O===null&&(O=qe);const de=B.isMesh&&B.matrixWorld.determinant()<0,ve=Lo(P,O,X,Y,B);ue.setMaterial(Y,de);let me=X.index,we=1;if(Y.wireframe===!0){if(me=K.getWireframeAttribute(X),me===void 0)return;we=2}const De=X.drawRange,ye=X.attributes.position;let ke=De.start*we,Qe=(De.start+De.count)*we;ie!==null&&(ke=Math.max(ke,ie.start*we),Qe=Math.min(Qe,(ie.start+ie.count)*we)),me!==null?(ke=Math.max(ke,0),Qe=Math.min(Qe,me.count)):ye!=null&&(ke=Math.max(ke,0),Qe=Math.min(Qe,ye.count));const lt=Qe-ke;if(lt<0||lt===1/0)return;U.setup(B,Y,ve,X,me);let ct,nt=Ae;if(me!==null&&(ct=H.get(me),nt=pe,nt.setIndex(ct)),B.isMesh)Y.wireframe===!0?(ue.setLineWidth(Y.wireframeLinewidth*it()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(B.isLine){let Te=Y.linewidth;Te===void 0&&(Te=1),ue.setLineWidth(Te*it()),B.isLineSegments?nt.setMode(I.LINES):B.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else B.isPoints?nt.setMode(I.POINTS):B.isSprite&&nt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)bi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Te=B._multiDrawStarts,at=B._multiDrawCounts,$e=B._multiDrawCount,At=me?H.get(me).bytesPerElement:1,Bn=Me.get(Y).currentProgram.getUniforms();for(let wt=0;wt<$e;wt++)Bn.setValue(I,"_gl_DrawID",wt),nt.render(Te[wt]/At,at[wt])}else if(B.isInstancedMesh)nt.renderInstances(ke,lt,B.count);else if(X.isInstancedBufferGeometry){const Te=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,at=Math.min(X.instanceCount,Te);nt.renderInstances(ke,lt,at)}else nt.render(ke,lt)};function Wt(P,O,X){P.transparent===!0&&P.side===nn&&P.forceSinglePass===!1?(P.side=Tt,P.needsUpdate=!0,Ri(P,O,X),P.side=Sn,P.needsUpdate=!0,Ri(P,O,X),P.side=nn):Ri(P,O,X)}this.compile=function(P,O,X=null){X===null&&(X=P),E=Ee.get(X),E.init(O),v.push(E),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),P!==X&&P.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const Y=new Set;return P.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ie=B.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ve=ie[de];Wt(ve,X,B),Y.add(ve)}else Wt(ie,X,B),Y.add(ie)}),E=v.pop(),Y},this.compileAsync=function(P,O,X=null){const Y=this.compile(P,O,X);return new Promise(B=>{function ie(){if(Y.forEach(function(de){Me.get(de).currentProgram.isReady()&&Y.delete(de)}),Y.size===0){B(P);return}setTimeout(ie,10)}Ge.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ot=null;function Do(P){Ot&&Ot(P)}function qs(){yn.stop()}function $s(){yn.start()}const yn=new Ao;yn.setAnimationLoop(Do),typeof self!="undefined"&&yn.setContext(self),this.setAnimationLoop=function(P){Ot=P,le.setAnimationLoop(P),P===null?yn.stop():yn.start()},le.addEventListener("sessionstart",qs),le.addEventListener("sessionend",$s),this.render=function(P,O){if(O!==void 0&&O.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,O,_),E=Ee.get(P,v.length),E.init(O),v.push(E),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(Ce,Yt,O.reversedDepth),se=this.localClippingEnabled,J=Se.init(this.clippingPlanes,se),b=ae.get(P,A.length),b.init(),A.push(b),le.enabled===!0&&le.isPresenting===!0){const ie=S.xr.getDepthSensingMesh();ie!==null&&hr(ie,O,-1/0,S.sortObjects)}hr(P,O,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(he,be),ze=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ze&&re.addToRenderList(b,P),this.info.render.frame++,J===!0&&Se.beginShadows();const X=E.state.shadowsArray;te.render(X,P,O),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=b.opaque,B=b.transmissive;if(E.setupLights(),O.isArrayCamera){const ie=O.cameras;if(B.length>0)for(let de=0,ve=ie.length;de<ve;de++){const me=ie[de];Zs(Y,B,P,me)}ze&&re.render(P);for(let de=0,ve=ie.length;de<ve;de++){const me=ie[de];Ks(b,P,me,me.viewport)}}else B.length>0&&Zs(Y,B,P,O),ze&&re.render(P),Ks(b,P,O);_!==null&&M===0&&(Le.updateMultisampleRenderTarget(_),Le.updateRenderTargetMipmap(_)),P.isScene===!0&&P.onAfterRender(S,P,O),U.resetDefaultState(),w=-1,R=null,v.pop(),v.length>0?(E=v[v.length-1],J===!0&&Se.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function hr(P,O,X,Y){if(P.visible===!1)return;if(P.layers.test(O.layers)){if(P.isGroup)X=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(O);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||k.intersectsSprite(P)){Y&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ce);const de=Q.update(P),ve=P.material;ve.visible&&b.push(P,de,ve,X,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||k.intersectsObject(P))){const de=Q.update(P),ve=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pe.copy(de.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const me=de.groups;for(let we=0,De=me.length;we<De;we++){const ye=me[we],ke=ve[ye.materialIndex];ke&&ke.visible&&b.push(P,de,ke,X,Pe.z,ye)}}else ve.visible&&b.push(P,de,ve,X,Pe.z,null)}}const ie=P.children;for(let de=0,ve=ie.length;de<ve;de++)hr(ie[de],O,X,Y)}function Ks(P,O,X,Y){const{opaque:B,transmissive:ie,transparent:de}=P;E.setupLightsView(X),J===!0&&Se.setGlobalState(S.clippingPlanes,X),Y&&ue.viewport(L.copy(Y)),B.length>0&&Ci(B,O,X),ie.length>0&&Ci(ie,O,X),de.length>0&&Ci(de,O,X),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Zs(P,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;E.state.transmissionRenderTarget[Y.id]===void 0&&(E.state.transmissionRenderTarget[Y.id]=new On(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?li:ln,minFilter:In,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ie=E.state.transmissionRenderTarget[Y.id],de=Y.viewport||L;ie.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const ve=S.getRenderTarget(),me=S.getActiveCubeFace(),we=S.getActiveMipmapLevel();S.setRenderTarget(ie),S.getClearColor(z),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),ze&&re.render(X);const De=S.toneMapping;S.toneMapping=_n;const ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),J===!0&&Se.setGlobalState(S.clippingPlanes,Y),Ci(P,X,Y),Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Qe=0,lt=O.length;Qe<lt;Qe++){const ct=O[Qe],{object:nt,geometry:Te,material:at,group:$e}=ct;if(at.side===nn&&nt.layers.test(Y.layers)){const At=at.side;at.side=Tt,at.needsUpdate=!0,Js(nt,X,Y,Te,at,$e),at.side=At,at.needsUpdate=!0,ke=!0}}ke===!0&&(Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie))}S.setRenderTarget(ve,me,we),S.setClearColor(z,W),ye!==void 0&&(Y.viewport=ye),S.toneMapping=De}function Ci(P,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ie=P.length;B<ie;B++){const de=P[B],{object:ve,geometry:me,group:we}=de;let De=de.material;De.allowOverride===!0&&Y!==null&&(De=Y),ve.layers.test(X.layers)&&Js(ve,O,X,me,De,we)}}function Js(P,O,X,Y,B,ie){P.onBeforeRender(S,O,X,Y,B,ie),P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),B.onBeforeRender(S,O,X,Y,P,ie),B.transparent===!0&&B.side===nn&&B.forceSinglePass===!1?(B.side=Tt,B.needsUpdate=!0,S.renderBufferDirect(X,O,Y,B,P,ie),B.side=Sn,B.needsUpdate=!0,S.renderBufferDirect(X,O,Y,B,P,ie),B.side=nn):S.renderBufferDirect(X,O,Y,B,P,ie),P.onAfterRender(S,O,X,Y,B,ie)}function Ri(P,O,X){O.isScene!==!0&&(O=qe);const Y=Me.get(P),B=E.state.lights,ie=E.state.shadowsArray,de=B.state.version,ve=$.getParameters(P,B.state,ie,O,X),me=$.getProgramCacheKey(ve);let we=Y.programs;Y.environment=P.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(P.isMeshStandardMaterial?C:D).get(P.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&P.envMap===null?O.environmentRotation:P.envMapRotation,we===void 0&&(P.addEventListener("dispose",Fe),we=new Map,Y.programs=we);let De=we.get(me);if(De!==void 0){if(Y.currentProgram===De&&Y.lightsStateVersion===de)return Qs(P,ve),De}else ve.uniforms=$.getUniforms(P),P.onBeforeCompile(ve,S),De=$.acquireProgram(ve,me),we.set(me,De),Y.uniforms=ve.uniforms;const ye=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ye.clippingPlanes=Se.uniform),Qs(P,ve),Y.needsLights=Uo(P),Y.lightsStateVersion=de,Y.needsLights&&(ye.ambientLightColor.value=B.state.ambient,ye.lightProbe.value=B.state.probe,ye.directionalLights.value=B.state.directional,ye.directionalLightShadows.value=B.state.directionalShadow,ye.spotLights.value=B.state.spot,ye.spotLightShadows.value=B.state.spotShadow,ye.rectAreaLights.value=B.state.rectArea,ye.ltc_1.value=B.state.rectAreaLTC1,ye.ltc_2.value=B.state.rectAreaLTC2,ye.pointLights.value=B.state.point,ye.pointLightShadows.value=B.state.pointShadow,ye.hemisphereLights.value=B.state.hemi,ye.directionalShadowMap.value=B.state.directionalShadowMap,ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ye.spotShadowMap.value=B.state.spotShadowMap,ye.spotLightMatrix.value=B.state.spotLightMatrix,ye.spotLightMap.value=B.state.spotLightMap,ye.pointShadowMap.value=B.state.pointShadowMap,ye.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=De,Y.uniformsList=null,De}function js(P){if(P.uniformsList===null){const O=P.currentProgram.getUniforms();P.uniformsList=rr.seqWithValue(O.seq,P.uniforms)}return P.uniformsList}function Qs(P,O){const X=Me.get(P);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Lo(P,O,X,Y,B){O.isScene!==!0&&(O=qe),Le.resetTextureUnits();const ie=O.fog,de=Y.isMeshStandardMaterial?O.environment:null,ve=_===null?S.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:si,me=(Y.isMeshStandardMaterial?C:D).get(Y.envMap||de),we=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ye=!!X.morphAttributes.position,ke=!!X.morphAttributes.normal,Qe=!!X.morphAttributes.color;let lt=_n;Y.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(lt=S.toneMapping);const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=ct!==void 0?ct.length:0,Te=Me.get(Y),at=E.state.lights;if(J===!0&&(se===!0||P!==R)){const St=P===R&&Y.id===w;Se.setState(Y,P,St)}let $e=!1;Y.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==at.state.version||Te.outputColorSpace!==ve||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==me||Y.fog===!0&&Te.fog!==ie||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Se.numPlanes||Te.numIntersection!==Se.numIntersection)||Te.vertexAlphas!==we||Te.vertexTangents!==De||Te.morphTargets!==ye||Te.morphNormals!==ke||Te.morphColors!==Qe||Te.toneMapping!==lt||Te.morphTargetsCount!==nt)&&($e=!0):($e=!0,Te.__version=Y.version);let At=Te.currentProgram;$e===!0&&(At=Ri(Y,O,B));let Bn=!1,wt=!1,ui=!1;const ot=At.getUniforms(),yt=Te.uniforms;if(ue.useProgram(At.program)&&(Bn=!0,wt=!0,ui=!0),Y.id!==w&&(w=Y.id,wt=!0),Bn||R!==P){ue.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",P.projectionMatrix),ot.setValue(I,"viewMatrix",P.matrixWorldInverse);const bt=ot.map.cameraPosition;bt!==void 0&&bt.setValue(I,xe.setFromMatrixPosition(P.matrixWorld)),Ze.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ot.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,wt=!0,ui=!0)}if(B.isSkinnedMesh){ot.setOptional(I,B,"bindMatrix"),ot.setOptional(I,B,"bindMatrixInverse");const St=B.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ot.setValue(I,"boneTexture",St.boneTexture,Le))}B.isBatchedMesh&&(ot.setOptional(I,B,"batchingTexture"),ot.setValue(I,"batchingTexture",B._matricesTexture,Le),ot.setOptional(I,B,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",B._indirectTexture,Le),ot.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",B._colorsTexture,Le));const Lt=X.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&Re.update(B,X,At),(wt||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,ot.setValue(I,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(yt.envMap.value=me,yt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(yt.envMapIntensity.value=O.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=up()),wt&&(ot.setValue(I,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&Io(yt,ui),ie&&Y.fog===!0&&_e.refreshFogUniforms(yt,ie),_e.refreshMaterialUniforms(yt,Y,ee,Z,E.state.transmissionRenderTarget[P.id]),rr.upload(I,js(Te),yt,Le)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(rr.upload(I,js(Te),yt,Le),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ot.setValue(I,"center",B.center),ot.setValue(I,"modelViewMatrix",B.modelViewMatrix),ot.setValue(I,"normalMatrix",B.normalMatrix),ot.setValue(I,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const St=Y.uniformsGroups;for(let bt=0,pr=St.length;bt<pr;bt++){const bn=St[bt];fe.update(bn,At),fe.bind(bn,At)}}return At}function Io(P,O){P.ambientLightColor.needsUpdate=O,P.lightProbe.needsUpdate=O,P.directionalLights.needsUpdate=O,P.directionalLightShadows.needsUpdate=O,P.pointLights.needsUpdate=O,P.pointLightShadows.needsUpdate=O,P.spotLights.needsUpdate=O,P.spotLightShadows.needsUpdate=O,P.rectAreaLights.needsUpdate=O,P.hemisphereLights.needsUpdate=O}function Uo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(P,O,X){const Y=Me.get(P);Y.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Me.get(P.texture).__webglTexture=O,Me.get(P.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,O){const X=Me.get(P);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Fo=I.createFramebuffer();this.setRenderTarget=function(P,O=0,X=0){_=P,T=O,M=X;let Y=!0,B=null,ie=!1,de=!1;if(P){const me=Me.get(P);if(me.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(me.__webglFramebuffer===void 0)Le.setupRenderTarget(P);else if(me.__hasExternalTextures)Le.rebindTextures(P,Me.get(P.texture).__webglTexture,Me.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ye=P.depthTexture;if(me.__boundDepthTexture!==ye){if(ye!==null&&Me.has(ye)&&(P.width!==ye.image.width||P.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(P)}}const we=P.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(de=!0);const De=Me.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(De[O])?B=De[O][X]:B=De[O],ie=!0):P.samples>0&&Le.useMultisampledRTT(P)===!1?B=Me.get(P).__webglMultisampledFramebuffer:Array.isArray(De)?B=De[X]:B=De,L.copy(P.viewport),F.copy(P.scissor),N=P.scissorTest}else L.copy(Ue).multiplyScalar(ee).floor(),F.copy(We).multiplyScalar(ee).floor(),N=He;if(X!==0&&(B=Fo),ue.bindFramebuffer(I.FRAMEBUFFER,B)&&Y&&ue.drawBuffers(P,B),ue.viewport(L),ue.scissor(F),ue.setScissorTest(N),ie){const me=Me.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,X)}else if(de){const me=O;for(let we=0;we<P.textures.length;we++){const De=Me.get(P.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,De.__webglTexture,X,me)}}else if(P!==null&&X!==0){const me=Me.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(P,O,X,Y,B,ie,de,ve=0){if(!(P&&P.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){ue.bindFramebuffer(I.FRAMEBUFFER,me);try{const we=P.textures[ve],De=we.format,ye=we.type;if(!Ze.textureFormatReadable(De)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ye)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=P.width-Y&&X>=0&&X<=P.height-B&&(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),I.readPixels(O,X,Y,B,Ie.convert(De),Ie.convert(ye),ie))}finally{const we=_!==null?Me.get(_).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(P,O,X,Y,B,ie,de,ve=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(O>=0&&O<=P.width-Y&&X>=0&&X<=P.height-B){ue.bindFramebuffer(I.FRAMEBUFFER,me);const we=P.textures[ve],De=we.format,ye=we.type;if(!Ze.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),I.readPixels(O,X,Y,B,Ie.convert(De),Ie.convert(ye),0);const Qe=_!==null?Me.get(_).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Qe);const lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await kl(I,lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer(ke),I.deleteSync(lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,O=null,X=0){const Y=Math.pow(2,-X),B=Math.floor(P.image.width*Y),ie=Math.floor(P.image.height*Y),de=O!==null?O.x:0,ve=O!==null?O.y:0;Le.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,de,ve,B,ie),ue.unbindTexture()};const No=I.createFramebuffer(),Oo=I.createFramebuffer();this.copyTextureToTexture=function(P,O,X=null,Y=null,B=0,ie=null){ie===null&&(B!==0?(bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=B,B=0):ie=0);let de,ve,me,we,De,ye,ke,Qe,lt;const ct=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(X!==null)de=X.max.x-X.min.x,ve=X.max.y-X.min.y,me=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,De=X.min.y,ye=X.isBox3?X.min.z:0;else{const Lt=Math.pow(2,-B);de=Math.floor(ct.width*Lt),ve=Math.floor(ct.height*Lt),P.isDataArrayTexture?me=ct.depth:P.isData3DTexture?me=Math.floor(ct.depth*Lt):me=1,we=0,De=0,ye=0}Y!==null?(ke=Y.x,Qe=Y.y,lt=Y.z):(ke=0,Qe=0,lt=0);const nt=Ie.convert(O.format),Te=Ie.convert(O.type);let at;O.isData3DTexture?(Le.setTexture3D(O,0),at=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Le.setTexture2DArray(O,0),at=I.TEXTURE_2D_ARRAY):(Le.setTexture2D(O,0),at=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),At=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=I.getParameter(I.UNPACK_SKIP_PIXELS),wt=I.getParameter(I.UNPACK_SKIP_ROWS),ui=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ye);const ot=P.isDataArrayTexture||P.isData3DTexture,yt=O.isDataArrayTexture||O.isData3DTexture;if(P.isDepthTexture){const Lt=Me.get(P),St=Me.get(O),bt=Me.get(Lt.__renderTarget),pr=Me.get(St.__renderTarget);ue.bindFramebuffer(I.READ_FRAMEBUFFER,bt.__webglFramebuffer),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let bn=0;bn<me;bn++)ot&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(P).__webglTexture,B,ye+bn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,ie,lt+bn)),I.blitFramebuffer(we,De,de,ve,ke,Qe,de,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||P.isRenderTargetTexture||Me.has(P)){const Lt=Me.get(P),St=Me.get(O);ue.bindFramebuffer(I.READ_FRAMEBUFFER,No),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,Oo);for(let bt=0;bt<me;bt++)ot?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,B,ye+bt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,B),yt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.__webglTexture,ie,lt+bt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,St.__webglTexture,ie),B!==0?I.blitFramebuffer(we,De,de,ve,ke,Qe,de,ve,I.COLOR_BUFFER_BIT,I.NEAREST):yt?I.copyTexSubImage3D(at,ie,ke,Qe,lt+bt,we,De,de,ve):I.copyTexSubImage2D(at,ie,ke,Qe,we,De,de,ve);ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else yt?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(at,ie,ke,Qe,lt,de,ve,me,nt,Te,ct.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(at,ie,ke,Qe,lt,de,ve,me,nt,ct.data):I.texSubImage3D(at,ie,ke,Qe,lt,de,ve,me,nt,Te,ct):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,ke,Qe,de,ve,nt,Te,ct.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,ke,Qe,ct.width,ct.height,nt,ct.data):I.texSubImage2D(I.TEXTURE_2D,ie,ke,Qe,de,ve,nt,Te,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ui),ie===0&&O.generateMipmaps&&I.generateMipmap(at),ue.unbindTexture()},this.initRenderTarget=function(P){Me.get(P).__webglFramebuffer===void 0&&Le.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Le.setTextureCube(P,0):P.isData3DTexture?Le.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Le.setTexture2DArray(P,0):Le.setTexture2D(P,0),ue.unbindTexture()},this.resetState=function(){T=0,M=0,_=null,ue.reset(),U.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var qr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function hp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Un={exports:{}};/*!
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
 */(function(s,e){(function(i,r){s.exports=r()})(qr,function(){return function(t){var i={};function r(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=i,r.d=function(n,a,o){r.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:o})},r.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,a){if(a&1&&(n=r(n)),a&8||a&4&&typeof n=="object"&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),a&2&&typeof n!="string")for(var c in n)r.d(o,c,function(u){return n[u]}.bind(null,c));return o},r.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(a,"a",a),a},r.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},r.p="",r(r.s=20)}([function(t,i){var r={};t.exports=r,function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(a,o){var c,u;typeof o=="boolean"?(c=2,u=o):(c=1,u=!0);for(var f=c;f<arguments.length;f++){var h=arguments[f];if(h)for(var d in h)u&&h[d]&&h[d].constructor===Object&&(!a[d]||a[d].constructor===Object)?(a[d]=a[d]||{},r.extend(a[d],u,h[d])):a[d]=h[d]}return a},r.clone=function(a,o){return r.extend({},o,a)},r.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var c in a)o.push(c);return o},r.values=function(a){var o=[];if(Object.keys){for(var c=Object.keys(a),u=0;u<c.length;u++)o.push(a[c[u]]);return o}for(var f in a)o.push(a[f]);return o},r.get=function(a,o,c,u){o=o.split(".").slice(c,u);for(var f=0;f<o.length;f+=1)a=a[o[f]];return a},r.set=function(a,o,c,u,f){var h=o.split(".").slice(u,f);return r.get(a,o,0,-1)[h[h.length-1]]=c,c},r.shuffle=function(a){for(var o=a.length-1;o>0;o--){var c=Math.floor(r.random()*(o+1)),u=a[o];a[o]=a[c],a[c]=u}return a},r.choose=function(a){return a[Math.floor(r.random()*a.length)]},r.isElement=function(a){return typeof HTMLElement!="undefined"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},r.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},r.isFunction=function(a){return typeof a=="function"},r.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},r.isString=function(a){return toString.call(a)==="[object String]"},r.clamp=function(a,o,c){return a<o?o:a>c?c:a},r.sign=function(a){return a<0?-1:1},r.now=function(){if(typeof window!="undefined"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(a,o){return a=typeof a!="undefined"?a:0,o=typeof o!="undefined"?o:1,a+n()*(o-a)};var n=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[a]||(r.warn(a),r._warnedOnce[a]=!0)},r.deprecated=function(a,o,c){a[o]=r.chain(function(){r.warnOnce("\u{1F505} deprecated \u{1F505}",c)},a[o])},r.nextId=function(){return r._nextId++},r.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var c=0;c<a.length;c++)if(a[c]===o)return c;return-1},r.map=function(a,o){if(a.map)return a.map(o);for(var c=[],u=0;u<a.length;u+=1)c.push(o(a[u]));return c},r.topologicalSort=function(a){var o=[],c=[],u=[];for(var f in a)!c[f]&&!u[f]&&r._topologicalSort(f,c,u,a,o);return o},r._topologicalSort=function(a,o,c,u,f){var h=u[a]||[];c[a]=!0;for(var d=0;d<h.length;d+=1){var l=h[d];c[l]||o[l]||r._topologicalSort(l,o,c,u,f)}c[a]=!1,o[a]=!0,f.push(a)},r.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var c=arguments[o];c._chained?a.push.apply(a,c._chained):a.push(c)}var u=function(){for(var f,h=new Array(arguments.length),d=0,l=arguments.length;d<l;d++)h[d]=arguments[d];for(d=0;d<a.length;d+=1){var m=a[d].apply(f,h);typeof m!="undefined"&&(f=m)}return f};return u._chained=a,u},r.chainPathBefore=function(a,o,c){return r.set(a,o,r.chain(c,r.get(a,o)))},r.chainPathAfter=function(a,o,c){return r.set(a,o,r.chain(r.get(a,o),c))},r.setDecomp=function(a){r._decomp=a},r.getDecomp=function(){var a=r._decomp;try{!a&&typeof window!="undefined"&&(a=window.decomp),!a&&typeof qr!="undefined"&&(a=qr.decomp)}catch{a=null}return a}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){var a={min:{x:0,y:0},max:{x:0,y:0}};return n&&r.update(a,n),a},r.update=function(n,a,o){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var c=0;c<a.length;c++){var u=a[c];u.x>n.max.x&&(n.max.x=u.x),u.x<n.min.x&&(n.min.x=u.x),u.y>n.max.y&&(n.max.y=u.y),u.y<n.min.y&&(n.min.y=u.y)}o&&(o.x>0?n.max.x+=o.x:n.min.x+=o.x,o.y>0?n.max.y+=o.y:n.min.y+=o.y)},r.contains=function(n,a){return a.x>=n.min.x&&a.x<=n.max.x&&a.y>=n.min.y&&a.y<=n.max.y},r.overlaps=function(n,a){return n.min.x<=a.max.x&&n.max.x>=a.min.x&&n.max.y>=a.min.y&&n.min.y<=a.max.y},r.translate=function(n,a){n.min.x+=a.x,n.max.x+=a.x,n.min.y+=a.y,n.max.y+=a.y},r.shift=function(n,a){var o=n.max.x-n.min.x,c=n.max.y-n.min.y;n.min.x=a.x,n.max.x=a.x+o,n.min.y=a.y,n.max.y=a.y+c}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n,a){return{x:n||0,y:a||0}},r.clone=function(n){return{x:n.x,y:n.y}},r.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},r.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},r.rotate=function(n,a,o){var c=Math.cos(a),u=Math.sin(a);o||(o={});var f=n.x*c-n.y*u;return o.y=n.x*u+n.y*c,o.x=f,o},r.rotateAbout=function(n,a,o,c){var u=Math.cos(a),f=Math.sin(a);c||(c={});var h=o.x+((n.x-o.x)*u-(n.y-o.y)*f);return c.y=o.y+((n.x-o.x)*f+(n.y-o.y)*u),c.x=h,c},r.normalise=function(n){var a=r.magnitude(n);return a===0?{x:0,y:0}:{x:n.x/a,y:n.y/a}},r.dot=function(n,a){return n.x*a.x+n.y*a.y},r.cross=function(n,a){return n.x*a.y-n.y*a.x},r.cross3=function(n,a,o){return(a.x-n.x)*(o.y-n.y)-(a.y-n.y)*(o.x-n.x)},r.add=function(n,a,o){return o||(o={}),o.x=n.x+a.x,o.y=n.y+a.y,o},r.sub=function(n,a,o){return o||(o={}),o.x=n.x-a.x,o.y=n.y-a.y,o},r.mult=function(n,a){return{x:n.x*a,y:n.y*a}},r.div=function(n,a){return{x:n.x/a,y:n.y/a}},r.perp=function(n,a){return a=a===!0?-1:1,{x:a*-n.y,y:a*n.x}},r.neg=function(n){return{x:-n.x,y:-n.y}},r.angle=function(n,a){return Math.atan2(a.y-n.y,a.x-n.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}()},function(t,i,r){var n={};t.exports=n;var a=r(2),o=r(0);(function(){n.create=function(c,u){for(var f=[],h=0;h<c.length;h++){var d=c[h],l={x:d.x,y:d.y,index:h,body:u,isInternal:!1};f.push(l)}return f},n.fromPath=function(c,u){var f=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,h=[];return c.replace(f,function(d,l,m){h.push({x:parseFloat(l),y:parseFloat(m)})}),n.create(h,u)},n.centre=function(c){for(var u=n.area(c,!0),f={x:0,y:0},h,d,l,m=0;m<c.length;m++)l=(m+1)%c.length,h=a.cross(c[m],c[l]),d=a.mult(a.add(c[m],c[l]),h),f=a.add(f,d);return a.div(f,6*u)},n.mean=function(c){for(var u={x:0,y:0},f=0;f<c.length;f++)u.x+=c[f].x,u.y+=c[f].y;return a.div(u,c.length)},n.area=function(c,u){for(var f=0,h=c.length-1,d=0;d<c.length;d++)f+=(c[h].x-c[d].x)*(c[h].y+c[d].y),h=d;return u?f/2:Math.abs(f)/2},n.inertia=function(c,u){for(var f=0,h=0,d=c,l,m,x=0;x<d.length;x++)m=(x+1)%d.length,l=Math.abs(a.cross(d[m],d[x])),f+=l*(a.dot(d[m],d[m])+a.dot(d[m],d[x])+a.dot(d[x],d[x])),h+=l;return u/6*(f/h)},n.translate=function(c,u,f){f=typeof f!="undefined"?f:1;var h=c.length,d=u.x*f,l=u.y*f,m;for(m=0;m<h;m++)c[m].x+=d,c[m].y+=l;return c},n.rotate=function(c,u,f){if(u!==0){var h=Math.cos(u),d=Math.sin(u),l=f.x,m=f.y,x=c.length,p,g,b,E;for(E=0;E<x;E++)p=c[E],g=p.x-l,b=p.y-m,p.x=l+(g*h-b*d),p.y=m+(g*d+b*h);return c}},n.contains=function(c,u){for(var f=u.x,h=u.y,d=c.length,l=c[d-1],m,x=0;x<d;x++){if(m=c[x],(f-l.x)*(m.y-l.y)+(h-l.y)*(l.x-m.x)>0)return!1;l=m}return!0},n.scale=function(c,u,f,h){if(u===1&&f===1)return c;h=h||n.centre(c);for(var d,l,m=0;m<c.length;m++)d=c[m],l=a.sub(d,h),c[m].x=h.x+l.x*u,c[m].y=h.y+l.y*f;return c},n.chamfer=function(c,u,f,h,d){typeof u=="number"?u=[u]:u=u||[8],f=typeof f!="undefined"?f:-1,h=h||2,d=d||14;for(var l=[],m=0;m<c.length;m++){var x=c[m-1>=0?m-1:c.length-1],p=c[m],g=c[(m+1)%c.length],b=u[m<u.length?m:u.length-1];if(b===0){l.push(p);continue}var E=a.normalise({x:p.y-x.y,y:x.x-p.x}),A=a.normalise({x:g.y-p.y,y:p.x-g.x}),v=Math.sqrt(2*Math.pow(b,2)),S=a.mult(o.clone(E),b),y=a.normalise(a.mult(a.add(E,A),.5)),T=a.sub(p,a.mult(y,v)),M=f;f===-1&&(M=Math.pow(b,.32)*1.75),M=o.clamp(M,h,d),M%2===1&&(M+=1);for(var _=Math.acos(a.dot(E,A)),w=_/M,R=0;R<M;R++)l.push(a.add(a.rotate(S,w*R),T))}return l},n.clockwiseSort=function(c){var u=n.mean(c);return c.sort(function(f,h){return a.angle(u,f)-a.angle(u,h)}),c},n.isConvex=function(c){var u=0,f=c.length,h,d,l,m;if(f<3)return null;for(h=0;h<f;h++)if(d=(h+1)%f,l=(h+2)%f,m=(c[d].x-c[h].x)*(c[l].y-c[d].y),m-=(c[d].y-c[h].y)*(c[l].x-c[d].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},n.hull=function(c){var u=[],f=[],h,d;for(c=c.slice(0),c.sort(function(l,m){var x=l.x-m.x;return x!==0?x:l.y-m.y}),d=0;d<c.length;d+=1){for(h=c[d];f.length>=2&&a.cross3(f[f.length-2],f[f.length-1],h)<=0;)f.pop();f.push(h)}for(d=c.length-1;d>=0;d-=1){for(h=c[d];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],h)<=0;)u.pop();u.push(h)}return u.pop(),f.pop(),u.concat(f)}})()},function(t,i,r){var n={};t.exports=n;var a=r(3),o=r(2),c=r(7),u=r(0),f=r(1),h=r(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(l){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},x=u.extend(m,l);return d(x,l),x},n.nextGroup=function(l){return l?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var d=function(l,m){m=m||{},n.set(l,{bounds:l.bounds||f.create(l.vertices),positionPrev:l.positionPrev||o.clone(l.position),anglePrev:l.anglePrev||l.angle,vertices:l.vertices,parts:l.parts||[l],isStatic:l.isStatic,isSleeping:l.isSleeping,parent:l.parent||l}),a.rotate(l.vertices,l.angle,l.position),h.rotate(l.axes,l.angle),f.update(l.bounds,l.vertices,l.velocity),n.set(l,{axes:m.axes||l.axes,area:m.area||l.area,mass:m.mass||l.mass,inertia:m.inertia||l.inertia});var x=l.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=l.isStatic?"#555":"#ccc",g=l.isStatic&&l.render.fillStyle===null?1:0;l.render.fillStyle=l.render.fillStyle||x,l.render.strokeStyle=l.render.strokeStyle||p,l.render.lineWidth=l.render.lineWidth||g,l.render.sprite.xOffset+=-(l.bounds.min.x-l.position.x)/(l.bounds.max.x-l.bounds.min.x),l.render.sprite.yOffset+=-(l.bounds.min.y-l.position.y)/(l.bounds.max.y-l.bounds.min.y)};n.set=function(l,m,x){var p;typeof m=="string"&&(p=m,m={},m[p]=x);for(p in m)if(!!Object.prototype.hasOwnProperty.call(m,p))switch(x=m[p],p){case"isStatic":n.setStatic(l,x);break;case"isSleeping":c.set(l,x);break;case"mass":n.setMass(l,x);break;case"density":n.setDensity(l,x);break;case"inertia":n.setInertia(l,x);break;case"vertices":n.setVertices(l,x);break;case"position":n.setPosition(l,x);break;case"angle":n.setAngle(l,x);break;case"velocity":n.setVelocity(l,x);break;case"angularVelocity":n.setAngularVelocity(l,x);break;case"speed":n.setSpeed(l,x);break;case"angularSpeed":n.setAngularSpeed(l,x);break;case"parts":n.setParts(l,x);break;case"centre":n.setCentre(l,x);break;default:l[p]=x}},n.setStatic=function(l,m){for(var x=0;x<l.parts.length;x++){var p=l.parts[x];m?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=m}},n.setMass=function(l,m){var x=l.inertia/(l.mass/6);l.inertia=x*(m/6),l.inverseInertia=1/l.inertia,l.mass=m,l.inverseMass=1/l.mass,l.density=l.mass/l.area},n.setDensity=function(l,m){n.setMass(l,m*l.area),l.density=m},n.setInertia=function(l,m){l.inertia=m,l.inverseInertia=1/l.inertia},n.setVertices=function(l,m){m[0].body===l?l.vertices=m:l.vertices=a.create(m,l),l.axes=h.fromVertices(l.vertices),l.area=a.area(l.vertices),n.setMass(l,l.density*l.area);var x=a.centre(l.vertices);a.translate(l.vertices,x,-1),n.setInertia(l,n._inertiaScale*a.inertia(l.vertices,l.mass)),a.translate(l.vertices,l.position),f.update(l.bounds,l.vertices,l.velocity)},n.setParts=function(l,m,x){var p;for(m=m.slice(0),l.parts.length=0,l.parts.push(l),l.parent=l,p=0;p<m.length;p++){var g=m[p];g!==l&&(g.parent=l,l.parts.push(g))}if(l.parts.length!==1){if(x=typeof x!="undefined"?x:!0,x){var b=[];for(p=0;p<m.length;p++)b=b.concat(m[p].vertices);a.clockwiseSort(b);var E=a.hull(b),A=a.centre(E);n.setVertices(l,E),a.translate(l.vertices,A)}var v=n._totalProperties(l);l.area=v.area,l.parent=l,l.position.x=v.centre.x,l.position.y=v.centre.y,l.positionPrev.x=v.centre.x,l.positionPrev.y=v.centre.y,n.setMass(l,v.mass),n.setInertia(l,v.inertia),n.setPosition(l,v.centre)}},n.setCentre=function(l,m,x){x?(l.positionPrev.x+=m.x,l.positionPrev.y+=m.y,l.position.x+=m.x,l.position.y+=m.y):(l.positionPrev.x=m.x-(l.position.x-l.positionPrev.x),l.positionPrev.y=m.y-(l.position.y-l.positionPrev.y),l.position.x=m.x,l.position.y=m.y)},n.setPosition=function(l,m,x){var p=o.sub(m,l.position);x?(l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.velocity.x=p.x,l.velocity.y=p.y,l.speed=o.magnitude(p)):(l.positionPrev.x+=p.x,l.positionPrev.y+=p.y);for(var g=0;g<l.parts.length;g++){var b=l.parts[g];b.position.x+=p.x,b.position.y+=p.y,a.translate(b.vertices,p),f.update(b.bounds,b.vertices,l.velocity)}},n.setAngle=function(l,m,x){var p=m-l.angle;x?(l.anglePrev=l.angle,l.angularVelocity=p,l.angularSpeed=Math.abs(p)):l.anglePrev+=p;for(var g=0;g<l.parts.length;g++){var b=l.parts[g];b.angle+=p,a.rotate(b.vertices,p,l.position),h.rotate(b.axes,p),f.update(b.bounds,b.vertices,l.velocity),g>0&&o.rotateAbout(b.position,p,l.position,b.position)}},n.setVelocity=function(l,m){var x=l.deltaTime/n._baseDelta;l.positionPrev.x=l.position.x-m.x*x,l.positionPrev.y=l.position.y-m.y*x,l.velocity.x=(l.position.x-l.positionPrev.x)/x,l.velocity.y=(l.position.y-l.positionPrev.y)/x,l.speed=o.magnitude(l.velocity)},n.getVelocity=function(l){var m=n._baseDelta/l.deltaTime;return{x:(l.position.x-l.positionPrev.x)*m,y:(l.position.y-l.positionPrev.y)*m}},n.getSpeed=function(l){return o.magnitude(n.getVelocity(l))},n.setSpeed=function(l,m){n.setVelocity(l,o.mult(o.normalise(n.getVelocity(l)),m))},n.setAngularVelocity=function(l,m){var x=l.deltaTime/n._baseDelta;l.anglePrev=l.angle-m*x,l.angularVelocity=(l.angle-l.anglePrev)/x,l.angularSpeed=Math.abs(l.angularVelocity)},n.getAngularVelocity=function(l){return(l.angle-l.anglePrev)*n._baseDelta/l.deltaTime},n.getAngularSpeed=function(l){return Math.abs(n.getAngularVelocity(l))},n.setAngularSpeed=function(l,m){n.setAngularVelocity(l,u.sign(n.getAngularVelocity(l))*m)},n.translate=function(l,m,x){n.setPosition(l,o.add(l.position,m),x)},n.rotate=function(l,m,x,p){if(!x)n.setAngle(l,l.angle+m,p);else{var g=Math.cos(m),b=Math.sin(m),E=l.position.x-x.x,A=l.position.y-x.y;n.setPosition(l,{x:x.x+(E*g-A*b),y:x.y+(E*b+A*g)},p),n.setAngle(l,l.angle+m,p)}},n.scale=function(l,m,x,p){var g=0,b=0;p=p||l.position;for(var E=0;E<l.parts.length;E++){var A=l.parts[E];a.scale(A.vertices,m,x,p),A.axes=h.fromVertices(A.vertices),A.area=a.area(A.vertices),n.setMass(A,l.density*A.area),a.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),n.setInertia(A,n._inertiaScale*a.inertia(A.vertices,A.mass)),a.translate(A.vertices,{x:A.position.x,y:A.position.y}),E>0&&(g+=A.area,b+=A.inertia),A.position.x=p.x+(A.position.x-p.x)*m,A.position.y=p.y+(A.position.y-p.y)*x,f.update(A.bounds,A.vertices,l.velocity)}l.parts.length>1&&(l.area=g,l.isStatic||(n.setMass(l,l.density*g),n.setInertia(l,b))),l.circleRadius&&(m===x?l.circleRadius*=m:l.circleRadius=null)},n.update=function(l,m){m=(typeof m!="undefined"?m:1e3/60)*l.timeScale;var x=m*m,p=n._timeCorrection?m/(l.deltaTime||m):1,g=1-l.frictionAir*(m/u._baseDelta),b=(l.position.x-l.positionPrev.x)*p,E=(l.position.y-l.positionPrev.y)*p;l.velocity.x=b*g+l.force.x/l.mass*x,l.velocity.y=E*g+l.force.y/l.mass*x,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.position.x+=l.velocity.x,l.position.y+=l.velocity.y,l.deltaTime=m,l.angularVelocity=(l.angle-l.anglePrev)*g*p+l.torque/l.inertia*x,l.anglePrev=l.angle,l.angle+=l.angularVelocity;for(var A=0;A<l.parts.length;A++){var v=l.parts[A];a.translate(v.vertices,l.velocity),A>0&&(v.position.x+=l.velocity.x,v.position.y+=l.velocity.y),l.angularVelocity!==0&&(a.rotate(v.vertices,l.angularVelocity,l.position),h.rotate(v.axes,l.angularVelocity),A>0&&o.rotateAbout(v.position,l.angularVelocity,l.position,v.position)),f.update(v.bounds,v.vertices,l.velocity)}},n.updateVelocities=function(l){var m=n._baseDelta/l.deltaTime,x=l.velocity;x.x=(l.position.x-l.positionPrev.x)*m,x.y=(l.position.y-l.positionPrev.y)*m,l.speed=Math.sqrt(x.x*x.x+x.y*x.y),l.angularVelocity=(l.angle-l.anglePrev)*m,l.angularSpeed=Math.abs(l.angularVelocity)},n.applyForce=function(l,m,x){var p={x:m.x-l.position.x,y:m.y-l.position.y};l.force.x+=x.x,l.force.y+=x.y,l.torque+=p.x*x.y-p.y*x.x},n._totalProperties=function(l){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},x=l.parts.length===1?0:1;x<l.parts.length;x++){var p=l.parts[x],g=p.mass!==1/0?p.mass:1;m.mass+=g,m.area+=p.area,m.inertia+=p.inertia,m.centre=o.add(m.centre,o.mult(p.position,g))}return m.centre=o.div(m.centre,m.mass),m}})()},function(t,i,r){var n={};t.exports=n;var a=r(0);(function(){n.on=function(o,c,u){for(var f=c.split(" "),h,d=0;d<f.length;d++)h=f[d],o.events=o.events||{},o.events[h]=o.events[h]||[],o.events[h].push(u);return u},n.off=function(o,c,u){if(!c){o.events={};return}typeof c=="function"&&(u=c,c=a.keys(o.events).join(" "));for(var f=c.split(" "),h=0;h<f.length;h++){var d=o.events[f[h]],l=[];if(u&&d)for(var m=0;m<d.length;m++)d[m]!==u&&l.push(d[m]);o.events[f[h]]=l}},n.trigger=function(o,c,u){var f,h,d,l,m=o.events;if(m&&a.keys(m).length>0){u||(u={}),f=c.split(" ");for(var x=0;x<f.length;x++)if(h=f[x],d=m[h],d){l=a.clone(u,!1),l.name=h,l.source=o;for(var p=0;p<d.length;p++)d[p].apply(o,[l])}}}})()},function(t,i,r){var n={};t.exports=n;var a=r(5),o=r(0),c=r(1),u=r(4);(function(){n.create=function(f){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},f)},n.setModified=function(f,h,d,l){if(f.isModified=h,h&&f.cache&&(f.cache.allBodies=null,f.cache.allConstraints=null,f.cache.allComposites=null),d&&f.parent&&n.setModified(f.parent,h,d,l),l)for(var m=0;m<f.composites.length;m++){var x=f.composites[m];n.setModified(x,h,d,l)}},n.add=function(f,h){var d=[].concat(h);a.trigger(f,"beforeAdd",{object:h});for(var l=0;l<d.length;l++){var m=d[l];switch(m.type){case"body":if(m.parent!==m){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(f,m);break;case"constraint":n.addConstraint(f,m);break;case"composite":n.addComposite(f,m);break;case"mouseConstraint":n.addConstraint(f,m.constraint);break}}return a.trigger(f,"afterAdd",{object:h}),f},n.remove=function(f,h,d){var l=[].concat(h);a.trigger(f,"beforeRemove",{object:h});for(var m=0;m<l.length;m++){var x=l[m];switch(x.type){case"body":n.removeBody(f,x,d);break;case"constraint":n.removeConstraint(f,x,d);break;case"composite":n.removeComposite(f,x,d);break;case"mouseConstraint":n.removeConstraint(f,x.constraint);break}}return a.trigger(f,"afterRemove",{object:h}),f},n.addComposite=function(f,h){return f.composites.push(h),h.parent=f,n.setModified(f,!0,!0,!1),f},n.removeComposite=function(f,h,d){var l=o.indexOf(f.composites,h);if(l!==-1){var m=n.allBodies(h);n.removeCompositeAt(f,l);for(var x=0;x<m.length;x++)m[x].sleepCounter=0}if(d)for(var x=0;x<f.composites.length;x++)n.removeComposite(f.composites[x],h,!0);return f},n.removeCompositeAt=function(f,h){return f.composites.splice(h,1),n.setModified(f,!0,!0,!1),f},n.addBody=function(f,h){return f.bodies.push(h),n.setModified(f,!0,!0,!1),f},n.removeBody=function(f,h,d){var l=o.indexOf(f.bodies,h);if(l!==-1&&(n.removeBodyAt(f,l),h.sleepCounter=0),d)for(var m=0;m<f.composites.length;m++)n.removeBody(f.composites[m],h,!0);return f},n.removeBodyAt=function(f,h){return f.bodies.splice(h,1),n.setModified(f,!0,!0,!1),f},n.addConstraint=function(f,h){return f.constraints.push(h),n.setModified(f,!0,!0,!1),f},n.removeConstraint=function(f,h,d){var l=o.indexOf(f.constraints,h);if(l!==-1&&n.removeConstraintAt(f,l),d)for(var m=0;m<f.composites.length;m++)n.removeConstraint(f.composites[m],h,!0);return f},n.removeConstraintAt=function(f,h){return f.constraints.splice(h,1),n.setModified(f,!0,!0,!1),f},n.clear=function(f,h,d){if(d)for(var l=0;l<f.composites.length;l++)n.clear(f.composites[l],h,!0);return h?f.bodies=f.bodies.filter(function(m){return m.isStatic}):f.bodies.length=0,f.constraints.length=0,f.composites.length=0,n.setModified(f,!0,!0,!1),f},n.allBodies=function(f){if(f.cache&&f.cache.allBodies)return f.cache.allBodies;for(var h=[].concat(f.bodies),d=0;d<f.composites.length;d++)h=h.concat(n.allBodies(f.composites[d]));return f.cache&&(f.cache.allBodies=h),h},n.allConstraints=function(f){if(f.cache&&f.cache.allConstraints)return f.cache.allConstraints;for(var h=[].concat(f.constraints),d=0;d<f.composites.length;d++)h=h.concat(n.allConstraints(f.composites[d]));return f.cache&&(f.cache.allConstraints=h),h},n.allComposites=function(f){if(f.cache&&f.cache.allComposites)return f.cache.allComposites;for(var h=[].concat(f.composites),d=0;d<f.composites.length;d++)h=h.concat(n.allComposites(f.composites[d]));return f.cache&&(f.cache.allComposites=h),h},n.get=function(f,h,d){var l,m;switch(d){case"body":l=n.allBodies(f);break;case"constraint":l=n.allConstraints(f);break;case"composite":l=n.allComposites(f).concat(f);break}return l?(m=l.filter(function(x){return x.id.toString()===h.toString()}),m.length===0?null:m[0]):null},n.move=function(f,h,d){return n.remove(f,h),n.add(d,h),f},n.rebase=function(f){for(var h=n.allBodies(f).concat(n.allConstraints(f)).concat(n.allComposites(f)),d=0;d<h.length;d++)h[d].id=o.nextId();return f},n.translate=function(f,h,d){for(var l=d?n.allBodies(f):f.bodies,m=0;m<l.length;m++)u.translate(l[m],h);return f},n.rotate=function(f,h,d,l){for(var m=Math.cos(h),x=Math.sin(h),p=l?n.allBodies(f):f.bodies,g=0;g<p.length;g++){var b=p[g],E=b.position.x-d.x,A=b.position.y-d.y;u.setPosition(b,{x:d.x+(E*m-A*x),y:d.y+(E*x+A*m)}),u.rotate(b,h)}return f},n.scale=function(f,h,d,l,m){for(var x=m?n.allBodies(f):f.bodies,p=0;p<x.length;p++){var g=x[p],b=g.position.x-l.x,E=g.position.y-l.y;u.setPosition(g,{x:l.x+b*h,y:l.y+E*d}),u.scale(g,h,d)}return f},n.bounds=function(f){for(var h=n.allBodies(f),d=[],l=0;l<h.length;l+=1){var m=h[l];d.push(m.bounds.min,m.bounds.max)}return c.create(d)}})()},function(t,i,r){var n={};t.exports=n;var a=r(4),o=r(5),c=r(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(u,f){for(var h=f/c._baseDelta,d=n._motionSleepThreshold,l=0;l<u.length;l++){var m=u[l],x=a.getSpeed(m),p=a.getAngularSpeed(m),g=x*x+p*p;if(m.force.x!==0||m.force.y!==0){n.set(m,!1);continue}var b=Math.min(m.motion,g),E=Math.max(m.motion,g);m.motion=n._minBias*b+(1-n._minBias)*E,m.sleepThreshold>0&&m.motion<d?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/h&&n.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},n.afterCollisions=function(u){for(var f=n._motionSleepThreshold,h=0;h<u.length;h++){var d=u[h];if(!!d.isActive){var l=d.collision,m=l.bodyA.parent,x=l.bodyB.parent;if(!(m.isSleeping&&x.isSleeping||m.isStatic||x.isStatic)&&(m.isSleeping||x.isSleeping)){var p=m.isSleeping&&!m.isStatic?m:x,g=p===m?x:m;!p.isStatic&&g.motion>f&&n.set(p,!1)}}}},n.set=function(u,f){var h=u.isSleeping;f?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,h||o.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,h&&o.trigger(u,"sleepEnd"))}})()},function(t,i,r){var n={};t.exports=n;var a=r(3),o=r(9);(function(){var c=[],u={overlap:0,axis:null},f={overlap:0,axis:null};n.create=function(h,d){return{pair:null,collided:!1,bodyA:h,bodyB:d,parentA:h.parent,parentB:d.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},n.collides=function(h,d,l){if(n._overlapAxes(u,h.vertices,d.vertices,h.axes),u.overlap<=0||(n._overlapAxes(f,d.vertices,h.vertices,d.axes),f.overlap<=0))return null;var m=l&&l.table[o.id(h,d)],x;m?x=m.collision:(x=n.create(h,d),x.collided=!0,x.bodyA=h.id<d.id?h:d,x.bodyB=h.id<d.id?d:h,x.parentA=x.bodyA.parent,x.parentB=x.bodyB.parent),h=x.bodyA,d=x.bodyB;var p;u.overlap<f.overlap?p=u:p=f;var g=x.normal,b=x.tangent,E=x.penetration,A=x.supports,v=p.overlap,S=p.axis,y=S.x,T=S.y,M=d.position.x-h.position.x,_=d.position.y-h.position.y;y*M+T*_>=0&&(y=-y,T=-T),g.x=y,g.y=T,b.x=-T,b.y=y,E.x=y*v,E.y=T*v,x.depth=v;var w=n._findSupports(h,d,g,1),R=0;if(a.contains(h.vertices,w[0])&&(A[R++]=w[0]),a.contains(h.vertices,w[1])&&(A[R++]=w[1]),R<2){var L=n._findSupports(d,h,g,-1);a.contains(d.vertices,L[0])&&(A[R++]=L[0]),R<2&&a.contains(d.vertices,L[1])&&(A[R++]=L[1])}return R===0&&(A[R++]=w[0]),x.supportCount=R,x},n._overlapAxes=function(h,d,l,m){var x=d.length,p=l.length,g=d[0].x,b=d[0].y,E=l[0].x,A=l[0].y,v=m.length,S=Number.MAX_VALUE,y=0,T,M,_,w,R,L;for(R=0;R<v;R++){var F=m[R],N=F.x,z=F.y,W=g*N+b*z,G=E*N+A*z,Z=W,ee=G;for(L=1;L<x;L+=1)w=d[L].x*N+d[L].y*z,w>Z?Z=w:w<W&&(W=w);for(L=1;L<p;L+=1)w=l[L].x*N+l[L].y*z,w>ee?ee=w:w<G&&(G=w);if(M=Z-G,_=ee-W,T=M<_?M:_,T<S&&(S=T,y=R,T<=0))break}h.axis=m[y],h.overlap=S},n._findSupports=function(h,d,l,m){var x=d.vertices,p=x.length,g=h.position.x,b=h.position.y,E=l.x*m,A=l.y*m,v=x[0],S=v,y=E*(g-S.x)+A*(b-S.y),T,M,_;for(_=1;_<p;_+=1)S=x[_],M=E*(g-S.x)+A*(b-S.y),M<y&&(y=M,v=S);return T=x[(p+v.index-1)%p],y=E*(g-T.x)+A*(b-T.y),S=x[(v.index+1)%p],E*(g-S.x)+A*(b-S.y)<y?(c[0]=v,c[1]=S,c):(c[0]=v,c[1]=T,c)}})()},function(t,i,r){var n={};t.exports=n;var a=r(16);(function(){n.create=function(o,c){var u=o.bodyA,f=o.bodyB,h={id:n.id(u,f),bodyA:u,bodyB:f,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||f.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(h,o,c),h},n.update=function(o,c,u){var f=c.supports,h=c.supportCount,d=o.contacts,l=c.parentA,m=c.parentB;o.isActive=!0,o.timeUpdated=u,o.collision=c,o.separation=c.depth,o.inverseMass=l.inverseMass+m.inverseMass,o.friction=l.friction<m.friction?l.friction:m.friction,o.frictionStatic=l.frictionStatic>m.frictionStatic?l.frictionStatic:m.frictionStatic,o.restitution=l.restitution>m.restitution?l.restitution:m.restitution,o.slop=l.slop>m.slop?l.slop:m.slop,o.contactCount=h,c.pair=o;var x=f[0],p=d[0],g=f[1],b=d[1];(b.vertex===x||p.vertex===g)&&(d[1]=p,d[0]=p=b,b=d[1]),p.vertex=x,b.vertex=g},n.setActive=function(o,c,u){c?(o.isActive=!0,o.timeUpdated=u):(o.isActive=!1,o.contactCount=0)},n.id=function(o,c){return o.id<c.id?o.id.toString(36)+":"+c.id.toString(36):c.id.toString(36)+":"+o.id.toString(36)}})()},function(t,i,r){var n={};t.exports=n;var a=r(3),o=r(2),c=r(7),u=r(1),f=r(11),h=r(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(d){var l=d;l.bodyA&&!l.pointA&&(l.pointA={x:0,y:0}),l.bodyB&&!l.pointB&&(l.pointB={x:0,y:0});var m=l.bodyA?o.add(l.bodyA.position,l.pointA):l.pointA,x=l.bodyB?o.add(l.bodyB.position,l.pointB):l.pointB,p=o.magnitude(o.sub(m,x));l.length=typeof l.length!="undefined"?l.length:p,l.id=l.id||h.nextId(),l.label=l.label||"Constraint",l.type="constraint",l.stiffness=l.stiffness||(l.length>0?1:.7),l.damping=l.damping||0,l.angularStiffness=l.angularStiffness||0,l.angleA=l.bodyA?l.bodyA.angle:l.angleA,l.angleB=l.bodyB?l.bodyB.angle:l.angleB,l.plugin={};var g={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return l.length===0&&l.stiffness>.1?(g.type="pin",g.anchors=!1):l.stiffness<.9&&(g.type="spring"),l.render=h.extend(g,l.render),l},n.preSolveAll=function(d){for(var l=0;l<d.length;l+=1){var m=d[l],x=m.constraintImpulse;m.isStatic||x.x===0&&x.y===0&&x.angle===0||(m.position.x+=x.x,m.position.y+=x.y,m.angle+=x.angle)}},n.solveAll=function(d,l){for(var m=h.clamp(l/h._baseDelta,0,1),x=0;x<d.length;x+=1){var p=d[x],g=!p.bodyA||p.bodyA&&p.bodyA.isStatic,b=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(g||b)&&n.solve(d[x],m)}for(x=0;x<d.length;x+=1)p=d[x],g=!p.bodyA||p.bodyA&&p.bodyA.isStatic,b=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!g&&!b&&n.solve(d[x],m)},n.solve=function(d,l){var m=d.bodyA,x=d.bodyB,p=d.pointA,g=d.pointB;if(!(!m&&!x)){m&&!m.isStatic&&(o.rotate(p,m.angle-d.angleA,p),d.angleA=m.angle),x&&!x.isStatic&&(o.rotate(g,x.angle-d.angleB,g),d.angleB=x.angle);var b=p,E=g;if(m&&(b=o.add(m.position,p)),x&&(E=o.add(x.position,g)),!(!b||!E)){var A=o.sub(b,E),v=o.magnitude(A);v<n._minLength&&(v=n._minLength);var S=(v-d.length)/v,y=d.stiffness>=1||d.length===0,T=y?d.stiffness*l:d.stiffness*l*l,M=d.damping*l,_=o.mult(A,S*T),w=(m?m.inverseMass:0)+(x?x.inverseMass:0),R=(m?m.inverseInertia:0)+(x?x.inverseInertia:0),L=w+R,F,N,z,W,G;if(M>0){var Z=o.create();z=o.div(A,v),G=o.sub(x&&o.sub(x.position,x.positionPrev)||Z,m&&o.sub(m.position,m.positionPrev)||Z),W=o.dot(z,G)}m&&!m.isStatic&&(N=m.inverseMass/w,m.constraintImpulse.x-=_.x*N,m.constraintImpulse.y-=_.y*N,m.position.x-=_.x*N,m.position.y-=_.y*N,M>0&&(m.positionPrev.x-=M*z.x*W*N,m.positionPrev.y-=M*z.y*W*N),F=o.cross(p,_)/L*n._torqueDampen*m.inverseInertia*(1-d.angularStiffness),m.constraintImpulse.angle-=F,m.angle-=F),x&&!x.isStatic&&(N=x.inverseMass/w,x.constraintImpulse.x+=_.x*N,x.constraintImpulse.y+=_.y*N,x.position.x+=_.x*N,x.position.y+=_.y*N,M>0&&(x.positionPrev.x+=M*z.x*W*N,x.positionPrev.y+=M*z.y*W*N),F=o.cross(g,_)/L*n._torqueDampen*x.inverseInertia*(1-d.angularStiffness),x.constraintImpulse.angle+=F,x.angle+=F)}}},n.postSolveAll=function(d){for(var l=0;l<d.length;l++){var m=d[l],x=m.constraintImpulse;if(!(m.isStatic||x.x===0&&x.y===0&&x.angle===0)){c.set(m,!1);for(var p=0;p<m.parts.length;p++){var g=m.parts[p];a.translate(g.vertices,x),p>0&&(g.position.x+=x.x,g.position.y+=x.y),x.angle!==0&&(a.rotate(g.vertices,x.angle,m.position),f.rotate(g.axes,x.angle),p>0&&o.rotateAbout(g.position,x.angle,m.position,g.position)),u.update(g.bounds,g.vertices,m.velocity)}x.angle*=n._warming,x.x*=n._warming,x.y*=n._warming}}},n.pointAWorld=function(d){return{x:(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),y:(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0)}},n.pointBWorld=function(d){return{x:(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),y:(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0)}},n.currentLength=function(d){var l=(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),m=(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0),x=(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),p=(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0),g=l-x,b=m-p;return Math.sqrt(g*g+b*b)}})()},function(t,i,r){var n={};t.exports=n;var a=r(2),o=r(0);(function(){n.fromVertices=function(c){for(var u={},f=0;f<c.length;f++){var h=(f+1)%c.length,d=a.normalise({x:c[h].y-c[f].y,y:c[f].x-c[h].x}),l=d.y===0?1/0:d.x/d.y;l=l.toFixed(3).toString(),u[l]=d}return o.values(u)},n.rotate=function(c,u){if(u!==0)for(var f=Math.cos(u),h=Math.sin(u),d=0;d<c.length;d++){var l=c[d],m;m=l.x*f-l.y*h,l.y=l.x*h+l.y*f,l.x=m}}})()},function(t,i,r){var n={};t.exports=n;var a=r(3),o=r(0),c=r(4),u=r(1),f=r(2);(function(){n.rectangle=function(h,d,l,m,x){x=x||{};var p={label:"Rectangle Body",position:{x:h,y:d},vertices:a.fromPath("L 0 0 L "+l+" 0 L "+l+" "+m+" L 0 "+m)};if(x.chamfer){var g=x.chamfer;p.vertices=a.chamfer(p.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete x.chamfer}return c.create(o.extend({},p,x))},n.trapezoid=function(h,d,l,m,x,p){p=p||{},x>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),x*=.5;var g=(1-x*2)*l,b=l*x,E=b+g,A=E+b,v;x<.5?v="L 0 0 L "+b+" "+-m+" L "+E+" "+-m+" L "+A+" 0":v="L 0 0 L "+E+" "+-m+" L "+A+" 0";var S={label:"Trapezoid Body",position:{x:h,y:d},vertices:a.fromPath(v)};if(p.chamfer){var y=p.chamfer;S.vertices=a.chamfer(S.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete p.chamfer}return c.create(o.extend({},S,p))},n.circle=function(h,d,l,m,x){m=m||{};var p={label:"Circle Body",circleRadius:l};x=x||25;var g=Math.ceil(Math.max(10,Math.min(x,l)));return g%2===1&&(g+=1),n.polygon(h,d,g,l,o.extend({},p,m))},n.polygon=function(h,d,l,m,x){if(x=x||{},l<3)return n.circle(h,d,m,x);for(var p=2*Math.PI/l,g="",b=p*.5,E=0;E<l;E+=1){var A=b+E*p,v=Math.cos(A)*m,S=Math.sin(A)*m;g+="L "+v.toFixed(3)+" "+S.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:h,y:d},vertices:a.fromPath(g)};if(x.chamfer){var T=x.chamfer;y.vertices=a.chamfer(y.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete x.chamfer}return c.create(o.extend({},y,x))},n.fromVertices=function(h,d,l,m,x,p,g,b){var E=o.getDecomp(),A,v,S,y,T,M,_,w,R,L,F;for(A=Boolean(E&&E.quickDecomp),m=m||{},S=[],x=typeof x!="undefined"?x:!1,p=typeof p!="undefined"?p:.01,g=typeof g!="undefined"?g:10,b=typeof b!="undefined"?b:.01,o.isArray(l[0])||(l=[l]),L=0;L<l.length;L+=1)if(M=l[L],y=a.isConvex(M),T=!y,T&&!A&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),y||!A)y?M=a.clockwiseSort(M):M=a.hull(M),S.push({position:{x:h,y:d},vertices:M});else{var N=M.map(function(k){return[k.x,k.y]});E.makeCCW(N),p!==!1&&E.removeCollinearPoints(N,p),b!==!1&&E.removeDuplicatePoints&&E.removeDuplicatePoints(N,b);var z=E.quickDecomp(N);for(_=0;_<z.length;_++){var W=z[_],G=W.map(function(k){return{x:k[0],y:k[1]}});g>0&&a.area(G)<g||S.push({position:a.centre(G),vertices:G})}}for(_=0;_<S.length;_++)S[_]=c.create(o.extend(S[_],m));if(x){var Z=5;for(_=0;_<S.length;_++){var ee=S[_];for(w=_+1;w<S.length;w++){var he=S[w];if(u.overlaps(ee.bounds,he.bounds)){var be=ee.vertices,Ue=he.vertices;for(R=0;R<ee.vertices.length;R++)for(F=0;F<he.vertices.length;F++){var We=f.magnitudeSquared(f.sub(be[(R+1)%be.length],Ue[F])),He=f.magnitudeSquared(f.sub(be[R],Ue[(F+1)%Ue.length]));We<Z&&He<Z&&(be[R].isInternal=!0,Ue[F].isInternal=!0)}}}}}return S.length>1?(v=c.create(o.extend({parts:S.slice(0)},m)),c.setPosition(v,{x:h,y:d}),v):S[0]}})()},function(t,i,r){var n={};t.exports=n;var a=r(0),o=r(8);(function(){n.create=function(c){var u={bodies:[],collisions:[],pairs:null};return a.extend(u,c)},n.setBodies=function(c,u){c.bodies=u.slice(0)},n.clear=function(c){c.bodies=[],c.collisions=[]},n.collisions=function(c){var u=c.pairs,f=c.bodies,h=f.length,d=n.canCollide,l=o.collides,m=c.collisions,x=0,p,g;for(f.sort(n._compareBoundsX),p=0;p<h;p++){var b=f[p],E=b.bounds,A=b.bounds.max.x,v=b.bounds.max.y,S=b.bounds.min.y,y=b.isStatic||b.isSleeping,T=b.parts.length,M=T===1;for(g=p+1;g<h;g++){var _=f[g],w=_.bounds;if(w.min.x>A)break;if(!(v<w.min.y||S>w.max.y)&&!(y&&(_.isStatic||_.isSleeping))&&!!d(b.collisionFilter,_.collisionFilter)){var R=_.parts.length;if(M&&R===1){var L=l(b,_,u);L&&(m[x++]=L)}else for(var F=T>1?1:0,N=R>1?1:0,z=F;z<T;z++)for(var W=b.parts[z],E=W.bounds,G=N;G<R;G++){var Z=_.parts[G],w=Z.bounds;if(!(E.min.x>w.max.x||E.max.x<w.min.x||E.max.y<w.min.y||E.min.y>w.max.y)){var L=l(W,Z,u);L&&(m[x++]=L)}}}}}return m.length!==x&&(m.length=x),m},n.canCollide=function(c,u){return c.group===u.group&&c.group!==0?c.group>0:(c.mask&u.category)!==0&&(u.mask&c.category)!==0},n._compareBoundsX=function(c,u){return c.bounds.min.x-u.bounds.min.x}})()},function(t,i,r){var n={};t.exports=n;var a=r(0);(function(){n.create=function(o){var c={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=o||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(u){var f=n._getRelativeMousePosition(u,c.element,c.pixelRatio),h=u.changedTouches;h&&(c.button=0,u.preventDefault()),c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=u},c.mousedown=function(u){var f=n._getRelativeMousePosition(u,c.element,c.pixelRatio),h=u.changedTouches;h?(c.button=0,u.preventDefault()):c.button=u.button,c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=u},c.mouseup=function(u){var f=n._getRelativeMousePosition(u,c.element,c.pixelRatio),h=u.changedTouches;h&&u.preventDefault(),c.button=-1,c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=u},c.mousewheel=function(u){c.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),c.sourceEvents.mousewheel=u},n.setElement(c,c.element),c},n.setElement=function(o,c){o.element=c,c.addEventListener("mousemove",o.mousemove,{passive:!0}),c.addEventListener("mousedown",o.mousedown,{passive:!0}),c.addEventListener("mouseup",o.mouseup,{passive:!0}),c.addEventListener("wheel",o.mousewheel,{passive:!1}),c.addEventListener("touchmove",o.mousemove,{passive:!1}),c.addEventListener("touchstart",o.mousedown,{passive:!1}),c.addEventListener("touchend",o.mouseup,{passive:!1})},n.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},n.setOffset=function(o,c){o.offset.x=c.x,o.offset.y=c.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},n.setScale=function(o,c){o.scale.x=c.x,o.scale.y=c.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},n._getRelativeMousePosition=function(o,c,u){var f=c.getBoundingClientRect(),h=document.documentElement||document.body.parentNode||document.body,d=window.pageXOffset!==void 0?window.pageXOffset:h.scrollLeft,l=window.pageYOffset!==void 0?window.pageYOffset:h.scrollTop,m=o.changedTouches,x,p;return m?(x=m[0].pageX-f.left-d,p=m[0].pageY-f.top-l):(x=o.pageX-f.left-d,p=o.pageY-f.top-l),{x:x/(c.clientWidth/(c.width||c.clientWidth)*u),y:p/(c.clientHeight/(c.height||c.clientHeight)*u)}}})()},function(t,i,r){var n={};t.exports=n;var a=r(0);(function(){n._registry={},n.register=function(o){if(n.isPlugin(o)||a.warn("Plugin.register:",n.toString(o),"does not implement all required fields."),o.name in n._registry){var c=n._registry[o.name],u=n.versionParse(o.version).number,f=n.versionParse(c.version).number;u>f?(a.warn("Plugin.register:",n.toString(c),"was upgraded to",n.toString(o)),n._registry[o.name]=o):u<f?a.warn("Plugin.register:",n.toString(c),"can not be downgraded to",n.toString(o)):o!==c&&a.warn("Plugin.register:",n.toString(o),"is already registered to different plugin object")}else n._registry[o.name]=o;return o},n.resolve=function(o){return n._registry[n.dependencyParse(o).name]},n.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},n.isPlugin=function(o){return o&&o.name&&o.version&&o.install},n.isUsed=function(o,c){return o.used.indexOf(c)>-1},n.isFor=function(o,c){var u=o.for&&n.dependencyParse(o.for);return!o.for||c.name===u.name&&n.versionSatisfies(c.version,u.range)},n.use=function(o,c){if(o.uses=(o.uses||[]).concat(c||[]),o.uses.length===0){a.warn("Plugin.use:",n.toString(o),"does not specify any dependencies to install.");return}for(var u=n.dependencies(o),f=a.topologicalSort(u),h=[],d=0;d<f.length;d+=1)if(f[d]!==o.name){var l=n.resolve(f[d]);if(!l){h.push("\u274C "+f[d]);continue}n.isUsed(o,l.name)||(n.isFor(l,o)||(a.warn("Plugin.use:",n.toString(l),"is for",l.for,"but installed on",n.toString(o)+"."),l._warned=!0),l.install?l.install(o):(a.warn("Plugin.use:",n.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(h.push("\u{1F536} "+n.toString(l)),delete l._warned):h.push("\u2705 "+n.toString(l)),o.used.push(l.name))}h.length>0&&a.info(h.join("  "))},n.dependencies=function(o,c){var u=n.dependencyParse(o),f=u.name;if(c=c||{},!(f in c)){o=n.resolve(o)||o,c[f]=a.map(o.uses||[],function(d){n.isPlugin(d)&&n.register(d);var l=n.dependencyParse(d),m=n.resolve(d);return m&&!n.versionSatisfies(m.version,l.range)?(a.warn("Plugin.dependencies:",n.toString(m),"does not satisfy",n.toString(l),"used by",n.toString(u)+"."),m._warned=!0,o._warned=!0):m||(a.warn("Plugin.dependencies:",n.toString(d),"used by",n.toString(u),"could not be resolved."),o._warned=!0),l.name});for(var h=0;h<c[f].length;h+=1)n.dependencies(c[f][h],c);return c}},n.dependencyParse=function(o){if(a.isString(o)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},n.versionParse=function(o){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var u=c.exec(o),f=Number(u[4]),h=Number(u[5]),d=Number(u[6]);return{isRange:Boolean(u[1]||u[2]),version:u[3],range:o,operator:u[1]||u[2]||"",major:f,minor:h,patch:d,parts:[f,h,d],prerelease:u[7],number:f*1e8+h*1e4+d}},n.versionSatisfies=function(o,c){c=c||"*";var u=n.versionParse(c),f=n.versionParse(o);if(u.isRange){if(u.operator==="*"||o==="*")return!0;if(u.operator===">")return f.number>u.number;if(u.operator===">=")return f.number>=u.number;if(u.operator==="~")return f.major===u.major&&f.minor===u.minor&&f.patch>=u.patch;if(u.operator==="^")return u.major>0?f.major===u.major&&f.number>=u.number:u.minor>0?f.minor===u.minor&&f.patch>=u.patch:f.patch===u.patch}return o===c||o==="*"}})()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,r){var n={};t.exports=n;var a=r(7),o=r(18),c=r(13),u=r(19),f=r(5),h=r(6),d=r(10),l=r(0),m=r(4);(function(){n._deltaMax=1e3/60,n.create=function(x){x=x||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},g=l.extend(p,x);return g.world=x.world||h.create({label:"World"}),g.pairs=x.pairs||u.create(),g.detector=x.detector||c.create(),g.detector.pairs=g.pairs,g.grid={buckets:[]},g.world.gravity=g.gravity,g.broadphase=g.grid,g.metrics={},g},n.update=function(x,p){var g=l.now(),b=x.world,E=x.detector,A=x.pairs,v=x.timing,S=v.timestamp,y;p>n._deltaMax&&l.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",n._deltaMax.toFixed(3),"ms."),p=typeof p!="undefined"?p:l._baseDelta,p*=v.timeScale,v.timestamp+=p,v.lastDelta=p;var T={timestamp:v.timestamp,delta:p};f.trigger(x,"beforeUpdate",T);var M=h.allBodies(b),_=h.allConstraints(b);for(b.isModified&&(c.setBodies(E,M),h.setModified(b,!1,!1,!0)),x.enableSleeping&&a.update(M,p),n._bodiesApplyGravity(M,x.gravity),p>0&&n._bodiesUpdate(M,p),f.trigger(x,"beforeSolve",T),d.preSolveAll(M),y=0;y<x.constraintIterations;y++)d.solveAll(_,p);d.postSolveAll(M);var w=c.collisions(E);u.update(A,w,S),x.enableSleeping&&a.afterCollisions(A.list),A.collisionStart.length>0&&f.trigger(x,"collisionStart",{pairs:A.collisionStart,timestamp:v.timestamp,delta:p});var R=l.clamp(20/x.positionIterations,0,1);for(o.preSolvePosition(A.list),y=0;y<x.positionIterations;y++)o.solvePosition(A.list,p,R);for(o.postSolvePosition(M),d.preSolveAll(M),y=0;y<x.constraintIterations;y++)d.solveAll(_,p);for(d.postSolveAll(M),o.preSolveVelocity(A.list),y=0;y<x.velocityIterations;y++)o.solveVelocity(A.list,p);return n._bodiesUpdateVelocities(M),A.collisionActive.length>0&&f.trigger(x,"collisionActive",{pairs:A.collisionActive,timestamp:v.timestamp,delta:p}),A.collisionEnd.length>0&&f.trigger(x,"collisionEnd",{pairs:A.collisionEnd,timestamp:v.timestamp,delta:p}),n._bodiesClearForces(M),f.trigger(x,"afterUpdate",T),x.timing.lastElapsed=l.now()-g,x},n.merge=function(x,p){if(l.extend(x,p),p.world){x.world=p.world,n.clear(x);for(var g=h.allBodies(x.world),b=0;b<g.length;b++){var E=g[b];a.set(E,!1),E.id=l.nextId()}}},n.clear=function(x){u.clear(x.pairs),c.clear(x.detector)},n._bodiesClearForces=function(x){for(var p=x.length,g=0;g<p;g++){var b=x[g];b.force.x=0,b.force.y=0,b.torque=0}},n._bodiesApplyGravity=function(x,p){var g=typeof p.scale!="undefined"?p.scale:.001,b=x.length;if(!(p.x===0&&p.y===0||g===0))for(var E=0;E<b;E++){var A=x[E];A.isStatic||A.isSleeping||(A.force.y+=A.mass*p.y*g,A.force.x+=A.mass*p.x*g)}},n._bodiesUpdate=function(x,p){for(var g=x.length,b=0;b<g;b++){var E=x[b];E.isStatic||E.isSleeping||m.update(E,p)}},n._bodiesUpdateVelocities=function(x){for(var p=x.length,g=0;g<p;g++)m.updateVelocities(x[g])}})()},function(t,i,r){var n={};t.exports=n;var a=r(3),o=r(0),c=r(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(u){var f,h,d,l=u.length;for(f=0;f<l;f++)h=u[f],h.isActive&&(d=h.contactCount,h.collision.parentA.totalContacts+=d,h.collision.parentB.totalContacts+=d)},n.solvePosition=function(u,f,h){var d,l,m,x,p,g,b,E,A=n._positionDampen*(h||1),v=o.clamp(f/o._baseDelta,0,1),S=u.length;for(d=0;d<S;d++)l=u[d],!(!l.isActive||l.isSensor)&&(m=l.collision,x=m.parentA,p=m.parentB,g=m.normal,l.separation=m.depth+g.x*(p.positionImpulse.x-x.positionImpulse.x)+g.y*(p.positionImpulse.y-x.positionImpulse.y));for(d=0;d<S;d++)l=u[d],!(!l.isActive||l.isSensor)&&(m=l.collision,x=m.parentA,p=m.parentB,g=m.normal,E=l.separation-l.slop*v,(x.isStatic||p.isStatic)&&(E*=2),x.isStatic||x.isSleeping||(b=A/x.totalContacts,x.positionImpulse.x+=g.x*E*b,x.positionImpulse.y+=g.y*E*b),p.isStatic||p.isSleeping||(b=A/p.totalContacts,p.positionImpulse.x-=g.x*E*b,p.positionImpulse.y-=g.y*E*b))},n.postSolvePosition=function(u){for(var f=n._positionWarming,h=u.length,d=a.translate,l=c.update,m=0;m<h;m++){var x=u[m],p=x.positionImpulse,g=p.x,b=p.y,E=x.velocity;if(x.totalContacts=0,g!==0||b!==0){for(var A=0;A<x.parts.length;A++){var v=x.parts[A];d(v.vertices,p),l(v.bounds,v.vertices,E),v.position.x+=g,v.position.y+=b}x.positionPrev.x+=g,x.positionPrev.y+=b,g*E.x+b*E.y<0?(p.x=0,p.y=0):(p.x*=f,p.y*=f)}}},n.preSolveVelocity=function(u){var f=u.length,h,d;for(h=0;h<f;h++){var l=u[h];if(!(!l.isActive||l.isSensor)){var m=l.contacts,x=l.contactCount,p=l.collision,g=p.parentA,b=p.parentB,E=p.normal,A=p.tangent;for(d=0;d<x;d++){var v=m[d],S=v.vertex,y=v.normalImpulse,T=v.tangentImpulse;if(y!==0||T!==0){var M=E.x*y+A.x*T,_=E.y*y+A.y*T;g.isStatic||g.isSleeping||(g.positionPrev.x+=M*g.inverseMass,g.positionPrev.y+=_*g.inverseMass,g.anglePrev+=g.inverseInertia*((S.x-g.position.x)*_-(S.y-g.position.y)*M)),b.isStatic||b.isSleeping||(b.positionPrev.x-=M*b.inverseMass,b.positionPrev.y-=_*b.inverseMass,b.anglePrev-=b.inverseInertia*((S.x-b.position.x)*_-(S.y-b.position.y)*M))}}}}},n.solveVelocity=function(u,f){var h=f/o._baseDelta,d=h*h,l=d*h,m=-n._restingThresh*h,x=n._restingThreshTangent,p=n._frictionNormalMultiplier*h,g=n._frictionMaxStatic,b=u.length,E,A,v,S;for(v=0;v<b;v++){var y=u[v];if(!(!y.isActive||y.isSensor)){var T=y.collision,M=T.parentA,_=T.parentB,w=T.normal.x,R=T.normal.y,L=T.tangent.x,F=T.tangent.y,N=y.inverseMass,z=y.friction*y.frictionStatic*p,W=y.contacts,G=y.contactCount,Z=1/G,ee=M.position.x-M.positionPrev.x,he=M.position.y-M.positionPrev.y,be=M.angle-M.anglePrev,Ue=_.position.x-_.positionPrev.x,We=_.position.y-_.positionPrev.y,He=_.angle-_.anglePrev;for(S=0;S<G;S++){var k=W[S],J=k.vertex,se=J.x-M.position.x,Ce=J.y-M.position.y,xe=J.x-_.position.x,Pe=J.y-_.position.y,qe=ee-Ce*be,ze=he+se*be,it=Ue-Pe*He,I=We+xe*He,Ve=qe-it,Ge=ze-I,Ze=w*Ve+R*Ge,ue=L*Ve+F*Ge,rt=y.separation+Ze,Me=Math.min(rt,1);Me=rt<0?0:Me;var Le=Me*z;ue<-Le||ue>Le?(A=ue>0?ue:-ue,E=y.friction*(ue>0?1:-1)*l,E<-A?E=-A:E>A&&(E=A)):(E=ue,A=g);var D=se*R-Ce*w,C=xe*R-Pe*w,H=Z/(N+M.inverseInertia*D*D+_.inverseInertia*C*C),K=(1+y.restitution)*Ze*H;if(E*=H,Ze<m)k.normalImpulse=0;else{var Q=k.normalImpulse;k.normalImpulse+=K,k.normalImpulse>0&&(k.normalImpulse=0),K=k.normalImpulse-Q}if(ue<-x||ue>x)k.tangentImpulse=0;else{var $=k.tangentImpulse;k.tangentImpulse+=E,k.tangentImpulse<-A&&(k.tangentImpulse=-A),k.tangentImpulse>A&&(k.tangentImpulse=A),E=k.tangentImpulse-$}var _e=w*K+L*E,ae=R*K+F*E;M.isStatic||M.isSleeping||(M.positionPrev.x+=_e*M.inverseMass,M.positionPrev.y+=ae*M.inverseMass,M.anglePrev+=(se*ae-Ce*_e)*M.inverseInertia),_.isStatic||_.isSleeping||(_.positionPrev.x-=_e*_.inverseMass,_.positionPrev.y-=ae*_.inverseMass,_.anglePrev-=(xe*ae-Pe*_e)*_.inverseInertia)}}}}})()},function(t,i,r){var n={};t.exports=n;var a=r(9),o=r(0);(function(){n.create=function(c){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},n.update=function(c,u,f){var h=a.update,d=a.create,l=a.setActive,m=c.table,x=c.list,p=x.length,g=p,b=c.collisionStart,E=c.collisionEnd,A=c.collisionActive,v=u.length,S=0,y=0,T=0,M,_,w;for(w=0;w<v;w++)M=u[w],_=M.pair,_?(_.isActive&&(A[T++]=_),h(_,M,f)):(_=d(M,f),m[_.id]=_,b[S++]=_,x[g++]=_);for(g=0,p=x.length,w=0;w<p;w++)_=x[w],_.timeUpdated>=f?x[g++]=_:(l(_,!1,f),_.collision.bodyA.sleepCounter>0&&_.collision.bodyB.sleepCounter>0?x[g++]=_:(E[y++]=_,delete m[_.id]));x.length!==g&&(x.length=g),b.length!==S&&(b.length=S),E.length!==y&&(E.length=y),A.length!==T&&(A.length=T)},n.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()},function(t,i,r){var n=t.exports=r(21);n.Axes=r(11),n.Bodies=r(12),n.Body=r(4),n.Bounds=r(1),n.Collision=r(8),n.Common=r(0),n.Composite=r(6),n.Composites=r(22),n.Constraint=r(10),n.Contact=r(16),n.Detector=r(13),n.Engine=r(17),n.Events=r(5),n.Grid=r(23),n.Mouse=r(14),n.MouseConstraint=r(24),n.Pair=r(9),n.Pairs=r(19),n.Plugin=r(15),n.Query=r(25),n.Render=r(26),n.Resolver=r(18),n.Runner=r(27),n.SAT=r(28),n.Sleeping=r(7),n.Svg=r(29),n.Vector=r(2),n.Vertices=r(3),n.World=r(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run \u27A4 use Matter.Runner.run(engine) instead")},function(t,i,r){var n={};t.exports=n;var a=r(15),o=r(0);(function(){n.name="matter-js",n.version="0.20.0",n.uses=[],n.used=[],n.use=function(){a.use(n,Array.prototype.slice.call(arguments))},n.before=function(c,u){return c=c.replace(/^Matter./,""),o.chainPathBefore(n,c,u)},n.after=function(c,u){return c=c.replace(/^Matter./,""),o.chainPathAfter(n,c,u)}})()},function(t,i,r){var n={};t.exports=n;var a=r(6),o=r(10),c=r(0),u=r(4),f=r(12),h=c.deprecated;(function(){n.stack=function(d,l,m,x,p,g,b){for(var E=a.create({label:"Stack"}),A=d,v=l,S,y=0,T=0;T<x;T++){for(var M=0,_=0;_<m;_++){var w=b(A,v,_,T,S,y);if(w){var R=w.bounds.max.y-w.bounds.min.y,L=w.bounds.max.x-w.bounds.min.x;R>M&&(M=R),u.translate(w,{x:L*.5,y:R*.5}),A=w.bounds.max.x+p,a.addBody(E,w),S=w,y+=1}else A+=p}v+=M+g,A=d}return E},n.chain=function(d,l,m,x,p,g){for(var b=d.bodies,E=1;E<b.length;E++){var A=b[E-1],v=b[E],S=A.bounds.max.y-A.bounds.min.y,y=A.bounds.max.x-A.bounds.min.x,T=v.bounds.max.y-v.bounds.min.y,M=v.bounds.max.x-v.bounds.min.x,_={bodyA:A,pointA:{x:y*l,y:S*m},bodyB:v,pointB:{x:M*x,y:T*p}},w=c.extend(_,g);a.addConstraint(d,o.create(w))}return d.label+=" Chain",d},n.mesh=function(d,l,m,x,p){var g=d.bodies,b,E,A,v,S;for(b=0;b<m;b++){for(E=1;E<l;E++)A=g[E-1+b*l],v=g[E+b*l],a.addConstraint(d,o.create(c.extend({bodyA:A,bodyB:v},p)));if(b>0)for(E=0;E<l;E++)A=g[E+(b-1)*l],v=g[E+b*l],a.addConstraint(d,o.create(c.extend({bodyA:A,bodyB:v},p))),x&&E>0&&(S=g[E-1+(b-1)*l],a.addConstraint(d,o.create(c.extend({bodyA:S,bodyB:v},p)))),x&&E<l-1&&(S=g[E+1+(b-1)*l],a.addConstraint(d,o.create(c.extend({bodyA:S,bodyB:v},p))))}return d.label+=" Mesh",d},n.pyramid=function(d,l,m,x,p,g,b){return n.stack(d,l,m,x,p,g,function(E,A,v,S,y,T){var M=Math.min(x,Math.ceil(m/2)),_=y?y.bounds.max.x-y.bounds.min.x:0;if(!(S>M)){S=M-S;var w=S,R=m-1-S;if(!(v<w||v>R)){T===1&&u.translate(y,{x:(v+(m%2===1?1:-1))*_,y:0});var L=y?v*_:0;return b(d+L+v*p,A,v,S,y,T)}}})},n.newtonsCradle=function(d,l,m,x,p){for(var g=a.create({label:"Newtons Cradle"}),b=0;b<m;b++){var E=1.9,A=f.circle(d+b*(x*E),l+p,x,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),v=o.create({pointA:{x:d+b*(x*E),y:l},bodyB:A});a.addBody(g,A),a.addConstraint(g,v)}return g},h(n,"newtonsCradle","Composites.newtonsCradle \u27A4 moved to newtonsCradle example"),n.car=function(d,l,m,x,p){var g=u.nextGroup(!0),b=20,E=-m*.5+b,A=m*.5-b,v=0,S=a.create({label:"Car"}),y=f.rectangle(d,l,m,x,{collisionFilter:{group:g},chamfer:{radius:x*.5},density:2e-4}),T=f.circle(d+E,l+v,p,{collisionFilter:{group:g},friction:.8}),M=f.circle(d+A,l+v,p,{collisionFilter:{group:g},friction:.8}),_=o.create({bodyB:y,pointB:{x:E,y:v},bodyA:T,stiffness:1,length:0}),w=o.create({bodyB:y,pointB:{x:A,y:v},bodyA:M,stiffness:1,length:0});return a.addBody(S,y),a.addBody(S,T),a.addBody(S,M),a.addConstraint(S,_),a.addConstraint(S,w),S},h(n,"car","Composites.car \u27A4 moved to car example"),n.softBody=function(d,l,m,x,p,g,b,E,A,v){A=c.extend({inertia:1/0},A),v=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},v);var S=n.stack(d,l,m,x,p,g,function(y,T){return f.circle(y,T,E,A)});return n.mesh(S,m,x,b,v),S.label="Soft Body",S},h(n,"softBody","Composites.softBody \u27A4 moved to softBody and cloth examples")})()},function(t,i,r){var n={};t.exports=n;var a=r(9),o=r(0),c=o.deprecated;(function(){n.create=function(u){var f={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(f,u)},n.update=function(u,f,h,d){var l,m,x,p=h.world,g=u.buckets,b,E,A=!1;for(l=0;l<f.length;l++){var v=f[l];if(!(v.isSleeping&&!d)&&!(p.bounds&&(v.bounds.max.x<p.bounds.min.x||v.bounds.min.x>p.bounds.max.x||v.bounds.max.y<p.bounds.min.y||v.bounds.min.y>p.bounds.max.y))){var S=n._getRegion(u,v);if(!v.region||S.id!==v.region.id||d){(!v.region||d)&&(v.region=S);var y=n._regionUnion(S,v.region);for(m=y.startCol;m<=y.endCol;m++)for(x=y.startRow;x<=y.endRow;x++){E=n._getBucketId(m,x),b=g[E];var T=m>=S.startCol&&m<=S.endCol&&x>=S.startRow&&x<=S.endRow,M=m>=v.region.startCol&&m<=v.region.endCol&&x>=v.region.startRow&&x<=v.region.endRow;!T&&M&&M&&b&&n._bucketRemoveBody(u,b,v),(v.region===S||T&&!M||d)&&(b||(b=n._createBucket(g,E)),n._bucketAddBody(u,b,v))}v.region=S,A=!0}}}A&&(u.pairsList=n._createActivePairsList(u))},c(n,"update","Grid.update \u27A4 replaced by Matter.Detector"),n.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},c(n,"clear","Grid.clear \u27A4 replaced by Matter.Detector"),n._regionUnion=function(u,f){var h=Math.min(u.startCol,f.startCol),d=Math.max(u.endCol,f.endCol),l=Math.min(u.startRow,f.startRow),m=Math.max(u.endRow,f.endRow);return n._createRegion(h,d,l,m)},n._getRegion=function(u,f){var h=f.bounds,d=Math.floor(h.min.x/u.bucketWidth),l=Math.floor(h.max.x/u.bucketWidth),m=Math.floor(h.min.y/u.bucketHeight),x=Math.floor(h.max.y/u.bucketHeight);return n._createRegion(d,l,m,x)},n._createRegion=function(u,f,h,d){return{id:u+","+f+","+h+","+d,startCol:u,endCol:f,startRow:h,endRow:d}},n._getBucketId=function(u,f){return"C"+u+"R"+f},n._createBucket=function(u,f){var h=u[f]=[];return h},n._bucketAddBody=function(u,f,h){var d=u.pairs,l=a.id,m=f.length,x;for(x=0;x<m;x++){var p=f[x];if(!(h.id===p.id||h.isStatic&&p.isStatic)){var g=l(h,p),b=d[g];b?b[2]+=1:d[g]=[h,p,1]}}f.push(h)},n._bucketRemoveBody=function(u,f,h){var d=u.pairs,l=a.id,m;f.splice(o.indexOf(f,h),1);var x=f.length;for(m=0;m<x;m++){var p=d[l(h,f[m])];p&&(p[2]-=1)}},n._createActivePairsList=function(u){var f,h=u.pairs,d=o.keys(h),l=d.length,m=[],x;for(x=0;x<l;x++)f=h[d[x]],f[2]>0?m.push(f):delete h[d[x]];return m}})()},function(t,i,r){var n={};t.exports=n;var a=r(3),o=r(7),c=r(14),u=r(5),f=r(13),h=r(10),d=r(6),l=r(0),m=r(1);(function(){n.create=function(x,p){var g=(x?x.mouse:null)||(p?p.mouse:null);g||(x&&x.render&&x.render.canvas?g=c.create(x.render.canvas):p&&p.element?g=c.create(p.element):(g=c.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var b=h.create({label:"Mouse Constraint",pointA:g.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),E={type:"mouseConstraint",mouse:g,element:null,body:null,constraint:b,collisionFilter:{category:1,mask:4294967295,group:0}},A=l.extend(E,p);return u.on(x,"beforeUpdate",function(){var v=d.allBodies(x.world);n.update(A,v),n._triggerEvents(A)}),A},n.update=function(x,p){var g=x.mouse,b=x.constraint,E=x.body;if(g.button===0){if(b.bodyB)o.set(b.bodyB,!1),b.pointA=g.position;else for(var A=0;A<p.length;A++)if(E=p[A],m.contains(E.bounds,g.position)&&f.canCollide(E.collisionFilter,x.collisionFilter))for(var v=E.parts.length>1?1:0;v<E.parts.length;v++){var S=E.parts[v];if(a.contains(S.vertices,g.position)){b.pointA=g.position,b.bodyB=x.body=E,b.pointB={x:g.position.x-E.position.x,y:g.position.y-E.position.y},b.angleB=E.angle,o.set(E,!1),u.trigger(x,"startdrag",{mouse:g,body:E});break}}}else b.bodyB=x.body=null,b.pointB=null,E&&u.trigger(x,"enddrag",{mouse:g,body:E})},n._triggerEvents=function(x){var p=x.mouse,g=p.sourceEvents;g.mousemove&&u.trigger(x,"mousemove",{mouse:p}),g.mousedown&&u.trigger(x,"mousedown",{mouse:p}),g.mouseup&&u.trigger(x,"mouseup",{mouse:p}),c.clearSourceEvents(p)}})()},function(t,i,r){var n={};t.exports=n;var a=r(2),o=r(8),c=r(1),u=r(12),f=r(3);(function(){n.collides=function(h,d){for(var l=[],m=d.length,x=h.bounds,p=o.collides,g=c.overlaps,b=0;b<m;b++){var E=d[b],A=E.parts.length,v=A===1?0:1;if(g(E.bounds,x))for(var S=v;S<A;S++){var y=E.parts[S];if(g(y.bounds,x)){var T=p(y,h);if(T){l.push(T);break}}}}return l},n.ray=function(h,d,l,m){m=m||1e-100;for(var x=a.angle(d,l),p=a.magnitude(a.sub(d,l)),g=(l.x+d.x)*.5,b=(l.y+d.y)*.5,E=u.rectangle(g,b,p,m,{angle:x}),A=n.collides(E,h),v=0;v<A.length;v+=1){var S=A[v];S.body=S.bodyB=S.bodyA}return A},n.region=function(h,d,l){for(var m=[],x=0;x<h.length;x++){var p=h[x],g=c.overlaps(p.bounds,d);(g&&!l||!g&&l)&&m.push(p)}return m},n.point=function(h,d){for(var l=[],m=0;m<h.length;m++){var x=h[m];if(c.contains(x.bounds,d))for(var p=x.parts.length===1?0:1;p<x.parts.length;p++){var g=x.parts[p];if(c.contains(g.bounds,d)&&f.contains(g.vertices,d)){l.push(x);break}}}return l}})()},function(t,i,r){var n={};t.exports=n;var a=r(4),o=r(0),c=r(6),u=r(1),f=r(5),h=r(2),d=r(14);(function(){var l,m;typeof window!="undefined"&&(l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(v){window.setTimeout(function(){v(o.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(v){var S={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!v.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},y=o.extend(S,v);return y.canvas&&(y.canvas.width=y.options.width||y.canvas.width,y.canvas.height=y.options.height||y.canvas.height),y.mouse=v.mouse,y.engine=v.engine,y.canvas=y.canvas||g(y.options.width,y.options.height),y.context=y.canvas.getContext("2d"),y.textures={},y.bounds=y.bounds||{min:{x:0,y:0},max:{x:y.canvas.width,y:y.canvas.height}},y.controller=n,y.options.showBroadphase=!1,y.options.pixelRatio!==1&&n.setPixelRatio(y,y.options.pixelRatio),o.isElement(y.element)&&y.element.appendChild(y.canvas),y},n.run=function(v){(function S(y){v.frameRequestId=l(S),x(v,y),n.world(v,y),v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0),(v.options.showStats||v.options.showDebug)&&n.stats(v,v.context,y),(v.options.showPerformance||v.options.showDebug)&&n.performance(v,v.context,y),v.context.setTransform(1,0,0,1,0,0)})()},n.stop=function(v){m(v.frameRequestId)},n.setPixelRatio=function(v,S){var y=v.options,T=v.canvas;S==="auto"&&(S=b(T)),y.pixelRatio=S,T.setAttribute("data-pixel-ratio",S),T.width=y.width*S,T.height=y.height*S,T.style.width=y.width+"px",T.style.height=y.height+"px"},n.setSize=function(v,S,y){v.options.width=S,v.options.height=y,v.bounds.max.x=v.bounds.min.x+S,v.bounds.max.y=v.bounds.min.y+y,v.options.pixelRatio!==1?n.setPixelRatio(v,v.options.pixelRatio):(v.canvas.width=S,v.canvas.height=y)},n.lookAt=function(v,S,y,T){T=typeof T!="undefined"?T:!0,S=o.isArray(S)?S:[S],y=y||{x:0,y:0};for(var M={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},_=0;_<S.length;_+=1){var w=S[_],R=w.bounds?w.bounds.min:w.min||w.position||w,L=w.bounds?w.bounds.max:w.max||w.position||w;R&&L&&(R.x<M.min.x&&(M.min.x=R.x),L.x>M.max.x&&(M.max.x=L.x),R.y<M.min.y&&(M.min.y=R.y),L.y>M.max.y&&(M.max.y=L.y))}var F=M.max.x-M.min.x+2*y.x,N=M.max.y-M.min.y+2*y.y,z=v.canvas.height,W=v.canvas.width,G=W/z,Z=F/N,ee=1,he=1;Z>G?he=Z/G:ee=G/Z,v.options.hasBounds=!0,v.bounds.min.x=M.min.x,v.bounds.max.x=M.min.x+F*ee,v.bounds.min.y=M.min.y,v.bounds.max.y=M.min.y+N*he,T&&(v.bounds.min.x+=F*.5-F*ee*.5,v.bounds.max.x+=F*.5-F*ee*.5,v.bounds.min.y+=N*.5-N*he*.5,v.bounds.max.y+=N*.5-N*he*.5),v.bounds.min.x-=y.x,v.bounds.max.x-=y.x,v.bounds.min.y-=y.y,v.bounds.max.y-=y.y,v.mouse&&(d.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.canvas.width,y:(v.bounds.max.y-v.bounds.min.y)/v.canvas.height}),d.setOffset(v.mouse,v.bounds.min))},n.startViewTransform=function(v){var S=v.bounds.max.x-v.bounds.min.x,y=v.bounds.max.y-v.bounds.min.y,T=S/v.options.width,M=y/v.options.height;v.context.setTransform(v.options.pixelRatio/T,0,0,v.options.pixelRatio/M,0,0),v.context.translate(-v.bounds.min.x,-v.bounds.min.y)},n.endViewTransform=function(v){v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0)},n.world=function(v,S){var y=o.now(),T=v.engine,M=T.world,_=v.canvas,w=v.context,R=v.options,L=v.timing,F=c.allBodies(M),N=c.allConstraints(M),z=R.wireframes?R.wireframeBackground:R.background,W=[],G=[],Z,ee={timestamp:T.timing.timestamp};if(f.trigger(v,"beforeRender",ee),v.currentBackground!==z&&A(v,z),w.globalCompositeOperation="source-in",w.fillStyle="transparent",w.fillRect(0,0,_.width,_.height),w.globalCompositeOperation="source-over",R.hasBounds){for(Z=0;Z<F.length;Z++){var he=F[Z];u.overlaps(he.bounds,v.bounds)&&W.push(he)}for(Z=0;Z<N.length;Z++){var be=N[Z],Ue=be.bodyA,We=be.bodyB,He=be.pointA,k=be.pointB;Ue&&(He=h.add(Ue.position,be.pointA)),We&&(k=h.add(We.position,be.pointB)),!(!He||!k)&&(u.contains(v.bounds,He)||u.contains(v.bounds,k))&&G.push(be)}n.startViewTransform(v),v.mouse&&(d.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.options.width,y:(v.bounds.max.y-v.bounds.min.y)/v.options.height}),d.setOffset(v.mouse,v.bounds.min))}else G=N,W=F,v.options.pixelRatio!==1&&v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0);!R.wireframes||T.enableSleeping&&R.showSleeping?n.bodies(v,W,w):(R.showConvexHulls&&n.bodyConvexHulls(v,W,w),n.bodyWireframes(v,W,w)),R.showBounds&&n.bodyBounds(v,W,w),(R.showAxes||R.showAngleIndicator)&&n.bodyAxes(v,W,w),R.showPositions&&n.bodyPositions(v,W,w),R.showVelocity&&n.bodyVelocity(v,W,w),R.showIds&&n.bodyIds(v,W,w),R.showSeparations&&n.separations(v,T.pairs.list,w),R.showCollisions&&n.collisions(v,T.pairs.list,w),R.showVertexNumbers&&n.vertexNumbers(v,W,w),R.showMousePosition&&n.mousePosition(v,v.mouse,w),n.constraints(G,w),R.hasBounds&&n.endViewTransform(v),f.trigger(v,"afterRender",ee),L.lastElapsed=o.now()-y},n.stats=function(v,S,y){for(var T=v.engine,M=T.world,_=c.allBodies(M),w=0,R=55,L=44,F=0,N=0,z=0;z<_.length;z+=1)w+=_[z].parts.length;var W={Part:w,Body:_.length,Cons:c.allConstraints(M).length,Comp:c.allComposites(M).length,Pair:T.pairs.list.length};S.fillStyle="#0e0f19",S.fillRect(F,N,R*5.5,L),S.font="12px Arial",S.textBaseline="top",S.textAlign="right";for(var G in W){var Z=W[G];S.fillStyle="#aaa",S.fillText(G,F+R,N+8),S.fillStyle="#eee",S.fillText(Z,F+R,N+26),F+=R}},n.performance=function(v,S){var y=v.engine,T=v.timing,M=T.deltaHistory,_=T.elapsedHistory,w=T.timestampElapsedHistory,R=T.engineDeltaHistory,L=T.engineUpdatesHistory,F=T.engineElapsedHistory,N=y.timing.lastUpdatesPerFrame,z=y.timing.lastDelta,W=p(M),G=p(_),Z=p(R),ee=p(L),he=p(F),be=p(w),Ue=be/W||0,We=Math.round(W/z),He=1e3/W||0,k=4,J=12,se=60,Ce=34,xe=10,Pe=69;S.fillStyle="#0e0f19",S.fillRect(0,50,J*5+se*6+22,Ce),n.status(S,xe,Pe,se,k,M.length,Math.round(He)+" fps",He/n._goodFps,function(qe){return M[qe]/W-1}),n.status(S,xe+J+se,Pe,se,k,R.length,z.toFixed(2)+" dt",n._goodDelta/z,function(qe){return R[qe]/Z-1}),n.status(S,xe+(J+se)*2,Pe,se,k,L.length,N+" upf",Math.pow(o.clamp(ee/We||1,0,1),4),function(qe){return L[qe]/ee-1}),n.status(S,xe+(J+se)*3,Pe,se,k,F.length,he.toFixed(2)+" ut",1-N*he/n._goodFps,function(qe){return F[qe]/he-1}),n.status(S,xe+(J+se)*4,Pe,se,k,_.length,G.toFixed(2)+" rt",1-G/n._goodFps,function(qe){return _[qe]/G-1}),n.status(S,xe+(J+se)*5,Pe,se,k,w.length,Ue.toFixed(2)+" x",Ue*Ue*Ue,function(qe){return(w[qe]/M[qe]/Ue||0)-1})},n.status=function(v,S,y,T,M,_,w,R,L){v.strokeStyle="#888",v.fillStyle="#444",v.lineWidth=1,v.fillRect(S,y+7,T,1),v.beginPath(),v.moveTo(S,y+7-M*o.clamp(.4*L(0),-2,2));for(var F=0;F<T;F+=1)v.lineTo(S+F,y+7-(F<_?M*o.clamp(.4*L(F),-2,2):0));v.stroke(),v.fillStyle="hsl("+o.clamp(25+95*R,0,120)+",100%,60%)",v.fillRect(S,y-7,4,4),v.font="12px Arial",v.textBaseline="middle",v.textAlign="right",v.fillStyle="#eee",v.fillText(w,S+T,y-5)},n.constraints=function(v,S){for(var y=S,T=0;T<v.length;T++){var M=v[T];if(!(!M.render.visible||!M.pointA||!M.pointB)){var _=M.bodyA,w=M.bodyB,R,L;if(_?R=h.add(_.position,M.pointA):R=M.pointA,M.render.type==="pin")y.beginPath(),y.arc(R.x,R.y,3,0,2*Math.PI),y.closePath();else{if(w?L=h.add(w.position,M.pointB):L=M.pointB,y.beginPath(),y.moveTo(R.x,R.y),M.render.type==="spring")for(var F=h.sub(L,R),N=h.perp(h.normalise(F)),z=Math.ceil(o.clamp(M.length/5,12,20)),W,G=1;G<z;G+=1)W=G%2===0?1:-1,y.lineTo(R.x+F.x*(G/z)+N.x*W*4,R.y+F.y*(G/z)+N.y*W*4);y.lineTo(L.x,L.y)}M.render.lineWidth&&(y.lineWidth=M.render.lineWidth,y.strokeStyle=M.render.strokeStyle,y.stroke()),M.render.anchors&&(y.fillStyle=M.render.strokeStyle,y.beginPath(),y.arc(R.x,R.y,3,0,2*Math.PI),y.arc(L.x,L.y,3,0,2*Math.PI),y.closePath(),y.fill())}}},n.bodies=function(v,S,y){var T=y;v.engine;var M=v.options,_=M.showInternalEdges||!M.wireframes,w,R,L,F;for(L=0;L<S.length;L++)if(w=S[L],!!w.render.visible){for(F=w.parts.length>1?1:0;F<w.parts.length;F++)if(R=w.parts[F],!!R.render.visible){if(M.showSleeping&&w.isSleeping?T.globalAlpha=.5*R.render.opacity:R.render.opacity!==1&&(T.globalAlpha=R.render.opacity),R.render.sprite&&R.render.sprite.texture&&!M.wireframes){var N=R.render.sprite,z=E(v,N.texture);T.translate(R.position.x,R.position.y),T.rotate(R.angle),T.drawImage(z,z.width*-N.xOffset*N.xScale,z.height*-N.yOffset*N.yScale,z.width*N.xScale,z.height*N.yScale),T.rotate(-R.angle),T.translate(-R.position.x,-R.position.y)}else{if(R.circleRadius)T.beginPath(),T.arc(R.position.x,R.position.y,R.circleRadius,0,2*Math.PI);else{T.beginPath(),T.moveTo(R.vertices[0].x,R.vertices[0].y);for(var W=1;W<R.vertices.length;W++)!R.vertices[W-1].isInternal||_?T.lineTo(R.vertices[W].x,R.vertices[W].y):T.moveTo(R.vertices[W].x,R.vertices[W].y),R.vertices[W].isInternal&&!_&&T.moveTo(R.vertices[(W+1)%R.vertices.length].x,R.vertices[(W+1)%R.vertices.length].y);T.lineTo(R.vertices[0].x,R.vertices[0].y),T.closePath()}M.wireframes?(T.lineWidth=1,T.strokeStyle=v.options.wireframeStrokeStyle,T.stroke()):(T.fillStyle=R.render.fillStyle,R.render.lineWidth&&(T.lineWidth=R.render.lineWidth,T.strokeStyle=R.render.strokeStyle,T.stroke()),T.fill())}T.globalAlpha=1}}},n.bodyWireframes=function(v,S,y){var T=y,M=v.options.showInternalEdges,_,w,R,L,F;for(T.beginPath(),R=0;R<S.length;R++)if(_=S[R],!!_.render.visible)for(F=_.parts.length>1?1:0;F<_.parts.length;F++){for(w=_.parts[F],T.moveTo(w.vertices[0].x,w.vertices[0].y),L=1;L<w.vertices.length;L++)!w.vertices[L-1].isInternal||M?T.lineTo(w.vertices[L].x,w.vertices[L].y):T.moveTo(w.vertices[L].x,w.vertices[L].y),w.vertices[L].isInternal&&!M&&T.moveTo(w.vertices[(L+1)%w.vertices.length].x,w.vertices[(L+1)%w.vertices.length].y);T.lineTo(w.vertices[0].x,w.vertices[0].y)}T.lineWidth=1,T.strokeStyle=v.options.wireframeStrokeStyle,T.stroke()},n.bodyConvexHulls=function(v,S,y){var T=y,M,_,w;for(T.beginPath(),_=0;_<S.length;_++)if(M=S[_],!(!M.render.visible||M.parts.length===1)){for(T.moveTo(M.vertices[0].x,M.vertices[0].y),w=1;w<M.vertices.length;w++)T.lineTo(M.vertices[w].x,M.vertices[w].y);T.lineTo(M.vertices[0].x,M.vertices[0].y)}T.lineWidth=1,T.strokeStyle="rgba(255,255,255,0.2)",T.stroke()},n.vertexNumbers=function(v,S,y){var T=y,M,_,w;for(M=0;M<S.length;M++){var R=S[M].parts;for(w=R.length>1?1:0;w<R.length;w++){var L=R[w];for(_=0;_<L.vertices.length;_++)T.fillStyle="rgba(255,255,255,0.2)",T.fillText(M+"_"+_,L.position.x+(L.vertices[_].x-L.position.x)*.8,L.position.y+(L.vertices[_].y-L.position.y)*.8)}}},n.mousePosition=function(v,S,y){var T=y;T.fillStyle="rgba(255,255,255,0.8)",T.fillText(S.position.x+"  "+S.position.y,S.position.x+5,S.position.y-5)},n.bodyBounds=function(v,S,y){var T=y;v.engine;var M=v.options;T.beginPath();for(var _=0;_<S.length;_++){var w=S[_];if(w.render.visible)for(var R=S[_].parts,L=R.length>1?1:0;L<R.length;L++){var F=R[L];T.rect(F.bounds.min.x,F.bounds.min.y,F.bounds.max.x-F.bounds.min.x,F.bounds.max.y-F.bounds.min.y)}}M.wireframes?T.strokeStyle="rgba(255,255,255,0.08)":T.strokeStyle="rgba(0,0,0,0.1)",T.lineWidth=1,T.stroke()},n.bodyAxes=function(v,S,y){var T=y;v.engine;var M=v.options,_,w,R,L;for(T.beginPath(),w=0;w<S.length;w++){var F=S[w],N=F.parts;if(!!F.render.visible)if(M.showAxes)for(R=N.length>1?1:0;R<N.length;R++)for(_=N[R],L=0;L<_.axes.length;L++){var z=_.axes[L];T.moveTo(_.position.x,_.position.y),T.lineTo(_.position.x+z.x*20,_.position.y+z.y*20)}else for(R=N.length>1?1:0;R<N.length;R++)for(_=N[R],L=0;L<_.axes.length;L++)T.moveTo(_.position.x,_.position.y),T.lineTo((_.vertices[0].x+_.vertices[_.vertices.length-1].x)/2,(_.vertices[0].y+_.vertices[_.vertices.length-1].y)/2)}M.wireframes?(T.strokeStyle="indianred",T.lineWidth=1):(T.strokeStyle="rgba(255, 255, 255, 0.4)",T.globalCompositeOperation="overlay",T.lineWidth=2),T.stroke(),T.globalCompositeOperation="source-over"},n.bodyPositions=function(v,S,y){var T=y;v.engine;var M=v.options,_,w,R,L;for(T.beginPath(),R=0;R<S.length;R++)if(_=S[R],!!_.render.visible)for(L=0;L<_.parts.length;L++)w=_.parts[L],T.arc(w.position.x,w.position.y,3,0,2*Math.PI,!1),T.closePath();for(M.wireframes?T.fillStyle="indianred":T.fillStyle="rgba(0,0,0,0.5)",T.fill(),T.beginPath(),R=0;R<S.length;R++)_=S[R],_.render.visible&&(T.arc(_.positionPrev.x,_.positionPrev.y,2,0,2*Math.PI,!1),T.closePath());T.fillStyle="rgba(255,165,0,0.8)",T.fill()},n.bodyVelocity=function(v,S,y){var T=y;T.beginPath();for(var M=0;M<S.length;M++){var _=S[M];if(!!_.render.visible){var w=a.getVelocity(_);T.moveTo(_.position.x,_.position.y),T.lineTo(_.position.x+w.x,_.position.y+w.y)}}T.lineWidth=3,T.strokeStyle="cornflowerblue",T.stroke()},n.bodyIds=function(v,S,y){var T=y,M,_;for(M=0;M<S.length;M++)if(!!S[M].render.visible){var w=S[M].parts;for(_=w.length>1?1:0;_<w.length;_++){var R=w[_];T.font="12px Arial",T.fillStyle="rgba(255,255,255,0.5)",T.fillText(R.id,R.position.x+10,R.position.y-10)}}},n.collisions=function(v,S,y){var T=y,M=v.options,_,w,R,L;for(T.beginPath(),R=0;R<S.length;R++)if(_=S[R],!!_.isActive)for(w=_.collision,L=0;L<_.contactCount;L++){var F=_.contacts[L],N=F.vertex;T.rect(N.x-1.5,N.y-1.5,3.5,3.5)}for(M.wireframes?T.fillStyle="rgba(255,255,255,0.7)":T.fillStyle="orange",T.fill(),T.beginPath(),R=0;R<S.length;R++)if(_=S[R],!!_.isActive&&(w=_.collision,_.contactCount>0)){var z=_.contacts[0].vertex.x,W=_.contacts[0].vertex.y;_.contactCount===2&&(z=(_.contacts[0].vertex.x+_.contacts[1].vertex.x)/2,W=(_.contacts[0].vertex.y+_.contacts[1].vertex.y)/2),w.bodyB===w.supports[0].body||w.bodyA.isStatic===!0?T.moveTo(z-w.normal.x*8,W-w.normal.y*8):T.moveTo(z+w.normal.x*8,W+w.normal.y*8),T.lineTo(z,W)}M.wireframes?T.strokeStyle="rgba(255,165,0,0.7)":T.strokeStyle="orange",T.lineWidth=1,T.stroke()},n.separations=function(v,S,y){var T=y,M=v.options,_,w,R,L,F;for(T.beginPath(),F=0;F<S.length;F++)if(_=S[F],!!_.isActive){w=_.collision,R=w.bodyA,L=w.bodyB;var N=1;!L.isStatic&&!R.isStatic&&(N=.5),L.isStatic&&(N=0),T.moveTo(L.position.x,L.position.y),T.lineTo(L.position.x-w.penetration.x*N,L.position.y-w.penetration.y*N),N=1,!L.isStatic&&!R.isStatic&&(N=.5),R.isStatic&&(N=0),T.moveTo(R.position.x,R.position.y),T.lineTo(R.position.x+w.penetration.x*N,R.position.y+w.penetration.y*N)}M.wireframes?T.strokeStyle="rgba(255,165,0,0.5)":T.strokeStyle="orange",T.stroke()},n.inspector=function(v,S){v.engine;var y=v.selected,T=v.render,M=T.options,_;if(M.hasBounds){var w=T.bounds.max.x-T.bounds.min.x,R=T.bounds.max.y-T.bounds.min.y,L=w/T.options.width,F=R/T.options.height;S.scale(1/L,1/F),S.translate(-T.bounds.min.x,-T.bounds.min.y)}for(var N=0;N<y.length;N++){var z=y[N].data;switch(S.translate(.5,.5),S.lineWidth=1,S.strokeStyle="rgba(255,165,0,0.9)",S.setLineDash([1,2]),z.type){case"body":_=z.bounds,S.beginPath(),S.rect(Math.floor(_.min.x-3),Math.floor(_.min.y-3),Math.floor(_.max.x-_.min.x+6),Math.floor(_.max.y-_.min.y+6)),S.closePath(),S.stroke();break;case"constraint":var W=z.pointA;z.bodyA&&(W=z.pointB),S.beginPath(),S.arc(W.x,W.y,10,0,2*Math.PI),S.closePath(),S.stroke();break}S.setLineDash([]),S.translate(-.5,-.5)}v.selectStart!==null&&(S.translate(.5,.5),S.lineWidth=1,S.strokeStyle="rgba(255,165,0,0.6)",S.fillStyle="rgba(255,165,0,0.1)",_=v.selectBounds,S.beginPath(),S.rect(Math.floor(_.min.x),Math.floor(_.min.y),Math.floor(_.max.x-_.min.x),Math.floor(_.max.y-_.min.y)),S.closePath(),S.stroke(),S.fill(),S.translate(-.5,-.5)),M.hasBounds&&S.setTransform(1,0,0,1,0,0)};var x=function(v,S){var y=v.engine,T=v.timing,M=T.historySize,_=y.timing.timestamp;T.delta=S-T.lastTime||n._goodDelta,T.lastTime=S,T.timestampElapsed=_-T.lastTimestamp||0,T.lastTimestamp=_,T.deltaHistory.unshift(T.delta),T.deltaHistory.length=Math.min(T.deltaHistory.length,M),T.engineDeltaHistory.unshift(y.timing.lastDelta),T.engineDeltaHistory.length=Math.min(T.engineDeltaHistory.length,M),T.timestampElapsedHistory.unshift(T.timestampElapsed),T.timestampElapsedHistory.length=Math.min(T.timestampElapsedHistory.length,M),T.engineUpdatesHistory.unshift(y.timing.lastUpdatesPerFrame),T.engineUpdatesHistory.length=Math.min(T.engineUpdatesHistory.length,M),T.engineElapsedHistory.unshift(y.timing.lastElapsed),T.engineElapsedHistory.length=Math.min(T.engineElapsedHistory.length,M),T.elapsedHistory.unshift(T.lastElapsed),T.elapsedHistory.length=Math.min(T.elapsedHistory.length,M)},p=function(v){for(var S=0,y=0;y<v.length;y+=1)S+=v[y];return S/v.length||0},g=function(v,S){var y=document.createElement("canvas");return y.width=v,y.height=S,y.oncontextmenu=function(){return!1},y.onselectstart=function(){return!1},y},b=function(v){var S=v.getContext("2d"),y=window.devicePixelRatio||1,T=S.webkitBackingStorePixelRatio||S.mozBackingStorePixelRatio||S.msBackingStorePixelRatio||S.oBackingStorePixelRatio||S.backingStorePixelRatio||1;return y/T},E=function(v,S){var y=v.textures[S];return y||(y=v.textures[S]=new Image,y.src=S,y)},A=function(v,S){var y=S;/(jpg|gif|png)$/.test(S)&&(y="url("+S+")"),v.canvas.style.background=y,v.canvas.style.backgroundSize="contain",v.currentBackground=S}})()},function(t,i,r){var n={};t.exports=n;var a=r(5),o=r(17),c=r(0);(function(){n._maxFrameDelta=1e3/15,n._frameDeltaFallback=1e3/60,n._timeBufferMargin=1.5,n._elapsedNextEstimate=1,n._smoothingLowerBound=.1,n._smoothingUpperBound=.9,n.create=function(f){var h={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},d=c.extend(h,f);return d.fps=0,d},n.run=function(f,h){return f.timeBuffer=n._frameDeltaFallback,function d(l){f.frameRequestId=n._onNextFrame(f,d),l&&f.enabled&&n.tick(f,h,l)}(),f},n.tick=function(f,h,d){var l=c.now(),m=f.delta,x=0,p=d-f.timeLastTick;if((!p||!f.timeLastTick||p>Math.max(n._maxFrameDelta,f.maxFrameTime))&&(p=f.frameDelta||n._frameDeltaFallback),f.frameDeltaSmoothing){f.frameDeltaHistory.push(p),f.frameDeltaHistory=f.frameDeltaHistory.slice(-f.frameDeltaHistorySize);var g=f.frameDeltaHistory.slice(0).sort(),b=f.frameDeltaHistory.slice(g.length*n._smoothingLowerBound,g.length*n._smoothingUpperBound),E=u(b);p=E||p}f.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),f.frameDelta=p,f.timeLastTick=d,f.timeBuffer+=f.frameDelta,f.timeBuffer=c.clamp(f.timeBuffer,0,f.frameDelta+m*n._timeBufferMargin),f.lastUpdatesDeferred=0;var A=f.maxUpdates||Math.ceil(f.maxFrameTime/m),v={timestamp:h.timing.timestamp};a.trigger(f,"beforeTick",v),a.trigger(f,"tick",v);for(var S=c.now();m>0&&f.timeBuffer>=m*n._timeBufferMargin;){a.trigger(f,"beforeUpdate",v),o.update(h,m),a.trigger(f,"afterUpdate",v),f.timeBuffer-=m,x+=1;var y=c.now()-l,T=c.now()-S,M=y+n._elapsedNextEstimate*T/x;if(x>=A||M>f.maxFrameTime){f.lastUpdatesDeferred=Math.round(Math.max(0,f.timeBuffer/m-n._timeBufferMargin));break}}h.timing.lastUpdatesPerFrame=x,a.trigger(f,"afterTick",v),f.frameDeltaHistory.length>=100&&(f.lastUpdatesDeferred&&Math.round(f.frameDelta/m)>A?c.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):f.lastUpdatesDeferred&&c.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof f.isFixed!="undefined"&&c.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(f.deltaMin||f.deltaMax)&&c.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),f.fps!==0&&c.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},n.stop=function(f){n._cancelNextFrame(f)},n._onNextFrame=function(f,h){if(typeof window!="undefined"&&window.requestAnimationFrame)f.frameRequestId=window.requestAnimationFrame(h);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return f.frameRequestId},n._cancelNextFrame=function(f){if(typeof window!="undefined"&&window.cancelAnimationFrame)window.cancelAnimationFrame(f.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(f){for(var h=0,d=f.length,l=0;l<d;l+=1)h+=f[l];return h/d||0}})()},function(t,i,r){var n={};t.exports=n;var a=r(8),o=r(0),c=o.deprecated;(function(){n.collides=function(u,f){return a.collides(u,f)},c(n,"collides","SAT.collides \u27A4 replaced by Collision.collides")})()},function(t,i,r){var n={};t.exports=n,r(1);var a=r(0);(function(){n.pathToVertices=function(o,c){typeof window!="undefined"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,f,h,d,l,m,x,p,g,b,E=[],A,v,S=0,y=0,T=0;c=c||15;var M=function(w,R,L){var F=L%2===1&&L>1;if(!g||w!=g.x||R!=g.y){g&&F?(A=g.x,v=g.y):(A=0,v=0);var N={x:A+w,y:v+R};(F||!g)&&(g=N),E.push(N),y=A+w,T=v+R}},_=function(w){var R=w.pathSegTypeAsLetter.toUpperCase();if(R!=="Z"){switch(R){case"M":case"L":case"T":case"C":case"S":case"Q":y=w.x,T=w.y;break;case"H":y=w.x;break;case"V":T=w.y;break}M(y,T,w.pathSegType)}};for(n._svgPathToAbsolute(o),h=o.getTotalLength(),m=[],u=0;u<o.pathSegList.numberOfItems;u+=1)m.push(o.pathSegList.getItem(u));for(x=m.concat();S<h;){if(b=o.getPathSegAtLength(S),l=m[b],l!=p){for(;x.length&&x[0]!=l;)_(x.shift());p=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":d=o.getPointAtLength(S),M(d.x,d.y,0);break}S+=c}for(u=0,f=x.length;u<f;++u)_(x[u]);return E},n._svgPathToAbsolute=function(o){for(var c,u,f,h,d,l,m=o.pathSegList,x=0,p=0,g=m.numberOfItems,b=0;b<g;++b){var E=m.getItem(b),A=E.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in E&&(x=E.x),"y"in E&&(p=E.y);else switch("x1"in E&&(f=x+E.x1),"x2"in E&&(d=x+E.x2),"y1"in E&&(h=p+E.y1),"y2"in E&&(l=p+E.y2),"x"in E&&(x+=E.x),"y"in E&&(p+=E.y),A){case"m":m.replaceItem(o.createSVGPathSegMovetoAbs(x,p),b);break;case"l":m.replaceItem(o.createSVGPathSegLinetoAbs(x,p),b);break;case"h":m.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(x),b);break;case"v":m.replaceItem(o.createSVGPathSegLinetoVerticalAbs(p),b);break;case"c":m.replaceItem(o.createSVGPathSegCurvetoCubicAbs(x,p,f,h,d,l),b);break;case"s":m.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(x,p,d,l),b);break;case"q":m.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(x,p,f,h),b);break;case"t":m.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(x,p),b);break;case"a":m.replaceItem(o.createSVGPathSegArcAbs(x,p,E.r1,E.r2,E.angle,E.largeArcFlag,E.sweepFlag),b);break;case"z":case"Z":x=c,p=u;break}(A=="M"||A=="m")&&(c=x,u=p)}}})()},function(t,i,r){var n={};t.exports=n;var a=r(6);r(0),function(){n.create=a.create,n.add=a.add,n.remove=a.remove,n.clear=a.clear,n.addComposite=a.addComposite,n.addBody=a.addBody,n.addConstraint=a.addConstraint}()}])})})(Un);var pp=hp(Un.exports),mp=qo({__proto__:null,default:pp},[Un.exports]);const xp=`
    varying vec2 vUv;
    void main() {
      vec3 pos = position.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
      vUv = uv;
    }
  `,gp=`
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
  `;class vp{constructor(){this.size=64,this.width=this.height=this.size,this.maxAge=64,this.radius=.16*this.size,this.speed=1/this.maxAge,this.trail=[],this.last=null,this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new _t(this.canvas)}update(){this.clear();let e=this.speed;for(let t=this.trail.length-1;t>=0;t--){const i=this.trail[t];let r=i.force*e*(1-i.age/this.maxAge);i.x+=i.vx*r,i.y+=i.vy*r,i.age++,i.age>this.maxAge?this.trail.splice(t,1):this.drawPoint(i)}this.texture.needsUpdate=!0}clear(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){let t=0,i=0,r=0;const n=this.last;if(n){const a=e.x-n.x,o=e.y-n.y;if(a===0&&o===0)return;const c=a*a+o*o;let u=Math.sqrt(c);i=a/u,r=o/u,t=Math.min(c*2e4,2)}this.last={x:e.x,y:e.y},this.trail.push({x:e.x,y:e.y,age:0,force:t,vx:i,vy:r})}drawPoint(e){const t={x:e.x*this.width,y:(1-e.y)*this.height};let i=1;if(e.age<this.maxAge*.3)i=Math.sin(e.age/(this.maxAge*.3)*(Math.PI/2));else{const o=1-(e.age-this.maxAge*.3)/(this.maxAge*.7);i=-o*(o-2)}i*=e.force;const r=this.radius;let n=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${i*255}`,a=this.size*5;this.ctx.shadowOffsetX=a,this.ctx.shadowOffsetY=a,this.ctx.shadowBlur=r*1,this.ctx.shadowColor=`rgba(${n},${.2*i})`,this.ctx.beginPath(),this.ctx.fillStyle="rgba(255,0,0,1)",this.ctx.arc(t.x-a,t.y-a,r,0,Math.PI*2),this.ctx.fill()}}function _p(s){if(!s)return null;const e=window.innerWidth,t=window.innerHeight,i=new Ec,r=new To(e/-2,e/2,t/2,t/-2,1,1e3);r.position.z=1;const n=new xc,a=new dp({canvas:s,antialias:!0});a.setSize(e,t),a.setPixelRatio(window.devicePixelRatio);const o=new vp,c=new q(.33,.53,.96),u=new q(.5,.7,1),f={uTime:{value:0},uResolution:{value:new Je(e,t)},uColor1:{value:u},uColor3:{value:u},uColor5:{value:u},uColor2:{value:c},uColor4:{value:c},uColor6:{value:c},uSpeed:{value:1.2},uIntensity:{value:1.8},uTouchTexture:{value:o.texture},uGrainIntensity:{value:.02},uZoom:{value:1},uDarkNavy:{value:c},uGradientSize:{value:.5},uGradientCount:{value:4},uColor1Weight:{value:1},uColor2Weight:{value:1}},h=new oi(e,t,1,1),d=new $t({uniforms:f,vertexShader:xp,fragmentShader:gp}),l=new fn(h,d);n.add(l);let m;const x=()=>{const b=i.getDelta();f.uTime.value+=b,o.update(),a.render(n,r),m=requestAnimationFrame(x)},p=()=>{const b=window.innerWidth,E=window.innerHeight;r.left=b/-2,r.right=b/2,r.top=E/2,r.bottom=E/-2,r.updateProjectionMatrix(),a.setSize(b,E),f.uResolution.value.set(b,E),l.geometry.dispose(),l.geometry=new oi(b,E,1,1)},g=b=>{const E=b.clientX/window.innerWidth,A=(window.innerHeight-b.clientY)/window.innerHeight;o.addTouch({x:E,y:A})};return window.addEventListener("resize",p),window.addEventListener("mousemove",g),x(),{destroy:()=>{window.removeEventListener("resize",p),window.removeEventListener("mousemove",g),cancelAnimationFrame(m),a.dispose(),d.dispose(),h.dispose()}}}var Sp="/portfolio/assets/profile_img01.5c13d2f0.png",Mp="/portfolio/assets/mac_3d_icon.0444e804.png",ja="/portfolio/assets/bio03.0871549c.mp4",yp="/portfolio/assets/bio02.db7f0bf8.mp4",bp="/portfolio/assets/profile_img02.a3ad6b7d.png",Ep="/portfolio/assets/macbook.fffc7b69.png";Xe.registerPlugin(Qn);const Tp={name:"AboutPage",data(){return{texts:[{en:"User-Centric"},{en:"Pixel-Perfect"},{en:"Semantic"},{en:"Responsive"},{en:"Accessible"},{en:"Optimized"},{en:"Interactive"}],index:0,currentEnText:"",enIndex:0,isDeleting:!1,typingSpeed:80,deletingSpeed:70,delayAfterTyping:2e3,timer:null,rollingTls:[],horizontalScrollTween:null,visionInstance:null,handleResize:null}},methods:{typeEn(){clearTimeout(this.timer);const s=this.index%this.texts.length,e=this.texts[s].en;if(this.isDeleting)this.currentEnText=e.substring(0,this.enIndex-1),this.enIndex--,this.enIndex<=0&&(this.isDeleting=!1,this.index=(this.index+1)%this.texts.length);else if(this.currentEnText=e.substring(0,this.enIndex+1),this.enIndex++,this.enIndex>=e.length){this.isDeleting=!0,this.timer=setTimeout(this.typeEn,this.delayAfterTyping);return}this.timer=setTimeout(this.typeEn,this.isDeleting?this.deletingSpeed:this.typingSpeed)},initRollingText(){const s=document.querySelectorAll(".rolling-content");s.length!==0&&s.forEach((e,t)=>{const i=t===1,r=e.offsetWidth/2,n=i?-r:0,a=i?0:-r;Xe.set(e,{x:n});const o=Xe.to(e,{x:a,duration:35,ease:"none",repeat:-1});Qn.create({trigger:".rolling-section",start:"top bottom",end:"bottom top",onUpdate:c=>{const u=Math.abs(c.getVelocity()/150),f=1+u;Xe.to(o,{timeScale:f,duration:.3}),Xe.to(o,{timeScale:1,delay:.5,duration:1})}}),this.rollingTls.push(o)})},initIntroAnimation(){const s=document.querySelectorAll(".intro-section .split-text");if(s.length===0)return;s.forEach(r=>{const n=r.innerHTML;r.innerHTML="",n.split(/(<br\s*\/?>)/i).forEach(o=>{o.toLowerCase().startsWith("<br")?r.innerHTML+=o:[...o].forEach(c=>{const u=document.createElement("span");u.classList.add("char"),u.innerText=c===" "?"\xA0":c,r.appendChild(u)})})});const e=document.querySelectorAll(".en-text .char"),t=document.querySelector(".kr-text");Xe.timeline({scrollTrigger:{trigger:".intro-section",start:"top top",end:"+=2000",pin:!0,scrub:1,anticipatePin:1}}).to(e,{color:"#fff",opacity:1,stagger:.1,ease:"none"}).to(t,{opacity:1,y:0,duration:1,ease:"power2.out"}).to({},{duration:1})},initBioReveal(){document.querySelectorAll(".bio-row, .row01, .row02, .row03 .row04").forEach(e=>{const t=e.children;Xe.set(t,{opacity:0,y:50}),Xe.to(t,{opacity:1,y:0,duration:.8,stagger:.2,ease:"back.out(1.7)",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}})})},initFocus3DText(){const s=this.$refs.focusTxt,e=document.querySelector(".stage");if(!s||!e)return;const i=s.textContent.trim().split("");s.innerHTML="";const r=Math.max(200,i.length*15),n=-r,a=20,o=document.createElement("div");o.className="sphere";const c=r*1.2;Object.assign(o.style,{position:"absolute",left:"50%",top:"50%",width:`${c}px`,height:`${c}px`,background:"radial-gradient(circle at 30% 30%, #555, #000)",borderRadius:"50%",transform:"translate(-50%, -50%) translateZ(-50px)",boxShadow:"0 0 50px rgba(255,255,255,0.1)",zIndex:0}),s.appendChild(o);const u=i.map(h=>{const d=document.createElement("span");return d.innerText=h===" "?"\xA0":h,d.className="char",Object.assign(d.style,{position:"absolute",left:"50%",top:"50%",display:"inline-block",transformOrigin:`50% 50% ${n}px`,transformStyle:"preserve-3d",color:"#fff",zIndex:10,pointerEvents:"none"}),s.appendChild(d),d});Xe.set(s,{rotationZ:15,rotationX:5,transformStyle:"preserve-3d",perspective:"1000px"});const f=Xe.timeline({repeat:-1});u.forEach((h,d)=>{const l=d/u.length*360;f.fromTo(h,{rotationY:l,xPercent:-50,yPercent:-50},{rotationY:l-360,duration:a,ease:"none"},0)})},initHorizontalScroll(){const s=document.querySelector(".horizontal-section"),e=document.querySelector(".horizontal-inner"),t=document.querySelector(".planet-sphere");if(!s||!e)return;const i=Xe.to(e,{x:()=>-(e.scrollWidth-window.innerWidth),ease:"none",scrollTrigger:{trigger:s,start:"top top",end:()=>`+=${e.scrollWidth}`,pin:!0,scrub:1,invalidateOnRefresh:!0}});document.querySelectorAll(".one-page").forEach(n=>{const a=n.querySelectorAll(".reveal-text h2, .reveal-text p");a.length>0&&Xe.to(a,{clipPath:"inset(0 0% 0 0)",duration:1.2,stagger:.3,ease:"power2.inOut",scrollTrigger:{trigger:n,containerAnimation:i,start:"left 70%",toggleActions:"play none none reverse"}});const o=n.querySelectorAll(".workflow-tags .tag");o.length>0&&Xe.fromTo(o,{opacity:0,x:50},{opacity:1,x:0,rotateY:0,duration:.8,stagger:.4,ease:"back.out(1.2)",scrollTrigger:{trigger:n,containerAnimation:i,start:"left 40%",toggleActions:"play none none reverse"}})}),Qn.create({trigger:".focus-section",containerAnimation:i,start:"left 60%",onEnter:()=>{Xe.to(s,{backgroundColor:"#000000",duration:.8}),t&&Xe.to(t,{opacity:1,scale:1,duration:1.2,ease:"back.out(1.7)"})},onLeaveBack:()=>{Xe.to(s,{backgroundColor:"#ffffff",duration:.8}),t&&Xe.to(t,{opacity:0,scale:.5,duration:.8})}}),this.initIdentityAnimation(i),this.initExperienceFloating(i)},initIdentityAnimation(s){const e=document.querySelector(".identity-section");if(!e)return;const t=e.querySelector(".profile-img"),i=e.querySelectorAll(".title-wrap h2, .title-wrap p"),r=e.querySelector(".scrolling-svg-text svg");Xe.set(t,{opacity:0,x:-50}),Xe.set(i,{opacity:0,y:20}),r&&Xe.set(r,{opacity:1,clipPath:"inset(0% 100% 0% 0%)"}),Xe.to([t,...i],{opacity:1,x:0,y:0,stagger:.1,duration:.8,scrollTrigger:{trigger:e,containerAnimation:s,start:"left 70%",toggleActions:"play none none reverse"}}),r&&Xe.to(r,{clipPath:"inset(0% 0% 0% 0%)",ease:"none",scrollTrigger:{trigger:".scrolling-svg-text",containerAnimation:s,start:"left 30%",end:"center center",scrub:1}})},initExperienceFloating(s){const e=document.querySelector(".experience-section .img-wrap");if(!e)return;const t=e.querySelector(".macbook-img"),i=e.querySelector(".code-symbol"),r=e.querySelector(".code-greeting");Xe.fromTo([t,i,r],{yPercent:150,opacity:0,scale:.5},{yPercent:0,opacity:1,scale:1,duration:1.2,stagger:.1,ease:"back.out(1.5)",scrollTrigger:{trigger:".experience-section",containerAnimation:s,start:"left 75%",toggleActions:"play none none reverse",onComplete:()=>n()}});const n=()=>{Xe.getTweensOf(t).length>1||(Xe.to(t,{y:"-=25",duration:3,repeat:-1,yoyo:!0,ease:"sine.inOut"}),Xe.to(i,{y:"+=30",x:"-=15",rotation:"-=8",duration:2.5,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:.2}),Xe.to(r,{y:"-=35",x:"+=20",rotation:"+=5",duration:4,repeat:-1,yoyo:!0,ease:"sine.inOut",delay:.4}))}},initSkillsAnimation(){const s=this.$refs.skillsSection,e=Xe.utils.toArray(".skill-card"),t=this.$refs.bgTitle,i=document.querySelector(".project-section");if(!s||e.length===0||!t||!i)return;Xe.set(e,{y:"110vh"});const r=Xe.timeline({scrollTrigger:{trigger:s,start:"top top",end:`+=${e.length*80+50}%`,pin:!0,scrub:.5,pinSpacing:!0}});e.forEach((n,a)=>{a===e.length-1?r.to(n,{y:0,duration:1,ease:"none",onStart:()=>this.animateBgTitle(n.getAttribute("data-title")),onReverseComplete:()=>{const c=e[a-1].getAttribute("data-title");this.animateBgTitle(c)}},a*1.4):r.to(n,{y:0,duration:1,ease:"none",onStart:()=>this.animateBgTitle(n.getAttribute("data-title")),onReverseComplete:()=>{const c=a>0?e[a-1].getAttribute("data-title"):"Skills";this.animateBgTitle(c)}},a*1.5).to(n,{y:"-100vh",duration:1,ease:"none"},"+=0.3")}),r.fromTo(i,{y:0},{y:"-100vh",duration:2,ease:"power2.inOut",onReverseComplete:()=>{const n=e[e.length-1].getAttribute("data-title");this.animateBgTitle(n)}},"+=0.2")},animateBgTitle(s){const e=this.$refs.bgTitle;!e||e.innerText===s||(s==="Skills"?e.classList.add("is-skills"):e.classList.remove("is-skills"),Xe.killTweensOf(e),Xe.timeline().to(e,{opacity:0,duration:.25,onComplete:()=>{e.innerText=s}}).to(e,{opacity:"",duration:.35}))},initVisionPhysics(){const s=this.$refs.canvasContainer,e=document.querySelector(".main-text"),t=document.querySelector(".sub-text");if(!s||!e||!t)return;const{Engine:i,Render:r,Runner:n,Bodies:a,Composite:o,Events:c,Body:u}=mp,f=i.create(),h=n.create();h.enabled=!1;const d=r.create({element:s,engine:f,options:{width:s.clientWidth,height:s.clientHeight,background:"transparent",wireframes:!1,pixelRatio:window.devicePixelRatio||1}}),l=100,m=a.rectangle(s.clientWidth/2,s.clientHeight+l/2,s.clientWidth,l,{isStatic:!0,render:{visible:!1}}),x=a.rectangle(-l/2,s.clientHeight/2,l,s.clientHeight*2,{isStatic:!0,render:{visible:!1}}),p=a.rectangle(s.clientWidth+l/2,s.clientHeight/2,l,s.clientHeight*2,{isStatic:!0,render:{visible:!1}}),g=S=>{const y=S.getBoundingClientRect(),T=s.getBoundingClientRect();return a.rectangle(y.left-T.left+y.width/2,y.top-T.top+y.height/2,y.width,y.height,{isStatic:!0,render:{visible:!1}})},b=g(e),E=g(t),v=["DESIGN","RESPONSIVE","PUBLISHING","UX/UI","SEMANTIC","INTERACTIVE","CLEAN CODE","OPTIMIZED","ACCESSIBILITY","ANIMATION"].map((S,y)=>a.rectangle(Math.random()*s.clientWidth,-2e3,S.length*18+30,45,{restitution:.5,render:{fillStyle:"transparent",strokeStyle:"transparent"},friction:.1,label:S,chamfer:{radius:22}}));return o.add(f.world,[m,x,p,b,E,...v]),c.on(d,"afterRender",()=>{const S=d.context;v.forEach(y=>{const{x:T,y:M}=y.position,{angle:_,label:w}=y,R=w.length*18+30,L=45;S.save(),S.translate(T,M),S.rotate(_),S.beginPath(),S.strokeStyle="#ffffff",S.lineWidth=1.2,S.roundRect(-R/2,-L/2,R,L,22),S.stroke(),S.font="500 20px IBM Plex Sans KR",S.fillStyle="#ffffff",S.textAlign="center",S.textBaseline="middle",S.fillText(w,0,0),S.restore()})}),r.run(d),Qn.create({trigger:".vision-section",start:"top 70%",onEnter:()=>{v.forEach((S,y)=>{u.setPosition(S,{x:Math.random()*(s.clientWidth-100)+50,y:-100-y*150}),u.setVelocity(S,{x:0,y:0})}),h.enabled=!0,n.run(h,f)},once:!0}),{engine:f,runner:h,render:d,stop(){Un.exports.Render.stop(d),Un.exports.Runner.stop(h),Un.exports.World.clear(f.world),Un.exports.Engine.clear(f),d.canvas.remove()}}}},setup(){const s=ji(null),e=Ho(null),{x:t,y:i}=Qo(),r=a=>{Xe.to(".box",{duration:.6,rotationY:o=>45+o/projects.length*206.5+90*(a.clientX/window.innerWidth)})};return{mouseX:t,mouseY:i,containerRef:e,initGSAPProjectList:a=>{!a||projects.length===0||(Xe.set(a,{perspective:800}),projects.forEach((o,c)=>{const u=document.createElement("div");u.classList.add("box"),u.style.background=`hsl(${c/projects.length*360}, 100%, 50%)`,a.appendChild(u),Xe.set(u,{position:"absolute",left:"50%",top:"50%",x:"-50%",y:"-50%",z:600,width:300,height:600,borderRadius:20,transformOrigin:"50% 50% 1200%",rotationY:90+c/projects.length*206.5})}),window.addEventListener("mousemove",r))},blobEffect:s,handleMouseMove:r}},mounted(){history.scrollRestoration="manual";const s=document.getElementById("BlobBg");s&&(this.blobEffect=_p(s)),this.typeEn(),this.$nextTick(()=>{this.initBioReveal(),this.initIntroAnimation(),this.initHorizontalScroll(),this.initSkillsAnimation(),this.initRollingText(),this.containerRef&&this.initGSAPProjectList(this.containerRef),this.visionInstance=this.initVisionPhysics(),setTimeout(()=>{Qn.refresh(),this.initFocus3DText()},100)}),this.handleResize=()=>{clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.visionInstance&&(this.visionInstance.stop(),this.visionInstance=null),this.visionInstance=this.initVisionPhysics(),Qn.refresh()},300)},window.addEventListener("resize",this.handleResize)},beforeUnmount(){clearTimeout(this.timer),clearTimeout(this.resizeTimer),this.blobEffect&&this.blobEffect.destroy(),this.visionInstance&&this.visionInstance.stop(),window.removeEventListener("resize",this.handleResize)}},Ap={class:"visual-section"},wp={class:"wrapper"},Cp={class:"contents-wrap"},Rp={class:"title-wrap"},Pp={class:"keyworld-wrap"},Dp={class:"typing-text font_ibm font_500"},Lp={class:"rolling-section"},Ip={class:"rolling-wrapper"},Up={class:"rolling-content"},Fp={class:"rolling-wrapper"},Np={class:"rolling-content"},Op={class:"intro-section",ref:"introSection"},Bp={class:"horizontal-section",ref:"horizontalSection"},zp={class:"pin-wrapper"},Vp={class:"horizontal-inner",ref:"horizontalInner"},Gp={class:"focus-section one-page"},Hp={class:"inner"},kp={class:"fluid-container planet-sphere"},Wp={class:"stage"},Xp={class:"txt",ref:"focusTxt"},Yp={class:"skills-section",ref:"skillsSection"},qp={class:"fixed-area"},$p={class:"bg-title font_ibm font_500",ref:"bgTitle"},Kp={class:"vision-section",ref:"sectionRef"},Zp={class:"wrapper"},Jp={class:"canvas-inner"},jp={class:"physics-canvas",ref:"canvasContainer"};function Qp(s,e,t,i,r,n){return mr(),ko(Bo,{class:"aboutpage-container"},{default:Wo(()=>[V("section",Ap,[e[5]||(e[5]=V("div",{class:"gradient-overlay"},null,-1)),e[6]||(e[6]=V("canvas",{id:"BlobBg"},null,-1)),V("div",wp,[V("div",Cp,[V("div",Rp,[V("div",Pp,[e[0]||(e[0]=V("span",{class:"bracket font_ibm font_500"},"[",-1)),V("span",Dp,Xo(r.currentEnText),1),e[1]||(e[1]=V("span",{class:"bracket font_ibm font_500"},"]",-1))]),e[2]||(e[2]=V("span",{class:"stac-text font_ibm"},"Publisher",-1))]),e[3]||(e[3]=V("div",{class:"intro-text"},[V("span",null,"\uC548\uB155\uD558\uC138\uC694! \uCD5C\uC801\uC758 \uB514\uC9C0\uD138 \uACBD\uD5D8\uC744 \uC124\uACC4\uD558\uB294 "),V("span",null,"\uD37C\uBE14\uB9AC\uC154, \uC774\uC724\uC815\uC785\uB2C8\uB2E4.")],-1)),e[4]||(e[4]=V("div",{class:"profile-img"},[V("img",{src:Sp,alt:"\uC774\uC724\uC815 \uD504\uB85C\uD544\uC774\uBBF8\uC9C0"})],-1))])])]),V("section",Lp,[V("div",Ip,[V("div",Up,[(mr(),ea(na,null,ta(10,a=>V("div",{class:"rolling-item",key:"name-"+a},[...e[7]||(e[7]=[V("span",{class:"font_mon font_300"},"LEE YUNJEONG",-1),V("div",{class:"circle-icon"},[V("div",{class:"dev-icon"},[V("svg",{width:"105",height:"58",viewBox:"0 0 105 58",fill:"none"},[V("path",{d:"M77.2891 41.3765L98.6214 29.5825V29.0669L77.2891 17.3374V10.4414L105.002 25.9734V32.676L77.2891 48.208V41.3765Z",fill:"white"}),V("path",{d:"M38.5156 57.8744L60.2346 0H66.4861L44.7671 57.8744H38.5156Z",fill:"white"}),V("path",{d:"M0 32.676V25.9734L27.7127 10.4414V17.2729L6.38036 29.0669V29.5825L27.7127 41.312V48.208L0 32.676Z",fill:"white"})])])],-1)])])),64))])]),V("div",Fp,[V("div",Np,[(mr(),ea(na,null,ta(10,a=>V("div",{class:"rolling-item",key:"job-"+a},[...e[8]||(e[8]=[V("span",{class:"font_mon font_300"},"PUBLISHER",-1),V("div",{class:"rolling-icon"},[V("img",{src:Mp,alt:"mac"})],-1)])])),64))])])]),e[17]||(e[17]=V("section",{class:"bio-section parallax__item"},[V("div",{class:"wrapper"},[V("div",{class:"bio-content-wrap"},[V("div",{class:"bio-row row01"},[V("div",{class:"video-box"},[V("video",{autoplay:"",muted:"",loop:"",src:ja})]),V("span",{class:"bio-text font_ibm"},"I'm Yunjeong Lee!")]),V("div",{class:"bio-row row02"},[V("span",{class:"bio-text font_ibm font_400"},"A Web Publisher "),V("div",{class:"video-box"},[V("video",{autoplay:"",muted:"",loop:"",src:yp})])]),V("div",{class:"bio-row row03"},[V("span",{class:"bio-text font_ibm font_400"},"delivering optimal digital experiences.")]),V("div",{class:"bio-row row04"},[V("span",{class:"bio-text font_ibm font_400"},"Defining the web"),V("div",{class:"video-box"},[V("video",{autoplay:"",muted:"",loop:"",src:ja})]),V("span",{class:"bio-text font_ibm font_400"},"since July 2024.")])])])],-1)),V("section",Op,[...e[9]||(e[9]=[V("div",{class:"pin-wrapper"},[V("div",{class:"wrapper"},[V("div",{class:"title-wrap"},[V("span",{class:"sub-title font_ibm"},"What started it?"),V("h2",{class:"split-text font_ibm en-text font_400"},[It(" Curiosity about how design is implemented "),V("br"),It("on the web led me to start my career "),V("br"),It("as a publisher. ")]),V("p",{class:"kr-text font_ibm font_400"}," \uB514\uC790\uC778\uC774 \uC6F9\uC0AC\uC774\uD2B8\uC5D0\uC11C \uAD6C\uD604\uB418\uB294 \uACFC\uC815\uC5D0 \uB300\uD55C \uD638\uAE30\uC2EC\uC73C\uB85C \uD37C\uBE14\uB9AC\uC154\uC758 \uAE38\uC744 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4. ")])])],-1)])],512),V("section",Bp,[V("div",zp,[V("div",Vp,[e[12]||(e[12]=V("div",{class:"identity-section one-page"},[V("div",{class:"wrapper"},[V("div",{class:"contents-inner"},[V("div",{class:"img-area"},[V("div",{class:"profile-img"},[V("img",{src:bp,alt:"\uC774\uC724\uC815 \uD504\uB85C\uD544\uC774\uBBF8\uC9C0"})])]),V("div",{class:"text-area"},[V("div",{class:"title-wrap"},[V("h2",{class:"font_ibm font_400"},"<Identity/>"),V("p",{class:"font_400"},[It(" \uB2E8\uC21C\uD788 \uBCF4\uC774\uB294 \uD654\uBA74\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C, "),V("br"),It("\uC2DC\uAC04\uC774 \uC9C0\uB098\uB3C4 \uC720\uC9C0\uB418\uACE0 \uD655\uC7A5\uB420 \uC218 \uC788\uB294 \uCF54\uB4DC\uB97C \uACE0\uBBFC\uD569\uB2C8\uB2E4. ")])]),V("div",{class:"scrolling-svg-text"},[V("svg",{viewBox:"0 0 1000 200",xmlns:"http://www.w3.org/2000/svg"},[V("path",{id:"wavePath",d:"M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100",fill:"transparent"}),V("text",null,[V("textPath",{href:"#wavePath",startOffset:"0%"}," not just visual, but sustainable ")])])])])])])],-1)),V("div",Gp,[V("div",Hp,[e[11]||(e[11]=V("div",{class:"title-wrap reveal-text"},[V("h2",{class:"font_ibm font_400"},"<Focus/>"),V("p",{class:"font_500"},[It(" \uC720\uC9C0\uBCF4\uC218\uB97C \uC804\uC81C\uB85C \uB9C8\uD06C\uC5C5\uD569\uB2C8\uB2E4."),V("br"),It(" \uBC18\uBCF5\uC744 \uC904\uC774\uACE0, \uC218\uC815\uC5D0 \uAC15\uD55C \uAD6C\uC870\uB97C \uC120\uD638\uD569\uB2C8\uB2E4. ")])],-1)),V("div",kp,[V("div",Wp,[V("div",Xp,"FOCUS ON EXPERIENCE",512),e[10]||(e[10]=V("div",{class:"grain"},null,-1))])])])]),e[13]||(e[13]=V("div",{class:"workflow-section one-page is-dark-bg"},[V("div",{class:"content-wrap"},[V("div",{class:"inner"},[V("div",{class:"title-wrap reveal-text"},[V("h2",{class:"font_ibm"},"<Workflow/>"),V("p",null,[It(" \uB514\uC790\uC778 \uC758\uB3C4\uB97C \uC774\uD574\uD558\uACE0 "),V("br"),It("\uAD6C\uC870\uB97C \uD574\uC11D\uD574 \uC6F9 \uC704\uC5D0 \uAD6C\uD604\uD569\uB2C8\uB2E4. ")])]),V("div",{class:"workflow-tags"},[V("span",{class:"tag font_mon font_700"},"DESIGN"),V("span",{class:"tag font_mon font_700"},"CODE"),V("span",{class:"tag font_mon font_700"},"EXPERIENCE")])])])],-1)),e[14]||(e[14]=V("div",{class:"experience-section one-page is-dark-bg"},[V("div",{class:"content-wrap"},[V("div",{class:"inner"},[V("div",{class:"title-wrap reveal-text"},[V("h2",{class:"font_ibm"},"<Experience/>"),V("p",null,[It(" \uC2E4\uC81C \uC11C\uBE44\uC2A4 \uD658\uACBD\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uCF54\uB4DC\uB97C \uB9CC\uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4."),V("br"),It(" \uB514\uC790\uC774\uB108, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uC640 \uD611\uC5C5\uD558\uBA70 "),V("br"),It(" \uC6B4\uC601\xB7\uC720\uC9C0\uBCF4\uC218\xB7\uAC1C\uC120\uAE4C\uC9C0 \uC774\uC5B4\uC9C0\uB294 \uC791\uC5C5\uC744 \uACBD\uD5D8\uD574\uC654\uC2B5\uB2C8\uB2E4. ")])]),V("div",{class:"img-wrap"},[V("div",{class:"code-greeting"},[V("span",{class:"font_ibm font_500"},"> Hello,"),V("span",{class:"font_ibm font_500"},"world !")]),V("div",{class:"code-symbol"},[V("span",{class:"font_ibm"},"</>")]),V("div",{class:"macbook-img"},[V("img",{src:Ep,alt:""})])])])])],-1))],512)])],512),V("section",Yp,[V("div",qp,[V("h2",$p,"Skills",512)]),e[15]||(e[15]=V("div",{class:"wrapper"},[V("div",{class:"skill-card","data-title":"HTML"},[V("div",{class:"skill-info"},[V("div",{class:"title-wrap"},[V("h3",{class:"font_ibm font_500"},"HTML"),V("span",{class:"font_ibm"},"The Semantic Structure")]),V("p",null," \uB2E8\uC21C\uD788 \uD654\uBA74\uC5D0 \uD14D\uC2A4\uD2B8\uB97C \uBCF4\uC774\uAC8C \uD558\uB294 \uAC83\uC744 \uB118\uC5B4, \uC2DC\uB9E8\uD2F1 \uB9C8\uD06C\uC5C5(Semantic Markup) \uC6D0\uCE59\uC744 \uCCA0\uC800\uD788 \uC9C0\uCF1C \uAC80\uC0C9 \uC5D4\uC9C4 \uCD5C\uC801\uD654(SEO)\uC640 \uC6F9 \uC811\uADFC\uC131\uC758 \uAE30\uCD08\uB97C \uB2E8\uB2E8\uD558\uAC8C \uB2E4\uC9C0\uB294 \uC5ED\uD560\uC744 \uC218\uD589\uD569\uB2C8\uB2E4. ")])]),V("div",{class:"skill-card","data-title":"CSS"},[V("div",{class:"skill-info"},[V("div",{class:"title-wrap"},[V("h3",{class:"font_ibm font_500"},"CSS"),V("span",{class:"font_ibm"},"Pixel-Perfect Styling & Responsive UX")]),V("p",null," \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C\uC744 \uD53D\uC140 \uB2E8\uC704\uB85C \uC815\uD655\uD558\uAC8C \uAD6C\uD604\uD569\uB2C8\uB2E4. @media \uCFFC\uB9AC\uC640 Flexbox/Grid\uB97C \uD65C\uC6A9\uD558\uC5EC \uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC5D0 \uCD5C\uC801\uD654\uB41C \uBC18\uC751\uD615 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ")])]),V("div",{class:"skill-card","data-title":"JavaScript"},[V("div",{class:"skill-info"},[V("div",{class:"title-wrap"},[V("h3",{class:"font_ibm font_500"},"JavaScript"),V("span",{class:"font_ibm"},"Dynamic Interaction & Problem Solving")]),V("p",null," \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uB3D9\uC801\uC778 \uC778\uD130\uB799\uC158\uC744 \uAD6C\uD604\uD569\uB2C8\uB2E4. \uC21C\uC218 JavaScript\uB97C \uC774\uC6A9\uD574 \uBCF5\uC7A1\uD55C \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uCC98\uB9AC\uD558\uACE0, \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uB97C \uB2A5\uB3D9\uC801\uC73C\uB85C \uD574\uACB0\uD569\uB2C8\uB2E4. ")])]),V("div",{class:"skill-card","data-title":"jQuery"},[V("div",{class:"skill-info"},[V("div",{class:"title-wrap"},[V("h3",{class:"font_ibm font_500"},"jQuery"),V("span",{class:"font_ibm"},"Efficient DOM Control & Cross-Browser Stability")]),V("p",null," \uAC04\uACB0\uD55C \uBB38\uBC95\uC744 \uD65C\uC6A9\uD558\uC5EC DOM \uC870\uC791 \uBC0F \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uAD6C\uD604\uD569\uB2C8\uB2E4. \uBCF5\uC7A1\uD55C \uD06C\uB85C\uC2A4 \uBE0C\uB77C\uC6B0\uC9D5 \uC774\uC288\uB97C \uCD5C\uC18C\uD654\uD558\uBA70, \uBE60\uB974\uACE0 \uC548\uC815\uC801\uC778 \uC6F9 \uC778\uD130\uB799\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ")])]),V("div",{class:"skill-card","data-title":"Vue.js"},[V("div",{class:"skill-info"},[V("div",{class:"title-wrap"},[V("h3",{class:"font_ibm font_500"},"Vue.js"),V("span",{class:"font_ibm"},"Component-Driven Architecture & Reactive UI")]),V("p",null," Quasar Framework\uB97C \uD65C\uC6A9\uD558\uC5EC \uC6F9, \uBAA8\uBC14\uC77C(\uD558\uC774\uBE0C\uB9AC\uB4DC \uC571), \uB370\uC2A4\uD06C\uD1B1 \uD658\uACBD\uC5D0 \uB300\uC751\uD558\uB294 \uD1B5\uD569\uC801\uC778 UI\uB97C \uAD6C\uCD95\uD569\uB2C8\uB2E4. Material Design \uAE30\uBC18\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC77C\uAD00\uC131 \uC788\uB294 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ")])])],-1))],512),e[18]||(e[18]=V("section",{class:"project-section"},[V("div",{class:"wrapper"},[V("div",{class:"title-wrap"},[V("span",{class:""},"SELECTED"),V("h2",null,"PROJECT"),V("span",{class:""},"2024-")])])],-1)),V("section",Kp,[V("div",Zp,[V("div",Jp,[V("div",jp,null,512),e[16]||(e[16]=V("div",{class:"contents-wrap"},[V("span",{class:"title font_ibm"},"<Vision/>"),V("div",{class:"text-wrap"},[V("span",{class:"main-text font_mon font_700"},"CREATIVE CODE"),V("div",{class:"sub-text"},[V("span",null,"\uAE54\uB054\uD558\uACE0 \uAD6C\uC870\uD654\uB41C \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uC5EC "),V("span",{class:"row02"},"\uB514\uC790\uC778\uACFC \uAE30\uB2A5\uC744 \uC548\uC815\uC801\uC73C\uB85C \uAD6C\uD604\uD569\uB2C8\uB2E4.")])])],-1))])])],512)]),_:1})}var a0=Yo(Tp,[["render",Qp]]);export{a0 as default};
