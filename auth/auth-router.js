const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
const router = require("express").Router();
router.get("/", (req, res) => {
  res.status(200).send("what");
});

router.post("/register", (req, res) => {
  const password = req.body.password
    ? String(bcrypt.hashSync(req.body.password, 13))
    : "";
  const username = req.body.username ? req.body.username : "";
  Users.add({ username, password })
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  req.body.password &&
    req.body.username &&
    req.body.username.length > 0 &&
    Users.findBy({ username: req.body.username })
      .first()
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = `${req.body.username}`;
          req.session.loggedIn = true;
          req.session.save(); // don't forget this!
          // console.log(req.session); //
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: "you shall not pass" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
});

module.exports = router;
