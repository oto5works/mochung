<template>
  <div class="rating">
    <icon
      v-for="star in maxStars"
      :key="star"
      class="star"
      :class="{ filled: star <= hoverValue || star <= modelValue }"
      @click="setValue(star)"
    >
      <star />
    </icon>
  </div>
</template>

<script>
import star from "@/components/icon/star.vue";

export default {
  components: {
    star,
  },
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      hoverValue: this.modelValue,
    };
  },
  methods: {
    setValue(star) {
      this.$emit("update:modelValue", star);
    },
    setHoverValue(star) {
      this.hoverValue = star;
    },
    resetHoverValue() {
      this.hoverValue = 0;
    },
  },
};
</script>

<style scoped>
.rating {
  display: flex;
  justify-content: center;
  gap: 4px;
  color: currentColor;
  padding: 32px 0;
}
.rating svg {
  width: 32px;
  height: 32px;
}
.star {
  cursor: pointer;
  opacity: 0.4;
}
.filled {
  fill: var(--primary-color);
  stroke: var(--primary-color);
  opacity: 1;
}
</style>
