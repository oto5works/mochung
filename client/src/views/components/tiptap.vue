<template>
  <div class="component">
    <tiptap v-model="value" v-if="showTiptap">
      <buttonDefault variant="filled" height="36" @click="reloadTiptap"
        ><icon class="icon_16"><x /></icon><span>Delete</span>
      </buttonDefault>
    </tiptap>
    {{ value }}
  </div>
</template>

<script>
import tiptap from "@/components/tiptap/tiptap.vue";

export default {
  components: {
    tiptap,
  },
  data() {
    return {
      value: "",
      showTiptap: true,
    };
  },
  methods: {
    reloadTiptap() {
      // 컴포넌트를 제거한 후 새로 추가하기 위해 showTiptap를 false로 설정
      this.value = "";
      this.showTiptap = false;
      this.$nextTick(() => {
        // 다음 틱에서 컴포넌트를 다시 렌더링
        this.showTiptap = true;
      });
    },
  },
};
</script>
