/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { TableCore } from "react-atlas-core/src";
import { TableStyle } from "react-atlas-default-theme/src";
const TableComp = CSSModules(TableCore, TableStyle, { allowMultiple: true });
export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TableComp {...this.props} />;
  }
}
Table.propTypes = {
  /**  */
  search: PropTypes.bool,

  /**  */
  children: PropTypes.any,

  /**  */
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  /**  */
  pagination: PropTypes.bool,

  /**  */
  options: PropTypes.shape,

  /** An Object, array, or string of CSS classes to apply to Table. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /**  */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Pass inline styling here. */
  style: PropTypes.object
};
