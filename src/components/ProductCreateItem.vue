<template>
<div>
   <ProductItemForm 
        :productInfo = "productInfo"
        @save-changes = "addNewEntry">Create</ProductItemForm>
</div>	
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyError from './MyError.vue';
import ProductItemForm from './ProductItemForm.vue';
import { Product } from '../models/product.model';
import { ProductType } from '@/constants/constants';


@Component({
    components: {
        ProductItemForm
    }
})
export default class ProductCreateItem extends Vue { 
    productInfo : ProductType =  { 
        version: "threeDSecure_1_0",
        cardNetwork: "visa",
        id: 'PR' + Math.floor(7 + Math.random() * 10000),
        config: {
            connectorURL: '',
        },
        aavAlgorithm: '',
        keyBundleId: '',
        name:'',
        description: '',
        bin: '',
        authPlans: [],
    };

    addNewEntry(newProduct:ProductType) {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        productObjArr.unshift(newProduct);
        localStorage.setItem('dataId', JSON.stringify(productObjArr));
        this.$router.push({name: 'Home'});
    }
}
</script>