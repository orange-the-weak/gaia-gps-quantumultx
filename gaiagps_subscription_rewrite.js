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
  "endDate": "2099-12-31 09:45:04",
  "startDate": "2024-10-07 09:45:04",
  "originaltransactionid": "530001902208229",
  "transactionid": "530001902208229"
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
    "endDate": "2099-12-31 09:45:04",
    "startDate": "2024-10-07 09:45:04",
    "originaltransactionid": "530001902208229",
    "transactionid": "530001902208229"
  }
];

// 确保其他数据保持不变，并返回修改后的响应体
$done({ body: JSON.stringify(obj) });
