(this["webpackJsonpmy-pet-project"]=this["webpackJsonpmy-pet-project"]||[]).push([[0],{110:function(e,t,a){e.exports={Preloader:"preloader_Preloader__3yMGR"}},111:function(e,t,a){e.exports={subShareItem:"SubShare_subShareItem__3fvDW"}},147:function(e,t,a){},148:function(e,t,a){},22:function(e,t,a){e.exports={GifsDetailsBlock:"gifsDetails_GifsDetailsBlock__29oU4",wrapper:"gifsDetails_wrapper__1reOp",imageBlock:"gifsDetails_imageBlock__5TFhR",hideDetailsBtn:"gifsDetails_hideDetailsBtn__zbcf9",description:"gifsDetails_description__3QaqU",subShareDetails:"gifsDetails_subShareDetails__3FhU0"}},270:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(48),c=a.n(i),s=(a(147),a(148),a(18)),o=a(108),l=a(109),u=a(117),d=a(116),p=a(9),j=a.n(p),h=a(33),f=a.n(h),b=a.p+"static/media/Preloader.98b61a8c.svg",m=a(110),g=a.n(m),O=a(1),x=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:g.a.Preloader,src:b,alt:"Preloader"})})},_=a(272),v=a(273),C=a(111),D=a.n(C),y=function(e){var t=e.url;return Object(O.jsx)("div",{className:D.a.subShareItem,children:Object(O.jsx)(_.a,{url:t,children:Object(O.jsx)(v.a,{size:"2rem"})})})},G=a(22),S=a.n(G),k=function(e){var t=e.showDetails,a=e.setUpdateDetails,r=t.data;return Object(O.jsx)("div",{className:S.a.GifsDetailsBlock,style:{display:t.display},children:0===r.length?null:Object(O.jsx)("div",{className:S.a.imageBlock,children:Object(O.jsxs)("div",{className:S.a.wrapper,children:[Object(O.jsx)("img",{src:r.images.original.url,alt:"/"}),Object(O.jsx)("button",{className:S.a.hideDetailsBtn,type:"button",onClick:function(){a({display:"none",data:r})},children:"\u2716"}),Object(O.jsxs)("div",{className:S.a.description,children:[Object(O.jsx)("div",{className:S.a.subShareDetails,children:Object(O.jsx)(y,{url:r.url})}),Object(O.jsxs)("p",{children:[" ",r.username?r.username:null," "]}),Object(O.jsxs)("p",{children:[" ",r.title?r.title:null," "]}),Object(O.jsx)("p",{children:r.trending_datetime?" trending datetime ".concat(r.trending_datetime):null})]})]})})})},w=function(e){var t=e.data,a=e.preload,r=e.showDetails,n=e.setUpdateDetails;return Object(O.jsxs)("div",{className:j.a.GifWrapper,children:[a&&!t.length?Object(O.jsx)("div",{className:j.a.preloaderBlock,children:Object(O.jsx)(x,{})}):t.map((function(e){return Object(O.jsxs)("span",{className:j.a.imageBlock,children:[Object(O.jsx)("img",{onClick:function(){n({display:"block",data:e,page:"trendingPage"})},className:j.a.images,src:e.images.downsized.url,alt:""}),Object(O.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(O.jsx)(y,{url:e.images.original.url}),Object(O.jsx)("p",{className:j.a.username,children:e.username?"Created by ".concat(e.username):"Created by unknown"}),Object(O.jsxs)("p",{className:j.a.descripton,children:[" ",e.title," "]})]})]},e.id)})),"trendingPage"===r.page?Object(O.jsx)(k,{showDetails:r,setUpdateDetails:n}):null]})},P=function(e){var t=e.dataSearch,a=e.preload,r=e.deleteCurrentGif,n=e.totalCount,i=e.setUpdateDetails,c=e.showDetails;return Object(O.jsxs)("div",{children:[a?Object(O.jsx)("div",{className:j.a.preloaderBlock,children:Object(O.jsx)(x,{})}):t.slice(0,n).reverse().map((function(e){return Object(O.jsxs)("span",{className:j.a.imageBlock,children:[Object(O.jsx)("img",{className:j.a.images,src:e.images.original.url,alt:"",onClick:function(){i({display:"block",data:e,page:"searchPage"})}}),Object(O.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(O.jsx)("button",{type:"button",onClick:function(){return r(e.id)},children:"\u2716"}),Object(O.jsx)(y,{url:e.images.original.url}),Object(O.jsx)("p",{className:j.a.username,children:e.username?"Created by ".concat(e.username):"Created by unknown"}),Object(O.jsxs)("p",{className:j.a.descripton,children:[" ",e.title," "]})]})]},e.id)})),"searchPage"===c.page?Object(O.jsx)(k,{showDetails:c,setUpdateDetails:i}):null]})},T=a(39),N=a.n(T),B=function(e){var t=e.setCategoriesSearchGif;return Object(O.jsxs)("div",{className:N.a.categoriesWrapper,children:[Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"button",className:N.a.GifCategoriesBtn,onClick:function(e){t(e.currentTarget.innerText)},children:"\u0421\u043c\u0435\u0448\u043d\u044b\u0435"})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"button",className:N.a.GifCategoriesBtn,onClick:function(e){t(e.currentTarget.innerText)},children:"\u041c\u0435\u043c\u044b"})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"button",className:N.a.GifCategoriesBtn,onClick:function(e){t(e.currentTarget.innerText)},children:"\u0416\u0438\u0432\u043e\u0442\u043d\u044b\u0435"})})]})},A=a(104),U=a(49),F=a(105),I=a(36),E=function(e){if(!e.textField)throw new I.a({textField:"Can't be empty"})},W=a(8),Q=a(73),R=a(70),J=a.n(R),L=function(e){e.input;var t=e.meta,a=(e.child,e.element,Object(Q.a)(e,["input","meta","child","element"])),r=t.touched&&t.error;return Object(O.jsxs)("div",{className:"".concat(J.a.formControl," ").concat(r?J.a.error:""),children:[Object(O.jsx)("div",{children:a.children}),r&&Object(O.jsxs)("span",{children:[" ",t.error," "]})]})},q=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(Q.a)(e,["input","meta","child","element"]));return Object(O.jsx)(L,Object(W.a)(Object(W.a)({},e),{},{children:Object(O.jsx)("input",Object(W.a)(Object(W.a)({},t),a))}))},M=a.p+"static/media/searchIcon.ca956951.svg",V=Object(F.a)({form:"searchGif",onSubmitSuccess:function(e,t){return t(Object(U.a)("searchGif"))}})((function(e){var t=e.dirty,a=e.handleSubmit,r=e.preload;return Object(O.jsxs)("form",{onSubmit:t?a:a(E),children:[Object(O.jsx)("button",{disabled:r,style:{backgroundImage:"url(".concat(M,")")},children:" "}),Object(O.jsx)(A.a,{name:"textField",type:"input",component:q,label:"TextField"})]})})),Z=function(e){var t=e.updateTotalCount;return Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:f.a.showMoreBtn,type:"button",onClick:t,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"})})},z=function(e){var t=e.data,a=e.dataSearch,r=e.preload,n=e.searchGif,i=e.setCategoriesSearchGif,c=e.deleteCurrentGif,s=e.totalCount,o=e.updateTotalCount,l=e.isActive,u=e.showDetails,d=e.setUpdateDetails;return Object(O.jsxs)("div",{className:j.a.wrapper,children:[Object(O.jsx)(B,{setCategoriesSearchGif:i}),Object(O.jsx)("div",{className:f.a.searchFormWrapper,children:Object(O.jsx)(V,{onSubmit:function(e){!function(e){n(e)}(e.textField)},updateTotalCount:o,isActive:l})}),l?null:Object(O.jsx)(Z,{updateTotalCount:o}),Object(O.jsx)(P,{preload:r,dataSearch:a,deleteCurrentGif:c,totalCount:s,showDetails:u,setUpdateDetails:d}),Object(O.jsx)(w,{preload:r,data:t,showDetails:u,setUpdateDetails:d})]})},Y=a(23),X=a.n(Y),H=a(53),K=a(114).create({baseURL:"https://api.giphy.com/v1/gifs/trending?api_key=".concat("YQiZ73lqJTxPV7D3Px4fIIPexS661EQy","&limit=4&rating=r")}),$={getGiphyData:function(){return K.get("").then((function(e){return e.data}))},getSearchGiphyData:function(e){return K.get("https://api.giphy.com/v1/gifs/search?api_key=".concat("YQiZ73lqJTxPV7D3Px4fIIPexS661EQy","&q=").concat(e,"&limit=50&offset=0&rating=r&lang=ru")).then((function(e){return e.data}))},getCategoriesSearchGif:function(e){return K.get("https://api.giphy.com/v1/gifs/search?api_key=".concat("YQiZ73lqJTxPV7D3Px4fIIPexS661EQy","&q=").concat(e,"&limit=4&offset=0&rating=r&lang=ru")).then((function(e){return e.data}))}},ee="SET_GIF",te="SET_SEARCH_GIF",ae="ON_PRELOADER",re="DELETE_CURRENT_GIF",ne="UPDATE_TOTAL_COUNT",ie="UPDATE_DETAILS",ce={data:[],dataSearch:[],preload:!1,totalCount:4,isActive:!0,showDetails:{display:"none",page:null,data:[]}},se=function(e){return{type:ee,data:e}},oe=function(e){return{type:te,data:e}},le=function(e){return{type:ae,isTrue:e}},ue=function(e){return{type:ne,value:e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(W.a)(Object(W.a)({},e),{},{data:t.data});case te:return Object(W.a)(Object(W.a)({},e),{},{dataSearch:t.data,isActive:!1});case ae:return Object(W.a)(Object(W.a)({},e),{},{preload:t.isTrue});case re:return Object(W.a)(Object(W.a)({},e),{},{dataSearch:e.dataSearch.filter((function(e){return e.id!==t.id}))});case ne:return Object(W.a)(Object(W.a)({},e),{},{totalCount:e.totalCount+4});case ie:return Object(W.a)(Object(W.a)({},e),{},{showDetails:t.details});default:return e}},pe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).searchGif=function(t){e.props.setSearchGif(t)},e.deleteCurrentGif=function(t){e.props.deleteCurrentGifAc(t)},e.updateTotalCount=function(){e.props.setTotalCountAc()},e.setUpdateDetails=function(t){e.props.updateDetails(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.setGif()}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.dataSearch,r=e.preload,n=e.totalCount,i=e.isActive,c=e.showDetails;return Object(O.jsx)(z,{data:t,dataSearch:a,searchGif:this.searchGif,setCategoriesSearchGif:this.props.setCategoriesSearchGif,preload:r,deleteCurrentGif:this.deleteCurrentGif,totalCount:n,updateTotalCount:this.updateTotalCount,isActive:i,showDetails:c,setUpdateDetails:this.setUpdateDetails})}}]),a}(n.a.Component),je=pe=Object(s.b)((function(e){return{data:e.mainPage.data,dataSearch:e.mainPage.dataSearch,currentText:e.mainPage.currentText,preload:e.mainPage.preload,totalCount:e.mainPage.totalCount,isActive:e.mainPage.isActive,showDetails:e.mainPage.showDetails}}),{setGif:function(e,t){return function(){var a=Object(H.a)(X.a.mark((function a(r){var n;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(le(!0)),a.next=3,$.getGiphyData(e,t);case 3:n=a.sent,r(se(n.data)),r(le(!1));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setSearchGif:function(e){return function(){var t=Object(H.a)(X.a.mark((function t(a){var r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(le(!0)),t.next=3,$.getSearchGiphyData(e);case 3:r=t.sent,a(le(!1)),a(oe(r.data));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCategoriesSearchGif:function(e){return function(){var t=Object(H.a)(X.a.mark((function t(a){var r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(le(!0)),t.next=3,$.getCategoriesSearchGif(e);case 3:r=t.sent,a(se(r.data)),a(le(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteCurrentGifAc:function(e){return{type:re,id:e}},setTotalCountAc:ue,updateDetails:function(e){return function(t){t(function(e){return{type:ie,details:e}}(e))}}})(pe),he=a(7),fe=a(115),be=a(106),me=Object(he.c)({mainPage:de,form:be.a}),ge=Object(he.d)(me,Object(he.a)(fe.a));var Oe=function(){return Object(O.jsx)(s.a,{store:ge,children:Object(O.jsx)(je,{})})};c.a.render(Object(O.jsx)(Oe,{}),document.getElementById("root"))},33:function(e,t,a){e.exports={searchFormWrapper:"SearchForm_searchFormWrapper__2XpJV",showMoreBtn:"SearchForm_showMoreBtn__2xniI"}},39:function(e,t,a){e.exports={categoriesWrapper:"GifCategories_categoriesWrapper__2xWQe",GifCategoriesBtn:"GifCategories_GifCategoriesBtn___zOcW"}},70:function(e,t,a){e.exports={formControl:"FormsControls_formControl__2DFbf",error:"FormsControls_error__2XV4D"}},9:function(e,t,a){e.exports={wrapper:"mainPage_wrapper__1Z0yV",gifWrapper:"mainPage_gifWrapper__2ZBMi",images:"mainPage_images__1LZ8C",descriptionBlock:"mainPage_descriptionBlock__2JpL9",imageBlock:"mainPage_imageBlock__2OfY6"}}},[[270,1,2]]]);
//# sourceMappingURL=main.87eedce5.chunk.js.map