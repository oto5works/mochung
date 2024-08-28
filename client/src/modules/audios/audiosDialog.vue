<template>
  <dialogFull :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle title="Music Options" />

    <tabs v-model="tab">
      <tab
        v-for="(item, index) in tabOptions"
        :key="index"
        :value="index"
        :title="item"
      />
    </tabs>

    <audiosOptions v-if="tab === 0" />

    <div v-if="tab === 1">
      <titleArticle
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      >
        <button
          class="gap_8"
          @click="window.open('https://www.youtube.com', '_blank')"
        >
          <span
            style="color: rgb(55, 97, 251)"
            class="font-size_14 text-decoration_underline"
            >Shortcut to YouTube</span
          ><icon><logoYoutube /></icon>
        </button>
      </titleArticle>
      <youtubeForm v-model="audiosData.url" />
    </div>
    <div class="form-spacing" />

    <cardView
      icon="audioAuto"
      title="자동 재생 설정"
      content="Use this to set the title for the section where guests can send"
      @click="toggleSwitch()"
    >
      <toggleSwitch
        :clickEvent="false"
        v-model="audiosData.fnAutoPlay"
      ></toggleSwitch>
    </cardView>
  </dialogFull>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import tabs from "@/components/tab/tabs.vue";
import tab from "@/components/tab/tab.vue";
import logoYoutube from "@/components/icon/logoYoutube";

export default {
  components: {
    logoYoutube,
    tabs,
    tab,
    audiosOptions: defineAsyncComponent(() =>
      import("@/modules/audios/audiosOptions.vue")
    ),
    youtubeForm: defineAsyncComponent(() =>
      import("@/components/youtube/youtubeForm.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      tab: 0,
      tabOptions: ["Options", "Youtube"],
    };
  },
  computed: {
    ...mapGetters({
      audiosData: "getAudiosData",
    }),
  },
  methods: {
    toggleSwitch() {
      this.audiosData.fnAutoPlay = !this.audiosData.fnAutoPlay;
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.audiosData.fnAudios = true;
      this.$emit("update:dialog", false);
    },
    selectOption(value) {
      this.tab = value;
    },
  },
};
</script>
