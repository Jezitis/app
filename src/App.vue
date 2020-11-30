<template>
  <product-list :products="products" />
</template>

<script>
import products from './assets/js/products';
import ProductList from './components/Products/ProductList.vue';

export default {
  name: 'App',
  data() {
    return {
      products,
    };
  },
  components: {
    ProductList,
  },
};
</script>

<style lang="scss">

</style>
