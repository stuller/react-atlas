/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { RadioGroupCore } from "react-atlas-core/src";
import { RadioGroupStyle } from "react-atlas-default-theme/src";
const RadioGroupComp = CSSModules(RadioGroupCore, RadioGroupStyle, {
  allowMultiple: true
});
export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <RadioGroupComp {...this.props} />;
  }
}
RadioGroup.propTypes = {
  /** Child elements, typically Radio components.
   @examples '<RadioGroup><Radio/><Radio/></RadioGroup>' */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to RadioGroup. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, RadioGroup will display inline.
   @examples '<RadioGroup inline></RadioGroup>' */
  inline: PropTypes.bool,

  /** When true, children will display inline.
   @examples '<RadioGroup inlineChildren></RadioGroup>' */
  inlineChildren: PropTypes.bool,

  /** Form name for the element, this will set all Radio children the same form name (so they can't be selected at the same time).
   @examples '<RadioGroup name="test"></RadioGroup>' */
  name: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Will define the selected/checked Radio component in the RadioGroup. */
  selectedValue: PropTypes.string,

  /** Defines the element title.
   @examples '<RadioGroup title="Test"></RadioGroup>' */
  title: PropTypes.string
};
