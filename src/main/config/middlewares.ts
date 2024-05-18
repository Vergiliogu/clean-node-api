import {Express} from 'express'
import { bodyParser } from './middlewares/body-parser'
import { cors } from './middlewares/cors'
import { contentType } from './middlewares/content-type'

export const middlewares = (app: Express): void => {
  app.use(
    bodyParser,
    cors,
    contentType,
  )
}