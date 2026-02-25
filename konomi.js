const prices = [
  2200, 2300, 2700, 2800, 3000, 3300, 3490, 3610, 3800, 4000, 4400, 4500, 4800,
  5180, 5500, 5790, 6580, 6600, 6800, 7540, 7700, 8800, 9120,
];

const range = document.getElementById("priceRange");
const valueSpan = document.getElementById("value");

valueSpan.textContent = `¥${prices[range.value]}`;

range.addEventListener("input", () => {
  const selectedPrice = prices[range.value];
  valueSpan.textContent = `¥${selectedPrice}`;
});
//----------------------- 모달

const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const resultProductsEl = document.getElementById("resultProducts");

// 결과 표시용 요소
const resultPrice = document.getElementById("resultPrice");
const resultFlavor = document.getElementById("resultFlavor");
const resultAlcohol = document.getElementById("resultAlcohol");

console.log(resultPrice);
console.log(resultFlavor);
console.log(resultAlcohol);

// 버튼 클릭 시
openModalBtn.addEventListener("click", () => {
  // 1️⃣ 가격 (슬라이더 → 실제 가격)
  const priceIndex = document.getElementById("priceRange").value;
  const selectedPrice = prices[priceIndex];

  // 2️⃣ 맛
  const flavor =
    document.querySelector('input[name="flavor"]:checked')?.value ??
    "선택 안 함";

  // 3️⃣ 알코올
  const alcohol =
    document.querySelector('input[name="alcohol"]:checked')?.dataset.level ??
    "선택 안 함";

  // 🔥 여기 핵심 (화면에 값 표시)
  document.getElementById("resultPrice").textContent = `¥${selectedPrice}`;
  document.getElementById("resultFlavor").textContent = flavor;
  document.getElementById("resultAlcohol").textContent = alcohol;

  // 4️⃣ 결과 계산
  const results = getResult(priceIndex, flavor, alcohol);
  renderResultProducts(results);

  // 5️⃣ 모달 열기
  modal.style.display = "block";
});

closeBtn.onclick = () => (modal.style.display = "none");

// 배경 클릭 시 닫기
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function getAlcoholLevel(abv) {
  const value = parseFloat(abv); // "17.5%" → 17.5

  if (value >= 12 && value < 14) return "low";
  if (value >= 14 && value < 17) return "mid";
  if (value >= 17 && value <= 19) return "high";
}

function getResult(priceRange, flavor, alcoholLevel) {
  const brands = JSON.parse(localStorage.getItem("brands"));
  const selectedPrice = prices[Number(priceRange)];

  return brands.flatMap((brand) =>
    brand.products
      .filter((item) => {
        const priceOk = item.price <= selectedPrice;
        const flavorOk = !flavor || item.guchi.includes(flavor);
        const alcoholOk =
          !alcoholLevel || getAlcoholLevel(item.abv) === alcoholLevel;

        return priceOk && flavorOk && alcoholOk;
      })
      .map((item) => ({
        ...item,
        brandName: brand.name,
        region: brand.region,
      })),
  );
}
function renderResultProducts(products) {
  resultProductsEl.innerHTML = "";


  console.log(products);
  if (!products || products.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-message";
    emptyMsg.textContent = "아직 준비중입니다";
    resultProductsEl.appendChild(emptyMsg);
    return;
  }
  products.forEach((item) => {
    //  링크 생성
    const link = document.createElement("a");
    const trimmedId = item.id.slice(0, -3);
    link.href = `detailedpage.html?brand=${trimmedId}`;
    link.className = "product-link"; // 스타일용
    // link.target = "_blank"; // 새 창 원하면 주석 해제

    //  카드 컨테이너
    const card = document.createElement("div");
    card.className = "product-card";

    //  이미지
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;

    //  카드 조립
    card.appendChild(img);
    link.appendChild(card);
    resultProductsEl.appendChild(link);
  });
}

// openBtn.addEventListener("click", () => {
//   const price = prices[range.value];

//   const flavor = document.querySelector('input[name="flavor"]:checked').value;

//   const alcohol = document.querySelector('input[name="alcohol"]:checked').value;

//   // URL에 값 실어서 이동
//   location.href = `brand.html?price=${price}&flavor=${flavor}&alcohol=${alcohol}`;
// });
