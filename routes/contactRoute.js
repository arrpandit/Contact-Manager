const express = require("express");
const router = express.Router();


const {
  getContacts,
  createContacts,
  updateContacts,
  deleteContact,
  getContactsbyId
} = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/").post(createContacts);

router.route("/:id").get(getContactsbyId);

router.route("/:id").put(updateContacts);

router.route("/:id").delete(deleteContact);

//we can also use above line in such way 
// router.route("/").get(getContacts).post(createContacts);
// router.route("/:id").get(getContactsbyId).put(updateContacts).delete(deleteContact);

module.exports = router;
