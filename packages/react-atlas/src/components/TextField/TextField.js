/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TextFieldCore } from "react-atlas-core/src";
import { TextFieldStyle } from "react-atlas-default-theme/src";
const TextFieldComp = CSSModules(TextFieldCore, TextFieldStyle, {
  allowMultiple: true
});
export default class TextField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TextFieldComp {...this.props} />;
  }
}
TextField.propTypes = {
  /** Sets if the TextField is valid. */
  isValid: PropTypes.bool,

  /** Define an id for the text input. */
  id: PropTypes.string,

  /** An Object, array, or string of CSS classes to apply to TextField. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Define a name for the text input.
   @examples '<TextField name="test"/>' */
  name: PropTypes.string,

  /** Define a type for the text input. Default is "text".
   @examples '<TextField type="password"/>' */
  type: PropTypes.string,

  /** Define a default value for the text input.
   @examples '<TextField value="Textfield value here"/>' */
  value: PropTypes.string,

  /** Defines a small sized text input.
   @examples '<TextField small/>' */
  small: PropTypes.bool,

  /** Define a label to be displayed above the textfield.
   @examples '<TextField label="test"/>' */
  label: PropTypes.string,

  /** Defines a medium sized text input.
   @examples '<TextField medium/>' */
  medium: PropTypes.bool,

  /** Defines a large sized text input.
   @examples '<TextField large/>' */
  large: PropTypes.bool,

  /** Sets a maximum character length that will be validated onChange.
   @examples '<TextField maxLenght={25}/>' */
  maxLength: PropTypes.number,

  /** Sets a handler function to be executed and validate against. If it returns any falsy value, validation error will trigger.
   @examples '<TextField validator={this.customValidator}/>' */
  validator: PropTypes.func,

  /** Defines the error text to be shown when custom validation occurs.
   @examples '<TextField errorText="Custom error message."/>' */
  errorText: PropTypes.string,

  /** Sets a mask for the input field.
   @examples '<TextField mask="AAA 11111"/>' */
  mask: PropTypes.string,

  /** Defines placeholder text.
   @examples '<TextField placeholder="test input"/>' */
  placeholder: PropTypes.string,

  /** Sets a handler function to be executed when onChange event occurs (at input element).
   @examples <TextField onChange={this.customOnChangeFunc}/> */
  onChange: PropTypes.func,

  /** Sets the field as required. Will be validated onChange.
   @examples '<TextField required/>' */
  required: PropTypes.bool,

  /** Sets the text to show next to the label for a required TextField. If omitted will default to *.
   @examples '<TextField required requiredText="required"/>' */
  requiredText: PropTypes.string,

  /** Determines if the text input is disabled.
   @examples '<TextField disabled/>' */
  disabled: PropTypes.bool,

  /** Determines if the text input is hidden.
   @examples '<TextField hidden/>' */
  hidden: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Sets whether or not TextField will display as inline */
  inline: PropTypes.bool,

  /** passes tooltip as prop if added to textField */
  tooltip: PropTypes.string,

  /**  */
  tooltipRight: PropTypes.bool,

  /** Set if you want a link button next to the textfield label. * */
  link: PropTypes.bool,

  /** Set if you want the link button to the right of the textfield label. * */
  linkRight: PropTypes.bool,

  /** The text of the link button. * */
  linkText: PropTypes.string,

  /** Callback to call when link button is clicked. * */
  linkOnClick: PropTypes.func,

  /** HREF to set on the link button. * */
  href: PropTypes.string,

  /** Converts all entered text to uppercase. */
  uppercase: PropTypes.bool,

  /** Allows user to move the label to the left of the TextField instead of above it */
  leftLabel: PropTypes.bool,

  /** A callback that fires onBlur. */
  onBlur: PropTypes.func
};
