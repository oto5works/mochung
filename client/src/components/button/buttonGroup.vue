<template>
  <div class="flicking">
    <Flicking
      v-if="renderFlicking"
      ref="flicking"
      class="flicking-item"
      :options="{ moveType: 'snap', bound: true, align: 'prev' }"
    >
      <buttonTab
        v-for="(option, index) in options"
        :key="index"
        :value="index"
        :class="{ selected: index === modelValue }"
        @click="updateValue(index)"
      >
        <span>{{ option.title }}</span>
        <buttonDefault
          v-if="enableDelete && index === modelValue"
          variant="tonal"
          height="18"
          :icon="true"
          @click.stop="deleteTab(index)"
        >
          <icon class="icon_12"><x /></icon>
        </buttonDefault>
      </buttonTab>
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: { Flicking },

  props: {
    options: {
      type: Array,
    },
    modelValue: {
      type: [String, Number],
      default: 0,
    },
    enableDelete: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "deleteTab"],
  data() {
    return {
      renderFlicking: true,
    };
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
