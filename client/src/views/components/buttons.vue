<template>
  <div class="component">
    <div>
      <div class="title">TONAL</div>
      <div class="display_flex gap_8">
        <buttonDefault variant="tonal" height="18"
          ><span>18-height</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="24"
          ><span>24-height</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="32"
          ><span>32-height</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="36"
          ><span>36-height</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="40"
          ><span>40-height</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="46"
          ><span>46-height</span></buttonDefault
        >
      </div>
      <div class="item-title">[text]</div>
      <div class="sp_16" />
      <div class="display_flex gap_8">
        <buttonDefault variant="tonal" height="18" :icon="true"
          ><icon class="icon_12"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="tonal" height="24" :icon="true"
          ><icon class="icon_14"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="tonal" height="32" :icon="true"
          ><icon class="icon_16"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="tonal" height="36" :icon="true"
          ><icon class="icon_16"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="tonal" height="40" :icon="true"
          ><icon class="icon_18"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="tonal" height="46" :icon="true"
          ><icon class="icon_18"><x /></icon
        ></buttonDefault>
      </div>
      <div class="item-title">[icon]</div>
      <div class="sp_16" />
      <div class="display_flex gap_8">
        <buttonDefault variant="tonal" height="18"
          ><icon class="icon_12"><x /></icon><span>18h</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="24"
          ><icon class="icon_14"><x /></icon><span>24h</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="32"
          ><icon class="icon_16"><x /></icon><span>32h</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="36"
          ><icon class="icon_16"><x /></icon><span>36h</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="40"
          ><icon class="icon_18"><x /></icon><span>40h</span></buttonDefault
        >
        <buttonDefault variant="tonal" height="46"
          ><icon class="icon_18"><x /></icon><span>46h</span></buttonDefault
        >
      </div>
      <div class="item-title">[icon + text]</div>
    </div>


    <div>
      <div class="title">TONAL-STATE</div>
      <div class="display_flex gap_8">
        <div class="item">
          <buttonDefault variant="tonal" height="32"
            ><span>enabled</span></buttonDefault
          >
          <div class="item-title">[enabled]</div>
        </div>
        <div class="item">
          <buttonDefault class="hovered" variant="tonal" height="32"
            ><span>hovered</span></buttonDefault
          >
          <div class="item-title">[hovered]</div>
        </div>
        <div class="item">
          <buttonDefault class="selected" variant="tonal" height="32"
            ><span>selected</span></buttonDefault
          >
          <div class="item-title">[selected]</div>
        </div>
        <div class="item">
          <buttonDefault class="disabled" variant="tonal" height="32"
            ><span>disabled</span></buttonDefault
          >
          <div class="item-title">[disabled]</div>
        </div>
      </div>
    </div>


    <div>
      <div class="title">FILLED</div>
      <div class="display_flex gap_8">
        <buttonDefault variant="filled" height="18"
          ><span>18-height</span></buttonDefault
        >
        <buttonDefault variant="filled" height="24"
          ><span>24-height</span></buttonDefault
        >
        <buttonDefault variant="filled" height="32"
          ><span>32-height</span></buttonDefault
        >
        <buttonDefault variant="filled" height="36"
          ><span>36-height</span></buttonDefault
        >
        <buttonDefault variant="filled" height="40"
          ><span>40-height</span></buttonDefault
        >
        <buttonDefault variant="filled" height="46"
          ><span>46-height</span></buttonDefault
        >
      </div>
      <div class="item-title">[text]</div>
      <div class="sp_16" />
      <div class="display_flex gap_8">
        <buttonDefault variant="filled" height="18" :icon="true"
          ><icon class="icon_12"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="filled" height="24" :icon="true"
          ><icon class="icon_14"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="filled" height="32" :icon="true"
          ><icon class="icon_16"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="filled" height="36" :icon="true"
          ><icon class="icon_16"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="filled" height="40" :icon="true"
          ><icon class="icon_18"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="filled" height="46" :icon="true"
          ><icon class="icon_18"><x /></icon
        ></buttonDefault>
      </div>
      <div class="item-title">[icon]</div>
      <div class="sp_16" />
      <div class="display_flex gap_8">
        <buttonDefault variant="filled" height="18"
          ><icon class="icon_12"><x /></icon><span>18h</span></buttonDefault
        >
        <buttonDefault variant="filled" height="24"
          ><icon class="icon_14"><x /></icon><span>24h</span></buttonDefault
        >
        <buttonDefault variant="filled" height="32"
          ><icon class="icon_16"><x /></icon><span>32h</span></buttonDefault
        >
        <buttonDefault variant="filled" height="36"
          ><icon class="icon_16"><x /></icon><span>36h</span></buttonDefault
        >
        <buttonDefault variant="filled" height="40"
          ><icon class="icon_18"><x /></icon><span>40h</span></buttonDefault
        >
        <buttonDefault variant="filled" height="46"
          ><icon class="icon_18"><x /></icon><span>46h</span></buttonDefault
        >
      </div>
      <div class="item-title">[icon + text]</div>
    </div>

    <div>
      <div class="title">FILLED-STATE</div>
      <div class="display_flex gap_8">
        <div class="item">
          <buttonDefault variant="filled" height="32"
            ><span>enabled</span></buttonDefault
          >
          <div class="item-title">[enabled]</div>
        </div>
        <div class="item">
          <buttonDefault class="hovered" variant="filled" height="32"
            ><span>hovered</span></buttonDefault
          >
          <div class="item-title">[hovered]</div>
        </div>
        <div class="item">
          <buttonDefault class="selected" variant="filled" height="32"
            ><span>selected</span></buttonDefault
          >
          <div class="item-title">[selected]</div>
        </div>
        <div class="item">
          <buttonDefault class="disabled" variant="filled" height="32"
            ><span>disabled</span></buttonDefault
          >
          <div class="item-title">[disabled]</div>
        </div>
      </div>
    </div>


    <div>
      <div class="title">TEXT</div>
      <div class="display_flex gap_8">
        <buttonDefault variant="text" height="18"
          ><span>18-height</span></buttonDefault
        >
        <buttonDefault variant="text" height="24"
          ><span>24-height</span></buttonDefault
        >
        <buttonDefault variant="text" height="32"
          ><span>32-height</span></buttonDefault
        >
        <buttonDefault variant="text" height="36"
          ><span>36-height</span></buttonDefault
        >
        <buttonDefault variant="text" height="40"
          ><span>40-height</span></buttonDefault
        >
        <buttonDefault variant="text" height="46"
          ><span>46-height</span></buttonDefault
        >
      </div>
      <div class="item-title">[text]</div>
      <div class="sp_16" />
      <div class="display_flex gap_8">
        <buttonDefault variant="text" height="18" :icon="true"
          ><icon class="icon_12"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="text" height="24" :icon="true"
          ><icon class="icon_14"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="text" height="32" :icon="true"
          ><icon class="icon_16"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="text" height="36" :icon="true"
          ><icon class="icon_16"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="text" height="40" :icon="true"
          ><icon class="icon_18"><x /></icon
        ></buttonDefault>
        <buttonDefault variant="text" height="46" :icon="true"
          ><icon class="icon_18"><x /></icon
        ></buttonDefault>
      </div>
      <div class="item-title">[icon]</div>
      <div class="sp_16" />
      <div class="display_flex gap_8">
        <buttonDefault variant="text" height="18"
          ><icon class="icon_12"><x /></icon><span>18h</span></buttonDefault
        >
        <buttonDefault variant="text" height="24"
          ><icon class="icon_14"><x /></icon><span>24h</span></buttonDefault
        >
        <buttonDefault variant="text" height="32"
          ><icon class="icon_16"><x /></icon><span>32h</span></buttonDefault
        >
        <buttonDefault variant="text" height="36"
          ><icon class="icon_16"><x /></icon><span>36h</span></buttonDefault
        >
        <buttonDefault variant="text" height="40"
          ><icon class="icon_18"><x /></icon><span>40h</span></buttonDefault
        >
        <buttonDefault variant="text" height="46"
          ><icon class="icon_18"><x /></icon><span>46h</span></buttonDefault
        >
      </div>
      <div class="item-title">[icon + text]</div>
    </div>

    <div>
      <div class="title">TEXT-STATE</div>
      <div class="display_flex gap_8">
        <div class="item">
          <buttonDefault variant="text" height="32"
            ><span>enabled</span></buttonDefault
          >
          <div class="item-title">[enabled]</div>
        </div>
        <div class="item">
          <buttonDefault class="hovered" variant="text" height="32"
            ><span>hovered</span></buttonDefault
          >
          <div class="item-title">[hovered]</div>
        </div>
        <div class="item">
          <buttonDefault class="selected" variant="text" height="32"
            ><span>selected</span></buttonDefault
          >
          <div class="item-title">[selected]</div>
        </div>
        <div class="item">
          <buttonDefault class="disabled" variant="text" height="32"
            ><span>disabled</span></buttonDefault
          >
          <div class="item-title">[disabled]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
