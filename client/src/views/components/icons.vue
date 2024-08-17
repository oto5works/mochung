<template>
  <div class="Icons">
    <div class="icon-item" v-for="icon in icons" :key="icon">
      <button>
        <icon><component :is="iconComponents[icon]" /></icon>
      </button>
      <span>{{ icon }}</span>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue';

export default {
  data() {
    // import.meta.glob으로 모든 아이콘 파일을 가져옵니다.
    const iconFiles = import.meta.glob('@/components/icon/*.vue', { eager: true });

    const icons = Object.keys(iconFiles).map((file) =>
      file.split('/').pop().replace('.vue', '')
    );

    const iconComponents = Object.keys(iconFiles).reduce((components, file) => {
      const iconName = file.split('/').pop().replace('.vue', '');
      components[iconName] = markRaw(iconFiles[file].default); // markRaw로 감싸기
      return components;
    }, {});

    return {
      icons,
      iconComponents,
    };
  },
};
</script>