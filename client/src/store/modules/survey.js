import { getSurvey, createSurvey, deleteSurvey } from '@/services/surveys';

export default {
  state: {
    surveysByArchiveId: {}, // Storing surveys by archive ID
  },
  mutations: {
    updateSurveys(state, { archiveId, surveys }) {
      // Update surveys for the specific archive ID
      state.surveysByArchiveId = {
        ...state.surveysByArchiveId,
        [archiveId]: surveys,
      };
    },
  },
  actions: {
    async fetchSurveys(context, archiveId) {
      try {
        const response = await getSurvey(archiveId); // Make sure 'getSurvey' accepts archiveId
        const surveys = response.surveys;
        context.commit('updateSurveys', { archiveId, surveys });
      } catch (error) {
        console.error('Error fetching surveys:', error);
        throw error;
      }
    },

    async saveSurvey(context, data) {
      try {
        await createSurvey(data);

        // Fetch surveys again after saving
        await context.dispatch('fetchSurveys', data.post_id);
      } catch (error) {
        console.error('Error saving survey:', error);
        throw error;
      }
    },

    async deleteSurvey(context, data) {
      try {
        await deleteSurvey(data.id, data.post_id);

        // Fetch surveys again after deleting
        await context.dispatch('fetchSurveys', data.post_id);
      } catch (error) {
        console.error('Error deleting survey:', error);
        throw error;
      }
    },



    



  },
  getters: {
    getSurveysForArchive: state => archiveId => {
      return state.surveysByArchiveId[archiveId] || [];
    },
  },
};
