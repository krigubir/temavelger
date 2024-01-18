import { NativeSelect } from '@digdir/design-system-react';

const ActionColorSelect = () => {
  return (
    <div className='actionSelectMenu'>
      <div className='actionFirstSelect'>
        <NativeSelect label='Hvilken farge skal brukes for Action First'>
          <option value='first-100'>First - 100</option>
          <option value='first-200'>First - 200</option>
          <option value='first-300'>First - 300</option>
          <option value='first-400'>First - 400</option>
          <option value='first-500'>First - 500</option>
          <option value='first-600'>First - 600</option>
          <option value='first-700'>First - 700</option>
          <option value='first-800'>First - 800</option>
          <option value='first-900'>First - 900</option>
        </NativeSelect>
      </div>
      <div className='actionSecondSelect'>
        <NativeSelect label='Hvilken farge skal brukes for Action Second'>
          <option value='second-100'>Second - 100</option>
          <option value='second-200'>Second - 200</option>
          <option value='second-300'>Second - 300</option>
          <option value='second-400'>Second - 400</option>
          <option value='second-500'>Second - 500</option>
          <option value='second-600'>Second - 600</option>
          <option value='second-700'>Second - 700</option>
          <option value='second-800'>Second - 800</option>
          <option value='second-900'>Second - 900</option>
        </NativeSelect>
      </div>
    </div>
  );
};
export default ActionColorSelect;
