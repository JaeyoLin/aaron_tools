(window.webpackJsonpaaron_tools=window.webpackJsonpaaron_tools||[]).push([[0],{45:function(e,t,n){e.exports=n(59)},50:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),i=n.n(s),o=(n(50),n(10)),c=n(13),l=n(3),u=n(61),p=n(28),d=n(101),m=n(92),b=n(93),f=n(94),g=n(97),h=n(29),E=n(96),O=n(95),w=n(38),v=n.n(w),y=n(39),j=n.n(y),I=n(40),x=n.n(I),S=n(98),M=n(99),N=n(100),k=n(41),P=n.n(k),B=n(91),C=n(36),A=n(12),D=new Map([["A","10"],["B","11"],["C","12"],["D","13"],["E","14"],["F","15"],["G","16"],["H","17"],["I","34"],["J","18"],["K","19"],["M","21"],["N","22"],["O","35"],["P","23"],["Q","24"],["T","27"],["U","28"],["V","29"],["W","32"],["X","30"],["Z","33"],["L","20"],["R","25"],["S","26"],["Y","31"]]),T=function(e,t){var n=t.toUpperCase();if(e){if(10!==n.length)return!1;if(isNaN(n.substr(1,9))||!/^[A-Z]$/.test(n.substr(0,1)))return!1;n="ABCDEFGHJKLMNPQRSTUVXYWZIO".indexOf(n.substring(0,1))+10+""+n.substr(1,9);var a=parseInt(n.substr(0,1))+9*parseInt(n.substr(1,1))+8*parseInt(n.substr(2,1))+7*parseInt(n.substr(3,1))+6*parseInt(n.substr(4,1))+5*parseInt(n.substr(5,1))+4*parseInt(n.substr(6,1))+3*parseInt(n.substr(7,1))+2*parseInt(n.substr(8,1))+parseInt(n.substr(9,1)),r=parseInt(n.substr(10,1));return a%10===0||10-a%10===r}if(10!==n.length)return!1;if(isNaN(n.substr(2,8))||!/^[A-Z]$/.test(n.substr(0,1))||!/^[A-Z]$/.test(n.substr(1,1)))return!1;n="ABCDEFGHJKLMNPQRSTUVXYWZIO".indexOf(n.substring(0,1))+10+""+("ABCDEFGHJKLMNPQRSTUVXYWZIO".indexOf(n.substr(1,1))+10)%10+n.substr(2,8);var s=parseInt(n.substr(0,1))+9*parseInt(n.substr(1,1))+8*parseInt(n.substr(2,1))+7*parseInt(n.substr(3,1))+6*parseInt(n.substr(4,1))+5*parseInt(n.substr(5,1))+4*parseInt(n.substr(6,1))+3*parseInt(n.substr(7,1))+2*parseInt(n.substr(8,1))+parseInt(n.substr(9,1)),i=parseInt(n.substr(10,1));return s%10===0||10-s%10===i},H=Object(A.a)(D.keys()),L=[1,2],R=Object(A.a)(Array(10).keys()),W=Object(A.a)(Array(8).keys()),Z=["A","B","C","D"],G=function(){var e=[];return W.forEach(function(t){e.push(R[Math.floor(Math.random()*R.length)])}),e.reduce(function(e,t){return e.toString()+t.toString()},"")},J=function e(){var t=H[Math.floor(Math.random()*H.length)],n=L[Math.floor(Math.random()*L.length)],a="".concat(t).concat(n).concat(G());return T(!0,a)?a:e()},F=function e(){var t=H[Math.floor(Math.random()*H.length)],n=Z[Math.floor(Math.random()*Z.length)],a="".concat(t).concat(n).concat(G());return T(!1,a)?a:e()},U=(Object(u.a)(function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)}}}),function(e){var t=e.text;return r.a.createElement("li",{style:{height:"35px"}},r.a.createElement("div",{key:t,style:{display:"flex"}},r.a.createElement("div",{style:{paddingRight:"10px",paddingTop:"5px",width:"100px"}},t),r.a.createElement(C.CopyToClipboard,{text:t},r.a.createElement(B.a,{variant:"outlined",color:"secondary",size:"small"},"Copy"))))}),K=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),c=Object(o.a)(i,2),l=c[0],u=c[1];Object(a.useEffect)(function(){p()},[]);var p=function(){for(var e=[],t=1;t<=5;t+=1)e.push(J());for(var n=[],a=1;a<=5;a+=1)n.push(F());s(e),u(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"contained",color:"primary",onClick:p},"Random"),r.a.createElement("p",null,"\u8eab\u5206\u8b49\u5b57\u865f"),r.a.createElement("ul",null,n.map(function(e){return r.a.createElement(U,{text:e})})),r.a.createElement("p",null,"\u62d8\u7559\u8b49\u865f"),r.a.createElement("ul",null,l.map(function(e){return r.a.createElement(U,{text:e})})))};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var X=Object(u.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:V({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),Y=function(){var e=X(),t=Object(p.a)(),n=r.a.useState(!1),a=Object(o.a)(n,2),s=a[0],i=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(b.a,{position:"fixed",className:Object(l.a)(e.appBar,Object(c.a)({},e.appBarShift,s))},r.a.createElement(f.a,null,r.a.createElement(O.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(l.a)(e.menuButton,s&&e.hide)},r.a.createElement(v.a,null)),r.a.createElement(h.a,{variant:"h6",noWrap:!0},"Aaron Tools"))),r.a.createElement(d.a,{className:e.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(O.a,{onClick:function(){i(!1)}},"ltr"===t.direction?r.a.createElement(j.a,null):r.a.createElement(x.a,null))),r.a.createElement(E.a,null),r.a.createElement(g.a,null,r.a.createElement(S.a,{button:!0,key:"Tools"},r.a.createElement(M.a,null,r.a.createElement(P.a,null)),r.a.createElement(N.a,{primary:"Tools"})))),r.a.createElement("main",{className:Object(l.a)(e.content,Object(c.a)({},e.contentShift,s))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.df35520f.chunk.js.map