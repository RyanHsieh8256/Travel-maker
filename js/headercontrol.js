
$(document).ready(function(){
let beforeScroll=0,afterScroll=0;
    $(window).scroll(function(){
        let mainNav = document.getElementById('mainNav');
        afterScroll = $(this).scrollTop();
        if(beforeScroll<afterScroll){
            mainNav.style.top = '100%';
        }else{
            mainNav.style.top = '0';           
        }
        console.log(beforeScroll,afterScroll);
        beforeScroll = afterScroll;
    })
});