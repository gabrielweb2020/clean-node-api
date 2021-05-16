import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeLoginController } from '../factories/controllers/login/login-controller-factory'
import { makeSignUpController } from '../factories/controllers/signup/signup-controller-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeLoginController()))
  router.post('/login', adaptRoute(makeSignUpController()))
}
