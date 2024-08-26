const resetValue = {
  id: null,
  formData: {
    /*-- hostData --*/
    hostData: {
      functions: {
        fnContact: true,
        fnProfile: false,
      },
      info: [
        {
          comment: "",
          files: { file: null, url: null },
          host: { title: "신랑", name: "Cheol-soo", tell: "", relation: "" },
          family: [
            { title: "아버님", name: "", tell: "", info: false },
            { title: "어머님", name: "", tell: "", info: false },
          ],
          bank: {
            fnFold: false,
            account: [
              {
                bank: {
                  title: "국민은행",
                  value: "bankKb",
                },
                number: "",
                name: "",
                files: {
                  file: null,
                  url: null,
                },
              },
            ],
          },
        },
        {
          comment: "",
          files: { file: null, url: null },
          host: { title: "신부", name: "Younghee", tell: "", relation: "" },
          family: [
            { title: "아버님", name: "", tell: "", info: false },
            { title: "어머님", name: "", tell: "", info: false },
          ],
          bank: {
            fnFold: false,
            account: [
              {
                bank: {
                  title: "국민은행",
                  value: "bankKb",
                },
                number: "",
                name: "",
                files: {
                  file: null,
                  url: null,
                },
              },
            ],
          },
        },
      ],
    },
    /*-- url --*/
    urlData: {
      fnUrl: false,
      url: "",
    },
    /*-- 홈 --*/
    homeData: {
      style: "home1",
      frame: "flower",
      color: "#000000",
      title: "Save the Date",
      type: "file",
      illust: null,
      files: {
        file: null,
        url: null,
      },
      item: {
        filename: "aaaaa",
        id: "hero-image",
        x: 1,
        y: 5,
        w: 5,
        h: 6,
      },
    },

    /*-- 이펙트 --*/
    effectData: {
      fnEffect: false,
      config: "falling",
      shape: "confetti",
      color: ["#F55F56", "#8B67F3", "#6BEDF5", "#FEDB50"],
    },
    /*-- 배경음악 --*/
    audiosData: {
      fnAudios: false,
      fnAutoPlay: false,
      url: null,
    },
    /*-- 커스텀 --*/
    customData: {
      temp: "",
      styleBackground: "defaulted",
      backgroundColor: "#ffffff",
      gradient1: "#FFFFFF",
      gradient2: "#FFFFFF",
      gradient3: "#E99460",
      filter: "",
      design: "design1",
      align: "left",
      primaryColor: "#ff4d00",
      radius: 2,
      // level: 0, 1, 2, 3
      border: false,
      shadow: false,
      fontSize: 2,
      // level: 1, 2, 3,
      fontColor: "#000000",
      fontFamily: "pretendard",
      fontWeight: true,
      stamp: "flower",
    },
    /*-- 인트로 --*/
    introData: {
      title: "FIELDS OF EXPRESSION",
      content:
        "<p>Get an official Creative Cloud subscription.</p><p>When you make a payment, specify an expiration date and choose a plan that works for you (all apps or Adobe Photography).</p><p>Create an Adobe ID for your data and pay for a subscription in Turkey within 24 hours.</p>",
      files: [{ file: null, url: null }],
    },
    /*-- 예식일  --*/
    dateData: {
      date: (() => {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        return currentDate.toISOString().substr(0, 10);
      })(),
      dateDelete: "",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      fnCalendar: true,
      calendar: "calendar1",
      fnCountdown: true,
    },

    /*-- 예식 장소  --*/
    locationData: {
      title: "FIELDS OF EXPRESSION",
      name: "WEDDING ITALY",
      info: "CHUNGDAM, SEOUL",
      tell: "02-559-5500",
      address: "Gangnam-gu, Seoul",
      detail: "72, Nonhyeon-ro 79-gil (Yeoksam-dong 828-10) ",
      lat: "37.566826004661",
      lng: "126.978652258309",
      map: "kakaomap",
      app: ["navermap", "kakaomap", "kakaonavi", "tmap"],
      files: {
        file: null,
        url: null,
      },
    },
    /*-- 교통수단 안내  --*/
    transportData: [
      {
        title: "지하철 이용 시",
        content: "<p>지하철 이용 시</p>",
      },
      {
        title: "버스 이용 시",
        content: "<p>버스 이용 시</p>",
      },
      {
        title: "자가용 이용 시",
        content: "<p>자가용 이용 시</p>",
      },
    ],

    /*-- 공지사항 안내  --*/
    noticeData: {
      fnNotice: true,
      title: "FIELDS OF EXPRESSION",
      notices: [
        {
          title: "게스트 설문안내",
          content:
            "<h2 class='opacity_60'>* 하기 내용은 샘플입니다.</h2><p>저희의 결혼식을 더욱 의미 있게 만들어 주실 수 있는 설문조사를 준비했습니다.</p><p>설문조사는 결혼식에 대한 다양한 의견을 수렴하여, 더 나은 결혼식을 준비하기 위한 목적으로 진행됩니다.</p><p></p><p>설문조사는 모바일청첩장 <strong>[게스트 설문조사]&nbsp;</strong>에서 참여하실수 있습니다.</p><p>모든 하객분들의 참여를 부탁드립니다.</p>",
        },
        {
          title: "예식순서",
          content:
            "<h2 class='opacity_60'>* 하기 내용은 샘플입니다.</h2><p><em>14:00 ~ 15:00</em>&nbsp;&nbsp;&nbsp;하객 입장</p><p><em>15:00 ~ 15:30</em>&nbsp;&nbsp;&nbsp;식사</p><p><em>15:30 ~ 16:00</em>&nbsp;&nbsp;&nbsp;예식 준비</p><p><em>16:00 ~ 16:30</em>&nbsp;&nbsp;&nbsp;예식 시작</p><p><em>16:30 ~ 17:30</em>&nbsp;&nbsp;&nbsp;예식 진행</p><p><em>17:30 ~ 18:30</em>&nbsp;&nbsp;&nbsp;식사</p><p><em>18:30 ~ 19:30</em>&nbsp;&nbsp;&nbsp;폐백</p><p><em>19:30 ~ 20:30</em>&nbsp;&nbsp;&nbsp;하객 퇴장</p>",
        },
        {
          title: "답례품안내",
          content:
            "<h2 class='opacity_60'>* 하기 내용은 샘플입니다.</h2><p><em>14:00 ~ 15:00</em>&nbsp;&nbsp;&nbsp;하객 입장</p><p><em>15:00 ~ 15:30</em>&nbsp;&nbsp;&nbsp;식사</p><p><em>15:30 ~ 16:00</em>&nbsp;&nbsp;&nbsp;예식 준비</p><p><em>16:00 ~ 16:30</em>&nbsp;&nbsp;&nbsp;예식 시작</p><p><em>16:30 ~ 17:30</em>&nbsp;&nbsp;&nbsp;예식 진행</p><p><em>17:30 ~ 18:30</em>&nbsp;&nbsp;&nbsp;식사</p><p><em>18:30 ~ 19:30</em>&nbsp;&nbsp;&nbsp;폐백</p><p><em>19:30 ~ 20:30</em>&nbsp;&nbsp;&nbsp;하객 퇴장</p>",
        },
      ],
    },
    /*-- 계좌 --*/
    depositData: {
      fnDeposit: false,
      title: "축의금 보내실 곳",
    },
    /*-- 미디어 갤러리 --*/
    galleryData: {
      title: "갤러리",
      fnGallery: true,
      image: {
        fnImage: true,
        style: "grid",
        files: [],
      },
      video: {
        fnVideo: true,
        url: "2222",
        fnAutoPlay: false,
      },
    },
    albumData: {
      fnAlbum: true,
      title: "결혼식 사진을 업로드 해주세요. 소중한 추억, 함께 나눠요",
      content:
        "<p>결혼식은 한 맺음의 시작을 알리는 특별한 날입니다. 신랑 신부의 아름다운 모습과 행복한 순간들을 사진으로 남겨 영원히 간직하세요.</p>",
      album: [],
    },
    /*-- 방명록 --*/
    commentData: {
      fnComment: true,
      title: "방명록",
      password: "1234",
    },
    /*-- 설문조사 --*/
    surveyData: {
      fnSurvey: true,
      title: "설문조사",
      content:
        "<p>번거로우시겠지만,</p><p>아래 날짜까지 참석 여부의 응답을 부탁드립니다.</p><p>&nbsp;</p><h1><strong>2023년 07월 29일 (토)</strong></h1><h2></h2><h2>﹡기일까지의 연락이 어려운 경우에는 따로 연락을 전해 주시면 감사하겠습니다.</h2>",
      functions: {
        fnRsvp: true,
        fnInfo: true,
        fnPal: true,
        fnFood: true,
        fnReceive: true,
        fnMessage: true,
      },
    },
    /*-- 기능 --*/
    functionData: {
      fnLike: true,
      fnShare: true,
      fnCopy: true,
      fnKakaotalk: true,
      fnTitle: "",
    },
    /*-- 카카오 메세지 --*/
    kakaotalkData: {
      fnLike: true,
      fnComment: true,
      title: "메세지 타이틀",
      content: "메세지 내용",
      shareButton: "자세히 보기",
      files: {
        file: null,
        url: null,
      },
    },
    /*-- 순서 --*/
    orderData: {
      order: [
        "intro",
        "calendar",
        "location",
        "notice",
        "gallery",
        "comment",
        "survey",
        "deposit",
      ],
    },
  },
};

export default resetValue;
