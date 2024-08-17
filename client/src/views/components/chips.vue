<template>
  <div class="component">
    <div>
      <div class="title">VALUE: {{ value }}</div>
      <div class="display_flex gap_8">
        <chip
          v-for="(label, index) in labels"
          :key="index"
          :class="{ selected: value === label }"
          @click="selectValue(label)"
        >
          <span>{{ label }}</span>
        </chip>
      </div>
    </div>

    <div>
      <div class="title">STATE</div>
      <div class="display_flex gap_8">
        <div class="item">
          <chip><span>enabled</span></chip>
          <div class="item-title">[enabled]</div>
        </div>
        <div class="item">
          <chip class="hovered"><span>hovered</span></chip>
          <div class="item-title">[hovered]</div>
        </div>
        <div class="item">
          <chip class="selected"><span>selected</span></chip>
          <div class="item-title">[selected]</div>
        </div>
        <div class="item">
          <chip class="disabled"><span>disabled</span></chip>
          <div class="item-title">[disabled]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "label 1",
      labels: ["label 1", "label 2", "label 3", "label 4", "label 5"], // Array of labels
    };
  },
  methods: {
    selectValue(label) {
      this.value = label; // 선택한 label로 value 값을 업데이트
    },
  },
};
</script>
