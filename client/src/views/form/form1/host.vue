<template>
  <div class="editor-item">
    <formTitle1
    :config="true"
      info="STEP 3"
      title="신랑 신부 정보"
      content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
    />
    <section>
      <article>
        <form1Host />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="축의금 계좌"
          content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
        />
        <bankBox />
      </article>
    </section>
  </div>
</template>
<script>
import form1Host from "@/modules/host/form1Host.vue";
import bankBox from "@/modules/bank/bankBox.vue";

export default {
  components: {
    form1Host,
    bankBox,
  },
};
</script>
