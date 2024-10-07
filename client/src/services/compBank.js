import { defineAsyncComponent } from "vue";

const compBank = {
  bankKb: defineAsyncComponent(() => import("@/components/icon/bankKb")),
  bankIbk: defineAsyncComponent(() => import("@/components/icon/bankIbk")),
  bankNh: defineAsyncComponent(() => import("@/components/icon/bankNh")),
  bankShinhan: defineAsyncComponent(() =>
    import("@/components/icon/bankShinhan")
  ),
  bankKdb: defineAsyncComponent(() => import("@/components/icon/bankKdb")),
  bankWoori: defineAsyncComponent(() => import("@/components/icon/bankWoori")),
  bankCiti: defineAsyncComponent(() => import("@/components/icon/bankCiti")),
  bankKeb: defineAsyncComponent(() => import("@/components/icon/bankKeb")),
  bankSc: defineAsyncComponent(() => import("@/components/icon/bankSc")),
  bankBnk: defineAsyncComponent(() => import("@/components/icon/bankBnk")),
  bankJb: defineAsyncComponent(() => import("@/components/icon/bankJb")),
  bankJeju: defineAsyncComponent(() => import("@/components/icon/bankJeju")),
  bankGj: defineAsyncComponent(() => import("@/components/icon/bankGj")),
  bankDgb: defineAsyncComponent(() => import("@/components/icon/bankDgb")),
  bankDb: defineAsyncComponent(() => import("@/components/icon/bankDb")),
  bankBac: defineAsyncComponent(() => import("@/components/icon/bankBac")),
  bankBusan: defineAsyncComponent(() => import("@/components/icon/bankBusan")),
  bankSj: defineAsyncComponent(() => import("@/components/icon/bankSj")),
  bankSb: defineAsyncComponent(() => import("@/components/icon/bankSb")),
  bankMg: defineAsyncComponent(() => import("@/components/icon/bankMg")),
  bankSh: defineAsyncComponent(() => import("@/components/icon/bankSh")),
  bankCu: defineAsyncComponent(() => import("@/components/icon/bankCu")),
  bankPost: defineAsyncComponent(() => import("@/components/icon/bankPost")),
  bankKakao: defineAsyncComponent(() => import("@/components/icon/bankKakao")),
  bankKbank: defineAsyncComponent(() => import("@/components/icon/bankKbank")),
  bankToss: defineAsyncComponent(() => import("@/components/icon/bankToss")),
  bankSelf: defineAsyncComponent(() => import("@/components/icon/bank")),
};

export default compBank;
