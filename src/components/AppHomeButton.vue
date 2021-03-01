<template>
<div>
    <img 
        src = "../assets/Home.gif"
        @click="goToHomePage()"
        class="homeButton">
</div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppHomeButton extends Vue {
    goToHomePage () {
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
