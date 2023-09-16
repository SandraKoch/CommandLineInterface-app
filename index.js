const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      return listContacts();

    case "get":
      return getContactById(id);

    case "add":
      return addContact(name, email, phone);

    case "remove":
      return removeContact(id);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const value = invokeAction(argv);

if (value) {
  console.log(value);
}
