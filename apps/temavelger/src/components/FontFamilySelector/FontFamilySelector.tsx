import { fontFamilyData } from '../../data/fontFamilyData';
import { useState } from 'react';
import styles from './FontFamilySelector.module.css';
import { NativeSelect } from '@digdir/design-system-react';

const FontFamilySelector = () => {
  const [selectedFontFamily, setSelectedFontFamily] = useState(
    fontFamilyData[0].value,
  );

  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFontFamily(e.target.value);
    document.documentElement.style.setProperty('font-family', e.target.value);
  };

  return (
    <div className={styles.fontFamilySelector}>
      <NativeSelect
        label='Velg font'
        id='fontFamilySelector'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleFontFamilyChange(e)
        }
        value={selectedFontFamily}
      >
        {fontFamilyData.map((fontFamily, index) => (
          <option
            key={index}
            value={fontFamily.value}
          >
            {fontFamily.label}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
};
export default FontFamilySelector;
