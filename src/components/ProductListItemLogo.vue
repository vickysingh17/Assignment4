<template>
<div  v-bind:style="{backgroundColor: bgColor}">
    <img
        :src = "imageURL"
        class = "logoImage">
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductListItemLogo extends Vue {
    @Prop() productLogo: string|undefined;
    imageURL : string = '';
    bgColor: string = '';
 
    created () {
        let productObjArr = JSON.parse(<string>localStorage.getItem('cardNetwork'));
        fetch(productObjArr[(<string>this.productLogo)].logoURL)
        .then(response => response.blob())
        .then(images => {
            console.log(images)
            this.imageURL = URL.createObjectURL(images); 
        })
        this.bgColor = productObjArr[(<string>this.productLogo)].logoBgColor;
    }
}
</script>

<style scoped lang="scss">
.logoImage {
    width: 75px;
    height:75px;
}
</style>
