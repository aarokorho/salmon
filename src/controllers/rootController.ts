import { Response, Request } from 'express'

export const rootController = (req: Request, res: Response) => res.send('Salmon catch report API')