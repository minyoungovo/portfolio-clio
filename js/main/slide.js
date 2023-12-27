// $(document).ready(function() {
//     slider();
// })

// function slider() {
//     var titArray = []; //슬라이드 타이틀
//     $('.slider .slide_tit > li').each(function(index, item) {
//         var txt = $(this).text();
//         titArray.push(txt);
//     }).promise().done(function() {
//         //슬라이드 전체 페이지 번호
//         var num = $(".slider .num");
//         var slides = $(".slider .swiper-slide");
//         var slideCount = slides.length;
//         num.html(`<strong>1</strong> / ${slideCount}`);

//         //슬라이드 시작
//         var swiper = new Swiper('.slider', {
//             loop: true,
//             slidesPerView: 1,
//             autoplay: {
//                 delay: 3000, //CSS animation과 시간 동일하게
//                 disableOnInteraction: false
//             },
//             effect: 'fade',
//             fadeEffect: {
//                 crossFade: true
//             },
//             navigation: {
//                 nextEl: '.slider .btn_next',
//                 prevEl: '.slider .btn_prev',
//             },
//             //pagination 텍스트 & progress bar 형태로 변경
//             pagination: {
//                 el: '.slider .slide_tit',
//                 clickable: 'true',
//                 type: 'bullets',
//                 renderBullet: (index, className) => {
//                     return `<li class=${className}><span class="bar"></span><span class="txt">${titArray[index]}</span></li>`;
//                 },
//             },
//             //현재 페이지 번호 갱신
//             on: {
//                 slideChange: () => {
//                     num.html(`<strong>${swiper.realIndex + 1}</strong> / ${slideCount}`);
//                 }
//             }
//         })
//     });
// }