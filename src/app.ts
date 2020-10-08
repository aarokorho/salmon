import { catchReportRouter } from './routes/catchReportRoutes'
import { rootController } from './controllers/rootController'
import express from 'express'

const app = express()
const PORT = 8000

app.get('/', rootController)

app.use('/catchReport', catchReportRouter)

app.listen(PORT, () => { console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`) })