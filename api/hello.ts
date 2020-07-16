import { Request, Response } from 'express'

export default function get(req: Request, res: Response) {
  // const name: string = req.query.name ?? 'World'
  const message: string = `Hello, ${req.query.name || 'World'}!`
  res.json({ message })
}
