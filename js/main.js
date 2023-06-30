$(document).ready(function () {
    $("li").click(function(){

        $(this).addClass("active").siblings().removeClass("active");
    });
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
   
});