export const oktaConfig = {
    clientId: '0oa84yk5elb63cuet5d7',
    issuer: 'https://dev-15492567.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}