'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radioComponent = require('radio-component');

var _radioComponent2 = _interopRequireDefault(_radioComponent);

var _query = require('query');

var _query2 = _interopRequireDefault(_query);

var _event = require('event');

var _event2 = _interopRequireDefault(_event);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _tween = require('tween');

var _tween2 = _interopRequireDefault(_tween);

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _tapEvent = require('tap-event');

var _tapEvent2 = _interopRequireDefault(_tapEvent);

var _pinchZoom = require('pinch-zoom');

var _pinchZoom2 = _interopRequireDefault(_pinchZoom);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _spin = require('./spin');

var _spin2 = _interopRequireDefault(_spin);

var _domify = require('domify');

var _domify2 = _interopRequireDefault(_domify);

var _propDetect = require('prop-detect');

var _propDetect2 = _interopRequireDefault(_propDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');


var has3d = _propDetect2.default.has3d;
var transform = _propDetect2.default.transform;
var doc = document;

var ImagesPreview = function (_Emitter) {
  _inherits(ImagesPreview, _Emitter);

  function ImagesPreview(imgs, opts) {
    _classCallCheck(this, ImagesPreview);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImagesPreview).call(this));

    _this.opts = opts;
    _this.imgs = Array.prototype.slice.call(imgs);
    _this._ontap = (0, _tapEvent2.default)(_this.ontap.bind(_this));
    _this.status = [];
    _event2.default.bind(document, 'touchstart', _this._ontap);
    return _this;
  }

  _createClass(ImagesPreview, [{
    key: 'ontap',
    value: function ontap(e) {
      var el = e.target;
      var idx = this.imgs.indexOf(el);
      if (idx !== -1) {
        this.show();
        this.active(el, idx);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var div = this.container = document.createElement('div');
      div.id = 'images-preview';
      var vw = Math.max(doc.documentElement.clientWidth, window.innerWidth || 0);
      div.style.width = vw * this.imgs.length + 40 + 'px';
      this.setTransform(-20);
      document.body.appendChild(div);
      var dots = this.dots = (0, _domify2.default)('<div class="preview-dots"><ul></ul></div>');
      document.body.appendChild(dots);
      var ul = (0, _query2.default)('ul', dots);
      var fragment = document.createDocumentFragment();
      for (var i = 0, l = this.imgs.length; i < l; i++) {
        ul.appendChild(document.createElement('li'));
        var el = document.createElement('div');
        el.style.width = vw + 'px';
        var wrapper = document.createElement('div');
        var src = this.imgs[i].src;
        wrapper.className = 'wrapper';
        wrapper.appendChild((0, _domify2.default)('\n      <div class="mask" style="background-image:url(\'' + src + '\')">\n      </div>'));
        var rect = this.imgs[i].getBoundingClientRect();
        (0, _objectAssign2.default)(wrapper.style, {
          width: rect.width + 'px',
          height: rect.height + 'px',
          left: (vw - rect.width) / 2 + 'px',
          marginTop: '-' + rect.height / 2 + 'px'
        });
        el.appendChild(wrapper);
        fragment.appendChild(el);
      }
      div.appendChild(fragment);
      this.zooms = [];
    }
  }, {
    key: 'active',
    value: function active(img, idx) {
      var _this2 = this;

      var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var state = this.status[idx];
      var wrapper = this.container.querySelectorAll('.wrapper')[idx];
      (0, _radioComponent2.default)(this.dots.querySelectorAll('li')[idx]);
      // not loaded
      if (!state) {
        (function () {
          var tx = idx * vw;
          _this2.setTransform(-tx - 20);
          _this2.status[idx] = 'loading';
          var image = document.createElement('img');
          image.className = 'image';
          var convert = _this2.opts.convert || function (src) {
            return src;
          };
          image.src = convert(img.src);
          wrapper.appendChild(image);
          var pz = new _pinchZoom2.default(wrapper, {
            tapreset: true,
            draggable: true,
            maxScale: 4
          });
          pz.on('swipe', function (dir) {
            var i = dir == 'left' ? idx + 1 : idx - 1;
            i = Math.max(0, i);
            i = Math.min(_this2.imgs.length - 1, i);
            _this2.animate(-i * vw - 20).then(function () {
              var img = _this2.imgs[i];
              _this2.active(img, i);
            });
          });
          pz.on('move', function (dx) {
            var x = -20 - tx - dx;
            x = Math.min(20, x);
            x = Math.max(-40 - (_this2.imgs.length - 1) * vw, x);
            _this2.setTransform(x);
            if (dx != 0) pz.speed = 0;
          });
          pz.on('tap', _this2.hide.bind(_this2));
          pz.on('end', function () {
            var idx = Math.round((-_this2.tx - 20) / vw);
            _this2.animate(-idx * vw - 20).then(function () {
              var img = _this2.imgs[idx];
              _this2.active(img, idx);
            });
          });
          _this2.zooms.push(pz);

          _this2.loadImage(image, wrapper);
        })();
      }
    }
  }, {
    key: 'loadImage',
    value: function loadImage(image, wrapper) {
      var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if (image.complete) {
        var dims = imgDimension(image);
        var h = vw * dims.height / dims.width;
        var mask = (0, _query2.default)('.mask', wrapper);
        if (mask) wrapper.removeChild(mask);
        (0, _objectAssign2.default)(wrapper.style, {
          left: 0,
          width: vw + 'px',
          height: h + 'px',
          marginTop: '-' + h / 2 + 'px'
        });
        return Promise.resolve(dims);
      } else {
        var _ret2 = function () {
          var spinEl = (0, _domify2.default)(' <div class="spin"></div>');
          var mask = (0, _query2.default)('.mask', wrapper);
          mask.appendChild(spinEl);
          var stop = (0, _spin2.default)(spinEl, {
            color: '#ffffff',
            duration: 1000,
            width: 4
          });
          return {
            v: new Promise(function (resolve, reject) {
              image.onload = function () {
                stop();
                wrapper.removeChild(mask);
                var dims = imgDimension(image);
                var h = vw * dims.height / dims.width;
                (0, _objectAssign2.default)(wrapper.style, {
                  left: 0,
                  width: vw + 'px',
                  height: h + 'px',
                  marginTop: '-' + h / 2 + 'px'
                });
                resolve(dims);
              };
              image.onerror = function (e) {
                reject(e);
              };
            })
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
    }
  }, {
    key: 'setTransform',
    value: function setTransform(x) {
      var el = this.container;
      this.tx = x;
      if (has3d) {
        el.style[transform] = 'translate3d(' + x + 'px,0,0)';
      } else {
        el.style[transform] = 'translate(' + x + 'px)';
      }
    }
  }, {
    key: 'animate',
    value: function animate(x) {
      var duration = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
      var ease = arguments.length <= 2 || arguments[2] === undefined ? 'out-circ' : arguments[2];

      if (x == this.tx) return Promise.resolve(null);
      this.animating = true;
      this.zooms.forEach(function (pz) {
        return pz.animating = true;
      });
      var tween = this.tween = (0, _tween2.default)({ x: this.tx }).ease(ease).to({ x: x }).duration(duration);

      tween.update(function (o) {
        self.setTransform(o.x);
      });
      var self = this;
      var promise = new Promise(function (resolve) {
        tween.on('end', function () {
          self.zooms.forEach(function (pz) {
            return pz.animating = false;
          });
          animate = function animate() {}; // eslint-disable-line
          self.animating = false;
          resolve();
        });
      });

      function animate() {
        (0, _raf2.default)(animate);
        tween.update();
      }

      animate();
      return promise;
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this3 = this;

      if (this.dots) document.body.removeChild(this.dots);
      this.zooms.forEach(function (pz) {
        pz.unbind();
      });
      this.zooms = [];
      this.status = [];
      this.container.style.backgroundColor = 'rgba(0,0,0,0)';
      setTimeout(function () {
        document.body.removeChild(_this3.container);
      }, 300);
    }
  }, {
    key: 'unbind',
    value: function unbind() {
      _event2.default.unbind(document, 'touchstart', this._ontap);
    }
  }]);

  return ImagesPreview;
}(_emitter2.default);

function imgDimension(image) {
  if (image.naturalWidth) {
    return {
      height: image.naturalHeight,
      width: image.naturalWidth
    };
  } else {
    var i = new Image();
    i.src = image.src;
    return {
      height: i.height,
      width: i.width
    };
  }
}

exports.default = ImagesPreview;