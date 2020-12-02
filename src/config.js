const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK, SERVER_API_URL } = process.env

export default {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: 'http://localhost:8080/login/callback',
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        testing: {
            disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
        }
    },
    API_URL: SERVER_API_URL,
    resourceServer: {
        messagesUrl: 'http://localhost:8000/api/messages'
    }
}