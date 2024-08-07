<template>
  <div class="position_relative">
    <formBox icon="color" title="배경화면 색상" @click="dialog = true">
      <div class="flex align-items_center gap_8">
        <div
          class="item-color"
          :style="{ background: customData.backgroundColor }"
        />
        <p>
          {{ selectedColor }}
        </p>
      </div>
    </formBox>
    <fnColor
      v-if="dialog"
      :options="backgroundColorOptions"
      :color="customData.backgroundColor"
      @update:color="customData.backgroundColor = $event"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import { setOnColor } from '@/services/function';

export default {
  components: {
    fnColor: defineAsyncComponent(() =>
      import("@/modules/functions/fnColor.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters({
      customData: "getCustomData",
      backgroundColorOptions: "getBackgroundColorOptions",
    }),
    selectedColor() {
      const selectedColor = this.backgroundColorOptions.find(
        (option) => option.value === this.customData.backgroundColor
      );
      return selectedColor
        ? selectedColor.title
        : this.customData.backgroundColor;
    },
  },
  watch: {
    "customData.backgroundColor": function (newVal) {
      // Assuming there's a method or logic to determine fontColor based on backgroundColor
      // You can replace the logic below with your actual logic
      this.customData.fontColor = setOnColor(newVal);
    },
  },
};
</script>

<style scoped>
.formBox p {
  color: var(--background-on);
}
</style>


