import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */

/* eslint-disable require-jsdoc */

/* eslint-disable react/no-multi-comp */
import React, { useMemo, useCallback, useState } from "react";
import { fireEvent, render, waitForElement } from "../tests/index.js";
import { getPaginatedData, data } from "./mocks/sampleData";
import DataTable, { useDataTable } from "./";
var columnData = [{
  Header: "Order ID",
  accessor: "referenceId"
}, {
  Header: "Customer",
  accessor: "customer",
  Cell: function Cell(_ref) {
    var cell = _ref.cell;
    return React.createElement("a", {
      href: "#".concat(cell.value)
    }, cell.value);
  }
}, {
  Header: "Total",
  accessor: "total"
}]; // Basic table

function TestTable() {
  var columns = useMemo(function () {
    return columnData;
  }, []);
  var memoizedData = useMemo(function () {
    return data;
  }, []);
  var dataTableProps = useDataTable({
    columns: columns,
    data: memoizedData
  });
  return React.createElement(DataTable, dataTableProps);
} // Basic table


function TestTableWithServerSidePagination() {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      tableData = _useState2[0],
      setTableData = _useState2[1];

  var _useState3 = useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      pageCount = _useState4[0],
      setPageCount = _useState4[1];

  var columns = useMemo(function () {
    return columnData;
  }, []);
  var onFetchData = useCallback(
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2) {
      var pageIndex, pageSize, _ref4, fetchedData;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageIndex = _ref2.pageIndex, pageSize = _ref2.pageSize;
              _context.next = 3;
              return getPaginatedData({
                offset: pageIndex * pageSize,
                limit: (pageIndex + 1) * pageSize,
                simulatedDelay: 200,
                // 300ms delay
                sortBy: "referenceId",
                sortOrder: "asc"
              });

            case 3:
              _ref4 = _context.sent;
              fetchedData = _ref4.data;
              setTableData(fetchedData.nodes);
              setPageCount(fetchedData.totalCount / pageSize);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), []);
  var dataTableProps = useDataTable({
    data: tableData,
    columns: columns,
    onFetchData: onFetchData,
    pageCount: pageCount
  });
  return React.createElement(DataTable, dataTableProps);
}

function TestTableWithClientSidePagination() {
  var columns = useMemo(function () {
    return columnData;
  }, []);
  var memoizedData = useMemo(function () {
    return data;
  }, []);
  var dataTableProps = useDataTable({
    columns: columns,
    data: memoizedData
  });
  return React.createElement(DataTable, dataTableProps);
}

test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(TestTable, null)),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("server-side paginated snapshot - advances one page forward",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee2() {
  var _render2, asFragment, getByText;

  return _regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _render2 = render(React.createElement(TestTableWithServerSidePagination, null)), asFragment = _render2.asFragment, getByText = _render2.getByText;
          _context2.next = 3;
          return waitForElement(function () {
            return getByText("10000001");
          });

        case 3:
          fireEvent.click(getByText("Next"));
          _context2.next = 6;
          return waitForElement(function () {
            return getByText("10000011");
          });

        case 6:
          expect(asFragment()).toMatchSnapshot();

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
test("server-side paginated snapshot - advances one page forward and back to first",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee3() {
  var _render3, asFragment, getByText;

  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _render3 = render(React.createElement(TestTableWithServerSidePagination, null)), asFragment = _render3.asFragment, getByText = _render3.getByText;
          _context3.next = 3;
          return waitForElement(function () {
            return getByText("10000001");
          });

        case 3:
          fireEvent.click(getByText("Previous"));
          _context3.next = 6;
          return waitForElement(function () {
            return getByText("10000001");
          });

        case 6:
          expect(asFragment()).toMatchSnapshot();

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
test("client-side paginated snapshot - advances one page forward",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee4() {
  var _render4, asFragment, getByText;

  return _regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _render4 = render(React.createElement(TestTableWithClientSidePagination, null)), asFragment = _render4.asFragment, getByText = _render4.getByText;
          _context4.next = 3;
          return waitForElement(function () {
            return getByText("10000001");
          });

        case 3:
          fireEvent.click(getByText("Next"));
          _context4.next = 6;
          return waitForElement(function () {
            return getByText("10000011");
          });

        case 6:
          expect(asFragment()).toMatchSnapshot();

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
})));
test("client-side paginated snapshot - advances one page forward and back to first",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee5() {
  var _render5, asFragment, getByText;

  return _regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _render5 = render(React.createElement(TestTableWithClientSidePagination, null)), asFragment = _render5.asFragment, getByText = _render5.getByText;
          _context5.next = 3;
          return waitForElement(function () {
            return getByText("10000001");
          });

        case 3:
          fireEvent.click(getByText("Previous"));
          _context5.next = 6;
          return waitForElement(function () {
            return getByText("10000001");
          });

        case 6:
          expect(asFragment()).toMatchSnapshot();

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
})));