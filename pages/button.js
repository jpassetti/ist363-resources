
import { FormLabel, FormGroup, Select, SelectItem, TextInput, Toggle } from '@carbon/react';
import { Fragment, useState } from "react"
import Button from "../components/Button"
import Container from "../components/Container"
import Filters from '../components/Filters';
import Heading from "../components/Heading"
import Link from "next/link"
import Main from "../components/Main"
import Paragraph from "../components/Paragraph"

const ButtonPage = () => {
    const [appendIcon, setAppendIcon] = useState(false);
    const [prependIcon, setPrependIcon] = useState(false);
    const [rounded, setRounded] = useState(false);
    const [inverse, setInverse] = useState(false);
    const [size, setSize] = useState("md");
    const [block, setBlock] = useState(false);
    const [buttonText, setButtonText] = useState("Default button");
    const [icon, setIcon] = useState("right-arrow");

    return <Fragment>
        <Main>
            <Container>
                <Paragraph marginBottom="2"><Link href="/">Back to main page</Link></Paragraph>
                <Heading level="1" hasTypographicHierarchy={true} hasTypographicContrast={true} hasProximity={true}>Button Component</Heading>
                <FormGroup style={{ border: 0}}>
                    <FormLabel>Default</FormLabel><br />
                    <Button label="Default button" size="md" />
                </FormGroup>
                <FormGroup style={{ border: 0}}>
                    <FormLabel>Inverse</FormLabel><br />
                    <Button label="Default button" size="md" inverse={true} />
                </FormGroup>
                <FormGroup style={{ border: 0}}>
                    <FormLabel>Rounded Corners</FormLabel><br />
                    <Button label="Default button" size="md" rounded={true} />
                </FormGroup>
                <FormGroup style={{ border: 0}}>
                    <FormLabel>Append Icon</FormLabel><br />
                    <Button label="Default button" size="md" appendIcon={true} icon="right-arrow" />
                </FormGroup>
                <FormGroup style={{ border: 0}}>
                    <FormLabel>Prepend Icon</FormLabel><br />
                    <Button label="Default button" size="md" prependIcon={true} icon="left-arrow" />
                </FormGroup>
                <FormGroup style={{ border: 0, maxWidth: "360px"}}>
                    <FormLabel>Block</FormLabel><br />
                    <Button label="Default button" size="md" block />
                </FormGroup>
                <Heading marginTop="4" level="2" hasTypographicHierarchy={true} hasTypographicContrast={true} hasProximity={true}>Interactive module</Heading>
                <Filters style={{ marginBottom: "1rem"}}>
                    <FormGroup style={{border: 0}}>
                    <TextInput
                        id="text-input-1"
                        type="text"
                        labelText="Button label"
                        placeholder="Default button"
                        onChange={(e) => setButtonText(e.target.value)}
                    />
                    </FormGroup>
                    <FormGroup style={{border: 0}}>
                        <Select
                        id="size-select"
                        defaultValue={size}
                        labelText="Choose size"
                        onChange={(e) => setSize(e.target.value)}
                        >
                        <SelectItem
                        value="sm"
                        text="Small"
                        />
                        <SelectItem
                        value="md"
                        text="Medium"
                        />
                        <SelectItem
                        value="lg"
                        text="Large"
                        />
                        <SelectItem
                        value="xl"
                        text="Extra large"
                        />
                        </Select>
                    </FormGroup>
                    <FormGroup style={{border: 0}}>
                    <Toggle
                        labelText="Inverse"
                        labelA="Off"
                        labelB="On"
                        id="btn-inverse"
                        onToggle={() => setInverse(!inverse)}
                    />
                    </FormGroup>
                    <FormGroup style={{border: 0}}>
                    <Toggle
                        labelText="Rounded Corners"
                        labelA="Off"
                        labelB="On"
                        id="btn-rounded"
                        onToggle={() => setRounded(!rounded)}
                    />
                    </FormGroup>
                    <FormGroup style={{border: 0}}>
                    <Toggle
                        labelText="Block style"
                        labelA="Off"
                        labelB="On"
                        id="btn-block"
                        onToggle={() => setBlock(!block)}
                    />
                    </FormGroup>
                    {prependIcon === false && <FormGroup style={{border: 0}}>
                    <Toggle
                        labelText="Append icon"
                        labelA="Off"
                        labelB="On"
                        id="append-icon"
                        onToggle={() => setAppendIcon(!appendIcon)}
                    />
                    </FormGroup>
                    }
                    {appendIcon === false && <FormGroup style={{border: 0}}>
                    <Toggle
                        labelText="Prepend icon"
                        labelA="Off"
                        labelB="On"
                        id="prepend-icon"
                        onToggle={() => setPrependIcon(!prependIcon)}
                    />
                    </FormGroup>
                    }
                    {(prependIcon || appendIcon) && <FormGroup style={{border: 0}}>
                        <Select
                        id="icon-select"
                        defaultValue={icon}
                        labelText="Choose icon"
                        onChange={(e) => setIcon(e.target.value)}
                        >
                        <SelectItem
                        value="right-arrow"
                        text="Right arrow"
                        />
                        <SelectItem
                        value="left-arrow"
                        text="Left arrow"
                        />
                        </Select>
                    </FormGroup>
                    }
                </Filters>
                <Button 
                    label={buttonText} 
                    size={size} 
                    appendIcon={appendIcon} 
                    prependIcon={prependIcon} 
                    icon={icon} 
                    inverse={inverse}
                    rounded={rounded}
                    block={block}
                />
            </Container>
        </Main>
    </Fragment>
}
export default ButtonPage