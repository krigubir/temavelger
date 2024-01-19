import { useState } from 'react';

interface ColorPickerProps {
  designToken: string;
}
const ColorPicker: React.FC<ColorPickerProps> = ({ designToken }) => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e?.target.value);
    document.documentElement.style.setProperty(designToken, e?.target.value);
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
