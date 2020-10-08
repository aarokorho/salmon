import { Request, Response } from 'express'
import { catchReportService } from '../services/catchReportService'
import { CatchReportGetParams } from '../types/catchReportTypes'
import * as E from 'fp-ts/Either'

export const getCatchReport = async (req: Request, res: Response) => {
  const decodedParams = CatchReportGetParams.decode(req.query)

  if(E.isLeft(decodedParams)) {
    return res.status(400).send('Invalid request parameters')
  }

  const catchReport = await catchReportService({ ...decodedParams.right })()

  if(E.isLeft(catchReport)) {
    return res.status(500).send('Unable to fetch catch report')
  }

  return res.status(200).json(catchReport.right)
}