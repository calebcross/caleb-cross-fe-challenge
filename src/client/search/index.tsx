import { NEXT_SEARCH_API_KEY, SEARCH_API_URL } from '@/config/constants'
import { sortByEnum } from '@/types/apiTypes'

export async function searchQuery(
  query: string | string[],
  sortBy?: string | string[]
) {
    if (!query) return
    const sortKey = sortBy as keyof typeof sortByEnum
  const requiredBody = {
    query: query,
    sortBy: sortKey ? sortBy : sortByEnum.RELEVANCE,
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(requiredBody),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `BASIC ${NEXT_SEARCH_API_KEY}`,
    },
  }
  try {
    const response = await fetch(`${SEARCH_API_URL}`, options)

    const searchResponse = await response.json()
    if (response.status != 200) {
      console.error(searchResponse)
      throw new Error('search API failed')
    }
    return searchResponse
  } catch (error) {
    console.error(`Error fetching search items --> ${error}`)
  }
}
