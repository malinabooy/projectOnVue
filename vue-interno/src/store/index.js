// store/index.ts
import { createStore } from 'vuex'

export default createStore({
    state: {
        title: 'Minimal Look Bedrooms',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n\nIn nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
    },
    getters: {
        getTitle: state => state.title,
        getText: state => state.text,
    },
    mutations: {
        setTitle(state, title) {
            state.title = title
        },
        setText(state, text) {
            state.text = text
        }
    },
    actions: {
        updateTitle({ commit }, title) {
            commit('setTitle', title)
        },
        updateText({ commit }, text) {
            commit('setText', text)
        }
    },
    modules: {}
})
