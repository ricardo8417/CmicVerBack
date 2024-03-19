import passport from "passport";
import local from "passport-local";
import UserModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";


const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        const { first_name, last_name, email, rol } = req.body;
        try {
          const usuario = await UserModel.findOne({ email: username });
          
          if (usuario) {
            console.log("User already exits");
            return done(null, false);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            password: createHash(password),
            rol,
          };

          const result = await UserModel.create(newUser);
          return done(null, result);
        } catch (e) {
          return done("Error to register " + error);
        }
      }
    )
  );
  //login es el nombre para iniciar con local
  passport.use("login",new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        
        try {
          const user = await UserModel.findOne({ email: username }).lean().exec();
         
          if (!user) {
            console.error("User doesnt exist");
            return done(null, false, { message: 'Usuario no encontrado' });
          }
          if (!isValidPassword(user, password)) {
            console.error("Password not valid");
            return done(null, false, { message: "Contraseña incorrecta" });
          }
          return done(null, user);
        } catch (e) {
          return done("Error Login" + error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findById(id);
    done(null, user);
  });
};

export default initializePassport;