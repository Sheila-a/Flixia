// const chevron = document.querySelectorAll(".movieArrow");
// const movieList = document.querySelectorAll(".movieList");

// chevron.forEach((movieArrow, i) => {
//   movieArrow.addEventListener("click", () => {
//     //     movieList[i].style.transform = `translateX(${
//     //       movieList[i].computedStyleMap().get("transform")[0].x.value - 270
//     //     }px)`;
//   });
// });
window.onload = function () {
  const circle = document.querySelector(".landing-toggle_ball");
  const displays = document.querySelectorAll(
    ".movieList-container,.movieList-title,.bodyy-iconss,.landing-profile_text,.landing-toggle, .toggle, .nav-link,.linkNav"
  );

  circle.addEventListener("click", () => {
    displays.forEach((display)
     => {
      display.classList.toggle("active");
    });
  });
};
