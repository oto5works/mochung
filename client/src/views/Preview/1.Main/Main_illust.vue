<template>
      <div class="illust width_100 flex justify-content_center align-items_center --border-radius_12">
          <icon v-if="illust" :icon="illust"><component :is="illust" /></icon>
      </div>
</template>

<script>

import icon from '@/components/Icons/icon.vue'
import Main_01 from '@/components/Svg/Main_01.vue'
import Main_02 from '@/components/Svg/Main_02.vue'

export default {
  components: { icon, Main_01, Main_02 },
  props: {
    illust: { type: String },
  },
};
</script>
<style scoped>
.illust svg {
  width: 100%;
  height: 100%;
}
</style>