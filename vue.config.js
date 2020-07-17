const path =require('path')
const { assert } = require('console')

module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                pages:path.resolve(__dirname,'./src/pages'),
                assets:path.resolve(__dirname,'./src/assets'),
                styles:path.resolve(__dirname,'./src/assets/styles')
            }
        }
      }
  }