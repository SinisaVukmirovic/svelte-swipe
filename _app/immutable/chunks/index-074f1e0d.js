function v(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function P(){return Object.create(null)}function y(t){t.forEach(q)}function B(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function _t(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function Q(t){return Object.keys(t).length===0}function R(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(R(e,n))}function mt(t,e,n,i){if(t){const r=D(t,e,n,i);return t[0](r)}}function D(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let u=0;u<o;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,s){if(r){const o=D(e,n,i,s);t.p(o,r)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function U(){E=!0}function V(){E=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:X(1,r,g=>e[n[g]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const s=[],o=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);u>=c;u--)o.push(e[u]);u--}for(;u>=0;u--)o.push(e[u]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(o[c],f)}}function Z(t,e){t.appendChild(e)}function tt(t,e){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function bt(t,e,n){E&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function $t(){return C(" ")}function wt(){return C("")}function T(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,r=!1){it(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(e(u)){const c=n(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(e(u)){const c=n(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function F(t,e,n,i){return I(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];n[u.name]||s.push(u.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Et(t,e,n){return F(t,e,n,O)}function Nt(t,e,n){return F(t,e,n,et)}function rt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function kt(t){return rt(t," ")}function At(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function St(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let x;function ot(){if(x===void 0){x=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{x=!0}}return x}function jt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=O("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ot();let s;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",o=>{o.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=T(i.contentWindow,"resize",e)}),Z(t,i),()=>{(r||s&&i.contentWindow)&&s(),L(i)}}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ct(t,e){return new t(e)}let p;function m(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){N().$$.on_mount.push(t)}function zt(t){N().$$.after_update.push(t)}function Pt(t){N().$$.on_destroy.push(t)}function Tt(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=ct(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],W=[],$=[],A=[],H=Promise.resolve();let S=!1;function G(){S||(S=!0,H.then(J))}function Wt(){return G(),H}function j(t){$.push(t)}function qt(t){A.push(t)}const k=new Set;let _=0;function J(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,m(e),st(e.$$)}}catch(e){throw h.length=0,_=0,e}for(m(null),h.length=0,_=0;W.length;)W.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];k.has(n)||(k.add(n),n())}$.length=0}while(h.length);for(;A.length;)A.pop()();S=!1,k.clear(),m(t)}function st(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const w=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Dt(){d.r||y(d.c),d=d.p}function ut(t,e){t&&t.i&&(w.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Ot(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=e[s];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(n[c]=u[c],r[c]=1);t[s]=u}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function It(t){return typeof t=="object"&&t!==null?t:{}}function Ft(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ht(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||j(()=>{const o=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),s.forEach(j)}function at(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,i,r,s,o,u=[-1]){const c=p;m(t);const l=t.$$={fragment:null,ctx:[],props:s,update:v,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:P(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,g,...M)=>{const z=M.length?M[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=z)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](z),f&&ft(t,a)),g}):[],l.update(),f=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){U();const a=nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(L)}else l.fragment&&l.fragment.c();e.intro&&ut(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),V(),J()}m(c)}class Kt{$destroy(){at(this,1),this.$destroy=v}$on(e,n){if(!B(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{at as A,Wt as B,v as C,mt as D,yt as E,gt as F,pt as G,tt as H,ht as I,T as J,y as K,Tt as L,Pt as M,xt as N,j as O,jt as P,K as Q,Ft as R,Kt as S,et as T,Nt as U,Ot as V,It as W,qt as X,_t as Y,$t as a,bt as b,kt as c,Dt as d,wt as e,ut as f,Bt as g,L as h,Jt as i,zt as j,O as k,Et as l,nt as m,vt as n,Mt as o,St as p,C as q,rt as r,dt as s,Lt as t,At as u,W as v,Ct as w,Ht as x,Gt as y,lt as z};
