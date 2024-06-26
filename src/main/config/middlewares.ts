import {Express} from 'express'
import { bodyParser, contentType, cors } from './middlewares/'

export const setupMiddlewares = (app: Express): void => {
  app.use(
    bodyParser,
    cors,
    contentType,
  )
}