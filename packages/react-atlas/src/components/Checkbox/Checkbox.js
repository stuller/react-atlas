/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { CheckboxCore } from "react-atlas-core/src";
import { CheckboxStyle } from "react-atlas-default-theme/src";
const CheckboxComp = CSSModules(CheckboxCore, CheckboxStyle, {
  allowMultiple: true
});
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CheckboxComp {...this.props} />;
  }
}
Checkbox.propTypes = {
  /** When true, Checkbox will be checked on load. */
  checked: PropTypes.bool,

  /** An object, array, or string of CSS classes to apply to Checkbox. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** If included, checkbox is disabled
   @examples <Checkbox disabled />, <Checkbox disabled={true} /> */
  disabled: PropTypes.bool,

  /** Used to pass a function for custom validation. Should return either true or false. */
  errorCallback: PropTypes.func,

  /** For use when an error state has been passed down from the parent CheckboxGroup. */
  groupError: PropTypes.bool,

  /** Determines if the Checkbox is hidden.
   @examples '<Checkbox hidden/>' */
  hidden: PropTypes.bool,

  /** Will set the html "id" property on the Checkbox. */
  id: PropTypes.string,

  /** When true, will render the Checkbox and its label inline. */
  inline: PropTypes.bool,

  /** Text for Checkbox label.
   @examples 'Some Label' */
  label: PropTypes.string,

  /** Will position the Checkbox label to the left or the right of the checkbox. */
  labelPosition: PropTypes.string,

  /** Will set the html "name" property on the input element. */
  name: PropTypes.string,

  /** Function that will be executed before changing the "checked" state of the Checkbox. */
  onBeforeChange: PropTypes.func,

  /** Function that will be executed when the Checkbox state is changed. */
  onChange: PropTypes.func,

  /** Function that will be executed on click. */
  onClick: PropTypes.func,

  /** When true, Checkbox will return an error onBlur or onChange if not checked. */
  required: PropTypes.bool,

  /** A custom message that will be displayed if required property is set to true and user does not check Checkbox. */
  requiredMessage: PropTypes.string,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Text for Checkbox label title. (i.e. "alt-text" for checkboxes, useful for accessibility). If not provided, label text will be used.
   @examples 'Some Title' */
  title: PropTypes.string,

  /** The value of the Checkbox. */
  value: PropTypes.string
};
