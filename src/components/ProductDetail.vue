<template>
    <div v-if="productFound" >
        <div class = "topContainer">
            <div>
                <div class = "pageTitle">{{productInfo.name}}</div>
                <div>{{productInfo.description}}</div>
            </div>
            <button @click="goToEditPage()">Edit Product</button>
        </div>
        <div class = "contents">
            <div class='header'>Basic Information</div>
            <div class='detailsContainer'>
                <div class="productDetail">Product Name</div>
                <div class="productDetail">{{productInfo.name}}</div>
                <div class="productDetail">Product ID</div>
                <div class="productDetail">{{productInfo.id}}</div>
                <div class="productDetail">Description</div>
                <div class="productDetail">{{productInfo.description ? productInfo.description:'-'}}</div>
                <div class="productDetail">BIN Number</div>
                <div class="productDetail">{{productInfo.bin}}</div>
                <div class="productDetail">Connector URL</div>
                <a href="" class="productDetail"
                    @click.prevent>{{productInfo.config.connectorURL}}</a>
                <div class="productDetail">Card Network</div>
                <div class="productDetail">
                    <ProductCardLogo 
                        class = "cardLogo"
                        :productLogo="productInfo.cardNetwork"
                        :logoDimensions = "logoDimensions"/>
                    <span>{{productInfo.cardNetwork[0].toUpperCase() + productInfo.cardNetwork.slice(1)}}</span>
                </div>
                <div class="productDetail">Protocol Version</div>
                <div class="productDetail">{{productInfo.version}}</div>
            </div>
        </div>
    </div>
    <div v-else>
        <ProductNotFound/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { productType, getDefaultOject } from '@/constants/constants';
import ProductCardLogo from './ProductCardLogo.vue';
import ProductNotFound from './ProductNotFound.vue';

@Component({
    components: { 
        ProductCardLogo,
        ProductNotFound,
    },
})
export default class ProductDetail extends Vue {
    @Prop() productId!: string;
    productInfo !: productType; // =  getDefaultOject();
    logoDimensions : object = {
        width: '40px',
        height: '40px',
    }
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
        console.log('Component created');
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
    
    goToEditPage() {
        this.$router.push({name:'Edit',params:{Pid:this.productId}});
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


.detailsContainer {
    display: grid;
    grid-template-columns: 1fr 6fr;
    align-items: center;
}

.header {
    margin: 10px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    color: blue;
}

.contents {
    margin: 10px;
    height: 650px;
    width: 90vw;
    border: 2px solid blue;;
}

.productDetail {
    margin: 10px;
    text-align: left;
    font-size: 20px;;
    align-items: center;
}

.cardLogo {
    height: 40px;
    width: 40px;
    display: inline-block;
}
span {
    position: relative;
    bottom: 15px;
    left: 10px;
}
</style>
