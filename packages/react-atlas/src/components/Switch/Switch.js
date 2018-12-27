/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { SwitchCore } from "react-atlas-core/src";
import { SwitchStyle } from "react-atlas-default-theme/src";
const SwitchComp = CSSModules(SwitchCore, SwitchStyle, { allowMultiple: true });
export default class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SwitchComp {...this.props} />;
  }
}
Switch.propTypes = {
  /** Defines the color that will be displayed for the inner button.
   @examples '<Switch buttonColor="#ffffff"/>' */
  buttonColor: PropTypes.string,

  /** When true, Switch will be checked.
   @examples '<Switch checked={condition}/>' */
  checked: PropTypes.bool,

  /** An object, array, or string of CSS classes to apply to Switch. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, Switch will be disabled.
   @examples '<Switch disabled={condition}/>' */
  disabled: PropTypes.bool,

  /** When true, Switch will be hidden.
   @examples '<Switch hidden={condition}/>' */
  hidden: PropTypes.bool,

  /** Defines an id to be used by the Switch input. */
  id: PropTypes.string,

  /** When true, Swtich will display inline. */
  inline: PropTypes.bool,

  /** When true, label will be displayed to the left of Switch. */
  leftLabel: PropTypes.bool,

  /** Text that will be used for Switch label. */
  label: PropTypes.string,

  /** When true, Switch will be large size.
   @examples '<Switch large/>' */
  large: PropTypes.bool,

  /** When true, Switch will be medium size.
   @examples '<Switch medium/>' */
  medium: PropTypes.bool,

  /** Defines a name for the Switch input.
   @examples '<Switch name="test"/>' */
  name: PropTypes.string,

  /** Function that will be executed when onClick event occurs. */
  onClick: PropTypes.func,

  /** Defines color that will be displayed when the Switch is unchecked.
   @examples '<Switch offColor="#d3d3d3"/>' */
  offColor: PropTypes.string,

  /** Function that will be executed before the onClick event occurs.
   @examples <Switch onBeforeChange={this.customOnBeforeChangeFunc}/> */
  onBeforeChange: PropTypes.func,

  /** Function that will be executed when onClick event occurs.
   @examples <Switch onChange={this.customOnChangeFunc}/> */
  onChange: PropTypes.func,

  /** Defines the color that will be displayed when the Switch is checked.
   @examples '<Switch onColor="#ababab"/>' */
  onColor: PropTypes.string,

  /** When true, Switch will be small size.
   @examples '<Switch small/>' */
  small: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object
};
