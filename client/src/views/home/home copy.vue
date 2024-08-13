<template>
  <div class="home">
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <toggleSwitch v-model="data1" />
    <listItem
      v-model="data1"
      label="label"
      content="content"
      :checkBox="true"
      icon="audios"
    />
    <listItem
      v-model="data1"
      label="label"
      content="content"
      :checkBox="true"
      icon="audios"
    />
    data1:: {{ data1 }}
    <div class="sp_48" />
    <h1>style: tonal</h1>
    <div class="display_flex gap_12">
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

    <h1>style: tonal + icon</h1>
    <div class="display_flex gap_12">
      <buttonDefault variant="tonal" height="18" :icon="true"
        ><icon class="icon_12"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="tonal" height="24" :icon="true"
        ><icon class="icon_14"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="tonal" height="32" :icon="true"
        ><icon class="icon_16"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="tonal" height="36" :icon="true"
        ><icon class="icon_16"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="tonal" height="40" :icon="true"
        ><icon class="icon_18"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="tonal" height="46" :icon="true"
        ><icon class="icon_18"><app /></icon
      ></buttonDefault>
    </div>

    <!-- filled -->

    <h1>style: filled</h1>
    <div class="display_flex gap_12">
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

    <h1>style: filled + icon</h1>
    <div class="display_flex gap_12">
      <buttonDefault variant="filled" height="18" :icon="true"
        ><icon class="icon_12"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="filled" height="24" :icon="true"
        ><icon class="icon_14"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="filled" height="32" :icon="true"
        ><icon class="icon_16"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="filled" height="36" :icon="true"
        ><icon class="icon_16"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="filled" height="40" :icon="true"
        ><icon class="icon_18"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="filled" height="46" :icon="true"
        ><icon class="icon_18"><app /></icon
      ></buttonDefault>
    </div>

    <!-- text -->

    <h1>style: text</h1>
    <div class="display_flex gap_12">
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

    <h1>style: filled + icon</h1>
    <div class="display_flex gap_12">
      <buttonDefault variant="text" height="18" :icon="true"
        ><icon class="icon_12"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="text" height="24" :icon="true"
        ><icon class="icon_14"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="text" height="32" :icon="true"
        ><icon class="icon_16"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="text" height="36" :icon="true"
        ><icon class="icon_16"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="text" height="40" :icon="true"
        ><icon class="icon_18"><app /></icon
      ></buttonDefault>

      <buttonDefault variant="text" height="46" :icon="true"
        ><icon class="icon_18"><app /></icon
      ></buttonDefault>
    </div>

    <h1>상태 selected</h1>
    <div class="display_flex gap_12">
      <buttonDefault class="selected" variant="tonal" height="40"
        ><icon class="icon_18"><app /></icon
        ><span>selected</span></buttonDefault
      >

      <buttonDefault class="selected" variant="filled" height="40"
        ><icon class="icon_18"><app /></icon
        ><span>selected</span></buttonDefault
      >

      <buttonDefault class="selected" variant="text" height="40"
        ><icon class="icon_18"><app /></icon
        ><span>selected</span></buttonDefault
      >
    </div>

    <h1>상태 disabled</h1>
    <div class="display_flex gap_12">
      <buttonDefault class="disabled" variant="tonal" height="40"
        ><icon class="icon_18"><app /></icon
        ><span>disabled</span></buttonDefault
      >

      <buttonDefault class="disabled" variant="filled" height="40"
        ><icon class="icon_18"><app /></icon
        ><span>disabled</span></buttonDefault
      >

      <buttonDefault class="disabled" variant="text" height="40"
        ><icon class="icon_18"><app /></icon
        ><span>disabled</span></buttonDefault
      >
    </div>

    <h1>chip</h1>
    <div class="display_flex gap_8">
      <chip><span>label 1</span></chip>
      <chip class="selected"><span>selected</span></chip>
      <chip class="disabled"><span>disabled</span></chip>
      <chip><span>label 3</span></chip>
      <chip><span>label 4</span></chip>
      <chip><span>label 5</span></chip>
    </div>
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <hero />

    <formTitle3 title="미리보기" />
    <temp />
    <div v-if="userData">
      <h1>Welcome, {{ userData }}!</h1>
    </div>
    <div class="sp_48" />
    <div class="sp_48" />

    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <h1>Welcome, {{ userData }}!</h1>
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
    <div class="sp_48" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import hero from "@/views/home/hero.vue";
import temp from "@/views/home/temp.vue";
import app from "@/components/icon/app.vue";

export default {
  components: { hero, temp, app },
  data() {
    return {
      loading: false,
      test: true,
      dialog: true,
      data1: false,
    };
  },
  computed: {
    ...mapGetters({ userData: "getUserData" }),
  },
  methods: {
    toggleTest() {
      this.test = !this.test; // Toggle the value of 'test'
    },
  },
};
</script>

<style scoped></style>
