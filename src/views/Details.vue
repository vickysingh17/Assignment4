<template>
  <div>
    <ProductDetail :productId = "productId"></ProductDetail>
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
    productId: string|undefined;

    created () {
        this.productId = this.$route.params.Pid;
    }
}
</script>
