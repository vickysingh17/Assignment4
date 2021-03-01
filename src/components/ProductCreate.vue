<template>
    <div>
        <div class = "topContainer">
            <div>
                <div class = "pageTitle">Create Product</div>
            </div>
        </div>

        <ProductForm 
        :productInfo = "productInfo"
        @save-changes = "addNewEntry">Create</ProductForm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductForm from './ProductForm.vue';
import { productType, getDefaultOject } from '@/constants/constants';

@Component({
    components: { 
        ProductForm ,
    }
})
export default class ProductCreate extends Vue {
    productInfo : productType = getDefaultOject();

    addNewEntry(newProduct:productType) {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        newProduct.id = 'PR' + (productObjArr.length+1);
        productObjArr.unshift(newProduct);
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

.topContainer > button {
    height: 50px;
    width: 100px;
}

.pageTitle {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}

</style>
