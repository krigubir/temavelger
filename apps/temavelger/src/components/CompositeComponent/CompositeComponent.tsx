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
      <div className={styles.svgContainer}>
        <svg
          className={styles.svgImage}
          xmlns='http://www.w3.org/2000/svg'
          width='311'
          height='435'
          viewBox='0 0 311 435'
          fill='none'
        >
          <path
            d='M320 -11V435H0L320 -11Z'
            fill={'var(--fds-brand-alt2-200)'}
          />
        </svg>
      </div>
      <div className={styles.svgContainer}>
        <svg
          className={styles.svgImage}
          xmlns='http://www.w3.org/2000/svg'
          width='215'
          height='431'
          viewBox='0 0 215 431'
          fill='none'
        >
          <path
            d='M217 0V431H0L217 0Z'
            fill={'var(--fds-brand-alt2-300)'}
          />
        </svg>
      </div>
    </div>
  );
};
export default CompositeComponent;
