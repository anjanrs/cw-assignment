<template>
  <div class="product_tiles">
    <template  v-for="(product) in products">
      <ProductTile :product="product"  :key="product.id" @addToCart="event => $emit('addToCart', event)"/>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductTile from '@/components/ProductTile'

export default {
  name: 'ProductCategory',
  props: {
    products: { type: Array, required: true}
  },
  components: {
    ProductTile
  }
}
</script>
<style lang="scss">
    @import "./css/productCategory.scss";
</style>