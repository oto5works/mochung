<!-- tabs-preview.vue -->
<template>
  <div class="component">
    <div>
      <div class="title">Check Box: {{ value }}</div>
      <tabs v-model="tabThumb">
        <tabThumb
          v-for="(item, index) in thumbOptions"
          :key="index"
          :value="index"
          :title="item"
        />
      </tabs>
    </div>

   

    <div
      v-for="(option, index) in contents"
      :key="index"
      v-show="tab === index"
    >
      {{ option }}
    </div>

    <div class="tabs-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import tabs from "@/components/tab/tabs.vue";
import tabThumb from "@/components/tab/tabThumb.vue";
import tabsFlicking from "@/components/tab/tabsFlicking.vue";

export default {
  components: { tabs, tabThumb, tabsFlicking },
  data() {
    return {
      tab: 0,
      options: [
        { title: 'option 1'},
        { title: 'option 2'},
        { title: 'option 3'},
        { title: 'option 4'},
        { title: 'option 5'},
      ],
      contents: [
        "content 1",
        "content 2",
        "content 3",
        "content 4",
        "content 5",
      ],
      tabThumb: 0,
      thumbOptions: ["Groom", "Bride"],
    };
  },
};
</script>
