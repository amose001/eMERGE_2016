// JavaScript source code
var request = require('request');
var fs = require('file-system');
var req = request.defaults();
//var sandboxAPI = 'https://sandbox.api.visa.com/visadirect/mvisa/v1/cashinpushpayments';
var sandboxAPI2 = 'https://sandbox.api.visa.com/visadirect/fundstransfer/v1/pullfundstransactions';
var userId = 'UTTPMHS47FFEUSL29GQF21nyX4jXV6hLyCojGskoda56LrKRE';
var password = 's0rxBnG5D191MFt1f7Aqx5';
var keyFile = 'keys\\key_Test.pem';
var certificateFile = 'keys\\cert.pem';
var date = new Date();

/*
var data = JSON.stringify({
    "systemsTraceAuditNumber": "451001",
    "feeProgramIndicator": '123',
    "retrievalReferenceNumber": "330000550000",
    "localTransactionDateTime": date.toDateString,
    "acquiringBin": "408999",
    "acquirerCountryCode": "840",
    "senderPrimaryAccountNumber": "4005520000011126",
    "senderCardExpiryDate": "2020-03",
    "senderCurrencyCode": "USD",
    "amount": "100",
    "merchantCategoryCode":'6012',
    "transactionIdentifier":'381228649430011',
    "magneticStripeData": '4008310000000007D130310191014085',
    "pointOfServiceData":'90',
    "pointOfServiceCapability":	'2',
    "businessApplicationId": "AA",
    "surcharge": "11.99",
    "foreignExchangeFeeTransaction": "11.99",
    "cavv": "0000010926000071934977253000000000000000",
    "cardAcceptor": {
        "name": "Acceptor 1",
        "terminalId": "365539",
        "idCode": "ABCD1234ABCD123",
        "address": {
            "state": "CA",
            "county": "San Mateo",
            "country": "USA",
            "zipCode": "94404"
        }
    }
});
*/

var data = JSON.stringify({

  "acquirerCountryCode": "840",
  "acquiringBin": "408999",
  "amount": "124.02",
  "businessApplicationId": "AA",
  "cardAcceptor": {
    "address": {
      "country": "USA",
      "county": "San Mateo",
      "state": "CA",
      "zipCode": "94404"
    },
    "idCode": "ABCD1234ABCD123",
    "name": "Visa Inc. USA-Foster City",
    "terminalId": "ABCD1234"
  },
  "cavv": "0700100038238906000013405823891061668252",
  "foreignExchangeFeeTransaction": "11.99",
  "localTransactionDateTime": "2016-04-16T17:54:35",
  "retrievalReferenceNumber": "330000550000",
  "senderCardExpiryDate": "2015-10",
  "senderCurrencyCode": "USD",
  "senderPrimaryAccountNumber": "4895142232120006",
  "surcharge": "11.99",
  "systemsTraceAuditNumber": "451001"
})


//function buy() {
    req.post({
        uri: sandboxAPI2,
        key: fs.readFileSync(keyFile),
        cert: fs.readFileSync(certificateFile),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
        },
        body: data
    }, function (error, response, body) {
        if (!error) {
            console.log("Response Code: " + response.statusCode);
            console.log("Headers:");
            for (var item in response.headers) {
                console.log(item + ": " + response.headers[item]);
            }
            console.log("Body: " + body);
        } else {
            console.log("Got error: " + error.message);
        }
    }
    );
//}