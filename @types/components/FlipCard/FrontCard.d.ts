/** Renders the front card component. */
declare function FrontCard(props: FrontCardComponentProps): React.JSX.Element;

type FrontCardComponentProps = FrontCardOfferProps & FrontCardProps;
type FrontCardOfferProps = Pick<
  OfferProps,
  | "subOfferType"
  | "offerStartDate"
  | "offerEndDate"
  | "disclaimers"
  | "financeType"
  | "customerType"
  | "productLine"
  | "imageContainer"
  | "rate"
  | "isFeatured"
  | "additionalCashSavings"
  | "termsInMonths"
  | "retailBonus"
  | "npniMonth"
  | "npniYear"
  | "percentOff"
  | "cashSavings"
>;
interface FrontCardProps {
  children?: React.ReactElement;
}
