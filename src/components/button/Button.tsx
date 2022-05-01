import React from 'react';
import './button.scss';

type Props = {
    onClick?: () => void;
    className?: string;
    children?: string;
}


const Button = (props: Props) => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = (props: Props) => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

// Button.propTypes = {
//     onClick: PropTypes.func
// }

export default Button;
