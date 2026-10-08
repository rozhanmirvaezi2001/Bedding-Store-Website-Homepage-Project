let fetchBlog = async () => {
    let blog = "";
    let res = await axios("http://localhost:3000/blog");
    blog = res.data.map((elem) => {
        return `
     <div class="w-82 h-122 bg-[#ffffff81] relative shadow-md border rounded-[22px] border-gray-200 overflow-hidden">

        <!-- Image -->
        <div>

          <img src="${elem.img}" class="w-full h-50 rounded-[22px] object-cover">

          <!-- Date -->
          <div
            class="absolute top-3 right-3 bg-[#c8a78d94] rounded-[10px] w-18 h-10  flex flex-col items-center justify-center shadow">

            <span class="text-2xl font-bold text-amber-950 text-center leading-10">${elem.date}</span>

          </div>
        </div>

        <!-- Content -->
        <div class="pt-6 px-6 pb-8 text-start ">

          <h3 class="font-bold text-[22px] text-amber-950 leading-9 font-[AShams]">
          ${elem.title}
        </h3>

          <!-- icons -->
          <div class="flex justify-start border-b w-[30%] items-center gap-5 text-gray-400 mt-2">

            <div class="flex items-center gap-1 ">
              <i class="bi bi-chat-left-dots-fill"></i>
            </div>

            <div class="flex items-center gap-1">
              <i class="bi bi-share-fill"></i>
            </div>


          </div>

          <!-- text -->
          <p class="text-gray-500 leading-8 mt-3 mb-2 text-[24px]">
            ${elem.text}
          </p>

          <!-- Button -->
          <button class="w-[30%] h-8 bg-[#C8A88D] rounded-[5px] mr-50 hover:bg-[#4B2E1F] transition">
            <a href="#"
              class="inline-block mt-2 text-center leading-0 text-[20px]  text-[#4B2E1F] font-bold hover:text-[#C8A88D] transition">
              ادامه مطلب
            </a>
          </button>
        </div>

      </div>
    
    
    `;
    });
    document
        .querySelector(".parent .Blog ")
        .insertAdjacentHTML("afterbegin", blog.join(""));
};
export default fetchBlog;