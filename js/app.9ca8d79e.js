(function(t){function e(e){for(var r,o,a=e[0],c=e[1],u=e[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cordiant-quiz/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0562":function(t,e,s){t.exports=s.p+"img/quiz__mirror_right.1c917fb3.png"},"06c0":function(t,e,s){"use strict";s("f975")},"0966":function(t,e){function s(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id="0966"},"0a69":function(t,e,s){t.exports=s.p+"img/quiz__question-bg-2.972c1602.jpg"},"0e82":function(t,e,s){t.exports=s.p+"img/quiz__bg-result-3_mob.28142d3a.png"},"1fc7":function(t,e,s){},2375:function(t,e,s){t.exports=s.p+"img/quiz__question-bg-6.b8cff8cc.jpg"},2674:function(t,e,s){t.exports=s.p+"img/quiz__bg-result-2.7d2d30db.png"},"31b8":function(t,e,s){"use strict";s("1fc7")},"3e09":function(t,e,s){"use strict";s("6e65")},"3e1f":function(t,e,s){"use strict";s("9446")},4214:function(t,e,s){t.exports=s.p+"img/quiz__mirror_wrong.a27468e6.png"},"4cc0":function(t,e,s){t.exports=s.p+"img/logo-cordiant.667da727.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("QuizContainer")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz-container"},[s("QuizHeader"),t.isShowStartScreen?s("QuizStartScreen"):t._e(),t.isShowTotalResult||t.isShowStartScreen?t._e():s("img",{staticClass:"quiz-container__bg",attrs:{src:""+t.bgl,alt:""}}),t.isShowTotalResult||t.isShowStartScreen?t._e():s("QuizSalon"),!t.isShowQuestion||t.isShowTotalResult||t.isShowStartScreen?t._e():s("QuizQuestion"),t.isShowResultCurrentAnswer?s("QuizFeedback"):t._e(),t.isShowTotalResult?s("QuizTotalRezult"):t._e(),s("QuizFooter")],1)},a=[],c=s("5530"),u=(s("4de4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz-salon"},[s("div",{staticClass:"quiz-salon__mirror"},[s("img",{attrs:{src:""+t.emotionMirror,alt:"mirror"}})]),s("div",{staticClass:"quiz-salon__front-panel",style:"background: url("+t.imgSalonPanel+");\n          background-position: 0% center;\n          background-repeat: no-repeat;\n          background-size: cover;\n          "})])}),l=[],d=s("2f62"),f={name:"QuizSalon",data:function(){return{}},methods:{},computed:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["answerStatus","imgSalonPanel"])),{},{answStatus:function(){return this.answerStatus},emotionMirror:function(){switch(this.answStatus){case 0:return this.$store.state.imgWrong;case 1:return this.$store.state.imgNormal;case 2:return this.$store.state.imgRight;default:break}return""}})},_=f,h=(s("fd3a"),s("2877")),p=Object(h["a"])(_,u,l,!1,null,null,null),b=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz_question"},[s("QuizCounterQuestions"),s("h2",[t._v("Где эта дорога?")]),t._l(t.questions[t.currentQuestionIndex].responses,(function(t,e){return s("QuizBtn",{key:e,attrs:{answerIdx:e,correct:t.correct,response_txt:t.text,feedback:t.feedback,feedback_ad:t.feedback_ad}})}))],2)},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"quiz_btn",on:{click:t.changeAnswer}},[t._v(" "+t._s(t.response_txt)+" ")])},w=[],C={name:"QuizBtn",props:["response_txt","correct","answerIdx","feedback","feedback_ad"],computed:Object(c["a"])({},Object(d["c"])(["currentQuestionIndex","questions"])),methods:Object(c["a"])(Object(c["a"])({},Object(d["b"])(["changeAnswer","nextQuestion"])),{},{changeAnswer:function(){this.correct?(this.$store.dispatch("changeAnswer",2),this.$store.dispatch("countRightAnswers")):this.$store.dispatch("changeAnswer",0),this.$store.state.answerIdx=this.answerIdx,this.$store.state.isShowQuestion=!1,this.$store.state.isShowResultCurrentAnswer=!0}})},k=C,S=(s("3e09"),Object(h["a"])(k,v,w,!1,null,"7581b08f",null)),q=S.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz__counter-questions"},[s("span",{staticClass:"quiz__counter-questions-current"},[t._v(t._s(t.currentQuestionIndex))]),t._v(" / "),s("span",{staticClass:"quiz__counter-questions-total"},[t._v(t._s(t.totalQuestions))])])},x=[],R={name:"QuizCounterQuestions",computed:Object(c["a"])({},Object(d["c"])(["totalQuestions","currentQuestionIndex"]))},$=R,Q=(s("3e1f"),Object(h["a"])($,z,x,!1,null,"239d7ee4",null)),O=Q.exports,j={name:"QuizQuestion",components:{QuizBtn:q,QuizCounterQuestions:O},methods:Object(c["a"])(Object(c["a"])({},Object(d["b"])(["changeAnswer"])),{},{changeAnswer:function(t){this.$store.dispatch("changeAnswer",t)}}),computed:Object(c["a"])({},Object(d["c"])(["questions","currentQuestionIndex","isShowQuestion","totalRightAnswers"]))},A=j,I=(s("06c0"),Object(h["a"])(A,g,m,!1,null,"231c52e7",null)),T=I.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz__feedback"},[s("QuizCounterQuestions"),s("h3",[t._v(t._s(t.feedback))]),t.feedback_ad?s("p",{staticClass:"quiz__feedback-ad",domProps:{innerHTML:t._s(t.feedback_ad)}}):t._e(),s("button",{staticClass:"quiz__feedback-btn",on:{click:t.nextQuestion}},[t._v(" Далее ")])],1)},y=[],B={name:"QuizFeedback",components:{QuizCounterQuestions:O},computed:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["questions","currentQuestionIndex","answerIdx"])),{},{feedback:function(){return this.questions[this.currentQuestionIndex].responses[this.answerIdx].feedback},feedback_ad:function(){return this.questions[this.currentQuestionIndex].responses[this.answerIdx].feedback_ad}}),methods:{nextQuestion:function(){this.currentQuestionIndex<this.questions.length&&(this.$store.dispatch("changeAnswer",1),this.$store.dispatch("nextQuestion"),this.$store.state.isShowQuestion=!0,this.$store.state.isShowResultCurrentAnswer=!1),7===this.currentQuestionIndex&&(this.$store.state.isShowResultCurrentAnswer=!1,this.$store.state.isShowTotalResult=!0)}}},M=B,H=(s("f7f5"),Object(h["a"])(M,E,y,!1,null,"b181c7c8",null)),N=H.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quiz-total-result"},[r("section",{staticClass:"quiz-total-result__img"},[r("img",{attrs:{src:""+t.resultImage,alt:"result image"}}),r("img",{attrs:{src:""+t.resultImageMob,alt:"result image"}})]),r("section",{staticClass:"quiz-total-result__right-block"},[r("h2",[t._v(t._s(t.heading))]),r("p",{staticClass:"quiz-total-result__characteristic"},[t._v(t._s(t.characteristic))]),r("div",{staticClass:"quiz-total-result__social"},[r("button",{staticClass:"quiz-total-result__restart",on:{click:t.quizRepeat}},[r("img",{attrs:{src:s("7a9e"),alt:"repeat button"}}),r("span",[t._v("Пройти еще раз")])]),r("QuizSocial")],1),r("div",{staticClass:"quiz-total-result__hr"}),t._m(0),r("p",{staticClass:"quiz-total-result__promocode-date"},[t._v("Срок действия промокода до "),r("span",[t._v(t._s(t.quiz_promocode_date))])]),r("button",{staticClass:"quiz-total-result__btn-buy"},[t._v(" Купить шины со скидкой ")])])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("b",[t._v("Чтобы любая дорога была для вас безопасной")]),t._v(" — следите за качеством резины и переобувайтесь вовремя. С зимними шинами "),s("b",[t._v("Cordiant")]),t._v(" ваша машина будет уверенно выезжать из снежных заносов и стабильно вести себя на обледенелых трассах. Прямо сейчас комплект зимних шин "),s("b",[t._v("Cordiant")]),t._v(" можно купить со скидкой 15%! Просто введите промокод "),s("span",{staticClass:"quiz-total-result__CORDIHACKER"},[t._v("CORDIHACKER")]),t._v(" при покупке шин на "),s("a",{attrs:{href:"http://koleso.ru",target:"_blank",rel:"noopener noreferrer"}}),t._v(". ")])}],U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quiz-total-result__social-icons"},[r("a",{staticClass:"quiz__social-icon",attrs:{href:"/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:s("5ac9"),alt:"twitter"}})]),r("a",{staticClass:"quiz__social-icon",attrs:{href:"/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:s("d623"),alt:"vk"}})]),r("a",{staticClass:"quiz__social-icon",attrs:{href:"/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:s("d298"),alt:"fb"}})])])}],F={name:"QuizSocial"},L=F,G=(s("8438"),Object(h["a"])(L,U,D,!1,null,null,null)),J=G.exports,K={name:"QuizTotalRezult",components:{QuizSocial:J},computed:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["quiz_promocode_date"])),{},{resultImage:function(){return this.$store.state.totalRightAnswers>3?this.$store.state.firstResultImg:this.$store.state.totalRightAnswers>=3&&this.$store.state.totalRightAnswers<=4?this.$store.state.secondResultImg:this.$store.state.totalRightAnswers<3?this.$store.state.thirdResultImg:""},resultImageMob:function(){return this.$store.state.totalRightAnswers>3?this.$store.state.firstResultImgMob:this.$store.state.totalRightAnswers>=3&&this.$store.state.totalRightAnswers<=4?this.$store.state.secondResultImgMob:this.$store.state.totalRightAnswers<3?this.$store.state.thirdResultImgMob:""},heading:function(){return this.$store.state.totalRightAnswers>5?this.$store.state.firstResultHeading:this.$store.state.totalRightAnswers>=3&&this.$store.state.totalRightAnswers<=4?this.$store.state.secondResultHeading:this.$store.state.totalRightAnswers<3?this.$store.state.thirdResultHeading:""},characteristic:function(){return this.$store.state.totalRightAnswers>3?this.$store.state.firstResultCharacteristic:this.$store.state.totalRightAnswers>=3&&this.$store.state.totalRightAnswers<=4?this.$store.state.secondResultCharacteristic:this.$store.state.totalRightAnswers<3?this.$store.state.thirdResultCharacteristic:""}}),methods:{quizRepeat:function(){this.$store.state.totalRightAnswers=0,this.$store.state.currentQuestionIndex=1,this.$store.state.isShowTotalResult=!1,this.$store.state.isShowQuestion=!0}}},V=K,X=(s("8bb4"),Object(h["a"])(V,P,W,!1,null,"49b7c418",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("a",{attrs:{href:"http://lifehacker.ru",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:s("63b9"),alt:"логотип лайфхакер"}})]),r("a",{attrs:{href:"http://cordiant.ru",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:s("4cc0"),alt:"логотип фирмы кордиант"}})])])}],et={name:"QuizHeader"},st=et,rt=Object(h["a"])(st,Z,tt,!1,null,null,null),nt=rt.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{class:{"mobile-question":!t.isShowStartScreen,isShowTeam:t.isShowTotalResult}},[s("div",[t.isShowStartScreen?s("QuizSocial"):t._e()],1),s("div",{staticClass:"quiz__team",class:{isShowTeam:t.isShowTotalResult}},[s("span",[t._v("Команда проекта")]),t._m(0)]),t._m(1)])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz__team-tooltip"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Креатив")]),s("div",{staticClass:"col"},[t._v("Сергей Габер")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Редактор")]),s("div",{staticClass:"col"},[t._v("Маша Пчёлкина")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Автор")]),s("div",{staticClass:"col"},[t._v("Тоня Рубцова")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Дизайнер")]),s("div",{staticClass:"col"},[t._v("Таня Репина")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Разработчик")]),s("div",{staticClass:"col"},[t._v("Иван Шуняев")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Тестировщик")]),s("div",{staticClass:"col"},[t._v("Ксения Старостина")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Аналитик")]),s("div",{staticClass:"col"},[t._v("Виктория Нечаева")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Менеджер проекта")]),s("div",{staticClass:"col"},[t._v("Яна Скрипичникова")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("Менеджер по продажам")]),s("div",{staticClass:"col"},[t._v("Галина Корецкая")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz__start-streen-co"},[s("a",{attrs:{href:"http://lifehacker.ru",target:"_blank",rel:"noopener noreferrer"}},[t._v("Лайфхакер")]),t._v(" | "),s("a",{attrs:{href:"http://cordiant.ru",target:"_blank",rel:"noopener noreferrer"}},[t._v("Сordiant")]),s("span",[t._v("© 2020")])])}],at={name:"QuizFooter",components:{QuizSocial:J},computed:Object(c["a"])({},Object(d["c"])(["isShowStartScreen","isShowTotalResult"]))},ct=at,ut=(s("d01d"),Object(h["a"])(ct,it,ot,!1,null,null,null)),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quiz__start-streen",style:"background: url("+t.bg+");\n       background-position: center;\n       background-repeat: no-repeat;\n       background-size: cover;\n      "},[r("img",{staticClass:"quiz__start-streen-img_mob",attrs:{src:s("d7d0"),alt:""}}),r("main",[r("div",{staticClass:"quiz__start-streen-text"},[r("p",[t._v("Узнаете ли вы Россию")]),r("p",[t._v("По дорогам?")]),r("div",{staticClass:"quiz__start-streen-hr"}),r("div",{staticClass:"quiz__start-streen-hr"}),r("p",{staticClass:"quiz__start-streen-description",domProps:{innerHTML:t._s(t.text)}}),r("button",{staticClass:"quiz__start-streen-btn",on:{click:t.startQuiz}},[t._v("Пройти тест!")])])])])},ft=[],_t={name:"QuizStartScreen",components:{},computed:{bg:function(){return this.$store.state.questions[0].questionBackground},text:function(){return this.$store.state.questions[0].text}},methods:{startQuiz:function(){this.$store.state.isShowQuestion=!0,this.$store.state.isShowStartScreen=!1}}},ht=_t,pt=(s("fdad"),Object(h["a"])(ht,dt,ft,!1,null,null,null)),bt=pt.exports,gt={name:"QuizContainer",components:{QuizSalon:b,QuizQuestion:T,QuizFeedback:N,QuizTotalRezult:Y,QuizStartScreen:bt,QuizHeader:nt,QuizFooter:lt},computed:Object(c["a"])(Object(c["a"])({},Object(d["c"])(["questions","currentQuestionIndex","isShowStartScreen","isShowQuestion","isShowResultCurrentAnswer","isShowTotalResult"])),{},{bgl:function(){switch(this.$store.state.currentQuestionIndex){case 0:return this.$store.state.questions[0].questionBackground;case 1:return this.$store.state.questions[1].questionBackground;case 2:return this.$store.state.questions[2].questionBackground;case 3:return this.$store.state.questions[3].questionBackground;case 4:return this.$store.state.questions[4].questionBackground;case 5:return this.$store.state.questions[5].questionBackground;case 6:return this.$store.state.questions[6].questionBackground;default:break}return""},url:function(){return s("0966")("'".concat(this.$store.state.url,"'"))},questions:function(){return this.$store.state.questions}}),methods:{next:function(){this.$store.state.currentQuestionIndex++},prev:function(){this.$store.state.currentQuestionIndex--},score:function(){return this.$store.state.answers.filter((function(t){return t})).length}}},mt=gt,vt=(s("31b8"),Object(h["a"])(mt,o,a,!1,null,null,null)),wt=vt.exports,Ct={name:"App",components:{QuizContainer:wt}},kt=Ct,St=(s("5c0b"),Object(h["a"])(kt,n,i,!1,null,null,null)),qt=St.exports;r["a"].use(d["a"]);var zt=new d["a"].Store({state:{bgLink:s("d7d0"),url:"../assets/quiz__main-bg.png",imgNormal:s("a33f"),imgRight:s("0562"),imgWrong:s("4214"),imgSalonPanel:s("9fbd"),firstResultImg:s("ab56"),secondResultImg:s("2674"),thirdResultImg:s("b796"),firstResultImgMob:s("7971"),secondResultImgMob:s("e5c8"),thirdResultImgMob:s("0e82"),questions:[{text:'Мы составили этот тест вместе с производителем шин\n        <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant</a>,\n        чтобы вы проверили, сможете ли отличить российские дороги от остальных.\n        Активируйте внутреннего Шерлока и вперёд! Пройдёте тест до конца —\n        получите скидку 15% на зимнюю резину.\n        ',questionBackground:s("d7d0")},{responses:[{text:"В Москве! Коммунальные службы, как всегда, тормозят",correct:!1,feedback:"Не в этот раз! На фото — Нью-Йорк."},{text:"Судя по снегопаду, где-то в центре Хельсинки",correct:!1,feedback:"Хорошая попытка. Но нет, это заметает Нью-Йорк."},{text:" Улицы зимнего Нью-Йорка я всегда узнаю",correct:!0,feedback:"В яблочко!"}],questionBackground:s("65c8")},{responses:[{text:"Это же Русский мост во Владивостоке!",correct:!0,feedback:"Дело говорите! Он и есть",feedback_ad:'Безопасно ездить по зимним дорогам в городе помогут шины <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant Winter Drive 2</a>.\n            Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите\n            шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.'},{text:"Судя по снегопаду, где-то в центре Хельсинки",correct:!1,feedback:"Хорошая попытка. Но нет, это заметает Нью-Йорк.",feedback_ad:'Безопасно ездить по зимним дорогам в городе помогут шины <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant Winter Drive 2</a>.\n            Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите\n            шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.'},{text:"Это мост через Иртыш в городе Семей. Фото сделано в Казахстане!",correct:!1,feedback:"Похоже! Но нет — это Владивосток",feedback_ad:'Безопасно ездить по зимним дорогам в городе помогут шины <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant Winter Drive 2</a>.\n            Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите\n            шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.'}],questionBackground:s("0a69")},{responses:[{text:"Типичная Сибирь. Дорога где-нибудь в Алтайском крае",correct:!0,feedback:"Было сложно, но вы угадали!",feedback_ad:'Чтобы маневрировать по снежным заносам за городом, выбирайте резину\n            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant\n            Snow Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение\n            полного контроля'},{text:"Это итальянские Апеннины зимой",correct:!1,feedback:"Далеко! На фото — Алтай.",feedback_ad:'Чтобы маневрировать по снежным заносам за городом, выбирайте резину\n            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant\n            Snow Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение\n            полного контроля'},{text:"Так выглядит ландшафт Аляски. Мой ответ — США",correct:!1,feedback:"Эх, не угадали. Это Алтай.",feedback_ad:'Чтобы маневрировать по снежным заносам за городом, выбирайте резину\n            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant\n            Snow Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение\n            полного контроля'}],questionBackground:s("dc19")},{responses:[{text:"В Карачаево-Черкесии! Это точно зимний Домбай",correct:!1,feedback:"Домбай чудесен, но это Австрия",feedback_ad:""},{text:"Кажется, это панорамная дорога Гросглоккнер в Австрии",correct:!0,feedback:"Вы угадали",feedback_ad:""},{text:"В швейцарских Альпах! Это дорога из Сент-Морица в Базель",correct:!1,feedback:"Там тоже красиво, но это Австрия.",feedback_ad:""}],questionBackground:s("cb12")},{responses:[{text:"В Стране Великих озёр — Канаде. Фото явно сделано на водах Гурона",correct:!1,feedback:"Мимо! Это воды Байкала.",feedback_ad:'Чтобы чувствовать себя уверенно даже на голом льду, используйте шины\n            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant\n            Snow Cross 2</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и\n            увеличивают сцепление на 10%, а динамику разгона — на 20%!'},{text:"Сердцем чувствую, что это Байкал",correct:!0,feedback:"Браво! Интуиция вас не подвела.",feedback_ad:'Чтобы чувствовать себя уверенно даже на голом льду, используйте шины\n            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant\n            Snow Cross</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и\n            увеличивают сцепление на 10%, а динамику разгона — на 20%!'},{text:"Нордический пейзаж подсказывает, что это река Гломма в Норвегии",correct:!1,feedback:"Промахнулись, это в России.",feedback_ad:'Чтобы чувствовать себя уверенно даже на голом льду, используйте шины\n            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant\n            Snow Cross</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и\n            увеличивают сцепление на 10%, а динамику разгона — на 20%!'}],questionBackground:s("7c63")},{responses:[{text:"Да что дорога! Такое небо только в Исландии",correct:!0,feedback:"И добавить нечего! Да",feedback_ad:""},{text:"Это пустырь на окраинах Костромы… Романтика!",correct:!1,feedback:"Романтика, но, увы, исландская.",feedback_ad:""},{text:"Асфальт что надо! Это Германия, перед съездом на автобан",correct:!1,feedback:"Да, он хорош! Но сделан в Исландии.",feedback_ad:""}],questionBackground:s("2375")}],answerStatus:1,currentQuestionIndex:1,answerIdx:0,totalQuestions:6,totalRightAnswers:0,isShowStartScreen:!0,isShowQuestion:!0,isShowResultCurrentAnswer:!1,isShowTotalResult:!1,firstResultHeading:"Я — географ-экстрасенс",secondResultHeading:"Я — дорожный романтик",thirdResultHeading:"Я — начинающий топограф",firstResultCharacteristic:"Узнать российские дороги? Несите задачку посложнее! Если нужно, я вам по фото и географические координаты назову.",secondResultCharacteristic:"Да кто вообще смотрит под ноги! Я считаю звёзды и ловлю снежинки, а не изучаю асфальт. Ой, смотрите — облако похоже на слоника!",thirdResultCharacteristic:"Узнаю российские дороги без регистрации и СМС. Но иногда всё же путаюсь — эти зимние трассы так похожи.",quiz_promocode_date:"31.11.2021"},mutations:{SET_ANSWER_STATUS:function(t,e){t.answerStatus=e},SET_CURRENT_QUESTION:function(t){t.currentQuestionIndex++},SET_TOTAL_RIGHT_ANSWERS:function(t){t.totalRightAnswers++}},actions:{changeAnswer:function(t,e){var s=t.commit;s("SET_ANSWER_STATUS",e)},nextQuestion:function(t){var e=t.commit;e("SET_CURRENT_QUESTION")},countRightAnswers:function(t){var e=t.commit;e("SET_TOTAL_RIGHT_ANSWERS")}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:zt,render:function(t){return t(qt)}}).$mount("#app")},"5ac9":function(t,e,s){t.exports=s.p+"img/twitter-icon.0ab18d43.svg"},"5c0b":function(t,e,s){"use strict";s("9c0c")},"63b9":function(t,e,s){t.exports=s.p+"img/logo-white-line.bd56061a.svg"},"65c5":function(t,e,s){},"65c8":function(t,e,s){t.exports=s.p+"img/quiz__question-bg-1.b5550384.jpg"},"6e65":function(t,e,s){},7971:function(t,e,s){t.exports=s.p+"img/quiz__bg-result-1_mob.67a2f377.png"},"7a9e":function(t,e,s){t.exports=s.p+"img/quiz__repeat-btn.0a3564d5.svg"},"7c63":function(t,e,s){t.exports=s.p+"img/quiz__question-bg-5.b7c7285d.jpg"},"82e8":function(t,e,s){},8438:function(t,e,s){"use strict";s("8895")},8895:function(t,e,s){},"8bb4":function(t,e,s){"use strict";s("f1db")},9446:function(t,e,s){},"9c0c":function(t,e,s){},"9fbd":function(t,e,s){t.exports=s.p+"img/quiz__salon.5a143daf.png"},a33f:function(t,e,s){t.exports=s.p+"img/quiz__mirror_normal.84f118df.png"},ab56:function(t,e,s){t.exports=s.p+"img/quiz__bg-result-1.0a3117cc.png"},b796:function(t,e,s){t.exports=s.p+"img/quiz__bg-result-3.af372111.png"},b9f6:function(t,e,s){},cb12:function(t,e,s){t.exports=s.p+"img/quiz__question-bg-4.ed461fc0.jpg"},d01d:function(t,e,s){"use strict";s("f590")},d298:function(t,e,s){t.exports=s.p+"img/fb-icon.0c52f5f9.svg"},d623:function(t,e,s){t.exports=s.p+"img/vk-icon.14112c64.svg"},d7d0:function(t,e,s){t.exports=s.p+"img/quiz__main-bg.e3a84985.png"},dc19:function(t,e,s){t.exports=s.p+"img/quiz__question-bg-3.052d6f49.jpg"},e5c8:function(t,e,s){t.exports=s.p+"img/quiz__bg-result-2_mob.badd59ba.png"},f1db:function(t,e,s){},f590:function(t,e,s){},f7f5:function(t,e,s){"use strict";s("65c5")},f975:function(t,e,s){},fd3a:function(t,e,s){"use strict";s("b9f6")},fdad:function(t,e,s){"use strict";s("82e8")}});
//# sourceMappingURL=app.9ca8d79e.js.map