import * as dotenv from 'dotenv'
import { cleanEnv, str } from 'envalid'

dotenv.config({ path: `${__dirname}/../../.env` })

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  TOKEN: str(),
  MONGO: str(),
})
