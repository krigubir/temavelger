import { NativeSelect } from '@digdir/design-system-react';

interface NativeSelectProps {
  variant: string;
}

const NativeSelectComponent: React.FC<NativeSelectProps> = ({ variant }) => {
  return (
    <div className={`nativeSelectContainer${variant}`}>
      <NativeSelect size='medium'>
        <option value='blank'>{variant} color</option>
      </NativeSelect>
    </div>
  );
};
export default NativeSelectComponent;
