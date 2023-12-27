$(function(){
    swiper();

    //첫 화면 초기화
    let parent = $('#chart_tab01_rank').parent().attr('class');
    $(window).resize(function(){ 
        swiper();

    });

    function swiper(){
        const visual_swiper = new Swiper('#visual .swiper-container',{
            effect : "fade",
            // spaceBetween: 30,
            slidesPerView: "auto",
            centeredSlides: true,
            loop: false,
            loopAdditionalSlides : 1,
            // delay :0,
            // loop: true, // 반복 여부
            // slideToClickedSlide: true, //클릭하면서 마지막 요소일때 loop으로 실행 할수 있습니다.
            //centeredSlides: true, //가운데로 정렬하겠다
            centeredSlides: false, //가운데 정렬 x
            allowTouchMove : false, //마우스 드래그엔드랍 여부
             rewind: true,
            //loopedSlides:4,
            //followFinger:true,
            speed:500,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            pagination: {
              el: "#visual .swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: "#visual .swiper-button-next",
              prevEl: "#visual .swiper-button-prev",
            }
            
        });

        const recommend_swiper = new Swiper('#recommend .swiper-container',{
            slidesPerView: '4',
            // slidesPerView: '4',
			// paginationClickable: true,
            // loop:true,
            navigation: {
                nextEl: '#recommend .swiper-button-next',
                prevEl: '#recommend .swiper-button-prev',
            },
            pagination: {
                el: '#recommend .swiper-scrollbar',
                type: "progressbar",
                clickable: true,
            },
            breakpoints : {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    pagination: {
                        el: '#recommend .swiper-scrollbar',
                        type: "progressbar",
                        clickable: true,
                    },
                },
                  // 화면의 넓이가 640px 이상일 때
                640: {
                slidesPerView: 3,
                spaceBetween: 10,
                pagination: {
                        el: '#recommend .swiper-scrollbar',
                        type: "progressbar",
                        clickable: true,
                    },
                },
                1080: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    pagination: {
                        el: '#recommend .swiper-scrollbar',
                        type: "progressbar",
                        clickable: true,
                    },
                }
            }
            
        });

        const howAbout_swiper = new Swiper('#howAbout .swiper-container',{
            slidesPerView: '3', 
            spaceBetween: 16,
            paginationClickable: false,
            loop: false,
        });

        const instagram_swiper = new Swiper('#instagram .swiper-container',{
            slidesPerView: '5', 
            spaceBetween: 16,
            paginationClickable: false,
            loop: false,
        });
    }
});
 
