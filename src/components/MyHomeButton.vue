<template>
<div>
    <img 
        src = "../assets/Home.gif"
        @click="goToHome()"
        class="homeButton">
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyHomeButton extends Vue {
    goToHome () {
        this.$router.push({name: 'Home'});
    }
}
</script>

<style scoped lang="scss">
.homeButton {
    height: 50px;
    cursor: pointer;
}
</style>
