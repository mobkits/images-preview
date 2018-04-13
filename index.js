require('./style.css')
require('../src/style.css')
import ImagesPreivew from '../src/index'

import touch from 'has-touch'

if (!touch) alert('Please visit this page with mobile device')

let imgs = document.querySelectorAll('img')
new ImagesPreivew(imgs, {
  convert: src => {
    return src.replace(/\?\w+$/, '')
  }
})
