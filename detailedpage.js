// ===== 브랜드 + 상품 데이터 =====
const brands = [
  {
    id: "dassai",
    name: "닷사이",
    manufacturer: "아사히주조",
    established: 1948,
    region: "야마구치",
    description:
      "야마구치현 시골 깊숙히 위치한 아사히(旭酒造) 주조는 생산하는 모든 사케를 준마이다이긴죠 등급으로 내기 시작하여 일개 작은 양조장에서 일약 일본 사케시장의 스타로 떠올랐습니다. 주조미의 제왕, 야마다니시키만을 고집하여 빚어내는 닷사이 시리즈는 전통적인 감칠맛과 차분함 위에 단정하나 화려한 향과 기품을 섞어내어 수많은 사케 마니아들을 감탄케 하였습니다. 뿐만 아니라, 특유의 경쾌한 맛과 터치는 수많은 초심자, 여성들을 사케의 세계로 입문시켰습니다. 브랜드네임은'수달의 제사'라는 뜻으로, 수달은 잡은 먹잇감을 물가에 늘어놓는 습성이 있습니다. 학자들이 글을 지을때, 수많은 자료서적들을 펼쳐 놓는것이 그와 비슷한 모습이라 '닷사이'라 부르는데, 좋은 술을 빚기 위해 연구와 노력을 아낌없이 투자하겠다는 신념에서 기인한 것입니다.",
    products: [
      {
        id: "dassai-p1",
        name: "준마이다이긴죠 23",
        price: 2900,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/b58cd6cb08a28.png",
        polishing: "23%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood", "cheese"],
        feature:
          " '아무리 베테랑 농업인이 생산한다 하더라도 반드시 5~10%의 나올수 밖에 없는 것이 주조미의 제왕, 야마다니시키의 숙명입니다.",
        link: "https://sakemura.com/products/%EB%8B%B7%EC%82%AC%EC%9D%B423-%EC%A4%80%EB%A7%88%EC%9D%B4%EB%8B%A4%EC%9D%B4%EA%B8%B4%EC%A3%A0-720ml-%EB%82%98%EB%AC%B4-%EC%BC%80%EC%9D%B4%EC%8A%A4-%EB%A1%9C%EA%B3%A0%EB%B2%84%EC%A0%84%EC%82%AC%EB%B3%B8",
      },
      {
        id: "dassai-p2",
        name: "준마이다이긴죠 39 칸즈쿠리하야부네 나마",
        price: 3500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1f6e90e131905.png",
        polishing: "39%",
        abv: "15%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood"],
        feature:
          "'닷사이 준마이다이긴죠 39를 베이스로 하여, 겨울에 선보이는 한정품입니다. 닷사이 39의 섬세하고 기품있는 풍미에 나마 특유의 신선미가 더해져, 직관적인 맛을 느낄 수 있습니다.",
        link: "https://sakemura.com/products/%EB%8B%B7%EC%82%AC%EC%9D%B439-%EC%B9%B8%EC%A6%88%EC%BF%A0%EB%A6%AC%ED%95%98%EC%95%BC%EB%B6%80%EB%84%A4-%EC%A4%80%EB%A7%88%EC%9D%B4%EB%8B%A4%EC%9D%B4%EA%B8%B4%EC%A3%A0-%EB%82%98%EB%A7%88-720ml",
      },
      {
        id: "dassai-p3",
        name: "준마이다이긴죠 45 스파클링",
        price: 4200,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/5aa051721655a.png",
        polishing: "45%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meal", "meat"],
        feature:
          "닷사이 시리즈의 엔트리급이자 기존 50의 업그레이드 상품입니다. 야마다니시키를  45% 정미하여 빚어낸 준마이 다이긴죠로 균형미있는 향과 깔끔한 감칠맛, 적당한 단맛이 잘 어우러져 있습니다. 취하기 위한 술이 아닌, 맛을 즐기기 위한 술을 목표로 하는 제조사의 집념이 고스란히 담겨 있습니다.",
        link: "https://sakemura.com/products/%EB%8B%B7%EC%82%AC%EC%9D%B445-%EC%A4%80%EB%A7%88%EC%9D%B4%EB%8B%A4%EC%9D%B4%EA%B8%B4%EC%A3%A0-720ml",
      },
    ],
  },
  {
    id: "kubota",
    name: "쿠보타",
    manufacturer: "아사히주조",
    established: 1830,
    region: "니가타",
    description:
      "처음으로 니혼슈를 접한다면 쿠보타를 마셔라'라는 표현이 말해주듯, 사케 마니아는 물론이고 일반인들에게까지 폭넓은 인지도를 자랑하는 브랜드입니다. 맛이 달고 무겁던 사케들이 주류를 이루던 1970년대, 깔끔하고 쌉싸름한 타입이 유행할 것이란 판단에 '쿠보타' 시리즈를 투입하며 시장에 진입, 본고장인 니이가타는 물론이고 전국에 그 맛과 명성을 떨쳤습니다. 현재는 일본내 뿐 아니라 전 세계를 대상으로 그 맛을 선보이는 중입니다. 쿠보타 브랜드 뿐 아니라, 지역에서 사랑받는 '아사히야마'를 시작으로, 프리미엄 라인인 '추구(繼)', '도쿠게츠(得月)'를 비롯해서 준마이 라인인 '엣슈(越州)' 시리즈 등으로 다양한 맛을 소비자들에게 선보이는 중입니다. '상 타기 위한 술빚기가 아닌, 소비자들이 부담없이 마실수 있는 술빚기' 라는 이념하에 콘테스트 등에는 출품하지 않는 점이 특징입니다.",
    products: [
      {
        id: "kubota-p1",
        name: "쿠보타 센주",
        price: 3610,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2c8acbbac0287.png",
        polishing: "55%",
        abv: "15%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood", "meat", "fries"],
        feature:
          "본고장 일본 뿐 아니라 전 세계적으로 부동의 인지도를 자랑하는 사케입니다. 은은하며 투명한 감칠맛이 음식의 맛을 방해하지 않고 입 안을 깔끔히 씻어주어 다음 잔을 재촉합니다. 니가타현의 본질인 탄레이 카라구치 (담백하고 드라이한 맛)를 가장 잘 표현해 냈습니다.",
    link:"https://sakemura.com/products/%EC%BF%A0%EB%B3%B4%ED%83%80-%EC%84%BC%EC%A5%AC-%EC%A4%80%EB%A7%88%EC%9D%B4%EA%B8%B4%EC%A3%A0-720ml"
        },
      {
        id: "kubota-p2",
        name: "쿠보타 만주",
        price: 7540,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/22028cdd2509d.png",
        polishing: "33%",
        abv: "15.5%",
        volume: "100ml, 720ml, 1800ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood", "meat"],
        feature:
          "170년 전통을 지켜온 쿠보타 브랜드의 최고봉으로 국내외에서 절대적인 인지도를 자랑하는 술입니다. 원조 프리미엄 지자케로서의 이름 뿐 아니라, 부드럽고 매끈하며, 중용을 지키는 절제된 감칠맛과 깔끔한 터치로 오랜 기간 많은 분들에게 고급 사케의 기준으로 사랑받아 왔습니다.",
     link:"https://sakemura.com/products/%EC%BF%A0%EB%B3%B4%ED%83%80-%EB%A7%8C%EC%A5%AC-%EC%A4%80%EB%A7%88%EC%9D%B4%EB%8B%A4%EC%9D%B4%EA%B8%B4%EC%A3%A0-720ml"
        },
      {
        id: "kubota-p3",
        name: "쿠보타 설봉 B",
        price: 6580,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/6b804fc8acd3e.png",
        polishing: "33%",
        abv: "16%",
        volume: "500ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood", "meal"],
        feature:
          "'자연 속에서 사케를' 슬로건으로 내걸고, 유명 캠핑메이커인 '스노우피크'와 콜라보하여 등장한 쿠보타 시리즈의 새로운 플래그쉽 제품입니다. 야마하이 양조법으로 빚어내, 탄탄한 감칠맛과 풍부한 볼륨감이 와일드한 자연과 멋지게 어우러집니다. 야마하이의 특성상, 살짝 데워 드시면 더욱 풍부한 맛을 즐길 수 있습니다.",
     link:"https://sakemura.com/products/%EC%BF%A0%EB%B3%B4%ED%83%80-%EC%85%8B%ED%8F%AC-%EC%A4%80%EB%A7%88%EC%9D%B4%EB%8B%A4%EC%9D%B4%EA%B8%B4%EC%A3%A0-500ml"
        },
    ],
  },
  {
    id: "kokuryu",
    name: "고쿠류",
    manufacturer: "고쿠류주조",
    established: 1804,
    region: "후쿠이",
    description:
      "본고장인 후쿠이(福井)현, 나아가서 일본 전국에서도 손꼽히는 명주인 고쿠류를 빚어내는 고쿠류 주조는1804년 창업이래 약 200여년간 한결같은 마음으로 술빚기에 임합니다. 때문에 그 맛은 은은하면서도 깊이있고,뚜렷한 존재감과 섬세함이 서로 어우러져 최고의 밸런스를 선보인다는 찬사를 받습니다.맛 뿐아니라 화려하고 값비싼 기모노용 천을 특수 처리해 만든 아름다룬 라벨 디자인 역시 고쿠류의 자랑입니다. 딸을 시집보내는 부모의 마음으로, 세상에 첫 선을 보이는 술들에 예쁜 옷을 입혀 보내는,이것이 바로 고쿠류 주조가 자신들이 만들어낸 술을 대하는 자세입니다.양조장인들이 한병한병 맛보고 확인할 수 있는 범위 내에서만 수작업으로 귀히 만들어지기에,원하는 이는 많으나 실제로 맛볼수 있는 사람은 한정되어 있는 프리미엄 사케입니다.",
    products: [
      {
        id: "kokuryu-p1",
        name: "고쿠류 다이긴죠",
        price: 5790,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d40d8d6ac6911.png",
        polishing: "50%",
        abv: "16%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["seafood"],
        feature:
          "강하지 않으나 존재감있는 과실계 긴죠향, 상쾌하며 단단한 감칠맛, 투명감있는 목넘김과 여운을 보여주는 고쿠류 프리미엄 라인에의 입문주입니다. 단맛, 산미, 감칠맛, 알코올에서 기인하는 자극감 등, 각각의 요소들이 조화를 이루며 충실감 있는 주질을 선보입니다.",
     link:"https://sakemura.com/products/%EC%BD%94%EC%BF%A0%EB%A5%98-%EB%8B%A4%EC%9D%B4%EA%B8%B4%EC%A3%A0-720ml"
        },
      {
        id: "kokuryu-p2",
        name: "쿠즈류 준마이",
        price: 3490,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/75bec7cdc4ce9.png",
        polishing: "65%",
        abv: "14.5%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meat"],
        feature:
          "니혼슈의 자존심이라 일컬어지는 후쿠이의 명가 코쿠류가 선보이는 “쿠즈류(九頭龍)” 준마이입니다. 최고급 고햐쿠만고쿠를 65% 정미후 긴죠규격의 저온발효를 거쳐 빚었습니다. 쌀 본연의 곡물감을 뚜렷히 남기면서도, 지나치게 무겁지 않은 바디감과 산뜻한 목넘김을 보여줍니다. 차게 드셔도 좋지만 35℃~40℃ 정도로 중탕해 드시면 더욱 풍부한 감칠맛을 경험할 수 있습니다.",
      link:"https://sakemura.com/products/%EC%BF%A0%EC%A6%88%EB%A5%98-%EC%A4%80%EB%A7%88%EC%9D%B4%EC%8A%88-720ml"
        },
      {
        id: "kokuryu-p3",
        name: "쿠즈류 이핑",
        price: 8800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/6c40abd4fab8c.png",
        polishing: "65%",
        abv: "15%",
        volume: "1800ml",
        guchi: "카라구치 (辛口)",
        pairing: ["fries", "meal"],
        feature:
          "후쿠이의 명가 코쿠류가 선보이는 “쿠즈류(九頭龍)” 준마이의 빙온장기숙성 버전입니다. 시간의 흐름으로 더운 부드러워진 감칠맛과 깊이감이 특징입니다. 특히 중탕으로 데워 드실때 최고의 퍼포먼스를 발휘합니다.",
     link:"https://sakemura.com/products/%EC%BF%A0%EC%A6%88%EB%A5%98-%EC%9E%87%ED%95%80-1800ml"
        },
    ],
  },
  {
    id: "kikuhime",
    name: "기쿠히메",
    manufacturer: "기쿠히메주조",
    established: 1570,
    region: "이시카와",
    description:
      "'쌀의 근원적인 맛을 살린, 진정한 식중주'라는 슬로건 아래 그 무엇과도 타협하지 않는 고집스런 술빚기로 유명한 키쿠히메주조는 1570년 창업하여 지금까지 그 고집을 꿋꿋히 지켜오고 있습니다. 같은 지역에 위치하는 '텡구마이'와 함께, 야마하이 양조법의 양대산맥으로써 전통적인 제법을 지키며 발전시키고 있습니다. 키쿠히메 시리즈는 주조미 '야마다니시키'중에서도 특히 품질이 좋은 '특A지구'에서 생산되는 쌀만을 골라 씁니다. 와인의 그랑크뤼와 비슷한 개념인  특A지구 야마다니시키는 여타 일반적인 주조미보다 월등히 뛰어난 양조적성과 맛을 보장합니다. 오랜 경험으로 발전시켜 온 특징적인 장기숙성기술과 특급 재료, 그리고 가격을 도외시한 품질에의 고집은 기쿠히메의 트레이드마크이며, 고가임에도 불구하고 마니아들에게 절찬리에 판매되는 원동력이기도 합니다. 1967년 처음으로 열린 전국신주감평회에서 지금까지 단 한번도 상을 놓치지 않으며 그 실력을 입증해왔습니다.",
    products: [
      {
        id: "kikuhime-p1",
        name: "기쿠히메 기쿠",
        price: 6600,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2999858afe7c5.png",
        polishing: "70%",
        abv: "15.5%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meal"],
        feature:
          "견과류, 캐러멜 등을 연상시키는 우아한 숙성향에 야마다니시키 본래의 감칠맛이 잘 어우러진 기쿠히메 시리즈의 입문상품 입니다. 약 1~2년간 숙성된 다양한 원주를 블렌드하여 만들어졌습니다. 보통주임에도 불구하고, 효고현산 특A지구 야마다니시키를 70%정미하여 제대로 빚어 기쿠히메의 풍미를 잘 느낄 수 있습니다.",
   link:"https://search.rakuten.co.jp/search/mall/菊姫+菊+720/"
        },
      {
        id: "kikuhime-p2",
        name: "기쿠히메 나마겐슈",
        price: 6800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/fd107cf4786e4.png",
        polishing: "70%",
        abv: "19%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat"],
        feature:
          "효고현 요카와시 특A지구에서 생산된 최고급야마다니시키만을 사용하여, 명가 키쿠히메가 빚어낸 겨울사케입니다. 기존 라인업과 달리 숙성 기간없이 신선한 감칠맛과 야마하이 특유의 파워풀한 느낌을 최대한  끌어냈습니다. 국내 최초로 소개되는 키쿠히메의 무로카 나마겐슈 시리즈입니다.",
  link:"https://search.rakuten.co.jp/search/mall/菊姫+生原酒+720/"
        },
      {
        id: "kikuhime-p3",
        name: "기쿠히메 노미키리겐슈",
        price: 7700,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d167969b2b033.png",
        polishing: "70%",
        abv: "19.5%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["cheese", "meal"],
        feature:
          "여름과 가을 사이만 맛볼 수 있는 기쿠히메의 한정주입니다. “노미키리”란 본격적인 장기숙성에 들어가기 전에, 미리 맛을 본다는 의미입니다. 숙성이 주가 되는 기쿠히메의 기존 라인업과 달리 숙성 기간이 비교적 짧아, 신선한 느낌과 원숙미가 공존합니다. 야마하이 특유의 산미. 야마다니시키의 뚜렷한 감칠맛, 고도수 에서 오는 볼륨감이 멋지게 어우러졌습니다.",
     link:"https://search.rakuten.co.jp/search/mall/菊姫+呑切原酒+720/"
        },
    ],
  },
  {
    id: "otokoyama",
    name: "오토코야마",
    manufacturer: "오토코야마주조",
    established: 1655,
    region: "홋카이도",
    description:
      "국내 뿐 아니라 본고장인 일본에서도 수많은 사케들이 '오토코야마'라는 이름으로 자신을 어필하고 있으나, 에도시대부터 전해오는 전통의 명주, 원조임을 주장할수 있는 곳은 바로 홋카이도 아사히카와의 오토코야마뿐입니다. 지역인 홋카이도 내에서 가장 높은 인지도를 자랑하는 사케 답게, 순백의 눈 처럼 깔끔하며 상쾌한 그 맛은 세계주류콩쿠르 등 유수의 주류 컨테스트에서 금상을 수상하면서 입증되었습니다. 특히 1977년유럽 개최된 유럽 주류콩쿠르에서는 사케로서는 최초로 금상을 수여하며 그 이름을 널리 알린 이래, 약 40여년에 걸쳐 다양한 컨테스트에서 금메달을 수상하며 흔들림 없는 고품질 사케를 시장에 선보이고 있습니다.",
    products: [
      {
        id: "otokoyama-p1",
        name: "오토코야마 준마이다이긴죠",
        price: 4500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/ffa16b6dc9d90.png",
        polishing: "38%",
        abv: "16%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["seafood"],
        feature:
          "세계주류 콩쿠르에서 33년간 금메달의 영예를 지켜온 오토코야마는 홋카이도를 대표하는 양조장입니다. 그중 최고급인 준마이다이긴죠는 입 안 가득 느껴지는 청량한 과실향과 품격있는 감칠맛으로 국내외에서 높은 인기를 자랑합니다. 홋카이도 지방의 청명한 기후가 잘 반영된 클래식한 술입니다.",
    link:"https://search.rakuten.co.jp/search/mall/男山+純米大吟醸+720/"
        },
      {
        id: "otokoyama-p2",
        name: "오토코야마 스시부스터",
        price: 3300,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/d0f39fe65c9cd.png",
        polishing: "55%",
        abv: "15%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["seafood"],
        feature:
          "스시와 가장 잘 어울리는 술을 목표로, 오토코야마와 홋카이도현 스시장인조합이 공동개발한 토쿠베츠준마이입니다. 오토코야마 특유의 맑은 감칠맛에 담백한 아로마, 전반적으로 드라이한 느낌으로 마무리했습니다. 스시 네타의 다채로운 맛을 끌어내는데 최적화 된 사케입니다.",
     link:"https://search.rakuten.co.jp/search/mall/男山+スシブースター+720/"
        },
      {
        id: "otokoyama-p3",
        name: "오토코야마 토쿠베츠준마이",
        price: 2800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/ebe5d81e9dd02.png",
        polishing: "55%",
        abv: "16%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["seafood", "fries"],
        feature:
          "세계 주류 콩쿠르에서 33년간 금메달의 영예를 지켜온 오토코야마는 홋카이도지방을 대표하는 최고의 브랜드입니다. 특히 간판상품인 토쿠베츠 준마이는 드라이하면서 풍부한 감칠맛, 깔끔한 목넘김으로 일본 국내 뿐 아니라 전 세계적으로 호평받아, 생산량의 상당부분은 수출로 소비됩니다.",
      link:"https://search.rakuten.co.jp/search/mall/男山+特別純米+720/"
        },
    ],
  },
  {
    id: "kamotsuru",
    name: "가모츠루",
    manufacturer: "가모츠루주조",
    established: 1873,
    region: "히로시마",
    description:
      "수준높은 양조기술로 인해 쟁쟁한 명주들을 선보이는 히로시마에서 단연코 독보적인 인지도를 자랑하는 가모츠루 주조는 1623년 그 근원이 되는 '木村家'로 창업하여 1873년 가모츠루라는 이름을 사용하기 시작했습니다. 1958년, 여타 양조장들에 한발 앞서 다이긴죠주를 판매하기 시작하여 사케시장의 고급화를 견인했던 선두주자로 평가받습니다. 그 실력은 1974년부터 현재까지 전국신주감평회 금상 다수 수상, IWC 2008, 2011년 금메달로 입증되었습니다. ",
    products: [
      {
        id: "kamotsuru-p1",
        name: "가모츠루 다이긴죠 골드",
        price: 5500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/4513e49a17ea0.png",
        polishing: "50%",
        abv: "16.5%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood"],
        feature:
          " 히로시마의 명가, 가모츠루의 플래그십이자 현 일본 황태자의 애음주로서도 유명합니다. 아름다운 순금 벚꽃잎이 병 안에서 하늘거리며, 정갈하고 은은한 긴죠향과 육각수로 빚어낸 부드럽고 진한 감칠맛이 어우러져, 드시는 분의 품격을 더욱 높여 드립니다. 격식있는 자리에 제격입니다.",
      link:"https://search.rakuten.co.jp/search/mall/賀茂鶴+大吟醸+ゴールド+720/"
        },
      {
        id: "kamotsuru-p2",
        name: "가모츠루 준마이 니고리",
        price: 2500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/eeb70a68d2fb1.png",
        polishing: "65%",
        abv: "12.5%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meal"],
        feature:
          "바나나, 배의 뉘앙스와 발랄한 단맛과 산미, 미세하고 부드러운 쌀의 입자감이 잘 어우러진 니고리자케입니다. 쌀 입자의 크기가 매우 작아 입 안에 남지 않으며, 달콤하게 시작하여 청량한 산미로 마무리되는 주질이 특징입니다. ",
     link:"https://search.rakuten.co.jp/search/mall/賀茂鶴+純米+にごり+720/"
        },
      {
        id: "kamotsuru-p3",
        name: "가모츠루 혼죠조 가라구치",
        price: 2200,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1c0367ab5ca22.png",
        polishing: "69%",
        abv: "14.5%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meat"],
        feature:
          "히로시마현 대표브랜드인 카모츠루의 혼죠조입니다. 단맛이 억제된 가벼운 카라구치 타입으로, 부드럽기로 유명한 육각수를 사용하여 호쾌한 목넘김이 특징입니다. 머금은 후 입 안을 깔끔히 정리해주기에 음식 고유의 향미를 더 풍부하게 느낄 수 있습니다",
     link:"https://search.rakuten.co.jp/search/mall/賀茂鶴+本醸造+辛口+720/"
        },
    ],
  },
  {
    id: "gokyou",
    name: "고쿄",
    manufacturer: "사카이주조",
    established: 1871,
    region: "야마구치",
    description:
      "사카이주조는 일본 3대 가교중 하나인 긴타이바시 (錦帯橋) 바로 인근에 위치하며 고쿄(五橋)라는 상품명도 긴타이바시에서 모티브를 따올정도로 자신들의 고장에 각별한 애정을 가진 곳입니다. 고쿄 시리즈는연수를 사용하여 술을 빚기에, 비단결처럼 부드러운 감칠맛이 특징입니다. 창업후 오랜기간 지역민들에게 사랑받아온 곳으로, 최근에는 'FIVE' 시리즈의 발매로 일본 전국의 사케마니아들에게 이름을 알려 해마다 인기가 치솟고 있습니다.",
    products: [
      {
        id: "gokyou-p1",
        name: "고쿄 FIVE BLUE 준마이긴죠 나마",
        price: 4400,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/716a678b05615.png",
        polishing: "60%",
        abv: "14.5%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood"],
        feature:
          "고쿄의 한정라인인 'Five'시리즈의 블루라벨로, 미각을  깨우는 산뜻함이 메인테마입니다. 적당히 볼드한 산미와 상쾌한 탄산감, 부담스럽지 않은 알코올도수와 은은한 감칠맛이 특징으로 싱그럽고 깔끔한 느낌을 선사합니다.",
      link:"https://search.rakuten.co.jp/search/mall/五橋+FIVE+BLUE+720/"
        },
      {
        id: "gokyou-p2",
        name: "고쿄 FIVE RED 준마이카라구치",
        price: 3800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1a3f4bea75797.png",
        polishing: "60%",
        abv: "15%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meat"],
        feature:
          "바나나, 배의 뉘앙스와 발랄한 단맛과 산미, 미세하고 부드러운 쌀의 입자감이 잘 어우러진 니고리자케입니다. 쌀 입자의 크기가 매우 작아 입 안에 남지 않으며, 달콤하게 시작하여 청량한 산미로 마무리되는 주질이 특징입니다. ",
     link:"https://search.rakuten.co.jp/search/mall/五橋+FIVE+RED+720/"
        },
      {
        id: "gokyou-p3",
        name: "고쿄 준마이",
        price: 3000,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/2b645aed32d68.png",
        polishing: "60%",
        abv: "15.5%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meal"],
        feature:
          "히로시마현 대표브랜드인 카모츠루의 혼죠조입니다. 단맛이 억제된 가벼운 카라구치 타입으로, 부드럽기로 유명한 육각수를 사용하여 호쾌한 목넘김이 특징입니다. 머금은 후 입 안을 깔끔히 정리해주기에 음식 고유의 향미를 더 풍부하게 느낄 수 있습니다",
      link:"https://search.rakuten.co.jp/search/mall/五橋+純米+720/"
        },
    ],
  },
  {
    id: "kyurouemon",
    name: "쿠로에몬•키소지",
    manufacturer: "유카와주조",
    established: 1650,
    region: "나가노",
    description:
      "사카이주조는 일본 3대 가교중 하나인 긴타이바시 (錦帯橋) 바로 인근에 위치하며 고쿄(五橋)라는 상품명도 긴타이바시에서 모티브를 따올정도로 자신들의 고장에 각별한 애정을 가진 곳입니다. 고쿄 시리즈는연수를 사용하여 술을 빚기에, 비단결처럼 부드러운 감칠맛이 특징입니다. 창업후 오랜기간 지역민들에게 사랑받아온 곳으로, 최근에는 'FIVE' 시리즈의 발매로 일본 전국의 사케마니아들에게 이름을 알려 해마다 인기가 치솟고 있습니다.",
    products: [
      {
        id: "kyurouemon-p1",
        name: "쿠로에몬 준마이 야마다니시키",
        price: 4400,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/50c96a9f384a0.png",
        polishing: "60%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat", "meal"],
        feature:
          "효고현 토죠(東条)산 특A지구 야마다니시키로 빚은 쿠로에몬입니다. 원료미의 포텐셜을 최대한 끌어내는데 집중하여, 절제된 아로마와 감칠맛, 쿠로에몬 특유의 산미, 은은하고 폭넓은 여운이 조화를 이루어, 전체적으로 차분하고 단단한 주질을 느낄수 있습니다. ",
     link:"https://search.rakuten.co.jp/search/mall/黒右衛門+山田錦+720/"
        },
      {
        id: "kyurouemon-p2",
        name: "쿠로에몬 야마하이준마이 나마겐슈 미야마니시키 13",
        price: 5500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/fc5f047b1a195.png",
        polishing: "65%",
        abv: "13%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meat", "cheese"],
        feature:
          "쿠로에몬의 시그니쳐인 ‘저도수 13’시리즈 중, 가장 잘 알려진 미야마니시키 버전의 여름용 나마입니다. 야마하이 제법으로 미야마니시키가 가진 잠재력을 최대한 끌어내고, 시리즈 공통점인 산미와 나마 특유의 청량감이 더해져 경쾌한 감칠맛과 산뜻한 목넘김을 보여줍니다.",
      link:"https://search.rakuten.co.jp/search/mall/黒右衛門+山廃+生原酒+720/"
        },
      {
        id: "kyurouemon-p3",
        name: "키소지 SPECIAL 혼죠조",
        price: 2200,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1effe542e4fd3.png",
        polishing: "70%",
        abv: "16%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["fries", "meal"],
        feature:
          "유카와주조에서 선보이는 특별한 혼죠조입니다. 알콜첨가의 근본적인 이유인 발향과 경쾌함에 집중하여, 혼죠조 특유의 경쾌함을 십분 살리며 화려한 긴죠향과 매끄러운 단맛, 산뜻한 감칠맛, 깔끔한 피니시를 동시에 이끌어냈습니다.",
      link:"https://search.rakuten.co.jp/search/mall/木曽路+SPECIAL+720/"
        },
    ],
  },
  {
    id: "harusika",
    name: "하루시카",
    manufacturer: "이마니시세이베이쇼텐",
    established: 1884,
    region: "나라",
    description:
      "헤이안시대(700년대)에 시작되어 무로마치 말기 (1500년대)까지 절의 스님들에 의해 만들어진 승방주는 당시 최신기술이었던 정미를 통해 누룩쌀과 담금쌀 모두를 백미로 사용했습니다. 이는 '모로하쿠'로 불리며,고급 사케 양조의 기틀이 되었는데 나라의 유명 브랜드 '하루시카'는 바로 이 모로하쿠의 전통을 그대로 계승한 브랜드입니다. 정미를 중요시하는 전통에 입각하여, '쌀을 깎고, 물을 다듬고, 기술을 연마하여 마음을 깎는다'는 가훈을 가집니다. 이를 바탕으로 편안한 목넘김과 부드럽고 깔끔한 고품격 사케를 빚어냅니다.",
    products: [
      {
        id: "harusika-p1",
        name: "하루시카 준마이긴죠 210일 숙성",
        price: 3800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/13fe034bf8aec.png",
        polishing: "55%",
        abv: "17%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat", "meal"],
        feature:
          "사슴으로 유명한 나라현을 대표하는 하루시카의 준마이긴죠입니다. 효고현산 야마다니시키로 빚어내, 화려한 과실향을 자랑하는 하루시카의 시보리다테 나마자케를 -5도에서 210일간 숙성후 병입했습니다. 화려한 긴죠향에 숙성을 통해 얻어진 매끄러운 주질과 응축된 감칠맛, 부드러운 목넘김이 특징입니다.",
      link:"https://search.rakuten.co.jp/search/mall/春鹿+210日+720/"
        },
      {
        id: "harusika-p2",
        name: "사쿠라 준마이",
        price: 2700,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/5b79a1bbae0bc.png",
        polishing: "70%",
        abv: "15%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat"],
        feature:
          "나라현 하루시카주조의 엔트리급 상품으로, 쿄토산 야마다니시키를 100%사용해 빚어냈습니다. 준마이 등급이지만 긴죠급 향을 가졌으며, 또한 준마이의 특징인 부드러운 볼륨감과 감칠맛 역시 함께 가지고 있습니다. 부담없는 가격으로 긴죠와 준마이 두 특성을 동시에 즐겨볼수 있는 재미난 사케입니다.",
    link:"https://search.rakuten.co.jp/search/mall/さくら+純米+720/"
        },
      {
        id: "harusika-p3",
        name: "하루시카 히야오로시",
        price: 3300,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/cd0be67579ab7.png",
        polishing: "60%",
        abv: "15%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meal", "seafood"],
        feature:
          "사슴으로 유명한 나라현을 대표하는 하루시카의 히야오로시입니다. 한겨울에 빚어 여름내 가볍게 숙성되어, 신주의 생명력과 숙성주의 차분함이 하나로 뭉쳤습니다. 부드러운 긴죠향으로 시작하여, 알맞게 숙성된 고급스러운 감칠맛, 그리고 부드러운 단맛과,산뜻한 여운이 어우러집니다",
     link:"https://search.rakuten.co.jp/search/mall/春鹿+ひやおろし+720/"
        },
    ],
  },
  {
    id: "nambubijin",
    name: "남부비진",
    manufacturer: "남부비진주조  ",
    established: 1902,
    region: "이와테",
    description:
      "마시는 순간 입 가에 절로 미소가 떠오르는 술' 을 경영이념으로 하는 남부비진 주조는 1092년, 이와테현에서 창업했습니다. 유명한 양조장인 집단인 '노토토지'와 쌍벽을 이루는 '난부토지' 계승자들이 대대로 양조를 담당하여 매 해 수준높은 사케들을 선보이기에 전국신주감평회를 비롯하여 일본 국내외 각종 컨테스트에서 금상을 휩쓰는 중입니다. 해외에서 'Southern Beauty'라는 이름으로 잘 알려져 있으며, 일본항공 퍼스트클래스, 아랍에미리트항공 퍼스트클래스 기내 제공주로 선정되어 그 매력을 세계인들에게 선보이고 있습니다. *전제품 비건, 코셔인증",
    products: [
      {
        id: "nambubijin-p1",
        name: "심백 야마다니시키 준마이다이긴죠",
        price: 5500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8588659df2819.png",
        polishing: "50%",
        abv: "15.5%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood"],
        feature:
          "양조장인들의 유파중 하나인 '남부토지'의 원조 남부비진에서주조호적미별 준마이다이긴죠 시리즈를 완성하였습니다. 주조미 중에서 가장 으뜸인 야마다니시키의 심백(쌀의 중심부)을 모티브로 한 라벨 디자인과 상품명으로 사용할만큼 야마다니시키의 특성이 잘 살아있습니다. 화려한 향과 깊이있고 부드러운 맛의 하모니를 즐길 수 있습니다.",
     link:"https://search.rakuten.co.jp/search/mall/心白+山田錦+720/"
        },
      {
        id: "nambubijin-p2",
        name: "남부비진 긴죠",
        price: 3300,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/eb126165fb38d.png",
        polishing: "60%",
        abv: "14%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["seafood"],
        feature:
          "이와테현의 명주, 남부비진의 간판상품입니다. 차분하며 은은한 과실향에 부드러운 맛이 특징입니다. 식재료와의 궁합을 최우선으로 고려했기에, 기복 없이 질리지 않는 맛을 선보입니다. 차게는 물론, 데워 드셔도 훌륭한 퍼포먼스를 보여주는 부담없는 한 병입니다.",
     link:"https://search.rakuten.co.jp/search/mall/南部美人+吟醸+720/"
        },
      {
        id: "nambubijin-p3",
        name: "남부비진 토쿠베츠준마이",
        price: 3000,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/97b0bfcc23fee.png",
        polishing: "55%",
        abv: "15.5%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["seafood", "meal"],
        feature:
          "이와테현의 명주, 남부비진의 간판상품입니다. 차분하며 은은한 과실향에 부드러운 맛이 특징입니다. 식재료와의 궁합을 최우선으로 고려했기에, 기복 없이 질리지 않는 맛을 선보입니다. 차게는 물론, 데워 드셔도 훌륭한 퍼포먼스를 보여주는 부담없는 한 병입니다.",
      link:"https://search.rakuten.co.jp/search/mall/南部美人+特別純米+720/"
        },
    ],
  },
  {
    id: "dewazakura",
    name: "데와자쿠라",
    manufacturer: "데와자쿠라주조",
    established: 1892,
    region: "야마가타",
    description:
      "수준높은 긴죠, 다이긴죠의 생산지로서 이름높은 야마가타현에서 맛과 인지도 공히 수위를 다투는 사케가 바로 '데와자쿠라'입니다. 이를 생산하는 데와자쿠라 주조는 1892년 창업하여 130여년의 시간동안 고품질 사케 만들기를 게을리 하지 않았습니다. 지금은 익숙한 '긴죠'라는 카테고리가 오로지 출품용으로만 빚어지고, 일반 시장에 유통되지 않았을 때, 믿기지 않을 정도로 파격적인 가격으로 '오카긴죠'를 출시하여 일대 파란을 일으켰던 이야기는 두고두고 마니아들의 입에 회자됩니다.당시 출시된 데와자쿠라 긴죠를 처음으로 마시고 사케의 길로 들어선 이들도 엄청났다고 합니다. 그 때의 맛 그대로, 지금에 이르기까지, 변함없이  품질좋은 사케를 꾸준히 빚어내고 있습니다. 지역인 야마가타현, 나아가 일본 사케시장 전체에 있어, 긴죠슈의 기준이자 표준, 그리고 모범이되는 양조장입니다.",
    products: [
      {
        id: "dewazakura-p1",
        name: "유끼만만 5년숙성",
        price: 6600,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8ac1788bb3d5b.png",
        polishing: "35%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat", "cheese"],
        feature:
          "유키만만은 데와자쿠라 주조가 자랑하는 저온숙성창고에서 5년간 -5도로 숙성 시킨 빈티지 다이긴죠입니다. 섬세함을 유지하기 위해 무압력으로 자루에 담아 방울져 떨어지는 술만 받아모아 병입후 숙성을 거쳤기에 차분한 긴죠향과 담백하지만 힘있는 감칠맛이 특징입니다. 빙온숙성주 특유의 깊이있는 숙성감을 제대로 맛볼수 있습니다.",
      link:"https://search.rakuten.co.jp/search/mall/雪漫々+5年+720/"
        },
      {
        id: "dewazakura-p2",
        name: "데와자쿠라 유키메가미",
        price: 3800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/4adb0a4e1a625.png",
        polishing: "50%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meal"],
        feature:
          "다이긴죠 전용으로 개발된 야마가타현 주조미인 '유키메가미'를 48% 정미하여 빚어낸 데와자쿠라의 준마이다이긴죠입니다. 풋사과 뉘앙스의 화려한 과실계 긴죠향을 극대화하고 오일리한 단맛과 깔끔한 감칠맛을 배치하여 준마이다이긴죠 특유의 고급감을 명확히 체험하게끔 합니다.",
     link:"https://search.rakuten.co.jp/search/mall/出羽桜+雪女神+720/"
        },
      {
        id: "dewazakura-p3",
        name: "데와자쿠라 준마이긴죠",
        price: 3300,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/f28dbb27981f8.png",
        polishing: "60%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat", "cheese"],
        feature:
          "쥬욘다이와 함께 야마가타 사케의 양대산맥을 이루는 데와자쿠라. 긴죠왕국이라 불리는 야마가타현의 현재를 있게 한 일등공신이기도 합니다. 차분하나 뚜렷하고 향기로운 과실계 긴죠향에 단맛으로 시작하여 볼륨감있는 감칠맛이 퍼지고 이후 단정한 여운만이 남습니다. 어느 한부분 모자라고 넘침 없이 훌륭한 조화를 보여주는, 실로 긴죠슈의 교과서라 할 만한 사케가 바로 데와자꾸라 준마이긴죠입니다.",
    link:"https://search.rakuten.co.jp/search/mall/出羽桜+純米吟醸+720/"
        },
    ],
  },
  {
    id: "kamoshibito",
    name: "카모시비토 쿠헤이지",
    manufacturer: "반조양조",
    established: 1789,
    region: "아이치",
    description:
      "미식가들의 기준, 미슐랭 스타 레스토랑의 와인리스트에 사케로서는 처음으로 리스팅 된 '카모시비토 쿠헤이지'. 일본을 넘어 전 세계급의 사케가 된 쿠헤이지는 아이치현에 위치하는 '반죠주조'에서 태어났습니다. 일식과 어울리는 와인이 존재하듯, 거꾸로 프랑스 요리에 어울리는 사케 역시 존재할수 있다는 믿음을 가진 15대 사장 쿠헤이지씨는, 이를 단순한 이상으로 두지 않고 끊임없는 도전 끝에 현실화시켰습니다. 와인의 '도멘'개념을 응용하여 양조장 소유의 논에서 자신들만을 위한 주조미를 재배하며, 술이 가지는 고유한 맛을 남김없이 고객들에게 전달하기 위해 여과 과정을 최소화하고, 숙성감을 얻을수 있게끔 장기보관에 적합한 주질로 사케를 빚어냅니다.",
    products: [
      {
        id: "kamoshibito-p1",
        name: "카노치 준마이다이긴죠",
        price: 5500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/a9896292923ab.png",
        polishing: "40%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood"],
        feature:
          "‘카노치(彼の地)’는 별천지, 유토피아를 의미합니다. 마시는 이로 하여금 사케맛의 새로운 세계를 경험하게끔 하려는, 양조장의 철학이 담긴 이름입니다. 상큼한 산미와 미세한 탄산의 발랄함, 그리고 복잡한 과실향이 아로새겨진 맛을 선보입니다. 레이블에 원료미의 수확연도를 기재하여 숙성을 통해 얻어지는 원숙미와 시간의 흐름을 즐겨보기를 권합니다.",
      link:"https://search.rakuten.co.jp/search/mall/叶+純米大吟醸+720/"
        },
      {
        id: "kamoshibito-p2",
        name: "카모시비토 쿠헤이지오두디지",
        price: 4800,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/8b334d9b3633b.png",
        polishing: "50%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meat", "meal"],
        feature:
          "미슐랭 스타 레스토랑 와인리스트에 단골손님으로 등장하기로 유명한 카모시비토 쿠헤지 시리즈의 간판상품입니다. 주조미 야마다니시키의 특징인 볼륨감을 충분히 살리며 절제된 산미와 탄산감으로 양식 전반과 훌륭한 상성을 보여줍니다. 숙성을 염두에 두고 나온 제품으로, 쌀의 생산년도가 빈티지 개념으로 명기되어 있습니다.",
     link:"https://search.rakuten.co.jp/search/mall/醸し人九平次+EAU+DU+DÉSIR+720/"
        },
      {
        id: "kamoshibito-p3",
        name: "카모시비토 쿠헤이지 오마치 쏘바쥬",
        price: 5500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/83e825107a5f1.png",
        polishing: "50%",
        abv: "16%",
        volume: "720ml",
        guchi: "아마구치 (甘口)",
        pairing: ["meal", "cheese"],
        feature:
          "'SAUVAGE'는 '야성미'를 의미합니다. 쿠헤이지씨는 와일드함이 돋보이는 주조미인 오마치를 자신만의 방식으로 해석하여, 쏘바쥬를 만들어냈습니다. 바닐라향이 돋보이는 신선한 열대과일 베이스 아로마, 오마치 특유의 풍성한 감칠맛, 오렌지필 뉘앙스 산미와 쌉싸름한 피니시를 즐길 수 있습니다.",
      link:"https://search.rakuten.co.jp/search/mall/醸し人九平次+雄町+720/"
        },
    ],
  },
  {
    id: "takara",
    name: "송죽매",
    manufacturer: "다카라주조",
    established: 1842,
    region: "효고",
    description:
      "1920년대, 당시 시장에는 다양한 타입의 사케들이 자웅을 겨루고 있었습니다. 이 때 본격적으로 등장한 타카라주조의 쇼치쿠바이(松竹梅)는 크리미한 부드러움과 개성적인 감칠맛의 조화로 비교적 비싼 가격임에도 불구하고 당대 술꾼들의 입맛을 사로잡았습니다. 이같은 인기를 바탕으로, 현재는 일본내 생산량 2위의 글로벌 회사가 되었지만, 예부터 마시는 이의 기쁨과 행복을 기원하며 술을 빚어왔던 초심은 그대로입니다. 많은 이들에게 부담없이 사랑받는 사케 뿐 아니라, '현대의 기술'과'전통기술'의 완벽한 융합, 그리고 그로 인해 만들어낼 수 있는 최고품질의 사케 단 한병을 위해, 전체가 흰색으로 된 전용 양조장인 '시라카베쿠라(白壁藏)를 새로이 지어 오늘도 끊임없는 도전에 매진하고 있습니다. 그 열정과 품질은 전국신주감평회 2003년부터 현재까지 매회 수상하며 입증되고 있습니다.",
    products: [
      {
        id: "takara-p1",
        name: "송죽매 다이긴죠",
        price: 4000,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/97c4d04562a6b.png",
        polishing: "50%",
        abv: "17.5%",
        volume: "640ml",
        guchi: "아마구치 (甘口)",
        pairing: ["seafood"],
        feature:
          "전통과 현대의 기술을 융합을 위해 만들어진 타카라주조의 특별한 양조장인 '시라카베쿠라'에서 빚어낸 다이긴죠입니다. 니혼슈 본연의 향기와 맛을 살리기 위하여 여과 및 가수 처리를 하지 않았기에, 농밀한 향기와 존재감 있게 다가오는 맛이 특징입니다.",
    link:"https://search.rakuten.co.jp/search/mall/松竹梅+大吟醸+640/"
        },
      {
        id: "takara-p2",
        name: "송죽매 토쿠베츠준마이",
        price: 2500,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1281d0dd27c1a.png",
        polishing: "60%",
        abv: "15%",
        volume: "640ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meal"],
        feature:
          "캘리포니아 세크라멘토산 청정미를 60%까지 정미하여, 긴죠 제조법으로 저온발효 시킨 긴죠규격 준마이슈입니다. 부드러운 향과 맛, 그리고 볼륨감의 밸런스가 잘 잡혀있어, 대부분의 음식과 평균이상의 상성을 보여주며 뛰어난 가격대 성능비가 특징입니다.",
    link:"https://search.rakuten.co.jp/search/mall/松竹梅+特別純米+640/"
        },
      {
        id: "takara-p3",
        name: "송죽매 준마이",
        price: 2300,
        img: "https://cdn-optimized.imweb.me/upload/S202306199fc9cf6c2fa3f/1ef0540186cd3.png",
        polishing: "70%",
        abv: "15%",
        volume: "720ml",
        guchi: "카라구치 (辛口)",
        pairing: ["meal", "meat"],
        feature:
          "송죽매가 세계를 겨냥해 야심차게 빚은 준마이로서, 2011년 사케 품평회(USA) 금메달 수상했을 정도로 안정된 맛을 자랑합니다. 전통적인 곡물계열 감칠맛에 풋사과, 멜론 등을 연상케 하는 은은한 과실향이 가볍게 얹혀있어 안주의 맛을 가리지 않으며, 뛰어난 가성비로 인해 부담없이 즐기기 좋습니다.",
     link:"https://search.rakuten.co.jp/search/mall/松竹梅+純米+750/"
        },
    ],
  },

  // ... 나머지 13개 브랜드도 동일 구조로 추가
];
localStorage.setItem("brands", JSON.stringify(brands));

