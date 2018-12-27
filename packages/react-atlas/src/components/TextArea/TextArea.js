/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TextAreaCore } from "react-atlas-core/src";
import { TextAreaStyle } from "react-atlas-default-theme/src";
const TextAreaComp = CSSModules(TextAreaCore, TextAreaStyle, {
  allowMultiple: true
});
export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TextAreaComp {...this.props} />;
  }
}
TextArea.propTypes = {
  /**  */
  isValid: PropTypes.bool,

  /** An Object, array, or string of CSS classes to apply to TextArea. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Define a name for the textarea input.
   @examples '<TextArea id="test"/>' */
  id: PropTypes.string,

  /** Define a name for the textarea input.
   @examples '<TextArea name="test"/>' */
  name: PropTypes.string,

  /** Define a value for the textarea input.
   @examples '<TextArea value="test"/>' */
  value: PropTypes.string,

  /** Define a title or label to be displayed above the textarea.
   @examples '<TextArea label="test"/>' */
  label: PropTypes.string,

  /** Defines a resizable textarea. Default: true.
   @examples '<TextArea resizable={false}/>' */
  resizable: PropTypes.bool,

  /** Defines a small sized textarea.
   @examples '<TextArea small/>' */
  small: PropTypes.bool,

  /** Defines a medium sized textarea.
   @examples '<TextArea medium/>' */
  medium: PropTypes.bool,

  /** Defines a large sized textarea.
   @examples '<TextArea large/>' */
  large: PropTypes.bool,

  /** Sets a maximum character length that will be validated onChange.
   @examples '<TextArea maxLength={25}/>' */
  maxLength: PropTypes.number,

  /** Defines placeholder text.
   @examples '<TextArea placeholder="test input"/>' */
  placeholder: PropTypes.string,

  /** Sets a handler function to be executed when onChange event occurs (at input element).
   @examples <TextArea onChange={this.customOnChangeFunc}/> */
  onChange: PropTypes.func,

  /** Sets the field as required. Will be validated onChange.
   @examples '<TextArea required/>' */
  required: PropTypes.bool,

  /** Determines if the textarea is disabled.
   @examples '<TextArea disabled/>' */
  disabled: PropTypes.bool,

  /** Determines if the textarea is hidden.
   @examples '<TextArea hidden/>' */
  hidden: PropTypes.bool,

  /** Set the tooltip value * */
  tooltip: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Positions the tooltip to the right. Default true. */
  tooltipRight: PropTypes.bool,

  /** Allows user to move the label to the left of the TextArea instead of having it on top */
  leftLabel: PropTypes.bool,

  /** Specifies the amount of rows */
  rows: PropTypes.number
};
