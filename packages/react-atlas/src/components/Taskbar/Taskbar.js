/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TaskbarCore } from "react-atlas-core/src";
import { TaskbarStyle } from "react-atlas-default-theme/src";
const TaskbarComp = CSSModules(TaskbarCore, TaskbarStyle, {
  allowMultiple: true
});
export default class Taskbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TaskbarComp {...this.props} />;
  }
}
Taskbar.propTypes = {
  /** Determines if the Taskbar children should be centered */
  center: PropTypes.bool,

  /** Any HTML element or React Component.
   @examples <p>Some Text.</p> */
  children: PropTypes.node,

  /** An Object, array, or string of CSS classes to apply to CheckboxGroup. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Function that will be executed on click. */
  onClick: PropTypes.func,

  /** Pass inline styling here. */
  style: PropTypes.object
};
