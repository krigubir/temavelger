import { Button, Radio, Textfield } from '@digdir/design-system-react';
import styles from './CompositeComponent.module.css';

const CompositeComponent = () => {
  return (
    <div className={styles.compositeComponentContainer}>
      <h2>Bare et eksempel</h2>
      <p>Eksempel på et arrangement du kan melde deg på</p>

      <Radio.Group
        error=''
        legend='Hvor ofte vil du delta?'
        onChange={function noRefCheck() {}}
        size='medium'
      >
        <Radio value='ukentlig'>Ukentlig</Radio>
        <Radio value='månedlig'>Månedlig</Radio>
      </Radio.Group>
      <div className={styles.textContainer}>
        <Textfield
          description=''
          label='Epost'
          size='small'
          htmlSize={34}
        />
        <div className={styles.buttonContainer}>
          <Button size='small'>Meld meg på</Button>
        </div>
      </div>
    </div>
  );
};
export default CompositeComponent;
