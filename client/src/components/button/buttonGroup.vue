<template>
  <div class="flicking">
    <Flicking
      v-if="renderFlicking"
      ref="flicking"
      class="flicking-item"
      :options="{ moveType: 'snap', bound: true, align: 'prev' }"
    >
      <buttonTab
        v-for="item in items"
        :key="item.value"
        :class="{ selected: item.value === modelValue }"
        @click="updateValue(item.value)"
      >
        <span>{{ item.title }}</span>
      </buttonTab>
    </Flicking>
  </div>
</template>
<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: { Flicking },

  props: {
    items: {
      type: Array,
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      renderFlicking: true,
    };
  },
  watch: {
    items() {
      this.reloadFlicking();
    },
  },
  mounted() {
    //this.selectedIndex(this.customData.temp);
    //this.reloadFlicking();
  },
  methods: {
    reloadFlicking() {
      this.renderFlicking = false;
      this.$nextTick(() => {
        this.renderFlicking = true;
      });
    },
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
