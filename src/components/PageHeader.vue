<template>
    <div class="container">
        <div class = "pageTitle">
            <slot name="header"></slot>
        </div>
        <div>
            <slot name="description"></slot>
        </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {}
</script>

<style scoped lang="scss">

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  height: 60px;
  padding: 10px;
}

.pageTitle {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}


</style>