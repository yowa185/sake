  const toggle = document.querySelector(".search-toggle");
  const box = document.querySelector(".search-box");

  toggle.addEventListener("click", () => {
    box.classList.toggle("active");
  });
