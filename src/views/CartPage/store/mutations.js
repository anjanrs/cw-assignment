import Mutation from './mutationTypes';

export default {
    [Mutation.SET_ITEM]: (state, { field, value }) => {
        state[field] = value;
    },
    [Mutation.ADD_ITEM]: (state, { productWithQuantity }) => {
        let items = {...state['items']};
        items[productWithQuantity.id] = {...productWithQuantity};
        state['items'] = {...items};
    },
    [Mutation.REMOVE_ITEM]: (state, { productId }) => {
        let items  = state['items'];
        delete items[productId];
        state['items'] = {...items};
    }
}