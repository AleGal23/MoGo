const $accs = document.querySelectorAll(".accordion_item");
const $navs = document.querySelectorAll(".nav_link");

// Nav menu
$navs.forEach((el) => {
  el.addEventListener("click", function () {
    $navs.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  });
});

// Accordion
$accs.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");

    let panel = this.nextElementSibdling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
