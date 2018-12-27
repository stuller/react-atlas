/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { ListItemCore } from "react-atlas-core/src";
import { ListItemStyle } from "react-atlas-default-theme/src";
const ListItemComp = CSSModules(ListItemCore, ListItemStyle, {
  allowMultiple: true
});
export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ListItemComp {...this.props} />;
  }
}
ListItem.propTypes = {
  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Will set the html "id" property for ListItem. */
  id: PropTypes.string,

  /** Text, any HTML element, or React Component. */
  leftItem: PropTypes.node,

  /** Click event handler for the ListItem. */
  onClick: PropTypes.custom,

  /** Text, any HTML element, or React Component. */
  rightItem: PropTypes.node,

  /** Pass inline styling here. */
  style: PropTypes.object
};
