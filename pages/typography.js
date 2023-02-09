import { useState, Fragment } from 'react';
import { Toggle, Select, SelectItem } from '@carbon/react';
import Container from '../components/Container';
import Display from '../components/Display'
import Filters from '../components/Filters';
import Heading from '../components/Heading';
import Image from 'next/image';
import Item from '../components/Item';
import Link from 'next/link';
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
    <Main>
        <Container>
     <Paragraph marginBottom="2"><Link href="/">Back to main page</Link></Paragraph>
     <Heading 
            level="1"
            hasTypographicContrast={true}
            hasTypographicHierarchy={true}  
            hasProximity={true}
          >Interactive layout</Heading>
      <Filters>
         <Toggle
                labelText="With Proximity"
                labelA="Off"
                labelB="On"
                id="toggle-proximity"
                onToggle={() => setProximity(!hasProximity)}
            />
            <Toggle
                labelText="With Typographic Contrast"
                labelA="Off"
                labelB="On"
                id="toggle-contrast"
                onToggle={() =>  setTypographicContrast(!hasTypographicContrast)}
            />
            <Toggle
                labelText="With Typographic Hierarchy"
                labelA="Off"
                labelB="On"
                id="toggle-hierarchy"
                onToggle={() =>  setTypographicHierarchy(!hasTypographicHierarchy)}
            />
            <Toggle
                labelText="Human Friendly"
                labelA="Off"
                labelB="On"
                id="toggle-human-friendly"
                onToggle={() =>  setHumanFriendly(!isHumanFriendly)}
            />
            <Select
                id="select-1"
                defaultValue="default"
                labelText="Display format"
                onChange={(e) => setReadingFormat(e.target.value)}
            >
                <SelectItem
                    value="default"
                    text="Default"
                />
                <SelectItem
                    value="list"
                    text="List"
                />
                <SelectItem
                    value="grid"
                    text="Grid"
                />
            </Select>
      </Filters>

      
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