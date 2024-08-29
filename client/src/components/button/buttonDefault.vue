<template>
  <button class="buttonDefault" :class="variant" :style="computedStyles" :disabled="disabled">
    <slot></slot>
    <div class="underlay" />
    <div class="shadow" />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'tonal', // tonal, filled, text
    },
    icon: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '40', // 18, 24, 32, 36, 40, 46
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedStyles() {
      let styles = {};

      // Determine the borderRadius based on height
      const borderRadiusMap = {
        '18': '6px',
        '24': '8px',
        '32': '12px',
        '36': '12px',
        '40': '14px',
        '46': '16px',
      };

      const borderRadius = borderRadiusMap[this.height] || '14px';

      if (this.icon) {
        styles = {
          width: `${this.height}px`,
          height: `${this.height}px`,
          padding: '0',
          fontSize: 'inherit',
          borderRadius: borderRadius, // Apply the borderRadius
        };
      } else {
        switch (this.height) {
          case '18':
            styles = {
              fontSize: '11px',
              padding: '6px',
              gap: '2px',
              borderRadius: '6px',
              height: '18px',
            };
            break;
          case '24':
            styles = {
              fontSize: '13px',
              padding: '8px',
              gap: '4px',
              borderRadius: '8px',
              height: '24px',
            };
            break;
          case '32':
            styles = {
              fontSize: '13px',
              padding: '10px',
              gap: '4px',
              borderRadius: '12px',
              height: '32px',
            };
            break;
          case '36':
            styles = {
              fontSize: '13px',
              padding: '12px',
              gap: '6px',
              borderRadius: '12px',
              height: '36px',
            };
            break;
          case '40':
            styles = {
              fontSize: '14px',
              padding: '18px',
              gap: '8px',
              borderRadius: '14px',
              height: '40px',
            };
            break;
          case '46':
            styles = {
              fontSize: '14px',
              padding: '20px',
              gap: '8px',
              borderRadius: '16px',
              height: '46px',
            };
            break;
          default:
            styles = {
              fontSize: '14px',
              padding: '18px',
              gap: '8px',
              borderRadius: '14px',
              height: '40px',
            };
        }
      }
      return styles;
    },
    computedClass() {
      let baseClass = '';
      switch (this.variant) {
        case 'tonal':
          baseClass = 'tonal';
          break;
        case 'filled':
          baseClass = 'filled';
          break;
        case 'text':
          baseClass = 'text';
          break;
        default:
          baseClass = 'tonal';
      }
      return baseClass;
    },
  },
};
</script>

<style scoped>
/* common */
.buttonDefault {
  color: rgb(var(--mio-theme-color-primary));
}
.buttonDefault .shadow {
  display: none;
  box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-primary),.3);
}
/* tonal */
.buttonDefault.tonal .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.buttonDefault.tonal:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
.buttonDefault.tonal.selected {
  font-weight: 500;
}
.buttonDefault.tonal.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-40));
}
.buttonDefault.tonal.selected .shadow {
  display: block;
}
.buttonDefault.tonal:disabled {
  color: rgb(var(--mio-theme-color-primary-40));
}
.buttonDefault.tonal:disabled .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
/* filled */
.buttonDefault.filled {
  color: rgb(var(--mio-theme-color-on-primary));
}
.buttonDefault.filled .underlay {
  background-color: rgb(var(--mio-theme-color-primary));
}
.buttonDefault.filled:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-90));
}
.buttonDefault.filled.selected {
  font-weight: 500;
}
.buttonDefault.filled.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary));
}
.buttonDefault.filled.selected .shadow {
  display: block;
}
.buttonDefault.filled:disabled .underlay {
  background-color: rgb(var(--mio-theme-color-primary-40));
}
/* text */
.buttonDefault.text .underlay {
  background-color: transparent;
}
.buttonDefault.text:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.buttonDefault.text.selected {
  font-weight: 500;
}
.buttonDefault.text.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
.buttonDefault.text.selected .shadow {
  display: block;
}
.buttonDefault.text:disabled {
  color: rgb(var(--mio-theme-color-primary-40));
}
.buttonDefault.text:disabled .underlay {
  background-color: transparent;
}
</style>
