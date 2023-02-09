import classNames from 'classnames/bind';
import * as styles from './button.module.scss';

let cx = classNames.bind(styles)

import Icon from './Icon';

const Button = ({ 
    appendIcon,
    block,
    icon,
    inverse,
    label, 
    prependIcon,
    rounded,
    size,
}) => {
    let buttonClasses = cx({
        btn: true,
        [`btn-inverse`]: inverse,
        [`btn-size-${size}`]: size,
        [`btn-append-icon`]: appendIcon,
        [`btn-prepend-icon`]: prependIcon,
        [`btn-block`]: block,
        [`btn-rounded`]: rounded,
    });
    return <button className={buttonClasses}>
        {prependIcon && <Icon icon={icon} inverse={inverse ? true : false} />}
        {label}
        {appendIcon && <Icon icon={icon} inverse={inverse ? true : false} />}
    </button>;
}
export default Button