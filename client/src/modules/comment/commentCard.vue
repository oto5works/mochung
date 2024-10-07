<template>
  <div class="comment-card">
    <h3>{{ title }}</h3>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment-card {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comment-card:hover {
  background-color: #f0f0f0; /* Highlight on hover */
}

.selected {
  background-color: #e0f7fa; /* Change background color when selected */
  border-color: #00bcd4; /* Change border color when selected */
}
</style>
