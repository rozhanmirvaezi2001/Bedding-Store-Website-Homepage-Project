let fetchOther = async () => {

    let res = await axios("http://localhost:3000/other");

    let data = res.data.map((elem) => {

        return `
        <div class="swiper-slide">

            <div class="productss-card">

                <div class="productss-image">

                    <img src="${elem.img}" alt="${elem.title}">

                    <div class="productss-icons">

                        <span><i class="bi bi-heart-fill" style="font-size: 18px; padding-top:4px; line-height: 3px; "></i></span>

                        <span><i class="bi bi-bookmark-star-fill" style="font-size: 18px; line-height: 3px;"></i></span>

                    </div>

                </div>

                <div class="productss-content">

                    <h3>${elem.title}</h3>

                    <div class="productss-stars">

                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>

                    </div>

                    <div class="productss-price">

                        ${elem.price}   تومان

                    </div>

                    <button class="productss-btn">

                        افزودن به سبد خرید

                    </button>

                </div>

            </div>

        </div>
        `;

    });

    document
        .querySelector(".productss-wrapper")
        .insertAdjacentHTML("afterbegin", data.join(""));



}

export default fetchOther;