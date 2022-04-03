<template>
  <div>
    <BreadCrumb category="plates" :productTitle="getProduct.title"/>
    <div class="page-content">
      <ProductDetail v-if="!isEmptyProduct" :product="getProduct" @addToCart="addToCart"/>
    </div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import _ from 'lodash';
import BreadCrumb from '@/components/BreadCrumb.vue';
import ProductDetail from '@/components/ProductDetail'
import {createNamespacedHelpers} from 'vuex';
const { mapGetters: productDetailPageGetters, mapActions: productDetailPageActions } = createNamespacedHelpers('productdetailpage');
const { mapGetters: cartPageGetters, mapActions: cartPageActions } = createNamespacedHelpers('cartpage');
export default {
  name: 'ProductDetailPage',
  components: {
    ProductDetail,
    BreadCrumb
  },
  computed: {
      ...productDetailPageGetters([
          'getProduct'
      ]),
      ...cartPageGetters([
          'getItem'
      ]),
      isEmptyProduct() {
          return _.isEmpty(this.getProduct);
      }
  },
  methods: {
      ...productDetailPageActions([
          'loadProduct',
          'setItem'
      ]),
      ...cartPageActions([
        'addItem',
        'removeItem'
      ]),
      addToCart($event) {
        const product = $event.product;
        const productWithQuantity = {...product, quantity: $event.quantity };
        this.addItem({productWithQuantity});
      }
  },
  mounted() {
      this.loadProduct({productId: this.$route.params.id});
  }
}
</script>
