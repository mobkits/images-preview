/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(/*! ../src/index */ 1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _hasTouch = __webpack_require__(/*! has-touch */ 32);
	
	var _hasTouch2 = _interopRequireDefault(_hasTouch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(/*! ./style.css */ 33);
	__webpack_require__(/*! ../src/style.css */ 37);
	
	
	if (!_hasTouch2.default) alert('Please visit this page with mobile device');
	
	var imgs = document.querySelectorAll('img');
	new _index2.default(imgs, {
	  convert: function convert(src) {
	    return src.replace(/-\w+$/, '');
	  }
	});

/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _radioComponent = __webpack_require__(/*! radio-component */ 2);
	
	var _radioComponent2 = _interopRequireDefault(_radioComponent);
	
	var _query = __webpack_require__(/*! query */ 5);
	
	var _query2 = _interopRequireDefault(_query);
	
	var _event = __webpack_require__(/*! event */ 6);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _raf = __webpack_require__(/*! raf */ 7);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _tween = __webpack_require__(/*! tween */ 8);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _emitter = __webpack_require__(/*! emitter */ 13);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _tapEvent = __webpack_require__(/*! tap-event */ 14);
	
	var _tapEvent2 = _interopRequireDefault(_tapEvent);
	
	var _pinchZoom = __webpack_require__(/*! pinch-zoom */ 15);
	
	var _pinchZoom2 = _interopRequireDefault(_pinchZoom);
	
	var _objectAssign = __webpack_require__(/*! object-assign */ 28);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _domify = __webpack_require__(/*! domify */ 29);
	
	var _domify2 = _interopRequireDefault(_domify);
	
	var _closest = __webpack_require__(/*! closest */ 18);
	
	var _closest2 = _interopRequireDefault(_closest);
	
	var _events = __webpack_require__(/*! events */ 16);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _spin = __webpack_require__(/*! ./spin */ 30);
	
	var _spin2 = _interopRequireDefault(_spin);
	
	var _propDetect = __webpack_require__(/*! prop-detect */ 20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var doc = document;
	var body = doc.body;
	
	var ImagesPreview = function (_Emitter) {
	  _inherits(ImagesPreview, _Emitter);
	
	  /**
	   * Constructor
	   *
	   * @public
	   * @param {Array|DomCollection} imgs
	   * @param {Object} opts
	   */
	  function ImagesPreview(imgs) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, ImagesPreview);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImagesPreview).call(this));
	
	    _this.opts = opts;
	    // maximun duration in ms for fast swipe
	    _this.threshold = opts.threshold || 200;
	    // minimum moved distance for fast swipe
	    _this.fastThreshold = opts.fastThreshold || 30;
	    opts.convert = opts.convert || function src() {
	      return src;
	    };
	    _this.imgs = Array.prototype.slice.call(imgs);
	    _this._ontap = (0, _tapEvent2.default)(_this.ontap.bind(_this));
	    _this._containTap = (0, _tapEvent2.default)(_this.hide.bind(_this));
	    _this.status = [];
	    _this.loaded = [];
	    _this.tx = 0;
	    if (opts.bind !== false) _event2.default.bind(doc, 'touchstart', _this._ontap);
	    return _this;
	  }
	  /**
	   * ontap event handler
	   *
	   * @private
	   * @param  {Event}  e
	   */
	
	
	  _createClass(ImagesPreview, [{
	    key: 'ontap',
	    value: function ontap(e) {
	      var el = e.target;
	      var idx = this.imgs.indexOf(el);
	      if (idx !== -1) {
	        this.show();
	        this.active(el, idx, true);
	      }
	    }
	    /**
	     * Show container
	     *
	     * @public
	     */
	
	  }, {
	    key: 'show',
	    value: function show() {
	      var div = this.container = doc.createElement('div');
	      div.id = 'images-preview';
	      var vw = viewportWidth();
	      div.style.width = vw * this.imgs.length + 40 + 'px';
	      this.setTransform(-20);
	      body.appendChild(div);
	      var dots = this.dots = (0, _domify2.default)('<div class="imgs-preview-dots"><ul></ul></div>');
	      body.appendChild(dots);
	      var ul = (0, _query2.default)('ul', dots);
	      var fragment = doc.createDocumentFragment();
	      for (var i = 0, l = this.imgs.length; i < l; i++) {
	        ul.appendChild(doc.createElement('li'));
	        var el = doc.createElement('div');
	        el.style.width = vw + 'px';
	        var wrapper = doc.createElement('div');
	        var src = this.imgs[i].src;
	        wrapper.className = 'wrapper';
	        if (this.loaded.indexOf(i) !== -1) {
	          var img = this.createImage(wrapper, src);
	          img.style.display = 'block';
	          this.positionWrapper(wrapper, img);
	        } else {
	          wrapper.appendChild((0, _domify2.default)('\n        <div class="mask" style="background-image:url(\'' + src + '\')">\n        </div>'));
	          var rect = this.imgs[i].getBoundingClientRect();
	          var h = rect.height || vw;
	          var top = Math.min(div.clientHeight - 10, h) / 2;
	          (0, _objectAssign2.default)(wrapper.style, {
	            width: vw - 10 + 'px',
	            height: h + 'px',
	            left: '5px',
	            marginTop: '-' + top + 'px'
	          });
	        }
	        el.appendChild(wrapper);
	        fragment.appendChild(el);
	      }
	      div.appendChild(fragment);
	      this.zooms = [];
	      this.emit('hide');
	
	      this.events = (0, _events2.default)(div, this);
	      this.docEvents = (0, _events2.default)(document, this);
	      this.events.bind('touchstart');
	      this.events.bind('touchmove');
	      this.events.bind('touchend');
	      this.docEvents.bind('touchend', 'ontouchend');
	      _event2.default.bind(div, 'touchstart', this._containTap);
	      _event2.default.bind(doc, 'touchmove', preventDefault);
	    }
	  }, {
	    key: 'ontouchstart',
	    value: function ontouchstart(e) {
	      var _this2 = this;
	
	      var wrapper = (0, _closest2.default)(e.target, '.wrapper');
	      if (e.touches.length > 1 || wrapper) return;
	      if (this.animating) this.tween.stop();
	      var t = e.touches[0];
	      var sx = t.clientX;
	      this.down = { x: sx, at: Date.now() };
	      var tx = this.tx;
	      var vw = viewportWidth();
	      this.move = function (e, touch) {
	        var x = tx + touch.clientX - sx;
	        x = _this2.limit(x, vw);
	        _this2.setTransform(x);
	      };
	    }
	  }, {
	    key: 'ontouchmove',
	    value: function ontouchmove(e) {
	      if (e.touches.length > 1 || this.move == null) return;
	      e.preventDefault();
	      e.stopPropagation();
	      var touch = e.touches[0];
	      this.move(e, touch);
	    }
	  }, {
	    key: 'ontouchend',
	    value: function ontouchend(e) {
	      if (this.move == null) return;
	      if (this.animating) this.tween.stop();
	      var down = this.down;
	      this.move = this.down = null;
	      var touch = e.changedTouches[0];
	      var x = touch.clientX;
	      var t = Date.now();
	      if (Math.abs(x - down.x) > this.fastThreshold && t - down.at < this.threshold) {
	        var dir = down.x > x ? 'left' : 'right';
	        this.onswipe(dir);
	      } else {
	        this.restore();
	      }
	    }
	
	    /**
	     * Active a specfic image
	     *
	     * @public
	     * @param {Element} img
	     * @param {Number} idx
	     * @param {Boolean} animate = false
	     */
	
	  }, {
	    key: 'active',
	    value: function active(img, idx) {
	      var _this3 = this;
	
	      var animate = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      if (idx == null) idx = this.imgs.indexOf(img);
	      if (idx < 0 || idx > this.imgs.length - 1) return;
	      var vw = viewportWidth();
	      var state = this.status[idx];
	      this.idx = idx;
	      var wrapper = this.container.querySelectorAll('.wrapper')[idx];
	      (0, _radioComponent2.default)(this.dots.querySelectorAll('li')[idx]);
	      this.emit('active', idx);
	      var tx = idx * vw;
	      this.setTransform(-tx - 20);
	      // not loaded
	      if (!state) {
	        (function () {
	          _this3.status[idx] = 'loading';
	          if (animate) {
	            var _image = (0, _query2.default)('.image', wrapper);
	            if (_image) _image.style.display = 'none';
	            var mask = (0, _query2.default)('.mask', wrapper);
	            if (mask) mask.style.display = 'none';
	            var holder = _this3.holder = doc.createElement('div');
	            holder.className = 'imgs-preview-holder';
	            var src = img.src;
	            holder.style.backgroundImage = 'url(\'' + src + '\')';
	            var rect = img.getBoundingClientRect();
	            (0, _objectAssign2.default)(holder.style, {
	              left: rect.left + 'px',
	              top: rect.top + 'px',
	              width: rect.width + 'px',
	              height: rect.height + 'px'
	            });
	            body.appendChild(holder);
	          }
	
	          var image = _this3.createImage(wrapper, img.src);
	          if (!animate) image.style.display = 'block';
	
	          var pz = new _pinchZoom2.default(wrapper, {
	            threshold: _this3.threshold,
	            fastThreshold: _this3.fastThreshold,
	            padding: 5,
	            tapreset: true,
	            draggable: true,
	            maxScale: 4
	          });
	          pz.on('swipe', _this3.onswipe.bind(_this3));
	          pz.on('move', function (dx) {
	            var x = -20 - tx - dx;
	            x = _this3.limit(x, vw);
	            _this3.setTransform(x);
	          });
	          //pz.on('tap', this.hide.bind(this))
	          pz.on('end', _this3.restore.bind(_this3));
	          _this3.zooms.push(pz);
	          pz.draggable = false;
	          _this3.loadImage(image, wrapper).then(function () {
	            pz.reset();
	            _this3.loaded.push(idx);
	            pz.draggable = true;
	          }, function () {});
	        })();
	      }
	    }
	  }, {
	    key: 'onswipe',
	    value: function onswipe(dir) {
	      var _this4 = this;
	
	      var vw = viewportWidth();
	      var i = dir == 'left' ? this.idx + 1 : this.idx - 1;
	      i = Math.max(0, i);
	      i = Math.min(this.imgs.length - 1, i);
	      this.animate(-i * vw - 20).then(function () {
	        var img = _this4.imgs[i];
	        if (i == _this4.idx) return;
	        _this4.active(img, i);
	      });
	    }
	  }, {
	    key: 'limit',
	    value: function limit(x, vw) {
	      x = Math.min(0, x);
	      x = Math.max(-40 - (this.imgs.length - 1) * vw, x);
	      return x;
	    }
	    /**
	     * Restore container transform to sane position
	     *
	     * @private
	     */
	
	  }, {
	    key: 'restore',
	    value: function restore() {
	      var _this5 = this;
	
	      var vw = viewportWidth();
	      var idx = Math.round((-this.tx - 20) / vw);
	      this.animate(-idx * vw - 20).then(function () {
	        if (idx == _this5.idx) return;
	        var img = _this5.imgs[idx];
	        _this5.active(img, idx);
	      });
	    }
	    /**
	     * Load image inside wrapper
	     *
	     * @private
	     * @param {Element} image
	     * @param {Element} wrapper
	     */
	
	  }, {
	    key: 'loadImage',
	    value: function loadImage(image, wrapper) {
	      var _this6 = this;
	
	      if (image.complete) {
	        var mask = (0, _query2.default)('.mask', wrapper);
	        if (mask) wrapper.removeChild(mask);
	        this.positionWrapper(wrapper, image);
	        return this.positionHolder(wrapper, image.src, false).then(function () {
	          image.style.display = 'block';
	        });
	      } else {
	        return this.positionHolder(wrapper).then(function () {
	          image.style.display = 'block';
	          var mask = (0, _query2.default)('.mask', wrapper);
	          mask.style.display = 'block';
	          var spinEl = (0, _domify2.default)('<div class="spin"></div>');
	          if (wrapper.clientHeight > _this6.container.clientHeight) {
	            spinEl.style.top = _this6.container.clientHeight / 2 + 'px';
	          }
	          wrapper.appendChild(spinEl);
	          var stop = (0, _spin2.default)(spinEl, {
	            color: '#ffffff',
	            duration: 1000,
	            width: 4
	          });
	          var self = _this6;
	          return new Promise(function (resolve, reject) {
	            function onload() {
	              stop();
	              if (spinEl.parentNode) wrapper.removeChild(spinEl);
	              if (mask.parentNode) wrapper.removeChild(mask);
	              self.positionWrapper(wrapper, image);
	              resolve();
	            }
	            if (image.complete) return onload();
	            image.onload = onload;
	            image.onerror = function (e) {
	              stop();
	              reject(e);
	            };
	          });
	        });
	      }
	    }
	  }, {
	    key: 'positionWrapper',
	    value: function positionWrapper(wrapper, image) {
	      var vw = Math.max(doc.documentElement.clientWidth, window.innerWidth || 0);
	      var dims = imgDimension(image);
	      var h = (vw - 10) * dims.height / dims.width;
	      var top = Math.min(this.container.clientHeight - 10, h) / 2;
	
	      (0, _objectAssign2.default)(wrapper.style, {
	        left: '5px',
	        width: vw - 10 + 'px',
	        height: h + 'px',
	        marginTop: '-' + top + 'px'
	      });
	    }
	  }, {
	    key: 'createImage',
	    value: function createImage(wrapper, src) {
	      var img = (0, _query2.default)('.image', wrapper);
	      if (img) return img;
	      img = doc.createElement('img');
	      img.className = 'image';
	      img.src = this.opts.convert(src);
	      wrapper.appendChild(img);
	      return img;
	    }
	    /**
	     * Set translateX of container
	     *
	     * @private
	     * @param {Number} x
	     */
	
	  }, {
	    key: 'setTransform',
	    value: function setTransform(x) {
	      var el = this.container;
	      this.tx = x;
	      if (_propDetect.has3d) {
	        el.style[_propDetect.transform] = 'translate3d(' + x + 'px,0,0)';
	      } else {
	        el.style[_propDetect.transform] = 'translate(' + x + 'px)';
	      }
	    }
	    /**
	     * Animate container for active image
	     *
	     * @private
	     * @param {Number} x
	     * @param {Number} duration = 200
	     * @param {String} ease = 'out-circ'
	     * @returns {Promise}
	     */
	
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
	    /**
	     * Animate holder to match wrapper
	     *
	     * @private
	     * @param {Element} wrapper
	     * @param {String} src optional new src
	     * @returns {undefined}
	     */
	
	  }, {
	    key: 'positionHolder',
	    value: function positionHolder(wrapper, src) {
	      var opacity = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	      var el = this.holder;
	      if (!el) return Promise.resolve(null);
	      if (src) el.style.backgroundImage = 'url(\'' + src + '\')';
	      var tween = (0, _tween2.default)({
	        width: parseInt(el.style.width, 10),
	        height: parseInt(el.style.height, 10),
	        left: parseInt(el.style.left, 10),
	        top: parseInt(el.style.top, 10),
	        opacity: 0.3
	      }).ease('out-cube').to({
	        width: parseInt(wrapper.style.width, 10),
	        height: parseInt(wrapper.style.height, 10),
	        left: parseInt(wrapper.style.left, 10),
	        top: this.container.clientHeight / 2 + parseInt(wrapper.style.marginTop, 10),
	        opacity: 1
	      }).duration(300);
	
	      tween.update(function (o) {
	        var n = opacity ? o.opacity : 1;
	        (0, _objectAssign2.default)(el.style, {
	          width: o.width + 'px',
	          height: o.height + 'px',
	          left: o.left + 'px',
	          top: o.top + 'px',
	          opacity: n
	        });
	      });
	
	      var self = this;
	      var promise = new Promise(function (resolve) {
	        tween.on('end', function () {
	          if (el.parentNode) el.parentNode.removeChild(el);
	          self.holder = null;
	          animate = function animate() {}; // eslint-disable-line
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
	    /**
	     * hide container and unbind events
	     *
	     * @public
	     */
	
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this.dots) body.removeChild(this.dots);
	      _event2.default.unbind(this.container, 'touchstart', this._containTap);
	      _event2.default.unbind(doc, 'touchmove', preventDefault);
	      this.zooms.forEach(function (pz) {
	        pz.unbind();
	      });
	      this.hideImage();
	      this.zooms = [];
	      this.status = [];
	      this.container.style.backgroundColor = 'rgba(0,0,0,0)';
	      this.emit('hide');
	      body.removeChild(this.container);
	    }
	    /**
	     * unbind tap event
	     *
	     * @public
	     */
	
	  }, {
	    key: 'unbind',
	    value: function unbind() {
	      _event2.default.unbind(doc, 'touchstart', this._ontap);
	    }
	  }, {
	    key: 'hideImage',
	    value: function hideImage() {
	      var idx = this.idx;
	      var img = this.imgs[idx];
	      var rect = img.getBoundingClientRect();
	      var wrapper = this.container.querySelectorAll('.wrapper')[idx];
	      if (rect.height == 0 || rect.bottom < 0 || rect.top > this.container.clientHeight) return;
	      var holder = doc.createElement('div');
	      var src = wrapper.querySelector('.image').src;
	      holder.className = 'imgs-preview-holder';
	      holder.style.backgroundImage = 'url(\'' + src + '\')';
	      (0, _objectAssign2.default)(holder.style, _defineProperty({
	        width: parseInt(wrapper.style.width, 10) + 'px',
	        height: parseInt(wrapper.style.height, 10) + 'px',
	        left: parseInt(wrapper.style.left, 10) + 'px',
	        top: this.container.clientHeight / 2 + parseInt(wrapper.style.marginTop, 10) + 'px'
	      }, _propDetect.transition, 'all 0.25s ease-in'));
	      body.appendChild(holder);
	      _event2.default.bind(holder, _propDetect.transitionend, end);
	      setTimeout(function () {
	        (0, _objectAssign2.default)(holder.style, {
	          width: rect.width + 'px',
	          height: rect.height + 'px',
	          top: rect.top + 'px',
	          left: rect.left + 'px'
	        });
	      }, 20);
	      function end() {
	        _event2.default.unbind(holder, _propDetect.transitionend, end);
	        body.removeChild(holder);
	      }
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
	
	function viewportWidth() {
	  return Math.max(doc.documentElement.clientWidth, window.innerWidth || 0);
	}
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	exports.default = ImagesPreview;

/***/ },
/* 2 */
/*!************************************!*\
  !*** ./~/radio-component/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var classes = __webpack_require__(/*! classes */ 3)
	
	/**
	 * add class to el and remove it from the same tagName siblings
	 *
	 * @param {Element} el
	 * @param {String} [default:active] [className] optional class added for el
	 * @api public
	 */
	module.exports = function (el, className) {
	  var children = el.parentNode.childNodes
	  var tagName = el.tagName
	  className = className || 'active'
	  for (var i = 0, l = children.length; i < l; i++) {
	    var node = children[i]
	    if (!node || (node.nodeType !== 1) || (node.tagName !== tagName)) continue
	    if (node === el) {
	      classes(node).add(className)
	    } else {
	      classes(node).remove(className)
	    }
	  }
	}


/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./~/component-classes/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(/*! indexof */ 4);
	} catch (err) {
	  var index = __webpack_require__(/*! component-indexof */ 4);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/component-indexof/index.js ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 5 */
/*!************************************!*\
  !*** ./~/component-query/index.js ***!
  \************************************/
/***/ function(module, exports) {

	function one(selector, el) {
	  return el.querySelector(selector);
	}
	
	exports = module.exports = function(selector, el){
	  el = el || document;
	  return one(selector, el);
	};
	
	exports.all = function(selector, el){
	  el = el || document;
	  return el.querySelectorAll(selector);
	};
	
	exports.engine = function(obj){
	  if (!obj.one) throw new Error('.one callback required');
	  if (!obj.all) throw new Error('.all callback required');
	  one = obj.one;
	  exports.all = obj.all;
	  return exports;
	};


/***/ },
/* 6 */
/*!************************************!*\
  !*** ./~/component-event/index.js ***!
  \************************************/
/***/ function(module, exports) {

	var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
	    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
	    prefix = bind !== 'addEventListener' ? 'on' : '';
	
	/**
	 * Bind `el` event `type` to `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.bind = function(el, type, fn, capture){
	  el[bind](prefix + type, fn, capture || false);
	  return fn;
	};
	
	/**
	 * Unbind `el` event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.unbind = function(el, type, fn, capture){
	  el[unbind](prefix + type, fn, capture || false);
	  return fn;
	};

/***/ },
/* 7 */
/*!**********************************!*\
  !*** ./~/component-raf/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Expose `requestAnimationFrame()`.
	 */
	
	exports = module.exports = window.requestAnimationFrame
	  || window.webkitRequestAnimationFrame
	  || window.mozRequestAnimationFrame
	  || fallback;
	
	/**
	 * Fallback implementation.
	 */
	
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime();
	  var ms = Math.max(0, 16 - (curr - prev));
	  var req = setTimeout(fn, ms);
	  prev = curr;
	  return req;
	}
	
	/**
	 * Cancel.
	 */
	
	var cancel = window.cancelAnimationFrame
	  || window.webkitCancelAnimationFrame
	  || window.mozCancelAnimationFrame
	  || window.clearTimeout;
	
	exports.cancel = function(id){
	  cancel.call(window, id);
	};


/***/ },
/* 8 */
/*!************************************!*\
  !*** ./~/component-tween/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(/*! emitter */ 9);
	var clone = __webpack_require__(/*! clone */ 10);
	var type = __webpack_require__(/*! type */ 11);
	var ease = __webpack_require__(/*! ease */ 12);
	
	/**
	 * Expose `Tween`.
	 */
	
	module.exports = Tween;
	
	/**
	 * Initialize a new `Tween` with `obj`.
	 *
	 * @param {Object|Array} obj
	 * @api public
	 */
	
	function Tween(obj) {
	  if (!(this instanceof Tween)) return new Tween(obj);
	  this._from = obj;
	  this.ease('linear');
	  this.duration(500);
	}
	
	/**
	 * Mixin emitter.
	 */
	
	Emitter(Tween.prototype);
	
	/**
	 * Reset the tween.
	 *
	 * @api public
	 */
	
	Tween.prototype.reset = function(){
	  this.isArray = 'array' === type(this._from);
	  this._curr = clone(this._from);
	  this._done = false;
	  this._start = Date.now();
	  return this;
	};
	
	/**
	 * Tween to `obj` and reset internal state.
	 *
	 *    tween.to({ x: 50, y: 100 })
	 *
	 * @param {Object|Array} obj
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.to = function(obj){
	  this.reset();
	  this._to = obj;
	  return this;
	};
	
	/**
	 * Set duration to `ms` [500].
	 *
	 * @param {Number} ms
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.duration = function(ms){
	  this._duration = ms;
	  return this;
	};
	
	/**
	 * Set easing function to `fn`.
	 *
	 *    tween.ease('in-out-sine')
	 *
	 * @param {String|Function} fn
	 * @return {Tween}
	 * @api public
	 */
	
	Tween.prototype.ease = function(fn){
	  fn = 'function' == typeof fn ? fn : ease[fn];
	  if (!fn) throw new TypeError('invalid easing function');
	  this._ease = fn;
	  return this;
	};
	
	/**
	 * Stop the tween and immediately emit "stop" and "end".
	 *
	 * @return {Tween}
	 * @api public
	 */
	
	Tween.prototype.stop = function(){
	  this.stopped = true;
	  this._done = true;
	  this.emit('stop');
	  this.emit('end');
	  return this;
	};
	
	/**
	 * Perform a step.
	 *
	 * @return {Tween} self
	 * @api private
	 */
	
	Tween.prototype.step = function(){
	  if (this._done) return;
	
	  // duration
	  var duration = this._duration;
	  var now = Date.now();
	  var delta = now - this._start;
	  var done = delta >= duration;
	
	  // complete
	  if (done) {
	    this._from = this._to;
	    this._update(this._to);
	    this._done = true;
	    this.emit('end');
	    return this;
	  }
	
	  // tween
	  var from = this._from;
	  var to = this._to;
	  var curr = this._curr;
	  var fn = this._ease;
	  var p = (now - this._start) / duration;
	  var n = fn(p);
	
	  // array
	  if (this.isArray) {
	    for (var i = 0; i < from.length; ++i) {
	      curr[i] = from[i] + (to[i] - from[i]) * n;
	    }
	
	    this._update(curr);
	    return this;
	  }
	
	  // objech
	  for (var k in from) {
	    curr[k] = from[k] + (to[k] - from[k]) * n;
	  }
	
	  this._update(curr);
	  return this;
	};
	
	/**
	 * Set update function to `fn` or
	 * when no argument is given this performs
	 * a "step".
	 *
	 * @param {Function} fn
	 * @return {Tween} self
	 * @api public
	 */
	
	Tween.prototype.update = function(fn){
	  if (0 == arguments.length) return this.step();
	  this._update = fn;
	  return this;
	};

/***/ },
/* 9 */
/*!********************************************************!*\
  !*** ./~/component-tween/~/component-emitter/index.js ***!
  \********************************************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 10 */
/*!************************************!*\
  !*** ./~/component-clone/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var type;
	try {
	  type = __webpack_require__(/*! component-type */ 11);
	} catch (_) {
	  type = __webpack_require__(/*! type */ 11);
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = clone;
	
	/**
	 * Clones objects.
	 *
	 * @param {Mixed} any object
	 * @api public
	 */
	
	function clone(obj){
	  switch (type(obj)) {
	    case 'object':
	      var copy = {};
	      for (var key in obj) {
	        if (obj.hasOwnProperty(key)) {
	          copy[key] = clone(obj[key]);
	        }
	      }
	      return copy;
	
	    case 'array':
	      var copy = new Array(obj.length);
	      for (var i = 0, l = obj.length; i < l; i++) {
	        copy[i] = clone(obj[i]);
	      }
	      return copy;
	
	    case 'regexp':
	      // from millermedeiros/amd-utils - MIT
	      var flags = '';
	      flags += obj.multiline ? 'm' : '';
	      flags += obj.global ? 'g' : '';
	      flags += obj.ignoreCase ? 'i' : '';
	      return new RegExp(obj.source, flags);
	
	    case 'date':
	      return new Date(obj.getTime());
	
	    default: // string, number, boolean, …
	      return obj;
	  }
	}


/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./~/component-type/index.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * toString ref.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Return the type of `val`.
	 *
	 * @param {Mixed} val
	 * @return {String}
	 * @api public
	 */
	
	module.exports = function(val){
	  switch (toString.call(val)) {
	    case '[object Date]': return 'date';
	    case '[object RegExp]': return 'regexp';
	    case '[object Arguments]': return 'arguments';
	    case '[object Array]': return 'array';
	    case '[object Error]': return 'error';
	  }
	
	  if (val === null) return 'null';
	  if (val === undefined) return 'undefined';
	  if (val !== val) return 'nan';
	  if (val && val.nodeType === 1) return 'element';
	
	  val = val.valueOf
	    ? val.valueOf()
	    : Object.prototype.valueOf.apply(val)
	
	  return typeof val;
	};


/***/ },
/* 12 */
/*!***********************************!*\
  !*** ./~/ease-component/index.js ***!
  \***********************************/
