<template>
  <listItem :label="label" :content="content">
    <div class="display_flex gap_8">
      <buttonDefault
        variant="tonal"
        height="32"
        :icon="true"
        @click="copyNumber(tell)"
        ><icon class="icon_16"><copy /></icon
      ></buttonDefault>
      <buttonDefault
        variant="tonal"
        height="32"
        :icon="true"
        @click="dialNumber(tell)"
        ><icon class="icon_16"><phone /></icon
      ></buttonDefault>
      <buttonDefault
        variant="tonal"
        height="32"
        :icon="true"
        @click="textNumber(tell)"
        ><icon class="icon_16"><envelope /></icon
      ></buttonDefault>
    </div>
  </listItem>
</template>
<script>
import phone from "@/components/icon/phone.vue";
import envelope from "@/components/icon/envelope.vue";
import copy from "@/components/icon/copy.vue";

export default {
  components: {
    phone,
    envelope,
    copy,
  },
  props: {
    label: { type: String },
    content: { type: String },
    tell: { type: String },
  },
  methods: {
    copyNumber(phoneNumber) {
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert(`연락처 ${phoneNumber}이(가) 복사되었습니다.`);
        })
        .catch((err) => {
          alert(`연락처를 복사할 수 없습니다. ${err}`);
        });
    },
    dialNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      window.open(`tel:${phoneNumber}`);
    },
    textNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      window.open(`sms:${phoneNumber}`);
    },
  },
};
</script>
