import {Express} from 'express'
import { bodyParser, contentType, cors } from './middlewares/'

export const middlewares = (app: Express): void => {
  app.use(
    bodyParser,
    cors,
    contentType,
  )
}