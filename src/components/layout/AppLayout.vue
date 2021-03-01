<template>
    <div>
        <div class="wrapper">
            <div>
                <img src = "../../assets/zeta-logo.jpeg">
                <span class="title">Cipher - Authentication Center</span>
            </div>
            <AppHomeButton/>
        </div>
        <slot/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHomeButton from '../AppHomeButton.vue';

@Component({
    components: {AppHomeButton}
})
export default class AppLayout extends Vue {}
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
.title{
    position: relative;
    bottom: 20px;
    left: 10px;
    color: white;
    font-size: 20px;
}
</style>
