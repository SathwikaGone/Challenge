(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),u=(a(12),a(13),a(3)),c=a(4),i=a(6),m=a(5),s=function(t){Object(i.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",data:t.props.data,Total:0,MonthRewards:[],Months:["January","February","March"],showVal:!1,err:""},t.handleChange=function(e){t.setState({name:e.target.value,Total:0,err:"",showVal:!1})},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,r=a.data,o=["01","02","03"],l=[],u=r.filter((function(t){return t.fullName.toString().toLowerCase()===n.toString().toLowerCase()}));if(u.length>0){for(var c=t.ToTAmount(u[0].transaction),i=function(e){var a=u[0].transaction.filter((function(t){return t.date.toString().substring(0,2)===o[e]}));l.push(t.ToTAmount(a))},m=0;m<3;m++)i(m);t.setState({Total:c,MonthRewards:l,showVal:!0})}else t.setState({err:"Name not Found"})},t.ToTAmount=function(t){var e=t.reduce((function(t,e){var a;return a=e.amount<50?0:e.amount<=100?e.amount-50:50+2*(e.amount-100),t.concat(a)}),[]);return e.length>0?e.reduce((function(t,e){return t+e})):0},t}return Object(c.a)(a,[{key:"render",value:function(){var t,e=this.state,a=e.name,n=e.err,o=e.Total,l=e.MonthRewards,u=e.showVal,c=e.Months,i=0;return u&&(t=r.a.createElement("div",null,r.a.createElement("p",null,"3 months reward points:",l.map((function(t){return r.a.createElement("p",null,c[i++],": ",t)}))),r.a.createElement("p",null," Total: ",0!==o?o:"N/A"))),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("button",{type:"reset"},"Reset")),r.a.createElement("p",null," ",a),r.a.createElement("p",{style:{color:"red"}}," ",n),t)}}]),a}(n.Component),h=[{fullName:"Mike",customerID:1,transaction:[{amount:60,date:"01-01-2020"},{amount:180,date:"02-01-2020"},{amount:20,date:"02-01-2020"},{amount:72,date:"03-01-2020"},{amount:1500,date:"03-01-2020"}]},{fullName:"Petter",customerID:2,transaction:[{amount:1860,date:"02-01-2020"},{amount:20,date:"02-01-2020"},{amount:90,date:"02-01-2020"},{amount:175,date:"03-01-2020"},{amount:1480,date:"03-01-2020"}]}];var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,{data:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c002c684.chunk.js.map