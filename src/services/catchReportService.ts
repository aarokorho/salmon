import { CatchReportGetParams } from '../types/catchReportTypes'
import { catchReportFetcher } from './catchReportFetcher'

export const catchReportService = ({ riverId, zoneId, startDate, endDate }: CatchReportGetParams) => {
  return catchReportFetcher({ riverId, zoneId, startDate, endDate })
}