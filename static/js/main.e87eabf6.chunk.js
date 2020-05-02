(this["webpackJsonpreact-doc"]=this["webpackJsonpreact-doc"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),s=a.n(l),c=(a(28),a(14)),i=a(7),o=a(8),u=a(10),m=a(9);function h(e){return r.a.createElement("button",{className:"square",style:e.winner,onClick:e.onClick},e.value)}var p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).eachSquare=function(t){for(var a=[],n=3*t,l=0;l<3;l++)a.push(e.renderSquare(l+n));return r.a.createElement("div",{key:t,className:"board-row"},a)},e}return Object(o.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(h,{key:e,onClick:function(){return t.props.onClick(e)},winner:this.props.winner.includes(e)?{backgroundColor:"#00ff00"}:{},value:this.props.squares[e]})}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++)e.push(this.eachSquare(t));return r.a.createElement("div",null,e)}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,location:[],weight:900,toggleSort:!0,winner:[]},e.calculateWinner=function(t,a){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<n.length;r++){var l=Object(c.a)(n[r],3),s=l[0],i=l[1],o=l[2];if(t[s]&&t[s]===t[i]&&t[s]===t[o])return 1===a&&e.setState({winner:n[r],xIsNext:!0}),"X"===t[s]?e.props.player:"Bot"}return null},e.handleClick=function(t){var a=e.state.history.slice(0,e.state.stepNumber+1),n=e.state.location.slice(0,e.state.stepNumber),r=a[a.length-1].squares.slice();e.calculateWinner(r,1)||r[t]||(r[t]=e.state.xIsNext?"X":"O",e.state.stepNumber<4&&e.setState({xIsNext:!e.state.xIsNext},(function(){if(!e.calculateWinner(r,1))for(;;){var t=Math.floor(8*Math.random());if(!r[t]){console.log(e.state.xIsNext),r[t]=e.state.xIsNext?"X":"O",e.setState({xIsNext:!e.state.xIsNext});break}}})),e.setState({history:a.concat([{squares:r}]),stepNumber:a.length,location:n.concat([t])},(function(){e.calculateWinner(e.state.history[a.length].squares,1)})))},e.jumpTo=function(t){e.setState({stepNumber:t,xIsNext:!0}),t===e.state.history.length-1?e.calculateWinner(e.state.history[e.state.history.length-1].squares,1):e.setState({winner:[]})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],l=this.calculateWinner(n.squares,0),s=a.map((function(e,a){var n=a?"Go to move #"+a:"Go to game start",l=a?"("+Math.floor(t.state.location[a-1]/3)+",":"(NaN,",s=a?t.state.location[a-1]%3+")":"NaN)",c=t.state.stepNumber===a?900:100;return r.a.createElement("li",{key:a},r.a.createElement("button",{style:{fontWeight:c},onClick:function(){return t.jumpTo(a)}},n),r.a.createElement("p",{style:{display:"inline-block",marginLeft:"10px"}},"Location: ",t.props.player," ",l,s))}));return e=l?"Winner: "+l:9===this.state.stepNumber?"Draw":"Next player: "+(this.state.xIsNext?this.props.player:"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(p,{winner:this.state.winner,squares:n.squares,onClick:this.handleClick})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("button",{style:{marginTop:5},onClick:function(){return t.setState({toggleSort:!t.state.toggleSort})}},"Sort"),r.a.createElement("ol",null,this.state.toggleSort?s:s.reverse())))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={startGame:!1,player:""},e.handleChange=function(t){e.setState({player:t.target.value})},e.startGame=function(){e.state.player.length>0?e.setState({startGame:!0}):alert("UserName Required")},e.ActivateStartGame=function(t){"Enter"===t.key&&e.startGame()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center",fontSize:"4vh",fontWeight:"bold"}},"Against Bot"),this.state.startGame?r.a.createElement("div",null,r.a.createElement("button",{className:"change_name",onClick:function(){return e.setState({startGame:!1})}},"Change UserName"),r.a.createElement(y,{player:this.state.player})):r.a.createElement("div",{className:"input-box"},r.a.createElement("div",{className:"player1-input"},r.a.createElement("label",{htmlFor:"player1"},"Player's UserName"),r.a.createElement("input",{onKeyPress:this.ActivateStartGame,onChange:this.handleChange,id:"player1",type:"text",value:this.state.player,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.startGame,style:{marginTop:"1em"},type:"submit"},"START"))))}}]),a}(n.Component),f=a(13);function b(e){return r.a.createElement("button",{className:"square",style:e.winner,onClick:e.onClick},e.value)}var g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).eachSquare=function(t){for(var a=[],n=3*t,l=0;l<3;l++)a.push(e.renderSquare(l+n));return r.a.createElement("div",{key:t,className:"board-row"},a)},e}return Object(o.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(b,{key:e,onClick:function(){return t.props.onClick(e)},winner:this.props.winner.includes(e)?{backgroundColor:"#00ff00"}:{},value:this.props.squares[e]})}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++)e.push(this.eachSquare(t));return r.a.createElement("div",null,e)}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,location:[],weight:900,toggleSort:!0,winner:[]},e.calculateWinner=function(t,a){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<n.length;r++){var l=Object(c.a)(n[r],3),s=l[0],i=l[1],o=l[2];if(t[s]&&t[s]===t[i]&&t[s]===t[o])return 1===a&&e.setState({winner:n[r]}),"X"===t[s]?e.props.names.player1:e.props.names.player2}return null},e.handleClick=function(t){var a=e.state.history.slice(0,e.state.stepNumber+1),n=e.state.location.slice(0,e.state.stepNumber),r=a[a.length-1].squares.slice();e.calculateWinner(r,1)||r[t]||(r[t]=e.state.xIsNext?"X":"O",e.setState({history:a.concat([{squares:r}]),stepNumber:a.length,xIsNext:!e.state.xIsNext,location:n.concat([t])},(function(){e.calculateWinner(e.state.history[a.length].squares,1)})))},e.jumpTo=function(t){e.setState({stepNumber:t,xIsNext:t%2===0}),t===e.state.history.length-1?e.calculateWinner(e.state.history[e.state.history.length-1].squares,1):e.setState({winner:[]})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],l=this.calculateWinner(n.squares,0),s=a.map((function(e,a){var n=a?"Go to move #"+a:"Go to game start",l=a?"("+Math.floor(t.state.location[a-1]/3)+",":"(NaN,",s=a?t.state.location[a-1]%3+")":"NaN)",c=t.state.stepNumber===a?900:100,i=null;return 0===a||(i=a%2===0?t.props.names.player2:t.props.names.player1),r.a.createElement("li",{key:a},r.a.createElement("button",{style:{fontWeight:c},onClick:function(){return t.jumpTo(a)}},n),r.a.createElement("p",{style:{display:"inline-block",marginLeft:"10px"}},"Location: ",i," ",l,s))}));return e=l?"Winner: "+l:9===this.state.stepNumber?"Draw":"Next player: "+(this.state.xIsNext?this.props.names.player1:this.props.names.player2),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(g,{winner:this.state.winner,squares:n.squares,onClick:this.handleClick})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("button",{style:{marginTop:5},onClick:function(){return t.setState({toggleSort:!t.state.toggleSort})}},"Sort"),r.a.createElement("ol",null,this.state.toggleSort?s:s.reverse())))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={startGame:!1,names:{player1:"",player2:""}},e.handleChange1=function(t){e.setState({names:Object(f.a)(Object(f.a)({},e.state.names),{},{player1:t.target.value})})},e.handleChange2=function(t){e.setState({names:Object(f.a)(Object(f.a)({},e.state.names),{},{player2:t.target.value})})},e.startGame=function(){e.state.names.player1.length&&e.state.names.player2.length>0?e.setState({startGame:!0}):alert("Username Required")},e.ActivateStartGame=function(t){"Enter"===t.key&&e.startGame()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center",fontSize:"4vh",fontWeight:"bold"}},"Multiplayer"),this.state.startGame?r.a.createElement("div",null,r.a.createElement("button",{className:"change_name",onClick:function(){return e.setState({startGame:!1})}},"Change UserName"),r.a.createElement(d,{names:this.state.names})):r.a.createElement("div",{className:"input-box"},r.a.createElement("div",{className:"player1-input"},r.a.createElement("label",{htmlFor:"player1"},"First Player's UserName"),r.a.createElement("input",{onKeyPress:this.ActivateStartGame,onChange:this.handleChange1,id:"player1",type:"text",value:this.state.names.player1,required:!0})),r.a.createElement("div",{className:"player2-input"},r.a.createElement("label",{htmlFor:"player2"},"Second Player's UserName"),r.a.createElement("input",{onKeyPress:this.ActivateStartGame,onChange:this.handleChange2,id:"player2",type:"text",value:this.state.names.player2,required:!0})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.startGame,type:"submit"},"START"))))}}]),a}(n.Component),N=a(6),x=a(2),k=a(5),S=function(e){var t=e.children,a={display:"inline-block",margin:"10px 20px",marginBottom:"1.5em",fontSize:"4vh"};return r.a.createElement("div",null,r.a.createElement(k.a,{to:"/tic-tac-toe"},"Back Home"),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h3",{style:a},r.a.createElement(k.a,{to:"/tic-tac-toe/multiplayer"},"Multiplayer")),r.a.createElement("h3",{style:a},r.a.createElement(k.a,{to:"/tic-tac-toe/bot"},"Play Against Bot"))),t)},C=function(){return r.a.createElement("div",{className:"link-box-container"},r.a.createElement(k.a,{to:"/tic-tac-toe/multiplayer",className:"link-box-text"},r.a.createElement("div",{id:"multi",className:"link-box"},"Multiplayer")),r.a.createElement(k.a,{to:"/tic-tac-toe/bot",className:"link-box-text"},r.a.createElement("div",{className:"link-box"},"Play Against Bot")))};s.a.render(r.a.createElement(N.b,{history:Object(x.a)()},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/tic-tac-toe",component:C}),r.a.createElement(N.a,{path:"/tic-tac-toe/bot",render:function(){return r.a.createElement(S,null,r.a.createElement(v,null))}}),r.a.createElement(N.a,{path:"/tic-tac-toe/multiplayer",render:function(){return r.a.createElement(S,null,r.a.createElement(E,null))}}))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e87eabf6.chunk.js.map