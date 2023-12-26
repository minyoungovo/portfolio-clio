$(function(){
    tab();
    alert("TESt");
});

function tab() {
    //탭메뉴 실행 함수
    function activateTab(tabId) {
        //초기화
        $("#ranking .tabmenu > li").removeClass("active");
        $("#ranking .tabmenu").hide();

        //실행
        $(`#ranking .tabmenu > li a[href*="${tabId}"]`).parent().addClass("active");
        $(tabId).show();
    }

    //탭메뉴 클릭할 때 실행
    $("#ranking .tabmenu > li a").on("click", function(e) {
        e.preventDefault();
        let tabId = $(this).attr("href");
        activateTab(tabId, true);
    });

    //페이지 로드 했을 때 탭메뉴 선택
    let firstTabId = $('#ranking .tabmenu > li:first-child a').attr('href');
    activateTab(firstTabId);
    //slider(); //슬라이드 실행
}
