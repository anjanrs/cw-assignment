<template>
  <div id="app" :class="$route.name+'_page'">
    <PageHeader @myCartClick="myCartClick" :cartQuantity="getCartItemQuantity"/>
    <section class="content-main">
      <router-view/>
    </section>
    <MyCartPopup v-if="displayCartPopup" :items="getItem('items')"  :total="getCartTotal" @removeItem="removeCartItem"  @clickOutside="hideMyCartPopup"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader'
import MyCartPopup from '@/components/MyCartPopup'
import {createNamespacedHelpers} from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('cartpage');
export default {
  name: 'App',
  components: {
    PageHeader,
    MyCartPopup
  },
  data: () => {
    return {
      displayCartPopup: false
    }
  },
  computed: {
    ...mapGetters([
        'getItem',
        'getCartTotal',
        'getCartItemQuantity'
    ])
  },
  methods: {
    ...mapActions([
      'removeItem'
    ]),
    removeCartItem($event)  {
        console.log($event);
        let product = { ...$event.product};
        console.log('remove', product);
        this.removeItem({productId: product.id});
    },
    myCartClick() {
      this.displayCartPopup = true;
    },
    hideMyCartPopup() {
      this.displayCartPopup = false;
    },
  }
}
</script>
<style lang="scss">
    @import "@/assets/css/style.scss";
</style>