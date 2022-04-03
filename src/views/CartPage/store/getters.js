export default {
    getItem: state => field => {
        return state[field] ? state[field]: '';
    },
    getCartItemById: state => productId => {
        return state['items'][productId] ? state['items'][productId]: null;
    },
    getCartTotal: state => {
        let total = 0;
        for (const key in state['items']) {
            total += state['items'][key]['quantity'] * state['items'][key]['price'];
        }
        return total;
    },
    getCartItemQuantity: state => {
        let total = 0;
        for (const key in state['items']) {
            total += state['items'][key]['quantity'];
        }
        return total;
    },
}
