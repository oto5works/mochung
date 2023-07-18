<template>
  <section>
    <article>
      <div class="title__wrap pa_16">
        <h1 class="--text-align --font-weight">{{ info.user1.infos.user.set }}·{{ info.user2.infos.user.set }} 정보 설정</h1>
      </div>
      <v-tabs class="pa_16" v-model="tab">
        <v-tab value="user1"><span>{{ info.user1.infos.user.set }}</span></v-tab>
        <v-tab value="user2"><span>{{ info.user2.infos.user.set }}</span></v-tab>
      </v-tabs>

  <v-window v-model="tab">

<v-window-item value="user1">
  <div class="sp_20"/>
  <div class="pa_16">
    <Info_info :user="info.user1" :input="input" />
  </div>
</v-window-item>

<v-window-item value="user2">
  <div class="sp_20"/>
  <div class="pa_16">
    <Info_info :user="info.user2" :input="input" />
  </div>
</v-window-item>

</v-window>

    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>
</template>

<script>
import Info_info from '@/views/Write/3.Info/Info_info.vue'

export default {
  components: { Info_info },
  props: {
    info: { type: Object },
    input: '',
  },
  data() {
    return {
      tab: 'user1',
    }
  },
};
</script>

