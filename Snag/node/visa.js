// JavaScript source code
var request = require('request');
var req = request.defaults();
var sandboxAPI = 'https://sandbox.api.visa.com/visadirect/mvisa/v1/cashinpushpayments';
var sandboxAPI2 = 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions';
var userId = 'UTTPMHS47FFEUSL29GQF21nyX4jXV6hLyCojGskoda56LrKRE';
var password = 's0rxBnG5D191MFt1f7Aqx5';

var data = JSON.stringify({
    "systemsTraceAuditNumber": "451001",
    "retrievalReferenceNumber": "330000550000",
    "localTransactionDateTime": "2016-01-21T13:32:01",
    "acquiringBin": "408999",
    "acquirerCountryCode": "840",
    "senderPrimaryAccountNumber": "4895142232120006",
    "senderCardExpiryDate": "2015-10",
    "senderCurrencyCode": "USD",
    "amount": "124.02",
    "businessApplicationId": "AA",
    "surcharge": "11.99",
    "foreignExchangeFeeTransaction": "11.99",
    "cavv": "0700100038238906000013405823891061668252",
    "cardAcceptor": {
        "name": "Visa Inc. USA-Foster City",
        "terminalId": "ABCD1234",
        "idCode": "ABCD1234ABCD123",
        "address": {
            "state": "CA",
            "county": "San Mateo",
            "country": "USA",
            "zipCode": "94404"
        }
    }
});

req.post({
    uri : sandboxAPI2,
    key: fs.readFileSync(keyFile),
    cert: fs.readFileSync(certificateFile),
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
    },
    body: data
}, function(error, response, body) {
   
}
);