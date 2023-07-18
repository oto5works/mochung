import { createStore } from "vuex";
import app from "./modules/app";
import auth from "./modules/auth";
import notification from "./modules/notification";

const store = createStore({
  modules: {
    app,
    auth,
    notification
  }
});

export default store;
