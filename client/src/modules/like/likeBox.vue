<template>
  <formBox icon="heart" title="좋아요" :active="functionData.fnLike" @click="toggleSwitch">
    <div class="edit-item__content">
      <v-switch
        style="pointer-events: none"
        v-model="functionData.fnLike"
        hide-details
        inset
      ></v-switch>
    </div>
  </formBox>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      functionData: "getFunctionData",
    }),
  },
  methods: {
    toggleSwitch() {
      this.functionData.fnLike = !this.functionData.fnLike;
    },
  },
};
</script>
