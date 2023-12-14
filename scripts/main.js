const swiper = new Swiper(".swiper", {
   
    effect: "fade",
    loop: true,
    keyboard: {
        enabled: true,
      },
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },    
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },  
  });

const mainBtn = document.querySelector('.top__link');

console.log(mainBtn)

mainBtn.addEventListener('mouseenter', ()=>{

  mainBtn.classList.remove('active')
})

mainBtn.addEventListener('mouseleave', ()=>{
  mainBtn.classList.add('active')
})
  
