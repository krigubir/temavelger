import { Button } from '@digdir/design-system-react';
import { useState } from 'react';

interface ColorPickerProps {
  designToken: string;
}
const ColorPicker: React.FC<ColorPickerProps> = ({ designToken }) => {
  const [color, setColor] = useState('black');
  const [colorPicker, setColorPicker] = useState(false);

  const showColorPicker = () => {
    setColorPicker(!colorPicker);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e?.target.value);
    document.documentElement.style.setProperty(designToken, e?.target.value);
  };

  return (
    <div className='colorPickerMenu'>
      <div className='colorPickerFirst'>
        <Button
          variant='primary'
          onClick={() => showColorPicker()}
        >
          Velg farge
        </Button>
        {colorPicker && (
          <input
            type='color'
            value={color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleColorChange(e)
            }
          />
        )}
      </div>
    </div>
  );
};
export default ColorPicker;
