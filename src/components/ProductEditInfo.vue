<template>
<div>
    <div class="headerContainer">
        <div class='bodyHeader'>Basic Information</div>
        <div>Enter the basic details about your product</div>
    </div>
    <div class="container">
    <div>
    <label class="label">Product Name</label>
    <input type="text" v-model="productInfo.name">
    </div>

    <label class="label">Description</label>
    <textarea v-model="productInfo.description"/>

    <label class="label">Key Bundle ID</label>
    <select>
      <option value="default" selected>Select Key Bundle ID</option>
      <option value ="selected">KEY00039</option>
    </select>
  <div>
  <label class="label">Card Network</label>
    <select disabled>
      <option>{{productInfo.cardNetwork}}</option>
    </select>

    <label class="label">Protocol Version</label>
    <select v-model="productInfo.version">
      <option value="threeDSecure_1_0" :selected='productInfo.version === "threeDSecure_1_0"'>3DSecure 1.0</option>
      <option value="threeDSecure_2_0" :selected='productInfo.version === "threeDSecure_2_0"'>3DSecure 2.0</option>
    </select>
    </div>

    <label class="label">BIN No.</label>
    <input type="text" v-model="productInfo.bin" disabled>
    <button @click="updateAndReturnHome()">Update</button>
    <button
        @click="goToDetail()">Cancel</button>
</div>
</div>	
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ProductDetailBasic extends Vue {
    @Prop() productInfo: any;  
    
    goToDetail() {
        this.$router.push({name: 'Home'});
    }

    updateAndReturnHome() {
        let productObjArr = JSON.parse(<string>localStorage.getItem('dataId'));
        for(let i=0 ; i<productObjArr.length ; i++) {
            if(productObjArr[i].id === this.productInfo.id) {
                productObjArr[i] = this.productInfo;
                break;
            }
        }
        localStorage.setItem('dataId', JSON.stringify(productObjArr));
        this.$router.go(-2);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.bodyHeader {
    font-size: 20px;
    font-weight: bold;
    color: blue;
}

.headerContainer{
    text-align: left;
    padding-left: 10px;
}

div.container {
  border-radius: 5px;
  padding: 20px;
  width: 500px;
}

input[type=text], select {
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100px;
  background-color: blue;
  color: white;
  padding: 10px 20px;
  margin: 5px 0;
  border: none;
  cursor: pointer;
  margin-right: 20px;
}

textarea {
    width: 500px;
    height:100px;
}

.label {
    font-weight: bold;
}
</style>
