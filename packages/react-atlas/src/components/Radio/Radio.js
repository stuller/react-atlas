/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { RadioCore } from "react-atlas-core/src";
import { RadioStyle } from "react-atlas-default-theme/src";
const RadioComp = CSSModules(RadioCore, RadioStyle, { allowMultiple: true });
export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <RadioComp {...this.props} />;
  }
}
Radio.propTypes = {
  /** When true, Radio will be checked.
   @examples '<Radio checked/>' */
  checked: PropTypes.bool,

  /** An object, array, or string of CSS classes to apply to Radio. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, Radio will be checked by default.
   @examples '<Radio defaultChecked/>' */
  defaultChecked: PropTypes.bool,

  /** When true, Radio will be disabled.
   @examples '<Radio disabled/>' */
  disabled: PropTypes.bool,

  /** When true, Radio will be hidden.
   @examples '<Radio hidden/>' */
  hidden: PropTypes.bool,

  /** When true, Radio will display inline.
   @examples '<Radio inline/>' */
  inline: PropTypes.bool,

  /** Function that will be used as a callback to send to RadioGroup component.
   @examples '<Radio groupSetChecked={...}/>' */
  groupSetChecked: PropTypes.func,

  /** Defines the text that will be displayed for Radio label.
   @examples '<Radio label="test"/>' */
  label: PropTypes.string,

  /** Defines the label position.
   @examples '<Radio labelPosition="top"/>' */
  labelPosition: PropTypes.string,

  /** Define a name for the Radio. Not necessary if using RadioGroup component as wrapper.
   @examples '<Radio name="test"/>' */
  name: PropTypes.string,

  /** Function that will be executed before onChange event occurs.
   @examples '<Radio onBeforeChange={onBeforeChangeHandler}/>' */
  onBeforeChange: PropTypes.func,

  /** Function that will be executed when onChange event occurs.
   @examples '<Radio onChange={onChangeHandler}/>' */
  onChange: PropTypes.func,

  /** Function that will be executed when onClick event occurs.
   @examples '<Radio onClick={onClickHandler}/>' */
  onClick: PropTypes.func,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Defines the title attribute.
   @examples '<Radio title="Test"/>' */
  title: PropTypes.string,

  /** Defines a value for the radio button.
   @examples '<Radio value="100"/>' */
  value: PropTypes.any
};
