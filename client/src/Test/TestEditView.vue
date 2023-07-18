<template>

    <div class="background">
        <!--
      <div class="view-box">
        <TestView
          v-model:title="postData.title" 
          v-model:content="postData.content" 
          v-model:mainimg="postData.mainimg"
          v-model:name="postData.name" 
          v-model:age="postData.age"
          v-model:duedate="postData.duedate"
          v-model:time="postData.time"
          v-model:adress="postData.adress"
          v-model:lat="postData.lat"
          v-model:lng="postData.lng"
        />
      </div>
      <form class="box" @submit="handleSubmit">
        <div class="test1 bbox">
          <Test1
          v-model:title="postData.title" 
          v-model:content="postData.content"
          @FilePondInit="(output) => FilePondInit(output)"
          />
        </div>
        <br />
        <div class="test2 bbox">
          <Test2
          v-model:name="postData.name" 
          v-model:age="postData.age"
          />
        </div>
        <Test3
          v-model:duedate="postData.duedate" 
          v-model:time="postData.time" 
          v-model:adress="postData.adress" 
          v-model:lat="postData.lat" 
          v-model:lng="postData.lng" 
        />
            <textarea
              class="textarea"
              placeholder="Textarea"
              name="title"
              >{{ postData.title }}</textarea
            >
         
      <div class="bottom">
          <button>올리깃@@</button>
        </div>
        </form>
            -->
    </div>

</template>
  
<script>
/*
import TestView from '@/Test/TestView.vue'
import Test1 from '@/Test/Test1.vue'
import Test2 from '@/Test/Test2.vue'

import { getAPost } from '@/services/posts'
import { editPost } from '@/services/posts'
export default {
  inject: ['GStore'],
  components: { Test1, Test2, TestView },
  data() {
    return {
      postData: [],
    }
  },
  created() {
      const id = this.$route.params.id
      getAPost(id).then((res) => {
        this.postData = res
      })
    },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const id = this.postData.id
      console.log('id', id)
      const title = this.postData.title
      const content = this.postData.content
      const name = this.postData.name
      const age = this.postData.age
      const formdata = new FormData()
      formdata.append('title', title)
      formdata.append('content', content)
      formdata.append('name', name)
      formdata.append('age', age)
      this.$el.querySelector('button').classList.add('is-loading')
      editPost(id, formdata).then((res) => {
        console.log(res)
        this.$el.querySelector('button').classList.remove('is-loading')
        this.$router.push({path:'/profile'})
      })
    },
  },
}
*/
</script>
  
  <style scoped>
.test1 {
  background-color: thistle;
}
.test2 {
  background-color: thistle;
}
.bbox {
  padding: 20px;
  margin: 5px;
}
.background {
  background-color: aqua;
  display: flex;
}
.box {
  width: 50%;
  background-color: #ff0;
}
.view-box {
  width: 50%;
  background-color: steelblue;
}
.top {
  display: flex;
}
.text-container {
  width: 100%;
  margin: 0 10px;
}
.bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.img-upload {
  font-size: 40px;
  color: #2f81edd9;
  cursor: pointer;
}
.user-image {
  width: 48px;
  height: 48px;
  border-radius: 100vmax;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.file-cta {
  background-color: white;
  border: none;
}
</style>
  