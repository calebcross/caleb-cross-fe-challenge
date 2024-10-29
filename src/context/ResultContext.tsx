import { IBrand, IProduct, ISeller } from '@/types/apiTypes'
import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextState {
  sellers: ISeller[]
  setSellers: Dispatch<SetStateAction<ISeller[]>>
  merchants: IBrand[]
  setMerchants: Dispatch<SetStateAction<IBrand[]>>
  products: IProduct[]
  setProducts: Dispatch<SetStateAction<IProduct[]>>
}
const ResultContext = createContext({} as ContextState)

export { ResultContext }
