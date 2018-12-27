/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { FormCore } from "react-atlas-core/src";
import { FormStyle } from "react-atlas-default-theme/src";
const FormComp = CSSModules(FormCore, FormStyle, { allowMultiple: true });
export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <FormComp {...this.props} />;
  }
}
Form.propTypes = {
  /** The URL of the server that Form will send data to. Data will be passed as a querystring. */
  action: PropTypes.string,

  /** When true, input elements will have their values
automatically completed by the browser. This setting can be overridden
by an autoComplete attribute on an element belonging to the form. */
  autoComplete: PropTypes.bool,

  /** An object, array, or string of CSS classes to
   apply to Form's children components. */
  childClasses: PropTypes.node,

  /** Children components, usually a TextField, Dropdown, Checkbox, etc. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Form. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When the value of the method attribute is post, enctype is the
   MIME type of content that will be used to submit Form to the server. */
  enctype: PropTypes.string,

  /** The HTTP method that will be used when action is set and
   the form is submitting. Default is POST. */
  method: PropTypes.string,

  /** The name of the Form. */
  name: PropTypes.string,

  /** When true, Form will not use HTML5 validation. */
  noValidate: PropTypes.bool,

  /** A Callback that will be executed when there is a form error.
   _Example: function(errorMsg)_ */
  onError: PropTypes.func,

  /** A callback that will be executed when the form has passed validation
and is ready to submit. Returns the form data and the event object.
_Example: function(event, data) {}_ */
  onSubmit: PropTypes.func,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** A name or keyword indicating where to display the response that will be received after submitting the form. */
  target: PropTypes.string
};
