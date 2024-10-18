<template>
  <div>
    <dropdown>
      <!-- 1번: 선택된 항목의 title을 표시 -->
      <template #selected>
        {{ selectedItem.title || "항목을 선택하세요" }}
      </template>

      <!-- 2번: v-for로 드롭다운 리스트 반복 -->
      <template #items>
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="selectItem(item)"
          >
            {{ item.title }}
          </li>
      </template>
    </dropdown>
  </div>
</template>

<script>
import dropdown from "@/components/dropdown/dropdown.vue";

export default {
  components: {
    dropdown,
  },
  data() {
    return {
      // 선택된 항목, 기본적으로는 빈 객체로 설정
      selectedItem: { title: "", value: "" },
      // 드롭다운에 표시할 항목들의 title과 value
      items: [
        { title: "프리텐다드", value: "value1" },
        { title: "노토 산스 세리프", value: "value2" },
        { title: "항목 3", value: "value3" },
        { title: "항목 4", value: "value4" },
      ],
    };
  },
  methods: {
    selectItem(item) {
      // 선택된 아이템을 업데이트
      this.selectedItem = item;
    },
  },
};
</script>
