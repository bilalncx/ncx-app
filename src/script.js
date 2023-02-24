import $ from 'jquery'; 

$(document).ready(function(){
    $('.loadingbar').delay(4500).animate({left: '0'}, 5500);
    $('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
    $('.splashupperscreen').delay(9000).animate({top: '-100%'}, 2000);
    $('.splashlowerscreen').delay(9000).animate({bottom: '-100%', opacity: '0'}, 3000);

    $('.splashScreen').delay(8300).queue(function(){
      $('.splashScreen').addClass("visibleSplash");
      $('.loadingContainer').delay(8000).addClass('splashdone');
      $('body').css({overflow: 'visible'});
      $('header.main-header').addClass("zindex-visible");
    });

    $(window).on('load', function(){
      $(this).scrollTop(0);
    });
});


$(document).ready(function() {
    if (window.location.href.indexOf("insights") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("privacy-policy") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("kyc-aml-policy") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("user-agreement") > -1) {
      // alert("your url contains the name franky");
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("cookie-policy") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("api-agreement") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("buy-crypto") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("task-rewards") > -1){
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
    } else if (window.location.href.indexOf("market") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("faq") > -1){
      $("body").addClass("body-overflow");
    } else if (window.location.href.indexOf("/faq/security_google_2fa") > -1){
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
});



// ****************************************************************************
// $(document).ready(function($){
//   $(window).on('scroll', function(){
//       if($(window).scrollTop() >= $('.widerangencxproducts').offset().top){
//           $('.widerangencxproducts').addClass('stickyrow');
//           $('#btn-1').addClass('active-one');
//           $('#content-1').addClass('active-one');
//       } else if($(window).scrollTop() <= $('.widerangencxproducts').offset().top){
//         $('.widerangencxproducts').removeClass('stickyrow');
//         $('.pro-tabs').removeClass('active-one');
//         $('.pro-content').removeClass('active-one');
//       }
//   });
// });
