<template>
<div>
    <div class="formHeader">
        <div class='formTitle'>Basic Information</div>
        <div>Enter the basic details about your product</div>
    </div>
    <div class="form">

        <!-- First Entry In the form-->
        <label class="label">Product Name</label>
        <div>
        <input type="text" 
            v-model="productInfo.name"
            :class= "{error : (errors.nameError.length>0)}">
        <ProductFormError v-if="(errors.nameError.length>0)">{{errors.nameError}}</ProductFormError>
        </div>

        <!-- Second Entry In the form-->
        <label class="label">Description(optional)</label>
        <textarea v-model="productInfo.description"/>

        <!-- Third Entry In the form-->
        <label class="label">Key Bundle ID</label>
        <div>
            <select v-model="productInfo.keyBundleId"
                :class= "{error : (errors.keyBundleIdError.length>0)}">
                <option value="undefined">Select Key Bundle ID</option>
                <option value ="KEY00039">KEY00039</option>
            </select>
            <ProductFormError v-if="(errors.keyBundleIdError.length>0)">{{errors.keyBundleIdError}}</ProductFormError>
        </div>

        <!-- Fourth Entry In the form-->
        <div class="cardInfo">
            <div>
                <label class="label">Card Network</label>
                <select
                    v-model="productInfo.cardNetwork"
                    :disabled='functionality==="Edit"'>
                    <option 
                        v-for="(option, index) in cardOptions"
                        :key="index"
                        :value="option">
                        {{option[0].toUpperCase() + option.slice(1)}}
                    </option>
                </select>
            </div>
            
            <!-- Fifth Entry In the form-->
            <div>
                <label class="label">Protocol Version</label>
                <select v-model="productInfo.version">
                    <option 
                        v-for="(option, index) in protocolVersionOptions"
                        :key = "index"
                        :value="option">
                        {{"3DSecure " + (index+1) + ".0"}}
                    </option>
                </select>
            </div>
        </div>
     
        <!-- Sixth Entry In the form-->
        <label class="label">AAV Algorithm</label>
        <div>
            <select v-model="productInfo.aavAlgorithm"
                :class= "{error : ( errors.aavAlgorithmError.length>0)}">
                <option 
                    v-for = "(option, index) in AAVAlogrithmOptions"
                    :key="index"
                    :value = "option">
                    {{option==="undefined" ? "Select AAV Algorithm":option}}
                </option>
                <!-- <option value ="SPA with CVC2">SPA with CVC2</option>
                <option value ="SPA with CVC2(without MerchantName hash)">SPA with CVC2(without MerchantName hash)</option>
                <option value ="SPA with HMAC">SPA with HMAC</option>
                <option value ="SPA with HMAC(without MerchantName hash)">SPA with HMAC(without MerchantName hash)</option> -->
            </select>
            <ProductFormError v-if="(errors.aavAlgorithmError.length>0)">{{errors.aavAlgorithmError}}</ProductFormError>
        </div>

        <!-- Seventh Entry In the form-->
        <label class="label">BIN No.</label>
        <div>
            <input type="text" v-model="productInfo.bin" 
                :class= "{error: (errors.binNumberError.length>0)}"
                :disabled='functionality==="Edit"'>
            <ProductFormError v-if="(errors.binNumberError.length>0)">{{errors.binNumberError}}</ProductFormError>
        </div>


        <button @click="checkErrorsAndEmit()"><slot></slot></button>
        <button
            @click="goToHomePage()">
            Cancel
        </button>

    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductFormError from './ProductFormError.vue';
import { productType, aavAlogrithmOptions, cardNetworkOptions, protocolVersions } from '../constants/constants';
// import { Error } from '../models/product.model'


type errorObjType =  {
    nameError : string,
    aavAlgorithmError: string,
    keyBundleIdError:string,
    binNumberError:string
}

@Component({
    components: {ProductFormError}
})
export default class ProductForm extends Vue {
    @Prop() productInfo!: productType;
    @Prop() functionality!: string;
    errors : errorObjType = {
        nameError : '',
        aavAlgorithmError: '',
        keyBundleIdError:'',
        binNumberError:'',
    };
    AAVAlogrithmOptions: string[] = aavAlogrithmOptions;
    cardOptions:string[] = cardNetworkOptions;
    protocolVersionOptions:string[] = protocolVersions;
    errorFound: boolean = false;
    

    goToHomePage() {
        this.$router.push({name: 'Home'});
    }

    checkErrorsAndEmit() {
        this.errors.nameError = '';
        this.errors.aavAlgorithmError = '';
        this.errors.keyBundleIdError = '';
        this.errors.binNumberError = '';
        this.errorFound = false;
        if(this.productInfo.name.length===0){
            this.errors.nameError = 'Please Enter the Product Name *';
            this.errorFound = true;
        }
        // if(this.productInfo.aavAlgorithm===undefined){
        //     this.errors.aavAlgorithmError ='You are required to have atleast AAV Algorithm *';
        //     this.errorFound = true;
        // }
        // if(this.productInfo.keyBundleId===undefined) {
        //     this.errors.keyBundleIdError = 'You are required to have atleast a Key Bundle ID *';
        //     this.errorFound = true;
        // }
        if(this.productInfo.bin.length===0){
            this.errors.binNumberError = 'BIN No. is required *';
            this.errorFound = true;
        }
        if(!this.errorFound){
            this.productInfo.config.connectorURL = `https://ciphertest.${this.productInfo.cardNetwork}-cipher.gw.zetapay.in//${this.productInfo.cardNetwork}cipher/vereq`
            this.$emit('save-changes', this.productInfo)
        }
    }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.formTitle {
    font-size: 20px;
    font-weight: bold;
    color: blue;
}

.formHeader{
    text-align: left;
    padding-left: 10px;
}

.form {
    padding: 20px;
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
    width: 700px;
    justify-content: space-between;
}

.error {
    border: 2px solid red;
}

</style>
