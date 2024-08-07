<!-- navigation.vue -->
<template>
  <div>
    <navigationButton />
    <navigationBar v-if="showNavigation"  />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { defineAsyncComponent } from "vue";
import navigationButton from "@/components/navigation/navigationButton.vue";

export default {
  
  components: { navigationButton,
    navigationBar: defineAsyncComponent(() =>
      import("@/components/navigation/navigationBar.vue")
    ),
  },
  computed: {
    ...mapGetters({
      userData: "getUserData",
      showNavigation: "getNavigation",
    }),
  },
};
</script>
