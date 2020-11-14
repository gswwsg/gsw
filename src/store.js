import { createStore } from "vuex";

const menuContentModule = {
  state() {
    return {
      days: [
        { id: "1-d", value: "MON", checked: "checked" },
        { id: "2-d", value: "TUE" },
        { id: "3-d", value: "WED" },
        { id: "4-d", value: "THU" },
        { id: "5-d", value: "FRI" },
        { id: "6-d", value: "SAT" },
        { id: "7-d", value: "SUN" },
      ],
      bots: [
        { id: "1-b", value: "bot1", checked: "checked" },
        { id: "2-b", value: "bot2" },
        { id: "3-b", value: "bot3" },
      ],
      hosts: [
        { id: "1-h", value: "host1", checked: "checked" },
        { id: "2-h", value: "host2" },
        { id: "3-h", value: "host3" },
      ],
      months: [
        { id: 1, value: "JAN", checked: "checked" },
        { id: 2, value: "FEB" },
        { id: 3, value: "MAR" },
        { id: 4, value: "APR" },
        { id: 5, value: "MAY" },
        { id: 6, value: "JUN" },
        { id: 7, value: "JUL" },
      ],
      retries: [
        { id: "1-r", value: "1", checked: "checked" },
        { id: "2-r", value: "2" },
        { id: "3-r", value: "3" },
      ],
      priority: [
        { id: "1-p", value: "1", checked: "checked" },
        { id: "2-p", value: "2" },
        { id: "3-p", value: "3" },
      ],
      timezone: [
        { id: "1-t", value: "GMT", checked: "checked" },
        { id: "2-t", value: "CET" },
        { id: "3-t", value: "UTC" },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getDays(state) {
      return state.days;
    },
  },
};

const userAuthModule = {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },

  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },

    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },

  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },

  }
}
const store = createStore({
  modules: {
    menuContent: menuContentModule,
    userAuth: userAuthModule
  },
  state() {
    return {
    };
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
});

export default store;