import fetchMenu from "./component/nav/nav.js";
import fetchSlider from "./component/slider/slider.js";
import fetchsliderimg from "./component/slider/sliderimg.js";
import fetchToshak from "./component/products/toshak.js"
import fetchBox from "./component/products/box.js";
import fetchOther from "./component/products/other.js";
import fetchBlog from "./component/blogs/blog.js"; 


async function allData() {
  await fetchMenu();
  await fetchSlider();
  await sliderCode();
  await fetchsliderimg();
  await fetchToshak();
  await toshakCode();
  await fetchBox();
  await boxCode();
  await fetchOther();
  await otherCode();
  await fetchBlog();

}
allData();

// swiper slider
function sliderCode() {
  var swiper = new Swiper(".mySwiperHome", {

    loop: true,

    centeredSlides: true,

    spaceBetween: 30,

    autoplay: {

        delay: 3500,
        disableOnInteraction: false,

    },

    pagination: {

        el: ".home-pagination",
        clickable: true,

    }

});
};

//toshak
function toshakCode(){
  var swiper =  new Swiper(".mySwiperProducts", {

        slidesPerView:4,

        spaceBetween:25,

        loop:true,

        speed:900,

        autoplay:{
            delay:3500,
            disableOnInteraction:false,
        },

        pagination:{
            el:".products-pagination",
            clickable:true,
        },

        navigation:{
            nextEl:".products-next",
            prevEl:".products-prev",
        },

        breakpoints:{

            320:{
                slidesPerView:1,
            },

            640:{
                slidesPerView:2,
            },

            992:{
                slidesPerView:3,
            },

            1400:{
                slidesPerView:4,
            }

        }

    });
};

//box
function boxCode(){
  var swiper =  new Swiper(".mySwiperProductss", {

        slidesPerView:4,

        spaceBetween:25,

        loop:true,

        speed:900,

        autoplay:{
            delay:3500,
            disableOnInteraction:false,
        },

        pagination:{
            el:".products-pagination",
            clickable:true,
        },

        navigation:{
            nextEl:".products-next",
            prevEl:".products-prev",
        },

        breakpoints:{

            320:{
                slidesPerView:1,
            },

            640:{
                slidesPerView:2,
            },

            992:{
                slidesPerView:3,
            },

            1400:{
                slidesPerView:4,
            }

        }

    });
};

//other
function otherCode(){
  var swiper =  new Swiper(".mySwiperProductsss", {

        slidesPerView:4,

        spaceBetween:25,

        loop:true,

        speed:900,

        autoplay:{
            delay:3500,
            disableOnInteraction:false,
        },

        pagination:{
            el:".products-pagination",
            clickable:true,
        },

        navigation:{
            nextEl:".products-next",
            prevEl:".products-prev",
        },

        breakpoints:{

            320:{
                slidesPerView:1,
            },

            640:{
                slidesPerView:2,
            },

            992:{
                slidesPerView:3,
            },

            1400:{
                slidesPerView:4,
            }

        }

    });
};

