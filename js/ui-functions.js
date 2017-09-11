$(function(){

  //---- FUNÇÕES SCROLL-----
  //evento de navegação do menu - scroll suave
  $(".menu-links li a, #btn-contact").on("click", (event) => {
    event.preventDefault();
          
      let target = $(event.target).attr("href");        
      let target_pos = $(target).offset().top;
      
    //animação do scroll
      $("html, body").animate({    
        scrollTop: target_pos - 25,
      }, 500);
          
  });

  // colocando background no menu dependendo da posição do scroll
  $(window).on('scroll', () => {
    //posição do menu
    let menu_pos = $(".menu-bg").offset().top;
    if(menu_pos > 100){
      $(".menu-bg").css({
        backgroundColor: 'rgba(17, 17, 17, .8)'
      })
      
    } else {
      $(".menu-bg").css({
        backgroundColor: 'transparent'
      })    
    }  
  });
  
  //----- FUNÇÕES MENU ------
  //Evento click do menu hamburguer
  $("#btn-responsive-menu").on("click", (event)=> {
    event.preventDefault();
    $(".menu-links").toggleClass("menu-active"); 
  });

  //fechando menu-responsivo ao click de um link
  $(".menu-links a").on("click", () => {
    $(".menu-links").removeClass("menu-active"); 
  });

});


