(this["webpackJsonpmy-pet-project"]=this["webpackJsonpmy-pet-project"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(40),i=a.n(c),s=(a(109),a(110),a(16)),o=a(97),u=a(98),l=a(104),d=a(103),p=a(7),j=a.n(p),f=a.p+"static/media/Preloader.98b61a8c.svg",m=a(99),h=a.n(m),b=a(2),g=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:h.a.Preloader,src:f,alt:"Preloader"})})},x=function(e){var t=e.data,a=e.preload;return Object(b.jsx)("div",{className:j.a.GifWrapper,children:a&&!t.length?Object(b.jsx)("div",{className:j.a.preloaderBlock,children:Object(b.jsx)(g,{})}):t.map((function(e){return Object(b.jsx)("span",{className:j.a.imageBlock,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:j.a.images,src:e.images.original.url,alt:""}),Object(b.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(b.jsx)("p",{className:j.a.username,children:e.username?"Created by ".concat(e.username):"Created by unknown"}),Object(b.jsxs)("p",{className:j.a.descripton,children:[" ",e.title," "]})]})]})},e.id)}))})},O=function(e){var t=e.dataSearch,a=e.preload;return Object(b.jsx)("div",{children:a?Object(b.jsx)("div",{className:j.a.preloaderBlock,children:Object(b.jsx)(g,{})}):t.reverse().map((function(e){return Object(b.jsxs)("span",{className:j.a.imageBlock,children:[Object(b.jsx)("img",{className:j.a.images,src:e.images.original.url,alt:""}),Object(b.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(b.jsx)("p",{className:j.a.username,children:e.username?"Created by ".concat(e.username):"Created by unknown"}),Object(b.jsxs)("p",{className:j.a.descripton,children:[" ",e.title," "]})]})]},e.id)}))})},v=a(31),_=a.n(v),y=function(e){var t=e.setCategoriesSearchGif;return Object(b.jsxs)("div",{className:_.a.categoriesWrapper,children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:_.a.GifCategoriesBtn,onClick:function(e){t(e.currentTarget.innerText)},children:"\u0421\u043c\u0435\u0448\u043d\u044b\u0435"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:_.a.GifCategoriesBtn,onClick:function(e){t(e.currentTarget.innerText)},children:"\u041c\u0435\u043c\u044b"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"button",className:_.a.GifCategoriesBtn,onClick:function(e){t(e.currentTarget.innerText)},children:"\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435"})})]})},S=a(234),C=a(233),G=a(63),k=function(e){if(!e.textField)throw new G.a({textField:"Can't be empty"})},P=a(10),N=a(64),B=a(60),w=a.n(B),F=function(e){e.input;var t=e.meta,a=(e.child,e.element,Object(N.a)(e,["input","meta","child","element"])),r=t.touched&&t.error;return Object(b.jsxs)("div",{className:"".concat(w.a.formControl," ").concat(r?w.a.error:""),children:[Object(b.jsx)("div",{children:a.children}),r&&Object(b.jsxs)("span",{children:[" ",t.error," "]})]})},T=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(N.a)(e,["input","meta","child","element"]));return Object(b.jsxs)(F,Object(P.a)(Object(P.a)({},e),{},{children:[" ",Object(b.jsx)("input",Object(P.a)(Object(P.a)({},t),a))," "]}))},E=Object(C.a)({form:"searchGif"})((function(e){var t=e.dirty,a=e.handleSubmit,r=e.preload;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:j.a.searchFormBlock,onSubmit:t?a:a(k),children:[Object(b.jsx)(S.a,{name:"textField",type:"input",component:T,label:"TextField"}),Object(b.jsxs)("button",{className:j.a.searchFormBtn,disabled:r,children:[" ","\u043f\u043e\u0438\u0441\u043a"]})]})})})),D=function(e){var t=e.data,a=e.dataSearch,r=e.preload,n=e.searchGif,c=e.setCategoriesSearchGif;return Object(b.jsxs)("div",{className:j.a.wrapper,children:[Object(b.jsx)(y,{setCategoriesSearchGif:c}),Object(b.jsx)("span",{children:Object(b.jsx)(E,{onSubmit:function(e){!function(e){n(e)}(e.textField)}})}),Object(b.jsx)(O,{preload:r,dataSearch:a}),Object(b.jsx)(x,{preload:r,data:t})]})},I=a(19),W=a.n(I),J=a(43),Q=a(101).create({baseURL:"https://api.giphy.com/v1/gifs/trending?api_key=".concat("YQiZ73lqJTxPV7D3Px4fIIPexS661EQy","&limit=4&rating=r")}),Z={getGiphyData:function(){return Q.get("").then((function(e){return e.data}))},getSearchGiphyData:function(e){return Q.get("https://api.giphy.com/v1/gifs/search?api_key=".concat("YQiZ73lqJTxPV7D3Px4fIIPexS661EQy","&q=").concat(e,"&limit=1&offset=0&rating=r&lang=ru")).then((function(e){return e.data}))},getCategoriesSearchGif:function(e){return Q.get("https://api.giphy.com/v1/gifs/search?api_key=".concat("YQiZ73lqJTxPV7D3Px4fIIPexS661EQy","&q=").concat(e,"&limit=4&offset=0&rating=r&lang=ru")).then((function(e){return e.data}))}},q="SET_GIF",R="SET_SEARCH_GIF",V="ON_PRELOADER",L={data:[],dataSearch:[],preload:!1},Y=function(e){return{type:q,data:e}},A=function(e){return{type:R,data:e}},M=function(e){return{type:V,isTrue:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(P.a)(Object(P.a)({},e),{},{data:t.data});case R:return Object(P.a)(Object(P.a)({},e),{},{dataSearch:e.dataSearch.concat(t.data)});case V:return Object(P.a)(Object(P.a)({},e),{},{preload:t.isTrue});default:return e}},H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).searchGif=function(t){e.props.setSearchGif(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.setGif()}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.dataSearch,r=e.preload;return Object(b.jsx)(D,{data:t,dataSearch:a,searchGif:this.searchGif,setCategoriesSearchGif:this.props.setCategoriesSearchGif,preload:r})}}]),a}(n.a.Component),U=H=Object(s.b)((function(e){return{data:e.mainPage.data,dataSearch:e.mainPage.dataSearch,currentText:e.mainPage.currentText,preload:e.mainPage.preload}}),{setGif:function(e,t){return function(){var a=Object(J.a)(W.a.mark((function a(r){var n;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(M(!0)),a.next=3,Z.getGiphyData(e,t);case 3:n=a.sent,r(Y(n.data)),r(M(!1));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setSearchGif:function(e){return function(){var t=Object(J.a)(W.a.mark((function t(a){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0)),t.next=3,Z.getSearchGiphyData(e);case 3:r=t.sent,a(M(!1)),a(A(r.data));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCategoriesSearchGif:function(e){return function(){var t=Object(J.a)(W.a.mark((function t(a){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(M(!0)),t.next=3,Z.getCategoriesSearchGif(e);case 3:r=t.sent,a(Y(r.data)),a(M(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(H),X=a(6),K=a(102),$=a(235),ee=Object(X.c)({mainPage:z,form:$.a}),te=Object(X.d)(ee,Object(X.a)(K.a));var ae=function(){return Object(b.jsx)(s.a,{store:te,children:Object(b.jsx)(U,{})})};i.a.render(Object(b.jsx)(ae,{}),document.getElementById("root"))},31:function(e,t,a){e.exports={categoriesWrapper:"GigCategories_categoriesWrapper__Ni7zz",GifCategoriesBtn:"GigCategories_GifCategoriesBtn__1o3Ej"}},60:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2DFbf",error:"FormsControls_error__2XV4D",formSummaryError:"FormsControls_formSummaryError__2b1FN"}},7:function(e,t,a){e.exports={wrapper:"mainPage_wrapper__1Z0yV",gifWrapper:"mainPage_gifWrapper__2ZBMi",searchFormBlock:"mainPage_searchFormBlock__kW0-b",form:"mainPage_form__17dum",images:"mainPage_images__1LZ8C",descriptionBlock:"mainPage_descriptionBlock__2JpL9",imageBlock:"mainPage_imageBlock__2OfY6"}},99:function(e,t,a){e.exports={Preloader:"preloader_Preloader__3yMGR"}}},[[232,1,2]]]);
//# sourceMappingURL=main.2cdbefe0.chunk.js.map