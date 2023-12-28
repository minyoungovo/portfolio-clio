$(function(){
    tab_menu();
    tab();
});

const tab_menu = function(){
    const ranking_tabmenu = new Swiper('#ranking-chart .tab-swiper-container',{
        slidesPerView: '3', 
        paginationClickable: false,
        loop: false,
    });
}
const tab = function() {
    const activateTab = function(tabId) {
        //모든 아이템 초기화
        //$("#ranking-chart .tabmenu > li").removeClass("active");
        //$("#ranking-chart .tabmenu > li").removeClass("swiper-slide-active");
        $("#ranking-chart .chart-wrap").hide();
        $('#ranking-img ul').hide();

        rankChartSlide();
        allReset(tabId);

         //02. 탭 메뉴의 리스트 출력
         //초기화
        $(tabId).show(); //카테고리 리스트 
        $('#ranking-img ' + tabId + '_rank').show(); //이미지 리스트

        const arr = tabId.split("#");

        //03. 탭 메뉴의 이미지 리스트 출력
        var rank_img = new Swiper('#ranking-img .swiper-container-' + arr[1],{
            slidesPerView: 2, 
            spaceBetween: 16,
            loop: true, loopedSlides: 2,
            paginationClickable: false ,
            simulateTouch : false,  //드래그 
            centeredSlides: true,
            speed:500,
            //observer: true,
            // observeParents: true,
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
$(window).resize(function(){
    //페이지 로드 했을 때 탭메뉴 선택
   // let firstTabId = $('#ranking-chart .tabmenu > li:first-child a').attr('href');
    //activateTab(firstTabId);
    //tab();
    // activateTab('#chart_tab01');
});

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
    // $(`${tabId}_rank > li`).removeClass('swiper-slide-active');
    // $(`${tabId}_rank > li`).removeClass('swiper-slide-prev');
    // $(`${tabId}_rank > li`).removeClass('swiper-slide-next');

    // $(`#ranking-chart .tabmenu > li`).removeClass('swiper-slide-active');
    // $(`#ranking-chart .tabmenu > li`).removeClass('swiper-slide-prev');
    // $(`#ranking-chart .tabmenu > li`).removeClass('swiper-slide-next');

    $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().addClass("swiper-slide-active");
    $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().prev().addClass("swiper-slide-prev");
    $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().next().addClass("swiper-slide-next");
}