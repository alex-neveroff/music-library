"use strict";(self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[]).push([[235],{235:function(t,n,e){e.r(n),e.d(n,{default:function(){return D}});var r,a,i,c,o,s,u,l=e(165),p=e(433),f=e(861),h=e(439),d=e(791),m=e(689),g=e(87),b=e(168),x=e(686),v=x.Z.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  .artist-item {\n    padding-left: 15px;\n  }\n\n  .artist-info {\n    font-size: 24px;\n  }\n"]))),y=e(184),w=function(t){var n=t.artists,e=(0,m.TH)();return(0,y.jsx)(v,{children:n.map((function(t){return(0,y.jsx)("li",{className:"artist-item",children:(0,y.jsx)(g.rU,{to:"".concat(t.id),state:{from:e},children:(0,y.jsxs)("p",{className:"artist-info",children:[t.name," (",t.area?t.area.name:"Unknown",")"]})})},t.id)}))})},Z=e(919),j=x.Z.form(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 600px;\n  background-color: #fff;\n  border-radius: 8px;\n  margin-bottom: 15px;\n\n  .searchbar-button {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border: 0;\n    background-color: transparent;\n    opacity: 0.8;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  .searchbar-input {\n    display: inline-block;\n    width: 100%;\n    height: 50px;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 10px;\n    padding-right: 4px;\n    &::placeholder {\n      font: inherit;\n      font-size: 18px;\n    }\n  }\n"]))),k=["title","titleId"];function O(){return O=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},O.apply(this,arguments)}function S(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function N(t,n){var e=t.title,r=t.titleId,a=S(t,k);return d.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",ref:n,"aria-labelledby":r},a),e?d.createElement("title",{id:r},e):null,i||(i=d.createElement("path",{fill:"#616161",d:"M34.6 28.1H38.6V45.1H34.6z",transform:"rotate(-45.001 36.586 36.587)"})),c||(c=d.createElement("path",{fill:"#616161",d:"M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"})),o||(o=d.createElement("path",{fill:"#37474F",d:"M36.2 32.1H40.2V44.400000000000006H36.2z",transform:"rotate(-45.001 38.24 38.24)"})),s||(s=d.createElement("path",{fill:"#64B5F6",d:"M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"})),u||(u=d.createElement("path",{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"})))}var E=d.forwardRef(N),z=(e.p,function(t){var n=t.onSubmit,e=(0,d.useState)(""),r=(0,h.Z)(e,2),a=r[0],i=r[1];return(0,y.jsxs)(j,{onSubmit:function(t){t.preventDefault(),""!==a?n(a):Z.Notify.warning("Enter artist name")},children:[(0,y.jsx)("button",{type:"submit",className:"searchbar-button",children:(0,y.jsx)(E,{width:"35",height:"35"})}),(0,y.jsx)("input",{className:"searchbar-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search band by name",value:a,onChange:function(t){i(t.currentTarget.value)}})]})}),A=e(390),D=function(){var t=(0,d.useState)(""),n=(0,h.Z)(t,2),e=n[0],r=n[1],a=(0,d.useState)([]),i=(0,h.Z)(a,2),c=i[0],o=i[1];(0,d.useEffect)((function(){if(e){var t=function(){var t=(0,f.Z)((0,l.Z)().mark((function t(){var n,r;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,A.n6)(e);case 3:n=t.sent,r=n.artists,o((0,p.Z)(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Z.Notify.failure(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(z,{onSubmit:function(t){r(t)}}),(0,y.jsx)(w,{artists:c})]})}},390:function(t,n,e){e.d(n,{RK:function(){return u},fT:function(){return s},n6:function(){return o}});var r=e(165),a=e(861),i=e(919),c=e(243),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("http://musicbrainz.org/ws/2/artist/?query=artist:".concat(n,"%20AND%20tag:metal&fmt=json"));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),i.Notify.failure(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var e,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("http://musicbrainz.org/ws/2/artist/".concat(n,"?inc=genres+release-groups&fmt=json"));case 3:return e=t.sent,a=e.data,console.log(a),t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(0),i.Notify.failure(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n,e,a,o,s,u,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date,e=n.getFullYear(),a=n.getMonth().toString().padStart(2,"0"),o=n.getDate().toString().padStart(2,"0"),s="".concat(e,"-").concat(a,"-").concat(o),t.prev=5,t.next=8,c.Z.get('http://musicbrainz.org/ws/2/release-group/?query=tag:("power metal"+OR+"heavy metal")%20AND%20primarytype:album%20AND%20firstreleasedate:['.concat(s," TO *]&fmt=json"));case 8:return u=t.sent,l=u.data,console.log("api: ",l),t.abrupt("return",l);case 14:t.prev=14,t.t0=t.catch(5),i.Notify.failure(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=235.abd65d1b.chunk.js.map