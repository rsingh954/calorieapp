$(".searchicon").click(function(){$(".search-container").toggleClass("active"),$(".menubackdropp").toggleClass("active"),$("#srch_term").focus(),$(this).toggle()}),$(".menubackdropp").click(function(){$(".search-container").toggleClass("active"),$(this).toggleClass("active"),$(".searchicon").toggle()}),$("#navtrigger").click(function(){$(".search-container").removeClass("active"),$(".menubackdropp").removeClass("active"),$(".searchicon").show()}),$(function(){$(".mags-monthly select").change(function(){var e=$(this).val();"val1"===e?($(".mag-years").hide(),$("#op-17").show()):"val2"===e?($(".mag-years").hide(),$("#op-18").show()):"val3"===e?($(".mag-years").hide(),$("#op-19").show()):"val4"===e?($(".mag-years").hide(),$("#op-20").show()) :"val5"===e&&($(".mag-years").hide(),$("#op-21").show())})});



$(document).ready(function () { $('.corona-slick').slick({ dots: !1, arrows: !1, autoplay: !0, infinite: !1, speed: 1000, slidesToShow: 3, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { dots: !0, slidesToShow: 2, slidesToScroll: 1, arrows: !1 } }, { breakpoint: 480, settings: { dots: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !1 } }] }); $('.delq-slick').slick({ dots: !0, arrows: !1, autoplay: !0, infinite: !1, speed: 1000, slidesToShow: 1, slidesToScroll: 1, responsive: [{ breakpoint: 767, settings: { dots: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !1 } }] }); $('.covid-slick').slick({ dots: !0, arrows: !1, autoplay: !0, infinite: !1, speed: 1000, slidesToShow: 1, slidesToScroll: 1, responsive: [{ breakpoint: 767, settings: { dots: !0, arrows: !1 } }] }); $('.delq1-slick').slick({ dots: !0, arrows: !1, autoplay: !0, infinite: !1, speed: 1000, slidesToShow: 1, slidesToScroll: 1, responsive: [{ breakpoint: 767, settings: { dots: !0, slidesToShow: 1, slidesToScroll: 1, arrows: !1 } }] }) })


$(function () { $(".statewise div").hide(); $(".state-sel").change(function () 
{ var e = $(this).val(); $(".statewise div").hide(); 

$("div.statewise div#" + e).show();
$("div.statewise .vb-mission").css("display","block");

if(e== "" || e=="manipur" || e=="gurugram"|| e=="guwahati"|| e=="utt" || e=="sel-emp"){ 
    $("div.statewise .vb-mission").css("display","none"); 
}

})

})

/*Click functions for dynamically added contents*/

$('#vid-row-dekst').on('click', 'a.cor-vide-loadmore', function () { $(".load-video-row").show(); $(".ldmore-div").hide(); $(".ls-more").show() })

$('#vid-row-dekst').on('click', 'a.cor-vide-loadless', function () { $(".load-video-row").hide(); $(".ls-more").hide(); $(".ldmore-div").show() })

$('#vid-row-dekst').on('click', 'a.view-yt', function (e) { e.preventDefault(); var url = $(this).attr('yt-attr'); $("#yt-iframe").attr('src', url); $("#exampleModal1").modal('show') })

$('#vid-row-mbl').on('click', 'a.view-yt', function (e) { e.preventDefault(); var url = $(this).attr('yt-attr'); $("#yt-iframe").attr('src', url); $("#exampleModal1").modal('show') })

$('#vid-row-mbl').on('click', 'a.cor-vide-loadmore', function () { $(".load-video-row").show(); $(".ldmore-div").hide(); $(".ls-more").show() })

$('#vid-row-mbl').on('click', 'a.cor-vide-loadless', function () { $(".load-video-row").hide(); $(".ls-more").hide(); $(".ldmore-div").show() })




/*Corona virus page*/

