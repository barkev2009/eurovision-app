(this["webpackJsonpeurovision-ui"]=this["webpackJsonpeurovision-ui"]||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var c=t(2),s=t.n(c),i=t(14),a=t.n(i),r=(t(23),t(18)),o=(t.p,t(24),t(15)),u=t.n(o),j=t(16),d=t(17),l=t.n(d),b=t(0),h=function(e){var n=e.song;return Object(b.jsxs)("div",{className:"table-row",children:[Object(b.jsx)("div",{children:n.song_name}),Object(b.jsx)("div",{className:"flag",children:Object(b.jsx)(j.a,{country:l()().getValue(n.country)})})]})},f=function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"box",children:e.songs.map((function(e){return Object(b.jsx)(h,{song:e})}))})})};var O=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],s=n[1];return Object(c.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/test-api/"}).then((function(e){s(e.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(f,{songs:t})})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),p()}},[[48,1,2]]]);
//# sourceMappingURL=main.3110c1b0.chunk.js.map