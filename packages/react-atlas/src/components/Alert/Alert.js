/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { AlertCore } from "react-atlas-core/src";
import { AlertStyle } from "react-atlas-default-theme/src";
const AlertComp = CSSModules(AlertCore, AlertStyle, { allowMultiple: true });
export default class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AlertComp {...this.props} />;
  }
}
Alert.propTypes = {
  /** Any HTML element or React Component. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Button. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, the Alert can be dismissed. */
  dismissible: PropTypes.bool,

  /** A boolean to hide or show the alert component. */
  hidden: PropTypes.bool,

  /** Function that will be executed on dismiss. */
  onDismiss: PropTypes.func,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Will set the Alert's style.  One of: 'info', 'success', 'warning', 'danger' */
  type: PropTypes.string
};
