<template>
  <svg
    version="1.1"
    id="레이어_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 16 3"
    style="enable-background: new 0 0 16 3"
    xml:space="preserve"
  >
    <path class="st0">
      <animate
        attributeName="d"
        dur="3s"
        fill="currentColor"
        repeatCount="indefinite"
        :values="showNavigation ? navigationPath : defaultPath"
      />
    </path>
  </svg>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ showNavigation: "getNavigation" }),
    defaultPath() {
      return `
        M10.1,2.5c1.7,0,4.3,0,5.9,0c0,0,0-0.3,0-1c0-0.7,0-1,0-1c-1.6,0-4.1,0-5.9,0H5.9c-1.7,0-4.3,0-5.9,0
        c0,0,0,0.3,0,1c0,0.7,0,1,0,1c1.6,0,4.2,0,5.9,0H10.1z;
      `;
    },
    navigationPath() {
      return `
        M10.1,1.9c1.7,0.1,2.5,0.8,4.1,0.9c1,0,1.8-0.6,1.8-1.3c0-0.7-0.8-1.3-1.8-1.3c-1.6,0.1-2.4,0.9-4.1,0.9l-4.2,0
        C4.2,1.1,3.4,0.3,1.8,0.2C0.8,0.2,0,0.8,0,1.5c0,0.7,0.8,1.3,1.8,1.3c1.6-0.1,2.4-0.9,4.1-0.9L10.1,1.9z;
      `;
    },
  },
};
</script>
