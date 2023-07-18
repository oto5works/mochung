<template>
<div class="preview_btn__wrap" v-if="!menu.preview">
    <div class="preview_btn" @click="previewClicked">
        <div class="eye__wrap">
          <icon icon="Preview"><Preview /></icon>
          <div class="eye" ref="eye"></div>
        </div>
        <p>미리보기</p>
    </div>
    </div>
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import Preview from '@/components/Icons/Preview.vue'

export default {
    components: { icon, Preview },
    props: {
      menu: { type: Object },
    },
    data() {
    return {
      prevScrollY: 0,
    };
  },
  mounted() {
    const writeDivision = document.getElementById('write__wrap');
    writeDivision.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    const writeDivision = document.getElementById('write__wrap');
    writeDivision.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    previewClicked() {
      const previewDivision = document.getElementById('preview');
      previewDivision.style.transform = 'translateX(0%)';
      this.menu.preview = true;
      this.menu.save = false;
    },
    handleScroll() {
      const eyeElement = this.$refs.eye;
      const writeDivision = document.getElementById('write__wrap');
      const scrollY = writeDivision.scrollTop;

  if (scrollY > this.prevScrollY) {
    // 아래로 내릴때
    eyeElement.style.top = '11px';
  } else {
    // 위로 올릴때
    eyeElement.style.top = '7px';
  }

  this.prevScrollY = scrollY;

  // Scroll back to original position after 2 seconds
  clearTimeout(this.scrollTimeout);
  this.scrollTimeout = setTimeout(() => {
    eyeElement.style.top = '9px';
  }, 50);
},
  },
}
</script>

<style scoped>

.preview_btn__wrap {
  position: fixed;
  display: none;
  bottom: 20px;
  right: 20px;
  width: 64px;
  height: 64px;
  z-index: 998;
  cursor: pointer;
}
.preview_btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 64px;
  background-color: var(--root-primary-color);
  padding: 10px 0 12px 0;
}

.preview_btn .eye__wrap {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
}
.preview_btn p {
  font-size: 13px;
  letter-spacing: -0.08em;
  line-height: 13px;
  height: 13px;
}
.preview_btn .eye {
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border: 1.13px solid #000;
  border-radius: 10px;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
}
@media (max-width: 575px) {
  .preview_btn__wrap {
  display: block;
}
}
</style>