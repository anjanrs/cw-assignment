import Mutation from './mutationTypes';
import { apiGetProductById } from "@/api.js"
export default {
    setItem: ({ commit }, {field, value}) => {
        commit(Mutation.SET_ITEM, {field, value});
    },
    loadProduct: async ({ commit }, { productId }) =>  {
        try {
            commit(Mutation.SET_ITEM, {field: 'processing', value: true});
            const response = await apiGetProductById(productId);
            if(response) { //details saved successfull, clear the errors.
                commit(Mutation.SET_ITEM, {field: 'product', value: response});
                console.log(response);
            } else {  
                console.log('no product found with id ' + productId);
            } 
            commit(Mutation.SET_ITEM, {field: 'processing', value: false});
        } catch (e) {
            console.log('error occured');
            commit(Mutation.SET_ITEM, {field: 'processing', value: false});
        }
    }
}
