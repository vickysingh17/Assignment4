<template>
<div>
    <ProductItemForm 
        :productInfo = "productInfo"
        functionality="Edit"
        @save-changes="updateChanges"> Update </ProductItemForm>
</div>	
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductItemForm from './ProductItemForm.vue'
import { ProductType } from '../constants/constants';

@Component({
  components : {
    ProductItemForm
  }
})
export default class ProductDetailBasic extends Vue {
    @Prop() productInfo!: ProductType;

    updateChanges(productInfo:ProductType) {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            if(productObjArr[i].id === this.productInfo.id) {
                productObjArr[i] = productInfo;
                break;
            }
        }
        localStorage.setItem('dataId', JSON.stringify(productObjArr));
        this.$router.push({name: 'Home'});
    }
}
</script>