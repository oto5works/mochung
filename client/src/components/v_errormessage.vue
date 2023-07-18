<template>
    <div class="flex align-items_center height_40">
        <div class="errormessage flex align-items_center gap_4" v-if="this.errorMessage">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.13"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7V13"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>
        <h6 class="flex_1">{{ errorMessage }}</h6>
    </div>

    </div>
</template>
<script>
export default {
    props: {
        errorMessage: '',
  },
}
</script>
<style scoped>
.errormessage {
    color: var(--primary-color);
}
.article-card .errormessage {
    color: var(--po-po-pc);
}
</style>