<template>
  <div id="v-appbar">
  <div class="flex align-items_center justify-content_space-between">
      <button class="button-appbar width_48" @click="showNavigation()">
        <icon icon="List"><List /></icon>
      </button>

      <button v-if="menu.save" class="button-appbar pa_20 gap_8" @click="$emit('handleSubmit')">
          <icon icon="Save"><Save /></icon>
          <span>저장</span>
          <div class="appbar__overlay"/>
      </button>

      <button v-if="menu.preview" class="button-appbar pa_20 gap_8" @click="hidePreview()">
          <icon icon="EyeClosed"><EyeClosed /></icon>
          <span>미리보기 종료</span>
          <div class="appbar__overlay"/>
      </button>

  </div>
</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import List from '@/components/Icons/List.vue'
import Save from '@/components/Icons/Save.vue'
import EyeClosed from '@/components/Icons/EyeClosed.vue'

export default {
  components: { icon, List, Save, EyeClosed },
  props: {
    menu: { type: Object },
  },
  methods: {
    showNavigation() {
      const previewDivision = document.getElementById('v-navigation');
      previewDivision.style.transform = 'translateX(0%)';
      const previewOverlay = document.getElementById('v-overlay');
      previewOverlay.style.display = 'block';
      previewOverlay.style.opacity = '0.4';
    },
    hidePreview() {
      const previewDivision = document.getElementById('preview');
      previewDivision.style.transform = 'translateX(100%)';
      this.menu.preview = false;
      this.menu.save = true;
    },
  },
};
</script>