var pt=Object.defineProperty;var et=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var st=(e,t,s)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,N=(e,t)=>{for(var s in t||(t={}))bt.call(t,s)&&st(e,s,t[s]);if(et)for(var s of et(t))gt.call(t,s)&&st(e,s,t[s]);return e};import{S as O,i as Q,s as J,I as K,e as z,t as kt,c as I,a as L,g as yt,d as S,b as F,M as D,f as U,N as C,a1 as X,O as wt,k as j,n as q,W as ot,J as G,K as Y,L as Z,x,u as $,a2 as Dt,F as nt,A as St,X as Pt,a3 as tt,P as at,Q as E,a4 as Rt,a5 as Tt,a6 as At,a7 as Ft,a8 as vt,a9 as it}from"./vendor-577628cf.js";import{d as rt,r as zt,a as It}from"./canvas-74f91cf9.js";import{a as Lt,c as Ut}from"./navigation-a5eee486.js";/* empty css                                                  */function lt(e){let t,s,n,o;return{c(){t=z("span"),s=kt("play_circle"),this.h()},l(r){t=I(r,"SPAN",{class:!0,style:!0});var p=L(t);s=yt(p,"play_circle"),p.forEach(S),this.h()},h(){F(t,"class","material-icons overlay-center svelte-12w6n3q"),D(t,"color","white"),D(t,"font-size","6rem"),D(t,"width","120px"),D(t,"height","120px"),D(t,"z-index","5")},m(r,p){U(r,t,p),C(t,s),n||(o=X(t,"click",e[9]),n=!0)},p:wt,d(r){r&&S(t),n=!1,o()}}}function Wt(e){let t,s,n,o,r,p,f,h,R,T,g,l,c,d,u,P,k;const A=e[17].default,w=K(A,e,e[16],null);let b=!e[8]&&e[6]===!1&&e[0]&&lt(e);return{c(){t=z("div"),w&&w.c(),s=j(),b&&b.c(),n=j(),o=z("div"),r=z("canvas"),f=j(),h=z("canvas"),T=j(),g=z("div"),l=z("audio"),this.h()},l(a){t=I(a,"DIV",{style:!0});var m=L(t);w&&w.l(m),m.forEach(S),s=q(a),b&&b.l(a),n=q(a),o=I(a,"DIV",{style:!0});var v=L(o);r=I(v,"CANVAS",{style:!0});var W=L(r);W.forEach(S),f=q(v),h=I(v,"CANVAS",{style:!0});var B=L(h);B.forEach(S),v.forEach(S),T=q(a),g=I(a,"DIV",{});var V=L(g);l=I(V,"AUDIO",{src:!0,style:!0});var H=L(l);H.forEach(S),V.forEach(S),this.h()},h(){D(t,"position","absolute"),D(t,"right","0"),D(t,"left","auto"),D(t,"top","0"),D(t,"bottom","auto"),D(t,"display","flex"),D(t,"padding-top","4px"),D(t,"padding-bottom","4px"),D(t,"z-index","5"),F(r,"style",p=`position: absolute; z-index: 1; z-index: 1; margin-top: 0; margin-left: 0; width: ${e[5]}px; height: ${e[4]}px; background-color: transparent`),F(h,"style",R=`position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    background-color: rgb(46, 49, 49); width: ${e[5]}px; height: ${e[4]}px`),D(o,"position","relative"),ot(l.src,c=e[1])||F(l,"src",c),l.controls=!0,F(l,"style",d=`width: ${e[5]}px; height: 40px; position: absolute; bottom: 0; top: auto;`)},m(a,m){U(a,t,m),w&&w.m(t,null),U(a,s,m),b&&b.m(a,m),U(a,n,m),U(a,o,m),C(o,r),e[18](r),C(o,f),C(o,h),e[19](h),U(a,T,m),U(a,g,m),C(g,l),e[20](l),u=!0,P||(k=[X(l,"play",e[10]),X(l,"seeking",e[11])],P=!0)},p(a,[m]){w&&w.p&&(!u||m&65536)&&G(w,A,a,a[16],u?Z(A,a[16],m,null):Y(a[16]),null),!a[8]&&a[6]===!1&&a[0]?b?b.p(a,m):(b=lt(a),b.c(),b.m(n.parentNode,n)):b&&(b.d(1),b=null),(!u||m&48&&p!==(p=`position: absolute; z-index: 1; z-index: 1; margin-top: 0; margin-left: 0; width: ${a[5]}px; height: ${a[4]}px; background-color: transparent`))&&F(r,"style",p),(!u||m&48&&R!==(R=`position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    background-color: rgb(46, 49, 49); width: ${a[5]}px; height: ${a[4]}px`))&&F(h,"style",R),(!u||m&2&&!ot(l.src,c=a[1]))&&F(l,"src",c),(!u||m&32&&d!==(d=`width: ${a[5]}px; height: 40px; position: absolute; bottom: 0; top: auto;`))&&F(l,"style",d)},i(a){u||(x(w,a),u=!0)},o(a){$(w,a),u=!1},d(a){a&&S(t),w&&w.d(a),a&&S(s),b&&b.d(a),a&&S(n),a&&S(o),e[18](null),e[19](null),a&&S(T),a&&S(g),e[20](null),P=!1,Dt(k)}}}let ct=2;function Ct(e){return(e.endTime-e.startTime)/e.points.length}function Et(e,t,s){let n,o;nt(e,Lt,i=>s(4,n=i)),nt(e,Ut,i=>s(5,o=i));let{$$slots:r={},$$scope:p}=t,{strokesArray:f}=t,{audioDownloadURL:h}=t,{backgroundImageDownloadURL:R}=t,T=!1,g,l,c,d,u,P,k,A;St(()=>{s(14,u=c.getContext("2d")),s(15,P=d.getContext("2d"))}),Pt(()=>{A&&clearTimeout(A)});function w(){for(const _ of f)rt(_,null,u,c);const i=[];for(let _=0;_<f.length;_++)for(let y=1;y<f[_].points.length;y++){const M={strokeIndex:_,pointIndex:y};i.push(N({startTime:a(M)},M))}s(13,g=i.sort((_,y)=>_.startTime-y.startTime))}function b(){s(7,k.playbackRate=ct,k),k.play()}function a({strokeIndex:i,pointIndex:_}){const y=f[i];return y.startTime+(_-1)*Ct(y)}function m(){s(6,T=!0),l=0,u.clearRect(0,0,o,n),v()}function v(){if(!!k&&(W(),l<g.length)){const i=g[l],_=1e3*(i.startTime-k.currentTime);s(8,A=setTimeout(v,_/ct))}}function W(){if(!k)return;const i=g[l];(!i||i.startTime>k.currentTime)&&(u.clearRect(0,0,c.width,c.height),l=0),B()}function B(){const{currentTime:i}=k;for(let _=l;_<g.length;_++){const y=g[_];if(y.startTime>i)break;V(y),l+=1}}function V({strokeIndex:i,pointIndex:_}){const y=f[i],_t=y.lineWidth*(c.scrollWidth/1e3);It(y.points,_,y.isErasing,u,y.color,_t,c)}function H(){return new Promise(async i=>{if(A)l=0,W();else for(const _ of f)rt(_,null,u,c);i()})}function dt(i){tt[i?"unshift":"push"](()=>{c=i,s(2,c),s(14,u),s(5,o),s(4,n),s(0,f)})}function ht(i){tt[i?"unshift":"push"](()=>{d=i,s(3,d),s(14,u),s(5,o),s(4,n),s(0,f)})}function mt(i){tt[i?"unshift":"push"](()=>{k=i,s(7,k)})}return e.$$set=i=>{"strokesArray"in i&&s(0,f=i.strokesArray),"audioDownloadURL"in i&&s(1,h=i.audioDownloadURL),"backgroundImageDownloadURL"in i&&s(12,R=i.backgroundImageDownloadURL),"$$scope"in i&&s(16,p=i.$$scope)},e.$$.update=()=>{e.$$.dirty&16433&&u&&(s(2,c.width=o,c),s(2,c.height=n,c),s(3,d.width=o,d),s(3,d.height=n,d),f&&H()),e.$$.dirty&24577&&u&&f&&!g&&w(),e.$$.dirty&36876&&P&&(P.clearRect(0,0,d.scrollWidth,d.scrollHeight),zt(R,c,P))},[f,h,c,d,n,o,T,k,A,b,m,W,R,g,u,P,p,r,dt,ht,mt]}class Xt extends O{constructor(t){super();Q(this,t,Et,Wt,J,{strokesArray:0,audioDownloadURL:1,backgroundImageDownloadURL:12})}}const Vt=e=>({boardDoc:e&1}),ut=e=>({boardDoc:e[0]});function Nt(e){let t;const s=e[3].default,n=K(s,e,e[2],ut);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,r){n&&n.m(o,r),t=!0},p(o,[r]){n&&n.p&&(!t||r&5)&&G(n,s,o,o[2],t?Z(s,o[2],r,Vt):Y(o[2]),ut)},i(o){t||(x(n,o),t=!0)},o(o){$(n,o),t=!1},d(o){n&&n.d(o)}}}function jt(e,t,s){let{$$slots:n={},$$scope:o}=t,{dbPath:r}=t,p;const f=at(E(),r);return Rt(f,h=>{s(0,p=N({id:h.id},h.data()))}),e.$$set=h=>{"dbPath"in h&&s(1,r=h.dbPath),"$$scope"in h&&s(2,o=h.$$scope)},[p,r,o,n]}class Gt extends O{constructor(t){super();Q(this,t,jt,Nt,J,{dbPath:1})}}const qt=e=>({strokesArray:e&1}),ft=e=>({fetchStrokes:e[1],strokesArray:e[0],deleteAllStrokesFromDb:e[2]});function Bt(e){let t;const s=e[6].default,n=K(s,e,e[5],ft);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,r){n&&n.m(o,r),t=!0},p(o,[r]){n&&n.p&&(!t||r&33)&&G(n,s,o,o[5],t?Z(s,o[5],r,qt):Y(o[5]),ft)},i(o){t||(x(n,o),t=!0)},o(o){$(n,o),t=!1},d(o){n&&n.d(o)}}}function Ht(e,t,s){let{$$slots:n={},$$scope:o}=t,{dbPath:r}=t,{autoFetchStrokes:p=!1}=t,f;const h=Tt(E(),`${r}/strokes`),R=At(h,Ft("timestamp"));p&&T();async function T(){const l=await vt(R),c=[];for(const d of l.docs)c.push(N({id:d.id},d.data()));s(0,f=c)}async function g(){return new Promise(async l=>{const c=[];let d=it(E()),u=0;for(const P of f){u>=500&&(c.push(d.commit()),d=it(E()),u=0);const k=at(E(),`${r}/strokes/${P.id}`);d.delete(k),u+=1}c.push(d.commit()),await Promise.all(c),s(0,f=[]),l()})}return e.$$set=l=>{"dbPath"in l&&s(3,r=l.dbPath),"autoFetchStrokes"in l&&s(4,p=l.autoFetchStrokes),"$$scope"in l&&s(5,o=l.$$scope)},[f,T,g,r,p,o,n]}class Yt extends O{constructor(t){super();Q(this,t,Ht,Bt,J,{dbPath:3,autoFetchStrokes:4})}}export{Xt as D,Gt as R,Yt as a};
