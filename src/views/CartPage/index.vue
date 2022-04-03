<template>
  <div>
    <div class="cart_banner">
      Shopping Cart
    </div>
    <div class="page-content">
      <template v-if="getCartTotal>0">
        
        <StoreCart :items="getItem('items')" 
          @incrementQuantity="incrementQuantity" 
          @decrementQuantity="decrementQuantity" 
          @removeItem="removeCartItem"
          />
        <div class="cart_cta_wrapper">
          <div v-if="getCartTotal>0" class="cart_cta">
            <router-link to="/">CONTINUE SHOPPING</router-link>
            <div class="button black">CHECKOUT(${{getCartTotal}})</div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="empty_cart">
          Your cart is empty.<br>
          Click <router-link to="/">here</router-link> to continue shopping.
        </div>
      </template>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreCart from '@/components/StoreCart'
import {createNamespacedHelpers} from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('cartpage');
export default {
  name: 'CategoryPage',
  components: {
    StoreCart
  },
  computed: {
    ...mapGetters([
        'getItem',
        'getCartItemById',
        'getCartTotal'
    ])
  },
  methods: {
    ...mapActions([
      'addItem',
      'removeItem'
    ]),
    incrementQuantity($event) {
        console.log('eventnew', $event);
        let productWithQuantity = { ...$event.product}
        productWithQuantity.quantity = 1;
        this.addItem({productWithQuantity});
        console.log(this.getItem('items'));
    },
    decrementQuantity($event) {
        let productWithQuantity = { ...$event.product}
        if(productWithQuantity.quantity >1 ) {
            productWithQuantity.quantity = -1;
            this.addItem({productWithQuantity});
        }
    },
    removeCartItem($event)  {
        console.log($event);
        let product = { ...$event.product};
        console.log('remove', product);
        this.removeItem({productId: product.id});
    }
  }
}
</script>
<style lang="scss">
  .empty_cart {
    text-align: center;
    background-color: white;
    padding: 100px;
    margin-bottom: 50px;
    min-height: 400px;
  }
  .cart_banner {
    font-size: 80px;
    padding: 100px 50px;
    color: #000;
    text-align: center;
    font-family: 'Lora', sans-serif;
  }
  .cart_cta_wrapper {
    background: #fff;
    padding: 50px;
    display: flex;
    margin-bottom: 100px;
    .cart_cta {
      width: 100%;
      a {
        color: black;
        font-weight: 600;
        display: block;
        float: left;
        font-size: 14px;
        text-transform: uppercase;
        font-family:  'Montserrat', sans-serif;
        text-decoration: none;
        position:relative;
        &:after {
          content:'';
          width:100%;
          height: 2px;
          background: #000;
          position: absolute;
          left:0;
          top:100%;
        }
      }
      .button.black {
        float: right;
      }
    }
  }
</style>