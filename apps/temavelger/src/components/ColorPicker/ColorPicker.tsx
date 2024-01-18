import { Button } from '@digdir/design-system-react';

const ColorPicker = () => {
  return (
    <div className='colorPickerMenu'>
      <div className='colorPickerFirst'>
        <Button variant='primary'>Velg farge</Button>
      </div>
      <div className='colorPickerSecond'>
        <Button variant='primary'>Velg farge</Button>
      </div>
      <div className='colorPickerThird'>
        <Button variant='primary'>Velg farge</Button>
      </div>
    </div>
  );
};
export default ColorPicker;
