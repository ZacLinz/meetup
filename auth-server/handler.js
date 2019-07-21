'use strict';

const axios = require('axios');

module.exports.refreshAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + 'client_id=eb1ec6sm3a9fe3bgq6hk3up5lg'
    + '&client_secret=iekuvfc59414fp7kedrqobt2h7'
    + '&grant_type=refresh_token'
    + '&refresh_token=REFRESH_TOKEN_YOU_RECEIVED_FROM_ACCESS_RESPONSE'

    const info = await axios.post(MEETUP_OAUTH_URL);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        access_token: info.data.access_token,
        refresh_token: info.data.refresh_token,
      }),
    };
}

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=eb1ec6sm3a9fe3bgq6hk3up5lg'
    + '&client_secret=iekuvfc59414fp7kedrqobt2h7'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://zaclinz.github.io/meetup'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
