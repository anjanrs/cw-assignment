<template>
  <div class="breadcrumb">
          <router-link to="/">Home</router-link>&nbsp;/&nbsp;
          <router-link :to="'/category/' + category">{{category}}</router-link>&nbsp;/&nbsp;
          <label>{{productTitle}}</label>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'BreadCrumb',
  props: {
      category: { type: String, required: false, default: ''},
      productTitle: { type: String, required: false, default: ''}
  }
}
</script>
<style lang="scss">
.breadcrumb {
    
    padding: 30px 30px 50px;
    text-align: center;
    a,label {
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
    label {
        color: #9a9b9d;
    }
}
</style>
