"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[9453],{70172:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(14050),r=n(6137),c=n(83716),s=n(75806),l=n(2155),i=n(46752),a=n(32340),d=n(6202),u=n(31212),m=n(59107);const f=(0,i.y)("Avatar");f.img=f("img"),f.icon=f("icon");const v=(0,o.X$)((e=>{let{className:t,size:n="large",chat:v,user:h,photo:g,userStatus:p,text:Z,isSavedMessages:w,lastSyncTime:b,onClick:E}=e;const y=h&&(0,s.NB)(h),A=h&&(0,s.pK)(h.id);let C;const I="jumbo"===n;w||y||(h?C=(0,s.RT)(h,I?"big":void 0):v?C=(0,s.RT)(v,I?"big":void 0):g&&(C=`photo${g.id}?size=m`));const k=(0,d.Z)(C,!1,r.IU.BlobUrl,b),N=Boolean(k),{transitionClassNames:P}=(0,u.Z)(N,void 0,N,"slow"),T=(0,m.Z)();let B;const S=h?(0,s.Js)(h):v?(0,s.U)(T,v):Z;if(w)B=o.ZP.createElement("i",{className:(0,i.Z)(f.icon,"icon-avatar-saved-messages"),"aria-label":S});else if(y)B=o.ZP.createElement("i",{className:(0,i.Z)(f.icon,"icon-avatar-deleted-account"),"aria-label":S});else if(A)B=o.ZP.createElement("i",{className:(0,i.Z)(f.icon,"icon-reply-filled"),"aria-label":S});else if(k)B=o.ZP.createElement("img",{src:k,className:(0,i.Z)(f.img,"avatar-media",P),alt:S,decoding:"async"});else if(h){const e=(0,s.Js)(h);B=e?(0,l.Xv)(e,2):void 0}else if(v){const e=(0,s.U)(T,v);B=e&&(0,l.Xv)(e,(0,s.YC)(v.id)?2:1)}else Z&&(B=(0,l.Xv)(Z,2));const U=!w&&h&&p&&(0,s.kM)(h,p),L=(0,i.Z)(`Avatar size-${n}`,t,`color-bg-${(0,s.Rs)(h||v)}`,w&&"saved-messages",y&&"deleted-account",A&&"replies-bot-account",U&&"online",E&&"interactive",!w&&!k&&"no-photo"),R=Boolean(w||k),q=(0,o.I4)((e=>{E&&E(e,R)}),[E,R]),x=(h||v)&&(h||v).id;return o.ZP.createElement("div",{className:L,onClick:q,"data-test-sender-id":c.Cg?x:void 0,"aria-label":"string"==typeof B?S:void 0},"string"==typeof B?(0,a.Z)(B,["jumbo"===n?"hq_emoji":"emoji"]):B)}))},21273:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(91713),r=n(14050),c=n(69118),s=n(87675),l=n(77361);const i=".ListItem",a=20,d=800,u=e=>{let{ref:t,className:n,onLoadMore:u,onScroll:m,onKeyDown:f,items:v,itemSelector:h=i,preloadBackwards:g=a,sensitiveArea:p=d,withAbsolutePositioning:Z,maxHeight:w,noScrollRestore:b=!1,noScrollRestoreOnTop:E=!1,noFastList:y,cacheBuster:A,children:C}=e,I=(0,r.sO)(null);t&&(I=t);const k=(0,r.sO)({}),[N,P]=(0,r.Ye)((()=>u?[(0,c.Ds)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u({direction:o.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,c.Ds)((()=>{u({direction:o.Uq.Forwards})}),1e3,!0,!1)]:[]),[u,v]);(0,r.d4)((()=>{if(!N)return;if(g>0&&(!v||v.length<g))return void N(!0);const{scrollHeight:e,clientHeight:t}=I.current;t&&e<=t&&N()}),[v,N,g]),(0,r.bt)((()=>{const e=I.current,t=k.current;let n;if(t.listItemElements=e.querySelectorAll(h),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:o}=e;n=o+(t.currentAnchor.getBoundingClientRect().top-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}Z||b||E&&0===e.scrollTop||((0,s.Z)(e,n),t.isScrollTopJustUpdated=!0)}),[v,h,b,E,A,Z]);const T=(0,r.I4)((e=>{if(P&&N){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=k.current,o=k.current.listItemElements;if(e)return void(k.current.isScrollTopJustUpdated=!1);const r=o.length,c=I.current,{scrollTop:s,scrollHeight:l,offsetHeight:i}=c,a=s<=(r?o[0].offsetTop:0)+p,d=(r?o[r-1].offsetTop+o[r-1].offsetHeight:l)-(s+i)<=p;let u=!1;if(a){const e=o[0];if(e){const o=e.getBoundingClientRect().top,r=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&r>n&&(k.current.currentAnchor=e,k.current.currentAnchorTop=o,u=!0,P())}}if(d){const e=o[r-1];if(e){const o=e.getBoundingClientRect().top,r=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&r<n&&(k.current.currentAnchor=e,k.current.currentAnchorTop=o,u=!0,N())}}if(!u)if(null!=t&&t.offsetParent)k.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=o[0];e&&(k.current.currentAnchor=e,k.current.currentAnchorTop=e.getBoundingClientRect().top)}}m&&m(e)}),[N,P,m,p]);return r.ZP.createElement("div",{ref:I,className:n,onScroll:T,teactFastList:!y&&!Z,onKeyDown:f},Z&&null!=v&&v.length?r.ZP.createElement("div",{teactFastList:!y,style:`position: relative;${l.wZ?` height: ${w}px;`:void 0}`},C):C)}},13103:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(14050),r=n(517),c=n(46752),s=n(18674),l=n(31212),i=n(274),a=n(59107),d=n(46590),u=n(231),m=n(62898);const f=e=>{let{dialogRef:t,title:n,className:f,isOpen:v,header:h,hasCloseButton:g,noBackdrop:p,children:Z,onClose:w,onCloseAnimationEnd:b,onEnter:E,shouldSkipHistoryAnimations:y}=e;const{shouldRender:A,transitionClassNames:C}=(0,l.Z)(v,b,y,void 0,y),I=(0,o.sO)(null);(0,o.d4)((()=>v?(0,r.Z)({onEsc:w,onEnter:E}):void 0),[v,w,E]),(0,o.d4)((()=>v&&I.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const o=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;o>=0&&(r=t.shiftKey?o>0?o-1:n.length-1:o<n.length-1?o+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(I.current):void 0),[v]),(0,d.Z)({isActive:v,onBack:w}),(0,i.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",v),(v||!v&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[v]);const k=(0,a.Z)();if(!A)return;const N=(0,c.Z)("Modal",f,C,p&&"transparent-backdrop");return o.ZP.createElement(m.Z,null,o.ZP.createElement("div",{ref:I,className:N,tabIndex:-1,role:"dialog"},o.ZP.createElement("div",{className:"modal-container"},o.ZP.createElement("div",{className:"modal-backdrop",onClick:w}),o.ZP.createElement("div",{className:"modal-dialog",ref:t},h||(n?o.ZP.createElement("div",{className:"modal-header"},g&&o.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:k("Close"),onClick:w},o.ZP.createElement("i",{className:"icon-close"})),o.ZP.createElement("div",{className:"modal-title"},n)):void 0),o.ZP.createElement("div",{className:"modal-content custom-scroll"},Z)))))}},62898:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(14050),r=n(32916);const c=e=>{let{containerId:t,className:n,children:c}=e;const s=(0,o.sO)();return s.current||(s.current=document.createElement("div")),(0,o.bt)((()=>{const e=document.querySelector(t||"#portals");if(!e)return;const o=s.current;return n&&o.classList.add(n),e.appendChild(o),()=>{r.Z.render(void 0,o),e.removeChild(o)}}),[n,t]),r.Z.render(c,s.current)}},27407:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(14050),r=n(91713),c=n(60782),s=n(65326),l=n(87204);function i(e,t,n,o){const{length:c}=e,s=o?e.indexOf(o):0,l=t===r.Uq.Forwards?s:s+1||c,i=Math.max(0,l-n),a=l+n-1,d=e.slice(Math.max(0,i),a+1);let u,m;switch(t){case r.Uq.Forwards:u=l>0,m=i>=0;break;case r.Uq.Backwards:u=l<c,m=a<=c-1}return{newViewportIds:d,areSomeLocal:u,areAllLocal:m}}const a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;const d=(0,o.sO)(),u=(0,o.sO)((()=>{if(!t||d.current)return;const{newViewportIds:e}=i(t,r.Uq.Forwards,a,t[0]);return e})()),m=(0,s.Z)();n&&(d.current={});const f=(0,l.Z)(t),v=(0,l.Z)(n);if(t&&!n&&(t!==f||n!==v)){const{offsetId:e=t[0],direction:n=r.Uq.Forwards}=d.current||{},{newViewportIds:o}=i(t,n,a,e);u.current&&(0,c.et)(u.current,o)||(u.current=o)}const h=(0,o.I4)((n=>{let{direction:o,noScroll:s}=n;const l=u.current,f=l?o===r.Uq.Backwards?l[l.length-1]:l[0]:void 0;if(!t)return void(e&&e({offsetId:f}));s||(d.current={...d.current,direction:o,offsetId:f});const{newViewportIds:v,areSomeLocal:h,areAllLocal:g}=i(t,o,a,f);!h||l&&(0,c.et)(l,v)||(u.current=v,m()),!g&&e&&e({offsetId:f})}),[t,a,e,m]);return n?[t]:[u.current,h]}},62357:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(14050);const r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=(0,o.sO)(e);(0,o.bt)((()=>{r.current=e}),[e]),(0,o.d4)((()=>{if(void 0===t)return;const e=setInterval((()=>r.current()),t);return n||r.current(),()=>clearInterval(e)}),[t,n])}},6202:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(14050),r=n(6137),c=n(40647),s=n(65326);const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.IU.BlobUrl,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;const a=e?c.UV(e):void 0,d=(0,s.Z)();return(0,o.d4)((()=>{if(!t&&e&&!a){const t=Date.now();c.he(e,n).then((()=>{const e=Date.now()-t;!i||e>=i?d():setTimeout(d,i-e)}))}}),[t,e,a,n,l,d,i]),a}},82972:(e,t,n)=>{function o(e){e.offsetWidth}n.d(t,{Z:()=>o})},87675:(e,t,n)=>{n.d(t,{Z:()=>s,z:()=>c});var o=n(77361),r=n(82972);function c(e){e.style.display="none",(0,r.Z)(e),e.style.display=""}const s=(e,t)=>{o.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),o.cj&&(e.style.overflow="")}},74753:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(83716);const r=e=>{e.play().catch((t=>{o.eM&&console.warn(t,e)}))}}}]);
//# sourceMappingURL=9453.776e834e1ea479bc1033.js.map