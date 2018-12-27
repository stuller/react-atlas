/* WARNING, THIS FILE WAS MACHINE GENERATED. DO NOT MODIFY THIS FILE DIRECTLY 
BECAUSE YOUR CHANGES WILL BE OVERWRITTEN WHEN THIS FILE IS GENERATED AGAIN. 
IF YOU WAN'T TO MODIFY THIS FILE YOU SHOULD BE MODIFYING THE GENERATOR IT'S SELF 
AND REGENERATE THIS FILE. */
import CSSModules from "react-css-modules";
import React from "react";
import PropTypes from "prop-types";
import { FileUploadCore } from "react-atlas-core/src";
import { FileUploadStyle } from "react-atlas-default-theme/src";
const FileUploadComp = CSSModules(FileUploadCore, FileUploadStyle, {
  allowMultiple: true
});
export default class FileUpload extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <FileUploadComp {...this.props} />;
  }
}
FileUpload.propTypes = {
  /** The MIME type of files that are accepted. */
  accept: PropTypes.string,

  /** An object, array, or string of CSS classes to apply to FileUpload. */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),

  /** Function that will be called when a file is uploaded.
   Returns an array of uploaded files. */
  onChange: PropTypes.func,

  /** Text that will be displayed on the FileUpload component. */
  text: PropTypes.string,

  /** Pass inline styling here. */
  style: PropTypes.object,

  /** Ref for Dropzone element */
  inputRef: PropTypes.func
};
