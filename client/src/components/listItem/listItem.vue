<template>
  <button
    :class="['listItem', { selected: modelValue }]"
    @click="updateValue($event)"
  >

    <icon v-if="icon" class="icon_18">
      <component :is="icon" />
    </icon>
    <div class="display_flex flex-direction_column align-items_flex-start width_100">
      <div v-if="label" class="label">{{ label }}</div>
      <div v-if="content" class="content">{{ content }}</div>
    </div>

    <button v-if="checkBox" class="icon_24">
      <icon v-if="!modelValue"><checkBox /></icon>
      <icon v-if="modelValue" class="checked"><checkedBox /></icon>
    </button>

    <div class="underlay" />
  </button>
</template>

<script>
import checkBox from "@/components/icon/checkBox.vue";
import checkedBox from "@/components/icon/checkedBox.vue";
import audios from "@/components/icon/audios.vue";

export default {
  components: {
    checkBox,
    checkedBox,
    audios
  },
  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    content: {
      type: String,
    },
    checkBox: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
/* common */
.listItem {
  padding: 10px 16px;
  width: 100%;
  min-height: 56px;
  gap: 16px;
  justify-content: space-between;
  border-radius: 16px;
}
.listItem .label,
.listItem .content {
  width: 100%;
  text-align: left;
}
.listItem .label {
  font-size: 15px;
  font-weight: 500;
  color: rgb(var(--mio-theme-color-on-background));
}
.listItem .content {
  font-size: 13px;
  color: rgb(var(--mio-theme-color-on-background-70));
}
.listItem .checked {
  stroke: rgb(var(--mio-theme-color-on-primary));
}
.listItem:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.listItem.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
</style>
