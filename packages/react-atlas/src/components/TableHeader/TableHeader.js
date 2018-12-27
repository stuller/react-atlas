/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TableHeaderCore } from "react-atlas-core/src";
import { TableHeaderStyle } from "react-atlas-default-theme/src";
const TableHeaderComp = CSSModules(TableHeaderCore, TableHeaderStyle, {
  allowMultiple: true
});
export default class TableHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TableHeaderComp {...this.props} />;
  }
}
TableHeader.propTypes = {
  /**  */
  dataField: PropTypes.string,

  /**  */
  isKey: PropTypes.bool,

  /**  */
  dataSort: PropTypes.bool,

  /**  */
  searchable: PropTypes.bool,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** An Object, array, or string of CSS classes to apply to TableHeader. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /**  */
  children: PropTypes.any
};
