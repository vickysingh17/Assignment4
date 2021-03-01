export const productData = [
    {
      id: 'PRO00001',
      name: 'First Product',
      bin: '486521',
      cardNetwork: 'rupay',
      config: {
        connectorURL: 'https://ciphertest.rupay-cipher.gw.zetapay.in//rupaycipher/vereq',
      },
      description: 'Test description for First Product',
      version: 'threeDSecure_1_0',
      authPlans: ['swipe_to_pay', 'sms_otp'],
    },
    {
      id: 'PRO00002',
      name: 'Second Product',
      bin: '375961',
      cardNetwork: 'mastercard',
      config: {
        connectorURL: 'https://ciphertest.mastercard-cipher.gw.zetapay.in//mastercardcipher/vereq',
      },
      description: 'Test description for Second Product',
      version: 'threeDSecure_1_0',
      authPlans: ['swipe_to_pay', 'super_pin', 'sms_otp', 'email_otp'],
    },
    {
      id: 'PRO00003',
      name: 'Third Product',
      bin: '389065',
      cardNetwork: 'mastercard',
      config: {
        connectorURL: 'https://ciphertest.mastercard-cipher.gw.zetapay.in//mastercardcipher/vereq',
      },
      description: 'Test description for Third Product',
      version: 'threeDSecure_2_0',
      authPlans: ['sms_otp'],
    },
    {
      id: 'PRO00004',
      name: 'Fourth Product',
      bin: '665121',
      cardNetwork: 'visa',
      config: {
        connectorURL: 'https://ciphertest.visa-cipher.gw.zetapay.in//visacipher/vereq',
      },
      description: 'Test description for Fourth Product',
      version: 'threeDSecure_2_0',
      authPlans: ['super_pin'],
    },
    {
      id: 'PRO00005',
      name: 'Fifth Product',
      bin: '378255',
      cardNetwork: 'amex',
      config: {
        connectorURL: 'https://ciphertest.amex-cipher.gw.zetapay.in//amexcipher/vereq',
      },
      description: 'Test description for Fifth Product',
      version: 'threeDSecure_1_0',
      authPlans: ['swipe_to_pay', 'super_pin'],
    },
    {
      id: 'PRO00006',
      name: 'Sixth Product',
      bin: '981292',
      cardNetwork: 'maestro',
      config: {
        connectorURL: 'https://ciphertest.maestro-cipher.gw.zetapay.in//maestrocipher/vereq',
      },
      description: 'Test description for Sixth Product',
      version: 'threeDSecure_2_0',
      authPlans: ['email_otp'],
    },
];
  
export const cardNetworkLogos =  {
    "amex": {
        "logoURL": "https://s3-ap-southeast-1.amazonaws.com/cipher.zeta/card-network-logos/amex-white.png",
        "logoBgColor": "rgb(0, 38, 99)"
    },
    "visa": {
        "logoURL": "https://s3-ap-southeast-1.amazonaws.com/cipher.zeta/card-network-logos/visa-white.png",
        "logoBgColor": "rgb(21, 25, 90)"
    },
    "mastercard": {
        "logoURL": "https://s3-ap-southeast-1.amazonaws.com/cipher.zeta/card-network-logos/maastercard%403x.png",
        "logoBgColor": "rgb(0, 0, 0)"
    },
    "rupay": {
        "logoURL": "https://s3-ap-southeast-1.amazonaws.com/cipher.zeta/card-network-logos/rupay-white.png",
        "logoBgColor": "rgb(67, 66, 68)"
    },
    "maestro": {
        "logoURL": "https://s3-ap-southeast-1.amazonaws.com/cipher.zeta/card-network-logos/maestro%403x.png",
        "logoBgColor": "rgb(35, 31, 32)"
    }
}

export const aavAlogrithmOptions = ["undefined", "SPA with CVC2" , "SPA with CVC2(without MerchantName hash)", 
                            "SPA with HMAC", "SPA with HMAC(without MerchantName hash)"];

export const cardNetworkOptions = ["visa", "mastercard", "rupay", "amex", "maestro"];

export const protocolVersions = [ "threeDSecure_1_0", "threeDSecure_2_0"];

export type productType = {
    version: string;
    cardNetwork: string;
    id: string;
    config: {
        connectorURL: string,
    };
    aavAlgorithm: string|undefined;
    keyBundleId: string|undefined;
    name:string;
    description: string;
    bin: string;
    authPlans: string[]
};

export function getDefaultOject():productType {
    return { 
        version: "threeDSecure_1_0",
        cardNetwork: "visa",
        id: 'PR' + Math.floor(7 + Math.random() * 10000),
        config: {
            connectorURL: '',
        },
        aavAlgorithm: undefined,
        keyBundleId: undefined,
        name:'',
        description: '',
        bin: '',
        authPlans: [],
    };
}