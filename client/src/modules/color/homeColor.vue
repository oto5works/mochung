<template>
  <div class="position_relative">


  <cardViewColor 

  title="메인 폰트 색상"
  :options="homeColorOptions"
      :color="homeData.color"
      @update:color="homeData.color = $event"
      :dialog="dialog"
      @update:dialog="dialog = $event"
  />


    <formBox icon="color" title="메인 폰트 색상" @click="dialog = true">
      <div class="flex align-items_center gap_8">
        <div class="item-color" :style="{ background: homeData.color }" />
        <p :style="{ color: homeData.color }">{{ selectedColor }}</p>
      </div>
    </formBox>
    <fnColor
      v-if="dialog"
      :options="homeColorOptions"
      :color="homeData.color"
      @update:color="homeData.color = $event"
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
};
</script>
