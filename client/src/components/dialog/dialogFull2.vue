<template>
  <teleport to=".layer-2" v-if="dialog">
    <div class="overlay-container" v-bind="$attrs"> <!-- $attrs를 여기에 바인딩 -->
      <div class="overlay dialogFull">
        <div class="overlay__content" :class="{ active: loaded }">
          <div class="overlay-header">
            <div class="dialog-header">
              <buttonDefault
                variant="tonal"
                height="32"
                :icon="true"
                @click="closeDialog"
              >
                <icon class="icon_16"><caretLeft /></icon>
              </buttonDefault>

              <buttonDefault
                variant="text"
                height="32"
                @click="confirmDialog"
              >
                <span>CONFIRM</span>
              </buttonDefault>
            </div>
          </div>
          <div class="dialog">
            <div class="dialog-content">
              <slot></slot>
            </div>
            <div
            class="dialogFull-scrim"
            @click="closeDialog"
            :class="{ active: loaded }"
          />
          </div>
          
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import "@/components/dialog/dialogFull.scss";

export default {
  inheritAttrs: false, // 이 줄을 추가하여 비속성 속성 상속을 비활성화합니다.
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1);
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");  // 'confirmDialog' 이벤트 발생
    },
    confirmDialog() {
      this.$emit("confirmDialog");  // 'confirmDialog' 이벤트 발생
    },
  },
};
</script>
