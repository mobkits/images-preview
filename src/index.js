require('./style.css')
import radio from 'radio-component'
import query  from 'query'
import event from 'event'
import raf from 'raf'
import Tween from 'tween'
import Emitter from 'emitter'
import tap from 'tap-event'
import PinchZoom from 'pinch-zoom'
import assign from 'object-assign'
import spin from './spin'
import domify from 'domify'
import detect from 'prop-detect'

const has3d = detect.has3d
const transform = detect.transform
const doc = document

class ImagesPreview extends Emitter {
  constructor(imgs, opts) {
    super()
    this.opts = opts
    this.imgs = Array.prototype.slice.call(imgs)
    this._ontap = tap(this.ontap.bind(this))
    this.status = []
    event.bind(document, 'touchstart', this._ontap)
  }
  ontap(e) {
    let el = e.target
    let idx = this.imgs.indexOf(el)
    if (idx !== -1) {
      this.show()
      this.active(el, idx)
    }
  }
  show() {
    let div = this.container = document.createElement('div')
    div.id = 'images-preview'
    let vw = Math.max(doc.documentElement.clientWidth, window.innerWidth || 0)
    div.style.width = (vw*this.imgs.length + 40) + 'px'
    this.setTransform(-20)
    document.body.appendChild(div)
    let dots = this.dots = domify(`<div class="preview-dots"><ul></ul></div>`)
    document.body.appendChild(dots)
    let ul = query('ul', dots)
    let fragment = document.createDocumentFragment()
    for (let i = 0, l = this.imgs.length; i < l; i++) {
      ul.appendChild(document.createElement('li'))
      let el = document.createElement('div')
      el.style.width = `${vw}px`
      let wrapper = document.createElement('div')
      let src = this.imgs[i].src
      wrapper.className = 'wrapper'
      wrapper.appendChild(domify(`
      <div class="mask" style="background-image:url('${src}')">
      </div>`))
      let rect = this.imgs[i].getBoundingClientRect()
      assign(wrapper.style, {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        left: `${(vw - rect.width)/2}px`,
        marginTop: `-${rect.height/2}px`
      })
      el.appendChild(wrapper)
      fragment.appendChild(el)
    }
    div.appendChild(fragment)
    this.zooms = []
  }
  active(img, idx) {
    let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    let state = this.status[idx]
    let wrapper = this.container.querySelectorAll('.wrapper')[idx]
    radio(this.dots.querySelectorAll('li')[idx])
    // not loaded
    if (!state) {
      let tx = idx*vw
      this.setTransform(- tx - 20)
      this.status[idx] = 'loading'
      let image = document.createElement('img')
      image.className = 'image'
      let convert = this.opts.convert || function (src) {
        return src
      }
      image.src = convert(img.src)
      wrapper.appendChild(image)
      let pz = new PinchZoom(wrapper, {
        tapreset: true,
        draggable: true,
        maxScale: 4
      })
      pz.on('swipe', dir => {
        let i = dir == 'left' ? idx + 1 : idx - 1
        i = Math.max(0, i)
        i = Math.min(this.imgs.length - 1 , i)
        this.animate(- i*vw - 20).then(() => {
          let img = this.imgs[i]
          this.active(img, i)
        })
      })
      pz.on('move', dx => {
        let x = - 20 - tx - dx
        x = Math.min(20, x)
        x = Math.max(-40 - (this.imgs.length - 1)*vw, x)
        this.setTransform(x)
        if (dx != 0) pz.speed = 0
      })
      pz.on('tap', this.hide.bind(this))
      pz.on('end', () => {
        let idx = Math.round((- this.tx - 20)/vw)
        this.animate(- idx*vw - 20).then(() => {
          let img = this.imgs[idx]
          this.active(img, idx)
        })
      })
      this.zooms.push(pz)

      this.loadImage(image, wrapper)
    }
  }
  loadImage(image, wrapper) {
    let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (image.complete) {
      let dims = imgDimension(image)
      let h = vw*dims.height/dims.width
      let mask = query('.mask', wrapper)
      if (mask) wrapper.removeChild(mask)
      assign(wrapper.style, {
        left: 0,
        width: `${vw}px`,
        height: `${h}px`,
        marginTop: `-${h/2}px`
      })
      return Promise.resolve(dims)
    } else {
      let spinEl = domify(` <div class="spin"></div>`)
      let mask = query('.mask', wrapper)
      mask.appendChild(spinEl)
      let stop = spin(spinEl, {
        color: '#ffffff',
        duration: 1000,
        width: 4
      })
      return new Promise((resolve, reject) => {
        image.onload = () => {
          stop()
          wrapper.removeChild(mask)
          let dims = imgDimension(image)
          let h = vw*dims.height/dims.width
          assign(wrapper.style, {
            left: 0,
            width: `${vw}px`,
            height: `${h}px`,
            marginTop: `-${h/2}px`
          })
          resolve(dims)
        }
        image.onerror = (e) => {
          reject(e)
        }
      })
    }
  }
  setTransform(x) {
    let el = this.container
    this.tx = x
    if (has3d) {
      el.style[transform] = `translate3d(${x}px,0,0)`
    } else {
      el.style[transform] = `translate(${x}px)`
    }
  }
  animate(x, duration = 200, ease = 'out-circ') {
    if (x == this.tx) return Promise.resolve(null)
    this.animating = true
    this.zooms.forEach(pz => pz.animating = true)
    var tween = this.tween = Tween({x: this.tx})
      .ease(ease)
      .to({x: x})
      .duration(duration)

    tween.update(function(o) {
      self.setTransform(o.x)
    })
    let self = this
    var promise = new Promise(function (resolve) {
      tween.on('end', function(){
        self.zooms.forEach(pz => pz.animating = false)
        animate = function(){} // eslint-disable-line
        self.animating = false
        resolve()
      })
    })

    function animate() {
      raf(animate)
      tween.update()
    }

    animate()
    return promise
  }
  hide() {
    if (this.dots) document.body.removeChild(this.dots)
    this.zooms.forEach(pz => {
      pz.unbind()
    })
    this.zooms = []
    this.status = []
    this.container.style.backgroundColor = 'rgba(0,0,0,0)'
    setTimeout(() => {
      document.body.removeChild(this.container)
    }, 300)
  }
  unbind() {
    event.unbind(document, 'touchstart', this._ontap)
  }
}

function imgDimension(image) {
  if (image.naturalWidth) {
    return {
      height: image.naturalHeight,
      width: image.naturalWidth
    }
  } else {
    let i = new Image()
    i.src = image.src;
    return {
      height: i.height,
      width: i.width
    }
  }
}

export default ImagesPreview
