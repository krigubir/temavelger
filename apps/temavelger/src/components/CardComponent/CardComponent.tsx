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
            src={`../../../../${cardVariant}BrandAltImage.svg`}
            alt='brand color image'
          />
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
export default CardComponent;
