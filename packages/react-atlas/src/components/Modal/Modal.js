/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { ModalCore } from "react-atlas-core/src";
import { ModalStyle } from "react-atlas-default-theme/src";
const ModalComp = CSSModules(ModalCore, ModalStyle, { allowMultiple: true });
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ModalComp {...this.props} />;
  }
}
Modal.propTypes = {
  /** When true, will display Modal. */
  active: PropTypes.bool,

  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Modal. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, will hide page scroll. */
  lockScroll: PropTypes.bool,

  /** Event handler for esc key down, can be used to close modal if needed. */
  onEscKeyDown: PropTypes.func,

  /** Event handler for clicking on overlay, can be used to close modal if needed. */
  onOverlayClick: PropTypes.func,

  /** When true, will display Modal with overlay. */
  overlay: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Text that will be displayed as title content in the Modal. */
  title: PropTypes.string
};
