/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { InputCore } from "react-atlas-core/src";
import { InputStyle } from "react-atlas-default-theme/src";
const InputComp = CSSModules(InputCore, InputStyle, { allowMultiple: true });
export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <InputComp {...this.props} />;
  }
}
Input.propTypes = {
  /**  */
  isValid: PropTypes.bool,

  /** An Object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Defines the input type. Accepts HTML5 input types.
   @examples 'text', 'checkbox', 'radio', 'password', 'email' */
  type: PropTypes.string,

  /** Defines an id for the input.
   @examples '<Input type="text" id="test"/>' */
  id: PropTypes.string,

  /** Defines a name for the input.
   @examples '<Input type="text" name="test"/>' */
  name: PropTypes.string,

  /** Sets the field as required. Will be validated onChange.
   @examples '<Input type="text" required/>' */
  required: PropTypes.bool,

  /** Defines error message to be displayed on custom validation.
   @examples '<Input type="text" validator={this.validateTest} errorText="Custom validation msg"/>' */
  errorText: PropTypes.string,

  /** Defines error messages location (on validation).
> Valid values are 'right' and 'bottom'.
> Default value is 'right'.
@examples '<Input type="text" required errorLocation="buttom"/>' */
  errorLocation: PropTypes.string,

  /** Defines a determinate value for the input.
   @examples '<Input type="text" value="test input"/>' */
  value: PropTypes.string,

  /** Determines if the input is disabled.
   @examples '<Input type="text" disabled/>' */
  disabled: PropTypes.bool,

  /** Determines if the input is hidden.
   @examples '<Input type="text" hidden/>' */
  hidden: PropTypes.bool,

  /** Only for input type checkbox. Determines if the input is checked.
   @examples '<Input type="checkbox" checked/>' */
  checked: PropTypes.bool,

  /** Sets a maximum character lenght that will be validated onChange.
   @examples '<Input type="text" maxLenght={25}/>' */
  maxLength: PropTypes.number,

  /** Defines placeholder text.
   @examples '<Input type="text" placeholder="test input"/>' */
  placeholder: PropTypes.string,

  /** Renders a textarea element instead. To be used in TextArea component.
   @examples '<Input multiline/>' */
  multiline: PropTypes.bool,

  /** Defines a small sized input element.
   @examples '<Input type="text" small/>' */
  small: PropTypes.bool,

  /** Defines a medium sized input element.
   @examples '<Input type="text" small/>' */
  medium: PropTypes.bool,

  /** Defines a large sized input element.
   @examples '<Input type="text" small/>' */
  large: PropTypes.bool,

  /** Defines a pattern for masked input.
   @examples '<Input type="text" mask="1111-1111-1111"/>' */
  mask: PropTypes.string,

  /** Sets a custom validator function that will be executed onChange.
> Should return a boolean value, otherwise will evaluate to false.
> Error message to be displayed will come from errorText prop.
@examples '<Input type="text" validator={this.validateTest} errorText="Custom validation msg"/>' */
  validator: PropTypes.func,

  /** Sets a handler function to be executed before onChange event occurs (executed onClick).
   @examples <Input type="text" onBeforeChange={this.customOnClickFunc}/> */
  onBeforeChange: PropTypes.func,

  /** Sets a handler function to be executed when onChange event occurs.
   @examples <Input type="text" onChange={this.customOnChangeFunc}/> */
  onChange: PropTypes.func,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Converts all entered text to uppercase. */
  uppercase: PropTypes.bool,

  /** Specifies the amount of rows */
  rows: PropTypes.number
};
