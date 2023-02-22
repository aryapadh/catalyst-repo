import React from "react";
import { useTheme } from "@material-ui/core/styles";
/**
 * @name IndicatorSeparator
 * @returns {React.Component} A React component
 */

export default function IndicatorSeparator() {
  var theme = useTheme();
  var indicatorSeparatorStyle = {
    alignSelf: "stretch",
    backgroundColor: theme.palette.colors.black20,
    marginBottom: 8,
    marginTop: 8,
    width: 1
  };
  return React.createElement("span", {
    style: indicatorSeparatorStyle
  });
}