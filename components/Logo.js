import Image from 'next/image'
import classNames from 'classnames/bind'
import styles from './logo.module.scss';

let cx = classNames.bind(styles);

const Logo = ({hasProximity}) => {
    let logoClasses = cx({
        logo: true,
        [`proximity`] : hasProximity,
    });
    return <Image 
    src={`/images/logos/starbucks.svg`}
    alt="Starbucks logo"
    width={150}
    height={150}
    className={logoClasses}
  />  
}
export default Logo