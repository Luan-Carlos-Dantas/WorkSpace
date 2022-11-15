var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
let body = document.querySelector('body')
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("#navigation")
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
      if(!body.classList.contains('show-menu')){
        body.classList.add('show-menu')
      }else{
        body.classList.remove('show-menu')
      }
    }, false);
  });
}

function screenScroll(){
    if(scrollY > 0){
        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }
}

function closeMenu(){
    if(body.classList.contains('show-menu')){
        body.classList.remove('show-menu')
        hamburger.classList.remove("is-active")
    }
}

const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
      1400:{
        slidesPerView:2,
        setWrapperSize:true
      }
    },
});

swiper.slideNext();
AOS.init();

