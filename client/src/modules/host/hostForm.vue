<template>
  <div>
    <v-tabs class="tab-defaulted" v-model="tab">
      <v-tab v-for="(item, index) in hostInfo" :key="index" :value="index">
        <span>{{ item.title }} 측 정보</span>
      </v-tab>
    </v-tabs>

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
<!--
        <form1HostComp
          :hostTitle="hostInfo[index].title"
          :family="option"
          @update:family="option = $event"
        />
        -->
        <titleSection :title="`${hostInfo[index].title}과의 관계`" />

        <div
          class="flex align-items_center justify-content_space-between gap_12"
        >
          <formField
            :label="`${hostInfo[index].title}과의 관계`"
            v-model="hostInfo[index].relation"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {  },
  data: function () {
    return {
      tab: "",
    };
  },
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
      hostFamily: "getHostFamily",
    }),
  },
};
</script>
