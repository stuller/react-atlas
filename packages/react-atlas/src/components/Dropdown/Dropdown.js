/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { DropdownCore } from "react-atlas-core/src";
import { DropdownStyle } from "react-atlas-default-theme/src";
const DropdownComp = CSSModules(DropdownCore, DropdownStyle, {
  allowMultiple: true
});
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DropdownComp {...this.props} />;
  }
}
Dropdown.propTypes = {
  /** When true, Dropdown will display as open. */
  active: PropTypes.bool,

  /** The children elements to be wrapped by the Dropdown menu. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Dropdown. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /**  */
  clickEvent: PropTypes.func,

  /** Text that will be displayed for Dropdown label.
   @examples 'Some Label' */
  customLabel: PropTypes.string,

  /** Default text that will be displayed in collapsed Dropdown on initial render. */
  defaultText: PropTypes.string,

  /** When true, Dropdown will be disabled.
   @examples <Dropdown disabled />, <Dropdown disabled={true} /> */
  disabled: PropTypes.bool,

  /** Used to pass a function for custom validation. Should return either true or false, or
an object with the properties valid and message. If false is returned the default error message
is used. If an object is used and the valid property is false, the string in the property message
will be used for the error message. */
  errorCallback: PropTypes.func,

  /** When true, Dropdown will display inline. */
  inline: PropTypes.bool,

  /** When true, tells Dropdown whether the value is valid. When false, controls error message. */
  isValid: PropTypes.bool,

  /** When true, label will be displayed to the left of Dropdown. */
  leftLabel: PropTypes.bool,

  /** The name of the key value used when submitting the Dropdown value. */
  name: PropTypes.string,

  /** Function that will be executed before onChange event. */
  onBeforeChange: PropTypes.func,

  /** Function that will be executed when the Dropdown state is changed. */
  onChange: PropTypes.func,

  /** Function that will be executed on click. */
  onClick: PropTypes.func,

  /** When true, Dropdown will return an error onBlur or onChange if a value is not selected. */
  required: PropTypes.bool,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** The initial value that Dropdown will default to. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Will set width of Dropdown. */
  width: PropTypes.string
};
