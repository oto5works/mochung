import { createPost, editPost, getPost } from "@/services/posts";
import resetValue from "./setDataReset";
import auth from "./auth";

export default {
  state: {
    writerId: null,
    pay: false,
    postData: { ...resetValue }, // resetValue 객체의 복사본을 할당
    res: {
      message: "",
      status: "processing..",
    },
  },
  mutations: {
    updateFormData(state, newData) {
      state.postData.formData = { ...state.postData.formData, ...newData };
    },
    updateResponseFormData(state, res) {
      console.log("데이터확인", res);
      state.postData.formData = res.formData.data;
      console.log("writerId:", res.user_id);
      state.writerId = res.user_id;
      state.pay = res.pay;
    },
    resetFormData(state) {
      const copiedValue = JSON.parse(JSON.stringify(resetValue));
      state.postData = { ...copiedValue };
    },
    updateTitle(state, { option, value }) {
      // Update the category title in the state
      state.postData.formData[option].title = value;
    },
    setEnabledData(state, newData) {
      state.postData.formData.dateData.fnCalendar = newData.calendar;
      state.postData.formData.noticeData.fnNotice = newData.notice;
      state.postData.formData.galleryData.fnGallery = newData.gallery;
      state.postData.formData.commentData.fnComment = newData.comment;
      state.postData.formData.surveyData.fnSurvey = newData.survey;
      state.postData.formData.depositData.fnDeposit = newData.deposit;
    },
    updateResponse(state, { message, status }) {
      state.res.message = message;
      state.res.status = status;
    },
  },
  actions: {
    updateTitleAction({ commit }, { option, value }) {
      commit("updateTitle", { option, value });
    },
    updateFormDataAction({ commit }, newData) {
      commit("updateFormData", newData);
    },
    resetFormDataAction({ commit }) {
      console.log("리셋입니다....");
      commit("resetFormData");
    },
    async fetchFormData(context, id) {
      try {
        const res = await getPost(id); // Make sure 'getComment' accepts archiveId
        context.commit("updateResponseFormData", res); // Commit the received formData
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
      }
    },

    /*-- save FormData --*/
    async saveFormData({ state, commit }) {
      if (state.postData.id) {

        console.log ('포스트 아이디 값이 있음~')
        try {
          commit("updateResponse", {
            message: "Updating data...",
            status: "processing",
          });
    
          // 딜레이 추가 (2초)
          await new Promise(resolve => setTimeout(resolve, 2000));
    
          const id = state.postData.id;
          const formData = state.postData.formData;
          await editPost(id, formData);
    
          commit("updateResponse", {
            message: "Update complete.",
            status: "success",
          });
          commit("resetFormData");
        } catch (error) {
          console.error("An error occurred during the update. Error details:", error);
          commit("updateResponse", {
            message: `An error occurred during the update. Error details: ${error}`,
            status: "error",
          });
          throw error;
        }
      } else {
        console.log ('포스트 아이디 값이 없음~')

        try {
          commit("updateResponse", {
            message: "Saving data...",
            status: "processing",
          });
    
          // 딜레이 추가 (2초)
          await new Promise(resolve => setTimeout(resolve, 2000));
    
          const formData = new FormData();
          const data = state.postData.formData;
          const homeFile = state.postData.formData.homeData.files;

        //  const audioFile = state.postData.formData.audiosData.files?.file;
        //  const locationFile = state.postData.formData.locationData.files?.file;
          const galleryFiles = state.postData.formData.galleryData.image.files;
          const kakaotalkFile = state.postData.formData.kakaotalkData.files;
    
          formData.append("userId", auth.state.userId);
          formData.append("data", JSON.stringify({ data }));
          console.log ('홈파일 검사중~')
          console.log ('홈파일:', homeFile)

          if (homeFile) {
            console.log ('홈파일 있어용~')
            formData.append("homeFile", homeFile.file);
          }
        //  if (audioFile && audioFile.file) {
        //    formData.append("audioFile", audioFile.file);
        //  }
        //  if (locationFile && locationFile.file) {
        //    formData.append("locationFile", locationFile.file);
        //  }
          if (galleryFiles) {
            galleryFiles.forEach((file, index) => {
              if (file && file.file) {
                formData.append("galleryFiles", file.file);
              }
            });
          }
          if (kakaotalkFile && kakaotalkFile.file) {
            formData.append("kakaotalkFile", kakaotalkFile.file);
          }
    
          state.postData.formData.hostData.info.forEach((account, index) => {
            const accountFiles = account.bank.account.map((item) => item.files.file);
            accountFiles.forEach((file, fileIndex) => {
              formData.append(`bankFiles${index}`, file);
            });
          });
    
          await createPost(formData);
    
          commit("updateResponse", {
            message: "Save complete.",
            status: "success",
          });
          commit("resetFormData");
        } catch (error) {
          console.error("An error occurred during saving. Error details:", error);
          commit("updateResponse", {
            message: `An error occurred during saving. Error details: ${error}`,
            status: "error",
          });
          throw error;
        }
      }
    },
    
  },
  getters: {
    /*-- response --*/
    getRes: (state) => {
      return state.res;
    },
    /*-- title --*/
    getTitle: (state) => ({
      homeData: state.postData.formData.homeData.title,
      locationData: state.postData.formData.locationData.title,
      introData: state.postData.formData.introData.title,
      noticeData: state.postData.formData.noticeData.title,
      galleryData: state.postData.formData.galleryData.title,
      commentData: state.postData.formData.commentData.title,
      surveyData: state.postData.formData.surveyData.title,
      depositData: state.postData.formData.depositData.title,
      albumData: state.postData.formData.albumData.title,
    }),
    /*-- url --*/
    getUrlData: (state) => {
      return state.postData.formData.urlData;
    },
    /*-- home --*/
    getHomeData: (state) => {
      return state.postData.formData.homeData;
    },
    /*-- homeColor --*/
    getHomeColor: (state) => {
      return state.postData.formData.homeData.color;
    },
    /*-- 이펙트 --*/
    getEffectData: (state) => {
      return state.postData.formData.effectData;
    },
    /*-- 배경음악 --*/
    getAudiosData: (state) => {
      return state.postData.formData.audiosData;
    },

    /*-- 폰트 패밀리 --*/
    getFontFamily: (state) => {
      return state.postData.formData.customData.fontFamily;
    },
    /*-- 인트로 --*/
    getIntroData: (state) => {
      return state.postData.formData.introData;
    },

    /*-- 예식일 --*/
    getDateData: (state) => {
      return state.postData.formData.dateData;
    },
    /*-- 예식장소 --*/
    getLocationData: (state) => {
      return state.postData.formData.locationData;
    },
    getCoordinate: (state) => {
      return {
        lat: state.postData.formData.locationData.lat,
        lng: state.postData.formData.locationData.lng,
      };
    },
    /*-- 교통수단 안내 --*/
    getTransportData: (state) => {
      return state.postData.formData.transportData;
    },
    /*-- 공지사항 안내  --*/
    getNoticeData: (state) => {
      return state.postData.formData.noticeData;
    },
    /*-- 호스트 기능 --*/
    getHostFunctions(state) {
      return state.postData.formData.hostData.functions;
    },
    /*-- 호스트 모든 정보 --*/
    getHostData(state) {
      return state.postData.formData.hostData;
    },
    /*-- 호스트 정보 --*/
    getHostInfo: (state) => [
      state.postData.formData.hostData.info[0].host,
      state.postData.formData.hostData.info[1].host,
    ],

    /*-- 호스트 가족 유무 --*/
    getFamilyExist: (state) =>
      state.postData.formData.hostData.info
        .flatMap((hostInfo) => hostInfo.family)
        .some((member) => member.name !== ""),

    /*-- 호스트 가족 정보 --*/
    getHostFamily: (state) => [
      state.postData.formData.hostData.info[0].family,
      state.postData.formData.hostData.info[1].family,
    ],
    /*-- 호스트 연락처 --*/
    getHostContact: (state) => {
      const hostData = state.postData.formData.hostData.info;

      return hostData
        .map((host, index) => {
          const hostInfo = host.host;
          const familyInfo = host.family.map((family) => {
            return {
              hostName: host.host.title,
              title: family.title,
              name: family.name,
              tell: family.tell,
            };
          });

          return [
            {
              hostName: "",
              title: hostInfo.title,
              name: hostInfo.name,
              tell: hostInfo.tell,
            },
            ...familyInfo,
          ];
        })
        .flat();
    },

    /*-- 은행 정보 --*/
    getDepositData: (state) => {
      return state.postData.formData.depositData;
    },
    /*-- 갤러리 정보 --*/
    getGalleryData(state) {
      return state.postData.formData.galleryData;
    },
    getImageGalleryData(state) {
      return state.postData.formData.galleryData.image;
    },
    getVideoGalleryData(state) {
      return state.postData.formData.galleryData.video;
    },
    /*-- 방명록 정보 --*/
    getCommentData: (state) => {
      return state.postData.formData.commentData;
    },
    /*-- 게스트 설문 정보 --*/
    getSurveyData: (state) => {
      return state.postData.formData.surveyData;
    },
    /*-- 게스트 앨범 정보 --*/
    getAlbumData: (state) => {
      return state.postData.formData.albumData;
    },
    /*-- 카카오 메세지 --*/
    getKakaotalkData: (state) => {
      return state.postData.formData.kakaotalkData;
    },
    /*-- 기능 --*/
    getFunctionData: (state) => {
      return state.postData.formData.functionData;
    },
    /*-- 순서 변경 --*/
    getOrderData: (state) => {
      return state.postData.formData.orderData;
    },
    /*-- 사용유무 --*/
    getEnabledData: (state) => ({
      calendar: state.postData.formData.dateData.fnCalendar,
      notice: state.postData.formData.noticeData.fnNotice,
      gallery: state.postData.formData.galleryData.fnGallery,
      comment: state.postData.formData.commentData.fnComment,
      survey: state.postData.formData.surveyData.fnSurvey,
      deposit: state.postData.formData.depositData.fnDeposit,
    }),

    getFilter: (state) => {
      return state.postData.formData.customData.filter;
    },
    /*-- 공통 --*/
    /*-- 히어로 타입 --*/
    getHeroType: (state) => {
      return state.postData.formData.homeData.type;
    },
    /*-- 히어로 파일 --*/
    getHeroFiles: (state) => {
      return state.postData.formData.homeData.files;
    },
    /*-- 히어로 일러스트 --*/
    getHeroIllust: (state) => {
      return state.postData.formData.homeData.illust;
    },
    /*-- 프리뷰 영역 --*/
    getPreviewFunction: (state) => ({
      audios: state.postData.formData.audiosData.fnAudios,
      like: state.postData.formData.functionData.fnLike,
      effect: state.postData.formData.effectData.fnEffect,
      order: state.postData.formData.orderData.order,
    }),

    /*-- 프리뷰 홈 --*/
    getPreviewHome: (state) => ({
      style: state.postData.formData.homeData.style,
      frame: state.postData.formData.homeData.frame,
      options: {
        title: state.postData.formData.homeData.title,
        date: state.postData.formData.dateData.date,
        time: state.postData.formData.dateData.time,
        host0: state.postData.formData.hostData.info[0].host,
        host1: state.postData.formData.hostData.info[1].host,
        hall: {
          name: state.postData.formData.locationData.name,
          info: state.postData.formData.locationData.info,
          address: state.postData.formData.locationData.address,
          detail: state.postData.formData.locationData.detail,
        },
      },
      fnFile: state.postData.formData.homeData.fnFile,
      item: {
        x: state.postData.formData.homeData.item.x,
        y: state.postData.formData.homeData.item.y,
        w: state.postData.formData.homeData.item.w,
        h: state.postData.formData.homeData.item.h,
      },
    }),
    /*-- 스탬프 --*/
    getStamp: (state) => {
      return state.postData.formData.customData.stamp;
    },
    /*-- 웨딩홀 정보 --*/
    getHallData: (state) => ({
      name: state.postData.formData.locationData.name,
      info: state.postData.formData.locationData.info,
    }),
    /*-- 백그라운드 정보 --*/
    getBackgroundData: (state) => ({
      styleBackground: state.postData.formData.customData.styleBackground,
      filter: state.postData.formData.customData.filter,
      backgroundColor: state.postData.formData.customData.backgroundColor,
      gradient1: state.postData.formData.customData.gradient1,
      gradient2: state.postData.formData.customData.gradient2,
      gradient3: state.postData.formData.customData.gradient3,
    }),
    /*-- 계좌 정보 --*/
    getPreviewDepositData: (state) => [
      {
        title: state.postData.formData.hostData.info[0].host.title,
        fnFold: state.postData.formData.hostData.info[0].bank.fnFold,
        account: state.postData.formData.hostData.info[0].bank.account,
      },
      {
        title: state.postData.formData.hostData.info[1].host.title,
        fnFold: state.postData.formData.hostData.info[1].bank.fnFold,
        account: state.postData.formData.hostData.info[1].bank.account,
      },
    ],

    /*-- 커스텀 --*/
    getCustomData(state) {
      return state.postData.formData.customData;
    },
    // 디자인
    getDesign(state) {
      return state.postData.formData.customData.design;
    },
    // 프라이머리 컬러
    getPrimaryColor: (state) => {
      return state.postData.formData.customData.primaryColor;
    },
    // 그림자
    getShadow: (state) => {
      return state.postData.formData.customData.shadow;
    },
    // 그림자
    getBorder: (state) => {
      return state.postData.formData.customData.border;
    },
    // align
    getAlign: (state) => {
      return state.postData.formData.customData.align;
    },

    /*-- post 정보 --*/
    getWriterId: (state) => {
      return state.writerId;
    },
    getPay: (state) => {
      return state.pay;
    },
  },
};
