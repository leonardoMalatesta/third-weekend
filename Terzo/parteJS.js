function checkLastName() {
    if (document.registration.lastname.value == "") {
        alert("Insert Last Name");
        return false;
    }
    return true;
}

function checkName() {
    if (document.registration.name.value == "") {
        alert("Insert Name");
        return false;
    }
    return true;
}

function checkID() {
    if (isNaN(document.registration.matricola.value)) {
        alert("Invalid Number");
        return false;
    }
    return true;
}

function checkRegion() {
    if (document.registration.region.value == "none") {
        alert("Selezionare una regione");
        return false;
    }
    return true;
}

function checkContact() {
    if ((document.registration.email.value == "") && (document.registration.tel.value == "")) {
        alert("Insert E-mail or Telephone number");
        return false;
    }
    return true;
}

function checkAll() {
    checkLastName();
    checkName();
    checkID();
    checkRegion();
    checkContact();
}