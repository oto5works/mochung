<template>
  <div class="tiptap --border-radius_12" v-if="editor">
<div class="editor__wrap flex justify-content_space-between width_100 height_40 pa_8">
  <div class="flex align-items_center gap_4">
    <button class="button-editor button-unselected" @click="editor.chain().focus().toggleBold().run()" :class="{ 'selected': editor.isActive('bold') }">
      <icon icon="BOLD"><BOLD /></icon>
            <div class="tiptap__overlay --border-radius_4"/>
    </button>
    <button class="button-editor button-unselected" @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'selected': editor.isActive('highlight') }">
      <icon icon="HIGHLIGHT"><HIGHLIGHT /></icon>
            <div class="tiptap__overlay --border-radius_4"/>
    </button>
    <button class="button-editor button-unselected" @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'selected': editor.isActive('underline') }">
      <icon icon="UNDERLINE"><UNDERLINE /></icon>
          <div class="tiptap__overlay --border-radius_4"/>
    </button>
    <button class="button-editor button-unselected" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'selected': editor.isActive('italic') }">
      <icon icon="ITALIC"><ITALIC /></icon>
            <div class="tiptap__overlay --border-radius_4"/>
    </button>
    <button class="button-editor button-unselected" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'selected': editor.isActive('heading', { level: 1 }) }">
      <icon icon="H1"><H1 /></icon>
            <div class="tiptap__overlay --border-radius_4"/>
    </button>
    <button class="button-editor button-unselected" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'selected': editor.isActive('heading', { level: 2 }) }">
      <icon icon="H2"><H2 /></icon>
            <div class="tiptap__overlay --border-radius_4"/>
    </button>
  </div>
  </div>
  <editor-content :editor="editor" @keydown.enter="handleEnterKey"/>
</div>
</template>

<script>

import icon from '@/components/Icons/icon.vue'
import BOLD from '@/components/Icons/Bold.vue'
import ITALIC from '@/components/Icons/Italic.vue'
import UNDERLINE from '@/components/Icons/Underline.vue'
import HIGHLIGHT from '@/components/Icons/Highlight.vue'
import H1 from '@/components/Icons/H1.vue'
import H2 from '@/components/Icons/H2.vue'

import Bold from '@tiptap/extension-bold'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import Italic from '@tiptap/extension-italic'
import Heading from '@tiptap/extension-heading'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Editor, EditorContent } from '@tiptap/vue-3'

export default {
  components: { EditorContent, icon, BOLD, ITALIC, UNDERLINE, HIGHLIGHT, H1, H2 },
  props: {
    modelValue: { type: String },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      editor: '',
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Underline,
        Italic,
        Text,
        Bold,
        Highlight.configure({ multicolor: true }),
        Heading.configure({
          levels: [1, 2, 3],
        }),
      ],
    
      content: this.modelValue,
      onUpdate: () => {
        this.$emit('update:modelValue', this.editor.getHTML())
      },
    })
  },
  methods: {
    handleEnterKey(event) {
      event.preventDefault();
      this.editor.chain().focus().paragraph().run();
    },
  },
  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>