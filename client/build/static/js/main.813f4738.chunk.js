(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,a){t.exports=a(76)},42:function(t,e,a){},76:function(t,e,a){"use strict";a.r(e);var s=a(1),l=a.n(s),r=a(7),n=a.n(r),i=(a(42),a(30)),u=a(8),c=a.n(u),o=a(14),m=a(31),h=a(32),p=a(35),d=a(33),g=a(36),E=a(3),b=a(10),S=a.n(b),f=a(11),v=a.n(f),y=function(t){function e(t){var a;return Object(m.a)(this,e),(a=Object(p.a)(this,Object(d.a)(e).call(this,t))).getDataFromDb=function(){fetch("/api/getData").then(function(t){return t.json()}).then(function(t){return a.setState({data:t.data})})},a.putDataToDb=function(t){for(var e=a.state.data.map(function(t){return t.id}),s=0;e.includes(s);)++s;S.a.post("/api/putData",{id:s,message:t})},a.deleteFromDB=function(t){var e=null;a.state.data.forEach(function(a){a.id===t&&(e=a._id)}),S.a.delete("/api/deleteData",{data:{id:e}})},a.updateDB=function(t,e){var s=null;a.state.data.forEach(function(e){e.id===t&&(s=e._id)}),S.a.post("/api/updateData",{id:s,update:{message:e}})},a.callApi=Object(o.a)(c.a.mark(function t(){var e,a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/hello");case 2:return e=t.sent,t.next=5,e.json();case 5:if(a=t.sent,200===e.status){t.next=8;break}throw Error(a.message);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}},t,this)})),a.handleSubmit=function(){var t=Object(o.a)(c.a.mark(function t(e){var s,l,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,fetch("/api/world",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({term:a.state.searchTerm,type:a.state.searchType})});case 3:return s=t.sent,t.next=6,s.text();case 6:"null"===(l=t.sent)?a.clearResults():(r=JSON.parse(l),a.setState({responseToPost:l}),a.setState({result1artist:r.artist1}),a.setState({result1album:r.album1}),a.setState({result1songTitle:r.songTitle1}),a.setState({result1previewLink:r.previewLink1}),a.setState({result1thirty:r.thirty1}),a.setState({result1albumImg:r.albumImg1}),a.setState({result2artist:r.artist2}),a.setState({result2album:r.album2}),a.setState({result2songTitle:r.songTitle2}),a.setState({result2previewLink:r.previewLink2}),a.setState({result2thirty:r.thirty2}),a.setState({result2albumImg:r.albumImg2}),a.setState({result3artist:r.artist3}),a.setState({result3album:r.album3}),a.setState({result3songTitle:r.songTitle3}),a.setState({result3previewLink:r.previewLink3}),a.setState({result3thirty:r.thirty3}),a.setState({result3albumImg:r.albumImg3}),console.log(r.exp1),console.log(a.state.result1exp),"true"===r.exp1&&a.setState({result1exp:"(Explicit)"}),"true"===r.exp2&&a.setState({result2exp:"(Explicit)"}),"true"===r.exp3&&a.setState({result3exp:"(Explicit)"}));case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),a.handleInputChange=function(t){var e=t.target,s=e.name,l=e.value;a.setState(Object(i.a)({},s,l))},a.state={data:[],id:0,message:null,intervalIsSet:!1,idToDelete:null,idToUpdate:null,objectToUpdate:null,searchTerm:"Thriller",searchType:"track",response:"",post:"",responseToPost:"",result1artist:"",result1album:"",result1songTitle:"",result1previewLink:"",result1thirty:"",result1exp:"",result2artist:"",result2album:"",result2songTitle:"",result2previewLink:"",result2thirty:"",result2exp:"",result3artist:"",result3album:"",result3songTitle:"",result3previewLink:"",result3thirty:"",result3exp:""},a}return Object(g.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=this;if(this.callApi().then(function(e){return t.setState({response:e.express})}).catch(function(t){return console.log(t)}),this.getDataFromDb(),!this.state.intervalIsSet){var e=setInterval(this.getDataFromDb,1e3);this.setState({intervalIsSet:e})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"clearResults",value:function(){this.setState({result1artist:"Unfortunately, a preview for this song is unavailable."}),this.setState({result1album:""}),this.setState({result1songTitle:""}),this.setState({result1previewLink:""}),this.setState({result1thirty:""}),this.setState({result1albumImg:""}),this.setState({result2artist:""}),this.setState({result2album:""}),this.setState({result2songTitle:""}),this.setState({result2previewLink:""}),this.setState({result2thirty:""}),this.setState({result2albumImg:""}),this.setState({result3artist:""}),this.setState({result3album:""}),this.setState({result3songTitle:""}),this.setState({result3previewLink:""}),this.setState({result3thirty:""}),this.setState({result3albumImg:""})}},{key:"render",value:function(){var t=this,e=this.state.data;return l.a.createElement(E.i,null,l.a.createElement(E.m,null,l.a.createElement("h2",null,"Welcome to Soundflame ",l.a.createElement("i",{class:"fas fa-music"})," ",l.a.createElement("i",{class:"fas fa-fire"}))),l.a.createElement(E.j,null,l.a.createElement(E.k,null,l.a.createElement(E.n,{for:"searchTerm"},"Search"),l.a.createElement(E.l,{value:this.state.searchTerm,onChange:this.handleInputChange,type:"search",name:"searchTerm",id:"searchTerm",placeholder:"Enter your search term."})),l.a.createElement(E.k,null,l.a.createElement(E.n,{for:"searchType"},"Filter"),l.a.createElement(E.l,{value:this.state.searchType,onChange:this.handleInputChange,type:"select",name:"searchType",id:"searchType"},l.a.createElement("option",{value:"track"},"track"),l.a.createElement("option",{value:"artist"},"artist"),l.a.createElement("option",{value:"album"},"album")))),l.a.createElement(E.a,{onClick:this.handleSubmit,color:"primary",size:"lg"},"Submit"),l.a.createElement(E.i,null,l.a.createElement("h3",null,"Results"),l.a.createElement(E.o,null,l.a.createElement(E.h,{sm:"4"},l.a.createElement(E.b,null,l.a.createElement(E.d,{top:!0,width:"75%",src:this.state.result1albumImg,alt:"",style:{height:300}}),l.a.createElement(E.c,null,l.a.createElement(E.g,null,this.state.result1songTitle,this.state.result1exp),l.a.createElement(E.e,null,this.state.result1artist,l.a.createElement("br",null),this.state.result1album),l.a.createElement(E.f,null,this.state.result1previewLink,l.a.createElement(v.a,{className:"react-player",url:this.state.result1thirty,width:"100%",height:"50px",controls:!0}))))),l.a.createElement(E.h,{sm:"4"},l.a.createElement(E.b,null,l.a.createElement(E.d,{top:!0,width:"75%",src:this.state.result2albumImg,alt:"",style:{height:300}}),l.a.createElement(E.c,null,l.a.createElement(E.g,null,this.state.result2songTitle,this.state.result2exp),l.a.createElement(E.e,null,this.state.result2artist,l.a.createElement("br",null),this.state.result2album),l.a.createElement(E.f,null,this.state.result2previewLink,l.a.createElement(v.a,{className:"react-player",url:this.state.result2thirty,width:"100%",height:"50px",controls:!0}))))),l.a.createElement(E.h,{sm:"4"},l.a.createElement(E.b,null,l.a.createElement(E.d,{top:!0,width:"75%",src:this.state.result3albumImg,alt:"",style:{height:300}}),l.a.createElement(E.c,null,l.a.createElement(E.g,null,this.state.result3songTitle,this.state.result3exp),l.a.createElement(E.e,null,this.state.result3artist,l.a.createElement("br",null),this.state.result3album),l.a.createElement(E.f,null,this.state.result3previewLink,l.a.createElement(v.a,{className:"react-player",url:this.state.result3thirty,width:"100%",height:"50px",controls:!0}))))))),l.a.createElement("div",null,l.a.createElement("h3",null,"Saved Songs"),l.a.createElement("ul",null,e.length<=0?"No songs yet saved.":e.map(function(t){return l.a.createElement("li",{style:{padding:"10px"},key:e.message},l.a.createElement("span",{style:{color:"gray"}}," id: ")," ",t.id," ",l.a.createElement("br",null),l.a.createElement("span",{style:{color:"gray"}}," data: "),t.message)})),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("button",{onClick:function(){return t.putDataToDb("\nSong: "+t.state.result1songTitle+" ---\nArtist: "+t.state.result1artist+" ---\nAlbum: "+t.state.result1album)}},"SAVE 1"),l.a.createElement("button",{onClick:function(){return t.putDataToDb("\nSong: "+t.state.result2songTitle+" ---\nArtist: "+t.state.result2artist+" ---\nAlbum: "+t.state.result2album)}},"SAVE 2"),l.a.createElement("button",{onClick:function(){return t.putDataToDb("\nSong: "+t.state.result3songTitle+" ---\nArtist: "+t.state.result3artist+" ---\nAlbum: "+t.state.result3album)}},"SAVE 3")),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({idToDelete:e.target.value})},placeholder:"put id of item to delete here"}),l.a.createElement("button",{onClick:function(){return t.deleteFromDB(t.state.idToDelete)}},"DELETE"))))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[37,2,1]]]);
//# sourceMappingURL=main.813f4738.chunk.js.map