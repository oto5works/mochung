<template>
  <div class="position_relative">
    <formBox icon="color" title="폰트 색상" @click="dialog = true">
      <div class="flex align-items_center gap_8">
        <div
          class="item-color"
          :style="{ background: customData.fontColor }"
        />
        <p>
          {{ selectedColor }}
        </p>
      </div>
    </formBox>
    <fnColor
      v-if="dialog"
      :options="fontColorOptions"
      :color="customData.fontColor"
      @update:color="customData.fontColor = $event"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

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
      fontColorOptions: "getFontColorOptions",
    }),
    selectedColor() {
      const selectedColor = this.fontColorOptions.find(
        (option) => option.value === this.customData.fontColor
      );
      return selectedColor
        ? selectedColor.title
        : this.customData.fontColor;
    },
  },
};
</script>

<style scoped>
.formBox p {
  color: var(--font-color);
}
</style>
