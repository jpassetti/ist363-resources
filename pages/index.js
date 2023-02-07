import { useState, Fragment } from 'react';

import Container from '../components/Container';
import Display from '../components/Display'
import Filters from '../components/Filters';
import Heading from '../components/Heading';
import Image from 'next/image';
import Item from '../components/Item';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Paragraph from '../components/Paragraph'

import { getCoffees } from '../lib/api';

export async function getStaticProps() {
  const coffeesData = getCoffees();

  return {
    props: {
      coffeesData
    }, // will be passed to the page component as props
  }
}

const Homepage = ({coffeesData}) => {
  const [hasProximity, setProximity] = useState(false);
  const [hasTypographicContrast, setTypographicContrast] = useState(false);
  const [hasTypographicHierarchy, setTypographicHierarchy] = useState(false);
  const [isHumanFriendly, setHumanFriendly] = useState(false);
  const [readingFormat, setReadingFormat] = useState('default');

  return <Fragment>
      <Filters 
        hasProximity={hasProximity}
        setProximity={setProximity}
        hasTypographicContrast={hasTypographicContrast}
        setTypographicContrast={setTypographicContrast}
        hasTypographicHierarchy={hasTypographicHierarchy}
        setTypographicHierarchy={setTypographicHierarchy}
        isHumanFriendly={isHumanFriendly}
        setHumanFriendly={setHumanFriendly}
        readingFormat={readingFormat}
        setReadingFormat={setReadingFormat}
      />
      <Main>
        <Container>
          {isHumanFriendly && <Logo 
          hasProximity={hasProximity}
          />}
          <Heading 
            level="1"
            hasTypographicContrast={hasTypographicContrast}
            hasTypographicHierarchy={hasTypographicHierarchy}  
            hasProximity={hasProximity}
          >Starbucks</Heading>
          <Heading 
            level="2"
            hasTypographicContrast={hasTypographicContrast}
            hasTypographicHierarchy={hasTypographicHierarchy}  
            hasProximity={hasProximity}
          >Espresso Beverages</Heading>
          <Display 
            readingFormat={readingFormat}
            hasProximity={hasProximity}  
          >
          {coffeesData.map((coffee, index) => {
            return <Item 
              key={index} 
              hasProximity={hasProximity}
              readingFormat={readingFormat}  
            >
              {isHumanFriendly &&
                <Image 
                  src={`/images/coffees/${coffee.slug}.jpg`}
                  alt={coffee.name}
                  width={150}
                  height={150}
                />
              }
              <Item.Content>
                <Heading 
                  level="3" 
                  hasTypographicContrast={hasTypographicContrast}
                  hasTypographicHierarchy={hasTypographicHierarchy}
                  hasProximity={hasProximity}
                >
                    {coffee.name}
                </Heading>
                <Paragraph>{coffee.description}</Paragraph>
              </Item.Content>
            </Item>
          })}
        </Display>
        </Container>
      </Main>
  </Fragment>
}
export default Homepage;