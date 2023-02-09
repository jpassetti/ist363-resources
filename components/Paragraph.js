import classNames from 'classnames/bind';
import * as styles from './paragraph.module.scss';

let cx = classNames.bind(styles)

const Paragraph = ({children, marginTop, marginBottom}) => {
    let paragraphClasses = cx({
        paragraph: true,
        [`margin-top-${marginTop}`]: marginTop,
        [`margin-bottom-${marginBottom}`]: marginBottom,
    });
    return <p className={paragraphClasses}>{children}</p>
}
export default Paragraph;