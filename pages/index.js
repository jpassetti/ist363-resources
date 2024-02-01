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
        <Heading level="4" hasTypographicHierarchy={true} hasTypographicContrast={true} hasProximity={true}>IST 363 Advanced Web Design</Heading>
          <Heading level="1" hasTypographicHierarchy={true} hasTypographicContrast={true} hasProximity={true}>Interactive Modules</Heading>
          <Paragraph marginBottom={1}>Below is a collection of interactive modules that help you understand advanced web development concepts.</Paragraph>

          <ul style={{marginTop: "1rem", marginBottom: "1rem"}}>
              <li>
                <Link href="/flexbox">
               1. Interactive CSS flexbox
              </Link>
              </li>
            </ul> 
        </Container>
      </Main>
  </Fragment>
}
export default Homepage;