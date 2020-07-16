import { Request, Response } from 'express'

export default function get(req: Request, res: Response) {
  res.json({ message: 'Welcome to the Sample TypeScript Express API' })
}
