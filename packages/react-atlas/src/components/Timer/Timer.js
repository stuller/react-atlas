/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TimerCore } from "react-atlas-core/src";
import { TimerStyle } from "react-atlas-default-theme/src";
const TimerComp = CSSModules(TimerCore, TimerStyle, { allowMultiple: true });
export default class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TimerComp {...this.props} />;
  }
}
Timer.propTypes = {
  /** An Object, array, or string of CSS classes to apply to avatar. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Time Property
Number property.  Timer will allow input of a number which is converted to seconds // TODO convert to accept more than seconds
@examples <Timer timer={60}/> */
  time: PropTypes.number,

  /** Prop to pass inline styles. */
  style: PropTypes.object
};
