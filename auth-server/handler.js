'use strict';

const axios = require('axios');

const meetupClientId = 'evqsptoae0qi6fh5v0fbivg7mq';
const meetupClientSecret = 'jj9slfh9hkag3e3sgjdfu9ccmc';

module.exports.getAccessToken = async event => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access' +
    '?client_id=' + meetupClientId +
    '&client_secret=' + meetupClientSecret +
    '&grant_type=authorization_code' +
    '&redirect_uri=https://zaclinz.github.io/meetup/' +
    '&code=' + event.pathParameters.code;

    const info = await axios.post(MEETUP_OAUTH_URL);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080"
      },
      body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token,
      }),
    };
};
module.exports.refreshAccessToken = async event => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access' +
    '?client_id=' + meetupClientId +
    '&client_secret=' + meetupClientSecret +
    '&grant_type=refresh_token' +
    '&refresh_token=' + event.pathParameters.code;

    const info = await axios.post(MEETUP_OAUTH_URL);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token,
      }),
    };
};
