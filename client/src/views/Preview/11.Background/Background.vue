<template>
    <div class="bg__wrap">
        <Background_defaulted v-if="background_type === 'defaulted'" />
        <Background_gradient v-if="background_type === 'gradient'" />
    </div>
</template>
<script>
import Background_gradient from "@/views/Preview/11.Background/Background_gradient.vue";
import Background_defaulted from "@/views/Preview/11.Background/Background_defaulted.vue";
import Audio from "@/views/Preview/14.Audio/Audio.vue";

export default {
  components: { Background_gradient, Background_defaulted, Audio },
  props: {
    background_type: { type: String },
  },
  };
  </script>
  <style scoped>
  .bg__wrap {
    position: sticky;
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
  }
  </style>