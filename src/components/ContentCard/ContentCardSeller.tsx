import Link from 'next/link'
import styles from './ContentCard.module.css'
import Image from 'next/image'
import { ISeller } from '@/types/apiTypes'
export type ContentCardSellerProps = {
  seller: ISeller
}

const ContentCardSeller = ({ seller }: ContentCardSellerProps) => {
  return (
    <Link href="">
      <figure className={styles.thumbnail}>
        <div>
          {seller ? (
            <Image
              src={seller.profileImage}
              alt={''}
              width={232}
              height={232}
              sizes={'33vw'}
              quality={50}
            />
          ) : null}
        </div>
      </figure>
    </Link>
  )
}

export default ContentCardSeller
