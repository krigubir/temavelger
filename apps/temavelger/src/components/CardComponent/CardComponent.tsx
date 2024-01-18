import { Card, Heading } from '@digdir/design-system-react';
import styles from './CardComponent.module.css';
type CardVariant = 'neutral' | 'subtle' | 'first' | 'second' | 'third';

interface CardComponentProps {
  cardVariant: CardVariant;
}

const CardComponent: React.FC<CardComponentProps> = ({ cardVariant }) => {
  return (
    <div className={styles.singleCardComponent}>
      <Card
        color={cardVariant}
        style={{
          width: '230px',
        }}
      >
        <Card.Media>
          <img
            src='https://storybook.designsystemet.no/static/media/Cat%201.3c16ca2e.jpg'
            alt='kattepus'
          />
        </Card.Media>
        <Card.Header>
          <Heading size='small'>Card Title</Heading>
        </Card.Header>
        <Card.Content>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this
        </Card.Content>
      </Card>
    </div>
  );
};
export default CardComponent;
