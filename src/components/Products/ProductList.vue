<template>
  <ul class="catalog__list">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ProductItem,
  },
};
</script>
