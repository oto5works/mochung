<template>
  <div class="formTitle3">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>
<script>
import "@/modules/formTitle/formTitle.scss";
export default {
  props: {
    title: String,
  },
};
</script>
