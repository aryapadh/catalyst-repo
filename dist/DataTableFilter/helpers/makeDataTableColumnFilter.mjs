import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import PropTypes from "prop-types";
import DataTableFilter from "../DataTableFilter";
/**
 * @name makeDataTableColumnFilter
 * @summary Helper function for creating a column filter for the DataTable.
 * @param {Object} props Props to be applied to the DataTableFilter component
 * @param {Array} props.options Array of options `[{ label: "Display Label", value: "value" }]
 * @param {String} props.title Title to be displayed for the drop down button, or in the card title
 * @returns {PropTypes.elementType} DataTableFilter component configured with props
 */

export default function makeDataTableColumnFilter(props) {
  var DataTableColumnFilter = function DataTableColumnFilter(_ref) {
    var _ref$column = _ref.column,
        Header = _ref$column.Header,
        filterValue = _ref$column.filterValue,
        setFilter = _ref$column.setFilter,
        labels = _ref.labels,
        container = _ref.container,
        className = _ref.className;
    return React.createElement(DataTableFilter, _extends({
      title: typeof Header === "string" ? Header : "Filter",
      className: className,
      container: container,
      labels: labels,
      onSelect: function onSelect(value) {
        return setFilter(value);
      },
      value: filterValue
    }, props));
  };

  DataTableColumnFilter.propTypes = {
    className: PropTypes.string,
    column: PropTypes.shape({
      filterValue: PropTypes.any,
      setFilter: PropTypes.func
    }),
    container: PropTypes.oneOf(["default", "card"]),
    labels: PropTypes.shape({
      clearAll: PropTypes.string.isRequired,
      clear: PropTypes.string.isRequired
    })
  };
  return DataTableColumnFilter;
}