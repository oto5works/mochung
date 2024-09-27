import { createStore } from "vuex";
import auth from "./modules/auth";
import formData from "./modules/formData";
import formState from "./modules/formState";
import options from "./modules/options";
import fileModule from "./modules/fileModule";
import gemini from "./modules/gemini";

import comment from "./modules/comment";
import survey from "./modules/survey";

const store = createStore({
  modules: {
    auth,
    formData,
    formState,
    options,
    comment,
    survey,
    fileModule,
    gemini,
  },
});

export default store;
