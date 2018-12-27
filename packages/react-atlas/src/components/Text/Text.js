/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TextCore } from "react-atlas-core/src";
import { TextStyle } from "react-atlas-default-theme/src";
const TextComp = CSSModules(TextCore, TextStyle, { allowMultiple: true });
export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TextComp {...this.props} />;
  }
}
Text.propTypes = {
  /** Defines what HTML element to render the Text component as. Possibilities include, but are not limited to b, body, del, em, h1, h2, h3, h4, h5, h6, i, ins, label, mark, p, small, strong, sub, and sup. */
  as: PropTypes.string,

  /** Allows theme to differentiate font-family between default font and body copy in variables.css */
  body: PropTypes.bool,

  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** An Object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Adds a "for" attribute to your element. Intended to be used when setting the as property to "label". */
  htmlFor: PropTypes.string,

  /** Defines an id for the input.
   @examples '<Text as="text" name="test"/>' */
  id: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object
};
