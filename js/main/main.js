$(function(){
    tab();
    // tab_img();


    $('#ranking-chart .chart > li').click(function(e){
        e.preventDefault();
        
        //초기화
        $("#ranking-chart .chart > li").removeClass("active");
        $("#ranking-img li").removeClass("active");

        $(this).addClass('active'); //클릭 시 add class

        let parent_div = $(this).parent().parent().attr('id');  //div Id 값
        let index = $(this).index() + 1 ; //해당 index
        $("#" + parent_div + "_rank > li:nth-child("+ index + ")").addClass('active'); //이미지 활성화

        let listWidth = 0;
        // 모든 슬라이드의 너비를 합산하여 리스트 전체 너비 계산
        $('#ranking-img .swiper-slide').each(function () {
            listWidth += $(this).outerWidth();
        });

        let newPosition = (listWidth / 5) * (index-1); //중앙에 놓을 수 있는 법 없을까?
        //슬라이드를 새 위치로 이동시키는 애니메이션 설정
        $('#ranking-img .swiper-slide').css({
            "transform": `translate3d(${-newPosition}px, 0, 0)`,
            "transition-duration": "500ms"
        });



    });
});

function tab() {
    //탭메뉴 실행 함수
    function activateTab(tabId) {
        //초기화
        $("#ranking-chart .tabmenu > li").removeClass("active");
        $("#ranking-chart .chart-wrap").hide();
        $('#ranking-img ul').hide();

        //실행
        $(`#ranking-chart .tabmenu > li a[href*="${tabId}"]`).parent().addClass("active");
        $(tabId).show();
        $('#ranking-img ' + tabId + '_rank').show();

        
        /*
         23.12.27
         랭킹 카테고리 부분 - 탭 메뉴 클릭 시 각 다른 스와이프 아이템 영역을 
         새로 정의해줘야하는데  new Swiper가 안 먹힘 ...................
         좀 더 알아봐야할 듯.. 하......................................
        */

    }

    //탭메뉴 클릭할 때 실행
    $("#ranking-chart .tabmenu > li a").on("click", function(e) {
        e.preventDefault();
        let tabId = $(this).attr("href");
        activateTab(tabId, true);

        // const rank_img = new Swiper('#ranking-img .swiper-container',{
        //     slidesPerView: '3', 
		// 	// loop: true  ,
        //     paginationClickable: false ,
        // });

    });

    //페이지 로드 했을 때 탭메뉴 선택
    let firstTabId = $('#ranking-chart .tabmenu > li:first-child a').attr('href');
    activateTab(firstTabId);
    //slider(); //슬라이드 실행
}


function tab_img(){
    //const $wrapper = $container.find('#ranking-img .swiper-wrapper');
   // const targetPos = $target.position();
    //const containerWidth = $container.width();
    let newPosition = 0;
    let listWidth = 0;

    // 모든 슬라이드의 너비를 합산하여 리스트 전체 너비 계산
    // $('#ranking-img .swiper-slide').each(function () {
    //     listWidth += $(this).outerWidth();
    // });

    // console.log(listWidth);

    // 클릭한 항목을 가운데 정렬하기 위한 위치 계산
    // const selectTargetPos = targetPos.left + $target.outerWidth() / 2;
    // if (containerWidth < listWidth) {
    //     if (selectTargetPos <= containerWidth / 2) {
    //         newPosition = 0; // 왼쪽
    //     } else if ((listWidth - selectTargetPos) <= containerWidth / 2) {
    //         newPosition = listWidth - containerWidth; // 오른쪽
    //     } else {
    //         newPosition = selectTargetPos - containerWidth / 2;
    //     }
    // }

    // newPosition = listWidth / 5;
    // // 슬라이드를 새 위치로 이동시키는 애니메이션 설정
    // // $('#ranking-img .swiper-slide').css({
    // //     "transform": `translate3d(${-newPosition}px, 0, 0)`,
    // //     "transition-duration": "500ms"
    // // });
}
