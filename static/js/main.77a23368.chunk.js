(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(4),s=n(5),o=n(7),i=n(6),u=n(1),p=n.n(u),y=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={key:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keyup",(function(t){e.setState({key:t.key})}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keyup",(function(t){e.setState({key:t.key})}))}},{key:"render",value:function(){var e=this.state.key;return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(p.a.Component);n(13);c.a.render(Object(y.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.77a23368.chunk.js.map