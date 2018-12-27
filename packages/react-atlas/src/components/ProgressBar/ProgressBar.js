/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { ProgressBarCore } from "react-atlas-core/src";
import { ProgressBarStyle } from "react-atlas-default-theme/src";
const ProgressBarComp = CSSModules(ProgressBarCore, ProgressBarStyle, {
  allowMultiple: true
});
export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ProgressBarComp {...this.props} />;
  }
}
ProgressBar.propTypes = {
  /** The value of a second progress bar
   @examples '' */
  buffer: PropTypes.number,

  /** An object, array, or string of CSS classes to apply to ProgressBar. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Determines what color the ProgressBar will be.
   @examples '<ProgressBar color="red"/>' */
  color: PropTypes.string,

  /** The max value of the ProgressBar */
  max: PropTypes.number,

  /** The min value of the ProgressBar */
  min: PropTypes.number,

  /** Mode can be one of: 'determinate', 'indeterminate'
   indeterminate will show a cycling ProgressBar; determinate will show progress based on value. */
  mode: PropTypes.string,

  /** If true, ProgressBar will change colors during transition

@ignore */
  multicolor: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Length of time in seconds for the transition (can use decimals)
   @examples '35' */
  transitionDuration: PropTypes.string,

  /** Type of ProgressBar; 'circular' or 'linear' */
  type: PropTypes.enum,

  /** The default value(s) of the progress bar.  Can be a number or an object containing keys of "from" and "to"
   @examples '{"from": 10, "to": 80" }' */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      from: { name: "number", required: false },
      to: { name: "number", required: false }
    })
  ])
};
