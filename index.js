const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { argv } = require("yargs");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      return listContacts();
      break;

    case "get":
      return getContactById(id);
      break;

    case "add":
      return addContact(name, email, phone);
      break;

    case "remove":
      return removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// console.log(invokeAction({ action: "remove", id: "123" }));
// const myContact = getContactById("rsKkOQUi80UsgVPCcLZZW");
// console.log(myContact);
// removeContact("AeHIrLTr6JkxGE6SN-0Rw");
// addContact("456", "Sandra", "mail@mail", "123456789");
// console.log(listContacts());
invokeAction(argv);