/***/ function(module, exports) {

	
	// easing functions from "Tween.js"
	
	exports.linear = function(n){
	  return n;
	};
	
	exports.inQuad = function(n){
	  return n * n;
	};
	
	exports.outQuad = function(n){
	  return n * (2 - n);
	};
	
	exports.inOutQuad = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n;
	  return - 0.5 * (--n * (n - 2) - 1);
	};
	
	exports.inCube = function(n){
	  return n * n * n;
	};
	
	exports.outCube = function(n){
	  return --n * n * n + 1;
	};
	
	exports.inOutCube = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n;
	  return 0.5 * ((n -= 2 ) * n * n + 2);
	};
	
	exports.inQuart = function(n){
	  return n * n * n * n;
	};
	
	exports.outQuart = function(n){
	  return 1 - (--n * n * n * n);
	};
	
	exports.inOutQuart = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n;
	  return -0.5 * ((n -= 2) * n * n * n - 2);
	};
	
	exports.inQuint = function(n){
	  return n * n * n * n * n;
	}
	
	exports.outQuint = function(n){
	  return --n * n * n * n * n + 1;
	}
	
	exports.inOutQuint = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n * n;
	  return 0.5 * ((n -= 2) * n * n * n * n + 2);
	};
	
	exports.inSine = function(n){
	  return 1 - Math.cos(n * Math.PI / 2 );
	};
	
	exports.outSine = function(n){
	  return Math.sin(n * Math.PI / 2);
	};
	
	exports.inOutSine = function(n){
	  return .5 * (1 - Math.cos(Math.PI * n));
	};
	
	exports.inExpo = function(n){
	  return 0 == n ? 0 : Math.pow(1024, n - 1);
	};
	
	exports.outExpo = function(n){
	  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
	};
	
	exports.inOutExpo = function(n){
	  if (0 == n) return 0;
	  if (1 == n) return 1;
	  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
	  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
	};
	
	exports.inCirc = function(n){
	  return 1 - Math.sqrt(1 - n * n);
	};
	
	exports.outCirc = function(n){
	  return Math.sqrt(1 - (--n * n));
	};
	
	exports.inOutCirc = function(n){
	  n *= 2
	  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
	  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
	};
	
	exports.inBack = function(n){
	  var s = 1.70158;
	  return n * n * (( s + 1 ) * n - s);
	};
	
	exports.outBack = function(n){
	  var s = 1.70158;
	  return --n * n * ((s + 1) * n + s) + 1;
	};
	
	exports.inOutBack = function(n){
	  var s = 1.70158 * 1.525;
	  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
	  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
	};
	
	exports.inBounce = function(n){
	  return 1 - exports.outBounce(1 - n);
	};
	
	exports.outBounce = function(n){
	  if ( n < ( 1 / 2.75 ) ) {
	    return 7.5625 * n * n;
	  } else if ( n < ( 2 / 2.75 ) ) {
	    return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
	  } else if ( n < ( 2.5 / 2.75 ) ) {
	    return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
	  } else {
	    return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
	  }
	};
	
	exports.inOutBounce = function(n){
	  if (n < .5) return exports.inBounce(n * 2) * .5;
	  return exports.outBounce(n * 2 - 1) * .5 + .5;
	};
	
	// aliases
	
	exports['in-quad'] = exports.inQuad;
	exports['out-quad'] = exports.outQuad;
	exports['in-out-quad'] = exports.inOutQuad;
	exports['in-cube'] = exports.inCube;
	exports['out-cube'] = exports.outCube;
	exports['in-out-cube'] = exports.inOutCube;
	exports['in-quart'] = exports.inQuart;
	exports['out-quart'] = exports.outQuart;
	exports['in-out-quart'] = exports.inOutQuart;
	exports['in-quint'] = exports.inQuint;
	exports['out-quint'] = exports.outQuint;
	exports['in-out-quint'] = exports.inOutQuint;
	exports['in-sine'] = exports.inSine;
	exports['out-sine'] = exports.outSine;
	exports['in-out-sine'] = exports.inOutSine;
	exports['in-expo'] = exports.inExpo;
	exports['out-expo'] = exports.outExpo;
	exports['in-out-expo'] = exports.inOutExpo;
	exports['in-circ'] = exports.inCirc;
	exports['out-circ'] = exports.outCirc;
	exports['in-out-circ'] = exports.inOutCirc;
	exports['in-back'] = exports.inBack;
	exports['out-back'] = exports.outBack;
	exports['in-out-back'] = exports.inOutBack;
	exports['in-bounce'] = exports.inBounce;
	exports['out-bounce'] = exports.outBounce;
	exports['in-out-bounce'] = exports.inOutBounce;


