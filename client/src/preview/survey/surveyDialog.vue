<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_24">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>

    <div class="survey-wrap">
      <!-- 초대한 호스트 선택 -->
      <div>
        <titleSection title="초대한 호스트를 선택해주세요." />
        <div class="survey-content">
          <checkbox v-model="host" :value="hostInfo[0].title"
            ><span class="font-size_12">({{ hostInfo[0].title }})</span
            ><span class="font-size_14">{{ hostInfo[0].name }}</span></checkbox
          >
          <checkbox v-model="host" :value="hostInfo[1].title"
            ><span class="font-size_12">({{ hostInfo[1].title }})</span
            ><span class="font-size_14">{{ hostInfo[1].name }}</span></checkbox
          >
        </div>
        <div class="sp_16" />
      </div>

      <!-- 참가 유무 -->
      <div v-if="surveyData.functions.fnRsvp">
        <titleSection title="호스트에게 참석 여부를 알려주세요." />
        <div class="survey-content">
          <checkbox v-model="attend" label="참가" :value="true" />
          <checkbox v-model="attend" label="불참" :value="false" />
        </div>
        <div class="sp_16" />
      </div>

      <!-- 게스트 정보 -->
      <div v-if="surveyData.functions.fnInfo">
        <titleSection title="성함과 연락처를 알려주세요." />
        <div class="survey-content">
          <formField label="성함" v-model="name" />
          <formField label="연락처" v-model="tell" />
        </div>
      </div>

      <!-- 동행인 -->
      <div v-if="surveyData.functions.fnPal">
        <titleSection title="동행인과 함께 오실 경우 기재해주세요." />

        <div class="survey-content">
          <div class="person" v-for="(person, index) in pal" :key="index">
            <formField
              :label="'동행인 성함 ' + (index + 1)"
              v-model="person.value"
            >
              <buttonDefault
                variant="tonal"
                height="24"
                :icon="true"
                @click="removePerson(index)"
                ><icon class="icon_14"><x /></icon
              ></buttonDefault>
            </formField>
          </div>
          <buttonDefault
            style="margin-bottom: 16px"
            class="person"
            variant="filled"
            height="36"
            @click="addPerson"
          >
            <span>동행인 추가</span>
          </buttonDefault>
        </div>
      </div>

      <!-- 식사 유무 -->
      <div v-if="surveyData.functions.fnFood">
        <titleSection title="식사여부를 알려주세요" />
        <div class="survey-content">
          <checkbox v-model="fare" label="식사함" :value="true" />
          <checkbox v-model="fare" label="안함" :value="false" />
        </div>
        <div class="sp_16" />
      </div>

      <!-- 청첩장 수령 유무 -->
      <div v-if="surveyData.functions.fnReceive">
        <titleSection title="청첩장을 수령하실 건가요?" />
        <div class="survey-content">
          <checkbox v-model="receive" label="수령함" :value="true" />
          <checkbox v-model="receive" label="수령안함" :value="false" />
        </div>
        <div class="sp_16" />
      </div>

      <!-- 수령 주소 -->
      <div v-if="receive">
        <titleSection title="청첩장을 수령할 주소를 적어주세요." />

        <formField label="우편 번호" v-model="postcode">
          <buttonDefault
            variant="tonal"
            height="24"
            @click="postcodeDialog = true"
            ><icon class="icon_14"><search /></icon
            ><span>Address Search</span></buttonDefault
          >
        </formField>

        <formField label="Address" v-model="address" />
        <formField label="상세주소" v-model="detail" />
      </div>

      <!-- 하고싶은말 -->

      <div v-if="surveyData.functions.fnMessage">
        <titleSection title="호스트에게 하고 싶은 말을 적어주세요." />
        <formArea v-model="message" />
      </div>
    </div>

    <div class="dialog-actions">
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="handleSubmit"
        ><span>Save Data</span></buttonDefault
      >
      <buttonDefault
        class="width_100"
        variant="text"
        height="46"
        @click="updateDialog(false)"
        ><span>Cancel</span></buttonDefault
      >
    </div>

    <postcode
      v-if="postcodeDialog"
      :postcode="postcode"
      @update:postcode="postcode = $event"
      :address="address"
      @update:address="address = $event"
      :dialog="postcodeDialog"
      @update:dialog="postcodeDialog = $event"
    />
  </dialogModal>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import formArea from "@/components/formField/formArea.vue";

export default {
  components: {
    formArea,
    postcode: defineAsyncComponent(() =>
      import("@/modules/postcode/postcode.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      postcodeDialog: false,
      form: false,
      host: null,
      attend: null,
      name: null,
      tell: null,
      pal: [],
      fare: null,
      receive: null,
      postcode: null,
      address: null,
      detail: null,
      message: null,
      isValid: false,
    };
  },
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
      surveyData: "getSurveyData",
    }),
  },
  methods: {
    ...mapActions(["saveSurvey"]),
    updateAddress(newAddress) {
      this.address = newAddress;
    },
    updatePostcode(newPostcode) {
      this.postcode = newPostcode;
    },
    addPerson() {
      this.pal.push({ value: "" });
    },
    removePerson(index) {
      this.pal.splice(index, 1);
    },
    async handleSubmit() {
  if (this.$route.params.id) {
    const confirmed = window.confirm("전송하시겠습니까? (수정할 수 없습니다.)");
    if (confirmed) {
      try {
        const data = {
          post_id: this.$route.params.id,
          host: this.host,
          attend: this.attend,
          name: this.name,
          tell: this.tell,
          pal: this.pal,
          fare: this.fare,
          receive: this.receive,
          postcode: this.postcode,
          address: this.address,
          detail: this.detail,
          message: this.message,
        };
        await this.saveSurvey(data);
        this.$emit("update:dialog", false);
      } catch (error) {
        console.error("데이터 저장 중 오류가 발생했습니다:", error);
        throw error;
      }
    }
  } else {
    window.alert("테스트로 데이터가 전송되었습니다.");
    this.$emit("update:dialog", false);
  }
},

    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
<style>
.survey-content {
  display: flex;
  gap: 0 24px;
  flex-wrap: wrap;
}
.survey-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
}
.person {
  flex: 0 0 calc(50% - 12px); /* gap의 절반을 빼줌 */
}
</style>
