import Vue from "vue";
import Vuex from 'vuex';
import modulePlayer from './modules/player.js';
Vue.use(Vuex);

export default new Vuex.Store({
    modules : {
        player: modulePlayer
    }
});
