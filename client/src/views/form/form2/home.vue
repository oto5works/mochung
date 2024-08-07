<template>
  <div class="editor-item" id="home">
    <formTitle1
    :config="true"
      info="MAIN"
      title="메인화면"
      content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
    />
    <section>
      <article>
        <formTitle2
          title="배경 음악 설정"
          content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
        />
        <homeBox />
        <homeFile />
        <homeColor />
        <fnTitle option="homeData" />
        <frameBox />
      </article>
    </section>
    <section>
      <article>
        <formTitle2
          title="배경 음악 설정"
          content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
        />
        <effectBox />
        <audiosBox />
      </article>
    </section>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    homeBox: defineAsyncComponent(() => import("@/modules/home/homeBox")),
    frameBox: defineAsyncComponent(() => import("@/modules/frame/frameBox")),

    homeFile: defineAsyncComponent(() => import("@/modules/file/homeFile")),
    fnTitle: defineAsyncComponent(() => import("@/modules/functions/fnTitle")),
    homeColor: defineAsyncComponent(() => import("@/modules/color/homeColor")),
    effectBox: defineAsyncComponent(() => import("@/modules/effect/effectBox")),
    audiosBox: defineAsyncComponent(() => import("@/modules/audios/audiosBox")),
  },
};
</script>
