/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { BreadcrumbItemCore } from "react-atlas-core/src";
import { BreadcrumbItemStyle } from "react-atlas-default-theme/src";
const BreadcrumbItemComp = CSSModules(BreadcrumbItemCore, BreadcrumbItemStyle, {
  allowMultiple: true
});
export default class BreadcrumbItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BreadcrumbItemComp {...this.props} />;
  }
}
BreadcrumbItem.propTypes = {
  /** An object, array, or string of CSS classes to apply to BreadcrumbItem. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** Render active item style */
  active: PropTypes.bool
};
