const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    return result || null;
};

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === contactId);
    if (idx === -1) return null;
    const [result] = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
};

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        name,
        email,
        phone,
        id: nanoid(),
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
};

const updateContact = async (id, data) => {
    const contact = await listContacts();
    const idx = contact.findIndex((item) => item.id === id);
    if (idx === -1) return null;
    contact[idx] = { id, ...data };
    await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
    return contact[idx];
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};
