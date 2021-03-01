<template>
  <div>
    <ProductEdit :productId = "$route.params.Pid"></ProductEdit>
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
    // productId!: string;

    // created () {
    //     this.productId = this.$route.params.Pid;
    // }
}
</script>
