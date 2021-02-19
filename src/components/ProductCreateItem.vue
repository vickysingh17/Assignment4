<template>
<div>
    <div class="headerContainer">
        <div class='bodyHeader'>Basic Information</div>
        <div>Enter the basic details about your product</div>
    </div>
    <div class="container">
    <div>
    <label class="label">Product Name</label>
    <div>
    <input type="text" 
            v-model="productInfo.name"
            :class= "{error : invalidName}"
            :placeholder="errors.nameError">
            <MyError>{{errors.nameError}}</MyError>
    </div>
    </div>

    <label class="label">Description(optional)</label>
    <textarea v-model="productInfo.description"/>

    <label class="label">Key Bundle ID</label>
    <div>
    <select v-model="productInfo.keyBundleId"
    :class= "{error : invalidkeyBundleId}">
      <option value="default" selected>Select Key Bundle ID</option>
      <option value ="selected">KEY00039</option>
    </select>
    <span v-if="invalidkeyBundleId" class="errorMessage">
        <img src="../assets/error.png"> <span>{{errors.keyBundleIdError}}</span></span>
    </div>
  <div class="cardInfo">
      <div>
  <label class="label">Card Network</label>
    <select v-model="productInfo.cardNetwork">
      <option value="visa" selected>Visa</option>
      <option value="mastercard" >Mastercard</option>
      <option value="rupay">Rupay</option>
      <option value="amex">Amex</option>
      <option value="maestro">Maestro</option>
    </select>
      </div>

    <div>
    <label class="label">Protocol Version</label>
    <select v-model="productInfo.version">
      <option value="threeDSecure_1_0" selected>3DSecure 1.0</option>
      <option value="threeDSecure_2_0" >3DSecure 2.0</option>
    </select>
    </div>
    </div>
     <div>
    </div>

    <label class="label">AAV Algorithm</label>
    <div>
    <select v-model="productInfo.aavAlgorithm"
    :class= "{error : invalidaavAlgorithm}">
      <option value = "default" selected>Select AAV Algorithm</option>
      <option value ="selected">SPA with CVC2</option>
      <option value ="selected">SPA with CVC2(without MerchantName hash)</option>
      <option value ="selected">SPA with HMAC</option>
      <option value ="selected">SPA with HMAC(without MerchantName hash)</option>
    </select>
    <span v-if="invalidaavAlgorithm" class="errorMessage">
        <img src="../assets/error.png"> <span>{{errors.aavAlgorithmError}}</span></span>
    </div>
    <label class="label">BIN No.</label>
    <div>
    <input type="text" v-model="productInfo.bin" 
    :class= "{error : invalidBinNumber}"
    :placeholder="errors.binNumberError">
    <span v-if="invalidBinNumber" class="errorMessage">
        <img src="../assets/error.png"> <span>{{errors.binNumberError}}</span></span>
    </div>
    <button @click.prevent="updateAndReturnHome()">Create</button>
    <button
        @click="goToHome()">Cancel</button>

</div>
</div>	
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyError from './MyError.vue'

@Component({
    components: {MyError}
})
export default class ProductCreateItem extends Vue { 
    productInfo = { version: "threeDSecure_1_0",
                    cardNetwork: "visa",
                    id: 'PR' + Math.floor(7 + Math.random() * 10000),
                    config: {
                        connectorURL: '',
                    },
                    aavAlgorithm: "default",
                    keyBundleId: "default",
                    name:'',
                    description: '',
                    bin: '',

                };
    errors =  {nameError : '',
    aavAlgorithmError: '',
    keyBundleIdError:'',
    binNumberError:''};
    invalidName: boolean = false;
    invalidBinNumber: boolean = false;
    invalidaavAlgorithm: boolean = false;
    invalidkeyBundleId: boolean = false;

    updateAndReturnHome() {
        console.log('BUTTON CLICKED');


        this.invalidName = false;
        this.invalidaavAlgorithm = false;
        this.invalidkeyBundleId = false;
        this.invalidBinNumber = false;
        if(this.productInfo.name.length===0){
            this.errors.nameError = 'Please Enter the Product Name *';
            this.invalidName = true;
        }
        if(this.productInfo.aavAlgorithm==="default"){
            this.errors.aavAlgorithmError ='You are required to have atleast AAV Algorithm *';
            this.invalidaavAlgorithm = true;
        }
        if(this.productInfo.keyBundleId==="default") {
            this.errors.keyBundleIdError = 'You are required to have atleast a Key Bundle ID *';
            this.invalidkeyBundleId = true;
        }
        if(this.productInfo.bin.length===0){
            this.errors.binNumberError = 'BIN No. is required *';
            this.invalidBinNumber = true;
        }
        this.productInfo.config.connectorURL = `https://ciphertest.${this.productInfo.cardNetwork}-cipher.gw.zetapay.in//${this.productInfo.cardNetwork}cipher/vereq`
        console.log(this.productInfo);
        console.log(this.errors);


    }

    goToHome() {
        this.$router.push({name: 'Home'});
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
  width: 700px;
}

input[type=text]{
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 4px;
  box-sizing: border-box;
}

select {
    width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
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
    display: block;
}

.label {
    font-weight: bold;
}

.cardInfo {
    display: flex;
    justify-content: space-between;
}
.error {
    border: 2px solid red;
}

.errorMessage{
    color: red;
    padding-left: 10px;
}
.errorMessage > img {
    height: 15px;
    width: 15px;

}
</style>
