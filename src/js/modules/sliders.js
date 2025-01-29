let sliders = document.querySelectorAll('.swiper');
if(sliders) {
    for(let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if(!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if(slider_items) {
                for(let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if(slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if(slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) {}


if(document.querySelector('.slider-partners__body')) {
    new Swiper ('.slider-partners__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 5,
        spaceBetween: 20,
        watchOverflow: true,
        speed: 800,
        loop: true,
        autoplay: true,  
        pagination: {
            el: '.slider-partners__dotts',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                spaceBetween: 15,
            },
            479: {
                slidesPerView: 2.6,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 32,
            },
        },  
    })
}

if(document.querySelector('.slider-works__body')) {
    new Swiper ('.slider-works__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 4,
        spaceBetween: 20,
        watchOverflow: true,
        loop: true,
        speed: 800, 
        navigation: {
            nextEl: '.slider-works .slider-arrow_next',
            prevEl: '.slider-works .slider-arrow_prev',
        }, 
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15,
            },
            479: {
                slidesPerView: 1.8,
                spaceBetween: 15,
            },
            700: {
                slidesPerView: 2.6,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3.6,
                spaceBetween: 32,
            },
        },  
    })
}