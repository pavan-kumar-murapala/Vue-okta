const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;

export default {
    oidc: {
        clientId: CLIENT_ID ? CLIENT_ID : '0oamuj109h3dNrQxe5d5',
        issuer: ISSUER ? ISSUER : 'https://dev-4781752.okta.com/oauth2/default',
        redirectUri: "http://localhost:8080/login/callback",
        scopes: ["openid", "profile", "email"],
        pkce: true,
        testing: {
            disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
        }
    },
    resourceServer: {
        messagesUrl: "http://localhost:8000/api/messages"
    }
};