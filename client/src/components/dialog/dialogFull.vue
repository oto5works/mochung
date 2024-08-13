<!-- dialogFull.vue -->
<template>
  <teleport to="body">
    <div class="overlay-container" v-if="dialog">
      <div class="overlay dialogFull">
        <div class="overlay__scrim" @click="closeDialog" />
        <div class="overlay__content">
          <div class="content">
            <div class="header">
              <span class="font-size_16 font-weight_700">{{ title }}</span>
              <buttonDefault
                variant="tonal"
                height="32"
                :icon="true"
                @click="closeDialog"
                ><icon class="icon_16"><x /></icon
              ></buttonDefault>
            </div>

            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script>
import "@/components/dialog/overlay.scss";
import "@/components/dialog/dialog.scss";

export default {
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