// ===== DOM 요소 =====
const productListEl = document.querySelector(".product-list");
const brandNameEl = document.getElementById("brandName");
const brandInfoEl = document.getElementById("brandInfo");
const brandDescEl = document.getElementById("brandDescription");

// URL에서 brand 파라미터 읽기
const params = new URLSearchParams(location.search);
const brandIdFromUrl = params.get("brand"); // 예: "dassai"

// brandId로 index 찾기
let currentBrandIndex = 0;
if (brandIdFromUrl) {
  const idx = brands.findIndex((b) => b.id === brandIdFromUrl);
  if (idx !== -1) currentBrandIndex = idx;
}

// ✅ 데이터는 어떤 페이지에서든 쓸 수 있게 먼저 공개
window.BRANDS = brands;

// ✅ brand 페이지에서만 showBrand 실행되게 가드
if (productListEl && brandNameEl && brandInfoEl && brandDescEl) {
  showBrand(currentBrandIndex);
}

function showBrand(index) {
  const brand = brands[index];

  // 히어로 영역
  brandNameEl.textContent = brand.name;
  brandInfoEl.textContent = `${brand.manufacturer} / 설립연도 ${brand.established} / 지역 ${brand.region}`;
  brandDescEl.textContent = brand.description;

  // 기존 상품 제거
  productListEl.innerHTML = "";

  // 상품 생성
  brand.products.forEach((product) => {
    // 카드 생성
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => showDetail(product.id);
    card.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">¥${product.price.toLocaleString()}</p>
        `;
    productListEl.appendChild(card);

    // 상세 페이지 생성
    const existingDetail = document.getElementById(product.id);
    if (existingDetail) existingDetail.remove(); // 중복 방지

    const detailSection = document.createElement("section");
    detailSection.id = product.id;
    detailSection.className = "detail hidden";
    detailSection.innerHTML = `
          <div class="detail-wrap">
            <div class="detail-image">
              <img src="${product.img}" />
            </div>
            <div class="detail-info">
              <h2>${product.name}</h2>
              <table class="info-table">
                <tr><th>정미율</th><td>${product.polishing}</td></tr>
                <tr><th>도수</th><td>${product.abv}</td></tr>
                <tr><th>용량</th><td>${product.volume}</td></tr>
                <tr><th>제품설명</th><td>${product.feature}</td></tr>
                <tr><th>맛</th><td>${product.guchi}</td></tr>
                <tr><th>페어링 메뉴</th><td>${product.pairing}</td></tr>
              </table>
              <p class="detail-price">¥${product.price.toLocaleString()}</p>
              <div class="detail-buttons">
              
              <button 
    class="buy-btn"
    onclick="window.open('${product.link}', '_blank')"
  >
    구매하기
  </button>
                <button onclick="goBack()" class="back-btn">목록으로</button>
              </div>
            </div>
          </div>
        `;
    document.body.appendChild(detailSection);
  });
}

function showDetail(id) {
  document.getElementById("brandHero").classList.add("hidden");
  document.getElementById("list").classList.add("hidden");
  document
    .querySelectorAll(".detail")
    .forEach((el) => el.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goBack() {
  document.getElementById("brandHero").classList.remove("hidden");
  document.getElementById("list").classList.remove("hidden");
  document
    .querySelectorAll(".detail")
    .forEach((el) => el.classList.add("hidden"));
}

Array.isArray(p.pairing) && p.pairing.includes(tabKey);

window.BRANDS = brands;
