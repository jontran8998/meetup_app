(this["webpackJsonpmeetup-app"]=this["webpackJsonpmeetup-app"]||[]).push([[0],{12:function(e,t,i){e.exports={item:"MeetupItem_item__3L-zw",image:"MeetupItem_image__1MJbn",content:"MeetupItem_content__HoPEK",actions:"MeetupItem_actions__brehY"}},13:function(e,t,i){e.exports={header:"MainNavigation_header__38-hM",logo:"MainNavigation_logo__xQP1Y",active:"MainNavigation_active__IaTfC",badge:"MainNavigation_badge__24Aak"}},18:function(e,t,i){e.exports={card:"Card_card__keuYO"}},19:function(e,t,i){e.exports={list:"MeetupList_list__2sJ1E"}},22:function(e,t,i){e.exports={main:"Layout_main__1rV0X"}},28:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var c=i(1),r=i(17),n=i.n(r),s=i(7),a=(i(28),i(2)),o=i(23),d=i(11),j=i(18),l=i.n(j),u=i(0);var b=function(e){return Object(u.jsx)("div",{className:l.a.card,children:e.children})},h=i(12),O=i.n(h),x=Object(c.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=Object(c.useState)([]),i=Object(d.a)(t,2),r=i[0],n=i[1];var s={favorites:r,totalFavorites:r.length,addFavorite:function(e){n((function(t){return t.concat(e)}))},removeFavorite:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return r.some((function(t){return t.id===e}))}};return Object(u.jsx)(x.Provider,{value:s,children:e.children})}var v=x;var p=function(e){var t=Object(c.useContext)(v),i=t.itemIsFavorite(e.id);return Object(u.jsx)("li",{className:O.a.item,children:Object(u.jsxs)(b,{children:[Object(u.jsx)("img",{className:O.a.image,src:e.image,alt:e.title}),Object(u.jsxs)("div",{className:O.a.content,children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("address",{children:e.address}),Object(u.jsx)("p",{children:e.description}),Object(u.jsx)("div",{className:O.a.actions,children:Object(u.jsx)("button",{onClick:function(){i?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,address:e.address,description:e.description,image:e.image})},children:i?"Remove Favorite":"Add to Favorite"})})]})]})})},f=i(19),_=i.n(f);var g=function(e){return Object(u.jsx)("ul",{className:_.a.list,children:e.meetups.map((function(e){return Object(u.jsx)(p,{id:e.id,title:e.title,image:e.image,addreess:e.address,description:e.description},e.id)}))})};var N=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),i=t[0],r=t[1],n=Object(c.useState)([]),s=Object(d.a)(n,2),a=s[0],j=s[1];return Object(c.useEffect)((function(){r(!0),fetch("https://react-getting-started-1b697-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var i in e){var c=Object(o.a)({id:i},e[i]);t.push(c)}r(!1),j(t)}))}),[]),i?Object(u.jsx)("div",{children:".... is loading"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"All Meetups"}),Object(u.jsx)(g,{meetups:a})]})},F=i(9),M=i.n(F);var w=function(e){var t=Object(c.useRef)(),i=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(c.useRef)();return Object(u.jsx)(b,{children:Object(u.jsx)("section",{children:Object(u.jsxs)("form",{className:M.a.form,onSubmit:function(c){c.preventDefault();var s={title:t.current.value,image:i.current.value,address:r.current.value,description:n.current.value};e.addNewMeetup(s)},children:[Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title"}),Object(u.jsx)("input",{type:"text",id:"title",required:!0,ref:t})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"image",children:"Image"}),Object(u.jsx)("input",{type:"url",id:"image",required:!0,ref:i})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"address",children:"Address"}),Object(u.jsx)("input",{type:"text",id:"address",required:!0,ref:r})]}),Object(u.jsxs)("div",{className:M.a.control,children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",{id:"description",rows:"5",required:!0,ref:n})]}),Object(u.jsx)("div",{className:M.a.actions,children:Object(u.jsx)("button",{children:"Add Meetup"})})]})})})};var I=function(){var e=Object(a.f)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"New Meetup Form"}),Object(u.jsx)(w,{addNewMeetup:function(t){fetch("https://react-getting-started-1b697-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var y=function(){var e=Object(c.useContext)(v);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Favorite Meetup"}),Object(u.jsx)(g,{meetups:e.favorites})]})},C=i(13),A=i.n(C);var R=function(){var e=Object(c.useContext)(v);return Object(u.jsxs)("header",{className:A.a.header,children:[Object(u.jsx)("h1",{className:A.a.logo,children:"React Meetups"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"All Meet up"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/new-meetup",children:"New Meetup"})}),Object(u.jsx)("li",{children:Object(u.jsxs)(s.b,{to:"/favorites",children:["Favorites"," ",Object(u.jsx)("span",{className:A.a.badge,children:e.totalFavorites})]})})]})]})},S=i(22),k=i.n(S);var J=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(R,{}),Object(u.jsx)("main",{className:k.a.main,children:e.children})]})};var P=function(){return Object(u.jsx)(J,{children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/new-meetup",children:Object(u.jsx)(I,{})}),Object(u.jsx)(a.a,{path:"/favorites",children:Object(u.jsx)(y,{})}),Object(u.jsx)(a.a,{path:"/",children:Object(u.jsx)(N,{})})]})})};n.a.render(Object(u.jsx)(m,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(P,{})})}),document.getElementById("root"))},9:function(e,t,i){e.exports={form:"NewMeetupForm_form__2iPlK",control:"NewMeetupForm_control__1xoLo",actions:"NewMeetupForm_actions__VDpTY"}}},[[38,1,2]]]);
//# sourceMappingURL=main.16442dfb.chunk.js.map