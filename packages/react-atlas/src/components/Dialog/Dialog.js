/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { DialogCore } from "react-atlas-core/src";
import { DialogStyle } from "react-atlas-default-theme/src";
const DialogComp = CSSModules(DialogCore, DialogStyle, { allowMultiple: true });
export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DialogComp {...this.props} />;
  }
}
Dialog.propTypes = {
  /** When true, Dialog will display. */
  active: PropTypes.bool,

  /** Child elements that will be displayed as Dialog content. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Dialog. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, Dialog will be a confirm type and display both an Ok button and a Cancel button. */
  confirm: PropTypes.bool,

  /** When true, Dialog will be an info type and display an Ok button. */
  info: PropTypes.bool,

  /** When true, scrolling will be disabled. */
  lockScroll: PropTypes.bool,

  /** Function that will be executed when user clicks the Cancel button. */
  onCancel: PropTypes.func,

  /** Function that will be executed when user clicks the Ok button. */
  onOk: PropTypes.func,

  /** When true, Dialog will display as a modal overlay. */
  overlay: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Pass inline styling here. */
  styles: PropTypes.object,

  /** Text that will be displayed as title content in the Dialog. */
  title: PropTypes.string,

  /** When true, Dialog will be a warning type and display both an Ok button and a Cancel button. */
  warning: PropTypes.bool
};
