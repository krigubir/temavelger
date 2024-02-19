import { Card, Heading } from '@digdir/design-system-react';
import styles from './CardComponentAlt3.module.css';
type color = 'neutral' | 'subtle' | 'first' | 'second' | 'third';

interface CardComponentProps {
  color: color;
}

const CardComponentAlt3: React.FC<CardComponentProps> = ({ color }) => {
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
              viewBox='0 0 289 226'
              fill='none'
            >
              <g clipPath='url(#clip0_1367_1675)'>
                <rect
                  width='288.667'
                  height='225'
                  transform='translate(0.333374 0.5)'
                  fill={'var(--fds-brand-alt3-300)'}
                />
                <path
                  d='M161.833 71L437.333 201V266L21.8334 260.5L161.833 71Z'
                  fill={'var(--fds-brand-alt3-100)'}
                />
                <path
                  d='M-103.667 295.5L15.8334 -52.5L301.333 343L1.37866 147.5L-103.667 295.5Z'
                  fill={'var(--fds-brand-alt3-200)'}
                />
                <circle
                  cx='309.333'
                  cy='119.5'
                  r='81'
                  fill={'var(--fds-brand-alt3-900)'}
                />
                <path
                  d='M163.333 117L85.3334 162.5L85.3334 71.5L163.333 117Z'
                  fill={'var(--fds-brand-alt3-700)'}
                />
                <circle
                  cx='323.333'
                  cy='187.5'
                  r='60'
                  fill='white'
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
export default CardComponentAlt3;
