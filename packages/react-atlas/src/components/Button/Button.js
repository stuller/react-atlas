/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { ButtonCore } from "react-atlas-core/src";
import { ButtonStyle } from "react-atlas-default-theme/src";
const ButtonComp = CSSModules(ButtonCore, ButtonStyle, { allowMultiple: true });
export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ButtonComp {...this.props} />;
  }
}
Button.propTypes = {
  /** Children should be either a string, an icon/glyphicon, or an image tag. */
  children: PropTypes.node,

  /** An object, array, or string of CSS classes to apply to Button. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** When true, Button component will be disabled.
   @examples <Button disabled/> */
  disabled: PropTypes.bool,

  /** Will display error style button.
   @examples <Button error> */
  error: PropTypes.bool,

  /** The URL that the Button will link to. */
  href: PropTypes.string,

  /** The className of the icon you want to set. */
  icon: PropTypes.string,

  /** Will set the html "id" property on the Button. */
  id: PropTypes.string,

  /** Button will be ignored by keyboard navigation when set to true. */
  ignoreTab: PropTypes.bool,

  /** Will display large style Button.
   @examples <Button large> */
  large: PropTypes.bool,

  /** Will display large style Button.
   @examples <Button link> */
  link: PropTypes.bool,

  /** Will set the html "name" property on the Button. */
  name: PropTypes.string,

  /** Click event handler for the Button. */
  onClick: PropTypes.func,

  /** Will display outline styled Button.
   @examples <Button outline> */
  outline: PropTypes.bool,

  /** Will display primary style Button.
   @examples <Button primary> */
  primary: PropTypes.bool,

  /** Will display secondary style Button.
   @examples <Button secondary> */
  secondary: PropTypes.bool,

  /** Will display small style Button.
   @examples <Button small> */
  small: PropTypes.bool,

  /** Pass inline styles here. */
  style: PropTypes.object,

  /** HTML5 button type, eg submit, button, etc. */
  type: PropTypes.string,

  /** Will display warning style Button.
   @examples <Button warning> */
  warning: PropTypes.bool
};
