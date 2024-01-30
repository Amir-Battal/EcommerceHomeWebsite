document.addEventListener('DOMContentLoaded', function() {
    new Splide( '.splide',
        {
            type: 'loop',
        }
    ).mount();
});

document.addEventListener('DOMContentLoaded', function() {
    new Splide(' #splide',
        {
            type: 'loop',
            perPage: 4,
            perMove: 1,
        }
    ).mount();
});

document.addEventListener('DOMContentLoaded', function() {
    new Splide(' #splide2',
    {
        type: 'loop',
    }
    ).mount();
});

document.addEventListener('DOMContentLoaded', function() {
    new Splide(' #splide3',
        {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: 20
        }
    ).mount();
});

document.addEventListener('DOMContentLoaded', function() {
    new Splide(' #splide4',
        {
            type: 'loop',
            perPage: 5,
            perMove: 1,
            gap: 20
        }
    ).mount();
});