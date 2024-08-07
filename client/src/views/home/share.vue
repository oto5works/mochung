<template>
  <div>
    <button
      @click="shareKakaotalk"
    >
      카카오톡 공유
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: "8b06ea585fd4f917dddee9720fb22765",
    };
  },
  created() {
    if (!Kakao.isInitialized()) {
      Kakao.init(this.apiKey);
    }
  },
  methods: {
    shareKakaotalk() {
      // Kakao Link 전송할 데이터 설정
      const data = {
        templateId: 98536, // 사용자 정의 템플릿 ID (Kakao Developers에서 생성해야 함)
        templateArgs: {
          title: "제목바보",
          description: "내용은 멍청이",
          imageUrl:
            "https://searchad-phinf.pstatic.net/MjAyMzAxMzFfMTM3/MDAxNjc1MTQ3NzYyMzA1.3L83VU1Pz0mtM7uaV8S7HORk4GRHiDFMo_D6jteqeyMg.eDLFtd2YxRpew8hnVRDp0nFRi_KrX9MT8hznobxZdpMg.PNG/2780591-e8dce96f-1041-42bf-b964-4d149163a23c.png?type=f160_160",
          url: window.location.href,
          shareButton: "공유하기란다",
        },
      };

      // Kakao Link 보내기
      Kakao.Link.sendCustom(data, function () {
        console.log("카카오톡으로 공유 성공");
      });
    },
    // 나머지 메서드 추가
  },
};
</script>
