
// Brand silder

$('.ByBrand').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows:false
    }
    }
]});


