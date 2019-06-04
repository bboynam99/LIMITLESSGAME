(function(t){function e(e){for(var r,u,o=e[0],s=e[1],c=e[2],d=0,p=[];d<o.length;d++)u=o[d],a[u]&&p.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={dice_eos:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://limitless.ink/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var m=s;i.push([6,"chunk-vendors","chunk-common"]),n()})({6:function(t,e,n){t.exports=n("aa4c")},aa4c:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("game",{ref:"app",attrs:{symbol:"EOS",num:t.num,amount:t.amount,introVisible:t.introVisible,minAmount:t.minAmount,maxAmount:t.maxAmount,amountStep:t.amountStep,balance:t.balance,gas:t.gas,betLoading:t.betLoading,recordList:t.recordList,myRecordList:t.myRecordList,adRecordList:t.adRecordList,jackpotStart:t.jackpotStart,jackpotEnd:t.jackpotEnd,state:t.state,result:t.result,loading:t.loading,celebrateVisible:t.celebrateVisible,min:t.min,max:t.max,decimal:1},on:{"update:num":function(e){t.num=e},"update:amount":function(e){t.amount=e},"update:introVisible":function(e){t.introVisible=e},"update:intro-visible":function(e){t.introVisible=e},bet:t.betSubmit,ended:t.betEnd,addRecord:t.addRecord}})],1)},i=[],u=(n("a481"),n("ac6a"),n("e814")),o=n.n(u),s=n("768b"),c=(n("7f7f"),n("96cf"),n("3b8d")),m=n("853d"),d=function(t){var e=t.betmask,n=t.modulo,r=void 0===n?100:n,a=t.amount,i=t.address;return Object(m["a"])({method:"get",url:"/api/v1.0/dice/eos/getPlaceBetParams",params:{betmask:e,modulo:r,amount:a,address:i}})},p=function(t){return Object(m["a"])({method:"get",url:"/api/v1.0/dice/eos/settleBet",params:t})},h=function(){return Object(m["a"])({method:"get",url:"/api/v1.0/dice/eos/getBetsAll"})},l=function(t){var e=t.address;return Object(m["a"])({method:"get",url:"/api/v1.0/dice/eos/getBetsMe",params:{address:e}})},f=function(){return m["a"].get("/api/v1.0/dice/eos/getSuggestBetAmount")},b=function(){return m["a"].get("/api/v1.0/dice/eos/getBetsHighRoller")},g=n("9944"),v=n("08fb"),x=n("232d"),w=n("ac7d"),k=new w["a"],R={data:function(){return{num:50,balance:0,amount:.01,gas:"",betLoading:!1,account:"",recordList:[],myRecordList:[],adRecordList:[],jackpotStart:0,jackpotEnd:0,minAmount:.01,maxAmount:10.02,amountStep:.01,result:{},state:"bet",loading:!0,celebrateVisible:!1,min:1,max:97,debug:!1,introVisible:!1}},components:{Game:v["a"]},watch:{amount:function(){this.fixAmount()}},computed:{},created:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k.login();case 2:if(e=t.sent,-1!=e){t.next=6;break}return this.$error(this.$t("bf"),1e4),t.abrupt("return");case 6:return this.account=e.name,t.next=9,this.getBalance();case 9:this.loading=!1,this.getRecord(),this.getMyRecord(),this.getAmoutParams(),this.getHighRoller();case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.getJackpot(),setInterval(function(){e.getJackpot()},1e4);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{getBalance:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["c"])(k.getBalance());case 2:if(e=t.sent,n=Object(s["a"])(e,2),r=n[0],a=n[1],!a){t.next=9;break}return console.log(a),t.abrupt("return");case 9:this.balance=r;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getAmoutParams:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:this.amount=e.defaultAmount,this.minAmount=e.defaultAmount,this.maxAmount=e.maxAmount,this.amountStep=e.step;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getJackpot:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.jackpotStart=this.jackpotEnd,t.next=3,k.getJackpot();case 3:e=t.sent,this.jackpotEnd=e;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fixAmount:function(){var t=this,e=o()(this.amount);isNaN(e)?this.amount=this.minAmount:(e<this.minAmount?e=this.minAmount:e>this.maxAmount&&(e=this.maxAmount),this.$nextTick(function(){t.amount=e}))},getBetParams:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r.amountCache=r.amount,r.numCache=r.num,t.next=4,d({betmask:r.num,amount:r.amount,address:r.account});case 4:if(e=t.sent,null!==e){t.next=8;break}return r.betLoading=!1,t.abrupt("return");case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),t.next=3,e();case 3:n=t.sent;case 4:if(28!=n.v){t.next=10;break}return t.next=7,e();case 7:n=t.sent,t.next=4;break;case 10:return t.abrupt("return",n);case 11:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),betEnd:function(){this.getBalance(),this.state="bet",this.betLoading=!1},settle:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n,r){var a,i,u,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p({randomNumber:e,blockNumber:n,transaction_id:r,beneficiary:this.account});case 2:a=t.sent,i=a.sha3Mod100,u=Object(g["b"])(Object(x["a"])(this.amountCache,this.numCache)),this.result={sha3Mod100:i,wins:i<this.numCache?u:0},this.state="wait",setTimeout(function(){o.state="result"},5e3);case 8:case"end":return t.stop()}},t,this)}));function e(e,n,r){return t.apply(this,arguments)}return e}(),submitVerify:function(){return!(this.amount>this.balance)||(this.$warn(this.$t("at")),!1)},betSubmit:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.submitVerify()){t.next=2;break}return t.abrupt("return");case 2:return this.betLoading=!0,t.next=5,this.getBetParams();case 5:return e=t.sent,t.next=8,Object(g["c"])(k.bet(e,this.amount));case 8:if(n=t.sent,r=Object(s["a"])(n,2),a=r[0],i=r[1],!i){t.next=16;break}return console.log(i),this.betEnd(),t.abrupt("return");case 16:this.settle(e.id,a.processed.block_num,a.transaction_id);case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),prefixRecord:function(t){t._update=this.formatDate(t.updatedAt),t._wins=Object(g["b"])(t.wins),t._link="https://bloks.io/transaction/".concat(t.betTrx),t._bet=t.betMask,t._result='<div class="result-num">'.concat(t.sha3Mod100,"</div>")},getRecord:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.recordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getMyRecord:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l({address:this.account});case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){n.prefixRecord(t)}),this.myRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addRecord:function(t){this.prefixRecord(t),this.recordList.unshift(t),t.address==this.account&&this.myRecordList.unshift(t),this.recordList.length>20&&this.recordList.pop(),this.myRecordList.length>20&&this.myRecordList.pop()},formatDate:function(t){var e=new Date(t),n="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds());return n.replace(/(\b\d\b)/g,"0$1")},getHighRoller:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:if(e=t.sent,null!==e){t.next=5;break}return t.abrupt("return");case 5:e.forEach(function(t){t._lossPer=Object(x["c"])({min:n.min,max:n.max,bet:t.betMask}),t._shortcutAddr=Object(g["a"])(t.address)}),this.adRecordList=e;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},j=R,y=n("2877"),O=Object(y["a"])(j,a,i,!1,null,null,null),A=O.exports,L=n("7128"),_=n("d5b3"),S=n("68b4");n("8e48");r["default"].config.productionTip=!1,r["default"].use(_["a"]),r["default"].use(S["a"]),new r["default"]({i18n:L["a"],render:function(t){return t(A)}}).$mount("#app")}});