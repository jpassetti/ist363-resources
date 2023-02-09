import Container from './Container';

import styles from './filters.module.scss'


const Filters = ({
    hasProximity,
    setProximity,
    hasTypographicContrast,
    setTypographicContrast,
    hasTypographicHierarchy,
    setTypographicHierarchy,
    isHumanFriendly,
    setHumanFriendly,
    readingFormat,
    setReadingFormat,
    children,
}) => {
    return <div className={styles.filters}>
        <Container>
            <div className={styles.row}>
                {children}
           
            </div>
        </Container>
    </div>
}
export default Filters;