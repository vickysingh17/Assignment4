<template>
    <div>
        <MyHeader/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyHeader from '../MyHeader.vue';

@Component({
  components : {
    MyHeader
  }
})
export default class AppLayout extends Vue {}
</script>