import { Express, Router } from 'express'
import { sync } from 'fast-glob'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  sync('**/src/main/config/routes/**routes.ts')
    .map(async (file) => {
      console.log(file);
      (await import(`./routes/${file.split('/').at(-1)}`)).default(router)
})
}