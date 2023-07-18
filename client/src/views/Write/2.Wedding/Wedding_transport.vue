<template>
  <section>
    <article>
      <div class="title__wrap pa_16">
        <h1 class="--text-align --font-weight">교통수단 안내 설정</h1>
      </div>
<v-tabs class="pa_16" v-model="tab">
        <v-tab v-for="(transport, index) in wedding.transports" :key="index" :value="index">
          <span>{{ transport.title }}</span>
          <button class="button-tapdelete" @click="deleteTab(index)"><icon icon="X"><X /></icon></button>
        </v-tab>
      </v-tabs>

<v-window v-model="tab">
        <v-window-item v-for="(transport, index) in wedding.transports" :key="index" :value="index">
          <div class="sp_20" />
          <div class="pa_16">
            <v-text-field type="text" :variant="input" label="제목" v-model="transport.title" />
            <v_tiptap v-model="transport.content" />
          </div>
          <div class="sp_2"/>
        </v-window-item>
</v-window>
      <div class="sp_24"/>
      <div class="pa_16">
        <button class="button-defaulted width_100 height_40 gap_4 --border-radius_16" @click="addTab"><icon icon="TransportAdd"><TransportAdd /></icon><span>교통수단 추가</span></button>
      </div>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>
</template>

<script>
import v_tiptap from '@/components/v_tiptap.vue'
import icon from '@/components/Icons/icon.vue'
import X from '@/components/Icons/X.vue'
import TransportAdd from '@/components/Icons/TransportAdd.vue'

export default {
  components: { v_tiptap, icon, X, TransportAdd },
  props: {
    wedding: { type: Object },
    input: '',
  },
  data() {
    return {
      tab: '',
    }
  },
  methods: {
    addTab() {
      const newTransport = { title: '', content: '' };
      this.wedding.transports.push(newTransport);
      this.tab = this.wedding.transports.length - 1;
    },
    deleteTab(index) {
    this.wedding.transports.splice(index, 1);
    
    // Update the tab value to the previous tab if the deleted tab was active
    if (this.tab === `tpt${index + 1}`) {
      this.tab = `tpt${index}`;
    }
  },
  }
};
</script>

