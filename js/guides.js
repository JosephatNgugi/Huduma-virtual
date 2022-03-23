$(function(){
    $("#kra").click(function(){
        $(".main").hide(1000);
        $("#mainShow").show(1200);
        // $("#tutorials").toggle(1000);
        $("#tutorials").show(1000);
    });
    $("#mainShow").click(function () {
        $("#tutorials").hide(1000);
        $("#mainShow").hide(100);
        // $(".main").toggle(1000);
        $(".main").show(1000);
    });
        // toggle between main and tutorials 

    $(".pinAppl").click(function () {
        $("#kraGuides").hide(1000);
        $("#mainShow").hide(100);
        // $(".kraPinAppl").toggle(1000);
        $("#showKraGuides").show(1200);
        $(".kraPinAppl").show(1000);
    });
    $("#showKraGuides").click(function () {
        $(".kraPinAppl").hide(1000);
        $("#showKraGuides").hide();
    //   $("#kraGuides").toggle(1000);
        $("#mainShow").show(100);
        $("#kraGuides").show(1000);
    });
        // toggle tutorial and guides 

    // $(".comingSoon").click(function () {
    //     $(".main").hide(1000);
    //   // $(".kraPinAppl").toggle(1000);
    //     $("#more").show(1000);
    //     $("#mainShow").show(100);

    // });


    // $("nav").onscroll
});







            // AUTOMATIC YEAR UPDATE 
let date = new Date().getFullYear();
let dateTag = document.getElementById("year");
dateTag.innerHTML = `Copyright © ${date}`;
