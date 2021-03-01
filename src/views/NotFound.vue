<template>
  <div>
    <h1>Not Found!</h1>
    <img src = "../assets/404-error-page-not-found.jpg"/>
    <p>
      Please check the URL
    </p>
  </div>
</template>

<script>

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {}
</script>

<style scoped lang="scss">

    div {
        text-align: center;
    }

    img {
      width: 500px;
      height: 500px;
    }

    p {
        font-size: 30px;

    }

    h1 {
        color: red;
    }

</style>