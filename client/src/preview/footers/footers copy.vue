<template>
  <div class="share__wrap">
    <div class="sp_48"/>
  <v-dialog v-model="dialog" >
    <template v-slot:activator="{ props }">
      <div class="flex --justify-content pa_32">
        <button class="button-defaulted height_40 gap_4 pa_24 --border-radius_32" v-bind="props">
          <span>공유하기</span>
          <icon icon="arrowRight"><arrowRight /></icon>
        </button>
      </div>
    </template>
    <button class="v-dialog__close" @click="dialog = false"><icon icon="close"><close /></icon></button>
    <div class="dialog__wrap --border-radius_16">
  <div class="sp_64"/>

<div class="pa_24">
    <h1>공유하기</h1>
<div class="sp_28"/>

<div class="flex align-items_center gap_16">
<div class="flex align-items_center flex-direction_column gap_4 width_48">
<button class="button-defaulted width_40 height_40 --border-radius_32"><icon icon="appkakaotalk"><appkakaotalk /></icon></button>
<h5 class="width_100 text-align_center">카카오톡</h5>
</div>

<div class="flex align-items_center flex-direction_column gap_4 width_48">
<button class="button-defaulted width_40 height_40 --border-radius_32"><icon icon="appline"><appline /></icon></button>
<h5 class="width_100 text-align_center">라인</h5>
</div>
</div>

<div class="sp_48"/>

<div class="primary__wrap flex align-items_center justify-content_space-between width_100 min-height_40 pa_16 cursor_pointer" @click="copyText(url)">
<p class="width_50 word-break_break-all line-height_100">https://Untitled.desgin/{{ url }}</p>
<div class="flex align-items_center gap_4">
<button class="button-icon --primary-color"><icon icon="copy"><copy /></icon></button>
<p class="line-height_100">주소 복사</p>
</div>
<div class="primary__overlay"/>
</div>

</div>
  <div class="sp_64"/>
</div>
</v-dialog>
<div class="sp_32"/>
<h6 class="width_100 text-align_center">© 2023 Untitled All Rights Reserved.</h6>
</div>
</template>
<script>
import icon from '@/components/icons/icon.vue'
import arrowRight from '@/components/icons/arrowRight.vue'
import close from '@/components/icons/close.vue'
import appkakaotalk from '@/components/icons/appkakaotalk.vue'
import appline from '@/components/icons/appline.vue'
import copy from '@/components/icons/copy.vue'

export default {
  components: { icon, arrowRight, close, appkakaotalk, appline, copy },
  props: {
    message: { type: Object },
    share: { type: Object },
    url: { type: String },
  },
  data() {
      return {
          dialog: false,
      };
  },
  methods: {
    copyText(url) {
      navigator.clipboard.writeText(url)
        .then(() => {
          alert(`주소가 복사되었습니다.`)
        })
        .catch((err) => {
          alert(`주소를 복사할 수 없습니다. ${err}`)
        })
    },
}
};
</script>

<style scoped>
.share__wrap {
  margin-top: 16px;
  background-color: var(--background-color);
}
</style>
