import { Fragment, useState, useEffect } from 'react'
import { FormLabel, FormGroup, Select, SelectItem, TextInput, Toggle, Slider } from '@carbon/react';
import Container from '../components/Container'
import Filters from '../components/Filters'
import Heading from '../components/Heading'
import Main from '../components/Main'
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'

const sizes = [
    {
        label: "Paragraph",
        value: "p",
        sample: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        fontWeight: 400
    },
    {   
        label: "Paragraph title",
        value: "h4",
        sample: "Ingredients",
        fontWeight: 700
    },
    {
        label: "Product title",
        value: "h3",
        sample: "Cappuccino",
        fontWeight: 700
    },
    {
        label: "Section title",
        value: "h2",
        sample: "Espresso Coffees",
        fontWeight: 700
    },
    {
        label: "Page title",
        value: "h1",
        sample: "Starbucks Coffee",
        fontWeight: 700
    }
];

const TypographicScale = () => {
    const [rootFontSize, setRootFontSize] = useState(16);
    const [ratio, setRatio] = useState(1.35);
   
    let currentFontSize = rootFontSize;
    sizes.forEach((size, index) => {
        size.fontSize = index > 1 ? currentFontSize * ratio : currentFontSize;
        currentFontSize = size.fontSize;
    });

    const reversedSizes = [...sizes].reverse();
   

    return <Fragment>
      
<Main>
  <Container content>
    <Heading level="1" hasTypographicHierarchy={true} hasTypographicContrast={true} hasProximity={true}>Typographic Scale</Heading>
    <Paragraph marginBottom={1}>A typographic scale is a system that defines a range of sizes for text and headings in a design, creating a consistent visual hierarchy. It provides a framework for selecting typefaces and determining the appropriate sizes for headings, subheadings, body text, and other design elements.</Paragraph>
    <Paragraph marginBottom={1}>A typographic scale usually starts with a base font size, such as 16 pixels, and uses a mathematical ratio, such as 1.5 or 1.618, to determine the sizes of other type elements in the design.</Paragraph>
    <Paragraph marginBottom={1}>I suggest starting with a root font size of 16px, a mobile ratio of 1.35 and a desktop ratio of 1.6.</Paragraph>
    <Filters>
        <FormGroup style={{border: 0}} legendText="Settings">
            <Row>
        <TextInput
            id="text-input-root-font-size"
            type="text"
            labelText="Root font size"
            value={rootFontSize}
            onChange={(e) => {
                setRootFontSize(parseInt(e.target.value))
            }}
        />
        <Slider
        labelText="Ratio"
        value={ratio}
        min={1}
        max={2}
        step={.05}
       // hideTextInput={true}
        //stepMultiplier={10}
        noValidate 
        onChange={(e) => {
            setRatio(e.value)
        }}
    /></Row>
        </FormGroup>
      </Filters>
      <FormGroup style={{border: 0}}>
      {reversedSizes.map((size) => {
            const { label, value, sample, fontSize, fontWeight } = size;
            const Tag = `h${value}`;
            return <article style={{ marginBottom: "2rem"}}><FormLabel>{value} {label} - {fontSize.toFixed(2)}px</FormLabel><br />
                <Tag style={{
                    fontSize: `${fontSize}px`,
                    fontWeight: fontWeight
                    }}>{sample}</Tag>
                </article>
            })}
     </FormGroup>
</Container></Main>
</Fragment>
}
export default TypographicScale