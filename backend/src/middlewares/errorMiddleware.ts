import { Context} from "hono"

const erroMiddleware=(err:any, c:Context) => {
    console.error(`${err}`)
    return c.text(err, 500)
  }

export default erroMiddleware