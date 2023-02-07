import Container from './Container';
import { Toggle, Select, SelectItem } from '@carbon/react';
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
    setReadingFormat
}) => {
    return <div className={styles.filters}>
        <Container>
            <div className={styles.row}>
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
            </div>
        </Container>
    </div>
}
export default Filters;