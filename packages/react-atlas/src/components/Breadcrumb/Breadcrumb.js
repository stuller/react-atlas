/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { BreadcrumbCore } from "react-atlas-core/src";
import { BreadcrumbStyle } from "react-atlas-default-theme/src";
const BreadcrumbComp = CSSModules(BreadcrumbCore, BreadcrumbStyle, {
  allowMultiple: true
});
export default class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BreadcrumbComp {...this.props} />;
  }
}
Breadcrumb.propTypes = {
  /** An object, array, or string of CSS classes to apply to Breadcrumb. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** BreadcrumbItem instances. */
  children: PropTypes.node
};
