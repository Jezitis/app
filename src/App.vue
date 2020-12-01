<template>
  <section class="catalog">
    <product-list :products="products" />
    <base-pagination
      :page.sync="page"
      :per-page="perPage"
      :count="productsCount"
    />
  </section>
</template>

<script>
import products from './assets/js/products';
import ProductList from './components/Products/ProductList.vue';
import BasePagination from './components/Base/BasePagination.vue';

export default {
  name: 'App',
  data() {
    return {
      page: 1,
      perPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.perPage;
      return products.slice(offset, offset + this.perPage);
    },
    productsCount() {
      return products.length;
    },
  },
  components: {
    ProductList,
    BasePagination,
  },
};
</script>

<style lang="scss">

</style>
