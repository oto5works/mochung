<template>
    <buttonDefault
      class="dropdown"
      variant="tonal"
      height="32"
      @click="toggleDialog"
      :class="{ selected: dialog }"
    >
      <span v-if="editor.isActive('heading', { level: 6 })">Smaller</span>
      <span v-else-if="editor.isActive('heading', { level: 5 })">Small</span>
      <span v-else-if="editor.isActive('heading', { level: 4 })">Large</span>
      <span v-else-if="editor.isActive('heading', { level: 3 })"
        >Extra Large</span
      >
      <span v-else>Medium</span>

      <icon class="icon_16"><dropdown /></icon>


<!-- list -->
<div class="tooltipColor" v-click-outside="handleClickOutside">
      <!-- Color picker button -->
      <button class="color-wrap">
        <div class="color-item umbrella">
          <input
            class="opacity_0"
            @input="updateSelected($event)"
            @click.stop
            type="color"
          />
        </div>
      </button>

      <!-- Color options -->
      <button
        class="color-wrap"
        v-for="(item, index) in options"
        :key="index"
        @click="selectColor(item)"
        :class="{ selected: item.value === modelValue }"
      >
        <div class="color-item">
          <span
            v-for="(color, index) in getColorArray(item.value)"
            :key="index"
            :style="{ backgroundColor: color }"
          ></span>
        </div>
      </button>
    </Flicking>
  </div>
<!-- list -->


    </buttonDefault>
</template>

<script>
import "@/components/tiptap/tiptap.scss";

import dropdown from "@/components/icon/dropdown.vue";




export default {
  components: {
    EditorContent,
    dropdown,
    textB,
    textItalic,
    textUnderline,
    highlighter,
    textSizeUp,
    textSizeDown,
  },
  props: {
    modelValue: { type: String },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      editor: "",
      dialog: false,
    };
  },

  methods: {
    handleEnterKey(event) {
      event.preventDefault();
      this.editor.chain().focus().createParagraphNear().run();
    },
    toggleDialog(event) {
      event.stopPropagation();
      this.dialog = !this.dialog;
    },
    hideDialog() {
      if (this.dialog) {
        this.dialog = false;
      }
    },
    setHeading(level) {
      this.editor.commands.setHeading({ level });
      this.hideDialog;
    },
    unsetHeading() {
      this.editor.commands.setParagraph();
      this.hideDialog;
    },
  },
  mounted() {
    window.document.addEventListener("click", this.hideDialog);

    this.editor = new Editor({
      extensions: [
        document,
        paragraph,
        underline,
        italic,
        text,
        bold,
        highlight.configure({ multicolor: true }),
        heading.configure({
          levels: [1, 2, 3, 4, 5, 6],
        }),
      ],
      content: this.modelValue,
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
  },
  beforeUnmount() {
    window.document.removeEventListener("click", this.hideDialog);
    if (this.editor) {
      this.editor.destroy();
    }
  },
};
</script>
