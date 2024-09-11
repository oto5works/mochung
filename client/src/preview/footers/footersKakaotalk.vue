<template>
  <button @click="shareKakaotalk">
    <icon><kakaotalk/></icon>
  </button>
</template>

<script>
import kakaotalk from "@/components/icon/kakaotalk";
import { mapGetters } from "vuex";

export default {
  components: { kakaotalk },
  data() {
    return {
      apiKey: "8b06ea585fd4f917dddee9720fb22765",
    };
  },
  created() {
    // Kakao Link API 초기화
    if (!Kakao.isInitialized()) {
      Kakao.init(this.apiKey);
    }
  },
  computed: {
    ...mapGetters({
      kakaotalkData: "getKakaotalkData",
    }),
  },
  methods: {
    shareKakaotalk() {
      // Kakao Link 전송할 데이터 설정
      const data = {
        templateId: 98536, // 사용자 정의 템플릿 ID (Kakao Developers에서 생성해야 함)
        templateArgs: {
          title: this.kakaotalkData.title,
          description: this.kakaotalkData.content,
          imageUrl: this.kakaotalkData.file.url,
          url: window.location.href,
          like: this.fnLike === "false" ? "false" : this.like ? this.like : 0, // 'fnLike' 값이 false일 경우 false를, 그렇지 않으면 'like' 값을 또는 0을 전달합니다.
          comments:
            this.fncomment === "false"
              ? "false"
              : this.comments
              ? this.comments.length
              : 0, // 'fncomment' 값이 false일 경우 false를, 그렇지 않으면 'comments' 배열의 길이 또는 0을 전달합니다.
          shareButton: this.kakaotalkData.shareButton,
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
