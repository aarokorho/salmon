import { DateFromISOString, NumberFromString, optionFromNullable } from 'io-ts-types'
import * as t from 'io-ts'

export const CatchReportGetParams = t.type({
  riverId: NumberFromString,
  zoneId: optionFromNullable(t.string),
  startDate: optionFromNullable(DateFromISOString),
  endDate: optionFromNullable(DateFromISOString)
})

export type CatchReportGetParams = t.TypeOf<typeof CatchReportGetParams>

export const CatchReportItem = t.type({
  date: DateFromISOString,
  weight: t.number,
  species: t.string,
  fishingGear: t.string,
  zone: t.string,
  released: t.boolean,
  farmed: t.boolean
})

export type CatchReportItem = t.TypeOf<typeof CatchReportItem>

export const CatchReportFilter = t.type({
  fishSpecies: t.string
})

type FishSpecies = 'salmon'|'seaTrout'|'seaChar'|'rainbowTrout'|'humpbackSalmon'
type FishingMethod = 'fly'|'worm'|'lure'
export const fishingStyle = t.type({
  fishingStyle: t.string
})