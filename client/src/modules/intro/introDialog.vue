<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="인사말"
    :config="true"
  >
    <article>
      <introTiptap 
      v-if="shouldRenderTiptap"
      />
    </article>

    <article>
      <buttonDefault
        class="width_100 height_64 gap_18 --border-radius_24"
        @click="this.appDialog = true"
      >
        <icon><envelope /></icon><span>인사말 예시</span>

        <modalDialog
          v-if="appDialog"
          :dialog="appDialog"
          @update:dialog="appDialog = $event"
          title="인사말 예시"
          :config="true"
        >
          <article>
            <introOptions @update:dialog="updateAppDialog" />
          </article>
        </modalDialog>
      </buttonDefault>
    </article>

  

    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>

    <article v-if="tap === 'example'"></article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";
import envelope from "@/components/icon/envelope";

export default {
  components: {
    envelope,
    introTiptap: defineAsyncComponent(() =>
      import("@/modules/intro/introTiptap.vue")
    ),
    introOptions: defineAsyncComponent(() =>
      import("@/modules/intro/introOptions.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data: function () {
    return {
      appDialog: false,
      shouldRenderTiptap: true,
    };
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    updateAppDialog(value) {
      this.appDialog = value;
      this.reloadTiptap()
    },
    reloadTiptap() {
      this.shouldRenderTiptap = false;
      this.$nextTick(() => {
        this.shouldRenderTiptap = true;
      });
    },
  },
};
</script>
