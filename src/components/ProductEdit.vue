<template>
    <div v-if="productFound">
        <div class = "topContainer">
            <div>
                <div class = "pageTitle">Edit Product</div>
            </div>
        </div>

        <ProductForm 
        :productInfo = "productInfo"
        functionality="Edit"
        @save-changes="updateChanges"> Update </ProductForm>
  </div>
  <div v-else>
      <ProductNotFound />
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { productType, getDefaultOject } from '@/constants/constants';
import ProductForm from './ProductForm.vue'
import ProductNotFound from './ProductNotFound.vue';

@Component({
    components: { 
        ProductForm,
        ProductNotFound,
    }
})
export default class ProductDetail extends Vue {
    @Prop() productId!: string;
    productInfo!: productType; //=  getDefaultOject();
    productFound: boolean = false;

    @Watch('productId')
    onPropertyChanged(value: string, oldValue: string) {
        this.productFound = false;
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            if(productObjArr[i].id === value) {
                this.productInfo = productObjArr[i];
                this.productFound = true;
                break;
            }
        }

    }
    
    created() {

        this.productFound = false;
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            if(productObjArr[i].id === this.productId) {
                this.productInfo = productObjArr[i];
                this.productFound = true;
                break;
            }
        }
    }

    updateChanges(productInfo:productType) {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.topContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  height: 60px;
  padding: 10px;
}

.pageTitle {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}

</style>
