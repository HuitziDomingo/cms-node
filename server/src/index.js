import mongoose from 'mongoose'
import app from './app'
import { config as dotenv } from 'dotenv'
import {
    API_VERSION,
    DB_USER,
    DB_PASS,
    DB_NAME,
    PORT
} from './config'

dotenv()


app.listen(PORT, console.log("SERVIDOR CORRIENDO EN EL PUERTO:", PORT))

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.lj1xq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'cms' }).then(() => {
    console.log("CONEXION A LA BASE DE DATOS EXITOSA")
}).catch((err) => console.log(err))

