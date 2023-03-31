const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asynchandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

const createContacts = asynchandler(async (req, res) => {
  // console.log("req from cliend" , req.body)
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All field are mandetory--");
  }

  const contact = Contact.create({
    // name: req.body.name,
    // email: req.body.email,
    // phone: req.body.phone,
    name,
    email,
    phone
  });

  res.status(201)
  res.send(contact);
});

const getContactsbyId = asynchandler(async (req, res) => {
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
  res.status(200).json(contact);
});

const updateContacts = asynchandler(async (req, res) => {
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    const updatecontact =await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

  res.status(200).json(updatecontact);
});

const deleteContact = asynchandler(async (req, res) => {
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.findOneAndRemove()
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContacts,
  updateContacts,
  deleteContact,
  getContactsbyId,
};
