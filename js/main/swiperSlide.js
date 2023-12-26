$(function(){
    swiper();

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
            slidesPerView: 'auto',
            // slidesPerView: '4',
			// paginationClickable: true,
            loop:true,
            navigation: {
                nextEl: '#recommend .swiper-button-next',
                prevEl: '#recommend .swiper-button-prev',
            },
            pagination: {
                el: '#recommend .swiper-scrollbar',
                type: "progressbar",
                clickable: true,
            }
        });

        // $('.tab-swiper-container .tabmenu > li').length / 2
        const ranking_tabmenu = new Swiper('#ranking .swiper-container',{
            slidesPerView: '3', 
            // spaceBetween: 30,
            // pagination: '.tab-swiper-pagination',
            // slidesPerView: 1,
			paginationClickable: true,
			loop: false,
            // paginationBulletRender: function (index, className) {
			// 	var tabsName = ['App2s', 'Tricks'];
			// 	if ( index === (tabsName.length - 1) ) {
          	// 			return	'<span class="' + className + '">'
          	// 					+ tabsName[index] + '</span>'
          	// 					+ '<div class="active-mark "></div>';
			// 	}
			// 	return '<span class="' + className + '">' + tabsName[index] + '</span>';
        	// 	}
        });

    }
});
 
