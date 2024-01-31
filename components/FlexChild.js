import classNames from 'classnames/bind';

import styles from './flexchild.module.scss';

let cx = classNames.bind(styles);

const FlexChild = ({height}) => {
    let flexChildClasses = cx({
        flexchild: true,
        [`height-${height}`]: height,
    });
    return <div className={flexChildClasses}>Child</div>
}
export default FlexChild;