(this.webpackJsonphopedealer=this.webpackJsonphopedealer||[]).push([[55],{134:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return i}));var o=n(12),i=function(t){var e,n,i,f,v=10*-l,p=0,h=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=function(t){v=Object(o.o)(t),w(t)},E=function(){clearTimeout(f),f=void 0,n&&(O(!1),n=void 0)},b=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},w=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(f),f=void 0;var i=Object(o.p)(e),a=i.x,c=i.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),O(!0)}if(t){var u=L.get(t);u&&(clearTimeout(u),L.delete(t));var l=r(t)?0:d;t.classList.remove(s),f=setTimeout((function(){T(t,a,c),f=void 0}),l)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var o=h&&c(t);o&&o.addRipple&&(j(),i=o.addRipple(e,n))},j=function(){void 0!==i&&(i.then((function(t){return t()})),i=void 0)},O=function(t){j();var e=n;if(e){var o=u-Date.now()+p;if(t&&o>0&&!r(e)){var i=setTimeout((function(){e.classList.remove(s),L.delete(e)}),u);L.set(e,i)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),S.addEventListener("ionScrollEnd",(function(){e=void 0})),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",(function(t){v=Object(o.o)(t),b(t)}),!0),S.addEventListener("touchcancel",m,!0),S.addEventListener("touchend",m,!0),S.addEventListener("mousedown",(function(t){var e=Object(o.o)(t)-l;v<e&&b(t)}),!0),S.addEventListener("mouseup",(function(t){var e=Object(o.o)(t)-l;v<e&&w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(o.classList&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",d=200,u=200,l=2500}}]);
//# sourceMappingURL=55.ea27b5e5.chunk.js.map