export default {
    getItem: state => field => {
        return state[field] ? state[field]: '';
    },
    getProducts: state => category => {
        return state['products'][category] ? state['products'][category]: [];
    }
}
