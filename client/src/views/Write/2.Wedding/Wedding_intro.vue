<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">인트로 설정</h1>
      </div>
      <v-text-field type="text" :variant="input" label="제목" v-model="wedding.intro_title" />
<div class="sp_18"/>
    <v_tiptap v-model="wedding.intro_content"/>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>
</template>

<script>
import v_tiptap from '@/components/v_tiptap.vue'

export default {
  components: { v_tiptap },
  props: {
    wedding: { type: Object },
    input: '',
  },
  data() {
    return {
      tab: 'defaulted',
    }
  },
};
</script>

