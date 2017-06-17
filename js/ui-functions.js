$(function(){
    //realizando animação em caso de refresh
    var scroll_pos = $(window).scrollTop();
    animate(scroll_pos);
    
    //Evento botão do menu responsivo
    $("#btn-responsive-menu").on("click", function(event){
       event.preventDefault();
       $(".menu-links").toggleClass("menu-responsive-active"); 
    });
    
    //evento de navegação do menu - scroll suave
    $(".menu-links li a, .btn-contact").on("click", function(event){
        event.preventDefault();
        
        var target = $(this).attr("href");
        
        var target_pos = $(target).offset().top;
        
        $("html, body").animate({
           scrollTop: target_pos - 65,
        }, 500);
        
    })    
    
    //animação fade com scroll
    //apenas em telas grandes    
    if($(window).width() > 960){
       
      $(window).on("scroll", function(){
         var scroll_pos = $(window).scrollTop();
         animate(scroll_pos);
         
      })
    }   
})

//anima os elementos
function animate(scroll_pos){
    $(".anime").each(function(){
        var object_pos = $(this).offset().top - 500;
        if(object_pos < scroll_pos){
            $(this).addClass("anime-init");    
        }
    });
}
