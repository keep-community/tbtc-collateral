(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(0),r=n.n(c),i=n(15),o=n.n(i),s=(n(51),n(14)),l=n(93),j=n(30),b=n(34),u=n(40),d=n(89),h=n(90),O=n(96),x=n(91),m=n(95);n(52);function f(e){var t=e.children,n=e.value,c=e.index,r=Object(u.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(b.a)(Object(b.a)({role:"tabpanel",hidden:n!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c),className:"tabpanel"},r),{},{children:n===c&&Object(a.jsx)(m.a,{p:3,children:t})}))}var v=Object(d.a)({root:{flexGrow:1}});function p(e){var t=v(),n=r.a.useState(0),c=Object(j.a)(n,2),i=c[0],o=c[1];return Object(a.jsxs)(h.a,{className:t.root,children:[Object(a.jsx)(O.a,{value:i,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:e.tabs.map((function(e){var t=e.tabLabel;return Object(a.jsx)(x.a,{label:t},t)}))}),e.tabs.map((function(e,t){var n=e.content;return Object(a.jsx)(f,{value:i,index:t,children:n},t)}))]})}var g=n.p+"static/media/bounty-farmer.74145d73.png";n(59);function w(){return Object(a.jsx)("div",{id:"footer",children:Object(a.jsx)("img",{src:g,className:"farmer-image",alt:"farmer"})})}var N=n(94);function C(){return Object(a.jsx)(N.a,{size:"large",children:"Connect with MetaMask"})}var k=n(92);n(62);function M(){return Object(a.jsx)("div",{className:"bounties-container",children:Object(a.jsx)(k.a,{size:"5em"})})}var y=n(39),F=n.n(y);n(68);function L(){var e,t,n=r.a.useState(Number(null===(e=window.ethereum)||void 0===e?void 0:e.chainId)),c=Object(j.a)(n,2),i=c[0],o=c[1];return null===(t=window.ethereum)||void 0===t||t.on("chainChanged",(function(e){return o(Number(e))})),Object(a.jsxs)("div",{className:"accountStatus",children:[Object(a.jsx)(N.a.Outline,{size:"small",children:"Connect with MetaMask"}),void 0!==i?Object(a.jsx)(F.a,{currentNetwork:i,requiredNetwork:1,children:{onWrongNetworkMessage:"Wrong network, connect to Mainnet"}}):Object(a.jsx)(a.Fragment,{})]})}var S=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(L,{}),Object(a.jsxs)(s.b,{children:[Object(a.jsx)(l.a,{children:"KEEP Redemption Bounties"}),Object(a.jsx)(p,{tabs:[{tabLabel:"Redeem",content:Object(a.jsx)(M,{})},{tabLabel:"Manage",content:Object(a.jsx)(C,{})}]})]}),Object(a.jsx)(w,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),z()}},[[69,1,2]]]);
//# sourceMappingURL=main.eaac7615.chunk.js.map