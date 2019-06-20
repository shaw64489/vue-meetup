import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    //keeping our data we are sharing with our components
    state: {
        meetups: [],
        categories: [],
        threads: [],
        meetup: {}
    },
    //computed properties. simple functions to get state
    getters: {
        meetups (state) {
            return state.meetups;
        },
        categories (state) {
            return state.categories;
        }
    },
    //actions like methods in vue component - they should not mutate state
    //good spot to fetch data. action call should resolve into data
    actions: {
        fetchMeetups(context) {
            axios.get("/api/v1/meetups").then(res => {
                const meetups = res.data;
                context.commit('setMeetups', meetups)
            });
        },
        fetchCategories(context) {
            axios.get("/api/v1/categories").then(res => {
                const categories = res.data;
                context.commit('setCategories', categories)
            });
        }
    },
    //simple functions to mutate state
    mutations: {
        setMeetups (state, meetups) {
            state.meetups = meetups;
        },
        setCategories (state, categories) {
            state.meetups = categories;
        }
    }
})

