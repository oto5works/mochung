<template>
  <div class="tiptap" v-if="editor">
    <div class="tiptap-functions">
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
        <div class="tooltipTiptap" v-if="dialog">
          <!--<button :class="{ selected: editor.isActive('heading', { level: 6 }) }" @click="setHeading(6)"><span class="font-size_10">Smaller</span></button>-->
          <button
            :class="{ selected: editor.isActive('heading', { level: 5 }) }"
            @click="setHeading(5)"
          >
            <span class="font-size_12">Small</span>
          </button>
          <button
            :class="{ selected: !editor.isActive('heading') }"
            @click="unsetHeading()"
          >
            <span class="font-size_14">Medium</span>
          </button>
          <button
            :class="{ selected: editor.isActive('heading', { level: 4 }) }"
            @click="setHeading(4)"
          >
            <span class="font-size_16">Large</span>
          </button>
          <!--<button :class="{ selected: editor.isActive('heading', { level: 3 }) }" @click="setHeading(3)"><span class="font-size_18">Extra Large</span></button>-->
        </div>
      </buttonDefault>
      <div class="tiptap-line-1" />
      <!-- Other buttons -->
      <buttonDefault
        variant="text"
        height="32"
        :icon="true"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ selected: editor.isActive('bold') }"
        ><icon class="icon_16"><textB /></icon>
      </buttonDefault>

      <buttonDefault
        variant="text"
        height="32"
        :icon="true"
        @click="editor.chain().focus().toggleHighlight().run()"
        :class="{ selected: editor.isActive('highlight') }"
        ><icon class="icon_16"><highlighter /></icon>
      </buttonDefault>

      <buttonDefault
        variant="text"
        height="32"
        :icon="true"
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ selected: editor.isActive('underline') }"
        ><icon class="icon_16"><textUnderline /></icon>
      </buttonDefault>

      <buttonDefault
        variant="text"
        height="32"
        :icon="true"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ selected: editor.isActive('italic') }"
        ><icon class="icon_16"><textItalic /></icon>
      </buttonDefault>
    </div>
    <div class="tiptap-line-2" />
    <editor-content :editor="editor" @keydown.enter="handleEnterKey" />
<div class="tiptap-bottom">
  <slot></slot>
</div>

  </div>
</template>

<script>
import "@/components/tiptap/tiptap.scss";

import dropdown from "@/components/icon/dropdown.vue";
import textB from "@/components/icon/textB.vue";
import textItalic from "@/components/icon/textItalic.vue";
import textUnderline from "@/components/icon/textUnderline.vue";
import highlighter from "@/components/icon/highlighter.vue";
import textSizeUp from "@/components/icon/textSizeUp.vue";
import textSizeDown from "@/components/icon/textSizeDown.vue";
import bold from "@tiptap/extension-bold";
import highlight from "@tiptap/extension-highlight";
import underline from "@tiptap/extension-underline";
import italic from "@tiptap/extension-italic";
import heading from "@tiptap/extension-heading";
import document from "@tiptap/extension-document";
import paragraph from "@tiptap/extension-paragraph";
import text from "@tiptap/extension-text";
import { Editor, EditorContent } from "@tiptap/vue-3";

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
