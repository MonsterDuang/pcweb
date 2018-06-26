export default {
    state: {
        isSettle: false
    },
    getters: {

    },
    mutations: {
        enterSettle(state) {
            state.isSettle = true
        },
        leaveSettle(state) {
            state.isSettle = false
        }
    },
    actions: {
        settleConfrim({
            commit
        }) {
            commit('enterSettle')
        },
        settleOver({
            commit
        }) {
            commit('leaveSettle')
        }
    }
}