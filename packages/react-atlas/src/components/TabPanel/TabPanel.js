/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TabPanelCore } from "react-atlas-core/src";
import { TabPanelStyle } from "react-atlas-default-theme/src";
const TabPanelComp = CSSModules(TabPanelCore, TabPanelStyle, {
  allowMultiple: true
});
export default class TabPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TabPanelComp {...this.props} />;
  }
}
TabPanel.propTypes = {
  /** Will be automatically set when bordered prop is passed to Tabs component. */
  bordered: PropTypes.bool,

  /** Text, components or elements that will be displayed as TabPanel content. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to TabPanel. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, TabPanel is selected. */
  selected: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Will be automatically set when vertical prop is passed to Tabs component. */
  vertical: PropTypes.bool
};
