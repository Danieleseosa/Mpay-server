const Contact = require("../models/Contact");

// controller to submit contact
const submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Save all the data that will be in these keys in the database
  const contactInfo = await Contact.create({ name, email, subject, message });

  console.log(req.body);

  //   reponse message if successful
  res.status(201).json({ message: "Submitted successfully" });
};

module.exports = submitContact;
