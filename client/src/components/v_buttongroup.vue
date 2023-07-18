<template>
    <button 
            class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
            v-for="(item, index) in options"
            :key="index"
            :class="{ 'selected': item.value === selected }"
            @click="selectOption(item)">
        <icon :icon="item.value"><component :is="item.value" /></icon>
        <span>{{ item.title }}</span>
    </button>
</template>

<script>

import icon from '@/components/Icons/icon.vue'
import Confetti from '@/components/Icons/Confetti.vue'
import Glitter from '@/components/Icons/Glitter.vue'
import Heart from '@/components/Icons/Heart.vue'
import Sakura from '@/components/Icons/Sakura.vue'
import Flower from '@/components/Icons/Flower.vue'
import Ribbon from '@/components/Icons/Ribbon.vue'
import Kanji from '@/components/Icons/Kanji.vue'
import Grid from '@/components/Icons/Grid.vue'
import Swipe from '@/components/Icons/Swipe.vue'
import AlignLeft from '@/components/Icons/AlignLeft.vue'
import AlignCenter from '@/components/Icons/AlignCenter.vue'
import AlignRight from '@/components/Icons/AlignRight.vue'

export default {
  components: { icon, Confetti, Glitter, Heart, Sakura, Flower, Ribbon, Kanji, Grid, Swipe, AlignLeft, AlignCenter, AlignRight  },

    data() {
    return {
    }
  },
  props: {
    options: Array,
    selected: String
  },
  methods: {
    selectOption(option) {
      if (option.value === this.selected) {
        this.$emit('update:selected', null);
      } else {
        this.$emit('update:selected', option.value);
      }
    }
  }
};
</script>
