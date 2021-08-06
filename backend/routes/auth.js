const express = require('express')
const router = express.Router()

<<<<<<< HEAD
// Users Registeration Route
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "User", res);
});
=======
const AuthController = require('../controllers/AuthController')
>>>>>>> parent of 6deee41 (update)

router.post('/register', AuthController.register)


<<<<<<< HEAD
//Approver Registration Route

router.post("/register-approver", async (req, res) => {
  await userRegister(req.body, "approver", res);
});

// Users Login Route
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "User", res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

// Super Admin Login Route
router.post("/login-super-admin", async (req, res) => {
  await userLogin(req.body, "superadmin", res);
});
router.post("/login-approver", async (req, res) => {
  await userLogin(req.body, "approver", res);
});
// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// Users Protected Route
router.get(
  "/user-protectd",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return res.json("Hello User");
  }
);

// Admin Protected Route
router.get(
  "/admin-protectd",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("Hello Admin");
  }
);

// Super Admin Protected Route
router.get(
  "/super-admin-protectd",
  userAuth,
  checkRole(["superadmin"]),
  async (req, res) => {
    return res.json("Hello Super Admin");
  }
);

// Super Admin Protected Route
router.get(
  "/super-admin-and-admin-protectd",
  userAuth,
  checkRole(["superadmin", "admin"]),
  async (req, res) => {
    return res.json("Super admin and Admin");
  }
);

module.exports = router;
=======
module.exports = router
>>>>>>> parent of 6deee41 (update)
