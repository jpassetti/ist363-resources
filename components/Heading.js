import classNames from 'classnames/bind'
import styles from './heading.module.scss';

let cx = classNames.bind(styles);

const Heading = ({
	children,
	hasTypographicContrast,
	hasTypographicHierarchy,
	hasProximity,
	level,
	marginTop,
}) => {
	const Tag = level > 6 ? 'h6' : `h${level}`

	let headingClasses = cx({
		heading: true,
		[`heading-${level}`]: level,
		hierarchy: hasTypographicHierarchy,
		contrast: hasTypographicContrast,
		proximity: hasProximity,
		[`margin-top-${marginTop}`]: marginTop,
	});

	return <Tag className={`${headingClasses}`}>{children}</Tag>
}
export default Heading