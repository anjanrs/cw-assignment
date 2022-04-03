<template>
  <div class="tile">
    <div class="product">
      <div class="product_img">
         <img :src="require(`../../assets/img/products/${product.image}`)" :alt="product.title">
         <div class="product_cta_wrapper">
           <div class="product_cta">
            <router-link :to="'/product/' + product.id"><div class="button black">View Details</div></router-link>
            <div class="button grey" @click="addToCart">Add to cart</div>
           </div>
         </div>
      </div>
      <div class="product_info">
          <h4 class="brand">{{product.brand}}</h4>
          <h2 class="title">{{product.title}}</h2>
          <label class="price">${{product.price}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTile',
  props: {
    product: { type: Object, required: true }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', {product: this.product, quantity: 1});
    }
  }
}
</script>
<style lang="scss">
    @import "./css/productTiles.scss";
</style>