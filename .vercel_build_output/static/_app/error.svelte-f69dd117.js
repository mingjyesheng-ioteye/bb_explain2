import{S as w,i as y,s as z,e as v,t as E,c as d,a as b,g as N,d as _,f as u,N as P,h as R,k as S,l as q,n as h,O as C}from"./chunks/vendor-577628cf.js";function H(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=N(s,t),s.forEach(_)},m(l,s){u(l,f,s),P(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&R(a,t)},d(l){l&&_(f)}}}function O(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=N(s,t),s.forEach(_)},m(l,s){u(l,f,s),P(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&R(a,t)},d(l){l&&_(f)}}}function A(r){let f,t,a,l,s=r[1].message+"",c,k,m,p,i=r[1].frame&&H(r),n=r[1].stack&&O(r);return{c(){f=v("h1"),t=E(r[0]),a=S(),l=v("pre"),c=E(s),k=S(),i&&i.c(),m=S(),n&&n.c(),p=q()},l(e){f=d(e,"H1",{});var o=b(f);t=N(o,r[0]),o.forEach(_),a=h(e),l=d(e,"PRE",{});var j=b(l);c=N(j,s),j.forEach(_),k=h(e),i&&i.l(e),m=h(e),n&&n.l(e),p=q()},m(e,o){u(e,f,o),P(f,t),u(e,a,o),u(e,l,o),P(l,c),u(e,k,o),i&&i.m(e,o),u(e,m,o),n&&n.m(e,o),u(e,p,o)},p(e,[o]){o&1&&R(t,e[0]),o&2&&s!==(s=e[1].message+"")&&R(c,s),e[1].frame?i?i.p(e,o):(i=H(e),i.c(),i.m(m.parentNode,m)):i&&(i.d(1),i=null),e[1].stack?n?n.p(e,o):(n=O(e),n.c(),n.m(p.parentNode,p)):n&&(n.d(1),n=null)},i:C,o:C,d(e){e&&_(f),e&&_(a),e&&_(l),e&&_(k),i&&i.d(e),e&&_(m),n&&n.d(e),e&&_(p)}}}function F({error:r,status:f}){return{props:{error:r,status:f}}}function B(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class G extends w{constructor(f){super();y(this,f,B,A,z,{status:0,error:1})}}export{G as default,F as load};
