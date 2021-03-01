<template>
<div  v-bind:style="{backgroundColor: bgColor}">
    <img
        :src = "imageURL"
        :style="{width: logoDimensions.width,
                height:logoDimensions.height}">
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductCardLogo extends Vue {
    @Prop() productLogo!: string;
    @Prop() logoDimensions !: object;
    imageURL!: string ;
    bgColor!: string;
 
    created () {
        let cardNetworkArr = JSON.parse(<string>localStorage.getItem('cardNetwork'));
        this.imageURL = cardNetworkArr[(this.productLogo)].logoURL;
        this.bgColor = cardNetworkArr[(this.productLogo)].logoBgColor;
    }
}
</script>

