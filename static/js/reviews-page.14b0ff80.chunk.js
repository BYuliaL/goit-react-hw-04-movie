(this["webpackJsonpgoit-react-hw-04-movie"]=this["webpackJsonpgoit-react-hw-04-movie"]||[]).push([[7],{100:function(e,t,n){e.exports={warning:"Reviews_warning__jM0N1"}},104:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(39),i=n(40),a=n(42),s=n(41),c=n(0),o=n(36),u=n(38),h=n(10),j=n.n(h),v=n(1),l=function(e){var t=e.reviews;return Object(v.jsx)("ul",{children:t.map((function(e){var t=e.author,n=e.content;return Object(v.jsxs)("li",{children:[Object(v.jsx)("h3",{children:t}),Object(v.jsx)("p",{children:n})]},t)}))})};l.protoType={reviews:j.a.array};var d=l,p=n(100),w=n.n(p),f=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={reviews:[],error:null,isLoading:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;this.setState({isLoading:!0}),o.a.apiReviews(t).then((function(t){return e.setState({reviews:t})})).catch((function(t){return e.setState(t)})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.reviews,n=e.error,r=e.isLoading;return Object(v.jsxs)(v.Fragment,{children:[n&&Object(v.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),r&&Object(v.jsx)(u.a,{}),0===t.length?Object(v.jsx)("p",{className:w.a.warning,children:"We don`t have any reviews for this movie =("}):Object(v.jsx)(d,{reviews:t})]})}}]),n}(c.Component)},37:function(e,t,n){e.exports={Loader:"Spinner_Loader__3wLw1"}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(43),i=n.n(r),a=n(37),s=n.n(a),c=n(1),o=function(){return Object(c.jsx)("div",{className:s.a.Loader,children:Object(c.jsx)(i.a,{type:"Circles",color:"#3f51b5",height:50,width:50,timeout:5e3})})}}}]);
//# sourceMappingURL=reviews-page.14b0ff80.chunk.js.map