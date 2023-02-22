"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginatedData = getPaginatedData;
Object.defineProperty(exports, "data", {
  enumerable: true,
  get: function get() {
    return _orders.default;
  }
});

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es6.array.find");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("core-js/modules/es6.promise");

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _orders = _interopRequireDefault(require("./orders.json"));

/**
 * Simulate a request for paginated data
 * @param {Object} args Arguments for simulated request and pagination
 * @param {Number} args.offset Unsigned int offset
 * @param {Number} args.limit Unsifned in size per page
 * @param {Number} args.simulatedDelay Time in miliseconds to simulate a delay for
 * @returns {Array} arg.array
 */
function getPaginatedData(_x) {
  return _getPaginatedData.apply(this, arguments);
}

function _getPaginatedData() {
  _getPaginatedData = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var _ref$orderIds, orderIds, _ref$filters, filters, _ref$offset, offset, _ref$limit, limit, _ref$simulatedDelay, simulatedDelay, _ref$sortBy, sortBy, _ref$sortOrder, sortOrder, preFilteredData, sortedData, filterValues, nodes;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$orderIds = _ref.orderIds, orderIds = _ref$orderIds === void 0 ? [] : _ref$orderIds, _ref$filters = _ref.filters, filters = _ref$filters === void 0 ? {} : _ref$filters, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? 0 : _ref$offset, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$simulatedDelay = _ref.simulatedDelay, simulatedDelay = _ref$simulatedDelay === void 0 ? 0 : _ref$simulatedDelay, _ref$sortBy = _ref.sortBy, sortBy = _ref$sortBy === void 0 ? "createdAt" : _ref$sortBy, _ref$sortOrder = _ref.sortOrder, sortOrder = _ref$sortOrder === void 0 ? "desc" : _ref$sortOrder;
            _context.next = 3;
            return new Promise(function (resolve) {
              return setTimeout(resolve, simulatedDelay);
            });

          case 3:
            preFilteredData = (0, _toConsumableArray2.default)(_orders.default);

            if (Array.isArray(orderIds) && orderIds.length) {
              preFilteredData = _orders.default.filter(function (_ref2) {
                var id = _ref2.id;
                return orderIds.includes(id);
              });
            }

            sortedData = preFilteredData.sort(function (itemA, itemB) {
              var va = itemA[sortBy];
              var vb = itemB[sortBy];

              if (sortOrder === "desc") {
                // Sort is reverse order
                if (va > vb) return -1;else if (va < vb) return 1;
                return 0;
              } // Sort in order


              if (va < vb) return -1;else if (va > vb) return 1;
              return 0;
            });
            filterValues = Object.values(filters).filter(function (value) {
              return value !== undefined;
            });

            if (!filterValues.length) {
              _context.next = 10;
              break;
            }

            nodes = sortedData.filter(function (item) {
              var itemValues = Object.values(item);
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                var _loop = function _loop() {
                  var filterValue = _step.value;

                  if (Array.isArray(filterValue) && filterValue.length > 0) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      var _loop2 = function _loop2() {
                        var multiSelectFilterValue = _step2.value;

                        if (itemValues.find(function (valueToMatch) {
                          return valueToMatch === multiSelectFilterValue;
                        })) {
                          return {
                            v: {
                              v: true
                            }
                          };
                        }
                      };

                      for (var _iterator2 = filterValue[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _ret2 = _loop2();

                        if ((0, _typeof2.default)(_ret2) === "object") return _ret2.v;
                      }
                    } catch (err) {
                      _didIteratorError2 = true;
                      _iteratorError2 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                          _iterator2.return();
                        }
                      } finally {
                        if (_didIteratorError2) {
                          throw _iteratorError2;
                        }
                      }
                    }
                  } else if (itemValues.find(function (valueToMatch) {
                    return valueToMatch === filterValue;
                  })) {
                    return {
                      v: true
                    };
                  } else if (itemValues.join(" ").includes(filterValue)) {
                    return {
                      v: true
                    };
                  }
                };

                for (var _iterator = filterValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _ret = _loop();

                  if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              return false;
            });
            return _context.abrupt("return", {
              data: {
                nodes: nodes.slice(offset, limit),
                totalCount: nodes.length
              }
            });

          case 10:
            return _context.abrupt("return", {
              data: {
                nodes: sortedData.slice(offset, limit),
                totalCount: preFilteredData.length
              }
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPaginatedData.apply(this, arguments);
}