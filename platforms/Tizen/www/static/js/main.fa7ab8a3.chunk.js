(this["webpackJsonptv-app"]=this["webpackJsonptv-app"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);n(33);var a=n(32),i=n.n(a),s=n(7),l=(n(38),n(9)),c=n(1),r=n(56),o=(n(39),n(40),n(54)),u=(n(41),n(3));function d(e){var t=e.profile,n=e.setSelectedProfile;return Object(u.jsxs)(s.a,{className:"profile",style:{"--color":t.color},onSelected:function(){return n(t)},children:[Object(u.jsx)("div",{className:"profile_icon"}),Object(u.jsx)("div",{className:"profile_username",children:t.name})]})}var f=[{name:"Ryane",color:"rgb(230, 97, 35)"},{name:"Javi",color:"rgb(42, 100, 167)"},{name:"Priya",color:"rgb(214, 30, 107)"}];function v(e){var t=e.setSelectedProfile;return Object(u.jsxs)(s.a,{elementType:o.a.div,orientation:"horizontal",className:"profiles page",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.15,opacity:0},transition:{duration:.25,ease:"easeOut"},children:[Object(u.jsx)("div",{className:"profiles_title",children:"Choose your profile"}),Object(u.jsx)("div",{className:"profiles_profileList",children:f.map((function(e,n){return Object(u.jsx)(d,{setSelectedProfile:t,profile:e},n)}))})]})}var g=n(23),m=n(26),j=(n(43),n(24)),b=n.n(j);n(44),n(45);function p(e){var t=e.title,n=e.thumbnail,a=e.id;return Object(u.jsxs)(s.a,{className:"title",focusId:"railItem_"+a,children:[Object(u.jsx)("img",{src:n,alt:t,style:{width:"100%",objectFit:"fill",borderRadius:"5px"}}),Object(u.jsx)("div",{className:"focusMarker",children:"-"})]})}var h=["Action Movies","Only on Enlight","Marvel Movies","Drama Movies","Romantic Comdey Movies","Trending Now","Comdey Movies","Thriller Movies","Action Movies","Only on Enlight","Marvel Movies","Drama Movies","Romantic Comdey Movies","Trending Now","Comdey Movies","Thriller Movies"];function O(e){console.log(e);var t=e.row,n=e.rowIndex,a=e.id,i=Object(c.useState)(0),r=Object(l.a)(i,2),o=r[0],d=r[1],f=Object(c.useState)(0),v=Object(l.a)(f,2),g=v[0],m=v[1];Object(c.useEffect)((function(){var e=1782,n=240*t.length,a=240*g;a>n-e&&(a=n-e),n<=e&&(a=0),d(a*=-1)}),[t,g]),console.log(o,n);var j={transform:"translateX(".concat(o,"px)"),transition:"transform 0.5s ease-in-out"};return Object(u.jsxs)(s.a,{className:b()("row"),focusId:a,onLeft:function(e){console.log(e),g>0&&m(g-1)},onRight:function(e){console.log(e),g<t.length-1&&m(g+1)},children:[Object(u.jsx)("div",{className:"row_header",children:h[n]}),Object(u.jsx)("div",{className:"row_titles",style:j,children:t&&t.map((function(e,t){return Object(u.jsx)(p,{id:t+"_"+h[n],title:e.label,thumbnail:e.thumbnail},t)}))})]})}var x=["/filters/dgnlsl30-movies-action?page=1&language=en&size=50","/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50","/filters/marvel-movies?page=1&language=en&size=50","/filters/gNAaDQJl13GS?page=1&language=en&size=100","/filters/dgnlsl30-movies-action?page=1&language=en&size=50","/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50","/filters/marvel-movies?page=1&language=en&size=50","/filters/gNAaDQJl13GS?page=1&language=en&size=100","/filters/dgnlsl30-movies-action?page=1&language=en&size=50","/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50","/filters/marvel-movies?page=1&language=en&size=50","/filters/gNAaDQJl13GS?page=1&language=en&size=100","/filters/dgnlsl30-movies-action?page=1&language=en&size=50","/filters/dgnlsl30-movies-comedy?page=1&language=en&size=50","/filters/marvel-movies?page=1&language=en&size=50","/filters/gNAaDQJl13GS?page=1&language=en&size=100"],y=n(14),N=n(15),w=n(55),I=function(){function e(){Object(y.a)(this,e),this.AxiosAPI=w.a.create({baseURL:"https://api-entertainment.enlight.diagnal.com/v1b3/content"})}return Object(N.a)(e,[{key:"fetch",value:function(){var e=Object(m.a)(Object(g.a)().mark((function e(t){var n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.AxiosAPI.get(t);case 3:return n=e.sent,e.abrupt("return",[n,void 0]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[void 0,e.t0]);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=I,z=400;function M(e){e.selectedProfile;var t=new S,n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],r=a[1],d=Object(c.useState)(!0),f=Object(l.a)(d,2),v=f[0],j=f[1];Object(c.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]);var b=Object(c.useState)({rowIndex:0,columnIndex:0}),p=Object(l.a)(b,2),y=p[0],N=p[1],w=Object(s.d)();return v?Object(u.jsx)("div",{className:"home page",style:{left:800,top:300},children:"loading..."}):Object(u.jsx)(s.a,{className:"home page",isGrid:!0,focusId:"home",defaultFocusColumn:y.columnIndex,defaultFocusRow:y.rowIndex,onLeft:function(e){0===y.columnIndex&&(e.preventDefault(),w("nav"))},onGridMove:function(e){N({rowIndex:e.nextRowIndex,columnIndex:e.nextColumnIndex})},elementType:o.a.div,initial:{scale:.8,opacity:0,y:0},animate:{scale:1,opacity:1,y:-z*y.rowIndex},exit:{scale:1.15,opacity:0},transition:{duration:.25,ease:"easeOut"},children:i&&i.map((function(e,t){return Object(u.jsx)(O,{row:e,id:h[t].replaceAll(" ","_")+t.toString(),rowIndex:t},h[t].replaceAll(" ","_")+t.toString())}))});function I(){return(I=Object(m.a)(Object(g.a)().mark((function e(){var n,a;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=0;case 2:if(!(a<x.length)){e.next=8;break}return e.next=5,t.fetch(x[a]).then((function(e){if(e){var t,a,i=null===(t=e[0])||void 0===t||null===(a=t.data)||void 0===a?void 0:a.content.map((function(e,t){var n;return{key:t.toString()+e.title+e.uid,label:e.title,thumbnail:null===(n=e.images.find((function(e){return 288===e.width})))||void 0===n?void 0:n.url}}));n.push(i),console.log("saving")}}));case 5:a++,e.next=2;break;case 8:r(n),j(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}n(50);var _=[{label:"Search"},{label:"Home",isCurrentPage:!0},{label:"Favorites"},{label:"Settings"}];function P(e){e.selectedProfile;var t=Object(s.d)(),n=Object(s.c)("nav");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{isTrap:!0,orientation:"vertical",className:"nav",focusId:"nav",onRight:function(e){e.preventDefault(),t("home")},children:Object(u.jsx)("div",{className:"nav_list",children:_.map((function(e,t){return Object(u.jsx)(s.a,{className:b()("nav_link",{"nav_link-isCurrentPage":e.isCurrentPage}),focusId:"nav".concat(e.label),children:Object(u.jsx)("span",{className:"nav_linkContents",children:e.label})},t)}))})}),Object(u.jsx)("div",{className:b()("nav_shim",{"nav_shim-isVisible":null===n||void 0===n?void 0:n.isFocused})})]})}function k(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Boolean(n);return Object(u.jsxs)(s.a,{className:"app",children:[Object(u.jsx)(r.a,{children:!i&&Object(u.jsx)(v,{setSelectedProfile:a})}),Object(u.jsx)(r.a,{children:i&&Object(u.jsx)(M,{profile:n})}),n&&Object(u.jsx)(P,{selectedProfile:n})]})}i.a.render(Object(u.jsx)(s.b,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.fa7ab8a3.chunk.js.map