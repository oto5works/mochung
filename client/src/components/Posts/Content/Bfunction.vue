<template>
  <div class="flex flex-col w-1/3 mx-auto">
    <input
      type="text"
      :value="name"
      class="border shadow border-blue-200 rounded-md p-2 mb-3"
      placeholder="name"
      @input="$emit('update:name', $event.target.value)"
    />
    <input
      type="text"
      :value="content"
      @input="$emit('update:content', $event.target.value)"
      placeholder="content"
    />
  </div>
</template>

<script>
export default {
  name: "Bfunction",
  props: {
    name: String,
    content: String,
  },
  // or we can call a function on input and update it in setup function
  //   setup(props, context) {
  //     const updateEmail = (event) => {
  //       context.emit("update:email", event.target.value);
  //     };
  //  return { updateEmail }
  //   },
};
</script>

<style>
</style>