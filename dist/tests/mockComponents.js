"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = require("react");

var mockComponents = {};

/**
 * @summary Creates a React component with given name, that simply renders its own name + props as a string
 * @param {String} name A component name
 * @returns {String} The object as a JSON string
 */
function makeMockedComponent(name) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(mockedComponent, _Component);

    function mockedComponent() {
      (0, _classCallCheck2.default)(this, mockedComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(mockedComponent).apply(this, arguments));
    }

    (0, _createClass2.default)(mockedComponent, [{
      key: "render",
      value: function render() {
        return "".concat(name, "(").concat(stringifyJSONCircularSafe(this.props), ")");
      }
    }]);
    return mockedComponent;
  }(_react.Component), _class.displayName = name, _temp;
}
/**
 * @summary JSON.stringify, but only top-level props
 * @param {Object} obj The object
 * @returns {String} The object as a JSON string
 */


function stringifyJSONCircularSafe(obj) {
  var isFirst = true;
  return JSON.stringify(obj, function (key, value) {
    if ((0, _typeof2.default)(value) === "object" && value !== null && !isFirst) {
      return "[Object]";
    }

    isFirst = false;
    return value;
  });
}
/**
 * Components
 */


["Button"].forEach(function (componentName) {
  mockComponents[componentName] = makeMockedComponent(componentName);
});
var _default = mockComponents;
exports.default = _default;