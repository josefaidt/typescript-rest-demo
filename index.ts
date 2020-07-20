import path from 'path'
import express, { Request, Response } from 'express'
import FSRouter from 'express-fs-router'

const PORT: number = parseFloat(process.env.PORT) || 3000
const app = express()

app.get('/test', (req: Request, res: Response) => res.json({ message: 'hello' }))
app.use('/api', new FSRouter(path.join(__dirname, 'api')))

app.listen(PORT, () => console.info(`Listening at http://localhost:${PORT}`))
