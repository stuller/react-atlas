/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { PanelCore } from "react-atlas-core/src";
import { PanelStyle } from "react-atlas-default-theme/src";
const PanelComp = CSSModules(PanelCore, PanelStyle, { allowMultiple: true });
export default class Panel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <PanelComp {...this.props} />;
  }
}
Panel.propTypes = {
  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Panel. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Pass inline styling here. */
  style: PropTypes.object
};
