/**
 * Renders a flip card component with a front and back side.
 *
 * @example
 *   <FlipCard FrontCard={<FrontComponent />} BackCard={<BackComponent />} />;
 */
declare function FlipCard(props: FlipCardComponentProps): React.JSX.Element;

/** Renders a card side component with a flip button and content. */
declare function CardSide(props: CardSideComponentProps): React.JSX.Element;

type FlipCardComponentProps = CardStyles & FlipCardProps;

interface FlipCardProps {
  /** Additional props not included from the api request. */
  FrontCard?: React.JSX.Element;
  /** Component to be rendered on the back side of the card. */
  BackCard?: React.JSX.Element;
  /** Whether the card is flipped or not. */
  isFlipped?: boolean;
  /** The handler function to flip the card. */
  onFlip?: (isFlippedIndex: number) => void;
}

type CardSideComponentProps = CardStyles & CardSideProps;

/** Additional props not included from the api request. */
interface CardSideProps {
  /** Whether the card side is flipped or not. */
  switched: boolean;
  /** Setter function to flip the card. */
  setSwitched: React.Dispatch<React.SetStateAction<boolean>>;
  /** Whether the card side is hidden or not (fixes issue with backface-visibility & FireFox). */
  hidden: boolean;
  /** Text for the flip button. */
  buttonText?: string;
  /** MUI <Grid item> components to be rendered in the card side. */
  children?: React.ReactElement;
}

interface CardStyles {
  /** Class name for the card container */
  className?: string;
  /** Alignment of the card content along the cross-axis */
  alignItems?: string;
  /** Alignment of the card content along the main axis */
  justifyContent?: string;
  /** Display property of the card container */
  display?: string;
  /** Padding of the card container */
  padding?: string;
  /** Spacing between grid items */
  spacing?: number;
  /** Number of columns in the grid */
  columns?: number;
  /** Width of the card container */
  width?: string | number;
  /** Maximum width of the card container */
  maxWidth?: number;
  /** Minimum width of the card container */
  minWidth?: number;
  /** Minium height of the card container */
  minHeight?: number;
  /** Determines whether the flip button is disabled */
  disabled?: boolean;
}
