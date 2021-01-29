$(document).ready(function(){
    
})
$(window).scroll(function(){
    if(scrollY > 150){
        $('header').addClass('navbar_fixed')
    }else{
        $('header').removeClass('navbar_fixed')
    }
})