const state = {
    activeTabName: '/',
}


const actions = {};


const mutations = {
    changeTab(state, tabName) {
        state.activeTabName = tabName;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
} 