$(window).bind("load", function() {
    $('#vid-row-dekst').prepend('<div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/glnkxbUdRr0?&rel=0"><img src="/src/images/yt-thumbnails/410x320/1.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Di4V7M8z2Fs?&rel=0"><img src="/src/images/yt-thumbnails/410x320/3.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/HTsvYdoK0dU?&rel=0"><img src="/src/images/yt-thumbnails/410x320/2.jpg" class="img-fluid"></a></div></div><!--<div class="col-sm-12 mt-4 text-center ldmore-div"><a class="fsize2a extrabold cor-vide-loadmore">load more</a></div>--><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/mlzp_eR6nvk?&rel=0"><img src="/src/images/yt-thumbnails/410x320/4.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Gk_ApTxLXNw?&rel=0"><img src="/src/images/yt-thumbnails/410x320/5.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Yq_YtWiO8d8?&rel=0"><img src="/src/images/yt-thumbnails/410x320/6.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/bjmScy_FN28?&rel=0"><img src="/src/images/yt-thumbnails/410x320/7.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/z-9ydvVaIKc?&rel=0"><img src="/src/images/yt-thumbnails/410x320/8.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/oQQqAAfIlXo?&rel=0"><img src="/src/images/yt-thumbnails/410x320/9.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/R-sW4hSpWOI?&rel=0"><img src="/src/images/yt-thumbnails/410x320/10.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/FeVVSSnyim8?&rel=0"><img src="/src/images/yt-thumbnails/410x320/11.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/C3Rkgfn78i0?&rel=0"><img src="/src/images/yt-thumbnails/410x320/12.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/L5MIoMzCAKA?&rel=0"><img src="/src/images/yt-thumbnails/410x320/13.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/4zQrw0kUpt0?&rel=0"><img src="/src/images/yt-thumbnails/410x320/14.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Tjm0lyiOcI8?&rel=0"><img src="/src/images/yt-thumbnails/410x320/15.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/_Qg374nA2Cg?&rel=0"><img src="/src/images/yt-thumbnails/410x320/16.jpg" class="img-fluid"></a></div></div><div class="col-sm-12 mt-4 text-center ls-more"><!--<a class="fsize2a extrabold cor-vide-loadless">load less</a>--></div>');

    $('#vid-row-mbl').prepend('<div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/glnkxbUdRr0?&rel=0"><img src="/src/images/yt-thumbnails/410x320/1.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Di4V7M8z2Fs?&rel=0"><img src="/src/images/yt-thumbnails/410x320/3.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/HTsvYdoK0dU?&rel=0"><img src="/src/images/yt-thumbnails/410x320/2.jpg" class="img-fluid"></a></div></div><div class="col-sm-12 mt-4 text-center ldmore-div"><!--<a class="fsize2a extrabold cor-vide-loadmore">load more</a>--></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/mlzp_eR6nvk?&rel=0"><img src="/src/images/yt-thumbnails/410x320/4.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Gk_ApTxLXNw?&rel=0"><img src="/src/images/yt-thumbnails/410x320/5.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Yq_YtWiO8d8?&rel=0"><img src="/src/images/yt-thumbnails/410x320/6.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/bjmScy_FN28?&rel=0"><img src="/src/images/yt-thumbnails/410x320/7.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/z-9ydvVaIKc?&rel=0"><img src="/src/images/yt-thumbnails/410x320/8.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/oQQqAAfIlXo?&rel=0"><img src="/src/images/yt-thumbnails/410x320/9.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/R-sW4hSpWOI?&rel=0"><img src="/src/images/yt-thumbnails/410x320/10.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/FeVVSSnyim8?&rel=0"><img src="/src/images/yt-thumbnails/410x320/11.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/C3Rkgfn78i0?&rel=0"><img src="/src/images/yt-thumbnails/410x320/12.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/L5MIoMzCAKA?&rel=0"><img src="/src/images/yt-thumbnails/410x320/13.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/4zQrw0kUpt0?&rel=0"><img src="/src/images/yt-thumbnails/410x320/14.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/Tjm0lyiOcI8?&rel=0"><img src="/src/images/yt-thumbnails/410x320/15.jpg" class="img-fluid"></a></div></div><div class="col-sm-6"><div class="corona-vid mt-4"><a href="#" class="view-yt" yt-attr="https://www.youtube.com/embed/_Qg374nA2Cg?&rel=0"><img src="/src/images/yt-thumbnails/410x320/16.jpg" class="img-fluid"></a></div></div><div class="col-sm-12 mt-4 text-center ls-more"><!--<a class="fsize2a extrabold cor-vide-loadless">load less</a>--></div>');
});



$(".view-yt").click(function (e) { e.preventDefault(); var url = $(this).attr('yt-attr'); $("#yt-iframe").attr('src', url); $("#exampleModal1").modal('show') })

$('#exampleModal1').on('hidden.bs.modal', function () { $("#yt-iframe").attr('src', "") })

// $(".cor-vide-loadmore").click(function (){
//   $(".load-video-row").show();
//   $(".ldmore-div").hide();
//   $(".ls-more").show();
// });

// $(".cor-vide-loadless").click(function (){
// $(".load-video-row").hide();
// $(".ls-more").hide();
// $(".ldmore-div").show();
// });

var urll = window.location.hash;
var activeTabb = urll.substring(urll.indexOf("#") + 1);
console.log(activeTabb);

if(urll !=""){
    $(".dial-accordion").find($("#" + activeTabb)).addClass("opened");
    $(".dial-accordion").find($("#" + activeTabb)).children().children().removeClass("collapsed");
    $(".dial-accordion").find($("#" + activeTabb)).siblings().addClass("show");
    $("html, body").animate({ scrollTop: $(".dial-accordion").find($("#" + activeTabb)).offset().top - 150 }, "slow");
}

