const navSlide=() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
      //toogle Nav
      nav.classList.toggle('nav-active');
    
      //animate Lines
      navLinks.forEach((link,index) => {
          if(link.style.animation){
              link.style.animation ='';
          } else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
          }
      });
      // burger animation
      burger.classList.toggle('toggle');
    });

}  
navSlide();