import { useState } from 'react';
import { useDesignTokenContext } from '../../layouts/ComponentsDesignLayout/ComponentDesignContext';

interface ColorPickerProps {
  token: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ token }) => {
  const [color, setColor] = useState('#ffffff');
  const { setTokenValue } = useDesignTokenContext();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // set color of color-picker
    setColor(e?.target.value);
    // change the color of the elements
    document.documentElement.style.setProperty(token, e?.target.value);
    // update the designTokenContext
    setTokenValue(token, e?.target.value);
  };

  return (
    <div className='colorPickerMenu'>
      <label htmlFor='colorPicker'>Velg farge</label>
      <input
        id='colorPicker'
        name='colorPicker'
        type='color'
        value={color}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleColorChange(e)
        }
      />
    </div>
  );
};
export default ColorPicker;
