
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lfgc851-product-card.cjs.production.min.js')
} else {
  module.exports = require('./lfgc851-product-card.cjs.development.js')
}
