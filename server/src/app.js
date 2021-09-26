import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { API_VERSION } from './config'
import userRouter from './routes/user.routes'

const app = express()




//Middelwares
app.use(cors())//para conectar backend
app.use(morgan("dev")) //para ver las peticiones que van llegando
app.use(express.json())


/**
 * Router Basic
 */
app.use(`/api/${API_VERSION}`, userRouter)



export default app