//evento de navegação do menu - scroll suave
$(".menu-links li a, #btn-contact").on("click", function(event){
  event.preventDefault();
        
     var target = $(this).attr("href");        
     var target_pos = $(target).offset().top;
    
  //animação do scroll
    $("html, body").animate({    
      scrollTop: target_pos - 25,
    }, 500);
        
});

//Evento click do menu hamburguer
$("#btn-responsive-menu").on("click", function(event){
  event.preventDefault();
  $(".menu-links").toggleClass("menu-active"); 
});

// colocando background no menu fixo dependendo da posição do scroll

$(window).on('scroll', function(){
  //posição do menu
  var menu_pos = $(".menu-bg").offset().top;
  if(menu_pos > 100){
    $(".menu-bg").css({
      backgroundColor: 'rgba(0,0,0, .9)'
    })
    
  } else {
    $(".menu-bg").css({
      backgroundColor: 'transparent'
    })
    
  }
  
});
