let fetchToshak = async () => {

    let res = await axios("http://localhost:3000/toshak");

    let data = res.data.map((elem) => {

        return `
        <div class="swiper-slide">

            <div class="product-card">

                <div class="product-image">

                    <img src="${elem.img}" alt="${elem.title}">

                    <div class="product-icons">

                        <span><i class="bi bi-heart-fill" style="font-size: 18px; padding-top:4px; line-height: 3px; "></i></span>

                        <span><i class="bi bi-bookmark-star-fill" style="font-size: 18px; line-height: 3px;"></i></span>

                    </div>

                </div>

                <div class="product-content">

                    <h3>${elem.title}</h3>

                    <div class="product-stars">

                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>

                    </div>

                    <div class="product-price">

                        ${elem.price}   تومان

                    </div>

                    <button class="product-btn">
                        افزودن به سبد خرید

                    </button>

                </div>

            </div>

        </div>
        `;

    });

    document
        .querySelector(".product-wrapper")
        .insertAdjacentHTML("afterbegin", data.join(""));



}

export default fetchToshak;