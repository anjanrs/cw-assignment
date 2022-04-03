import Mutation from './mutationTypes';

export default {
    [Mutation.SET_ITEM]: (state, { field, value }) => {
        state[field] = value;
    },
    [Mutation.SET_CATEGORY_PRODUCTS]: (state, { category, products }) => {
        state['products'][category] = products;
    }
}