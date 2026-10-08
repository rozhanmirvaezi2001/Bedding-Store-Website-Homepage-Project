let fetchSlider = async () => {

    let res = await axios("http://localhost:3000/slider");

    let slider = res.data.map((elem) => {

        return `
        <div class="swiper-slide home-slide">

            <img src="${elem.image}" alt="${elem.alt}">

        </div>
        `;

    });

    document
        .querySelector(".home-wrapper")
        .insertAdjacentHTML("afterbegin", slider.join(""));

};

export default fetchSlider;


