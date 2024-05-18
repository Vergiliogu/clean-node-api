import {Express} from 'express'
import { bodyParser } from './middlewares/body-parser'
import { cors } from './middlewares/cors'

export const middlewares = (app: Express): void => {
  app.use(
    bodyParser,
    cors,
  )
}