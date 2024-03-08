import { fontFamilyData } from '../../data/fontFamilyData';
import { useState } from 'react';
import styles from './FontFamilySelect.module.css';
import { HelpText, NativeSelect } from '@digdir/design-system-react';

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
      <HelpText
        className={styles.helpText}
        size='small'
        title='Choose font'
        placement='right'
        portal={true}
      >
        {
          'Her kan du utforske ulike fonter for ditt brand. Sørg for at fonten du velger er installert på din maskin.'
        }
      </HelpText>
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
