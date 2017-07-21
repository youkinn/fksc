var path = require('path')
var ROOT = path.resolve(__dirname)

module.exports = {
  'index/main': {
    src: `${ROOT}/src/index/main`,
    tpl: 'index.html',
  },
  'page1/main': {
    src: `${ROOT}/src/page1/main`,
    tpl: 'page1.html',
  },
  'page2/main': {
    src: `${ROOT}/src/page2/main`,
    tpl: 'page2.html',
  },
  'page3/main': {
    src: `${ROOT}/src/page3/main`,
    tpl: 'page3.html',
  },
  'carNew/main': {
    src: `${ROOT}/src/carNew/main`,
    tpl: 'carNew.html',
  },
  'carNewDetail/main': {
    src: `${ROOT}/src/carNewDetail/main`,
    tpl: 'carNewDetail.html',
  },
  'carShow/main': {
    "src": ROOT + '/src/carShow/main',
    "tpl": "carShow.html"
  },
  'trackShow/main': {
    "src": ROOT + '/src/trackShow/main',
    "tpl": "trackShow.html"
  },
  'aboutOurs/main': {
    "src": ROOT + '/src/aboutOurs/main',
    "tpl": "aboutOurs.html"
  }
}
