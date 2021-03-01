<template>
  <div>
    <ProductCreate/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductCreate from '@/components/ProductCreate.vue';

@Component({
  components: {
    ProductCreate,
  },
})
export default class Details extends Vue {}
</script>
