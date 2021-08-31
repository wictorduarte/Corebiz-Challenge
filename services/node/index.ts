import {
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  method,
} from '@vtex/api'
import { Clients } from './clients'
import { omsHook } from './handlers/oms'

/* import { status } from './middlewares/status'
import { validate } from './middlewares/validate'
 */

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    // code: number
  }
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      },
    },
  },
  routes: {
    hook: method({
      POST: [omsHook],
    }),
  },
})