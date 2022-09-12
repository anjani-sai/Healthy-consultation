let jsonData;
$(document).ready(function () {
    getJson();
});

function getJson() {
    $.ajax({
        url: "json/login.json",
        success: function (result) {
            jsonData = result;
        }
    });
}

$("#loginForm").submit(function (e) {
    e.preventDefault();
    let username = $("#username").val();
    let password = $("#password").val();
    let validation = jsonData.find((ele) => ele.username === username);
    if(validation){
        if(validation['password'] === password){
            window.location.replace("consult.html")
        }
        else{
            alert("wrong Password")
        }
    }
    else
    alert("Invalid user")
});