import { useState, Fragment } from 'react';

import Container from '../components/Container';
import { ContainedList, ContainedListItem } from '@carbon/react';
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

const Homepage = () => {
 
  return <Fragment>
      
      <Main>
        <Container>
          <Heading level="1" hasTypographicHierarchy={true} hasTypographicContrast={true} hasProximity={true}>Interactive Modules</Heading>
          <Paragraph>This is a collection of interactive modules and components that can be used to build a website.</Paragraph>

          <ol style={{marginTop: "1rem", marginBottom: "1rem"}}>
              <li>
                <Link href="/typography">
                Interactive layout
                </Link>
              </li>
              <li>
                <Link href="/button">
                Button
              </Link>
              </li>
            </ol> 
        </Container>
      </Main>
  </Fragment>
}
export default Homepage;