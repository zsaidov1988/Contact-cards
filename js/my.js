
//================Initial Datas===============

let contacts = [{
  name: "Abdullatifxon",
  surname: "Anvarxonov",
  number: "Unknown",
  relationship: "Ustoz"
},
{
  name: "Zafar",
  surname: "Saidov",
  number: "+998998789878",
  relationship: "Shogird"
},
{
  name: "Abdushukur",
  surname: "Turdimatov",
  number: "Unknown",
  relationship: "Shogird"
},
];

//=================Variables=================

var isEditing = false; // This will be true when pressed edit button
var indexEditingContact = null; // This assigned index of editing object


//================Elements=====================

var elNewContactForm = $_('.js-contact-form'); // Form adding new contact
var elContactInputName = $_('.js-input-name', elNewContactForm); // Input name
var elContactInputSurname = $_('.js-input-surname', elNewContactForm); // Input surname
var elContactInputNumber = $_('.js-input-number', elNewContactForm); // Input phone number
var elContactInputRelationship = $_('.js-input-relationship', elNewContactForm); // Input relationship

var elMessageName = $_('.js-message-name', elNewContactForm); // <div></div> message for wrong enter name
var elMessageSurname = $_('.js-message-surname', elNewContactForm);// <div></div> message for wrong enter surname
var elMessageNumber = $_('.js-message-number', elNewContactForm); // <div></div> message for wrong enter number
var elMessageRelationship = $_('.js-message-relationship', elNewContactForm); // <div></div> message for wrong enter relationship


var elContactList = $_('.js-contact-list'); // UL element for contact cards 

elContactInputName.focus(); // Focus to name input field

renderContactList(); // Initial update contact card list




// Add new contact
elNewContactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Check input datas and assign to variable 
  let contactName = checkInputText(elContactInputName, elMessageName);
  let contactSurname = checkInputText(elContactInputSurname, elMessageSurname);
  let contactNumber = elContactInputNumber.value.trim();
  let contactRelationship = checkInputText(elContactInputRelationship, elMessageRelationship);

  // Check "Is There any wrong inputs"
  if (!contactName || !contactSurname || !contactRelationship) {
    return;
  }

  // Edit selected contact
  if (isEditing) { // if Pressed edit button
    contacts[indexEditingContact].name = contactName;
    contacts[indexEditingContact].surname = contactSurname;
    contacts[indexEditingContact].number = contactNumber;
    contacts[indexEditingContact].relationship = contactRelationship;
    isEditing = false;
    indexEditingContact = null;
  } else { // Add new object to contacts array
    contacts.push(createObject(contactName, contactSurname, contactNumber, contactRelationship));
  }
  renderContactList(); // Update contact cards list
  clearInputs(); // Clear all input values
  elContactInputName.focus(); // Focus to input name field

});




