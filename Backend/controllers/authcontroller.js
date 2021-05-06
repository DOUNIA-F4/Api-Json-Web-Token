const usermodel = require("../Models/usermodels");
const jwt = require("jsonwebtoken");
exports.bright = (req, res) => {
  res.send("users module");
};

exports.signup = (req, res) => {
  const user = new usermodel({ ...req.body });
  // console.log(user);
  // console.log(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).send(err);
    }
    user.hashed_password = undefined;
    res.send(user);
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  usermodel.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found with this email, Please SignUp!",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        errors: "Email and Password dont Match !",
      });
    }
    const { _id, name, email, role } = user;
    const token = jwt.sign({ _id: user._id, role }, process.env.JWT_SECRET);

    res.cookie("token", token, { expire: new Date() + 8062000 });

    return res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User Signout",
  });
};
