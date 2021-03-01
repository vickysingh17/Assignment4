<template>
  <div>
    <ProductList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductList from '@/components/ProductList.vue';

@Component({
  components: {
    ProductList,
  },
})
export default class Home extends Vue {}
</script>
