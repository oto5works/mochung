<template>
  <div class="tiptap --border-radius_16" v-if="editor">
    <div
      class="editor__wrap flex justify-content_space-between width_100 height_40 pa_8"
    >
      <div class="flex align-items_center gap_4">
        <button
          class="button-editor button-unselected"
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ selected: editor.isActive('bold') }"
        >
          <icon><textB /></icon>
          <div class="tiptap__overlay --border-radius_4" />
        </button>
        <button
          class="button-editor button-unselected"
          @click="editor.chain().focus().toggleHighlight().run()"
          :class="{ selected: editor.isActive('highlight') }"
        >
          <icon><highlighter /></icon>
          <div class="tiptap__overlay --border-radius_4" />
        </button>
        <button
          class="button-editor button-unselected"
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ selected: editor.isActive('underline') }"
        >
          <icon><textUnderline /></icon>
          <div class="tiptap__overlay --border-radius_4" />
        </button>
        <button
          class="button-editor button-unselected"
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ selected: editor.isActive('italic') }"
        >
          <icon><textItalic /></icon>
          <div class="tiptap__overlay --border-radius_4" />
        </button>
        <button
          class="button-editor button-unselected"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ selected: editor.isActive('heading', { level: 1 }) }"
        >
          <icon><textSizeUp /></icon>
          <div class="tiptap__overlay --border-radius_4" />
        </button>
        <button
          class="button-editor button-unselected"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ selected: editor.isActive('heading', { level: 2 }) }"
        >
          <icon><textSizeDown /></icon>
          <div class="tiptap__overlay --border-radius_4" />
        </button>
      </div>
    </div>
    <editor-content :editor="editor" @keydown.enter.prevent="handleEnterKey" />
  </div>
</template>

<script>
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
      editor: null,
    };
  },

  mounted() {
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
          levels: [1, 2, 3],
        }),
      ],

      content: this.modelValue,
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
  },
  methods: {
    handleEnterKey(event) {
      this.editor.chain().focus().setParagraph().run();
    },
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
};
</script>

<style scoped>
.tiptap {
  position: relative;
  width: 100%;
  resize: none;
  overflow: hidden;
}
.titap-btn.is-active {
  opacity: 1;
}
.editor__wrap {
  color: var(--primary-on);
  background-color: var(--primary-color);
}
.button-editor {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
}
.button-editor svg {
  width: 20px;
  height: 20px;
}

.tiptap::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: var(--border-radius-16);
  background-color: var(--pc-pc-tr);
  opacity: 0.12;
  transition: opacity 0.3s ease-in-out;
}
.tiptap::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: var(--box-shadow-display);
  border-radius: var(--border-radius-16);
  -webkit-box-shadow: 0 10px 20px -10px var(--primary-color);
  box-shadow: 0 10px 20px -10px var(--primary-color);
  opacity: 0.2;
}
.edit-article:hover::before {
  background-color: var(--primary-color);
  opacity: 0.16;
}
</style>
