function validate() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let username = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let website = document.getElementById("web").value;
  let comp = document.getElementById("company").value;

  let error = false;
  var regEx = /^[0-9a-zA-Z]*$/;
  var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  //   const newUrl = new URL(string);

  if (firstName.length >= 3 && firstName.match(regEx)) {
    console.log(firstName);
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    error = true;
  }

  if (lastName.length >= 3 && lastName.match(regEx)) {
    console.log(lastName);
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    error = true;
  }

  if (username && username.includes(".")) {
    document.getElementById("userName-invalid").style.display = "none";
  } else {
    document.getElementById("userName-invalid").style.display = "block";
    error = true;
  }
  // console.log(email)

  if (
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length - 3 &&
    email.indexOf("@") !== 0
  ) {
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    error = true;
  }

  if (address.length >= 3) {
    console.log(address);
    document.getElementById("address-invalid").style.display = "none";
  } else {
    document.getElementById("address-invalid").style.display = "block";
    error = true;
  }

  if (phone && phone.match(phoneno)) {
    console.log(phone);
    document.getElementById("phone-invalid").style.display = "none";
  } else {
    document.getElementById("phone-invalid").style.display = "block";
    error = true;
  }

  if (website) {
    console.log(website);
    document.getElementById("web-invalid").style.display = "none";
  } else {
    document.getElementById("web-invalid").style.display = "block";
    error = true;
  }
  if (comp) {
    console.log(comp);
    document.getElementById("company-invalid").style.display = "none";
  } else {
    document.getElementById("company-invalid").style.display = "block";
    error = true;
  }

  var url = "https://jsonplaceholder.typicode.com/users";

  // })
  if (!error) {
    //  creating table row and table data
    let tableRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    tableData1.setAttribute("id", "Srn");
    let tableData2 = document.createElement("td");
    tableData2.setAttribute("id", "displayName");
    let tableData3 = document.createElement("td");
    tableData3.setAttribute("id", "displayUser");
    let tableData4 = document.createElement("td");
    tableData4.setAttribute("id", "displayEmail");
    let tableData5 = document.createElement("td");
    tableData5.setAttribute("id", "displayAddres");
    let tableData6 = document.createElement("td");
    tableData6.setAttribute("id", "displayPhone");
    let tableData7 = document.createElement("td");
    tableData7.setAttribute("id", "displayWeb");
    let tableData8 = document.createElement("td");
    tableData8.setAttribute("id", "displayComp");

    tableRow.append(
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      tableData6,
      tableData7,
      tableData8
    );

   
    let mainTable = document.getElementById("dataTable");
    mainTable.appendChild(tableRow);


    document.getElementById("Srn").textContent = 11;
    document.getElementById(
      "displayName"
    ).textContent = `${firstName} ${lastName}`;
    document.getElementById("displayUser").textContent = username;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayAddres").textContent = address;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayWeb").textContent = website;
    document.getElementById("displayComp").textContent = comp;

   
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let tableData = "";
        data.map((values) => {
          tableData += `<tr>
          <td >${values.id}</td>
          <td >${values.name}</td>
          <td >${values.username}</td>
          <td >${values.email}</td>
          <td> 
          city: ${values.address.city}  
          street: ${values.address.street}
          suite: ${values.address.suite}
          zipcode: ${values.address.zipcode}
        </td>
          <td >${values.phone}</td>
          <td >${values.website}</td>
          <td>
         bs: ${values.company.bs}
         catchPhrase: ${values.company.catchPhrase}
         name: ${values.company.name}
            </td>
          </tr>`;
        });
        document.getElementById("tableBody").innerHTML = tableData;

      });
  }
  // else{
      //   <td >${values.id}</td>
            //   <td >${values.name}</td>
            //   <td >${values.username}</td>
            //   <td >${values.email}</td>
            //   <td> ${JSON.stringify(values.address)} <td/>
            //   <td>${values.phone}</td>
            //   <td >${values.website}</td>
            //   <td>${JSON.stringify(values.company)}</td>
  //     alert('data not found')
  // }
//   resetValidateField();
}

const resetValidateField = () => {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("web").value = "";
  document.getElementById("company").value = "";
};
