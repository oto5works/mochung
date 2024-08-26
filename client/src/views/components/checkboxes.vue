<!-- tabs-preview.vue -->
<template>
  <div class="component">
    <div>
      <div class="title">Check Box: {{ value }}</div>
      <checkbox v-model="value" label="Label" />
    </div>
    
    


  </div>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      value: true,
    };
  },
};
</script>
