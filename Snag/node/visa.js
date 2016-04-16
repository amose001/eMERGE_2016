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
    "senderPrimaryAccountNumber": "4005520000011126",
    "senderCardExpiryDate": "2020-03",
    "senderCurrencyCode": "USD",
    "amount": "100",
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