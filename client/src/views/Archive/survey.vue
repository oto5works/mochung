<template>
  <v-dialog class="root" v-model="dialog">
    <button class="v-dialog__close" @click="dialog = false">
      <icon icon="close"><close /></icon>
    </button>
    <div class="dialog__wrap --border-radius_16">
      <div class="sp_64" />
      <div class="pa_24">
        <div class="sp_24" />
        <h1>게스트 답변</h1>
        <div class="sp_28" />
        <button
          class="button-root pa_24 height_48 gap_4 border-radius_24"
          @click="downloadExcel"
        >
          <icon icon="appExcel"><appExcel /></icon><span>엑셀 다운로드</span>
        </button>
        <div class="sp_24" />

        <div class="table-root" style="grid-column: span 1 / auto">
          <table>
            <thead>
              <tr>
                <th>호스트</th>
                <th>참석</th>
                <th>이름</th>
                <th>연락처</th>
                <th style="padding: 0 40px">동행인</th>
                <th>식사</th>
                <th>청첩장수령</th>
                <th>우편번호</th>
                <th style="padding: 0 80px">주소</th>
                <th style="padding: 0 80px">상세주소</th>
                <th style="padding: 0 80px">메시지</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(survey, index) in surveys" :key="index">
                <td>{{ survey.host }}</td>
                <td>{{ survey.attend }}</td>
                <td>{{ survey.name }}</td>
                <td>{{ survey.tell }}</td>
                <td>{{ survey.pal.map((p) => p.value).join(", ") }}</td>
                <td>{{ survey.fare }}</td>
                <td>{{ survey.receive }}</td>
                <td>{{ survey.postcode }}</td>
                <td>{{ survey.address }}</td>
                <td>{{ survey.detail }}</td>
                <td>{{ survey.message }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sp_48" />
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import icon from "@/components/icons/icon.vue";
import close from "@/components/icons/close.vue";
import appExcel from "@/components/icons/appExcel.vue";

export default {
  components: { icon, close, appExcel },
  data() {
    return {
      dialog: this.dialogSurvey,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    dialogSurvey: {
      type: Boolean,
    },
  },
  watch: {
    dialog(newValue) {
      this.$emit("update:dialogSurvey", newValue);
    },
  },
  created() {
    this.fetchSurveysForArchive(this.id);
  },
  computed: {
    ...mapGetters(["getSurveysForArchive"]),
    surveys() {
      return this.getSurveysForArchive(this.id);
    },
  },
  methods: {
    ...mapActions(["fetchSurveys"]),

    fetchSurveysForArchive(archiveId) {
      this.fetchSurveys(archiveId);
    },

    async downloadExcel() {
      const xlsx = await import("xlsx");

      const surveysData = this.surveys;

      // Flatten the "pal" arrays into comma-separated strings
      const flattenedSurveysData = surveysData.map((survey) => ({
        ...survey,
        pal: survey.pal.map((p) => p.value).join(", "), // Flatten the "pal" array into a string
      }));

      const workbook = xlsx.utils.book_new();
      const worksheet = xlsx.utils.json_to_sheet(flattenedSurveysData);

      worksheet["A1"].v = "호스트";
      worksheet["B1"].v = "참석";
      worksheet["C1"].v = "이름";
      worksheet["D1"].v = "연락처";
      worksheet["E1"].v = "동행인";
      worksheet["F1"].v = "식사";
      worksheet["G1"].v = "청첩장수령";
      worksheet["H1"].v = "우편번호";
      worksheet["I1"].v = "주소";
      worksheet["J1"].v = "상세주소";
      worksheet["K1"].v = "메시지";

      xlsx.utils.book_append_sheet(workbook, worksheet, "Surveys");

      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const fileName = "surveys.xlsx";
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, fileName);
      } else {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
      }
    },

    // Other methods...
  },
};
</script>
