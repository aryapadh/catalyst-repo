import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.assign";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import "core-js/modules/es6.array.find";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * useDataTableManualFilter hook
 * Based on the `useFilters` hook from react-table https://github.com/tannerlinsley/react-table/blob/master/src/plugin-hooks/useFilters.js
 * This hook provides a methods for setting a set of manual filters, that aren't restricted by columns
 */
import { actions, useMountedLayoutEffect, functionalUpdate, useGetLatest } from "react-table"; // Actions

actions.resetManualFilters = "resetManualFilters";
actions.setManualFilters = "setManualFilters";
actions.setAllManualFilters = "setAllManualFilters";

var useManualFilters = function useManualFilters(hooks) {
  hooks.stateReducers.push(reducer);
  hooks.useInstance.push(useInstance);
};

useManualFilters.pluginName = "useManualFilters";
/**
 * State reducer
 * @param {Object} state State
 * @param {String} action Action name
 * @param {Object} previousState Previous state object
 * @param {Object} instance Table instance
 * @returns {Object} New state
 */

function reducer(state, action, previousState, instance) {
  if (action.type === actions.init) {
    return _objectSpread({
      manualFilters: []
    }, state);
  }

  if (action.type === actions.resetManualFilters) {
    return _objectSpread({}, state, {
      manualFilters: instance.initialState.manualFilters || []
    });
  }

  if (action.type === actions.setManualFilters) {
    var manualFilterId = action.manualFilterId,
        manualFilterValue = action.manualFilterValue;
    var previousManualFilter = state.manualFilters.find(function (filter) {
      return filter.id === manualFilterId;
    });
    var newManualFilterValue = functionalUpdate(manualFilterValue, previousManualFilter && previousManualFilter.value);

    if (previousManualFilter) {
      return _objectSpread({}, state, {
        manualFilters: state.manualFilters.map(function (filter) {
          if (filter.id === manualFilterId) {
            return {
              id: manualFilterId,
              value: newManualFilterValue
            };
          }

          return filter;
        }).filter(function (_ref) {
          var value = _ref.value;
          return typeof value !== "undefined" && value !== null;
        })
      });
    }

    return _objectSpread({}, state, {
      manualFilters: [].concat(_toConsumableArray(state.manualFilters), [{
        id: manualFilterId,
        value: newManualFilterValue
      }])
    });
  }

  if (action.type === actions.setAllManualFilters) {
    var manualFilters = action.manualFilters;
    return _objectSpread({}, state, {
      manualFilters: functionalUpdate(manualFilters, state.manualFilters).filter(function (_ref2) {
        var value = _ref2.value;
        return typeof value !== "undefined" && value !== null;
      })
    });
  }

  return state;
}
/**
 *
 * @param {Object} instance Table instance
 * @returns {undefined} No return value
 */


function useInstance(instance) {
  var data = instance.data,
      manualFilters = instance.manualFilters,
      dispatch = instance.dispatch,
      _instance$autoResetMa = instance.autoResetManualFilters,
      autoResetManualFilters = _instance$autoResetMa === void 0 ? true : _instance$autoResetMa;

  var setManualFilters = function setManualFilters(manualFilterId, manualFilterValue) {
    dispatch({
      type: actions.setManualFilters,
      manualFilterId: manualFilterId,
      manualFilterValue: manualFilterValue
    });
  };

  var setAllManualFilters = function setAllManualFilters(manualFiltersParam) {
    dispatch({
      type: actions.setAllManualFilters,
      manualFilters: manualFiltersParam
    });
  };

  var getAutoResetManualFilters = useGetLatest(autoResetManualFilters);
  useMountedLayoutEffect(function () {
    if (getAutoResetManualFilters()) {
      dispatch({
        type: actions.resetManualFilters
      });
    }
  }, [dispatch, manualFilters ? null : data]);
  Object.assign(instance, {
    setManualFilters: setManualFilters,
    setAllManualFilters: setAllManualFilters
  });
}

export default useManualFilters;