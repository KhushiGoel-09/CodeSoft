$(document).ready(function(){

    $(".one").on("click",function (){
     $("body").css({ color: '#000', background: "#fff" });
     $(".product-img").attr("src","./nike1/1.png");

     $(".logo-img img").attr("src","./logo2.png");
     $(".btn").css({ color: "#fff", background: "#000" });

     $(".variant").removeClass("active");
     $(this).addClass("active");

     $(".images").html("");

     for(var i=1; i <=6; i++){
        $(".images").append(`<img src='./nike1/${i}.png'/>`);
     }
    });

    $(".two").on("click",function (){
        $("body").css({ color: "#000", background: "purple" });
        $(".product-img").attr("src","./nike2/1.png");
   
        $(".logo-img img").attr("src","./logo2.png");
        $(".btn").css({ color: "#fff", background: "#000" });
   
        $(".variant").removeClass("active");
        $(this).addClass("active");
   
        $(".images").html("");
   
        for(var i=1; i <=6; i++){
           $(".images").append(`<img src='./nike2/${i}.png'/>`);
        }
       });

       $(".three").on("click",function (){
        $("body").css({ color: "#fff", background: "#000" });
        $(".product-img").attr("src","./nike3/1.png");
   
        $(".logo-img img").attr("src","./logo1.png");
        $(".btn").css({ color: "#000", background: "#000" });
   
        $(".variant").removeClass("active");
        $(this).addClass("active");
   
        $(".images").html("");
   
        for(var i=1; i <=6; i++){
           $(".images").append(`<img src='./nike3/${i}.png'/>`);
        }
       });
});
