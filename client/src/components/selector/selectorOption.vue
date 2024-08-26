<template>
  <dialogBottom
    :dialog="dialog"
    @update:dialog="updateDialog"
    :title="optionTitle"
  >
    <listItem
      v-for="(option, i) of options"
      :key="i"
      @click="selectOption(option)"
      :class="{ selected: selected === option.value }"
      :icon="option.value"
      :label="option.title"
    >
    </listItem>
  </dialogBottom>
</template>
<script>
export default {
  components: {},
  props: {
    dialog: { type: Boolean },
    optionTitle: { type: String },
    options: { type: Array },
    selected: { type: [Object, String, Boolean] },
  },
  methods: {
    selectOption(option) {
      this.$emit("update:selected", option.value);
      this.$emit("update:dialog", false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>