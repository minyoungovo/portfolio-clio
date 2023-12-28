$(function(){
 //햄버거 메뉴
 $('.hamburger').on('click',  () => {$('#full-menu').fadeIn();});
 $('.full-close').on('click', () => {$('#full-menu').fadeOut(); });

    let header = $('#header'); 
    let page = $('#family-site'); 
    let pageOffsetTop = page.offset().top;
    
    $(window).resize(function(){ //반응형 시 다시 계산
      pageOffsetTop = page.offset().top;
    });
    
    $(window).on('scroll', () => { //스크롤 시
      let scrolled = $(window).scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      header.toggleClass('header-scroll', scrolled);
    });
});