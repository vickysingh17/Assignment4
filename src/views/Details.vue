<template>
  <div>
    <ProductDetail :productId = "$route.params.Pid"></ProductDetail>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductDetail from '@/components/ProductDetail.vue';

@Component({
  components: {
    ProductDetail,
  },
})
export default class Details extends Vue {
  created () {
    console.log('Details component created');
  }
}
</script>
