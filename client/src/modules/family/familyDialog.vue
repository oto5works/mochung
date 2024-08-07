<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="가족관계를 적어주세요"
        content="가족의 정보를 적어주고 어쩌고 저꺼고"
      />

      <v-tabs class="tab-defaulted" v-model="tab">
        <v-tab v-for="(item, index) in hostInfo" :key="index" :value="index">
          <span>{{ item.title }} 측</span>
        </v-tab>
      </v-tabs>
      <div
        class="position_relative z-index_1 --border-radius_32"
        v-if="tab !== ''"
      >
        <div
          v-for="(option, index) in hostInfo"
          :key="index"
          v-show="tab === index"
        >
          <formTitle3 :title="option.title + '과 가족과의 관계'" />

          <textField label="혼주와의 관계" v-model="option.relation" />
        </div>

        <div
          v-for="(option, index) in hostFamily"
          :key="index"
          v-show="tab === index"
        >
          <formTitle3 title="가족 정보" />
          <familyComp
            :hostTitle="hostInfo[index].title"
            :family="option"
            @update:family="option = $event"
            @handleDelete="handleDelete"
          />
        </div>
        <div class="absolute_100 overlay_pc --display_none-block-none" />
        <div
          class="absolute_100 outline_pc box-shadow_3-pc --display_none-block-none"
        />
      </div>
    </article>
    <article>
      <buttonDefault
        class="width_100 height_64 gap_18 --border-radius_24"
        @click="handleAdd()"
      >
        <icon><plus /></icon><span>혼주 추가</span>
      </buttonDefault>
    </article>

    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>저장</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>
<script>
import { mapGetters } from "vuex";
import familyComp from "@/modules/family/familyComp.vue";
import plus from "@/components/icon/plus.vue";

export default {
  components: { familyComp, plus },
  props: {
    dialog: { type: Boolean },
    info: { type: Object },
  },
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
  methods: {
    handleDelete(index) {
      this.hostFamily[this.tab].splice(index, 1);
    },
    handleAdd() {
      const newFamilyMember = {
        title: "",
        name: "",
        tell: "",
        info: false,
      };
      this.hostFamily[this.tab].push(newFamilyMember);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
