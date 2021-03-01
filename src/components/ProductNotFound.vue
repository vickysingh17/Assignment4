<template>
  <div>
    <h1>Not Found!</h1>
    <img src = "../assets/no-product-found.jpg"/>
    <p>
      Please return to Home page to view the Products available to you
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Details extends Vue {}
</script>


<style scoped lang="scss">
div {
    text-align: center;
}

p {
    font-size: 30px;
}   

h1 {
    color: red;
    font-weight: bold;
}

</style>