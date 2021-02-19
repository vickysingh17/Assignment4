<template>
<div 
    @click="goToDetail()"
    class="productItem">
    <ProductListItemLogo :productLogo="productItem.cardNetwork"/>
    <div class = "productName">{{productItem.name}}</div>
    <div class="productID"> 
        <span>{{productItem.id}}</span>
    </div>
    <div class = "productBin"> BIN-{{productItem.bin}}</div>
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductListItemLogo from './ProductListItemLogo.vue';

@Component({
    components: {ProductListItemLogo}
})
export default class ProductsInfoItem extends Vue {
    @Prop() productItem: object|undefined;

    goToDetail() {
        this.$emit('display-details')
    }
}
</script>

<style scoped lang="scss">
.productItem {
    height: 200px
}
.productName{
    font-weight: bold;
    font-size: 30px;
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
