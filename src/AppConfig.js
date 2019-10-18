export default {
  apiKey: process.env.VUE_APP_API_KEY,
  endpoint: {
    signIn: process.env.VUE_APP_URL_SIGN_IN,
    signUp: process.env.VUE_APP_URL_SIGN_UP,
    refreshToken: process.env.VUE_APP_URL_REFRESH_TOKEN,
    database: process.env.VUE_APP_URL_DATABASE
  }
}