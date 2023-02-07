import classNames from 'classnames/bind'
import styles from './display.module.scss';

let cx = classNames.bind(styles);

const Display = ({children, readingFormat, hasProximity}) => {
    let displayClasses = cx({
        display: true,
        [`display-${readingFormat}`]: readingFormat,
        [`proximity`] : hasProximity,
    });
    return <div className={displayClasses}>
        {children}
    </div>
}
export default Display;