import { ResultType } from "../Results/Results"
import ContentCard from "./ContentCard"
import ContentCardBrand from "./ContentCardBrand"
import ContentCardProduct from "./ContentCardProduct"
import ContentCardSeller from "./ContentCardSeller"

export type ContentCardRendererProps = {
  card: any
  type: ResultType
}

const RenderCard = ({ card, type }: ContentCardRendererProps): JSX.Element => {

  switch (type) {
    case 'Sellers':
      return <ContentCardSeller seller={card} />
    case 'Brands':
      return <ContentCardBrand brand={card} />
    case 'Products':
      return <ContentCardProduct product={card} />
    default:
      return <ContentCard {...card} />
  }
}

export function ContentCardRenderer(
  card: ContentCardRendererProps
): JSX.Element {
  return RenderCard(card)
}
