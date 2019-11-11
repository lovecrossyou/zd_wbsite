const state = {
    activeTabName: 'business',
}

const getters = {};

const actions = {};


const mutations = {
    changeTab(state, tabName) {
        state.activeTabName = tabName;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
} 