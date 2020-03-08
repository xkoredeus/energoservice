$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
});
$(() => {
    $('.js-popup__open').on('click', function openPopup () {
        $('body').addClass('popup-open');
    });
    $('.js-popup__close').on('click', function closePopup () {
        $('body').removeClass('popup-open');
    });
    $('.js-content__overlay').on('click', function overlayClick () {
        $('body').removeClass('popup-open');
    });
    $('.header__nav-link').on('click', function headerNavLinkClick (e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});
$(()=> {
    $("input[type=tel]").mask("+7 (999) 999-99-99");
});
$(() => {
    $('.banner__slider').owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        dots: false,
        smartSpeed: 800,
        margin: 10,
        navText: ["<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17 1L1 17L17 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L17 17L1 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
    });
});
$(() => {
    $('.about__list-item').on('click', function aboutListItemClick() {
        if ($(window).width() < 1200) {
            $('body,html').animate({scrollTop: $('.about__in').offset().top - 100}, 900);
        }
        $('.about__list-item').removeClass('active');
        $('.about__in-item').removeClass('active');
        $('.about__in-item[data-serv="' + $(this).attr('data-serv') + '"]').addClass('active');
        $(this).addClass('active');
    });
});
$(() => {
    $('.port__slider').owlCarousel({
        loop: false,
        dots: true,
        smartSpeed: 800,
        margin: 2.5,
        navText: ["<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17 1L1 17L17 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>","<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L17 17L1 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
        responsive : {
            0   : {
                items: 1,
                nav: false,
            },
            600 : {
                items: 2,
                nav: true,
            }
        }
    });
});
$(() => {
    $('.part__slider').owlCarousel({
        loop: false,
        smartSpeed: 800,
        margin: 10,
        navText: ["<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17 1L1 17L17 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L17 17L1 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
        responsive: {
            0: {
                items: 2,
                nav: false,
                dots: true,
            },
            600: {
                items: 3,
                nav: true,
                dots: false,
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
            }
        }
    });
});

