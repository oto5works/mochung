<template>
    <appDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
        <article>
<titleArea 
    title="FIELDS OF EXPRESSION"
    content="Get an official Creative Cloud subscription. When you make a payment"
/>

</article>

<!-- 초대한 호스트 선택 -->

<article>
          <li>초대한 호스트를 선택해주세요. {{ hostInfo }}</li>
          <v-tabs class="tab-toggle" fixed-tabs v-model="host">
    <v-tab value="예"><span>예</span></v-tab>
    <v-tab value="아니오"><span>아니오</span></v-tab>

  </v-tabs>

        </article>

<!-- 참가 유무 -->

        <article v-if="surveyData.functions.fnRsvp">
          <li>호스트에게 참석 여부를 알려주세요.</li>
          <v-tabs class="tab-toggle" fixed-tabs v-model="attend">
    <v-tab value="참가"><span>참가</span></v-tab>
    <v-tab value="불참"><span>불참</span></v-tab>

  </v-tabs>

        </article>


<!-- 게스트 정보 -->

        <article v-if="surveyData.functions.fnInfo">
          <li>성함과 연락처를 알려주세요.</li>
          <div class="flex gap_12">
            <textField
              v-model="name"
              label="성함"
            />
            <textField
              v-model="tell"
              label="연락처"
            />
          </div>
        </article>


<!-- 동행인 -->
        <article v-if="surveyData.functions.fnPal">
          <li>동행인과 함께 오실 경우 기재해주세요.</li>
          <div class="grid gap_12" style="grid-template-columns: 1fr 1fr">
            <div class="person" v-for="(person, index) in pal" :key="index">
              <textField
                v-model="person.value"
                :label="'동행인 성함 ' + (index + 1)"
              >
                <button class="button-input" @click="removePerson(index)">
                  <icon><x /></icon>
                </button>
              </textField>
            </div>
            <button
              type="button"
              class="button-defaulted height_40 gap_18 --border-radius_20"
              @click="addPerson"
            >
              <icon><plus /></icon><span>동행인 추가</span>
            </button>
          </div>
        </article>


<!-- 식사 유무 -->
        <article v-if="surveyData.functions.fnFood">
          <li>식사하실래요?</li>
          <v-tabs class="tab-toggle" fixed-tabs v-model="fare">
    <v-tab value="예"><span>예</span></v-tab>
    <v-tab value="아니오"><span>아니오</span></v-tab>

  </v-tabs>
        </article>


<!-- 청첩장 수령 유무 -->
<article v-if="surveyData.functions.fnReceive">
          <li>청첩장을 수령하실 건가요?</li>

          <v-tabs class="tab-toggle" fixed-tabs v-model="receive">
    <v-tab value="예"><span>예</span></v-tab>
    <v-tab value="아니오"><span>아니오</span></v-tab>

  </v-tabs>

        </article>

<!-- 수령 주소 -->

        <article v-if="receive === '예'">
          <li>청첩장 수령 주소</li>
          <div>
          <div class="flex gap_12">
            <textField
              label="우편 번호"
              v-model="postcode"
            />
            <button
            class="button-defaulted pa_12 height_40 border-radius_24"
            @click="appDialog.postcode = true"
          >
            <span>주소 검색</span>
          </button>
            <postcode
      v-if="appDialog.postcode"
      :postcode="postcode"
      @update:postcode="postcode = $event"
      :address="address"
      @update:address="address = $event"
      :dialog="appDialog.postcode"
      @update:dialog="appDialog.postcode = $event"
    />
         
          </div>
          <textField
            label="청첩장 수령 주소"
            v-model="address"
          />
          <textField
            label="상세주소"
            v-model="detail"
          />
        </div>
        </article>


<!-- 하고싶은말 -->
        <article v-if="surveyData.functions.fnMessage">
          <li>호스트에게 하고 싶은 말을 적어주세요.</li>
          <textField
            label="내용"
            v-model="message"
          />
        </article>


        <div class="dialog-actions">
      <button
        class="button-select height_36 pa_24"
        @click="updateDialog(false)"
      >
        <span>취소</span>
      </button>
      <button
        class="button-select selected height_36 pa_24"
        :disabled="!isValid"
        @click="saveValue"
      >
        <span>제출하기</span>
      </button>
    </div>
    
    </appDialog>


        

       


        

       

        

        



   
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import x from "@/components/icon/x";
import plus from "@/components/icon/plus";

export default {
  components: { x, plus, 
    postcode: defineAsyncComponent(() =>
      import("@/components/npm/postcode")
    ),
},
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
        appDialog: {
        postcode: false,
      },
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
      console.log("이게 실행되지 왜?");
      if (this.$route.params.id) {
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
          this.$emit('update:dialog', false);
        } catch (error) {
          console.error("Error saving form data:", error);
          throw error;
        }
      } else {
        console.log("$route.params.id 없음~");
      }
    },
    updateDialog(value) {
      this.$emit('update:dialog', value);
    },
  },
};
</script>
<style>
.person .textField-details {
    display: none;
}
</style>