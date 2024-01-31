import { useState, Fragment } from 'react';
import { Toggle, Select, SelectItem } from '@carbon/react';
import Container from '../components/Container';
import Display from '../components/Display'
import Filters from '../components/Filters';
import FlexChild from '../components/FlexChild';
import FlexParent from '../components/FlexParent';
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

const FlexBoxPage = ({coffeesData}) => {
    const [hasFlexbox, setFlexbox] = useState(false);
    const [hasGridGap, setGridGap] = useState(false);
    const [flexDirection, setFlexDirection] = useState("row");
    const [justifyContent, setJustifyContent] = useState("flex-start");
    const [alignItems, setAlignItems] = useState("flex-start");
  return <Fragment>
    <Main>
        <Container>
     <Paragraph marginBottom="2"><Link href="/">Back to main page</Link></Paragraph>
     <Heading 
            level="1"
            hasTypographicContrast={true}
            hasTypographicHierarchy={true}  
            hasProximity={true}
          >Flexbox</Heading>
      <Filters>
         <Toggle
                labelText="With Flexbox"
                labelA="Off"
                labelB="On"
                id="toggle-flexbox"
                onToggle={() => setFlexbox(!hasFlexbox)}
            />
         <Toggle
                labelText="Include grid gap"
                labelA="No"
                labelB="Yes"
                id="toggle-gridgap"
                onToggle={() => setGridGap(!hasGridGap)}
            />
             <Select
                id="flexDirection"
                defaultValue="row"
                labelText="Flex direction"
                onChange={(e) => setFlexDirection(e.target.value)}
            >
                <SelectItem
                    value="row"
                    text="Row"
                />
                <SelectItem
                    value="column"
                    text="Column"
                />
            </Select>
            <Select
                id="justifyContent"
                defaultValue="default"
                labelText="Justify content"
                onChange={(e) => setJustifyContent(e.target.value)}
            >
                <SelectItem
                    value="flex-start"
                    text="Flex start"
                />
                <SelectItem
                    value="center"
                    text="Center"
                />
                <SelectItem
                    value="flex-end"
                    text="Flex end"
                />
                <SelectItem
                    value="space-between"
                    text="Space between"
                />
                 <SelectItem
                    value="space-evenly"
                    text="Space evenly"
                />
                 <SelectItem
                    value="space-around"
                    text="Space around"
                />
            </Select>
            <Select
                id="alignItems"
                defaultValue="flex-start"
                labelText="Align items"
                onChange={(e) => setAlignItems(e.target.value)}
            >
                <SelectItem
                    value="flex-start"
                    text="Flex start"
                />
                <SelectItem
                    value="center"
                    text="Center"
                />
                 <SelectItem
                    value="flex-end"
                    text="Flex end"
                />
                 <SelectItem
                    value="stretch"
                    text="Stretch"
                />
            </Select>
      </Filters>

        <FlexParent hasFlexbox={hasFlexbox} hasGridGap={hasGridGap} flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems}>
            <FlexChild />
            <FlexChild height={2} />
            <FlexChild />
        </FlexParent>
         
        </Container>
      </Main>
  </Fragment>
}
export default FlexBoxPage;