<!-- tabs-preview.vue -->
<template>
  <div class="component">
    <div>
      <div class="title">Check Box: {{ value }}</div>
      <cardViewTitle title="title" content="Use this to set the title for the section where guests can send" v-model="value" />

      <cardViewFile title="title" content="Use this to set the title for the section where guests can send" />

      
    </div>
    
    


  </div>
</template>

<script>
import cardViewTitle from "@/components/cardView/cardViewTitle.vue";
import cardViewFile from "@/components/cardView/cardViewFile.vue";

export default {
  components: { cardViewTitle, cardViewFile },
  data() {
    return {
      value: 'Gift Section Title',
    };
  },
};
</script>
