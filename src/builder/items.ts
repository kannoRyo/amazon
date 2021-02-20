const amazonPaapi = require('amazon-paapi');

const commonParameters = {
	'AccessKey' : '<YOUR  ACCESS  KEY>',
	'SecretKey' : '<YOUR  SECRET  KEY>',
	'PartnerTag' : '<YOUR  PARTNER  TAG>', // yourtag-20
	'PartnerType': 'Associates', // Optional. Default value is Associates.
	'Marketplace': 'www.amazon.com' // Optional. Default value is US.
};

const requestParameters = {
    'ASIN' : 'B07H65KP63',
    'Resources' : [
        'ItemInfo.Title',
        'Offers.Listings.Price',
        'VariationSummary.VariationDimension'
      ]
};

/** Promise */
( async ()=>{
    console.log("Get Sale Item")
    amazonPaapi.GetVariations(commonParameters, requestParameters)
        .then((data: any) => {
            // do something with the success response.
            console.log(data);
        })
        .catch((error: any) => {
            // catch an error.
            console.log(error)
        });
})()