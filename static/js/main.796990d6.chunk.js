(this["webpackJsonpeurovision-ui"]=this["webpackJsonpeurovision-ui"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(14),o=n.n(i),a=(n(23),n(18)),r=n.p+"static/media/logo.6ce24c58.svg",j=(n(24),n(15)),u=n.n(j),l=n(16),d=n(17),b=n.n(d),h=n(0),g=function(e){var t=e.song;return Object(h.jsx)("li",{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("div",{children:t.song_name}),Object(h.jsx)("div",{className:"flag",children:Object(h.jsx)(l.a,{country:b()().getValue(t.country)})})]})})},t.id)},O=function(e){return Object(h.jsx)("ol",{children:e.songs.map((function(e){return Object(h.jsx)(g,{song:e})}))})};var p=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){u()({method:"GET",url:"http://127.0.0.1:8000/api/test-api/"}).then((function(e){s(e.data)}))}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(h.jsx)(O,{songs:n})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),f()}},[[48,1,2]]]);
//# sourceMappingURL=main.796990d6.chunk.js.map