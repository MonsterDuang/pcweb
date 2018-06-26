export default {
    state: {
        navbar: {
            showSort: false,
            tagMap: []
        }
    },
    getters: {

    },
    mutations: {
        showNavbarSort(state) {
            state.navbar.showSort = true
        },
        hideNavbarSort(state) {
            state.navbar.showSort = false
        },
        setNavbarTag(state, tagMap) {
            state.navbar.tagMap = tagMap
        }
    },
    actions: {
        gotoPart({
            commit
        }) {
            commit('hideNavbarSort')
        },
        backHome({
            commit
        }) {
            commit('showNavbarSort')
        },
        tagList({
            commit
        }, payload) {
            commit('setNavbarTag', payload)
        }
    }
}