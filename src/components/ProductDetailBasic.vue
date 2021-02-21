<template>
    <div class = "Wrapper">
        <div class='bodyHeader'>Basic Information</div>
        <div class='basicInfoContainer'>
            <div class="productDetail">Product Name</div>
            <div class="productDetail">{{productInfo.name}}</div>
            <div class="productDetail">Product ID</div>
            <div class="productDetail">{{productInfo.id}}</div>
            <div class="productDetail">Description</div>
            <div class="productDetail">{{productInfo.description}}</div>
            <div class="productDetail">BIN Number</div>
            <div class="productDetail">{{productInfo.bin}}</div>
            <div class="productDetail">Connector URL</div>
            <a href="" class="productDetail"
            @click.prevent>{{productInfo.config.connectorURL}}</a>
            <div class="productDetail">Card Network</div>
            <div class="productDetail">
                <ProductListItemLogo 
                    class = "cardLogo"
                    :productLogo="productInfo.cardNetwork"
                    :logoDimensions = "logoDimensions"/>
                <span>{{productInfo.cardNetwork}}</span>
            </div>
            <div class="productDetail">Protocol Version</div>
            <div class="productDetail">{{productInfo.version}}</div>

        </div>
    </div>
</template>

<script lang="ts">
import { ProductType } from '@/constants/constants';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductListItemLogo from './ProductListItemLogo.vue';

@Component({
    components : {
        ProductListItemLogo
    }
})
export default class ProductDetailBasic extends Vue {
    @Prop() productInfo !: ProductType;
    logoDimensions : object = {
        width: '40px',
        height: '40px',
    }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.basicInfoContainer {
    display: grid;
    grid-template-columns: 1fr 6fr;
    align-items: center;
}

.bodyHeader {
    margin: 10px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    color: blue;
}
.Wrapper {
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
