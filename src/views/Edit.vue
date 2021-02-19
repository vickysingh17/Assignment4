<template>
  <div>
    <ProductEdit :productId = "productId"></ProductEdit>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductEdit from '@/components/ProductEdit.vue';

@Component({
  components: {
    ProductEdit,
  },
})
export default class Details extends Vue {
    productId: string|undefined;

    created () {
        this.productId = this.$route.params.Pid;
    }
}
</script>
