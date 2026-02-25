const PAIRING_META = {
  seafood: {
    title: "🍣 해산물",
    desc: "담백한 해산물에는 깔끔한 산미와 향이 있는 긴조/다이긴조가 잘 어울립니다.",
  },
  meat: {
    title: "🍖 육류",
    desc: "감칠맛이 풍부한 준마이/준마이긴조 또는 숙성 사케가 좋습니다.",
  },
  fries: {
    title: "🍤 튀김요리",
    desc: "기름진 맛은 드라이한 타입이나 산미가 있는 사케가 깔끔하게 잡아줘요. 스파클링도 잘 맞습니다.",
  },
  cheese: {
    title: "🧀 치즈",
    desc: "숙성된 코슈 타입이나 농후한 준마이가 좋습니다.",
  },
  meal: {
    title: "🍚 식사류",
    desc: "균형 잡힌 맛의 준마이 사케가 전반적으로 잘 어울립니다.",
  },
};

const SAKES_BY_TAB = {
  seafood: [
    {
      name: "닷사이 준마이다이긴죠23",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/b58cd6cb08a28.png",
      href: "detailedpage.html?brand=dassai",
    },
    {
      name: "닷사이 준마이다이긴죠39 칸즈쿠리하야부네 나마",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1f6e90e131905.png",
      href: "detailedpage.html?brand=dassai",
    },
    {
      name: "쿠보타 센주",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2c8acbbac0287.png",
      href: "detailedpage.html?brand=kubota",
    },
    {
      name: "쿠보타 만주",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/22028cdd2509d.png",
      href: "detailedpage.html?brand=kubota",
    },
    {
      name: "고쿠류 다이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d40d8d6ac6911.png",
      href: "detailedpage.html?brand=kokuryu",
    },
    {
      name: "오토코야마 준마이다이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/ffa16b6dc9d90.png",
      href: "detailedpage.html?brand=otokoyama",
    },
    {
      name: "오토코야마 스시부스터",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d0f39fe65c9cd.png",
      href: "detailedpage.html?brand=otokoyama",
    },
    {
      name: "오토코야마 토쿠베츠준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/ebe5d81e9dd02.png",
      href: "detailedpage.html?brand=otokoyama",
    },
    {
      name: "가모츠루 다이긴죠 골드",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/4513e49a17ea0.png",
      href: "detailedpage.html?brand=kamotsuru",
    },
    {
      name: "하루시카 히야오로시",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/cd0be67579ab7.png",
      href: "detailedpage.html?brand=harusika",
    },
    {
      name: "심백 야마다니시키 준마이다이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8588659df2819.png",
      href: "detailedpage.html?brand=nambubijin",
    },
    {
      name: "남부비진 긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/eb126165fb38d.png",
      href: "detailedpage.html?brand=nambubijin",
    },
    {
      name: "남부비진 토쿠베츠준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/97b0bfcc23fee.png",
      href: "detailedpage.html?brand=nambubijin",
    },
    {
      name: "카노치 준마이다이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/a9896292923ab.png",
      href: "detailedpage.html?brand=kamoshibito",
    },
    {
      name: "송죽매 다이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/97c4d04562a6b.png",
      href: "detailedpage.html?brand=takara",
    },
  ],

  meat: [
    {
      name: "닷사이 준마이다이긴죠45",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/5aa051721655a.png",
      href: "detailedpage.html?brand=dassai",
    },
    {
      name: "쿠보타 센주",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2c8acbbac0287.png",
      href: "detailedpage.html?brand=kubota",
    },
    {
      name: "쿠보타 만주",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/22028cdd2509d.png",
      href: "detailedpage.html?brand=kubota",
    },
    {
      name: "쿠즈류 준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/75bec7cdc4ce9.png",
      href: "detailedpage.html?brand=kokuryu",
    },
    {
      name: "기쿠히메 나마겐슈",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/fd107cf4786e4.png",
      href: "detailedpage.html?brand=kikuhime",
    },
    {
      name: "가모츠루 혼죠조 가라구치",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/eeb70a68d2fb1.png",
      href: "detailedpage.html?brand=kamotsuru",
    },
    {
      name: "고쿄 FIVE RED 준마이카라구치",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1a3f4bea75797.png",
      href: "detailedpage.html?brand=gokyou",
    },
    {
      name: "쿠로에몬 준마이 야마다니시키",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/50c96a9f384a0.png",
      href: "detailedpage.html?brand=kyurouemon",
    },
    {
      name: "쿠로에몬 야마하이준마이 나마겐슈 미야마니시키 13",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/fc5f047b1a195.png",
      href: "detailedpage.html?brand=kyurouemon",
    },
    {
      name: "하루시카 준마이긴죠 210일 숙성",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/13fe034bf8aec.png",
      href: "detailedpage.html?brand=harusika",
    },
    {
      name: "사쿠라 준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/5b79a1bbae0bc.png",
      href: "detailedpage.html?brand=harusika",
    },
    {
      name: "유끼만만 5년숙성",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8ac1788bb3d5b.png",
      href: "detailedpage.html?brand=dewazakura",
    },
    {
      name: "데와자쿠라 준마이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/f28dbb27981f8.png",
      href: "detailedpage.html?brand=dewazakura",
    },
    {
      name: "카모시비토 쿠헤이지오두디지",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8b334d9b3633b.png",
      href: "detailedpage.html?brand=kamoshibito",
    },
    {
      name: "송죽매 준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1ef0540186cd3.png",
      href: "detailedpage.html?brand=takara",
    },
  ],

  fries: [
    {
      name: "쿠보타 센주",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2c8acbbac0287.png",
      href: "detailedpage.html?brand=kubota",
    },
    {
      name: "쿠즈류 이핑",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/6c40abd4fab8c.png",
      href: "detailedpage.html?brand=kokuryu",
    },
    {
      name: "오토코야마 토쿠베츠준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/ebe5d81e9dd02.png",
      href: "detailedpage.html?brand=otokoyama",
    },
    {
      name: "키소지 SPECIAL 혼죠조",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1effe542e4fd3.png",
      href: "detailedpage.html?brand=kyurouemon",
    },
    {
      name: "데와자쿠라 준마이긴죠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/f28dbb27981f8.png",
      href: "detailedpage.html?brand=dewazakura",
    },
  ],
  cheese: [
    {
      name: "닷사이 준마이다이긴죠23",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/b58cd6cb08a28.png",
      href: "detailedpage.html?brand=dassai",
    },
    {
      name: "기쿠히메 노미키리겐슈",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d167969b2b033.png",
      href: "detailedpage.html?brand=kikuhime",
    },
    {
      name: "쿠로에몬 야마하이준마이 나마겐슈 미야마니시키 13",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/fc5f047b1a195.png",
      href: "detailedpage.html?brand=kyurouemon",
    },
    {
      name: "유끼만만 5년숙성",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8ac1788bb3d5b.png",
      href: "detailedpage.html?brand=dewazakura",
    },
    {
      name: "카모시비토 쿠헤이지 오마치 쏘바쥬",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/83e825107a5f1.png",
      href: "detailedpage.html?brand=kamoshibito",
    },
  ],

  meal: [
    {
      name: "닷사이 준마이다이긴죠45",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/5aa051721655a.png",
      href: "detailedpage.html?brand=dassai",
    },
    {
      name: "쿠보타 설봉 B",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/6b804fc8acd3e.png",
      href: "detailedpage.html?brand=kubota",
    },
    {
      name: "쿠즈류 이핑",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/6c40abd4fab8c.png",
      href: "detailedpage.html?brand=kokuryu",
    },
    {
      name: "기쿠히메 기쿠",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2999858afe7c5.png",
      href: "detailedpage.html?brand=kikuhime",
    },
    {
      name: "기쿠히메 노미키리겐슈",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d167969b2b033.png",
      href: "detailedpage.html?brand=kikuhime",
    },
    {
      name: "가모츠루 준마이 니고리",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/c8a3e9c6b1415.png",
      href: "detailedpage.html?brand=kamotsuru",
    },
    {
      name: "쿠로에몬 준마이 야마다니시키",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/50c96a9f384a0.png",
      href: "detailedpage.html?brand=kyurouemon",
    },
    {
      name: "키소지 SPECIAL 혼죠조",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1effe542e4fd3.png",
      href: "detailedpage.html?brand=kyurouemon",
    },
    {
      name: "하루시카 준마이긴죠 210일 숙성",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/13fe034bf8aec.png",
      href: "detailedpage.html?brand=harusika",
    },
    {
      name: "하루시카 히야오로시",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/cd0be67579ab7.png",
      href: "detailedpage.html?brand=harusika",
    },
    {
      name: "남부비진 토쿠베츠준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/97b0bfcc23fee.png",
      href: "detailedpage.html?brand=nambubijin",
    },
    {
      name: "데와자쿠라 유키메가미",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/4adb0a4e1a625.png",
      href: "detailedpage.html?brand=dewazakura",
    },
    {
      name: "카모시비토 쿠헤이지오두디지",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8b334d9b3633b.png",
      href: "detailedpage.html?brand=kamoshibito",
    },
    {
      name: "카모시비토 쿠헤이지 오마치 쏘바쥬",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/83e825107a5f1.png",
      href: "detailedpage.html?brand=kamoshibito",
    },
    {
      name: "송죽매 토쿠베츠준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1281d0dd27c1a.png",
      href: "detailedpage.html?brand=takara",
    },
    {
      name: "송죽매 준마이",
      img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1ef0540186cd3.png",
      href: "detailedpage.html?brand=takara",
    },
  ],
};

console.log("guide-pairing.js loaded!");

const titleEl = document.getElementById("pairingTitle");
const descEl = document.getElementById("pairingDesc");
const gridEl = document.getElementById("sakeGrid");
const tabButtons = document.querySelectorAll(".tab-button");

if (!titleEl || !descEl || !gridEl) {
  console.error("필수 요소를 못 찾음:", { titleEl, descEl, gridEl });
}

function render(tabKey) {
  console.log("render:", tabKey);

  const meta = PAIRING_META[tabKey];
  if (!meta) {
    console.warn("PAIRING_META에 키 없음:", tabKey);
    return;
  }

  titleEl.textContent = meta.title;
  descEl.textContent = meta.desc;

  const items = SAKES_BY_TAB[tabKey] ?? [];
  gridEl.innerHTML = items
    .map(
      (item) => `
    <a class="sake-card" href="${item.href}">
      <img src="${item.img}" alt="${item.name}">
      <div class="sake-name">${item.name}</div>
    </a>
  `,
    )
    .join("");
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.tab;
    console.log("clicked:", key);

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    render(key);
  });
});

render("seafood");
