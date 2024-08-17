<!-- formCreate.vue -->
<template>
  <div class="layout">
    <div class="layer-4">
      <div class="components">
        <h1>{{ currentComponent }}</h1>
        <component :is="currentComponent" />
      </div>
    </div>
    <div class="layer-3">
      <sidebar
        title="Components"
        :selected="currentComponent"
        :options="components"
        @update:selected="handleUpdateSelected"
      />
    </div>
  </div>
</template>

<script>
import "@/views/components/components.scss";

import buttons from "@/views/components/buttons.vue";
import chips from "@/views/components/chips.vue";
import icons from "@/views/components/icons.vue";
import listItems from "@/views/components/listItems.vue";
import formFields from "@/views/components/formFields.vue";
import tiptap from "@/views/components/tiptap.vue";

export default {
  components: { buttons, chips, icons, listItems, formFields, tiptap },
  data() {
    return {
      currentComponent: "buttons",
      components: [
        { label: "Buttons", value: "buttons" },
        { label: "Chips", value: "chips" },
        { label: "Icons", value: "icons" },
        { label: "List Items", value: "listItems" },
        { label: "Form Fields", value: "formFields" },
        { label: "tiptap", value: "tiptap" },
      ],
    };
  },
  methods: {
    handleUpdateSelected(newSelected) {
      this.currentComponent = newSelected;
    },
  },
};
</script>
