<template>
  <modalDialog
    title="갤러리"
    :dialog="dialog"
    @update:dialog="updateDialog"
    :config="true"
  >
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <fnTitle option="galleryData" />
      <formBox
        :icon="galleryData.image.style"
        title="갤러리 스타일"
        @click="fnSelect = true"
      >
       <p>{{ selectedStyle }}</p> 
      </formBox>
      
      <fnSelect
        v-if="fnSelect"
        optionTitle="갤러리 스타일"
        :options="galleryImageOptions"
        :selected="galleryData.image.style"
        @update:selected="galleryData.image.style = $event"
        :dialog="fnSelect"
        @update:dialog="fnSelect = $event"
      />
    </article>
    <article>
     
      
      <galleryImageForm />
     
    </article>

    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <galleryVideoForm />
    </article>



    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="saveValue">
        <span>저장</span>
      </buttonDefault>
    </div>


   




  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    fnTitle: defineAsyncComponent(() =>
      import("@/modules/functions/fnTitle.vue")
    ),
    fnSelect: defineAsyncComponent(() =>
      import("@/modules/functions/fnSelect.vue")
    ),
    galleryImageForm: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryImageForm.vue")
    ),
    galleryVideoForm: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryVideoForm.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      fnSelect: false,
    };
  },
  computed: {
    ...mapGetters({
      galleryImageOptions: "getGalleryImageOptions",
      galleryData: "getGalleryData",
    }),
    selectedStyle() {
      const selectedOption = this.galleryImageOptions.find(
        (option) => option.value === this.galleryData.image.style
      );
      return selectedOption
        ? selectedOption.title
        : this.galleryData.image.style;
    },
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.galleryData.fnGallery = true;
      this.$emit("update:dialog", false);
    },
  },
};
</script>
