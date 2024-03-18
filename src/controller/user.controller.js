
 export const Login = async (req, res) => {
  if (!req.user) return res.status(400).send("Invalid Credentials");

  req.session.user = req.user;

  res.send("Usuario Logueado Correctamente")
  
};


export const register = async (req, res) => {
  const user = req.body;

  if (user.user === "Admin" && user.password === "adm1n39") {
    user.rol = "admin";
  } else {
    user.rol = "usuario";
  }
res.send(user)
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({ message: err });
    }
    res.send("Logout User")
  });
};