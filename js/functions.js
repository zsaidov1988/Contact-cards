
//=================Functions======================
// Check input values: empty string or string length more than 15
const checkInputText = (element, elMessage) => {
  let text = element.value.trim();

  if (text.length > 0 && text.length <= 20) {
    return text;
  }
  else {
    element.classList.add('border-danger');
    if (text.length == 0) {
      elMessage.textContent = "Bu maydonga matn kiritish shart";
    } else if (text.length > 15) {
      elMessage.textContent = "15 ta simvoldan oshmasligi kerak";
    }
    return false;
  }
}

// This function creates new object and return this object
const createObject = (firstname, lastname, number, relationship) => {
  return {
    name: firstname,
    surname: lastname,
    number: number,
    relationship: relationship
  }
}


// Update contact cards list
const renderContactList = () => {
  elContactList.innerHTML = ''; // Clear list

  // Loop for contacts array
  contacts.forEach(function (contact, i) {
    let itemLi = createElement("li", "border border-2 border-primary rounded-3 p-2 shadow mx-1 mb-2 list-item", "", elContactList); // Create li tag and append to ul tag

    // Create p, a and button tags and append them to li tag
    createElement("p", "m-0 js-full-name", `${contact.surname} ${contact.name}`, itemLi);
    createElement("p", "m-0 js-relationship", contact.relationship, itemLi);
    let phone = createElement("a", "js-number", contact.number, itemLi);
    phone.href = `tel:${contact.number}`;

    let deleteButton = createElement("button", "btn btn-danger btn-sm js-close-button", 'X', itemLi); // Create delete button
    deleteButton.type = 'button';
    deleteButton.value = i;

    deleteButton.addEventListener('click', function () {
      contacts.splice(parseInt(this.value), 1); // delete current object
      renderContactList(); // update contact cards list
    })

    let editButton = createElement("button", "btn btn-success btn-sm js-edit-button", "", itemLi); // Create delete button
    editButton.type = 'button';
    editButton.value = i;

    editButton.addEventListener('click', function () {
      let index = parseInt(this.value);

      elContactInputName.value = contacts[index].name;
      elContactInputSurname.value = contacts[index].surname;
      elContactInputNumber.value = contacts[index].number;
      elContactInputRelationship.value = contacts[index].relationship;

      isEditing = true; // This means "Pressed edit button"
      indexEditingContact = index; // Index of editing element of contacts array

    })

  });
}

// Clear inputs, clear message contents and remove wrong input classes.
const clearInputs = () => {
  elContactInputName.value = '';
  elContactInputSurname.value = '';
  elContactInputNumber.value = '';
  elContactInputRelationship.value = '';

  elContactInputName.classList.remove('border-danger');
  elContactInputSurname.classList.remove('border-danger');
  elContactInputNumber.classList.remove('border-danger');
  elContactInputRelationship.classList.remove('border-danger');

  elMessageName.textContent = '';
  elMessageSurname.textContent = '';
  elMessageNumber.textContent = '';
  elMessageRelationship.textContent = '';
}