/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { ListCore } from "react-atlas-core/src";
import { ListStyle } from "react-atlas-default-theme/src";
const ListComp = CSSModules(ListCore, ListStyle, { allowMultiple: true });
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ListComp {...this.props} />;
  }
}
List.propTypes = {
  /** When true, List will display an outer border. */
  border: PropTypes.bool,

  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Will set the html "id" property for List. */
  id: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object
};
