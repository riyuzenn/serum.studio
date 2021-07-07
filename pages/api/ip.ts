// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.toString().split(/, /)[0] : req.connection.remoteAddress
    res.status(200).send(ip)
}
