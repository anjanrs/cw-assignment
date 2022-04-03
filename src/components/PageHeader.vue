<template>
    <header>
      <div class="logo">
        <img src="@/assets/img/logo.png">
      </div>
      <div class="nav">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/category/plates">Shop</router-link>
          <router-link to="/journal">Journal</router-link>
          <router-link to="/more">More</router-link>
        </nav>
      </div>
      <div class="nav_right">
        <div class="my_cart" @click="$emit('myCartClick')">My Cart ({{cartQuantity}})</div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    cartQuantity: {type: Number, required: false, default: 0}
  }
}
</script>
<style lang="scss">
header {
   box-shadow: 0 6px 8px 0 rgb(0 0 0 / 13%);
  background-color: #fff;
  padding: 30px;
  lost-utility: clearfix;
  .logo {
    lost-column: 3/12;
  }
  .nav {
    nav {
      margin-top: 20px;
    }
    text-align:center;
    lost-column: 6/12;
    a {
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      padding: 0 25px;
      color: #000;
      &.router-link-exact-active {
          color: #42b983;
      }
    }
  }
  .nav_right {
    text-align:right;
    lost-column: 3/12;
    .my_cart {
      margin-top: 20px;
      text-transform: uppercase;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      padding: 0 25px;
      cursor: pointer;
    }
  }
}
</style>