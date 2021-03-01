<template>
<div 
    @click="goToDetailPage()"
    class="productItem">

    <ProductCardLogo 
        :productLogo="productItem.cardNetwork"
        :logoDimensions = "logoDimensions"/>

    <div class = "productName">{{productItem.name}}</div>
    <div class="productID"> 
        <span>{{productItem.id}}</span>
    </div>
    <div class = "productBin"> BIN-{{productItem.bin}}</div>
</div>

</template>

<script lang="ts">
import { productType } from '@/constants/constants';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductCardLogo from './ProductCardLogo.vue';

@Component({
    components: {ProductCardLogo}
})
export default class ProductListItem extends Vue {
    @Prop() productItem!: productType;
    logoDimensions : object = {
        width: '75px',
        height: '75px',
    } 
    goToDetailPage() {
        this.$emit('display-details')
    }
}
</script>

<style scoped lang="scss">
.productItem {
    height: 250px;
}
.productName{
    font-weight: bold;
    font-size: 20px;
    padding: 20px
}
.productID {
    padding-left: 20px;
}
.productID > span{
    background-color: lightgray;
}
.productBin {
    padding: 10px;
}
</style>
