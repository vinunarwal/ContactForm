const Contact = require("../models/contactSchema");

const addContact = async (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        message
    });

    try {
        await newContact.save();
        console.log('Contact Created');
        res.status(201).json({ message: "Contact created successfully", newContact });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating contact", error: err.message });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        res.json({ "contacts": contacts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching contacts", error: err.message });
    }
};

module.exports = { addContact, getContacts };
