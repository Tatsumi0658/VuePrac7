import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks:[
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: '本を買う',
        done: true
      }
    ]

  },
  //mutations: {

  //},
  //actions: {

  //}
})
