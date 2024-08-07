<template>
  <div class="position_relative">
    <formBox icon="color" title="배경화면 색상" @click="dialog = true">
      <div class="flex align-items_center gap_8">
        <div
          class="item-color"
          :style="{ background: customData.primaryColor }"
        />
        <p>
          {{ selectedColor }}
        </p>
      </div>
    </formBox>
    <fnColor
      v-if="dialog"
      :options="primaryColorOptions"
      :color="customData.primaryColor"
      @update:color="customData.primaryColor = $event"
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
      primaryColorOptions: "getPrimaryColorOptions",
    }),
    selectedColor() {
      const selectedColor = this.primaryColorOptions.find(
        (option) => option.value === this.customData.primaryColor
      );
      return selectedColor
        ? selectedColor.title
        : this.customData.primaryColor;
    },
  },
};
</script>

<style scoped>
.formBox p {
  color: var(--primary-color);
}
</style>
