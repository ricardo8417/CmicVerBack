import express from 'express'
import registroRouter from  './routes/registro.router.js'
import cors from 'cors'
import bodyParser from "body-parser"
import mongoose  from 'mongoose'
import dotenv from "dotenv"; 

dotenv.config();
const app = express() 
app.use(cors());
// Configurar bodyParser para analizar las solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("",express.static("public"))


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use("/api/registro", registroRouter);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
        dbName: process.env.MONGO_DBNAME
  })
  .then((r) => {
    app.listen(process.env.PORT, () => console.log("Listening..."));
  })
  .catch((e) => {
    console.error("No conectado", e);
  });





