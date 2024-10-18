
async function onResponse(context, url, request, response) {

  response.body = {
    "user": {
      "id": 6741313,
      "email": "premium@gaia.com",
      "has_password": true
    },
    "code": 1000,
    "subscription": {
      "endDate": "2099-12-31 09:45:04",
      "startDate": "2024-10-07 09:45:04",
      "name": "Gaia GPS Premium",
      "autorenewing": true
    }
  };
  
  // Return modified response
  return response;
}
