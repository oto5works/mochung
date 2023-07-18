<template>
  <div class="flex flex-col w-1/3 mx-auto">
    <input
      type="file"
      :value="file"
      @input="$emit('update:file', $event.target.files)"
      />
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
      placeholder="title"
    />
  </div>
</template>

<script>
export default {
  name: "Bfunction",
  props: {
    file: null,
    title: String,
  },
};
</script>

<style>
</style>