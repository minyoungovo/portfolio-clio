$(function(){
    tab_menu();
    tab();
    
    //랭킹 리스트 클릭 이벤트
    $('#ranking-chart .info').click(function(){

    });
});

const tab_menu = function(){
    const ranking_tabmenu = new Swiper('#ranking-chart .tab-swiper-container',{
        slidesPerView: '3', 
        paginationClickable: false,
        loop: false,
    });
}


/* =========== 랭킹 카테고리 =========== */
const tab = function() {
    //01. 탭메뉴 클릭할 때 실행
    $("#ranking-chart .tabmenu > li a").on("click", function(e) {
        e.preventDefault();
        let tabId = $(this).attr("href");

        activateTab(tabId);
    });

    //탭메뉴 실행 함수
    const activateTab = function(tabId) {
        //모든 아이템 초기화
        //$("#ranking-chart .tabmenu > li").removeClass("active");
        $("#ranking-chart .chart-wrap").hide();
        $('#ranking-img ul').hide();

         //02. 탭 메뉴의 리스트 출력
        //active 클래스 추가
        console.log( $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent());
        //$(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().addClass("active");
        $(tabId).show(); //카테고리 리스트 
        $('#ranking-img ' + tabId + '_rank').show(); //이미지 리스트

        const arr = tabId.split("#");

        console.log(arr[1]);

        //03. 탭 메뉴의 이미지 리스트 출력
        var rank_img = new Swiper('#ranking-img .swiper-container-' + arr[1],{
            slidesPerView: 2, 
            spaceBetween: 16,
            loop: true  ,
            loopedSlides: 2,
            // rewind : true,
            // loopAdditionalSlides : 1,
            paginationClickable: false ,
            simulateTouch : false,  //드래그 
            centeredSlides: true,
            speed:500,
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
                init: function () {
                    let parentId = $('#ranking-chart .tabmenu .swiper-slide-active > a').attr('href');
                    console.log(parentId);
                },
                slideChange : function() {
                    $('#ranking-chart .chart li').removeClass('active');
                    let parentId = $('#ranking-chart .tabmenu .swiper-slide-active > a').attr('href');
                    //console.log('TEST : ' + $('#ranking-chart .tabmenu .swiper-slide-active > a').attr('href'));
                    $(parentId + ' .chart li:nth-child(' + (this.realIndex + 1) + ')').addClass('active');


                    console.log(parentId);

                    // console.log(this.realIndex);
                    // console.log(this);
                    // //1. 초기화
                    // $('#ranking-chart .chart li').removeClass('active');
                    
                    //이벤트 또는 조건문으로 이용하면 된다.
                },
            }
        });
    }

    //04. 초기값 설정
    activateTab('#chart_tab01');
}

$(window).resize(function(){
    //페이지 로드 했을 때 탭메뉴 선택
    let firstTabId = $('#ranking-chart .tabmenu > li:first-child a').attr('href');
    activateTab(firstTabId);
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

//카테고리 랭킹 리스트 - 자동 애니메이션 효과
//setInterval(rankChartSlide, 3000);

