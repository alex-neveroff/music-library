"use strict";(self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[]).push([[788],{788:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,a=n(791),s=n(184),c=function(){return(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Last Releases of Power Metal"}),(0,s.jsx)("ul",{})]})},i=n(165),o=n(861),u=n(439),p=n(919),l=n(390),f=n(168),x=n(686).Z.section(r||(r=(0,f.Z)(["\n  .pageTitle {\n    text-transform: uppercase;\n    text-align: center;\n  }\n  .homeList {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    margin-bottom: 40px;\n  }\n  .homeList-item {\n    cursor: pointer;\n    border-radius: 5px;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    width: calc((100% - 64px) / 5);\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n      1px 4px 6px rgba(0, 0, 0, 0.16);\n    overflow: hidden;\n    background-color: #fff;\n\n    &:active {\n      transform: scale(0.97);\n      box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.16),\n        15px 15px 15px rgba(0, 0, 0, 0.16), 15px -15px 15px rgba(0, 0, 0, 0.16),\n        -15px 15px 15px rgba(0, 0, 0, 0.16);\n    }\n\n    &:hover {\n      &:hover {\n        transform: scale(1.03);\n      }\n    }\n  }\n\n  .album-title {\n    text-transform: uppercase;\n    margin-bottom: 7px;\n    font-size: 16px;\n    line-height: 1.16;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding-left: 5px;\n  }\n  .album-data {\n    margin-bottom: 7px;\n    font-size: 16px;\n    line-height: 1.16;\n    padding-left: 5px;\n  }\n"]))),m=function(){var e=(0,a.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1];return console.log("releases",n),(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.RK)();case 3:t=e.sent,r(t["release-groups"]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p.Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.jsxs)(x,{children:[(0,s.jsx)("h2",{className:"pageTitle",children:"Nearest Releases of power metal"}),(0,s.jsx)("ul",{className:"homeList",children:n.filter((function(e){return e["first-release-date"].includes("-")})).map((function(e){var t=e.tags.filter((function(e){return"metal"!==e.name&&"rock"!==e.name})).map((function(e){return e.name}));return(0,s.jsxs)("li",{className:"homeList-item",children:[(0,s.jsx)("h3",{className:"album-title",children:e.title}),(0,s.jsx)("p",{className:"album-data",children:e["first-release-date"]}),(0,s.jsx)("p",{className:"album-data",children:e["artist-credit"][0].name}),(0,s.jsx)("p",{className:"album-data",children:t.join(", ")})]},e.id)}))})]})},h=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(m,{}),(0,s.jsx)(c,{})]})}},390:function(e,t,n){n.d(t,{RK:function(){return u},fT:function(){return o},n6:function(){return i}});var r=n(165),a=n(861),s=n(919),c=n(243),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("http://musicbrainz.org/ws/2/artist/?query=artist:".concat(t,"%20AND%20tag:metal&fmt=json"));case 3:return n=e.sent,a=n.data,console.log(a),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),s.Notify.failure(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("http://musicbrainz.org/ws/2/artist/".concat(t,"?inc=genres+release-groups&fmt=json"));case 3:return n=e.sent,a=n.data,console.log(a),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),s.Notify.failure(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,i,o,u,p;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.getFullYear(),a=t.getMonth().toString().padStart(2,"0"),i=t.getDate().toString().padStart(2,"0"),o="".concat(n,"-").concat(a,"-").concat(i),e.prev=5,e.next=8,c.Z.get('http://musicbrainz.org/ws/2/release-group/?query=tag:("power metal"+OR+"heavy metal")%20AND%20primarytype:album%20AND%20firstreleasedate:['.concat(o," TO *]&fmt=json"));case 8:return u=e.sent,p=u.data,e.abrupt("return",p);case 13:e.prev=13,e.t0=e.catch(5),s.Notify.failure(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=788.131f2df9.chunk.js.map