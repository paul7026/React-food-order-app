(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2K7M9",summary:"CartItem_summary__b5VTD",price:"CartItem_price__10jFV",amount:"CartItem_amount__14GUj",actions:"CartItem_actions__2yFlb"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2OeG4",total:"Cart_total__1nucI",actions:"Cart_actions__Dhdnh","button--alt":"Cart_button--alt__1p3yh",button:"Cart_button__1GSyA"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3U5U9",icon:"HeaderCartButton_icon__3EH_a",badge:"HeaderCartButton_badge__2LSWD",bump:"HeaderCartButton_bump___949N"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__7XyIK",modal:"Modal_modal__2L26j","slide-down":"Modal_slide-down__1tIN2"}},function(e,t,n){e.exports={meal:"MealItem_meal__3nPrW",description:"MealItem_description__2jLdm",price:"MealItem_price__3pyFe"}},function(e,t,n){e.exports={header:"Header_header__2_RHQ","main-image":"Header_main-image__11V8X"}},,,,function(e,t,n){e.exports={input:"Input_input__ZSlZb"}},function(e,t,n){e.exports={form:"MealItemForm_form__2C7fD"}},function(e,t,n){e.exports={card:"Card_card__3qasl"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3YY2Q","meals-appear":"AvailableMeals_meals-appear__2vumO"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3ZP9Y"}},,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),r=n(3),i=n(1),s=n.n(i),o=n(2),l=n(4),d=n.n(l),m=n(0),u=function(e){var t=e.price,n=e.name,a=e.amount,c=e.onRemove,r=e.onAdd,i="$".concat(t.toFixed(2));return Object(m.jsxs)("li",{className:d.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:n}),Object(m.jsxs)("div",{className:d.a.summary,children:[Object(m.jsx)("span",{className:d.a.price,children:i}),Object(m.jsxs)("span",{className:d.a.amount,children:["x ",a]})]})]}),Object(m.jsxs)("div",{className:d.a.actions,children:[Object(m.jsx)("button",{onClick:c,children:"\u2212"}),Object(m.jsx)("button",{onClick:r,children:"+"})]})]})},j=n(8),b=n.n(j),O=n(10),x=n.n(O),h=function(e){var t=e.onHideCart;return Object(m.jsx)("div",{className:x.a.backdrop,onClick:t})},p=function(e){return Object(m.jsx)("div",{className:x.a.modal,children:Object(m.jsx)("div",{className:x.a.content,children:e.children})})},_=document.getElementById("overlays");var f=function(e){return Object(m.jsxs)(m.Fragment,{children:[b.a.createPortal(Object(m.jsx)(h,{onHideCart:e.onHideCart}),_),b.a.createPortal(Object(m.jsx)(p,{children:e.children}),_)]})},v=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),C=n(5),N=n.n(C);var g=function(e){var t=e.onHideCart,n=Object(i.useContext)(v),a="$".concat(n.totalAmount.toFixed(2)),c=n.items.length>0,r=function(e){n.removeItem(e)},s=function(e){n.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))};return Object(m.jsxs)(f,{onHideCart:t,children:[Object(m.jsx)("ul",{className:N.a["cart-items"],children:n.items.map((function(e){return Object(m.jsx)(u,{name:e.name,amount:e.amount,price:e.price,onRemove:r.bind(null,e.id),onAdd:s.bind(null,e)},e.id)}))}),Object(m.jsxs)("div",{className:N.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:a})]}),Object(m.jsxs)("div",{className:N.a.actions,children:[Object(m.jsx)("button",{className:N.a["button--alt"],onClick:t,children:"Close"}),c&&Object(m.jsx)("button",{className:N.a.button,children:"Order"})]})]})},y=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},A=n(7),I=n.n(A);var H=function(e){var t=e.onShowCart,n=Object(i.useState)(!1),a=Object(r.a)(n,2),c=a[0],s=a[1],o=Object(i.useContext)(v).items,l=o.reduce((function(e,t){return e+t.amount}),0),d="".concat(I.a.button," ").concat(c?I.a.bump:"");return Object(i.useEffect)((function(){if(0!==o.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(m.jsxs)("button",{className:d,onClick:t,children:[Object(m.jsx)("span",{className:I.a.icon,children:Object(m.jsx)(y,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:I.a.badge,children:l})]})},w=n.p+"static/media/meals.2971f633.jpg",M=n(12),S=n.n(M);var F=function(e){var t=e.onShowCart;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:S.a.header,children:[Object(m.jsx)("h1",{children:"ReactMeals"}),Object(m.jsx)(H,{onShowCart:t})]}),Object(m.jsx)("div",{className:S.a["main-image"],children:Object(m.jsx)("img",{src:w,alt:"A table full of delicios food!"})})]})},k=n(16),D=n.n(k),B=s.a.forwardRef((function(e,t){var n=e.label,a=e.input;return Object(m.jsxs)("div",{className:D.a.input,children:[Object(m.jsx)("label",{htmlFor:a.id,children:n}),Object(m.jsx)("input",Object(o.a)({ref:t},a))]})})),R=n(17),E=n.n(R);var T=function(e){var t=e.onAddToCart,n=Object(i.useRef)(),a=Object(i.useState)(!0),c=Object(r.a)(a,2),s=c[0],o=c[1];return Object(m.jsxs)("form",{className:E.a.form,onSubmit:function(e){e.preventDefault();var a=n.current.value;0===a.trim().length||Number(a)<1||Number(a)>5?o(!1):t(Number(a))},children:[Object(m.jsx)(B,{ref:n,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!s&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},P=n(11),V=n.n(P);var Y=function(e){var t=e.name,n=e.description,a=e.price,c=e.id,r=Object(i.useContext)(v),s="$".concat(a.toFixed(2));return Object(m.jsxs)("li",{className:V.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("div",{className:V.a.description,children:n}),Object(m.jsx)("div",{className:V.a.price,children:s})]}),Object(m.jsx)("div",{children:Object(m.jsx)(T,{onAddToCart:function(e){r.addItem({id:c,name:t,amount:e,price:a})}})})]})},z=n(18),G=n.n(z);var L=function(e){return Object(m.jsx)("div",{className:G.a.card,children:e.children})},U=n(19),Z=n.n(U),$=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];var q=function(){return Object(m.jsx)("section",{className:Z.a.meals,children:Object(m.jsx)(L,{children:Object(m.jsx)("ul",{children:$.map((function(e){return Object(m.jsx)(Y,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}))})})})},J=n(20),K=n.n(J);var Q=function(){return Object(m.jsxs)("section",{className:K.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})};var W=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Q,{}),Object(m.jsx)(q,{})]})},X=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(o.a)(Object(o.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(X.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,l=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[l],m=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(o.a)(Object(o.a)({},d),{},{amount:d.amount-1});(s=Object(X.a)(e.items))[l]=u}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(i.useReducer)(te,ee),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(v.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ne,{children:[n&&Object(m.jsx)(g,{onHideCart:function(){a(!1)}}),Object(m.jsx)(F,{onShowCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(W,{})})]})};n(29);c.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.ef459c40.chunk.js.map