
export enum sortByEnum {
  ASC = 'lowPrice',
  DESC = 'highPrice',
  NEWEST = 'newest',
  RELEVANCE = 'relevance',
}
export enum sortLabelEnum {
  'lowPrice' = 'Price: Low to High',
  'highPrice' = 'Price: High to Low',
  'newest' = 'Newest',
  'relevance' = 'Relevance (Default)',
}

export type IFacet = {
  name: string
  count: number
}

export type ISeller = {
  id: string
  firstName: string
  lastName: string
  userType: string
  shopKey: string
  shopName: string
  description: string
  profileImage: string
  backgroundImage: string
  createdAt: string
  updatedAt: string
}

export type IProduct = {
  id: string
  productId: string
  active: boolean
  available: boolean
  badges: string[]
  brand: {
    name: string
    merchantBrand: false
  }
  merchantId: string
  merchantProductId: string
  commissionRate: number
  locales: [
    {
      country: string
      language: string
      currency: string
      active: boolean
      available: boolean
      variants: [
        {
          merchantVariantId: string
          title: string
          description: string
          price: number
          oldPrice: number
          stockCount: number
          active: boolean
          available: boolean
          images: {
            url: string
            index: number
          }[]
          options: {
            key: string
            keyName: string
            value: string
          }[]
          createdAt: string
          updatedAt: string
        },
        {
          title: string
          description: string
          price: number
          oldPrice: number
          stockCount: number
          active: false
          available: false
          images: {
            url: string
            index: number
          }[]
          options: {
            key: string
            keyName: string
            value: string
          }[]
          createdAt: string
          updatedAt: string
        },
      ]
      createdAt: string
      updatedAt: string
    },
  ]
  categories: {
    name: string
    index: number
  }[]
  createdAt: string
  updatedAt: string
}

export type IBrand = {
  id: string
  merchantId: string
  active: boolean
  kycComplete: boolean
  url: string
  shopKey: string
  name: string
  description: string
  type: string
  images: {
    url: string
    type: string
  }[]
  productBadges: string[]
  productCommissionRate: number
  stripeConnectedAccountId: string
  activeProductCount: number
  totalProductCount: number
  importedAt: string
  createdAt: string
  updatedAt: string
  shopName: string
  profileImage: string
  backgroundImage: string | null
}

export type IResult = {
  meta: {
    totalHits: number
    totalUsers: number
    limit: number
    offset: number
    hasMore: boolean
    queryTime: number
  }
  hits: {
    id: string
    productId: string
    highlight: {
      description: string
    }[]
  }
  facets: {
    [key: string]: IFacet[]
  }
  products: IProduct[]
  merchants: IBrand[]
  users: ISeller[]
}

export type FacetKey = 'brands' | 'categories' | 'merchants'
