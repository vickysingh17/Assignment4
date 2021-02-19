<template>
    <div>
        <MyHeader/>
        <div class = "topContainer">
            <div>
                <div class = "title">Create Product</div>
            </div>
        </div>
        <ProductCreateItem
        class="createContainer"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductCreateItem from './ProductCreateItem.vue';
import MyHeader from './MyHeader.vue';

@Component({
    components: { ProductCreateItem,
    MyHeader }
})
export default class ProductCreate extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.topContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  height: 60px;
  padding: 10px;
}

.topContainer > button {
    height: 50px;
    width: 100px;
}
.title {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}

.createContainer {

    border: 2px solid blue;
    margin: 20px;
    height: 650px;
    width: 90vw;
}
</style>
