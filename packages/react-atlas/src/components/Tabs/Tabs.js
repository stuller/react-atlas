/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TabsCore } from "react-atlas-core/src";
import { TabsStyle } from "react-atlas-default-theme/src";
const TabsComp = CSSModules(TabsCore, TabsStyle, { allowMultiple: true });
export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TabsComp {...this.props} />;
  }
}
Tabs.propTypes = {
  /** When true, a border will display around TabPanels. */
  bordered: PropTypes.bool,

  /** TabList and TabPanel components. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Tabs. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Function that will be executed when a Tab is selected. */
  onSelect: PropTypes.func,

  /** The index of the Tab that will be selected. This is a zero-based index. */
  selectedIndex: PropTypes.number,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** When true, Tabs will display vertically. */
  vertical: PropTypes.bool
};