/***/ },
/* 13 */
/*!**************************************!*\
  !*** ./~/component-emitter/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 14 */
/*!****************************************!*\
  !*** ./~/component-tap-event/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	var endEvents = [
	  'touchend'
	]
	
	module.exports = Tap
	
	// default tap timeout in ms
	Tap.timeout = 200
	
	function Tap(callback, options) {
	  options = options || {}
	  // if the user holds his/her finger down for more than 200ms,
	  // then it's not really considered a tap.
	  // however, you can make this configurable.
	  var timeout = options.timeout || Tap.timeout
	
	  // to keep track of the original listener
	  listener.handler = callback
	
	  return listener
	
	  // el.addEventListener('touchstart', listener)
	  function listener(e1) {
	    // tap should only happen with a single finger
	    if (!e1.touches || e1.touches.length > 1) return
	
	    var el = e1.target
	    var context = this
	    var args = arguments;
	
	    var timeout_id = setTimeout(cleanup, timeout)
	
	    el.addEventListener('touchmove', cleanup)
	
	    endEvents.forEach(function (event) {
	      el.addEventListener(event, done)
	    })
	
	    function done(e2) {
	      // since touchstart is added on the same tick
	      // and because of bubbling,
	      // it'll execute this on the same touchstart.
	      // this filters out the same touchstart event.
	      if (e1 === e2) return
	
	      cleanup()
	
	      // already handled
	      if (e2.defaultPrevented) return
	
	      // overwrite these functions so that they all to both start and events.
	      var preventDefault = e1.preventDefault
	      var stopPropagation = e1.stopPropagation
	
	      e1.stopPropagation = function () {
	        stopPropagation.call(e1)
	        stopPropagation.call(e2)
	      }
	
	      e1.preventDefault = function () {
	        preventDefault.call(e1)
	        preventDefault.call(e2)
	      }
	
	      // calls the handler with the `end` event,
	      // but i don't think it matters.
	      callback.apply(context, args)
	    }
	
	    // cleanup end events
	    // to cancel the tap, just run this early
	    function cleanup(e2) {
	      // if it's the same event as the origin,
	      // then don't actually cleanup.
	      // hit issues with this - don't remember
	      if (e1 === e2) return
	
	      clearTimeout(timeout_id)
	
	      el.removeEventListener('touchmove', cleanup)
	
	      endEvents.forEach(function (event) {
	        el.removeEventListener(event, done)
	      })
	    }
	  }
	}


/***/ },
/* 15 */
/*!***********************************!*\
  !*** ./~/pinch-zoom/lib/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var events = __webpack_require__(/*! events */ 16)
	var event = __webpack_require__(/*! event */ 6)
	var Emitter = __webpack_require__(/*! emitter */ 13)
	var tap = __webpack_require__(/*! tap-event */ 14)
	var raf = __webpack_require__(/*! raf */ 7)
	var Tween = __webpack_require__(/*! tween */ 8)
	var detect = __webpack_require__(/*! prop-detect */ 20)
	var util = __webpack_require__(/*! ./util */ 25)
	var Pinch = __webpack_require__(/*! ./pinch */ 26)
	var has3d = detect.has3d
	var transform = detect.transform
	var PI = Math.PI
	
	/**
	 * Init PinchZoom with element and optional opt
	 *
	 * @public
	 * @param  {Element}  el
	 * @param {Object} opt
	 */
	function PinchZoom(el, opt) {
	  if (!(this instanceof PinchZoom)) return new PinchZoom(el, opt)
	  opt = opt || {}
	  this.el = el
	  this.padding = opt.padding || 0
	  this.container = el.parentNode
	  this.container.style.overflow = 'hidden'
	  this.scale = 1
	  this.maxScale = opt.maxScale || 5
	  // maximun duration in ms for fast swipe
	  this.threshold = opt.threshold || 200
	  // minimum moved distance for fast swipe
	  this.fastThreshold = opt.fastThreshold || 30
	  var rect = el.getBoundingClientRect()
	  this.tapreset = opt.tapreset || false
	  this.sx = rect.left + rect.width/2
	  this.sy = rect.top + rect.height/2
	  // transform x y
	  this.tx = this.ty = 0
	  this.animating = false
	  this.pinch = new Pinch(el, this.onPinchMove.bind(this))
	  this.pinch.on('start', this.onPinchStart.bind(this))
	  this.pinch.on('end', this.onPinchEnd.bind(this))
	  if (has3d) {
	    this.el.style[transform + 'Origin'] = 'center center 0px'
	  } else {
	    this.el.style[transform + 'Origin'] = 'center center'
	  }
	  var _ontap = this._ontap = tap(this.ontap.bind(this))
	  event.bind(el, 'touchstart', _ontap)
	  this.events = events(el, this)
	  this.docEvents = events(document, this);
	  if (opt.draggable) {
	    this.events.bind('touchstart')
	    this.events.bind('touchmove')
	    this.events.bind('touchend')
	    this.docEvents.bind('touchend', 'ontouchend')
	  }
	}
	
	Emitter(PinchZoom.prototype)
	
	/**
	 * touchstart event listener for single touch
	 *
	 * @private
	 * @param  {Event}  e
	 */
	PinchZoom.prototype.ontouchstart = function (e) {
	  var touches = e.touches
	  if (!touches || 1 != touches.length) return
	  if (this.animating) this.tween.stop()
	  var rect = this.el.getBoundingClientRect()
	  this.translateY = rect.top < 0 || rect.bottom > this.container.clientHeight
	  this.speed = 0
	  var d = Date.now()
	  var t = e.touches[0]
	  var sx = t.clientX
	  var sy = t.clientY
	  var self = this
	  var start = {x: this.tx, y: this.ty}
	  var limit = this.getLimitation(100)
	  this.move = function (e, touch) {
	    self.down = {
	      x: sx,
	      y: sy,
	      at: d
	    }
	    var cx = touch.clientX
	    var cy = touch.clientY
	    var px = this.prev ? this.prev.x : sx
	    var py = this.prev ? this.prev.y : sy
	    e.preventDefault()
	    var leftOrRight = Math.abs(cx - px) > Math.abs(cy - py)
	    if (self.scale != 1 && !leftOrRight) e.stopPropagation()
	    if (this.draggable === false && self.scale == 1 && leftOrRight) {
	      return this.emit('move', px - cx)
	    }
	    self.calcuteSpeed(cx, cy)
	    var tx = start.x + cx - sx
	    var ty = start.y + cy - sy
	    var res = util.limit(tx, ty, limit)
	    var dx = res.x - tx
	    if (self.scale == 1 && leftOrRight) {
	      res.y = this.ty
	      this.angle = cx - px > 0 ? 0 : PI
	    }
	    if (leftOrRight) this.emit('move', dx)
	    if (!this.translateY) res.y = start.y
	    self.setTransform(res.x, res.y, self.scale)
	  }
	}
	
	/**
	 * touchmove event listener for single touch
	 *
	 * @private
	 * @param  {Event}  e
	 */
	PinchZoom.prototype.ontouchmove = function (e) {
	  if (!this.move || this.animating ||this.pinch.pinching) return
	  var touches = e.touches
	  if (!touches || 1 != touches.length) {
	    this.move = null
	    return
	  }
	  var touch = touches[0]
	  this.move(e, touch)
	}
	
	/**
	 * touchend event listener for single touch
	 *
	 * @private
	 * @param  {Event}  e
	 */
	PinchZoom.prototype.ontouchend = function (e) {
	  if (!this.down) return
	  if (this.tween) this.tween.stop()
	  var t = Date.now()
	  var touch = e.changedTouches[0]
	  var x = touch.clientX
	  var y = touch.clientY
	  this.calcuteSpeed(x, y)
	  var dx = Math.abs(x - this.down.x) 
	  if ( dx > this.fastThreshold && dx > Math.abs(y - this.down.y) &&
	      (t - this.down.at) < this.threshold ) {
	    var dir = x > this.down.x ? 'right' : 'left'
	    var limit = this.getLimitation()
	    if (this.scale == 1 || this.tx <= limit.minx || this.tx >= limit.maxx) {
	
	      this.emit('swipe', dir)
	    }
	  } else {
	    this.emit('end')
	  }
	  this.down = this.move = null
	  if (this.pinch.pinching) return
	  this.momentum()
	}
	
	PinchZoom.prototype.momentum = function () {
	  var deceleration = 0.001
	  var limit = this.getLimitation(this.padding)
	  var speed = Math.min(this.speed, 4)
	  var rate = (4 - PI)/2
	  var dis = rate * (speed * speed) / (2 * deceleration)
	  var tx = this.tx + dis*Math.cos(this.angle)
	  var ty = this.ty + dis*Math.sin(this.angle)
	  if (isNaN(tx) || isNaN(ty)) return Promise.resolve()
	  var res = util.limit(tx, ty, limit)
	  var changed = ((this.scale > 1 && (tx < limit.minx || tx > limit.maxx))
	                || ty < limit.miny || ty > limit.maxy)
	  var ease = changed ? outBack : 'out-circ'
	  var d = util.distance([tx, ty, res.x, res.y])
	
	  var duration = (1 - d/dis) * speed/deceleration
	  if (this.ty < limit.miny || this.ty > limit.maxy) {
	    duration = 500
	    ease = 'out-circ'
	  }
	  if (!this.translateY) res.y = this.ty
	  return this.animate({x: res.x, y: res.y, scale: this.scale}, duration, ease)
	}
	
	/**
	 * get limitation values
	 *
	 * @private
	 */
	PinchZoom.prototype.getLimitation = function (padY) {
	  padY = padY || 0
	  var viewport = util.viewport
	  var vw = viewport.width
	  var vh = viewport.height
	  var rect = this.el.getBoundingClientRect()
	  var prect = this.el.parentNode.getBoundingClientRect()
	  return {
	    maxx: this.tx - rect.left + prect.left + this.padding,
	    minx: this.tx - (rect.left - prect.left + rect.width - vw) - this.padding,
	    miny: vh > rect.height ? this.ty - rect.top
	            : this.ty - rect.top - (rect.height - vh) - padY,
	    maxy: vh > rect.height ? this.ty + (vh - rect.top - rect.height)
	            : this.ty  - rect.top + padY
	    }
	}
	
	/**
	 * tap event handler
	 *
	 * @private
	 */
	PinchZoom.prototype.ontap = function () {
	  var ts = Date.now()
	  // double tap
	  if (this.lastTap && ts - this.lastTap < 300) {
	    this.emit('tap')
	    return
	  }
	  if (this.animating) return
	  if (this.scale == 1) {
	    //could be used for reset popup
	    this.emit('tap')
	    return
	  }
	  this.lastTap = Date.now()
	  if (this.tapreset) {
	    this.reset()
	  } else {
	    this.emit('tap')
	  }
	}
	
	/**
	 * Reset to initial state with animation
	 *
	 * @public
	 * @returns {Promise}
	 */
	PinchZoom.prototype.reset = function () {
	  this.emit('scale', {x: 0, y: 0, scale: 1})
	  var promise = this.animate({x: 0, y: 0, scale: 1}, 200)
	  return promise
	}
	
	/**
	 * PinchStart event handler
	 * @param {Obejct} point
	 * @private
	 */
	PinchZoom.prototype.onPinchStart = function (point) {
	  if (this.animating) this.tween.stop()
	  this.start = point
	  this.bx = this.sx + this.tx
	  this.by = this.sy + this.ty
	  this.startScale = this.scale
	  this.emit('start')
	}
	
	/**
	 * PinchMove event handler
	 * @param {Event} e
	 * @private
	 */
	PinchZoom.prototype.onPinchMove = function (e) {
	  if (this.animating) return
	  this.point = {x: e.x, y: e.y}
	  var mx = e.x - this.start.x
	  var my = e.y - this.start.y
	  // center position
	  var x = this.bx + mx
	  var y = this.by + my
	  var a = util.getAngle(x, y, e.x, e.y)
	  var dis = util.distance([e.y, e.x, y, x]) * (e.scale - 1)
	  var tx = this.bx - this.sx + mx - dis*Math.cos(a)
	  var ty = this.by - this.sy + my - dis*Math.sin(a)
	  this.setTransform(tx, ty, e.scale * this.startScale)
	}
	
	/**
	 * PinchEnd event handler
	 *
	 * @private
	 */
	PinchZoom.prototype.onPinchEnd = function () {
	  if (this.scale !== this.startScale) {
	    this.emit('scale', {x: this.tx, y: this.ty, scale: this.scale})
	  }
	  this.startScale = this.scale
	  var p = this.checkScale()
	  if (!p) this.checkPosition()
	}
	
	/**
	 * set transform properties of element
	 *
	 * @public
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} scale
	 */
	PinchZoom.prototype.setTransform = function (x, y, scale) {
	  this.tx = x
	  this.ty = y
	  this.scale = scale
	  if (has3d) {
	    this.el.style[transform] = 'translate3d(' + x + 'px, ' + y + 'px, 0) '
	    + ' scale3d(' + scale + ',' + scale + ', 1)'
	  } else {
	    this.el.style[transform] = 'translate(' + x + 'px, ' + y + 'px) '
	    + ' scale(' + scale + ','  + scale + ')'
	  }
	}
	
	/**
	 * animate transoform properties
	 *
	 * @public
	 * @param  {Element}  o
	 * @param {Number} duration
	 * @param {String} ease
	 */
	PinchZoom.prototype.animate = function (o, duration, ease) {
	  var current = {x: this.tx, y: this.ty, scale: this.scale}
	  ease = ease || 'out-circ'
	  var self = this
	  this.animating = true
	  var tween = this.tween = Tween(current)
	    .ease(ease)
	    .to(o)
	    .duration(duration)
	
	  tween.update(function(o){
	    self.setTransform(o.x, o.y, o.scale)
	  })
	
	  var promise = new Promise(function (resolve) {
	    tween.on('end', function(){
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
	
	/**
	 * unbind all event listeners and reset element
	 *
	 * @public
	 */
	PinchZoom.prototype.unbind = function () {
	  this.setTransform(0, 0, 1)
	  this.pinch.unbind()
	  this.events.unbind()
	  this.docEvents.unbind()
	  event.unbind(this.el, 'touchstart', this._ontap)
	}
	
	/**
	 * Reset position if invalid scale or offset.
	 *
	 * @private
	 */
	PinchZoom.prototype.checkPosition = function () {
	  var rect = this.el.getBoundingClientRect()
	  var dest = {x: this.tx, y: this.ty, scale: this.scale}
	  var viewport = util.viewport
	  var vw = viewport.width
	  var vh = viewport.height
	  if (rect.left > 0) {
	    dest.x = this.tx - rect.left
	  } else if (rect.left + rect.width < vw) {
	    dest.x = this.tx + (vw - rect.left - rect.width)
	  }
	  var bottom = rect.top + rect.height
	  if (rect.top > 0 && bottom > vh) {
	    // too low
	    dest.y = this.ty - (bottom - vh)
	  } else if (rect.top < 0 && bottom < vh) {
	    // too hegh
	    dest.y = this.ty - rect.top
	  }
	  return this.animate(dest, 200)
	}
	
	/**
	 * Reset scale if scale not valid
	 *
	 * @private
	 */
	PinchZoom.prototype.checkScale = function () {
	  if (this.scale < 1) return this.reset()
	  if (this.scale > this.maxScale) {
	    var p = this.point
	    return this.scaleAt(p.x, p.y, this.maxScale)
	  }
	}
	
	/**
	 * Limit scale to pinch point
	 * @param {Number} scale
	 * @private
	 */
	PinchZoom.prototype.limitScale = function (scale) {
	  var x = this.sx + this.tx
	  var y = this.sy + this.ty
	  var point = this.point
	  var a = Math.atan((point.y - y)/(point.x - x))
	  if ((point.y < y && point.x < x) || (point.y > y && point.x < x)) {
	    a = a + PI
	  }
	  var dis = util.distance([point.y, point.x, y, x]) * (this.scale - scale)
	  var tx = this.tx + dis*Math.cos(a)
	  var ty = this.ty + dis*Math.sin(a)
	  return this.animate({x: tx, y: ty, scale: scale}, 200)
	}
	
	/**
	 * change el to scale at x,y with specified scale
	 *
	 * @public
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} scale
	 * @returns {Promise}
	 */
	PinchZoom.prototype.scaleAt = function (x, y, scale) {
	  var cx = this.sx + this.tx
	  var cy = this.sy + this.ty
	  var a = util.getAngle(cx, cy, x, y)
	  var dis = util.distance([y, x, cy, cx]) * (1 - scale/this.scale)
	  var tx = this.tx + dis*Math.cos(a)
	  var ty = this.ty + dis*Math.sin(a)
	  return this.animate({x: tx, y: ty, scale: scale}, 300)
	}
	
	PinchZoom.prototype.calcuteSpeed = function(x, y) {
	  var prev = this.prev || this.down
	  var ts = Date.now()
	  var dt = ts - prev.at
	  if (ts - this.down.at < 50 || dt > 50) {
	    var distance = util.distance([prev.x, prev.y, x, y])
	    this.speed = Math.abs(distance / dt)
	    this.angle = util.getAngle(prev.x, prev.y, x, y)
	  }
	  if (dt > 50) {
	    this.prev = {x: x, y: y, at: ts}
	  }
	}
	
	function outBack(n) {
	  var s = 1.20158;
	  return --n * n * ((s + 1) * n + s) + 1;
	}
	
	module.exports = PinchZoom


/***/ },
/* 16 */
/*!*************************************!*\
  !*** ./~/component-events/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	try {
	  var events = __webpack_require__(/*! event */ 6);
	} catch(err) {
	  var events = __webpack_require__(/*! component-event */ 6);
	}
	
	try {
	  var delegate = __webpack_require__(/*! delegate */ 17);
	} catch(err) {
	  var delegate = __webpack_require__(/*! component-delegate */ 17);
	}
	
	/**
	 * Expose `Events`.
	 */
	
	module.exports = Events;
	
	/**
	 * Initialize an `Events` with the given
	 * `el` object which events will be bound to,
	 * and the `obj` which will receive method calls.
	 *
	 * @param {Object} el
	 * @param {Object} obj
	 * @api public
	 */
	
	function Events(el, obj) {
	  if (!(this instanceof Events)) return new Events(el, obj);
	  if (!el) throw new Error('element required');
	  if (!obj) throw new Error('object required');
	  this.el = el;
	  this.obj = obj;
	  this._events = {};
	}
	
	/**
	 * Subscription helper.
	 */
	
	Events.prototype.sub = function(event, method, cb){
	  this._events[event] = this._events[event] || {};
	  this._events[event][method] = cb;
	};
	
	/**
	 * Bind to `event` with optional `method` name.
	 * When `method` is undefined it becomes `event`
	 * with the "on" prefix.
	 *
	 * Examples:
	 *
	 *  Direct event handling:
	 *
	 *    events.bind('click') // implies "onclick"
	 *    events.bind('click', 'remove')
	 *    events.bind('click', 'sort', 'asc')
	 *
	 *  Delegated event handling:
	 *
	 *    events.bind('click li > a')
	 *    events.bind('click li > a', 'remove')
	 *    events.bind('click a.sort-ascending', 'sort', 'asc')
	 *    events.bind('click a.sort-descending', 'sort', 'desc')
	 *
	 * @param {String} event
	 * @param {String|function} [method]
	 * @return {Function} callback
	 * @api public
	 */
	
	Events.prototype.bind = function(event, method){
	  var e = parse(event);
	  var el = this.el;
	  var obj = this.obj;
	  var name = e.name;
	  var method = method || 'on' + name;
	  var args = [].slice.call(arguments, 2);
	
	  // callback
	  function cb(){
	    var a = [].slice.call(arguments).concat(args);
	    obj[method].apply(obj, a);
	  }
	
	  // bind
	  if (e.selector) {
	    cb = delegate.bind(el, e.selector, name, cb);
	  } else {
	    events.bind(el, name, cb);
	  }
	
	  // subscription for unbinding
	  this.sub(name, method, cb);
	
	  return cb;
	};
	
	/**
	 * Unbind a single binding, all bindings for `event`,
	 * or all bindings within the manager.
	 *
	 * Examples:
	 *
	 *  Unbind direct handlers:
	 *
	 *     events.unbind('click', 'remove')
	 *     events.unbind('click')
	 *     events.unbind()
	 *
	 * Unbind delegate handlers:
	 *
	 *     events.unbind('click', 'remove')
	 *     events.unbind('click')
	 *     events.unbind()
	 *
	 * @param {String|Function} [event]
	 * @param {String|Function} [method]
	 * @api public
	 */
	
	Events.prototype.unbind = function(event, method){
	  if (0 == arguments.length) return this.unbindAll();
	  if (1 == arguments.length) return this.unbindAllOf(event);
	
	  // no bindings for this event
	  var bindings = this._events[event];
	  if (!bindings) return;
	
	  // no bindings for this method
	  var cb = bindings[method];
	  if (!cb) return;
	
	  events.unbind(this.el, event, cb);
	};
	
	/**
	 * Unbind all events.
	 *
	 * @api private
	 */
	
	Events.prototype.unbindAll = function(){
	  for (var event in this._events) {
	    this.unbindAllOf(event);
	  }
	};
	
	/**
	 * Unbind all events for `event`.
	 *
	 * @param {String} event
	 * @api private
	 */
	
	Events.prototype.unbindAllOf = function(event){
	  var bindings = this._events[event];
	  if (!bindings) return;
	
	  for (var method in bindings) {
	    this.unbind(event, method);
	  }
	};
	
	/**
	 * Parse `event`.
	 *
	 * @param {String} event
	 * @return {Object}
	 * @api private
	 */
	
	function parse(event) {
	  var parts = event.split(/ +/);
	  return {
	    name: parts.shift(),
	    selector: parts.join(' ')
	  }
	}


/***/ },
/* 17 */
/*!***************************************!*\
  !*** ./~/component-delegate/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var closest = __webpack_require__(/*! closest */ 18);
	} catch(err) {
	  var closest = __webpack_require__(/*! component-closest */ 18);
	}
	
	try {
	  var event = __webpack_require__(/*! event */ 6);
	} catch(err) {
	  var event = __webpack_require__(/*! component-event */ 6);
	}
	
	/**
	 * Delegate event `type` to `selector`
	 * and invoke `fn(e)`. A callback function
	 * is returned which may be passed to `.unbind()`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @return {Function}
	 * @api public
	 */
	
	exports.bind = function(el, selector, type, fn, capture){
	  return event.bind(el, type, function(e){
	    var target = e.target || e.srcElement;
	    e.delegateTarget = closest(target, selector, true, el);
	    if (e.delegateTarget) fn.call(el, e);
	  }, capture);
	};
	
	/**
	 * Unbind event `type`'s callback `fn`.
	 *
	 * @param {Element} el
	 * @param {String} type
	 * @param {Function} fn
	 * @param {Boolean} capture
	 * @api public
	 */
	
	exports.unbind = function(el, type, fn, capture){
	  event.unbind(el, type, fn, capture);
	};


