<template>
  <div>
    <form class="box" @submit="handleSubmit">
        <div class="control text-container">
          <textarea
            class="textarea has-fixed-size"
            placeholder="What’s happening?"
            name="content"
          ></textarea>
          <textarea
            class="textarea has-fixed-size"
            placeholder="What’s happening?"
            name="title"
          ></textarea>
        </div>
      <div class="bottom">
        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="img"
              @input="handleFileChange"
            />
            
            <span class="file-cta">
              <span class="file-icon">
                <i class="material-icons-outlined img-upload"> image </i>
              </span>
            </span>
          </label>
        </div>

        <button>올리깃</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createPost } from '@/services/posts'

export default {
  inject: ['GStore'],
  data() {
    return {
      userData: this.GStore.session,
      file: null,
    }
  },
  methods: {
    handleFileChange(e) {
      this.file = e.target.files[0]
    },
    handleSubmit(e) {
      e.preventDefault()
      const id = this.userData.id
      const formdata = new FormData()
      formdata.append('content', e.target.content.value)
      formdata.append('title', e.target.title.value)
      formdata.append('userId', id)
      this.$el.querySelector('button').classList.add('is-loading')
      if (this.file) formdata.append('img', this.file)
      createPost(formdata).then((res) => {
        res.user.name = this.userData.name
        this.$emit('setDeletePost', res)
        e.target.reset()
        this.$el.querySelector('button').classList.remove('is-loading')
        this.$router.push({path:'/profile'})
      })
    },
  },

}
</script>

<style scoped>
.box {
  width: 600px;
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
@media screen and (max-width: 700px) {
  .box {
    width: 100vw;
  }
}
</style>
