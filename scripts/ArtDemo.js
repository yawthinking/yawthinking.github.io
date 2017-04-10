$(document).ready(function () {
    //指定第一則先展開
    $("ul.listview .item:first").addClass("on");
    $("ul.listview .item:first").next().slideDown("slow");

    $("ul.listview .item").on("click", function() {
       if ($(this).hasClass("on")) {
           $(this).next().slideUp("slow");
           $(this).removeClass("on");
       } else {

           $("ul.listview .item").each(function () {
               $(this).next().slideUp("slow");
               $(this).removeClass("on");
           }); 


           $(this).addClass("on");
           $(this).next().slideDown("slow");
       }
    });
});
//啟動手機active狀態
document.addEventListener("touchstart", function () { }, true);
