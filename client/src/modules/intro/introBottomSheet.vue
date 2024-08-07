<template>
  <bottomSheet
    :dialog="dialog"
    title="연락하기"
    @update:dialog="updateDialog"
    :root="false"
  >
    <ul>
      <li v-for="contact in hostContact" :key="contact.hostName">
        <div class="title flex_1" @click="copyNumber(contact.tell)">
          <div class="--font-size_12 opacity_70">
            {{ contact.hostName }} {{ contact.title }}
          </div>
          <div class="--font-size_14 --font-weight">
            {{ contact.name }}
          </div>
        </div>

        <div class="flex align-items_center gap_4">
          <!--
        <button class="button-icon icon_32" @click="copyNumber(contact.tell)">
        <icon class="icon_18"><copy /></icon>
      </button>
-->
          <button class="button-icon icon_32" @click="dialNumber(contact.tell)">
            <icon class="icon_18"><phone /></icon>
          </button>

          <button class="button-icon icon_32" @click="textNumber(contact.tell)">
            <icon class="icon_18"><envelope /></icon>
          </button>
        </div>
      </li>
    </ul>
  </bottomSheet>
</template>
<script>
import { mapGetters } from "vuex";
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
    dialog: { type: Boolean },
    root: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      hostContact: "getHostContact",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
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
      window.location.href = "tel:" + phoneNumber;
    },
    textNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      window.location.href = "sms:" + phoneNumber;
    },
  },
};
</script>
