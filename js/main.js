

$(document).ready(function(){

    let sidebarinnerWidth = $(".sideBar-inner").innerWidth();
    $("#sideBar").animate({left : - sidebarinnerWidth},1);
    

    $(".spinner").fadeOut(1000,function(){
        $("#loading").fadeOut(1000,function(){
            $("body").css('overflow' , 'auto');
            $("#loading").remove();
        })
    })
    
let sectionOffset = $(".about").offset().top;

$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    if(windowScroll > sectionOffset - 50){
        $(".navbar").css('backgroundColor' , 'rgba(0,0,0,0.7)');
        $("#btnUp").fadeIn(100);
    }
    else{
        $(".navbar").css('backgroundColor' , 'transparent');
        $("#btnUp").fadeOut(100);
    }
})


$("a[href^='#']").click(function(e){
    let aHref = e.target.getAttribute('href');
    let sectionOffset = $(aHref).offset().top;
    $("html , body").animate( {scrollTop:sectionOffset} , 100);

});
$("#btnUp").click(function(){
    $("html ,body").animate({scrollTop : 0},100);

})

    let colorBox = $(".color-box")
    colorBox.eq(0).css("backgroundColor" , "#90c");
    colorBox.eq(1).css("backgroundColor" , "teal");
    colorBox.eq(2).css("backgroundColor" , "orange");
    colorBox.eq(3).css("backgroundColor" , "#888");
    colorBox.eq(4).css("backgroundColor" , "lightgreen");
    colorBox.eq(5).css("backgroundColor" , "white");


    colorBox.click(function(e){
        let bgColor = $(e.target).css("backgroundColor");
        $(".hambozo").css("color" , bgColor)
    });


    $("#sideBar i").click(function(){
        if($("#sideBar").css('left')== "0px")
        {
            $("#sideBar").animate({left : -sidebarinnerWidth},1000);
        }
        else{
            $("#sideBar").animate({left :0},1000);
            
        }
    })

    $(".img-icon").click(function(e){
        let imgSrc = e.target.getAttribute("src");
        $(".home").css("backgroundImage" , `url(${imgSrc})`)
    })



    // $(".nav-link").click(function(e) {
    //     e.preventDefault(); 
    //     var $target = $(e.target);
    //     $target.addClass("active"); 
    //     $target.siblings().removeClass("active"); 
    //   });


})