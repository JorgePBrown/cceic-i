(this.webpackJsonpplatform=this.webpackJsonpplatform||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"title":"What is Active Listening?","info":["Active listening requires us as listeners to capture what the sender is communicating from the sender\'s point of view through verbal and non-verbal cues.\u200b More than that, we must convey to the sender that we are seeing things from the sender\'s point of view.\u200b We can never be sure to understand another person completely or in detail. Therefore, it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum."],"questions":[{"question":"Is active listening all about what the other person is saying?","answer":false,"help":"No, it\'s about what they are saying and what their body language is showing."},{"question":"Does the listener only have to attentively listen and read the speaker\'s body language?","answer":false,"help":"No, it\'s important that the listener reinforces that they are listening, for example, through paraphrasing.\u200b"},{"question":"Should the listener ask questions?","answer":true,"help":"Asking can help the listener clarify something he might have misunderstood and it also shows the speaker that the listener is interested in and understanding what he is saying."}]},{"title":"What are some verbal strategies for Active Listening?","info":["There are some verbal strategies that can help us activelly listen, such as:","Paraphrasing - It shows interest and encourage others to keep talking. It consists in restating the information spoken with the listern\'s own words.","Verbalizing Emotions - It shows the speaker that the listener understands his or her feelings and helps build empathy.","Asking - Asking is done with the intention of acquiring more information, which will make the speaker think the listener is invested in the conversation."],"questions":[{"question":"Is screaming a good strategy?","answer":false,"help":"Please no screaming, this is a library."},{"question":"Is repeating every single word the speaker says a good verbal strategy for Active Listening?","answer":false,"help":"It is important to be able to repeat the message, but through the listener\'s own words. This is called paraphrasing."}]}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),r=n(4),o=n.n(r),a=(n(10),n(11),n(5)),c=n(2),l=n(0);function h(e){return e[Math.floor(Math.random()*e.length)]}function d(e){var t,n=e.questions,s=e.correctCallback,r=Object(i.useState)(void 0),o=Object(c.a)(r,2),a=o[0],d=o[1],u=Object(i.useState)(h(n)),j=Object(c.a)(u,2),b=j[0],g=j[1];function v(e,t){d(e.answer===t)}return t=void 0===a?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return v(b,!0)},children:"Yes"}),Object(l.jsx)("button",{onClick:function(){return v(b,!1)},children:"No"})]})}):a?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"That is correct!"}),Object(l.jsx)("button",{onClick:function(){s(),d(void 0)},children:"Next"})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:b.help}),Object(l.jsx)("button",{onClick:function(){g(h(n)),d(void 0)},children:"Retry"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:b.question}),t]})}function u(e){var t,n=e.mode,i=e.module,s=e.nextCallback;return t="learn"===n?Object(l.jsx)("div",{children:i.info.map((function(e,t){return Object(l.jsx)("p",{children:e},t)}))}):Object(l.jsx)(d,{questions:i.questions,correctCallback:s}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:i.title}),t]})}function j(e){var t,n=e.mode,s=e.modules,r=Object(i.useState)(void 0),o=Object(c.a)(r,2),a=o[0],h=o[1];function d(){a===s.length-1?h(0):h(a+1)}return t=void 0===a?Object(l.jsx)("ul",{children:s.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return h(t)},children:e.title})},t)}))}):Object(l.jsx)(u,{mode:n,module:s[a],nextCallback:d}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{hidden:void 0===a,children:[Object(l.jsx)("button",{onClick:function(){return h(void 0)},children:"Select"}),Object(l.jsx)("button",{onClick:function(){h(0===a?s.length-1:a-1)},children:"Previous"}),Object(l.jsx)("button",{onClick:d,children:"Next"})]}),t]})}function b(e){var t,n=e.modules,s=Object(i.useState)(void 0),r=Object(c.a)(s,2),o=r[0],a=r[1];return t=void 0===o?Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return a("learn")},children:"Learn"}),Object(l.jsx)("button",{onClick:function(){return a("practice")},children:"Practice"})]}):Object(l.jsx)("div",{children:Object(l.jsx)(j,{mode:o,modules:n})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Active Listening"}),Object(l.jsx)("button",{hidden:void 0===o,onClick:function(){return a(void 0)},children:"Home"}),t]})}var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{modules:a})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()}],[[13,1,2]]]);
//# sourceMappingURL=main.e243b690.chunk.js.map