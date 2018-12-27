/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TooltipCore } from "react-atlas-core/src";
import { TooltipStyle } from "react-atlas-default-theme/src";
const TooltipComp = CSSModules(TooltipCore, TooltipStyle, {
  allowMultiple: true
});
export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TooltipComp {...this.props} />;
  }
}
Tooltip.propTypes = {
  /** For displaying all children which can include anything from Form to button to a custom icon like in the example.
   @examples <GithubIcon />, <i className="fa fa-github"></i> */
  children: PropTypes.any,

  /** An Object, array, or string of CSS classes to apply to Tooltip. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** For the text displayed within the tooltip
   @examples <Tooltip text="default"/> */
  text: PropTypes.string,

  /** For delay of tooltip message
   @example <Tooltip delay={10000}/> */
  delay: PropTypes.number,

  /** For disabling tooltip
   @example <Tooltip disabled /> */
  disabled: PropTypes.bool,

  /** For positioning the tooltip to top, left, right or bottom.  Default is top.
   @example <Tooltip position="left"/> */
  position: PropTypes.string,

  /** For displaying an icon/glphyicon. Normally these will be another component or an element with a class on it.
   @examples <GithubIcon />, <i class="fa fa-github"></i> */
  icon: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object
};
