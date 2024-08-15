<template>
  <teleport to="body" v-if="dialog">
    <div class="overlay-container" v-bind="$attrs"> <!-- $attrs를 여기에 바인딩 -->
      <div class="overlay dialogBottom">
        <div
          class="overlay__scrim"
          @click="closeDialog"
          :class="{ active: loaded }"
        />
        <div class="overlay__content" :class="{ active: loaded }">
          <div class="dialog">
            <div class="dialog-header">
              <span>{{ title }}</span>
              <buttonDefault
                variant="tonal"
                height="32"
                :icon="true"
                @click="closeDialog"
              >
                <icon class="icon_16"><x /></icon>
              </buttonDefault>
            </div>
            <div class="dialog-content">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import "@/components/dialog/dialogBottom.scss";

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
      this.$emit("update:dialog", false);
    },
  },
};
</script>
