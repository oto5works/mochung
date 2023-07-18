<template>
  <div class="custom-select" ref="dropdown">
    <div class="selected" :class="{ open: open }" @click="toggleDropdown">
      <p>{{ selected }}</p>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div v-for="(option, i) of options" :key="i" @click="selectOption(option)">
{{ option }}
      </div>
    </div>
  </div>
</template>

<script>


export default {
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
    // add click event listener to document
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    // remove event listener when component is unmounted
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit('update:selected', option);
    },
    handleOutsideClick(event) {
      // check if clicked target is outside of the dropdown element
      if (!this.$refs.dropdown.contains(event.target)) {
        this.open = false;
      }
    },
  },
};
</script>