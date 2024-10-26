import { NEXT_SEARCH_API_KEY, SEARCH_API_URL } from '@/config/constants'

export enum sortByEnum {
  ASC = 'lowPrice',
  DESC = 'highPrice',
  NEWEST = 'newest',
  RELEVANCE = 'relevance',
}
export async function searchQuery(
  query: string | FormDataEntryValue | null,
  sortBy?: sortByEnum
) {
  if (!query) return
  const requiredBody = {
    query: query,
    sortBy: sortBy ?? sortByEnum.RELEVANCE,
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
      //throw searchResponse?.errors
    }
    return searchResponse
  } catch (error) {
    console.error(`Error fetching search items --> ${error}`)
  }
}
