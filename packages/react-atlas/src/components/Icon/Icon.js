/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { IconCore } from "react-atlas-core/src";
import { IconStyle } from "react-atlas-default-theme/src";
const IconComp = CSSModules(IconCore, IconStyle, { allowMultiple: true });
export default class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <IconComp {...this.props} />;
  }
}
Icon.propTypes = {
  /** An Object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Defines an icon for the icon.
   @examples '<Icon icon={"fa fa-id-card"}/>' */
  icon: PropTypes.string,

  /** Defines a large sized icon element.
   @examples '<Icon large icon={"fa fa-id-card"}/>' */
  large: PropTypes.bool,

  /** Defines an onclick for the icon.
   @examples '<Icon onClick={ () => this._handleClick } icon={"fa fa-id-card"}/>' */
  onClick: PropTypes.func,

  /** Defines a small sized icon element.
   @examples '<Icon small icon={"fa fa-id-card"}/>' */
  small: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object
};
