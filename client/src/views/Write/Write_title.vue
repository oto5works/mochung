<template>
    <div class="title__wrap">
      <div class="pa_16">
        <icon :icon="title.label"><component :is="title.label" /></icon>
        <div class="title --font-weight">{{ title.title }}</div>
        <div class="sp_12"/>
        <div class="sub-title">{{ title.sub_title }}</div>
        <div class="sp_24"/>
      </div>
      <div class="v-hr --display_block-none-block"/>
    </div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import main from '@/components/Icons/Main.vue'
import wedding from '@/components/Icons/Wedding.vue'
import info from '@/components/Icons/Info.vue'
import gallery from '@/components/Icons/Gallery.vue'
import guest from '@/components/Icons/Survey.vue'
import setting from '@/components/Icons/Setting.vue'
import custom from '@/components/Icons/Color.vue'

export default {
  components: { icon, main, wedding, info, gallery, guest, setting, custom },
    props: {
        title: { type: Object },
    },
}
</script>
<style scoped>
.title__wrap {
  padding: 32px 0 0px 0;
}
.title__wrap svg {
  width: 48px;
  height: 48px;
}
.title__wrap .title {
  font-size: 34px;
  line-height: 150%;
}
.title__wrap .sub-title {
  font-size: 20px;
  line-height: 150%;
}
</style>