<template>
  <div class="editor-item" id="design">
    <formTitle1
      :config="true"
      info="STEP 2"
      title="디자인"
      content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
    />
    <section>
      <article>
        <formTitle3 title="디자인 템플릿 선택" />
      </article>
      <temp />
    </section>
    <section>
      <article>
        <formTitle2
          title="배경 음악 설정"
          content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
        />
        <designBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="배경 음악 설정"
          content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
        />
        <backgroundColor />
        <backgroundFilterBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="배경 음악 설정"
          content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
        />
        <primaryBox />
        <fontBox />
        <stampBox />
        <fontAlign />
      </article>
    </section>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    temp: defineAsyncComponent(() => import("@/modules/temp/temp")),
    designBox: defineAsyncComponent(() => import("@/modules/design/designBox")),
    backgroundColor: defineAsyncComponent(() =>
      import("@/modules/color/backgroundColor")
    ),
    backgroundFilterBox: defineAsyncComponent(() =>
      import("@/modules/backgroundFilter/backgroundFilterBox")
    ),
    primaryBox: defineAsyncComponent(() =>
      import("@/modules/primary/primaryBox")
    ),
    fontBox: defineAsyncComponent(() => import("@/modules/font/fontBox")),
    stampBox: defineAsyncComponent(() => import("@/modules/stamp/stampBox")),
    fontAlign: defineAsyncComponent(() => import("@/modules/font/fontAlign")),
  },
};
</script>
