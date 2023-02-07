import classNames from 'classnames/bind'
import styles from './item.module.scss';

let cx = classNames.bind(styles);

const Item = ({children, hasProximity, readingFormat}) => {
    let itemClasses = cx({
        item: true,
        [`proximity`] : hasProximity,
        [`reading-format-${readingFormat}`] : readingFormat,
    });
    return <article className={itemClasses}>{children}</article>
}
const Content = ({children}) => {
    return <div className={styles.content}>{children}</div>
}
Item.Content = Content;
export default Item;