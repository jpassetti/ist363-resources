import classNames from 'classnames/bind'
import styles from './flexparent.module.scss';

let cx = classNames.bind(styles);

const FlexParent = ({ children, hasFlexbox, hasGridGap, flexDirection, justifyContent, alignItems }) => {
    let flexParentClasses = cx({
        flexparent: true,
        flexbox: hasFlexbox,
        gridgap: hasGridGap,
        [`flex-direction-${flexDirection}`]: flexDirection,
        [`justify-content-${justifyContent}`]: justifyContent,
        [`align-items-${alignItems}`]: alignItems
    });
    return <div className={flexParentClasses}>{children}</div>
}
export default FlexParent;