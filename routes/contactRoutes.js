const express=require("express");
const router=express.Router();
const {getContact}=require("../controller/contactController")
const {createContact}=require("../controller/contactController")
const {updateContact}=require("../controller/contactController")
const {deleteContact}=require("../controller/contactController")
const {getIContact}=require("../controller/contactController")

router.route("/").get(getContact);

router.route('/').post(createContact);

router.route('/:id').put(updateContact)

router.route("/:id").delete(deleteContact)

router.route("/:id").get(getIContact)

module.exports=router;