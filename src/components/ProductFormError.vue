<template>
<span class="errorMessage">
        <img src="../assets/error.png"> <span><slot/></span></span>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ProductFormError extends Vue {}
</script>

<style scoped lang="scss">

.errorMessage > img {
    height: 15px;
    width: 15px;
}
</style>
