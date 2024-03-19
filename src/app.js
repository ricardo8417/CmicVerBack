import express from 'express'
import registroRouter from  './routes/registro.router.js'
import cors from 'cors'
import bodyParser from "body-parser"
import mongoose  from 'mongoose'
import dotenv from "dotenv"; 
import userRouter from './routes/user.router.js'
import initializePassport from './config/passport.config.js'
import passport from 'passport'
import session from "express-session";
import MongoStore from "connect-mongo";

dotenv.config();
const app = express() 
app.use(cors());
// Configurar bodyParser para analizar las solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("",express.static("public"))

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
      dbName: process.env.MONGO_DBNAME,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 1000000000000000,
    }),
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

initializePassport();
//middleware de paspport
app.use(passport.initialize());
app.use(passport.session());
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use("/api/registro", registroRouter);

app.use("/api/Login",userRouter);

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





