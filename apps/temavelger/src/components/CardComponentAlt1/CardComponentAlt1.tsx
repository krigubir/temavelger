import { Card, Heading } from '@digdir/design-system-react';
import styles from './CardComponentAlt1.module.css';
type color = 'neutral' | 'subtle' | 'first' | 'second' | 'third';

interface CardComponentProps {
  color: color;
}

const CardComponentAlt1: React.FC<CardComponentProps> = ({ color }) => {
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
              viewBox='0 0 289 226'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g clipPath='url(#clip0_1367_1115)'>
                <rect
                  y='1.5'
                  width='422'
                  height='252'
                  fill='white'
                />
                <path
                  d='M-25 -1.5H247.5L88 253.5H-25V-1.5Z'
                  fill={'var(--fds-brand-alt1-500)'}
                />
                <path
                  d='M160.5 1H423.5V269L261 166.5L160.5 1Z'
                  fill={'var(--fds-brand-alt1-400)'}
                />
                <circle
                  cx='37'
                  cy='43.5'
                  r='69'
                  fill={'var(--fds-brand-alt1-200)'}
                />
                <circle
                  cx='130.5'
                  cy='174'
                  r='39.5'
                  fill={'var(--fds-brand-alt1-300)'}
                />
                <circle
                  cx='309'
                  cy='119.5'
                  r='81'
                  fill={'var(--fds-brand-alt1-600)'}
                />
                <path
                  d='M308.5 85.5L408.526 258.75H208.474L308.5 85.5Z'
                  fill={'var(--fds-brand-alt1-900)'}
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
export default CardComponentAlt1;
