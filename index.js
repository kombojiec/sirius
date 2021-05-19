document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";

  // ==========  Slider ===========>

  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  // =============== Menu ===============>

  const menu = document.querySelector('.header');
  const menuButton = menu.querySelector('.header__menu');

  menuButton.addEventListener('click', () => {
    // menu.classList.toggle('opened');
    if(menu.classList.contains('opened')){
      closeMenu();
    }else{
      menu.classList.add('opened')
      menu.style.right = '0';
      menuButton.style.background = 'center/contain no-repeat url(./images/close.svg)';
    }
  })
  
  if(document.documentElement.clientWidth <= 990){   
    document.addEventListener('click', event => {
      if(!event.target.closest('header')){
        closeMenu();
      }
    })
  }
  
  function closeMenu(){
    menu.style.right = '-27rem';
    menuButton.style.background = 'center/contain no-repeat url(./images/burger.svg)';
    menu.classList.remove('opened')
  }


  // <<============== document's end =================>>
});