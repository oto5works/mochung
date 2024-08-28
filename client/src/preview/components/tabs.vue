<template>
  <div class="flicking">
    <Flicking
      v-if="renderFlicking"
      ref="flicking"
      class="flicking-item"
      :options="{ moveType: 'snap', bound: true, align: flickingAlign }"
    >
      <tab
        v-for="(option, index) in options"
        :key="index"
        :value="index"
        :class="{ selected: index === modelValue }"
        :title="option.title"
        @click="updateValue(index)"
      >
      </tab>
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import tab from "@/preview/components/tab.vue";
import { mapGetters } from "vuex";

export default {
  components: { Flicking, tab },

  props: {
    options: {
      type: Array,
    },
    modelValue: {
      type: [String, Number],
      default: 0,
    },
  },
  emits: ["update:modelValue", "deleteTab"],
  data() {
    return {
      renderFlicking: true,
    };
  },
  computed: {
    ...mapGetters({
      align: "getAlign",
    }),
    flickingAlign() {
      // Map the align value from Vuex to Flicking's align options
      switch (this.align) {
        case 'left':
          return 'prev';
        case 'center':
          return 'center';
        case 'right':
          return 'next';
        default:
          return 'next'; // Default to 'next' if no valid value is provided
      }
    },
  },
  watch: {
    options() {
      this.reloadFlicking();
    },
  },
  methods: {
    reloadFlicking() {
      this.renderFlicking = false;
      this.$nextTick(() => {
        this.renderFlicking = true;
      });
    },
    updateValue(value) {
      this.$emit("update:modelValue", Number(value));
    },
    deleteTab(index) {
      this.$emit("deleteTab", index);
    },
  },
};
</script>
