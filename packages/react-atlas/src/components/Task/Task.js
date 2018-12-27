/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TaskCore } from "react-atlas-core/src";
import { TaskStyle } from "react-atlas-default-theme/src";
const TaskComp = CSSModules(TaskCore, TaskStyle, { allowMultiple: true });
export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TaskComp {...this.props} />;
  }
}
Task.propTypes = {
  /** An Object, array, or string of CSS classes to apply to CheckboxGroup. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Adds font-awesome icon to left of title */
  icon: PropTypes.string,

  /** Will set the html "id" property on the Button. */
  id: PropTypes.string,

  /** The index of the Task within the parent Taskbar. */
  index: PropTypes.number,

  /** Function that will be executed on click. */
  onClick: PropTypes.func,

  /** Adds selected class if true */
  selected: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Text for task
   @examples 'Item One' */
  title: PropTypes.string
};
