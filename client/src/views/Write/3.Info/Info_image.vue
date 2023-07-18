<template>
<section>
  <article class="pa_0">

  </article>
</section>

</template>

<script>
import icon from '@/components/Icons/icon.vue'
import QuestionMark from '@/components/Icons/QuestionMark.vue'
import Image from '@/components/Icons/Image.vue'
import ImageFalse from '@/components/Icons/ImageFalse.vue'

export default {
  components: { icon, QuestionMark, Image, ImageFalse },
  props: {
    info: { type: Object },
  },
};
</script>