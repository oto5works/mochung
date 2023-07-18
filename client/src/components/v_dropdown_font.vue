<template>
  <div class="v-dropdown --border-radius_12" ref="dropdown" :class="{ open: open }">
    <div class="selected flex align-items_center justify-content_space-between height_40" :class="{ open: open }" @click="toggleDropdown">
      <div class="font"><font :font="selected" ><component :is="selected" /></font></div>
      <div class="CaretDown">
      <icon icon="CaretDown"><CaretDown /></icon>
    </div>

      <div class="overlay"/>
    </div>

    <div class="items__wrap" :class="{ selectHide: !open }">
      <div class="items__content height_40" v-for="(option, i) of options" :key="i" @click="selectOption(option)">
        <div class="font"><font :font="option.value"><component :is="option.value" /></font></div>
        <div class="items__hr"/>
      </div>
    </div>

  </div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import CaretDown from '@/components/Icons/CaretDown.vue'

import font from '@/components/Fonts/font.vue'
import SpoqaHanSansLight from '@/components/Fonts/SpoqaHanSansLight.vue'
import SpoqaHanSans from '@/components/Fonts/SpoqaHanSans.vue'
import SunBatangLight from '@/components/Fonts/SunBatangLight.vue'
import SunBatang from '@/components/Fonts/SunBatang.vue'
import DoveMayo from '@/components/Fonts/DoveMayo.vue'
import MapoFlower from '@/components/Fonts/MapoFlower.vue'
import BCCard from '@/components/Fonts/BCCard.vue'
import GangwonEdu from '@/components/Fonts/GangwonEdu.vue'
import KimjungchulScript from '@/components/Fonts/KimjungchulScript.vue'
import MiMiWorld from '@/components/Fonts/MiMiWorld.vue'
import PyeongchangPeace from '@/components/Fonts/PyeongchangPeace.vue'
import GowunBatang from '@/components/Fonts/GowunBatang.vue'
import HanamDaum from '@/components/Fonts/HanamDaum.vue'
import Binggrae from '@/components/Fonts/Binggrae.vue'
import YUniverse from '@/components/Fonts/YUniverse.vue'

export default {
  components: { icon, CaretDown, 
    font, SpoqaHanSansLight, SpoqaHanSans, SunBatangLight, SunBatang, DoveMayo, MapoFlower, BCCard, GangwonEdu, KimjungchulScript, MiMiWorld, PyeongchangPeace, GowunBatang, HanamDaum, Binggrae, YUniverse
  },
  props: {
    options: Array,
    selected: String
  },
  data() {
    return {
      selected: this.selected
        ? this.selected
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectOption(option) {
      this.selected = option.value;
      this.open = false;
      this.$emit('update:selected', option.value);
    },
    handleOutsideClick(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.open = false;
      }
    },
  },
};
</script>