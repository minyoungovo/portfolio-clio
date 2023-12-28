$(function(){
    swiper();
    tab();
    
});
 
const swiper = function(){
    //메인 이미지 
    const visual_swiper = new Swiper('#visual .swiper-container',{
        effect : "fade",
        // spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: false,
        loopAdditionalSlides : 1,
        centeredSlides: false,
        allowTouchMove : false,
        rewind: true,
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

    //추천상품
    const recommend_swiper = new Swiper('#recommend .swiper-container',{
        slidesPerView: '4',
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
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
                pagination: {
                    el: '#recommend .swiper-scrollbar',
                    type: "progressbar",
                    clickable: true,
                },
            },
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

    //이 상품은 어때요?
    const howAbout_swiper = new Swiper('#howAbout .swiper-container',{
        slidesPerView: 4,
        spaceBetween: 16,
        paginationClickable: false,
        loop: false,
        breakpoints : {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            },
            1500: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        }
        
    });

    //랭킹 - 탭 메뉴
    const ranking_tabmenu = new Swiper('#ranking-chart .tab-swiper-container',{
        slidesPerView: '3', 
        paginationClickable: false,
        loop: false,
    });

    //인스타그램
    const instagram_swiper = new Swiper('#instagram .swiper-container',{
        slidesPerView: '5', 
        spaceBetween: 16,
        paginationClickable: false,
        loop: false,
        breakpoints : {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            730:{
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1500: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
        }
    });

    //배너
    const banner_swiper = new Swiper('#main-banner .swiper-container',{
        effect : "fade",
        // spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 1,
        centeredSlides: false, 
        allowTouchMove : false, 
        rewind: true,
        speed:500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#main-banner .swiper-pagination",
            clickable: true,
        },
    });
}

//카테고리 항목 swiper
const tab = function() {
    const activateTab = function(tabId) {
        //01.모든 아이템 초기화
        //$("#ranking-chart .tabmenu > li").removeClass("swiper-slide-active");
        $("#ranking-chart .chart-wrap").hide();
        $('#ranking-img ul').hide();

        rankChartSlide();
        allReset(tabId);

         //02. 탭 메뉴의 리스트 출력
        $(tabId).show();
        $('#ranking-img ' + tabId + '_rank').show();

        const arr = tabId.split("#");
        //03. 탭 메뉴의 이미지 리스트 출력
        var rank_img = new Swiper('#ranking-img .swiper-container-' + arr[1],{
            slidesPerView: 2, 
            spaceBetween: 16,
            loop: true, loopedSlides: 2,
            paginationClickable: false ,
            simulateTouch : false,  
            centeredSlides: true,
            speed:500,
            initialSlide:0,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints : {
                640: {
                    slidesPerView: 2,
                },
                1080: {
                    slidesPerView: 3,
                },
            },
            on: {
                slideChange : function() {
                    $('#ranking-chart .chart li').removeClass('active');

                    let parentId = $('#ranking-chart .tabmenu .swiper-slide-active > a').attr('href');
                    $(parentId + ' .chart li:nth-child(' + (this.realIndex + 1) + ')').addClass('active');
                },
            }
        });
    }
    //04. 초기값 설정
    activateTab('#chart_tab01');
}
//랭킹 리스트
let index = 1;
const rankChartSlide = function () {
    //1. 초기화
    $('#ranking-chart .chart li').removeClass('active');
    const parentId = $('#ranking-chart .tabmenu .swiper-slide-active > a').attr('href');

    //2. 변수 값 index의 active 설정
    $(parentId + " > .chart > li:nth-child(" + index + ")").addClass('active');

    //3. if length 보다 넘었을 때 다시 초기화 (1)
    if(index == 5){index = 1; }
    else{index++;}
};

const allReset = function(tabId){
    $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().addClass("swiper-slide-active");
    $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().prev().addClass("swiper-slide-prev");
    $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().next().addClass("swiper-slide-next");
}