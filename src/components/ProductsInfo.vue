<template>
    <div>
        <div class = "topContainer">
            <div>
                <div class = "title">Products</div>
                <div>An Overview of all your products available in Authentication Center</div>
            </div>
            <button @click="goToCreate()">Create</button>
        </div>
        <div class = "displayWrapper">
            <ProductsInfoItem 
                v-for="(item, index) in productcardItems"
                :key="index" 
                :productItem="item"
                class = "productItem"
                @display-details="goToDetail(item.id)">
            </ProductsInfoItem>
        </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductsInfoItem from './ProductsInfoItem.vue';
import MyHeader from './MyHeader.vue';
import { ProductType } from '../constants/constants'
@Component({
    components: { 
        ProductsInfoItem,
        MyHeader }
})
export default class ProductsInfo extends Vue {
    productcardItems: ProductType[] = [];

    mounted() {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            productObjArr[i].aavAlgorithm = undefined;
            productObjArr[i].keyBundleId = undefined;
            this.productcardItems.push(productObjArr[i])
        }
        console.log(this.productcardItems);
    }

    goToDetail(productId:string) {
        // console.log(productId);
        this.$router.push({name:'Details',params:{Pid:productId}})
    }

    goToCreate() {
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
    width: 100px;
}
.title {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}
.displayWrapper {
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

.topContainer > button {
    cursor:pointer;
}
</style>
