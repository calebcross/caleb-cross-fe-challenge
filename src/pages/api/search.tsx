import { searchQuery } from '@/client/search'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      const { query } = req.body
      if (!query) res.status(400).end()
      const data = await searchQuery(query)
      res.status(200).json(data)
      break
    }
    default: {
      res.status(405).end()
    }
  }
}

export default handler
