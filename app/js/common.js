$(function() {

  var nextStep1 = document.querySelector('.next1');
  var nextStep2 = document.querySelector('.next2');
  var prevStep2 = document.querySelector('.prev2');
  var constructor1 = document.querySelector('.constructor-step-1');
  var constructor2 = document.querySelector('.constructor-step-2');
  var constructor3 = document.querySelector('.constructor-step-3');
  var constructor4 = document.querySelector('.constructor-step-4');
  
  nextStep1.addEventListener('click', function(){
    if(constructor1.classList.contains('active')){
      constructor2.classList.add('active');
      constructor1.classList.remove('active');
    }
  })
  nextStep2.addEventListener('click', function(){
    if(constructor2.classList.contains('active')){
      constructor3.classList.add('active');
      constructor2.classList.remove('active');
      setTimeout(function() {
        constructor3.classList.remove('active');
        constructor4.classList.add('active');
      }, 3000);
    }
  })
  prevStep2.addEventListener('click', function(){
    if(constructor2.classList.contains('active')){
      constructor1.classList.add('active');
      constructor2.classList.remove('active');
    }
  })
});


// burger
function mobileMenu(){
  var burger = document.querySelector('.burger');
  burger.addEventListener('click', function(){
    if(this.classList.contains('active')){
      this.classList.remove('active');
    }
    else{
      this.classList.add('active');
    }
  })
  var navLinks = document.querySelectorAll('.menu-link');
  for(i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click', function(){
      var burger = document.querySelector('.burger');
      burger.classList.remove('active');
    })
  }
}



window.onload = function(){
  if(window.innerWidth < 767){
    mobileMenu();
  }
}