function showDetail(id) {
  document.getElementById("brandHero").classList.add("hidden");
  document.getElementById("list").classList.add("hidden");

  document.querySelectorAll(".detail").forEach((el) => {
    el.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

function goBack() {
  document.getElementById("brandHero").classList.remove("hidden");
  document.getElementById("list").classList.remove("hidden");

  document.querySelectorAll(".detail").forEach((el) => {
    el.classList.add("hidden");
  });
}