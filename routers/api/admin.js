const express = require("express");
const adminController = require("../../controllers/admin");
const authenticate = require("../../middleware/authenticate");
const { requireSuperAdmin } = require("../../middleware/role");

const router = new express.Router();

router.get("/admins/test", adminController.testAdmin);
router.get(
  "/admins/me",
  authenticate.requireAdminLogin,
  adminController.readCurrentAdmin
);
router.post(
  "/admins",
  [authenticate.requireAdminLogin, requireSuperAdmin],
  adminController.createAdmin
);
router.post("/admins/iniSet", adminController.createAdmin);
router.get(
  "/admins",
  [authenticate.requireAdminLogin, requireSuperAdmin],
  adminController.readAdmins
);
router.get(
  "/admins/find",
  authenticate.requireAdminLogin,
  adminController.findAdmin
);
router.get(
  "/admins/:id",
  authenticate.requireAdminLogin,
  adminController.readOneAdmin
);
router.delete(
  "/admins/:id",
  [authenticate.requireAdminLogin, requireSuperAdmin],
  adminController.deleteAdmin
);
router.patch(
  "/admins/:id",
  [authenticate.requireAdminLogin, requireSuperAdmin],
  adminController.updateAdmin
);
router.post("/admins/login", adminController.loginAdmin);
router.post(
  "/admins/logout",
  authenticate.requireAdminLogin,
  adminController.logoutAdmin
);
router.post(
  "/admins/changePassword",
  authenticate.requireAdminLogin,
  adminController.changePassword
);

router.post(
  "/admins/resetPassword",
  [authenticate.requireAdminLogin, requireSuperAdmin],
  adminController.resetPassword
);

module.exports = router;
