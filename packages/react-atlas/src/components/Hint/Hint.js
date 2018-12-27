/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { HintCore } from "react-atlas-core/src";
import { HintStyle } from "react-atlas-default-theme/src";
const HintComp = CSSModules(HintCore, HintStyle, { allowMultiple: true });
export default class Hint extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <HintComp {...this.props} />;
  }
}
Hint.propTypes = {
  /** Text to be displayed can be passed as a child.
   @examples '<Hint>This is a text hint</Hint>' */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Hint. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Text that will be displayed (will override children if passed).
   @examples '<Hint text="This is a text hint"/>' */
  text: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object
};
