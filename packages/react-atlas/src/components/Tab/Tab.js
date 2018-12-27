/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TabCore } from "react-atlas-core/src";
import { TabStyle } from "react-atlas-default-theme/src";
const TabComp = CSSModules(TabCore, TabStyle, { allowMultiple: true });
export default class Tab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TabComp {...this.props} />;
  }
}
Tab.propTypes = {
  /** Child components or elements to be displayed as the title on Tab. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Tab. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, Tab sill be disabled. */
  disabled: PropTypes.bool,

  /** The CSS class name for the icon that will be displayed on Tab. */
  icon: PropTypes.string,

  /** When true, Tab will be selected. */
  selected: PropTypes.bool,

  /** Function to be executed when a Tab is selected. */
  setSelectedTab: PropTypes.func,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Tab index. */
  tabIndex: PropTypes.number,

  /** When true, Tabs will display vertically. */
  vertical: PropTypes.bool
};
