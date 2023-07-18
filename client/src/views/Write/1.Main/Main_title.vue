<template>
  <section>
    <article class="pa_0">
      <div class="pa_16">
        <div class="title__wrap">
          <h1 class="--text-align --font-weight">청첩장 제목</h1>
          <div class="sp_8"/>
          <h4 class="--text-align">카카오톡 URL 공유시 제목으로 사용됩니다.</h4>
        </div>
        
        <div class="illust__wrap flex align-items_center justify-content_center width_100">
        <icon class="size_80" icon="Illust_01"><Illust_01 /></icon>
        <div class="illust__content">
          <p>{{ main.title }}</p>
          <h6 class="opacity_60">coco.design/urladress</h6>
        </div>
      </div>

        <v-text-field type="text" :variant="input" label="청첩장 제목" v-model="main.title" />
        </div>
        <div class="sp_48"/>

    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>    
</template>
<script>
import Illust_01 from '@/components/Svg/Illust_01.vue'
import icon from '@/components/Icons/icon.vue'

export default {
  components: { icon, Illust_01 },

  props: {
    main: { type: Object },
    input: '',
  },
};
</script>
<style scoped>
.illust__content {
  position: absolute;
  top: 15%;
  text-align: left;
  left: 20%;
}
</style>