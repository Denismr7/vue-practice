import { Store, StoreOptions } from 'vuex'

import { State } from './state'

export default {
    appendHero: (state: State, hero: Object) => {
      state.heroes.push(hero)
    }
  }