/***/ },
/* 18 */
/*!**************************************!*\
  !*** ./~/component-closest/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module Dependencies
	 */
	
	try {
	  var matches = __webpack_require__(/*! matches-selector */ 19)
	} catch (err) {
	  var matches = __webpack_require__(/*! component-matches-selector */ 19)
	}
	
	/**
	 * Export `closest`
	 */
	
	module.exports = closest
	
	/**
	 * Closest
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @param {Element} scope (optional)
	 */
	
	function closest (el, selector, scope) {
	  scope = scope || document.documentElement;
	
	  // walk up the dom
	  while (el && el !== scope) {
	    if (matches(el, selector)) return el;
	    el = el.parentNode;
	  }
	
	  // check scope for match
	  return matches(el, selector) ? el : null;
	}


/***/ },
/* 19 */
/*!***********************************************!*\
  !*** ./~/component-matches-selector/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var query = __webpack_require__(/*! query */ 5);
	} catch (err) {
	  var query = __webpack_require__(/*! component-query */ 5);
	}
	
	/**
	 * Element prototype.
	 */
	
	var proto = Element.prototype;
	
	/**
	 * Vendor function.
	 */
	
	var vendor = proto.matches
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;
	
	/**
	 * Expose `match()`.
	 */
	
	module.exports = match;
	
	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */
	
	function match(el, selector) {
	  if (!el || el.nodeType !== 1) return false;
	  if (vendor) return vendor.call(el, selector);
	  var nodes = query.all(selector, el.parentNode);
	  for (var i = 0; i < nodes.length; ++i) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}


