const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  env: {
    auth: process.env.AUTH,
  },
})
