import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.function.name";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.sort";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable id-length */
// Mock based on https://github.com/FezVrasta/react-popper/blob/master/src/__mocks__/popper.js.js
import PopperJs from "popper.js";

var Popper = function Popper(reference, popper) {
  var _this = this;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _classCallCheck(this, Popper);

  this.state = {
    isDestroyed: false
  };
  var modifiers = Object.keys(options.modifiers).map(function (name) {
    return _objectSpread({
      name: name
    }, options.modifiers[name]);
  }).sort(function (a, b) {
    return a.order - b.order;
  });

  var update = function update() {
    var data = {
      placement: options.placement,
      arrowStyles: {},
      offsets: {
        popper: {
          position: "absolute"
        },
        reference: {}
      }
    };
    modifiers.forEach(function (m) {
      if (m.enabled && m.fn) {
        m.fn(data, m);
      }
    });
  };

  update();
  return {
    reference: reference,
    popper: popper,
    options: _objectSpread({}, Popper.Defaults, {}, options),
    state: this.state,
    destroy: function destroy() {
      _this.state.isDestroyed = true;
    },
    scheduleUpdate: function scheduleUpdate() {
      update();
    }
  };
};

Popper.placements = PopperJs.placements;
export { Popper as default };