<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">추가 안내 설정</h1>
      </div>

      <div class="flex justify-content_space-between align-items_center">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="guide.use === 'false'" icon="MegaphoneFalse"><MegaphoneFalse /></icon>
          <icon v-if="guide.use === 'true'" icon="Megaphone"><Megaphone /></icon>
        </div>
          <h5 class="--font-weight">추가 안내를 사용할까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="guide.use"
    hide-details
    inset
    true-value="true"
    false-value="false"
  ></v-switch>
</div>


<div v-if="guide.use === 'true'">
  <div class="sp_28"/>
    <v-text-field type="text" :variant="input" label="제목" v-model="guide.title" />
    <v_tiptap v-model="guide.content" />
</div>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>
</template>

<script>
import v_tiptap from '@/components/v_tiptap.vue'
import icon from '@/components/Icons/icon.vue'
import Megaphone from '@/components/Icons/Megaphone.vue'
import MegaphoneFalse from '@/components/Icons/MegaphoneFalse.vue'

export default {
  components: { v_tiptap, icon, Megaphone, MegaphoneFalse },
  props: {
    guide: { type: Object },
    input: '',
  },
};
</script>

