import { CatchReportGetParams, CatchReportItem } from '../types/catchReportTypes'
import * as TE from 'fp-ts/TaskEither'

export const catchReportFetcher = ({ riverId, startDate, endDate }: CatchReportGetParams): TE.TaskEither<Error, CatchReportItem[]> => {
  return TE.right([{
    date: new Date(),
    weight: 10.2,
    species: 'seatrout',
    fishingGear: 'fly fish',
    zone: 'zone 2',
    released: true,
    farmed: false
  }])
}