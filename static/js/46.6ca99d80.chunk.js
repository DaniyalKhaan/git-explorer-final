"use strict";(self.webpackChunkgit_explorer=self.webpackChunkgit_explorer||[]).push([[46],{46:function(e,n,r){r.r(n);var t=r(165),a=r(861),s=r(439),c=r(689),i=r(791),o=r(243),l=r(87),u=r(184);n.default=function(){var e=(0,i.useState)(),n=(0,s.Z)(e,2),r=n[0],d=n[1],h=(0,i.useState)(!1),p=(0,s.Z)(h,2),f=p[0],x=p[1],m=(0,c.UO)(),g=m.name,v=m.username;return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.github.com/repos/".concat(v,"/").concat(g));case 2:return n=e.sent,console.log("USER IS HERE",n.data),d(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){return console.error(e)}))}),[v,g]),(0,u.jsx)("div",{children:(0,u.jsx)("div",{className:"top-cont",children:r?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{className:"avatar-img",src:r.owner.avatar_url,alt:"",style:{width:"30%"}}),(0,u.jsxs)("div",{className:"name-cont",children:[(0,u.jsxs)("span",{className:"username",children:["Owner:"," ",(0,u.jsx)(l.rU,{to:"/users/user/".concat(r.owner.login),children:r.owner.login})]}),(0,u.jsxs)("span",{className:"repo-lang-span",children:["Language: ",r.language]}),(0,u.jsx)("h2",{children:r.name}),(0,u.jsxs)("div",{className:"follow-cont",children:[(0,u.jsx)("a",{className:"view-ongit-a",href:r.html_url,target:"_blank",rel:"noreferrer",children:"View on GitHub"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{className:"clone-url-inp",type:"text",value:r.clone_url}),(0,u.jsx)("button",{onClick:function(){navigator.clipboard.writeText(r.clone_url),x((function(e){return!e})),setTimeout((function(){return x((function(e){return!e}))}),3e3)},children:f?"Copied":"Clone"})]})]})]})]}):(0,u.jsx)("h1",{children:"Loadin..."})})})}}}]);
//# sourceMappingURL=46.6ca99d80.chunk.js.map