$(function(){
    swiper();

    // window.addEventListener('resize', function(){
    //     swiper();
    // });

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
       
        // $('.tab-swiper-container .tabmenu > li').length / 2
        const ranking_tabmenu = new Swiper('#ranking-chart .tab-swiper-container',{
            slidesPerView: '3', 
			paginationClickable: true,
			loop: false,
        });

        const rank_img = new Swiper('#ranking-img .swiper-container',{
            slidesPerView: 2, 
            spaceBetween: 16,
            loop: true  ,
            loopedSlides: 2,
            // rewind : true,
            // loopAdditionalSlides : 1,
            paginationClickable: false ,
            simulateTouch : true,  //드래그 
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
                
            }
        });




        
        //data-swiper-slide-index = "0"

      

    }

    
    // #ranking-chart .chart li.active{
    //     background-color: #fff3f3;
    //     font-weight: 500;
    // }

    let index = 1;
    const rankChartSlide = function () {

        //1. 초기화
        $('#ranking-chart .chart li').removeClass('active');
        const parentId = $('#ranking-chart .tabmenu .swiper-slide-active > a').attr('href');


        //2. 변수 값 index의 active 설정
        $(parentId + " > .chart > li:nth-child(" + index + ")").addClass('active');

        //3. if length 보다 넘었을 때 다시 초기화 (1)

        if(index == 5){
            index = 1; 
        }else{
            index++;
        }
    };


    $('#ranking-chart .tabmenu a').click(function(){
        let attr = $(this).attr('href');
        rank_slider(attr);
    });

    let slideIndex = 1;
    const rank_slider = (attr) =>{
        if(attr == undefined){
            attr = '#chart_tab01';
        }

        let parent = $(attr  +'_rank').parent().attr('class');
        // $('#ranking-img .' + parent + ' > ul').css({
        //     'display' : 'none'
        // });

        // $('#ranking-img .' + parent + ' ' + attr + '_rank').css({
        //     'display' : 'block'
        // });


       // console.log('#ranking-img .' + parent + ':not(' + attr + ')');

       console.log('#ranking-img ' + parent);
        // console.log(attr  +'_rank:has()');
        // console.log(parent);
        //카테고리 랭크 이미지 슬라이드
       
    }

    

//    rank_slider();
    //카테고리 랭킹 리스트
    setInterval(rankChartSlide, 3000);

    

    

    
});
 
