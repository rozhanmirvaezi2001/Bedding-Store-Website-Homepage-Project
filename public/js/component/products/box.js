let fetchBox = async () => {

    let res = await axios("http://localhost:3000/box");

    let data = res.data.map((elem) => {

        return `
        <div class="swiper-slide">

            <div class="products-card">

                <div class="products-image">

                    <img src="${elem.img}" alt="${elem.title}">

                    <div class="products-icons">

                        <span><i class="bi bi-heart-fill" style="font-size: 18px; padding-top:4px; line-height: 3px; "></i></span>

                        <span><i class="bi bi-bookmark-star-fill" style="font-size: 18px; line-height: 3px;"></i></span>

                    </div>

                </div>

                <div class="products-content">

                    <h3>${elem.title}</h3>

                    <div class="products-stars">

                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>

                    </div>

                    <div class="products-price">

                        ${elem.price}   تومان

                    </div>

                    <button class="products-btn">

                        افزودن به سبد خرید

                    </button>

                </div>

            </div>

        </div>
        `;

    });

    document
        .querySelector(".products-wrapper")
        .insertAdjacentHTML("afterbegin", data.join(""));



}

export default fetchBox;