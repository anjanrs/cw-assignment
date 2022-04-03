<template>
  <div class="cart">
    
      <div class="cart_item_header">
        <div class="product_header">Product</div>
        <div class="quantity_header">Quantity</div>
        <div class="total_header">Total</div>
        <div class="action_header">Action</div>
      </div>
      <template  v-for="productId in Object.keys(items)">
        
        <div class="cart_item_row" :key="productId">
          <div class="product">
            <div class="img_wrapper">
              <img :src="require(`../../assets/img/products/${items[productId].image}`)" :alt="items[productId].title">
            </div>
            <div class="info">
              <h4>{{items[productId].brand}}</h4>
              <h2>{{items[productId].title}}</h2>
              <label>Unit Price: <span>${{items[productId].price}}</span></label>
            </div>
          </div>
          <div class="item_quantity">
            <QuantityButton 
            @incrementQuantity="$event => incrementQuantity($event, items[productId])" 
            @decrementQuantity="$event => decrementQuantity($event, items[productId])" 
            :quantity="items[productId].quantity"/>
          </div>
          <div class="total">
            <div>
              ${{(items[productId].price * items[productId].quantity)}}
            </div>
          </div>
          <div class="action">
            <div class="remove_item" @click="$event => removeItem($event, items[productId])">X</div>
          </div>
        </div>
      </template>
      <div class="cart_overview_wrapper">
        <div class="cart_overview">
            <div class="title">Cart Overview</div>
            <div class="subtotal"><label>subtotal</label><label>${{total}}</label></div>
            <div class="total"><label>total</label><label>${{total}}</label></div>
        </div>
      </div>
   
  </div>
</template>

<script>
import QuantityButton from '@/components/common/QuantityButton'

export default {
  name: 'StoreCart',
  props: {
    items: { type: Object, required: true}
  },
  components: {
    QuantityButton
  },
  computed: {
    total() {
      let total = 0;
      for (const key in this.items) {
          total += this.items[key]['quantity'] * this.items[key]['price'];
      }
      return total;
    }
  },
  methods: {
    incrementQuantity($event, product) {
      console.log($event);
      this.$emit('incrementQuantity', { product });
    },
    decrementQuantity($event, product) {
      console.log($event);
      this.$emit('decrementQuantity', { product });
    },
    removeItem($event, product) {
      console.log($event);
      console.log('remp', product);
      this.$emit('removeItem', { product });
    }
  }

}
</script>
<style lang="scss">
    @import "./css/storeCart.scss";
</style>