<template>
  <div class="sidebar">
    <div class="title-wrap">
      <div class="content">On This Page</div>
      <div class="title">{{ title }}</div>
    </div>

    <div class="sp_18" />

    <div class="button-wrap">
      <button
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        @click="handleClickEvent(option.value)"
        :class="{
          selected: option.value === selected,
          completed: option.completed || false,  // 기본값 false
        }"
      >
        <span>{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import "@/components/sidebar/sidebar.scss";

export default {
  props: {
    title: {
      type: String,
      default: "", 
    },
    selected: {
      type: String,
      default: "", 
    },
    options: {
      type: Array,
      default: () => [], 
    },
  },
  methods: {
    handleClickEvent(value) {
      this.$emit('update:selected', value);
    },
  },
};
</script>
