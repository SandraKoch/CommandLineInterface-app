const fs = require("fs");
const path = require("path");

let contactsPath = path.resolve("db", "contacts.json");

function listContacts() {
  let jsondata = fs.readFileSync(contactsPath);
  let parsedData = JSON.parse(jsondata);
  return parsedData;
}

function getContactById(id) {
  const contacts = listContacts();
  const searchedContact = contacts.find((contact) => id === contact.id);
  return searchedContact;
}

function removeContact(contactId) {
  const contacts = listContacts();
  const filteredContacts = contacts.filter(
    (contact) => contactId !== contact.id
  );
  fs.writeFileSync(contactsPath, JSON.stringify(filteredContacts));
}

function addContact(id, name, email, phone) {
  const contacts = listContacts();
  const newContact = {
    id: id,
    name: name,
    email: email,
    phone: phone,
  };
  const updatedList = [...contacts, newContact];
  fs.writeFileSync(contactsPath, JSON.stringify(updatedList));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
