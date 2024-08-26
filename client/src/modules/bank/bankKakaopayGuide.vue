<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </article>

    <div class="dialog-actions">
      <button
        class="button-select height_36 pa_24"
        @click="updateDialog(false)"
      >
        <span>닫기</span>
      </button>
    </div>
  </modalDialog>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {},
  props: {
    dialog: { type: Boolean },
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters({
      hostData: "getHostData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
