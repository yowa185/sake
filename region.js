const infoBox = document.getElementById("infoBox");

const regionData = {
    "JP-35": { // 야마구치
        name: "야마구치",
        sake: [
            { name: "• 닷사이 [獺祭]", link: "detailedpage.html?brand=dassai" },
            { name: "• 고쿄 [五橋]", link: "detailedpage.html?brand=gokyou" }
        ],
        position: { x: 390, y: 610 },
        iconPos: { x: 355, y: 670 }
    },
    "JP-18": { // 후쿠이
        name: "후쿠이",
        labelId: "fukui-label",
        sake: [{ name: "• 고쿠류 [黒龍]", link: "detailedpage.html?brand=kokuryu" }],
        position: { x: 590, y: 530 },
        iconPos: { x: 570, y: 576 }
    },
    "JP-15": { // 니가타
        name: "니가타",
        labelId: "niigata-label",
        sake: [{ name: "• 쿠보타 [久보타]", link: "detailedpage.html?brand=kubota" }],
        position: { x: 710, y: 440 },
        iconPos: { x: 690, y: 485 }
    },
    "JP-01": { // 홋카이도
        name: "홋카이도",
        labelId: "hokkaido-label",
        sake: [{ name: "• 오토코야마 [男山]", link: "detailedpage.html?brand=otokoyama" }],
        position: { x: 870, y: 170 },
         iconPos: { x: 860, y: 135 }
    },
    "JP-17": { // 이시카와
        name: "이시카와",
        labelId: "ishikawa-label",
        sake: [{ name: "• 기쿠히메 [菊姫]", link: "detailedpage.html?brand=kikuhime" }],
        position: { x: 590, y: 500 },
        iconPos: { x: 590, y: 530 }
    },
    "JP-34": { // 히로시마
        name: "히로시마",
        labelId: "hiroshima-label",
        sake: [{ name: "• 가모츠루 [賀茂鶴]", link: "detailedpage.html?brand=kamotsuru" }],
        position: { x: 440, y: 600 },
        iconPos: { x: 410, y: 650 }
    },
    "JP-20": { // 나가노
        name: "나가노",
        labelId: "nagano-label",
        sake: [{ name: "• 쿠로에몬 [九郎右衛門]", link: "detailedpage.html?brand=kyurouemon" }],
        position: { x: 670, y: 520 },
        iconPos: { x: 648, y: 560 }
    },
    "JP-29": { // 나라
        name: "나라",
        labelId: "nara-label",
        sake: [{ name: "• 하루시카 [春鹿]", link: "detailedpage.html?brand=harusika" }],
        position: { x: 560, y: 620 },
        iconPos: { x: 552, y: 665 }
    },
    "JP-03": { // 이와테
        name: "이와테",
        labelId: "iwate-label",
        sake: [{ name: "• 난부비진 [南部美人]", link: "detailedpage.html?brand=nambubijin" }],
        position: { x: 820, y: 325 },
        iconPos: { x: 798, y: 368 }
    },
    "JP-06": { // 야마가타
        name: "야마가타",
        labelId: "yamagata-label",
        sake: [{ name: "• 데와자쿠라 [出羽桜]", link: "detailedpage.html?brand=dewazakura" }],
        position: { x: 760, y: 390 },
        iconPos: { x: 744, y: 435 }
    },
    "JP-28": { // 효고
        name: "효고",
        labelId: "hyogo-label",
        sake: [{ name: "• 송죽매 [松竹梅]", link: "detailedpage.html?brand=takara" }],
        position: { x: 520, y: 580 },
        iconPos: { x: 504, y: 627 }

    }
};

document.querySelectorAll("svg path").forEach(path => {
    // 마우스가 들어왔을 때
    path.addEventListener("mouseenter", (e) => {
        const id = path.id;
        
        // 데이터가 없는 지역(강조되지 않은 지역)은 박스를 보여주지 않음
        if (!regionData[id]) {
            infoBox.style.display = "none";
            return;
        }

        const region = regionData[id];

        // HTML 내용 생성
        infoBox.innerHTML = `
            <h3>${region.name}</h3>
            <div class="sake-list">
                ${region.sake.map(s => `<a href="${s.link}">${s.name}</a>`).join("")}
            </div>
        `;

        // 박스 보이기
        infoBox.style.display = "block";

        // 위치 설정 (CSS에서 transition이 있다면 부드럽게 이동)
        infoBox.style.left = region.position.x + "px";
        infoBox.style.top = region.position.y + "px";
    });
});

// 지도 밖(wrapper)으로 마우스가 완전히 나가면 박스 숨기기
document.querySelector(".map-wrapper").addEventListener("mouseleave", () => {
    infoBox.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const iconLayer = document.getElementById("icon-layer");
    const tokkuriSrc = "./region/tokkuri.svg" 

    Object.keys(regionData).forEach(id => {
        const data = regionData[id];
        
        const icon = document.createElement("img");
        icon.src = tokkuriSrc;
        icon.className = "tokkuri-icon";

        const posX = data.iconPos ? data.iconPos.x : data.position.x;
        const posY = data.iconPos ? data.iconPos.y : data.position.y;
        
        icon.style.left = posX + "px";
        icon.style.top = posY + "px";
        iconLayer.appendChild(icon);
    });
});