/***/ },
/* 20 */
/*!********************************!*\
  !*** ./~/prop-detect/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var transform = null
	;(function () {
	  var styles = [
	    'webkitTransform',
	    'MozTransform',
	    'msTransform',
	    'OTransform',
	    'transform'
	  ];
	
	  var el = document.createElement('p');
	
	  for (var i = 0; i < styles.length; i++) {
	    if (null != el.style[styles[i]]) {
	      transform = styles[i];
	      break;
	    }
	  }
	})()
	
	/**
	 * Transition-end mapping
	 */
	var transitionEnd = null
	;(function () {
	  var map = {
	    'WebkitTransition' : 'webkitTransitionEnd',
	    'MozTransition' : 'transitionend',
	    'OTransition' : 'oTransitionEnd',
	    'msTransition' : 'MSTransitionEnd',
	    'transition' : 'transitionend'
	  };
	
	  /**
	  * Expose `transitionend`
	  */
	
	  var el = document.createElement('p');
	
	  for (var transition in map) {
	    if (null != el.style[transition]) {
	      transitionEnd = map[transition];
	      break;
	    }
	  }
	})()
	
	exports.transitionend = transitionEnd
	
	exports.transition = __webpack_require__(/*! transition-property */ 21)
	
	exports.transform = transform
	
	exports.touchAction = __webpack_require__(/*! touchaction-property */ 22)
	
	exports.has3d = __webpack_require__(/*! has-translate3d */ 23)


