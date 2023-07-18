<template>
  <div>
   <div class="card">
    <v-text-field type="text" label="호칭" v-model="user.infos.user.set" :variant="input" />
  <div class="sp_18"/>
  <div class="flex gap_8">
    <v-text-field type="text" :label="`${user.infos.user.set} 성함`" v-model="user.infos.user.name" :variant="input" />
    <v-text-field type="text" :label="`${user.infos.user.set} 연락처`" v-model="user.infos.user.tell" :variant="input" />
  </div>
  <div class="card__overlay"/>
</div> 
<div class="--display_block-block-none"><div class="sp_4"/></div>
<div class="--display_none-none-block"><div class="v-hr dashed opacity_40"/></div>
<!-- father -->
<div class="card">
<h4 class="--font-weight">{{ user.infos.user.set }}측 아버님</h4>
<div class="sp_16"/>
<div class="flex gap_8">
  <v-text-field type="text" :label="`${user.infos.user.set} 아버님 성함`" v-model="user.infos.father.name" :variant="input" />
  <v-text-field type="text" :label="`${user.infos.user.set} 아버님 연락처`" v-model="user.infos.father.tell" :variant="input" />
</div>
<div class="sp_18"/>
<h5 class="--font-weight">고인의 경우 표기 방법을 선택해 주세요.</h5>
      <div class="sp_8"/>
      <div class="flex flex-wrap_wrap gap_4 --justify-content">
        <v_buttongroup :options="v_buttongroup_items" v-model:selected="user.infos.father.set" />
</div>
<div class="card__overlay"/>

</div>

<div class="--display_block-block-none"><div class="sp_4"/></div>
<div class="--display_none-none-block"><div class="v-hr dashed opacity_40"/></div>
<!-- mother -->
<div class="card">
<h4 class="--font-weight">{{ user.infos.user.set }}측 어머님</h4>
<div class="sp_16"/>
<div class="flex gap_8">
  <v-text-field type="text" :label="`${user.infos.user.set} 어머님 성함`" v-model="user.infos.mother.name" :variant="input" />
  <v-text-field type="text" :label="`${user.infos.user.set} 어머님 연락처`" v-model="user.infos.mother.tell" :variant="input" />
</div>
<div class="sp_18"/>
<h5 class="--font-weight">고인의 경우 표기 방법을 선택해 주세요.</h5>
      <div class="sp_8"/>
      <div class="flex flex-wrap_wrap gap_4 --justify-content">
        <v_buttongroup :options="v_buttongroup_items" v-model:selected="user.infos.mother.set" />
      </div>
      <div class="card__overlay"/>

    </div>
    <div class="--display_block-block-none"><div class="sp_4"/></div>
<div class="--display_none-none-block"><div class="v-hr dashed opacity_40"/></div>

<div class="card">
<h5 class="--font-weight">{{ user.infos.user.set }}과(와)의 관계를 작성해 주세요. ({{ user.example }} 등..)</h5>
<div class="sp_8"/>
  <v-text-field type="text" :label="`${user.infos.user.set}과(와)의 관계`" v-model="user.relation" :variant="input" />
  <div class="card__overlay"/>

</div>

</div>
</template>

<script>
import v_buttongroup from '@/components/v_buttongroup.vue'

export default {
  components: { v_buttongroup },
  props: {
    user: { type: Object },
    input: '',
  },
  data: function() {
    return {
      v_buttongroup_items: [
        { folder: 'set', title: '고인 한자', value: 'Kanji' },
        { folder: 'set', title: '국화', value: 'Flower' },
        { folder: 'set', title: '추모 리본', value: 'Ribbon' },
      ],
    };
  },
}
</script>