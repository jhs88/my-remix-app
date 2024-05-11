/** Renders the back card component. */
declare function BackCard(props: BackCardComponentProps): React.JSX.Element;

type BackCardComponentProps = Pick<
  OfferProps,
  "subOfferType" | "secondaryHeading" | "description" | "eligibleEquipments"
> & {
  children?: React.ReactElement;
};
