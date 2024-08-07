import { createStore } from "vuex";
import app from "./modules/app";
import auth from "./modules/auth";
import notification from "./modules/notification";
import formData from './modules/formData';
import formState from './modules/formState';
import moInvOptions from './modules/moInvOptions';
import fileModule from './modules/fileModule';

import comment from './modules/comment';
import survey from './modules/survey';
import script from './modules/script';

const store = createStore({
  modules: {
    app,
    auth,
    notification,
    formData,
    formState,
    moInvOptions,
    comment,
    survey,
    fileModule,
    script,
  }
});

export default store;
