"use strict";!function(){function t(e,i){var t=document.querySelector(".header").clientHeight,c=document.querySelector(e).getBoundingClientRect().top-t,u=window.pageYOffset,l=null;requestAnimationFrame(function e(t){var n,o,t=t-(l=null===l?t:l),r=(n=t,o=u,r=c,(n/=i/2)<1?r/2*n*n+o:-r/2*(--n*(n-2)-1)+o);window.scrollTo(0,r),t<i&&requestAnimationFrame(e)})}document.querySelectorAll(".js-scroll").forEach(function(e){e.addEventListener("click",function(){var e=this.getAttribute("href");t(e,1e3)})})}();