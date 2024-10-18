
async function onResponse(context, url, request, response) {
  // console.log(response);

  // Update or Add new headers
  // response.headers["Content-Type"] = "application/json";

  // Update status Code
  // response.statusCode = 500;

  // Update Body
  var body = response.body;
//   body["new-key"] = "Proxyman";
  body={
  "user": {
    "id": 999,
    "email": "premium@gaia.com",
    "email_opt_in": null,
    "has_password": true,
    "upload_logs": false,
    "verbose_logging": false
  },
  "code": 1000,
  "appcode": "gaia",
  "dataset": "gaiagreen",
  "subscription": {
    "created": "2024-10-07",
    "desc": "Gaia GPS premium subscription for one year.",
    "appname": "gaiang",
    "dataset": "gaiagreen",
    "autorenewing": true,
    "name": "Gaia GPS Premium",
    "trial": false,
    "identifier": "GaiaGPSPremiumApple",
    "canceled": false,
    "provider": "appstore",
    "endDate": "2099-10-14 09:45:04",
    "startDate": "2024-10-07 09:45:04",
    "originaltransactionid": "530001909808229",
    "transactionid": "530001909808229"
  },
  "other_subscriptions": [
    {
      "created": "2024-10-07",
      "desc": "Gaia GPS premium subscription for one year.",
      "appname": "gaiang",
      "dataset": "gaiagreen",
      "autorenewing": true,
      "name": "Gaia GPS Premium",
      "trial": false,
      "identifier": "GaiaGPSPremiumApple",
      "canceled": false,
      "provider": "appstore",
      "endDate": "2099-10-14 09:45:04",
      "startDate": "2024-10-07 09:45:04",
      "originaltransactionid": "530001909808229",
      "transactionid": "530001909808229"
    }
  ],
  "purchases": []
}

  response.body = body;

  // Or map a local file as a body
  // response.bodyFilePath = "~/Desktop/myfile.json"

  // Done
  return response;
}
