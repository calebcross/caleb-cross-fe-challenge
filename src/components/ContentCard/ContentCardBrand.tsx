import Link from 'next/link'
import styles from './ContentCard.module.css'
import NextImage from 'next/image'
export type ContentCardBrandProps = {
  brand: {
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
    productBadges: string
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
}

const ContentCardBrand = ({ brand }: ContentCardBrandProps) => {
  return (
    <Link href="">
      <figure className={styles.thumbnail}>
        
          {brand ? (
            <NextImage
              src={brand.profileImage ?? ''}
              alt={''}
              width={232}
              height={232}
              sizes={'33vw'}
              quality={50}
            />
          ) : null}

      </figure>
    </Link>
  )
}

export default ContentCardBrand
