import Mutation from './mutationTypes';
import { apiGetProductsByCategory } from "@/api.js"
export default {
    setItem: ({ commit }, {field, value}) => {
        commit(Mutation.SET_ITEM, {field, value});
    },
    loadCategoryProducts: async ({ commit }, { category }) =>  {
        try {
            console.log(category);
            commit(Mutation.SET_ITEM, {field: 'processing', value: true});
            const response = await apiGetProductsByCategory(category);
            if(response) { //details saved successfull, clear the errors
                commit(Mutation.SET_CATEGORY_PRODUCTS, { category, products: response });    
                console.log(response);
            } else {  
                console.log('no products in this category');
            } 
            commit(Mutation.SET_ITEM, {field: 'processing', value: false});
        } catch (e) {
            console.log('error occured');
            commit(Mutation.SET_ITEM, {field: 'processing', value: false});
        }
    }
}
