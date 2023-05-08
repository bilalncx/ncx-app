import $ from 'jquery'; 

$(document).ready(function(){
  var movementStrength = -5;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#defi_content").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 3);
    var pageY = e.pageY - ($(window).height() / 3);
    var newvalueX = width * pageX * -1 - 0;
    var newvalueY = height * pageY * -1 - 5;
    $('#defi_content').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });

  const details = document.querySelectorAll("details");

  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });
});

$(document).ready(function(){
    $('.loadingbar').delay(4500).animate({left: '0'}, 5500);
    $('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
    $('.splashupperscreen').delay(9000).animate({top: '-100%'}, 2000);
    $('.splashlowerscreen').delay(9000).animate({bottom: '-100%', opacity: '0', height: '0vh'}, 3000);

    $('.splashScreen').delay(8300).queue(function(){
      $('.splashScreen').addClass("visibleSplash");
      $('.loadingContainer').delay(8000).addClass('splashdone').animate({height: '0px'}, 1000);
      $('body').css({overflow: 'visible'});
      $('header.main-header').addClass("zindex-visible");
    });

    $(window).on('load', function(){
      $(this).scrollTop(0);
    });

    $(".pair_name").click(function () {
        $(".pair_name").removeClass("active");
        $(this).addClass("active");   
    });

    $( '#search' ).keyup( function() {
        var matches = $( '#ncx_market_table' ).find( 'tr:contains('+ $( this ).val() +') ' );
        $( 'tr', '#ncx_market_table' ).not( matches ).slideUp();
        matches.slideDown();    
    });

    $("#all_btn").click(function () {
      $("#ncx_market_table").find("tr").show();
      $("#all_btn").addClass("active_all");
      $(".table_search_tabs button").removeClass("active_usdc active_btc active_usd active_usdt");
    });

    $("#usdt_btn").click(function () {
      var rows = $("#ncx_market_table").find("tr").hide();
      rows.filter(":contains('/ usdt')").show();
      $("#usdt_btn").addClass("active_usdt");
      $(".table_search_tabs button").removeClass("active_usdc active_btc active_usd active_all");
    });

    $("#usd_btn").click(function () {
      var rows = $("#ncx_market_table").find("tr").hide();
      rows.filter(":contains('/ usd')").show();
      rows.filter(":contains('/ usdt')").hide();
      rows.filter(":contains('/ usdc')").hide();
      $("#usd_btn").addClass("active_usd");
      $(".table_search_tabs button").removeClass("active_usdc active_btc active_usdt active_all");
    });

    $("#btc_btn").click(function () {
      var rows = $("#ncx_market_table").find("tr").hide();
      rows.filter(":contains('/ btc')").show();
      $("#btc_btn").addClass("active_btc");
      $(".table_search_tabs button").removeClass("active_usdc active_usd active_usdt active_all");
    });

    $("#usdc_btn").click(function () {
      var rows = $("#ncx_market_table").find("tr").hide();
      rows.filter(":contains('/ usdc')").show();
      $("#usdc_btn").addClass("active_usdc");
      $(".table_search_tabs button").removeClass("active_btc active_usd active_usdt active_all");
    });
});


$(document).ready(function() {
    if (window.location.href.indexOf("privacy-policy") > -1) {
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("kyc-aml-policy") > -1) {
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("user-agreement") > -1) {
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("cookie-policy") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("api-agreement") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("buy-crypto") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("rewards") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("ncx-card") > -1){
      $("body").addClass("body-overflow");
    }else if (window.location.href.indexOf("ncx-otc") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("ncx-ambassador") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("market-maker") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("institutional") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("*") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("markets") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("faq") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_security_google_2fa") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_deposits") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_withdrawal") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_spot_trading") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq_learn") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/ncx-token") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/about-us") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/wallet") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/indices") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/derivatives") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/market-insights") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/post-crypto") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/post-forex") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/post-markets") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/post-indices") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/post-commodities") > -1){
      $("body").addClass("body-overflow");
    } else{
      $("body").removeClass("body-overflow");
    }

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#header-row").addClass("darkheader");
        }else{
            $("#header-row").removeClass("darkheader");
        }
    });


    var headera = document.querySelector("#insight_page");
    var sticky = headera.offsetTop+0;
    function myFunction() {
      if (window.pageYOffset > sticky && window.pageYOffset < sticky + 18000) { // <--here
        headera.classList.add("sticky");
        $("#fixed_sticky_insights").addClass("blog-stick");
        $("#insight_page .col.first .leftsidebar").addClass("blog-stick");
        $("#insight_page .col.third .rightsidebar").addClass("blog-stick");
        $("#insight_page .support_leftbar").addClass("blog-stick");
        $("#insight_page .support_articles").addClass("blog-stick");
      } else {
        headera.classList.remove("sticky");
        $("#fixed_sticky_insights").removeClass("blog-stick");
        $("#insight_page .col.first .leftsidebar").removeClass("blog-stick");
        $("#insight_page .col.third .rightsidebar").removeClass("blog-stick");
        $("#insight_page .support_leftbar").removeClass("blog-stick");
        $("#insight_page .support_articles").removeClass("blog-stick");
      }
    }
    window.onscroll = function() {myFunction()};
});