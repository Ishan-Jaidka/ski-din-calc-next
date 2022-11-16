import type { NextApiRequest, NextApiResponse } from 'next'
import '../handlers/calculate-din-handler'
import { calculateDin } from '../handlers/calculate-din-handler'

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if (Object.keys(req.query).length === 0) res.status(400).json({ error: 'no query params' })
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

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(response.status).json(response)
  } catch (e) {
    console.log('Error: ')
    console.log(e)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(500).send({ error: 'something went wrong' })
  }

  res.status(200).json(req.query)
}

function returnResponse(statusCode: number, message: any) {
  let response = {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: message,
  }
  console.log(`Response: ${JSON.stringify(response)}`)
  return response
}
