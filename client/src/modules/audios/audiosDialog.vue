<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">

    <div class="pa_24">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>
    <div class="pa_24">
      <audiosSwitch />
      <enableView class="selected"  v-if="!audiosData.fnAudios" title="기능 이용 대기 중" content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요." />
    </div>



    <div class="pa_24" v-if="audiosData.fnAudios">
      <div class="form-spacing" />

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
  </div>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import tabs from "@/components/tab/tabs.vue";
import tab from "@/components/tab/tab.vue";
import logoYoutube from "@/components/icon/logoYoutube";
import enableView from "@/components/enable/enableView.vue";


import audiosSwitch from "@/modules/audios/audiosSwitch.vue";
export default {
  components: {
    logoYoutube,
    enableView,
    audiosSwitch,
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
