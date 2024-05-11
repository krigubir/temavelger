import { Card, Heading } from '@digdir/designsystemet-react';
import styles from './CardComponentAlt2.module.css';
type color = 'neutral' | 'subtle' | 'first' | 'second' | 'third';

interface CardComponentProps {
  color: color;
}

const CardComponentAlt2: React.FC<CardComponentProps> = ({ color }) => {
  return (
    <div className={styles.singleCardComponent}>
      <Card
        color={color}
        style={{
          width: '230px',
        }}
      >
        <Card.Media>
          <div className={styles.cardImage}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 0 290 226'
              fill='none'
            >
              <g clipPath='url(#clip0_1367_2210)'>
                <rect
                  x='0.666656'
                  y='0.5'
                  width='422'
                  height='253'
                  fill='white'
                />
                <path
                  d='M-78.3333 0.5H485.667L378.507 255.5H123.579L-78.3333 0.5Z'
                  fill={'var(--fds-brand-alt2-300)'}
                />
                <path
                  d='M113.121 334L232.621 -14L518.121 381.5L218.167 186L113.121 334Z'
                  fill={'var(--fds-brand-alt2-200)'}
                />
                <circle
                  cx='309.667'
                  cy='119.5'
                  r='81'
                  fill={'var(--fds-brand-alt2-700)'}
                />
                <path
                  d='M152.667 138L-20.5833 238.026L-20.5833 37.9741L152.667 138Z'
                  fill={'var(--fds-brand-alt2-700)'}
                />
                <circle
                  cx='68.1667'
                  cy='87'
                  r='39.5'
                  fill={'var(--fds-brand-alt2-200)'}
                />
                <circle
                  cx='309.167'
                  cy='120'
                  r='29.5'
                  fill='#FFEEE1'
                />
              </g>
            </svg>
          </div>
        </Card.Media>
        <Card.Header>
          <Heading size='small'>Card Title</Heading>
        </Card.Header>
        <Card.Content>
          Most provide as with carried business are much better more the
          perfected designer.
        </Card.Content>
      </Card>
    </div>
  );
};
export default CardComponentAlt2;
