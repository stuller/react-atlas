/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { AvatarCore } from "react-atlas-core/src";
import { AvatarStyle } from "react-atlas-default-theme/src";
const AvatarComp = CSSModules(AvatarCore, AvatarStyle, { allowMultiple: true });
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AvatarComp {...this.props} />;
  }
}
Avatar.propTypes = {
  /** Children should be either a string, an icon/glyphicon, or an image tag.
   @examples "SomeName", <SomeIcon />, <img src="/path/to/image.jpg"/> */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Avatar. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** A URL for an image that will be displayed when the main image fails to load. */
  defaultImage: PropTypes.string,

  /** For displaying an icon/glphyicon. Usually another component or an element with a class on it.
   @examples <GithubIcon />, <i class="fa fa-github"></i> */
  icon: PropTypes.string,

  /** Path to an image.
   @examples "http://path.to/an/image.jpg" */
  image: PropTypes.string,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** Avatar will use the first letter of the title string when children, image, and icon are not supplied.
   @examples "Nathan" will output "N" */
  title: PropTypes.string
};
