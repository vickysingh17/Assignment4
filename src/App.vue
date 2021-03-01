<template>
  <div>
    <div id="app">

      <AppLayout>
        <router-view/>
      </AppLayout>
    
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppLayout from './components/layout/AppLayout.vue'

@Component({
  components: {
    AppLayout,
  }
})
export default class Details extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

</style>