/***/ },
/* 21 */
/*!****************************************!*\
  !*** ./~/transition-property/index.js ***!
  \****************************************/
/***/ function(module, exports) {

	var styles = [
	  'webkitTransition',
	  'MozTransition',
	  'OTransition',
	  'msTransition',
	  'transition'
	]
	
	var el = document.createElement('p')
	var style
	
	for (var i = 0; i < styles.length; i++) {
	  if (null != el.style[styles[i]]) {
	    style = styles[i]
	    break
	  }
	}
	el = null
	
	module.exports = style


/***/ },
/* 22 */
/*!*****************************************!*\
  !*** ./~/touchaction-property/index.js ***!
  \*****************************************/
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = touchActionProperty();
	
	/**
	 * Returns "touchAction", "msTouchAction", or null.
	 */
	
	function touchActionProperty(doc) {
	  if (!doc) doc = document;
	  var div = doc.createElement('div');
	  var prop = null;
	  if ('touchAction' in div.style) prop = 'touchAction';
	  else if ('msTouchAction' in div.style) prop = 'msTouchAction';
	  div = null;
	  return prop;
	}


/***/ },
/* 23 */
/*!************************************!*\
  !*** ./~/has-translate3d/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	
	var prop = __webpack_require__(/*! transform-property */ 24);
	
	// IE <=8 doesn't have `getComputedStyle`
	if (!prop || !window.getComputedStyle) {
	  module.exports = false;
	
	} else {
	  var map = {
	    webkitTransform: '-webkit-transform',
	    OTransform: '-o-transform',
	    msTransform: '-ms-transform',
	    MozTransform: '-moz-transform',
	    transform: 'transform'
	  };
	
	  // from: https://gist.github.com/lorenzopolidori/3794226
	  var el = document.createElement('div');
	  el.style[prop] = 'translate3d(1px,1px,1px)';
	  document.body.insertBefore(el, null);
	  var val = getComputedStyle(el).getPropertyValue(map[prop]);
	  document.body.removeChild(el);
	  module.exports = null != val && val.length && 'none' != val;
	}


