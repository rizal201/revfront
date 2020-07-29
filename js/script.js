$(document).ready(function() {
    // slick
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.sliders-list').slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.terpopulers').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000
    });

    $('.slider-par-bot').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false
    })
    // /.slick


    // nav scroll
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('nav').addClass('bg-white');
            $('nav').removeClass('text-white').addClass('text-black');
            $('#login').removeClass('login').addClass('login-down');
            $('nav').removeClass('nav-shadow');
            $('.menubar-li a').css({
                'color': 'black'
            })
        }
        if($(this).scrollTop() < 50) {
            $('nav').removeClass('bg-white');
            $('nav').addClass('text-white').removeClass('text-black');
            $('#login').removeClass('login-down').addClass('login');
            $('.menubar-li a').css({
                'color': 'white'
            })
        }
        if($(this).scrollTop() > 300) {
            $('nav').addClass('nav-shadow');
        }
    });
    // /.nav scroll

    // nav toggle 
    $('.toggles-close').hide();
    $('.toggles').click(function(){
        $('#menubar-point').show(500);
        $('nav').addClass('bg-white');
        $('nav').removeClass('text-white').addClass('text-black');
        $('#login').removeClass('login').addClass('login-down');
        $('.toggles').hide(500);
        $('.toggles-close').show(500);
        $('.deskripsi-par').hide(500);
    });
    $('.toggles-close').click(function(){
        $('#menubar-point').hide(500);
        $('nav').addClass('bg-white');
        $('nav').removeClass('text-white').addClass('text-black');
        $('#login').removeClass('login').addClass('login-down');
        $('.toggles').show(500);
        $('.toggles-close').hide(500);
        $('.deskripsi-par').show(500);
    });
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        $("#des-par-top").css({
            "transform": "translate(0px," + wScroll/2 +"px)"
        });
        if( wScroll > 250 ) {
            $("#par-cari").css({
                "backgroundColor": "gainsboro"
            }); 
        } else {
            $("#par-cari").css({
                "backgroundColor": "white"
            }); 
        }
    });

    $('#sd-btn').click(function() {
        $('#sd').show(500);
        $('#smp').hide(500);
        $('#sma').hide(500);
        $('#smk').hide(500);
        $('#sd-btn').addClass('list-aktif');
        $('#smp-btn').removeClass('list-aktif');
        $('#smk-btn').removeClass('list-aktif');
        $('#sma-btn').removeClass('list-aktif');
    });
    $('#smp-btn').click(function() {
        $('#sd').hide(500);
        $('#smp').show(500);
        $('#sma').hide(500);
        $('#smk').hide(500);
        $('#sd-btn').removeClass('list-aktif');
        $('#smp-btn').addClass('list-aktif');
        $('#smk-btn').removeClass('list-aktif');
        $('#sma-btn').removeClass('list-aktif');
    });
    $('#sma-btn').click(function() {
        $('#sd').hide(500);
        $('#smp').hide(500);
        $('#sma').show(500);
        $('#smk').hide(500);
        $('#sd-btn').removeClass('list-aktif');
        $('#smp-btn').removeClass('list-aktif');
        $('#smk-btn').removeClass('list-aktif');
        $('#sma-btn').addClass('list-aktif');
    });
    $('#smk-btn').click(function() {
        $('#sd').hide(500);
        $('#smp').hide(500);
        $('#sma').hide(500);
        $('#smk').show(500);
        $('#sd-btn').removeClass('list-aktif');
        $('#smp-btn').removeClass('list-aktif');
        $('#smk-btn').addClass('list-aktif');
        $('#sma-btn').removeClass('list-aktif');
    });

    $('#balasan-content').hide();
    $('#tampilkan, #sembunyikan').click(function(){
        $('#balasan-content').slideToggle();
    });
    $('#tampilkan').click( function(){
        $('#tampilkan').hide();
        $('#sembunyikan').show();
    });
    $('#sembunyikan').click( function(){
        $('#tampilkan').show();
        $('#sembunyikan').hide();
    });

    $('.durung').click(function(){
        $('.wes').removeClass('d-none').addClass('d-inline-block');
        $('.durung').addClass('d-none');
    });
    $('.wes').click(function(){
        $('.wes').addClass('d-none').removeClass('d-inline-block');
        $('.durung').removeClass('d-none');
    });
});


$('#sembunyikan').hide();

AOS.init();