(function(t){function e(e){for(var r,u,s=e[0],o=e[1],c=e[2],m=0,d=[];m<s.length;m++)u=s[m],a[u]&&d.push(a[u][0]),a[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={horse_eos:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://limitless.ink/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=o;i.push([10,"chunk-vendors","chunk-common"]),n()})({10:function(t,e,n){t.exports=n("d5a9")},d5a9:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game",{ref:"app",attrs:{symbol:"EOS",num:t.num,amount:t.amount,introVisible:t.introVisible,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,adRecordList:t.adRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading,horseList:t.horseList,min:t.min,max:t.max,decimal:1},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},"update:introVisible":function(e){t.introVisible=e},"update:intro-visible":function(e){t.introVisible=e},bet:t.betSubmit,ended:t.betEnd,addRecord:t.addRecord}})],1)},i=[],u=(n("a481"),n("ac6a"),n("5d73")),s=n.n(u),o=n("e814"),c=n.n(o),h=n("768b"),m=(n("7f7f"),n("96cf"),n("3b8d")),d=n("853d"),p=function(t){var e=t.betmask,n=t.modulo,r=void 0===n?100:n,a=t.amount,i=t.address;return Object(d["a"])({method:"get",url:"/api/v1.0/horseracing/eos/getPlaceBetParams",params:{betmask:e,modulo:r,amount:a,address:i}})},f=function(t){return Object(d["a"])({method:"get",url:"/api/v1.0/horseracing/eos/settleBet",params:t})},l=function(){return Object(d["a"])({method:"get",url:"/api/v1.0/horseracing/eos/getBetsAll"})},b=function(t){var e=t.address;return Object(d["a"])({method:"get",url:"/api/v1.0/horseracing/eos/getBetsMe",params:{address:e}})},g=function(){return d["a"].get("/api/v1.0/horseracing/eos/getSuggestBetAmount")},v=function(){return d["a"].get("/api/v1.0/horseracing/eos/getBetsHighRoller")},x=n("9944"),w=n("eaa8"),R=n("232d"),k=n("7c7e"),j=n("ac7d"),y=new j["a"],O={data:function(){return{num:95,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],adRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,min:1,max:97,horseList:[95,75,48,38,18,10],debug:!0,introVisible:!1}},components:{Game:w["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.login();case 2:if(e=t.sent,-1!=e){t.next=6;break}return this.$error(this.$t("bf"),1e4),t.abrupt("return");case 6:return this.account=e.name,t.next=9,this.getBalance();case 9:this.loading=!1,this.getRecord(),this.getMyRecord(),this.getAmoutParams(),this.getHighRoller();case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getJackpot(),setInterval(function(){e.getJackpot()},1e4);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getBalance:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(x["c"])(y.getBalance());case 2:if(e=t.sent,n=Object(h["a"])(e,2),r=n[0],a=n[1],!a){t.next=9;break}return console.log(a),t.abrupt("return");case 9:this.balance=r;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAmoutParams:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getJackpot:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,y.getJackpot();case 3:e=t.sent,this.jackpotEnd=e;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=c()(this.amount);isNaN(e)?this.amount=this.minAmount:(e<this.minAmount?e=this.minAmount:e>this.maxAmount&&(e=this.maxAmount),this.$nextTick(function(){t.amount=e}))},getBetParams:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.amountCache=r.amount,r.numCache=r.num,t.next=4,p({betmask:r.num,amount:r.amount,address:r.account});case 4:if(e=t.sent,null!==e){t.next=8;break}return r.betLoading=!1,t.abrupt("return");case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:n=t.sent;case 4:if(128!=n.v){t.next=10;break}return t.next=7,e();case 7:n=t.sent,t.next=4;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),settle:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,n,r){var a,i,u,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f({randomNumber:e,blockNumber:n,transaction_id:r,beneficiary:this.account});case 2:return a=t.sent,i=a.sha3Mod100,u=Object(x["b"])(Object(R["a"])(this.amountCache,this.numCache)),s={sha3Mod100:i,wins:i<this.numCache?u:0},t.next=8,this.getVideo(s);case 8:o=t.sent,s.video=o,this.result=s,this.state="result";case 12:case"end":return t.stop()}},t,this)}));function e(e,n,r){return t.apply(this,arguments)}return e}(),submitVerify:function(){return!(this.amount>this.balance)||(this.$warn(this.$t("at")),!1)},betEnd:function(){this.getBalance(),this.state="bet",this.betLoading=!1},betSubmit:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.submitVerify()){t.next=2;break}return t.abrupt("return");case 2:return this.betLoading=!0,t.next=5,this.getBetParams();case 5:return e=t.sent,t.next=8,Object(x["c"])(y.bet(e,this.amount));case 8:if(n=t.sent,r=Object(h["a"])(n,2),a=r[0],i=r[1],!i){t.next=16;break}return console.log(i),this.betEnd(),t.abrupt("return");case 16:this.settle(e.id,a.processed.block_num,a.transaction_id);case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getVideo:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.wins,r=e.sha3Mod100,a=this.mapResultHorse({betMask:this.numCache,wins:n,sha3Mod100:r}),t.next=4,Object(k["g"])({winner:a});case 4:return i=t.sent,t.abrupt("return",i);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),mapBetHorse:function(t){return this.horseList.indexOf(c()(t))+1},mapResultHorse:function(t){var e=t.betMask,n=t.wins,r=t.sha3Mod100,a=this.mapBetHorse(e),i=c()(r);if(n>0)return a;var u=!0,o=!1,m=void 0;try{for(var d,p=s()(this.horseList.entries());!(u=(d=p.next()).done);u=!0){var f=Object(h["a"])(d.value,2),l=f[0],b=f[1];if(0==l&&i>=b)return 1==a?2:1;if(i<b&&i>=this.horseList[l+1])return l+1}}catch(g){o=!0,m=g}finally{try{u||null==p.return||p.return()}finally{if(o)throw m}}},prefixRecord:function(t){t._update=this.formatDate(t.updatedAt),t._wins=Object(x["b"])(t.wins),t._link="https://bloks.io/transaction/".concat(t.betTrx),t._bet=this.mapBetHorse(t.betMask),t._result=t._result='<div class="result-num">'.concat(this.mapResultHorse(t),"</div>")},getRecord:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addRecord:function(t){var e=this;t.address==this.account?setTimeout(function(){e.prefixRecord(t),e.recordList.unshift(t),e.myRecordList.unshift(t)},5e4):(this.prefixRecord(t),this.recordList.unshift(t)),this.recordList.length>20&&this.recordList.pop(),this.myRecordList.length>20&&this.myRecordList.pop()},formatDate:function(t){var e=new Date(t),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());return n.replace(/(\b\d\b)/g,"0$1")},getHighRoller:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._lossPer=Object(R["c"])({min:n.min,max:n.max,bet:t.betMask}),t._shortcutAddr=Object(x["a"])(t.address)}),this.adRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},L=O,A=n("2877"),_=Object(A["a"])(L,a,i,!1,null,null,null),S=_.exports,M=n("7128"),B=n("d5b3"),E=n("68b4");n("8e48");r["default"].config.productionTip=!1,r["default"].use(B["a"]),r["default"].use(E["a"]),new r["default"]({i18n:M["a"],render:function(t){return t(S)}}).$mount("#app")}});