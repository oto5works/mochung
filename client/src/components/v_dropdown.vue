<template>
  <div class="v-dropdown --border-radius_12" ref="dropdown" :class="{ open: open }">
    <div class="selected flex align-items_center justify-content_space-between height_40" :class="{ open: open }" @click="toggleDropdown">
      <span>{{ selected }}</span>
    <div class="CaretDown">
      <icon icon="CaretDown"><CaretDown /></icon>
    </div>
      <div class="overlay"/>
    </div>

    <div class="items__wrap" :class="{ selectHide: !open }">
      <div class="items__content height_40" v-for="(option, i) of options" :key="i" @click="selectOption(option)">
        <span class="flex align-items_center height_40">{{ option.title }}</span>
        <div class="items__hr"/>
      </div>
    </div>

  </div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import CaretDown from '@/components/Icons/CaretDown.vue'

export default {
  components: { icon, CaretDown },
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
      this.selected = option.title;
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