function filterTaste(type) {
  const list = document.getElementById("resultList");
  list.innerHTML = "";

  if (type === "dry") {
    list.innerHTML += `<div class="product-card">드라이 추천 사케</div>`;
  }

  if (type === "sweet") {
    list.innerHTML += `<div class="product-card">달콤 추천 사케</div>`;
  }
}
