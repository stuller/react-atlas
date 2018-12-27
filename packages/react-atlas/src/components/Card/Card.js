/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { CardCore } from "react-atlas-core/src";
import { CardStyle } from "react-atlas-default-theme/src";
const CardComp = CSSModules(CardCore, CardStyle, { allowMultiple: true });
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CardComp {...this.props} />;
  }
}
Card.propTypes = {
  /** Any HTML element or React Component.
   @examples <p>Some Text.</p> */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to card. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Path to an image that will be displayed in Card.
   @examples "http://path.to/an/image.jpg" */
  image: PropTypes.string,

  /** Legend that will be displayed on Card when standardFieldset prop is true. */
  legend: PropTypes.string,

  /** When true, will generate a fieldset Card.
   @example <Card standardFieldset>{children}</Card> */
  standardFieldset: PropTypes.bool,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Title that will be displayed inside Cards that do not have the standardFieldset prop.
   @examples "Title Words" will output "Title Words" */
  title: PropTypes.string
};
