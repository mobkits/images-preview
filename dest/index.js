'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _event = require('event');

var _event2 = _interopRequireDefault(_event);

var _emitter = require('emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _tapEvent = require('tap-event');

var _tapEvent2 = _interopRequireDefault(_tapEvent);

var _pinchZoom = require('pinch-zoom');

var _pinchZoom2 = _interopRequireDefault(_pinchZoom);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./style.css');

var ImagesPreview = function (_Emitter) {
  _inherits(ImagesPreview, _Emitter);

  function ImagesPreview(imgs) {
    _classCallCheck(this, ImagesPreview);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImagesPreview).call(this));

    _this.imgs = Array.prototype.call(imgs);
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
        this.active(el, idx);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var div = this.container = document.createElement('div');
      div.id = 'images-preview';
      var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      div.style.width = vw * this.imgs.length + 'px';
      document.body.appendChild(div);

      var fragment = document.createFragment();
      for (var i = 0, l = this.imgs.length; i < l; i++) {
        var el = document.createElement('div');
        el.style.width = vw + 'px';
        var wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        (0, _objectAssign2.default)(wrapper.style, {});
        el.appendChild(wrapper);
        fragment.appendChild(el);
      }
      div.appendChild(fragment);
    }
  }, {
    key: 'active',
    value: function active(img, idx) {
      var state = this.status[idx];
      // not loaded
      if (!state) {}
    }
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'unbind',
    value: function unbind() {
      _event2.default.unbind(document, 'touchstart', this._ontap);
    }
  }]);

  return ImagesPreview;
}(_emitter2.default);

exports.default = ImagesPreview;