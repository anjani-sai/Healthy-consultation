const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender =document.registration;
// let jsonData;
// getJson();

function formValidation() {
  if (userName.value.length < 2 || userName.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 charaters");
    userName.focus();
    return false;
  }
  if (email.value.indexOf("@") < 1) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  if (password.value.length < 8 || password.value.length > 15 && password.search(/[0-9]/) < 0 ) {
    alert("Password must contain at least one numeric digit and must be between 8 and 15 characters long.");
    password.focus();
    return false;
  }
  if (phoneNumber.value.length != 10) {
    alert("Phone number must be 10 characters long number");
    phoneNumber.focus();
    return false;
  }
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  window.location.href = window.location.origin+'/index.html'

  // dict = {
  //   "username": userName.value,
  //   "password": password.value,
  //   "email": email.value,
  //   "pno": phoneNumber.value,
  //   "gender": gender.gender.value
  // }
  // postJson(dict);
 
 // if (language.value === "") {
 //   alert("Please select your language!")
 //   return false;
 // }

//  if (!zipcode.value.match(/^[0-9]{6}$/)) {
//    alert("Zip code must be 6 characters long number!");
//    zipcode.focus();
//    return false;
//  }
//  return true;
}

// function getJson() {
//   $.ajax({
//       url: "json/login.json",
//       success: function (result) {
//           jsonData = result;
//       }
//   });
// }

// function postJson(dict) {
//   $.ajax({
//       url: "json/login.json",
//       dataType: "json",
//       contentType: "application/json",
//       type: "POST",
//       data: JSON.stringify(dict),
//       success: function (result) {
//           console.log("result",result);
//           window.location.replace("index.html")
//       },
//       error: function (er) {
//         console.log(er)
//       }
//   });
// }