/***/ },
/* 24 */
/*!***************************************!*\
  !*** ./~/transform-property/index.js ***!
  \***************************************/
/***/ function(module, exports) {

	
	var styles = [
	  'webkitTransform',
	  'MozTransform',
	  'msTransform',
	  'OTransform',
	  'transform'
	];
	
	var el = document.createElement('p');
	var style;
	
	for (var i = 0; i < styles.length; i++) {
	  style = styles[i];
	  if (null != el.style[style]) {
	    module.exports = style;
	    break;
	  }
	}


/***/ },
/* 25 */
/*!**********************************!*\
  !*** ./~/pinch-zoom/lib/util.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Get the distance between two points
	 *
	 * @param {Array} arr [x1, y1, x2, y2]
	 * @return {Number}
	 * @api private
	 */
	
	exports.distance = function (arr) {
	  var x = Math.pow(arr[0] - arr[2], 2);
	  var y = Math.pow(arr[1] - arr[3], 2);
	  return Math.sqrt(x + y);
	}
	
	/**
	 * Get the midpoint
	 *
	 * @param {Array} arr
	 * @return {Object} coords
	 * @api private
	 */
	
	exports.midpoint = function (arr) {
	  var coords = {};
	  coords.x = (arr[0] + arr[2]) / 2;
	  coords.y = (arr[1] + arr[3]) / 2;
	  return coords;
	}
	
	Object.defineProperty(exports, 'viewport', {
	  get: function () {
	    return {
	      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
	      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	    }
	  }
	})
	
	/**
	 * getAngle
	 *
	 * @public
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Number} x1
	 * @param {Number} y1
	 * @returns {undefined}
	 */
	exports.getAngle = function (x, y, x1, y1) {
	  if (x == x1 && y == y1) return 0
	  var a = Math.atan((y1 - y)/(x1 - x))
	  if (x1 < x) return a + Math.PI
	  return a
	}
	
	exports.limit = function (x, y, limit) {
	  if (x < limit.minx) {
	    x = limit.minx
	  } else if (x > limit.maxx) {
	    x = limit.maxx
	  }
	  if (y < limit.miny) {
	    y = limit.miny
	  } else if (y > limit.maxy) {
	    y = limit.maxy
	  }
	  return {
	    x: x,
	    y: y
	  }
	}


/***/ },
/* 26 */
/*!***********************************!*\
  !*** ./~/pinch-zoom/lib/pinch.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Module dependencies
	 */
	
	var events = __webpack_require__(/*! events */ 16)
	var Emitter = __webpack_require__(/*! emitter */ 13)
	var E = __webpack_require__(/*! ./e */ 27)
	var util = __webpack_require__(/*! ./util */ 25)
	
	/**
	 * Export `Pinch`
	 */
	
	module.exports = Pinch
	
	/**
	 * Initialize `Pinch`
	 *
	 * @param {Element} el
	 * @param {Function} fn
	 * @return {Pinch}
	 * @api public
	 */
	
	function Pinch(el, fn) {
	  if (!(this instanceof Pinch)) return new Pinch(el, fn)
	  this.el = el
	  this.parent = el.parentNode
	  this.fn = fn || function(){}
	  this.midpoint = null
	  this.scale = 1
	  this.lastScale = 1
	  this.pinching = false
	  this.events = events(el, this)
	  this.events.bind('touchstart')
	  this.events.bind('touchmove')
	  this.events.bind('touchend')
	  this.fingers = {}
	}
	
	Emitter(Pinch.prototype)
	
	/**
	 * Touch start
	 *
	 * @param {Event} e
	 * @return {Pinch}
	 * @api private
	 */
	
	Pinch.prototype.ontouchstart = function(e) {
	  var touches = e.touches
	  if (!touches || 2 != touches.length) return this
	  e.preventDefault()
	  e.stopPropagation()
	
	  var coords = []
	  for(var i = 0, finger; i < touches.length; i++) {
	    finger = touches[i]
	    coords.push(finger.clientX, finger.clientY)
	  }
	
	  this.pinching = true
	  this.distance = util.distance(coords)
	  this.midpoint = util.midpoint(coords)
	  this.emit('start', this.midpoint)
	  return this
	}
	
	/**
	 * Touch move
	 *
	 * @param {Event} e
	 * @return {Pinch}
	 * @api private
	 */
	
	Pinch.prototype.ontouchmove = function(e) {
	  var touches = e.touches
	  if (!touches || touches.length != 2 || !this.pinching) return this
	  e.preventDefault()
	  e.stopPropagation()
	  var coords = []
	  for(var i = 0, finger; i < touches.length ; i++) {
	    finger = touches[i]
	    coords.push(finger.clientX, finger.clientY)
	  }
	
	  var dist = util.distance(coords)
	  var mid = util.midpoint(coords)
	
	  // make event properties mutable
	  e = E(e)
	
	  // iphone does scale natively, just use that
	  e.scale = dist / this.distance * this.scale
	  e.x = mid.x
	  e.y = mid.y
	
	  this.fn(e)
	
	  this.lastScale = e.scale
	  return this
	}
	
	/**
	 * Touchend
	 *
	 * @param {Event} e
	 * @return {Pinch}
	 * @api private
	 */
	
	Pinch.prototype.ontouchend = function(e) {
	  var touches = e.touches
	  if (!touches || touches.length == 2 || !this.pinching) return this
	  this.scale = this.lastScale
	  this.pinching = false
	  this.emit('end')
	  return this
	}
	
	/**
	 * Unbind
	 *
	 * @return {Pinch}
	 * @api public
	 */
	
	Pinch.prototype.unbind = function() {
	  this.events.unbind()
	  return this
	}


