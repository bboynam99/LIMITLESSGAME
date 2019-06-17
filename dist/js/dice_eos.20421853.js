(function(t){function e(e){for(var r,u,s=e[0],o=e[1],c=e[2],m=0,p=[];m<s.length;m++)u=s[m],a[u]&&p.push(a[u][0]),a[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={dice_eos:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://limitless.ink/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=o;i.push([6,"chunk-vendors","chunk-common"]),n()})({6:function(t,e,n){t.exports=n("aa4c")},aa4c:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game",{ref:"app",attrs:{symbol:"EOS",account:t.account,num:t.num,amount:t.amount,introVisible:t.introVisible,isNeedUpdate:t.isNeedUpdate,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,adRecordList:t.adRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading,celebrateVisible:t.celebrateVisible,min:t.min,max:t.max,decimal:1},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},"update:introVisible":function(e){t.introVisible=e},"update:intro-visible":function(e){t.introVisible=e},"update:isNeedUpdate":function(e){t.isNeedUpdate=e},"update:is-need-update":function(e){t.isNeedUpdate=e},bet:t.betSubmit,ended:t.betEnd,addRecord:t.addRecord,freeBet:t.freeBet}})],1)},i=[],u=(n("a481"),n("795b")),s=n.n(u),o=(n("ac6a"),n("5df3"),n("e814")),c=n.n(o),d=n("768b"),m=(n("7f7f"),n("96cf"),n("3b8d")),p=n("853d"),h=function(t){var e=t.betmask,n=t.modulo,r=void 0===n?100:n,a=t.amount,i=t.address;return Object(p["a"])({method:"get",url:"/api/v1.0/dice/eos/getPlaceBetParams",params:{betmask:e,modulo:r,amount:a,address:i}})},f=function(t){return Object(p["a"])({method:"get",url:"/api/v1.0/dice/eos/settleBet",params:t})},l=function(){return Object(p["a"])({method:"get",url:"/api/v1.0/dice/eos/getBetsAll"})},b=function(t){var e=t.address;return Object(p["a"])({method:"get",url:"/api/v1.0/dice/eos/getBetsMe",params:{address:e}})},g=function(){return p["a"].get("/api/v1.0/dice/eos/getSuggestBetAmount")},v=function(){return p["a"].get("/api/v1.0/dice/eos/getBetsHighRoller")},x=function(t){var e=t.address,n=t.amount,r=void 0===n?100:n;return p["a"].get("/api/v1.0/dice/eos/addgambler",{params:{address:e,amount:r}})},w=n("9944"),k=n("08fb"),R=n("232d"),j=n("ac7d"),O=new j["a"],y={data:function(){return{num:50,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],adRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,celebrateVisible:!1,min:1,max:97,debug:!1,introVisible:!1,isNeedUpdate:!1}},components:{Game:k["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.getRecord(),this.getAmoutParams(),this.getHighRoller(),t.next=5,O.login();case 5:if(e=t.sent,-1!=e){t.next=9;break}return this.$error(this.$t("bf"),1e4),t.abrupt("return");case 9:return this.account=e.name,t.next=12,this.getBalance();case 12:this.loading=!1,this.getMyRecord();case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getJackpot(),setInterval(function(){e.getJackpot()},1e4);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getBalance:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["c"])(O.getBalance());case 2:if(e=t.sent,n=Object(d["a"])(e,2),r=n[0],a=n[1],!a){t.next=9;break}return console.log(a),t.abrupt("return");case 9:this.balance=r;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAmoutParams:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getJackpot:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,O.getJackpot();case 3:e=t.sent,this.jackpotEnd=e;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=c()(this.amount);isNaN(e)?this.amount=this.minAmount:(e<this.minAmount?e=this.minAmount:e>this.maxAmount&&(e=this.maxAmount),this.$nextTick(function(){t.amount=e}))},getBetParams:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.amountCache=r.amount,r.numCache=r.num,t.next=4,h({betmask:r.num,amount:r.amount,address:r.account});case 4:if(e=t.sent,null!==e){t.next=8;break}return r.betLoading=!1,t.abrupt("return");case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:n=t.sent;case 4:if(28!=n.v){t.next=10;break}return t.next=7,e();case 7:n=t.sent,t.next=4;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),betEnd:function(){this.getBalance(),this.state="bet",this.betLoading=!1},settle:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(e,n,r,a){var i,u,s,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f({randomNumber:e,blockNumber:n,transaction_id:r,beneficiary:this.account});case 2:i=t.sent,u=i.sha3Mod100,s=Object(w["b"])(Object(R["a"])(a||this.amountCache,this.numCache)),this.result={sha3Mod100:u,wins:u<this.numCache?s:0},this.state="wait",this.isNeedUpdate=!0,setTimeout(function(){o.state="result"},5e3);case 9:case"end":return t.stop()}},t,this)}));function e(e,n,r,a){return t.apply(this,arguments)}return e}(),submitVerify:function(){return!(this.amount>this.balance)||(this.$warn(this.$t("at")),!1)},freeBet:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i,u,o,c,m;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.betLoading=!0,t.next=3,Object(w["c"])(s.a.all([this.getBetParams(),x({address:this.account})]));case 3:if(e=t.sent,n=Object(d["a"])(e,2),r=Object(d["a"])(n[0],2),a=r[0],r[1],i=n[1],!i){t.next=13;break}return console.log(i),this.betEnd(),t.abrupt("return");case 13:return t.next=15,Object(w["c"])(O.freeBet(a));case 15:if(u=t.sent,o=Object(d["a"])(u,2),c=o[0],m=o[1],!m){t.next=23;break}return console.log(i),this.betEnd(),t.abrupt("return");case 23:this.settle(a.id,c.processed.block_num,c.transaction_id,O.freeAmount);case 24:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),betSubmit:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.submitVerify()){t.next=2;break}return t.abrupt("return");case 2:return this.betLoading=!0,t.next=5,this.getBetParams();case 5:return e=t.sent,t.next=8,Object(w["c"])(O.bet(e,this.amount));case 8:if(n=t.sent,r=Object(d["a"])(n,2),a=r[0],i=r[1],!i){t.next=16;break}return console.log(i),this.betEnd(),t.abrupt("return");case 16:this.settle(e.id,a.processed.block_num,a.transaction_id);case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),prefixRecord:function(t){t._update=this.formatDate(t.updatedAt),t._wins=Object(w["b"])(t.wins),t._link="https://bloks.io/transaction/".concat(t.betTrx),t._bet=t.betMask,t._result='<div class="result-num">'.concat(t.sha3Mod100,"</div>")},getRecord:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addRecord:function(t){this.prefixRecord(t),this.recordList.unshift(t),t.address==this.account&&this.myRecordList.unshift(t),this.recordList.length>20&&this.recordList.pop(),this.myRecordList.length>20&&this.myRecordList.pop()},formatDate:function(t){var e=new Date(t),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());return n.replace(/(\b\d\b)/g,"0$1")},getHighRoller:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._lossPer=Object(R["c"])({min:n.min,max:n.max,bet:t.betMask}),t._shortcutAddr=Object(w["a"])(t.address)}),this.adRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},A=y,L=n("2877"),_=Object(L["a"])(A,a,i,!1,null,null,null),S=_.exports,B=n("7128"),E=n("d5b3"),P=n("68b4");n("8e48");r["default"].config.productionTip=!1,r["default"].use(E["a"]),r["default"].use(P["a"]),new r["default"]({i18n:B["a"],render:function(t){return t(S)}}).$mount("#app")}});