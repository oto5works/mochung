<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>

    <div class="survey-wrap pa_modal">
      <!-- 게스트 정보 -->
      <div class="survey-question" v-if="surveyData.functions.fnInfo">
        <div class="question">Q. {{ surveyFunctionOptions.fnInfo }}</div>

        <div class="survey-content">
          <formField class="person" label="성함" v-model="name" />
        </div>
        <div class="survey-content">
          <formField class="person" label="연락처" v-model="tell" />
        </div>
      </div>

      <!-- 참가 유무 -->
      <div class="survey-question" v-if="surveyData.functions.fnRsvp">
        <div class="question">Q. {{ surveyFunctionOptions.fnRsvp }}</div>

        <div class="survey-content">
          <checkbox v-model="attend" label="참가" :value="true" />
          <checkbox v-model="attend" label="불참" :value="false" />
        </div>
      </div>

      <!-- 초대한 호스트 선택 -->
      <div class="survey-question" v-if="surveyData.functions.fnHost">
        <div class="question">Q. {{ surveyFunctionOptions.fnHost }}</div>
        <div class="survey-content">
          <checkbox v-model="host" :value="hostInfo[0].title">
            <span class="font-size_14">{{ hostInfo[0].name }}</span>
            <div class="hostInfo-title">{{ hostInfo[0].title }}</div>
          </checkbox>
          <checkbox v-model="host" :value="hostInfo[1].title">
            <span class="font-size_14">{{ hostInfo[1].name }}</span>
            <div class="hostInfo-title">{{ hostInfo[1].title }}</div>
          </checkbox>
        </div>
      </div>

      <!-- 동행인 -->
      <div class="survey-question" v-if="surveyData.functions.fnPal">
        <div class="question">Q. {{ surveyFunctionOptions.fnPal }}</div>

        <div class="person-content">
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
      <div class="survey-question" v-if="surveyData.functions.fnFood">
        <div class="question">Q. {{ surveyFunctionOptions.fnFood }}</div>

        <div class="survey-content">
          <checkbox v-model="fare" label="식사함" :value="true" />
          <checkbox v-model="fare" label="안함" :value="false" />
        </div>
      </div>

      <!-- 청첩장 수령 유무 -->
      <div class="survey-question" v-if="surveyData.functions.fnReceive">
        <div class="question">Q. {{ surveyFunctionOptions.fnReceive }}</div>

        <div class="survey-content">
          <checkbox v-model="receive" label="수령함" :value="true" />
          <checkbox v-model="receive" label="수령안함" :value="false" />
        </div>

        <!-- 수령 주소 -->
        <div v-if="receive">
          <div class="question">Q. 청첩장을 수령할 주소를 적어주세요.</div>

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
      </div>
      <!-- 하고싶은말 -->

      <div class="survey-question" v-if="surveyData.functions.fnMessage">
        <div class="question">Q. {{ surveyFunctionOptions.fnMessage }}</div>

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
      surveyData: "getSurveyData",

      surveyFunctionOptions: "getSurveyFunctionOptions",
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
        const confirmed = window.confirm(
          "전송하시겠습니까? (수정할 수 없습니다.)"
        );
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
.survey-wrap {
  display: flex;
  flex-direction: column;
}
.person {
  flex: 0 0 calc(50% - 12px); /* gap의 절반을 빼줌 */
}
.survey-question {
  padding: 48px 0;
  border-bottom: 1px solid rgba(var(--mio-theme-color-primary), 0.08);
}
.survey-wrap .survey-question:last-of-type {
  border-bottom: none;
}
.question {
  font-size: 13px;
  text-align: center;
  margin-bottom: 16px;
}
.survey-content {
  display: flex;
  gap: 0 48px;
  flex-wrap: wrap;
  justify-content: center;
}
.person-content {
  display: flex;
  gap: 0 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.hostInfo-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 8px;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #121212;
  background-color: rgba(18, 18, 18, 0.06);
  height: 1rem;
  padding: 0 0.3125rem;
  border-radius: 0.25rem;
}
</style>
