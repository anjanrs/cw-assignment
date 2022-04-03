import Mutation from './mutationTypes';

export default {
    [Mutation.SET_ITEM]: (state, { field, value }) => {
        state[field] = value;
    }
}