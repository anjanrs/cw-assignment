import Mutation from './mutationTypes';
export default {
    setItem: ({ commit }, {field, value}) => {
        commit(Mutation.SET_ITEM, {field, value});
    },
    addItem: ({ commit, getters }, {productWithQuantity}) => {
        console.log('action', productWithQuantity);
        let cartItem = getters.getCartItemById(productWithQuantity.id);
        if(cartItem) {
            productWithQuantity.quantity  = cartItem.quantity + productWithQuantity.quantity;
        }
        commit(Mutation.ADD_ITEM, {productWithQuantity});
    },
    removeItem:({ commit }, {productId}) => {
        commit(Mutation.REMOVE_ITEM, {productId});
    }
}
