/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { CheckboxGroupCore } from "react-atlas-core/src";
import { CheckboxGroupStyle } from "react-atlas-default-theme/src";
const CheckboxGroupComp = CSSModules(CheckboxGroupCore, CheckboxGroupStyle, {
  allowMultiple: true
});
export default class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CheckboxGroupComp {...this.props} />;
  }
}
CheckboxGroup.propTypes = {
  /** Anything that can be in a CheckboxGroup. Typically only includes Checkbox components and a header.
   @examples '<CheckboxGroup><Checkbox/><Checkbox/></CheckboxGroup>' */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to CheckboxGroup. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, will display the CheckboxGroup inline.
   @examples '<CheckboxGroup inline></CheckboxGroup>' */
  inline: PropTypes.bool,

  /** When true, will display child Checkbox components inline.
   @examples '<CheckboxGroup inlineChildren></CheckboxGroup>' */
  inlineChildren: PropTypes.bool,

  /** Will define a custom message to display if either min or max properties are not met. {0} can be used in the message to be replaced by the appropriate min or max property.
   @examples '<CheckboxGroup min="3" limitMessage="Please select at least {0} of the checkboxes below."></CheckboxGroup>' */
  limitMessage: PropTypes.string,

  /** Will define the maximum number of checkboxes the user is allowed to select before proceeding.
   @examples '<CheckboxGroup max="3"></CheckboxGroup>' */
  max: PropTypes.number,

  /** Will define the minimum number of checkboxes the user must select in order to proceed.
   @examples '<CheckboxGroup min="3"></CheckboxGroup>' */
  min: PropTypes.number,

  /** Form name for the element. This will set all Checkbox children the same form name.
   @examples '<CheckboxGroup name="test"></CheckboxGroup>' */
  name: PropTypes.string,

  /** An optional callback that will be fired when any checkbox in the
CheckboxGroup changes value. The callback has four arguments.
function(value, event, isValid, checked). */
  onChange: PropTypes.func,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Text that will be displayed above the checkboxes in the CheckboxGroup.
   @examples '<CheckboxGroup title="Options"></CheckboxGroup>' */
  title: PropTypes.string
};
