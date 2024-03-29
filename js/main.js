const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

//Animation
const spans = document.querySelectorAll("h1 span");

spans.forEach((index) =>
  index.addEventListener("mouseover", function (e) {
    index.classList.add("animated", "rubberBand");
  })
);

spans.forEach((index) =>
  index.addEventListener("mouseout", function (e) {
    index.classList.remove("animated", "rubberBand");
  })
);
