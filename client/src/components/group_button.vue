<template>
  <div class="group_button">
    <v-btn class="group_button__content" v-for="(item, index) in options"
            :key="index"
            :class="{ 'active': item.value === selected }"
            @click="selectOption(item)">
            <img class="group_button-img" :src="`src/assets/icon/${item.value}.svg`" alt=""/>
            {{ item.title }}
    </v-btn>
  </div>
</template>

<script>
export default {
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
        this.$emit('update:selected', null); // deselect the option
      } else {
        this.$emit('update:selected', option.value); // select the option
      }
    }
  }
};
</script>