/***/ },
/* 27 */
/*!*******************************!*\
  !*** ./~/pinch-zoom/lib/e.js ***!
  \*******************************/
/***/ function(module, exports) {

	/**
	 * Expose `E`
	 */
	
	module.exports = function(e) {
	  // any property it doesn't find on the object
	  // itself, look up prototype for original `e`
	  E.prototype = e;
	  return new E();
	};
	
	/**
	 * Initialize `E`
	 */
	
	function E() {}


/***/ },
/* 28 */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 29 */
/*!***************************!*\
  !*** ./~/domify/index.js ***!
  \***************************/
/***/ function(module, exports) {

	
	/**
	 * Expose `parse`.
	 */
	
	module.exports = parse;
	
	/**
	 * Tests for browser support.
	 */
	
	var innerHTMLBug = false;
	var bugTestDiv;
	if (typeof document !== 'undefined') {
	  bugTestDiv = document.createElement('div');
	  // Setup
	  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
	  // Make sure that link elements get serialized correctly by innerHTML
	  // This requires a wrapper element in IE
	  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
	  bugTestDiv = undefined;
	}
	
	/**
	 * Wrap map from jquery.
	 */
	
	var map = {
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  // for script/link/style tags to work in IE6-8, you have to wrap
	  // in a div with a non-whitespace character in front, ha!
	  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
	};
	
	map.td =
	map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option =
	map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>'];
	
	map.polyline =
	map.ellipse =
	map.polygon =
	map.circle =
	map.text =
	map.line =
	map.path =
	map.rect =
	map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];
	
	/**
	 * Parse `html` and return a DOM Node instance, which could be a TextNode,
	 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
	 * instance, depending on the contents of the `html` string.
	 *
	 * @param {String} html - HTML string to "domify"
	 * @param {Document} doc - The `document` instance to create the Node for
	 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
	 * @api private
	 */
	
	function parse(html, doc) {
	  if ('string' != typeof html) throw new TypeError('String expected');
	
	  // default to the global `document` object
	  if (!doc) doc = document;
	
	  // tag name
	  var m = /<([\w:]+)/.exec(html);
	  if (!m) return doc.createTextNode(html);
	
	  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace
	
	  var tag = m[1];
	
	  // body support
	  if (tag == 'body') {
	    var el = doc.createElement('html');
	    el.innerHTML = html;
	    return el.removeChild(el.lastChild);
	  }
	
	  // wrap map
	  var wrap = map[tag] || map._default;
	  var depth = wrap[0];
	  var prefix = wrap[1];
	  var suffix = wrap[2];
	  var el = doc.createElement('div');
	  el.innerHTML = prefix + html + suffix;
	  while (depth--) el = el.lastChild;
	
	  // one element
	  if (el.firstChild == el.lastChild) {
	    return el.removeChild(el.firstChild);
	  }
	
	  // several elements
	  var fragment = doc.createDocumentFragment();
	  while (el.firstChild) {
	    fragment.appendChild(el.removeChild(el.firstChild));
	  }
	
	  return fragment;
	}


/***/ },
/* 30 */
/*!*********************!*\
  !*** ./src/spin.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (node, opts) {
	  opts = opts || [];
	  var ctx = createCtx(node);
	  var h = node.clientHeight || 32;
	  var w = node.clientWidth || 32;
	  var duration = opts.duration || 1000;
	  var color = opts.color || '#ffffff';
	  var rgb = torgb(color);
	  var x = h / 2;
	  var y = w / 2;
	  var r = Math.min(h, w) / 2 - 4;
	  var stop = void 0;
	  var start = void 0;
	  function step(timestamp) {
	    ctx.clearRect(0, 0, w, h);
	    if (stop) return;
	    if (!start) start = timestamp;
	    if (!node.parentNode) stop = true;
	    var ts = (timestamp - start) % duration;
	    ctx.beginPath();
	    ctx.strokeStyle = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.4)';
	    ctx.arc(x, y, r, 0, Math.PI * 2);
	    ctx.lineWidth = opts.width || 4;
	    ctx.lineCap = 'round';
	    ctx.stroke();
	    var a = -Math.PI / 2 + Math.PI * 2 * ts / duration;
	    var e = a + Math.PI / 2;
	    ctx.beginPath();
	    ctx.strokeStyle = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)';
	    ctx.arc(x, y, r, a, e);
	    ctx.stroke();
	    (0, _raf2.default)(step);
	  }
	  (0, _raf2.default)(step);
	  return function () {
	    stop = true;
	  };
	};
	
	var _autoscaleCanvas = __webpack_require__(/*! autoscale-canvas */ 31);
	
	var _autoscaleCanvas2 = _interopRequireDefault(_autoscaleCanvas);
	
	var _raf = __webpack_require__(/*! raf */ 7);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createCtx(node) {
	  var canvas = document.createElement('canvas');
	  node.appendChild(canvas);
	  var rect = node.getBoundingClientRect();
	  var ctx = canvas.getContext('2d');
	  canvas.height = rect.height;
	  canvas.width = rect.width;
	  (0, _autoscaleCanvas2.default)(canvas);
	  return ctx;
	}
	
	var hex_reg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
	function torgb(hex) {
	  if (hex.length == 4) hex = hex.replace(/[^#]/g, function (p) {
	    return p + p;
	  });
	  var result = hex_reg.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	}

/***/ },
/* 31 */
/*!*************************************!*\
  !*** ./~/autoscale-canvas/index.js ***!
  \*************************************/
/***/ function(module, exports) {

	
	/**
	 * Retina-enable the given `canvas`.
	 *
	 * @param {Canvas} canvas
	 * @return {Canvas}
	 * @api public
	 */
	
	module.exports = function(canvas){
	  var ctx = canvas.getContext('2d');
	  var ratio = window.devicePixelRatio || 1;
	  if (1 != ratio) {
	    canvas.style.width = canvas.width + 'px';
	    canvas.style.height = canvas.height + 'px';
	    canvas.width *= ratio;
	    canvas.height *= ratio;
	    ctx.scale(ratio, ratio);
	  }
	  return canvas;
	};

/***/ },
/* 32 */
/*!******************************!*\
  !*** ./~/has-touch/index.js ***!
  \******************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = 'ontouchstart' in global || (global.DocumentTouch && document instanceof DocumentTouch)
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 33 */
/*!***************************!*\
  !*** ./example/style.css ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/postcss-loader!./style.css */ 34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/*!*************************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./example/style.css ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 35)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * Repeating the background mostly makes sense in the <body>. Otherwise, people\n * usually want the image and preferably its center (not the top-right corner)\n */\n*:not(body) {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: cover;\n}\n/*\n * tables borders like they should be\n * applied to * to also works for display: table;\n */\nhtml {border-collapse: collapse}\n* {border-collapse: inherit}\n/*\n * box model like it should be\n *\n * http://www.paulirish.com/2012/box-sizing-border-box-ftw/\n */\nhtml {box-sizing: border-box}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n/*\n * kill document defaults margin & padding. We all do that all the times, right ?\n */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n/*\n * Makes the hidden attribute works even when an element is styled display: flex\n * http://lists.w3.org/Archives/Public/public-whatwg-archive/2014May/0001.html\n */\n[hidden] {display: none !important}\n\nbody {\n  font-family: Microsoft YaHei,helvetica,tahoma,arial,SimSun;\n  line-height: 1.42857143;\n  color: #333;\n  padding: 20px;\n  -webkit-touch-callout: none;\n}\np > img {\n  width: 100%;\n  display: block;\n  margin: 0 auto;\n  height: auto;\n}\n", ""]);
	
	// exports


/***/ },
/* 35 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 36 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 37 */
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/postcss-loader!./style.css */ 38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/*!*********************************************************!*\
  !*** ./~/css-loader!./~/postcss-loader!./src/style.css ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 35)();
	// imports
	
	
	// module
	exports.push([module.id, "#images-preview {\n  background-color: #000;\n  padding: 0 20px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 99;\n}\n#images-preview::before,\n#images-preview::after {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background-color: #000;\n  height: 5px;\n  content: '';\n  z-index: 99;\n}\n#images-preview::before {\n  top: 0;\n}\n#images-preview::after {\n  bottom: 0;\n}\n.imgs-preview-holder {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: fixed;\n  z-index: 9999;\n}\n.imgs-preview-dots {\n  position: fixed;\n  bottom: 1em;\n  left: 0;\n  right: 0;\n  height: 10px;\n  text-align: center;\n  z-index: 9999;\n}\n.imgs-preview-dots ul{\n  display: table;\n  margin: 0 auto;\n  padding: 0;\n}\n.imgs-preview-dots li{\n  float: left;\n  width: 8px;\n  height: 8px;\n  display: table-cell;\n  margin: 0 4px;\n  border-radius: 50%;\n  background-color: rgba(255,255,255,0.3);\n}\n.imgs-preview-dots li.active{\n  background-color: #fff;\n}\n#images-preview > div {\n  position: relative;\n  float: left;\n  height: 100%;\n  padding: 0 5px;\n}\n#images-preview .wrapper {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 400px;\n  top: 50%;\n  margin-top: -200px;\n  background-size: cover;\n}\n#images-preview .mask {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: -1;\n}\n#images-preview .mask::before {\n  position: absolute;\n  content: '';\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.3);\n}\n#images-preview .spin {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -16px;\n  margin-left: -16px;\n  z-index: 9999;\n}\n#images-preview .image {\n  display: none;\n  width: 100%;\n  height: auto;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map