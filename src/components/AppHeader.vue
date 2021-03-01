<template>
    <div class="wrapper">
        <div class>
            <img src = "../assets/zeta-logo.jpeg">
            <span class="heading">Cipher - Authentication Center</span>
        </div>
        <AppHomeButton/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHomeButton from './AppHomeButton.vue';

@Component({
    components: {AppHomeButton}
})
export default class  extends Vue {}
</script>

<style scoped lang="scss">
.wrapper {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
}
.wrapper img {
    height: 100%
}
.wrapper > div {
    height: 50px;
    text-align: center;
}
.heading{
    position: relative;
    bottom: 20px;
    left: 10px;
    color: white;
    font-size: 20px;
}
</style>
