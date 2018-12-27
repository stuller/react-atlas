/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TabListCore } from "react-atlas-core/src";
import { TabListStyle } from "react-atlas-default-theme/src";
const TabListComp = CSSModules(TabListCore, TabListStyle, {
  allowMultiple: true
});
export default class TabList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TabListComp {...this.props} />;
  }
}
TabList.propTypes = {
  /** Will be automatically set when bordered prop is passed to Tabs component.

@ignore */
  bordered: PropTypes.bool,

  /** An object, array, or string of CSS classes to apply to TabPanel. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Tab components that will be displayed in TabList. */
  children: PropTypes.node,

  /** Selected tab index (default 0 - first tab). */
  selectedTab: PropTypes.number,

  /** Handler to execute when a tab is selected, in Tabs component. */
  setSelectedIndex: PropTypes.func,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Will be automatically set when vertical prop is passed to Tabs component. */
  vertical: PropTypes.bool
};
