(this["webpackJsonpeurovision-ui"]=this["webpackJsonpeurovision-ui"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(2),s=n.n(c),o=n(14),i=n.n(o),r=(n(23),n(18)),a=n.p+"static/media/logo.6ce24c58.svg",u=(n(24),n(15)),j=n.n(u),l=n(16),d=n(17),g=n.n(d),b=n(0),p=function(t){var e=t.song;return Object(b.jsxs)("li",{children:[e.song_name,Object(b.jsx)(l.a,{country:g()().getValue(e.country)})]},e.id)},h=function(t){return Object(b.jsx)("ol",{children:t.songs.map((function(t){return Object(b.jsx)(p,{song:t})}))})};var f=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/test-api/"}).then((function(t){s(t.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(b.jsx)(h,{songs:n})]})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),o(t),i(t)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.dd999173.chunk.js.map