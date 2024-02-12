let hamburger=document.querySelector(".hamburger");
hamburger.onclick = function () {
let navBar=document.querySelector(".nav-bar1");
navBar.classList.toggle("active");
}

// swiper js for products 

let swiperCard = new Swiper('.card--content', {

    loop: true,
    spaceBetween:32,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  breakPoints:{
600:{
    slidesPerView:2,
},
968:{
    slidesPerView:3,

},
  },
  });

  // email js


function sendMsg(e){
  e.preventDefault();
  const form=document.querySelector(".contact_form");
const name=document.querySelector("#name");
const email=document.querySelector("#email");
const phone=document.querySelector("#phone");
const message=document.querySelector("#message");



  Email.send({
      SecureToken:"2E7D3D1DB840C5DF924867AEEB21D70D8F85",
    To : "hossinkubba969@gmail.com",
    From : email,
    Subject : "Contact Form ",
    Body : phone.value + message.value
}).then(
  message => alert("شكرا لك , لقد تم الارسال")
);

}
const form=document.querySelector(".contact_form");

form.addEventListener("submit",sendMsg);