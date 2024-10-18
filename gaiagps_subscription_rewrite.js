var obj = JSON.parse($response.body);

// 修改订阅信息
obj.subscription = {
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
};

// 修改其他订阅信息
obj.other_subscriptions = [
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
];

// 更新响应
$done({ body: JSON.stringify(obj) });
