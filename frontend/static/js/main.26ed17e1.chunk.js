(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),s=n(18),i=n.n(s),r=(n(30),n(22)),l=n(2),u=n(3),p=n(8),d=n.p+"static/media/logo.a307e1c4.svg";var j=function(e){var t=e.loggedIn,n=e.onSignOut,o=e.userData,c=e.loginState,s=o?o.email:"";return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:d,alt:"logo"}),t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:"header__nav",children:Object(a.jsxs)("ul",{className:"header__list header__list_main",children:[Object(a.jsx)("li",{className:"header__list-item header__list-item_main",children:s}),Object(a.jsx)("li",{onClick:n,className:"header__list-link",children:"\u0412\u044b\u0439\u0442\u0438"})]})})}):Object(a.jsx)(p.b,{to:c?"/sign-in":"/sign-up",className:"header__list-link",children:c?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},m=c.a.createContext();function f(e){var t=c.a.useContext(m),n=e.card.owner===t._id,o="button button_type_delete ".concat(n?"":"button_type_delete_invisible"),s=e.card.likes.some((function(e){return e===t._id})),i="button button_type_like ".concat(s?"button_type_like-liked":"");return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("button",{className:o,onClick:function(){e.onCardDelete(e.card)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(a.jsx)("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(a.jsxs)("div",{className:"card__description",children:[Object(a.jsx)("h2",{className:"card__title",children:e.card.name}),Object(a.jsxs)("div",{className:"card__like",children:[Object(a.jsx)("button",{className:i,onClick:function(){e.onCardLike(e.card)},type:"button","aria-label":"\u041b\u0430\u0439\u043a\u043d\u0443\u0442\u044c"}),Object(a.jsx)("div",{className:"card__like-counter",children:e.card.likes.length})]})]})]},e.card._id)}function b(e){var t=c.a.useContext(m);return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__author",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__image",src:t.avatar,alt:t.name,name:"avatar"}),Object(a.jsx)("button",{className:"button button_type_avatar",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__text",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{className:"button button_type_edit",type:"button",id:"close-edit","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]})]}),Object(a.jsx)("button",{className:"button button_type_add",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:e.onAddPlace})]}),Object(a.jsx)("div",{className:"cards",children:Object(a.jsx)("ul",{className:"card-list main__card-list",children:e.cards&&e.cards.map((function(t){return Object(a.jsx)(f,{card:t,onCardClick:e.clickImages,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function h(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})}function _(e){return Object(a.jsx)("section",{className:"popup popup-image ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container popup-image__container",children:[Object(a.jsx)("button",{onClick:e.onClose,className:"button button_type_close",id:"close-image",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(a.jsxs)("figure",{className:"figure-place",children:[Object(a.jsx)("img",{className:"figure-place__image",src:e.card.link,alt:e.card.name}),Object(a.jsx)("figcaption",{className:"figure-place__image-caption",children:e.card.name})]})]})})}function O(e){return Object(a.jsx)("div",{className:e.isOpen?"popup popup_opened":"popup",id:e.name,children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"button button_type_close",type:"button",id:"close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(a.jsxs)("form",{className:"popup__form",id:e.form,onSubmit:e.onSubmit,name:"form-info",method:"post",children:[Object(a.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{className:e.disabled?"button button_type_save_inactive":"button button_type_save",type:"submit",disabled:e.disabled,children:e.submit})]})]})})}function g(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],s=n[1],i=c.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return c.a.useEffect((function(){s(""),p("")}),[e.isOpen]),Object(a.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",form:"place-form",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:o,link:u})},children:[Object(a.jsx)("input",{className:"popup__form-input",type:"text",id:"input-place",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"1",maxLength:"30",onChange:function(e){s(e.target.value)},value:o||""}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-place-error"}),Object(a.jsx)("input",{className:"popup__form-input",type:"url",id:"input-link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",onChange:function(e){p(e.target.value)},value:u||""}),Object(a.jsx)("span",{className:"popup__span-error popup__place-span-error",id:"input-link-error"})]})}function x(e){return Object(a.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",form:"delete-place",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onDelete(e.card)}})}function v(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],s=n[1];return c.a.useEffect((function(){s("")}),[e.isOpen]),Object(a.jsxs)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",form:"form-avatar",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:o})},children:[Object(a.jsx)("input",{className:"popup__form-input",type:"url",id:"avatar-link","aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,value:o||"",onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"avatar-link-error"}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-profession-error"})]})}function N(e){var t=c.a.useContext(m),n=c.a.useState(""),o=Object(l.a)(n,2),s=o[0],i=o[1],r=c.a.useState(""),u=Object(l.a)(r,2),p=u[0],d=u[1];return c.a.useEffect((function(){i(t.name),d(t.about)}),[t,e.isOpen]),Object(a.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",form:"name-form",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:[Object(a.jsx)("input",{className:"popup__form-input",type:"text",id:"input-name",required:!0,placeholder:"\u0418\u043c\u044f",name:"name",minLength:"2",maxLength:"40",value:s||"",onChange:function(e){i(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-name-error"}),Object(a.jsx)("input",{className:"popup__form-input",type:"text",id:"input-profession",required:!0,placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",name:"about",minLength:"2",maxLength:"200",value:p||"",onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-profession-error"})]})}var C=n.p+"static/media/Union.df8eddf6.svg",k=n.p+"static/media/Union-1.1b6082f8.svg";var y=function(e){var t=e.isOpen,n=e.onClose,o=e.successStyle,c={backgroundImage:"url("+C+")"},s={backgroundImage:"url("+k+")"};return Object(a.jsx)("section",{className:t?"popup popup_opened":"popup",id:"InfoTooltip",children:Object(a.jsxs)("form",{className:"popup__container popup__tip",children:[Object(a.jsx)("button",{onClick:n,className:"button button_type_close",id:"formError-close",type:"button"}),Object(a.jsx)("div",{className:"popup__image popup__image_login",style:o?s:c}),Object(a.jsx)("h2",{className:"popup__title infotooltip-title",children:o?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})};function S(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],s=n[1],i=c.a.useState(""),r=Object(l.a)(i,2),d=r[0],j=r[1],m=e.onLogin,f=e.onLoginState,b=Object(u.g)();return c.a.useEffect((function(){f(!1)}),[f]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"popup popup__login",children:Object(a.jsxs)("div",{className:"popup__container popup__container_login",children:[Object(a.jsx)("h1",{className:"popup__title popup__title_login",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"popup__form popup__form_login",onSubmit:function(e){e.preventDefault(),o&&d&&m({email:o,password:d}).then((function(){b.push("/")})).catch((function(e){console.log(e)}))},noValidate:!0,children:[Object(a.jsx)("input",{className:"popup__form-input popup__form-input_login",type:"text",id:"input-name",required:!0,placeholder:"Email",name:"email",minLength:"2",maxLength:"40",value:o||"",onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-name-error"}),Object(a.jsx)("input",{className:"popup__form-input popup__form-input_login",autoComplete:"off",type:"password",id:"input-password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"2",maxLength:"200",value:d||"",onChange:function(e){j(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-profession-error"}),Object(a.jsx)("button",{className:"button button_type_login",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(a.jsxs)("p",{className:"login__text",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(a.jsxs)(p.b,{to:"/sign-up",className:"login__link",children:[" ","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"]})]})]})})})}function w(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],s=n[1],i=c.a.useState(""),r=Object(l.a)(i,2),u=r[0],d=r[1],j=e.onRegister,m=e.onLoginState;return c.a.useEffect((function(){m(!0)}),[m]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"popup popup__login",children:Object(a.jsxs)("div",{className:"popup__container popup__container_login",children:[Object(a.jsx)("h1",{className:"popup__title popup__title_login",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"popup__form popup__form_login",onSubmit:function(e){e.preventDefault(),j({email:o,password:u})},noValidate:!0,children:[Object(a.jsx)("input",{className:"popup__form-input popup__form-input_login",autoComplete:"off",type:"text",id:"input-name",required:!0,placeholder:"Email",name:"email",minLength:"2",maxLength:"40",value:o||"",onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-name-error"}),Object(a.jsx)("input",{className:"popup__form-input popup__form-input_login",autoComplete:"off",type:"text",id:"input-profession",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"2",maxLength:"200",value:u||"",onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{className:"popup__span-error",id:"input-profession-error"}),Object(a.jsx)("button",{className:"button button_type_login",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(a.jsxs)("p",{className:"login__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(a.jsxs)(p.b,{to:"sign-in",className:"login__link",children:[" ","\u0412\u043e\u0439\u0442\u0438"]})]})]})})})}var E=n(23),L=n(24),T=function(e){var t=e.component,n=Object(L.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(E.a)({},n)):Object(a.jsx)(u.a,{to:"./sign-in"})}})},P="http://localhost:3000",A=n(20),I=n(21),D=new(function(){function e(t){var n=t.baseUrl;t.headers;Object(A.a)(this,e),this._url=n}return Object(I.a)(e,[{key:"getUserInform",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCards",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateProfileInfo",value:function(e,t,n){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createNewCard",value:function(e,t,n){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e,t){return console.log(e),fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCard",value:function(e,t,n){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"".concat(t?"PUT":"DELETE"),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e,t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"http://localhost:3000",headers:{"Content-Type":"application/json"}});var U=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],s=c.a.useState(!1),i=Object(l.a)(s,2),p=i[0],d=i[1],f=c.a.useState({}),O=Object(l.a)(f,2),C=O[0],k=O[1],E=c.a.useState(!1),L=Object(l.a)(E,2),A=L[0],I=L[1],U=c.a.useState(!1),B=Object(l.a)(U,2),q=B[0],z=B[1],F=Object(u.g)(),J=c.a.useState(!1),G=Object(l.a)(J,2),R=G[0],H=G[1],M=c.a.useState(!1),V=Object(l.a)(M,2),K=V[0],Q=V[1],W=c.a.useState(!1),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState({}),oe=Object(l.a)(ae,2),ce=oe[0],se=oe[1],ie=c.a.useState(!1),re=Object(l.a)(ie,2),le=re[0],ue=re[1],pe=c.a.useState([]),de=Object(l.a)(pe,2),je=de[0],me=de[1],fe=c.a.useState({}),be=Object(l.a)(fe,2),he=be[0],_e=be[1],Oe=c.a.useState({}),ge=Object(l.a)(Oe,2),xe=ge[0],ve=ge[1];function Ne(){ue(!0)}function Ce(){Z(!1),H(!1),Q(!1),ue(!1),ve({}),ne(!1),I(!1),z(!1)}function ke(e){"Escape"===e.key&&Ce()}function ye(e){e.target.classList.contains("popup")&&Ce()}function Se(){z(!0)}function we(){I(!0)}function Ee(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(P,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){if(200===e.status)return e.json();if(400===e.status)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.status)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")})).then((function(e){return e})).catch((function(e){return console.log(e),Promise.reject(e)}))).then((function(e){e?(k({id:e._id,email:e.email}),o(!0),F.push("/")):localStorage.removeItem("jwt")})).catch((function(e){console.log(e),F.push("/sign-in")}))}function Le(e){d(e)}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");Promise.all([D.getUserInform(e),D.getCards(e)]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];_e(n),me(a.reverse())})).catch((function(e){console.log(e)}))}),[n]),c.a.useEffect((function(){return window.addEventListener("keydown",ke),window.addEventListener("mousedown",ye),function(){window.removeEventListener("mousedown",ye),window.removeEventListener("keydown",ke)}})),c.a.useEffect((function(){Ee()}),[n]),Object(a.jsx)(m.Provider,{value:he,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(j,{loggedIn:n,loginState:p,onSignOut:function(){localStorage.removeItem("jwt"),o(!1),F.push("/sign-in")},userData:C}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(T,{exact:!0,path:"/",loggedIn:n,component:b,cards:je,onEditProfile:function(){H(!0)},onAddPlace:function(){Q(!0)},onEditAvatar:function(){Z(!0)},onCardClick:Ne,clickImages:function(e){ve(e),Ne()},onCardDelete:function(e){console.log(e),se(e),ne(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e===he._id}));D.changeLikeCard(e._id,!t,localStorage.getItem("jwt")).then((function(t){var n=je.map((function(n){return n._id===e._id?t:n}));me(n)})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(u.b,{path:"/sign-up",children:Object(a.jsx)(w,{onRegister:function(e){return function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(400!==e.status)return e.json();throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")})).then((function(e){return e})).catch((function(e){return console.log(e),Promise.reject(e)}))}(e.email,e.password).then((function(e){if(!e)throw new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e");Se(),setTimeout(we,500),F.push("/sign-in")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e)),we()}))},onLoginState:Le,openToolTip:we,successToolTip:Se})}),Object(a.jsx)(u.b,{path:"/sign-in",children:Object(a.jsx)(S,{onLogin:function(e){return function(e,t){return fetch("".concat(P,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(200===e.status)return e.json();if(400===e.status)throw new Error("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new Error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e),Promise.reject(e)}))}(e.email,e.password).then((function(e){if(!e||!e.token)throw new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442");localStorage.setItem("jwt",e.token),o(!0),F.push("/")})).catch((function(e){console.log(e),we()}))},onLoginState:Le,successToolTip:Se})}),Object(a.jsx)(u.b,{children:n?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsx)(u.a,{to:"/sign-in"})})]}),Object(a.jsx)(h,{}),Object(a.jsx)(N,{isOpen:R,onClose:Ce,onUpdateUser:function(e){D.updateProfileInfo(e.name,e.about,localStorage.getItem("jwt")).then((function(e){_e(e),Ce()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(g,{isOpen:K,onClose:Ce,onAddPlace:function(e){D.createNewCard(e.name,e.link,localStorage.getItem("jwt")).then((function(e){me([e].concat(Object(r.a)(je))),Ce()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(v,{isOpen:Y,onClose:Ce,onUpdateAvatar:function(e){D.updateAvatar(e.avatar,localStorage.getItem("jwt")).then((function(e){_e(e),Ce()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(x,{isOpen:te,onClose:Ce,onDelete:function(e){D.deleteCard(e._id,localStorage.getItem("jwt")).then((function(){var t=je.filter((function(t){return t._id!==e._id}));me(t),Ce()})).catch((function(e){console.log(e)}))},card:ce}),Object(a.jsx)(_,{onClose:Ce,isOpen:le,card:xe}),Object(a.jsx)(y,{isOpen:A,onClose:Ce,successStyle:q})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(U,{})})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.26ed17e1.chunk.js.map