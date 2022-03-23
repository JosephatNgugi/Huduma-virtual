$(function(){
    $("#kra").click(function(){
        $(".main").hide(1000);
        // $("#tutorials").toggle(1000);
        $("#tutorials").show(1000);
    });
    $("#mainShow").click(function () {
        $("#tutorials").hide(1000);
        // $(".main").toggle(1000);
        $(".main").show(1000);
    });
        // toggle between main and tutorials 

    $(".pinAppl").click(function () {
        $("#kraGuides").hide(1000);
        // $(".kraPinAppl").toggle(1000);
        $(".kraPinAppl").show(1000);
    });
    $("#showKraGuides").click(function () {
      $(".kraPinAppl").hide(1000);
    //   $("#kraGuides").toggle(1000);
      $("#kraGuides").show(1000);
    });
        // toggle tutorial and guides 

    
});







            // AUTOMATIC YEAR UPDATE 
let date = new Date().getFullYear();
let dateTag = document.getElementById("year");
dateTag.innerHTML = `Copyright(C) <br> ${date}`;
