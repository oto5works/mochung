<template>
  <SlickList
    class="flex flex-direction_column gap_8 width_100"
    axis="y"
    :list="orderData.order"
    @update:list="orderData.order = $event"
    use-drag-handle
    helper-class="slickitem-active"
  >
    <SlickItem
      class="slickItem"
      v-for="(item, i) in orderData.order"
      :key="item.id"
      :index="i"
    >
      <div
        class="slickItem-title"
        :class="{ disabled: enabledData[item] === false }"
      >
        <DragHandle>
          <button class="dragHandle">
            <icon class="icon_20"><list /></icon>
            <div class="underlay" />
          </button>
        </DragHandle>
        <span class="user-select_none">{{ orderInfo[item].label }}</span>
      </div>
      <div class="slickItem-content" v-if="enabledData[item] !== undefined">
        <v-switch
          v-model="enabledData[item]"
          @change="updateEnabledData"
          hide-details
          inset
        ></v-switch>
      </div>
      <div class="underlay" />
    </SlickItem>
  </SlickList>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { SlickList, SlickItem, DragHandle } from "vue-slicksort";
import list from "@/components/icon/list.vue";

export default {
  components: {
    SlickList,
    SlickItem,
    DragHandle,
    list,
  },
  data() {
    return {
      orderInfo: {
        intro: {
          label: "머리글",
        },
        calendar: {
          label: "달력",
        },
        location: {
          label: "오시는 길",
        },
        notice: {
          label: "공지사항",
        },
        gallery: {
          label: "갤러리",
        },
        comment: {
          label: "방명록",
        },
        survey: {
          label: "설문조사",
        },
        deposit: {
          label: "축의금 안내",
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      orderData: "getOrderData",
      enabledData: "getEnabledData",
    }),
  },

  methods: {
    ...mapMutations(["setEnabledData"]), // map the mutation
    updateEnabledData() {
      // Create a new data object with the updated values
      const newData = {
        calendar: this.enabledData.calendar,
        notice: this.enabledData.notice,
        gallery: this.enabledData.gallery,
        comment: this.enabledData.comment,
        survey: this.enabledData.survey,
        deposit: this.enabledData.deposit,
      };
      this.setEnabledData(newData);
      // Call the mutation to update the enabledData in the store
    },
  },
};
</script>
<style scoped>
.slickItem > .outline,
.slickItem > .overlay,
.slickItem .underlay,
.slickItem > .shadow {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: inherit;
  transition: opacity 0.3s ease-in-out;
}
.slickItem > .outline {
  z-index: -1;
}
.slickItem > .overlay {
  z-index: -2;
}
.slickItem > .underlay {
  z-index: -3;
}
.slickItem > .shadow {
  z-index: -4;
}
.slickitem-active {
  position: relative;
  z-index: 9999;
  color: var(--primary-on);
  background-color: var(--primary-color);
  -webkit-box-shadow: 0 10px 20px -10px var(--primary-color);
  box-shadow: 0 10px 20px -10px var(--primary-color);
}

.slickItem {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 24px 8px 12px;
  width: 100%;
  min-height: 72px;
  cursor: pointer;
  border-radius: var(--border-radius-16);
}
.slickItem-title {
  position: relative;
  display: flex;
  align-items: center;
  color: inherit;
  gap: 8px;
  flex: 1;
}
.slickItem-content {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  overflow: visible;
  flex-wrap: wrap;
  gap: 4px;
}
.slickItem-content .v-switch {
  flex: unset;
}
.slickItem-title .dragHandle {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-24);
}
.slickItem-title span {
  color: inherit;
  font-size: var(--font-size-14);
  font-weight: var(--font-weight);
  line-height: 130%;
}
/*-- underlay --*/
.slickItem .underlay {
  background-color: var(--primary-color);
  opacity: 0.12;
}
</style>
