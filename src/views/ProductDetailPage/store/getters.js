export default {
    getItem: state => field => {
        return state[field] ? state[field]: '';
    },
    getProduct: state => {
        return state['product'];
    },
}
