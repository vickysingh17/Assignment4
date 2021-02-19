<template>
<span class="errorMessage">
        <img src="../assets/error.png"> <span><slot></slot></span></span>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyError extends Vue {
    goToHome () {
        this.$router.push({name: 'Home'});
    }
}
</script>

<style scoped lang="scss">
.errorMessage > img {
    height: 15px;
    width: 15px;

}
</style>
