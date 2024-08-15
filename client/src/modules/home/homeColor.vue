<template>
  <div class="width_100">
    <cardViewColor
      title="Main Font Color"
      :options="homeColorOptions"
      :selected="homeData.color"
      @update:selected="homeData.color = $event"
    />
<!-- @update:selected="handleColorUpdate" -->
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import cardViewColor from "@/components/cardView/cardViewColor.vue";

export default {
  components: {
    cardViewColor,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeColorOptions: "getHomeColorOptions",
    }),
    selectedColor() {
      const selectedColor = this.homeColorOptions.find(
        (option) => option.value === this.homeData.color
      );
      return selectedColor ? selectedColor.title : this.homeData.color;
    },
  },
  methods: {
    handleColorUpdate(newColor) {
      this.selectedColor = newColor; // 부모의 부모의 값 변경
    }
  }
};
</script>
