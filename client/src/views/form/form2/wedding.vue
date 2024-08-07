<template>
  <div class="editor-item" id="wedding">
    <formTitle1
      :config="true"
      info="STEP 2"
      title="예식 정보"
      content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
    />
    <section>
      <article>
        <formTitle2
          title="예식일"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <introBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="예식일"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <dateBox />
        <calendarBox />
        <countdownBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="예식일"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <fnTitle option="locationData" />
        <locationBox />
        <mapsBox />
        <appBox />
        <transportBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="배경 음악 설정"
          content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
        />
        <noticeBox />
      </article>
    </section>
  </div>
</template>
<script>
import introBox from "@/modules/intro/introBox.vue";
import dateBox from "@/modules/date/dateBox.vue";
import countdownBox from "@/modules/countdown/countdownBox.vue";
import calendarBox from "@/modules/calendar/calendarBox.vue";
import fnTitle from "@/modules/functions/fnTitle.vue";
import locationBox from "@/modules/location/locationBox.vue";
import transportBox from "@/modules/transport/transportBox.vue";
import noticeBox from "@/modules/notice/noticeBox.vue";
import appBox from "@/modules/app/appBox.vue";
import mapsBox from "@/modules/maps/mapsBox.vue";

export default {
  components: {
    introBox,
    dateBox,
    fnTitle,
    transportBox,
    locationBox,
    noticeBox,
    appBox,
    mapsBox,
    countdownBox,
    calendarBox,
  },
};
</script>
