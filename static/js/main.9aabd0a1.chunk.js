(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=a.n(r),u=(a(12),a(13),a(3)),c=a(4),s=a(6),i=a(5);function m(e){return o.a.createElement("div",null,o.a.createElement("h3",null," 3 months reward points:"),e.MonthRewards.map((function(t,a){return o.a.createElement("p",{key:a},e.Months[a++],": ",t)})),o.a.createElement("p",null," Total: ",0!==e.Total?e.Total:"N/A"))}var h=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",data:e.props.data,Total:0,MonthRewards:[],Months:["January","February","March"],showVal:!1,err:""},e.handleChange=function(t){console.log("reset"),e.setState({name:t.target.value,Total:0,err:"",showVal:!1})},e.handleReset=function(t){e.setState({name:"",Total:0,MonthRewards:[],showVal:!1})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,o=a.data,r=["01","02","03"],l=[],u=o.filter((function(e){return e.fullName.toLowerCase()===n.toLowerCase()}));if(u.length>0){for(var c=e.ToTAmount(u[0].transaction),s=function(t){var a=u[0].transaction.filter((function(e){return e.date.substring(0,2)===r[t]}));l.push(e.ToTAmount(a))},i=0;i<3;i++)s(i);e.setState({Total:c,MonthRewards:l,showVal:!0})}else e.setState({err:"Name not Found"})},e.ToTAmount=function(e){var t=e.reduce((function(e,t){var a;return a=t.amount<50?0:t.amount<=100?t.amount-50:50+2*(t.amount-100),e.concat(a)}),[]);return t.length>0?t.reduce((function(e,t){return e+t})):0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.err,n=e.Total,r=e.MonthRewards,l=e.showVal,u=e.Months;return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",null,"Name: "),o.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange}),o.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit"),o.a.createElement("button",{type:"reset",onClick:this.handleReset},"Reset")),o.a.createElement("p",null," ",t),o.a.createElement("p",{style:{color:"red"}}," ",a),l?o.a.createElement(m,{MonthRewards:r,Total:n,Months:u}):"")}}]),a}(n.Component),d=[{fullName:"Mike",customerID:1,transaction:[{amount:60,date:"01-01-2020"},{amount:180,date:"02-01-2020"},{amount:20,date:"02-01-2020"},{amount:72,date:"03-01-2020"},{amount:1500,date:"03-01-2020"}]},{fullName:"Petter",customerID:2,transaction:[{amount:1860,date:"02-01-2020"},{amount:20,date:"02-01-2020"},{amount:90,date:"02-01-2020"},{amount:175,date:"03-01-2020"},{amount:1480,date:"03-01-2020"}]}];var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,{data:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.9aabd0a1.chunk.js.map