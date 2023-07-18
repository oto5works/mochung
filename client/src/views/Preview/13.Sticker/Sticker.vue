<template>
    <div class="sticker">
     <!--<Sticker_flower3 v-if="main.sticker === 'flower3'" />-->
    </div>
</template>
<script>


export default {
  components: { },
  props: { sticker: { type: String } },
};
</script>
<style scoped>
.sticker svg {
    fill: var(--primary-color);
}
</style>