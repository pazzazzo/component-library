import React from "react"
import Ripple from "./Ripple"
import PropTypes from 'prop-types';
import "./Button.css"

/**
* Primary ui component for user interraction by click
*
* ### Usage:
* ```jsx
*   <Button type={boolean} size="large || medium || small" primary={boolean}>{children}</Button>
* ```
 * @param {rounded} Boolean 
 * @returns 
*/
export const Button = ({ rounded, size, children, disabled, color, onClick, ref, submit, className}) => {
    const mode = disabled ? 'button-disabled' : 'button-enabled';
    const type = rounded ? 'button-rounded' : 'button-normal';
    return (
        <button
            type={submit ? "submit" : "button"}
            className={["button", `button-${size}`, `color-${color}`, mode, type, className].join(" ")}
            data-text={children}
            onClick={onClick}
            ref={ref}
        >
            {children}
            {!disabled &&
                <Ripple color={color} duration={2000} />
            }
        </button>
    )
}
Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    rounded: PropTypes.bool,
    color: PropTypes.oneOf(["red", "orange", "green", "primary", "secondary"]),
    children: PropTypes.node.isRequired,
    submit: PropTypes.bool,
    onClick: PropTypes.func,
    ref: PropTypes.func,
    className: PropTypes.string
};

Button.defaultProps = {
    disabled: false,
    size: 'medium',
    rounded: false,
    color: "primary",
    children: "Button",
    submit: false,
    onClick: () => { return },
    ref: (r) => { return console.log(r); }
};
