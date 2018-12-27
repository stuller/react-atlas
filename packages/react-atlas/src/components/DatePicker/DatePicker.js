/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { DatePickerCore } from "react-atlas-core/src";
import { DatePickerStyle } from "react-atlas-default-theme/src";
const DatePickerComp = CSSModules(DatePickerCore, DatePickerStyle, {
  allowMultiple: true
});
export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DatePickerComp {...this.props} />;
  }
}
DatePicker.propTypes = {
  /** An object, array, or string of CSS classes to apply to DatePicker. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** A date format that will be applied to the displayed date.  Default is MM/DD/YYYY. */
  format: PropTypes.string,

  /** The name that will be applied to the input element. */
  name: PropTypes.string,

  /** The function that will be executed on change. */
  onChange: PropTypes.func,

  /** The currently selected Date. */
  selected: PropTypes.string,

  /** Pass inline styles here. */
  style: PropTypes.object
};
