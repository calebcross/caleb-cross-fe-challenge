import Link from 'next/link'
import styles from './ContentCard.module.css'
import Image from 'next/image'
import { IProduct } from '@/types/apiTypes'
export type ContentCardProductProps = {
  product: IProduct
}

const ContentCardProduct = ({ product }: ContentCardProductProps) => {
  const { title, price, options } = product.locales[0].variants[0]
  const { name: brand } = product.brand
  return (
    <article className={styles.root}>
      <Link href="">
        <figure className={styles.thumbnailProduct}>
          <div>
            {product ? (
              <Image
                src={product.locales[0].variants[0].images[0].url}
                alt={''}
                width={232}
                height={232}
                sizes={'33vw'}
                quality={50}
              />
            ) : null}
          </div>
        </figure>
        <div className={styles.productDetails}>
          <span className={styles.detailsBold}>{brand}</span>
          <div>{title}</div>
          <div>
            {options.length} option{options.length > 1 ? 's' : ''}
          </div>
          <div className={styles.detailsBold}>${price.toFixed(2)}</div>
        </div>
      </Link>
    </article>
  )
}

export default ContentCardProduct
