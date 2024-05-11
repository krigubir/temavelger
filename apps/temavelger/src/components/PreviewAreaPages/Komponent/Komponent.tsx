import { NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import { GenerateSelectedComponent } from './generateSelectedComponent';
import styles from './Komponent.module.css';

/*
  This component is a container for components found in the Component-style preview area.
  This component allow the user to select individual components to preview.
*/

const Komponent = () => {
  const [activeComponent, setActiveComponent] = useState('button');

  return (
    <div className={styles.componentSelectContainer}>
      <div className={styles.componentSelect}>
        <NativeSelect onChange={(e) => setActiveComponent(e.target.value)}>
          <option value='button'>Button</option>
          <option value='accordion'>Accordion</option>
          <option value='card'>Card</option>
          <option value='checkbox'>Checkbox</option>
          <option value='combobox'>Combobox</option>
          <option value='dropdownMenu'>Dropdown Menu</option>
          <option value='nativeSelect'>Native Select</option>
          <option value='pagination'>Pagination</option>
          <option value='radio'>Radio</option>
          <option value='tag'>Tag</option>
          <option value='textarea'>Textarea</option>
          <option value='textfield'>Textfield</option>
          <option value='toggleGroup'>Toggle Group</option>
        </NativeSelect>
      </div>

      <div className={styles.componentContainer}>
        <div className={styles.component}>
          {GenerateSelectedComponent(activeComponent)}
        </div>
      </div>
    </div>
  );
};

export default Komponent;
