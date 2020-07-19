import { Store, Commit } from "vuex";

export default {
  addHero: ({ commit }: { commit: Commit }, payload: Object) => {
    commit('appendHero', payload);
  }
};
