const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: ['./src', './styles'],
    prependData: `@import "./styles/globals/tools/index.scss";`,
  },
}