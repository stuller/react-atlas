/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { ListGroupCore } from "react-atlas-core/src";
import { ListGroupStyle } from "react-atlas-default-theme/src";
const ListGroupComp = CSSModules(ListGroupCore, ListGroupStyle, {
  allowMultiple: true
});
export default class ListGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ListGroupComp {...this.props} />;
  }
}
ListGroup.propTypes = {
  /** Text, any HTML element, or React Component. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Input. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, will add a horizontal rule between the ListGroup and subsequent children. */
  divider: PropTypes.bool,

  /** Will set the html "id" property for ListGroup. */
  id: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Will add a title to the ListGroup. */
  title: PropTypes.string
};
