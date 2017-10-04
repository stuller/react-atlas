import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class Drawer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, children, style } = this.props;

        return (
            <div style={style} className={cx(className)}>
                {children}
            </div>
        );
    }
}

Drawer.propTypes = {
    /**
     * Defines a custom css class name.
     * @examples '<Drawer className="custom">This is a text hint</Drawer>'
     */
    className: PropTypes.string,
    /**
     * Text to be displayed can be passed as a child.
     * @examples '<Drawer>This is a text hint</Drawer>'
     */
    children: PropTypes.node,

    /* Pass inline styles here. */
    style: PropTypes.node
};

Drawer.defaultProps = {
    className: ""
};

export default Drawer;
