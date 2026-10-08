let fetchMenu = async () => {
  let menu = "";
  let res = await axios("http://localhost:3000/menu");

  menu = res.data.map((elem) => {

    let subNav = "";

    if (elem.subnav) {
      subNav = `
        <div class="subnav absolute top-14 right-0 z-50 w-40  rounded-xl bg-[#7C5136] border border-[#C8A88D] shadow-2xl overflow-hidden opacity-0 invisible -translate-y-3 transition-all duration-300 ease-out">

          ${elem.subnav.map((sub) => {
        return `
              <a href="${sub.link}"
                 class="block px-5 py-3 text-[#F8F1E7] text-[26px] transition-all duration-300 hover:bg-[#C8A88D] hover:text-[#4E342E] hover:pl-7">
                ${sub.name}
              </a>
            `;
      }).join("")}

        </div>
      `;
    }

    return `
      <div class="nav-item relative">
        <a href="${elem.link}"
           class="block w-26 h-10 leading-10 text-center text-[32px] font-medium text-[#be9573] transition-all duration-300 hover:text-[#7C5136] hover:scale-105">
          ${elem.name}
        </a>

        ${subNav}
      </div>
    `;

  });

  document
    .querySelector(".parent .menu .menu__nav")
    .insertAdjacentHTML("afterbegin", menu.join(""));

  // زیرمنو
  document.querySelectorAll(".nav-item").forEach((item) => {

    const sub = item.querySelector(".subnav");

    if (!sub) return;

    item.addEventListener("mouseenter", () => {

      sub.classList.remove(
        "opacity-0",
        "invisible",
        "-translate-y-3"
      );

      sub.classList.add(
        "opacity-100",
        "visible",
        "translate-y-0"
      );

    });

    item.addEventListener("mouseleave", () => {

      sub.classList.remove(
        "opacity-100",
        "visible",
        "translate-y-0"
      );

      sub.classList.add(
        "opacity-0",
        "invisible",
        "-translate-y-3"
      );

    });

  });

};

export default fetchMenu;