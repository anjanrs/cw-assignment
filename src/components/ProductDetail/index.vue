<template>
  <div class="product_detail">
      <div class="product_big_image">
           <img :src="require(`../../assets/img/products/${product.image}`)" :alt="product.title">
      </div>
      <div class="product_info">
          <h4 class="brand">{{product.brand}}</h4>
          <h1 class="title">{{product.title}}</h1>
          <label class="price">${{product.price}}</label>
          <p class="desc">
              {{product.description}}
          </p>
          <hr/>
          <div class="add_to_cart">
            <QuantityButton @incrementQuantity="incrementQuantity" @decrementQuantity="decrementQuantity" :quantity="quantity"/>
            <div class="button black" @click="addToCart">Add to cart</div>
        </div>
      </div>
      
    <!-- <ProductImage/>
    <ProductInfo/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import QuantityButton from '@/components/common/QuantityButton'

export default {
  name: 'ProductDetail',
  props: {
    product: { type: Object, requried: true}
  },
  data: () => {
    return {
      quantity: 1
    }
  },
  components: {
    // ProductImage,
    QuantityButton
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if(this.quantity >1) {
        this.quantity--;
      }
    },
    addToCart() {
        this.$emit('addToCart', { product: this.product, quantity: this.quantity});
    }
  }
}
</script>
<style lang="scss">
    @import "./css/prodcutDetail.scss";
</style>