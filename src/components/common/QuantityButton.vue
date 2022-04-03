<template>
    <div class="quantity">
        <div class="count">
            <input type="text" :value="quantity"/>
        </div>
        <div class="actions">
            <div class="increment" @click="$emit('incrementQuantity')">+</div>
            <div class="decrement" @click="$emit('decrementQuantity')">-</div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
// import ProductImage from '@/components/ProductImage'
// import ProductInfo from '@/components/ProductInfo'

export default {
  name: 'QuantityButton',
  props: {
    quantity: { type: Number, requried: true, default: 1}
  },
  components: {
    // ProductImage,
    // ProductInfo
  }
}
</script>
<style lang="scss">
.quantity {
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 75px;
  .count {
    width: 74px;
    height: inherit;
    margin-right: 5px;
    input {
      font-size: 18px;
      width: 20px;
      padding: 27px;
      text-align: center;
      border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      background-color: #ebebeb;
    }
  }
  .actions {
    width: 36px;
    height: inherit;
    .increment {
      padding: 8px;
      width: 20px;
      background-color: #ebebeb;
      margin-bottom: 5px;
      cursor: pointer;
      text-align: center;
    }
    .decrement {
      padding: 8px;
      width: 20px;
      background-color: #ebebeb;
      cursor: pointer;
      text-align: center;
    }
  }
  
}
</style>