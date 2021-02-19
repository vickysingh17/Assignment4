<template>
    <div>
        <MyHeader/>
        <div class = "topContainer">
            <div>
                <div class = "title">Edit Product</div>
            </div>
        </div>
        <ProductEditInfo 
            :productInfo = "productInfo"
            class="editContainer"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductEditInfo from './ProductEditInfo.vue';
import MyHeader from './MyHeader.vue';

@Component({
    components: { ProductEditInfo,
    MyHeader }
})
export default class ProductDetail extends Vue {
    @Prop() productId: string|undefined;
    productInfo : object|undefined;

    created() {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            if(productObjArr[i].id === this.productId) {
                this.productInfo = productObjArr[i];
                break;
            }
        }
        console.log(this.productInfo);
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

.title {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}

.editContainer {
    border: 2px solid blue;
    margin: 20px;
    height: 650px;
    width: 90vw;
}
</style>
