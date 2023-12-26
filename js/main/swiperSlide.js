

$(function(){
    
    
    swiper();

    $(window).resize(function(){ 
        swiper();
    });

    function swiper(){
        const visual_swiper = new Swiper('#visual .swiper-container',{
            effect : "fade",
            spaceBetween: 30,
            centeredSlides: true,
            // loop : true,
            rewind: true,
            autoplay: {
              delay: 2500,
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
            loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '#recommend .swiper-scrollbar',
                type: "progressbar",
                clickable: true,
            }
        });

        // $('.tab-swiper-container .tabmenu > li').length / 2
        const ranking_tabmenu = new Swiper('#ranking .tab-swiper-container',{
            slidesPerView: '5',
            // spaceBetween: 30,
            pagination: '.tab-swiper-pagination',
            // slidesPerView: 1,
			paginationClickable: true,
			loop: false,
            paginationBulletRender: function (index, className) {
				var tabsName = ['App2s', 'Tricks'];
				if ( index === (tabsName.length - 1) ) {
          				return	'<span class="' + className + '">'
          						+ tabsName[index] + '</span>'
          						+ '<div class="active-mark "></div>';
				}
				return '<span class="' + className + '">' + tabsName[index] + '</span>';
        		}
        });

    }
});
 
