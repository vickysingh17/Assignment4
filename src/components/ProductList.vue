<template>
    <div>
        <div class = "topContainer">
            <div>
                <div class = "pageTitle">Products</div>
                <div>An Overview of all your products available in Authentication Center</div>
            </div>
            <button @click="goToCreatePage()">Create Product</button>
        </div>
        <div class = "contentWrapper">
            <ProductListItem 
                v-for="(item, index) in productcardItems"
                :key="index" 
                :productItem="item"
                class = "productItem"
                @display-details="goToDetailPage(item.id)">
            </ProductListItem>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductListItem from './ProductListItem.vue';
import { productType } from '../constants/constants';

@Component({
    components: { 
        ProductListItem, 
    }
})
export default class ProductList extends Vue {
    productcardItems: productType[] = [];

    created() {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            productObjArr[i].aavAlgorithm = undefined;
            productObjArr[i].keyBundleId = undefined;
            this.productcardItems.push(productObjArr[i])
        }
    }

    goToDetailPage(productId:string) {
        // console.log(productId);
        this.$router.push({name:'Details',params:{Pid:productId}})
    }

    goToCreatePage() {
        // console.log(productId);
        this.$router.push({name:'Create'})
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
    width: 150px;
    color: black;
    font-size: 15px;
    cursor: pointer;
    background-color: lightblue;
    border: 2px solid black;
}
.pageTitle {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}
.contentWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 300px;
    align-items: center;
    grid-gap: 20px;
}
.productItem {
    border: 2px solid black;
    cursor: pointer;
    height:250px;
}

</style>
