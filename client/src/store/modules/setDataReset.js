const resetValue = {
  id: null,
  formData: {
    /*-- hostData --*/
    hostData: {
      functions: {
        fnContact: true,
        // 신랑 신부 profile 사진 및 코멘트 사용 유무 (추후 업데이트 예정)
        // fnProfile: false,
      },
      info: [
        {
          // 신랑 신부 profile 사진 및 코멘트 (추후 업데이트 예정)
          // comment: "",
          // files: { file: null, url: null },
          host: {
            title: "Groom",
            name: "Benjamin",
            tell: "010-1234-1234",
            relation: "Eldest Son",
          },
          family: [
            {
              title: "Father",
              name: "James",
              tell: "010-1234-1234",
              info: false,
            },
            {
              title: "Mother",
              name: "Emma",
              tell: "010-1234-1234",
              info: false,
            },
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
                // kakaopay image
                files: {
                  file: null,
                  url: null,
                },
              },
            ],
          },
        },
        {
          // 신랑 신부 profile 사진 및 코멘트 (추후 업데이트 예정)
          // comment: "",
          // files: { file: null, url: null },
          host: {
            title: "Bride",
            name: "Isabella",
            tell: "010-1234-1234",
            relation: "Eldest Daughter",
          },
          family: [
            {
              title: "Father",
              name: "Alexander",
              tell: "010-1234-1234",
              info: false,
            },
            {
              title: "Mother",
              name: "Olivia",
              tell: "010-1234-1234",
              info: false,
            },
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
                // kakaopay image
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
      temp: "", // 디자인 템플릿 사용유무
      styleBackground: "defaulted", // defaulted, gradient
      backgroundColor: [255, 255, 0],
      design: "design1", // 디자인 스타일 design1: default, design2: card style, design3: line style
      align: "left",
      primaryColor: [0, 255, 0], // rgb값
      radius: 2, // level: 0, 1, 2, 3
      border: false, // 객체의 border
      shadow: false, // 객체의 shadow
      fontSize: 2, // level: 1, 2, 3,
      fontColor: [0, 0, 255], // rgb값
      fontFamily: "pretendard",
      fontWeight: true, // bold 사용 유무
      stamp: "flower",
      /*-- add --*/

      // gradient1: "#FFFFFF",
      // gradient2: "#FFFFFF",
      // gradient3: "#E99460",
      // filter: "",
    },
    /*-- 인트로 --*/
    introData: {
      title: "Our Wedding Day",
      content: `
        <p>We are overjoyed to invite you to join us on the most important day of our lives.</p>
        <p></p>
        <p>As we take this beautiful step forward together, your presence would mean everything to us. 
        On this day, we celebrate love, commitment, and the beginning of a new chapter.</p>
        <p></p>
        <p>We are incredibly grateful to have you in our lives, and we can't wait to share this special moment with you.</p>
        <p></p>
        <p>Thank you for being a part of our journey, and we look forward to creating unforgettable memories together.</p>
      `,
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
      fnCountdown: false,
    },

    /*-- 예식 장소  --*/
    locationData: {
      title: "Directions",
      name: "Elegant Rose Garden",
      info: "Orchid Ballroom, 2nd Floor",
      tell: "+82 2-1234-5678",
      address: "Gangnam-gu, Seoul",
      detail: "72, Nonhyeon-ro 79-gil (Yeoksam-dong 828-10) ",
      lat: "37.566826004661",
      lng: "126.978652258309",
      map: "map", // map, file
      app: ["navermap", "kakaomap", "kakaonavi", "tmap"],
      files: {
        file: null,
        url: null,
      },
    },
    /*-- 교통수단 안내  --*/
    transportData: [
      {
        title: "BY BUS",
        content: `
          <p>To reach the venue by bus, start by finding the nearest bus stop at "Rose Garden Station."</p>
          <p></p>
          <p>Board Bus Number 42 and ride until you reach the "Blossom Lane Stop."</p>
          <p></p>
          <p>From there, it’s a short 5-minute walk to the Elegant Rose Garden, located at 123 Blossom Lane. 
          Simply walk straight for about 300 meters, and you’ll find us on the right.</p>
          <p></p>
          <p>For the most up-to-date bus schedules and route information, please visit the Seoul City Transit website.</p>
        `,
      },
      {
        title: "BY SUBWAY",
        content: `
          <p>To get to the venue by subway, start by traveling to "Rose Garden Station" on Line 5.</p>
          <p></p>
          <p>Take Exit 2 and follow the signs for the "Blossom Lane" exit. From the subway station, it’s about a 10-minute walk to the Elegant Rose Garden.</p>
          <p></p>
          <p>Walk straight for about 500 meters, and you will reach Blossom Lane. Turn right, and you’ll find us at 123 Blossom Lane on the right-hand side.</p>
          <p></p>
          <p>For more details on subway routes and schedules, please visit the Seoul Subway website.</p>
        `,
      },
      {
        title: "BY CAR",
        content: `
          <p>If you’re driving to the venue, you can use the address 123 Blossom Lane, Seoul. There is ample parking available at the venue.</p>
          <p></p>
          <p>From the central Seoul area, take the "Flower Road" exit from the main highway and follow the signs to Blossom Lane.</p>
          <p></p>
          <p>There is a parking lot directly in front of the Elegant Rose Garden, with spaces available for visitors.</p>
          <p></p>
          <p>For real-time traffic updates and the best routes, please check a navigation app or GPS service.</p>
        `,
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
      title: "Gallery",
      fnGallery: true,
      image: {
        fnImage: true,
        style: "grid",
        files: [],
      },
      video: {
        fnVideo: true,
        url: "https://www.youtube.com/",
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
      title: "Guest Survey",
      content: `
          <p>Hello everyone, I hope this message finds you well. I kindly ask that you confirm your attendance by July 29, 2023 (Saturday). Your timely response is important to help us finalize the arrangements.</p>
          <p></p>
          <p>If responding by the deadline is difficult for any reason, please let us know as soon as possible. Your prompt attention to this matter would be greatly appreciated.</p>
          <p></p>
          <p>Thank you in advance for your cooperation. Best regards,</p>
        `,
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
        "gallery",
        "survey",
        "comment",
        //  "notice",

        //  "deposit",
      ],
    },
  },
};

export default resetValue;
