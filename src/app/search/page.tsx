
import Results from '@/components/Results'
import { ResultProps } from '@/components/Results/Results'


export default function SearchPage({ results }: ResultProps) {
  return (
    <div>
      <Results results={results} />
    </div>
  )
}
