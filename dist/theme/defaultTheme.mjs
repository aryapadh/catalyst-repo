import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _toolbar, _root;

import createTheme from "@material-ui/core/styles/createTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import colors from "./colors";
var breakpoints = createBreakpoints({});
var toolbarHeight = 80;
var toolbarMobileHeight = 54; // Colors

export var colorPrimaryMain = colors.coolGrey;
export var colorSecondaryMain = colors.reactionBlue; // Spacing

export var defaultSpacingUnit = 8;
export var drawerWidth = 280;
export var detailDrawerWidth = 400; // Typography

export var fontFamily = "'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif";
export var defaultFontSize = 16;
export var fontWeightLight = 400;
export var fontWeightRegular = 400;
export var fontWeightMedium = 500;
export var fontWeightSemiBold = 600;
export var fontWeightBold = 700; // Typography - Letter-spacing

export var captionLetterSpacing = 0.28;
export var body2LetterSpacing = 0.28;
export var body1LetterSpacing = 0.3;
export var body1BoldLetterSpacing = 0.3;
export var subtitle2LetterSpacing = 0.24;
export var subtitle1LetterSpacing = 0.26;
export var h6LetterSpacing = 0.24;
export var h5LetterSpacing = 0.5;
export var h4LetterSpacing = 0.5;
export var h3LetterSpacing = 0.42;
export var h2LetterSpacing = 0.35;
export var h1LetterSpacing = 0.42; // Icons

