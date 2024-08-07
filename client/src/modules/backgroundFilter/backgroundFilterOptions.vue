<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in backgroundFilterOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === customData.filter }"
      :font3="item.title"
    >
      <div class="fnOption-image">
        <div class="fnOption-component" :class="{ [item.value]: true }"></div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/modules/functions/fnOption.scss";
import "@/modules/backgroundFilter/backgroundFilter.scss";

export default {
  components: {},
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      backgroundFilterOptions: "getBackgroundFilterOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.customData.filter = option.value;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption-image {
  position: relative;
  width: 100%;
  background-color: var(--background-color);
  z-index: 3;
}
.fnOption-component {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

</style>
