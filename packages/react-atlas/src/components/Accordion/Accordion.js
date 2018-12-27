/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { AccordionCore } from "react-atlas-core/src";
import { AccordionStyle } from "react-atlas-default-theme/src";
const AccordionComp = CSSModules(AccordionCore, AccordionStyle, {
  allowMultiple: true
});
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AccordionComp {...this.props} />;
  }
}
Accordion.propTypes = {
  /** Children should be either a string, an icon/glyphicon, or an image tag.
   @examples "SomeName", <Accordion>{child}{child}</Accordion> */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Accordion. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, Accordion component will be disabled. */
  disabled: PropTypes.bool,

  /** When true, Accordion will display an "expand all" link that will open all panels.
   @examples <Accordion expandAll={true}>{children}</Accordion> */
  expandAll: PropTypes.bool,

  /** Accordion will use the expanded prop from each child to determine if the child will be expanded on load.
   @examples <Accordion><div>value 1</div><div expanded>value 2</div></Accordion> */
  expanded: PropTypes.bool,

  /** When true, Accordion will allow multiple open panels.
   @examples <Accordion multiOpen={true}>{children}</Accordion> */
  multiOpen: PropTypes.bool,

  /** Function that will be executed on click. */
  onClick: PropTypes.func,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Accordion will use title prop from each child as the title for that child's header.
   @examples <Accordion><div title={title 1}>value 1</div><div title={title 2}>value 2</div></Accordion> */
  title: PropTypes.string,

  /** Will set the Accordion's title text position left, right, or center.
   @examples <Accordion titlePosition={left}>{children}</Accordion> */
  titlePosition: PropTypes.string,

  /** Will set the width of the Accordion. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
