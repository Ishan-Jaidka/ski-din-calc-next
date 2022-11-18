import type { NextApiRequest, NextApiResponse } from 'next'
import '../../../lib/api/DIN/calculate-din-handler'
import { calculateDin } from '../../../lib/api/DIN/calculate-din-handler'

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if (Object.keys(req.query).length === 0) {
      res.setHeader('Access-Control-Allow-Origin', '*').status(400).json({ error: 'no query params' })
      return
    }
    let skier = {
      units: req.query.units,
      type: req.query.type,
      height: req.query.height,
      weight: req.query.weight,
      age: req.query.age,
      bsl: req.query.bsl,
    }
    console.log(`Incoming data:`)
    console.log(skier)

    let response = calculateDin(skier)

    console.log(response)
    res.setHeader('Access-Control-Allow-Origin', '*').status(response.status).send(response)
  } catch (e) {
    console.log('Error: ')
    console.log(e)
    res.setHeader('Access-Control-Allow-Origin', '*').status(500).send({ error: 'something went wrong' })
  }
}
