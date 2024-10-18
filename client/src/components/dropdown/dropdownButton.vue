<template>
  <buttonDefault class="dropdownButton" variant="tonal" height="32">
    <span><slot></slot></span>
    <icon class="arrow"><dropdown /></icon>
  </buttonDefault>
</template>

<script>
import "@/components/dropdown/dropdown.scss";
import dropdown from "@/components/icon/dropdown.vue";

export default {
  components: { dropdown },
  methods: {},
};
</script>
