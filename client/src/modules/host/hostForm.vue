<template>
  <div>
    <tabs v-model="tab">
      <tabThumb
        v-for="(item, index) in hostInfo"
        :key="index"
        :value="index"
        :title="item.title"
      >
      </tabThumb>
    </tabs>
    <div v-if="tab !== ''">
      <div
        v-for="(option, index) in hostFamily"
        :key="index"
        v-show="tab === index"
      >
        <titleSection :title="`${hostInfo[index].title} 정보`" />

        <div class="display_flex gap_24">
          <formField
            :label="`${hostInfo[index].title} 성함`"
            v-model="hostInfo[index].name"
            :spacing="true"
          />
          <formField
            :label="`${hostInfo[index].title} 연락처`"
            v-model="hostInfo[index].tell"
            :spacing="true"
          />
        </div>
        <hostFamily
          :hostTitle="hostInfo[index].title"
          :family="option"
          @update:family="option = $event"
        />

        <titleSection title="가족 구성원 간의 관계" />
        <div
          class="flex align-items_center justify-content_space-between gap_12"
        >
          <formField
            :label="`${hostInfo[index].title}`"
            v-model="hostInfo[index].relation"
            :spacing="true"
            :hint="getHint(hostInfo[index].title)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tabs from "@/components/tab/tabs.vue";
import tabThumb from "@/components/tab/tabThumb.vue";
import hostFamily from "@/modules/host/hostFamily.vue";

export default {
  components: { tabs, tabThumb, hostFamily },
  data() {
    return {
      tab: 0,
    };
  },
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
      hostFamily: "getHostFamily",
    }),
  },
  methods: {
    getHint(title) {
      const hintMap = {
        '신부': '장녀, 차녀, 첫째딸 등..',
        '신랑': '장남, 차남, 첫째아들 등..'
      };

      // Find the hint based on the title
      return hintMap[title] ? hintMap[title] : "지원 텍스트 없음";
    },
  },
};
</script>
