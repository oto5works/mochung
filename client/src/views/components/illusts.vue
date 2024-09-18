<template>
  <div class="component">
    <div>
      <div class="item-grid">
        <div class="item">
          <illustMain />
          <div class="item-title">[Main Illust]</div>
        </div>
        <div class="item">
          <illustCoffee />
          <div class="item-title">[Lavel + Content]</div>
        </div>
        <div class="item">
          <listItem
            v-model="value"
            label="label"
            content="content"
            icon="search"
          />
          <div class="item-title">[Lavel + Content + Icon]</div>
        </div>
        <div class="item">
          <listItem
            v-model="value"
            label="label"
            content="content"
            :checkBox="true"
            icon="search"
          />
          <div class="item-title">[Lavel + Content + Icon + Check Box]</div>
        </div>
      </div>
    </div>

    <div>
      <div class="title">STATE</div>

      <div class="item-grid">
        <div class="item">
          <listItem label="label" content="content" icon="search" />
          <div class="item-title">[enabled]</div>
        </div>
        <div class="item">
          <listItem
            class="hovered"
            label="label"
            content="content"
            icon="search"
          />
          <div class="item-title">[hovered]</div>
        </div>
        <div class="item">
          <listItem
            class="selected"
            label="label"
            content="content"
            icon="search"
          />
          <div class="item-title">[selected]</div>
        </div>
        <div class="item">
          <listItem
            class="disabled"
            label="label"
            content="content"
            icon="search"
          />
          <div class="item-title">[disabled]</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import illustMain from "@/components/illust/illustMain.vue";
import illustCoffee from "@/components/illust/illustCoffee.vue";


export default {
  components: {illustMain, illustCoffee},
  data() {
    return {
      value: false,
    };
  },
};
</script>
