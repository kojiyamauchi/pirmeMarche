// JavaScript Document

jQuery(function ($) {

    // Check User Agent.
    if(navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPod') > -1 || navigator.userAgent.indexOf('Android') > -1) {
        $('body').removeClass('pc');
        $("meta[name='viewport']").attr('content', '').attr('content', 'width=768, user-scalable=no');
    } else if(navigator.userAgent.indexOf("iPad") > -1) {
        $("meta[name='viewport']").attr('content', '').attr('content', 'width=1440, user-scalable=no');
    }

    // Intro Animation.
    if($('body').hasClass('pc')) {
        $('html, body').scrollTop(0).css({
            scrollTop: 0,
            'overflow': 'hidden'
        });
        $('#fvLogo').addClass('comp');
        $('#fvParticle').addClass('comp');
        setTimeout(function () {
            $('#fvWing').addClass('comp');
            setTimeout(function () {
                $('#fvWing').addClass('fadeOut');
                $('img#fvAirdate').addClass('comp');
                $('img#fvCopy').addClass('comp');
                $('#fv nav li').addClass('comp');

                setTimeout(function () {
                    $('html, body').css({
                        'overflow': 'scroll'
                    });
                }, 1000);
            }, 750);
        }, 2600);
    }

    // First View Navigation Mouse Over Function.
    if($('body').hasClass('pc')) {
        // nav1.
        $('li#nav1').on('mouseover', function () {
            $(this).children('.navAlpha').stop(true).fadeTo(250, 0);
            $(this).children('.layer').stop(true).animate({
                'top': '0'
            }, 250);
            $('#nav1Text').stop(true).animate({
                'bottom': '30'
            }, 250);
        }).on('mouseout', function () {
            $(this).children('.navAlpha').stop(true).fadeTo(250, 1);
            $(this).children('.layer').stop(true).animate({
                'top': '135px'
            }, 250);
            $('#nav1Text').stop(true).animate({
                'bottom': '0'
            }, 250);
        });
        // nav2.
        $('li#nav2').on('mouseover', function () {
            $(this).children('.navAlpha').stop(true).fadeTo(250, 0);
            $(this).children('.layer').stop(true).animate({
                'top': '0'
            }, 250);
            $('#nav2Text').stop(true).animate({
                'bottom': '30'
            }, 250);
        }).on('mouseout', function () {
            $(this).children('.navAlpha').stop(true).fadeTo(250, 1);
            $(this).children('.layer').stop(true).animate({
                'top': '135px'
            }, 250);
            $('#nav2Text').stop(true).animate({
                'bottom': '0'
            }, 250);
        });
        // nav3.
        $('li#nav3').on('mouseover', function () {
            $(this).children('.navAlpha').stop(true).fadeTo(250, 0);
            $(this).children('.layer').stop(true).animate({
                'top': '0'
            }, 250);
            $('#nav3Text').stop(true).animate({
                'bottom': '30'
            }, 250);
        }).on('mouseout', function () {
            $(this).children('.navAlpha').stop(true).fadeTo(250, 1);
            $(this).children('.layer').stop(true).animate({
                'top': '135px'
            }, 250);
            $('#nav3Text').stop(true).animate({
                'bottom': '0'
            }, 250);
        });
        // nav4.
        $('li#nav4').on('mouseover', function () {
            $(this).children('.navAlpha2').stop(true).fadeTo(250, 0);
            $(this).children('.layer').stop(true).animate({
                'top': '0'
            }, 250);
            $('#nav4Text').stop(true).animate({
                'bottom': '30'
            }, 250);
        }).on('mouseout', function () {
            $(this).children('.navAlpha2').stop(true).fadeTo(250, 1);
            $(this).children('.layer').stop(true).animate({
                'top': '135px'
            }, 250);
            $('#nav4Text').stop(true).animate({
                'bottom': '0'
            }, 250);
        });
    }

    // First View Navigation & Slide Down Navigation Click Function.
    var scrollDuration = 1000;
    $('li#nav1, li#headerNav1').on('click', function () {
        $("html,body").animate({
            scrollTop: $('#movie1').offset().top + (-128)
        }, scrollDuration, "swing");
    });
    $('li#nav2, li#headerNav2').on('click', function () {
        $("html,body").animate({
            scrollTop: $('#movie2').offset().top + (-128)
        }, scrollDuration, "swing");
    });
    $('li#nav3, li#headerNav3').on('click', function () {
        $("html,body").animate({
            scrollTop: $('#movie3').offset().top + (-20)
        }, scrollDuration, "swing");
    });
    $('li#nav4, li#headerNav4').on('click', function () {
        $("html,body").animate({
            scrollTop: $('#movie4').offset().top + (-20)
        }, scrollDuration, "swing");
    });
    $('li#headerNavHome').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, scrollDuration, "swing");
    });

    // Scroll Animation.
    if($('body').hasClass('pc')) {
        $(window).on('scroll', function () {
            var windowTopPosi = $(window).scrollTop(),
                programDescriptionPosi = $('#programDescription').offset().top,
                moviesPosi = $('#movies').offset().top;
            if(windowTopPosi > (programDescriptionPosi - 250)) {
                $('img#bg1,img#bg2').addClass('comp');
            }
            if(windowTopPosi > (programDescriptionPosi + 100)) {
                $('img#bg3,img#bg4').addClass('comp');
            }
            if(windowTopPosi > programDescriptionPosi && windowTopPosi < moviesPosi) {
                $('header').slideDown(500);
            } else {
                $('header').slideUp(500);
            }
        });
    }

    // Boxer PlugIn.
    $(".boxer").boxer();

});
