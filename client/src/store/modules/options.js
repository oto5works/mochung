export default {
  state: {
    formOptions: [
      {
        value: "form1",
        title: "간편하고 빠르게<br />완성하는 스마트 디자인",
        options: [
          "Download all (9,072) Download all (9,072)",
          "Figma plugin / library",
          "Sketch plugin",
          "GitHub",
          "Request an icon",
          "Donate / Patreon",
        ],
      },
      {
        value: "form2",
        title: "자유로운<br />특별한 커스텀 디자인",
        options: [
          "모든 글을 수정할수 있어요",
          "whatever, really",
          "Design file",
          "Donate / Patreon",
        ],
      },
      {
        value: "form3",
        title: "자유로운<br />특별한 커스텀 디자인",
        options: [],
      },
    ],
    form1TabOptions: [
      { title: "디자인", value: "design" },
      { title: "예식 정보", value: "wedding" },
      { title: "주최자 정보", value: "host" },
      { title: "갤러리", value: "gallery" },
      { title: "추가 기능", value: "functions" },
    ],
    form2TabOptions: [
      { title: "메인화면", value: "home" },
      { title: "디자인", value: "design" },
      { title: "예식 정보", value: "wedding" },
      { title: "주최자 정보", value: "host" },
      { title: "추가 기능", value: "functions" },
    ],
    recommendTitleOptions: {
      homeData: ["감사의 인사", "SAVE THE DATE"],
      introData: ["감사의 인사", "INTRO"],
      infoData: ["감사의 인사", "INTRO"],
      locationData: [
        "오시는 길",
        "오시는 길 안내",
        "찾아오시는 길",
        "Location",
        "위치 정보",
      ],
      noticeData: ["예식 공지사항", "공지사항", "notice"],
      galleryData: ["우리들의 행복한 순간들", "갤러리"],
      commentData: ["축하의 메세지를 남겨주세요", "방명록"],
      surveyData: ["게스트 설문조사", "설문조사"],
      depositData: [
        "계좌 정보",
        "축의금 계좌",
        "마음을 전하는 곳",
        "소중한 축의, 결혼 준비에 큰 힘이 됩니다. 감사합니다.",
        "결혼 축하해주세요! 축의금은 아래 계좌로 보내주시면 감사하겠습니다.",
        "계좌 이체 시 송금자 이름 기재 부탁드립니다.",
        "따뜻한 마음으로 보내주신 축의금은 소중하게 사용하겠습니다. 감사합니다.",
        "축하의 꽃바람, 축의금으로 피어나세요!",
        "함께 나누는 축하, 따뜻한 마음으로 받아들입니다. 감사합니다.",
      ],
      albumData: [
        "소중한 추억, 함께 나눠요",
        "결혼식 사진 찍어서 공유해주세요",
        "오늘의 아름다운 순간, 사진으로 남겨주세요",
        "동화 속 결혼, 사진으로 완성해주세요",
      ],
    },
    homeDefaultedOptions: {
      title: "SAVE THE DATE",
      date: "2020-01-01",
      time: "12:00",
      host0: { title: "GROOM", name: "Noah" },
      host1: { title: "BRIDEGE", name: "Chloe" },
      hall: {
        name: "THE ART GALLERY",
        info: "Orchid Ballroom, 2nd Floor",
        address: "District 5, Metro City",
        detail: "45, Sunset Boulevard (Lakeview Heights 123-45)",
      },
    },
    homeStyleOptions: [
      {
        value: "minimalChic",
        title: "Minimal Chic",
        info: "우아하면서도 미니멀한 스타일로, 중요한 정보를 여백 속에 자연스럽게 녹여 깔끔하게 전달합니다.",
        hash: "#모던 #미니멀웨딩 #깔끔한청첩장",
        item: {
          filename: "aaaaa",
          id: "hero-image",
          x: 0,
          y: 5,
          w: 8,
          h: 7,
        },
      },
      {
        value: "elegantSimplicity",
        title: "Elegant Simplicity",
        info: "우아하면서도 미니멀한 스타일로, 중요한 정보를 여백 속에 자연스럽게 녹여 깔끔하게 전달합니다.",
        hash: "#모던 #미니멀웨딩 #깔끔한청첩장",
        item: {
          filename: "aaaaa",
          id: "hero-image",
          x: 0,
          y: 6,
          w: 8,
          h: 6,
        },
      },
      {
        value: "classicElegance",
        title: "Classic Elegance",
        info: "현대적인 감각의 레이아웃과 깔끔한 구성이 특징입니다. 간결하면서도 중요한 정보가 돋보이는 디자인입니다.",
        hash: "#모던청첩장 #심플리시티 #트렌디디자인",
        item: {
          filename: "aaaaa",
          id: "hero-image",
          x: 0,
          y: 5,
          w: 8,
          h: 7,
        },
      },
      {
        value: "modernSimplicity",
        title: "Modern Simplicity",
        info: "최소한의 요소로 필요한 정보만을 직관적으로 표현하는 스타일. 간결하고 세련된 웨딩 초대장에 적합합니다.",
        hash: "#모던 #미니멀웨딩 #깔끔한청첩장 #우아한디자인",
        item: {
          filename: "aaaaa",
          id: "hero-image",
          x: 2,
          y: 4,
          w: 4,
          h: 4,
        },
      },
      {
        value: "welcomingWarmth",
        title: "Welcoming Warmth",
        info: "따뜻한 느낌을 주는 폰트와 감성적인 텍스트로, 손님을 정성스럽게 초대하는 메시지를 담았습니다.",
        hash: "#따뜻한감성 #감성청첩장 #Welcome",
        item: {
          filename: "aaaaa",
          id: "hero-image",
          x: 0,
          y: 6,
          w: 8,
          h: 4,
        },
      },
      {
        value: "elegantFlow",
        title: "Elegant Flow",
        info: "부드러운 글씨체와 미니멀한 구성으로 우아한 느낌을 연출한 디자인입니다.",
        hash: "#우아함 #고급디자인 #심플청첩장",
        item: {
          filename: "aaaaa",
          id: "hero-image",
          x: 0,
          y: 0,
          w: 8,
          h: 12,
        },
      },
    ],
    stampOptions: [
      { value: "", title: "사용 안 함" },
      { value: "bear", title: "bear" },
      { value: "bird", title: "bird" },
      { value: "blooming", title: "blooming" },
      { value: "couple", title: "couple" },
      { value: "flower", title: "flower" },
      { value: "galaxy", title: "galaxy" },
      { value: "steamboat", title: "Steamboat Willie" },
      { value: "pooh", title: "Winnie-the-Pooh by A. A. Milne" },
      { value: "star", title: "star" },
      { value: "hibiscus", title: "Hibiscus" },
    ],
    frameOptions: [
      { value: "", title: "사용 안 함" },
      { value: "flower", title: "Flower" },
      { value: "star", title: "Star" },
      { value: "baroque", title: "Baroque" },
    ],
    designStyleOptions: [
      {
        value: "design1",
        title: "기본",
        info: "Full transparency and control for visitors.",
      },
      {
        value: "design2",
        title: "카드 스타일",
        info: "Full transparency and control for visitors.",
      },
      {
        value: "design3",
        title: "라인 스타일",
        info: "Full transparency and control for visitors.",
      },
    ],
    homeColorOptions: [
      { value: "#ffffff", title: "Pure White" },
      { value: "#BEBEBE", title: "Cool Gray" },
      { value: "#949697", title: "Ultimate Gray" },
      { value: "#5C5B59", title: "Dark Gull Gray" },
      { value: "#000000", title: "Noir" },
    ],
    hostFamilyInfoOptions: [
      { value: "kanji", title: "한자 표시" },
      { value: "flower", title: "국화" },
      { value: "ribbon", title: "추모 리본" },
      { value: "cross", title: "십자가" },
    ],

    hostBankOptions: [
      { title: "국민은행", value: "bankKb" },
      { title: "기업은행", value: "bankIbk" },
      { title: "농협은행", value: "bankNh" },
      { title: "신한은행", value: "bankShinhan" },
      { title: "산업은행", value: "bankKdb" },
      { title: "우리은행", value: "bankWoori" },
      { title: "한국씨티은행", value: "bankCiti" },
      { title: "하나은행", value: "bankKeb" },
      { title: "SC제일은행", value: "bankSc" },
      { title: "경남은행", value: "bankBnk" },
      { title: "광주은행", value: "bankGj" },
      { title: "대구은행", value: "bankDgb" },
      { title: "도이치은행", value: "bankDb" },
      { title: "뱅크오브아메리카", value: "bankBac" },
      { title: "부산은행", value: "bankBusan" },
      { title: "산림조합중앙회", value: "bankSj" },
      { title: "저축은행", value: "bankSb" },
      { title: "새마을금고", value: "bankMg" },
      { title: "수협은행", value: "bankSh" },
      { title: "신협중앙회", value: "bankCu" },
      { title: "우체국", value: "bankPost" },
      { title: "전북은행", value: "bankJb" },
      { title: "제주은행", value: "bankJeju" },
      { title: "카카오뱅크", value: "bankKakao" },
      { title: "케이뱅크", value: "bankKbank" },
      { title: "토스뱅크", value: "bankToss" },
    ],
    audiosOptions: [
      {
        value: "https://www.youtube.com/watch?v=MfaWiGHZAgE",
        title: "卒業",
        info: "by MusMus",
      },
      {
        value: "vbtQoGuccnM",
        title: "inherit the Light Trail",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=3rwrZY2JupA",
        title: "Gertie on a Rainy Day",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=fpT1KqqeHXM",
        title: "Light Up Delight",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=n716YrOap6A",
        title: "아침 이슬의 정원",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=BHchEYjGShY",
        title: "Flying Bed Room",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=MkZ-8C8oGSU",
        title: "변하지 않는 것",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=WPEtbwoVJ50",
        title: "오래된 좋은 날",
        info: "by MusMus",
      },
      {
        value: "https://www.youtube.com/watch?v=WPEtbwoVJ50",
        title: "Tre tipi di formaggio",
        info: "by MusMus",
      },
    ],
    introOptions: [
      {
        title: "꼭 기억하고 싶은 이날",
        content:
          "<p>곁에 있을 때 가장 나다운 모습이</p><p>되게 하는 한 사람.</p><p>꿈을 펼칠 수 있도록</p><p>서로에게 날개가 되어 줄 한 사람.</p><p>그 사람과 삶의 여행을 함께 떠나려고 합니다.</p><p>저희 여행의 출발점에 여러분을 초대하오니</p><p>오셔서 많이 축복해 주시면 큰 기쁨이겠습니다.</p>",
      },
      {
        title: "00월의 어느 멋진 날",
        content:
          "<p>곁에 있을 때 가장 나다운 모습이</p><p>되게 하는 한 사람.</p><p>꿈을 펼칠 수 있도록</p><p>서로에게 날개가 되어 줄 한 사람.</p><p>그 사람과 삶의 여행을 함께 떠나려고 합니다.</p><p>저희 여행의 출발점에 여러분을 초대하오니</p><p>오셔서 많이 축복해 주시면 큰 기쁨이겠습니다.</p>",
      },
      {
        title: "작은 인연으로 만나",
        content:
          "<p>곁에 있을 때 가장 나다운 모습이</p><p>되게 하는 한 사람.</p><p>꿈을 펼칠 수 있도록</p><p>서로에게 날개가 되어 줄 한 사람.</p><p>그 사람과 삶의 여행을 함께 떠나려고 합니다.</p><p>저희 여행의 출발점에 여러분을 초대하오니</p><p>오셔서 많이 축복해 주시면 큰 기쁨이겠습니다.</p>",
      },
      {
        title: "작은 인연으로 만나",
        content:
          "<p>아름다운 꽃에는</p><p>가꾸어 온 사람의 노고가 깃들어 있듯이</p><p>인생의 기쁜 순간에 있어</p><p>도와주신 분들에 대한 고마움을 느낍니다</p><p>언제나 이러한 고마움을 잊지 않고 사랑하며 살겠다는</p><p>소중한 맹세의 시간을 갖고자 합니다</p><p>새로이 함께 서는 저희 두 사람의 모습을</p><p>부디 오셔서 지켜봐 주시기 바랍니다</p>",
      },
      {
        title: "작은 인연으로 만나",
        content:
          "<p>소망이 축복속에서 기쁨으로 이루어지는 날</p><p>저희 두 사람이 하나가 될 뜻깊은 날을 맞게 되었습니다</p><p>소중하고 힘찬 내디딤이 될 수 있도록 꼭 오셔서</p><p>지켜봐 주시면 감사하겠습니다</p>",
      },
    ],
    calendarOptions: [
      { value: "calendar1", title: "기본 달력" },
      { value: "calendar2", title: "영문 달력" },
      { value: "calendar3", title: "영문 달력" },
    ],
    tempCategorys: [
      { value: "all", title: "전체" },
      { value: "basic", title: "기본" },

      { value: "flower", title: "꽃" },
      { value: "season", title: "계절" },
      { value: "animal", title: "동물" },
      { value: "character", title: "캐릭터" },
      { value: "cute", title: "귀여운" },
      { value: "modern", title: "모던한" },
    ],
    tempOptions: [
      {
        value: "temp_basic_1",
        title: "LINE BASIC1",
        styleBackground: "defaulted",
        backgroundColor: [255, 255, 255],
        gradient1: null,
        gradient2: null,
        gradient3: null,
        filter: "",
        design: "design3",
        align: "center",
        primaryColor: [0, 0, 0],
        radius: 1,
        border: false,
        shadow: false,
        fontSize: 2,
        fontColor: [0, 0, 0],
        fontFamily: "notoserif",
        fontWeight: "light",
        stamp: null,
        category: ["basic"],
        src: "http://localhost:5173/form/easy",
        homeStyle: "minimalChic",
      },
      {
        value: "temp_basic_2",
        title: "LINE BASIC2",
        styleBackground: "defaulted",
        backgroundColor: [228, 229, 231],
        gradient1: null,
        gradient2: null,
        gradient3: null,
        filter: "",
        design: "design2",
        align: "center",
        primaryColor: [0, 0, 0],
        radius: 3,
        border: false,
        shadow: true,
        fontSize: 3,
        fontColor: [0, 0, 0],
        fontFamily: "pretendard",
        fontWeight: "medium",
        stamp: null,
        category: ["basic"],
        src: "http://localhost:5173/form/easy",
        homeStyle: "elegantSimplicity",
      },
      {
        value: "temp_basic_3",
        title: "LINE BASIC3",
        styleBackground: "defaulted",
        backgroundColor: [253, 250, 245],
        gradient1: null,
        gradient2: null,
        gradient3: null,
        filter: "",
        design: "design1",
        align: "left",
        primaryColor: [243, 238, 236],
        radius: 2,
        border: false,
        shadow: true,
        fontSize: 3,
        fontColor: [0, 0, 0],
        fontFamily: "pretendard",
        fontWeight: "bold",
        stamp: null,
        category: ["basic"],
        src: "http://localhost:5173/form/easy",
        homeStyle: "classicElegance",
      },
      {
        value: "temp_basic_4",
        title: "LINE BASIC4",
        styleBackground: "defaulted",
        backgroundColor: [237, 182, 187],
        gradient1: null,
        gradient2: null,
        gradient3: null,
        design: "design3",
        align: "left",
        primaryColor: [93, 47, 34],
        radius: 0,
        border: false,
        shadow: false,
        fontSize: 1,
        fontColor: [93, 47, 34],
        fontFamily: "notoserif",
        fontWeight: "medium",
        stamp: null,
        category: ["basic"],
        src: "http://localhost:5173/form/easy",
        homeStyle: "modernSimplicity",
      },
      {
        value: "temp_basic_5",
        title: "LINE BASIC5",
        styleBackground: "defaulted",
        backgroundColor: [246, 243, 236],
        gradient1: null,
        gradient2: null,
        gradient3: null,
        design: "design1",
        align: "center",
        primaryColor: [58, 80, 160],
        radius: 2,
        border: false,
        shadow: false,
        fontSize: 2,
        fontColor: [58, 80, 160],
        fontFamily: "notoserif",
        fontWeight: "light",
        stamp: null,
        category: ["basic"],
        src: "http://localhost:5173/form/easy",
        homeStyle: "welcomingWarmth",
      },
      {
        value: "temp_basic_6",
        title: "LINE BASIC6",
        styleBackground: "defaulted",
        backgroundColor: [22, 22, 22],
        gradient1: null,
        gradient2: null,
        gradient3: null,
        design: "design3",
        align: "center",
        primaryColor: [248, 248, 248],
        radius: 2,
        border: false,
        shadow: false,
        fontSize: 3,
        fontColor: [248, 248, 248],
        fontFamily: "pretendard",
        fontWeight: "bold",
        stamp: null,
        category: ["basic"],
        src: "http://localhost:5173/form/easy",
        homeStyle: "elegantFlow",
      },
    ],
    fontColorOptions: [
      [166, 169, 152],
      [192, 154, 133],
      [238, 227, 208],
      [185, 146, 105],
      [210, 124, 96],
      [180, 114, 80],
      [237, 231, 231],
      [231, 223, 212],
      [24, 75, 68],
      [202, 143, 115],
      [95, 94, 102],
      [158, 118, 83],
      [239, 235, 224],
      [196, 191, 185],
      [240, 170, 138],
      [234, 135, 96],
    ],
    fontFamilyOptions: [
      { value: "pretendard", title: "프리텐다드" },
      { value: "notoserif", title: "본고딕" },
      { value: "gmarketsans", title: "지마켓 산스" },
    ],
    fontWeightOptions: [
      { value: "light", title: "얇게" },
      { value: "medium", title: "보통" },
      { value: "bold", title: "굵게" },
    ],
    fontSizeOptions: [
      { value: "1", title: "작게" },
      { value: "2", title: "중간" },
      { value: "3", title: "크게" },
    ],
    fontAlignOptions: [
      { value: "left", title: "좌측 정렬" },
      { value: "center", title: "가운데 정렬" },
      { value: "right", title: "우측 정렬" },
    ],
    primaryColorOptions: [
      { value: "#E99460", title: "Apricot Crush" },
      { value: "#a6a998", title: "Sage" },
      { value: "#c09a85", title: "Terracotta" },
      { value: "#eee3d0", title: "Beach" },
      { value: "#b99269", title: "Honey" },
      { value: "#d27c60", title: "Adobe" },
      { value: "#b47250", title: "Sienna" },
      { value: "#ede7e7", title: "Salt" },
      { value: "#e7dfd4", title: "Sand" },
      { value: "#184b44", title: "Mauve" },
      { value: "#ca8f73", title: "Khaki" },
      { value: "#5f5e66", title: "Moon" },
      { value: "#9e7653", title: "Carmel" },
      { value: "#efebe0", title: "Stone" },
      { value: "#c4bfb9", title: "Rain" },
      { value: "#f0aa8a", title: "Salmon" },
      { value: "#ea8760", title: "Peach" },
    ],
    backgroundColorOptions: [
      { value: "#ffffff", title: "Pure White" },
      { value: "#011635", title: "Midnight" },
      { value: "#191970", title: "Midnight Blue" },
      { value: "#4A503A", title: "Chive" },
      { value: "#000000", title: "Noir" },
      { value: "#ffffff", title: "Pure White" },
      { value: "#011635", title: "Midnight" },
      { value: "#191970", title: "Midnight Blue" },
      { value: "#4A503A", title: "Chive" },
      { value: "#000000", title: "Noir" },
    ],
    gradientColorOptions: [
      {
        value1: "#FFFFFF",
        value2: "#FFFFFF",
        value3: "#FFFFFF",
        value4: "#E99460",
        title: "Apricot Crush",
      },
      {
        value1: "#F1EBDF",
        value2: "#F1EBDF",
        value3: "#D1D1D1",
        value4: "#8486B9",
        title: "Space",
      },
      {
        value1: "#EBD1BF",
        value2: "#E9BC83",
        value3: "#D7A173",
        value4: "#C2692D",
        title: "Ocher",
      },
    ],
    backgroundFilterOptions: [
      { value: "", title: "사용 안 함" },
      { value: "grain1", title: "Grain 1" },
      { value: "grain2", title: "Grain 2" },
      { value: "marble1", title: "marble 1" },
      { value: "paper1", title: "Paper 1" },
      { value: "noise1", title: "Noise 1" },
      { value: "naturalPaper", title: "Natural Paper" },
    ],

    effectColorOptions: [
      { value: ["#F55F56", "#8B67F3", "#6BEDF5", "#FEDB50"], title: "색상1" },
      { value: ["#FB7AA7", "#498FFF", "#F4F667", "#0ECB68"], title: "색상2" },
      { value: ["#A8D8EA", "#AA96DA", "#FCBAD3", "#FFFFD2"], title: "색상5" },
      { value: ["#E3FDFD", "#CBF1F5", "#A6E3E9", "#71C9CE"], title: "색상6" },
      { value: ["#FF78C4", "#E1AEFF", "#FFBDF7", "#FFECEC"], title: "색상7" },
      { value: ["#A0C49D", "#C4D7B2", "#E1ECC8", "#F7FFE5"], title: "색상8" },
      { value: ["#F38181", "#FCE38A", "#EAFFD0", "#95E1D3"], title: "색상9" },
      { value: ["#FFC7C7", "#FFE2E2", "#F6F6F6", "#8785A2"], title: "색상10" },
      { value: ["#F4EEFF", "#DCD6F7", "#A6B1E1", "#424874"], title: "색상11" },
      { value: ["#F67280", "#C06C84", "#6C5B7B", "#355C7D"], title: "색상12" },
    ],
    effectConfigOptions: [
      { title: "기본", value: "falling" },
      { title: "사이드", value: "side" },
      { title: "폭죽", value: "explosion" },
    ],
    effectShapeOptions: [
      { title: "기본", value: "confetti" },
      { title: "하트", value: "heart" },
      { title: "벚꽃", value: "sakura" },
    ],
    galleryImageOptions: [
      { title: "그리드", value: "grid" },
      { title: "스와이프", value: "swipe" },
      { title: "슬라이드쇼", value: "slideshow" },
      { title: "썸네일", value: "thumb" },
    ],
    commentTypeOptions: [
      {
        value: "default",
        title: "기본 스타일",
        info: "댓글을 쓸 수 있는 기본 방명록 스타일입니다. 다른 사용자의 댓글에 답글을 달 수 있습니다.",
      },
      {
        value: "bubble",
        title: "말풍선 스타일",
        info: "댓글 기능은 없지만, 로그인 후 작성할 경우 특별한 방식으로 강조됩니다.",
      },
    ],
    surveyFunctionOptions: {
      fnInfo: "성함과 연락처를 입력해주세요.",
      fnHost: "어느 쪽 하객으로 참석하시겠습니까?",
      fnRsvp: "참석 여부를 선택해주세요.",
      fnPal: "동행인이 있을 경우 기재해주세요.",
      fnFood: "식사 여부를 선택해주세요.",
      fnReceive: "청첩장을 수령하시겠습니까?",
      fnMessage: "하고 싶은 말을 남겨주세요.",
    },
    promptOptions: [
      { value: "soft", label: "부드러운" },
      { value: "romantic", label: "로맨틱한" },
      { value: "modern", label: "모던한" },
      { value: "trendy", label: "트렌디한" },
      { value: "clean", label: "깔끔한" },
      { value: "elegant", label: "세련된" },
      { value: "minimal", label: "미니멀한" },
      { value: "charming", label: "사랑스러운" },
      { value: "warm", label: "따뜻한" },
      { value: "emotional", label: "감성적인" },
      { value: "simple", label: "심플한" },
      { value: "pastel_tones", label: "파스텔톤" },
      { value: "black_white", label: "블랙 앤 화이트" },
      { value: "warm_tones", label: "따뜻한 색조" },
      { value: "natural_tones", label: "자연스러운 색조" },
      { value: "gold_rose_gold", label: "골드와 로즈골드" },
      { value: "blue_mint", label: "블루와 민트" },
      { value: "red_wine", label: "레드와 와인" },
      { value: "beige_cream", label: "베이지와 크림색" },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getFormOptions(state) {
      return state.formOptions;
    },
    getForm1TabOptions(state) {
      return state.form1TabOptions;
    },
    getForm2TabOptions(state) {
      return state.form2TabOptions;
    },

    getHomeStyleOptions(state) {
      return state.homeStyleOptions;
    },
    getHomeDefaultedOptions(state) {
      return state.homeDefaultedOptions;
    },
    getHomeColorOptions(state) {
      return state.homeColorOptions;
    },
    getFrameOptions(state) {
      return state.frameOptions;
    },
    getStampOptions(state) {
      return state.stampOptions;
    },
    getAudiosOptions(state) {
      return state.audiosOptions;
    },
    getIntroOptions(state) {
      return state.introOptions;
    },
    getFontColorOptions(state) {
      return state.fontColorOptions;
    },
    getFontFamilyOptions(state) {
      return state.fontFamilyOptions;
    },
    getFontWeightOptions(state) {
      return state.fontWeightOptions;
    },
    getFontSizeOptions(state) {
      return state.fontSizeOptions;
    },
    getFontAlignOptions(state) {
      return state.fontAlignOptions;
    },

    getPrimaryColorOptions(state) {
      return state.primaryColorOptions;
    },
    getBackgroundColorOptions(state) {
      return state.backgroundColorOptions;
    },
    getGradientColorOptions(state) {
      return state.gradientColorOptions;
    },
    getBackgroundFilterOptions(state) {
      return state.backgroundFilterOptions;
    },
    getEffectColorOptions(state) {
      return state.effectColorOptions;
    },
    getEffectConfigOptions(state) {
      return state.effectConfigOptions;
    },
    getEffectShapeOptions(state) {
      return state.effectShapeOptions;
    },
    getCommentTypeOptions(state) {
      return state.commentTypeOptions;
    },
    getRecommendTitleOptions(state) {
      return state.recommendTitleOptions;
    },
    getDesignStyleOptions(state) {
      return state.designStyleOptions;
    },
    getCalendarOptions(state) {
      return state.calendarOptions;
    },
    getHostFamilyInfoOptions(state) {
      return state.hostFamilyInfoOptions;
    },
    getHostBankOptions(state) {
      return state.hostBankOptions;
    },
    getGalleryImageOptions(state) {
      return state.galleryImageOptions;
    },
    getTempOptions(state) {
      return state.tempOptions;
    },
    getTempCategorys(state) {
      return state.tempCategorys;
    },
    getSurveyFunctionOptions(state) {
      return state.surveyFunctionOptions;
    },
    getPromptOptions(state) {
      return state.promptOptions;
    },
  },
};
