(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/loltracker/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3a28":function(e,t,n){},"4a79":function(e,t,n){"use strict";n("cf18")},ba8c:function(e,t,n){},c834:function(e,t,n){"use strict";n("3a28")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"\n      hidden\n      flex\n      items-center\n      justify-between\n      flex-wrap\n      bg-purple-900\n      text-white\n      p-2\n    "},[e._m(0),n("div",{staticClass:"flex-grow flex items-center w-auto"},[n("div",{staticClass:"text-sm flex-grow"},[n("router-link",{staticClass:"my-auto inline-block text-teal-200 hover:text-white mr-4",attrs:{to:"/"}},[e._v(" Home ")]),n("router-link",{staticClass:"my-auto inline-block text-teal-200 hover:text-white mr-4",attrs:{to:"/about"}},[e._v(" About ")])],1)])]),n("router-view")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-center flex-shrink-0 mr-6"},[n("span",{staticClass:"font-semibold text-xl tracking-tight"},[e._v("Lol Tracker")])])}],i=n("2877"),s={},l=Object(i["a"])(s,o,r,!1,null,null,null),c=l.exports,u=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-900 text-white m-4 p-2"},[e._m(0),e.error?n("div",{staticClass:"\n      relative\n      flex\n      items-center\n      p-4\n      border-l-4\n      rounded\n      shadow-sm\n      bg-red-50\n      border-red-500\n      mb-4\n    "},[n("div",{staticClass:"flex-grow text-red-700"},[e._v("Summoner no found!")])]):e._e(),n("form",{staticClass:"flex flex-wrap items-stretch"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.region,expression:"region"}],staticClass:"bg-gray-700 p-2 flex",attrs:{type:"text",name:"region"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.region=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"euw1"}},[e._v("EUW")]),n("option",{attrs:{value:"eun1"}},[e._v("EUNE")]),n("option",{attrs:{value:"na1"}},[e._v("NA")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"bg-gray-800 p-2 mr-0 ml-0 flex-1 block w-full",attrs:{type:"text",name:"name",placeholder:"Enter summoner name..."},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("button",{staticClass:"bg-gray-700 p-2 flex",attrs:{type:"submit"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.submit()}}},[e._v(" Search ")])]),n("div",{staticClass:"mt-4 text-center text-lg"},[e._v(" or open the "),n("router-link",{staticClass:"underline hover:text-gray-400",attrs:{to:{path:"/game",query:{region:"euw1",demo:!0}}}},[e._v("demo")]),e._v(". ")],1)])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-max-96 w-full"},[a("img",{staticClass:"mb-4 block text-center w-max-96 mx-auto",attrs:{src:n("cf05")}})])}],d=n("d4ec"),h=n("bee2"),g=n("262e"),f=n("2caf"),v=(n("b0c0"),n("9ab4")),y=n("1b40"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bg-gray-800 flex p-3 mb-2 text-white"},[n("router-link",{staticClass:"w-6 h-6",attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:"chevron-left"}})],1),n("h3",{staticClass:"ml-0 font-semibold tracking-tight text-md p-0"},[e.summonerInGame?n("img",{staticClass:"h-6 inline-block mr-1 self-center",attrs:{src:e.api.getChampionByKey(e.summonerInGame.championId).image}}):e._e(),e.summoner?n("div",{staticClass:"inline-block"},[e._v(e._s(e.summoner.name))]):e._e()]),n("div",{staticClass:"flex-grow"}),e.game?n("IconToggle",{staticClass:"mr-4",attrs:{icon:"sort",checked:e.enableDraggable},on:{"update:checked":function(t){e.enableDraggable=t}}}):e._e(),e.game?n("IconToggle",{attrs:{icon:"clock",checked:e.config.timeShowMinutes,settingsKey:"loltracker_config_time-show-minutes"},on:{"update:checked":function(t){return e.$set(e.config,"timeShowMinutes",t)}}}):e._e(),e.game&&e.isWakelockSupported()?n("IconToggle",{staticClass:"ml-4",attrs:{icon:"sun",checked:e.config.keepScreenOn,settingsKey:"loltracker_config_keep-screen-on"},on:{"update:checked":function(t){return e.$set(e.config,"keepScreenOn",t)}}}):e._e()],1),e.loading?n("div",{staticClass:"text-4xl text-white text-center m-10"},[e._v(" LOADING... ")]):e._e(),e.game||e.loading?e._e():n("div",[n("div",{staticClass:"text-4xl text-white text-center m-10"},[n("b",[e._v(e._s(e.summoner.name))]),e._v(" is currently not in a game! ")]),n("div",{staticClass:"text-center"},[n("button",{staticClass:"button inline-block mr-2",on:{click:function(t){return e.load()}}},[e._v(" Reload ")]),n("button",{staticClass:"button inline-block ml-2",on:{click:function(t){return e.goHome()}}},[e._v(" Search ")])])]),e.game&&!e.loading?n("div",{staticClass:"lg:ml-4 lg:mt-4"},[n("draggable",{attrs:{disabled:!e.enableDraggable,group:"people"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.enemyTeam,callback:function(t){e.enemyTeam=t},expression:"enemyTeam"}},e._l(e.enemyTeam,(function(t){return n("div",{key:t.summonerId},[n("Champion",{attrs:{api:e.api,participant:t,config:e.config,gameId:e.game.gameId}})],1)})),0),n("footer",{staticClass:"text-xs mt-8"},[e._v(" Tips:"),n("br"),n("ul",{staticClass:"list-disc list-inside"},[n("li",[e._v(" Click on "),n("font-awesome-icon",{attrs:{icon:"sort"}}),e._v(" to enable drag&drop reordering ")],1),n("li",[e._v(" Click on "),n("font-awesome-icon",{attrs:{icon:"clock"}}),e._v(" show minutes or only seconds ")],1),e._m(0)])])],1):e._e()])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(" Click on "),n("img",{staticClass:"w-4 rounded-full bg-black inline-block",attrs:{src:"https://ddragon.leagueoflegends.com/cdn/11.19.1/img/item/3158.png"}}),e._v(" if a champion bought "),n("i",[e._v("Ionian Boots of Lucidity")])])}],S=n("1da1"),w=(n("96cf"),n("7db0"),n("d3b7"),n("4de4"),n("a434"),n("c740"),n("b76a")),I=n.n(w),x=n("b85c"),C=(n("99af"),n("caad"),n("2532"),n("d81d"),{id:"Player-200-1",accountId:"Player-200-1",puuid:"demo-puuid",name:"Demo",profileIconId:4071,revisionDate:1632175769095,summonerLevel:342}),O={gameId:0,mapId:11,gameMode:"CLASSIC",gameType:"MATCHED_GAME",gameQueueConfigId:420,participants:[{teamId:100,spell1Id:4,spell2Id:7,championId:202,profileIconId:744,summonerName:"Player-100-1",bot:!1,summonerId:"Player-100-1",perks:{perkIds:[8021,8009,9103,8017,8275,8234,5008,5008,5002],perkStyle:8e3,perkSubStyle:8200},items:[]},{teamId:100,spell1Id:14,spell2Id:4,championId:117,profileIconId:4244,summonerName:"Player-100-2",bot:!1,summonerId:"Player-100-2",perks:{perkIds:[8214,8226,8210,8237,8345,8347,8324,5008,5002],perkStyle:8200,perkSubStyle:8300},items:[]},{teamId:100,spell1Id:12,spell2Id:4,championId:54,profileIconId:4763,summonerName:"Player-100-3",bot:!1,summonerId:"Player-100-3",perks:{perkIds:[8229,8226,8233,8237,8106,8326,5008,5008,5003],perkStyle:8200,perkSubStyle:8100},items:[]},{teamId:100,spell1Id:14,spell2Id:12,championId:55,profileIconId:7,summonerName:"Player-100-4",bot:!1,summonerId:"Player-100-4",perks:{perkIds:[8010,9111,9105,8299,8242,8444,5008,5008,5003],perkStyle:8e3,perkSubStyle:8400},items:[]},{teamId:100,spell1Id:4,spell2Id:11,championId:141,profileIconId:5031,summonerName:"Player-100-5",bot:!1,summonerId:"Player-100-5",perks:{perkIds:[8128,8143,8138,8105,8210,8236,5008,5008,5002],perkStyle:8100,perkSubStyle:8200},items:[]},{teamId:200,spell1Id:4,spell2Id:12,championId:517,profileIconId:3041,summonerName:"Player-200-1",bot:!1,summonerId:"Player-200-1",perks:{perkIds:[8010,8009,9105,8299,8345,8347,5008,5008,5001],perkStyle:8e3,perkSubStyle:8300},items:[]},{teamId:200,spell1Id:4,spell2Id:11,championId:9,profileIconId:4071,summonerName:"Player-200-2",bot:!1,summonerId:"Player-200-2",perks:{perkIds:[8124,8126,8138,8106,8347,8321,5008,5008,5002],perkStyle:8100,perkSubStyle:8300},items:[]},{teamId:200,spell1Id:4,spell2Id:3,championId:29,profileIconId:4925,summonerName:"Player-200-3",bot:!1,summonerId:"Player-200-3",perks:{perkIds:[8005,8009,9104,8014,8139,8134,5005,5008,5002],perkStyle:8e3,perkSubStyle:8100},items:[]},{teamId:200,spell1Id:14,spell2Id:4,championId:7,profileIconId:4568,summonerName:"Player-200-4",bot:!1,summonerId:"Player-200-4",perks:{perkIds:[8112,8139,8138,8135,8226,8210,5005,5008,5003],perkStyle:8100,perkSubStyle:8200},items:[]},{teamId:200,spell1Id:14,spell2Id:4,championId:89,profileIconId:4903,summonerName:"Player-200-5",bot:!1,summonerId:"Player-200-5",perks:{perkIds:[8439,8463,8473,8242,8105,8136,5007,5002,5002],perkStyle:8400,perkSubStyle:8100},items:[]}],observers:{encryptionKey:""},platformId:"EUW1",bannedChampions:[],gameStartTime:1632401214798,gameLength:1055},j=n("bc3a"),_=n.n(j),P=[{name:"Cleanse",description:"Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",image:{full:"SummonerBoost.png",sprite:"spell0.png",group:"spell",x:48,y:0,w:48,h:48},cooldownBurn:"210",summonerLevel:9,id:1,key:"SummonerBoost"},{name:"Exhaust",description:"Exhausts target enemy champion, reducing their Movement Speed by 30%, and their damage dealt by 40% for 2.5 seconds.",image:{full:"SummonerExhaust.png",sprite:"spell0.png",group:"spell",x:240,y:0,w:48,h:48},cooldownBurn:"210",summonerLevel:4,id:3,key:"SummonerExhaust"},{name:"Flash",description:"Teleports your champion a short distance toward your cursor's location.",image:{full:"SummonerFlash.png",sprite:"spell0.png",group:"spell",x:288,y:0,w:48,h:48},cooldownBurn:"300",summonerLevel:7,id:4,key:"SummonerFlash"},{name:"Ghost",description:"Your champion gains increased Movement Speed and can move through units for 10 seconds. Grants a maximum of 28-45% (depending on champion level) Movement Speed after accelerating for 2 seconds.",image:{full:"SummonerHaste.png",sprite:"spell0.png",group:"spell",x:336,y:0,w:48,h:48},cooldownBurn:"180",summonerLevel:1,id:6,key:"SummonerHaste"},{name:"Heal",description:"Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",image:{full:"SummonerHeal.png",sprite:"spell0.png",group:"spell",x:384,y:0,w:48,h:48},cooldownBurn:"240",summonerLevel:1,id:7,key:"SummonerHeal"},{name:"Smite",description:"Deals 390-1000 true damage (depending on champion level) to target epic, large, or medium monster or enemy minion. Restores Health based on your maximum life when used against monsters.",image:{full:"SummonerSmite.png",sprite:"spell0.png",group:"spell",x:192,y:48,w:48,h:48},cooldownBurn:"15",summonerLevel:9,id:11,key:"SummonerSmite"},{name:"Teleport",description:"After channeling for 4.5 seconds, teleports your champion to target allied structure, minion, or ward.",image:{full:"SummonerTeleport.png",sprite:"spell0.png",group:"spell",x:288,y:48,w:48,h:48},cooldownBurn:"300",summonerLevel:7,id:12,key:"SummonerTeleport"},{name:"Clarity",description:"Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",image:{full:"SummonerMana.png",sprite:"spell0.png",group:"spell",x:432,y:0,w:48,h:48},cooldownBurn:"240",summonerLevel:6,id:13,key:"SummonerMana"},{name:"Ignite",description:"Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",image:{full:"SummonerDot.png",sprite:"spell0.png",group:"spell",x:192,y:0,w:48,h:48},cooldownBurn:"210",summonerLevel:9,id:14,key:"SummonerDot"},{name:"Barrier",description:"Shields your champion from 115-455 damage (depending on champion level) for 2 seconds.",image:{full:"SummonerBarrier.png",sprite:"spell0.png",group:"spell",x:0,y:0,w:48,h:48},cooldownBurn:"180",summonerLevel:4,id:21,key:"SummonerBarrier"},{name:"To the King!",description:"Quickly travel to the Poro King's side.",image:{full:"SummonerPoroRecall.png",sprite:"spell0.png",group:"spell",x:0,y:48,w:48,h:48},cooldownBurn:"10",summonerLevel:1,id:30,key:"SummonerPoroRecall"},{name:"Poro Toss",description:"Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.",image:{full:"SummonerPoroThrow.png",sprite:"spell0.png",group:"spell",x:48,y:48,w:48,h:48},cooldownBurn:"20",summonerLevel:1,id:31,key:"SummonerPoroThrow"},{name:"Mark",description:"Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",image:{full:"SummonerSnowball.png",sprite:"spell0.png",group:"spell",x:240,y:48,w:48,h:48},cooldownBurn:"80",summonerLevel:6,id:32,key:"SummonerSnowball"},{name:"Nexus Siege: Siege Weapon Slot",description:"In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",image:{full:"SummonerSiegeChampSelect1.png",sprite:"spell0.png",group:"spell",x:96,y:48,w:48,h:48},cooldownBurn:"0",summonerLevel:1,id:33,key:"SummonerSiegeChampSelect1"},{name:"Nexus Siege: Siege Weapon Slot",description:"In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",image:{full:"SummonerSiegeChampSelect2.png",sprite:"spell0.png",group:"spell",x:144,y:48,w:48,h:48},cooldownBurn:"0",summonerLevel:1,id:34,key:"SummonerSiegeChampSelect2"},{name:"Disabled Summoner Spells",description:"Summoner spells are disabled in this mode.",image:{full:"SummonerDarkStarChampSelect1.png",sprite:"spell0.png",group:"spell",x:96,y:0,w:48,h:48},cooldownBurn:"0",summonerLevel:1,id:35,key:"SummonerDarkStarChampSelect1"},{name:"Disabled Summoner Spells",description:"Summoner spells are disabled in this mode.",image:{full:"SummonerDarkStarChampSelect2.png",sprite:"spell0.png",group:"spell",x:144,y:0,w:48,h:48},cooldownBurn:"0",summonerLevel:1,id:36,key:"SummonerDarkStarChampSelect2"}],B=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(d["a"])(this,e),this.useDemoData=n,this.champions={},this.summonerSpells={},this.client=_.a.create({baseURL:"https://lol-tracker-spectator.herokuapp.com/".concat(t)})}return Object(h["a"])(e,[{key:"loadStaticData",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,r,i,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="en_US",e.next=3,_.a.get("https://ddragon.leagueoflegends.com/api/versions.json");case 3:return n=e.sent.data[0],this.champions={},e.next=7,_.a.get("https://ddragon.leagueoflegends.com/cdn/".concat(n,"/data/").concat(t,"/champion.json"));case 7:for(o in a=e.sent.data,a.data)r=a.data[o],this.champions[parseInt(r.key)]={name:r.name,image:"https://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/champion/").concat(r.image.full)};this.summonerSpells={},i=Object(x["a"])(P);try{for(i.s();!(s=i.n()).done;)l=s.value,this.summonerSpells[l.id]={name:l.name,image:"https://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/spell/").concat(l.image.full),cooldown:parseInt(l.cooldownBurn)}}catch(c){i.e(c)}finally{i.f()}case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getChampionByKey",value:function(e){return this.champions[e]}},{key:"getSummonerSpellByKey",value:function(e){return this.summonerSpells[e]}},{key:"getSummonerSpellCooldown",value:function(e,t,n){var a=0;return t.perkIds.includes(8347)&&(a+=18),n.find((function(e){return e.id=3158}))&&(a+=12),Math.ceil(e.cooldown*(100/(a+100)))}},{key:"getSummonerByName",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.useDemoData){e.next=2;break}return e.abrupt("return",C);case 2:return e.next=4,this.client.get("/summoner/v4/summoners/by-name/".concat(encodeURIComponent(t)));case 4:return a=e.sent,e.abrupt("return",null===(n=a.data)||void 0===n?void 0:n.data);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCurrentGameInfo",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.useDemoData){e.next=2;break}return e.abrupt("return",O);case 2:return e.next=4,this.client.get("/spectator/v4/active-games/by-summoner/".concat(encodeURIComponent(t)));case 4:return a=e.sent,o=null===(n=a.data)||void 0===n?void 0:n.data,o.participants=o.participants.map((function(e){return e.items=[],e})),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex relative mb-1 w-max",staticStyle:{height:"min(8rem, 16vh)"}},[n("div",{staticClass:"flex-shrink-0 w-auto"},[n("img",{staticClass:"h-full",attrs:{src:e.api.getChampionByKey(e.participant.championId).image}}),n("div",{staticClass:"absolute bottom-0 pb-1 pl-1 flex w-full pr-16"},[e.participant.perks.perkIds.includes(8326)?n("img",{staticClass:"w-9 rounded-full bg-black inline-block cursor-pointer",attrs:{src:"https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"}}):e._e(),e.participant.perks.perkIds.includes(8347)?n("img",{staticClass:"w-9 rounded-full bg-black inline-block",attrs:{src:"https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"}}):e._e(),n("div",{staticClass:"flex-grow"}),n("img",{staticClass:"w-9 rounded-full bg-black inline-block cursor-pointer",class:{"opacity-60":!e.participant.items.find((function(e){return e.id=3158}))},attrs:{src:"https://ddragon.leagueoflegends.com/cdn/11.19.1/img/item/3158.png"},on:{click:function(t){return e.toggleBoots()}}})])]),n("div",{staticClass:"flex-shrink-0"},[n("SummonerSpell",{attrs:{api:e.api,participant:e.participant,index:1,config:e.config,gameId:e.gameId}}),n("SummonerSpell",{attrs:{api:e.api,participant:e.participant,index:2,config:e.config,gameId:e.gameId}})],1)])},T=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.spell?n("div",{staticClass:"h-1/2 w-full relative cursor-pointer",on:{click:function(t){return e.startCountdown()}}},[n("img",{staticClass:"h-full",class:[e.cooldown>0?"filter grayscale":""],attrs:{src:e.spell.image}}),e.cooldown>0?n("div",{staticClass:"\n      transform\n      text-shadow text-3xl\n      absolute\n      top-1/2\n      -translate-y-1/2\n      w-full\n      text-center\n    ",class:[e.cooldown<=10?"text-red-600":"text-white"]},[e._v(" "+e._s(e.getCooldown())+" ")]):e._e()]):e._e()},M=[],N=function(){function e(){Object(d["a"])(this,e),this.handlers=[],this.timeout=1e3,this.handle=-1}return Object(h["a"])(e,[{key:"add",value:function(e){this.handlers.push(e),this.checkState()}},{key:"remove",value:function(e){var t=this.handlers.indexOf(e);t>=0&&(this.handlers.splice(t,1),this.checkState())}},{key:"checkState",value:function(){var e=this;this.handlers.length>0?-1==this.handle&&(this.handle=setInterval((function(){return e.callback()}),this.timeout)):-1!=this.handle&&(clearInterval(this.handle),this.handle=-1)}},{key:"callback",value:function(){var e,t=Object(x["a"])(this.handlers);try{for(t.s();!(e=t.n()).done;){var n=e.value;n()}}catch(a){t.e(a)}finally{t.f()}}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}(),D=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.call(this),e.spells=[e.api.getSummonerSpellByKey(21),e.api.getSummonerSpellByKey(1),e.api.getSummonerSpellByKey(3),e.api.getSummonerSpellByKey(4),e.api.getSummonerSpellByKey(6),e.api.getSummonerSpellByKey(7),e.api.getSummonerSpellByKey(14),e.api.getSummonerSpellByKey(11),e.api.getSummonerSpellByKey(12)],e.pickerOpen=!1,e.cooldown=0,e.handle=-1,e.pusherChannel=null,e.interval=N.getInstance(),e.spell=e.api.getSummonerSpellByKey(1===e.index?e.participant.spell1Id:e.participant.spell2Id),e}return Object(h["a"])(n,[{key:"mounted",value:function(){var e=this;this.pusherChannel=this.$pusher.subscribe("private-game-"+this.gameId),this.pusherChannel.bind("client-cooldown-".concat(this.participant.summonerId,"-").concat(this.index),(function(t){e.setCooldown(t.data.cooldown)}))}},{key:"unmounted",value:function(){this.pusherChannel&&(this.$pusher.unbind("client-cooldown-".concat(this.participant.summonerId,"-").concat(this.index)),this.pusherChannel=null)}},{key:"getCooldown",value:function(){if(this.config.timeShowMinutes){var e=Math.floor(this.cooldown/60);if(e>0){var t=this.cooldown-60*e;return t<10?"".concat(e,":0").concat(t):"".concat(e,":").concat(t)}}return"".concat(this.cooldown)}},{key:"startCountdown",value:function(){var e=this.api.getSummonerSpellCooldown(this.spell,this.participant.perks,this.participant.items);this.pusherChannel&&this.pusherChannel.trigger("client-cooldown-".concat(this.participant.summonerId,"-").concat(this.index),{event:"cooldown",data:{index:this.index,spellId:1===this.index?this.participant.spell1Id:this.participant.spell2Id,summonerId:this.participant.summonerId,cooldown:e}}),this.setCooldown(e)}},{key:"setCooldown",value:function(e){this.cooldown=e,this.cooldown>0&&this.interval.add(this.cooldownCallback)}},{key:"cooldownCallback",value:function(){this.cooldown--,this.cooldown<=0&&this.interval.remove(this.cooldownCallback)}},{key:"setSpell",value:function(e){this.spell=e}}]),n}(y["d"]);Object(v["a"])([Object(y["b"])()],D.prototype,"index",void 0),Object(v["a"])([Object(y["b"])()],D.prototype,"participant",void 0),Object(v["a"])([Object(y["b"])()],D.prototype,"api",void 0),Object(v["a"])([Object(y["b"])()],D.prototype,"config",void 0),Object(v["a"])([Object(y["b"])()],D.prototype,"gameId",void 0),D=Object(v["a"])([y["a"]],D);var E=D,K=E,R=(n("c834"),Object(i["a"])(K,$,M,!1,null,"427a7b36",null)),G=R.exports,W=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.pusherChannel=null,e}return Object(h["a"])(n,[{key:"mounted",value:function(){var e=this;this.pusherChannel=this.$pusher.subscribe("private-game-"+this.gameId),this.pusherChannel.bind("client-item-".concat(this.participant.summonerId),(function(t){e.participant.items=t}))}},{key:"toggleBoots",value:function(){var e;this.participant.items.find((function(e){return e.id=3158}))?this.participant.items=[]:this.participant.items.push({id:3158,name:"Ionian Boots of Lucidity"}),null===(e=this.pusherChannel)||void 0===e||e.trigger("client-item-".concat(this.participant.summonerId),this.participant.items)}}]),n}(y["d"]);Object(v["a"])([Object(y["b"])()],W.prototype,"participant",void 0),Object(v["a"])([Object(y["b"])()],W.prototype,"api",void 0),Object(v["a"])([Object(y["b"])()],W.prototype,"config",void 0),Object(v["a"])([Object(y["b"])()],W.prototype,"gameId",void 0),W=Object(v["a"])([Object(y["a"])({components:{SummonerSpell:G}})],W);var H=W,q=H,A=Object(i["a"])(q,L,T,!1,null,null,null),U=A.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-6 h-6 cursor-pointer text-center",class:{"opacity-60":!e.syncedChecked},on:{click:function(t){return e.toggle()}}},[n("font-awesome-icon",{attrs:{icon:e.icon,size:"lg"}})],1)},J=[],Q=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(h["a"])(n,[{key:"mounted",value:function(){if(null!=this.settingsKey){var e=localStorage.getItem(this.settingsKey);"1"!==e&&"0"!==e||(this.syncedChecked="1"===e)}}},{key:"toggle",value:function(){var e=this;this.syncedChecked=!this.syncedChecked,this.$nextTick((function(){null!=e.settingsKey&&localStorage.setItem(e.settingsKey,e.syncedChecked?"1":"0")}))}}]),n}(y["d"]);Object(v["a"])([Object(y["c"])("checked",{type:Boolean})],Q.prototype,"syncedChecked",void 0),Object(v["a"])([Object(y["b"])()],Q.prototype,"icon",void 0),Object(v["a"])([Object(y["b"])()],Q.prototype,"settingsKey",void 0),Q=Object(v["a"])([y["a"]],Q);var z=Q,Y=z,V=Object(i["a"])(Y,F,J,!1,null,null,null),X=V.exports,Z=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.api=new B(e.region,e.demoMode),e.loading=!0,e.summoner=null,e.summonerInGame=null,e.game=null,e.enemyTeam=[],e.enableDraggable=!1,e.wakeLock=null,e.config={timeShowMinutes:!0,keepScreenOn:"wakeLock"in navigator},e}return Object(h["a"])(n,[{key:"mounted",value:function(){this.load()}},{key:"load",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.api.getSummonerByName(this.summonerName);case 4:this.summoner=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e["catch"](1),this.$router.push({path:"/",query:{error:"404",region:this.region}}),e.abrupt("return");case 11:return this.isWakelockSupported()&&this.onWakeLockChanged(this.config.keepScreenOn),e.prev=12,e.next=15,this.api.getCurrentGameInfo(this.summoner.id);case 15:this.game=e.sent,e.next=22;break;case 18:return e.prev=18,e.t1=e["catch"](12),this.loading=!1,e.abrupt("return");case 22:return e.next=24,this.api.loadStaticData();case 24:n=this.game.participants.find((function(e){var t;return e.summonerId===(null===(t=r.summoner)||void 0===t?void 0:t.id)})),n&&(this.summonerInGame=n),a=null===(t=this.summonerInGame)||void 0===t?void 0:t.teamId,o=this.game.participants.filter((function(e){return e.teamId!==a})),this.enemyTeam=this.sortPlayers(o),0===this.enemyTeam.length&&(this.game=null),this.loading=!1;case 31:case"end":return e.stop()}}),e,this,[[1,7],[12,18]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"goHome",value:function(){this.$router.push({path:"/",query:{region:this.region}})}},{key:"sortPlayers",value:function(e){var t=new Array(e.length),n=this.findPlayerIndexForSpell(e,12);-1!==n&&(t[0]=e[n],e.splice(n,1)),n=this.findPlayerIndexForSpell(e,12),-1!==n&&(t[2]=e[n],e.splice(n,1)),n=this.findPlayerIndexForSpell(e,11),-1!==n&&(t[1]=e[n],e.splice(n,1)),n=this.findPlayerIndexForSpell(e,7),-1!==n&&(t[3]=e[n],e.splice(n,1));for(var a=0,o=0;o<t.length;o++)t[o]||(t[o]=e[a],a++);return t}},{key:"findPlayerIndexForSpell",value:function(e,t){return e.findIndex((function(e){return e.spell1Id===t||e.spell2Id===t}))}},{key:"isWakelockSupported",value:function(){return"wakeLock"in navigator}},{key:"onWakeLockChanged",value:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return e.prev=1,e.next=4,navigator.wakeLock.request("screen");case 4:this.wakeLock=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](1);case 9:e.next=12;break;case 11:this.wakeLock&&this.wakeLock.release().then((function(){n.wakeLock=null}));case 12:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(y["d"]);Object(v["a"])([Object(y["b"])()],Z.prototype,"summonerName",void 0),Object(v["a"])([Object(y["b"])()],Z.prototype,"region",void 0),Object(v["a"])([Object(y["b"])()],Z.prototype,"demoMode",void 0),Object(v["a"])([Object(y["e"])("config.keepScreenOn")],Z.prototype,"onWakeLockChanged",null),Z=Object(v["a"])([Object(y["a"])({components:{Champion:U,draggable:I.a,IconToggle:X}})],Z);var ee=Z,te=ee,ne=(n("4a79"),Object(i["a"])(te,b,k,!1,null,"111e68e8",null)),ae=ne.exports,oe=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.region="euw1",e.name="",e.error="",e}return Object(h["a"])(n,[{key:"mounted",value:function(){var e;this.error=this.$route.query["error"],this.region=null!==(e=this.$route.query["region"])&&void 0!==e?e:"euw1"}},{key:"submit",value:function(){this.$router.push({path:"game",query:{region:this.region,name:this.name}})}}]),n}(y["d"]);oe=Object(v["a"])([Object(y["a"])({components:{Game:ae}})],oe);var re=oe,ie=re,se=Object(i["a"])(ie,m,p,!1,null,null,null),le=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.region?n("GameComponent",{attrs:{summonerName:e.summonerName,region:e.region,demoMode:e.demoMode}}):n("div",[e._v("Region not set!")])],1)},ue=[],me=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.region="",e.summonerName="",e.demoMode=!1,e}return Object(h["a"])(n,[{key:"mounted",value:function(){this.onRouteChange(this.$route)}},{key:"onRouteChange",value:function(e){this.region=e.query["region"],this.summonerName=e.query["name"],this.demoMode=!!e.query["demo"]}}]),n}(y["d"]);Object(v["a"])([Object(y["e"])("$route")],me.prototype,"onRouteChange",null),me=Object(v["a"])([Object(y["a"])({components:{GameComponent:ae}})],me);var pe=me,de=pe,he=Object(i["a"])(de,ce,ue,!1,null,null,null),ge=he.exports,fe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ve=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],ye={},be=Object(i["a"])(ye,fe,ve,!1,null,null,null),ke=be.exports,Se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},we=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about m-4"},[n("h1",[e._v("Settings")]),n("form",{staticClass:"flex flex-wrap items-stretch"})])}],Ie=function(e){Object(g["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(y["d"]);Ie=Object(v["a"])([y["a"]],Ie);var xe=Ie,Ce=xe,Oe=Object(i["a"])(Ce,Se,we,!1,null,null,null),je=Oe.exports;a["a"].use(u["a"]);var _e=[{path:"/",name:"Home",component:le},{path:"/game",name:"Game",component:ge},{path:"/about",name:"About",component:ke},{path:"/settings",name:"Settings",component:je}],Pe=new u["a"]({routes:_e}),Be=Pe,Le=n("782e"),Te=n.n(Le);function $e(e,t){e.prototype.$pusher=new Te.a(null===t||void 0===t?void 0:t.appKey,null===t||void 0===t?void 0:t.options)}var Me=n("ecee"),Ne=n("c074"),De=n("ad3d");n("ba8c");Me["c"].add(Ne["a"]),Me["c"].add(Ne["c"]),Me["c"].add(Ne["b"]),Me["c"].add(Ne["d"]),a["a"].component("font-awesome-icon",De["a"]),a["a"].config.productionTip=!1,a["a"].use($e,{appKey:"3cc9803efb94cb739cfd",options:{cluster:"eu",authEndpoint:"https://lol-tracker-spectator.herokuapp.com/auth/pusher"}}),new a["a"]({router:Be,render:function(e){return e(c)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.de1fcda1.png"},cf18:function(e,t,n){}});
//# sourceMappingURL=app.5a50a32f.js.map