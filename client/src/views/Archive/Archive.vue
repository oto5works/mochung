<template>
  <div id="post">
    <!--<v_navigation :menu="menu" @tab-changed="changeActiveTab" @handleSubmit="handleSubmit"/>
    <v_overlay :menu="menu"/>
    <v_appbar :menu="menu" @handleSubmit="handleSubmit"/>
-->
<v_menu :menu="menu"/>
<div id="write">
  <div id="write__wrap">

{{ userData }}
    <RouterLink to="/create">
          <p>추가하기</p>
    </RouterLink>
    
    <Archive_item
      v-if="userData.posts"
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :defaultUser="userData"
    />
    </div>
  </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { getAUser } from '@/services/users'
import Archive_item from '@/views/Archive/Archive_item.vue'
import v_navigation from '@/components/v_navigation.vue'
import v_overlay from '@/components/v_overlay.vue'
import v_appbar from '@/components/v_appbar.vue'
import v_menu from '@/components/v_menu.vue'

export default {
  components: { Archive_item, RouterLink, v_navigation, v_overlay, v_appbar, v_menu },

  data() {
    return {
      userData: [],
      menu: {
      login: true,
      create: true,
      save: false,
      preview: false,
      createMenu: false,
    },
    }
  },
  computed: {
    posts() {
      const posts = [...this.userData?.posts]
      return posts.reverse()
    },
  },
  created() {
    getAUser().then((res) => {
      this.userData = res
    })
  },
  methods: {
    changeActiveTab(tab) {},
    handleSubmit(e) {},
  },
}
</script>