export var smallFontIconSize = 17;
export var rawMuiTheme = {
  palette: {
    colors: colors,
    // TODO: De-structure these colors into various MUI properties rather than using them from this object
    primary: {
      light: colors.coolGrey300,
      main: colorPrimaryMain,
      dark: colors.coolGrey400
    },
    secondary: {
      light: colors.coolGrey300,
      main: colorSecondaryMain,
      dark: colors.coolGrey400
    },
    divider: colors.black10,
    text: {
      primary: colors.coolGrey500,
      secondary: colors.black60,
      secondaryActive: colors.white,
      active: "#8acef2"
    },
    action: {
      hover: colors.reactionBlue100,
      selected: colors.black10
    },
    error: {
      main: colors.red
    }
  },
  typography: {
    fontSize: defaultFontSize,
    fontFamily: fontFamily,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightSemiBold: fontWeightSemiBold,
    fontWeightBold: fontWeightBold,
    useNextVariants: true,
    button: {
      fontSize: defaultFontSize,
      fontWeight: fontWeightSemiBold,
      letterSpacing: body1BoldLetterSpacing,
      lineHeight: 1.5,
      textTransform: "capitalize"
    },
    h1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.5,
      letterSpacing: h1LetterSpacing,
      lineHeight: 1.25
    },
    h2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.25,
      letterSpacing: h2LetterSpacing,
      lineHeight: 1.5
    },
    h3: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 1.125,
      letterSpacing: h3LetterSpacing,
      lineHeight: 1.25
    },
    h4: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize,
      letterSpacing: h4LetterSpacing,
      lineHeight: 1.25
    },
    h5: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: h5LetterSpacing,
      lineHeight: 1.25
    },
    h6: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.75,
      letterSpacing: h6LetterSpacing,
      lineHeight: 1.46
    },
    body1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize,
      letterSpacing: body1LetterSpacing,
      lineHeight: 1.5
    },
    body2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: body2LetterSpacing,
      lineHeight: 1.25
    },
    caption: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: captionLetterSpacing,
      lineHeight: 1.25
    },
    subtitle1: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.875,
      letterSpacing: subtitle1LetterSpacing,
      lineHeight: 1.71
    },
    subtitle2: {
      color: colors.coolGrey500,
      fontSize: defaultFontSize * 0.75,
      letterSpacing: subtitle2LetterSpacing,
      lineHeight: 1.46
    }
  },
  shadows: ["none", "0 2px 2px 0 rgba(0, 0, 0, 0.05);", "0 3px 6px 0 rgba(0, 0, 0, 0.05);", "0 5px 10px 0 rgba(0, 0, 0, 0.05);", "0 8px 16px 0 rgba(0, 0, 0, 0.05);", "0 13px 26px 0 rgba(0, 0, 0, 0.05)", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);", "0px 13px 26px 0 rgba(0,0,0,0.05);"],
  shape: {
    borderRadius: 3
  },
  dimensions: {
    drawerWidth: drawerWidth,
    detailDrawerWidth: detailDrawerWidth
  },
  mixins: {
    leadingPaddingWhenPrimaryDrawerIsOpen: {
      paddingLeft: drawerWidth + defaultSpacingUnit * 2
    },
    trailingPaddingWhenDetailDrawerIsOpen: {
      paddingRight: detailDrawerWidth + defaultSpacingUnit * 2
    },
    toolbar: (_toolbar = {
      minHeight: toolbarHeight
    }, _defineProperty(_toolbar, "".concat(breakpoints.up("xs"), " and (orientation: landscape)"), {
      minHeight: toolbarMobileHeight,
      paddingLeft: defaultSpacingUnit,
      paddingRight: defaultSpacingUnit
    }), _defineProperty(_toolbar, "".concat(breakpoints.up("xs"), " and (orientation: portrait)"), {
      minHeight: toolbarMobileHeight,
      paddingLeft: defaultSpacingUnit,
      paddingRight: defaultSpacingUnit
    }), _defineProperty(_toolbar, breakpoints.up("sm"), {
      minHeight: toolbarHeight
    }), _toolbar)
  },
  // Override default props
  props: {
    MuiAppBar: {
      elevation: 0
    },
    MuiCardHeader: {
      titleTypographyProps: {
        display: "inline",
        variant: "h4"
      },
      subheaderTypographyProps: {
        display: "inline",
        variant: "h5"
      }
    },
    MuiDialogContentText: {
      color: "inherit"
    },
    MuiListItemText: {
      primaryTypographyProps: {
        variant: "body1"
      }
    }
  },
  // Override defined theme properties
  overrides: {
    MuiAppBar: {
      root: (_root = {
        height: toolbarHeight
      }, _defineProperty(_root, "".concat(breakpoints.up("xs"), " and (orientation: landscape)"), {
        height: toolbarMobileHeight
      }), _defineProperty(_root, "".concat(breakpoints.up("xs"), " and (orientation: portrait)"), {
        height: toolbarMobileHeight
      }), _defineProperty(_root, breakpoints.up("sm"), {
        height: toolbarHeight
      }), _root),
      colorPrimary: {
        backgroundColor: colors.white,
        borderBottom: "1px solid ".concat(colors.black05)
      },
      colorSecondary: {
        backgroundColor: "#3C4950" // colors.coolGrey with 20% opacity, opaque

      },
      colorDefault: {
        backgroundColor: colors.white,
        borderBottom: "1px solid ".concat(colors.black05)
      }
    },
    MuiButton: {
      root: {
        lineHeight: 1.5,
        padding: "".concat(defaultSpacingUnit, "px ").concat(defaultSpacingUnit * 2, "px"),
        textTransform: "initial",
        whiteSpace: "nowrap"
      },
      text: {
        color: colors.coolGrey400,
        fontWeight: fontWeightRegular,
        fontSize: defaultFontSize * 0.875,
        padding: "".concat(defaultSpacingUnit + 1.5, "px ").concat(defaultSpacingUnit * 2, "px")
      },
      outlined: {
        // Removed 1px of padding from the top/bottom to account for the border
        // which adds 1px to the top/bottom. This makes the button height even
        // with the contained variant.
        padding: "".concat(defaultSpacingUnit - 1, "px ").concat(defaultSpacingUnit * 2, "px")
      },
      outlinedPrimary: {
        border: "1px solid ".concat(colorPrimaryMain),
        color: colors.coolGrey500
      },
      outlinedSecondary: {
        border: "1px solid ".concat(colorSecondaryMain)
      },
      sizeSmall: {
        fontSize: defaultFontSize * 0.875
      }
    },
    MuiButtonGroup: {
      groupedContained: {
        "&:not(:last-child)": {
          borderRight: "1px solid ".concat(colors.white)
        }
      },
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderRight: "1px solid ".concat(colors.white)
        }
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderRight: "1px solid ".concat(colors.white)
        }
      }
    },
    MuiCard: {
      root: {
        border: "1px solid ".concat(colors.black10),
        paddingLeft: defaultSpacingUnit * 2,
        paddingRight: defaultSpacingUnit * 2,
        paddingTop: defaultSpacingUnit,
        paddingBottom: defaultSpacingUnit
      }
    },
    MuiCardHeader: {
      root: {
        paddingTop: defaultSpacingUnit * 3
      },
      title: {
        fontWeight: fontWeightSemiBold
      },
      subheader: {
        color: colors.coolGrey500,
        marginLeft: defaultSpacingUnit * 2
      }
    },
    MuiCheckbox: {
      root: {
        color: colors.coolGrey500
      },
      colorSecondary: {
        "&$checked": {
          color: colors.coolGrey500
        },
        "&$disabled": {
          color: colors.coolGrey100
        }
      }
    },
    MuiChip: {
      root: {
        fontSize: defaultFontSize * 0.875,
        letterSpacing: captionLetterSpacing,
        height: 32
      },
      deletable: {
        "&:hover": {
          cursor: "pointer"
        }
      },
      deletableColorPrimary: {
        "backgroundColor": colors.black02,
        "border": "1px solid ".concat(colors.coolGrey),
        "color": colors.coolGrey500,
        "&:hover, &:focus, &:active": {
          backgroundColor: colors.black05
        }
      },
      deleteIconColorPrimary: {
        "color": colors.coolGrey,
        "fontSize": smallFontIconSize,
        "&:hover, &:focus, &:active": {
          color: colors.reactionBlue500
        }
      },
      deletableColorSecondary: {
        "color": colors.coolGrey500,
        "border": "1px solid ".concat(colors.coolGrey300),
        "backgroundColor": colors.reactionBlue100,
        "&:hover, &:focus, &:active": {
          backgroundColor: colors.darkBlue100
        }
      },
      deleteIconColorSecondary: {
        "color": colors.coolGrey,
        "&:hover, &:focus, &:active": {
          color: colors.reactionBlue500
        }
      },
      sizeSmall: {
        height: 28
      },
      deleteIconSmall: {
        margin: "0 4px 0 0",
        fontSize: smallFontIconSize
      }
    },
    MuiDialogTitle: {
      root: {
        "padding": defaultTheme.spacing(4, 4, 1, 4),
        "& h2": {
          fontWeight: fontWeightSemiBold
        }
      }
    },
    MuiDialogContent: {
      root: {
        padding: defaultTheme.spacing(1, 4)
      }
    },
    MuiDialogActions: {
      root: {
        padding: defaultTheme.spacing(1, 4, 4, 4)
      }
    },
    MuiDrawer: {
      paper: {
        width: drawerWidth
      },
      paperAnchorLeft: {
        border: "none",
        backgroundColor: colors.darkBlue500,
        color: colors.black15
      },
      paperAnchorDockedLeft: {
        border: "none",
        borderRight: "none"
      },
      paperAnchorRight: {
        border: "none",
        backgroundColor: colors.black02,
        width: detailDrawerWidth
      },
      paperAnchorDockedRight: {
        border: "none"
      }
    },
    MuiExpansionPanel: {
      root: {
        "&$expanded": {
          margin: 0
        }
      }
    },
    MuiFab: {
      sizeSmall: {
        width: 36,
        height: 36
      }
    },
    MuiOutlinedInput: {
      root: {
        "&:hover $notchedOutline": {
          borderColor: colors.black20
        },
        "&$focused $notchedOutline": {
          borderColor: colors.reactionBlue400
        }
      },
      inputMarginDense: {
        paddingTop: 9.5,
        paddingBottom: 9.5
      }
    },
    MuiSkeleton: {
      root: {
        backgroundColor: colors.black10
      }
    },
    MuiSvgIcon: {
      root: {
        // This is a hack to fix issues with the base font-size in the bootstrap
        // theme being 14px, not allowing for `pxToRem(24)` to be the correct value for MUI icons.
        // This should be revisited once the Reaction admin no longer has a need for bootstrap.
        fontSize: 24
      }
    },
    MuiTabs: {
      indicator: {
        height: 4,
        backgroundColor: colors.reactionBlue400
      }
    },
    MuiTab: {
      root: {
        minHeight: 60,
        textTransform: "initial"
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "none"
      },
      sizeSmall: {
        "padding": "4px 16px 4px 16px",
        "&:last-child": {
          paddingRight: 16
        },
        "&$paddingCheckbox": {
          "padding": "4px 16px 4px   16px",
          "&:last-child": {
            paddingLeft: 12,
            paddingRight: 16
          }
        }
      },

      /* Styles applied to the root element if `padding="checkbox"`. */
      paddingCheckbox: {
        "padding": "4px 16px 4px 16px",
        "&:last-child": {
          paddingLeft: 0,
          paddingRight: 16
        }
      }
    },
    MuiPaper: {
      root: {
        border: "1px solid ".concat(colors.black10)
      },
      elevation0: {
        border: "none"
      }
    }
  }
};
export default createTheme(rawMuiTheme);