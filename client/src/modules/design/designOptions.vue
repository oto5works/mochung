<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in designStyleOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === customData.design }"
      :font1="item.title"
      :font2="item.info"
    >
      <div class="fnOption-image">
        <div class="fnOption-component">
          <component :is="item.value" />
        </div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/modules/functions/fnOption.scss";

export default {
  components: {
    design1: defineAsyncComponent(() => import("@/components/design/design1.vue")),
    design2: defineAsyncComponent(() => import("@/components/design/design2.vue")),
    design3: defineAsyncComponent(() => import("@/components/design/design3.vue")),
  },
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      designStyleOptions: "getDesignStyleOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.customData.design = option.value;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption {
  grid-template-columns: 1fr;
}
.buttonOption {
  flex-direction: row;
}
.fnOption-image {
  position: relative;
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.fnOption-component {
  position: relative;
  width: 50%;
  z-index: 2;
}
.fnOption-image::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: inherit;
    border: unset;
    background-color: var(--background-on);
    opacity: 0.08;
    z-index: 1;
}
.selected .fnOption-image::after {
    background-color: var(--primary-color);
}
.fnOption-text {
  text-align: left;
}
</style>
