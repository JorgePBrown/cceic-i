(this.webpackJsonpplatform=this.webpackJsonpplatform||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),r=n(7),a=n.n(r),o=(n(14),n(15),n(8)),c=n(2),l=n(0);function h(e){var t=e.info,n=e.practice;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"info",children:t.map((function(e,t){return"text"===e.type?Object(l.jsx)("p",{className:"text",children:e.text},t):"video/youtube"===e.type?Object(l.jsx)("iframe",{className:"video",width:"560",height:"315",src:e.link,title:"YouTube video player",frameBorder:"0",allowFullScreen:!0},t):"text/list"===e.type?Object(l.jsx)("ul",{className:"list",children:e.items.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))},t):void 0}))}),Object(l.jsx)("button",{onClick:n,children:"Practice it!"})]})}var u=n(6),d=["one","two","three","four","five"];function p(e){var t=e.questions,n=e.correctCallback,s=Object(i.useState)(Object(u.a)(Array(t.length).keys())),r=Object(c.a)(s,2),a=r[0],o=r[1],h=Object(i.useState)(void 0),p=Object(c.a)(h,2),m=p[0],f=p[1],b=Object(i.useState)(0),g=Object(c.a)(b,2),j=g[0],v=g[1];function y(e,n){var i=t[a[e]].answer===n;f(i)}function x(e){f(void 0),v(function(e){return 0===e.length?void 0:Math.floor(Math.random()*e.length)}(e))}if(0===a.length)return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Congratulations! You have answered all questions of this module correctly!"}),Object(l.jsx)("button",{onClick:n,children:"Next"})]});var w,O=t[a[j]];return w=void 0===m?"boolean"===typeof O.answer?Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"yes",onClick:function(){return y(j,!0)},children:"Yes"}),Object(l.jsx)("button",{className:"no",onClick:function(){return y(j,!1)},children:"No"})]})}):Object(l.jsx)("div",{className:"multiple-choice ".concat(d[O.options.length-1]),children:O.options.map((function(e,t){return Object(l.jsx)("button",{onClick:function(){return y(j,t)},children:e},t)}))}):m?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"That is correct!"}),Object(l.jsx)("button",{onClick:function(){var e=Object(u.a)(a);e.splice(j,1),o(e),x(e)},children:"Next"})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"That is incorrect."}),Object(l.jsx)("p",{className:"help",children:O.help}),Object(l.jsx)("button",{onClick:function(){return x(a)},children:"Retry"})]}),Object(l.jsxs)("div",{className:"practice",children:[Object(l.jsx)("h3",{children:O.question}),w]})}function m(e){var t,n=e.mode,i=e.module,s=e.setMode,r=e.nextCallback;return t="learn"===n?Object(l.jsx)(h,{info:i.info,practice:function(){return s("practice & return")}}):Object(l.jsx)(p,{questions:i.questions,correctCallback:r},i.title),Object(l.jsxs)("div",{className:"module",children:[Object(l.jsx)("h2",{className:"title",children:i.title}),t,i.ref?Object(l.jsxs)("div",{className:"ref-list",children:[Object(l.jsx)("h3",{children:"References"}),i.ref.map((function(e,t){return Object(l.jsxs)("div",{className:"ref",children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("a",{href:e.url,children:e.url})]},t)}))]}):void 0]})}function f(e){var t,n=e.mode,s=e.modules,r=e.setMode,a=Object(i.useState)(void 0),o=Object(c.a)(a,2),h=o[0],u=o[1];function d(){h===s.length-1?u(0):u(h+1)}return t=void 0===h?Object(l.jsx)("div",{className:"list",children:s.map((function(e,t){return Object(l.jsx)("li",{className:"item",children:Object(l.jsx)("button",{className:"item",onClick:function(){return u(t)},children:e.title},t)},t)}))}):"practice & return"===n?Object(l.jsx)(m,{mode:"practice",module:s[h],setMode:r,nextCallback:function(){return r("learn")}}):Object(l.jsx)(m,{mode:n,module:s[h],setMode:r,nextCallback:d}),Object(l.jsxs)("div",{className:"picker",children:[Object(l.jsxs)("div",{className:"selector",hidden:void 0===h,children:[Object(l.jsx)("button",{onClick:function(){u(0===h?s.length-1:h-1)},children:"Previous"}),Object(l.jsx)("button",{onClick:function(){return u(void 0)},children:"Select"}),Object(l.jsx)("button",{onClick:d,children:"Next"})]}),t]})}var b=n(9).sort((function(e,t){return e.text<t.text?-1:e.text>t.text?1:0}));function g(e){var t,n=e.modules,s=Object(i.useState)(void 0),r=Object(c.a)(s,2),a=r[0],o=r[1];return t=void 0===a?Object(l.jsxs)("div",{className:"mode picker",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return o("learn")},children:"Learn"}),Object(l.jsx)("button",{onClick:function(){return o("practice")},children:"Practice"})]}),Object(l.jsx)("button",{onClick:function(){return o("ref")},children:"References"})]}):"ref"===a?Object(l.jsx)("div",{children:b.map((function(e,t){return Object(l.jsxs)("div",{className:"ref",children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("a",{href:e.url,children:e.url})]},t)}))}):Object(l.jsx)("div",{children:Object(l.jsx)(f,{mode:a,modules:n,setMode:o})}),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h1",{children:"Active Listening"}),Object(l.jsx)("button",{className:"home button",hidden:void 0===a,onClick:function(){return o(void 0)},children:"Home"}),t]})}var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(g,{modules:o})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),v()},8:function(e){e.exports=JSON.parse('[{"title":"What is Active Listening?","info":[{"type":"video/youtube","link":"https://www.youtube.com/embed/rzsVh8YwZEQ"},{"type":"text","text":"Active listening requires us as listeners to capture what the sender is communicating from the sender\'s point of view through verbal and non-verbal cues.\u200b More than that, we must convey to the sender that we are seeing things from the sender\'s point of view.\u200b We can never be sure to understand another person completely or in detail. Therefore, it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum."}],"questions":[{"question":"Is active listening all about what the other person is saying?","answer":false,"help":"No, it\'s about what they are saying and what their body language is showing."},{"question":"What is active listening?","options":["A listener reflects back to the sender his or her impression of what is expressed without judging.","The listener is genuinely interested in hearing and understanding the other person\'s point of view and therefore listens intently. Assuming to have heard correctly the listener does not say anything but indicates interest and attention by nonverbal aspects of communication like by maintaining eye contact and periodically nodding or smiling.","Sound enters someone\'s ears but there is little chance or even attempt to comprehend or respond (e.g., listening to someone while reading the newspaper)."],"answer":0,"help":"\\"Active listening requires us as listeners to capture what the sender is communicating from the sender\'s point of view. More than that, we have to convey to the sender that we are seeing things from the sender\'s point of view. We can never be sure to understand another person completely or in detail.  Therefore it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum.\\" \\"Active Listening\\" in Written Online Communication \u2013 A Case Study in a Course on \\"Soft Skills for Computer Scientists\\" Christine Bauer and Kathrin Figl"},{"question":"Does the listener only have to attentively listen and read the speaker\'s body language?","answer":false,"help":"No, it\'s important that the listener reinforces that they are listening, for example, through paraphrasing.\u200b"},{"question":"Should the listener ask questions?","answer":true,"help":"Asking can help the listener clarify something he might have misunderstood and it also shows the speaker that the listener is interested in and understanding what he is saying."}],"ref":[{"text":"Bauer, C., & Figl, K. (2008, October). Active listening? in written online communication-a case study in a course on ?soft skills for computer scientists. In 2008 38th Annual Frontiers in Education Conference (pp. F2C-1). IEEE.","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4720282"}]},{"title":"What are the benefits of Active Listening?","info":[{"type":"text","text":"Active listening has a lot of benefits. These are:"},{"type":"text/list","items":["Better understanding - The fact that the listener also talks for clarification or paraphrasing, means that both the speaker and the listener can be sure that all was understood.","Increased availability - As someone is listened to, their availability to hear the other person will increase.","Showing respect - Actively listening to someone will show our respect for them and what they have to say.","Greater empathy - Through active listening it is possible to better understand a person\'s emotional state, which will allow the listener to interact with the speaker in a more empathetic manner.","Greater quality of information - By intervening, the listener can guide the speaker to reach the core of his or hers problem/reason for talking."]}],"questions":[{"question":"Are faster conversations a benefit of Active Listening?","answer":false,"help":"No, actively listening does not make conversations faster."},{"question":"What is a benefit of Active Listening?","options":["Better memory of conversations.","Better at speaking.","Better understanding.","All of the above."],"answer":2},{"question":"What is not a benefit of Active Listening?","options":["Greater respect between the speaker and the listener.","Lesser quality of information.","Greater empathy.","Increased availability."],"answer":1}],"ref":[{"text":"Bauer, C., & Figl, K. (2008, October). Active listening? in written online communication-a case study in a course on ?soft skills for computer scientists. In 2008 38th Annual Frontiers in Education Conference (pp. F2C-1). IEEE.","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4720282"}]},{"title":"What are some verbal strategies for Active Listening?","info":[{"type":"text","text":"There are some verbal strategies that can help us actively listen, such as:"},{"type":"text/list","items":["Paraphrasing - It shows interest and encourage others to keep talking. It consists in restating the information spoken with the listener\'s own words.","Verbalizing Emotions - It shows the speaker that the listener understands his or her feelings and helps build empathy.","Asking - Asking is done with the intention of acquiring more information, which will make the speaker think the listener is invested in the conversation.","Summarizing - It shows the speaker that the listener has understood what was said previously and what the context for further conversation is.","Clarifying - Although similar to asking, clarifying has to do with asking about something that was said already."]}],"questions":[{"question":"Is repeating every single word the speaker says a good verbal strategy for Active Listening?","answer":false,"help":"It is important to be able to repeat the message, but through the listener\'s own words. This is called paraphrasing."},{"question":"\\"I showed up at 8:55am for the 9am and they still said I was late!\\" Which of these options is paraphrasing?","options":["That must have made you really angry.","So they said you were late even though you arrived 5 minutes early...","They said you were late?"],"answer":1},{"question":"\\"I showed up at 8:55am for the 9am and they still said I was late!\\" Which of these options is clarifying?","options":["That must have made you really angry.","So they said you were late even though you arrived 5 minutes early...","They said you were late?"],"answer":2},{"question":"\\"I showed up at 8:55am for the 9am and they still said I was late!\\" Which of these options is verbalizing emotions?","options":["That must have made you really angry.","So they said you were late even though you arrived 5 minutes early...","They said you were late?"],"answer":0}],"ref":[{"text":"Bauer, C., & Figl, K. (2008, October). Active listening? in written online communication-a case study in a course on ?soft skills for computer scientists. In 2008 38th Annual Frontiers in Education Conference (pp. F2C-1). IEEE.","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4720282"}]}]')},9:function(e){e.exports=JSON.parse('[{"text":"Bauer, C., & Figl, K. (2008, October). Active listening? in written online communication-a case study in a course on ?soft skills for computer scientists. In 2008 38th Annual Frontiers in Education Conference (pp. F2C-1). IEEE.","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4720282"},{"text":"Ferrari-Bridgers, F., Stroumbakis, K., Drini, M., Lynch, B., & Vogel, R. (2017). Assessing critical-analytical listening skills in math and engineering students: An exploratory inquiry of how analytical listening skills can positively impact learning. International Journal of Listening, 31(3), 121-141.","url":"https://www.tandfonline.com/doi/full/10.1080/10904018.2016.1222910?casa_token=xULdeTVqi2AAAAAA%3AZZMMQwtuvL2LthRArYeP1uROKoy-sV2L5lJ2LHKC1v1ohXVrehTbzulacIMvMT7oN9OelM2r-6_3#aHR0cHM6Ly93d3cudGFuZGZvbmxpbmUuY29tL2RvaS9wZGYvMTAuMTA4MC8xMDkwNDAxOC4yMDE2LjEyMjI5MTA/bmVlZEFjY2Vzcz10cnVlQEBAMA=="},{"text":"Leydens, J. A., & Lucena, J. C. (2009). Listening as a missing dimension in engineering education: Implications for sustainable community development efforts. IEEE transactions on professional communication, 52(4), 359-376.","url":"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5313652"},{"text":"Weger Jr, H., Castle, G. R., & Emmett, M. C. (2010). Active listening in peer interviews: The influence of message paraphrasing on perceptions of listening skill. The Intl. Journal of Listening, 24(1), 34-49.","url":"https://www.tandfonline.com/doi/full/10.1080/10904010903466311"},{"text":"Xiao, Ziang and Zhou, Michelle X. and Chen, Wenxi and Yang, Huahai and Chi, Changyan (2020). If I Hear You Correctly: Building and Evaluating Interview Chatbots with Active Listening Skills.","url":"https://doi.org/10.1145/3313831.3376131"},{"text":"GCFLearnFree.org. (2019, Jan 29), Active Listening [Video]. Youtube.","url":"https://www.youtube.com/watch?v=rzsVh8YwZEQ"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.6b3c2c12.chunk.js.map