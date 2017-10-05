import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class Drawer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.setState = {
            active: false
        };
    }

    _handleToggle = () => {
        console.log("inside")
    }

    render() {
        const { className, children, style } = this.props;

        let drawerStyle;

        let buttonControls = React.Children.map(children, child => {
            if (child.type === Button && child.type !== Panel) {
                return React.cloneElement(child, {
                    name: 'name'
                })
            }
        });

        switch(drawer) {
            case 'right' :
                drawerStyle = cx(
                    'drawer-left'
                );
                break;
            case 'top' :
                drawerStyle = cx(
                    'drawer-top'
                );
                break;
            case 'bottom' :
                drawerStyle = cx(
                    'drawer-bottom'
                );
                break;
            default:
                drawerStyle = cx(
                    'drawer-left'
                );
                break;
        }

        let drawerClasses = cx('drawer', drawerStyle);

        return (
            <div style={style} className={cx(className)} styleName={drawerClasses}>
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
