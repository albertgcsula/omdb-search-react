(this["webpackJsonpomdb-search"]=this["webpackJsonpomdb-search"]||[]).push([[0],{34:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r.n(c),a=r(14),n=r.n(a),i=r(10),o=r(15),l=r(23),j=r(22),u=(r(33),r(34),r(20)),b=r(40),d=r(41),h=r(42),m=r(43),O=r(44),p=function(e,t,r){return{type:"RESULTS_RECEIVED",results:t,title:e,page:r,errorMessage:""}},f=r(9),x=r.n(f),v=r(13),g="e889c907",E="https://www.omdbapi.com/",w=function(){var e=Object(v.a)(x.a.mark((function e(t,r,c){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.trim().replace(" ","+"),e.abrupt("return",new Promise((function(e){fetch("".concat(E,"?apikey=").concat(g,"&s=").concat(s,"&type=").concat(r,"&page=").concat(c),{method:"GET"}).then((function(t){e(t.json())}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,r,c){return e.apply(this,arguments)}}(),y=function(e,t,r){return function(){var c=Object(v.a)(x.a.mark((function c(s){var a;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,w(e,t,r);case 2:if(!(a=c.sent).Error){c.next=5;break}return c.abrupt("return",s({type:"SEARCH_FAILED",results:[],title:"",errorMessage:a.Error}));case 5:s(p(e,a.Search,r));case 6:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},S=r(2);function T(e){var t=e.results;return Object(S.jsx)("div",{children:Object(S.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(S.jsx)("li",{className:"list-group-item",children:Object(S.jsxs)("div",{children:[Object(S.jsx)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID,"/"),rel:"noreferrer",target:"_blank",children:Object(S.jsx)("img",{className:"float-start img-fluid me-2",src:e.Poster,alt:e.Title,height:"100",width:"65"})}),Object(S.jsxs)("p",{className:"fw-bold mb-1",children:[e.Title," (",e.Year,")"]}),Object(S.jsxs)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID,"/"),rel:"noreferrer",target:"_blank",children:["https://www.imdb.com/title/",e.imdbID,"/"]})]})},e.imdbID)}))})})}function N(){var e=Object(i.b)(),t=Object(c.useState)(""),r=Object(u.a)(t,2),s=r[0],a=r[1],n=Object(c.useState)(""),o=Object(u.a)(n,2),l=o[0],j=o[1],p=Object(i.c)((function(e){return e.errorMessage})),f=Object(i.c)((function(e){return e.page})),x=Object(i.c)((function(e){return function(e){return e.results}(e)})),v=function(){a(""),j(""),e({type:"SEARCH_CLEARED",results:[],title:"",errorMessage:""})};return Object(S.jsxs)("div",{className:"container my-3",children:[Object(S.jsxs)(b.a,{onSubmit:function(t){t.preventDefault(),e({type:"TITLE_SET",title:s}),e(function(e){return{type:"SEARCH_TYPE_SET",searchType:e}}(l)),e(y(s,l,1))},children:[Object(S.jsxs)(d.a,{className:"row",children:[Object(S.jsxs)("div",{className:"col-md-6",children:[Object(S.jsx)(h.a,{for:"movieTitle",children:"Search by title"}),Object(S.jsx)(m.a,{name:"movieTitle",placeholder:"title",type:"text",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(S.jsxs)("div",{className:"col-auto",children:[Object(S.jsx)(h.a,{for:"type",children:"Type"}),Object(S.jsxs)("select",{id:"searchType",name:"searchType",className:"form-select",value:l,onChange:function(e){return j(e.target.value)},children:[Object(S.jsx)("option",{value:"",children:"Type..."}),Object(S.jsx)("option",{value:"movie",children:"Movie"}),Object(S.jsx)("option",{value:"series",children:"Series"}),Object(S.jsx)("option",{value:"episode",children:"Episode"})]})]})]}),Object(S.jsxs)(d.a,{className:"mt-2",children:[Object(S.jsx)(O.a,{className:"me-2",color:"secondary",size:"sm",onClick:v,children:"Clear"}),Object(S.jsx)(O.a,{color:"primary",size:"sm",type:"submit",children:"Search"})]})]}),Object(S.jsx)("div",{className:"row mt-3",children:Object(S.jsxs)("div",{className:"col-md-8",children:[Object(S.jsxs)("p",{children:["Results for ",s,": "]}),p&&Object(S.jsx)("div",{className:"text-warning",children:p}),x.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T,{results:x}),Object(S.jsxs)("div",{className:"load-more mt-2",children:[Object(S.jsx)(O.a,{className:"me-2",color:"secondary",size:"sm",onClick:v,children:"Clear"}),Object(S.jsx)(O.a,{color:"primary",size:"sm",onClick:function(){e(function(e){return{type:"LOAD_MORE_REQUESTED",page:e}}(f+1)),e(y(s,l,f+1))},children:"Load More"})]})]})]})})]})}r(37);var _=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("header",{children:Object(S.jsx)("nav",{className:"navbar bg-light",children:Object(S.jsx)("div",{className:"container-fluid ms-5 py-2",children:Object(S.jsx)("h2",{className:"mb-0",children:"\ud83c\udf9e\ufe0f OMDb Search"})})})}),Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(N,{})})]})},C=r(19),D=r(4),M={title:"",search_type:"",page:1,isLoading:!1,results:[]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=Object(j.composeWithDevTools)(Object(o.applyMiddleware)(l.a)),k=Object(o.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TITLE_SET":return Object(D.a)(Object(D.a)({},e),{},{title:t.title});case"SEARCH_TYPE_SET":return Object(D.a)(Object(D.a)({},e),{},{search_type:t.searchType});case"SEARCH_CLEARED":return Object(D.a)(Object(D.a)({},e),{},{title:t.title,results:t.results,errorMessage:t.errorMessage});case"SEARCH_FAILED":return Object(D.a)(Object(D.a)({},e),{},{title:t.title,errorMessage:t.errorMessage});case"RESULTS_RECEIVED":return Object(D.a)(Object(D.a)({},e),{},{title:t.title,page:t.page,results:1===t.page?t.results:[].concat(Object(C.a)(e.results),Object(C.a)(t.results)),errorMessage:t.errorMessage});case"LOAD_MORE_REQUESTED":return Object(D.a)(Object(D.a)({},e),{},{page:t.page});default:return e}}),R);n.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(i.a,{store:k,children:Object(S.jsx)(_,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.15b03802.chunk.js.map