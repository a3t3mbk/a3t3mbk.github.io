(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),l=(a(61),a(18)),o=a(14),s=a(1),u=a.n(s),m=a(4),d=a(6),f=a(7),p=a(10),h=a(9),v=a(11),b=a(19),g=a(2),E=a(49),k=a.n(E),w=a(50),y=function(){function e(t){Object(d.a)(this,e),this.db=new w.a(t)}return Object(f.a)(e,[{key:"getAllDoc",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.allDocs({include_docs:!0});case 2:return t=e.sent,a={},t.rows.forEach(function(e){return a[e.id]=e.doc}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createGenmai",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),t.createdAt=new Date,t.updatedAt=new Date,e.next=5,this.db.post(Object(o.a)({},t));case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteGenmai",value:function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.remove(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"createHakumai",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.createdAt=new Date,t.updatedAt=new Date,e.next=4,this.db.post(Object(o.a)({},t));case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateHakumai",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.updatedAt=new Date,e.next=3,this.db.put(Object(o.a)({},t));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),O=a(29),j=a.n(O),x=(a(69),function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("h1",null,r.a.createElement("div",{class:"logo"},r.a.createElement("img",{src:j.a,alt:"A3T3-logo"})),r.a.createElement(g.b,{to:"/",className:"navbar-links"},"A3T3MBK-appLists"),r.a.createElement(g.b,{to:"/genmaiIndex",className:"navbar-links"},"\u7384\u7c73Index"),r.a.createElement(g.b,{to:"/hakumaiIndex",className:"navbar-links"},"\u767d\u7c73Index")),r.a.createElement("span",{className:"navbar-buttons"},r.a.createElement(g.b,{to:"/newGenmai",className:"btn"},"New \u7384\u7c73")))}),N=(a(74),function(){return r.a.createElement("div",{class:"footer"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement("p",null,"a3t3mbk.com"),r.a.createElement("img",{src:j.a,alt:"A3T3-logo"})),r.a.createElement("div",{class:"footer-list"},r.a.createElement("ul",null,r.a.createElement("a",{href:"https://www.a3t3mbk.com/"},r.a.createElement("li",null,"\u30b5\u30a4\u30c8\u6982\u8981")),r.a.createElement("a",{href:"https://blog.a3t3mbk.com/"},r.a.createElement("li",null,"\u30d6\u30ed\u30b0")),r.a.createElement("a",{href:"https://www.a3t3mbk.com/"},r.a.createElement("li",null,"\u304a\u554f\u3044\u5408\u308f\u305b\uff06\u4f7f\u3044\u65b9")),r.a.createElement("a",{href:"https://twitter.com/a3t3mbk"},r.a.createElement("li",{class:"twitter"},r.a.createElement("i",{class:"fab fa-twitter"}))))))}),D=a(53),S=a.n(D),C=a(54),M=a.n(C),A=(a(75),function(){return r.a.createElement("div",{class:"main"},r.a.createElement("div",{class:"copy-container"},r.a.createElement("h1",null,"A3T3MBK\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7f6e\u304d\u5834\u306b\u3088\u3046\u3053\u305d",r.a.createElement("span",null,".")),r.a.createElement("h2",null," \u767d\u7c73\u3092\u8caf\u3081\u308b\u30a4\u30e1\u30fc\u30b8\u3067\u3059 "),r.a.createElement("h6",null,"1\u65e510\u56de\u3068\u304b\u306e\u5236\u9650\u306f\u306a\u3044\u3067")),r.a.createElement("div",{class:"contents"},r.a.createElement("h3",{class:"section-title"},"\u7cbe\u7c73\u30b7\u30ea\u30fc\u30ba")),r.a.createElement("div",{class:"contents-item"},r.a.createElement(g.b,{to:"/genmaiIndex",className:"contents-cards"},r.a.createElement("img",{src:S.a,alt:"img of genmai"}),r.a.createElement("p",null,"\u7cbe\u7c73",r.a.createElement("span",null,"\uff08Markdown\uff09"),"\u30ea\u30b9\u30c8"),r.a.createElement("p",null,"Markdown\u3067\u66f8\u304b\u308c\u305fHTML\u306e\u30ea\u30f3\u30af\u30ea\u30b9\u30c8\u3092\u7384\u7c73\u306b\u898b\u7acb\u3066\u3066\u300c\u7cbe\u7c73\u300d\u3057\u307e\u3059\u3002\uff08\u73fe\u72b6\u30ed\u30fc\u30ab\u30eb\u4fdd\u5b58\u306e\u307f\uff09"))),r.a.createElement("div",{class:"contents-item"},r.a.createElement(g.b,{to:"/hakumaiIndex",className:"contents-cards"},r.a.createElement("img",{src:M.a,alt:"img of hakumai"}),r.a.createElement("p",null,"\u7cbe\u7c73\u3055\u308c\u305f",r.a.createElement("span",null,"\u4fdd\u5b58\u6e08\u307f"),"\u30ea\u30b9\u30c8"),r.a.createElement("p",null,"\u300c\u7cbe\u7c73\u300d\u3055\u308c\u305f\u5f8c\u3001\u767d\u7c73\u4fdd\u5b58\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u3082\u306e\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3059\u3002\uff08\u73fe\u72b6\u30ed\u30fc\u30ab\u30eb\u4fdd\u5b58\u306e\u307f\uff09"))),r.a.createElement("div",{class:"contact-form"}))}),G=(a(76),a(30)),T=a.n(G);a(77);var P=function(e){var t=e.genmai,a=t._id,n=t.title,i=t.updatedAt;return r.a.createElement("div",{className:"list-item"},r.a.createElement("h2",null,r.a.createElement(g.b,{to:"/genmai/".concat(a)},n||a," ",r.a.createElement("br",null),r.a.createElement("span",{className:"list-date"},function(e){return T()(e).format("MMMM D YYYY, HH:mm")}(i)))))},H=function(e){var t=e.genmai;return r.a.createElement("div",{className:"list"},t.map(function(e){return r.a.createElement(P,{genmai:e,key:"genmai-".concat(e._id)})}))},_=function(e){function t(e){var a;Object(d.a)(this,t),a=Object(p.a)(this,Object(h.a)(t).call(this,e));var n=Object.values(e.genmai);return n.sort(function(e,t){return new Date(t.updatedAt)-new Date(e.updatedAt)}),a.state={genmai:n},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.state.genmai.length?r.a.createElement("div",null,r.a.createElement("h2",null,"\u5165\u308c\u305f\u7384\u7c73\u30ea\u30b9\u30c8"),r.a.createElement(H,{genmai:this.state.genmai})):r.a.createElement("div",{className:"app-intro"},r.a.createElement("h2",null,"\u6700\u521d\u306b\u4f7f\u3046\u306e\u306f\u3001\u7384\u7c73\u6295\u5165\u30da\u30fc\u30b8\u3067\u3059\u3002\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u3067http\u3092\u542b\u3080\u6587\u7ae0\u3092\u5165\u308c\u307e\u3059\u3002"),r.a.createElement("p",null,"\u3053\u3053\u304b\u3089\u5165\u308c\u307e\u3059\u3002"," ",r.a.createElement(g.b,{className:"btn",to:"/newGenmai"},"\u6295\u5165\u53e3")),r.a.createElement("p",null,"\u3059\u3079\u3066\u306e\u7384\u7c73\u306f\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"))}}]),t}(r.a.PureComponent),F=(a(78),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={NewGenmai:{title:"",body:"",createdAt:null,updatedAt:null},saving:!1},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"handleGenmaiSave",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({saving:!0}),e.next=3,this.props.onSave(Object(o.a)({},this.state.NewGenmai));case 3:t=e.sent,this.props.history.replace("/genmai/".concat(t.id));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"updateValue",value:function(e){var t=this.state.NewGenmai;this.setState({NewGenmai:Object(o.a)({},t,Object(l.a)({},e.target.name,e.target.value))})}},{key:"render",value:function(){var e=this,t=this.state.NewGenmai;return r.a.createElement("div",{className:"NewGenmai-form"},r.a.createElement("h1",null,"\u7384\u7c73\u6295\u5165\u53e3"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleGenmaiSave()}},r.a.createElement("div",{className:"NewGenmai-form-field"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",name:"title",value:t.title,onChange:function(t){return e.updateValue(t)}})),r.a.createElement("div",{className:"NewGenmai-form-field NewGenmai-form-field-text"},r.a.createElement("textarea",{name:"body",value:t.body,onChange:function(t){return e.updateValue(t)}})),r.a.createElement("div",{className:"NewGenmai-form-buttons"},r.a.createElement("input",{type:"submit",value:"Save"}),r.a.createElement(g.b,{to:"/"},"\u30ad\u30e3\u30f3\u30bb\u30eb"))))}}]),t}(r.a.PureComponent)),L=a(55),I=a.n(L),B=(a(79),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"renderDate",value:function(){return T()(this.props.genmai.updatedAt).format("MMMM D YYYY, HH:mm")}},{key:"componentWillMount",value:function(){this.props.genmai||this.props.history.replace("/")}},{key:"render",value:function(){var e=this,t=this.props.genmai;return t?r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:"genmai-created"},this.renderDate(),r.a.createElement("button",{className:"btn",onClick:function(a){return e.props.onDelete(t._id)}},"Delete"),r.a.createElement(g.b,{to:"/hakumaiConfirm",className:"btn",onClick:function(a){return e.props.onSeimai(t._id)}},"\u7cbe\u7c73\u3059\u308b")),r.a.createElement("div",{className:"genmai-body",dangerouslySetInnerHTML:{__html:I()(t.body)}})):null}}]),t}(r.a.PureComponent)),Y=a(31),J=a.n(Y),W=a(26),R=a.n(W),V=a(27),K=a.n(V),U=a(28),Q=a.n(U),$=(a(43),a(44),a(23)),q=function(e){function t(e){var a;Object(d.a)(this,t);var n=(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).props,r=n.hakumai,i=n.hakumaiTemp,c=n.tags,l=n.onSave;return console.log(c),a.state={onSave:l,hakumai:r,hakumaiTemp:i,tags:c,cellData:[],saving:!1},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.hakumaiTemp,n=t.tags,i=t.onSave;var c={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",A:"A",B:"B",C:"C",D:"D",E:"E"},l=[{title:"id",field:"_id",width:15},{title:"title",field:"title",headerFilter:"input"},{title:"url",field:"url",formatter:"link",headerFilter:"input",formatterParams:{target:"_blank"}},{title:"\u9032\u6357",field:"sintyoku",align:"left",formatter:"progress",editor:"number",editorParams:{min:0,max:100,step:10}},{title:"xOptions",field:"xOptions",editorParams:{allowEmpty:!0,showListOnEmpty:!0,values:c},headerFilter:"select",headerFilterParams:{values:c},editor:"select"},{title:"\u89e3\u51cd\u3057\u305f\u3044\u65e5",field:"dob",editor:R.a,editorParams:{format:"MM/dd/yyyy"}},{title:"Rating",field:"rating",align:"center",formatter:"star",editor:!0},{headerFilter:"input",title:"Tags",field:"tags",editor:Q.a,editorParams:{values:n},formatter:K.a,formatterParams:{style:"PILL"}},{title:"TextMemo",field:"textMemo",formatter:"textarea",headerFilter:"input",editor:!0},{title:"\u7cbe\u7c73\u6e08\u307f?",field:"isHakumai",align:"center",formatter:"tickCross",editor:!0},{title:"Custom",field:"custom",align:"center",formatter:Object($.reactFormatter)(r.a.createElement(function(e){var t=e.cell._cell.row.data;return r.a.createElement("button",{"data-tip":"\u30af\u30ea\u30c3\u30af\u3067\u767d\u7c73Save",onClick:function(){i(t)}},r.a.createElement(J.a,{eventOff:"mouseLeave"}),"\u767d\u7c73\u767b\u9332")},null))}];return r.a.createElement("div",null,r.a.createElement($.ReactTabulator,{ref:function(t){return e.ref=t},columns:l,data:a,rowClick:this.rowClick,options:{clipboard:!0,initialSort:[{column:"dob",dir:"asc"}]},"data-custom-attr":"test-custom-attribute",className:"custom-css-class"}))}}]),t}(n.Component),z=function(e){function t(e){var a;Object(d.a)(this,t);var n=(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).props,r=n.hakumai,i=n.tags;return a.state={hakumai:r,tags:i},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.hakumai,n=t.tags,i=t.onSave,c=Object.keys(a).map(function(e){return a[e]});console.log(c);var l={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",A:"A",B:"B",C:"C",D:"D",E:"E"},o=[{title:"id",field:"_id",width:15},{title:"title",field:"title",headerFilter:"input"},{title:"url",field:"url",formatter:"link",headerFilter:"input",formatterParams:{target:"_blank"}},{title:"\u9032\u6357",field:"sintyoku",align:"left",formatter:"progress",editor:"number",editorParams:{min:0,max:100,step:10}},{title:"xOptions",field:"xOptions",editorParams:{allowEmpty:!0,showListOnEmpty:!0,values:l},headerFilter:"select",headerFilterParams:{values:l},editor:"select"},{title:"\u89e3\u51cd\u3057\u305f\u3044\u65e5",field:"dob",editor:R.a,editorParams:{format:"MM/dd/yyyy"}},{title:"Rating",field:"rating",align:"center",formatter:"star",editor:!0},{title:"TextMemo",field:"textMemo",formatter:"textarea",headerFilter:"input",editor:!0},{headerFilter:"input",title:"Tags",field:"tags",editor:Q.a,editorParams:{values:n},formatter:K.a,formatterParams:{style:"PILL"}},{title:"Custom",field:"custom",align:"center",formatter:Object($.reactFormatter)(r.a.createElement(function(e){var t=e.cell._cell.row.data;return r.a.createElement("button",{"data-tip":"\u30af\u30ea\u30c3\u30af\u3067\u767d\u7c73Save",onClick:function(){i(t)}},r.a.createElement(J.a,{eventOff:"mouseLeave"}),"\u767d\u7c73\u66f4\u65b0")},null))}];return c.length?r.a.createElement("div",null,r.a.createElement("h2",null,"\u7cbe\u7c73\u6e08\u307f\u767d\u7c73\u30ea\u30b9\u30c8"),r.a.createElement($.ReactTabulator,{ref:function(t){return e.ref=t},columns:o,options:{clipboard:!0,initialSort:[{column:"dob",dir:"asc"}]},data:c,rowClick:this.rowClick,"data-custom-attr":"test-custom-attribute",className:"custom-css-class"}),r.a.createElement(g.b,{className:"btn jsonbtn",to:"/hakumaiJson"},"\u767d\u7c73JSON\u51fa\u529b")):r.a.createElement("div",{className:"app-intro"},r.a.createElement("h2",null,"\u6700\u521d\u306b\u4f7f\u3046\u306e\u306f\u3001\u7384\u7c73\u6295\u5165\u30da\u30fc\u30b8\u3067\u3059\u3002\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u3067http\u3092\u542b\u3080\u6587\u7ae0\u3092\u5165\u308c\u307e\u3059\u3002"),r.a.createElement("p",null,"\u3053\u3053\u304b\u3089\u5165\u308c\u307e\u3059\u3002"," ",r.a.createElement(g.b,{className:"btn",to:"/newGenmai"},"\u6295\u5165\u53e3")),r.a.createElement("p",null,"\u3059\u3079\u3066\u306e\u7384\u7c73\uff0f\u767d\u7c73\u306f\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"))}}]),t}(n.Component),X=function(e){return r.a.createElement("div",{className:"HakumaiJson"},r.a.createElement("textarea",null,JSON.stringify(e.hakumai)))},Z=function(e){function t(e){var a;Object(d.a)(this,t),a=Object(p.a)(this,Object(h.a)(t).call(this,e));var n=new y("genmaiDb"),r=new y("hakumaiDb");return a.state={genmaiDb:n,hakumaiDb:r,genmai:[],hakumai:[],hakumaiTemp:[],tags:[],loading:!0},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.genmaiDb.getAllDoc();case 2:return t=e.sent,e.next=5,this.state.hakumaiDb.getAllDoc();case 5:a=e.sent,this.setState({genmai:t,hakumai:a,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleGenmaiSave",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.genmaiDb.createGenmai(t);case 2:return a=e.sent,n=this.state.genmai,t._id=a.id,t._rev=a.rev,this.setState({genmai:Object(o.a)({},n,Object(l.a)({},a.id,t))}),e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleHakumaiSave",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.hakumai,t.isHakumai=!0,e.next=4,this.state.hakumaiDb.createHakumai(t);case 4:return n=e.sent,console.log(n),this.setState({hakumai:Object(o.a)({},a,Object(l.a)({},n.id,t))}),e.abrupt("return",n);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleUpdateHakumai",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.hakumai,e.next=3,this.state.hakumaiDb.updateHakumai(t);case 3:return n=e.sent,this.setState({hakumai:Object(o.a)({},a,Object(l.a)({},n.id,t))}),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleGenmaiDelete",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.genmai,n=a[t],!a[t]||!window.confirm("\u3053\u306e\u7384\u7c73\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")){e.next=7;break}return e.next=5,this.state.genmaiDb.deleteGenmai(n);case 5:delete a[t],this.setState({genmai:a});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleSeimai",value:function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n,r,i,c,l,o,s,m,d,f,p,h,v,b,g,E;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state,n=a.genmai,r=a.hakumai,i=n[t],c=i.body.match(/\[(.*)\]/gm),l=c.map(function(e){return e.slice(1,-1)}),o=i.body.match(/\(((http|chrome).*)\)/gm),s=o.map(function(e){return e.slice(1,-1)}),m=s.map(function(e){return k()(e,"e246ff6d401916fed0960b20e0f3463f")}),d=m.map(function(e){return r.hasOwnProperty(e)}),f=m.map(function(e){return r[e]?r[e].sintyoku:10}),p=m.map(function(e){return r[e]?r[e].dob:new Date}),h=m.map(function(e){return r[e]?r[e].textMemo:""}),v=m.map(function(e){return!!r[e]&&r[e].tags}),b=s.map(function(e,t){return{_id:m[t],url:s[t],title:l[t],sintyoku:f[t],rating:3,isHakumai:d[t],tags:v[t],dob:p[t],textMemo:h[t]}}),g=b.filter(function(e){return e.tags}).map(function(e){return e.tags}),console.log(Object.keys(g)),E=Array.prototype.concat.apply([],g),this.setState({tags:E}),this.setState({hakumaiTemp:b});case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderContent",value:function(){var e=this;return this.state.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("div",{className:"app-content"},r.a.createElement(b.a,{exact:!0,path:"/",component:function(e){return r.a.createElement(A,null)}}),r.a.createElement(b.a,{exact:!0,path:"/GenmaiIndex",component:function(t){return r.a.createElement(_,Object.assign({},t,{genmai:e.state.genmai}))}}),r.a.createElement(b.a,{exact:!0,path:"/genmai/:id",component:function(t){return r.a.createElement(B,Object.assign({},t,{genmai:e.state.genmai[t.match.params.id],onDelete:function(t){return e.handleGenmaiDelete(t)},onSeimai:function(t){return e.handleSeimai(t)}}))}}),r.a.createElement(b.a,{path:"/newGenmai",component:function(t){return r.a.createElement(F,Object.assign({},t,{onSave:function(t){return e.handleGenmaiSave(t)}}))}}),r.a.createElement(b.a,{path:"/hakumaiConfirm",component:function(t){return r.a.createElement(q,Object.assign({},t,{hakumai:e.state.hakumai,hakumaiTemp:e.state.hakumaiTemp,tags:e.state.tags,onSave:function(t){return e.handleHakumaiSave(t)}}))}}),r.a.createElement(b.a,{path:"/hakumaiIndex",component:function(t){return r.a.createElement(z,Object.assign({},t,{hakumai:e.state.hakumai,tags:e.state.tags,onSave:function(t){return e.handleHakumaiSave(t)}}))}}),r.a.createElement(b.a,{path:"/HakumaiJson",component:function(t){return r.a.createElement(X,Object.assign({},t,{hakumai:e.state.hakumai}))}}))}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),this.renderContent(),r.a.createElement(N,null)))}}]),t}(n.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(Z,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ee?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):te(e)})}}()},29:function(e,t,a){e.exports=a.p+"static/media/logo-128.c089f152.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/genmai.13d51a09.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/onigiri_maru.e3d59086.png"},56:function(e,t,a){e.exports=a(101)},61:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.7be62b50.chunk.js.map