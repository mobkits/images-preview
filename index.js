require('./style.css')
import ImagesPreivew from '../src/index'

let imgs = document.querySelectorAll('img')
new ImagesPreivew(imgs, {
  convert: src => {
    return src.replace(/-\w+$/, '')
  }
})
