<template>
    <div>
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
            <div class="productDetail">{{productInfo.config.connectorURL}}</div>
            <div class="productDetail">Card Network</div>
            <div class="productDetail">{{productInfo.cardNetwork}}</div>
            <div class="productDetail">Protocol Version</div>
            <div class="productDetail">{{productInfo.version}}</div>

        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ProductDetailBasic extends Vue {
    @Prop() productInfo : object|undefined;   
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
    margin: 20px;
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    color: blue;
}

.productDetail {
    margin: 10px;
    text-align: left;
    font-size: 20px;;
}

</style>
