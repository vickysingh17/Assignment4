<template>
    <div>
        <MyHeader/>
        <div class = "topContainer">
            <div>
                <div class = "title">{{productInfo.name}}</div>
                <div>{{productInfo.description}}</div>
            </div>
            <button @click="goToEdit()">Edit</button>
        </div>
        <ProductDetailBasic :productInfo = "productInfo"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductDetailBasic from './ProductDetailBasic.vue';
import MyHeader from './MyHeader.vue'

@Component({
    components: { ProductDetailBasic,
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

    goToEdit() {
        this.$router.push({name:'Edit',params:{Pid:<string>this.productId}});
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
</style>
