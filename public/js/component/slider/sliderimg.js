let fetchsliderimg = async () => {
  let sliderimg = "";
  let res = await axios("http://localhost:3000/sliderimg");
  sliderimg = res.data.map((elem) => {
    return `
    <img src="${elem.image}" alt="${elem.alt}" class=" block w-[48%]  rounded-[30px] shadow-[10px_10px_15px_#7C5136]" >
    `;
  });
  document
    .querySelector(".parent .oldslider .sliderimg ")
    .insertAdjacentHTML("afterbegin", sliderimg.join(""));
};
export default fetchsliderimg;