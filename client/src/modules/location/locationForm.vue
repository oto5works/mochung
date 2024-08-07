<template>
  <div>
    <div class="flex gap_12">
      <textField
        class="width_50"
        ref="addressInput"
        label="주소"
        v-model="locationData.address"
      />
      <buttonDefault
        class="pa_12 height_40 border-radius_24"
        @click="postcode = true"
      >
        <span>주소 검색</span>
      </buttonDefault>
    </div>
    <textField label="상세 주소" v-model="locationData.detail" />
    <postcode
      v-if="postcode"
      :dialog="postcode"
      @update:dialog="postcode = $event"
      :address="locationData.address"
      @update:address="locationData.address = $event"
    />
    <div class="flex gap_12">
      <textField label="웨딩홀 명" v-model="locationData.name" />
      <textField label="웨딩홀 정보(층 또는 홀)" v-model="locationData.info" />
    </div>
    <textField label="웨딩홀 전화번호" v-model="locationData.tell" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    postcode: defineAsyncComponent(() =>
      import("@/modules/postcode/postcode.vue")
    ),
  },
  data() {
    return {
      postcode: false,
      apiKey: "5a47656c6e47a887a539a20f1784472f",
    };
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  watch: {
    "locationData.address": function (newAddress) {
      this.searchCoordinate();
    },
  },
  methods: {
    searchCoordinate() {
      const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        this.locationData.address
      )}`;
      fetch(url, {
        headers: {
          Authorization: `KakaoAK ${this.apiKey}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.documents.length > 0) {
            const location = data.documents[0].address;
            this.locationData.lat = location.y;
            this.locationData.lng = location.x;
          } else {
            this.locationData.lat = "";
            this.locationData.lng = "";
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        })
        .finally(() => {
          // Use $nextTick to apply the rules after the DOM update
          this.$nextTick(() => {
            this.$refs.addressInput.validate(); // Trigger validation on the input field
          });
        });
    },
  },
};
</script>
