import express from 'express'
import { getCatchReport } from '../controllers/catchReportController'

export const catchReportRouter = express.Router({ mergeParams: true })

catchReportRouter.get('/item', getCatchReport)