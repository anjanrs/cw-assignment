<template>
  <div>
    <div class="category_banner">
      <div class="category_desc">
        <div>
          <h1>{{getCategory}}</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.</p>
      </div>
    </div>
    <div class="page-content">
      <ProductCategory :products="getProducts(getCategory)" @addToCart="addToCart"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCategory from '@/components/ProductCategory'
import {createNamespacedHelpers} from 'vuex';
const {mapGetters, mapActions} = createNamespacedHelpers('categorypage');
const { mapActions: cartPageActions } = createNamespacedHelpers('cartpage');
export default {
  name: 'CategoryPage',
  data: () => {
    return {
      products: []
    }
  },
  components: {
    ProductCategory
  },
  computed: {
    ...mapGetters([
        'getItem',
        'getProducts'
    ]),
    getCategory() {
      const category = this.$route.params.category ? this.$route.params.category : 'plates';
      console.log('route param', category);
      return category;
    }
  },
  methods: {
    ...mapActions([
        'loadCategoryProducts'
    ]),
    ...cartPageActions([
      'addItem'
    ]),
    addToCart($event) {
      console.log('enent', $event);
      const product = $event.product;
      const productWithQuantity = {...product, quantity: $event.quantity };
      this.addItem({productWithQuantity});
    }
  }, 
  mounted() {
    console.log('mounted');
    const products = this.getProducts(this.getCategory);
    console.log(products.length);
    if(products.length == 0) {
      this.loadCategoryProducts({category: this.getCategory});
    }
  }
}
</script>
<style lang="scss">
.category_banner {
  background: url('~@/assets/img/plates-header.jpg');
  background-size: cover;
  height: 400px;
  .category_desc {
    lost-center: 800px;
    background-color: #363535;
    color: #fff;
    height: 100%;
    padding: 0 60px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
      text-transform: capitalize;
      display: inline-block;;
      margin: 0;
      text-align: center;
      font-size: 40px;
      font-family: 'Lora', sans-serif;
      position: relative;
      margin-bottom: 20px;
      &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: -10px;
        left: 0; 
      }
    }
    p {
      font-size: 16px;
      line-height: 25px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
  }
}
</style>