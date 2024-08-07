<template>
  <div class="editor-item" id="functions">
    <formTitle1
      :config="true"
      info="STEP 5"
      title="추가 기능"
      content="한 장당 최대 10MB의 이미지를 업로드할 수 있습니다. 최대 20장의 이미지까지 업로드 가능합니다."
    />
    <section>
      <article></article>
      <article>
        <formTitle2
          title="추가 기능"
          content="한 장당 최대 10MB의 이미지를 업로드할 수 있습니다. 최대 20장의 이미지까지 업로드 가능합니다."
        />
        <galleryBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          info="STEP 2"
          title="예식 정보"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <commentBox />
        <commentTitle />
        <surveyBox />
      </article>
    </section>
    <section>
      <article>
        <formTitle2
          info="STEP 2"
          title="예식 정보"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <kakaotalkBox />
        <likeBox />
        <orderBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="나만의 특별한 주소, 커스텀 URL 생성"
          content="커스텀 URL은 웹사이트, 프로필, 소셜 미디어 등에서 사용할 수 있는 나만의 고유한 주소입니다. 기존의 랜덤한 ID 대신 쉽게 기억하고 공유할 수 있는 문자열을 사용하여 자신을 표현할 수 있습니다."
        />

        <urlBox />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="예식 정보"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <albumBox />
      </article>
    </section>
  </div>
</template>
<script>
import galleryBox from "@/modules/gallery/galleryBox.vue";
import commentBox from "@/modules/comment/commentBox.vue";
import commentTitle from "@/modules/comment/commentTitle.vue";
import surveyBox from "@/modules/survey/surveyBox.vue";
import kakaotalkBox from "@/modules/kakaotalk/kakaotalkBox.vue";
import likeBox from "@/modules/like/likeBox.vue";
import orderBox from "@/modules/order/orderBox.vue";
import albumBox from "@/modules/album/albumBox.vue";
import urlBox from "@/modules/url/urlBox.vue";

export default {
  components: {
    galleryBox,
    commentBox,
    commentTitle,
    surveyBox,
    kakaotalkBox,
    likeBox,
    orderBox,
    albumBox,
    urlBox,
  },
};
</script>
