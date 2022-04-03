<template>
  <div v-click-outside="handleClickOutside" class="my_cart_popup">
      <template v-if="Object.keys(items).length>0">
      <template  v-for="productId in Object.keys(items)">
        <div class="cart_item_row" :key="productId">
          <div class="product">
            <div class="img_wrapper">
              <img :src="require(`../../assets/img/products/${items[productId].image}`)" :alt="items[productId].title">
            </div>
            <div class="info">
              <h2>{{items[productId].title}}</h2>
              <label>x&nbsp;{{items[productId].quantity}}</label>
              <h4>{{items[productId].brand}}</h4>
              <label>${{items[productId].price}}</label>
            </div>
          </div>
          <div class="action">
            <div class="remove_item" @click="$event => removeItem($event, items[productId])">X</div>
          </div>
        </div>
      </template>
      
      <div class="my_cart_overview_wrapper">
        <div class="cart_overview">
            <div class="total"><label>total</label><label>${{total}}</label></div>
        </div>
      </div>
      <div class="my_cart_cta_wrapper">
        <div class="cart_cta">
            <div class="button white" @click="handleViewcart">VIEW CART</div>
            <div class="button black">CHECKOUT</div>
        </div>
      </div>
      </template>
      <template v-else>
        There are no items in the cart.
      </template>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'MyCartPopup',
  props: {
    items: { type: Object, required: true},
    total: { type: Number, required: true}
  },
  // do not forget this section
  directives: {
    vClickOutside
  },
  methods: {
    removeItem($event, product) {
      this.$emit('removeItem', { product });
    },
    handleClickOutside($event) {
      this.$emit('clickOutside',$event);
    },
    handleViewcart($event) {
        this.$router.push('/cart');
        this.$emit('clickOutside',$event);
    } 
  }
}
</script>
<style lang="scss">
    @import "./css/myCartPopup.scss";
</style>